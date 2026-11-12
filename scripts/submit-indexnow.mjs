import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const origin = 'https://ticri.org';
const keyLocation = `${origin}/indexnow-key.txt`;
const key = fs.readFileSync(path.join(root, 'public/indexnow-key.txt'), 'utf8').trim();
const submit = process.argv.includes('--submit');

if (!/^[a-zA-Z0-9-]{8,128}$/.test(key)) throw new Error('Invalid IndexNow verification file.');

const keyResponse = await fetch(keyLocation, { signal: AbortSignal.timeout(30_000) });
if (!keyResponse.ok || (await keyResponse.text()).trim() !== key) {
  throw new Error('Deploy the public IndexNow verification file before submitting URLs.');
}

const sitemap = await fetch(`${origin}/sitemap.xml`, { signal: AbortSignal.timeout(30_000) });
if (!sitemap.ok) throw new Error(`Could not fetch the live sitemap (${sitemap.status}).`);
const xml = await sitemap.text();
const urls = [...new Set([...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(([, url]) => url.replaceAll('&amp;', '&')))];
if (urls.length === 0 || urls.length > 10_000) throw new Error('Expected 1–10,000 URLs in the live sitemap.');
for (const value of urls) {
  const url = new URL(value);
  if (url.origin !== origin || url.search || url.hash) throw new Error(`Unexpected sitemap URL: ${value}`);
}

if (!submit) {
  console.log(`Ready to notify IndexNow about ${urls.length} canonical URLs from the live sitemap. Run with --submit to send them.`);
} else {
  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: 'ticri.org', key, keyLocation, urlList: urls }),
    signal: AbortSignal.timeout(30_000),
  });
  if (![200, 202].includes(response.status)) {
    throw new Error(`IndexNow rejected the request (${response.status}): ${(await response.text()).slice(0, 500)}`);
  }
  console.log(`IndexNow accepted ${urls.length} URLs (HTTP ${response.status})${response.status === 202 ? '; key verification is pending' : ''}. Acceptance is not a guarantee of indexing.`);
}
