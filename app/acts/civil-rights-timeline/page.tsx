'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const API_BASE = 'https://thesource-worker.ticri2025.workers.dev';
const BILL_PAGE_SIZE = 20;

type BillSummary = {
  bill_id: string;
  congress_number: number;
  bill_type: string;
  bill_number: string;
  title: string;
  short_title: string | null;
  sponsor_name: string | null;
  sponsor_party: string | null;
  sponsor_state: string | null;
  introduced_date: string | null;
};

type BillSearchPayload = {
  results: BillSummary[];
};

export default function CivilRightsActsTimelinePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/acts" className="inline-block text-blue-200 hover:text-white mb-4 transition-colors">
              ← Back to Acts
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Civil Rights Acts Timeline
            </h1>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-blue-300 h-full"></div>
            <div className="space-y-12">
              <div key="0" className={`relative flex items-start ${0 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  1866
                </div>
                <div className={`ml-24 md:ml-0 ${0 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Civil Rights Act of 1866</h3>
                    <p className="text-gray-700">- First U.S. civil rights law, passed after the Civil War.   - Guaranteed citizenship and equal rights regardless of race.   - Codified in 42 U.S.C. § 1981 (contracts and property rights).   ---</p>
                  </div>
                </div>
              </div>
              <div key="1" className={`relative flex items-start ${1 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  1871
                </div>
                <div className={`ml-24 md:ml-0 ${1 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Civil Rights Act of 1871 (Ku Klux Klan Act)</h3>
                    <p className="text-gray-700">- Targeted racial violence and intimidation in the South.   - Created civil remedies against those acting “under color of law” to deprive rights.   - Still forms the basis of 42 U.S.C. § 1983 civil rights lawsuits.   ---</p>
                  </div>
                </div>
              </div>
              <div key="2" className={`relative flex items-start ${2 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  1964
                </div>
                <div className={`ml-24 md:ml-0 ${2 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Civil Rights Act of 1964</h3>
                    <p className="text-gray-700">- Landmark modern civil rights law.   - Prohibited discrimination in employment (Title VII), public accommodations (Title II), and federally funded programs (Title VI).   - Created the EEOC to enforce anti-discrimination law.   ---</p>
                  </div>
                </div>
              </div>
              <div key="3" className={`relative flex items-start ${3 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  1968
                </div>
                <div className={`ml-24 md:ml-0 ${3 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Civil Rights Act of 1968 (Fair Housing Act)</h3>
                    <p className="text-gray-700">- Prohibited housing discrimination based on race, color, religion, or national origin.   - Later amended to include sex (1974), disability (1988), and family status (1988).   ---</p>
                  </div>
                </div>
              </div>
              <div key="4" className={`relative flex items-start ${4 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  1991
                </div>
                <div className={`ml-24 md:ml-0 ${4 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Civil Rights Act of 1991</h3>
                    <p className="text-gray-700">- Strengthened employee rights under Title VII.   - Allowed jury trials and compensatory/punitive damages for intentional discrimination.   - Clarified burden of proof standards in employment discrimination cases.   ---</p>
                  </div>
                </div>
              </div>
              <div key="5" className={`relative flex items-start ${5 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  ????
                </div>
                <div className={`ml-24 md:ml-0 ${5 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Why It Matters Today</h3>
                    <p className="text-gray-700">The Civil Rights Acts collectively:   - Ensure equal access to jobs, housing, and public spaces.   - Provide a legal pathway to sue for discrimination or government overreach.   - Remain central to debates over race, equality, and federal enforcement powers.   ---</p>
                  </div>
                </div>
              </div>
              <div key="6" className={`relative flex items-start ${6 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  ????
                </div>
                <div className={`ml-24 md:ml-0 ${6 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Official Sources</h3>
                    <p className="text-gray-700">- [U.S. Code – 42 U.S.C. §§ 1981, 1983, 2000e et seq.](https://uscode.house.gov/view.xhtml?path=/prelim@title42&amp;edition=prelim)   - [Congress.gov – Civil Rights Act of 1964](https://www.congress.gov/bill/88th-congress/house-bill/7152)   - [Department of Justice – Civil Rights Division](https://www.j</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RelatedCivilRightsBills />
    </div>
  );
}

function RelatedCivilRightsBills() {
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
        const payload = await fetchCivilRightsBills(0);
        if (active) {
          const nextBills = payload.results ?? [];
          setBills(nextBills);
          setOffset(BILL_PAGE_SIZE);
          setHasMore(nextBills.length === BILL_PAGE_SIZE);
        }
      } catch (loadError) {
        if (active) {
          setBills([]);
          setHasMore(false);
          setError(loadError instanceof Error ? loadError.message : 'Could not load related bills.');
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
  }, []);

  async function loadMore() {
    try {
      setLoadingMore(true);
      setError(null);
      const payload = await fetchCivilRightsBills(offset);
      const nextBills = payload.results ?? [];
      setBills((current) => dedupeBills([...current, ...nextBills]));
      setOffset((current) => current + BILL_PAGE_SIZE);
      setHasMore(nextBills.length === BILL_PAGE_SIZE);
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : 'Could not load more related bills.');
    } finally {
      setLoadingMore(false);
    }
  }

  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Related Bills from Congress</h2>
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
                      {bill.congress_number}th Congress
                    </span>
                  </div>
                  <h3 className="line-clamp-2 min-h-[3.5rem] text-lg font-bold leading-7 text-gray-900">
                    {bill.short_title || bill.title}
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

async function fetchCivilRightsBills(offset: number) {
  const params = new URLSearchParams({ q: 'civil rights', limit: String(BILL_PAGE_SIZE), offset: String(offset) });
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
  return `${bill.bill_type.toUpperCase()} ${bill.bill_number}`;
}

function formatPartyState(party: string | null, state: string | null) {
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
