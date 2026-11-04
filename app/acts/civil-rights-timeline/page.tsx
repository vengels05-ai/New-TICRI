import { createPageMetadata } from '@/lib/seo';

import PageClient from './PageClient';

export const metadata = createPageMetadata(
  "/acts/civil-rights-timeline/",
  "Civil Rights Acts Timeline",
  "Trace major federal civil rights laws, including citizenship, anti-discrimination, fair housing, and disability protections, with links to individual Acts.",
);

export default function Page() {
  return <PageClient />;
}
