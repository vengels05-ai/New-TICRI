import { createPageMetadata } from '@/lib/seo';

import PageClient from './PageClient';

export const metadata = createPageMetadata(
  "/cases/healthcare-law/",
  "Healthcare Law: Supreme Court Cases",
  "Explore landmark Supreme Court decisions about healthcare law, with summaries, constitutional context, and original opinions.",
);

export default function Page() {
  return <PageClient />;
}
