import { createPageMetadata } from '@/lib/seo';

import PageClient from './PageClient';

export const metadata = createPageMetadata(
  "/economics/",
  "Understanding Your Economy",
  "Explore money, prices, wages, debt, and public finance through charts using primary economic data from FRED.",
);

export default function Page() {
  return <PageClient />;
}
