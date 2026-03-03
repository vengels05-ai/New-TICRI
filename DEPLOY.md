# Congress Scanner Deploy

## Architecture

TICRI deploys in two parts:

- Cloudflare Pages serves the static Next.js export
- Cloudflare Worker serves the Congress Scanner API

The frontend must call the Worker through:

- `NEXT_PUBLIC_CONGRESS_API_BASE`

No Next.js `app/api/**` routes are used in production.

## Before you start

You need:

- a Cloudflare account with access to Workers, D1, and Pages
- Node.js installed locally
- the repository checked out locally

The Worker project is here:

- [/Users/vengels/ticri-nextjs/services/congress-worker](/Users/vengels/ticri-nextjs/services/congress-worker)

## One-time setup

### 1. Install Worker dependencies

```bash
cd /Users/vengels/ticri-nextjs/services/congress-worker
npm install
```

### 2. Log in to Cloudflare from Wrangler

```bash
npx wrangler login
```

This opens a browser window and connects Wrangler to your Cloudflare account.

### 3. Create the D1 database

```bash
npx wrangler d1 create ticri-congress
```

Cloudflare will print a `database_id`.

You must copy that value into:

- [/Users/vengels/ticri-nextjs/services/congress-worker/wrangler.toml](/Users/vengels/ticri-nextjs/services/congress-worker/wrangler.toml)

Replace this placeholder:

```toml
database_id = "00000000-0000-0000-0000-000000000001"
```

with the real ID from the command output.

This is required before deployment.

### 4. Apply D1 migrations to Cloudflare

```bash
cd /Users/vengels/ticri-nextjs/services/congress-worker
npm run db:d1:migrate:remote
```

This creates the `bills`, `bill_actions`, `ingest_checkpoints`, and search tables/indexes in the remote D1 database.

### 5. Set Worker secrets

Set the required secrets in Cloudflare:

```bash
cd /Users/vengels/ticri-nextjs/services/congress-worker
npx wrangler secret put CONGRESS_API_KEY
npx wrangler secret put CONGRESS_ADMIN_TOKEN
```

Secrets:

- `CONGRESS_API_KEY`: your Congress.gov API key
- `CONGRESS_ADMIN_TOKEN`: protects admin-only ingest and backfill endpoints

Do not put either of these in `NEXT_PUBLIC_*`.

## Deploy the Worker

From the Worker project:

```bash
cd /Users/vengels/ticri-nextjs/services/congress-worker
npm run deploy
```

This runs:

```bash
wrangler deploy
```

After deploy, Wrangler will print the Worker URL.

Example:

- `https://ticri-congress-worker.<your-subdomain>.workers.dev`

## Optional: add a custom domain

In Cloudflare, you can route the Worker to a domain such as:

- `https://api.ticri.org`

That is the recommended production setup.

If you do this, use the custom domain URL as the frontend API base.

## Configure Cloudflare Pages

Your Pages site is static only. It must call the Worker directly.

In the Cloudflare Pages project settings, add this environment variable:

- `NEXT_PUBLIC_CONGRESS_API_BASE=https://api.ticri.org`

If you are not using a custom domain yet, use the default `workers.dev` URL instead.

This is the only Congress Scanner variable that should be browser-visible.

Do not set:

- `CONGRESS_API_KEY`
- `CONGRESS_ADMIN_TOKEN`

as `NEXT_PUBLIC_*` variables.

## Cron schedule

The Worker already includes a Cron Trigger in:

- [/Users/vengels/ticri-nextjs/services/congress-worker/wrangler.toml](/Users/vengels/ticri-nextjs/services/congress-worker/wrangler.toml)

Current schedule:

```toml
[triggers]
crons = ["*/30 * * * *"]
```

That means the recent-ingest job is scheduled every 30 minutes.

After the Worker is deployed, Cloudflare will register this schedule automatically.

The repo currently ships with:

- `CONGRESS_INGEST_ENABLED="false"`

This is intentional for first deployment safety. Turn it on only after you have set a valid `CONGRESS_API_KEY` secret and you are ready for scheduled ingestion.

## One-time backfill

Backfill is intentionally guarded.

To run it safely:

1. Confirm `CONGRESS_BACKFILL_ENABLED` is set to `"true"` in `wrangler.toml`
2. Keep `CONGRESS_BACKFILL_ALLOW_PRODUCTION` as `"false"` unless you explicitly want production backfill
3. Use the admin token
4. Include the explicit confirm value

Example:

```bash
curl -X POST \
  -H "Authorization: Bearer YOUR_ADMIN_TOKEN" \
  "https://api.ticri.org/admin/congress/backfill?congress=119&maxPages=5&confirm=I_UNDERSTAND_BACKFILL"
```

Check status:

```bash
curl \
  -H "Authorization: Bearer YOUR_ADMIN_TOKEN" \
  "https://api.ticri.org/admin/congress/backfill/status?congress=119"
```

## First data load

The Worker can deploy before it has live bill data.

To load real data after deploy:

1. set `CONGRESS_API_KEY` as a Worker secret
2. set `CONGRESS_ADMIN_TOKEN` as a Worker secret
3. temporarily set `CONGRESS_INGEST_ENABLED="true"` in `wrangler.toml`
4. redeploy the Worker
5. trigger a one-time recent ingest:

```bash
curl -X POST \
  -H "Authorization: Bearer YOUR_ADMIN_TOKEN" \
  "https://api.ticri.org/admin/congress/ingest/recent"
```

After that, the scheduled cron can keep the data fresh.

## Smoke checks after deploy

Use a search request first. The database may be empty until you ingest data.

Run these against the deployed Worker:

```bash
curl "https://api.ticri.org/congress/search?from=2026-02-01&to=2026-02-27&q=water"
```

Expected result:

- HTTP `200`
- JSON response with `items`, `pagination`, and `filters`

After data is loaded, take one bill from the search results and request:

```bash
curl "https://api.ticri.org/congress/bill/{congress}/{type}/{number}"
curl "https://api.ticri.org/congress/bill/{congress}/{type}/{number}/actions"
```

Then verify the static frontend is pointed at the Worker:

- `NEXT_PUBLIC_CONGRESS_API_BASE` is set in Pages
- the Congress Scanner pages load results from the Worker

## First deployment checklist

1. `npx wrangler login`
2. `npx wrangler d1 create ticri-congress`
3. Replace the placeholder `database_id` in `wrangler.toml`
4. `npm run db:d1:migrate:remote`
5. `npx wrangler secret put CONGRESS_API_KEY`
6. `npx wrangler secret put CONGRESS_ADMIN_TOKEN`
7. `npm run deploy`
8. Set `NEXT_PUBLIC_CONGRESS_API_BASE` in Cloudflare Pages
9. Redeploy the static Pages site
10. Trigger one manual ingest
11. Run the smoke checks
