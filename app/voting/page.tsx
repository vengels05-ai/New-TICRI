import { createPageMetadata } from '@/lib/seo';

import PageClient from './PageClient';

export const metadata = createPageMetadata(
  "/voting/",
  "How Your Vote Works in a Constitutional Republic",
  "Explore how voting delegates power to representatives, shapes institutions, and influences government decisions in a constitutional republic.",
);

export default function Page() {
  return <PageClient />;
}
