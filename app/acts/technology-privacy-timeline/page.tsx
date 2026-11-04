import { createPageMetadata } from '@/lib/seo';

import PageClient from './PageClient';

export const metadata = createPageMetadata(
  "/acts/technology-privacy-timeline/",
  "Technology & Privacy Timeline",
  "Explore technology & privacy legislation and related federal bills, with links to TICRI’s legislative resources.",
);

export default function Page() {
  return <PageClient />;
}
