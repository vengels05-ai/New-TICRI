import { createPageMetadata } from '@/lib/seo';

import PageClient from './PageClient';

export const metadata = createPageMetadata(
  "/cases/criminal-justice/",
  "Criminal Justice: Supreme Court Cases",
  "Explore landmark Supreme Court decisions about criminal justice, with summaries, constitutional context, and original opinions.",
);

export default function Page() {
  return <PageClient />;
}
