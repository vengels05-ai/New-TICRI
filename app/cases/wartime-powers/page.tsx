import { createPageMetadata } from '@/lib/seo';

import PageClient from './PageClient';

export const metadata = createPageMetadata(
  "/cases/wartime-powers/",
  "Wartime Powers: Supreme Court Cases",
  "Explore landmark Supreme Court decisions about wartime powers, with summaries, constitutional context, and original opinions.",
);

export default function Page() {
  return <PageClient />;
}
