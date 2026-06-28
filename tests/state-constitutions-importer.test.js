const test = require('node:test');
const assert = require('node:assert/strict');

const { parseArticles } = require('../scripts/import-state-constitutions-from-md.js');

test('parseArticles includes content before the first article heading', () => {
  const markdown = `# Kentucky

Preamble
We the people ordain this constitution.

SECTION 1
Rights of life.

SCHEDULE.
Section 1. Transition.
This is the transitional schedule text.
`;

  const articles = parseArticles(markdown);

  assert.equal(articles.length, 2);
  assert.equal(articles[0].title, 'Full Text');
  assert.equal(articles[0].sections.length, 1);
  assert.match(articles[0].sections[0].text, /Rights of life/);
  assert.equal(articles[1].title, 'SCHEDULE');
});
