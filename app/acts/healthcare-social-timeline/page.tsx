import { createPageMetadata } from '@/lib/seo';

import PageClient from './PageClient';

export const metadata = createPageMetadata(
  "/acts/healthcare-social-timeline/",
  "Healthcare & Social Policy Timeline",
  "Explore healthcare & social policy legislation and related federal bills, with links to TICRI’s legislative resources.",
);

export default function Page() {
  return <PageClient />;
}
