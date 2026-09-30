'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, FileSearch, Loader2, Search } from 'lucide-react';
import { searchBills, searchEOs } from '@/lib/thesource';
import type { Bill, ExecutiveOrder } from '@/lib/thesource';
import { cleanDisplayText } from '@/lib/textClean';

type Mode = 'executive-orders' | 'bills';

interface Props {
  mode: Mode;
}

type Result = ExecutiveOrder | Bill;

export default function LawSearchClient({ mode }: Props) {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('');
  const [results, setResults] = useState<Result[]>([]);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isBills = mode === 'bills';

  async function runSearch(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSearched(true);

    try {
      if (isBills) {
        const congress = filter.trim() ? Number.parseInt(filter.trim(), 10) : undefined;
        if (filter.trim() && Number.isNaN(congress)) {
          throw new Error('Congress filter must be a number.');
        }

        const payload = await searchBills(query.trim(), congress, 30, 0);
        setResults(payload.results ?? []);
      } else {
        const payload = await searchEOs(query.trim(), filter.trim().toLowerCase() || undefined, 30, 0);
        setResults(payload.results ?? []);
      }
    } catch (searchError) {
      setResults([]);
      setError(searchError instanceof Error ? searchError.message : 'Search failed.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="space-y-5">
      <form
        onSubmit={runSearch}
        className="grid gap-3 border border-[#0F2C47]/10 bg-white p-4 shadow-sm md:grid-cols-[minmax(0,2fr)_minmax(160px,0.75fr)_auto]"
      >
        <label className="block">
          <span className="sr-only">Search query</span>
          <div className="flex items-center gap-3 border border-[#0F2C47]/15 bg-white px-4 py-3">
            <Search className="h-5 w-5 shrink-0 text-[#61758a]" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={isBills ? 'Search bill titles, subjects, actions...' : 'Search words, order numbers, dates...'}
              className="w-full bg-transparent text-sm text-slate-950 outline-none placeholder:text-slate-500"
            />
          </div>
        </label>

        <label className="block">
          <span className="sr-only">{isBills ? 'Congress number' : 'President slug'}</span>
          <input
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
            placeholder={isBills ? 'Congress number' : 'President slug'}
            className="w-full border border-[#0F2C47]/15 bg-white px-4 py-3 text-sm text-slate-950 outline-none placeholder:text-slate-500 focus:border-[#C41E3A]"
          />
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

      {error ? (
        <div className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">{error}</div>
      ) : null}

      <div className="space-y-3">
        {results.map((result) => (
          <SearchResultCard key={getResultKey(result)} result={result} mode={mode} />
        ))}
      </div>

      {!loading && searched && results.length === 0 && !error ? (
        <div className="border border-[#0F2C47]/10 bg-white px-5 py-8 text-center text-sm text-slate-600">
          No records matched that search.
        </div>
      ) : null}
    </section>
  );
}

function SearchResultCard({ result, mode }: { result: Result; mode: Mode }) {
  if (mode === 'bills') {
    const bill = result as Bill;
    return (
      <Link
        href={`/acts/bill?id=${encodeURIComponent(bill.bill_id)}`}
        className="block border border-[#0F2C47]/10 bg-white p-5 shadow-sm transition hover:border-[#C41E3A]/40 hover:shadow-md"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C41E3A]">
              {bill.bill_type.toUpperCase()} {bill.bill_number} • {bill.congress_number}th Congress
            </p>
            <h2 className="mt-2 text-xl font-black text-[#0F2C47]">{cleanDisplayText(bill.short_title || bill.title)}</h2>
            <p className="mt-2 text-sm text-slate-600">{formatBillMeta(bill)}</p>
            {bill.latest_action_text ? (
              <p className="mt-3 text-sm leading-6 text-slate-700">{cleanDisplayText(bill.latest_action_text)}</p>
            ) : null}
          </div>
          <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-[#61758a]" />
        </div>
      </Link>
    );
  }

  const order = result as ExecutiveOrder;
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
          <h2 className="mt-2 text-xl font-black text-[#0F2C47]">{cleanDisplayText(order.title)}</h2>
          <p className="mt-2 text-sm text-slate-600">
            {cleanDisplayText(order.president)} {order.signing_date ? `• ${formatDate(order.signing_date)}` : ''}
            {order.citation ? ` • ${order.citation}` : ''}
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

function getResultKey(result: Result) {
  if ('bill_id' in result) {
    return result.bill_id;
  }
  return String(result.id);
}

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function formatBillMeta(bill: Bill) {
  const parts = [
    bill.sponsor_name ? cleanDisplayText(bill.sponsor_name) : null,
    bill.sponsor_party && bill.sponsor_state ? `${bill.sponsor_party}-${bill.sponsor_state}` : bill.sponsor_party || bill.sponsor_state,
    bill.introduced_date ? `Introduced ${formatDate(bill.introduced_date)}` : null,
    bill.origin_chamber || null,
  ].filter(Boolean);

  return parts.length ? parts.join(' • ') : cleanDisplayText(bill.policy_area) || 'Bill metadata pending';
}
