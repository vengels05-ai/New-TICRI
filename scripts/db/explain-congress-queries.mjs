import { execSql } from './psql.mjs';

const QUERIES = [
  {
    id: 'bill_lookup',
    description: 'Point lookup by congress, type, and bill number.',
    sql: `
      EXPLAIN (ANALYZE, BUFFERS)
      SELECT b.id, b.bill_id_display, b.title, b.latest_action_date
      FROM bills b
      WHERE b.congress = 119
        AND b.bill_type = 'hr'
        AND b.bill_number = 1001;
    `,
  },
  {
    id: 'recent_activity_range',
    description: 'Recent activity by latest_action_date with deterministic ordering.',
    sql: `
      EXPLAIN (ANALYZE, BUFFERS)
      SELECT b.bill_id_display, b.title, b.latest_action_date
      FROM bills b
      WHERE b.latest_action_date >= DATE '2026-02-01'
        AND b.latest_action_date <= DATE '2026-02-28'
      ORDER BY b.latest_action_date DESC NULLS LAST, b.congress DESC, b.bill_type ASC, b.bill_number DESC
      LIMIT 20;
    `,
  },
  {
    id: 'keyword_search',
    description: 'Keyword search using bill search_vector ranking and title/summary/latest-action weighting.',
    sql: `
      EXPLAIN (ANALYZE, BUFFERS)
      WITH query AS (
        SELECT websearch_to_tsquery('english', 'oversight') AS ts_query
      )
      SELECT
        b.bill_id_display,
        b.title,
        ts_rank_cd(b.search_vector, query.ts_query) AS rank
      FROM bills b, query
      WHERE b.search_vector @@ query.ts_query
      ORDER BY rank DESC, b.latest_action_date DESC NULLS LAST
      LIMIT 20;
    `,
  },
  {
    id: 'actions_timeline',
    description: 'Timeline query used by bill detail actions endpoint.',
    sql: `
      EXPLAIN (ANALYZE, BUFFERS)
      SELECT ba.action_date, ba.action_text
      FROM bill_actions ba
      JOIN bills b ON b.id = ba.bill_id
      WHERE b.congress = 119
        AND b.bill_type = 'hr'
        AND b.bill_number = 1001
      ORDER BY ba.action_date DESC, ba.sequence DESC, ba.id DESC;
    `,
  },
];

function main() {
  const plans = QUERIES.map((query) => ({
    id: query.id,
    description: query.description,
    plan: execSql(query.sql).trim().split('\n').map((line) => line.trim()).filter(Boolean),
  }));

  console.log(JSON.stringify({
    checkedAt: new Date().toISOString(),
    queries: plans,
  }, null, 2));
}

main();
