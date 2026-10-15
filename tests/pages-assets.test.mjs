import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { validatePagesAssets } from '../scripts/validate-pages-assets.mjs';

function fixture(t) {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'ticri-pages-assets-'));
  t.after(() => fs.rmSync(directory, { recursive: true, force: true }));
  return directory;
}

test('Pages validation accepts nested exports at the file-count and size limits', (t) => {
  const directory = fixture(t);
  fs.mkdirSync(path.join(directory, 'cases'));
  fs.writeFileSync(path.join(directory, 'cases', 'index.html'), 'hello');
  fs.writeFileSync(path.join(directory, 'index.html'), 'hello');
  assert.deepEqual(validatePagesAssets(directory, { maxFiles: 2, maxFileBytes: 5 }), { fileCount: 2, totalBytes: 10 });
});

test('Pages validation rejects too many files before deployment', (t) => {
  const directory = fixture(t);
  fs.writeFileSync(path.join(directory, 'index.html'), 'hello');
  fs.writeFileSync(path.join(directory, 'case.json'), '{}');
  assert.throws(() => validatePagesAssets(directory, { maxFiles: 1 }), /limit of 1 files/);
});

test('Pages validation rejects oversized assets and symlinked corpora', (t) => {
  const directory = fixture(t);
  fs.writeFileSync(path.join(directory, 'case.json'), '123456');
  assert.throws(() => validatePagesAssets(directory, { maxFileBytes: 5 }), /case.json.*file size limit/);
  fs.symlinkSync(directory, path.join(directory, 'cases'));
  assert.throws(() => validatePagesAssets(directory), /symlink: cases/);
});

for (const previousExport of ['symlink', 'directory', 'dangling symlink']) {
  test(`SCOTUS sync removes a stale ${previousExport} without deleting source cases`, (t) => {
    const directory = fixture(t);
    const source = path.join(directory, 'data/scotus');
    const target = path.join(directory, 'public/scotus');
    fs.mkdirSync(path.join(source, 'cases'), { recursive: true });
    fs.mkdirSync(target, { recursive: true });
    fs.mkdirSync(path.join(directory, 'scripts'));
    fs.writeFileSync(path.join(source, 'cases/123.json'), '{"id":123}');
    fs.writeFileSync(path.join(source, 'curated-mapping.json'), '{}');
    const oldCases = path.join(target, 'cases');
    if (previousExport === 'directory') {
      fs.mkdirSync(oldCases);
      fs.writeFileSync(path.join(oldCases, '123.json'), '{}');
    } else {
      fs.symlinkSync(path.join(source, previousExport === 'symlink' ? 'cases' : 'missing'), oldCases);
    }
    const script = path.join(directory, 'scripts/scotus-sync-public-assets.js');
    fs.copyFileSync(new URL('../scripts/scotus-sync-public-assets.js', import.meta.url), script);
    execFileSync(process.execPath, [script], { stdio: 'pipe' });
    assert.throws(() => fs.lstatSync(oldCases), { code: 'ENOENT' });
    assert.equal(fs.readFileSync(path.join(source, 'cases/123.json'), 'utf8'), '{"id":123}');
    assert.equal(fs.readFileSync(path.join(target, 'curated-mapping.json'), 'utf8'), '{}');
  });
}
