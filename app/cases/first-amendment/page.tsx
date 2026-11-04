import { createPageMetadata } from '@/lib/seo';

import PageClient from './PageClient';

export const metadata = createPageMetadata(
  "/cases/first-amendment/",
  "Free Speech & Religion: Supreme Court Cases",
  "Explore landmark Supreme Court decisions about free speech & religion, with summaries, constitutional context, and original opinions.",
);

export default function Page() {
  return <PageClient />;
}
