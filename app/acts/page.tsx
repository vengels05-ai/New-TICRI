import { createPageMetadata } from '@/lib/seo';

import PageClient from './PageClient';

export const metadata = createPageMetadata(
  "/acts/",
  "Acts of Congress: Federal Laws Explained",
  "Explore major Acts of Congress, their history, key provisions, and effects on civil rights, the economy, healthcare, and government power.",
);

export default function Page() {
  return <PageClient />;
}
