# Congress Scanner Verification Checklist

## Current audit findings

- Audit date: February 27, 2026
- Repo-wide string scan for `openai`, `codex`, `gemini`, `anthropic`, `llm`, `prompt`, `model`, `generative`, and `ai studio` found no deployed Congress Scanner runtime code using AI APIs or AI SDKs.
- `package.json` dependencies and devDependencies contain no AI SDK packages.
- `package-lock.json` contains no AI SDK package names or AI API endpoint references.
- Client-side Congress Scanner code calls only TICRI-owned Congress Scanner API endpoints under `NEXT_PUBLIC_CONGRESS_API_BASE` (separate Worker).
- No outbound client-side calls to OpenAI, Anthropic, Gemini, Google AI Studio, OpenRouter, Hugging Face, or similar AI endpoints were found.
- The only audit hits for AI-related terms were documentation checklist language in this repo, not deployed application logic.
- No AI-related runtime code or dependencies needed removal during this audit.

## 1. No-AI audit

- Verify no OpenAI or other AI SDK is required by the Congress Scanner runtime.
- Verify no deployed Congress Scanner route or page calls any external AI API.
- Verify deterministic explainer output comes only from stored bill metadata and actions.
- Verify no AI-generated summaries are stored or rendered.
- Verify UI calls only TICRI-owned endpoints.
- Verify ingestion uses official machine-readable sources only.
- Verify no Congress.gov HTML scraping is used.

## 2. Secrets audit

- Verify `CONGRESS_API_KEY` is provided only through environment variables or the hosting platform secret manager.
- Verify `DATABASE_URL` is provided only through environment variables or the hosting platform secret manager.
- Verify no `NEXT_PUBLIC_` variable exposes `CONGRESS_API_KEY`, `DATABASE_URL`, or other secrets.
- Verify `CONGRESS_API_KEY` remains server-only.
- Verify `.env.local.example` contains placeholders only, not real secrets.
- Verify `.env.local` stays gitignored and untracked.
- Verify no secrets appear in committed docs, logs, tests, or scripts.
- Verify request logging does not emit API keys, DB URLs, cookies, or auth headers.

## 3. DB migration test

- Run `npm run db:migrate` against a local Postgres instance.
- Verify all migrations apply cleanly on an empty database.
- Verify rerunning migrations is safe and does not fail on already-applied files.
- Run `npm run db:verify:indexes`.
- Verify the index check returns exit code `0` and no missing indexes.

Exact commands:

```bash
# Preferred: ephemeral Docker-backed verification database
npm run db:verify:migrations

# Fallback: dedicated local database you allow the verifier to reset
export DATABASE_URL=postgres://postgres:postgres@localhost:5432/ticri_verify
export DB_VERIFY_ALLOW_RESET=true
npm run db:verify:migrations
```

Expected behavior:

- first migration run applies pending files
- second migration run prints `No pending migrations.`
- smoke query confirms required tables exist
- index verification confirms required indexes exist
- migration tracking count matches the number of SQL migration files

## 4. Ingestion idempotency test

- Run `npm run test:integration:ingest` with `DATABASE_URL` set.
- Verify ingest upserts bills idempotently.
- Verify ingest upserts actions idempotently.
- Verify raw upstream JSON is stored in the traceability columns.
- Verify missing upstream fields do not break ingestion.

Exact commands:

```bash
# Real upstream verification against a dedicated local DB that may be truncated
export DATABASE_URL=postgres://postgres:postgres@localhost:5432/ticri_verify
export INGEST_VERIFY_ALLOW_RESET=true
export CONGRESS_API_BASE_URL=https://api.congress.gov/v3
export CONGRESS_API_KEY=your-congress-api-key
npm run congress:verify:real-ingest
```

Expected behavior:

- first real ingest run inserts bills and actions for a recent 2-7 day window
- second real ingest run keeps bill/action/member counts unchanged
- at least one bill `updated_at` timestamp is preserved or advanced on the second run
- stored `raw_upstream` JSON is present on bills and actions
- a missing-field smoke case completes without crashing and stores placeholder/default-safe values where intended

Latest run result in this environment:

- not completed end to end
- blocker: no `psql` binary is installed on PATH here, and no local Postgres environment was available to target

## 5. API contract tests

- Run `npm run test:api-contract` against a running Worker instance.
- Verify search endpoint tests pass.
- Verify bill detail endpoint tests pass.
- Verify bill actions endpoint tests pass.
- Verify request logging and rate limiting tests pass.
- Verify response shapes remain stable for success and error cases.

Example commands:

```bash
curl -s "http://127.0.0.1:8787/congress/search?congress=119"
curl -s "http://127.0.0.1:8787/congress/search?from=2026-02-27&to=2026-02-20"
curl -s "http://127.0.0.1:8787/congress/bill/119/hr/1001"
curl -s "http://127.0.0.1:8787/congress/bill/119/hr/1001/actions"
```

Two-terminal local workflow:

```bash
# Terminal A
cd /Users/vengels/ticri-nextjs/services/congress-worker
cp .dev.vars.example .dev.vars
# edit .dev.vars with DATABASE_URL + CONGRESS_API_KEY
npm install
npm run dev
```

```bash
# Terminal B
cd /Users/vengels/ticri-nextjs
export CONGRESS_API_BASE=http://127.0.0.1:8787
npm run test:api-contract
```

Expected successful search shape:

```json
{
  "data": {
    "items": [],
    "total": 0,
    "page": 1,
    "pageSize": 20,
    "totalPages": 1,
    "query": {
      "from": null,
      "to": null,
      "q": null,
      "member": null,
      "sponsor": null,
      "bill": null,
      "type": null,
      "chamber": null,
      "congress": 119,
      "page": 1,
      "limit": 20
    }
  }
}
```

Expected 400 error shape for invalid input:

```json
{
  "error": {
    "code": "invalid_query",
    "message": "from must be before or equal to to.",
    "details": {
      "parameter": "from"
    }
  }
}
```

Expected bill detail shape:

```json
{
  "data": {
    "bill": {
      "congress": 119,
      "type": "hr",
      "number": 1001,
      "billId": "H.R. 1001"
    },
    "statusCard": {
      "currentStage": "committee"
    }
  }
}
```

Expected bill actions shape:

```json
{
  "data": {
    "bill": {
      "congress": 119,
      "type": "hr",
      "number": 1001,
      "billId": "H.R. 1001"
    },
    "actions": []
  }
}
```

Validation points:

- invalid dates return `400`
- invalid date ranges return `400`
- date ranges larger than `366` days return `400`
- oversized query fields return `400`
- default search limit is `20`
- max search limit is capped at `100`
- path params reject invalid congress/type/number values with `400`
- SQL execution uses parameter maps passed to the Postgres executor, not string interpolation from request input

## 5a. Deterministic action translator

- Sample `25` to `50` distinct `bill_actions.action_text` values from the local DB.
- Generate deterministic plain-English output for each sampled action.
- Review unmapped strings and add only conservative pattern rules that do not infer more than the original action text states.
- Verify unmapped actions use the literal fallback format:
  - `Recorded action (not yet mapped): ...`
- Verify status-card output only uses stored bill metadata and stored actions.

Exact commands:

```bash
export DATABASE_URL=postgres://postgres:postgres@localhost:5432/ticri_verify
npm run db:migrate
npm run db:seed
node scripts/db/sample-action-translations.mjs 25
```

Current coverage summary:

- core stages covered: introduced, committee referral/reporting, calendar placement/readings, passed chamber, agreed, sent to president, became law, vetoed, stalled
- added conservative patterns for:
  - chamber receipt + read-twice + committee referral
  - subcommittee referral
  - ordered to be reported
  - committee markup/consideration sessions
  - first/second/third reading
  - passed/agreed actions with procedural wording
  - motion to reconsider laid on the table
- fallback remains literal and does not invent meaning

Current limitation in this environment:

- real DB sampling has not been completed here because no local `psql`/database runtime is available in this host session

## 6. UI behavior tests

- Verify `/congress-scanner` loads and renders filters, results, empty state, loading state, and error state.
- Verify bill detail page renders metadata, action timeline, and deterministic status card.
- Verify search pagination controls behave correctly.
- Verify navigation links from header and footer reach Congress Scanner.
- Verify UI fetches only `${NEXT_PUBLIC_CONGRESS_API_BASE}/congress/...` endpoints.
- Verify basic accessibility: labeled form controls, keyboard focus, and live-region behavior.
- Run the Playwright fixture-mode suite:

```bash
npm run test:e2e
```

Expected Playwright coverage:

- search filters return results through the configured Worker base `${NEXT_PUBLIC_CONGRESS_API_BASE}/congress/search`
- no-match keyword search renders the empty state with readable guidance
- pagination advances from page 1 to page 2 and back using keyboard focus + Enter
- clicking `Clean Water Restoration Act` opens `/congress-scanner/119/hr/1001`
- clicking `Clean Water Restoration Act` opens `/congress-scanner/bill?congress=119&type=hr&number=1001`
- bill detail renders semantic headings for metadata, action timeline, and plain-English status
- timeline renders in chronological order:
  - `Introduced in House`
  - `Referred to the House Committee on Energy and Commerce.`
  - `Referred to House Subcommittee on Water Resources.`
- invalid date range shows a readable error state:
  - heading: `Search unavailable`
  - message: `from must be before or equal to to.`

Current note:

- the Playwright config starts `next dev` on `127.0.0.1:3100`
- set `CONGRESS_API_BASE` (default `http://127.0.0.1:8787`) so Playwright injects `NEXT_PUBLIC_CONGRESS_API_BASE` for the app under test
- static export remains enabled in `next.config.ts` for all builds

Latest run result:

- `npm run test:e2e`: passed locally on February 27, 2026 (`4 passed`)

Two-terminal local workflow:

```bash
# Terminal A
cd /Users/vengels/ticri-nextjs/services/congress-worker
npm run dev
```

```bash
# Terminal B
cd /Users/vengels/ticri-nextjs
export CONGRESS_API_BASE=http://127.0.0.1:8787
npm run test:e2e
```

Smoke workflow (two terminals):

```bash
# Terminal A
cd /Users/vengels/ticri-nextjs/services/congress-worker
npm run dev
```

```bash
# Terminal B
cd /Users/vengels/ticri-nextjs
export CONGRESS_API_BASE=http://127.0.0.1:8787
npm run smoke
```

## 7. Performance checks

- Run `npm run congress:measure-cache`.
- Verify the shared upstream cache avoids a second network request for identical URLs.
- Verify search pagination defaults to `20` and clamps to `100`.
- Verify search responses use `Cache-Control: private, no-store`.
- Verify bill detail responses use server-side caching and revalidation.
- Verify bill detail and actions responses use `Cache-Control: public, max-age=300, stale-while-revalidate=900`.
- Run `npm run db:explain:congress` on migrated + seeded data.
- Run representative `EXPLAIN (ANALYZE, BUFFERS)` queries from `PERF.md`.
- Verify expected indexes are used for bill lookup, action timeline, and keyword search.

Exact commands:

```bash
export DATABASE_URL=postgres://postgres:postgres@localhost:5432/ticri_verify
npm run db:migrate
npm run db:seed
npm run db:verify:indexes
npm run db:explain:congress
```

## 8. Privacy logging checks

- Verify `CONGRESS_API_REQUEST_LOGGING_ENABLED=false` by default.
- Verify `CONGRESS_API_INCLUDE_QUERY_IN_LOGS=false` by default.
- Verify no Congress Scanner request logs are emitted when logging is disabled.
- If request logging is enabled temporarily, verify query strings are still omitted unless explicitly enabled.
- Verify request logs exclude API keys, auth headers, database URLs, and raw upstream payload fields.
- Verify rate limiting works without logging client IP addresses.

## 9. Public search limits

- Verify search rate limiting is enabled by default and keyed by the first available client identifier header.
- Verify search rate limit default is `30` requests per `60` seconds per client.
- Verify public text inputs (`q`, `member`, `sponsor`, `bill`) are capped at `200` characters.
- Verify public date ranges are capped at `366` days.
- Verify upstream Congress.gov requests are throttled and reused from the shared URL-keyed cache when identical.

## 10. Deployment dry run

- Review `DEPLOY.md`.
- Verify required environment variables are documented and available.
- Verify migration, ingest, rollback, and smoke-test steps are complete and current.
- Perform a local or staging dry run of the documented deployment sequence.
- Verify the “no AI in production” checklist item is explicitly checked off before release.
- Verify the current runtime architecture supports the Congress Scanner API routes before deploy.

Staging checklist:

- staging secrets contain `DATABASE_URL`, `CONGRESS_API_BASE_URL`, and `CONGRESS_API_KEY`
- privacy defaults remain enabled:
  - `CONGRESS_API_REQUEST_LOGGING_ENABLED=false`
  - `CONGRESS_API_INCLUDE_QUERY_IN_LOGS=false`
- `npm run db:migrate` succeeds on staging
- `npm run db:verify:indexes` reports no missing indexes
- `npm run congress:ingest` succeeds once against staging
- `npm run smoke` passes
- staging search/detail/actions endpoints return JSON and expected cache headers
- `/congress-scanner` UI renders search, results, and detail flows without third-party scripts

Success criteria:

- no migration or ingest failures
- no 5xx responses on staging smoke endpoints
- smoke command exits `0`
- minimal Playwright UI smoke test exits `0`
- no request-query logging when the privacy flags remain off

## 11. Final Cloudflare Pages + Worker smoke checklist

### Terminal A: run Worker locally

```bash
cd /Users/vengels/ticri-nextjs/services/congress-worker
cp .dev.vars.example .dev.vars
# edit .dev.vars with DATABASE_URL + CONGRESS_API_KEY (+ optional CONGRESS_ADMIN_TOKEN)
npm install
npm run dev
```

Default local Worker base URL:

- `http://127.0.0.1:8787`

### Terminal B: run TICRI site locally

Option 1 (recommended for local app tests): `next dev`

```bash
cd /Users/vengels/ticri-nextjs
export CONGRESS_API_BASE=http://127.0.0.1:8787
NEXT_PUBLIC_CONGRESS_API_BASE=$CONGRESS_API_BASE npm run dev -- --hostname 127.0.0.1 --port 3100
```

Option 2 (static export preview):

```bash
cd /Users/vengels/ticri-nextjs
npm run build
npx serve out -l 3100
```

### Run smoke commands (Terminal B)

```bash
cd /Users/vengels/ticri-nextjs
export CONGRESS_API_BASE=http://127.0.0.1:8787
npm run lint:congress-scanner
npm run test
npm run test:api-contract
npm run test:e2e:smoke
```

### Single helper script

`npm run smoke:static` prints the expected two-terminal setup and then runs:

- `npm run lint:congress-scanner`
- `npm run test`
- `npm run test:api-contract`
- `npm run test:e2e:smoke`

Note: `smoke:static` assumes Terminal A is already running `wrangler dev`.
