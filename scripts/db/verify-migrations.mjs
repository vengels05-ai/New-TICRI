import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '../..');
const composeFile = path.resolve(__dirname, './docker-compose.verify.yml');
const verifyDatabaseUrl = 'postgres://postgres:postgres@127.0.0.1:55432/ticri_verify';
const expectedMigrationCount = 2;
const expectedTables = [
  'schema_migrations',
  'members',
  'bills',
  'bill_actions',
  'bill_members',
];
const expectedIndexes = [
  'members_full_name_trgm_idx',
  'members_normalized_name_idx',
  'bills_bill_lookup_idx',
  'bills_introduced_date_idx',
  'bills_latest_action_date_idx',
  'bills_sponsor_member_id_idx',
  'bills_search_vector_idx',
  'bills_bill_id_display_trgm_idx',
  'bills_latest_action_text_trgm_idx',
  'bill_actions_bill_latest_idx',
  'bill_actions_action_date_idx',
  'bill_actions_search_vector_idx',
  'bill_actions_action_text_trgm_idx',
  'bill_actions_idempotent_upsert_idx',
  'bill_members_member_role_idx',
  'bill_members_bill_id_idx',
];

async function main() {
  const composeCommand = getComposeCommand();
  const psqlAvailable = commandExists('psql');
  const localDatabaseUrl = process.env.DATABASE_URL;

  if (!composeCommand && !localDatabaseUrl) {
    throw new Error(
      'Migration verification requires either Docker Compose or DATABASE_URL. Install docker/docker-compose, or set DATABASE_URL plus DB_VERIFY_ALLOW_RESET=true for a dedicated local verification database.',
    );
  }

  if (!psqlAvailable) {
    throw new Error('Migration verification requires psql on PATH because the migration runners execute psql directly.');
  }

  if (composeCommand) {
    await verifyWithDocker(composeCommand);
    return;
  }

  await verifyWithLocalDatabase(localDatabaseUrl);
}

async function verifyWithDocker(composeCommand) {
  const env = {
    ...process.env,
    DATABASE_URL: verifyDatabaseUrl,
  };

  run(composeCommand.bin, [...composeCommand.args, '-f', composeFile, 'down', '-v'], { allowFailure: true });
  run(composeCommand.bin, [...composeCommand.args, '-f', composeFile, 'up', '-d'], { env });

  waitForPostgres(env, composeCommand);
  runVerification(env);

  run(composeCommand.bin, [...composeCommand.args, '-f', composeFile, 'down', '-v'], { env, allowFailure: true });
}

async function verifyWithLocalDatabase(databaseUrl) {
  if (String(process.env.DB_VERIFY_ALLOW_RESET ?? '').toLowerCase() !== 'true') {
    throw new Error('Local DATABASE_URL verification requires DB_VERIFY_ALLOW_RESET=true because the verifier resets the public schema.');
  }

  const env = {
    ...process.env,
    DATABASE_URL: databaseUrl,
  };

  resetPublicSchema(env);
  runVerification(env);
}

function runVerification(env) {
  const first = run('node', ['scripts/db/migrate.mjs'], { env });
  const second = run('node', ['scripts/db/migrate.mjs'], { env });

  if (!second.stdout.includes('No pending migrations.')) {
    throw new Error(`Second migration run was not idempotent. Output: ${second.stdout || '(empty)'}`);
  }

  const smokeQuery = `
    SELECT json_build_object(
      'table_count', (
        SELECT count(*)
        FROM information_schema.tables
        WHERE table_schema = 'public'
          AND table_name = ANY (ARRAY['${expectedTables.join("','")}'])
      ),
      'migration_count', (SELECT count(*) FROM schema_migrations),
      'index_count', (
        SELECT count(*)
        FROM pg_indexes
        WHERE schemaname = 'public'
          AND indexname = ANY (ARRAY['${expectedIndexes.join("','")}'])
      )
    )::text;
  `;

  const smoke = run('psql', ['-v', 'ON_ERROR_STOP=1', '-q', '-t', '-A', '-c', smokeQuery, env.DATABASE_URL], { env });
  const payload = JSON.parse(smoke.stdout.trim());

  if (payload.table_count !== expectedTables.length) {
    throw new Error(`Expected ${expectedTables.length} tables, found ${payload.table_count}.`);
  }

  if (payload.migration_count !== expectedMigrationCount) {
    throw new Error(`Expected ${expectedMigrationCount} applied migrations, found ${payload.migration_count}.`);
  }

  if (payload.index_count !== expectedIndexes.length) {
    throw new Error(`Expected ${expectedIndexes.length} indexes, found ${payload.index_count}.`);
  }

  const indexCheck = run('node', ['scripts/db/verify-congress-indexes.mjs'], { env });

  console.log(JSON.stringify({
    mode: env.DATABASE_URL === verifyDatabaseUrl ? 'docker-compose' : 'local-database',
    firstRun: first.stdout.trim(),
    secondRun: second.stdout.trim(),
    smoke: payload,
    indexCheck: JSON.parse(indexCheck.stdout.trim()),
  }, null, 2));
}

function resetPublicSchema(env) {
  run('psql', [
    '-v', 'ON_ERROR_STOP=1',
    '-q',
    '-c',
    'DROP SCHEMA IF EXISTS public CASCADE; CREATE SCHEMA public;',
    env.DATABASE_URL,
  ], { env });
}

function waitForPostgres(env, composeCommand) {
  for (let attempt = 0; attempt < 30; attempt += 1) {
    const result = spawnSync(
      composeCommand.bin,
      [...composeCommand.args, '-f', composeFile, 'exec', '-T', 'postgres', 'pg_isready', '-U', 'postgres', '-d', 'ticri_verify'],
      {
        cwd: repoRoot,
        env,
        encoding: 'utf8',
      },
    );

    if (result.status === 0) {
      return;
    }

    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 1000);
  }

  throw new Error('Timed out waiting for verification Postgres container to become ready.');
}

function getComposeCommand() {
  if (commandExists('docker')) {
    const result = spawnSync('docker', ['compose', 'version'], {
      cwd: repoRoot,
      encoding: 'utf8',
    });
    if (result.status === 0) {
      return { bin: 'docker', args: ['compose'] };
    }
  }

  if (commandExists('docker-compose')) {
    return { bin: 'docker-compose', args: [] };
  }

  return null;
}

function commandExists(command) {
  const result = spawnSync('sh', ['-lc', `command -v ${command}`], {
    cwd: repoRoot,
    encoding: 'utf8',
  });
  return result.status === 0;
}

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: repoRoot,
    env: options.env ?? process.env,
    encoding: 'utf8',
  });

  if (result.error) {
    throw new Error(`Failed to execute ${command}: ${result.error.message}`);
  }

  if (result.status !== 0 && !options.allowFailure) {
    throw new Error((result.stderr || result.stdout || `${command} failed`).trim());
  }

  return result;
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
