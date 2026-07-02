// app/cases/search/page.tsx
// TICRI Supreme Court Cases -- Search & Browse
// Powered by TheSource SCOTUS data (494,501 cases)

import { Scale, Search, TrendingUp, Clock, BookOpen } from 'lucide-react';
import { getCasesIndex, getRecentCases, getNotableCases, formatVotes, directionColor } from '@/lib/scotus';
import type { CaseIndex } from '@/lib/scotus';
import CasesSearchClient from '@/components/scotus/CasesSearchClient';

export const metadata = {
  title: 'Supreme Court Cases | TICRI',
  description: 'Search 494,000+ Supreme Court cases from 1789 to present. Read actual opinions, vote breakdowns, and plain-English explanations.',
};

export default function CasesSearchPage() {
  const recent = getRecentCases(12);
  const notable = getNotableCases(12);
  const index = getCasesIndex();
  const totalCases = index.length;

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Scale className="w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-bold">Supreme Court Cases</h1>
          </div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-4">
            {totalCases.toLocaleString()} cases from 1789 to present — primary source opinions, vote breakdowns, and real legal history.
          </p>
          <p className="text-gray-400 text-sm">
            Source: CourtListener / Free Law Project bulk data
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <CasesSearchClient cases={index} />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Browse existing categories */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-7 h-7 text-gray-900" />
              <h2 className="text-2xl font-bold text-gray-900">Browse by Category</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {[
                { label: 'Constitutional Foundations', href: '/cases/foundational' },
                { label: 'Civil Rights', href: '/cases/civil-rights' },
                { label: 'Criminal Justice', href: '/cases/criminal-justice' },
                { label: 'First Amendment', href: '/cases/first-amendment' },
                { label: 'Executive Power', href: '/cases/executive-power' },
                { label: 'Federalism', href: '/cases/federalism' },
                { label: 'Economic Rights', href: '/cases/economic-rights' },
                { label: 'Separation of Powers', href: '/cases/separation-of-powers' },
                { label: 'Healthcare Law', href: '/cases/healthcare-law' },
                { label: 'Military Service', href: '/cases/military-service' },
                { label: 'Parental Rights', href: '/cases/parental-rights' },
                { label: 'Wartime Powers', href: '/cases/wartime-powers' },
              ].map(cat => (
                <a
                  key={cat.href}
                  href={cat.href}
                  className="bg-white border border-gray-200 rounded-lg p-3 text-sm font-medium text-gray-700 hover:border-gray-800 hover:text-gray-900 transition-colors text-center shadow-sm"
                >
                  {cat.label}
                </a>
              ))}
            </div>
          </div>

          {/* Most Cited */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-7 h-7 text-gray-900" />
              <h2 className="text-2xl font-bold text-gray-900">Most Cited Cases</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {notable.map(c => (
                <CaseCard key={c.id} case={c} />
              ))}
            </div>
          </div>

          {/* Recent Decisions */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-7 h-7 text-gray-900" />
              <h2 className="text-2xl font-bold text-gray-900">Recent Decisions</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recent.map(c => (
                <CaseCard key={c.id} case={c} />
              ))}
            </div>
          </div>

          {/* Source note */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
            <p className="text-gray-800 flex items-start gap-2">
              <BookOpen className="w-5 h-5 mt-1 text-blue-600 flex-shrink-0" />
              <span>
                <strong>Primary Source Data:</strong> Case data comes from CourtListener's public bulk dataset maintained by the Free Law Project. Opinion text covers 1999–2025. Earlier cases include metadata and vote records from the Supreme Court Database (SCDB).
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function CaseCard({ case: c }: { case: CaseIndex }) {
  const votes = formatVotes(c.votesMajority, c.votesMinority);
  const year = c.year || '–';

  return (
    <a
      href={`/cases/opinion/${c.id}`}
      className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow border border-gray-100 hover:border-gray-300 block"
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded">{year}</span>
        {c.direction && (
          <span className={`text-xs px-2 py-1 rounded font-medium ${directionColor(c.direction)}`}>
            {c.direction}
          </span>
        )}
      </div>
      <h3 className="font-bold text-gray-900 text-sm leading-snug mb-2 line-clamp-2">
        {c.caseName}
      </h3>
      <div className="flex items-center gap-3 text-xs text-gray-500">
        {votes && <span>Vote: {votes}</span>}
        {c.citationCount > 0 && <span>{c.citationCount.toLocaleString()} citations</span>}
      </div>
      {c.docketNumber && (
        <p className="text-xs text-gray-400 mt-1">{c.docketNumber}</p>
      )}
    </a>
  );
}
