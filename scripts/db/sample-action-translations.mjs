import { execSql } from './psql.mjs';
import { explainActionPhrase } from '../../lib/congress-scanner/explainer.ts';

const limit = Number.parseInt(process.argv[2] ?? '25', 10);
const sampleSize = Math.min(Math.max(limit, 1), 50);

function main() {
  const sql = `
    SELECT COALESCE(json_agg(action_text ORDER BY action_text), '[]'::json)::text
    FROM (
      SELECT DISTINCT action_text
      FROM bill_actions
      WHERE action_text IS NOT NULL
        AND btrim(action_text) <> ''
      ORDER BY action_text
      LIMIT ${sampleSize}
    ) sampled;
  `;

  const raw = execSql(sql).trim();
  const actionTexts = JSON.parse(raw);
  const translations = actionTexts.map((actionText) => ({
    actionText,
    ...explainActionPhrase(actionText),
  }));

  const mapped = translations.filter((item) => item.matchedRuleId !== null).length;
  const unmapped = translations.length - mapped;

  console.log(JSON.stringify({
    sampleSize: translations.length,
    mapped,
    unmapped,
    translations,
  }, null, 2));
}

main();
