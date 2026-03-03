import { execSql } from '../../scripts/db/psql.mjs';
import { CongressApiClient } from './congressApiClient.ts';
import { getCongressServerConfig } from './config.ts';

export function log(level, event, fields = {}) {
  console.log(JSON.stringify({
    level,
    event,
    ts: new Date().toISOString(),
    ...fields,
  }));
}

function toIsoDate(value) {
  if (!value) {
    return null;
  }

  const parsed = Date.parse(value);
  if (Number.isNaN(parsed)) {
    return null;
  }

  return new Date(parsed).toISOString().slice(0, 10);
}

function isoDateTime(value) {
  return value.toISOString().replace(/\.\d{3}Z$/, 'Z');
}

function sqlString(value) {
  if (value === null || value === undefined) {
    return 'NULL';
  }

  return `'${String(value).replace(/'/g, "''")}'`;
}

function sqlInteger(value) {
  if (value === null || value === undefined) {
    return 'NULL';
  }

  const n = Number.parseInt(String(value), 10);
  if (!Number.isFinite(n)) {
    return 'NULL';
  }

  return String(n);
}

function sqlDate(value) {
  const iso = toIsoDate(value);
  if (!iso) {
    return 'NULL';
  }

  return `'${iso}'::date`;
}

function sqlTimestamp(value) {
  if (!value) {
    return 'NULL';
  }

  const parsed = Date.parse(value);
  if (Number.isNaN(parsed)) {
    return 'NULL';
  }

  return `'${new Date(parsed).toISOString().replace(/'/g, "''")}'::timestamptz`;
}

function sqlJson(value) {
  const serialized = JSON.stringify(value ?? {});
  return `'${serialized.replace(/'/g, "''")}'::jsonb`;
}

function maybeBillNumber(value) {
  const n = Number.parseInt(String(value), 10);
  if (!Number.isFinite(n) || n <= 0) {
    return null;
  }

  return n;
}

function parseWindowDates(windowDays, now) {
  const end = new Date(now);
  const start = new Date(end);
  start.setUTCDate(start.getUTCDate() - windowDays);

  return {
    fromDateTime: isoDateTime(start),
    toDateTime: isoDateTime(end),
    fromDate: start.toISOString().slice(0, 10),
    toDate: end.toISOString().slice(0, 10),
  };
}

function latestActionInRange(bill, fromDate, toDate) {
  const latest = toIsoDate(bill?.latestAction?.actionDate);
  if (!latest) {
    return false;
  }

  return latest >= fromDate && latest <= toDate;
}

function parseActionSource(action) {
  return action?.sourceSystem?.name || action?.sourceSystem?.code || null;
}

function composeFullName(entity) {
  const fromFields = [entity?.firstName, entity?.lastName].filter(Boolean).join(' ').trim();
  const normalized = entity?.fullName ?? fromFields;
  return normalized || null;
}

async function upsertMemberFromSponsor(sponsor) {
  const bioguideId = sponsor?.bioguideId ?? null;
  const fullName = composeFullName(sponsor);

  if (!bioguideId && !fullName) {
    return null;
  }

  if (bioguideId) {
    const sql = `
      INSERT INTO members (bioguide_id, full_name)
      VALUES (${sqlString(bioguideId)}, ${sqlString(fullName ?? 'Unknown Sponsor')})
      ON CONFLICT (bioguide_id) DO UPDATE
      SET full_name = EXCLUDED.full_name
      RETURNING id;
    `;

    const output = execSql(sql).trim();
    return output ? Number.parseInt(output, 10) : null;
  }

  const selectSql = `
    SELECT id
    FROM members
    WHERE normalized_name = lower(unaccent(${sqlString(fullName)}))
    ORDER BY id
    LIMIT 1;
  `;

  const found = execSql(selectSql).trim();
  if (found) {
    return Number.parseInt(found, 10);
  }

  const insertSql = `
    INSERT INTO members (bioguide_id, full_name)
    VALUES (NULL, ${sqlString(fullName)})
    RETURNING id;
  `;

  const inserted = execSql(insertSql).trim();
  return inserted ? Number.parseInt(inserted, 10) : null;
}

export async function upsertBillRecord(bill, fallbackCongress) {
  const congress = bill?.congress ?? fallbackCongress;
  const billType = (bill?.type ?? '').toLowerCase();
  const billNumber = maybeBillNumber(bill?.number);

  if (!congress || !billType || !billNumber) {
    return null;
  }

  const sponsorMemberId = await upsertMemberFromSponsor(bill?.sponsor);
  const sponsorName = composeFullName(bill?.sponsor);

  const sql = `
    INSERT INTO bills (
      congress,
      bill_type,
      bill_number,
      title,
      introduced_date,
      latest_action_date,
      latest_action_text,
      sponsor_member_id,
      origin_chamber,
      sponsor_name,
      raw_upstream
    )
    VALUES (
      ${sqlInteger(congress)},
      ${sqlString(billType)},
      ${sqlInteger(billNumber)},
      ${sqlString(bill?.title ?? 'Untitled Bill')},
      ${sqlDate(bill?.introducedDate)},
      ${sqlDate(bill?.latestAction?.actionDate)},
      ${sqlString(bill?.latestAction?.text ?? null)},
      ${sqlInteger(sponsorMemberId)},
      ${sqlString(bill?.originChamber ?? null)},
      ${sqlString(sponsorName)},
      ${sqlJson(bill)}
    )
    ON CONFLICT (congress, bill_type, bill_number)
    DO UPDATE SET
      title = EXCLUDED.title,
      introduced_date = EXCLUDED.introduced_date,
      latest_action_date = EXCLUDED.latest_action_date,
      latest_action_text = EXCLUDED.latest_action_text,
      sponsor_member_id = EXCLUDED.sponsor_member_id,
      origin_chamber = EXCLUDED.origin_chamber,
      sponsor_name = EXCLUDED.sponsor_name,
      raw_upstream = EXCLUDED.raw_upstream
    RETURNING id;
  `;

  const output = execSql(sql).trim();
  if (!output) {
    return null;
  }

  return {
    id: Number.parseInt(output, 10),
    congress: Number.parseInt(String(congress), 10),
    billType,
    billNumber,
  };
}

export async function upsertActionRecords(billId, actions) {
  let insertedOrUpdated = 0;
  let skipped = 0;

  for (let index = 0; index < actions.length; index += 1) {
    const action = actions[index];
    const actionDate = toIsoDate(action?.actionDate);

    if (!actionDate) {
      skipped += 1;
      continue;
    }

    const sql = `
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
      )
      VALUES (
        ${sqlInteger(billId)},
        ${sqlDate(actionDate)},
        ${sqlTimestamp(action?.actionTime)},
        ${sqlString(action?.actionCode ?? null)},
        ${sqlString(action?.text ?? '[missing action text]')},
        ${sqlString(action?.chamber ?? null)},
        ${sqlString(parseActionSource(action))},
        ${sqlInteger(index + 1)},
        ${sqlJson(action)}
      )
      ON CONFLICT (bill_id, action_date, sequence, action_text)
      DO UPDATE SET
        action_time = EXCLUDED.action_time,
        action_code = EXCLUDED.action_code,
        chamber = EXCLUDED.chamber,
        source = EXCLUDED.source,
        raw_upstream = EXCLUDED.raw_upstream;
    `;

    execSql(sql);
    insertedOrUpdated += 1;
  }

  return { insertedOrUpdated, skipped };
}

export function createCongressApiClient(overrides = {}) {
  const config = getCongressServerConfig();
  return new CongressApiClient({
    baseUrl: config.congressApiBaseUrl,
    apiKey: config.congressApiKey,
    throttleMs: config.congressApiThrottleMs,
    ...overrides,
  });
}

export async function ingestBillCollection(bills, options = {}) {
  const maxPages = Number.parseInt(String(options.maxPages ?? process.env.CONGRESS_INGEST_MAX_PAGES ?? 25), 10);
  const client = options.client ?? createCongressApiClient();
  const congressFallback = options.congress ?? null;

  let upsertedBills = 0;
  let upsertedActions = 0;
  let skippedActions = 0;

  for (const bill of bills) {
    const upserted = await upsertBillRecord(bill, congressFallback);
    if (!upserted) {
      log('warn', 'ingest.bill_skipped_missing_identifiers', {
        congress: congressFallback ?? null,
      });
      continue;
    }

    upsertedBills += 1;

    const actions = await client.getAllBillActions({
      congress: upserted.congress,
      billType: upserted.billType,
      billNumber: upserted.billNumber,
      limit: 250,
    }, maxPages);

    const actionResult = await upsertActionRecords(upserted.id, actions);
    upsertedActions += actionResult.insertedOrUpdated;
    skippedActions += actionResult.skipped;

    log('info', 'ingest.bill_processed', {
      congress: upserted.congress,
      billType: upserted.billType,
      billNumber: upserted.billNumber,
      actionsSeen: actions.length,
      actionsUpserted: actionResult.insertedOrUpdated,
      actionsSkipped: actionResult.skipped,
    });
  }

  return {
    upsertedBills,
    upsertedActions,
    skippedActions,
  };
}

export async function ingestRecentBills(options = {}) {
  const windowDays = Number.parseInt(String(options.windowDays ?? process.env.CONGRESS_INGEST_WINDOW_DAYS ?? 7), 10);
  const congress = Number.parseInt(String(options.congress ?? process.env.CONGRESS_INGEST_CONGRESS ?? 119), 10);
  const maxPages = Number.parseInt(String(options.maxPages ?? process.env.CONGRESS_INGEST_MAX_PAGES ?? 25), 10);
  const now = options.now ? new Date(options.now) : new Date();

  const client = options.client ?? createCongressApiClient();

  const window = parseWindowDates(windowDays, now);
  log('info', 'ingest.start', {
    congress,
    windowDays,
    fromDate: window.fromDate,
    toDate: window.toDate,
  });

  const fetchedBills = await client.getAllBills({
    congress,
    fromDateTime: window.fromDateTime,
    toDateTime: window.toDateTime,
    sort: 'updateDate+desc',
    limit: 250,
  }, maxPages);

  const bills = fetchedBills.filter((bill) => latestActionInRange(bill, window.fromDate, window.toDate));

  const totals = await ingestBillCollection(bills, {
    client,
    congress,
    maxPages,
  });

  log('info', 'ingest.complete', {
    congress,
    fetchedBills: fetchedBills.length,
    selectedBills: bills.length,
    upsertedBills: totals.upsertedBills,
    upsertedActions: totals.upsertedActions,
    skippedActions: totals.skippedActions,
  });

  return {
    fetchedBills: fetchedBills.length,
    selectedBills: bills.length,
    upsertedBills: totals.upsertedBills,
    upsertedActions: totals.upsertedActions,
    skippedActions: totals.skippedActions,
  };
}
