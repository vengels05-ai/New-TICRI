CREATE TABLE IF NOT EXISTS ingest_checkpoints (
  checkpoint_key TEXT PRIMARY KEY,
  payload JSONB NOT NULL DEFAULT '{}'::jsonb,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS ingest_checkpoints_updated_at_idx
  ON ingest_checkpoints (updated_at DESC);
