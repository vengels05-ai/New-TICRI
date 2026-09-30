'use client';

import { useMemo, useState } from 'react';
import { ChevronDown, FileText } from 'lucide-react';
import { cleanDisplayText } from '@/lib/textClean';

const DEFAULT_CHUNK_SIZE = 10_000;

interface PrimarySourceReaderProps {
  title?: string;
  text: string | null | undefined;
  emptyText?: string;
  sourceLabel: string;
  sourceDetail?: string;
  initialChars?: number;
  className?: string;
}

export default function PrimarySourceReader({
  title = 'Primary Source Text',
  text,
  emptyText = 'Primary source text is not available for this record yet.',
  sourceLabel,
  sourceDetail,
  initialChars = DEFAULT_CHUNK_SIZE,
  className = '',
}: PrimarySourceReaderProps) {
  const cleanedText = useMemo(() => cleanDisplayText(text), [text]);
  const [visibleChars, setVisibleChars] = useState(initialChars);

  const visibleText = cleanedText.slice(0, visibleChars);
  const remainingChars = Math.max(cleanedText.length - visibleChars, 0);
  const canLoadMore = remainingChars > 0;

  return (
    <article className={`border border-[#0F2C47]/10 bg-white shadow-sm ${className}`}>
      <div className="flex flex-col gap-4 border-b border-[#0F2C47]/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="min-w-0">
          <div className="inline-flex items-center gap-2 border border-[#0F2C47]/15 bg-[#F7F3EA] px-3 py-1 text-xs font-bold uppercase text-[#0F2C47]">
            <FileText className="h-4 w-4" />
            Primary Source
          </div>
          <h2 className="mt-3 text-2xl font-black text-[#0F2C47]">{title}</h2>
        </div>
        <div className="shrink-0 border border-[#C41E3A]/25 bg-[#C41E3A]/10 px-3 py-2 text-sm font-bold text-[#9B1829]">
          {sourceLabel}
        </div>
      </div>

      {sourceDetail ? (
        <p className="border-b border-[#0F2C47]/10 px-5 py-3 text-sm text-[#29465f] sm:px-6">{sourceDetail}</p>
      ) : null}

      {cleanedText ? (
        <>
          <div className="max-h-[72vh] overflow-y-auto bg-[#FCFCFA] px-5 py-6 sm:px-8">
            <pre className="whitespace-pre-wrap font-serif text-base leading-8 text-slate-900">{visibleText}</pre>
          </div>
          <div className="flex flex-col gap-3 border-t border-[#0F2C47]/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p className="text-sm text-slate-600">
              Showing {Math.min(visibleChars, cleanedText.length).toLocaleString()} of {cleanedText.length.toLocaleString()} characters.
            </p>
            {canLoadMore ? (
              <button
                type="button"
                onClick={() => setVisibleChars((current) => Math.min(current + DEFAULT_CHUNK_SIZE, cleanedText.length))}
                className="inline-flex items-center justify-center gap-2 bg-[#0F2C47] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#173f63]"
              >
                <ChevronDown className="h-4 w-4" />
                Load more
              </button>
            ) : null}
          </div>
        </>
      ) : (
        <p className="px-5 py-8 text-sm text-slate-600 sm:px-6">{emptyText}</p>
      )}
    </article>
  );
}
