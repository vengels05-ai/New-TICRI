import Link from 'next/link';
import { getCuratedOpinionEntries, opinionPath } from '@/lib/curatedOpinions';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata(
  '/cases/opinions/',
  'Landmark Supreme Court Opinion Library',
  'Read available primary-source text for landmark Supreme Court opinions, with decision dates, source links, and related plain-English case explainers.',
);

export default function OpinionLibraryPage() {
  const entries = getCuratedOpinionEntries();
  return (
    <div className="bg-white">
      <section className="bg-[#0F2C47] px-4 py-16 text-white">
        <div className="mx-auto max-w-5xl">
          <Link href="/cases/" className="text-blue-100 underline">← Landmark cases</Link>
          <h1 className="mt-6 text-4xl font-bold">Supreme Court Opinion Library</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            Read the available opinion text for {entries.length} landmark decisions and connect each source to its plain-English explainer.
            Some texts are excerpts; each page links to the original source record.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-4 py-12" aria-labelledby="library-heading">
        <h2 id="library-heading" className="mb-6 text-2xl font-bold text-[#0F2C47]">Browse decisions by year</h2>
        <ol className="grid gap-4 sm:grid-cols-2">
          {entries.map(entry => (
            <li key={entry.slug} className="rounded-lg border border-slate-200 p-5">
              <p className="text-sm font-semibold text-slate-600">{entry.year}</p>
              <h3 className="mt-2 text-xl font-bold text-[#0F2C47]">
                <Link href={opinionPath(entry.slug)} className="hover:underline">{entry.name}</Link>
              </h3>
              <Link href={`/cases/${entry.category}/${entry.slug}/`} className="mt-3 inline-block text-sm font-semibold text-[#9B1829] hover:underline">
                Read the plain-English explainer →
              </Link>
            </li>
          ))}
        </ol>
        <Link href="/cases/search/" className="mt-10 inline-block font-semibold text-[#0F2C47] underline">Search the wider case collection →</Link>
      </section>
    </div>
  );
}
