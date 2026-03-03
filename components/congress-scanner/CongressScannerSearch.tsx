'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { fetchCongressApiJson } from '@/lib/congress-scanner/browserApiClient';
import type { CongressSearchResponse } from './types';

interface SearchFormState {
  from: string;
  to: string;
  q: string;
  sponsor: string;
  member: string;
  bill: string;
  chamber: string;
  type: string;
  congress: string;
}

const DEFAULT_FORM: SearchFormState = {
  from: '',
  to: '',
  q: '',
  sponsor: '',
  member: '',
  bill: '',
  chamber: '',
  type: '',
  congress: '119',
};

const BILL_TYPE_OPTIONS = [
  { value: '', label: 'All bill types' },
  { value: 'hr', label: 'H.R.' },
  { value: 's', label: 'S.' },
  { value: 'hjres', label: 'H.J.Res.' },
  { value: 'sjres', label: 'S.J.Res.' },
  { value: 'hconres', label: 'H.Con.Res.' },
  { value: 'sconres', label: 'S.Con.Res.' },
  { value: 'hres', label: 'H.Res.' },
  { value: 'sres', label: 'S.Res.' },
];

const CHAMBER_OPTIONS = [
  { value: '', label: 'All chambers' },
  { value: 'House', label: 'House' },
  { value: 'Senate', label: 'Senate' },
];
export default function CongressScannerSearch() {
  const [form, setForm] = useState<SearchFormState>(DEFAULT_FORM);
  const [results, setResults] = useState<CongressSearchResponse['data'] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const hasFilters = useMemo(
    () => Object.entries(form).some(([key, value]) => key === 'congress' ? value.trim() !== '119' : value.trim() !== ''),
    [form],
  );

  useEffect(() => {
    void fetchResults(1, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchResults(nextPage: number, preserveSubmitted = false, formState: SearchFormState = form) {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams();
      appendParam(params, 'from', formState.from);
      appendParam(params, 'to', formState.to);
      appendParam(params, 'q', formState.q);
      appendParam(params, 'sponsor', formState.sponsor);
      appendParam(params, 'member', formState.member);
      appendParam(params, 'bill', formState.bill);
      appendParam(params, 'chamber', formState.chamber);
      appendParam(params, 'type', formState.type);
      appendParam(params, 'congress', formState.congress);
      params.set('page', String(nextPage));

      const payload = await fetchCongressApiJson<CongressSearchResponse>('/congress/search', {
        params,
      });

      setResults(payload.data);
      if (!preserveSubmitted) {
        setSubmitted(true);
      }
    } catch (error) {
      setResults(null);
      setError(error instanceof Error ? error.message : 'The Congress Scanner could not load results right now.');
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    void fetchResults(1);
  }

  function handleReset() {
    const resetForm = { ...DEFAULT_FORM };
    setForm(resetForm);
    setSubmitted(false);
    setError(null);
    void fetchResults(1, true, resetForm);
  }

  const totalLabel = results ? `${results.total.toLocaleString()} result${results.total === 1 ? '' : 's'}` : 'No results yet';

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#f5efe3,_#eef3f8_40%,_#d9e4ef_100%)] pb-20">
      <section className="border-b border-[#0F2C47]/10 bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-3 inline-flex rounded-full border border-[#0F2C47]/15 bg-[#F7F3EA] px-4 py-1 text-xs font-bold uppercase tracking-[0.24em] text-[#0F2C47]">
              Congress Scanner
            </p>
            <h1 className="max-w-3xl text-4xl font-black tracking-tight text-[#0F2C47] sm:text-5xl">
              Search recent federal bills by sponsor, chamber, bill number, and latest action.
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-[#29465f]">
              TICRI searches only our own Congress Scanner API, using stored Congress.gov bill data and deterministic explainers.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 pt-8 sm:px-6 lg:grid-cols-[340px_minmax(0,1fr)] lg:px-8">
        <aside className="self-start rounded-[28px] border border-[#0F2C47]/10 bg-white/90 p-6 shadow-[0_18px_50px_rgba(15,44,71,0.08)]">
          <h2 className="text-xl font-bold text-[#0F2C47]">Search filters</h2>
          <p className="mt-2 text-sm text-slate-600">Use any combination of fields. Chamber and bill type filters are exact.</p>

          <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
            <fieldset className="space-y-4">
              <legend className="sr-only">Congress bill search filters</legend>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#0F2C47]" htmlFor="keyword">Keyword</label>
                <input id="keyword" type="search" value={form.q} onChange={(event) => setForm({ ...form, q: event.target.value })} className={inputClassName} placeholder="Committee, veto, education..." />
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#0F2C47]" htmlFor="from">From date</label>
                  <input id="from" type="date" value={form.from} onChange={(event) => setForm({ ...form, from: event.target.value })} className={inputClassName} />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#0F2C47]" htmlFor="to">To date</label>
                  <input id="to" type="date" value={form.to} onChange={(event) => setForm({ ...form, to: event.target.value })} className={inputClassName} />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#0F2C47]" htmlFor="bill">Bill number or ID</label>
                <input id="bill" type="text" value={form.bill} onChange={(event) => setForm({ ...form, bill: event.target.value })} className={inputClassName} placeholder="H.R. 1001" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#0F2C47]" htmlFor="sponsor">Sponsor</label>
                <input id="sponsor" type="text" value={form.sponsor} onChange={(event) => setForm({ ...form, sponsor: event.target.value })} className={inputClassName} placeholder="DelBene" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#0F2C47]" htmlFor="member">Member</label>
                <input id="member" type="text" value={form.member} onChange={(event) => setForm({ ...form, member: event.target.value })} className={inputClassName} placeholder="Any listed member" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#0F2C47]" htmlFor="chamber">Chamber</label>
                <select id="chamber" value={form.chamber} onChange={(event) => setForm({ ...form, chamber: event.target.value })} className={inputClassName}>
                  {CHAMBER_OPTIONS.map((option) => (
                    <option key={option.value || 'all'} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#0F2C47]" htmlFor="type">Bill type</label>
                <select id="type" value={form.type} onChange={(event) => setForm({ ...form, type: event.target.value })} className={inputClassName}>
                  {BILL_TYPE_OPTIONS.map((option) => (
                    <option key={option.value || 'all'} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#0F2C47]" htmlFor="congress">Congress</label>
                <input id="congress" type="number" min="1" max="999" value={form.congress} onChange={(event) => setForm({ ...form, congress: event.target.value })} className={inputClassName} />
              </div>
            </fieldset>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <button type="submit" className="inline-flex flex-1 items-center justify-center rounded-full bg-[#C41E3A] px-5 py-3 font-bold text-white shadow-lg shadow-[#C41E3A]/20 transition hover:bg-[#9B1829] focus:outline-none focus:ring-2 focus:ring-[#C41E3A] focus:ring-offset-2">
                Search bills
              </button>
              <button type="button" onClick={handleReset} className="inline-flex items-center justify-center rounded-full border border-[#0F2C47]/20 px-5 py-3 font-semibold text-[#0F2C47] transition hover:border-[#0F2C47] hover:bg-[#F7F3EA] focus:outline-none focus:ring-2 focus:ring-[#0F2C47] focus:ring-offset-2">
                Reset
              </button>
            </div>
          </form>
        </aside>

        <section aria-live="polite" className="space-y-6">
          <div className="rounded-[28px] border border-[#0F2C47]/10 bg-white/90 p-6 shadow-[0_18px_50px_rgba(15,44,71,0.08)]">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C41E3A]">Results</p>
                <h2 className="mt-2 text-2xl font-bold text-[#0F2C47]">Recent congressional activity</h2>
                <p className="mt-1 text-sm text-slate-600">{loading ? 'Loading bills...' : totalLabel}</p>
              </div>
              <div className="text-sm text-slate-600">
                {hasFilters ? 'Filtered search' : 'Showing latest available bills'}
              </div>
            </div>
          </div>

          {error ? (
            <div className="rounded-[28px] border border-red-200 bg-red-50 p-6 text-red-900 shadow-sm">
              <h3 className="text-lg font-bold">Search unavailable</h3>
              <p className="mt-2 text-sm">{error}</p>
            </div>
          ) : null}

          {!error && loading ? (
            <div className="rounded-[28px] border border-[#0F2C47]/10 bg-white/90 p-10 text-center text-slate-600 shadow-[0_18px_50px_rgba(15,44,71,0.08)]">
              Loading Congress Scanner results...
            </div>
          ) : null}

          {!error && !loading && results && results.items.length === 0 ? (
            <div className="rounded-[28px] border border-[#0F2C47]/10 bg-white/90 p-10 text-center shadow-[0_18px_50px_rgba(15,44,71,0.08)]">
              <h3 className="text-xl font-bold text-[#0F2C47]">No bills matched these filters</h3>
              <p className="mt-3 text-slate-600">Try widening the date range, removing a filter, or searching for a broader keyword.</p>
            </div>
          ) : null}

          {!error && !loading && results && results.items.length > 0 ? (
            <>
              <ol className="space-y-5">
                {results.items.map((item) => (
                  <li key={`${item.congress}-${item.type}-${item.number}`}>
                    <article className="rounded-[28px] border border-[#0F2C47]/10 bg-white/95 p-6 shadow-[0_18px_50px_rgba(15,44,71,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(15,44,71,0.12)]">
                      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                        <div className="space-y-3">
                          <p className="inline-flex rounded-full bg-[#F7F3EA] px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#0F2C47]">
                            {item.billId}
                          </p>
                          <h3 className="text-2xl font-bold leading-tight text-[#0F2C47]">
                            <Link href={`/congress-scanner/bill?congress=${encodeURIComponent(String(item.congress))}&type=${encodeURIComponent(item.type)}&number=${encodeURIComponent(String(item.number))}`} className="focus:outline-none focus:ring-2 focus:ring-[#C41E3A] focus:ring-offset-4 hover:text-[#C41E3A]">
                              {item.title}
                            </Link>
                          </h3>
                          <dl className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2 xl:grid-cols-4">
                            <div>
                              <dt className="font-semibold text-[#0F2C47]">Sponsor</dt>
                              <dd>{item.sponsorName ?? 'Unknown'}</dd>
                            </div>
                            <div>
                              <dt className="font-semibold text-[#0F2C47]">Introduced</dt>
                              <dd>{formatDate(item.introducedDate)}</dd>
                            </div>
                            <div>
                              <dt className="font-semibold text-[#0F2C47]">Latest action</dt>
                              <dd>{formatDate(item.latestActionDate)}</dd>
                            </div>
                            <div>
                              <dt className="font-semibold text-[#0F2C47]">Chamber</dt>
                              <dd>{item.originChamber ?? 'Unknown'}</dd>
                            </div>
                          </dl>
                        </div>
                        <div className="rounded-2xl border border-[#0F2C47]/10 bg-[#F5F8FB] px-4 py-3 text-sm text-slate-700 lg:max-w-xs">
                          <p className="font-semibold text-[#0F2C47]">Latest action text</p>
                          <p className="mt-2 leading-6">{item.latestActionText ?? 'No latest action text stored.'}</p>
                        </div>
                      </div>

                      {item.snippet ? (
                        <div className="mt-5 rounded-2xl border border-[#C41E3A]/10 bg-[#FFF7F7] px-4 py-3 text-sm text-slate-700">
                          <p className="font-semibold text-[#C41E3A]">Keyword match</p>
                          <p className="mt-2 leading-6" dangerouslySetInnerHTML={{ __html: item.snippet }} />
                        </div>
                      ) : null}
                    </article>
                  </li>
                ))}
              </ol>

              <nav aria-label="Search results pagination" className="rounded-[28px] border border-[#0F2C47]/10 bg-white/90 p-4 shadow-[0_18px_50px_rgba(15,44,71,0.08)]">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-slate-600">
                    Page {results.page} of {results.totalPages}
                  </p>
                  <div className="flex gap-3">
                    <button type="button" disabled={results.page <= 1 || loading} onClick={() => void fetchResults(results.page - 1, true)} className={pagerButtonClassName(results.page <= 1 || loading)}>
                      Previous
                    </button>
                    <button type="button" disabled={results.page >= results.totalPages || loading} onClick={() => void fetchResults(results.page + 1, true)} className={pagerButtonClassName(results.page >= results.totalPages || loading)}>
                      Next
                    </button>
                  </div>
                </div>
              </nav>
            </>
          ) : null}

          {!submitted && !loading && !error && !results ? (
            <div className="rounded-[28px] border border-dashed border-[#0F2C47]/20 bg-white/70 p-10 text-center text-slate-600">
              Enter a search term or use the latest seven days to browse recent congressional activity.
            </div>
          ) : null}
        </section>
      </div>
    </div>
  );
}

function appendParam(params: URLSearchParams, key: string, value: string) {
  const trimmed = value.trim();
  if (trimmed) {
    params.set(key, trimmed);
  }
}

function formatDate(value: string | null) {
  if (!value) {
    return 'Unknown';
  }

  return new Date(`${value}T00:00:00Z`).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

const inputClassName = 'w-full rounded-2xl border border-[#0F2C47]/15 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#C41E3A] focus:ring-2 focus:ring-[#C41E3A]/20';

function pagerButtonClassName(disabled: boolean) {
  return `inline-flex min-w-28 items-center justify-center rounded-full px-4 py-2 font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#0F2C47] focus:ring-offset-2 ${disabled ? 'cursor-not-allowed border border-slate-200 bg-slate-100 text-slate-400' : 'border border-[#0F2C47]/20 bg-white text-[#0F2C47] hover:bg-[#F7F3EA]'}`;
}
