import { spawnSync } from 'node:child_process';

function requireDatabaseUrl() {
  const databaseUrl = process.env.DATABASE_URL?.trim();
  if (!databaseUrl) {
    throw new Error('Missing required environment variable: DATABASE_URL');
  }

  return databaseUrl;
}

function runPsql(args) {
  const databaseUrl = requireDatabaseUrl();
  const result = spawnSync('psql', [...args, databaseUrl], {
    stdio: ['ignore', 'pipe', 'pipe'],
    encoding: 'utf8',
  });

  if (result.error) {
    throw new Error(`Failed to execute psql: ${result.error.message}`);
  }

  if (result.status !== 0) {
    throw new Error(result.stderr.trim() || 'psql command failed');
  }

  return result.stdout;
}

export function execSql(sql) {
  return runPsql(['-v', 'ON_ERROR_STOP=1', '-q', '-t', '-A', '-c', sql]);
}

export function execFile(filePath) {
  runPsql(['-v', 'ON_ERROR_STOP=1', '-q', '-1', '-f', filePath]);
}
