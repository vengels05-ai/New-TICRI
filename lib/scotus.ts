import path from 'path';
import fs from 'fs';

const DATA_DIR = path.join(process.cwd(), 'data', 'scotus');

export interface CaseIndex {
  id: number;
  docketId: number;
  caseName: string;
  slug: string;
  docketNumber: string;
  dateFiled: string | null;
  year: number | null;
  scdbId: string;
  direction: string;
  votesMajority: number | null;
  votesMinority: number | null;
  disposition: string;
  citationCount: number;
  hasSyllabus: boolean;
  hasSummary: boolean;
  judges: string;
  bucketSlugs: string[];
}

export interface Opinion {
  id: number;
  type: string;
  typeCode: string;
  perCuriam: boolean;
  author: string;
  joinedBy: string;
  pageCount: number | null;
  textLength: number;
  text: string | null;
}

export interface CaseDetail extends CaseIndex {
  caseNameFull: string;
  dateArgued: string | null;
  dateCertGranted: string | null;
  posture: string;
  syllabus: string | null;
  summary: string | null;
  headnotes: string | null;
  proceduralHistory: string | null;
  attorneys: string | null;
  natureOfSuit: string;
  jurisdictionType: string;
  opinions: Opinion[];
  citations: { clusterId: number; caseName: string; dateFiled: string | null }[];
}

interface CompactSearchEntry {
  id: number;
  n?: string;
  y?: number | null;
  dn?: string | null;
  v?: string | null;
  d?: string | null;
  c?: number;
  k?: string[];
}

interface ScotusBucket {
  slug: string;
  label: string;
  keywords: string[];
}

const BUCKET_RULES_PATH = path.join(DATA_DIR, 'bucket-rules.json');

let scotusBucketsCache: ScotusBucket[] | null = null;

function getScotusBucketRules(): ScotusBucket[] {
  if (scotusBucketsCache) {
    return scotusBucketsCache;
  }

  if (!fs.existsSync(BUCKET_RULES_PATH)) {
    scotusBucketsCache = [];
    return scotusBucketsCache;
  }

  const raw = JSON.parse(fs.readFileSync(BUCKET_RULES_PATH, 'utf-8')) as ScotusBucket[];
  scotusBucketsCache = raw;
  return scotusBucketsCache;
}

function slugifyCaseName(caseName: string): string {
  return caseName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function parseVote(vote: string | null | undefined): { majority: number | null; minority: number | null } {
  if (!vote) {
    return { majority: null, minority: null };
  }

  const [majRaw, minRaw] = vote.split('-');
  const maj = Number.parseInt(majRaw, 10);
  const min = Number.parseInt(minRaw ?? '0', 10);

  return {
    majority: Number.isNaN(maj) ? null : maj,
    minority: Number.isNaN(min) ? null : min,
  };
}

function mapCompactDirection(direction: string | null | undefined): string {
  if (!direction) {
    return '';
  }

  const normalized = direction.trim().toUpperCase();
  if (normalized === 'C') {
    return 'Conservative';
  }

  if (normalized === 'L') {
    return 'Liberal';
  }

  if (normalized === 'U') {
    return 'Unclear';
  }

  return direction;
}

function inferBucketSlugs(caseName: string): string[] {
  const normalized = caseName.toLowerCase();
  return getScotusBucketRules()
    .filter((bucket) => bucket.keywords.some((keyword) => normalized.includes(keyword)))
    .map((bucket) => bucket.slug);
}

function normalizeCompactEntry(entry: CompactSearchEntry): CaseIndex {
  const caseName = entry.n ?? `Case ${entry.id}`;
  const votes = parseVote(entry.v);

  return {
    id: entry.id,
    docketId: 0,
    caseName,
    slug: slugifyCaseName(caseName),
    docketNumber: entry.dn ?? '',
    dateFiled: null,
    year: entry.y ?? null,
    scdbId: '',
    direction: mapCompactDirection(entry.d),
    votesMajority: votes.majority,
    votesMinority: votes.minority,
    disposition: '',
    citationCount: entry.c ?? 0,
    hasSyllabus: false,
    hasSummary: false,
    judges: '',
    bucketSlugs: Array.isArray(entry.k) ? entry.k : inferBucketSlugs(caseName),
  };
}

function normalizeFullEntry(entry: CaseIndex): CaseIndex {
  return {
    ...entry,
    bucketSlugs: Array.isArray(entry.bucketSlugs) ? entry.bucketSlugs : inferBucketSlugs(entry.caseName),
  };
}

let indexCache: CaseIndex[] | null = null;

function loadFullIndexPath(): string {
  return path.join(DATA_DIR, 'cases-index.json');
}

function loadCompactIndexPath(): string {
  return path.join(DATA_DIR, 'search-index.json');
}

export function getCasesIndex(): CaseIndex[] {
  if (indexCache) {
    return indexCache;
  }

  const compactIndexPath = loadCompactIndexPath();
  if (fs.existsSync(compactIndexPath)) {
    const compactData = JSON.parse(fs.readFileSync(compactIndexPath, 'utf-8')) as CompactSearchEntry[];
    indexCache = compactData.map(normalizeCompactEntry);
    return indexCache;
  }

  const fullIndexPath = loadFullIndexPath();
  if (fs.existsSync(fullIndexPath)) {
    const fullData = JSON.parse(fs.readFileSync(fullIndexPath, 'utf-8')) as CaseIndex[];
    indexCache = fullData.map(normalizeFullEntry);
    return indexCache;
  }

  indexCache = [];
  return indexCache;
}

export function getCasesByYear(): Record<number, number> {
  const p = path.join(DATA_DIR, 'cases-by-year.json');
  if (!fs.existsSync(p)) {
    return {};
  }

  return JSON.parse(fs.readFileSync(p, 'utf-8'));
}

export function getCaseDetail(clusterId: number): CaseDetail | null {
  const p = path.join(DATA_DIR, 'cases', `${clusterId}.json`);
  if (!fs.existsSync(p)) {
    return null;
  }

  const detail = JSON.parse(fs.readFileSync(p, 'utf-8')) as CaseDetail;
  return {
    ...detail,
    bucketSlugs: Array.isArray(detail.bucketSlugs) ? detail.bucketSlugs : inferBucketSlugs(detail.caseName),
  };
}

export function getAllCaseIds(): number[] {
  const dir = path.join(DATA_DIR, 'cases');
  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs.readdirSync(dir)
    .filter((f) => f.endsWith('.json'))
    .map((f) => Number.parseInt(f.replace('.json', ''), 10))
    .filter((n) => !Number.isNaN(n));
}

function findBucketByQueryToken(token: string): ScotusBucket | null {
  const normalized = token.toLowerCase();
  const normalizedNoDash = normalized.replace(/-/g, ' ');

  return getScotusBucketRules().find((bucket) => {
    if (bucket.slug === normalized || bucket.label.toLowerCase() === normalizedNoDash) {
      return true;
    }

    return bucket.keywords.some((keyword) => keyword.includes(normalizedNoDash));
  }) ?? null;
}

export function searchCases(query: string, limit = 50): CaseIndex[] {
  const index = getCasesIndex();
  const q = query.toLowerCase().trim();

  if (!q) {
    return index.slice(0, limit);
  }

  const tokens = q.split(/\s+/).filter(Boolean);
  const bucketHits = new Set<string>();
  tokens.forEach((token) => {
    const hit = findBucketByQueryToken(token);
    if (hit) {
      bucketHits.add(hit.slug);
    }
  });

  const results = index.filter((c) => {
    const caseText = `${c.caseName} ${c.docketNumber}`.toLowerCase();
    const directTextMatch = tokens.every((token) => caseText.includes(token));
    if (directTextMatch) {
      return true;
    }

    if (bucketHits.size === 0) {
      return false;
    }

    return c.bucketSlugs.some((slug) => bucketHits.has(slug));
  });

  return results.slice(0, limit);
}

export function getRecentCases(limit = 20): CaseIndex[] {
  const index = getCasesIndex();
  return index.slice(0, limit);
}

export function getNotableCases(limit = 20): CaseIndex[] {
  const index = getCasesIndex();
  return [...index]
    .sort((a, b) => b.citationCount - a.citationCount)
    .slice(0, limit);
}

export function getScotusBuckets(): Array<{ slug: string; label: string }> {
  return getScotusBucketRules().map((bucket) => ({ slug: bucket.slug, label: bucket.label }));
}

export function formatVotes(majority: number | null, minority: number | null): string {
  if (majority === null) {
    return '';
  }

  if (minority === null) {
    return `${majority}-0`;
  }

  return `${majority}-${minority}`;
}

export function directionColor(direction: string): string {
  if (direction === 'Conservative') {
    return 'bg-red-100 text-red-800';
  }

  if (direction === 'Liberal') {
    return 'bg-blue-100 text-blue-800';
  }

  return 'bg-gray-100 text-gray-800';
}
