'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const API_BASE = 'https://thesource-worker.ticri2025.workers.dev';
const PAGE_SIZE = 20;

type BillSummary = {
  bill_id: string;
  congress_number?: number | null;
  congress?: number | null;
  bill_type?: string | null;
  bill_number?: string | null;
  title?: string | null;
  short_title?: string | null;
  sponsor_name?: string | null;
  sponsor_party?: string | null;
  sponsor_state?: string | null;
  introduced_date?: string | null;
};

type BillSearchPayload = {
  results?: BillSummary[];
};

type LiveBillsSectionProps = {
  query: string;
  title: string;
};

export default function LiveBillsSection({ query, title }: LiveBillsSectionProps) {
  const [bills, setBills] = useState<BillSummary[]>([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function loadInitialBills() {
      try {
        setLoading(true);
        setError(null);
        const payload = await fetchBills(query, 0);
        if (active) {
          const nextBills = payload.results ?? [];
          setBills(nextBills);
          setOffset(PAGE_SIZE);
          setHasMore(nextBills.length === PAGE_SIZE);
        }
      } catch (loadError) {
        if (active) {
          setBills([]);
          setHasMore(false);
          setError(loadError instanceof Error ? loadError.message : 'Could not load related bills from TheSource.');
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    void loadInitialBills();
    return () => {
      active = false;
    };
  }, [query]);

  async function loadMore() {
    try {
      setLoadingMore(true);
      setError(null);
      const payload = await fetchBills(query, offset);
      const nextBills = payload.results ?? [];
      setBills((current) => dedupeBills([...current, ...nextBills]));
      setOffset((current) => current + PAGE_SIZE);
      setHasMore(nextBills.length === PAGE_SIZE);
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : 'Could not load more related bills from TheSource.');
    } finally {
      setLoadingMore(false);
    }
  }

  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          <p className="mt-2 text-sm font-semibold text-blue-900">
            Results from 378,000+ congressional bills in the TheSource database.
          </p>
        </div>

        {error ? (
          <div className="mb-5 rounded border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</div>
        ) : null}

        {loading ? (
          <div className="grid gap-4 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="rounded-lg border border-gray-200 bg-white p-5 shadow-md">
                <div className="mb-4 flex gap-2">
                  <div className="h-6 w-24 animate-pulse rounded-full bg-gray-200" />
                  <div className="h-6 w-28 animate-pulse rounded-full bg-gray-200" />
                </div>
                <div className="mb-3 h-5 w-4/5 animate-pulse rounded bg-gray-200" />
                <div className="h-4 w-1/2 animate-pulse rounded bg-gray-200" />
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid gap-4 md:grid-cols-2">
              {bills.map((bill) => (
                <Link
                  key={bill.bill_id}
                  href={`/acts/bill?id=${encodeURIComponent(bill.bill_id)}`}
                  className="block rounded-lg border border-gray-200 bg-white p-5 shadow-md transition hover:border-blue-600 hover:shadow-lg"
                >
                  <div className="mb-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-blue-900 px-3 py-1 text-xs font-bold uppercase text-white">
                      {formatBillId(bill)}
                    </span>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                      {getCongressNumber(bill)}
                    </span>
                  </div>
                  <h3 className="line-clamp-2 min-h-[3.5rem] text-lg font-bold leading-7 text-gray-900">
                    {bill.short_title || bill.title || 'Untitled bill'}
                  </h3>
                  <p className="mt-3 text-sm text-gray-700">
                    {bill.sponsor_name ? `${bill.sponsor_name}${formatPartyState(bill.sponsor_party, bill.sponsor_state)}` : 'Sponsor unavailable'}
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    {bill.introduced_date ? `Introduced ${formatDate(bill.introduced_date)}` : 'Introduced date unavailable'}
                  </p>
                </Link>
              ))}
            </div>

            {hasMore ? (
              <div className="mt-8 text-center">
                <button
                  type="button"
                  onClick={loadMore}
                  disabled={loadingMore}
                  className="rounded bg-blue-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-70"
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

async function fetchBills(query: string, offset: number) {
  const params = new URLSearchParams({ q: query, limit: String(PAGE_SIZE), offset: String(offset) });
  const response = await fetch(`${API_BASE}/api/bills/search?${params.toString()}`);
  if (!response.ok) {
    throw new Error(`TheSource API returned ${response.status}.`);
  }
  return response.json() as Promise<BillSearchPayload>;
}

function dedupeBills(bills: BillSummary[]) {
  const seen = new Set<string>();
  return bills.filter((bill) => {
    if (seen.has(bill.bill_id)) return false;
    seen.add(bill.bill_id);
    return true;
  });
}

function formatBillId(bill: BillSummary) {
  if (bill.bill_type && bill.bill_number) return `${bill.bill_type.toUpperCase()} ${bill.bill_number}`;
  return bill.bill_id;
}

function getCongressNumber(bill: BillSummary) {
  const congress = bill.congress_number ?? bill.congress;
  return congress ? `${congress}th Congress` : 'Congress unknown';
}

function formatPartyState(party: string | null | undefined, state: string | null | undefined) {
  const parts = [party, state].filter(Boolean);
  return parts.length ? ` (${parts.join('-')})` : '';
}

function formatDate(value: string) {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return value;
  }
  return parsed.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}
