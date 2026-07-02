'use client';

import { useEffect, useMemo, useState } from 'react';
import { Search } from 'lucide-react';

interface SearchCase {
  id: number;
  caseName: string;
  year: number | null;
  docketNumber: string;
  votesMajority: number | null;
  votesMinority: number | null;
  direction: string;
  citationCount: number;
  bucketSlugs: string[];
}

interface SearchIndexEntry {
  id: number;
  n?: string;
  y?: number | null;
  dn?: string | null;
  v?: string | null;
  d?: string | null;
  c?: number;
  k?: string[];
}

interface SearchManifest {
  totalCases: number;
  chunkSize: number;
  chunks: string[];
}

interface Props {
  buckets: Array<{ slug: string; label: string }>;
}

export default function CasesSearchClient({ buckets }: Props) {
  const [query, setQuery] = useState('');
  const [activeBucket, setActiveBucket] = useState<string>('all');
  const [cases, setCases] = useState<SearchCase[]>([]);
  const [loading, setLoading] = useState(true);

  const bucketLabelMap = useMemo(() => {
    const map = new Map<string, string>();
    buckets.forEach((bucket) => map.set(bucket.slug, bucket.label));
    return map;
  }, [buckets]);

  useEffect(() => {
    let isActive = true;

    async function loadSearchIndex() {
      try {
        const manifestResponse = await fetch('/scotus/search-manifest.json');
        if (!manifestResponse.ok) {
          throw new Error(`Failed to load search manifest: ${manifestResponse.status}`);
        }

        const manifest = (await manifestResponse.json()) as SearchManifest;
        const chunkPayloads = await Promise.all(
          manifest.chunks.map(async (chunkFile) => {
            const chunkResponse = await fetch(`/scotus/search-chunks/${chunkFile}`);
            if (!chunkResponse.ok) {
              throw new Error(`Failed to load search chunk ${chunkFile}: ${chunkResponse.status}`);
            }

            return (await chunkResponse.json()) as SearchIndexEntry[];
          })
        );

        const raw = chunkPayloads.flat();
        if (!isActive) {
          return;
        }

        const mapped = raw.map((entry) => {
          const [majRaw, minRaw] = String(entry.v ?? '').split('-');
          const maj = Number.parseInt(majRaw, 10);
          const min = Number.parseInt(minRaw ?? '0', 10);
          const direction = entry.d === 'C'
            ? 'Conservative'
            : entry.d === 'L'
              ? 'Liberal'
              : entry.d === 'U'
                ? 'Unclear'
                : '';

          return {
            id: entry.id,
            caseName: entry.n ?? `Case ${entry.id}`,
            year: entry.y ?? null,
            docketNumber: entry.dn ?? '',
            votesMajority: Number.isNaN(maj) ? null : maj,
            votesMinority: Number.isNaN(min) ? null : min,
            direction,
            citationCount: entry.c ?? 0,
            bucketSlugs: Array.isArray(entry.k) ? entry.k : [],
          };
        });

        setCases(mapped);
      } catch (error) {
        console.error(error);
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    }

    loadSearchIndex();

    return () => {
      isActive = false;
    };
  }, []);

  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    const tokens = q.length > 0 ? q.split(/\s+/).filter(Boolean) : [];

    if (tokens.length === 0 && activeBucket === 'all') {
      return [];
    }

    return cases
      .filter((c) => {
        if (activeBucket !== 'all' && !c.bucketSlugs.includes(activeBucket)) {
          return false;
        }

        if (tokens.length === 0) {
          return true;
        }

        const bucketText = c.bucketSlugs
          .map((slug) => bucketLabelMap.get(slug) ?? slug)
          .join(' ')
          .toLowerCase();

        const searchableText = `${c.caseName} ${c.docketNumber} ${bucketText}`.toLowerCase();
        return tokens.every((token) => searchableText.includes(token));
      })
      .slice(0, 50);
  }, [query, activeBucket, cases, bucketLabelMap]);

  return (
    <div className="relative">
      <div className="flex items-center gap-3 bg-white rounded-xl shadow-md border border-gray-200 px-4 py-3">
        <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
        <input
          type="text"
          placeholder="Search by case name, party, or topic..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
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

      <div className="mt-3 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveBucket('all')}
          className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
            activeBucket === 'all'
              ? 'bg-gray-900 text-white border-gray-900'
              : 'bg-white text-gray-700 border-gray-300 hover:border-gray-500'
          }`}
        >
          All Topics
        </button>
        {buckets.map((bucket) => (
          <button
            key={bucket.slug}
            onClick={() => setActiveBucket(bucket.slug)}
            className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
              activeBucket === bucket.slug
                ? 'bg-gray-900 text-white border-gray-900'
                : 'bg-white text-gray-700 border-gray-300 hover:border-gray-500'
            }`}
          >
            {bucket.label}
          </button>
        ))}
      </div>

      {loading && (
        <div className="mt-3 text-sm text-gray-500">Loading searchable case index...</div>
      )}

      {(query.trim() || activeBucket !== 'all') && !loading && (
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
              {results.map((c) => (
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
                    {c.bucketSlugs.length > 0 && (
                      <div className="mt-1 flex flex-wrap gap-1">
                        {c.bucketSlugs.slice(0, 3).map((slug) => (
                          <span key={slug} className="text-[10px] px-2 py-0.5 rounded bg-gray-100 text-gray-600">
                            {bucketLabelMap.get(slug) ?? slug}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  {c.direction && (
                    <span className={`text-xs px-2 py-0.5 rounded flex-shrink-0 mt-0.5 ${
                      c.direction === 'Conservative'
                        ? 'bg-red-100 text-red-700'
                        : c.direction === 'Liberal'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-gray-100 text-gray-600'
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
