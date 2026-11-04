import { createPageMetadata } from '@/lib/seo';

import PageClient from './PageClient';

export const metadata = createPageMetadata(
  "/cases/civil-rights/",
  "Civil Rights & Equal Protection: Supreme Court Cases",
  "Explore landmark Supreme Court decisions about civil rights & equal protection, with summaries, constitutional context, and original opinions.",
);

export default function Page() {
  return <PageClient />;
}
