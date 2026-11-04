import { createPageMetadata } from '@/lib/seo';

import PageClient from './PageClient';

export const metadata = createPageMetadata(
  "/fiscal-policy/",
  "Fiscal Policy",
  "How the federal government's taxing, borrowing, and spending power expanded from a limited revenue model into the modern fiscal state.",
);

export default function Page() {
  return <PageClient />;
}
