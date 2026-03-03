import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFile } from './psql.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const seedsDir = path.resolve(__dirname, '../../db/seeds');
const migrateScript = path.resolve(__dirname, './migrate.mjs');

function listSeedFiles() {
  if (!fs.existsSync(seedsDir)) {
    return [];
  }

  return fs
    .readdirSync(seedsDir)
    .filter((name) => name.endsWith('.sql'))
    .sort();
}

async function main() {
  await import(migrateScript);

  const seedFiles = listSeedFiles();
  if (seedFiles.length === 0) {
    console.log('No seed files found.');
    return;
  }

  for (const file of seedFiles) {
    const fullPath = path.join(seedsDir, file);
    console.log(`Applying seed: ${file}`);
    execFile(fullPath);
  }

  console.log(`Applied ${seedFiles.length} seed file(s).`);
}

main();
