'use client';

import { useEffect, useState } from 'react';
import { AlertCircle, BookOpen, ChevronLeft, FileText, Scale } from 'lucide-react';
import { directionColor, directionLabel, formatVotes, getCaseDetail } from '@/lib/thesource';
import { cleanDisplayText } from '@/lib/textClean';
import type { CaseDetail, Opinion } from '@/lib/thesource';

const OPINION_PREVIEW_LIMIT = 80_000;

interface Props {
  id: string;
}

export default function CaseDetailPageClient({ id }: Props) {
  const [detail, setDetail] = useState<CaseDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function loadData() {
      const parsedId = Number.parseInt(id, 10);
      if (Number.isNaN(parsedId)) {
        setError('Invalid case ID.');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const caseData = await getCaseDetail(parsedId);
        if (active) {
          setDetail(caseData);
        }
      } catch (loadError) {
        if (active) {
          setError(loadError instanceof Error ? loadError.message : 'Could not load case details.');
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    void loadData();

    return () => {
      active = false;
    };
  }, [id]);

  if (loading) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-gray-900 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-500 font-medium">Loading case details...</p>
        </div>
      </div>
    );
  }

  if (error || !detail) {
    return (
      <div className="bg-white min-h-screen py-16">
        <div className="max-w-xl mx-auto px-4 text-center">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Could Not Load Case</h1>
          <p className="text-gray-600 mb-6">{error || 'Case details are not available.'}</p>
          <a
            href="/cases/search"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Back to Case Search
          </a>
        </div>
      </div>
    );
  }

  const votes = formatVotes(detail.scdb_votes_majority, detail.scdb_votes_minority);
  const direction = directionLabel(detail.scdb_decision_direction);
  const opinions = detail.opinions ?? [];
  const majorityOpinions = opinions.filter((opinion) => opinionType(opinion) === 'majority');
  const concurrenceOpinions = opinions.filter((opinion) => opinionType(opinion) === 'concurrence');
  const dissentOpinions = opinions.filter((opinion) => opinionType(opinion) === 'dissent');
  const otherOpinions = opinions.filter(
    (opinion) => !['majority', 'concurrence', 'dissent'].includes(opinionType(opinion))
  );

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <a
            href="/cases/search"
            className="inline-flex items-center gap-1 text-gray-400 hover:text-white text-sm mb-6 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            All Cases
          </a>
          <div className="flex flex-wrap gap-2 mb-4">
            {detail.date_filed ? (
              <span className="bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                {new Date(detail.date_filed).getFullYear()}
              </span>
            ) : null}
            {direction ? (
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${directionColor(detail.scdb_decision_direction)}`}>
                {direction}
              </span>
            ) : null}
            {votes ? (
              <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-medium">{votes}</span>
            ) : null}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">{detail.case_name}</h1>
          {detail.docket_number ? <p className="text-gray-300 text-base">Docket No. {detail.docket_number}</p> : null}
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="bg-gray-50 rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Scale className="w-5 h-5" /> Fast Facts
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <Fact label="Date Filed" value={formatDate(detail.date_filed)} />
              <Fact label="Argued" value={formatDate(detail.date_argued)} />
              <Fact label="Vote" value={votes || 'Unknown'} />
              <Fact label="Disposition" value={cleanDisplayText(detail.disposition) || 'Unknown'} wide />
              <Fact label="Justices" value={cleanDisplayText(detail.judges) || 'Unknown'} wide />
              <Fact label="Times Cited" value={detail.citation_count?.toLocaleString() || '0'} />
            </div>
          </div>

          {detail.syllabus ? <TextSection title="Syllabus" text={detail.syllabus} /> : null}
          {!detail.syllabus && detail.summary ? <TextSection title="Summary" text={detail.summary} /> : null}

          {majorityOpinions.length > 0 ? (
            <OpinionGroup title="Majority Opinion" opinions={majorityOpinions} tone="neutral" />
          ) : null}
          {concurrenceOpinions.length > 0 ? (
            <OpinionGroup title="Concurring Opinion" opinions={concurrenceOpinions} tone="blue" />
          ) : null}
          {dissentOpinions.length > 0 ? (
            <OpinionGroup title="Dissenting Opinion" opinions={dissentOpinions} tone="red" />
          ) : null}
          {otherOpinions.length > 0 ? (
            <OpinionGroup title="Opinion" opinions={otherOpinions} tone="neutral" />
          ) : null}
          {opinions.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2 flex items-center gap-2">
                <FileText className="w-5 h-5" /> Opinion Text
              </h2>
              <p className="text-sm leading-6 text-gray-700">
                Full opinion text is not available for this case record yet. The metadata above is served from TheSource.
              </p>
              <a
                href={courtListenerUrl(detail.id)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-blue-700 hover:text-blue-900"
              >
                View this record on CourtListener
              </a>
            </div>
          ) : null}

          {detail.procedural_history ? <TextSection title="Procedural History" text={detail.procedural_history} /> : null}

          {(detail.citations?.length ?? 0) > 0 ? (
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2 flex items-center gap-2">
                <BookOpen className="w-5 h-5" /> Cases Cited
              </h2>
              <div className="space-y-2">
                {detail.citations.map((citation) => (
                  <a
                    key={citation.cited_opinion_id}
                    href={`/cases/opinion/?id=${citation.cited_opinion_id}`}
                    className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors group"
                  >
                    <span className="text-sm text-gray-800 group-hover:text-gray-900 font-medium">
                      {cleanDisplayText(citation.case_name) || 'Unnamed case'}
                    </span>
                    <span className="text-xs text-gray-400">
                      {citation.date_filed ? new Date(citation.date_filed).getFullYear() : 'Unknown'}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ) : null}

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
            <p className="text-gray-800 text-sm flex items-start gap-2">
              <BookOpen className="w-4 h-4 mt-0.5 text-blue-600 flex-shrink-0" />
              <span>
                <strong>Primary Source:</strong> Opinion text from CourtListener (Free Law Project). Case metadata from the
                Supreme Court Database (SCDB).
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function Fact({ label, value, wide = false }: { label: string; value: string; wide?: boolean }) {
  return (
    <div className={wide ? 'col-span-2 md:col-span-3' : ''}>
      <p className="text-gray-500 font-medium">{label}</p>
      <p className="text-gray-900">{value}</p>
    </div>
  );
}

function TextSection({ title, text }: { title: string; text: string }) {
  const cleaned = cleanDisplayText(text);
  if (!cleaned) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2">{title}</h2>
      <p className="text-gray-700 leading-relaxed whitespace-pre-wrap text-sm">{cleaned}</p>
    </div>
  );
}

function OpinionGroup({
  title,
  opinions,
  tone,
}: {
  title: string;
  opinions: Opinion[];
  tone: 'neutral' | 'blue' | 'red';
}) {
  const borderColor = tone === 'blue' ? 'border-blue-600' : tone === 'red' ? 'border-red-600' : 'border-gray-800';
  const bgColor = tone === 'blue' ? 'bg-blue-50' : tone === 'red' ? 'bg-red-50' : 'bg-gray-50';

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className={`text-2xl font-bold text-gray-900 mb-4 border-b-2 ${borderColor} pb-2 flex items-center gap-2`}>
        <FileText className="w-5 h-5" /> {title}{opinions.length > 1 ? 's' : ''}
      </h2>

      {opinions.map((opinion, index) => {
        const preparedOpinion = prepareOpinionText(opinion);
        return (
          <div key={opinion.id} className={index > 0 ? 'mt-6 pt-6 border-t border-gray-200' : ''}>
            <p className="text-gray-600 text-sm font-medium mb-3">
              {opinion.per_curiam ? 'Per Curiam' : opinion.author_str ? `By ${cleanDisplayText(opinion.author_str)}` : 'Author not listed'}
              {opinion.joined_by_str ? ` - joined by ${cleanDisplayText(opinion.joined_by_str)}` : ''}
            </p>
            <div className={`${bgColor} rounded-lg p-5 max-h-[42rem] overflow-y-auto`}>
              <OpinionTextView preparedOpinion={preparedOpinion} opinionId={opinion.id} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function OpinionTextView({
  preparedOpinion,
  opinionId,
}: {
  preparedOpinion: PreparedOpinion;
  opinionId: number;
}) {
  if (!preparedOpinion.displayText) {
    return <p className="text-gray-800 text-sm leading-relaxed">Opinion text unavailable.</p>;
  }

  return (
    <>
      {preparedOpinion.isHtml ? (
        <div
          className="opinion-html text-gray-800 text-sm leading-relaxed"
          dangerouslySetInnerHTML={{ __html: preparedOpinion.displayText }}
        />
      ) : (
        <p className="text-gray-800 text-sm leading-relaxed whitespace-pre-wrap">{preparedOpinion.displayText}</p>
      )}
      {preparedOpinion.truncated ? (
        <div className="mt-5 rounded-md border border-blue-200 bg-white p-4 text-sm leading-6 text-gray-700">
          This opinion is long, so TICRI is showing the first {OPINION_PREVIEW_LIMIT.toLocaleString()} characters here.
          <a
            href={courtListenerUrl(opinionId)}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 font-semibold text-blue-700 hover:text-blue-900"
          >
            Continue on CourtListener
          </a>
          .
        </div>
      ) : null}
    </>
  );
}

interface PreparedOpinion {
  displayText: string;
  isHtml: boolean;
  truncated: boolean;
}

function prepareOpinionText(opinion: Opinion): PreparedOpinion {
  const html = opinion.html_with_citations?.trim();
  const plain = opinion.plain_text?.trim();
  const sourceText = html || plain || '';
  const sourceIsHtml = Boolean(html && /<[a-z][\s\S]*>/i.test(html));
  const truncated = sourceText.length > OPINION_PREVIEW_LIMIT;
  const displayText = truncated && sourceIsHtml
    ? cleanDisplayText(sourceText).slice(0, OPINION_PREVIEW_LIMIT)
    : sourceText.slice(0, OPINION_PREVIEW_LIMIT);

  return {
    displayText: sourceIsHtml && !truncated ? displayText : cleanDisplayText(displayText),
    isHtml: sourceIsHtml && !truncated,
    truncated,
  };
}

function opinionType(opinion: Opinion): string {
  return opinion.type?.toLowerCase() ?? '';
}

function courtListenerUrl(id: number): string {
  return `https://www.courtlistener.com/opinion/${id}/`;
}

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
    month: 'long',
    day: 'numeric',
  });
}
