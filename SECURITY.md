# Congress Scanner Security

## Scope

This file documents security controls for the Cloudflare Worker Congress Scanner API:

- `GET /congress/search`
- `GET /congress/bill/{congress}/{type}/{number}`
- `GET /congress/bill/{congress}/{type}/{number}/actions`
- admin ingestion/backfill endpoints under `/admin/congress/*`

## Input validation and limits

`/congress/search` enforces:

- ISO date format for `from` and `to` (`YYYY-MM-DD`)
- max date range (`MAX_DATE_RANGE_DAYS`, default `366`)
- max keyword length for `q` (`MAX_KEYWORD_LENGTH`, default `200`)
- pagination default (`SEARCH_DEFAULT_LIMIT`, default `20`)
- pagination max (`SEARCH_MAX_LIMIT`, default `100`)
- numeric validation for `page` and `congress`
- chamber/type validation

Bill detail/action routes enforce strict numeric/type path validation.

## Rate limiting

Search endpoint rate limiting:

- enabled by default: `CONGRESS_SEARCH_RATE_LIMIT_ENABLED=true`
- default window: `CONGRESS_SEARCH_RATE_LIMIT_WINDOW_MS=60000`
- default max: `CONGRESS_SEARCH_RATE_LIMIT_MAX=30`
- keyed by first available client signal:
  - `x-forwarded-for`
  - `cf-connecting-ip`
  - `x-real-ip`
  - fallback `anonymous`

When limited, API returns `429` with `Retry-After`.

## CORS allowlist

CORS is allowlisted by `CORS_ALLOWED_ORIGINS` and should contain TICRI domains only.

Recommended production value:

```env
CORS_ALLOWED_ORIGINS=https://ticri.org,https://www.ticri.org
```

Requests with a browser `Origin` not in this list are rejected with `403`.

## Secret safety

Secrets used by this module include:

- `DATABASE_URL`
- `CONGRESS_API_KEY`
- `CONGRESS_ADMIN_TOKEN`

Controls:

- secrets are loaded from Worker environment/secret storage
- secret values are never returned in API error bodies
- secret values are never intentionally logged by request logging
- internal errors return generic response text: `Internal server error.`

## Admin endpoint guardrails

Admin endpoints require bearer token auth using `CONGRESS_ADMIN_TOKEN`.

Backfill additionally requires:

- `CONGRESS_BACKFILL_ENABLED=true`
- confirmation query `confirm=I_UNDERSTAND_BACKFILL`
- per-run cap via `CONGRESS_BACKFILL_MAX_PAGES_PER_RUN`
- production guardrail unless `CONGRESS_BACKFILL_ALLOW_PRODUCTION=true`

## Logging defaults

- `CONGRESS_REQUEST_LOGGING_ENABLED=false`
- `CONGRESS_REQUEST_LOG_INCLUDE_QUERY=false`

This keeps user query strings out of logs by default.
