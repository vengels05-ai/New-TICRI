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

### Redirect www to the preferred host — completed directly

The tested `services/www-redirect` Worker is deployed on `www.ticri.org/*` using the existing Wrangler OAuth login. Public checks confirmed HTTP 301 to the apex for both the homepage and a nested opinion URL with its complete query string. POST and other non-GET/HEAD requests use HTTP 308 to preserve their bodies.

| Setting | Value |
| --- | --- |
| Source | `www.ticri.org` |
| Target | `https://ticri.org` |
| Status | `301` |
| Preserve query string | On |
| Subpath matching | On |
| Preserve path suffix | On |

There were no existing Worker routes before deployment. No DNS changes were needed. The apex sitemap still returns HTTP 200 with 375 URLs.

Pages `_redirects` does not support domain-level matching. The existing login lacked ruleset-editing permissions but had Worker and route permissions, so a narrowly scoped Worker provided the direct alternative. See [Worker routing](https://developers.cloudflare.com/workers/configuration/routing/routes/) and the service README for validation and rollback.

### Notify participating search engines directly

IndexNow can verify domain ownership using the public `indexnow-key.txt` file instead of an account connection. After that file is live, run:

```sh
npm run seo:notify
npm run seo:notify -- --submit
```

The first command previews the canonical URLs from the live sitemap. The second sends them to the IndexNow API used by Bing and other participating search engines. The script verifies the deployed key, rejects URLs on other hosts, and reports the actual response status. The verification key is intentionally public and is not a private account credential. See [IndexNow documentation](https://www.indexnow.org/documentation).

### Submit and inspect the sitemap

Google can discover the live sitemap through the existing robots.txt declaration. Formal submission and indexing reports in [Google Search Console](https://support.google.com/webmasters/answer/7451001) still require the owner's Google sign-in or an API token with the `webmasters` scope. There are no existing Google CLI credentials on this machine. This needs no ChatGPT plugin, but authentication cannot be replaced by a public endpoint. IndexNow does not submit URLs to Google.

After the follow-up deploys, inspect the homepage, First Amendment, a state constitution, and `/cases/opinions/brown-v-board-of-education-1954/`. Confirm the chosen canonical, rendered content, and indexability. Inspect a nonexistent opinion slug to confirm HTTP 404. Record Search Console impressions, clicks, and landing pages as the starting point for measuring discovery.

No analytics tracker or third-party account connection has been installed. Site-wide legal-content review and mobile performance measurement remain additional work.
