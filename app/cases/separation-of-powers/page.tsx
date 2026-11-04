import { createPageMetadata } from '@/lib/seo';

import PageClient from './PageClient';

export const metadata = createPageMetadata(
  "/cases/separation-of-powers/",
  "Separation of Powers: Supreme Court Cases",
  "Explore landmark Supreme Court decisions about separation of powers, with summaries, constitutional context, and original opinions.",
);

export default function Page() {
  return <PageClient />;
}
