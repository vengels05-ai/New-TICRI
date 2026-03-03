# Congress Scanner Privacy

## Scope

This document covers the Congress Scanner module running as:

- static TICRI frontend on Cloudflare Pages
- Congress Scanner API on Cloudflare Worker (`/congress/*`)

## What is logged by default

Default Worker behavior:

- `CONGRESS_REQUEST_LOGGING_ENABLED=false`
- `CONGRESS_REQUEST_LOG_INCLUDE_QUERY=false`

With defaults, the Worker does not emit per-request API logs for Congress Scanner routes.

## If request logging is enabled

If `CONGRESS_REQUEST_LOGGING_ENABLED=true`, one structured log line may be emitted per request with:

- `ts`
- `event`
- `route` (path only)
- `method`
- `status`
- `durationMs`
- `rateLimited`

Query strings are still excluded unless `CONGRESS_REQUEST_LOG_INCLUDE_QUERY=true`.

## What is never logged by this module

- `CONGRESS_API_KEY`
- `DATABASE_URL`
- `CONGRESS_ADMIN_TOKEN`
- request headers (including `Authorization`)
- cookies
- raw upstream Congress.gov payloads
- response payload bodies

## Public search query privacy

Public search terms are not logged by default.

To keep query logging fully disabled:

```env
CONGRESS_REQUEST_LOGGING_ENABLED=false
CONGRESS_REQUEST_LOG_INCLUDE_QUERY=false
```

## Data stored in the database

Congress Scanner stores legislative data and ingestion traceability, including:

- bills
- bill actions
- members and bill-member relationships
- raw upstream Congress.gov JSON in traceability columns
- ingestion checkpoints for resumable backfill

The module does not require user accounts or saved-search profiles.

## CORS and browser data flow

CORS is allowlisted to TICRI domains using `CORS_ALLOWED_ORIGINS`.
Requests from non-allowlisted browser origins are rejected.

## No analytics scripts

Congress Scanner pages are implemented to call only TICRI-owned API endpoints and include no third-party analytics scripts for this module.
