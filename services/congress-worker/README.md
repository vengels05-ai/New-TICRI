# TICRI Congress API Worker

Cloudflare Worker service for Congress Scanner API endpoints.

This Worker is deterministic only. It reads and writes legislative data using Cloudflare D1 and does not call AI models, LLM APIs, or any generative service.

## Endpoints

- `GET /congress/search`
- `GET /congress/bill/:congress/:type/:number`
- `GET /congress/bill/:congress/:type/:number/actions`
- `POST /admin/congress/ingest/recent`
- `POST /admin/congress/backfill`
- `GET /admin/congress/backfill/status`

## Storage choice

This Worker uses **Cloudflare D1** for local and deployed persistence.

## D1 local workflow

```bash
npm install
cp .dev.vars.example .dev.vars
# edit .dev.vars with CONGRESS_API_KEY
npm run db:d1:migrate
npm run db:d1:seed
npm run dev -- --port 8787
```

## Environment

Secrets:

```bash
wrangler secret put CONGRESS_API_KEY
wrangler secret put CONGRESS_ADMIN_TOKEN
```

D1 is configured via the `DB` binding in `wrangler.toml`.

## Search limits

- max date range: `366` days by default
- max keyword length: `200`
- default page size: `20`
- max page size: `100`
