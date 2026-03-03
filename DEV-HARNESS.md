# Congress Scanner Dev Harness

TICRI deploys as:

- static frontend on Cloudflare Pages
- Cloudflare Worker backend for Congress Scanner
- Cloudflare D1 for Worker persistence

This local workflow does not require Postgres, Docker, or `psql`.

## Terminal A: prepare D1 and run the Worker

```bash
cd /Users/vengels/ticri-nextjs/services/congress-worker
cp .dev.vars.example .dev.vars
# edit .dev.vars with CONGRESS_API_KEY (and optional CONGRESS_ADMIN_TOKEN)
npm install
npm run db:d1:migrate
npm run db:d1:seed
npm run dev -- --port 8787
```

Expected local Worker base URL:

- `http://127.0.0.1:8787`

## Terminal B: run the frontend locally

Point the frontend at the local Worker and run the UI with `next dev` for local testing:

```bash
cd /Users/vengels/ticri-nextjs
export NEXT_PUBLIC_CONGRESS_API_BASE=http://127.0.0.1:8787
export CONGRESS_API_BASE=http://127.0.0.1:8787
npm run dev -- --hostname 127.0.0.1 --port 3100
```

Production remains static export; `next dev` is only for local UI testing.

## Terminal B: run contract + smoke tests

With the Worker running in Terminal A:

```bash
cd /Users/vengels/ticri-nextjs
export NEXT_PUBLIC_CONGRESS_API_BASE=http://127.0.0.1:8787
export CONGRESS_API_BASE=http://127.0.0.1:8787
npm run test:api-contract
npm run test:e2e:smoke
npm run congress:worker:smoke
```

## Root-level convenience scripts

From repo root, these wrappers call the Worker project scripts:

```bash
npm run db:d1:migrate
npm run db:d1:seed
npm run worker:dev
npm run smoke:local
```

## Deterministic end-to-end local sequence

1. Terminal A:

```bash
cd /Users/vengels/ticri-nextjs
npm run db:d1:migrate
npm run db:d1:seed
npm run worker:dev
```

2. Terminal B:

```bash
cd /Users/vengels/ticri-nextjs
export NEXT_PUBLIC_CONGRESS_API_BASE=http://127.0.0.1:8787
export CONGRESS_API_BASE=http://127.0.0.1:8787
npm run test:api-contract
npm run congress:worker:smoke
npm run test:e2e:smoke
```
