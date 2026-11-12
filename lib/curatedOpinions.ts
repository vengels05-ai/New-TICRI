import fs from 'node:fs';
import path from 'node:path';
import { curatedOpinionSources } from './curatedOpinionSources.ts';
import { cleanDisplayText } from './textClean.ts';

export interface CuratedOpinionEntry {
  id: number | null;
  name: string;
  year: number;
  category: string;
  slug: string;
}

const mapping = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data/scotus/curated-mapping.json'), 'utf8')) as Record<string, CuratedOpinionEntry>;

export function getCuratedOpinion(slug: string) {
  // Only publish explicitly verified records, never arbitrary corpus paths.
  if (!Object.hasOwn(mapping, slug)) return null;
  const entry = mapping[slug];
  if (entry.id === null) return null;
  const loadSource = curatedOpinionSources[entry.id];
  if (!loadSource) return null;
  const detail = loadSource();
  if (!detail || detail.id !== entry.id || !detail.dateFiled || Math.abs(Number(detail.dateFiled.slice(0, 4)) - entry.year) > 1) return null;
  const opinions = detail.opinions.map(opinion => ({
    ...opinion,
    // Some archived excerpts end inside an HTML tag. Remove that markup
    // fragment while retaining all available plain text.
    text: cleanDisplayText(opinion.text).replace(/<\/?[a-z][^>]*$/i, '').trimEnd(),
  })).filter(opinion => opinion.text.length > 0);
  if (opinions.reduce((length, opinion) => length + opinion.text.length, 0) < 2000) return null;
  return { entry, detail, opinions };
}

export function getCuratedOpinionEntries(): CuratedOpinionEntry[] {
  return Object.values(mapping).filter(entry => getCuratedOpinion(entry.slug) !== null).sort((a, b) => a.year - b.year || a.name.localeCompare(b.name));
}

export function opinionPath(slug: string): string {
  return `/cases/opinions/${slug}/`;
}

export function opinionDescription(entry: CuratedOpinionEntry): string {
  return `Read available opinion text for ${entry.name} (${entry.year}), with the decision date, source links, and TICRI’s plain-English case explainer.`;
}
