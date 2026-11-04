'use client';

import Link from 'next/link';
import LiveBillsSection from '@/components/thesource/LiveBillsSection';

export default function FinancialSystemTimelinePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/acts" className="mb-4 inline-block text-blue-200 transition-colors hover:text-white">
              ← Back to Acts
            </Link>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Finance & Banking Timeline
            </h1>
          </div>
        </div>
      </section>

      <LiveBillsSection title="Related Bills from Congress" query="banking" />
    </div>
  );
}
