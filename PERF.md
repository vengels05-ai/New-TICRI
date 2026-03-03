# Congress Scanner Performance

## Current settings

- Bill detail API responses are cached server-side for `300` seconds in `/Users/vengels/ticri-nextjs/lib/congress-scanner/api.ts`.
- The bill detail page revalidates every `300` seconds in `/Users/vengels/ticri-nextjs/app/congress-scanner/[congress]/[type]/[number]/page.tsx`.
- Search pagination defaults to `20` results per page and caps at `100`.
- Upstream Congress.gov requests share a process-wide cache keyed by full request URL in `/Users/vengels/ticri-nextjs/lib/congress-scanner/congressApiClient.ts`.
- Bill search weighting is ordered explicitly in the database:
  - `title` = `A` (highest)
  - `summary` = `B`
  - `latest_action_text` = `C`
  - implemented by [0003_bill_search_weights.sql](/Users/vengels/ticri-nextjs/db/migrations/0003_bill_search_weights.sql)

## Local measurement

Command:

```bash
npm run congress:measure-cache
```

Observed output on this repo state:

```json
{
  "syntheticUpstreamDelayMs": 40,
  "fetchCount": 1,
  "coldDurationMs": 51.83,
  "warmDurationMs": 0.04,
  "cacheHitAvoidedNetwork": true
}
```

What that means:

- First request paid one mocked upstream fetch.
- Second request hit the shared cache from a separate client instance and avoided the network entirely.
- The warm path was effectively immediate in the same process.

This measurement is synthetic by design. It verifies cache behavior locally without calling Congress.gov.

## Reproduce locally

1. Run unit tests:

```bash
npm run test
```

2. Measure the shared upstream cache:

```bash
npm run congress:measure-cache
```

3. Verify the Congress Scanner indexes exist:

```bash
DATABASE_URL=postgres://postgres:postgres@localhost:5432/ticri npm run db:verify:indexes
```

4. Build a local dataset before running query plans:

```bash
DATABASE_URL=postgres://postgres:postgres@localhost:5432/ticri npm run db:migrate
DATABASE_URL=postgres://postgres:postgres@localhost:5432/ticri npm run db:seed
DATABASE_URL=postgres://postgres:postgres@localhost:5432/ticri npm run db:explain:congress
```

## Search ranking audit

The bill `tsvector` weights now match the intended deterministic ranking rule:

- `title`: highest weight
- `summary`: next
- `latest_action_text`: next

The current bill search SQL ranks against `bills.search_vector` and then takes the greater of that rank and the strongest matching action-text rank from `bill_actions`. That means:

- title hits should outrank summary-only hits
- summary hits should outrank latest-action-only hits on the bill row
- a strong direct action-text match from `bill_actions` can still surface a bill because the query intentionally considers both bill metadata and stored action text

## Index coverage

Indexes supporting date-range and keyword search are present in the schema:

- date range:
  - `bills_introduced_date_idx`
  - `bills_latest_action_date_idx`
  - `bill_actions_action_date_idx`
- keyword / full-text:
  - `bills_search_vector_idx`
  - `bill_actions_search_vector_idx`
- supporting lookup / detail:
  - `bills_bill_lookup_idx`
  - `bill_actions_bill_latest_idx`

## EXPLAIN helper

Command:

```bash
DATABASE_URL=postgres://postgres:postgres@localhost:5432/ticri npm run db:explain:congress
```

The helper runs `EXPLAIN (ANALYZE, BUFFERS)` for these representative queries:

- bill lookup
- recent activity date-range search
- keyword search
- action timeline

## EXPLAIN guidance

Bill lookup should use `bills_bill_lookup_idx` and the action timeline should use `bill_actions_bill_latest_idx`.

```sql
EXPLAIN (ANALYZE, BUFFERS)
SELECT b.id, b.bill_id_display, b.title, b.latest_action_date
FROM bills b
WHERE b.congress = 119
  AND b.bill_type = 'hr'
  AND b.bill_number = 1001;
```

```sql
EXPLAIN (ANALYZE, BUFFERS)
SELECT ba.action_date, ba.action_text
FROM bill_actions ba
JOIN bills b ON b.id = ba.bill_id
WHERE b.congress = 119
  AND b.bill_type = 'hr'
  AND b.bill_number = 1001
ORDER BY ba.action_date DESC, ba.sequence DESC, ba.id DESC;
```

Keyword search should use `bills_search_vector_idx` and, when action text matches, `bill_actions_search_vector_idx`.

```sql
EXPLAIN (ANALYZE, BUFFERS)
WITH query AS (
  SELECT websearch_to_tsquery('english', 'oversight') AS ts_query
)
SELECT b.bill_id_display, b.title
FROM bills b, query
WHERE b.search_vector @@ query.ts_query
ORDER BY ts_rank_cd(b.search_vector, query.ts_query) DESC
LIMIT 20;
```

Healthy plans should show `Index Scan`, `Bitmap Index Scan`, or `Bitmap Heap Scan` on the named indexes above. If you see `Seq Scan` on `bills` or `bill_actions` for these queries after loading data, check:

- the index exists with `npm run db:verify:indexes`
- the query shape still matches the indexed columns
- `ANALYZE` has been run after large ingests

## Slowest queries

Measured top-3 query timings are not recorded yet in this environment because `psql` and a runnable local Postgres were not available here, so `npm run db:explain:congress` could not be executed end to end.

Based on the current SQL shape, the three queries most likely to dominate runtime are:

1. Keyword search:
   - why: full-text ranking, lateral action match lookup, and final sort
   - current fix: `bills_search_vector_idx`, `bill_actions_search_vector_idx`, capped pagination
   - next fix if needed: precompute more ranking fields or reduce lateral action lookup cost
2. Recent activity date-range search:
   - why: range filter plus ordered result set over `latest_action_date`
   - current fix: `bills_latest_action_date_idx`
   - next fix if needed: cover additional sort columns with a composite index if the dataset grows materially
3. Action timeline:
   - why: join back to the bill plus ordered action history
   - current fix: `bill_actions_bill_latest_idx`
   - next fix if needed: narrow selected columns further or cache hot bill timelines longer
