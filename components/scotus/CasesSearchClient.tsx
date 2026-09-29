'use client';
// components/scotus/CasesSearchClient.tsx
// Searches TheSource Worker API on demand -- no local file loading

import { useState, useCallback, useRef } from 'react';
import { Search } from 'lucide-react';
import { searchCases } from '@/lib/thesource';
import type { CaseSummary } from '@/lib/thesource';

export default function CasesSearchClient() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<CaseSummary[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const searchTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const searchRunRef = useRef(0);

  const doSearch = useCallback(async (q: string) => {
    if (!q.trim()) {
      setResults([]);
      setSearched(false);
      setTotal(0);
      return;
    }

    const runId = searchRunRef.current + 1;
    searchRunRef.current = runId;

    setLoading(true);
    setSearched(true);

    try {
      const data = await searchCases(q, 30);
      if (searchRunRef.current !== runId) return;
      setResults(data.results || []);
      setTotal(data.total || 0);
    } catch {
      if (searchRunRef.current === runId) setResults([]);
    } finally {
      if (searchRunRef.current === runId) setLoading(false);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
    searchTimeoutRef.current = setTimeout(() => doSearch(val), 350);
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-3 bg-white rounded-xl shadow-md border border-gray-200 px-4 py-3">
        <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
        <input
          type="text"
          placeholder="Search by case name, party, or topic..."
          value={query}
          onChange={handleChange}
          className="flex-1 outline-none text-gray-900 text-base placeholder-gray-400"
        />
        {query && (
          <button
            onClick={() => { setQuery(''); setResults([]); setSearched(false); setTotal(0); }}
            className="text-gray-400 hover:text-gray-600 text-sm"
          >
            Clear
          </button>
        )}
      </div>

      {query.trim() && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 z-50 max-h-96 overflow-y-auto">
          {loading ? (
            <div className="p-4 text-gray-500 text-sm text-center">Searching...</div>
          ) : results.length === 0 && searched ? (
            <div className="p-4 text-gray-500 text-sm text-center">
              No cases found for &quot;{query}&quot;
            </div>
          ) : (
            <>
              {results.length > 0 && (
                <div className="px-4 py-2 text-xs text-gray-400 border-b border-gray-100">
                  {results.length} of {total.toLocaleString()} results
                </div>
              )}
              {results.map(c => {
                const year = c.date_filed ? new Date(c.date_filed).getFullYear() : null;
                const votes = c.scdb_votes_majority != null
                  ? `${c.scdb_votes_majority}-${c.scdb_votes_minority ?? 0}`
                  : null;
                const direction = c.scdb_decision_direction === '1' ? 'Conservative'
                  : c.scdb_decision_direction === '2' ? 'Liberal' : null;
                return (
                  <a
                    key={c.id}
                    href={`/cases/opinion/?id=${c.id}`}
                    className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 border-b border-gray-50 last:border-0"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{c.case_name}</p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {year || '–'}
                        {c.docket_number ? ` • ${c.docket_number}` : ''}
                        {votes ? ` • ${votes}` : ''}
                      </p>
                    </div>
                    {direction && (
                      <span className={`text-xs px-2 py-0.5 rounded flex-shrink-0 mt-0.5 ${
                        direction === 'Conservative' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {direction}
                      </span>
                    )}
                  </a>
                );
              })}
            </>
          )}
        </div>
      )}
    </div>
  );
}
