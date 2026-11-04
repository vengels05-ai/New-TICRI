import { createPageMetadata } from '@/lib/seo';

import PageClient from './PageClient';

export const metadata = createPageMetadata(
  "/acts/financial-system-timeline/",
  "Finance & Banking Timeline",
  "Explore finance & banking legislation and related federal bills, with links to TICRI’s legislative resources.",
);

export default function Page() {
  return <PageClient />;
}
