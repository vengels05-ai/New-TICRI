import { Suspense } from 'react';
import CaseOpinionRouteClient from '@/components/scotus/CaseOpinionRouteClient';

export const metadata = {
  title: 'Supreme Court Opinion | TICRI',
  description: 'Read Supreme Court opinion text in TICRI, served from TheSource.',
};

export default function OpinionPage() {
  return (
    <Suspense fallback={<OpinionLoading />}>
      <CaseOpinionRouteClient />
    </Suspense>
  );
}

function OpinionLoading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-4">
      <p className="text-sm font-semibold text-gray-600">Loading case reader...</p>
    </main>
  );
}
