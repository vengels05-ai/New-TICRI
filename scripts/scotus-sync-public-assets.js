#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SOURCE_DIR = path.join(ROOT, 'data', 'scotus');
const TARGET_DIR = path.join(ROOT, 'public', 'scotus');
const SEARCH_CHUNKS_SOURCE_DIR = path.join(SOURCE_DIR, 'search-chunks');
const SEARCH_CHUNKS_TARGET_DIR = path.join(TARGET_DIR, 'search-chunks');

const FILES = [
  'search-manifest.json',
  'bucket-rules.json',
  'cases-by-year.json',
];

const STALE_FILES = [
  'search-index.json',
];

function copyDirectoryContents(sourceDir, targetDir) {
  if (!fs.existsSync(sourceDir)) {
    console.warn(`Skipping missing source directory: ${sourceDir}`);
    return;
  }

  fs.mkdirSync(targetDir, { recursive: true });
  const entries = fs.readdirSync(sourceDir);
  for (const entry of entries) {
    const sourcePath = path.join(sourceDir, entry);
    const targetPath = path.join(targetDir, entry);
    if (fs.statSync(sourcePath).isFile()) {
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`Copied search chunk -> public/scotus/search-chunks/${entry}`);
    }
  }
}

fs.mkdirSync(TARGET_DIR, { recursive: true });

for (const staleFile of STALE_FILES) {
  const stalePath = path.join(TARGET_DIR, staleFile);
  if (fs.existsSync(stalePath)) {
    fs.unlinkSync(stalePath);
    console.log(`Removed stale file public/scotus/${staleFile}`);
  }
}

if (fs.existsSync(SEARCH_CHUNKS_TARGET_DIR)) {
  fs.rmSync(SEARCH_CHUNKS_TARGET_DIR, { recursive: true, force: true });
}

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

copyDirectoryContents(SEARCH_CHUNKS_SOURCE_DIR, SEARCH_CHUNKS_TARGET_DIR);
