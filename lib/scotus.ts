// lib/scotus.ts
// TheSource SCOTUS data helpers for TICRI
// Data lives in /data/scotus/ -- exported from TheSource PostgreSQL

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

// Load full index -- used for search page
// Note: this is large (157MB). For production use the chunked version.
let _indexCache: CaseIndex[] | null = null;

export function getCasesIndex(): CaseIndex[] {
  if (_indexCache) return _indexCache;
  const p = path.join(DATA_DIR, 'cases-index.json');
  if (!fs.existsSync(p)) return [];
  _indexCache = JSON.parse(fs.readFileSync(p, 'utf-8'));
  return _indexCache!;
}

export function getCasesByYear(): Record<number, number> {
  const p = path.join(DATA_DIR, 'cases-by-year.json');
  if (!fs.existsSync(p)) return {};
  return JSON.parse(fs.readFileSync(p, 'utf-8'));
}

export function getCaseDetail(clusterId: number): CaseDetail | null {
  const p = path.join(DATA_DIR, 'cases', `${clusterId}.json`);
  if (!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, 'utf-8'));
}

// Get all cluster IDs that have detail files (for static path generation)
export function getAllCaseIds(): number[] {
  const dir = path.join(DATA_DIR, 'cases');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.json'))
    .map(f => parseInt(f.replace('.json', '')))
    .filter(n => !isNaN(n));
}

// Search cases by keyword in name
export function searchCases(query: string, limit = 50): CaseIndex[] {
  const index = getCasesIndex();
  const q = query.toLowerCase().trim();
  if (!q) return index.slice(0, limit);
  return index
    .filter(c => c.caseName.toLowerCase().includes(q))
    .slice(0, limit);
}

// Get recent cases (most recently filed)
export function getRecentCases(limit = 20): CaseIndex[] {
  const index = getCasesIndex();
  return index.slice(0, limit); // already sorted DESC by date
}

// Get notable cases (high citation count)
export function getNotableCases(limit = 20): CaseIndex[] {
  const index = getCasesIndex();
  return [...index]
    .sort((a, b) => b.citationCount - a.citationCount)
    .slice(0, limit);
}

export function formatVotes(majority: number | null, minority: number | null): string {
  if (majority === null) return '';
  if (minority === null) return `${majority}-0`;
  return `${majority}-${minority}`;
}

export function directionColor(direction: string): string {
  if (direction === 'Conservative') return 'bg-red-100 text-red-800';
  if (direction === 'Liberal') return 'bg-blue-100 text-blue-800';
  return 'bg-gray-100 text-gray-800';
}
