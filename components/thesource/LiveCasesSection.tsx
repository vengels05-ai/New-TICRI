'use client';

import { useEffect, useState } from 'react';

const API_BASE = 'https://thesource-worker.ticri2025.workers.dev';
const PAGE_SIZE = 20;

type CaseSummary = {
  id: number | string;
  case_name?: string | null;
  name?: string | null;
  date_filed?: string | null;
  year?: number | string | null;
  scdb_decision_direction?: string | null;
  decision_direction?: string | null;
  scdb_votes_majority?: number | null;
  scdb_votes_minority?: number | null;
  vote?: string | null;
};

type CaseSearchPayload = {
  results?: CaseSummary[];
};

type CaseBatch = {
  cases: CaseSummary[];
  hasMore: boolean;
};

type LiveCasesSectionProps = {
  queries: string[];
  title: string;
};

export default function LiveCasesSection({ queries, title }: LiveCasesSectionProps) {
  const [cases, setCases] = useState<CaseSummary[]>([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function loadInitialCases() {
      try {
        setLoading(true);
        setError(null);
        const batch = await fetchCaseBatch(queries, 0);
        if (active) {
          setCases(batch.cases);
          setOffset(PAGE_SIZE);
          setHasMore(batch.hasMore);
        }
      } catch (loadError) {
        if (active) {
          setCases([]);
          setHasMore(false);
          setError(loadError instanceof Error ? loadError.message : 'Could not load cases from TheSource.');
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    void loadInitialCases();
    return () => {
      active = false;
    };
  }, [queries]);

  async function loadMore() {
    try {
      setLoadingMore(true);
      setError(null);
      const batch = await fetchCaseBatch(queries, offset);
      setCases((current) => dedupeCases([...current, ...batch.cases]).sort(sortCasesByDateDesc));
      setOffset((current) => current + PAGE_SIZE);
      setHasMore(batch.hasMore);
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : 'Could not load more cases from TheSource.');
    } finally {
      setLoadingMore(false);
    }
  }

  return (
    <section className="bg-purple-50 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          <p className="mt-2 text-sm font-semibold text-purple-900">
            Results from 486,000+ Supreme Court cases in the TheSource database.
          </p>
        </div>

        {error ? (
          <div className="mb-5 rounded border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</div>
        ) : null}

        {loading ? (
          <div className="grid gap-4 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="rounded-lg bg-white p-5 shadow-md">
                <div className="mb-3 h-5 w-4/5 animate-pulse rounded bg-gray-200" />
                <div className="mb-3 h-4 w-1/3 animate-pulse rounded bg-gray-200" />
                <div className="h-6 w-24 animate-pulse rounded-full bg-gray-200" />
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid gap-4 md:grid-cols-2">
              {cases.map((caseItem) => (
                <a
                  key={caseItem.id}
                  href={`/cases/opinion?id=${encodeURIComponent(String(caseItem.id))}`}
                  className="block rounded-lg border border-purple-100 bg-white p-5 shadow-md transition hover:border-purple-600 hover:shadow-lg"
                >
                  <div className="mb-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-purple-600 px-3 py-1 text-sm font-bold text-white">
                      {getCaseYear(caseItem)}
                    </span>
                    {getDirectionLabel(caseItem) ? (
                      <span className={`rounded-full px-3 py-1 text-sm font-bold ${getDirectionClasses(caseItem)}`}>
                        {getDirectionLabel(caseItem)}
                      </span>
                    ) : null}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{caseItem.case_name || caseItem.name || 'Untitled case'}</h3>
                  <p className="mt-2 text-sm font-semibold text-gray-700">Vote: {formatVote(caseItem)}</p>
                </a>
              ))}
            </div>

            {hasMore ? (
              <div className="mt-8 text-center">
                <button
                  type="button"
                  onClick={loadMore}
                  disabled={loadingMore}
                  className="rounded bg-purple-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-purple-800 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loadingMore ? 'Loading...' : 'Load more'}
                </button>
              </div>
            ) : null}
          </>
        )}
      </div>
    </section>
  );
}

async function fetchCaseBatch(queries: string[], offset: number): Promise<CaseBatch> {
  const payloads = await Promise.all(queries.map((query) => fetchCaseSearch(query, offset)));
  const rawCases = payloads.flatMap((payload) => payload.results ?? []);
  return {
    cases: dedupeCases(rawCases).sort(sortCasesByDateDesc).slice(0, PAGE_SIZE),
    hasMore: payloads.some((payload) => (payload.results ?? []).length === PAGE_SIZE),
  };
}

async function fetchCaseSearch(query: string, offset: number) {
  const params = new URLSearchParams({ q: query, limit: String(PAGE_SIZE), offset: String(offset) });
  const response = await fetch(`${API_BASE}/api/cases/search?${params.toString()}`);
  if (!response.ok) {
    throw new Error(`TheSource API returned ${response.status}.`);
  }
  return response.json() as Promise<CaseSearchPayload>;
}

function dedupeCases(caseList: CaseSummary[]) {
  const seen = new Set<string>();
  return caseList.filter((caseItem) => {
    const id = String(caseItem.id);
    if (seen.has(id)) return false;
    seen.add(id);
    return true;
  });
}

function sortCasesByDateDesc(first: CaseSummary, second: CaseSummary) {
  return getDateTime(second.date_filed) - getDateTime(first.date_filed);
}

function getCaseYear(caseItem: CaseSummary) {
  if (caseItem.year) return String(caseItem.year);
  if (!caseItem.date_filed) return 'Year unknown';
  const parsed = new Date(caseItem.date_filed);
  if (Number.isNaN(parsed.getTime())) {
    const match = caseItem.date_filed.match(/\d{4}/);
    return match?.[0] ?? 'Year unknown';
  }
  return String(parsed.getFullYear());
}

function formatVote(caseItem: CaseSummary) {
  if (caseItem.vote) return caseItem.vote;
  if (caseItem.scdb_votes_majority === null || caseItem.scdb_votes_majority === undefined) return 'N/A';
  return `${caseItem.scdb_votes_majority}-${caseItem.scdb_votes_minority ?? 0}`;
}

function getDirectionLabel(caseItem: CaseSummary) {
  const direction = caseItem.scdb_decision_direction ?? caseItem.decision_direction;
  if (direction === '1' || direction?.toLowerCase() === 'conservative') return 'Conservative';
  if (direction === '2' || direction?.toLowerCase() === 'liberal') return 'Liberal';
  return '';
}

function getDirectionClasses(caseItem: CaseSummary) {
  const direction = getDirectionLabel(caseItem);
  if (direction === 'Conservative') return 'bg-red-100 text-red-800';
  if (direction === 'Liberal') return 'bg-blue-100 text-blue-800';
  return 'bg-gray-100 text-gray-800';
}

function getDateTime(value: string | null | undefined) {
  if (!value) return 0;
  const parsed = new Date(value).getTime();
  return Number.isNaN(parsed) ? 0 : parsed;
}
