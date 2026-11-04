import { createPageMetadata } from '@/lib/seo';

import PageClient from './PageClient';

export const metadata = createPageMetadata(
  "/spending/",
  "Federal Spending & Debt",
  "Follow the long arc of federal borrowing, deficits, public spending, and real economic growth using primary economic data served through TheSource.",
);

export default function Page() {
  return <PageClient />;
}
