import { createPageMetadata } from '@/lib/seo';

import { Suspense } from 'react';
import UscodeSectionRouteClient from '@/components/thesource/UscodeSectionRouteClient';

export const metadata = createPageMetadata(
  "/us-code/section/",
  "U.S. Code Section Reader",
  "Read federal statutory law and U.S. Code section text in TICRI.",
);

export default function UscodeSectionPage() {
  return (
    <Suspense fallback={<SectionLoading />}>
      <UscodeSectionRouteClient />
    </Suspense>
  );
}

function SectionLoading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-4">
      <p className="text-sm font-semibold text-gray-600">Loading U.S. Code reader...</p>
    </main>
  );
}
