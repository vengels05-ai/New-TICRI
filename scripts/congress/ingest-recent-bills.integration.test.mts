import test from 'node:test';
import assert from 'node:assert/strict';
import { ingestRecentBills } from '../../lib/congress-scanner/ingestRecentBills.mjs';
import { CongressApiClient } from '../../lib/congress-scanner/congressApiClient.ts';
import { execSql } from '../db/psql.mjs';

function jsonResponse(body, init = {}) {
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      ...init.headers,
    },
    ...init,
  });
}

function queryJson(sql) {
  const output = execSql(sql).trim();
  if (!output) {
    return null;
  }

  return JSON.parse(output);
}

test('ingestion upserts bills/actions idempotently and stores raw JSON', { timeout: 120000 }, async (t) => {
  if (!process.env.DATABASE_URL) {
    t.skip('Set DATABASE_URL to run Postgres integration test.');
    return;
  }

  await import('../db/migrate.mjs');

  execSql('TRUNCATE TABLE bill_members, bill_actions, bills, members RESTART IDENTITY CASCADE;');

  const fetchMock = async (input) => {
    const url = new URL(String(input));

    if (url.pathname.endsWith('/bill/119')) {
      return jsonResponse({
        bills: [
          {
            congress: 119,
            type: 'hr',
            number: '1001',
            title: 'Congress Scanner Demonstration Act',
            introducedDate: '2026-02-20',
            originChamber: 'House',
            latestAction: {
              actionDate: '2026-02-24',
              text: 'Referred to the House Committee on Oversight and Government Reform.',
            },
            sponsor: {
              bioguideId: 'D000624',
              fullName: 'Suzan K. DelBene',
            },
          },
        ],
        pagination: {
          next: null,
          count: 1,
        },
      });
    }

    if (url.pathname.endsWith('/bill/119/hr/1001/actions')) {
      return jsonResponse({
        actions: [
          {
            actionDate: '2026-02-20',
            actionTime: '2026-02-20T15:04:05Z',
            text: 'Introduced in House',
            chamber: 'House',
            sourceSystem: {
              name: 'House.gov',
              code: 'H',
            },
          },
          {
            actionDate: '2026-02-24',
            text: 'Referred to the House Committee on Oversight and Government Reform.',
            chamber: 'House',
            sourceSystem: {
              name: 'Congress.gov',
              code: 'C',
            },
          },
        ],
        pagination: {
          next: null,
          count: 2,
        },
      });
    }

    return new Response(JSON.stringify({ message: `Unexpected URL: ${url.toString()}` }), {
      status: 404,
      headers: { 'content-type': 'application/json' },
    });
  };

  const client = new CongressApiClient({
    baseUrl: 'https://api.congress.gov/v3',
    apiKey: 'test-key',
    throttleMs: 0,
    fetchFn: fetchMock,
  });

  const first = await ingestRecentBills({
    client,
    congress: 119,
    windowDays: 7,
    now: '2026-02-26T00:00:00Z',
    maxPages: 5,
  });

  const second = await ingestRecentBills({
    client,
    congress: 119,
    windowDays: 7,
    now: '2026-02-26T00:00:00Z',
    maxPages: 5,
  });

  assert.equal(first.selectedBills, 1);
  assert.equal(second.selectedBills, 1);

  const counts = queryJson(`
    SELECT json_build_object(
      'bills', (SELECT COUNT(*) FROM bills),
      'actions', (SELECT COUNT(*) FROM bill_actions),
      'members', (SELECT COUNT(*) FROM members)
    )::text;
  `);

  assert.deepEqual(counts, {
    bills: 1,
    actions: 2,
    members: 1,
  });

  const billRow = queryJson(`
    SELECT row_to_json(b)::text
    FROM (
      SELECT
        congress,
        bill_type,
        bill_number,
        title,
        introduced_date,
        latest_action_date,
        latest_action_text,
        sponsor_name,
        origin_chamber,
        (raw_upstream->>'number') AS raw_number
      FROM bills
      LIMIT 1
    ) b;
  `);

  assert.equal(billRow.congress, 119);
  assert.equal(billRow.bill_type, 'hr');
  assert.equal(billRow.bill_number, 1001);
  assert.equal(billRow.origin_chamber, 'House');
  assert.equal(billRow.sponsor_name, 'Suzan K. DelBene');
  assert.equal(billRow.raw_number, '1001');

  const actionRow = queryJson(`
    SELECT row_to_json(a)::text
    FROM (
      SELECT
        action_date,
        action_text,
        chamber,
        source,
        (raw_upstream->'sourceSystem'->>'name') AS raw_source_name
      FROM bill_actions
      ORDER BY action_date DESC
      LIMIT 1
    ) a;
  `);

  assert.equal(actionRow.chamber, 'House');
  assert.equal(actionRow.raw_source_name, 'Congress.gov');

  execSql('TRUNCATE TABLE bill_members, bill_actions, bills, members RESTART IDENTITY CASCADE;');
});
