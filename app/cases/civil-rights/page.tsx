'use client';

import { useEffect, useState } from 'react';

const API_BASE = 'https://thesource-worker.ticri2025.workers.dev';
const CASE_PAGE_SIZE = 20;

type CaseSummary = {
  id: number;
  case_name: string;
  date_filed: string | null;
  scdb_decision_direction: string | null;
  scdb_votes_majority: number | null;
  scdb_votes_minority: number | null;
};

type CaseSearchPayload = {
  results: CaseSummary[];
};

export default function CivilRightsCasesPage() {
  const cases = [
    {
        "name": "Dred Scott v. Sandford",
        "year": 1857,
        "slug": "dred-scott-v-sandford-1857",
        "summary": "Infamous decision denying citizenship to Black Americans"
    },
    {
        "name": "Slaughter-House Cases",
        "year": 1873,
        "slug": "slaughter-house-cases-1873",
        "summary": "Narrowly interpreted 14th Amendment Privileges or Immunities"
    },
    {
        "name": "Civil Rights Cases",
        "year": 1883,
        "slug": "civil-rights-cases-1883",
        "summary": "14th Amendment doesn't apply to private discrimination"
    },
    {
        "name": "Plessy v. Ferguson",
        "year": 1896,
        "slug": "plessy-v-ferguson-1896",
        "summary": "\"Separate but equal\" upheld racial segregation"
    },
    {
        "name": "Gitlow v. New York",
        "year": 1925,
        "slug": "gitlow-v-new-york-1925",
        "summary": "First Amendment applies to states via 14th Amendment"
    },
    {
        "name": "Brown v. Board of Education",
        "year": 1954,
        "slug": "brown-v-board-of-education-1954",
        "summary": "Separate is not equal — segregation unconstitutional"
    },
    {
        "name": "Cooper v. Aaron",
        "year": 1958,
        "slug": "cooper-v-aaron-1958",
        "summary": "States must follow Supreme Court rulings"
    },
    {
        "name": "Loving v. Virginia",
        "year": 1967,
        "slug": "loving-v-virginia-1967",
        "summary": "Bans on interracial marriage are unconstitutional"
    },
    {
        "name": "Roe v. Wade",
        "year": 1973,
        "slug": "roe-v-wade-1973",
        "summary": "Created constitutional right to abortion (overruled 2022)"
    },
    {
        "name": "Regents v. Bakke",
        "year": 1978,
        "slug": "regents-v-bakke-1978",
        "summary": "Race can be a factor in admissions, but not quotas"
    },
    {
        "name": "Planned Parenthood v. Casey",
        "year": 1992,
        "slug": "planned-parenthood-v-casey-1992",
        "summary": "Reaffirmed Roe with \"undue burden\" standard"
    },
    {
        "name": "Lawrence v. Texas",
        "year": 2003,
        "slug": "lawrence-v-texas-2003",
        "summary": "State sodomy laws violate due process"
    },
    {
        "name": "DC v. Heller",
        "year": 2008,
        "slug": "dc-v-heller-2008",
        "summary": "Second Amendment protects individual right to bear arms"
    },
    {
        "name": "McDonald v. Chicago",
        "year": 2010,
        "slug": "mcdonald-v-chicago-2010",
        "summary": "Second Amendment applies to states"
    },
    {
        "name": "Shelby County v. Holder",
        "year": 2013,
        "slug": "shelby-county-v-holder-2013",
        "summary": "Struck down Voting Rights Act preclearance formula"
    },
    {
        "name": "Obergefell v. Hodges",
        "year": 2015,
        "slug": "obergefell-v-hodges-2015",
        "summary": "Same-sex marriage is a constitutional right"
    },
    {
        "name": "Dobbs v. Jackson",
        "year": 2022,
        "slug": "dobbs-v-jackson-womens-health-organization-2022",
        "summary": "Overturned Roe v. Wade — no constitutional right to abortion"
    },
    {
        "name": "Students for Fair Admissions v. Harvard",
        "year": 2023,
        "slug": "students-for-fair-admissions-v-harvard-2023",
        "summary": "Race-based college admissions violate Equal Protection"
    }
];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-800 to-purple-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-5xl mb-4 block">⚖️</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Civil Rights & Equal Protection
            </h1>
            <p className="text-xl text-gray-300">
              The long road to equality under law
            </p>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <a href="/cases" className="text-purple-600 hover:text-purple-800 font-semibold">
              ← Back to All Cases
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((case_) => (
              <a
                key={case_.slug}
                href={`/cases/civil-rights/${case_.slug}`}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:shadow-xl transition-shadow"
              >
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {case_.year}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-3 mb-2">
                  {case_.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {case_.summary}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
      <MoreCivilRightsCases />
    </div>
  );
}

function MoreCivilRightsCases() {
  const [cases, setCases] = useState<CaseSummary[]>([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function loadInitialCases() {
      try {
        setLoading(true);
        setError(null);
        const nextCases = await fetchCivilRightsCaseBatch(0);
        if (active) {
          setCases(nextCases);
          setOffset(CASE_PAGE_SIZE);
          setHasMore(nextCases.length === CASE_PAGE_SIZE);
        }
      } catch (loadError) {
        if (active) {
          setCases([]);
          setHasMore(false);
          setError(loadError instanceof Error ? loadError.message : 'Could not load civil rights cases.');
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    void loadInitialCases();
    return () => {
      active = false;
    };
  }, []);

  async function loadMore() {
    try {
      setLoadingMore(true);
      setError(null);
      const nextCases = await fetchCivilRightsCaseBatch(offset);
      setCases((current) => dedupeCases([...current, ...nextCases]).sort(sortCasesByDateDesc));
      setOffset((current) => current + CASE_PAGE_SIZE);
      setHasMore(nextCases.length === CASE_PAGE_SIZE);
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : 'Could not load more civil rights cases.');
    } finally {
      setLoadingMore(false);
    }
  }

  return (
    <section className="bg-purple-50 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900">More Civil Rights Cases from the Database</h2>
          <p className="mt-2 text-sm font-semibold text-purple-900">
            Results from 486,000+ Supreme Court cases in the TheSource database.
          </p>
        </div>

        {error ? (
          <div className="mb-5 rounded border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</div>
        ) : null}

        {loading ? (
          <div className="grid gap-4 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="rounded-lg bg-white p-5 shadow-md">
                <div className="mb-3 h-5 w-4/5 animate-pulse rounded bg-gray-200" />
                <div className="mb-3 h-4 w-1/3 animate-pulse rounded bg-gray-200" />
                <div className="h-6 w-24 animate-pulse rounded-full bg-gray-200" />
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid gap-4 md:grid-cols-2">
              {cases.map((caseItem) => (
                <a
                  key={caseItem.id}
                  href={`/cases/opinion?id=${caseItem.id}`}
                  className="block rounded-lg border border-purple-100 bg-white p-5 shadow-md transition hover:border-purple-600 hover:shadow-lg"
                >
                  <div className="mb-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-purple-600 px-3 py-1 text-sm font-bold text-white">
                      {getCaseYear(caseItem.date_filed)}
                    </span>
                    {getDirectionLabel(caseItem.scdb_decision_direction) ? (
                      <span className={`rounded-full px-3 py-1 text-sm font-bold ${getDirectionClasses(caseItem.scdb_decision_direction)}`}>
                        {getDirectionLabel(caseItem.scdb_decision_direction)}
                      </span>
                    ) : null}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{caseItem.case_name}</h3>
                  <p className="mt-2 text-sm font-semibold text-gray-700">Vote: {formatVote(caseItem)}</p>
                </a>
              ))}
            </div>

            {hasMore ? (
              <div className="mt-8 text-center">
                <button
                  type="button"
                  onClick={loadMore}
                  disabled={loadingMore}
                  className="rounded bg-purple-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-purple-800 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loadingMore ? 'Loading...' : 'Load more'}
                </button>
              </div>
            ) : null}
          </>
        )}
      </div>
    </section>
  );
}

async function fetchCivilRightsCaseBatch(offset: number) {
  const [civilRights, equalProtection] = await Promise.all([
    fetchCaseSearch('civil rights', offset),
    fetchCaseSearch('equal protection', offset),
  ]);
  return dedupeCases([...(civilRights.results ?? []), ...(equalProtection.results ?? [])])
    .sort(sortCasesByDateDesc)
    .slice(0, CASE_PAGE_SIZE);
}

async function fetchCaseSearch(query: string, offset: number) {
  const params = new URLSearchParams({ q: query, limit: String(CASE_PAGE_SIZE), offset: String(offset) });
  const response = await fetch(`${API_BASE}/api/cases/search?${params.toString()}`);
  if (!response.ok) {
    throw new Error(`TheSource API returned ${response.status}.`);
  }
  return response.json() as Promise<CaseSearchPayload>;
}

function dedupeCases(caseList: CaseSummary[]) {
  const seen = new Set<number>();
  return caseList.filter((caseItem) => {
    if (seen.has(caseItem.id)) return false;
    seen.add(caseItem.id);
    return true;
  });
}

function sortCasesByDateDesc(first: CaseSummary, second: CaseSummary) {
  return getDateTime(second.date_filed) - getDateTime(first.date_filed);
}

function getCaseYear(value: string | null) {
  if (!value) return 'Year unknown';
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    const match = value.match(/\d{4}/);
    return match?.[0] ?? 'Year unknown';
  }
  return String(parsed.getFullYear());
}

function formatVote(caseItem: CaseSummary) {
  if (caseItem.scdb_votes_majority === null) return 'N/A';
  return `${caseItem.scdb_votes_majority}-${caseItem.scdb_votes_minority ?? 0}`;
}

function getDirectionLabel(direction: string | null) {
  if (direction === '1') return 'Conservative';
  if (direction === '2') return 'Liberal';
  return '';
}

function getDirectionClasses(direction: string | null) {
  if (direction === '1') return 'bg-red-100 text-red-800';
  if (direction === '2') return 'bg-blue-100 text-blue-800';
  return 'bg-gray-100 text-gray-800';
}

function getDateTime(value: string | null) {
  if (!value) return 0;
  const parsed = new Date(value).getTime();
  return Number.isNaN(parsed) ? 0 : parsed;
}
