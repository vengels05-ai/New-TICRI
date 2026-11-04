'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
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
  [key: string]: string | number;
};

type SeriesConfig = {
  id: string;
  key: string;
  label: string;
  color: string;
  transform?: (value: number) => number;
};

const debtMarkers = [
  { year: 2008, label: '2008 financial crisis' },
  { year: 2020, label: '2020 COVID' },
];

export default function SpendingPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-300">FRED Data Dashboard</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Federal Spending & Debt</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-200">
            Follow the long arc of federal borrowing, deficits, public spending, and real economic growth using primary economic data served through TheSource.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
        <SingleSeriesChart
          title="Federal Debt"
          description="Federal debt is the total amount the U.S. government owes from past borrowing. The raw FRED series is reported in millions of dollars; this chart converts it to trillions so the long-term debt path is easier to read."
          series={{ id: 'GFDEBTN', key: 'debt', label: 'Total public debt', color: '#dc2626', transform: (value) => value / 1_000_000 }}
          chartType="line"
          yAxisLabel="Trillions of dollars"
          valueFormatter={(value) => `$${formatNumber(value)}T`}
          markers={debtMarkers}
        />

        <SingleSeriesChart
          title="Federal Deficit or Surplus"
          description="A surplus means the federal government collected more than it spent in that fiscal year. A deficit means spending exceeded receipts, adding to borrowing needs and, over time, debt."
          series={{ id: 'FYFSD', key: 'deficit', label: 'Surplus or deficit', color: '#334155', transform: (value) => value / 1_000 }}
          chartType="bar"
          yAxisLabel="Billions of dollars"
          valueFormatter={(value) => `$${formatNumber(value)}B`}
        />

        <MultiSeriesChart
          title="Federal Outlays as % of GDP"
          description="Outlays show federal spending relative to the size of the economy. Comparing outlays with receipts shows whether the federal government is financing current operations from current revenue or borrowing to cover the gap."
          series={[
            { id: 'FYONGDA188S', key: 'outlays', label: 'Outlays', color: '#dc2626' },
            { id: 'FYFRGDA188S', key: 'receipts', label: 'Receipts', color: '#16a34a' },
          ]}
          yAxisLabel="Percent of GDP"
          valueFormatter={(value) => `${formatNumber(value)}%`}
        />

        <SingleSeriesChart
          title="GDP Growth"
          description="Real GDP measures inflation-adjusted economic output. The long-term trend helps put debt, spending, and deficits in context by showing the size of the economy supporting federal finances."
          series={{ id: 'GDPC1', key: 'gdp', label: 'Real GDP', color: '#2563eb' }}
          chartType="line"
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
  chartType,
  yAxisLabel,
  valueFormatter,
  markers,
}: {
  title: string;
  description: string;
  series: SeriesConfig;
  chartType: 'line' | 'bar';
  yAxisLabel: string;
  valueFormatter: (value: number) => string;
  markers?: { year: number; label: string }[];
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
        {chartType === 'bar' ? (
          <BarChart data={visibleData} margin={{ top: 16, right: 18, bottom: 12, left: 12 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="year" tick={{ fontSize: 12 }} minTickGap={28} />
            <YAxis tick={{ fontSize: 12 }} tickFormatter={(value) => compactAxis(value as number)} label={{ value: yAxisLabel, angle: -90, position: 'insideLeft', style: { textAnchor: 'middle' } }} />
            <Tooltip formatter={(value) => valueFormatter(Number(value))} labelFormatter={(label) => `Year ${label}`} />
            <ReferenceLine y={0} stroke="#475569" />
            <Bar dataKey={series.key} name={series.label}>
              {visibleData.map((point) => (
                <Cell key={point.date} fill={Number(point[series.key]) >= 0 ? '#16a34a' : '#dc2626'} />
              ))}
            </Bar>
          </BarChart>
        ) : (
          <LineChart data={visibleData} margin={{ top: 16, right: 18, bottom: 12, left: 12 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="year" tick={{ fontSize: 12 }} minTickGap={28} />
            <YAxis tick={{ fontSize: 12 }} tickFormatter={(value) => compactAxis(value as number)} label={{ value: yAxisLabel, angle: -90, position: 'insideLeft', style: { textAnchor: 'middle' } }} />
            <Tooltip formatter={(value) => valueFormatter(Number(value))} labelFormatter={(label) => `Year ${label}`} />
            {markers?.map((marker) => (
              <ReferenceLine key={marker.year} x={marker.year} stroke="#7f1d1d" strokeDasharray="4 4" label={{ value: marker.label, position: 'top', fill: '#7f1d1d', fontSize: 11 }} />
            ))}
            <Line type="monotone" dataKey={series.key} name={series.label} stroke={series.color} strokeWidth={2.5} dot={false} activeDot={{ r: 4 }} />
          </LineChart>
        )}
      </ResponsiveContainer>
    </ChartCard>
  );
}

function MultiSeriesChart({
  title,
  description,
  series,
  yAxisLabel,
  valueFormatter,
}: {
  title: string;
  description: string;
  series: SeriesConfig[];
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
        const payloads = await Promise.all(series.map((item) => fetchFredSeries(item.id)));
        if (!active) return;
        setData(mergeSeries(payloads, series));
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
          <YAxis tick={{ fontSize: 12 }} tickFormatter={(value) => `${formatNumber(value as number)}%`} label={{ value: yAxisLabel, angle: -90, position: 'insideLeft', style: { textAnchor: 'middle' } }} />
          <Tooltip formatter={(value) => valueFormatter(Number(value))} labelFormatter={(label) => `Year ${label}`} />
          <Legend />
          {series.map((item) => (
            <Line key={item.key} type="monotone" dataKey={item.key} name={item.label} stroke={item.color} strokeWidth={2.5} dot={false} activeDot={{ r: 4 }} />
          ))}
        </LineChart>
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

function mergeSeries(payloads: FredSeries[], configs: SeriesConfig[]): ChartPoint[] {
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
    .filter((point) => configs.every((config) => typeof point[config.key] === 'number'))
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
