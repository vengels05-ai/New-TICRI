import { createPageMetadata } from '@/lib/seo';

import PageClient from './PageClient';

export const metadata = createPageMetadata(
  "/contact/",
  "Contact TICRI",
  "Contact TICRI with questions, feedback, corrections, or suggestions about our Constitution and civic education resources.",
);

export default function Page() {
  return <PageClient />;
}
