'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { BookOpen, Loader2, Search } from 'lucide-react';
import { searchUscode } from '@/lib/thesource';
import type { UscodeSection } from '@/lib/thesource';
import { cleanDisplayText } from '@/lib/textClean';

export default function UscodeSearchClient() {
  const [query, setQuery] = useState('');
  const [title, setTitle] = useState('');
  const [results, setResults] = useState<UscodeSection[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searched, setSearched] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedQuery = query.trim();
    const parsedTitle = title.trim() ? Number.parseInt(title.trim(), 10) : undefined;

    if (!trimmedQuery && !parsedTitle) {
      setError('Search by keyword, citation, section number, or title number.');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setSearched(true);
      const payload = await searchUscode(trimmedQuery, Number.isNaN(parsedTitle) ? undefined : parsedTitle, 25, 0);
      setResults(payload.results ?? []);
    } catch (searchError) {
      setError(searchError instanceof Error ? searchError.message : 'Could not search the U.S. Code.');
      setResults([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="border border-[#0F2C47]/10 bg-white p-5 shadow-sm sm:p-6">
        <div className="grid gap-4 lg:grid-cols-[1fr_160px_auto]">
          <label className="block">
            <span className="text-sm font-bold text-[#0F2C47]">Keyword, citation, or section</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search civil rights, 5 U.S.C. 552, taxation..."
              className="mt-2 w-full border border-[#0F2C47]/15 px-4 py-3 text-base text-slate-900 outline-none focus:border-[#C41E3A]"
            />
          </label>
          <label className="block">
            <span className="text-sm font-bold text-[#0F2C47]">Title</span>
            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              inputMode="numeric"
              placeholder="Optional"
              className="mt-2 w-full border border-[#0F2C47]/15 px-4 py-3 text-base text-slate-900 outline-none focus:border-[#C41E3A]"
            />
          </label>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 bg-[#0F2C47] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#173f63] disabled:cursor-not-allowed disabled:opacity-60 lg:self-end"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
            Search
          </button>
        </div>
        {error ? <p className="mt-4 text-sm font-semibold text-red-700">{error}</p> : null}
      </form>

      <section className="space-y-3">
        {loading ? (
          <div className="border border-[#0F2C47]/10 bg-white p-8 text-center text-sm font-semibold text-[#29465f]">
            Searching TheSource...
          </div>
        ) : null}

        {!loading && searched && results.length === 0 ? (
          <div className="border border-[#0F2C47]/10 bg-white p-8 text-center text-sm text-slate-600">
            No U.S. Code sections matched that search.
          </div>
        ) : null}

        {results.map((section) => (
          <Link
            key={section.granule_id}
            href={`/us-code/section?id=${encodeURIComponent(section.granule_id)}`}
            className="block border border-[#0F2C47]/10 bg-white p-5 shadow-sm transition hover:border-[#C41E3A]/40 hover:shadow-md"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C41E3A]">
                  {section.citation || `Title ${section.title_number}`}
                </p>
                <h2 className="mt-2 text-xl font-black text-[#0F2C47]">
                  {cleanDisplayText(section.heading) || `Section ${section.section_number}`}
                </h2>
                <p className="mt-2 text-sm leading-6 text-[#29465f]">
                  {cleanDisplayText(section.snippet) || cleanDisplayText(section.title_name)}
                </p>
              </div>
              <div className="inline-flex shrink-0 items-center gap-2 border border-[#0F2C47]/10 px-3 py-2 text-sm font-bold text-[#29465f]">
                <BookOpen className="h-4 w-4" />
                Read
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
