import test from 'node:test';
import assert from 'node:assert/strict';
import worker from '../services/www-redirect/src/index.mjs';

test('www redirects permanently to HTTPS apex with the same path and query', () => {
  const response = worker.fetch(new Request('http://www.ticri.org/cases/opinions/brown-v-board-of-education-1954/?q=free%20speech&source=link'));
  assert.equal(response.status, 301);
  assert.equal(response.headers.get('location'), 'https://ticri.org/cases/opinions/brown-v-board-of-education-1954/?q=free%20speech&source=link');
  assert.equal(response.body, null);
});

test('form requests retain their method and body through a 308 redirect', () => {
  const response = worker.fetch(new Request('https://www.ticri.org/api/contact', { method: 'POST', body: 'message=example' }));
  assert.equal(response.status, 308);
  assert.equal(response.headers.get('location'), 'https://ticri.org/api/contact');
});

test('non-www hosts cannot loop or become an arbitrary redirect destination', () => {
  for (const host of ['ticri.org', 'www.ticri.org.example.com', 'example.com']) {
    const response = worker.fetch(new Request(`https://${host}/`));
    assert.equal(response.status, 404);
    assert.equal(response.headers.get('location'), null);
  }
});
