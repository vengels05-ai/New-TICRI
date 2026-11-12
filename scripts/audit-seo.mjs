import fs from 'node:fs';
import path from 'node:path';

// Inspect the actual HTML delivered to crawlers, rather than just source exports.
const outputDir = path.resolve(process.argv[2] || 'out');
const origin = 'https://ticri.org';
const errors = [];
const pages = [];
const decode = value => value.replace(/&(?:amp|quot|apos|lt|gt|#(\d+)|#x([a-f\d]+));/gi, (entity, decimal, hex) => {
  if (decimal || hex) return String.fromCodePoint(parseInt(decimal || hex, hex ? 16 : 10));
  return { '&amp;': '&', '&quot;': '"', '&apos;': "'", '&lt;': '<', '&gt;': '>' }[entity.toLowerCase()];
});
const attributes = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, key, value]) => [key, decode(value)]));
const check = (condition, message) => { if (!condition) errors.push(message); };

function visit(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) visit(file);
    else if (entry.name === 'index.html') {
      const relative = path.relative(outputDir, directory).split(path.sep).join('/');
      if (relative === '404' || relative === '_not-found') continue;
      const route = relative ? `/${relative}/` : '/';
      const html = fs.readFileSync(file, 'utf8');
      const tags = [...html.matchAll(/<meta\b[^>]*>/g)].map(([tag]) => attributes(tag));
      const meta = key => tags.find(tag => tag.name === key || tag.property === key)?.content;
      const title = decode(html.match(/<title>([\s\S]*?)<\/title>/)?.[1] || '');
      const canonicals = [...html.matchAll(/<link\b[^>]*>/g)].map(([tag]) => attributes(tag)).filter(tag => tag.rel === 'canonical');
      const indexable = !meta('robots')?.split(/[,\s]+/).includes('noindex');
      const url = `${origin}${route}`;
      const description = meta('description');

      check(title.length > 0, `${route}: missing title`);
      check(description?.length >= 40, `${route}: missing or unhelpfully short description`);
      check(canonicals.length === 1 && canonicals[0].href === url, `${route}: expected exactly one canonical pointing to ${url}`);
      check(meta('og:title') === title && meta('twitter:title') === title, `${route}: social titles differ from page title`);
      check(meta('og:description') === description && meta('twitter:description') === description, `${route}: social descriptions differ from page description`);
      check(meta('og:url') === url, `${route}: incorrect social URL`);
      check(Boolean(meta('og:image')) && Boolean(meta('twitter:image')), `${route}: missing sharing image`);
      if (indexable) check((html.match(/<h1\b/g) || []).length === 1, `${route}: expected one main heading in the exported HTML`);

      for (const [, payload] of html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
        try { JSON.parse(payload); } catch { errors.push(`${route}: invalid JSON-LD`); }
      }

      if (/^\/cases\/opinions\/[^/]+\/$/.test(route)) {
        const texts = [...html.matchAll(/<div\b([^>]*\bdata-opinion-text[^>]*)>([\s\S]*?)<\/div>/g)];
        let totalChars = 0;
        for (const [, tag, content] of texts) {
          const actualLength = decode(content).length;
          totalChars += actualLength;
          check(actualLength === Number(attributes(tag)['data-source-length']), `${route}: opinion text was clipped in the exported HTML`);
        }
        check(totalChars >= 2000, `${route}: missing substantive opinion text in the initial HTML`);
        check(html.includes('BreadcrumbList') && html.includes('https://www.courtlistener.com/opinion/'), `${route}: missing breadcrumbs or original source link`);
      }

      for (const [tag] of html.matchAll(/<a\b[^>]*>/g)) {
        const href = attributes(tag).href;
        if (!href?.startsWith('/') || href.startsWith('//')) continue;
        const pathname = decodeURIComponent(new URL(href, origin).pathname);
        const target = path.join(outputDir, pathname);
        const legacyOpinion = /^\/cases\/opinion\/[^/]+\/?$/.test(pathname);
        check(legacyOpinion || fs.existsSync(target) && (fs.statSync(target).isFile() || fs.existsSync(path.join(target, 'index.html'))), `${route}: broken internal link ${href}`);
      }

      if (route === '/') {
        const graph = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].flatMap(([, payload]) => {
          try { return JSON.parse(payload)['@graph'] || []; } catch { return []; }
        });
        check(graph.some(node => node['@type'] === 'WebSite' && node.url === `${origin}/`), 'Home: missing WebSite structured data');
        check(graph.some(node => node['@type'] === 'Organization'), 'Home: missing Organization structured data');
      }
      pages.push({ route, url, title, description, indexable });
    }
  }
}

visit(outputDir);
const indexable = pages.filter(page => page.indexable);
for (const field of ['title', 'description']) {
  const seen = new Map();
  for (const page of indexable) {
    check(!seen.has(page[field]), `${page.route}: duplicate ${field} with ${seen.get(page[field])}`);
    seen.set(page[field], page.route);
  }
}

const sitemapFile = path.join(outputDir, 'sitemap.xml');
const robotsFile = path.join(outputDir, 'robots.txt');
check(fs.existsSync(sitemapFile), 'Missing sitemap.xml');
check(fs.existsSync(robotsFile), 'Missing robots.txt');
if (fs.existsSync(sitemapFile)) {
  const urls = [...fs.readFileSync(sitemapFile, 'utf8').matchAll(/<loc>(.*?)<\/loc>/g)].map(([, url]) => decode(url));
  const expected = new Set(indexable.map(page => page.url));
  check(urls.length === new Set(urls).size, 'Sitemap contains duplicate URLs');
  for (const url of urls) check(expected.has(url), `Sitemap lists a missing or non-indexable URL: ${url}`);
  for (const url of expected) check(urls.includes(url), `Sitemap missing ${url}`);
}
if (fs.existsSync(robotsFile)) {
  const robots = fs.readFileSync(robotsFile, 'utf8');
  check(robots.includes(`Sitemap: ${origin}/sitemap.xml`), 'robots.txt missing sitemap declaration');
  check(!/^Disallow:\s*\/\s*$/m.test(robots), 'robots.txt blocks the whole site');
}

if (errors.length) {
  console.error([...new Set(errors)].join('\n'));
  process.exitCode = 1;
} else {
  console.log(`SEO export verified: ${pages.length} pages; ${indexable.length} indexable pages with unique titles/descriptions and sitemap entries; ${pages.length - indexable.length} excluded readers/placeholders. Canonicals, social metadata, headings, structured data, and internal links passed.`);
}
