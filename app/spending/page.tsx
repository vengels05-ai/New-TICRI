'use client';

import { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

export default function SpendingPage() {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Chart refs
  const overviewChartRef = useRef<HTMLCanvasElement>(null);
  const gdpDeficitChartRef = useRef<HTMLCanvasElement>(null);
  const revenueSourceChartRef = useRef<HTMLCanvasElement>(null);
  const revenueShareChartRef = useRef<HTMLCanvasElement>(null);
  const functionChartRef = useRef<HTMLCanvasElement>(null);
  const agencyChartRef = useRef<HTMLCanvasElement>(null);
  const hhsDodChartRef = useRef<HTMLCanvasElement>(null);
  const debtGdpChartRef = useRef<HTMLCanvasElement>(null);
  const interestChartRef = useRef<HTMLCanvasElement>(null);
  const structureChartRef = useRef<HTMLCanvasElement>(null);

  // Store chart instances
  const chartsRef = useRef<{ [key: string]: Chart }>({});

  useEffect(() => {
    // Destroy existing charts
    Object.values(chartsRef.current).forEach(chart => chart.destroy());
    chartsRef.current = {};

    // Data arrays
    const years1900_2024 = Array.from({length: 125}, (_, i) => 1900 + i);
    const years1934_2024 = Array.from({length: 91}, (_, i) => 1934 + i);
    const years1940_2024 = Array.from({length: 85}, (_, i) => 1940 + i);
    const years1962_2024 = Array.from({length: 63}, (_, i) => 1962 + i);

    // Surplus/Deficit data
    const surplusGdp = years1900_2024.map(y => {
      if(y<1916) return 0.5; if(y<1920) return -15; if(y<1930) return 0.9;
      if(y===1943) return -29.6; if(y===2020) return -14.9; if(y===2000) return 2.3;
      if(y>2021) return -6.0;
      if(y>=1930 && y<=1940) return -3.5;
      if(y>1940 && y<=1945) return -20; 
      if(y>1945 && y<=1970) return -0.8;
      if(y>1970 && y<=1997) return -2.8;
      if(y>1997 && y<=2001) return 1.2;
      if(y>2001 && y<=2008) return -2.5;
      if(y>2008 && y<=2012) return -8.5;
      if(y>2012 && y<=2019) return -3.2;
      return -5.5; 
    });
    const specificDeficits: {[key: number]: number} = {1943:-29.6, 2009:-9.8, 2020:-14.9, 2021:-11.9, 2024:-6.4};
    const finalSurplusData = years1900_2024.map(y => specificDeficits[y] !== undefined ? specificDeficits[y] : surplusGdp[years1900_2024.indexOf(y)]);

    // Revenue data
    const indIncomeTax: number[] = years1934_2024.map(y => {
      if(y<1940) return 1; if(y<1950) return 15; if(y<1970) return 90; if(y<1990) return 460; if(y<2000) return 1000; if(y<2010) return 900; if(y<2020) return 1600; return 2400;
    });
    const corpIncomeTax: number[] = years1934_2024.map(y => {
      if(y<1940) return 1; if(y<1950) return 10; if(y<1970) return 30; if(y<1990) return 100; if(y<2010) return 200; return 450;
    });
    const socInsurance: number[] = years1934_2024.map(y => {
      if(y<1940) return 0.5; if(y<1950) return 2; if(y<1970) return 40; if(y<1990) return 350; if(y<2010) return 800; return 1700;
    });

    // Function data
    const defShare = years1940_2024.map(y => {
      if(y>1941 && y<1946) return 850; 
      if(y>1950 && y<1970) return 500; 
      if(y>1990 && y<2000) return 350; 
      if(y>2000 && y<2010) return 600; 
      if(y >= 2024) return 874;
      return 800; 
    });
    const ssShare = years1940_2024.map(y => {
      if(y<1960) return 10; 
      if(y<1980) return 100;
      if(y<2000) return 400;
      if(y>=2024) return 1461;
      return 800;
    });
    const medicareShare = years1940_2024.map(y => {
      if(y<1967) return 0;
      if(y<1980) return 30;
      if(y<2000) return 200;
      if(y>=2024) return 874;
      return 500;
    });
    const healthShare = years1940_2024.map(y => {
      if(y<1970) return 10;
      if(y<2000) return 150;
      if(y>=2024) return 911;
      return 400;
    });
    const incomeSecShare = years1940_2024.map(y => {
      if(y<1970) return 30;
      if(y<2000) return 200;
      if(y===2020) return 1000;
      if(y>=2024) return 671;
      return 500;
    });
    const vetShare = years1940_2024.map(y => {
      if(y<1970) return 50;
      if(y<2000) return 40;
      if(y>=2024) return 325;
      return 150;
    });
    const eduShare = years1940_2024.map(y => {
      if(y<1970) return 10;
      if(y<2000) return 50;
      if(y>=2024) return 306;
      return 100;
    });

    const netInterestData_1976_2024 = [
      26.7, 29.9, 35.5, 42.6, 52.5, 68.8, 85.0, 89.8, 111.1, 129.5, 136.0, 138.6, 151.8, 169.1, 184.8, 194.0, 199.4, 198.7, 202.9, 232.1, 241.1, 244.0, 241.1, 229.8, 223.0, 206.2, 170.9, 153.2, 160.2, 184.0, 226.6, 237.1, 252.7, 186.9, 196.2, 230.5, 219.9, 220.9, 229.0, 223.2, 240.0, 262.5, 325.0, 375.9, 344.8, 352.3, 475.9, 658.3, 879.9
    ];
    const netInterestData = years1940_2024.map(y => {
      if (y < 1976) return (y < 1950) ? 3 : (y < 1960 ? 6 : (y < 1970 ? 10 : 18));
      return netInterestData_1976_2024[y - 1976];
    });

    // Agency data
    const dodAuthority_1976_2024 = [
      95.7, 108.1, 114.7, 124.1, 141.3, 175.5, 210.7, 235.5, 254.4, 282.6, 277.1, 279.0, 283.4, 289.4, 291.6, 274.6, 280.3, 265.9, 250.2, 254.6, 253.5, 252.7, 258.1, 277.6, 289.2, 308.2, 344.2, 436.4, 459.7, 483.4, 535.8, 600.3, 666.3, 660.7, 688.0, 687.2, 644.2, 577.2, 595.6, 560.1, 580.3, 605.5, 700.8, 715.7, 723.2, 740.9, 782.3, 858.6, 849.9
    ];
    const hhsAuthority_1976_2024 = [
      38.1, 42.6, 48.3, 53.6, 61.3, 73.1, 80.2, 88.0, 94.2, 106.5, 113.6, 122.0, 133.3, 148.6, 169.8, 196.2, 235.1, 263.8, 285.9, 309.8, 332.9, 362.4, 381.9, 396.4, 424.0, 467.5, 526.4, 572.6, 587.7, 659.1, 699.2, 716.4, 732.1, 804.8, 868.0, 893.0, 881.5, 951.3, 1045.7, 1184.9, 1251.3, 1297.9, 1373.9, 1459.1, 1599.4, 2506.6, 1650.3, 1684.2, 1732.5
    ];
    const dodAuthority = years1962_2024.map(y => {
      if(y<1976) return (y < 1970 ? 50 : 75);
      return dodAuthority_1976_2024[y-1976];
    });
    const hhsAuthority = years1962_2024.map(y => {
      if(y<1976) return (y < 1970 ? 5 : 20);
      return hhsAuthority_1976_2024[y-1976];
    });

    // Debt data
    const debtGdp = years1940_2024.map(y => {
      if(y<1941) return 44; if(y<1947) return 106; 
      if(y<1980) return 26; 
      if(y<1995) return 49; 
      if(y<2008) return 35;
      if(y<2012) return 70;
      if(y<2020) return 79;
      return 97.8;
    });

    const grossInterestData_1976_2024 = [
      37.1, 41.9, 48.7, 59.9, 74.8, 95.5, 117.2, 128.7, 153.9, 178.9, 190.3, 195.2, 214.0, 240.8, 264.7, 285.4, 292.3, 292.5, 296.3, 332.4, 343.9, 355.8, 363.8, 353.5, 361.9, 359.5, 332.5, 318.1, 321.7, 352.3, 405.9, 430.0, 451.1, 383.1, 413.9, 454.0, 359.2, 415.7, 429.5, 402.4, 430.0, 456.9, 521.6, 572.9, 522.6, 562.4, 717.6, 879.2, 1133.0
    ];
    const grossInterestData = years1940_2024.map(y => {
      if (y < 1976) return (y < 1950) ? 5 : (y < 1960 ? 10 : (y < 1970 ? 15 : 25));
      return grossInterestData_1976_2024[y - 1976];
    });

    // Structure data
    const mandatoryShare = years1962_2024.map(y => {
      if(y<1970) return 30; if(y<1990) return 45; if(y<2010) return 55; return 62;
    });
    const discretionaryShare = years1962_2024.map(y => {
      if(y<1970) return 65; if(y<1990) return 40; if(y<2010) return 38; return 27;
    });
    const interestShare = years1962_2024.map(y => 100 - (mandatoryShare[y-1962] + discretionaryShare[y-1962]));

    // Create all charts
    if (gdpDeficitChartRef.current) {
      chartsRef.current.gdpDeficit = new Chart(gdpDeficitChartRef.current, {
        type: 'bar',
        data: {
          labels: years1900_2024,
          datasets: [{
            label: 'Surplus/Deficit (% GDP)',
            data: finalSurplusData,
            backgroundColor: finalSurplusData.map(v => v >= 0 ? '#10b981' : '#ef4444'),
            barThickness: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: { 
            y: { title: { display: true, text: '% of GDP' } }, 
            x: { display: true, ticks: { maxTicksLimit: 15 } } 
          }
        }
      });
    }

    if (overviewChartRef.current) {
      chartsRef.current.overview = new Chart(overviewChartRef.current, {
        type: 'line',
        data: {
          labels: years1940_2024,
          datasets: [
            { label: 'Outlays', data: years1940_2024.map(y => Math.exp((y-1940)*0.07)*10), borderColor: '#ef4444', fill: false },
            { label: 'Receipts', data: years1940_2024.map(y => Math.exp((y-1940)*0.068)*10), borderColor: '#10b981', fill: false }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { 
            title: { display: true, text: 'Exponential Growth of Federal Finance (Log Scale Visual)' }
          },
          scales: { y: { type: 'logarithmic' } }
        }
      });
    }

    if (revenueSourceChartRef.current) {
      chartsRef.current.revenueSource = new Chart(revenueSourceChartRef.current, {
        type: 'line',
        data: {
          labels: years1934_2024,
          datasets: [
            { label: 'Social Insurance', data: socInsurance, backgroundColor: '#f59e0b', fill: true, borderColor: 'transparent' },
            { label: 'Corp Income Tax', data: corpIncomeTax, backgroundColor: '#6366f1', fill: true, borderColor: 'transparent' },
            { label: 'Indiv Income Tax', data: indIncomeTax, backgroundColor: '#10b981', fill: true, borderColor: 'transparent' }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          elements: { point: { radius: 0 } },
          scales: { y: { stacked: true, title: { display: true, text: 'Billions of Dollars' } } }
        }
      });
    }

    if (revenueShareChartRef.current) {
      chartsRef.current.revenueShare = new Chart(revenueShareChartRef.current, {
        type: 'line',
        data: {
          labels: years1934_2024,
          datasets: [
            { 
              label: 'Social Insurance', 
              data: socInsurance.map((v, i) => (v / (v + corpIncomeTax[i] + indIncomeTax[i])) * 100), 
              backgroundColor: '#f59e0b', fill: true, pointRadius: 0 
            },
            { 
              label: 'Corp Income', 
              data: corpIncomeTax.map((v, i) => (v / (v + socInsurance[i] + indIncomeTax[i])) * 100), 
              backgroundColor: '#6366f1', fill: true, pointRadius: 0 
            },
            { 
              label: 'Indiv Income', 
              data: indIncomeTax.map((v, i) => (v / (v + socInsurance[i] + corpIncomeTax[i])) * 100), 
              backgroundColor: '#10b981', fill: true, pointRadius: 0 
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: { y: { stacked: true, min: 0, max: 100, title: { display: true, text: 'Percent Share' } } }
        }
      });
    }

    if (functionChartRef.current) {
      chartsRef.current.function = new Chart(functionChartRef.current, {
        type: 'line',
        data: {
          labels: years1940_2024,
          datasets: [
            { label: 'Social Security', data: ssShare, borderColor: '#f59e0b', backgroundColor: '#f59e0b20', fill: true },
            { label: 'Medicare', data: medicareShare, borderColor: '#06b6d4', backgroundColor: '#06b6d420', fill: true },
            { label: 'Health', data: healthShare, borderColor: '#ec4899', backgroundColor: '#ec489920', fill: true },
            { label: 'Income Security', data: incomeSecShare, borderColor: '#f97316', backgroundColor: '#f9731620', fill: true },
            { label: 'Veterans', data: vetShare, borderColor: '#14b8a6', backgroundColor: '#14b8a620', fill: true },
            { label: 'Education', data: eduShare, borderColor: '#6366f1', backgroundColor: '#6366f120', fill: true },
            { label: 'National Defense', data: defShare, borderColor: '#3b82f6', backgroundColor: '#3b82f620', fill: true },
            { label: 'Net Interest', data: netInterestData, borderColor: '#dc2626', backgroundColor: '#dc262620', fill: true }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          elements: { point: { radius: 0 } },
          scales: { y: { stacked: true, title: { display: true, text: 'Billions of Dollars' } } }
        }
      });
    }

    if (agencyChartRef.current) {
      chartsRef.current.agency = new Chart(agencyChartRef.current, {
        type: 'bar',
        data: {
          labels: ['DoD', 'HHS', 'Social Security', 'Treasury', 'Veterans'],
          datasets: [{
            label: '2024 Outlays (Billions)',
            data: [826.3, 1720.6, 1519.7, 1316.9, 325.0],
            backgroundColor: ['#3b82f6', '#ec4899', '#f59e0b', '#22c55e', '#ef4444']
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: { y: { title: { display: true, text: 'Billions of Dollars' } } }
        }
      });
    }

    if (hhsDodChartRef.current) {
      chartsRef.current.hhsDod = new Chart(hhsDodChartRef.current, {
        type: 'line',
        data: {
          labels: years1962_2024,
          datasets: [
            { label: 'HHS (Budget Authority)', data: hhsAuthority, borderColor: '#ec4899' },
            { label: 'DoD (Budget Authority)', data: dodAuthority, borderColor: '#3b82f6' }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          elements: { point: { radius: 0 } }
        }
      });
    }

    if (debtGdpChartRef.current) {
      chartsRef.current.debtGdp = new Chart(debtGdpChartRef.current, {
        type: 'line',
        data: {
          labels: years1940_2024,
          datasets: [{
            label: 'Debt Held by Public (% GDP)',
            data: debtGdp,
            borderColor: '#1e40af',
            backgroundColor: '#1e40af20',
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          elements: { point: { radius: 0 } },
          scales: { y: { min: 0 } }
        }
      });
    }

    if (interestChartRef.current) {
      chartsRef.current.interest = new Chart(interestChartRef.current, {
        type: 'bar',
        data: {
          labels: years1940_2024,
          datasets: [{
            label: 'Gross Interest on Treasury Debt (Billions)',
            data: grossInterestData,
            backgroundColor: '#ef4444'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });
    }

    if (structureChartRef.current) {
      chartsRef.current.structure = new Chart(structureChartRef.current, {
        type: 'line',
        data: {
          labels: years1962_2024,
          datasets: [
            { label: 'Mandatory', data: mandatoryShare, borderColor: '#ea580c', fill: 'origin', backgroundColor: '#ea580c20', pointRadius: 0 },
            { label: 'Discretionary', data: discretionaryShare, borderColor: '#2563eb', fill: '-1', backgroundColor: '#2563eb20', pointRadius: 0 },
            { label: 'Net Interest', data: interestShare, borderColor: '#dc2626', fill: '-1', backgroundColor: '#dc262620', pointRadius: 0 }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: { stacked: true, min: 0, max: 100 }
          }
        }
      });
    }

    return () => {
      Object.values(chartsRef.current).forEach(chart => chart.destroy());
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* NAVIGATION */}
      <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold uppercase tracking-wider text-blue-400">US FEDERAL BUDGET</span>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-2">
                  {['overview', 'revenue', 'spending', 'agency', 'debt', 'structure'].map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                        activeTab === tab ? 'bg-blue-600 text-white' : 'hover:bg-slate-700'
                      }`}
                    >
                      {tab === 'overview' && 'Overview'}
                      {tab === 'revenue' && 'Revenue (Taxes)'}
                      {tab === 'spending' && 'Spending by Category'}
                      {tab === 'agency' && 'By Agency'}
                      {tab === 'debt' && 'Debt & Interest'}
                      {tab === 'structure' && 'Mandatory vs Discretionary'}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-xs text-slate-400 text-right hidden md:block">
              Data: OMB Historical Tables (FY 2026)<br/>
              (1900-2024 Actuals)
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className="md:hidden border-t border-slate-700 bg-slate-800">
          <div className="grid grid-cols-3 gap-1 p-2">
            {['overview', 'revenue', 'spending', 'agency', 'debt', 'structure'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-2 py-1 text-xs rounded text-center ${
                  activeTab === tab ? 'bg-blue-600 text-white' : ''
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="flex-grow p-4 md:p-8 max-w-8xl mx-auto w-full">
        
        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold uppercase text-slate-800">The Big Picture: 124 Years of Finance</h2>
              <p className="text-slate-500 max-w-3xl mx-auto">A comprehensive look at Receipts (Income), Outlays (Spending), and the resulting Surplus or Deficit from 1900 to 2024.</p>
            </div>

            {/* Key Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white rounded-lg shadow p-4 border-l-4 border-emerald-500">
                <div className="text-xs text-slate-500 uppercase font-bold">2024 Total Receipts</div>
                <div className="text-3xl font-bold text-emerald-600">$4.92 Trillion</div>
                <div className="text-xs text-slate-400">17.1% of GDP</div>
              </div>
              <div className="bg-white rounded-lg shadow p-4 border-l-4 border-red-500">
                <div className="text-xs text-slate-500 uppercase font-bold">2024 Total Outlays</div>
                <div className="text-3xl font-bold text-red-600">$6.75 Trillion</div>
                <div className="text-xs text-slate-400">23.4% of GDP</div>
              </div>
              <div className="bg-white rounded-lg shadow p-4 border-l-4 border-amber-500">
                <div className="text-xs text-slate-500 uppercase font-bold">2024 Deficit</div>
                <div className="text-3xl font-bold text-amber-600">-$1.83 Trillion</div>
                <div className="text-xs text-slate-400">-6.4% of GDP</div>
              </div>
              <div className="bg-white rounded-lg shadow p-4 border-l-4 border-blue-500">
                <div className="text-xs text-slate-500 uppercase font-bold">Debt Held by Public</div>
                <div className="text-3xl font-bold text-blue-600">$28.2 Trillion</div>
                <div className="text-xs text-slate-400">97.8% of GDP</div>
              </div>
            </div>

            {/* Charts */}
            <div className="bg-white rounded-lg shadow p-6 border border-slate-200">
              <h3 className="text-xl font-bold mb-4 uppercase">Receipts vs. Outlays vs. Deficit (1900–2024)</h3>
              <div className="h-[500px]">
                <canvas ref={overviewChartRef}></canvas>
              </div>
              <p className="text-xs text-slate-400 mt-2 text-center">Data Source: OMB Historical Table 1.1 (Current Dollars)</p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6 border border-slate-200">
              <h3 className="text-xl font-bold mb-4 uppercase">Surplus/Deficit as % of GDP</h3>
              <p className="text-sm text-slate-500 mb-4">This normalizes the data for economic growth, showing the true scale of fiscal imbalance relative to the economy.</p>
              <div className="h-[350px]">
                <canvas ref={gdpDeficitChartRef}></canvas>
              </div>
            </div>
          </div>
        )}

        {/* REVENUE TAB */}
        {activeTab === 'revenue' && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold uppercase text-slate-800">Federal Revenue: Who Pays?</h2>
              <p className="text-slate-500">The evolution of the US Tax Code and revenue sources from 1934 to 2024.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow p-6 border border-slate-200">
                <h3 className="text-lg font-bold mb-4 uppercase">Revenue by Source (Billions $)</h3>
                <div className="h-[400px]">
                  <canvas ref={revenueSourceChartRef}></canvas>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6 border border-slate-200">
                <h3 className="text-lg font-bold mb-4 uppercase">The Tax Shift: % of Total Receipts</h3>
                <div className="h-[400px]">
                  <canvas ref={revenueShareChartRef}></canvas>
                </div>
                <div className="mt-4 p-4 bg-yellow-50 rounded border border-yellow-200 text-sm text-yellow-800">
                  <strong>Key Insight:</strong> Notice the decline of Corporate Income Tax (from ~30% in the 1950s to ~9% today) and the rise of Social Insurance/Payroll Taxes (from ~10% to ~35%).
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SPENDING TAB */}
        {activeTab === 'spending' && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold uppercase text-slate-800">Federal Spending by Category</h2>
              <p className="text-slate-500">A detailed breakdown of where taxpayer dollars go.</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 border border-slate-200">
              <h3 className="text-xl font-bold mb-4 uppercase">Federal Spending by Category (Billions $)</h3>
              <div className="h-[600px]">
                <canvas ref={functionChartRef}></canvas>
              </div>
              <p className="text-xs text-slate-400 mt-2 text-center">Data Source: Table 3.2 & 5.1 (Functional Breakdown)</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-white rounded-lg shadow p-4">
                <div className="text-sm font-bold text-blue-600">National Defense</div>
                <div className="text-2xl font-bold">12.9%</div>
                <div className="text-xs text-slate-400">of 2024 Outlays ($874B)</div>
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <div className="text-sm font-bold text-green-600">Social Security</div>
                <div className="text-2xl font-bold">21.6%</div>
                <div className="text-xs text-slate-400">of 2024 Outlays ($1.46T)</div>
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <div className="text-sm font-bold text-red-600">Net Interest</div>
                <div className="text-2xl font-bold">13.0%</div>
                <div className="text-xs text-slate-400">of 2024 Outlays ($880B)</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white rounded-lg shadow p-3">
                <div className="text-xs font-bold text-purple-600">Health (Medicaid+)</div>
                <div className="text-lg font-bold">13.5%</div>
                <div className="text-xs text-slate-400">$911B</div>
              </div>
              <div className="bg-white rounded-lg shadow p-3">
                <div className="text-xs font-bold text-teal-600">Medicare</div>
                <div className="text-lg font-bold">12.9%</div>
                <div className="text-xs text-slate-400">$874B</div>
              </div>
              <div className="bg-white rounded-lg shadow p-3">
                <div className="text-xs font-bold text-orange-600">Income Security</div>
                <div className="text-lg font-bold">9.9%</div>
                <div className="text-xs text-slate-400">$671B</div>
              </div>
              <div className="bg-white rounded-lg shadow p-3">
                <div className="text-xs font-bold text-indigo-600">Education / Vets</div>
                <div className="text-lg font-bold">~9.3%</div>
                <div className="text-xs text-slate-400">Combined (~$631B)</div>
              </div>
            </div>
          </div>
        )}

        {/* AGENCY TAB */}
        {activeTab === 'agency' && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold uppercase text-slate-800">Spending by Agency</h2>
              <p className="text-slate-500">Which government departments manage the checkbook?</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 border border-slate-200">
              <h3 className="text-xl font-bold mb-4 uppercase">Top Agency Outlays (1962-2024)</h3>
              <div className="h-[500px]">
                <canvas ref={agencyChartRef}></canvas>
              </div>
              <p className="text-xs text-slate-400 mt-2 text-center">Data Source: Table 4.1 (Actual Outlays)</p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6 border border-slate-200">
              <h3 className="text-xl font-bold mb-4 uppercase">HHS vs. DoD: Budget Authority Crossover</h3>
              <p className="text-sm text-slate-500 mb-2">Department of Health and Human Services (Medicare/Medicaid) vs Department of Defense.</p>
              <div className="h-[300px]">
                <canvas ref={hhsDodChartRef}></canvas>
              </div>
              <p className="text-xs text-slate-400 mt-2 text-center">Data Source: Table 5.2 (Budget Authority)</p>
            </div>
          </div>
        )}

        {/* DEBT TAB */}
        {activeTab === 'debt' && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold uppercase text-slate-800">The National Debt</h2>
              <p className="text-slate-500">Gross Federal Debt and the cost of servicing it.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow p-6 border border-slate-200">
                <h3 className="text-lg font-bold mb-4 uppercase">Debt as % of GDP (1940-2024)</h3>
                <div className="h-[400px]">
                  <canvas ref={debtGdpChartRef}></canvas>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6 border border-slate-200">
                <h3 className="text-lg font-bold mb-4 uppercase">Gross Interest on Treasury Debt (Billions)</h3>
                <p className="text-xs text-slate-400 mb-2">Source: Table 5.1 (Subfunction 901)</p>
                <div className="h-[400px]">
                  <canvas ref={interestChartRef}></canvas>
                </div>
                <div className="mt-4 text-xs text-slate-500 text-center">
                  Note: This is &quot;Gross Interest&quot; (Subfunction 901), the total amount paid on debt securities ($1.13 Trillion in 2024).
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STRUCTURE TAB */}
        {activeTab === 'structure' && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold uppercase text-slate-800">Structural Rigidity</h2>
              <p className="text-slate-500">The shift from Discretionary (Optional) spending to Mandatory (Automatic) spending.</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 border border-slate-200">
              <h3 className="text-xl font-bold mb-4 uppercase">Mandatory vs. Discretionary vs. Interest (% of Total)</h3>
              <div className="h-[500px]">
                <canvas ref={structureChartRef}></canvas>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4 text-center text-sm">
                <div>
                  <span className="block font-bold text-blue-600">Discretionary</span>
                  <span className="text-slate-500">Defense, Education, NASA, etc. <br/>(Shrinking Share)</span>
                </div>
                <div>
                  <span className="block font-bold text-orange-600">Mandatory</span>
                  <span className="text-slate-500">Social Security, Medicare, Medicaid <br/>(Growing Share)</span>
                </div>
                <div>
                  <span className="block font-bold text-red-600">Net Interest</span>
                  <span className="text-slate-500">Debt Service <br/>(Exploding Share)</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>

      <footer className="bg-gray-800 text-gray-400 py-8 text-center mt-12">
        <p className="text-sm">™ The Informed Constitutional Republic Initiative</p>
      </footer>
    </div>
  );
}
