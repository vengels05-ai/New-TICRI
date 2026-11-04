import { createPageMetadata } from '@/lib/seo';

import PageClient from './PageClient';

export const metadata = createPageMetadata(
  "/acts/labor-employment-timeline/",
  "Labor & Employment Rights Timeline",
  "Explore labor & employment rights legislation and related federal bills, with links to TICRI’s legislative resources.",
);

export default function Page() {
  return <PageClient />;
}
