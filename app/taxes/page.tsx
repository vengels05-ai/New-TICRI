import { createPageMetadata } from '@/lib/seo';

import PageClient from './PageClient';

export const metadata = createPageMetadata(
  "/taxes/",
  "Federal Tax Revenue & Policy",
  "Explore federal receipts, spending gaps, inflation, and real disposable income using primary economic series served through TheSource.",
);

export default function Page() {
  return <PageClient />;
}
