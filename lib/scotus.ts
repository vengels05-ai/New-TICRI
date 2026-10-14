// lib/scotus.ts
// TheSource SCOTUS data helpers for TICRI
// Uses chunked search index -- does NOT load 157MB cases-index.json

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
// Reads directory listing only -- does not load any JSON content
export function getAllCaseIds(): number[] {
  const dir = path.join(DATA_DIR, 'cases');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.json'))
    .map(f => parseInt(f.replace('.json', '')))
    .filter(n => !isNaN(n));
}

// Get recent cases from the first search chunk only -- small and fast
let _recentCache: CaseIndex[] | null = null;
export function getRecentCases(limit = 12): CaseIndex[] {
  if (_recentCache) return _recentCache.slice(0, limit);
  const p = path.join(DATA_DIR, 'search-chunks', 'search-chunk-0000.json');
  if (!fs.existsSync(p)) return [];
  const chunk: CaseIndex[] = JSON.parse(fs.readFileSync(p, 'utf-8'));
  // Already sorted DESC by date in chunk 0
  _recentCache = chunk;
  return chunk.slice(0, limit);
}

// Get notable cases (high citation count) from first chunk
export function getNotableCases(limit = 12): CaseIndex[] {
  const chunk = getRecentCases(1000); // get more from chunk to sort
  return [...chunk]
    .sort((a, b) => (b.citationCount || 0) - (a.citationCount || 0))
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
