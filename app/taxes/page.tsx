'use client';

import { useEffect } from 'react';

export default function TaxesPage() {
  useEffect(() => {
    // Load Chart.js
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    script.onload = () => {
      initializeChart();
    };
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const initializeChart = () => {
    // @ts-ignore
    if (typeof Chart === 'undefined') return;

    const processLabels = (labels: string[]) => {
      return labels.map(label => {
        if (label.length > 16) {
          let words = label.split(' ');
          let newLines: string[] = [];
          let currentLine = '';
          for (let word of words) {
            if ((currentLine + ' ' + word).trim().length > 16) {
              newLines.push(currentLine.trim());
              currentLine = word;
            } else {
              currentLine = (currentLine + ' ' + word).trim();
            }
          }
          newLines.push(currentLine.trim());
          return newLines;
        }
        return label;
      });
    };

    const ctx = document.getElementById('taxFootprintChart') as HTMLCanvasElement;
    if (!ctx) return;

    // @ts-ignore
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: processLabels([
          'Pre-1910 (Baseline)',
          '1910-1919',
          '1920-1929',
          '1930-1939',
          '1940-1949',
          '1950-1959',
          '1960-1969',
          '1970-1979',
          '1980-1989',
          '1990-1999',
          '2000-2009',
          '2010-2019',
          '2020-Present'
        ]),
        datasets: [{
          label: 'Cumulative Number of Major Federal Tax Types',
          data: [2, 4, 6, 7, 8, 10, 13, 14, 16, 19, 20, 24, 27],
          backgroundColor: [
            '#ADB5BD', '#FF6B6B', '#FFD166', '#06D6A0', '#118AB2', '#073B4C',
            '#FF6B6B', '#FFD166', '#06D6A0', '#118AB2', '#073B4C', '#FF6B6B', '#FFD166'
          ],
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              title: function(tooltipItems: any) {
                const item = tooltipItems[0];
                let label = item.chart.data.labels[item.dataIndex];
                if (Array.isArray(label)) {
                  return label.join(' ');
                } else {
                  return label;
                }
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Cumulative Number of Tax Types'
            }
          }
        }
      }
    });
  };

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto p-4 md:p-8 max-w-7xl">
        
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">The Evolution of Federal Funding</h1>
          <p className="text-xl text-gray-600">How the U.S. government's power to tax citizens expanded, 1900-Present</p>
        </header>

        {/* Baseline Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Baseline (Pre-1910): A Limited Federal Government</h2>
          <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto text-center">Before 1910, the federal government's ability to raise funds was extremely limited by the Constitution. It could not directly tax individual incomes and relied on indirect taxes.</p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-yellow-400">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Citizen Tax Footprint</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Tariffs:</strong> (Indirect tax) The primary source of revenue.</li>
                <li><strong>Excise Taxes:</strong> (e.g., on alcohol, tobacco).</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-gray-400">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Structural Power</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong className="text-red-600">NO</strong> direct Individual Income Tax.</li>
                <li><strong className="text-red-600">NO</strong> central bank.</li>
                <li><strong>Limited</strong> borrowing capacity.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">The Expansion of Federal Funding: A Timeline</h2>
          <div className="relative space-y-12">

            {/* 1910-1919 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-red-500">
              <h3 className="text-2xl font-bold text-blue-700">1910-1919: The Great Transformation</h3>
              <h4 className="font-semibold mt-4">New Taxes on Citizens:</h4>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1 mt-2">
                <li>Individual Income Tax (16th Amendment)</li>
                <li>Federal Estate Tax</li>
              </ul>
              <h4 className="font-semibold mt-4">Major Structural Changes:</h4>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1 mt-2">
                <li><strong>16th Amendment (1913):</strong> Unlocked the ability to tax citizens' income directly.</li>
                <li><strong>Federal Reserve Act (1913):</strong> Created a central bank, expanding power to finance debt.</li>
                <li><strong>War Revenue Acts (1917, 1918):</strong> Scaled the new income tax (top rate to 77%) to fund WWI.</li>
              </ul>
            </div>

            {/* 1920-1929 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-yellow-400">
              <h3 className="text-2xl font-bold text-blue-700">1920-1929: Consolidation & "Normalcy"</h3>
              <h4 className="font-semibold mt-4">New Taxes on Citizens:</h4>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1 mt-2">
                <li>Capital Gains Tax</li>
                <li>Gift Tax (to backstop the Estate Tax)</li>
              </ul>
              <h4 className="font-semibold mt-4">Major Structural Changes:</h4>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1 mt-2">
                <li><strong>Budget and Accounting Act (1921):</strong> Centralized federal power by creating the Bureau of the Budget (OMB).</li>
                <li><strong>Revenue Acts (1920s):</strong> Normalized the income tax as the primary, flexible revenue source, while cutting rates (top rate to 25%).</li>
              </ul>
            </div>

            {/* 1930-1939 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500">
              <h3 className="text-2xl font-bold text-blue-700">1930-1939: The New Deal Revolution</h3>
              <h4 className="font-semibold mt-4">New Taxes on Citizens:</h4>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1 mt-2">
                <li>Social Security Payroll Tax (FICA)</li>
              </ul>
              <h4 className="font-semibold mt-4">Major Structural Changes:</h4>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1 mt-2">
                <li><strong>End of Gold Standard (1933-34):</strong> Unleashed federal financing power; government can now finance operations without gold constraints.</li>
                <li><strong>Social Security Act (1935):</strong> Created a permanent, mandatory new tax stream (FICA) for a new social entitlement.</li>
                <li><strong>Court Rulings (1936-37):</strong> The Supreme Court affirmed the federal power to tax for the "general welfare."</li>
              </ul>
            </div>

            {/* 1940-1949 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
              <h3 className="text-2xl font-bold text-blue-700">1940-1949: The Mass Tax & Global Power</h3>
              <h4 className="font-semibold mt-4">New Taxes/Mechanisms on Citizens:</h4>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1 mt-2">
                <li>Paycheck Withholding (The *method* of collection)</li>
                <li>The "Mass Tax" (Income tax expanded to 75% of workers)</li>
              </ul>
              <h4 className="font-semibold mt-4">Major Structural Changes:</h4>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1 mt-2">
                <li><strong>Current Tax Payment Act (1943):</strong> Institutionalized federal power via automatic payroll withholding.</li>
                <li><strong>Bretton Woods Act (1945):</strong> Made the U.S. Dollar the world's reserve currency, providing unparalleled long-term borrowing ability.</li>
                <li><strong>Employment Act (1946):</strong> Committed the federal government to using fiscal power to manage the macro-economy.</li>
              </ul>
            </div>

            {/* 1950-1959 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-gray-900">
              <h3 className="text-2xl font-bold text-blue-700">1950-1959: The Cold War Tax State</h3>
              <h4 className="font-semibold mt-4">New Taxes on Citizens:</h4>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1 mt-2">
                <li>FICA (Disability Insurance) - FICA expanded</li>
                <li>Federal Gas Tax (New earmarked excise tax)</li>
              </ul>
              <h4 className="font-semibold mt-4">Major Structural Changes:</h4>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1 mt-2">
                <li><strong>Internal Revenue Code of 1954:</strong> Codified all federal tax law into the permanent, efficient structure used today.</li>
                <li><strong>Highway Revenue Act (1956):</strong> Created a new "trust fund" model (Gas Tax → Highway Trust Fund).</li>
              </ul>
            </div>

            {/* 1960-1969 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-red-500">
              <h3 className="text-2xl font-bold text-blue-700">1960-1969: The Great Society</h3>
              <h4 className="font-semibold mt-4">New Taxes on Citizens:</h4>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1 mt-2">
                <li>FICA (Medicare) - FICA expanded *again*</li>
                <li>Income Tax Surcharge (Temporary war tax)</li>
                <li>Alternative Minimum Tax (AMT) (Parallel tax system)</li>
              </ul>
              <h4 className="font-semibold mt-4">Major Structural Changes:</h4>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1 mt-2">
                <li><strong>Social Security Amendments (1965):</strong> Created Medicare & Medicaid, locking in massive, permanent spending obligations.</li>
                <li><strong>Tax Reform Act (1969):</strong> Created the AMT to expand the taxable base.</li>
              </ul>
            </div>

            {/* 1970-1979 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-yellow-400">
              <h3 className="text-2xl font-bold text-blue-700">1970-1979: Fiat Currency & Stagflation</h3>
              <h4 className="font-semibold mt-4">New Taxes on Citizens:</h4>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1 mt-2">
                <li>Earned Income Tax Credit (EITC) ("Negative Tax")</li>
                <li>"Bracket Creep" (An "invisible tax" from inflation)</li>
              </ul>
              <h4 className="font-semibold mt-4">Major Structural Changes:</h4>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1 mt-2">
                <li><strong>End of Gold Standard (1971):</strong> The single most important fiscal event. The U.S. becomes a pure fiat currency, with a *structurally unlimited* ability to borrow.</li>
                <li><strong>Budget Act (1974):</strong> Centralized congressional power by creating the CBO and "reconciliation."</li>
              </ul>
            </div>

            {/* 1980-1989 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500">
              <h3 className="text-2xl font-bold text-blue-700">1980-1989: The Tax Revolution</h3>
              <h4 className="font-semibold mt-4">New Taxes on Citizens:</h4>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1 mt-2">
                <li>Tax on Social Security Benefits</li>
                <li>Crude Oil Windfall Profit Tax (Temporary)</li>
                <li>"Indexing" (Eliminated "Bracket Creep" tax)</li>
              </ul>
              <h4 className="font-semibold mt-4">Major Structural Changes:</h4>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1 mt-2">
                <li><strong>ERTA (1981) & Tax Reform Act (1986):</strong> A philosophical shift. Slashed rates (top rate to 28%) but *broadened the tax base* by eliminating deductions.</li>
                <li><strong>SS Amendments (1983):</strong> Rescued Social Security with FICA hikes and *taxing benefits*, creating a massive revenue-generating surplus.</li>
              </ul>
            </div>

            {/* 1990-1999 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
              <h3 className="text-2xl font-bold text-blue-700">1990-1999: Deficit Control & Credits</h3>
              <h4 className="font-semibold mt-4">New Taxes on Citizens:</h4>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1 mt-2">
                <li>Medicare Cap Removed (FICA applies to all wages)</li>
                <li>Child Tax Credit ("Negative Tax")</li>
                <li>Education Credits ("Negative Tax")</li>
              </ul>
              <h4 className="font-semibold mt-4">Major Structural Changes:</h4>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1 mt-2">
                <li><strong>OBRA 1990 & 1993:</strong> Major tax increases (top rate to 39.6%) that led to a temporary budget surplus.</li>
                <li><strong>Taxpayer Relief Act (1997):</strong> Accelerated the use of the tax code for social policy via credits.</li>
              </ul>
            </div>

            {/* 2000-2009 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-gray-900">
              <h3 className="text-2xl font-bold text-blue-700">2000-2009: Tax Cuts, War, & Crisis</h3>
              <h4 className="font-semibold mt-4">New Taxes on Citizens:</h4>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1 mt-2">
                <li>Lower Capital Gains/Dividends Rates (New 15% rate)</li>
                <li>Medicare Part D (New entitlement funded by *deficits*, not a new tax)</li>
              </ul>
              <h4 className="font-semibold mt-4">Major Structural Changes:</h4>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1 mt-2">
                <li><strong>EGTRRA (2001) & JGTRRA (2003):</strong> Major tax cuts that ended the surplus and returned the U.S. to permanent deficit spending.</li>
                <li><strong>EESA (TARP) (2008):</strong> The 2008 crisis confirmed the "New Intent": The government will use *unlimited borrowing* to prevent systemic collapse.</li>
              </ul>
            </div>

            {/* 2010-2019 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-red-500">
              <h3 className="text-2xl font-bold text-blue-700">2010-2019: The "New Normal"</h3>
              <h4 className="font-semibold mt-4">New Taxes on Citizens:</h4>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1 mt-2">
                <li>Net Investment Income Tax (NIIT) (ACA Surtax)</li>
                <li>Additional Medicare Tax (ACA Surtax)</li>
                <li>Individual Mandate Penalty (ACA Tax)</li>
                <li>SALT Deduction Cap (Tax increase on high-tax states)</li>
              </ul>
              <h4 className="font-semibold mt-4">Major Structural Changes:</h4>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1 mt-2">
                <li><strong>Affordable Care Act (ACA) (2010):</strong> Fused federal power with healthcare, creating new, permanent tax streams for a new social program.</li>
                <li><strong>Tax Cuts and Jobs Act (TCJA) (2017):</strong> Slashed corporate taxes and capped SALT, confirming deficits are a permanent policy tool.</li>
              </ul>
            </div>

            {/* 2020-Present */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-yellow-400">
              <h3 className="text-2xl font-bold text-blue-700">2020-Present: The Stimulus Era</h3>
              <h4 className="font-semibold mt-4">New Taxes on Citizens:</h4>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1 mt-2">
                <li>Endowment Tax (On large universities)</li>
                <li>Remittance Tax (On international money transfers)</li>
              </ul>
              <h4 className="font-semibold mt-4">Major Structural Changes:</h4>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1 mt-2">
                <li><strong>CARES Act (2020) & ARPA (2021):</strong> Deployed *trillions* in borrowed money for direct stimulus, fully realizing the "Post-2008 Intent."</li>
                <li><strong>IRA (2022) & OBBBA (2025):</strong> Confirmed the new, permanent model: simultaneous tax cuts and new spending, all financed by structural deficits.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Chart Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Visualizing the Footprint: Growth of Federal Tax Types</h2>
          <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto text-center">This chart shows the *cumulative number* of distinct, major tax types and mechanisms added to the federal toolkit over time. It demonstrates how the "citizen tax footprint" has expanded from two simple taxes in 1900 to a complex web of over 25 distinct mechanisms today.</p>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="relative w-full max-w-4xl mx-auto h-96">
              <canvas id="taxFootprintChart"></canvas>
            </div>
          </div>
        </section>

        {/* Two Eras Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">The Great Divide: The Two Eras of Federal Finance</h2>
          <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto text-center">The most significant structural change occurred in 1971, when the U.S. abandoned the gold standard. This fundamentally altered the government's ability to finance its operations, creating two distinct eras.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 border-t-8 border-yellow-400">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">The "Old Model" (Pre-1971)</h3>
              <p className="text-gray-700 mb-6">Funding was constrained by a link to gold. New spending (like Social Security and Medicare) *required* new, dedicated taxes (like FICA) to be politically and economically viable.</p>
              <ul className="space-y-2">
                <li className="flex items-center"><span className="text-2xl mr-3">💰</span><div><strong>Funding Source:</strong> Taxes (Tariffs, Income, FICA)</div></li>
                <li className="flex items-center"><span className="text-2xl mr-3">🔗</span><div><strong>Key Constraint:</strong> Gold Standard (USD convertible to gold)</div></li>
                <li className="flex items-center"><span className="text-2xl mr-3">⚖️</span><div><strong>Fiscal Policy:</strong> Deficits were temporary (mostly for wars) and seen as something to be "paid back."</div></li>
                <li className="flex items-center"><span className="text-2xl mr-3">🏛️</span><div><strong>New Entitlements:</strong> Required new, dedicated taxes (e.g., FICA for Social Security & Medicare).</div></li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-t-8 border-red-500">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">The "New Model" (Post-1971)</h3>
              <p className="text-gray-700 mb-6">Funding is unconstrained. The U.S. operates on a pure "fiat currency," giving the federal government a structurally unlimited ability to borrow and finance its operations through deficits.</p>
              <ul className="space-y-2">
                <li className="flex items-center"><span className="text-2xl mr-3">💸</span><div><strong>Funding Source:</strong> Taxes + Unlimited Deficit Spending</div></li>
                <li className="flex items-center"><span className="text-2xl mr-3">🚫</span><div><strong>Key Constraint:</strong> None (Fiat Currency)</div></li>
                <li className="flex items-center"><span className="text-2xl mr-3">📈</span><div><strong>Fiscal Policy:</strong> Deficits are a permanent, structural tool for managing the economy, funding wars, cutting taxes, and responding to crises.</div></li>
                <li className="flex items-center"><span className="text-2xl mr-3">🧾</span><div><strong>New Entitlements:</strong> Can be created *without* new taxes (e.g., Medicare Part D) and funded by general revenue and debt.</div></li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
