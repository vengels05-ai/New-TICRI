import Link from 'next/link';
import { Database, FileText, Search } from 'lucide-react';
import LawSearchClient from '@/components/thesource/LawSearchClient';

export const metadata = {
  title: 'Executive Order Search | TICRI',
  description: 'Search executive orders from TheSource by keyword, order number, president, and date.',
};

export default function ExecutiveOrdersSearchPage() {
  return (
    <main className="min-h-screen bg-[#EEF3F8] pb-16">
      <section className="border-b border-[#0F2C47]/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <Link href="/truth-and-law" className="text-sm font-semibold text-[#29465f] hover:text-[#C41E3A]">
            Truth and Law
          </Link>
          <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 border border-[#0F2C47]/15 bg-[#F7F3EA] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#0F2C47]">
                <FileText className="h-4 w-4" />
                Executive Orders
              </div>
              <h1 className="max-w-4xl text-4xl font-black tracking-tight text-[#0F2C47] sm:text-5xl">
                Search presidential orders by text, number, president, and date.
              </h1>
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
        <LawSearchClient mode="executive-orders" />
      </div>
    </main>
  );
}
