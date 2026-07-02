#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SOURCE_DIR = path.join(ROOT, 'data', 'scotus');
const TARGET_DIR = path.join(ROOT, 'public', 'scotus');

const FILES = [
  'search-index.json',
  'bucket-rules.json',
  'cases-by-year.json',
];

fs.mkdirSync(TARGET_DIR, { recursive: true });

for (const fileName of FILES) {
  const sourcePath = path.join(SOURCE_DIR, fileName);
  const targetPath = path.join(TARGET_DIR, fileName);

  if (!fs.existsSync(sourcePath)) {
    console.warn(`Skipping missing source file: ${sourcePath}`);
    continue;
  }

  fs.copyFileSync(sourcePath, targetPath);
  console.log(`Copied ${fileName} -> public/scotus/${fileName}`);
}
