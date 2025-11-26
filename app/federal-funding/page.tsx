'use client';

import { useEffect } from 'react';

export default function FederalFundingPage() {
  useEffect(() => {
    // Load Chart.js
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    script.onload = () => {
      initializeCharts();
    };
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const initializeCharts = () => {
    // @ts-ignore
    if (typeof Chart === 'undefined') return;

    // Revenue Source Chart
    const ctxRev = document.getElementById('revenueSourceChart') as HTMLCanvasElement;
    if (ctxRev) {
      // @ts-ignore
      new Chart(ctxRev, {
        type: 'pie',
        data: {
          labels: ['Individual Income Tax', 'Payroll Taxes', 'Corporate Tax', 'Excise/Other'],
          datasets: [{
            data: [50, 36, 10, 4],
            backgroundColor: ['#1E3A8A', '#3B82F6', '#93C5FD', '#E5E7EB'],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'bottom' }
          }
        }
      });
    }

    // Spending Chart
    const ctxSpend = document.getElementById('spendingChart') as HTMLCanvasElement;
    if (ctxSpend) {
      // @ts-ignore
      new Chart(ctxSpend, {
        type: 'doughnut',
        data: {
          labels: ['Social Security', 'Health (Medicare/Medicaid)', 'Defense', 'Interest on Debt', 'Other Discretionary'],
          datasets: [{
            data: [22, 28, 14, 13, 23],
            backgroundColor: ['#1E3A8A', '#3B82F6', '#60A5FA', '#DC2626', '#E5E7EB'],
            hoverOffset: 4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'bottom' },
            title: {
              display: true,
              text: 'Federal Spending Breakdown (Approx.)'
            }
          }
        }
      });
    }
  };

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto p-4 md:p-8 max-w-6xl bg-white shadow-xl my-8 rounded-lg">
        
        {/* Header */}
        <header className="text-center mb-12 py-8 bg-[#0F172A] text-white rounded-t-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Federal Funding, Central Banking & Power</h1>
          <p className="text-xl font-light">Structure, Evolution, and Who Pays (1913–Present)</p>
        </header>

        {/* I. Historical Foundations */}
        <section className="mb-12 px-4 md:px-12">
          <h2 className="text-3xl font-bold text-[#1E3A8A] mb-6 border-b-4 border-[#DC2626] inline-block pb-1">I. The Historical Architecture</h2>
          <p className="mb-6 text-gray-700 italic">The modern U.S. system wasn't built in a day. It evolved from European precedents and American crises.</p>
          
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm border-t-4 border-[#1E3A8A]">
              <h3 className="text-lg font-bold mb-2 text-[#1E3A8A]">1694: Bank of England</h3>
              <p className="text-xs text-gray-600"><strong>The Prototype:</strong> Established the model of a central bank issuing paper money backed by government debt to finance war.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm border-t-4 border-[#1E3A8A]">
              <h3 className="text-lg font-bold mb-2 text-[#1E3A8A]">1800s: Bond Markets</h3>
              <p className="text-xs text-gray-600"><strong>The Network:</strong> Rothschilds & others pioneered international sovereign debt. Proved that information & distribution networks control state credit.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm border-t-4 border-[#1E3A8A]">
              <h3 className="text-lg font-bold mb-2 text-[#1E3A8A]">1907: J.P. Morgan</h3>
              <p className="text-xs text-gray-600"><strong>The Catalyst:</strong> Morgan privately backstopped the U.S. panic. Lesson: The entity that backstops the system controls it.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm border-t-4 border-[#DC2626]">
              <h3 className="text-lg font-bold mb-2 text-[#DC2626]">1910: Jekyll Island</h3>
              <p className="text-xs text-gray-600"><strong>The Plan:</strong> A secret meeting of financiers & politicians drafted the blueprint for a U.S. central bank, leading to the Federal Reserve Act.</p>
            </div>
          </div>
        </section>

        {/* II. The Federal Reserve System Structure */}
        <section className="mb-12 px-4 md:px-12 bg-blue-50 py-8 rounded-lg border border-blue-100">
          <h2 className="text-3xl font-bold text-[#1E3A8A] mb-6 text-center">II. The Federal Reserve System (1913–Present)</h2>
          <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">A "Public-Private Hybrid" structure designed to balance centralized national control with regional private banking interests.</p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Public Side */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-[#1E3A8A] text-white p-2 rounded mr-3 text-xl">🏛️</div>
                <h3 className="text-xl font-bold text-[#1E3A8A]">Public Component</h3>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Board of Governors (Washington D.C.)</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>Independent Federal Agency.</li>
                <li>7 Members appointed by President, confirmed by Senate.</li>
                <li>14-year staggered terms (insulated from politics).</li>
                <li>Cannot be impeached by Congress (removed only "for cause").</li>
              </ul>
            </div>

            {/* Private Side */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-[#DC2626] text-white p-2 rounded mr-3 text-xl">🏦</div>
                <h3 className="text-xl font-bold text-[#DC2626]">Private Component</h3>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">12 Regional Reserve Banks</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>Private Corporations (not federal agencies).</li>
                <li>Owned by Member Banks (commercial banks hold stock).</li>
                <li>Employees are not federal workers.</li>
                <li>Directors largely chosen by private banks.</li>
              </ul>
            </div>
          </div>

          <h4 className="text-center font-bold text-[#1E3A8A] mb-4">The 12 Regional Banks</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
            {['1. Boston', '2. New York', '3. Philadelphia', '4. Cleveland', '5. Richmond', '6. Atlanta', 
              '7. Chicago', '8. St. Louis', '9. Minneapolis', '10. Kansas City', '11. Dallas', '12. San Francisco'].map((bank, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-bold text-[#1E3A8A]">
                {bank}
              </div>
            ))}
          </div>
        </section>

        {/* III. Timeline of Control */}
        <section className="mb-12 px-4 md:px-12">
          <h2 className="text-3xl font-bold text-[#1E3A8A] mb-10 border-b-4 border-[#DC2626] inline-block pb-1">III. Timeline of Monetary Control</h2>
          
          <div className="space-y-8">
            {[
              { year: '1913', title: 'The Foundation', desc: 'Federal Reserve Act creates the system. Purpose: Provide elastic currency & serve as lender of last resort to prevent bank runs.', side: 'left' },
              { year: '1933-35', title: 'Centralization', desc: 'EO 6102 seizes gold. Banking Act of 1935 centralizes power in the D.C. Board of Governors, drastically reducing regional bank independence. Modern FOMC created.', side: 'right' },
              { year: '1946', title: 'Employment Act', desc: 'Gave the federal government responsibility for "maximum employment, production, and purchasing power," setting the stage for the Fed\'s future dual mandate.', side: 'left' },
              { year: '1971', title: 'Pure Fiat', desc: 'Nixon ends gold convertibility. The dollar becomes backed only by confidence, allowing structurally unlimited debt issuance.', side: 'right' },
              { year: '1977-78', title: 'Mandate & Accountability', desc: 'Reform Act (1977) codifies the "Dual Mandate" (Stable Prices + Max Employment). Humphrey-Hawkins (1978) requires the Fed Chair to testify to Congress twice yearly.', side: 'left' },
              { year: '1979-87', title: 'The Volcker Era', desc: 'Paul Volcker crushes inflation with historic interest rate hikes. Proves the Fed\'s power to discipline the entire economy, even at the cost of recession.', side: 'right', highlight: true },
              { year: '2010', title: 'Dodd-Frank Act', desc: 'Expanded oversight and prohibited bailout loans to individual companies (must be broad-based). Created new regulatory roles for the Fed.', side: 'left' },
              { year: '2020-Present', title: 'Permanent Crisis', desc: 'Reserve Requirements eliminated (0%) in March 2020. QE normalized. The Fed now acts as the permanent stabilizer of the financial system.', side: 'right' },
            ].map((item, idx) => (
              <div key={idx} className={`bg-white border-l-4 ${item.highlight ? 'border-[#DC2626]' : 'border-[#1E3A8A]'} p-6 rounded-lg shadow-sm`}>
                <h3 className={`text-2xl font-bold mb-2 ${item.highlight ? 'text-[#DC2626]' : 'text-[#1E3A8A]'}`}>{item.year}: {item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* IV. The Budget Process */}
        <section className="mb-12 px-4 md:px-12">
          <h2 className="text-3xl font-bold text-[#1E3A8A] mb-6 border-b-4 border-[#DC2626] inline-block pb-1">IV. How the Budget Becomes Law (Or Doesn't)</h2>
          <p className="mb-8 text-gray-700 text-center max-w-3xl mx-auto">Congress has the "Power of the Purse." To spend a single dollar, two separate laws must usually pass: one to authorize the program, and one to appropriate the money.</p>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="font-bold text-[#1E3A8A] text-lg mb-2">1. President's Request</h3>
                <p className="text-sm text-gray-600"><strong>(February)</strong> A detailed proposal. It is a request, not law.</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="font-bold text-[#1E3A8A] text-lg mb-2">2. Budget Resolution</h3>
                <p className="text-sm text-gray-600"><strong>(Spring)</strong> Congress sets the "topline" spending limits. An internal blueprint.</p>
              </div>
            </div>

            <div className="text-center text-3xl text-blue-600">⬇</div>

            {/* Step 2: Dual Track */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Track A */}
              <div className="border-2 border-blue-300 rounded-lg p-6 bg-blue-50">
                <h3 className="font-bold text-blue-800 text-center mb-4 text-lg">Track A: Authorization</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <h4 className="font-bold text-sm mb-1">Authorization Bill</h4>
                    <p className="text-xs text-gray-600">Proposed legislation to establish a program or agency.</p>
                  </div>
                  <div className="text-center text-2xl text-blue-400">⬇</div>
                  <div className="bg-blue-100 p-4 rounded-lg border-2 border-blue-300">
                    <h4 className="font-bold text-sm mb-1">Authorization Act (Law)</h4>
                    <p className="text-xs text-gray-600"><strong>Permission:</strong> Signed by President. Says "Agency X is allowed to exist and spend up to $Y." But it provides NO money.</p>
                  </div>
                </div>
              </div>

              {/* Track B */}
              <div className="border-2 border-green-300 rounded-lg p-6 bg-green-50">
                <h3 className="font-bold text-green-800 text-center mb-4 text-lg">Track B: Appropriation</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <h4 className="font-bold text-sm mb-1">Appropriations Bill</h4>
                    <p className="text-xs text-gray-600">Proposed legislation to actually fund the authorized programs.</p>
                  </div>
                  <div className="text-center text-2xl text-green-400">⬇</div>
                  <div className="bg-green-100 p-4 rounded-lg border-2 border-green-300">
                    <h4 className="font-bold text-sm mb-1">Appropriations Act (Law)</h4>
                    <p className="text-xs text-gray-600"><strong>Funding:</strong> Signed by President. Gives Treasury legal authority to write the check.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg text-center text-sm border border-gray-300">
              <span className="font-bold text-purple-700">SPECIAL TRACK: Reconciliation</span> — A fast-track process for budget/tax bills that cannot be filibustered in the Senate. Used for major tax cuts or entitlement changes.
            </div>

            <div className="text-center text-3xl text-blue-600">⬇</div>

            {/* Step 3: Deadline */}
            <div className="border-2 border-red-400 rounded-lg p-6 bg-red-50">
              <h3 className="text-xl font-bold text-red-800 mb-4 text-center">DEADLINE: October 1st (Fiscal Year Begins)</h3>
              <p className="text-sm font-bold mb-6 text-center">Did Congress pass all 12 Appropriations Acts?</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded border-2 border-green-500 shadow-sm">
                  <h4 className="font-bold text-green-700 text-lg mb-2">YES</h4>
                  <p className="text-sm text-gray-600">Government is funded. Agencies operate normally for the fiscal year.</p>
                </div>

                <div className="bg-white p-6 rounded border-2 border-red-500 shadow-sm">
                  <h4 className="font-bold text-red-700 text-lg mb-3">NO</h4>
                  <p className="text-sm text-gray-600 mb-4">Congress must choose:</p>
                  
                  <div className="space-y-3">
                    <div className="bg-yellow-100 p-3 rounded border border-yellow-300">
                      <span className="font-bold text-yellow-800 text-sm block mb-1">OPTION A: Continuing Resolution (CR)</span>
                      <span className="text-xs text-gray-700">A temporary law that continues funding at <em>last year's</em> levels for a short time (days or months) to avoid a shutdown.</span>
                    </div>
                    <div className="bg-red-100 p-3 rounded border border-red-300">
                      <span className="font-bold text-red-800 text-sm block mb-1">OPTION B: Government Shutdown</span>
                      <span className="text-xs text-gray-700">If no Appropriations Act OR CR is passed, funding lapses. Affected departments must cease non-essential operations immediately.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* V. How Government Borrows */}
        <section className="mb-12 px-4 md:px-12 bg-gray-50 py-8 rounded-lg border border-gray-200">
          <h2 className="text-3xl font-bold text-[#1E3A8A] mb-6 border-b-4 border-[#DC2626] inline-block pb-1">V. How the Government Borrows Money</h2>
          <p className="mb-8 text-gray-700 text-center max-w-3xl mx-auto">When the government spends more than it taxes (Deficit), it must borrow. It does not just "print money" directly; it sells debt securities.</p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-center mb-4 text-4xl">🏛️</div>
              <h3 className="text-lg font-bold text-center text-[#1E3A8A] mb-2">1. The Treasury Auction</h3>
              <p className="text-sm text-gray-600">The U.S. Treasury Department issues securities (Bills, Notes, Bonds). It holds an auction to sell this debt to the public to raise cash.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-center mb-4 text-4xl">🏦</div>
              <h3 className="text-lg font-bold text-center text-[#1E3A8A] mb-2">2. Primary Dealers</h3>
              <p className="text-sm text-gray-600">A specific group of large banks (Primary Dealers) are <em>required</em> to bid at these auctions. They buy the debt initially.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-[#DC2626]">
              <div className="flex justify-center mb-4 text-4xl">🔄</div>
              <h3 className="text-lg font-bold text-center text-[#DC2626] mb-2">3. The Fed's Role (Open Market)</h3>
              <p className="text-sm text-gray-600">The Federal Reserve buys/sells these securities in the <em>secondary market</em>. By buying bonds, the Fed injects cash (liquidity) into the banking system, indirectly financing the debt.</p>
            </div>
          </div>
        </section>

        {/* VI. Who Pays? */}
        <section className="mb-12 px-4 md:px-12">
          <div className="bg-[#F8FAFC] p-8 rounded-lg shadow-inner">
            <h2 className="text-3xl font-bold text-[#1E3A8A] mb-6 text-center">VI. Who Funds the Government?</h2>
            <p className="text-center text-sm text-gray-600 mb-8">In FY 2024, federal revenue was ~$4.9 Trillion. Here is who pays:</p>
            
            <div className="grid md:grid-cols-2 gap-10">
              
              <div>
                <h3 className="text-xl font-bold text-center mb-4">Federal Revenue Sources (2024)</h3>
                <div className="relative w-full h-80">
                  <canvas id="revenueSourceChart"></canvas>
                </div>
                <p className="mt-4 text-sm text-gray-700 text-center"><strong>Individual Income Taxes</strong> (~50%) and <strong>Payroll Taxes</strong> (~36%) account for ~85% of all federal revenue.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-center mb-4">The "Welfare Funding Paradox"</h3>
                <div className="bg-white p-6 rounded border border-gray-200 h-full flex flex-col justify-center text-center">
                  <p className="text-gray-700 mb-4">The <strong>Top 1%</strong> pay ~40% of all Income Taxes (funding general govt).</p>
                  <hr className="my-4" />
                  <p className="text-gray-700 mb-4">However, the <strong>Bottom 80%</strong> contribute a massive share of <strong>Payroll Taxes (FICA)</strong>.</p>
                  <p className="font-bold text-[#1E3A8A]">Payroll Taxes Fund:</p>
                  <ul className="text-gray-600 font-semibold text-sm list-none">
                    <li>Social Security</li>
                    <li>Medicare (Part A)</li>
                  </ul>
                  <p className="mt-6 text-sm italic font-medium text-[#DC2626]">"The working majority effectively pre-funds its own safety net."</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* VII. Where Money Goes */}
        <section className="mb-12 px-4 md:px-12">
          <h2 className="text-3xl font-bold text-[#1E3A8A] mb-6 text-center">VII. Where Does the Money Go?</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-full md:w-1/2">
              <div className="relative w-full h-80">
                <canvas id="spendingChart"></canvas>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-bold mb-4">Key Spending Facts (FY 2024):</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-sm">
                <li><strong>Mandatory Spending (~60%):</strong> Social Security, Medicare, Medicaid. This is on "autopilot."</li>
                <li><strong>Interest on Debt (~13-15%):</strong> Cost nearly <strong>$900 Billion</strong> in 2024. It is crowding out other spending.</li>
                <li><strong>Discretionary (~25-30%):</strong> Includes Defense (~13-15%) and everything else (Education, DOJ, Infrastructure).</li>
                <li><strong>State Transfers:</strong> ~$1.1 Trillion flows to states (Medicaid, etc.), giving Feds leverage.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-xs py-8 border-t">
          <p>Based on historical data, U.S. Code, and Federal Reserve publications provided.</p>
        </footer>

      </div>
    </div>
  );
}
