'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowRight, FileSearch, Loader2, Search } from 'lucide-react';
import { searchBills } from '@/lib/thesource';
import type { Bill } from '@/lib/thesource';
import { cleanDisplayText } from '@/lib/textClean';

const congressOptions = Array.from({ length: 119 - 93 + 1 }, (_, index) => 119 - index);

export default function ActsBillSearchClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlQuery = searchParams.get('q') ?? '';
  const urlCongress = searchParams.get('congress') ?? '';

  const [queryInput, setQueryInput] = useState(urlQuery);
  const [congressInput, setCongressInput] = useState(urlCongress);
  const [results, setResults] = useState<Bill[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(Boolean(urlQuery || urlCongress));
  const [error, setError] = useState<string | null>(null);

  const congressNumber = useMemo(() => {
    if (!urlCongress) return undefined;
    const parsed = Number.parseInt(urlCongress, 10);
    return Number.isNaN(parsed) ? undefined : parsed;
  }, [urlCongress]);

  useEffect(() => {
    setQueryInput(urlQuery);
    setCongressInput(urlCongress);
  }, [urlQuery, urlCongress]);

  useEffect(() => {
    let active = true;

    async function loadBills() {
      if (!urlQuery && !urlCongress) {
        setResults([]);
        setSearched(false);
        setError(null);
        return;
      }

      try {
        setLoading(true);
        setSearched(true);
        setError(null);
        const payload = await searchBills(urlQuery, congressNumber, 30, 0);
        if (active) {
          setResults(payload.results ?? []);
        }
      } catch (loadError) {
        if (active) {
          setResults([]);
          setError(loadError instanceof Error ? loadError.message : 'Bill search failed.');
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    void loadBills();
    return () => {
      active = false;
    };
  }, [urlQuery, urlCongress, congressNumber]);

  function updateParams(params: { q?: string; congress?: string }) {
    const next = new URLSearchParams();
    if (params.q) next.set('q', params.q);
    if (params.congress) next.set('congress', params.congress);
    const nextUrl = next.toString() ? `/acts?${next.toString()}` : '/acts';
    router.push(nextUrl);
  }

  function submitSearch(event: React.FormEvent) {
    event.preventDefault();
    updateParams({ q: queryInput.trim(), congress: congressInput });
  }

  return (
    <section className="space-y-5">
      <form
        onSubmit={submitSearch}
        className="grid gap-3 rounded-lg bg-white p-4 shadow-md md:grid-cols-[minmax(0,2fr)_minmax(160px,0.5fr)_auto]"
      >
        <label className="block">
          <span className="sr-only">Search congressional bills</span>
          <div className="flex items-center gap-3 rounded border border-gray-300 bg-white px-4 py-3">
            <Search className="h-5 w-5 shrink-0 text-gray-500" />
            <input
              value={queryInput}
              onChange={(event) => setQueryInput(event.target.value)}
              placeholder="Search bill titles, subjects, sponsors, actions..."
              className="w-full bg-transparent text-sm text-gray-950 outline-none placeholder:text-gray-500"
            />
          </div>
        </label>

        <label className="block">
          <span className="sr-only">Congress number</span>
          <select
            value={congressInput}
            onChange={(event) => setCongressInput(event.target.value)}
            className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-sm text-gray-950 outline-none focus:border-blue-600"
          >
            <option value="">All Congresses</option>
            {congressOptions.map((congress) => (
              <option key={congress} value={congress}>
                {congress}th
              </option>
            ))}
          </select>
        </label>

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded bg-blue-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-70"
          disabled={loading}
        >
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <FileSearch className="h-4 w-4" />}
          Search
        </button>
      </form>

      {(urlQuery || urlCongress) ? (
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold text-gray-700">
            {loading ? 'Searching bills...' : `${results.length.toLocaleString()} bill results`}
          </p>
          <button
            type="button"
            onClick={() => updateParams({})}
            className="text-left text-sm font-bold text-blue-700 hover:text-blue-900"
          >
            Clear bill search
          </button>
        </div>
      ) : null}

      {error ? (
        <div className="rounded border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">{error}</div>
      ) : null}

      <div className="space-y-3">
        {results.map((bill) => (
          <BillResultCard key={bill.bill_id} bill={bill} />
        ))}
      </div>

      {!loading && searched && results.length === 0 && !error ? (
        <div className="rounded-lg bg-white px-5 py-8 text-center text-sm text-gray-600 shadow-md">
          No bills matched that search.
        </div>
      ) : null}
    </section>
  );
}

function BillResultCard({ bill }: { bill: Bill }) {
  return (
    <Link
      href={`/acts/bill?id=${encodeURIComponent(bill.bill_id)}`}
      className="block rounded-lg border border-gray-200 bg-white p-5 shadow-md transition hover:border-blue-500 hover:shadow-lg"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
            {bill.bill_type.toUpperCase()} {bill.bill_number} - {bill.congress_number}th Congress
          </p>
          <h3 className="mt-2 text-xl font-bold text-gray-900">{cleanDisplayText(bill.short_title || bill.title)}</h3>
          <p className="mt-2 text-sm text-gray-600">{formatBillMeta(bill)}</p>
          {bill.latest_action_text ? (
            <p className="mt-3 text-sm leading-6 text-gray-700">{cleanDisplayText(bill.latest_action_text)}</p>
          ) : null}
        </div>
        <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-gray-500" />
      </div>
    </Link>
  );
}

function formatBillMeta(bill: Bill) {
  const sponsor = bill.sponsor_name ? cleanDisplayText(bill.sponsor_name) : null;
  const sponsorPartyState = bill.sponsor_party && bill.sponsor_state
    ? `${bill.sponsor_party}-${bill.sponsor_state}`
    : bill.sponsor_party || bill.sponsor_state;
  const parts = [
    sponsor ? `Sponsor: ${sponsor}${sponsorPartyState ? ` (${sponsorPartyState})` : ''}` : null,
    bill.introduced_date ? `Introduced ${formatDate(bill.introduced_date)}` : null,
    bill.policy_area ? `Policy Area: ${cleanDisplayText(bill.policy_area)}` : null,
  ].filter(Boolean);

  return parts.length ? parts.join(' | ') : 'Bill metadata pending';
}

function formatDate(value: string) {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return value;
  }
  return parsed.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}
