'use client';

import Link from 'next/link';
import { useEffect } from 'react';

type TaxEra = {
  period: string;
  title: string;
  borderColor: string;
  taxes: string[];
  structural: string[];
};

declare global {
  interface Window {
    Chart?: new (context: HTMLCanvasElement, config: Record<string, unknown>) => { destroy: () => void };
  }
}

const timeline: TaxEra[] = [
  {
    period: '1910-1919',
    title: 'The Great Transformation',
    borderColor: 'border-red-500',
    taxes: ['Individual Income Tax (16th Amendment)', 'Federal Estate Tax'],
    structural: [
      '16th Amendment (1913): Unlocked the ability to tax citizens income directly.',
      'Federal Reserve Act (1913): Created a central bank, expanding power to finance debt.',
      'War Revenue Acts (1917, 1918): Scaled the new income tax, with the top rate rising to 77%, to fund World War I.',
    ],
  },
  {
    period: '1920-1929',
    title: 'Consolidation and Normalcy',
    borderColor: 'border-yellow-400',
    taxes: ['Capital Gains Tax', 'Gift Tax, to backstop the Estate Tax'],
    structural: [
      'Budget and Accounting Act (1921): Centralized federal power by creating the Bureau of the Budget, now OMB.',
      'Revenue Acts of the 1920s: Normalized the income tax as the primary, flexible revenue source while cutting rates.',
    ],
  },
  {
    period: '1930-1939',
    title: 'The New Deal Revolution',
    borderColor: 'border-green-500',
    taxes: ['Social Security Payroll Tax (FICA)'],
    structural: [
      'End of the Gold Standard (1933-1934): Expanded federal financing power by loosening gold constraints.',
      'Social Security Act (1935): Created a permanent, mandatory tax stream for a new social entitlement.',
      'Court Rulings (1936-1937): The Supreme Court affirmed federal power to tax for the general welfare.',
    ],
  },
  {
    period: '1940-1949',
    title: 'The Mass Tax and Global Power',
    borderColor: 'border-blue-600',
    taxes: ['Paycheck Withholding as the method of collection', 'The Mass Tax, with income tax expanded to most workers'],
    structural: [
      'Current Tax Payment Act (1943): Institutionalized federal power through automatic payroll withholding.',
      'Bretton Woods Act (1945): Made the U.S. dollar the world reserve currency, supporting long-term borrowing power.',
      'Employment Act (1946): Committed the federal government to using fiscal power to manage the macroeconomy.',
    ],
  },
  {
    period: '1950-1959',
    title: 'The Cold War Tax State',
    borderColor: 'border-gray-900',
    taxes: ['FICA Disability Insurance expansion', 'Federal Gas Tax as a new earmarked excise tax'],
    structural: [
      'Internal Revenue Code of 1954: Codified federal tax law into the permanent structure still used today.',
      'Highway Revenue Act (1956): Created a trust fund model linking the gas tax to the Highway Trust Fund.',
    ],
  },
  {
    period: '1960-1969',
    title: 'The Great Society',
    borderColor: 'border-red-500',
    taxes: ['FICA Medicare expansion', 'Income Tax Surcharge as a temporary war tax', 'Alternative Minimum Tax as a parallel tax system'],
    structural: [
      'Social Security Amendments (1965): Created Medicare and Medicaid, locking in large permanent spending obligations.',
      'Tax Reform Act (1969): Created the AMT to expand the taxable base.',
    ],
  },
  {
    period: '1970-1979',
    title: 'Fiat Currency and Stagflation',
    borderColor: 'border-yellow-400',
    taxes: ['Earned Income Tax Credit as a negative tax', 'Bracket creep as an invisible tax from inflation'],
    structural: [
      'End of the Gold Standard (1971): The U.S. became a pure fiat currency, changing the borrowing constraint.',
      'Budget Act (1974): Centralized congressional budget power through the CBO and reconciliation process.',
    ],
  },
  {
    period: '1980-1989',
    title: 'The Tax Revolution',
    borderColor: 'border-green-500',
    taxes: ['Tax on Social Security benefits', 'Crude Oil Windfall Profit Tax', 'Indexing, which reduced bracket creep'],
    structural: [
      'ERTA (1981) and Tax Reform Act (1986): Slashed rates while broadening the tax base by eliminating deductions.',
      'Social Security Amendments (1983): Rescued Social Security with FICA hikes and taxation of benefits.',
    ],
  },
  {
    period: '1990-1999',
    title: 'Deficit Control and Credits',
    borderColor: 'border-blue-600',
    taxes: ['Medicare wage cap removed', 'Child Tax Credit', 'Education Credits'],
    structural: [
      'OBRA 1990 and 1993: Major tax increases that helped produce a temporary budget surplus.',
      'Taxpayer Relief Act (1997): Accelerated the use of the tax code for social policy through credits.',
    ],
  },
  {
    period: '2000-2009',
    title: 'Tax Cuts, War, and Crisis',
    borderColor: 'border-gray-900',
    taxes: ['Lower capital gains and dividends rates', 'Medicare Part D, funded by deficits rather than a new dedicated tax'],
    structural: [
      'EGTRRA (2001) and JGTRRA (2003): Major tax cuts that ended the surplus and returned the U.S. to deficit spending.',
      'EESA and TARP (2008): The financial crisis showed federal willingness to use large-scale borrowing to prevent collapse.',
    ],
  },
  {
    period: '2010-2019',
    title: 'The New Normal',
    borderColor: 'border-red-500',
    taxes: ['Net Investment Income Tax', 'Additional Medicare Tax', 'Individual Mandate Penalty', 'SALT Deduction Cap'],
    structural: [
      'Affordable Care Act (2010): Connected federal taxing power with health care financing.',
      'Tax Cuts and Jobs Act (2017): Cut corporate taxes and capped SALT, continuing deficits as a policy tool.',
    ],
  },
  {
    period: '2020-Present',
    title: 'The Stimulus Era',
    borderColor: 'border-yellow-400',
    taxes: ['Endowment Tax on large universities', 'Remittance Tax on international money transfers'],
    structural: [
      'CARES Act (2020) and ARPA (2021): Used trillions in borrowed money for direct stimulus and emergency support.',
      'IRA (2022) and later budget fights: Continued the model of simultaneous tax changes, new spending, and structural deficits.',
    ],
  },
];

const chartLabels = [
  'Pre-1910 Baseline',
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
  '2020-Present',
];

const chartValues = [2, 4, 6, 7, 8, 10, 13, 14, 16, 19, 20, 24, 27];

export default function FiscalPolicyPage() {
  useEffect(() => {
    let chartInstance: { destroy: () => void } | null = null;

    const processLabels = (labels: string[]) =>
      labels.map((label) => {
        if (label.length <= 16) return label;

        const lines: string[] = [];
        let currentLine = '';
        for (const word of label.split(' ')) {
          if (`${currentLine} ${word}`.trim().length > 16) {
            lines.push(currentLine.trim());
            currentLine = word;
          } else {
            currentLine = `${currentLine} ${word}`.trim();
          }
        }
        lines.push(currentLine.trim());
        return lines;
      });

    const initializeChart = () => {
      const canvas = document.getElementById('taxFootprintChart') as HTMLCanvasElement | null;
      if (!canvas || !window.Chart) return;

      chartInstance?.destroy();
      chartInstance = new window.Chart(canvas, {
        type: 'bar',
        data: {
          labels: processLabels(chartLabels),
          datasets: [
            {
              label: 'Cumulative Number of Major Federal Tax Types',
              data: chartValues,
              backgroundColor: [
                '#ADB5BD',
                '#FF6B6B',
                '#FFD166',
                '#06D6A0',
                '#118AB2',
                '#073B4C',
                '#FF6B6B',
                '#FFD166',
                '#06D6A0',
                '#118AB2',
                '#073B4C',
                '#FF6B6B',
                '#FFD166',
              ],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                title: (tooltipItems: { chart: { data: { labels: unknown[] } }; dataIndex: number }[]) => {
                  const label = tooltipItems[0].chart.data.labels[tooltipItems[0].dataIndex];
                  return Array.isArray(label) ? label.join(' ') : label;
                },
              },
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Cumulative Number of Tax Types',
              },
            },
          },
        },
      });
    };

    if (window.Chart) {
      initializeChart();
    } else {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
      script.onload = initializeChart;
      document.body.appendChild(script);

      return () => {
        chartInstance?.destroy();
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }

    return () => {
      chartInstance?.destroy();
    };
  }, []);

  return (
    <main className="bg-gray-50">
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 py-16 text-white">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <Link href="/" className="text-sm font-semibold text-red-200 hover:text-white">
            Back to Home
          </Link>
          <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-red-300">Fiscal</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Fiscal Policy</h1>
          <p className="mt-4 max-w-3xl text-xl text-gray-200">
            How the federal government's taxing, borrowing, and spending power expanded from a limited revenue model into the modern fiscal state.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/taxes" className="rounded bg-white px-4 py-2 text-sm font-bold text-gray-900 transition hover:bg-gray-100">
              Tax Revenue Data
            </Link>
            <Link href="/spending" className="rounded border border-white/40 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/10">
              Spending and Debt Data
            </Link>
            <Link href="/federal-funding" className="rounded border border-white/40 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/10">
              Federal Funding
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-4 py-12 md:px-8">
        <section className="mb-16">
          <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">Baseline Before 1910: A Limited Federal Government</h2>
          <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-gray-700">
            Before 1910, the federal government's ability to raise funds was sharply limited by constitutional structure and political expectation.
            It relied mainly on indirect taxes and did not yet have the modern income tax system or central bank.
          </p>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            <div className="rounded-lg border-l-4 border-yellow-400 bg-white p-6 shadow-md">
              <h3 className="mb-4 text-2xl font-semibold text-gray-900">Citizen Tax Footprint</h3>
              <ul className="list-inside list-disc space-y-2 text-gray-700">
                <li><strong>Tariffs:</strong> Indirect taxes on imports and the primary federal revenue source.</li>
                <li><strong>Excise Taxes:</strong> Taxes on specific goods such as alcohol and tobacco.</li>
              </ul>
            </div>
            <div className="rounded-lg border-l-4 border-gray-400 bg-white p-6 shadow-md">
              <h3 className="mb-4 text-2xl font-semibold text-gray-900">Structural Power</h3>
              <ul className="list-inside list-disc space-y-2 text-gray-700">
                <li><strong className="text-red-600">No</strong> direct individual income tax.</li>
                <li><strong className="text-red-600">No</strong> central bank.</li>
                <li><strong>Limited</strong> federal borrowing capacity by modern standards.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">The Expansion of Federal Funding: A Timeline</h2>
          <div className="space-y-8">
            {timeline.map((era) => (
              <article key={era.period} className={`rounded-lg border-t-4 ${era.borderColor} bg-white p-6 shadow-md`}>
                <h3 className="text-2xl font-bold text-blue-800">{era.period}: {era.title}</h3>
                <h4 className="mt-5 font-semibold text-gray-900">New taxes or tax mechanisms:</h4>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
                  {era.taxes.map((tax) => (
                    <li key={tax}>{tax}</li>
                  ))}
                </ul>
                <h4 className="mt-5 font-semibold text-gray-900">Major structural changes:</h4>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
                  {era.structural.map((change) => (
                    <li key={change}>{change}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">Visualizing the Footprint: Growth of Federal Tax Types</h2>
          <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-gray-700">
            This chart shows the cumulative number of distinct, major tax types and mechanisms added to the federal toolkit over time.
            It illustrates how the citizen tax footprint expanded from a small set of indirect taxes into a much broader system.
          </p>
          <div className="rounded-lg bg-white p-6 shadow-md">
            <div className="relative mx-auto h-96 w-full max-w-4xl">
              <canvas id="taxFootprintChart" />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">The Great Divide: The Two Eras of Federal Finance</h2>
          <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-gray-700">
            The most important structural shift came in 1971, when the U.S. abandoned the gold standard. That decision helped create two very different models of federal finance.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border-t-8 border-yellow-400 bg-white p-6 shadow-md">
              <h3 className="mb-4 text-2xl font-semibold text-gray-900">The Old Model: Before 1971</h3>
              <p className="mb-6 text-gray-700">
                Funding was constrained by a link to gold. New spending programs usually required new dedicated taxes to be politically and economically viable.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li><strong>Funding Source:</strong> Taxes, including tariffs, income taxes, and FICA.</li>
                <li><strong>Key Constraint:</strong> The gold standard and dollar convertibility.</li>
                <li><strong>Fiscal Policy:</strong> Deficits were treated as temporary, often tied to wars or emergencies.</li>
                <li><strong>New Entitlements:</strong> Programs such as Social Security and Medicare were paired with dedicated taxes.</li>
              </ul>
            </div>
            <div className="rounded-lg border-t-8 border-red-500 bg-white p-6 shadow-md">
              <h3 className="mb-4 text-2xl font-semibold text-gray-900">The New Model: After 1971</h3>
              <p className="mb-6 text-gray-700">
                Funding became less constrained by gold convertibility. The federal government increasingly used taxes and deficit spending together as standing policy tools.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li><strong>Funding Source:</strong> Taxes plus large-scale deficit spending.</li>
                <li><strong>Key Constraint:</strong> Political, inflationary, and debt-service pressures rather than gold convertibility.</li>
                <li><strong>Fiscal Policy:</strong> Deficits became a recurring tool for wars, tax cuts, economic rescue, and stimulus.</li>
                <li><strong>New Entitlements:</strong> Programs could be created or expanded without a fully dedicated tax stream.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-lg bg-[#0F2C47] p-6 text-white shadow-md">
          <h2 className="text-2xl font-bold">Continue Exploring Fiscal Power</h2>
          <p className="mt-3 max-w-3xl text-gray-200">
            Pair this timeline with the live economic charts to see how the legal and political changes show up in federal receipts, outlays, deficits, and debt over time.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/taxes" className="rounded bg-white px-4 py-2 text-sm font-bold text-[#0F2C47] transition hover:bg-gray-100">
              Tax Revenue Data
            </Link>
            <Link href="/spending" className="rounded bg-[#C41E3A] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#A01828]">
              Spending and Debt Data
            </Link>
            <Link href="/" className="rounded border border-white/40 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/10">
              Back to Home
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
