'use client';
// components/scotus/CasesSearchClient.tsx
// Client-side search for SCOTUS cases index
// Takes the full index as prop (passed from server component)

import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import type { CaseIndex } from '@/lib/scotus';

interface Props {
  cases: CaseIndex[];
}

export default function CasesSearchClient({ cases }: Props) {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();
    return cases
      .filter(c => c.caseName.toLowerCase().includes(q))
      .slice(0, 30);
  }, [query, cases]);

  return (
    <div className="relative">
      <div className="flex items-center gap-3 bg-white rounded-xl shadow-md border border-gray-200 px-4 py-3">
        <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
        <input
          type="text"
          placeholder="Search by case name, party, or topic..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="flex-1 outline-none text-gray-900 text-base placeholder-gray-400"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="text-gray-400 hover:text-gray-600 text-sm"
          >
            Clear
          </button>
        )}
      </div>

      {/* Results dropdown */}
      {query.trim() && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 z-50 max-h-96 overflow-y-auto">
          {results.length === 0 ? (
            <div className="p-4 text-gray-500 text-sm text-center">
              No cases found for &quot;{query}&quot;
            </div>
          ) : (
            <>
              <div className="px-4 py-2 text-xs text-gray-400 border-b border-gray-100">
                {results.length} results
              </div>
              {results.map(c => (
                <a
                  key={c.id}
                  href={`/cases/opinion/${c.id}`}
                  className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 border-b border-gray-50 last:border-0"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{c.caseName}</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {c.year || '–'}
                      {c.docketNumber ? ` • ${c.docketNumber}` : ''}
                      {c.votesMajority ? ` • ${c.votesMajority}-${c.votesMinority ?? 0}` : ''}
                    </p>
                  </div>
                  {c.direction && (
                    <span className={`text-xs px-2 py-0.5 rounded flex-shrink-0 mt-0.5 ${
                      c.direction === 'Conservative' ? 'bg-red-100 text-red-700' :
                      c.direction === 'Liberal' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {c.direction}
                    </span>
                  )}
                </a>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
}
