DROP INDEX IF EXISTS bills_search_vector_idx;

ALTER TABLE bills
  DROP COLUMN IF EXISTS search_vector;

ALTER TABLE bills
  ADD COLUMN search_vector TSVECTOR GENERATED ALWAYS AS (
    setweight(to_tsvector('english', coalesce(title, '')), 'A') ||
    setweight(to_tsvector('english', coalesce(summary, '')), 'B') ||
    setweight(to_tsvector('english', coalesce(latest_action_text, '')), 'C')
  ) STORED;

CREATE INDEX IF NOT EXISTS bills_search_vector_idx
  ON bills USING GIN (search_vector);
