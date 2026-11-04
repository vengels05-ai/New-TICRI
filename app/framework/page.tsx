import { createPageMetadata } from '@/lib/seo';

import PageClient from './PageClient';

export const metadata = createPageMetadata(
  "/framework/",
  "Constitutional Rights, Powers, Checks & Balances",
  "Explore TICRI’s text-based overview of constitutional rights, enumerated government powers, and checks and balances.",
);

export default function Page() {
  return <PageClient />;
}
