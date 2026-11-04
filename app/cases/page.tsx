import { createPageMetadata } from '@/lib/seo';

import PageClient from './PageClient';

export const metadata = createPageMetadata(
  "/cases/",
  "Landmark Supreme Court Cases Explained",
  "Explore landmark Supreme Court decisions by topic, with plain-English summaries, constitutional context, and links to original opinions.",
);

export default function Page() {
  return <PageClient />;
}
