# TheSource Worker (TypeScript Source)

This folder contains a clean TypeScript version of the multi-database Cloudflare Worker.

## D1 bindings

- SCOTUS_DB -> thesource-scotus
- CONGRESS_DB -> thesource-congress
- LAW_DB -> thesource-law

## Security hardening included

- Explicit CORS allow-list via CORS_ALLOWED_ORIGINS (no wildcard by default)
- Generic 500 responses (no raw internal error leakage)
- Request ID attached to health and error responses
- Integer validation for query/path parameters
- Lightweight health checks (existence checks instead of full COUNT)

## Files

- src/index.ts: Worker implementation
- wrangler.toml.example: binding and variable template

## Deploy

1. Copy wrangler.toml.example to wrangler.toml.
2. Replace database IDs.
3. Deploy with Wrangler from this folder.
