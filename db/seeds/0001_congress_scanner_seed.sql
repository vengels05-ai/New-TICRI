INSERT INTO members (bioguide_id, full_name)
VALUES
  ('D000624', 'Suzan K. DelBene'),
  ('J000299', 'Hakeem S. Jeffries')
ON CONFLICT (bioguide_id) DO UPDATE
SET full_name = EXCLUDED.full_name;

INSERT INTO bills (
  congress,
  bill_type,
  bill_number,
  title,
  summary,
  introduced_date,
  sponsor_member_id
)
SELECT
  119,
  'hr',
  1001,
  'Congress Scanner Demonstration Act',
  'Demonstration bill used to validate local Postgres schema and search indexes.',
  DATE '2026-02-20',
  m.id
FROM members m
WHERE m.bioguide_id = 'D000624'
ON CONFLICT (congress, bill_type, bill_number) DO UPDATE
SET
  title = EXCLUDED.title,
  summary = EXCLUDED.summary,
  introduced_date = EXCLUDED.introduced_date,
  sponsor_member_id = EXCLUDED.sponsor_member_id;

INSERT INTO bill_members (bill_id, member_id, role, joined_at)
SELECT b.id, m.id, 'sponsor', DATE '2026-02-20'
FROM bills b
JOIN members m ON m.bioguide_id = 'D000624'
WHERE b.congress = 119 AND b.bill_type = 'hr' AND b.bill_number = 1001
ON CONFLICT (bill_id, member_id, role) DO NOTHING;

INSERT INTO bill_members (bill_id, member_id, role, joined_at)
SELECT b.id, m.id, 'cosponsor', DATE '2026-02-22'
FROM bills b
JOIN members m ON m.bioguide_id = 'J000299'
WHERE b.congress = 119 AND b.bill_type = 'hr' AND b.bill_number = 1001
ON CONFLICT (bill_id, member_id, role) DO NOTHING;

INSERT INTO bill_actions (bill_id, action_date, action_code, action_text, chamber, sequence)
SELECT b.id, DATE '2026-02-20', 'INTRODUCED', 'Introduced in House', 'House', 1
FROM bills b
WHERE b.congress = 119 AND b.bill_type = 'hr' AND b.bill_number = 1001
AND NOT EXISTS (
  SELECT 1
  FROM bill_actions a
  WHERE a.bill_id = b.id
    AND a.action_date = DATE '2026-02-20'
    AND a.sequence = 1
);

INSERT INTO bill_actions (bill_id, action_date, action_code, action_text, chamber, sequence)
SELECT b.id, DATE '2026-02-24', 'REFERRED', 'Referred to the House Committee on Oversight and Government Reform.', 'House', 2
FROM bills b
WHERE b.congress = 119 AND b.bill_type = 'hr' AND b.bill_number = 1001
AND NOT EXISTS (
  SELECT 1
  FROM bill_actions a
  WHERE a.bill_id = b.id
    AND a.action_date = DATE '2026-02-24'
    AND a.sequence = 2
);
