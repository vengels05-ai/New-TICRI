import { createPageMetadata } from '@/lib/seo';

import PageClient from './PageClient';

export const metadata = createPageMetadata(
  "/acts/bill/",
  "Congressional Bill Reader",
  "Read bill details and legislative text from the TICRI federal legislation library.",
);

export default function Page() {
  return <PageClient />;
}
