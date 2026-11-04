import { createPageMetadata } from '@/lib/seo';

import PageClient from './PageClient';

export const metadata = createPageMetadata(
  "/cases/executive-power/",
  "Presidential Power: Supreme Court Cases",
  "Explore landmark Supreme Court decisions about presidential power, with summaries, constitutional context, and original opinions.",
);

export default function Page() {
  return <PageClient />;
}
