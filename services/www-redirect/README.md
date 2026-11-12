# TICRI www redirect

This Worker serves only the `www.ticri.org/*` route. It redirects GET/HEAD requests to `https://ticri.org` with HTTP 301 and preserves paths and query strings. Other methods use HTTP 308 to preserve request bodies. An unexpected hostname receives HTTP 404, preventing loops or arbitrary destinations.

It uses the existing Cloudflare account and requires no secrets, database, or ChatGPT connection. The apex website and contact function remain served by Pages.

Validate and deploy from the repository root:

```sh
node --test tests/www-redirect.test.mjs
wrangler deploy --config services/www-redirect/wrangler.jsonc --dry-run
wrangler deploy --config services/www-redirect/wrangler.jsonc
```

Verify the status and Location header for both `/` and a nested path with a query. To return www traffic to the underlying Pages site, remove this Worker's `www.ticri.org/*` route in the Cloudflare account.
