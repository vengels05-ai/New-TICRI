'use client';

import { useEffect, useState } from 'react';
import { Scale, Target, Landmark, Users, AlertCircle, MessageSquare, Flag, DollarSign, Heart, Shield, Sword, Star, BookOpen, Search, TrendingUp, Clock } from 'lucide-react';

const API_BASE = 'https://thesource-worker.ticri2025.workers.dev';

type CaseSummary = {
  id: number;
  case_name: string;
  date_filed: string | null;
  scdb_decision_direction: string | null;
  scdb_votes_majority: number | null;
  scdb_votes_minority: number | null;
  citation_count: number;
};

type CasesPayload = {
  results: CaseSummary[];
};

export default function CasesPage() {
  const [notableCases, setNotableCases] = useState<CaseSummary[]>([]);
  const [recentCases, setRecentCases] = useState<CaseSummary[]>([]);
  const [notableLoading, setNotableLoading] = useState(true);
  const [recentLoading, setRecentLoading] = useState(true);
  const [notableError, setNotableError] = useState<string | null>(null);
  const [recentError, setRecentError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function loadNotableCases() {
      try {
        setNotableLoading(true);
        setNotableError(null);
        const payload = await fetchCaseList('/api/cases/notable?limit=12');
        if (active) {
          setNotableCases(payload.results ?? []);
        }
      } catch (error) {
        if (active) {
          setNotableCases([]);
          setNotableError(error instanceof Error ? error.message : 'Could not load notable cases.');
        }
      } finally {
        if (active) {
          setNotableLoading(false);
        }
      }
    }

    void loadNotableCases();
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    let active = true;

    async function loadRecentCases() {
      try {
        setRecentLoading(true);
        setRecentError(null);
        const payload = await fetchCaseList('/api/cases/recent?limit=12');
        if (active) {
          setRecentCases(sortCasesByFiledDate(payload.results ?? []));
        }
      } catch (error) {
        if (active) {
          setRecentCases([]);
          setRecentError(error instanceof Error ? error.message : 'Could not load recent cases.');
        }
      } finally {
        if (active) {
          setRecentLoading(false);
        }
      }
    }

    void loadRecentCases();
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Scale className="w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Constitutional Law in Action
            </h1>
          </div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Discover how Supreme Court decisions shape your daily life — from family rights to presidential power, these cases define what the Constitution means in practice.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* New SCOTUS Search Experience */}
          <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl p-8 mb-12 shadow-xl">
            <div className="flex items-start gap-4">
              <Search className="w-10 h-10 text-gray-200 flex-shrink-0" />
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-3">New: Search Supreme Court Cases</h2>
                <p className="text-gray-200 leading-relaxed mb-6 max-w-3xl">
                  Search and browse a large Supreme Court case index with docket details, vote breakdowns,
                  direction labels, and direct links to opinion pages.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="/cases/search"
                    className="inline-flex items-center bg-white text-gray-900 px-5 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
                  >
                    Open Case Search
                  </a>
                  <a
                    href="/cases"
                    className="inline-flex items-center bg-gray-800 text-white px-5 py-3 rounded-lg font-medium border border-gray-600 hover:bg-gray-700 transition-colors"
                  >
                    Browse Categories Below
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Navigation */}
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-8 h-8 text-gray-900" />
            <h2 className="text-3xl font-bold text-gray-900">Find Cases By Your Interests</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            <a href="/cases/foundational" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-gray-800 text-center">
              <Landmark className="w-12 h-12 mx-auto mb-3 text-gray-700" />
              <div className="font-bold text-gray-900 mb-2">Constitutional Foundations</div>
              <div className="text-gray-600 text-sm">Marbury v. Madison, McCulloch v. Maryland</div>
            </a>
            
            <a href="/cases/parental-rights" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-gray-800 text-center">
              <Users className="w-12 h-12 mx-auto mb-3 text-gray-700" />
              <div className="font-bold text-gray-900 mb-2">Parents & Family</div>
              <div className="text-gray-600 text-sm">Homeschooling, school choice, family authority</div>
            </a>
            
            <a href="/cases/criminal-justice" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-gray-800 text-center">
              <AlertCircle className="w-12 h-12 mx-auto mb-3 text-gray-700" />
              <div className="font-bold text-gray-900 mb-2">Criminal Justice</div>
              <div className="text-gray-600 text-sm">Police rights, Miranda warnings, searches</div>
            </a>
            
            <a href="/cases/first-amendment" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-gray-800 text-center">
              <MessageSquare className="w-12 h-12 mx-auto mb-3 text-gray-700" />
              <div className="font-bold text-gray-900 mb-2">Free Speech & Religion</div>
              <div className="text-gray-600 text-sm">Expression, religion, student rights</div>
            </a>
            
            <a href="/cases/executive-power" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-gray-800 text-center">
              <Flag className="w-12 h-12 mx-auto mb-3 text-gray-700" />
              <div className="font-bold text-gray-900 mb-2">Presidential Power</div>
              <div className="text-gray-600 text-sm">Executive authority, immunity, war powers</div>
            </a>
            
            <a href="/cases/civil-rights" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-gray-800 text-center">
              <Scale className="w-12 h-12 mx-auto mb-3 text-gray-700" />
              <div className="font-bold text-gray-900 mb-2">Civil Rights</div>
              <div className="text-gray-600 text-sm">Equal protection, discrimination, voting</div>
            </a>
            
            <a href="/cases/federalism" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-gray-800 text-center">
              <Landmark className="w-12 h-12 mx-auto mb-3 text-gray-700" />
              <div className="font-bold text-gray-900 mb-2">Federalism</div>
              <div className="text-gray-600 text-sm">State vs. federal power, commerce clause</div>
            </a>
            
            <a href="/cases/separation-of-powers" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-gray-800 text-center">
              <Scale className="w-12 h-12 mx-auto mb-3 text-gray-700" />
              <div className="font-bold text-gray-900 mb-2">Separation of Powers</div>
              <div className="text-gray-600 text-sm">Checks and balances, branch authority</div>
            </a>
            
            <a href="/cases/economic-rights" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-gray-800 text-center">
              <DollarSign className="w-12 h-12 mx-auto mb-3 text-gray-700" />
              <div className="font-bold text-gray-900 mb-2">Economic Rights</div>
              <div className="text-gray-600 text-sm">Property, contracts, economic regulation</div>
            </a>
            
            <a href="/cases/healthcare-law" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-gray-800 text-center">
              <Heart className="w-12 h-12 mx-auto mb-3 text-gray-700" />
              <div className="font-bold text-gray-900 mb-2">Healthcare Law</div>
              <div className="text-gray-600 text-sm">ACA, medical rights, insurance</div>
            </a>
            
            <a href="/cases/military-service" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-gray-800 text-center">
              <Shield className="w-12 h-12 mx-auto mb-3 text-gray-700" />
              <div className="font-bold text-gray-900 mb-2">Military Service</div>
              <div className="text-gray-600 text-sm">Military law, veterans, service rights</div>
            </a>
            
            <a href="/cases/wartime-powers" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-gray-800 text-center">
              <Sword className="w-12 h-12 mx-auto mb-3 text-gray-700" />
              <div className="font-bold text-gray-900 mb-2">Wartime Powers</div>
              <div className="text-gray-600 text-sm">War authorization, emergency powers</div>
            </a>
          </div>

          {/* Featured Cases */}
          <div className="flex items-center gap-3 mb-6 mt-12">
            <Star className="w-8 h-8 text-gray-900" />
            <h2 className="text-3xl font-bold text-gray-900">Featured Cases</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <a href="/cases/foundational/marbury-v-madison-1803" className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg p-6 shadow-md hover:shadow-xl transition-all border border-gray-300 hover:border-gray-800">
              <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-bold">1803</span>
              <div className="text-2xl font-bold text-gray-900 mt-3 mb-2">Marbury v. Madison</div>
              <div className="text-gray-700 mb-3">Created judicial review — courts can strike down unconstitutional laws</div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <Landmark className="w-4 h-4" />
                <span>Constitutional Foundations</span>
              </div>
            </a>

            <a href="/cases/civil-rights/brown-v-board-of-education-1954" className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-6 shadow-md hover:shadow-xl transition-all border border-blue-300 hover:border-blue-800">
              <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-bold">1954</span>
              <div className="text-2xl font-bold text-gray-900 mt-3 mb-2">Brown v. Board of Education</div>
              <div className="text-gray-700 mb-3">Separate is not equal — segregation in schools unconstitutional</div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <Scale className="w-4 h-4" />
                <span>Civil Rights</span>
              </div>
            </a>

            <a href="/cases/criminal-justice/miranda-v-arizona-1966" className="bg-gradient-to-br from-red-100 to-red-200 rounded-lg p-6 shadow-md hover:shadow-xl transition-all border border-red-300 hover:border-red-800">
              <span className="bg-red-800 text-white px-3 py-1 rounded-full text-sm font-bold">1966</span>
              <div className="text-2xl font-bold text-gray-900 mt-3 mb-2">Miranda v. Arizona</div>
              <div className="text-gray-700 mb-3">Police must inform you of your rights before questioning</div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>Criminal Justice</span>
              </div>
            </a>

            <a href="/cases/first-amendment/new-york-times-co-v-united-states-1971" className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg p-6 shadow-md hover:shadow-xl transition-all border border-purple-300 hover:border-purple-800">
              <span className="bg-purple-800 text-white px-3 py-1 rounded-full text-sm font-bold">1971</span>
              <div className="text-2xl font-bold text-gray-900 mt-3 mb-2">New York Times v. United States</div>
              <div className="text-gray-700 mb-3">Pentagon Papers — government can't stop press from publishing</div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <MessageSquare className="w-4 h-4" />
                <span>First Amendment</span>
              </div>
            </a>

            <a href="/cases/civil-rights/obergefell-v-hodges-2015" className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-6 shadow-md hover:shadow-xl transition-all border border-blue-300 hover:border-blue-800">
              <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-bold">2015</span>
              <div className="text-2xl font-bold text-gray-900 mt-3 mb-2">Obergefell v. Hodges</div>
              <div className="text-gray-700 mb-3">Same-sex marriage is a constitutional right nationwide</div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <Scale className="w-4 h-4" />
                <span>Civil Rights</span>
              </div>
            </a>

            <a href="/cases/civil-rights/dobbs-v-jackson-womens-health-organization-2022" className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-6 shadow-md hover:shadow-xl transition-all border border-blue-300 hover:border-blue-800">
              <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-bold">2022</span>
              <div className="text-2xl font-bold text-gray-900 mt-3 mb-2">Dobbs v. Jackson Women's Health</div>
              <div className="text-gray-700 mb-3">Overturned Roe v. Wade — abortion returned to states</div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <Scale className="w-4 h-4" />
                <span>Civil Rights</span>
              </div>
            </a>
          </div>

          <LiveCasesSection
            title="Most Cited by Courts"
            icon={TrendingUp}
            cases={notableCases}
            loading={notableLoading}
            error={notableError}
          />

          <LiveCasesSection
            title="Recent Decisions"
            icon={Clock}
            cases={recentCases}
            loading={recentLoading}
            error={recentError}
          />

          {/* Note Section */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mt-8">
            <p className="text-gray-800 flex items-start gap-2">
              <BookOpen className="w-5 h-5 mt-1 text-blue-600 flex-shrink-0" />
              <span>
                <strong>Explore 63+ Supreme Court Cases:</strong> Click any category above to browse landmark decisions. Each case includes plain-English explanations, real-world impacts, and what it means for your daily life.
              </span>
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}

async function fetchCaseList(path: string) {
  const response = await fetch(`${API_BASE}${path}`);
  if (!response.ok) {
    throw new Error(`TheSource API returned ${response.status}.`);
  }
  return response.json() as Promise<CasesPayload>;
}

function LiveCasesSection({
  title,
  icon: Icon,
  cases,
  loading,
  error,
}: {
  title: string;
  icon: typeof TrendingUp;
  cases: CaseSummary[];
  loading: boolean;
  error: string | null;
}) {
  return (
    <section className="mt-12">
      <div className="flex items-center gap-3 mb-6">
        <Icon className="w-8 h-8 text-gray-900" />
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
      </div>

      {error ? (
        <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">
          {error}
        </div>
      ) : null}

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
              <div className="mb-4 flex gap-2">
                <div className="h-7 w-16 animate-pulse rounded-full bg-gray-200" />
                <div className="h-7 w-24 animate-pulse rounded-full bg-gray-200" />
              </div>
              <div className="mb-3 h-6 w-4/5 animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-2/3 animate-pulse rounded bg-gray-200" />
            </div>
          ))}
        </div>
      ) : null}

      {!loading && !error ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {cases.map((caseItem) => (
            <LiveCaseCard key={caseItem.id} caseItem={caseItem} />
          ))}
        </div>
      ) : null}
    </section>
  );
}

function LiveCaseCard({ caseItem }: { caseItem: CaseSummary }) {
  return (
    <a
      href={`/cases/opinion?id=${caseItem.id}`}
      className="block rounded-lg border border-gray-300 bg-gradient-to-br from-gray-100 to-gray-200 p-6 shadow-md transition-all hover:border-gray-800 hover:shadow-xl"
    >
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-gray-800 px-3 py-1 text-sm font-bold text-white">
          {getCaseYear(caseItem.date_filed)}
        </span>
        {getDirectionLabel(caseItem.scdb_decision_direction) ? (
          <span className={`rounded-full px-3 py-1 text-sm font-bold ${getDirectionClasses(caseItem.scdb_decision_direction)}`}>
            {getDirectionLabel(caseItem.scdb_decision_direction)}
          </span>
        ) : null}
      </div>
      <h3 className="line-clamp-2 min-h-[3.5rem] text-xl font-bold leading-7 text-gray-900">
        {caseItem.case_name}
      </h3>
      <p className="mt-4 text-sm font-semibold text-gray-700">
        Vote: {formatVote(caseItem)} <span className="text-gray-400">•</span> {caseItem.citation_count.toLocaleString()} citations
      </p>
    </a>
  );
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
  if (caseItem.scdb_votes_majority === null) {
    return 'N/A';
  }
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

function sortCasesByFiledDate(cases: CaseSummary[]) {
  return [...cases].sort((first, second) => getDateTime(second.date_filed) - getDateTime(first.date_filed));
}

function getDateTime(value: string | null) {
  if (!value) return 0;
  const parsed = new Date(value).getTime();
  return Number.isNaN(parsed) ? 0 : parsed;
}
