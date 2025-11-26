'use client';

import { useEffect } from 'react';

export default function VotingPage() {
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

    const ctx = document.getElementById('fedRepChart') as HTMLCanvasElement;
    if (!ctx) return;

    // @ts-ignore
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: processLabels(['U.S. House', 'U.S. Senate']),
        datasets: [{
          label: 'Total Seats in Chamber',
          data: [435, 100],
          backgroundColor: ['#118AB2', '#06D6A0'],
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
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
            ticks: {
              color: '#073B4C'
            }
          },
          x: {
            ticks: {
              color: '#073B4C'
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
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">The Functional Effect of a Citizen's Vote</h1>
          <p className="text-xl text-gray-600">What a citizen is *functionally doing* when they cast a vote.</p>
        </header>

        {/* Section I */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">I. The General Citizen: How Your Vote Functions</h2>
          <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto text-center">When a citizen casts a vote, they are delegating their power to a representative. This act has two functions: a <strong>Direct Function</strong> (choosing the person) and an <strong>Indirect Function</strong> (granting that person power over policy, taxes, and appointments).</p>
          
          <div className="flex flex-col items-center mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md w-full md:w-3/4 lg:w-1/2 text-center">
              <h3 className="text-2xl font-semibold">👤 THE CITIZEN</h3>
              <p className="text-sm text-gray-600 mt-2">Holds initial political power and casts a vote to delegate it.</p>
            </div>
            <div className="text-4xl font-bold text-blue-600 my-2">▼</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* A. Local */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-center mb-4">A. Direct Local & County Control</h3>
              <p className="text-gray-600 mb-4"><span className="font-bold">WHEN YOU VOTE FOR:</span> Mayor, City Council, County Commission, Sheriff, or District Attorney</p>
              <div className="border-t pt-4">
                <h4 className="font-semibold text-blue-700">▶ DIRECT Function:</h4>
                <p className="text-gray-600 mb-2">You choose the specific *person* who will hold that local office.</p>
                <h4 className="font-semibold text-red-600">▶ INDIRECT Function:</h4>
                <p className="text-gray-600">You delegate your power for them to set local policies, create local budgets, establish property tax rates, and appoint local officials (like the police chief).</p>
              </div>
            </div>

            {/* B. State */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-center mb-4">B. Direct State Control</h3>
              <p className="text-gray-600 mb-4"><span className="font-bold">WHEN YOU VOTE FOR:</span> Governor or State Legislature</p>
              <div className="border-t pt-4">
                <h4 className="font-semibold text-blue-700">▶ DIRECT Function:</h4>
                <p className="text-gray-600 mb-2">You choose the state's Chief Executive or your district's legislator.</p>
                <h4 className="font-semibold text-red-600">▶ INDIRECT Function:</h4>
                <p className="text-gray-600">You delegate your power for them to write all state laws, pass the state budget, set state taxes (income, sales), and appoint state agency heads.</p>
              </div>
            </div>

            {/* C. Federal Legislative */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md md:col-span-2">
              <h3 className="text-xl font-bold text-center mb-4">C. Direct Federal (Legislative) Control</h3>
              <p className="text-gray-600 mb-4"><span className="font-bold">WHEN YOU VOTE FOR:</span> U.S. House of Representatives or U.S. Senate</p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-blue-700">▶ DIRECT Function:</h4>
                  <p className="text-gray-600 mb-2">You choose <strong>one of 435</strong> House members or <strong>two of 100</strong> Senators to represent you.</p>
                  <h4 className="font-semibold text-red-600">▶ INDIRECT Function:</h4>
                  <p className="text-gray-600">You delegate your power for them to vote on all federal laws, the federal budget, and all federal tax policies. Your vote for Senator *also* delegates your power to <strong>confirm or deny</strong> all presidential appointments (Judges & Cabinet).</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 flex flex-col justify-center">
                  <h4 className="text-sm font-bold text-gray-700 text-center mb-2">Your Vote Selects Representatives in Chambers of This Size:</h4>
                  <div className="relative w-full h-56">
                    <canvas id="fedRepChart"></canvas>
                  </div>
                  <p className="text-xs text-gray-500 text-center mt-2 italic">The chart shows total seats. Your vote picks just 1 member in the House and 2 in the Senate.</p>
                </div>
              </div>
            </div>

            {/* D. Presidential */}
            <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 shadow-md md:col-span-2">
              <h3 className="text-xl font-bold text-center mb-4">D. Indirect Federal (Executive) Control - The Special Case</h3>
              <p className="text-gray-600 mb-4"><span className="font-bold">WHEN YOU VOTE FOR:</span> President of the United States</p>
              <div className="border-t pt-4">
                <h4 className="font-semibold text-blue-700">▶ DIRECT Function:</h4>
                <p className="text-gray-600 mb-2">You choose a <strong>"Slate of Electors"</strong> for your state, who are pledged to a candidate. You do *not* vote directly for the President.</p>
                <h4 className="font-semibold text-red-600">▶ INDIRECT Function (A Chain Reaction):</h4>
                <div className="flex flex-col space-y-2 mt-4">
                  <div className="bg-white border rounded p-3 text-sm">1. Your vote chooses Electors.</div>
                  <div className="text-2xl text-blue-600 text-center">▼</div>
                  <div className="bg-white border rounded p-3 text-sm">2. The Electors meet and cast the formal votes that elect the President.</div>
                  <div className="text-2xl text-blue-600 text-center">▼</div>
                  <div className="bg-white border rounded p-3 text-sm">3. The President (chosen by Electors) appoints Cabinet Secretaries and Federal Judges.</div>
                  <div className="text-2xl text-blue-600 text-center">▼</div>
                  <div className="bg-white border rounded p-3 text-sm">4. The U.S. Senate (chosen by your *direct* vote) confirms or denies those appointments.</div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Section II - Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">II. How It Works in Practice: Two Examples</h2>
          <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto text-center">The general function is the same for everyone, but the specific offices and districts change depending on where you live.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Example 1: Houston */}
            <div className="bg-white rounded-lg shadow-md p-6 border-t-8 border-red-500">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Example 1 (Metropolitan):<br />A Voter in Houston, Texas</h3>
              <p className="text-gray-700 mb-6">A voter in a large city like Houston delegates power to officials at all four levels of government, from the mayor to federal representatives.</p>
              <ul className="space-y-4">
                <li>
                  <strong className="text-gray-800 block">LOCAL VOTE CHOOSES:</strong>
                  <span className="text-gray-600">Mayor of Houston, Houston City Controller, Houston City Council (District & At-Large)</span>
                </li>
                <li>
                  <strong className="text-gray-800 block">COUNTY VOTE CHOOSES:</strong>
                  <span className="text-gray-600">Harris County Judge, Harris County Commissioners, Sheriff, District Attorney, County Clerk</span>
                </li>
                <li>
                  <strong className="text-gray-800 block">STATE VOTE CHOOSES:</strong>
                  <span className="text-gray-600">Governor of Texas, Lt. Governor, Attorney General, Texas State Senator, Texas State Representative</span>
                </li>
                <li>
                  <strong className="text-gray-800 block">FEDERAL VOTE CHOOSES:</strong>
                  <span className="text-gray-600">U.S. Representative (e.g., TX-18), U.S. Senators (for Texas), and Presidential Electors (for Texas).</span>
                </li>
              </ul>
            </div>

            {/* Example 2: Vermont */}
            <div className="bg-white rounded-lg shadow-md p-6 border-t-8 border-green-500">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Example 2 (Small Town):<br />A Voter in Montpelier, Vermont</h3>
              <p className="text-gray-700 mb-6">A voter in a small town like Montpelier does the exact same *function*, just for different offices. Note that Vermont has only one (At-Large) U.S. Representative for the entire state.</p>
              <ul className="space-y-4">
                <li>
                  <strong className="text-gray-800 block">LOCAL VOTE CHOOSES:</strong>
                  <span className="text-gray-600">Mayor of Montpelier, Montpelier City Council, School Board Director</span>
                </li>
                <li>
                  <strong className="text-gray-800 block">COUNTY VOTE CHOOSES:</strong>
                  <span className="text-gray-600">Washington County Sheriff, State's Attorney, High Bailiff (County gov. is limited in VT)</span>
                </li>
                <li>
                  <strong className="text-gray-800 block">STATE VOTE CHOOSES:</strong>
                  <span className="text-gray-600">Governor of Vermont, Lt. Governor, Attorney General, Vermont State Senator, Vermont State Representative</span>
                </li>
                <li>
                  <strong className="text-gray-800 block">FEDERAL VOTE CHOOSES:</strong>
                  <span className="text-gray-600">U.S. Representative (VT-At Large), U.S. Senators (for Vermont), and Presidential Electors (for Vermont).</span>
                </li>
              </ul>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
