'use client';

import { useState } from 'react';
import { cleanDisplayText } from '@/lib/textClean';

interface ExecutiveOrderResult {
  id: number;
  document_number: string;
  eo_number: number | null;
  title: string;
  president: string;
  president_slug: string;
  signing_date: string | null;
  citation: string | null;
  fr_url: string | null;
  full_text?: string | null;
}

interface UsCodeResult {
  granule_id: string;
  title_number: number;
  title_name: string;
  citation: string;
  section_number: string;
  heading: string;
  chapter: string | null;
  full_text?: string | null;
}

const API = (process.env.NEXT_PUBLIC_THESOURCE_API_BASE || 'https://thesource-worker.ticri2025.workers.dev').trim();

export default function TruthAndLawExplorer() {
  const [eoQuery, setEoQuery] = useState('');
  const [president, setPresident] = useState('');
  const [eoResults, setEoResults] = useState<ExecutiveOrderResult[]>([]);
  const [eoLoading, setEoLoading] = useState(false);
  const [eoError, setEoError] = useState<string | null>(null);
  const [selectedEo, setSelectedEo] = useState<ExecutiveOrderResult | null>(null);

  const [codeQuery, setCodeQuery] = useState('');
  const [titleFilter, setTitleFilter] = useState('');
  const [codeResults, setCodeResults] = useState<UsCodeResult[]>([]);
  const [codeLoading, setCodeLoading] = useState(false);
  const [codeError, setCodeError] = useState<string | null>(null);
  const [selectedCode, setSelectedCode] = useState<UsCodeResult | null>(null);

  async function searchEOs(event: React.FormEvent) {
    event.preventDefault();
    setEoLoading(true);
    setEoError(null);

    try {
      const params = new URLSearchParams({ limit: '25', offset: '0' });
      if (eoQuery.trim()) {
        params.set('q', eoQuery.trim());
      }
      if (president.trim()) {
        params.set('president', president.trim().toLowerCase());
      }

      const response = await fetch(`${API}/api/eos/search?${params.toString()}`);
      if (!response.ok) {
        throw new Error(`EO search failed (${response.status})`);
      }

      const payload = await response.json() as { results: ExecutiveOrderResult[] };
      setEoResults(payload.results ?? []);
    } catch (error) {
      setEoResults([]);
      setEoError(error instanceof Error ? error.message : 'Could not load executive orders.');
    } finally {
      setEoLoading(false);
    }
  }

  async function openEoDetail(id: number) {
    setEoLoading(true);
    setEoError(null);

    try {
      const response = await fetch(`${API}/api/eos/${id}`);
      if (!response.ok) {
        throw new Error(`EO detail failed (${response.status})`);
      }
      const payload = await response.json() as ExecutiveOrderResult;
      setSelectedEo(payload);
    } catch (error) {
      setEoError(error instanceof Error ? error.message : 'Could not load executive order detail.');
    } finally {
      setEoLoading(false);
    }
  }

  async function searchUsCode(event: React.FormEvent) {
    event.preventDefault();
    setCodeLoading(true);
    setCodeError(null);

    try {
      const params = new URLSearchParams({ limit: '25', offset: '0' });
      if (codeQuery.trim()) {
        params.set('q', codeQuery.trim());
      }
      if (titleFilter.trim()) {
        params.set('title', titleFilter.trim());
      }

      const response = await fetch(`${API}/api/uscode/search?${params.toString()}`);
      if (!response.ok) {
        throw new Error(`U.S. Code search failed (${response.status})`);
      }

      const payload = await response.json() as { results: UsCodeResult[] };
      setCodeResults(payload.results ?? []);
    } catch (error) {
      setCodeResults([]);
      setCodeError(error instanceof Error ? error.message : 'Could not load U.S. Code sections.');
    } finally {
      setCodeLoading(false);
    }
  }

  async function openUsCodeDetail(granuleId: string) {
    setCodeLoading(true);
    setCodeError(null);

    try {
      const response = await fetch(`${API}/api/uscode/${encodeURIComponent(granuleId)}`);
      if (!response.ok) {
        throw new Error(`U.S. Code detail failed (${response.status})`);
      }
      const payload = await response.json() as UsCodeResult;
      setSelectedCode(payload);
    } catch (error) {
      setCodeError(error instanceof Error ? error.message : 'Could not load U.S. Code detail.');
    } finally {
      setCodeLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <section className="rounded-[28px] border border-[#0F2C47]/10 bg-white/90 p-6 shadow-[0_18px_50px_rgba(15,44,71,0.08)]">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-[#0F2C47]">Executive Orders</h2>
          <p className="text-sm text-slate-600">Search by keyword and president. Open a record to view full order text.</p>
        </div>

        <form onSubmit={searchEOs} className="grid gap-3 md:grid-cols-[2fr_1fr_auto]">
          <input
            value={eoQuery}
            onChange={(event) => setEoQuery(event.target.value)}
            placeholder="Keyword (energy, immigration, labor...)"
            className={inputClass}
          />
          <input
            value={president}
            onChange={(event) => setPresident(event.target.value)}
            placeholder="President slug (biden, obama, trump...)"
            className={inputClass}
          />
          <button type="submit" className={buttonClass}>Search EO</button>
        </form>

        {eoError ? <p className="mt-4 text-sm text-red-700">{eoError}</p> : null}
        {eoLoading ? <p className="mt-4 text-sm text-slate-600">Loading executive orders...</p> : null}

        <div className="mt-4 space-y-3">
          {eoResults.map((eo) => (
            <button
              key={eo.id}
              onClick={() => void openEoDetail(eo.id)}
              className="w-full text-left rounded-2xl border border-[#0F2C47]/10 bg-[#FBFCFE] p-4 hover:bg-[#F5F8FB] transition"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C41E3A]">
                {eo.eo_number ? `EO ${eo.eo_number}` : eo.document_number}
              </p>
              <h3 className="mt-1 text-lg font-bold text-[#0F2C47]">{cleanDisplayText(eo.title)}</h3>
              <p className="mt-2 text-sm text-slate-600">{eo.president} • {formatDate(eo.signing_date)}</p>
            </button>
          ))}
          {!eoLoading && eoResults.length === 0 ? <p className="text-sm text-slate-600">No executive orders loaded yet.</p> : null}
        </div>

        {selectedEo ? (
          <article className="mt-6 rounded-2xl border border-[#0F2C47]/10 bg-[#F5F8FB] p-5">
            <h3 className="text-xl font-bold text-[#0F2C47]">{cleanDisplayText(selectedEo.title)}</h3>
            <p className="mt-2 text-sm text-slate-700">{selectedEo.president} • {formatDate(selectedEo.signing_date)}</p>
            <p className="mt-4 text-sm leading-7 whitespace-pre-wrap text-slate-800">
              {cleanDisplayText(selectedEo.full_text) || 'No full text stored for this order.'}
            </p>
          </article>
        ) : null}
      </section>

      <section className="rounded-[28px] border border-[#0F2C47]/10 bg-white/90 p-6 shadow-[0_18px_50px_rgba(15,44,71,0.08)]">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-[#0F2C47]">U.S. Code</h2>
          <p className="text-sm text-slate-600">Search by heading/text and optionally filter by title number.</p>
        </div>

        <form onSubmit={searchUsCode} className="grid gap-3 md:grid-cols-[2fr_1fr_auto]">
          <input
            value={codeQuery}
            onChange={(event) => setCodeQuery(event.target.value)}
            placeholder="Keyword (speech, due process, taxation...)"
            className={inputClass}
          />
          <input
            value={titleFilter}
            onChange={(event) => setTitleFilter(event.target.value)}
            placeholder="Title number"
            className={inputClass}
          />
          <button type="submit" className={buttonClass}>Search Code</button>
        </form>

        {codeError ? <p className="mt-4 text-sm text-red-700">{codeError}</p> : null}
        {codeLoading ? <p className="mt-4 text-sm text-slate-600">Loading U.S. Code sections...</p> : null}

        <div className="mt-4 space-y-3">
          {codeResults.map((section) => (
            <button
              key={section.granule_id}
              onClick={() => void openUsCodeDetail(section.granule_id)}
              className="w-full text-left rounded-2xl border border-[#0F2C47]/10 bg-[#FBFCFE] p-4 hover:bg-[#F5F8FB] transition"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C41E3A]">{section.citation}</p>
              <h3 className="mt-1 text-lg font-bold text-[#0F2C47]">{cleanDisplayText(section.heading)}</h3>
              <p className="mt-2 text-sm text-slate-600">Title {section.title_number}: {cleanDisplayText(section.title_name)}</p>
            </button>
          ))}
          {!codeLoading && codeResults.length === 0 ? <p className="text-sm text-slate-600">No U.S. Code sections loaded yet.</p> : null}
        </div>

        {selectedCode ? (
          <article className="mt-6 rounded-2xl border border-[#0F2C47]/10 bg-[#F5F8FB] p-5">
            <h3 className="text-xl font-bold text-[#0F2C47]">{cleanDisplayText(selectedCode.heading)}</h3>
            <p className="mt-2 text-sm text-slate-700">{selectedCode.citation} • Title {selectedCode.title_number}</p>
            <p className="mt-4 text-sm leading-7 whitespace-pre-wrap text-slate-800">
              {cleanDisplayText(selectedCode.full_text) || 'No full text stored for this section.'}
            </p>
          </article>
        ) : null}
      </section>
    </div>
  );
}

const inputClass = 'w-full rounded-2xl border border-[#0F2C47]/15 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#C41E3A] focus:ring-2 focus:ring-[#C41E3A]/20';
const buttonClass = 'inline-flex items-center justify-center rounded-full bg-[#C41E3A] px-5 py-3 font-bold text-white shadow-lg shadow-[#C41E3A]/20 transition hover:bg-[#9B1829]';

function formatDate(value: string | null): string {
  if (!value) {
    return 'Unknown';
  }

  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return value;
  }

  return parsed.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}
