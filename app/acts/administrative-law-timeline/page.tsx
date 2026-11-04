import { createPageMetadata } from '@/lib/seo';

import PageClient from './PageClient';

export const metadata = createPageMetadata(
  "/acts/administrative-law-timeline/",
  "Administrative Law Timeline",
  "Explore administrative law legislation and related federal bills, with links to TICRI’s legislative resources.",
);

export default function Page() {
  return <PageClient />;
}
