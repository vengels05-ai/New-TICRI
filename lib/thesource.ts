// lib/thesource.ts
// TICRI client for TheSource Cloudflare Worker API

const DEFAULT_API_BASE = 'https://thesource-worker.ticri2025.workers.dev';

function getApiBase(): string {
  const publicBase = process.env.NEXT_PUBLIC_THESOURCE_API_BASE?.trim();
  const serverBase = process.env.THESOURCE_API_BASE?.trim();

  if (typeof window !== 'undefined') {
    return publicBase || DEFAULT_API_BASE;
  }

  return serverBase || publicBase || DEFAULT_API_BASE;
}

async function apiFetch<T>(path: string): Promise<T> {
  const res = await fetch(`${getApiBase()}${path}`, {
    next: { revalidate: 3600 }, // cache for 1 hour
  });
  if (!res.ok) throw new Error(`API error: ${res.status} ${path}`);
  return res.json() as Promise<T>;
}

// ─── Types ───────────────────────────────────────────────────────────────────

export interface CaseSummary {
  id: number;
  case_name: string;
  date_filed: string | null;
  scdb_decision_direction: string | null;
  scdb_votes_majority: number | null;
  scdb_votes_minority: number | null;
  precedential_status: string;
  citation_count: number;
  docket_number: string;
}

export interface Opinion {
  id: number;
  type: string;
  per_curiam: number;
  author_str: string;
  joined_by_str: string;
  plain_text: string | null;
  html_with_citations: string | null;
  page_count: number | null;
}

export interface CaseDetail extends CaseSummary {
  case_name_full: string;
  docket_id: number;
  scdb_id: string;
  disposition: string;
  posture: string;
  syllabus: string | null;
  summary: string | null;
  procedural_history: string | null;
  attorneys: string | null;
  judges: string;
  date_argued: string | null;
  date_cert_granted: string | null;
  jurisdiction_type: string;
  nature_of_suit: string;
  opinions: Opinion[];
  citations: { cited_opinion_id: number; case_name: string; date_filed: string | null }[];
}

export interface Bill {
  id?: number;
  bill_id: string;
  congress_number: number;
  bill_type: string;
  bill_number: string;
  title: string;
  short_title: string | null;
  sponsor_bioguide_id?: string | null;
  sponsor_name: string | null;
  sponsor_party: string | null;
  sponsor_state: string | null;
  introduced_date: string | null;
  latest_action_date: string | null;
  latest_action_text: string | null;
  policy_area: string | null;
  origin_chamber: string;
  update_date?: string | null;
  constitutional_authority_text?: string | null;
  summary_text?: string | null;
  summary_update_date?: string | null;
  enriched?: number | null;
  subjects?: string[];
  cosponsors?: {
    bioguide_id: string;
    name: string;
    party: string;
    state: string;
    sponsorship_date?: string | null;
  }[];
  committees?: {
    committee_name: string;
    committee_code: string;
    chamber: string;
  }[];
}

export interface ExecutiveOrder {
  id: number;
  document_number: string;
  eo_number: number | null;
  title: string;
  president: string;
  president_slug: string;
  signing_date: string | null;
  publication_date?: string | null;
  citation: string | null;
  fr_url: string | null;
  pdf_url?: string | null;
  full_text?: string | null;
  disposition_notes?: string | null;
  eo_notes?: string | null;
  snippet?: string | null;
}

export interface UscodeSection {
  granule_id: string;
  title_number: number;
  title_name: string;
  citation: string;
  section_number: string;
  heading: string;
  chapter: string | null;
  subchapter?: string | null;
  source_url?: string | null;
  edition?: string | null;
  effective_date?: string | null;
  full_text?: string | null;
  snippet?: string | null;
}

export interface Member {
  bioguide_id: string;
  name: string;
  first_name: string;
  last_name: string;
  party: string;
  state: string;
  chamber: string;
  birth_year: number | null;
  gender: string;
}

// ─── SCOTUS ──────────────────────────────────────────────────────────────────

export async function searchCases(q: string, limit = 20, offset = 0) {
  return apiFetch<{ results: CaseSummary[]; total: number; offset: number; limit: number }>(
    `/api/cases/search?q=${encodeURIComponent(q)}&limit=${limit}&offset=${offset}`
  );
}

export async function getRecentCases(limit = 12) {
  return apiFetch<{ results: CaseSummary[] }>(`/api/cases/recent?limit=${limit}`);
}

export async function getNotableCases(limit = 12) {
  return apiFetch<{ results: CaseSummary[] }>(`/api/cases/notable?limit=${limit}`);
}

export async function getCaseDetail(id: number) {
  return apiFetch<CaseDetail>(`/api/cases/${id}`);
}

// ─── CONGRESS ────────────────────────────────────────────────────────────────

export async function searchBills(q: string, congress?: number, limit = 20, offset = 0) {
  const params = new URLSearchParams({ q, limit: String(limit), offset: String(offset) });
  if (congress) params.set('congress', String(congress));
  return apiFetch<{ results: Bill[] }>(`/api/bills/search?${params}`);
}

export async function getRecentBills(limit = 12) {
  return apiFetch<{ results: Bill[] }>(`/api/bills/recent?limit=${limit}`);
}

export async function getBillDetail(billId: string) {
  return apiFetch<Bill>(`/api/bills/${billId}`);
}

export async function searchMembers(q: string, state?: string, party?: string, limit = 20) {
  const params = new URLSearchParams({ q, limit: String(limit) });
  if (state) params.set('state', state);
  if (party) params.set('party', party);
  return apiFetch<{ results: Member[] }>(`/api/members/search?${params}`);
}

// ─── LAW ─────────────────────────────────────────────────────────────────────

export async function searchEOs(q: string, president?: string, limit = 20, offset = 0) {
  const params = new URLSearchParams({ q, limit: String(limit), offset: String(offset) });
  if (president) params.set('president', president);
  return apiFetch<{ results: ExecutiveOrder[] }>(`/api/eos/search?${params}`);
}

export async function getEODetail(id: number) {
  return apiFetch<ExecutiveOrder>(`/api/eos/${id}`);
}

export async function searchUscode(q: string, title?: number, limit = 20, offset = 0) {
  const params = new URLSearchParams({ q, limit: String(limit), offset: String(offset) });
  if (title) params.set('title', String(title));
  return apiFetch<{ results: UscodeSection[] }>(`/api/uscode/search?${params}`);
}

export async function getUscodeSection(granuleId: string) {
  return apiFetch<UscodeSection>(`/api/uscode/${encodeURIComponent(granuleId)}`);
}

export async function getFredSeries(seriesId: string) {
  return apiFetch<{ series_id: string; title: string; observations: { obs_date: string; value: number }[] }>(
    `/api/fred/${seriesId}`
  );
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

export function formatVotes(majority: number | null, minority: number | null): string {
  if (majority === null) return '';
  return `${majority}-${minority ?? 0}`;
}

export function directionLabel(d: string | null): string {
  if (d === '1') return 'Conservative';
  if (d === '2') return 'Liberal';
  return '';
}

export function directionColor(d: string | null): string {
  if (d === '1') return 'bg-red-100 text-red-800';
  if (d === '2') return 'bg-blue-100 text-blue-800';
  return 'bg-gray-100 text-gray-800';
}
