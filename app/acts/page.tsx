'use client';

import Link from 'next/link';
import { Suspense, useEffect, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import actsData from './acts-by-category.json';
import { Landmark, Scale, Vote, Sprout, HardHat, Shield, ShoppingCart, Heart, Cpu, Globe, User, Gavel, FileText, Loader2 } from 'lucide-react';
import ActsBillSearchClient from './ActsBillSearchClient';

const API_BASE = 'https://thesource-worker.ticri2025.workers.dev';
const BILL_PAGE_SIZE = 20;
const CONGRESSES = [119, 118, 117, 116, 115, 114, 113, 112, 111, 110];
const POLICY_AREAS = [
  'Finance & Banking',
  'Civil Rights',
  'Voting Rights',
  'Environmental',
  'Labor & Employment',
  'Defense & Security',
  'Consumer & Commerce',
  'Healthcare',
  'Criminal Justice',
  'Technology & Privacy',
  'Immigration',
  'Administrative Law',
];

type BillSummary = {
  bill_id: string;
  congress_number: number;
  bill_type: string;
  bill_number: string;
  title: string;
  short_title: string | null;
  sponsor_name: string | null;
  sponsor_party: string | null;
  sponsor_state: string | null;
  introduced_date: string | null;
  policy_area: string | null;
};

type BillSearchPayload = {
  results: BillSummary[];
};

export default function ActsPage() {
  const timelines = [
    {
      title: 'Finance & Banking Timeline',
      description: 'Federal Reserve Act, Glass-Steagall, Dodd-Frank, and the evolution of financial regulation',
      icon: Landmark,
      href: '/acts/financial-system-timeline',
      color: 'from-green-50 to-green-100 border-green-600'
    },
    {
      title: 'Civil Rights Timeline',
      description: 'From the Civil Rights Act of 1964 to the Americans with Disabilities Act',
      icon: Scale,
      href: '/acts/civil-rights-timeline',
      color: 'from-blue-50 to-blue-100 border-blue-600'
    },
    {
      title: 'Voting Rights Timeline',
      description: 'Voting Rights Act, National Voter Registration Act, and election law evolution',
      icon: Vote,
      href: '/acts/voting-rights-timeline',
      color: 'from-purple-50 to-purple-100 border-purple-600'
    },
    {
      title: 'Environmental Law Timeline',
      description: 'Clean Air Act, Clean Water Act, CERCLA, and environmental protection',
      icon: Sprout,
      href: '/acts/environmental-law-timeline',
      color: 'from-emerald-50 to-emerald-100 border-emerald-600'
    },
    {
      title: 'Labor & Employment Timeline',
      description: 'Fair Labor Standards, NLRA, OSHA, and workplace rights',
      icon: HardHat,
      href: '/acts/labor-employment-timeline',
      color: 'from-orange-50 to-orange-100 border-orange-600'
    },
    {
      title: 'Defense & Security Timeline',
      description: 'War Powers Resolution, PATRIOT Act, and national security legislation',
      icon: Shield,
      href: '/acts/defense-security-timeline',
      color: 'from-red-50 to-red-100 border-red-600'
    },
    {
      title: 'Consumer & Commerce Timeline',
      description: 'Truth in Lending, Consumer Product Safety, and commerce regulation',
      icon: ShoppingCart,
      href: '/acts/consumer-commerce-timeline',
      color: 'from-yellow-50 to-yellow-100 border-yellow-600'
    },
    {
      title: 'Healthcare & Social Policy Timeline',
      description: 'Social Security Act, Medicare, Medicaid, ACA, and social safety net',
      icon: Heart,
      href: '/acts/healthcare-social-timeline',
      color: 'from-pink-50 to-pink-100 border-pink-600'
    },
    {
      title: 'Criminal Justice & Due Process Timeline',
      description: 'Controlled Substances Act, Crime Control Acts, and criminal law',
      icon: Gavel,
      href: '/acts/criminal-justice-timeline',
      color: 'from-indigo-50 to-indigo-100 border-indigo-600'
    },
    {
      title: 'Technology & Privacy Timeline',
      description: 'ECPA, CFAA, Section 230, and digital age legislation',
      icon: Cpu,
      href: '/acts/technology-privacy-timeline',
      color: 'from-cyan-50 to-cyan-100 border-cyan-600'
    },
    {
      title: 'Immigration Timeline',
      description: 'Immigration and Nationality Act, IRCA, and border policy',
      icon: Globe,
      href: '/acts/immigration-timeline',
      color: 'from-teal-50 to-teal-100 border-teal-600'
    },
    {
      title: 'Administrative Law Timeline',
      description: 'APA, regulatory framework, and the administrative state',
      icon: FileText,
      href: '/acts/administrative-law-timeline',
      color: 'from-slate-50 to-slate-100 border-slate-600'
    }
  ];

  const majorActs = [
    {
      title: 'Social Security Act (1935)',
      description: 'Created federal safety net for elderly, unemployed, and disadvantaged',
      href: '/acts/social-security-act-1935',
      year: 1935
    },
    {
      title: 'Administrative Procedure Act (1946)',
      description: 'Established framework for federal agency rulemaking and adjudication',
      href: '/acts/administrative-procedure-act-1946',
      year: 1946
    },
    {
      title: 'Civil Rights Act (1964)',
      description: 'Prohibited discrimination based on race, color, religion, sex, or national origin',
      href: '/acts/civil-rights-act-1964',
      year: 1964
    },
    {
      title: 'Voting Rights Act (1965)',
      description: 'Outlawed discriminatory voting practices and protected minority voting rights',
      href: '/acts/voting-rights-act-1965',
      year: 1965
    },
    {
      title: 'Controlled Substances Act (1970)',
      description: 'Federalized drug policy and created DEA enforcement framework',
      href: '/acts/controlled-substances-act-1970',
      year: 1970
    },
    {
      title: 'War Powers Resolution (1973)',
      description: 'Limited presidential war powers and required congressional authorization',
      href: '/acts/war-powers-resolution-1973',
      year: 1973
    },
    {
      title: 'Americans with Disabilities Act (1990)',
      description: 'Prohibited discrimination against individuals with disabilities',
      href: '/acts/americans-with-disabilities-act-1990',
      year: 1990
    },
    {
      title: 'PATRIOT Act (2001)',
      description: 'Expanded surveillance and law enforcement powers post-9/11',
      href: '/acts/patriot-act-2001',
      year: 2001
    },
    {
      title: 'Affordable Care Act (2010)',
      description: 'Major healthcare reform expanding insurance coverage and regulation',
      href: '/acts/affordable-care-act-2010',
      year: 2010
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Acts of Congress
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-100">
              Federal Acts that shape rights, duties, and powers in the U.S.
            </p>
            <p className="text-lg max-w-3xl mx-auto text-gray-200">
              Major legislation that defines government powers and limits, establishes individual rights,
              and shapes the economy, environment, security, and social policy.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">📚 Understanding Federal Acts</h2>
            <p className="text-gray-700 mb-4">
              This section organizes <strong>major Acts of Congress</strong> that have shaped American law, 
              governance, rights, and daily life.
            </p>
            <p className="text-gray-700 mb-4">
              Each Act entry provides:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Link to the text of the statute</li>
              <li>Historical context and purpose</li>
              <li>Impact on rights, governance, and society</li>
              <li>Key sections and citations</li>
              <li>Updates and live controversies</li>
            </ul>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-6">
              <h3 className="text-xl font-bold text-blue-900 mb-2">🏛 Why It Matters</h3>
              <p className="text-gray-700">
                Understanding these Acts is essential because they define the <strong>powers and limits</strong> of 
                government, establish and protect <strong>individual rights</strong>, shape the economy, environment, 
                security, and social policy, and provide insight into the ongoing debate over the role of Congress 
                vs. the states vs. the courts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Congressional Database Search */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="mb-3 inline-flex border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-blue-900">
              Congressional Database
            </p>
            <h2 className="text-3xl font-bold text-gray-900">Search Congressional Bills</h2>
            <p className="mx-auto mt-3 max-w-3xl text-gray-700">
              Search the broader congressional bill database from TheSource by keyword and Congress number. Curated act explainers remain below.
            </p>
          </div>
          <Suspense fallback={<div className="rounded-lg bg-white p-6 text-sm text-gray-700 shadow-md">Loading bill search...</div>}>
            <ActsBillSearchClient />
          </Suspense>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Browse Acts by Category</h2>
          <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
            Explore all {actsData.totalActs} federal acts organized by policy area. Click on a category to see all related acts.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {actsData.categories.map((category) => (
              <div
                key={category.name}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-blue-600 p-6"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {category.name}
                  </h3>
                  <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {category.count}
                  </span>
                </div>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {category.acts.map((act) => (
                    <Link
                      key={act.slug}
                      href={`/acts/${act.slug}`}
                      className="block text-sm text-gray-700 hover:text-blue-600 hover:underline"
                    >
                      <span className="font-semibold">{act.year}:</span> {act.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timelines */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Historical Timelines</h2>
          <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
            See how legislation evolved over time in key policy areas.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {timelines.map((timeline) => {
              const IconComponent = timeline.icon;
              return (
                <Link
                  key={timeline.href}
                  href={timeline.href}
                  className={`block bg-gradient-to-br ${timeline.color} rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 p-6`}
                >
                  <div className="flex items-start space-x-4">
                    <IconComponent className="w-10 h-10" />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {timeline.title}
                      </h3>
                      <p className="text-gray-700 text-sm">
                        {timeline.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Major Acts */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Most Influential Acts</h2>
          <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
            Landmark legislation that fundamentally shaped American law and society.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {majorActs.map((act) => (
              <Link
                key={act.href}
                href={act.href}
                className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-gray-200 hover:border-blue-600 p-6"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">
                    {act.title}
                  </h3>
                  <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {act.year}
                  </span>
                </div>
                <p className="text-gray-700 text-sm">
                  {act.description}
                </p>
              </Link>
            ))}
          </div>

          <Suspense fallback={<div className="mt-12 rounded-lg bg-white p-6 text-sm text-gray-700 shadow-md">Loading congressional data...</div>}>
            <LiveCongressDataSections />
          </Suspense>
        </div>
      </section>

    </div>
  );
}

function LiveCongressDataSections() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const congressParam = searchParams.get('congress') ?? '';
  const policyParam = searchParams.get('policy') ?? '';
  const [bills, setBills] = useState<BillSummary[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const selectedCongress = useMemo(() => {
    const parsed = Number.parseInt(congressParam, 10);
    return Number.isNaN(parsed) ? undefined : parsed;
  }, [congressParam]);

  const activePolicy = policyParam ? decodeURIComponent(policyParam) : '';
  const activeMode = selectedCongress ? 'congress' : activePolicy ? 'policy' : 'none';

  useEffect(() => {
    let active = true;

    async function loadBills() {
      if (activeMode === 'none') {
        setBills([]);
        setHasMore(false);
        setError(null);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const payload = await fetchBills({
          congress: selectedCongress,
          policy: activePolicy,
          offset: 0,
        });

        if (active) {
          const nextResults = payload.results ?? [];
          setBills(nextResults);
          setHasMore(nextResults.length === BILL_PAGE_SIZE);
        }
      } catch (loadError) {
        if (active) {
          setBills([]);
          setHasMore(false);
          setError(loadError instanceof Error ? loadError.message : 'Could not load bills.');
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    void loadBills();
    return () => {
      active = false;
    };
  }, [activeMode, activePolicy, selectedCongress]);

  function selectCongress(congress: number) {
    router.push(`/acts?congress=${congress}`);
  }

  function selectPolicy(policy: string) {
    router.push(`/acts?policy=${encodeURIComponent(policy)}`);
  }

  function clearFilters() {
    router.push('/acts');
  }

  async function loadMore() {
    if (activeMode === 'none') return;

    try {
      setLoadingMore(true);
      setError(null);
      const payload = await fetchBills({
        congress: selectedCongress,
        policy: activePolicy,
        offset: bills.length,
      });
      const nextResults = payload.results ?? [];
      setBills((current) => dedupeBills([...current, ...nextResults]));
      setHasMore(nextResults.length === BILL_PAGE_SIZE);
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : 'Could not load more bills.');
    } finally {
      setLoadingMore(false);
    }
  }

  return (
    <div className="mt-12 space-y-10">
      <section className="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
        <div className="mb-5">
          <h2 className="text-3xl font-bold text-gray-900">Browse by Congress</h2>
          <p className="mt-2 text-sm leading-6 text-gray-700">
            Select a recent Congress to browse bills from the live TheSource congressional database.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {CONGRESSES.map((congress) => (
            <button
              key={congress}
              type="button"
              onClick={() => selectCongress(congress)}
              className={`rounded-full border px-4 py-2 text-sm font-bold transition ${
                selectedCongress === congress
                  ? 'border-blue-700 bg-blue-700 text-white'
                  : 'border-gray-300 bg-white text-gray-800 hover:border-blue-600 hover:text-blue-700'
              }`}
            >
              {congress}th
            </button>
          ))}
        </div>
      </section>

      <section className="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
        <div className="mb-5">
          <h2 className="text-3xl font-bold text-gray-900">Browse by Policy Area</h2>
          <p className="mt-2 text-sm leading-6 text-gray-700">
            Filter live bill records using the same policy areas as the Acts timeline categories.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {POLICY_AREAS.map((policy) => (
            <button
              key={policy}
              type="button"
              onClick={() => selectPolicy(policy)}
              className={`rounded border px-4 py-3 text-left text-sm font-bold transition ${
                activePolicy === policy
                  ? 'border-blue-700 bg-blue-50 text-blue-900'
                  : 'border-gray-300 bg-white text-gray-800 hover:border-blue-600 hover:text-blue-700'
              }`}
            >
              {policy}
            </button>
          ))}
        </div>
      </section>

      {activeMode !== 'none' ? (
        <section className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">Live Congressional Bills</p>
              <h2 className="mt-1 text-3xl font-bold text-gray-900">
                {selectedCongress ? `${selectedCongress}th Congress` : activePolicy}
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                {loading ? 'Loading bills...' : `${bills.length.toLocaleString()} bills shown`}
              </p>
            </div>
            <button type="button" onClick={clearFilters} className="text-sm font-bold text-blue-700 hover:text-blue-900">
              Clear filters
            </button>
          </div>

          {error ? (
            <div className="rounded border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</div>
          ) : null}

          {loading ? (
            <BillSkeletonGrid />
          ) : (
            <>
              <div className="grid gap-4 md:grid-cols-2">
                {bills.map((bill) => (
                  <BillCard key={bill.bill_id} bill={bill} />
                ))}
              </div>

              {bills.length === 0 && !error ? (
                <div className="rounded-lg bg-white p-8 text-center text-sm text-gray-600 shadow-md">
                  No bills matched this filter.
                </div>
              ) : null}

              {hasMore ? (
                <div className="pt-3 text-center">
                  <button
                    type="button"
                    onClick={loadMore}
                    disabled={loadingMore}
                    className="inline-flex items-center justify-center gap-2 rounded bg-blue-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {loadingMore ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                    Load more
                  </button>
                </div>
              ) : null}
            </>
          )}
        </section>
      ) : null}
    </div>
  );
}

async function fetchBills({
  congress,
  policy,
  offset,
}: {
  congress?: number;
  policy: string;
  offset: number;
}) {
  const params = new URLSearchParams({ limit: String(BILL_PAGE_SIZE), offset: String(offset) });
  if (congress) {
    params.set('congress', String(congress));
  } else if (policy) {
    params.set('q', policy);
  }

  const response = await fetch(`${API_BASE}/api/bills/search?${params.toString()}`);
  if (!response.ok) {
    throw new Error(`TheSource API returned ${response.status}.`);
  }

  return response.json() as Promise<BillSearchPayload>;
}

function BillCard({ bill }: { bill: BillSummary }) {
  return (
    <Link
      href={`/acts/bill?id=${encodeURIComponent(bill.bill_id)}`}
      className="block rounded-lg border border-gray-200 bg-white p-5 shadow-md transition hover:border-blue-600 hover:shadow-lg"
    >
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-blue-900 px-3 py-1 text-xs font-bold uppercase text-white">
          {formatBillId(bill)}
        </span>
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
          {bill.congress_number}th Congress
        </span>
        {bill.policy_area ? (
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-700">
            {bill.policy_area}
          </span>
        ) : null}
      </div>
      <h3 className="line-clamp-2 min-h-[3.5rem] text-lg font-bold leading-7 text-gray-900">
        {bill.short_title || bill.title}
      </h3>
      <p className="mt-3 text-sm text-gray-700">
        {bill.sponsor_name ? `${bill.sponsor_name}${formatPartyState(bill.sponsor_party, bill.sponsor_state)}` : 'Sponsor unavailable'}
      </p>
      <p className="mt-1 text-sm text-gray-600">
        {bill.introduced_date ? `Introduced ${formatDate(bill.introduced_date)}` : 'Introduced date unavailable'}
      </p>
    </Link>
  );
}

function BillSkeletonGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="rounded-lg border border-gray-200 bg-white p-5 shadow-md">
          <div className="mb-4 flex gap-2">
            <div className="h-6 w-24 animate-pulse rounded-full bg-gray-200" />
            <div className="h-6 w-28 animate-pulse rounded-full bg-gray-200" />
          </div>
          <div className="mb-3 h-5 w-4/5 animate-pulse rounded bg-gray-200" />
          <div className="mb-2 h-4 w-1/2 animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-1/3 animate-pulse rounded bg-gray-200" />
        </div>
      ))}
    </div>
  );
}

function formatBillId(bill: BillSummary) {
  return `${bill.bill_type.toUpperCase()} ${bill.bill_number}`;
}

function formatPartyState(party: string | null, state: string | null) {
  const parts = [party, state].filter(Boolean);
  return parts.length ? ` (${parts.join('-')})` : '';
}

function formatDate(value: string) {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return value;
  }
  return parsed.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function dedupeBills(bills: BillSummary[]) {
  const seen = new Set<string>();
  return bills.filter((bill) => {
    if (seen.has(bill.bill_id)) return false;
    seen.add(bill.bill_id);
    return true;
  });
}
