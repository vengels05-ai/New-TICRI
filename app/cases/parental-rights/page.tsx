import { createPageMetadata } from '@/lib/seo';

import PageClient from './PageClient';

export const metadata = createPageMetadata(
  "/cases/parental-rights/",
  "Parents & Family Rights: Supreme Court Cases",
  "Explore landmark Supreme Court decisions about parents & family rights, with summaries, constitutional context, and original opinions.",
);

export default function Page() {
  return <PageClient />;
}
