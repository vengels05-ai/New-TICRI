'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const API_BASE = 'https://thesource-worker.ticri2025.workers.dev';

type FredObservation = {
  obs_date: string;
  value: number | string | null;
};

type FredSeries = {
  series_id: string;
  title: string;
  frequency?: string;
  units?: string;
  observations: FredObservation[];
};

type NumericObservation = {
  date: string;
  value: number;
};

type ChartPoint = {
  date: string;
  year: number;
  [key: string]: string | number | null | undefined;
};

type SeriesConfig = {
  id: string;
  label: string;
  key: string;
  color: string;
};

export default function EconomicsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-300">FRED Data Dashboard</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Understanding Your Economy</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-200">
            Money, prices, wages, debt, and public finance are connected. These charts use primary economic series from FRED,
            served through TheSource, to show how those relationships change over time.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
        <section className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="text-2xl font-black text-gray-900">GDP, Inflation, and Everyday Purchasing Power</h2>
          <div className="mt-4 grid gap-4 text-sm leading-7 text-gray-700 md:grid-cols-2">
            <p>
              Gross Domestic Product, or GDP, is a broad measure of the goods and services produced by the economy. Real GDP
              adjusts for inflation, which makes it easier to compare output across different eras instead of confusing higher
              prices with higher production.
            </p>
            <p>
              Inflation measures how quickly prices rise. When asset prices, consumer prices, wages, and debt move at different
              speeds, the same economy can feel very different to homeowners, renters, workers, savers, investors, and taxpayers.
            </p>
          </div>
        </section>

        <CantillonEffectChart />
        <PurchasingPowerChart />
        <MoneySupplyInflationChart />
        <DebtProductivityChart />
        <CapitalLaborChart />
        <FinancialRepressionChart />
        <FiscalSqueezeChart />
      </div>
    </main>
  );
}

function CantillonEffectChart() {
  const configs = useMemo<SeriesConfig[]>(
    () => [
      { id: 'WALCL', key: 'fedBalanceSheet', label: 'Fed Balance Sheet', color: '#2563eb' },
      { id: 'SP500', key: 'sp500', label: 'S&P 500', color: '#16a34a' },
      { id: 'CSUSHPINSA', key: 'homePrices', label: 'Home Prices', color: '#f97316' },
      { id: 'CPIAUCSL', key: 'consumerPrices', label: 'Consumer Prices', color: '#dc2626' },
    ],
    [],
  );
  const { series, loading, error } = useFredSeries(configs.map((config) => config.id));
  const data = useMemo(() => buildIndexedSeries(series, configs, '2000-01-01'), [configs, series]);

  return (
    <ChartCard
      title="Central Bank Balance Sheet vs. Asset Prices vs. Consumer Prices"
      description="This chart compares the Federal Reserve balance sheet, stock prices, home prices, and consumer prices after indexing each series to 100 at the start of 2000. It helps show whether newly created money and easier financial conditions appear first in financial assets, real estate, or everyday consumer prices."
      loading={loading}
      error={error}
    >
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 16, right: 18, bottom: 12, left: 12 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} minTickGap={32} tickFormatter={formatYearTick} />
          <YAxis tick={{ fontSize: 12 }} tickFormatter={(value) => formatNumber(value as number)} label={axisLabel('Index, Jan. 2000 = 100')} />
          <Tooltip formatter={(value) => formatNumber(Number(value))} labelFormatter={formatDateLabel} />
          <Legend />
          {configs.map((config) => (
            <Line key={config.key} type="monotone" dataKey={config.key} name={config.label} stroke={config.color} strokeWidth={2.4} dot={false} connectNulls activeDot={{ r: 4 }} />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

function PurchasingPowerChart() {
  const { series, loading, error } = useFredSeries(['MSPUS', 'AHETPI']);
  const data = useMemo(() => buildPurchasingPowerData(series), [series]);

  return (
    <ChartCard
      title="Hours of Work Required to Buy a Median Home"
      description="A home price in dollars does not say much unless it is compared with wages. This chart divides the median home sales price by average hourly earnings, estimating how many hours of work it takes to buy a median-priced home."
      loading={loading}
      error={error}
    >
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 16, right: 18, bottom: 12, left: 12 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} minTickGap={32} tickFormatter={formatYearTick} />
          <YAxis tick={{ fontSize: 12 }} tickFormatter={(value) => compactAxis(value as number)} label={axisLabel('Hours of work')} />
          <Tooltip formatter={(value) => `${formatNumber(Number(value))} hours`} labelFormatter={formatDateLabel} />
          <Line type="monotone" dataKey="hours" name="Hours of work" stroke="#7c3aed" strokeWidth={2.5} dot={false} activeDot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

function MoneySupplyInflationChart() {
  const configs = useMemo<SeriesConfig[]>(
    () => [
      { id: 'M2SL', key: 'm2', label: 'M2 Money Supply YoY', color: '#2563eb' },
      { id: 'CPIAUCSL', key: 'cpi', label: 'CPI YoY', color: '#dc2626' },
    ],
    [],
  );
  const { series, loading, error } = useFredSeries(configs.map((config) => config.id));
  const data = useMemo(() => buildMoneyInflationData(series), [series]);

  return (
    <ChartCard
      title="Does Printing Money Cause Inflation?"
      description="Money supply growth and consumer price inflation do not always move together at the same moment. Comparing year-over-year growth rates helps show periods when money expanded first and consumer prices followed later, as well as periods when the connection was weaker."
      loading={loading}
      error={error}
    >
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 16, right: 18, bottom: 12, left: 12 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} minTickGap={32} tickFormatter={formatYearTick} />
          <YAxis tick={{ fontSize: 12 }} tickFormatter={(value) => `${formatNumber(value as number)}%`} label={axisLabel('Year-over-year change')} />
          <Tooltip formatter={(value) => `${formatNumber(Number(value))}%`} labelFormatter={formatDateLabel} />
          <Legend />
          {configs.map((config) => (
            <Line key={config.key} type="monotone" dataKey={config.key} name={config.label} stroke={config.color} strokeWidth={2.4} dot={false} connectNulls activeDot={{ r: 4 }} />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

function DebtProductivityChart() {
  const { series, loading, error } = useFredSeries(['GFDEBTN', 'GDPC1']);
  const data = useMemo(() => buildDebtProductivityData(series), [series]);

  return (
    <ChartCard
      title="How Much Debt Does It Take to Grow the Economy?"
      description="This chart compares the four-quarter increase in federal debt with the four-quarter increase in real GDP. A higher ratio means more debt was added for each additional dollar of measured real economic output."
      loading={loading}
      error={error}
    >
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 16, right: 18, bottom: 12, left: 12 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} minTickGap={32} tickFormatter={formatYearTick} />
          <YAxis tick={{ fontSize: 12 }} tickFormatter={(value) => formatNumber(value as number)} label={axisLabel('Debt added per $1 GDP growth')} />
          <Tooltip formatter={(value) => `$${formatNumber(Number(value))} debt per $1 GDP`} labelFormatter={formatDateLabel} />
          <ReferenceLine y={1} stroke="#64748b" strokeDasharray="4 4" />
          <Line type="monotone" dataKey="debtPerGrowth" name="Debt productivity ratio" stroke="#9333ea" strokeWidth={2.5} dot={false} activeDot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

function CapitalLaborChart() {
  const { series, loading, error } = useFredSeries(['OPHNFB', 'COMPRNFB', 'PRS85006173', 'CP']);
  const productivityData = useMemo(() => buildIndexedSeries(series, [
    { id: 'OPHNFB', key: 'productivity', label: 'Productivity', color: '#2563eb' },
    { id: 'COMPRNFB', key: 'compensation', label: 'Real Compensation', color: '#16a34a' },
  ], '1970-01-01'), [series]);
  const laborCapitalData = useMemo(() => buildLaborCapitalData(series), [series]);

  return (
    <ChartCard
      title="Where Does Worker Productivity Go?"
      description="Productivity measures output per hour, while real compensation tracks inflation-adjusted pay. The second panel compares labor's share of output with corporate profit growth, highlighting how gains can divide between workers and capital."
      loading={loading}
      error={error}
    >
      <div className="space-y-8">
        <div>
          <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-600">Panel A: Productivity vs. Real Compensation</h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={productivityData} margin={{ top: 16, right: 18, bottom: 12, left: 12 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="date" tick={{ fontSize: 12 }} minTickGap={32} tickFormatter={formatYearTick} />
              <YAxis tick={{ fontSize: 12 }} tickFormatter={(value) => formatNumber(value as number)} label={axisLabel('Index, 1970 = 100')} />
              <Tooltip formatter={(value) => formatNumber(Number(value))} labelFormatter={formatDateLabel} />
              <Legend />
              <Line type="monotone" dataKey="productivity" name="Productivity" stroke="#2563eb" strokeWidth={2.4} dot={false} connectNulls activeDot={{ r: 4 }} />
              <Line type="monotone" dataKey="compensation" name="Real Compensation" stroke="#16a34a" strokeWidth={2.4} dot={false} connectNulls activeDot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-600">Panel B: Labor Share vs. Corporate Profit Growth</h3>
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart data={laborCapitalData} margin={{ top: 16, right: 18, bottom: 12, left: 12 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="date" tick={{ fontSize: 12 }} minTickGap={32} tickFormatter={formatYearTick} />
              <YAxis yAxisId="left" tick={{ fontSize: 12 }} tickFormatter={(value) => `${formatNumber(value as number)}%`} label={axisLabel('Labor share')} />
              <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} tickFormatter={(value) => `${formatNumber(value as number)}%`} label={rightAxisLabel('Corporate profits YoY')} />
              <Tooltip formatter={(value) => `${formatNumber(Number(value))}%`} labelFormatter={formatDateLabel} />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="laborShare" name="Labor Share" stroke="#0f766e" strokeWidth={2.4} dot={false} activeDot={{ r: 4 }} />
              <Line yAxisId="right" type="monotone" dataKey="profitsYoy" name="Corporate Profits YoY" stroke="#c2410c" strokeWidth={2.4} dot={false} connectNulls activeDot={{ r: 4 }} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </ChartCard>
  );
}

function FinancialRepressionChart() {
  const { series, loading, error } = useFredSeries(['FEDFUNDS', 'CPIAUCSL', 'PSAVERT']);
  const data = useMemo(() => buildFinancialRepressionData(series), [series]);

  return (
    <ChartCard
      title="The Hidden Tax on Savers"
      description="The real policy rate subtracts inflation from the federal funds rate. When it is negative, cash and short-term savings can lose purchasing power even if the posted interest rate is above zero."
      loading={loading}
      error={error}
    >
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={data} margin={{ top: 16, right: 18, bottom: 12, left: 12 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} minTickGap={32} tickFormatter={formatYearTick} />
          <YAxis yAxisId="left" tick={{ fontSize: 12 }} tickFormatter={(value) => `${formatNumber(value as number)}%`} label={axisLabel('Real policy rate')} />
          <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} tickFormatter={(value) => `${formatNumber(value as number)}%`} label={rightAxisLabel('Personal saving rate')} />
          <Tooltip formatter={(value) => `${formatNumber(Number(value))}%`} labelFormatter={formatDateLabel} />
          <Legend />
          <ReferenceLine yAxisId="left" y={0} stroke="#475569" />
          <Area yAxisId="left" type="monotone" dataKey="positiveRealRate" name="Positive real rate" fill="#dcfce7" stroke="#16a34a" strokeWidth={1.5} dot={false} isAnimationActive={false} />
          <Area yAxisId="left" type="monotone" dataKey="negativeRealRate" name="Negative real rate" fill="#fee2e2" stroke="#dc2626" strokeWidth={1.5} dot={false} isAnimationActive={false} />
          <Line yAxisId="right" type="monotone" dataKey="savingRate" name="Personal Saving Rate" stroke="#2563eb" strokeWidth={2.4} dot={false} activeDot={{ r: 4 }} />
        </ComposedChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

function FiscalSqueezeChart() {
  const { series, loading, error } = useFredSeries(['FYOINT', 'FYFR', 'FDEFX']);
  const data = useMemo(() => buildFiscalSqueezeData(series), [series]);

  return (
    <ChartCard
      title="Can the Government Pay Its Bills?"
      description="Interest costs and defense spending are two major claims on federal revenue. Showing them as a share of federal receipts makes the pressure easier to compare across decades."
      loading={loading}
      error={error}
    >
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 16, right: 18, bottom: 12, left: 12 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="year" tick={{ fontSize: 12 }} minTickGap={28} />
          <YAxis tick={{ fontSize: 12 }} tickFormatter={(value) => `${formatNumber(value as number)}%`} label={axisLabel('Percent of federal receipts')} />
          <Tooltip formatter={(value) => `${formatNumber(Number(value))}%`} labelFormatter={(label) => `Year ${label}`} />
          <Legend />
          <Bar dataKey="interestPct" name="Interest as % of Receipts" fill="#dc2626" />
          <Bar dataKey="defensePct" name="Defense as % of Receipts" fill="#2563eb" />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

function ChartCard({
  title,
  description,
  loading,
  error,
  children,
}: {
  title: string;
  description: string;
  loading: boolean;
  error: string | null;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-lg bg-white p-6 shadow-md">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl font-black text-gray-900">{title}</h2>
        <p className="mt-3 max-w-4xl text-sm leading-6 text-gray-700">{description}</p>
      </div>

      <div className="mt-6">
        {loading ? <LoadingSkeleton /> : null}
        {!loading && error ? <ErrorMessage message={error} /> : null}
        {!loading && !error ? children : null}
      </div>

      <p className="mt-4 border-t border-gray-100 pt-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
        Source: Federal Reserve Economic Data (FRED)
      </p>
    </section>
  );
}

function LoadingSkeleton() {
  return (
    <div className="h-[400px] animate-pulse rounded bg-gray-100">
      <div className="h-full bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100" />
    </div>
  );
}

function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="rounded border border-red-200 bg-red-50 p-5 text-sm font-semibold text-red-700">
      {message}
    </div>
  );
}

function useFredSeries(seriesIds: string[]) {
  const [series, setSeries] = useState<Record<string, FredSeries>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const seriesKey = seriesIds.join('|');

  useEffect(() => {
    let active = true;

    async function loadSeries() {
      try {
        setLoading(true);
        setError(null);
        const payloads = await Promise.all(seriesIds.map((seriesId) => fetchFredSeries(seriesId)));
        if (!active) return;
        setSeries(Object.fromEntries(payloads.map((payload) => [payload.series_id, payload])));
      } catch (loadError) {
        if (active) {
          setError(loadError instanceof Error ? loadError.message : 'Could not load FRED data.');
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    void loadSeries();
    return () => {
      active = false;
    };
  }, [seriesKey]);

  return { series, loading, error };
}

async function fetchFredSeries(seriesId: string): Promise<FredSeries> {
  const response = await fetch(`${API_BASE}/api/fred/${encodeURIComponent(seriesId)}`);
  if (!response.ok) {
    throw new Error(`FRED request failed for ${seriesId} (${response.status}).`);
  }
  return response.json() as Promise<FredSeries>;
}

function buildIndexedSeries(series: Record<string, FredSeries>, configs: SeriesConfig[], baseDate: string): ChartPoint[] {
  const byMonth = new Map<string, ChartPoint>();

  configs.forEach((config) => {
    const observations = monthlyLatest(toNumericObservations(series[config.id]).filter((observation) => observation.date >= baseDate));
    const base = observations.find((observation) => observation.value > 0)?.value;
    if (!base) return;

    observations.forEach((observation) => {
      const month = monthKey(observation.date);
      const existing = byMonth.get(month) ?? { date: `${month}-01`, year: Number(month.slice(0, 4)) };
      existing[config.key] = (observation.value / base) * 100;
      byMonth.set(month, existing);
    });
  });

  return Array.from(byMonth.values()).sort((a, b) => a.date.localeCompare(b.date));
}

function buildPurchasingPowerData(series: Record<string, FredSeries>): ChartPoint[] {
  const homePrices = toNumericObservations(series.MSPUS).filter((observation) => observation.date >= '1970-01-01');
  const hourlyEarnings = toNumericObservations(series.AHETPI);

  const points: ChartPoint[] = [];
  homePrices.forEach((homePrice) => {
    const wage = latestAtOrBefore(hourlyEarnings, homePrice.date);
    if (!wage || wage.value <= 0) return;
    points.push({
      date: homePrice.date,
      year: new Date(homePrice.date).getUTCFullYear(),
      hours: homePrice.value / wage.value,
    });
  });

  return points.sort((a, b) => a.date.localeCompare(b.date));
}

function buildMoneyInflationData(series: Record<string, FredSeries>): ChartPoint[] {
  const m2 = yearOverYearByMonths(monthlyLatest(toNumericObservations(series.M2SL)), 12, 'm2');
  const cpi = yearOverYearByMonths(monthlyLatest(toNumericObservations(series.CPIAUCSL)), 12, 'cpi');
  return mergeChartSeries([m2, cpi], ['m2', 'cpi']).filter((point) => point.date >= '1960-01-01');
}

function buildDebtProductivityData(series: Record<string, FredSeries>): ChartPoint[] {
  const debt = toNumericObservations(series.GFDEBTN).filter((observation) => observation.date >= '1969-01-01');
  const gdp = toNumericObservations(series.GDPC1);

  return debt
    .map((observation, index): ChartPoint | null => {
      if (index < 4) return null;
      const priorDebt = debt[index - 4];
      const currentGdp = latestAtOrBefore(gdp, observation.date);
      const priorGdp = latestAtOrBefore(gdp, priorDebt.date);
      if (!currentGdp || !priorGdp) return null;
      const debtChangeBillions = (observation.value - priorDebt.value) / 1_000;
      const gdpChange = currentGdp.value - priorGdp.value;
      if (!Number.isFinite(debtChangeBillions) || !Number.isFinite(gdpChange) || gdpChange === 0) return null;
      return {
        date: observation.date,
        year: new Date(observation.date).getUTCFullYear(),
        debtPerGrowth: debtChangeBillions / gdpChange,
      };
    })
    .filter(isChartPoint)
    .filter((point) => point.date >= '1970-01-01' && Number.isFinite(Number(point.debtPerGrowth)))
    .sort((a, b) => a.date.localeCompare(b.date));
}

function buildLaborCapitalData(series: Record<string, FredSeries>): ChartPoint[] {
  const laborShare = toNumericObservations(series.PRS85006173)
    .filter((observation) => observation.date >= '1970-01-01')
    .map((observation) => ({
      date: observation.date,
      year: new Date(observation.date).getUTCFullYear(),
      laborShare: observation.value,
    }));
  const profitsYoy = yearOverYearByIndex(toNumericObservations(series.CP), 4, 'profitsYoy').filter((point) => point.date >= '1970-01-01');

  return mergeChartSeries([laborShare, profitsYoy], ['laborShare', 'profitsYoy']);
}

function buildFinancialRepressionData(series: Record<string, FredSeries>): ChartPoint[] {
  const fedFunds = monthlyLatest(toNumericObservations(series.FEDFUNDS));
  const cpiYoy = yearOverYearByMonths(monthlyLatest(toNumericObservations(series.CPIAUCSL)), 12, 'cpiYoy');
  const savings = monthlyLatest(toNumericObservations(series.PSAVERT));

  return fedFunds
    .map((observation): ChartPoint | null => {
      const cpi = latestAtOrBefore(cpiYoy, observation.date, 'cpiYoy');
      const savingRate = latestAtOrBefore(savings, observation.date);
      if (!cpi || !savingRate) return null;
      const realRate = observation.value - Number(cpi.cpiYoy);
      return {
        date: observation.date,
        year: new Date(observation.date).getUTCFullYear(),
        positiveRealRate: realRate > 0 ? realRate : null,
        negativeRealRate: realRate < 0 ? realRate : null,
        realRate,
        savingRate: savingRate.value,
      };
    })
    .filter(isChartPoint)
    .sort((a, b) => a.date.localeCompare(b.date));
}

function buildFiscalSqueezeData(series: Record<string, FredSeries>): ChartPoint[] {
  const interest = toAnnualMap(toNumericObservations(series.FYOINT));
  const receipts = toAnnualMap(toNumericObservations(series.FYFR));
  const defense = toAnnualMap(toNumericObservations(series.FDEFX));
  const years = Array.from(new Set([...interest.keys(), ...receipts.keys(), ...defense.keys()])).sort((a, b) => a - b);

  return years
    .map((year): ChartPoint | null => {
      const receiptValue = receipts.get(year);
      const interestValue = interest.get(year);
      const defenseValue = defense.get(year);
      if (!receiptValue || !interestValue || !defenseValue || receiptValue === 0) return null;
      return {
        date: `${year}-01-01`,
        year,
        interestPct: (interestValue / receiptValue) * 100,
        defensePct: (defenseValue / receiptValue) * 100,
      };
    })
    .filter(isChartPoint)
    .filter((point) => point.year >= 1980);
}

function toNumericObservations(series?: FredSeries): NumericObservation[] {
  if (!series) return [];
  return series.observations
    .map((observation): NumericObservation | null => {
      const value = parseFredValue(observation.value);
      if (value === null) return null;
      return { date: observation.obs_date, value };
    })
    .filter(isNumericObservation)
    .sort((a, b) => a.date.localeCompare(b.date));
}

function isNumericObservation(observation: NumericObservation | null): observation is NumericObservation {
  return observation !== null;
}

function monthlyLatest(observations: NumericObservation[]): NumericObservation[] {
  const byMonth = new Map<string, NumericObservation>();
  observations.forEach((observation) => {
    byMonth.set(monthKey(observation.date), observation);
  });
  return Array.from(byMonth.entries())
    .map(([month, observation]) => ({ date: `${month}-01`, value: observation.value }))
    .sort((a, b) => a.date.localeCompare(b.date));
}

function yearOverYearByMonths(observations: NumericObservation[], monthsBack: number, key: string): ChartPoint[] {
  const byMonth = new Map(observations.map((observation) => [monthKey(observation.date), observation.value]));

  return observations
    .map((observation): ChartPoint | null => {
      const currentDate = new Date(`${monthKey(observation.date)}-01T00:00:00Z`);
      currentDate.setUTCMonth(currentDate.getUTCMonth() - monthsBack);
      const prior = byMonth.get(monthKey(currentDate.toISOString().slice(0, 10)));
      if (!prior || prior === 0) return null;
      return {
        date: `${monthKey(observation.date)}-01`,
        year: new Date(observation.date).getUTCFullYear(),
        [key]: ((observation.value - prior) / prior) * 100,
      };
    })
    .filter(isChartPoint);
}

function yearOverYearByIndex(observations: NumericObservation[], periodsBack: number, key: string): ChartPoint[] {
  return observations
    .map((observation, index): ChartPoint | null => {
      if (index < periodsBack) return null;
      const prior = observations[index - periodsBack];
      if (!prior || prior.value === 0) return null;
      return {
        date: observation.date,
        year: new Date(observation.date).getUTCFullYear(),
        [key]: ((observation.value - prior.value) / prior.value) * 100,
      };
    })
    .filter(isChartPoint);
}

function mergeChartSeries(seriesList: ChartPoint[][], requiredKeys: string[]): ChartPoint[] {
  const byDate = new Map<string, ChartPoint>();
  seriesList.forEach((points) => {
    points.forEach((point) => {
      const existing = byDate.get(point.date) ?? { date: point.date, year: point.year };
      Object.assign(existing, point);
      byDate.set(point.date, existing);
    });
  });
  return Array.from(byDate.values())
    .filter((point) => requiredKeys.every((key) => typeof point[key] === 'number'))
    .sort((a, b) => a.date.localeCompare(b.date));
}

function isChartPoint(point: ChartPoint | null): point is ChartPoint {
  return point !== null;
}

function latestAtOrBefore<T extends { date: string }>(observations: T[], date: string, valueKey?: keyof T): T | null {
  let match: T | null = null;
  for (const observation of observations) {
    if (observation.date > date) break;
    if (valueKey && typeof observation[valueKey] !== 'number') continue;
    match = observation;
  }
  return match;
}

function toAnnualMap(observations: NumericObservation[]) {
  const byYear = new Map<number, number>();
  observations.forEach((observation) => {
    byYear.set(new Date(observation.date).getUTCFullYear(), observation.value);
  });
  return byYear;
}

function parseFredValue(value: FredObservation['value']) {
  if (value === null || value === '.') return null;
  const parsed = typeof value === 'number' ? value : Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function monthKey(date: string) {
  return date.slice(0, 7);
}

function axisLabel(value: string) {
  return { value, angle: -90, position: 'insideLeft' as const, style: { textAnchor: 'middle' as const } };
}

function rightAxisLabel(value: string) {
  return { value, angle: 90, position: 'insideRight' as const, style: { textAnchor: 'middle' as const } };
}

function formatYearTick(value: string | number) {
  return String(value).slice(0, 4);
}

function formatDateLabel(label: unknown) {
  const value = String(label ?? '');
  if (/^\d{4}$/.test(value)) return `Year ${value}`;
  return value.length >= 7 ? value.slice(0, 7) : value;
}

function compactAxis(value: number) {
  if (Math.abs(value) >= 1_000_000) return `${formatNumber(value / 1_000_000)}M`;
  if (Math.abs(value) >= 1_000) return `${formatNumber(value / 1_000)}K`;
  return formatNumber(value);
}

function formatNumber(value: number) {
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: Math.abs(value) >= 100 ? 0 : 1,
  }).format(value);
}
