# Congress Scanner Plan

## Repository Assessment
- Framework: Next.js App Router (TypeScript), `next@16.1.0`.
- Package manager: npm (`package-lock.json` present).
- Existing API routes:
  - `app/api/contact/route.ts` (Next route handler)
  - `functions/api/contact.js` (Cloudflare Pages Function)
- Database usage: none detected (no ORM/DB client packages or DB config files).
- Deployment targets:
  - Static export enabled in `next.config.ts` (`output: 'export'`)
  - Cloudflare Pages/Functions usage documented and present.
- CI: no repo-level CI workflow detected (`.github/workflows` absent).

## Concrete Decision
Implement Congress Scanner **inside this repository** as:
1. A new Next.js app route for UI under `app/congress-scanner/`.
2. A new internal service layer under `lib/congress-scanner/` for API client + normalization.
3. Build/ingest scripts under `scripts/congress/` that fetch from official machine-readable sources and write local JSON into `data/congress-scanner/`.

Do **not** create a separate service at this stage.

## Why This Decision
- The site is already structured as one Next.js codebase with static content generation.
- `output: 'export'` favors pre-generated local datasets over runtime backend dependence.
- Keeping scanner ingest + UI in-repo simplifies deployment to Cloudflare Pages and GitHub workflow.
- A separate service adds operational complexity without clear need for current requirements.

## Constraints To Enforce
- No AI APIs in production.
- No AI-generated summaries.
- No scraping congress.gov HTML.
- Use official machine-readable sources only (Congress.gov API, optionally GovInfo bulk).
- No analytics scripts for this module.
- No user accounts required.
- Do not store user search queries by default.

## Initial Implementation Shape
- UI routes:
  - `app/congress-scanner/page.tsx`
  - `app/congress-scanner/[billId]/page.tsx`
- Service code:
  - `lib/congress-scanner/congressApi.ts`
  - `lib/congress-scanner/normalize.ts`
  - `lib/congress-scanner/types.ts`
  - `lib/congress-scanner/loadLocalData.ts`
- Data ingest/build:
  - `scripts/congress/ingest-congress-api.ts`
  - `scripts/congress/build-index.ts`
  - `data/congress-scanner/*.json`
