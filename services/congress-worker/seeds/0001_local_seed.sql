DELETE FROM bill_actions;
DELETE FROM bills;
DELETE FROM ingest_checkpoints;
DELETE FROM sqlite_sequence WHERE name IN ('bills', 'bill_actions');

INSERT INTO bills (
  congress,
  bill_type,
  bill_number,
  bill_id_display,
  title,
  summary,
  introduced_date,
  latest_action_date,
  latest_action_text,
  origin_chamber,
  sponsor_name,
  member_names_json,
  member_names_text,
  raw_upstream
) VALUES (
  119,
  'hr',
  1001,
  'H.R. 1001',
  'Clean Water Restoration Act',
  'A demonstration bill for local D1-backed Congress Scanner development.',
  '2026-02-20',
  '2026-02-24',
  'Referred to the House Committee on Energy and Commerce.',
  'House',
  'Alice Monroe',
  '["Alice Monroe"]',
  'Alice Monroe',
  '{}'
);

INSERT INTO bill_actions (
  bill_id,
  action_date,
  action_time,
  action_code,
  action_text,
  chamber,
  source,
  sequence,
  raw_upstream
) VALUES
  (1, '2026-02-20', '2026-02-20T15:00:00Z', 'INTRO', 'Introduced in House', 'House', 'Congress.gov', 1, '{}'),
  (1, '2026-02-24', '2026-02-24T16:00:00Z', 'REF', 'Referred to the House Committee on Energy and Commerce.', 'House', 'Congress.gov', 2, '{}'),
  (1, '2026-02-25', '2026-02-25T14:30:00Z', 'SUB', 'Referred to House Subcommittee on Water Resources.', 'House', 'Congress.gov', 3, '{}');
