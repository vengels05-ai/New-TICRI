import { createPageMetadata } from '@/lib/seo';

import PageClient from './PageClient';

export const metadata = createPageMetadata(
  "/acts/defense-security-timeline/",
  "Defense & National Security Timeline",
  "Explore defense & national security legislation and related federal bills, with links to TICRI’s legislative resources.",
);

export default function Page() {
  return <PageClient />;
}
