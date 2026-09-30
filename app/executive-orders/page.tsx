import { Suspense } from 'react';
import { Database, FileText, Search } from 'lucide-react';
import ExecutiveOrdersClient from './ExecutiveOrdersClient';

export const metadata = {
  title: 'Executive Orders | TICRI',
  description: 'Browse and search executive orders by president, keyword, order number, and date.',
};

export default function ExecutiveOrdersPage() {
  return (
    <main className="min-h-screen bg-[#EEF3F8] pb-16">
      <section className="border-b border-[#0F2C47]/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 border border-[#0F2C47]/15 bg-[#F7F3EA] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#0F2C47]">
                <FileText className="h-4 w-4" />
                Executive Orders
              </div>
              <h1 className="max-w-4xl text-4xl font-black tracking-tight text-[#0F2C47] sm:text-5xl">
                Browse presidential orders by administration, keyword, number, and date.
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-[#29465f]">
                Search primary-source executive order records from TheSource without leaving TICRI.
              </p>
            </div>
            <div className="grid gap-3 text-sm text-[#29465f] sm:grid-cols-2 lg:w-[420px]">
              <div className="border border-[#0F2C47]/10 bg-white p-4">
                <Search className="mb-2 h-5 w-5 text-[#C41E3A]" />
                Keyword and number search
              </div>
              <div className="border border-[#0F2C47]/10 bg-white p-4">
                <Database className="mb-2 h-5 w-5 text-[#C41E3A]" />
                Served from TheSource
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <Suspense fallback={<div className="border border-[#0F2C47]/10 bg-white p-6 text-sm text-[#29465f]">Loading executive orders...</div>}>
          <ExecutiveOrdersClient />
        </Suspense>
      </div>
    </main>
  );
}
