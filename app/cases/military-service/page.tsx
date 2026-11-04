import { createPageMetadata } from '@/lib/seo';

import PageClient from './PageClient';

export const metadata = createPageMetadata(
  "/cases/military-service/",
  "Military Service: Supreme Court Cases",
  "Explore landmark Supreme Court decisions about military service, with summaries, constitutional context, and original opinions.",
);

export default function Page() {
  return <PageClient />;
}
