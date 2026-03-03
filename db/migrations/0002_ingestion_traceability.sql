ALTER TABLE bills
  ADD COLUMN IF NOT EXISTS origin_chamber VARCHAR(20),
  ADD COLUMN IF NOT EXISTS sponsor_name TEXT,
  ADD COLUMN IF NOT EXISTS raw_upstream JSONB NOT NULL DEFAULT '{}'::jsonb;

ALTER TABLE bill_actions
  ADD COLUMN IF NOT EXISTS source TEXT,
  ADD COLUMN IF NOT EXISTS raw_upstream JSONB NOT NULL DEFAULT '{}'::jsonb;

CREATE UNIQUE INDEX IF NOT EXISTS bill_actions_idempotent_upsert_idx
  ON bill_actions (bill_id, action_date, sequence, action_text);
