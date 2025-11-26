'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function FrameworkPage() {
  useEffect(() => {
    // Load Chart.js dynamically
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    script.async = true;
    script.onload = () => {
      initializeChart();
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initializeChart = () => {
    const federalTurnout = [68, 60, 51, 55, 57, 61, 62, 55, 54, 55, 59, 59, 64];
    const stateTurnout = [45, 40, 35, 40, 42, 45, 48, 42, 40, 38, 42, 45, 47];
    const localTurnout = [40, 35, 30, 28, 25, 22, 20, 18, 18, 17, 20, 22, 25];
    const decades = ['1900s', '1910s', '1920s', '1930s', '1940s', '1950s', '1960s', '1970s', '1980s', '1990s', '2000s', '2010s', '2020s'];

    const colorFederal = '#1E3A8A';
    const colorState = '#3B82F6';
    const colorLocal = '#DC2626';

    const canvas = document.getElementById('turnoutChart') as HTMLCanvasElement;
    if (canvas && (window as any).Chart) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        new (window as any).Chart(ctx, {
          type: 'line',
          data: {
            labels: decades,
            datasets: [
              {
                label: 'Federal (Presidential)',
                data: federalTurnout,
                borderColor: colorFederal,
                backgroundColor: colorFederal,
                fill: false,
                tension: 0.3,
                borderWidth: 3,
                pointRadius: 4
              },
              {
                label: 'State (Governor/Legislature)',
                data: stateTurnout,
                borderColor: colorState,
                backgroundColor: colorState,
                fill: false,
                tension: 0.3,
                pointRadius: 4
              },
              {
                label: 'Local (City/County/School Board)',
                data: localTurnout,
                borderColor: colorLocal,
                backgroundColor: colorLocal,
                fill: false,
                tension: 0.3,
                borderDash: [5, 5],
                pointRadius: 4
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { position: 'top' },
              title: { display: true, text: 'Voter Turnout Averages by Decade (% of VEP)' }
            },
            scales: {
              y: {
                beginAtZero: false,
                min: 0,
                max: 70,
                title: { display: true, text: 'Turnout Percentage' }
              }
            }
          }
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4 md:p-8 max-w-6xl">
        
        {/* Header */}
        <header className="text-center mb-12 py-8 bg-slate-900 text-white rounded-t-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">The Literal Constitutional Framework</h1>
          <p className="text-xl font-light">Rights, Powers, and Checks & Balances (Strict Text Interpretation)</p>
        </header>

        {/* I. Citizen's Literal Rights */}
        <section className="mb-12 px-4 md:px-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 border-b-4 border-red-600 inline-block pb-1">
            I. Citizen Rights: The Literal Text
          </h2>
          <p className="mb-6 text-gray-700 text-center max-w-4xl mx-auto">
            Fundamental liberties and protections against government overreach, derived strictly from the text of the amendments.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Amendment Cards */}
            <div className="bg-gray-50 rounded-lg p-4 border-l-5 border-blue-900">
              <div className="text-3xl font-bold text-blue-900 mb-2">1</div>
              <h4 className="font-bold text-lg text-gray-800">Expression, Religion, Assembly</h4>
              <p className="text-sm italic text-gray-600 mt-1">
                Free speech, press, assembly, religion, and the right to petition the government.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border-l-5 border-blue-900">
              <div className="text-3xl font-bold text-blue-900 mb-2">2 & 4</div>
              <h4 className="font-bold text-lg text-gray-800">Arms & Search/Seizure</h4>
              <p className="text-sm italic text-gray-600 mt-1">
                Right of the people to keep and bear Arms (2). Security in persons, houses, papers against unreasonable searches (4).
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border-l-5 border-blue-900">
              <div className="text-3xl font-bold text-blue-900 mb-2">5 & 14</div>
              <h4 className="font-bold text-lg text-gray-800">Due Process & Equal Protection</h4>
              <p className="text-sm italic text-gray-600 mt-1">
                Due process, protection from double jeopardy, eminent domain (5). Nor shall any State deny equal protection of the laws (14).
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border-l-5 border-blue-900">
              <div className="text-3xl font-bold text-blue-900 mb-2">6 & 8</div>
              <h4 className="font-bold text-lg text-gray-800">Trial & Punishment</h4>
              <p className="text-sm italic text-gray-600 mt-1">
                Speedy public trial, assistance of counsel (6). No cruel or unusual punishments (8).
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border-l-5 border-blue-900">
              <div className="text-3xl font-bold text-blue-900 mb-2">9 & 10</div>
              <h4 className="font-bold text-lg text-gray-800">Retained & Reserved Powers</h4>
              <p className="text-sm italic text-gray-600 mt-1">
                Rights retained by the people (9). Powers reserved to the States or people (10).
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border-l-5 border-blue-900">
              <div className="text-3xl font-bold text-blue-900 mb-2">15, 19, 26</div>
              <h4 className="font-bold text-lg text-gray-800">Voting Rights</h4>
              <p className="text-sm italic text-gray-600 mt-1">
                Cannot be denied based on race, color, servitude (15), sex (19), or age 18+ (26).
              </p>
            </div>
          </div>
        </section>

        {/* II. Political Representation */}
        <section className="mb-12 px-4 md:px-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 border-b-4 border-red-600 inline-block pb-1">
            II. Representation: Original Intent vs. Modern Reality
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Founders' Vision */}
            <div className="bg-blue-100 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">A. The Founders' Accountable Design</h3>
              <ul className="list-disc list-inside ml-4 space-y-3 text-sm text-gray-800">
                <li><strong>Local Focus:</strong> Citizen votes for a State Representative in their local area (shared zip code/community).</li>
                <li><strong>State Sovereignty:</strong> State government decisions were the most impactful on a citizen's day-to-day life.</li>
                <li><strong>Senator Check (Pre-17th):</strong> State Representatives held US Senators accountable through the power to elect, recall, or remove them.</li>
                <li><strong>Presidential Check:</strong> State Legislatures chose Presidential Electors (a power the state still retains, though now delegated to popular vote).</li>
                <li><strong>Goal:</strong> Representation was close, frequent, and deeply tied to local interests.</li>
              </ul>
            </div>

            {/* Modern Reality */}
            <div className="bg-red-100 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-red-600 mb-4">B. The Unintended 2025 Burden</h3>
              <ul className="list-disc list-inside ml-4 space-y-3 text-sm text-gray-800">
                <li><strong>High-Volume Voting:</strong> Citizen must vote in multiple primary/general elections for dozens of local, state, and federal offices.</li>
                <li><strong>Absentee Accountability:</strong> Citizen votes for US House (gerrymandered), US Senators (statewide), and President, all of whom have minimal local contact.</li>
                <li><strong>Voting as a "Full-Time Civic Job":</strong> Being informed on all local positions (Mayor, Sheriff, County Commissioner) plus all state/federal issues requires constant effort.</li>
                <li><strong>Result:</strong> This complexity and lack of direct contact lead to sharp declines in turnout and engagement.</li>
              </ul>
            </div>
          </div>

          {/* Control Loop */}
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">C. The Citizen's Control Mechanism (Use of Rights)</h3>
            <div className="grid md:grid-cols-5 gap-4 items-stretch">
              <div className="bg-cyan-100 p-4 rounded-lg border border-sky-300 flex flex-col justify-center">
                <h4 className="font-bold text-xl text-blue-900">Base Liberty</h4>
                <p className="text-xs text-gray-700 mt-1">Rights (5, 4, 8) ensure personal security and liberty against the state.</p>
              </div>
              
              <div className="md:col-span-2 bg-cyan-100 p-4 rounded-lg border border-sky-300">
                <h4 className="font-bold text-lg text-blue-900 italic">Political Engagement (1, 15, 19, 26)</h4>
                <ul className="list-disc list-inside text-sm text-gray-700 mt-2 ml-4">
                  <li><strong>Voting:</strong> Uses the right to vote for all local, state, and federal representatives.</li>
                  <li><strong>Petition/Assembly:</strong> Uses Free Expression to organize political action.</li>
                </ul>
              </div>

              <div className="md:col-span-2 bg-cyan-100 p-4 rounded-lg border border-sky-300">
                <h4 className="font-bold text-lg text-blue-900 italic">Defense & Redress (5, 6, 1)</h4>
                <ul className="list-disc list-inside text-sm text-gray-700 mt-2 ml-4">
                  <li><strong>Jury System:</strong> Uses rights (6, 7) as the citizen's direct check on the judiciary.</li>
                  <li><strong>Due Process:</strong> Ensures fair legal treatment and protection of property (5, 14).</li>
                </ul>
              </div>

              <div className="md:col-span-5 text-center my-4">
                <span className="text-4xl text-red-600 font-extrabold">➜</span>
                <p className="text-gray-600 font-bold mt-2">
                  Political and Defensive actions influence the officials elected by the vote, closing the constitutional loop.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* III. Voter Turnout Analysis */}
        <section className="mb-12 px-4 md:px-12 bg-gray-100 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            III. Voter Turnout Analysis (1900s–2020s)
          </h2>
          <p className="text-gray-700 text-center mb-8 max-w-4xl mx-auto">
            The gap between Federal and Local engagement confirms the breakdown of the Founder's localized vision, 
            with local accountability suffering the most.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="relative h-96 md:h-[500px]">
              <canvas id="turnoutChart"></canvas>
            </div>
            <p className="text-xs text-gray-500 text-center mt-4">
              Source: U.S. Elections Project, NCSL, Brookings (VEP Turnout Rates, approximate by decade).
            </p>
          </div>
        </section>

        {/* IV. Division of Power */}
        <section className="mb-12 px-4 md:px-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            IV. Division of Sovereignty (Literal Interpretation)
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* State Powers */}
            <div className="bg-blue-100 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Reserved State Powers (Tenth Amendment)</h3>
              <p className="mb-3 text-sm italic">
                Powers not prohibited to the states NOR delegated to the U.S. government are reserved entirely to the states.
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1 text-sm text-gray-800">
                <li><strong>General Police Power:</strong> Health, Safety, Welfare, and Morals.</li>
                <li><strong>Civil & Domestic Law:</strong> Education, Family Law, Property, and Contracts.</li>
                <li><strong>Intrastate Commerce:</strong> Business and agriculture conducted entirely within state borders.</li>
                <li><strong>Local Government:</strong> Creation, regulation, and funding of counties and cities.</li>
                <li><strong>Militias:</strong> Organizing and training military forces (Art. I, §8, cl. 16).</li>
              </ul>
            </div>

            {/* Federal Powers */}
            <div className="bg-red-100 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-red-600 mb-4">Enumerated Federal Powers (Art. I, §8)</h3>
              <p className="mb-3 text-sm italic">
                The powers of Congress are specifically limited to those listed in Article I, Section 8.
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1 text-sm text-gray-800">
                <li><strong>Taxation & Spending</strong> (Limited to general welfare/debt).</li>
                <li><strong>Borrowing Money</strong> & <strong>Coining Money</strong>.</li>
                <li><strong>Interstate & Foreign Commerce</strong> (Regulate trade between states).</li>
                <li><strong>Military & War</strong> (Declare war, raise armies/navies).</li>
                <li><strong>Naturalization</strong> (Immigration) & <strong>Post Offices</strong>.</li>
                <li><strong>Necessary and Proper Clause</strong> (To carry out the above enumerated powers).</li>
              </ul>
            </div>
          </div>

          {/* Structural Amendments */}
          <div className="mt-10 bg-gray-200 p-6 rounded-lg border-2 border-gray-400">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Structural Amendments That Changed Federalism
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-white rounded-lg border-l-4 border-red-500 shadow-md">
                <h4 className="font-bold text-xl text-red-700 mb-2">16th Amendment (Federal Tax Expansion)</h4>
                <p className="text-sm text-gray-700">
                  Gave Congress the power to levy <strong>Income Taxes</strong> without apportionment. This fundamentally 
                  altered fiscal power, allowing federal revenue to expand from ~2 primary tax types (1910) to 27+ 
                  mechanisms (2025).
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg border-l-4 border-blue-500 shadow-md">
                <h4 className="font-bold text-xl text-blue-700 mb-2">17th Amendment (Elimination of State Check)</h4>
                <p className="text-sm text-gray-700">
                  Fundamentally changed federalism by eliminating the ability of <strong>state legislatures</strong> to 
                  elect, recall, or remove U.S. Senators, removing the state government's institutional check on the 
                  federal legislature.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* V. Federal Structure & Checks */}
        <section className="mb-12 px-4 md:px-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            V. Federal Structure & Literal Checks
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Legislative */}
            <div className="bg-blue-50 border-2 border-blue-200 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Legislative (Congress)</h3>
              <p className="text-sm font-bold italic mb-2">Literal Powers (Art. I):</p>
              <ul className="list-disc list-inside ml-4 text-xs text-gray-700">
                <li>Pass laws (bicameral requirement).</li>
                <li>Tax, borrow, and appropriate money.</li>
                <li>Declare war.</li>
                <li><strong>Impeachment</strong> (House brings charges, Senate holds trial).</li>
              </ul>
              <p className="text-sm font-bold italic mt-3 mb-2">Checks on Others:</p>
              <ul className="list-disc list-inside ml-4 text-xs text-gray-700">
                <li>Override Presidential Veto (2/3rds vote).</li>
                <li><strong>Senate Confirmation</strong> (Treaties, Judges, Cabinet).</li>
                <li>Impeachment/Removal (Executive & Judicial).</li>
              </ul>
            </div>

            {/* Executive */}
            <div className="bg-red-50 border-2 border-red-200 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-red-600 mb-3">Executive (President)</h3>
              <p className="text-sm font-bold italic mb-2">Literal Powers (Art. II):</p>
              <ul className="list-disc list-inside ml-4 text-xs text-gray-700">
                <li>Commander-in-Chief.</li>
                <li>Execute the laws ("faithfully executed").</li>
                <li>Appoint officers (with Senate Consent).</li>
                <li>Make treaties (with Senate Consent).</li>
              </ul>
              <p className="text-sm font-bold italic mt-3 mb-2">Checks on Others:</p>
              <ul className="list-disc list-inside ml-4 text-xs text-gray-700">
                <li><strong>Veto</strong> legislative Acts.</li>
                <li>Appoint federal judges (subject to Senate).</li>
                <li>Grant pardons and reprieves.</li>
              </ul>
            </div>

            {/* Judicial */}
            <div className="bg-yellow-50 border-2 border-yellow-200 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-yellow-600 mb-3">Judicial (Courts)</h3>
              <p className="text-sm font-bold italic mb-2">Literal Powers (Art. III):</p>
              <ul className="list-disc list-inside ml-4 text-xs text-gray-700">
                <li>Hold tenure during "good Behaviour."</li>
                <li>Jurisdiction over all cases arising under the Constitution/Laws/Treaties.</li>
                <li>Original jurisdiction in cases involving States/Ambassadors.</li>
              </ul>
              <p className="text-sm font-bold italic mt-3 mb-2">Checks on Others:</p>
              <ul className="list-disc list-inside ml-4 text-xs text-gray-700">
                <li><strong>Judicial Review</strong> (implied, established via Marbury but not explicitly in text).</li>
                <li>Interpret the Constitution and federal laws.</li>
                <li>Issue writs/orders binding the Executive.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* VI. Modern Limitations */}
        <section className="mb-12 px-4 md:px-12 bg-gray-100 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            VI. Top 10 Statutory Limitations on Checks
          </h2>
          <p className="mb-6 text-gray-700 text-center max-w-4xl mx-auto">
            Specific Acts of Congress have legally shifted the balance, limiting original checks and expanding 
            Executive/Administrative power beyond constitutional intent.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Group 1: Legislative Power Erosion */}
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h4 className="font-bold text-blue-900 mb-3 border-b pb-2">Erosion of Legislative Check</h4>
              
              <div className="bg-white border-l-4 border-red-600 p-3 rounded mb-3 shadow-sm">
                <h5 className="font-bold text-sm text-red-600">Rules Enabling Act (1934)</h5>
                <p className="text-xs text-gray-700 mt-1">
                  Delegated power to the Supreme Court to write court rules, sidestepping Congress's direct legislative 
                  control over procedure.
                </p>
              </div>

              <div className="bg-white border-l-4 border-red-600 p-3 rounded mb-3 shadow-sm">
                <h5 className="font-bold text-sm text-red-600">Administrative Procedure Act (1946)</h5>
                <p className="text-xs text-gray-700 mt-1">
                  Formalized the power of agencies to write binding rules (regulation), transferring vast legislative 
                  authority from Congress to the Executive bureaucracy.
                </p>
              </div>

              <div className="bg-white border-l-4 border-red-600 p-3 rounded shadow-sm">
                <h5 className="font-bold text-sm text-red-600">Federal Reserve Act (1913)</h5>
                <p className="text-xs text-gray-700 mt-1">
                  Created an insulated, hybrid agency (the Fed) largely exempt from Congressional appropriation and 
                  direct audit control over monetary policy.
                </p>
              </div>
            </div>

            {/* Group 2: Military & Emergency Power */}
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h4 className="font-bold text-blue-900 mb-3 border-b pb-2">Expansion of Executive/Military Power</h4>
              
              <div className="bg-white border-l-4 border-red-600 p-3 rounded mb-3 shadow-sm">
                <h5 className="font-bold text-sm text-red-600">Insurrection Act (1807, amended)</h5>
                <p className="text-xs text-gray-700 mt-1">
                  Allows the President to deploy the military domestically, bypassing state Governor approval, overriding 
                  the state militia check.
                </p>
              </div>

              <div className="bg-white border-l-4 border-red-600 p-3 rounded mb-3 shadow-sm">
                <h5 className="font-bold text-sm text-red-600">Posse Comitatus Act (1878)</h5>
                <p className="text-xs text-gray-700 mt-1">
                  Bans using the military for domestic law enforcement (preserving the civilian check), but its exceptions 
                  are often overridden by Congress (e.g., in emergencies).
                </p>
              </div>

              <div className="bg-white border-l-4 border-red-600 p-3 rounded mb-3 shadow-sm">
                <h5 className="font-bold text-sm text-red-600">Defense Production Act (1950)</h5>
                <p className="text-xs text-gray-700 mt-1">
                  Grants the President sweeping authority over the economy (allocation of resources, controlling industry) 
                  during peacetime or national emergencies.
                </p>
              </div>

              <div className="bg-white border-l-4 border-red-600 p-3 rounded shadow-sm">
                <h5 className="font-bold text-sm text-red-600">National Security Act (1947)</h5>
                <p className="text-xs text-gray-700 mt-1">
                  Created the modern centralized national security apparatus (CIA, DoD), granting the Executive a massive, 
                  semi-autonomous intelligence and defense authority.
                </p>
              </div>
            </div>

            {/* Group 3: War & Surveillance Power */}
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h4 className="font-bold text-blue-900 mb-3 border-b pb-2">Emergency & Surveillance Power</h4>
              
              <div className="bg-white border-l-4 border-red-600 p-3 rounded mb-3 shadow-sm">
                <h5 className="font-bold text-sm text-red-600">National Emergencies Act (1976)</h5>
                <p className="text-xs text-gray-700 mt-1">
                  Formalized and consolidated over 100 emergency powers, giving the Executive discretionary triggers to 
                  use them during crises.
                </p>
              </div>

              <div className="bg-white border-l-4 border-red-600 p-3 rounded mb-3 shadow-sm">
                <h5 className="font-bold text-sm text-red-600">War Powers Act / AUMFs</h5>
                <p className="text-xs text-gray-700 mt-1">
                  While intended to curb the President, Congress uses AUMFs (Authorization for Use of Military Force) as 
                  broad delegations, undermining its own check (the power to declare war).
                </p>
              </div>

              <div className="bg-white border-l-4 border-red-600 p-3 rounded shadow-sm">
                <h5 className="font-bold text-sm text-red-600">Patriot Act (2001)</h5>
                <p className="text-xs text-gray-700 mt-1">
                  Vastly expanded federal surveillance and financial tracking powers, shifting the balance of citizen 
                  privacy versus Executive investigative authority.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
