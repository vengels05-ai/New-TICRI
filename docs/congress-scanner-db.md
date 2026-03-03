# Congress Scanner Postgres Schema

This repo did not have an existing DB migration tool, so this implementation uses:
- SQL migration files in `db/migrations/`
- SQL seed files in `db/seeds/`
- Lightweight Node runners in `scripts/db/` that execute `psql`

## Local Requirements
- PostgreSQL running locally
- `psql` available on PATH
- required server env vars set in an untracked local env file or shell session:
  - `DATABASE_URL`
  - `CONGRESS_API_BASE_URL`
  - `CONGRESS_API_KEY`
  - example placeholders live in `.env.local.example`

## Commands
- `npm run db:migrate` applies pending files in `db/migrations`
- `npm run db:seed` applies migrations then seed files in `db/seeds`
- `npm run congress:ingest` ingests recently updated bills/actions
- `npm run congress:ingest:runner` runs the cron-friendly wrapper script
- `npm run congress:backfill -- --congress=119 --confirm-full-backfill` backfills an entire Congress with checkpointing
- `npm run test:integration:ingest` runs ingest integration test against local Postgres (`DATABASE_URL` required)

## Tables
- `members`: people tied to bills (sponsor/cosponsor)
- `bills`: canonical bill record, includes denormalized latest action fields
- `bill_actions`: timeline of actions for each bill
- `bill_members`: bill-to-member relation with role (`sponsor` or `cosponsor`)
- `schema_migrations`: tracks applied migration filenames

## Search-Driven Indexes
- Date range:
  - `bills_introduced_date_idx`
  - `bills_latest_action_date_idx`
  - `bill_actions_action_date_idx`
- Bill number:
  - `UNIQUE (congress, bill_type, bill_number)`
  - `bills_bill_lookup_idx`
  - `bills_bill_id_display_trgm_idx`
- Keyword:
  - `bills_search_vector_idx` (title + summary + latest action text)
  - `bill_actions_search_vector_idx` (action text)
- Sponsor/member name:
  - `members_full_name_trgm_idx`
  - `members_normalized_name_idx`
  - `bill_members_member_role_idx`
  - `bills_sponsor_member_id_idx`
- Latest action text:
  - `bills_latest_action_text_trgm_idx`

## Notes
- `bill_actions_refresh_latest_action` trigger keeps `bills.latest_action_date` and `bills.latest_action_text` in sync on action insert/update/delete.
- `pg_trgm` and `unaccent` extensions are created in migration `0001`.
- Migration `0002` adds traceability fields (`raw_upstream` JSONB) and ingestion columns (`origin_chamber`, `sponsor_name`, `source`) plus an idempotent action upsert index.

## Full Congress Backfill
- Backfill entrypoint: [backfill-congress.mjs](/Users/vengels/ticri-nextjs/scripts/congress/backfill-congress.mjs)
- Core implementation: [backfillCongress.mjs](/Users/vengels/ticri-nextjs/lib/congress-scanner/backfillCongress.mjs)
- Checkpoints are stored by default in `data/congress-scanner/checkpoints/`

### Example

```bash
npm run congress:backfill -- --congress=119 --confirm-full-backfill
```

### Resume behavior
- Each page writes a checkpoint file like `data/congress-scanner/checkpoints/backfill-119.json`
- Re-running the same command resumes from the saved `offset`
- On successful completion, the checkpoint file is removed by default
- Use `--keep-checkpoint` if you want to keep the final checkpoint file for inspection

### Safe defaults
- Full backfill is rate-limited separately from the recent-ingest job:
  - `CONGRESS_BACKFILL_THROTTLE_MS=500`
  - `CONGRESS_BACKFILL_INTER_PAGE_DELAY_MS=250`
- These defaults are intentionally conservative to reduce API pressure during large historical runs

### Guardrails
- A full backfill will not run unless `--confirm-full-backfill` is passed
- In `NODE_ENV=production`, full backfill is blocked unless `CONGRESS_BACKFILL_ALLOW_PRODUCTION=true`
- This is intended to prevent accidentally starting a large historical import in a production runtime

### Useful options
- `--congress=119`
- `--limit=250`
- `--maxPages=5000`
- `--throttleMs=500`
- `--interPageDelayMs=250`
- `--checkpointPath=/absolute/path/to/checkpoint.json`
- `--checkpointDir=/absolute/path/to/checkpoints`
- `--keep-checkpoint`

## Scheduled Runner
- Use [run-ingest-cron.sh](/Users/vengels/ticri-nextjs/scripts/congress/run-ingest-cron.sh) for cron or systemd.
- The wrapper:
  - changes into the repo root
  - loads an untracked local `.env.local` if present
  - runs the ingest job
  - exits nonzero if ingestion fails

## Sample Crontab
Run every day at 03:15:

```cron
15 3 * * * /Users/vengels/ticri-nextjs/scripts/congress/run-ingest-cron.sh >> /Users/vengels/ticri-nextjs/logs/congress-ingest.log 2>&1
```

If you prefer invoking through npm:

```cron
15 3 * * * cd /Users/vengels/ticri-nextjs && /opt/homebrew/bin/npm run congress:ingest:runner >> /Users/vengels/ticri-nextjs/logs/congress-ingest.log 2>&1
```

## Sample systemd Service
Create `/etc/systemd/system/ticri-congress-ingest.service`:

```ini
[Unit]
Description=TICRI Congress Scanner ingest job
After=network-online.target
Wants=network-online.target

[Service]
Type=oneshot
WorkingDirectory=/Users/vengels/ticri-nextjs
ExecStart=/Users/vengels/ticri-nextjs/scripts/congress/run-ingest-cron.sh
User=vengels
Group=staff
```

## Sample systemd Timer
Create `/etc/systemd/system/ticri-congress-ingest.timer`:

```ini
[Unit]
Description=Run TICRI Congress Scanner ingest daily

[Timer]
OnCalendar=*-*-* 03:15:00
Persistent=true
Unit=ticri-congress-ingest.service

[Install]
WantedBy=timers.target
```

Enable it with:

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now ticri-congress-ingest.timer
```
