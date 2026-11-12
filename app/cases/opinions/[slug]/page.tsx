import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCuratedOpinion, getCuratedOpinionEntries, opinionDescription, opinionPath } from '@/lib/curatedOpinions';
import { canonicalUrl, createPageMetadata } from '@/lib/seo';
import { cleanDisplayText } from '@/lib/textClean';

export const dynamicParams = false;

export function generateStaticParams() {
  return getCuratedOpinionEntries().map(entry => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const record = getCuratedOpinion(slug);
  if (!record) notFound();
  return createPageMetadata(opinionPath(slug), `${record.entry.name} (${record.entry.year}): Opinion`, opinionDescription(record.entry));
}

export default async function CuratedOpinionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const record = getCuratedOpinion(slug);
  if (!record) notFound();
  const { entry, detail, opinions } = record;
  const explainerPath = `/cases/${entry.category}/${entry.slug}/`;
  const sourceUrl = `https://www.courtlistener.com/opinion/${entry.id}/`;
  const date = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${detail.dateFiled}T00:00:00Z`));
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': canonicalUrl(opinionPath(slug)),
        url: canonicalUrl(opinionPath(slug)),
        name: `${entry.name} (${entry.year}): Opinion`,
        description: opinionDescription(entry),
        inLanguage: 'en-US',
        isBasedOn: sourceUrl,
        relatedLink: canonicalUrl(explainerPath),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: canonicalUrl('/') },
          { '@type': 'ListItem', position: 2, name: 'Supreme Court Opinions', item: canonicalUrl('/cases/opinions/') },
          { '@type': 'ListItem', position: 3, name: entry.name, item: canonicalUrl(opinionPath(slug)) },
        ],
      },
    ],
  };

  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
      <section className="bg-[#0F2C47] px-4 py-12 text-white">
        <div className="mx-auto max-w-4xl">
          <Link href="/cases/opinions/" className="text-blue-100 underline">← Opinion library</Link>
          <h1 className="mt-6 text-3xl font-bold md:text-5xl">{entry.name} ({entry.year})</h1>
          <p className="mt-4 text-lg text-blue-100">Supreme Court of the United States · Opinion text</p>
          <p className="mt-2 text-blue-100">Decision date: <time dateTime={detail.dateFiled!}>{date}</time></p>
          <div className="mt-6 flex flex-wrap gap-5 font-semibold">
            <Link href={explainerPath} className="underline">Read the plain-English explainer</Link>
            <a href={sourceUrl} className="underline">View the original CourtListener record</a>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-4xl px-4 py-10">
        <aside className="mb-8 border-l-4 border-[#C41E3A] bg-slate-50 p-5 text-sm leading-7 text-slate-700">
          This historical source shows the text available in this collection. Some texts are excerpts rather than complete opinions.
          Consult the original source for the complete decision and additional opinions. The related explainer provides context for the case.
        </aside>
        {opinions.map((opinion, index) => (
          <article key={opinion.id} aria-labelledby={`opinion-${index}`} className="mb-12">
            <h2 id={`opinion-${index}`} className="border-b border-slate-200 pb-4 text-2xl font-bold text-[#0F2C47]">
              {opinions.length === 1 ? 'Available opinion text' : `Opinion ${index + 1}`}
            </h2>
            {opinion.author ? <p className="mt-3 text-sm text-slate-600">Author: {cleanDisplayText(opinion.author)}</p> : null}
            <div data-opinion-text data-source-length={opinion.text.length} className="mt-6 whitespace-pre-wrap font-serif text-base leading-8 text-slate-900">{opinion.text}</div>
            <p className="mt-4 text-sm text-slate-600">Source: CourtListener / Free Law Project</p>
          </article>
        ))}
        <Link href={explainerPath} className="font-semibold text-[#9B1829] underline">Explore the history and significance of {entry.name} →</Link>
      </div>
    </div>
  );
}
