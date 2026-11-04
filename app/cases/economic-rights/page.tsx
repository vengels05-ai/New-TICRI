import { createPageMetadata } from '@/lib/seo';

import PageClient from './PageClient';

export const metadata = createPageMetadata(
  "/cases/economic-rights/",
  "Economic Rights: Supreme Court Cases",
  "Explore landmark Supreme Court decisions about economic rights, with summaries, constitutional context, and original opinions.",
);

export default function Page() {
  return <PageClient />;
}
