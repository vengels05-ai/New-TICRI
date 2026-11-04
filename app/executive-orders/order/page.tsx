import { createPageMetadata } from '@/lib/seo';

import PageClient from './PageClient';

export const metadata = createPageMetadata(
  "/executive-orders/order/",
  "Executive Order Reader",
  "Read presidential executive order records and available source text in TICRI.",
);

export default function Page() {
  return <PageClient />;
}
