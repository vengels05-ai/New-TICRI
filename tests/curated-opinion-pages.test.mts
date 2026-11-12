import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { getCuratedOpinion, getCuratedOpinionEntries, opinionPath } from '../lib/curatedOpinions.ts';

test('only verified substantive records are published as individual opinion pages', () => {
  const mapping = JSON.parse(fs.readFileSync('data/scotus/curated-mapping.json', 'utf8'));
  const published = getCuratedOpinionEntries();
  assert.equal(published.length, Object.values(mapping).filter((entry: unknown) => (entry as { id: number | null }).id !== null).length);
  assert.ok(published.length > 0);
  assert.equal(new Set(published.map(entry => opinionPath(entry.slug))).size, published.length);
  for (const entry of published) {
    const record = getCuratedOpinion(entry.slug)!;
    assert.equal(record.detail.id, mapping[entry.slug].id);
    assert.ok(record.opinions.every(opinion => !/<\/?(?:script|opinion|p|div)\b/i.test(opinion.text)), entry.slug);
    assert.ok(record.opinions.reduce((length, opinion) => length + opinion.text.length, 0) >= 2000, entry.slug);
  }
});

test('unverified, unknown, and traversal slugs do not resolve to corpus files', () => {
  for (const slug of ['marbury-v-madison-1803', 'missing-case', '../cases/105221', '__proto__', 'constructor']) {
    assert.equal(getCuratedOpinion(slug), null, slug);
  }
});
