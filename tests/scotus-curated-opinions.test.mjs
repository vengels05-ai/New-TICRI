import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const mapping = JSON.parse(fs.readFileSync(path.join(root, 'data/scotus/curated-mapping.json'), 'utf8'));

test('curated links select merits opinions rather than procedural orders or comparison files', () => {
  const expected = {
    'brown-v-board-of-education-1954': 105221,
    'roe-v-wade-1973': 108713,
    'prince-v-massachusetts-1944': 103933,
    'korematsu-v-united-states-1944': 104040,
    'regents-v-bakke-1978': 109930,
    'gideon-v-wainwright-1963': 106545,
    'nfib-v-sebelius-2012': 809122,
    'west-virginia-v-epa-2022': 6620345,
    'united-states-v-carolene-products-1938': 103017,
  };
  for (const [slug, id] of Object.entries(expected)) {
    assert.equal(mapping[slug].id, id, slug);
  }
});

test('every verified curated opinion has substantive text and a working reader URL', () => {
  for (const entry of Object.values(mapping)) {
    const source = fs.readFileSync(path.join(root, 'app/cases', entry.category, entry.slug, 'page.tsx'), 'utf8');
    assert.doesNotMatch(source, /href="\/cases\/opinion\/\d+/, entry.slug);
    if (entry.id === null) continue;
    assert.ok(source.includes(`href="/cases/opinion/?id=${entry.id}"`), entry.slug);
    const detail = JSON.parse(fs.readFileSync(path.join(root, `data/scotus/cases/${entry.id}.json`), 'utf8'));
    const text = detail.opinions.map(opinion => opinion.text || '').join('').replace(/<[^>]*>/g, '');
    assert.ok(text.trim().length > 2000, `${entry.slug}: substantive opinion text`);
    assert.ok(Math.abs(Number(detail.dateFiled.slice(0, 4)) - entry.year) <= 1, entry.slug);
  }
});
