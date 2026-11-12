import type { MetadataRoute } from 'next';
import { readdirSync } from 'node:fs';
import path from 'node:path';
import { canonicalUrl, NON_INDEXABLE_PATHS } from '@/lib/seo';
import { usStates } from '@/lib/usStates';
import { getCuratedOpinionEntries, opinionPath } from '@/lib/curatedOpinions';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = new Set<string>();

  // Discover static pages at build time so new educational pages are included.
  function visit(directory: string, segments: string[] = []) {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      if (entry.isDirectory() && !entry.name.startsWith('_') && !entry.name.startsWith('@') && !entry.name.includes('[')) {
        visit(path.join(directory, entry.name), entry.name.startsWith('(') ? segments : [...segments, entry.name]);
      } else if (entry.isFile() && /^page\.(tsx?|jsx?|mdx)$/.test(entry.name)) {
        routes.add(segments.length ? `/${segments.join('/')}/` : '/');
      }
    }
  }

  visit(path.join(process.cwd(), 'app'));
  for (const state of usStates) routes.add(`/state-constitutions/${state.slug}/`);
  for (const opinion of getCuratedOpinionEntries()) routes.add(opinionPath(opinion.slug));

  // Omit lastModified rather than claiming every page changed on each build.
  return [...routes].filter(route => !NON_INDEXABLE_PATHS.has(route)).sort().map(route => ({ url: canonicalUrl(route) }));
}
