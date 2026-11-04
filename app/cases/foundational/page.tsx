import { createPageMetadata } from '@/lib/seo';

import PageClient from './PageClient';

export const metadata = createPageMetadata(
  "/cases/foundational/",
  "Constitutional Foundations: Supreme Court Cases",
  "Explore landmark Supreme Court decisions about constitutional foundations, with summaries, constitutional context, and original opinions.",
);

export default function Page() {
  return <PageClient />;
}
