'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import CaseDetailPageClient from '@/components/scotus/CaseDetailPageClient';

function OpinionPageContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  if (!id) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-md">
          <p className="text-red-500 font-bold mb-4">No case ID provided.</p>
          <a href="/cases/search" className="text-blue-600 hover:underline text-sm font-semibold">
            Back to Case Search
          </a>
        </div>
      </div>
    );
  }

  return <CaseDetailPageClient id={id} />;
}

export default function OpinionPage() {
  return (
    <Suspense fallback={
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-gray-900 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-500 font-medium">Loading case details...</p>
        </div>
      </div>
    }>
      <OpinionPageContent />
    </Suspense>
  );
}
