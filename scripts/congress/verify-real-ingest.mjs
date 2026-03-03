import { spawnSync } from 'node:child_process';
import { ingestBillCollection, ingestRecentBills } from '../../lib/congress-scanner/ingestRecentBills.mjs';
import { getCongressServerConfig } from '../../lib/congress-scanner/config.ts';
import { execSql } from '../db/psql.mjs';

const RESET_GUARD = 'INGEST_VERIFY_ALLOW_RESET';
const DEFAULT_WINDOW_DAYS = 7;

async function main() {
  ensurePrerequisites();

  const args = parseArgs(process.argv.slice(2));
  const windowDays = args.windowDays ?? Number.parseInt(String(process.env.CONGRESS_INGEST_WINDOW_DAYS ?? DEFAULT_WINDOW_DAYS), 10);
  const congress = args.congress ?? Number.parseInt(String(process.env.CONGRESS_INGEST_CONGRESS ?? 119), 10);

  if (String(process.env[RESET_GUARD] ?? '').toLowerCase() !== 'true') {
    throw new Error(`Set ${RESET_GUARD}=true to allow truncating Congress Scanner tables for verification.`);
  }

  await import('../db/migrate.mjs');
  resetScannerTables();

  const firstRun = await ingestRecentBills({
    congress,
    windowDays,
  });

  if ((firstRun.selectedBills ?? 0) < 1) {
    throw new Error(`Real ingest selected 0 bills for congress ${congress} in the last ${windowDays} days. Widen the window and retry.`);
  }

  const firstCounts = queryJson(`
    SELECT json_build_object(
      'bills', (SELECT COUNT(*) FROM bills),
      'actions', (SELECT COUNT(*) FROM bill_actions),
      'members', (SELECT COUNT(*) FROM members),
      'bills_with_raw_upstream', (SELECT COUNT(*) FROM bills WHERE raw_upstream <> '{}'::jsonb),
      'actions_with_raw_upstream', (SELECT COUNT(*) FROM bill_actions WHERE raw_upstream <> '{}'::jsonb),
      'bill_updated_at', (
        SELECT COALESCE(
          json_object_agg(id::text, updated_at ORDER BY id),
          '{}'::json
        )
        FROM bills
      )
    )::text;
  `);

  const secondRun = await ingestRecentBills({
    congress,
    windowDays,
  });

  const secondCounts = queryJson(`
    SELECT json_build_object(
      'bills', (SELECT COUNT(*) FROM bills),
      'actions', (SELECT COUNT(*) FROM bill_actions),
      'members', (SELECT COUNT(*) FROM members),
      'bills_with_raw_upstream', (SELECT COUNT(*) FROM bills WHERE raw_upstream <> '{}'::jsonb),
      'actions_with_raw_upstream', (SELECT COUNT(*) FROM bill_actions WHERE raw_upstream <> '{}'::jsonb),
      'bill_updated_at', (
        SELECT COALESCE(
          json_object_agg(id::text, updated_at ORDER BY id),
          '{}'::json
        )
        FROM bills
      )
    )::text;
  `);

  assertEqualCounts(firstCounts, secondCounts, ['bills', 'actions', 'members', 'bills_with_raw_upstream', 'actions_with_raw_upstream']);
  assertUpdatedTimestampsAdvanced(firstCounts.bill_updated_at, secondCounts.bill_updated_at);

  const missingFieldSmoke = await runMissingFieldSmoke(congress);

  console.log(JSON.stringify({
    congress,
    windowDays,
    firstRun,
    secondRun,
    firstCounts,
    secondCounts,
    missingFieldSmoke,
  }, null, 2));
}

function ensurePrerequisites() {
  getCongressServerConfig();

  if (!commandExists('psql')) {
    throw new Error('Real-ingest verification requires psql on PATH because ingestion writes through the psql-based DB runner.');
  }
}

function parseArgs(args) {
  const parsed = {};

  for (const arg of args) {
    if (arg.startsWith('--windowDays=')) {
      parsed.windowDays = Number.parseInt(arg.slice('--windowDays='.length), 10);
    } else if (arg.startsWith('--congress=')) {
      parsed.congress = Number.parseInt(arg.slice('--congress='.length), 10);
    }
  }

  return parsed;
}

function resetScannerTables() {
  execSql('TRUNCATE TABLE bill_members, bill_actions, bills, members RESTART IDENTITY CASCADE;');
}

function queryJson(sql) {
  const output = execSql(sql).trim();
  if (!output) {
    return null;
  }

  return JSON.parse(output);
}

function assertEqualCounts(first, second, keys) {
  for (const key of keys) {
    if (first[key] !== second[key]) {
      throw new Error(`Expected ${key} to remain unchanged after second ingest run. First=${first[key]} Second=${second[key]}`);
    }
  }
}

function assertUpdatedTimestampsAdvanced(firstMap, secondMap) {
  const ids = Object.keys(firstMap ?? {});
  if (ids.length === 0) {
    throw new Error('Expected at least one stored bill to verify updated_at behavior.');
  }

  const advanced = ids.some((id) => {
    const first = Date.parse(firstMap[id]);
    const second = Date.parse(secondMap?.[id]);
    return Number.isFinite(first) && Number.isFinite(second) && second >= first;
  });

  if (!advanced) {
    throw new Error('Expected at least one bill updated_at timestamp to be preserved or advanced on second ingest run.');
  }
}

async function runMissingFieldSmoke(congress) {
  const syntheticBillNumber = 999999;
  const client = {
    async getAllBillActions() {
      return [
        {
          actionDate: null,
          text: 'This action should be skipped because the date is missing.',
          sourceSystem: { name: 'Congress.gov' },
        },
        {
          actionDate: '2026-02-25',
          text: null,
          chamber: null,
          sourceSystem: {},
        },
      ];
    },
  };

  const result = await ingestBillCollection([
    {
      congress,
      type: 'hr',
      number: String(syntheticBillNumber),
      title: null,
      introducedDate: null,
      latestAction: {},
      sponsor: {},
    },
  ], {
    congress,
    client,
    maxPages: 1,
  });

  const stored = queryJson(`
    SELECT json_build_object(
      'bill_exists', EXISTS (
        SELECT 1 FROM bills WHERE congress = ${congress} AND bill_type = 'hr' AND bill_number = ${syntheticBillNumber}
      ),
      'stored_actions', (
        SELECT COUNT(*)
        FROM bill_actions ba
        JOIN bills b ON b.id = ba.bill_id
        WHERE b.congress = ${congress}
          AND b.bill_type = 'hr'
          AND b.bill_number = ${syntheticBillNumber}
      ),
      'placeholder_action_text', (
        SELECT action_text
        FROM bill_actions ba
        JOIN bills b ON b.id = ba.bill_id
        WHERE b.congress = ${congress}
          AND b.bill_type = 'hr'
          AND b.bill_number = ${syntheticBillNumber}
        LIMIT 1
      ),
      'bill_raw_upstream_present', (
        SELECT raw_upstream <> '{}'::jsonb
        FROM bills
        WHERE congress = ${congress}
          AND bill_type = 'hr'
          AND bill_number = ${syntheticBillNumber}
      ),
      'action_raw_upstream_present', (
        SELECT raw_upstream <> '{}'::jsonb
        FROM bill_actions ba
        JOIN bills b ON b.id = ba.bill_id
        WHERE b.congress = ${congress}
          AND b.bill_type = 'hr'
          AND b.bill_number = ${syntheticBillNumber}
        LIMIT 1
      )
    )::text;
  `);

  if (!stored.bill_exists) {
    throw new Error('Missing-field smoke check did not persist the synthetic bill.');
  }

  if (stored.stored_actions !== 1) {
    throw new Error(`Expected 1 stored synthetic action after skipping the invalid one, found ${stored.stored_actions}.`);
  }

  if (stored.placeholder_action_text !== '[missing action text]') {
    throw new Error(`Expected placeholder action text for missing field smoke check, found ${stored.placeholder_action_text}.`);
  }

  if (!stored.bill_raw_upstream_present || !stored.action_raw_upstream_present) {
    throw new Error('Missing-field smoke check did not preserve raw_upstream traceability.');
  }

  return {
    ingestResult: result,
    stored,
  };
}

function commandExists(command) {
  const result = spawnSync('sh', ['-lc', `command -v ${command}`], {
    encoding: 'utf8',
  });
  return result.status === 0;
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
