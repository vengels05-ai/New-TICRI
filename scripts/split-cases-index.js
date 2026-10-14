#!/usr/bin/env node
// scripts/split-cases-index.js
// Split the 157MB cases-index.json into smaller chunks for Next.js
// Run: node scripts/split-cases-index.js

const fs = require('fs');
const path = require('path');

const INPUT  = path.join(__dirname, '../data/scotus/cases-index.json');
const OUT_DIR = path.join(__dirname, '../data/scotus/chunks');
const CHUNK_SIZE = 5000; // cases per chunk

fs.mkdirSync(OUT_DIR, { recursive: true });

console.log('Reading cases-index.json...');
const cases = JSON.parse(fs.readFileSync(INPUT, 'utf-8'));
console.log(`Total cases: ${cases.length.toLocaleString()}`);

// Write chunks
const chunks = Math.ceil(cases.length / CHUNK_SIZE);
for (let i = 0; i < chunks; i++) {
  const chunk = cases.slice(i * CHUNK_SIZE, (i + 1) * CHUNK_SIZE);
  const outPath = path.join(OUT_DIR, `chunk-${String(i).padStart(4, '0')}.json`);
  fs.writeFileSync(outPath, JSON.stringify(chunk));
  console.log(`Wrote chunk ${i + 1}/${chunks}: ${chunk.length} cases`);
}

// Write a manifest
const manifest = {
  totalCases: cases.length,
  chunks: chunks,
  chunkSize: CHUNK_SIZE,
  generated: new Date().toISOString(),
};
fs.writeFileSync(path.join(OUT_DIR, 'manifest.json'), JSON.stringify(manifest, null, 2));

// Write a lightweight search index (name + id + year only) for client-side search
console.log('Writing lightweight search index...');
const searchIndex = cases.map(c => ({
  id: c.id,
  n: c.caseName,         // name
  y: c.year,             // year
  v: c.votesMajority !== null ? `${c.votesMajority}-${c.votesMinority ?? 0}` : null,
  d: c.direction ? c.direction[0] : null,  // C/L/U
  c: c.citationCount,    // citations
}));
fs.writeFileSync(
  path.join(path.join(__dirname, '../data/scotus'), 'search-index.json'),
  JSON.stringify(searchIndex)
);

console.log('\nDone.');
console.log(`Chunks: ${OUT_DIR}`);
console.log(`Search index: data/scotus/search-index.json`);
console.log('\nNext steps:');
console.log('1. Update lib/scotus.ts to use search-index.json for client search');
console.log('2. Remove cases-index.json from git (add to .gitignore)');
console.log('3. Push to GitHub to trigger Cloudflare rebuild');
