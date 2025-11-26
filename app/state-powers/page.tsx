'use client';

import { useEffect, useRef } from 'react';

export default function StatePowersPage() {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Dynamically load Chart.js
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    script.async = true;
    script.onload = () => {
      if (chartRef.current && typeof window !== 'undefined' && (window as any).Chart) {
        const Chart = (window as any).Chart;
        const ctx = chartRef.current.getContext('2d');
        
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['1984 (Chevron)', '1994', '2004', '2014', '2024 (End of Era)'],
            datasets: [{
              label: 'Cumulative Administrative Rules (Index)',
              data: [100, 150, 250, 400, 550],
              backgroundColor: 'rgba(59, 130, 246, 0.5)',
              borderColor: '#1E3A8A',
              borderWidth: 2,
              fill: true,
              tension: 0.4
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              title: {
                display: true,
                text: 'Growth of the Administrative State Post-Chevron (1984-2024)'
              }
            },
            scales: {
              y: {
                beginAtZero: false,
                title: { display: true, text: 'Regulatory Index' }
              }
            }
          }
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4 md:p-8 max-w-6xl bg-white shadow-xl my-8 rounded-lg">

        {/* Header */}
        <header className="text-center mb-12 py-8 bg-slate-900 text-white rounded-t-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Federal Power Expansion Beyond the Constitution</h1>
          <p className="text-xl font-light">The Case Law and Statutes That Redefined State Sovereignty</p>
        </header>

        {/* I. The Reserved Baseline (State Powers) */}
        <section className="mb-12 px-4 md:px-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 border-b-4 border-red-600 inline-block pb-1">
            I. The Reserved Baseline: States&apos; Powers
          </h2>
          <p className="mb-6 text-gray-700 text-center max-w-4xl mx-auto">
            The federal government is one of limited, enumerated powers. Everything it was NOT explicitly granted remains 
            the sovereign domain of the states or the people, as protected by the Tenth Amendment.
          </p>
          
          <div className="bg-gray-100 p-6 rounded-lg text-center shadow-inner mb-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-3">Tenth Amendment (Literal Meaning)</h3>
            <p className="italic text-lg">
              &quot;The powers not delegated to the United States by the Constitution, nor prohibited by it to the States, 
              are reserved to the States respectively, or to the people.&quot;
            </p>
          </div>

          <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Powers Never Granted to Washington</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
            <div className="p-4 bg-white rounded-lg shadow-sm border-t-4 border-blue-500">
              <h4 className="font-bold text-blue-500 mb-1">Domestic & Social Law</h4>
              <ul className="list-disc list-inside ml-4">
                <li>Education</li>
                <li>Family Law (Marriage, Divorce, Custody)</li>
                <li>Property and Contract Law</li>
                <li>Health and Welfare Policy</li>
              </ul>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border-t-4 border-blue-500">
              <h4 className="font-bold text-blue-500 mb-1">Justice & Public Safety</h4>
              <ul className="list-disc list-inside ml-4">
                <li>Policing and Public Safety</li>
                <li>Criminal Law for IntraState Acts</li>
                <li>Zoning and Land Use</li>
                <li>State Elections Administration</li>
              </ul>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border-t-4 border-blue-500">
              <h4 className="font-bold text-blue-500 mb-1">Militia & Commerce</h4>
              <ul className="list-disc list-inside ml-4">
                <li>Training/Appointing Militia Officers</li>
                <li>Agriculture internal to a state</li>
                <li>Business regulation *within* state borders</li>
                <li>Internal Infrastructure/Transport</li>
              </ul>
            </div>
          </div>
        </section>

        {/* II. The Clause Triggers */}
        <section className="mb-12 px-4 md:px-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            II. Original Text vs. Modern Interpretation
          </h2>
          <p className="text-gray-700 text-center mb-8 max-w-4xl mx-auto">
            Federal expansion occurred by courts dramatically reinterpreting four key constitutional clauses, shifting their 
            meaning from limited grants of power to near-unlimited authority.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-900">
              <h4 className="font-bold text-blue-900 mb-2">1. Commerce Clause</h4>
              <div className="border border-dashed border-gray-400 p-3 mb-2 text-sm bg-gray-50">
                Regulate trade between states, nations, and tribes. (Art. I, §8, cl. 3)
              </div>
              <div className="text-sm font-bold text-red-600 mt-2">
                Modern Usage: Regulate virtually anything that *affects* commerce—including activity entirely within one state.
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-900">
              <h4 className="font-bold text-blue-900 mb-2">2. Necessary & Proper</h4>
              <div className="border border-dashed border-gray-400 p-3 mb-2 text-sm bg-gray-50">
                Pass laws necessary to carry out *enumerated* powers. (Art. I, §8, cl. 18)
              </div>
              <div className="text-sm font-bold text-red-600 mt-2">
                Modern Usage: Pass laws that are merely *helpful* or *convenient* to carry out laws already passed.
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-900">
              <h4 className="font-bold text-blue-900 mb-2">3. General Welfare</h4>
              <div className="border border-dashed border-gray-400 p-3 mb-2 text-sm bg-gray-50">
                Limit spending to the enumerated powers. (Art. I, §8, cl. 1)
              </div>
              <div className="text-sm font-bold text-red-600 mt-2">
                Modern Usage: Allows federal spending on *anything* Congress deems beneficial, creating leverage over state budgets.
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-900">
              <h4 className="font-bold text-blue-900 mb-2">4. Supremacy Clause</h4>
              <div className="border border-dashed border-gray-400 p-3 mb-2 text-sm bg-gray-50">
                Federal laws made *pursuant* to the Constitution override state law. (Art. VI)
              </div>
              <div className="text-sm font-bold text-red-600 mt-2">
                Modern Usage: Federal agency regulations and inferred powers override states in any &quot;occupied field.&quot;
              </div>
            </div>
          </div>
        </section>

        {/* III. Statutes That Expanded Federal Power */}
        <section className="mb-12 px-4 md:px-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            III. Federal Statutes That Expanded Power
          </h2>
          <p className="mb-6 text-gray-700 text-center max-w-4xl mx-auto">
            While courts provided the legal rationale, these critical Acts translated broad constitutional interpretations 
            into massive, permanent federal programs and regulatory systems.
          </p>

          <div className="grid md:grid-cols-4 gap-6 text-sm text-gray-700">
            <div className="p-4 bg-gray-50 rounded-lg border-t-4 border-blue-500 shadow-sm">
              <h4 className="font-bold text-blue-900 mb-1">Interstate Commerce Act (1887)</h4>
              <p className="text-xs">
                Federal regulation of railroads set the foundational model for later federal economic control over private industry.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border-t-4 border-blue-500 shadow-sm">
              <h4 className="font-bold text-blue-900 mb-1">Federal Reserve Act (1913)</h4>
              <p className="text-xs">
                Centralized national monetary power in Washington, removing financial sovereignty from private markets and states.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border-t-4 border-blue-500 shadow-sm">
              <h4 className="font-bold text-blue-900 mb-1">Social Security Act (1935)</h4>
              <p className="text-xs">
                Created federal welfare and taxation systems that replaced state and local responsibility for retirement and unemployment.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border-t-4 border-blue-500 shadow-sm">
              <h4 className="font-bold text-blue-900 mb-1">Civil Rights Act (1964)</h4>
              <p className="text-xs">
                Used Commerce Clause logic to enforce civil rights, giving the federal government regulatory authority over 
                nearly all private businesses.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border-t-4 border-blue-500 shadow-sm">
              <h4 className="font-bold text-blue-900 mb-1">Controlled Substances Act (1970)</h4>
              <p className="text-xs">
                Federalized criminal law that had historically belonged entirely to states, creating massive federal enforcement jurisdiction.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border-t-4 border-blue-500 shadow-sm">
              <h4 className="font-bold text-blue-900 mb-1">No Child Left Behind (2001)</h4>
              <p className="text-xs">
                Established federal performance and funding mandates that intervened heavily in education, a domain never enumerated 
                to Washington.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border-t-4 border-blue-500 shadow-sm">
              <h4 className="font-bold text-blue-900 mb-1">Affordable Care Act (2010)</h4>
              <p className="text-xs">
                Massive federal intervention in healthcare, regulating insurance markets and expanding Medicaid, originally a purely 
                state domain.
              </p>
            </div>
          </div>
        </section>

        {/* IV. Case Law Explosion */}
        <section className="mb-12 px-4 md:px-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            IV. The Case Law That Powered Expansion
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Column 1: Commerce & Implied Powers */}
            <div>
              <h3 className="text-2xl font-bold text-red-600 mb-4">A. Commerce & Implied Powers</h3>
              <p className="mb-3 text-sm text-gray-700">
                These rulings provided the legal foundation for federal economic and political control over virtually all human activity.
              </p>
              
              <div className="space-y-4">
                <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold">Wickard v. Filburn (1942)</h4>
                  <p className="text-sm text-gray-600 mt-2">
                    The single biggest expansion. Allowed federal regulation of homegrown wheat because it *affected* interstate 
                    commerce. Erased limits on economic regulation.
                  </p>
                  <span className="block mt-2 text-xs text-gray-500">317 U.S. 111 (1942)</span>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold">McCulloch v. Maryland (1819)</h4>
                  <p className="text-sm text-gray-600 mt-2">
                    Established &quot;implied powers.&quot; Held Congress could create a national bank even though the power 
                    wasn&apos;t explicitly enumerated.
                  </p>
                  <span className="block mt-2 text-xs text-gray-500">17 U.S. (4 Wheat.) 316 (1819)</span>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold">Heart of Atlanta Motel v. U.S. (1964)</h4>
                  <p className="text-sm text-gray-600 mt-2">
                    Upheld federal Civil Rights legislation by ruling private business could be regulated because customers or 
                    goods crossed state lines.
                  </p>
                  <span className="block mt-2 text-xs text-gray-500">379 U.S. 241 (1964)</span>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold">Gonzales v. Raich (2005)</h4>
                  <p className="text-sm text-gray-600 mt-2">
                    Affirmed federal power to prohibit medical marijuana grown legally at home, cementing the broad Wickard-style logic.
                  </p>
                  <span className="block mt-2 text-xs text-gray-500">545 U.S. 1 (2005)</span>
                </div>
              </div>
            </div>

            {/* Column 2: Fiscal Coercion & Regulatory Power */}
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">B. Fiscal Coercion & Administrative State</h3>
              <p className="mb-3 text-sm text-gray-700">
                These rulings turned federal money into political leverage and granted vast quasi-legislative power to unelected agencies.
              </p>
              
              <div className="space-y-4">
                <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold">South Dakota v. Dole (1987)</h4>
                  <p className="text-sm text-gray-600 mt-2">
                    Legitimized &quot;conditional funding.&quot; Allowed Congress to withhold highway funds unless states raised the 
                    drinking age, turning federal grants into leverage.
                  </p>
                  <span className="block mt-2 text-xs text-gray-500">483 U.S. 203 (1987)</span>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold">NFIB v. Sebelius (2012) — Medicaid</h4>
                  <p className="text-sm text-gray-600 mt-2">
                    Upheld Congress&apos;s right to use *new* Medicaid funds as leverage, though it limited threats to revoke *existing* 
                    funds (stopping total coercion).
                  </p>
                  <span className="block mt-2 text-xs text-gray-500">567 U.S. 519 (2012)</span>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold">Chevron U.S.A. Inc. v. NRDC (1984)</h4>
                  <p className="text-sm text-gray-600 mt-2">
                    Required courts to defer to federal agencies&apos; interpretations of ambiguous statutes, effectively giving 
                    bureaucracies quasi-legislative power to write binding rules.
                  </p>
                  <span className="block mt-2 text-xs text-gray-500">467 U.S. 837 (1984)</span>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold">Perpich v. Dept. of Defense (1990)</h4>
                  <p className="text-sm text-gray-600 mt-2">
                    Stripped states of control over their own militias by allowing Congress to deploy state National Guard units 
                    overseas without governor approval.
                  </p>
                  <span className="block mt-2 text-xs text-gray-500">496 U.S. 334 (1990)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* V. Administrative State Growth */}
        <section className="mb-12 px-4 md:px-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
            V. The Administrative State: Fueled by Deference
          </h2>
          <p className="text-gray-700 text-center mb-8 max-w-4xl mx-auto">
            The most profound shift was non-legislative: the growth of federal agencies writing binding rules, driven for 40 years 
            by the *Chevron* doctrine.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            
            <div className="h-[300px] relative">
              <canvas ref={chartRef} id="agencyGrowthChart"></canvas>
            </div>

            <div>
              <h3 className="text-xl font-bold text-red-600 mb-3">Key Takeaways from Administrative Law:</h3>
              <ul className="list-disc list-inside space-y-3 text-sm text-gray-700">
                <li>
                  <strong>Regulatory Law:</strong> Agencies (EPA, ATF, HHS) write binding rules without congressional votes, 
                  thanks to broad statutes.
                </li>
                <li>
                  <strong>Field Preemption:</strong> Cases like *Hines v. Davidowitz* established that when Congress occupies 
                  an area, states are shut out, regardless of differing local needs.
                </li>
                <li>
                  <strong>Unaccountability:</strong> This regulatory law is often written by unelected officials, creating rules 
                  that are shifting and expanding.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* VI. Full Citation List */}
        <section className="mb-12 px-4 md:px-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">VI. Full Case Citation List</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-bold text-red-600 mb-2">Commerce Clause Expansion</h4>
              <div className="space-y-2">
                <span className="block text-xs text-gray-600">Wickard v. Filburn, 317 U.S. 111 (1942)</span>
                <span className="block text-xs text-gray-600">Heart of Atlanta Motel v. U.S., 379 U.S. 241 (1964)</span>
                <span className="block text-xs text-gray-600">Gonzales v. Raich, 545 U.S. 1 (2005)</span>
              </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-bold text-blue-900 mb-2">Necessary & Proper / Spending</h4>
              <div className="space-y-2">
                <span className="block text-xs text-gray-600">McCulloch v. Maryland, 17 U.S. (4 Wheat.) 316 (1819)</span>
                <span className="block text-xs text-gray-600">South Dakota v. Dole, 483 U.S. 203 (1987)</span>
                <span className="block text-xs text-gray-600">NFIB v. Sebelius (Medicaid), 567 U.S. 519 (2012)</span>
              </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-bold text-blue-900 mb-2">Supremacy / Agency Power</h4>
              <div className="space-y-2">
                <span className="block text-xs text-gray-600">Hines v. Davidowitz, 312 U.S. 52 (1941)</span>
                <span className="block text-xs text-gray-600">Chevron U.S.A. Inc. v. NRDC, 467 U.S. 837 (1984)</span>
                <span className="block text-xs text-gray-600">Perpich v. Dept. of Defense, 496 U.S. 334 (1990)</span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
