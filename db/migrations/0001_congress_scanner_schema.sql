CREATE EXTENSION IF NOT EXISTS pg_trgm;
CREATE EXTENSION IF NOT EXISTS unaccent;

CREATE TABLE IF NOT EXISTS members (
  id BIGSERIAL PRIMARY KEY,
  bioguide_id TEXT UNIQUE,
  full_name TEXT NOT NULL,
  normalized_name TEXT GENERATED ALWAYS AS (lower(unaccent(full_name))) STORED,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS members_full_name_trgm_idx
  ON members USING GIN (full_name gin_trgm_ops);

CREATE INDEX IF NOT EXISTS members_normalized_name_idx
  ON members (normalized_name);

CREATE TABLE IF NOT EXISTS bills (
  id BIGSERIAL PRIMARY KEY,
  congress SMALLINT NOT NULL CHECK (congress > 0),
  bill_type VARCHAR(12) NOT NULL,
  bill_number INTEGER NOT NULL CHECK (bill_number > 0),
  bill_id_display TEXT GENERATED ALWAYS AS (upper(bill_type) || ' ' || bill_number::TEXT) STORED,
  title TEXT NOT NULL,
  summary TEXT,
  introduced_date DATE,
  sponsor_member_id BIGINT REFERENCES members(id) ON DELETE SET NULL,
  latest_action_date DATE,
  latest_action_text TEXT,
  search_vector TSVECTOR GENERATED ALWAYS AS (
    setweight(to_tsvector('english', coalesce(title, '')), 'A') ||
    setweight(to_tsvector('english', coalesce(summary, '')), 'B') ||
    setweight(to_tsvector('english', coalesce(latest_action_text, '')), 'A')
  ) STORED,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (congress, bill_type, bill_number)
);

CREATE INDEX IF NOT EXISTS bills_bill_lookup_idx
  ON bills (congress, bill_type, bill_number);

CREATE INDEX IF NOT EXISTS bills_introduced_date_idx
  ON bills (introduced_date);

CREATE INDEX IF NOT EXISTS bills_latest_action_date_idx
  ON bills (latest_action_date DESC);

CREATE INDEX IF NOT EXISTS bills_sponsor_member_id_idx
  ON bills (sponsor_member_id);

CREATE INDEX IF NOT EXISTS bills_search_vector_idx
  ON bills USING GIN (search_vector);

CREATE INDEX IF NOT EXISTS bills_bill_id_display_trgm_idx
  ON bills USING GIN (bill_id_display gin_trgm_ops);

CREATE INDEX IF NOT EXISTS bills_latest_action_text_trgm_idx
  ON bills USING GIN (latest_action_text gin_trgm_ops);

CREATE TABLE IF NOT EXISTS bill_actions (
  id BIGSERIAL PRIMARY KEY,
  bill_id BIGINT NOT NULL REFERENCES bills(id) ON DELETE CASCADE,
  action_date DATE NOT NULL,
  action_time TIMESTAMPTZ,
  action_code TEXT,
  action_text TEXT NOT NULL,
  chamber VARCHAR(20),
  sequence INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  search_vector TSVECTOR GENERATED ALWAYS AS (
    setweight(to_tsvector('english', coalesce(action_text, '')), 'A')
  ) STORED
);

CREATE INDEX IF NOT EXISTS bill_actions_bill_latest_idx
  ON bill_actions (bill_id, action_date DESC, sequence DESC, id DESC);

CREATE INDEX IF NOT EXISTS bill_actions_action_date_idx
  ON bill_actions (action_date);

CREATE INDEX IF NOT EXISTS bill_actions_search_vector_idx
  ON bill_actions USING GIN (search_vector);

CREATE INDEX IF NOT EXISTS bill_actions_action_text_trgm_idx
  ON bill_actions USING GIN (action_text gin_trgm_ops);

CREATE TABLE IF NOT EXISTS bill_members (
  bill_id BIGINT NOT NULL REFERENCES bills(id) ON DELETE CASCADE,
  member_id BIGINT NOT NULL REFERENCES members(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('sponsor', 'cosponsor')),
  joined_at DATE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (bill_id, member_id, role)
);

CREATE INDEX IF NOT EXISTS bill_members_member_role_idx
  ON bill_members (member_id, role, bill_id);

CREATE INDEX IF NOT EXISTS bill_members_bill_id_idx
  ON bill_members (bill_id);

CREATE OR REPLACE FUNCTION set_bills_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS bills_set_updated_at ON bills;

CREATE TRIGGER bills_set_updated_at
BEFORE UPDATE ON bills
FOR EACH ROW
EXECUTE FUNCTION set_bills_updated_at();

CREATE OR REPLACE FUNCTION refresh_latest_action_for_bill(target_bill_id BIGINT)
RETURNS VOID AS $$
DECLARE
  latest_action_record RECORD;
BEGIN
  SELECT action_date, action_text
  INTO latest_action_record
  FROM bill_actions
  WHERE bill_id = target_bill_id
  ORDER BY action_date DESC, sequence DESC, id DESC
  LIMIT 1;

  UPDATE bills
  SET latest_action_date = latest_action_record.action_date,
      latest_action_text = latest_action_record.action_text
  WHERE id = target_bill_id;

  IF NOT FOUND THEN
    UPDATE bills
    SET latest_action_date = NULL,
        latest_action_text = NULL
    WHERE id = target_bill_id;
  END IF;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION bill_actions_refresh_latest_action_trg()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'DELETE' THEN
    PERFORM refresh_latest_action_for_bill(OLD.bill_id);
    RETURN OLD;
  END IF;

  PERFORM refresh_latest_action_for_bill(NEW.bill_id);

  IF TG_OP = 'UPDATE' AND OLD.bill_id <> NEW.bill_id THEN
    PERFORM refresh_latest_action_for_bill(OLD.bill_id);
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS bill_actions_refresh_latest_action ON bill_actions;

CREATE TRIGGER bill_actions_refresh_latest_action
AFTER INSERT OR UPDATE OF bill_id, action_date, action_text, sequence OR DELETE ON bill_actions
FOR EACH ROW
EXECUTE FUNCTION bill_actions_refresh_latest_action_trg();
