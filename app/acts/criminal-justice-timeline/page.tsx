import { createPageMetadata } from '@/lib/seo';

import PageClient from './PageClient';

export const metadata = createPageMetadata(
  "/acts/criminal-justice-timeline/",
  "Criminal Justice & Due Process Timeline",
  "Explore criminal justice & due process legislation and related federal bills, with links to TICRI’s legislative resources.",
);

export default function Page() {
  return <PageClient />;
}
