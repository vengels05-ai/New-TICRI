import { createPageMetadata } from '@/lib/seo';

import PageClient from './PageClient';

export const metadata = createPageMetadata(
  "/state-powers/",
  "State Powers & the Expansion of Federal Authority",
  "Explore state sovereignty, the Tenth Amendment, enumerated federal powers, and the historical expansion of federal authority.",
);

export default function Page() {
  return <PageClient />;
}
