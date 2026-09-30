'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AlertCircle, ArrowLeft, Loader2 } from 'lucide-react';
import { getUscodeSection } from '@/lib/thesource';
import type { UscodeSection } from '@/lib/thesource';
import { cleanDisplayText } from '@/lib/textClean';
import PrimarySourceReader from '@/components/thesource/PrimarySourceReader';

export default function UscodeSectionClient({ granuleId }: { granuleId: string }) {
  const [section, setSection] = useState<UscodeSection | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function loadSection() {
      if (!granuleId) {
        setError('Missing U.S. Code section ID.');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const payload = await getUscodeSection(granuleId);
        if (active) {
          setSection(payload);
        }
      } catch (loadError) {
        if (active) {
          setError(loadError instanceof Error ? loadError.message : 'Could not load this U.S. Code section.');
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    void loadSection();

    return () => {
      active = false;
    };
  }, [granuleId]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white px-4">
        <div className="text-center">
          <Loader2 className="mx-auto mb-4 h-10 w-10 animate-spin text-[#C41E3A]" />
          <p className="text-sm font-semibold text-[#29465f]">Loading U.S. Code section...</p>
        </div>
      </main>
    );
  }

  if (error || !section) {
    return (
      <main className="min-h-screen bg-white px-4 py-16">
        <div className="mx-auto max-w-xl text-center">
          <AlertCircle className="mx-auto mb-4 h-12 w-12 text-red-600" />
          <h1 className="text-2xl font-black text-[#0F2C47]">Could Not Load Section</h1>
          <p className="mt-3 text-sm text-slate-600">{error || 'This U.S. Code section is unavailable.'}</p>
          <Link href="/us-code" className="mt-6 inline-flex items-center gap-2 bg-[#0F2C47] px-4 py-2 text-sm font-bold text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to U.S. Code Search
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white pb-16">
      <section className="border-b border-[#0F2C47]/10 bg-[#EEF3F8]">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
          <Link href="/us-code" className="inline-flex items-center gap-2 text-sm font-semibold text-[#29465f] hover:text-[#C41E3A]">
            <ArrowLeft className="h-4 w-4" />
            U.S. Code Search
          </Link>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[#C41E3A]">
            {section.citation || `Title ${section.title_number}`}
          </p>
          <h1 className="mt-2 text-4xl font-black tracking-tight text-[#0F2C47]">
            {cleanDisplayText(section.heading) || `Section ${section.section_number}`}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#29465f]">{cleanDisplayText(section.title_name)}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Meta label="Title" value={section.title_number} />
            <Meta label="Section" value={section.section_number} />
            {section.chapter ? <Meta label="Chapter" value={cleanDisplayText(section.chapter)} /> : null}
            {section.subchapter ? <Meta label="Subchapter" value={cleanDisplayText(section.subchapter)} /> : null}
            {section.edition_year || section.edition ? <Meta label="Edition" value={section.edition_year || section.edition || ''} /> : null}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <PrimarySourceReader
          title="U.S. Code Section Text"
          text={section.full_text}
          emptyText="Full text is not stored for this U.S. Code section yet."
          sourceLabel="GovInfo"
          sourceDetail={section.full_text_source === 'r2'
            ? 'Loaded from TheSource R2 primary-source storage.'
            : 'Loaded from TheSource U.S. Code metadata.'}
        />

        {section.notes_text ? (
          <article className="mt-6 border border-[#0F2C47]/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="border-b border-[#0F2C47]/10 pb-3 text-2xl font-black text-[#0F2C47]">Notes</h2>
            <p className="mt-6 whitespace-pre-wrap text-sm leading-7 text-slate-800">{cleanDisplayText(section.notes_text)}</p>
          </article>
        ) : null}
      </section>
    </main>
  );
}

function Meta({ label, value }: { label: string; value: string | number }) {
  return (
    <span className="border border-[#0F2C47]/10 bg-white px-3 py-1 font-semibold text-[#29465f]">
      {label}: {value}
    </span>
  );
}
