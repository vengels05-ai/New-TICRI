import { createPageMetadata } from '@/lib/seo';

import PageClient from './PageClient';

export const metadata = createPageMetadata(
  "/federal-funding/",
  "Federal Funding, Central Banking & Government Power",
  "Explore the history of federal funding, central banking, and the financial systems that shape relationships between federal and state governments.",
);

export default function Page() {
  return <PageClient />;
}
