# SEO rollout status

## Published foundation

Commit `19fb14253f` was pushed to `main`. A public deployment check confirmed:

- `https://ticri.org/sitemap.xml` returns HTTP 200 with 319 URLs.
- `https://ticri.org/robots.txt` declares that sitemap.
- The First Amendment page serves its new title and non-www canonical URL.

## Opinion library

The follow-up adds `/cases/opinions/` and 55 individual opinion pages under `/cases/opinions/[slug]/`.

Each page includes all plain text available in the verified local record in its initial HTML, its decision date, an original CourtListener source link, and a link to the related plain-English explainer. The pages explicitly identify possible excerpts; they do not claim every local text is complete. The 55 explainers now link to these pages, and the cases directory and case search link to the library.

The sitemap expands to 375 indexable pages (381 public pages including the six excluded readers/placeholders). The new pages include canonical and social metadata, WebPage structured data, and breadcrumbs. The build audit checks that opinion text is not clipped to a client reader’s initial chunk.

Only verified entries in `data/scotus/curated-mapping.json` are published. `lib/curatedOpinionSources.ts` contains explicit source paths to prevent the build from tracing the entire case corpus. When adding a verified opinion, add its source to that allowlist as well; the regression test checks that all verified mappings are represented.

The existing generic readers remain available for the broader live datasets. Expanding record-specific pages to additional cases, bills, executive orders, and U.S. Code sections requires verified, substantive source records and review of static build limits.

## Remaining account actions

### Redirect www to the preferred host

The live www host still serves pages without redirecting. Set a permanent host redirect in the Cloudflare account, following [Cloudflare’s www-to-apex guide](https://developers.cloudflare.com/pages/how-to/www-redirect/):

| Setting | Value |
| --- | --- |
| Source | `www.ticri.org` |
| Target | `https://ticri.org` |
| Status | `301` |
| Preserve query string | On |
| Subpath matching | On |
| Preserve path suffix | On |

Check any existing redirects before enabling a new rule. Verify both the homepage and a nested URL with query parameters. The existing www host already resolves; changing its DNS is not necessary just to add a matching redirect rule.

Pages `_redirects` does not support domain-level matching, so adding an absolute source host to that file would not fix this. See [supported Pages redirects](https://developers.cloudflare.com/pages/configuration/redirects/). The saved Wrangler login does not include redirect-rule editing permissions, and the browser account connection was unavailable; this account action has not been performed.

### Submit and inspect the sitemap

In the verified `ticri.org` property, submit `https://ticri.org/sitemap.xml` in [Google Search Console](https://support.google.com/webmasters/answer/7451001) and [Bing Webmaster Tools](https://www2.bing.com/webmasters/help/sitemaps-3b5cf6ed). Ownership verification and submission require account access; neither submission has been performed in this chat.

After the follow-up deploys, inspect the homepage, First Amendment, a state constitution, and `/cases/opinions/brown-v-board-of-education-1954/`. Confirm the chosen canonical, rendered content, and indexability. Inspect a nonexistent opinion slug to confirm HTTP 404. Record Search Console impressions, clicks, and landing pages as the starting point for measuring discovery.

No analytics tracker or third-party account connection has been installed. Site-wide legal-content review and mobile performance measurement remain additional work.
