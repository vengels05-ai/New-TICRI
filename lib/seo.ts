import type { Metadata } from 'next';

export const SITE_URL = 'https://ticri.org';
export const SITE_NAME = 'TICRI';
export const SITE_DESCRIPTION = 'Understand the U.S. Constitution, your rights, Supreme Court cases, federal laws, and government in plain English.';

// These routes are readers that need query parameters or unfinished placeholders.
// Give individual records their own rendered URLs before adding them to the sitemap.
export const NON_INDEXABLE_PATHS = new Set([
  '/acts/bill/',
  '/acts/index/',
  '/cases/opinion/',
  '/executive-orders/order/',
  '/truth-and-law/',
  '/us-code/section/',
]);

export function canonicalUrl(path: string): string {
  const pathname = path.split(/[?#]/)[0];
  return new URL(pathname === '/' ? '/' : `/${pathname.replace(/^\/+|\/+$/g, '')}/`, SITE_URL).href;
}

export function createPageMetadata(path: string, title: string, description: string): Metadata {
  const url = canonicalUrl(path);
  const index = !NON_INDEXABLE_PATHS.has(new URL(url).pathname);
  const pageTitle = `${title} | ${SITE_NAME}`;

  return {
    title: pageTitle,
    description,
    alternates: { canonical: url },
    robots: { index, follow: true },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_US',
      type: 'website',
      images: [{ url: '/TICRI.png', width: 1024, height: 1024, alt: 'TICRI logo' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
      images: ['/TICRI.png'],
    },
  };
}
