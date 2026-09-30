'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowRight, FileSearch, Loader2, Search } from 'lucide-react';
import { searchEOs } from '@/lib/thesource';
import type { ExecutiveOrder } from '@/lib/thesource';
import { cleanDisplayText } from '@/lib/textClean';

const presidents = [
  { name: 'Franklin D. Roosevelt', slug: 'franklin-d-roosevelt' },
  { name: 'Harry S. Truman', slug: 'harry-s-truman' },
  { name: 'Dwight D. Eisenhower', slug: 'dwight-d-eisenhower' },
  { name: 'John F. Kennedy', slug: 'john-f-kennedy' },
  { name: 'Lyndon B. Johnson', slug: 'lyndon-b-johnson' },
  { name: 'Richard Nixon', slug: 'richard-nixon' },
  { name: 'Gerald R. Ford', slug: 'gerald-ford' },
  { name: 'Jimmy Carter', slug: 'jimmy-carter' },
  { name: 'Ronald Reagan', slug: 'ronald-reagan' },
  { name: 'George H.W. Bush', slug: 'george-h-w-bush' },
  { name: 'William J. Clinton', slug: 'william-j-clinton' },
  { name: 'George W. Bush', slug: 'george-w-bush' },
  { name: 'Barack Obama', slug: 'barack-obama' },
  { name: 'Donald Trump', slug: 'donald-trump' },
  { name: 'Joseph R. Biden Jr.', slug: 'joe-biden' },
  { name: 'Donald Trump 2nd Term', slug: 'donald-trump' },
];

export default function ExecutiveOrdersClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlQuery = searchParams.get('q') ?? '';
  const urlPresident = searchParams.get('president') ?? '';

  const [queryInput, setQueryInput] = useState(urlQuery);
  const [results, setResults] = useState<ExecutiveOrder[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(Boolean(urlQuery || urlPresident));
  const [error, setError] = useState<string | null>(null);

  const selectedPresident = useMemo(
    () => presidents.find((president) => president.slug === urlPresident),
    [urlPresident]
  );

  useEffect(() => {
    setQueryInput(urlQuery);
  }, [urlQuery]);

  useEffect(() => {
    let active = true;

    async function loadExecutiveOrders() {
      if (!urlQuery && !urlPresident) {
        setResults([]);
        setSearched(false);
        setError(null);
        return;
      }

      try {
        setLoading(true);
        setSearched(true);
        setError(null);

        const limit = urlPresident && !urlQuery ? 100 : 30;
        const payload = await searchEOs(urlQuery, urlPresident || undefined, limit, 0);

        if (active) {
          setResults(payload.results ?? []);
        }
      } catch (loadError) {
        if (active) {
          setResults([]);
          setError(loadError instanceof Error ? loadError.message : 'Search failed.');
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    void loadExecutiveOrders();
    return () => {
      active = false;
    };
  }, [urlQuery, urlPresident]);

  function updateParams(params: { q?: string; president?: string }) {
    const next = new URLSearchParams();
    if (params.q) next.set('q', params.q);
    if (params.president) next.set('president', params.president);
    const nextUrl = next.toString() ? `/executive-orders?${next.toString()}` : '/executive-orders';
    router.push(nextUrl);
  }

  function submitSearch(event: React.FormEvent) {
    event.preventDefault();
    updateParams({ q: queryInput.trim() });
  }

  return (
    <section className="space-y-8">
      <form
        onSubmit={submitSearch}
        className="grid gap-3 border border-[#0F2C47]/10 bg-white p-4 shadow-sm md:grid-cols-[minmax(0,1fr)_auto]"
      >
        <label className="block">
          <span className="sr-only">Search executive orders</span>
          <div className="flex items-center gap-3 border border-[#0F2C47]/15 bg-white px-4 py-3">
            <Search className="h-5 w-5 shrink-0 text-[#61758a]" />
            <input
              value={queryInput}
              onChange={(event) => setQueryInput(event.target.value)}
              placeholder="Search words, order numbers, presidents, dates..."
              className="w-full bg-transparent text-sm text-slate-950 outline-none placeholder:text-slate-500"
            />
          </div>
        </label>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 bg-[#C41E3A] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#9B1829] disabled:cursor-not-allowed disabled:opacity-70"
          disabled={loading}
        >
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <FileSearch className="h-4 w-4" />}
          Search
        </button>
      </form>

      <div className="border border-[#0F2C47]/10 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-black text-[#0F2C47]">Browse by President</h2>
            <p className="mt-2 text-sm leading-6 text-[#29465f]">
              Choose an administration to load up to 100 executive orders. Search results and president filters are saved in the URL.
            </p>
          </div>
          {(urlQuery || urlPresident) ? (
            <button
              type="button"
              onClick={() => updateParams({})}
              className="text-sm font-bold text-[#C41E3A] hover:text-[#9B1829]"
            >
              Clear filters
            </button>
          ) : null}
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {presidents.map((president, index) => (
            <button
              key={`${president.name}-${index}`}
              type="button"
              onClick={() => updateParams({ president: president.slug })}
              className={`border px-4 py-3 text-left text-sm font-bold transition ${
                urlPresident === president.slug && !urlQuery
                  ? 'border-[#C41E3A] bg-[#C41E3A]/10 text-[#9B1829]'
                  : 'border-[#0F2C47]/10 bg-white text-[#0F2C47] hover:border-[#C41E3A]/40 hover:bg-[#F7F3EA]'
              }`}
            >
              {president.name}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="border border-[#0F2C47]/10 bg-white px-5 py-8 text-center text-sm font-semibold text-[#29465f]">
          <Loader2 className="mx-auto mb-3 h-6 w-6 animate-spin text-[#C41E3A]" />
          Loading executive orders...
        </div>
      ) : null}

      {error ? (
        <div className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">{error}</div>
      ) : null}

      {!loading && searched ? (
        <div className="space-y-3">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-2xl font-black text-[#0F2C47]">
              {urlQuery ? `Search results for "${urlQuery}"` : selectedPresident ? `${selectedPresident.name} Executive Orders` : 'Executive Orders'}
            </h2>
            <p className="text-sm text-[#61758a]">{results.length.toLocaleString()} results</p>
          </div>

          {results.map((order) => (
            <ExecutiveOrderCard key={order.id} order={order} />
          ))}

          {results.length === 0 && !error ? (
            <div className="border border-[#0F2C47]/10 bg-white px-5 py-8 text-center text-sm text-slate-600">
              No executive orders matched that search.
            </div>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}

function ExecutiveOrderCard({ order }: { order: ExecutiveOrder }) {
  return (
    <Link
      href={`/executive-orders/order?id=${order.id}`}
      className="block border border-[#0F2C47]/10 bg-white p-5 shadow-sm transition hover:border-[#C41E3A]/40 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C41E3A]">
            {order.eo_number ? `Executive Order ${order.eo_number}` : order.document_number}
          </p>
          <h3 className="mt-2 text-xl font-black text-[#0F2C47]">{cleanDisplayText(order.title)}</h3>
          <p className="mt-2 text-sm text-slate-600">
            {cleanDisplayText(order.president)} {order.signing_date ? `- ${formatDate(order.signing_date)}` : ''}
            {order.citation ? ` - ${order.citation}` : ''}
          </p>
          {order.snippet ? (
            <p className="mt-3 text-sm leading-6 text-slate-700">{cleanDisplayText(order.snippet)}</p>
          ) : null}
        </div>
        <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-[#61758a]" />
      </div>
    </Link>
  );
}

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}
