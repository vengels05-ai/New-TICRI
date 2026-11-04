'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  Area,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const API_BASE = 'https://thesource-worker.ticri2025.workers.dev';
const DEFAULT_WINDOW_YEARS = 50;

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

type ChartPoint = {
  date: string;
  year: number;
  [key: string]: string | number | undefined;
};

type SeriesConfig = {
  id: string;
  key: string;
  label: string;
  color: string;
  transform?: (value: number) => number;
};

export default function TaxesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-300">FRED Data Dashboard</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Federal Tax Revenue & Policy</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-200">
            Explore federal receipts, spending gaps, inflation, and real disposable income using primary economic series served through TheSource.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
        <SingleSeriesChart
          title="Federal Receipts as % of GDP"
          description="This metric shows what share of the national economy flows into the federal government as tax and other receipts. It helps compare tax revenue across eras even as the economy grows."
          series={{ id: 'FYFRGDA188S', key: 'receipts', label: 'Federal receipts', color: '#16a34a' }}
          yAxisLabel="Percent of GDP"
          valueFormatter={(value) => `${formatNumber(value)}%`}
        />

        <ReceiptsOutlaysChart />

        <SingleSeriesChart
          title="Inflation"
          description="The Consumer Price Index tracks changes in prices paid by urban consumers. Rising CPI means each dollar buys less over time, which affects wages, taxes, benefits, and household budgets."
          series={{ id: 'CPIAUCSL', key: 'cpi', label: 'CPI', color: '#dc2626' }}
          yAxisLabel="Index 1982-84 = 100"
          valueFormatter={(value) => formatNumber(value)}
        />

        <SingleSeriesChart
          title="Real Disposable Personal Income"
          description="Real disposable personal income estimates how much income households have after taxes and inflation. It is a useful way to compare purchasing power over time instead of only looking at nominal dollars."
          series={{ id: 'DSPIC96', key: 'income', label: 'Real disposable income', color: '#2563eb' }}
          yAxisLabel="Billions of chained 2017 dollars"
          valueFormatter={(value) => `$${formatNumber(value / 1_000)}T`}
        />
      </div>
    </main>
  );
}

function SingleSeriesChart({
  title,
  description,
  series,
  yAxisLabel,
  valueFormatter,
}: {
  title: string;
  description: string;
  series: SeriesConfig;
  yAxisLabel: string;
  valueFormatter: (value: number) => string;
}) {
  const [data, setData] = useState<ChartPoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showFullHistory, setShowFullHistory] = useState(false);

  useEffect(() => {
    let active = true;

    async function loadSeries() {
      try {
        setLoading(true);
        setError(null);
        const payload = await fetchFredSeries(series.id);
        if (!active) return;
        setData(toChartPoints(payload, series));
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
  }, [series.id]);

  const visibleData = useVisibleData(data, showFullHistory);

  return (
    <ChartCard
      title={title}
      description={description}
      loading={loading}
      error={error}
      showFullHistory={showFullHistory}
      onToggleHistory={() => setShowFullHistory((current) => !current)}
    >
      <ResponsiveContainer width="100%" height={360}>
        <LineChart data={visibleData} margin={{ top: 16, right: 18, bottom: 12, left: 12 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="year" tick={{ fontSize: 12 }} minTickGap={28} />
          <YAxis tick={{ fontSize: 12 }} tickFormatter={(value) => compactAxis(value as number)} label={{ value: yAxisLabel, angle: -90, position: 'insideLeft', style: { textAnchor: 'middle' } }} />
          <Tooltip formatter={(value) => valueFormatter(Number(value))} labelFormatter={(label) => `Year ${label}`} />
          <Line type="monotone" dataKey={series.key} name={series.label} stroke={series.color} strokeWidth={2.5} dot={false} activeDot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

function ReceiptsOutlaysChart() {
  const [data, setData] = useState<ChartPoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showFullHistory, setShowFullHistory] = useState(false);

  const series = useMemo<SeriesConfig[]>(() => [
    { id: 'FYFRGDA188S', key: 'receipts', label: 'Receipts', color: '#16a34a' },
    { id: 'FYONGDA188S', key: 'outlays', label: 'Outlays', color: '#dc2626' },
  ], []);

  useEffect(() => {
    let active = true;

    async function loadSeries() {
      try {
        setLoading(true);
        setError(null);
        const payloads = await Promise.all(series.map((item) => fetchFredSeries(item.id)));
        if (!active) return;
        setData(mergeReceiptsOutlays(payloads, series));
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
  }, [series]);

  const visibleData = useVisibleData(data, showFullHistory);

  return (
    <ChartCard
      title="Receipts vs Outlays"
      description="Receipts are federal revenue, while outlays are federal spending. When receipts exceed outlays, the federal budget is in surplus; when outlays exceed receipts, the government runs a deficit."
      loading={loading}
      error={error}
      showFullHistory={showFullHistory}
      onToggleHistory={() => setShowFullHistory((current) => !current)}
    >
      <ResponsiveContainer width="100%" height={380}>
        <ComposedChart data={visibleData} margin={{ top: 16, right: 18, bottom: 12, left: 12 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="year" tick={{ fontSize: 12 }} minTickGap={28} />
          <YAxis tick={{ fontSize: 12 }} tickFormatter={(value) => `${formatNumber(value as number)}%`} label={{ value: 'Percent of GDP', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle' } }} />
          <Tooltip formatter={(value) => `${formatNumber(Number(value))}%`} labelFormatter={(label) => `Year ${label}`} />
          <Legend />
          <Area type="monotone" dataKey="surplusGap" name="Surplus zone" fill="#dcfce7" stroke="transparent" isAnimationActive={false} />
          <Area type="monotone" dataKey="deficitGap" name="Deficit zone" fill="#fee2e2" stroke="transparent" isAnimationActive={false} />
          <Line type="monotone" dataKey="receipts" name="Receipts" stroke="#16a34a" strokeWidth={2.5} dot={false} activeDot={{ r: 4 }} />
          <Line type="monotone" dataKey="outlays" name="Outlays" stroke="#dc2626" strokeWidth={2.5} dot={false} activeDot={{ r: 4 }} />
        </ComposedChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

function ChartCard({
  title,
  description,
  loading,
  error,
  showFullHistory,
  onToggleHistory,
  children,
}: {
  title: string;
  description: string;
  loading: boolean;
  error: string | null;
  showFullHistory: boolean;
  onToggleHistory: () => void;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-lg bg-white p-6 shadow-md">
      <div className="flex flex-col gap-4 border-b border-gray-200 pb-4 md:flex-row md:items-start md:justify-between">
        <div>
          <h2 className="text-2xl font-black text-gray-900">{title}</h2>
          <p className="mt-3 max-w-4xl text-sm leading-6 text-gray-700">{description}</p>
        </div>
        <button
          type="button"
          onClick={onToggleHistory}
          className="shrink-0 rounded bg-gray-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-gray-700"
        >
          {showFullHistory ? 'Last 50 years' : 'Full history'}
        </button>
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
    <div className="h-[360px] animate-pulse rounded bg-gray-100">
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

function useVisibleData(data: ChartPoint[], showFullHistory: boolean) {
  return useMemo(() => {
    if (showFullHistory || data.length === 0) {
      return data;
    }
    const maxYear = Math.max(...data.map((point) => point.year));
    return data.filter((point) => point.year >= maxYear - DEFAULT_WINDOW_YEARS);
  }, [data, showFullHistory]);
}

async function fetchFredSeries(seriesId: string): Promise<FredSeries> {
  const response = await fetch(`${API_BASE}/api/fred/${encodeURIComponent(seriesId)}`);
  if (!response.ok) {
    throw new Error(`FRED request failed for ${seriesId} (${response.status}).`);
  }
  return response.json() as Promise<FredSeries>;
}

function toChartPoints(payload: FredSeries, config: SeriesConfig): ChartPoint[] {
  return payload.observations
    .map((observation) => toPoint(observation, config))
    .filter((point): point is ChartPoint => Boolean(point));
}

function mergeReceiptsOutlays(payloads: FredSeries[], configs: SeriesConfig[]): ChartPoint[] {
  const byDate = new Map<string, ChartPoint>();
  payloads.forEach((payload, index) => {
    const config = configs[index];
    payload.observations.forEach((observation) => {
      const value = parseFredValue(observation.value);
      if (value === null) return;
      const date = observation.obs_date;
      const year = new Date(date).getUTCFullYear();
      const existing = byDate.get(date) ?? { date, year };
      existing[config.key] = config.transform ? config.transform(value) : value;
      byDate.set(date, existing);
    });
  });

  return Array.from(byDate.values())
    .filter((point) => typeof point.receipts === 'number' && typeof point.outlays === 'number')
    .map((point) => {
      const receipts = Number(point.receipts);
      const outlays = Number(point.outlays);
      return {
        ...point,
        surplusGap: receipts > outlays ? receipts : undefined,
        deficitGap: outlays > receipts ? outlays : undefined,
      };
    })
    .sort((a, b) => a.date.localeCompare(b.date));
}

function toPoint(observation: FredObservation, config: SeriesConfig): ChartPoint | null {
  const value = parseFredValue(observation.value);
  if (value === null) return null;
  return {
    date: observation.obs_date,
    year: new Date(observation.obs_date).getUTCFullYear(),
    [config.key]: config.transform ? config.transform(value) : value,
  };
}

function parseFredValue(value: FredObservation['value']) {
  if (value === null || value === '.') return null;
  const parsed = typeof value === 'number' ? value : Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function compactAxis(value: number) {
  if (Math.abs(value) >= 1_000) return `${formatNumber(value / 1_000)}K`;
  return formatNumber(value);
}

function formatNumber(value: number) {
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: Math.abs(value) >= 100 ? 0 : 1,
  }).format(value);
}
