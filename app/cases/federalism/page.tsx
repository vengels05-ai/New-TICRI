import { createPageMetadata } from '@/lib/seo';

import PageClient from './PageClient';

export const metadata = createPageMetadata(
  "/cases/federalism/",
  "Federalism: Supreme Court Cases",
  "Explore landmark Supreme Court decisions about federalism, with summaries, constitutional context, and original opinions.",
);

export default function Page() {
  return <PageClient />;
}
