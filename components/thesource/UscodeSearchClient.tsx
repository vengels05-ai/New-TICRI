'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft, BookOpen, ChevronDown, Loader2, Search } from 'lucide-react';
import { searchUscode } from '@/lib/thesource';
import type { UscodeSection } from '@/lib/thesource';
import { cleanDisplayText } from '@/lib/textClean';

const PAGE_SIZE = 50;

type UscodeTitle = {
  number: number;
  name: string;
};

const USC_TITLES: UscodeTitle[] = [
  { number: 1, name: 'General Provisions' },
  { number: 2, name: 'The Congress' },
  { number: 3, name: 'The President' },
  { number: 4, name: 'Flag and Seal, Seat of Government, and the States' },
  { number: 5, name: 'Government Organization and Employees' },
  { number: 6, name: 'Domestic Security' },
  { number: 7, name: 'Agriculture' },
  { number: 8, name: 'Aliens and Nationality' },
  { number: 9, name: 'Arbitration' },
  { number: 10, name: 'Armed Forces' },
  { number: 11, name: 'Bankruptcy' },
  { number: 12, name: 'Banks and Banking' },
  { number: 13, name: 'Census' },
  { number: 14, name: 'Coast Guard' },
  { number: 15, name: 'Commerce and Trade' },
  { number: 16, name: 'Conservation' },
  { number: 17, name: 'Copyrights' },
  { number: 18, name: 'Crimes and Criminal Procedure' },
  { number: 19, name: 'Customs Duties' },
  { number: 20, name: 'Education' },
  { number: 21, name: 'Food and Drugs' },
  { number: 22, name: 'Foreign Relations and Intercourse' },
  { number: 23, name: 'Highways' },
  { number: 24, name: 'Hospitals and Asylums' },
  { number: 25, name: 'Indians' },
  { number: 26, name: 'Internal Revenue Code' },
  { number: 27, name: 'Intoxicating Liquors' },
  { number: 28, name: 'Judiciary and Judicial Procedure' },
  { number: 29, name: 'Labor' },
  { number: 30, name: 'Mineral Lands and Mining' },
  { number: 31, name: 'Money and Finance' },
  { number: 32, name: 'National Guard' },
  { number: 33, name: 'Navigation and Navigable Waters' },
  { number: 35, name: 'Patents' },
  { number: 36, name: 'Patriotic and National Observances, Ceremonies, and Organizations' },
  { number: 37, name: 'Pay and Allowances of the Uniformed Services' },
  { number: 38, name: "Veterans' Benefits" },
  { number: 39, name: 'Postal Service' },
  { number: 40, name: 'Public Buildings, Property, and Works' },
  { number: 41, name: 'Public Contracts' },
  { number: 42, name: 'The Public Health and Welfare' },
  { number: 43, name: 'Public Lands' },
  { number: 44, name: 'Public Printing and Documents' },
  { number: 45, name: 'Railroads' },
  { number: 46, name: 'Shipping' },
  { number: 47, name: 'Telecommunications' },
  { number: 48, name: 'Territories and Insular Possessions' },
  { number: 49, name: 'Transportation' },
  { number: 50, name: 'War and National Defense' },
  { number: 51, name: 'National and Commercial Space Programs' },
  { number: 52, name: 'Voting and Elections' },
  { number: 54, name: 'National Park Service and Related Programs' },
];

export default function UscodeSearchClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlQuery = searchParams.get('q')?.trim() ?? '';
  const urlTitle = searchParams.get('title')?.trim() ?? '';

  const [queryInput, setQueryInput] = useState(urlQuery);
  const [sections, setSections] = useState<UscodeSection[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(false);

  const selectedTitle = useMemo(() => {
    const parsed = Number.parseInt(urlTitle, 10);
    if (Number.isNaN(parsed)) return undefined;
    return USC_TITLES.find((title) => title.number === parsed);
  }, [urlTitle]);

  const selectedTitleNumber = selectedTitle?.number;
  const mode = urlQuery ? 'search' : selectedTitleNumber ? 'title' : 'index';

  useEffect(() => {
    setQueryInput(urlQuery);
  }, [urlQuery]);

  useEffect(() => {
    let active = true;

    async function loadSections() {
      if (mode === 'index') {
        setSections([]);
        setError(null);
        setHasMore(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const payload = mode === 'search'
          ? await searchUscode(urlQuery, undefined, PAGE_SIZE + 1, 0)
          : await searchUscode('', selectedTitleNumber, PAGE_SIZE + 1, 0);

        if (active) {
          const nextResults = payload.results ?? [];
          setSections(nextResults.slice(0, PAGE_SIZE));
          setHasMore(nextResults.length > PAGE_SIZE);
        }
      } catch (searchError) {
        if (active) {
          setSections([]);
          setHasMore(false);
          setError(searchError instanceof Error ? searchError.message : 'Could not load U.S. Code sections.');
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    void loadSections();
    return () => {
      active = false;
    };
  }, [mode, selectedTitleNumber, urlQuery]);

  function pushParams(params: { q?: string; title?: number }) {
    const next = new URLSearchParams();
    if (params.q) next.set('q', params.q);
    if (params.title) next.set('title', String(params.title));
    router.push(next.toString() ? `/us-code?${next.toString()}` : '/us-code');
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedQuery = queryInput.trim();
    if (trimmedQuery) {
      pushParams({ q: trimmedQuery });
    } else {
      pushParams({});
    }
  }

  async function loadMore() {
    if (mode === 'index') return;

    try {
      setLoadingMore(true);
      setError(null);
      const payload = mode === 'search'
        ? await searchUscode(urlQuery, undefined, PAGE_SIZE + 1, sections.length)
        : await searchUscode('', selectedTitleNumber, PAGE_SIZE + 1, sections.length);
      const nextResults = payload.results ?? [];
      setSections((current) => [...current, ...nextResults.slice(0, PAGE_SIZE)]);
      setHasMore(nextResults.length > PAGE_SIZE);
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : 'Could not load more sections.');
    } finally {
      setLoadingMore(false);
    }
  }

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="border border-[#0F2C47]/10 bg-white p-5 shadow-sm sm:p-6">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto]">
          <label className="block">
            <span className="text-sm font-bold text-[#0F2C47]">Search the U.S. Code</span>
            <div className="mt-2 flex items-center gap-3 border border-[#0F2C47]/15 bg-white px-4 py-3">
              <Search className="h-5 w-5 shrink-0 text-[#61758a]" />
              <input
                value={queryInput}
                onChange={(event) => setQueryInput(event.target.value)}
                placeholder="Search civil rights, 5 U.S.C. 552, taxation..."
                className="w-full bg-transparent text-base text-slate-900 outline-none placeholder:text-slate-500"
              />
            </div>
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
        {mode !== 'index' ? (
          <button
            type="button"
            onClick={() => pushParams({})}
            className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#C41E3A] hover:text-[#9B1829]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Title Index
          </button>
        ) : null}
      </form>

      {error ? <p className="border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</p> : null}

      {mode === 'index' ? <TitleIndex onSelectTitle={(title) => pushParams({ title })} /> : null}

      {mode === 'title' && selectedTitle ? (
        <SectionResults
          title={`Title ${selectedTitle.number} Sections`}
          eyebrow={`U.S. Code > Title ${selectedTitle.number} -- ${selectedTitle.name}`}
          sections={sections}
          loading={loading}
          loadingMore={loadingMore}
          hasMore={hasMore}
          emptyText={`No sections were returned for Title ${selectedTitle.number}.`}
          onLoadMore={loadMore}
        />
      ) : null}

      {mode === 'search' ? (
        <SectionResults
          title={`Search results for "${urlQuery}"`}
          eyebrow="U.S. Code Search"
          sections={sections}
          loading={loading}
          loadingMore={loadingMore}
          hasMore={hasMore}
          emptyText="No U.S. Code sections matched that search."
          onLoadMore={loadMore}
        />
      ) : null}
    </div>
  );
}

function TitleIndex({ onSelectTitle }: { onSelectTitle: (title: number) => void }) {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-3xl font-black text-[#0F2C47]">Title Index</h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-[#29465f]">
          Browse the active U.S. Code titles. Select a title to load its sections from TheSource.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {USC_TITLES.map((title) => (
          <button
            key={title.number}
            type="button"
            onClick={() => onSelectTitle(title.number)}
            className="min-h-32 border border-[#0F2C47]/10 bg-white p-5 text-left shadow-sm transition hover:border-[#C41E3A]/40 hover:shadow-md"
          >
            <p className="text-2xl font-black text-[#C41E3A]">Title {title.number}</p>
            <h3 className="mt-3 text-base font-bold leading-6 text-[#0F2C47]">{title.name}</h3>
          </button>
        ))}
      </div>
    </section>
  );
}

function SectionResults({
  title,
  eyebrow,
  sections,
  loading,
  loadingMore,
  hasMore,
  emptyText,
  onLoadMore,
}: {
  title: string;
  eyebrow: string;
  sections: UscodeSection[];
  loading: boolean;
  loadingMore: boolean;
  hasMore: boolean;
  emptyText: string;
  onLoadMore: () => void;
}) {
  return (
    <section className="space-y-3">
      <div className="border border-[#0F2C47]/10 bg-white p-5 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C41E3A]">{eyebrow}</p>
        <h2 className="mt-2 text-3xl font-black text-[#0F2C47]">{title}</h2>
        <p className="mt-2 text-sm text-[#61758a]">
          {loading ? 'Loading sections...' : `${sections.length.toLocaleString()} sections shown`}
        </p>
      </div>

      {loading ? (
        <div className="border border-[#0F2C47]/10 bg-white p-8 text-center text-sm font-semibold text-[#29465f]">
          <Loader2 className="mx-auto mb-3 h-6 w-6 animate-spin text-[#C41E3A]" />
          Loading TheSource sections...
        </div>
      ) : null}

      {!loading && sections.length === 0 ? (
        <div className="border border-[#0F2C47]/10 bg-white p-8 text-center text-sm text-slate-600">
          {emptyText}
        </div>
      ) : null}

      {sections.map((section) => (
        <SectionRow key={section.granule_id} section={section} />
      ))}

      {!loading && hasMore ? (
        <div className="pt-3 text-center">
          <button
            type="button"
            onClick={onLoadMore}
            disabled={loadingMore}
            className="inline-flex items-center justify-center gap-2 bg-[#0F2C47] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#173f63] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loadingMore ? <Loader2 className="h-4 w-4 animate-spin" /> : <ChevronDown className="h-4 w-4" />}
            Load more
          </button>
        </div>
      ) : null}
    </section>
  );
}

function SectionRow({ section }: { section: UscodeSection }) {
  return (
    <Link
      href={`/us-code/section?id=${encodeURIComponent(section.granule_id)}`}
      className="block border border-[#0F2C47]/10 bg-white p-5 shadow-sm transition hover:border-[#C41E3A]/40 hover:shadow-md"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C41E3A]">
            {section.citation || `Title ${section.title_number}`}
          </p>
          <h3 className="mt-2 text-xl font-black text-[#0F2C47]">
            {cleanDisplayText(section.heading) || `Section ${section.section_number}`}
          </h3>
          {section.snippet ? (
            <p className="mt-2 text-sm leading-6 text-[#29465f]">{cleanDisplayText(section.snippet)}</p>
          ) : null}
        </div>
        <div className="inline-flex shrink-0 items-center gap-2 border border-[#0F2C47]/10 px-3 py-2 text-sm font-bold text-[#29465f]">
          <BookOpen className="h-4 w-4" />
          Read
        </div>
      </div>
    </Link>
  );
}
