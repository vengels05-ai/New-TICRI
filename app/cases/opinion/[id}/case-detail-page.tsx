// app/cases/opinion/[id]/page.tsx
// Individual SCOTUS Case Detail Page
// Powered by TheSource data -- primary source opinions with full text

import { notFound } from 'next/navigation';
import { Scale, FileText, Users, ChevronLeft, BookOpen, ExternalLink } from 'lucide-react';
import { getCaseDetail, getAllCaseIds, formatVotes, directionColor } from '@/lib/scotus';

interface Props {
  params: { id: string };
}

// Generate static paths for all cases with opinion text
export async function generateStaticParams() {
  const ids = getAllCaseIds();
  return ids.map(id => ({ id: String(id) }));
}

export async function generateMetadata({ params }: Props) {
  const detail = getCaseDetail(parseInt(params.id));
  if (!detail) return { title: 'Case Not Found | TICRI' };
  return {
    title: `${detail.caseName} | TICRI`,
    description: detail.syllabus
      ? detail.syllabus.slice(0, 160)
      : `Supreme Court case: ${detail.caseName} (${detail.year || 'year unknown'})`,
  };
}

export default function CaseDetailPage({ params }: Props) {
  const detail = getCaseDetail(parseInt(params.id));
  if (!detail) notFound();

  const majority = detail.opinions.find(o => o.type === 'majority');
  const dissents = detail.opinions.filter(o => o.type === 'dissent');
  const concurrences = detail.opinions.filter(o => o.type === 'concurrence');
  const votes = formatVotes(detail.votesMajority, detail.votesMinority);

  return (
    <div className="bg-white">
      {/* Hero */}
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
            {detail.year && (
              <span className="bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                {detail.year}
              </span>
            )}
            {detail.direction && (
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                detail.direction === 'Conservative' ? 'bg-red-200 text-red-900' :
                detail.direction === 'Liberal' ? 'bg-blue-200 text-blue-900' :
                'bg-gray-200 text-gray-900'
              }`}>
                {detail.direction}
              </span>
            )}
            {votes && (
              <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                {votes}
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            {detail.caseName}
          </h1>
          {detail.docketNumber && (
            <p className="text-gray-400 text-base">
              Docket No. {detail.docketNumber}
            </p>
          )}
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

          {/* Fast Facts */}
          <div className="bg-gray-50 rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Scale className="w-5 h-5" /> Fast Facts
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              {detail.dateFiled && (
                <div>
                  <p className="text-gray-500 font-medium">Date Filed</p>
                  <p className="text-gray-900">{new Date(detail.dateFiled).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
              )}
              {detail.dateArgued && (
                <div>
                  <p className="text-gray-500 font-medium">Argued</p>
                  <p className="text-gray-900">{new Date(detail.dateArgued).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
              )}
              {votes && (
                <div>
                  <p className="text-gray-500 font-medium">Vote</p>
                  <p className="text-gray-900">{votes}</p>
                </div>
              )}
              {detail.judges && (
                <div className="col-span-2 md:col-span-3">
                  <p className="text-gray-500 font-medium">Justices</p>
                  <p className="text-gray-900">{detail.judges}</p>
                </div>
              )}
              {detail.disposition && (
                <div className="col-span-2 md:col-span-3">
                  <p className="text-gray-500 font-medium">Disposition</p>
                  <p className="text-gray-900">{detail.disposition}</p>
                </div>
              )}
              {detail.citationCount > 0 && (
                <div>
                  <p className="text-gray-500 font-medium">Times Cited</p>
                  <p className="text-gray-900">{detail.citationCount.toLocaleString()}</p>
                </div>
              )}
            </div>
          </div>

          {/* Syllabus */}
          {detail.syllabus && (
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-800 pb-2">
                📋 Syllabus
              </h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line text-sm">
                {detail.syllabus}
              </p>
            </div>
          )}

          {/* Summary */}
          {detail.summary && !detail.syllabus && (
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-800 pb-2">
                📋 Summary
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm">
                {detail.summary}
              </p>
            </div>
          )}

          {/* Majority Opinion */}
          {majority && majority.text && (
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 border-b-2 border-gray-800 pb-2 flex items-center gap-2">
                <FileText className="w-6 h-6" />
                Majority Opinion
              </h2>
              {majority.author && (
                <p className="text-gray-600 text-sm mb-4">
                  {majority.perCuriam ? 'Per Curiam' : `By ${majority.author}`}
                  {majority.joinedBy ? ` — joined by ${majority.joinedBy}` : ''}
                </p>
              )}
              <div className="bg-gray-50 rounded-lg p-6 max-h-96 overflow-y-auto">
                <pre className="text-gray-800 text-sm leading-relaxed whitespace-pre-wrap font-sans">
                  {majority.text}
                </pre>
              </div>
              {majority.textLength > 50000 && (
                <p className="text-xs text-gray-400 mt-2">
                  Showing first 50,000 characters of {majority.textLength.toLocaleString()} character opinion.
                </p>
              )}
            </div>
          )}

          {/* Concurrences */}
          {concurrences.length > 0 && (
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
                🤝 Concurring Opinion{concurrences.length > 1 ? 's' : ''}
              </h2>
              {concurrences.map((c, i) => (
                <div key={c.id} className={i > 0 ? 'mt-6 pt-6 border-t border-gray-200' : ''}>
                  {c.author && (
                    <p className="text-gray-600 text-sm font-medium mb-3">
                      By {c.author}
                      {c.joinedBy ? ` — joined by ${c.joinedBy}` : ''}
                    </p>
                  )}
                  {c.text && (
                    <div className="bg-blue-50 rounded-lg p-4 max-h-64 overflow-y-auto">
                      <pre className="text-gray-800 text-sm leading-relaxed whitespace-pre-wrap font-sans">
                        {c.text}
                      </pre>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Dissents */}
          {dissents.length > 0 && (
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-red-600 pb-2">
                ✋ Dissenting Opinion{dissents.length > 1 ? 's' : ''}
              </h2>
              {dissents.map((d, i) => (
                <div key={d.id} className={i > 0 ? 'mt-6 pt-6 border-t border-gray-200' : ''}>
                  {d.author && (
                    <p className="text-gray-600 text-sm font-medium mb-3">
                      By {d.author}
                      {d.joinedBy ? ` — joined by ${d.joinedBy}` : ''}
                    </p>
                  )}
                  {d.text && (
                    <div className="bg-red-50 rounded-lg p-4 max-h-64 overflow-y-auto">
                      <pre className="text-gray-800 text-sm leading-relaxed whitespace-pre-wrap font-sans">
                        {d.text}
                      </pre>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Procedural History */}
          {detail.proceduralHistory && (
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2">
                📁 Procedural History
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                {detail.proceduralHistory}
              </p>
            </div>
          )}

          {/* Citations */}
          {detail.citations.length > 0 && (
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2 flex items-center gap-2">
                <BookOpen className="w-5 h-5" /> Cases Cited
              </h2>
              <div className="space-y-2">
                {detail.citations.map(c => (
                  <a
                    key={c.clusterId}
                    href={`/cases/opinion/${c.clusterId}`}
                    className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors group"
                  >
                    <span className="text-sm text-gray-800 group-hover:text-gray-900 font-medium">
                      {c.caseName}
                    </span>
                    <span className="text-xs text-gray-400">
                      {c.dateFiled ? new Date(c.dateFiled).getFullYear() : '–'}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Source */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
            <p className="text-gray-800 text-sm flex items-start gap-2">
              <BookOpen className="w-4 h-4 mt-0.5 text-blue-600 flex-shrink-0" />
              <span>
                <strong>Primary Source:</strong> Opinion text from CourtListener (Free Law Project).
                Case metadata from the Supreme Court Database (SCDB).
                {detail.scdbId && ` SCDB ID: ${detail.scdbId}.`}
              </span>
            </p>
          </div>

          {/* Back link */}
          <div className="pt-4">
            <a
              href="/cases/search"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to all cases
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
