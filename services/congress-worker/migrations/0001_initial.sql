CREATE TABLE IF NOT EXISTS bills (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  congress INTEGER NOT NULL,
  bill_type TEXT NOT NULL,
  bill_number INTEGER NOT NULL,
  bill_id_display TEXT NOT NULL,
  title TEXT NOT NULL,
  summary TEXT,
  introduced_date TEXT,
  latest_action_date TEXT,
  latest_action_text TEXT,
  origin_chamber TEXT,
  sponsor_name TEXT,
  member_names_json TEXT NOT NULL DEFAULT '[]',
  member_names_text TEXT NOT NULL DEFAULT '',
  raw_upstream TEXT NOT NULL DEFAULT '{}',
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (congress, bill_type, bill_number)
);

CREATE INDEX IF NOT EXISTS bills_lookup_idx
  ON bills (congress, bill_type, bill_number);

CREATE INDEX IF NOT EXISTS bills_latest_action_date_idx
  ON bills (latest_action_date DESC);

CREATE INDEX IF NOT EXISTS bills_bill_id_display_idx
  ON bills (bill_id_display);

CREATE INDEX IF NOT EXISTS bills_sponsor_name_idx
  ON bills (sponsor_name);

CREATE INDEX IF NOT EXISTS bills_member_names_text_idx
  ON bills (member_names_text);

CREATE TABLE IF NOT EXISTS bill_actions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  bill_id INTEGER NOT NULL,
  action_date TEXT NOT NULL,
  action_time TEXT,
  action_code TEXT,
  action_text TEXT NOT NULL,
  chamber TEXT,
  source TEXT,
  sequence INTEGER NOT NULL DEFAULT 0,
  raw_upstream TEXT NOT NULL DEFAULT '{}',
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (bill_id, action_date, sequence, action_text),
  FOREIGN KEY (bill_id) REFERENCES bills(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS bill_actions_bill_latest_idx
  ON bill_actions (bill_id, action_date DESC, sequence DESC, id DESC);

CREATE INDEX IF NOT EXISTS bill_actions_action_date_idx
  ON bill_actions (action_date);

CREATE TABLE IF NOT EXISTS ingest_checkpoints (
  checkpoint_key TEXT PRIMARY KEY,
  payload TEXT NOT NULL DEFAULT '{}',
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS ingest_checkpoints_updated_at_idx
  ON ingest_checkpoints (updated_at DESC);

CREATE VIRTUAL TABLE IF NOT EXISTS bills_fts USING fts5(
  title,
  summary,
  latest_action_text,
  sponsor_name,
  member_names_text,
  bill_id_display,
  content='bills',
  content_rowid='id'
);

CREATE TRIGGER IF NOT EXISTS bills_ai AFTER INSERT ON bills BEGIN
  INSERT INTO bills_fts(rowid, title, summary, latest_action_text, sponsor_name, member_names_text, bill_id_display)
  VALUES (new.id, new.title, coalesce(new.summary, ''), coalesce(new.latest_action_text, ''), coalesce(new.sponsor_name, ''), coalesce(new.member_names_text, ''), coalesce(new.bill_id_display, ''));
END;

CREATE TRIGGER IF NOT EXISTS bills_ad AFTER DELETE ON bills BEGIN
  INSERT INTO bills_fts(bills_fts, rowid, title, summary, latest_action_text, sponsor_name, member_names_text, bill_id_display)
  VALUES ('delete', old.id, old.title, coalesce(old.summary, ''), coalesce(old.latest_action_text, ''), coalesce(old.sponsor_name, ''), coalesce(old.member_names_text, ''), coalesce(old.bill_id_display, ''));
END;

CREATE TRIGGER IF NOT EXISTS bills_au AFTER UPDATE ON bills BEGIN
  INSERT INTO bills_fts(bills_fts, rowid, title, summary, latest_action_text, sponsor_name, member_names_text, bill_id_display)
  VALUES ('delete', old.id, old.title, coalesce(old.summary, ''), coalesce(old.latest_action_text, ''), coalesce(old.sponsor_name, ''), coalesce(old.member_names_text, ''), coalesce(old.bill_id_display, ''));
  INSERT INTO bills_fts(rowid, title, summary, latest_action_text, sponsor_name, member_names_text, bill_id_display)
  VALUES (new.id, new.title, coalesce(new.summary, ''), coalesce(new.latest_action_text, ''), coalesce(new.sponsor_name, ''), coalesce(new.member_names_text, ''), coalesce(new.bill_id_display, ''));
END;
