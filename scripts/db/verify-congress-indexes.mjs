import { execSql } from './psql.mjs';

const EXPECTED_INDEXES = [
  'members_full_name_trgm_idx',
  'members_normalized_name_idx',
  'bills_bill_lookup_idx',
  'bills_introduced_date_idx',
  'bills_latest_action_date_idx',
  'bills_sponsor_member_id_idx',
  'bills_search_vector_idx',
  'bills_bill_id_display_trgm_idx',
  'bills_latest_action_text_trgm_idx',
  'bill_actions_bill_latest_idx',
  'bill_actions_action_date_idx',
  'bill_actions_search_vector_idx',
  'bill_actions_action_text_trgm_idx',
  'bill_actions_idempotent_upsert_idx',
  'bill_members_member_role_idx',
  'bill_members_bill_id_idx',
];

function main() {
  const sql = `
    SELECT COALESCE(json_agg(indexname ORDER BY indexname), '[]'::json)::text
    FROM pg_indexes
    WHERE schemaname = 'public'
      AND indexname = ANY (ARRAY[${EXPECTED_INDEXES.map((name) => `'${name}'`).join(', ')}]);
  `;

  const output = execSql(sql).trim();
  const foundIndexes = JSON.parse(output);
  const foundSet = new Set(foundIndexes);
  const missing = EXPECTED_INDEXES.filter((indexName) => !foundSet.has(indexName));

  const payload = {
    checkedAt: new Date().toISOString(),
    expected: EXPECTED_INDEXES.length,
    found: foundIndexes.length,
    missing,
  };

  if (missing.length > 0) {
    console.error(JSON.stringify(payload, null, 2));
    process.exit(1);
  }

  console.log(JSON.stringify(payload, null, 2));
}

main();
