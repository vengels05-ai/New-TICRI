import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFile, execSql } from './psql.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const migrationsDir = path.resolve(__dirname, '../../db/migrations');

function listMigrationFiles() {
  if (!fs.existsSync(migrationsDir)) {
    throw new Error(`Migrations directory not found: ${migrationsDir}`);
  }

  return fs
    .readdirSync(migrationsDir)
    .filter((name) => name.endsWith('.sql'))
    .sort();
}

function ensureMigrationsTable() {
  execSql(`
    CREATE TABLE IF NOT EXISTS schema_migrations (
      filename TEXT PRIMARY KEY,
      applied_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
  `);
}

function getAppliedMigrations() {
  const output = execSql('SELECT filename FROM schema_migrations ORDER BY filename;').trim();
  if (!output) {
    return new Set();
  }

  return new Set(output.split('\n').map((value) => value.trim()).filter(Boolean));
}

function markMigrationApplied(filename) {
  const escaped = filename.replace(/'/g, "''");
  execSql(`INSERT INTO schema_migrations (filename) VALUES ('${escaped}') ON CONFLICT (filename) DO NOTHING;`);
}

function main() {
  ensureMigrationsTable();

  const files = listMigrationFiles();
  const applied = getAppliedMigrations();
  const pending = files.filter((file) => !applied.has(file));

  if (pending.length === 0) {
    console.log('No pending migrations.');
    return;
  }

  for (const file of pending) {
    const fullPath = path.join(migrationsDir, file);
    console.log(`Applying migration: ${file}`);
    execFile(fullPath);
    markMigrationApplied(file);
  }

  console.log(`Applied ${pending.length} migration(s).`);
}

main();
