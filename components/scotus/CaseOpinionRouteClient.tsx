'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { AlertCircle, ChevronLeft } from 'lucide-react';
import CaseDetailPageClient from '@/components/scotus/CaseDetailPageClient';

export default function CaseOpinionRouteClient() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id') || undefined;

  if (!id) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md bg-white p-8 text-center shadow-md">
          <AlertCircle className="mx-auto mb-4 h-12 w-12 text-red-600" />
          <p className="mb-4 font-bold text-red-600">No case ID provided.</p>
          <Link href="/cases/search" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900">
            <ChevronLeft className="h-4 w-4" />
            Back to Case Search
          </Link>
        </div>
      </main>
    );
  }

  return <CaseDetailPageClient id={id} />;
}
