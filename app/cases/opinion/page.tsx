import { createPageMetadata } from '@/lib/seo';

import { Suspense } from 'react';
import CaseOpinionRouteClient from '@/components/scotus/CaseOpinionRouteClient';

export const metadata = createPageMetadata(
  "/cases/opinion/",
  "Supreme Court Opinion Reader",
  "Read Supreme Court opinion text and case details from the TICRI case library.",
);

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
