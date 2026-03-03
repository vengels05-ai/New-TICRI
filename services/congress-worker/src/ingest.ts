import type { D1Database } from './cf-types';
import { getDb } from './db';
import type { Env } from './types';
import { CongressApiClient, type CongressBillAction, type CongressBillDetail, type CongressBillSummary } from './upstreamClient';

interface IngestTotals {
  fetchedBills: number;
  selectedBills: number;
  upsertedBills: number;
  upsertedActions: number;
  skippedActions: number;
}

interface BackfillState {
  congress: number;
  offset: number;
  processedPages: number;
  processedBills: number;
  done: boolean;
  updatedAt: string;
}

const BACKFILL_KEY_PREFIX = 'backfill:';

export async function ingestRecentBills(env: Env, options: { now?: Date } = {}): Promise<IngestTotals> {
  const db = getDb(env);
  const client = new CongressApiClient(env);

  const congress = parsePositiveInt(env.CONGRESS_INGEST_CONGRESS, 119);
  const windowDays = parsePositiveInt(env.CONGRESS_INGEST_WINDOW_DAYS, 7);
  const maxPages = parsePositiveInt(env.CONGRESS_INGEST_MAX_PAGES, 25);
  const maxActionPages = parsePositiveInt(env.CONGRESS_INGEST_MAX_ACTION_PAGES, 25);
  const maxBillsPerRun = parsePositiveInt(env.CONGRESS_INGEST_MAX_BILLS_PER_RUN, 20);

  const now = options.now ?? new Date();
  const window = parseWindowDates(windowDays, now);

  log('info', 'worker.ingest.start', {
    congress,
    windowDays,
    fromDate: window.fromDate,
    toDate: window.toDate,
  });

  const fetchedBills = await collectBills(client, congress, {
    fromDateTime: window.fromDateTime,
    toDateTime: window.toDateTime,
    sort: 'updateDate+desc',
    limit: maxBillsPerRun,
  }, maxPages);

  const bills = fetchedBills
    .filter((bill) => latestActionInRange(bill, window.fromDate, window.toDate))
    .slice(0, maxBillsPerRun);
  const totals = await ingestBillCollection(db, client, bills, {
    congress,
    maxActionPages,
  });

  const result: IngestTotals = {
    fetchedBills: fetchedBills.length,
    selectedBills: bills.length,
    ...totals,
  };

  log('info', 'worker.ingest.complete', result);
  return result;
}

export async function runBackfillBatch(env: Env, input: {
  congress: number;
  maxPages: number;
  reset?: boolean;
  maxActionPages?: number;
}): Promise<BackfillState> {
  const db = getDb(env);
  const client = new CongressApiClient(env);
  const maxActionPages = input.maxActionPages ?? parsePositiveInt(env.CONGRESS_INGEST_MAX_ACTION_PAGES, 25);

  const key = `${BACKFILL_KEY_PREFIX}${input.congress}`;
  if (input.reset) {
    await clearCheckpoint(db, key);
  }

  const state = (await getCheckpoint(db, key)) ?? {
    congress: input.congress,
    offset: 0,
    processedPages: 0,
    processedBills: 0,
    done: false,
    updatedAt: new Date().toISOString(),
  };

  if (state.done) {
    return state;
  }

  let offset = state.offset;
  let processedPages = state.processedPages;
  let processedBills = state.processedBills;
  let done = false;

  for (let i = 0; i < input.maxPages; i += 1) {
    const page = await client.getBillsPage({
      congress: input.congress,
      offset,
      limit: 250,
      sort: 'updateDate+desc',
    });

    if (page.items.length === 0) {
      done = true;
      break;
    }

    const totals = await ingestBillCollection(db, client, page.items, {
      congress: input.congress,
      maxActionPages,
    });

    processedPages += 1;
    processedBills += totals.upsertedBills;

    const nextOffset = parseNextOffset(page.pagination.next);
    if (nextOffset === null) {
      done = true;
      break;
    }

    offset = nextOffset;

    await saveCheckpoint(db, key, {
      congress: input.congress,
      offset,
      processedPages,
      processedBills,
      done: false,
      updatedAt: new Date().toISOString(),
    });
  }

  const nextState: BackfillState = {
    congress: input.congress,
    offset,
    processedPages,
    processedBills,
    done,
    updatedAt: new Date().toISOString(),
  };

  await saveCheckpoint(db, key, nextState);
  log('info', 'worker.backfill.batch_complete', nextState);
  return nextState;
}

export async function getBackfillState(env: Env, congress: number): Promise<BackfillState | null> {
  return getCheckpoint(getDb(env), `${BACKFILL_KEY_PREFIX}${congress}`);
}

async function collectBills(
  client: CongressApiClient,
  congress: number,
  initialQuery: Record<string, string | number | undefined>,
  maxPages: number,
): Promise<CongressBillSummary[]> {
  const fetchedBills: CongressBillSummary[] = [];
  let nextQuery = initialQuery;
  let nextOffset = typeof initialQuery.offset === 'number' ? initialQuery.offset : undefined;

  for (let page = 0; page < maxPages; page += 1) {
    const result = await client.getBillsPage({
      congress,
      fromDateTime: asString(nextQuery.fromDateTime),
      toDateTime: asString(nextQuery.toDateTime),
      sort: asString(nextQuery.sort),
      limit: asNumber(nextQuery.limit) ?? 250,
      offset: nextOffset,
    });

    fetchedBills.push(...result.items);

    const parsedNextOffset = parseNextOffset(result.pagination.next);
    if (parsedNextOffset === null) {
      break;
    }

    nextOffset = parsedNextOffset;
    nextQuery = {
      ...nextQuery,
      offset: nextOffset,
    };
  }

  return fetchedBills;
}

async function ingestBillCollection(
  db: D1Database,
  client: CongressApiClient,
  bills: CongressBillSummary[],
  options: { congress: number; maxActionPages: number },
) {
  let upsertedBills = 0;
  let upsertedActions = 0;
  let skippedActions = 0;

  for (const bill of bills) {
    const identifiers = parseBillIdentity(bill, options.congress);
    if (!identifiers) {
      log('warn', 'worker.ingest.bill_skipped_missing_identifiers', { congress: options.congress });
      continue;
    }

    let detail: CongressBillDetail | null = null;
    try {
      detail = await client.getBillDetail({
        congress: identifiers.congress,
        billType: identifiers.billType,
        billNumber: identifiers.billNumber,
      });
    } catch (error) {
      log('warn', 'worker.ingest.bill_detail_fetch_failed', {
        congress: identifiers.congress,
        billType: identifiers.billType,
        billNumber: identifiers.billNumber,
        message: error instanceof Error ? error.message : String(error),
      });
    }

    const upserted = await upsertBillRecord(db, bill, detail, options.congress);
    if (!upserted) {
      continue;
    }

    upsertedBills += 1;

    let actions: CongressBillAction[] = [];
    try {
      actions = await client.getAllBillActions({
        congress: upserted.congress,
        billType: upserted.billType,
        billNumber: upserted.billNumber,
        limit: 250,
      }, options.maxActionPages);
    } catch (error) {
      log('warn', 'worker.ingest.bill_actions_fetch_failed', {
        congress: upserted.congress,
        billType: upserted.billType,
        billNumber: upserted.billNumber,
        message: error instanceof Error ? error.message : String(error),
      });
    }

    const actionResult = await upsertActionRecords(db, upserted.id, actions);
    upsertedActions += actionResult.insertedOrUpdated;
    skippedActions += actionResult.skipped;
  }

  return { upsertedBills, upsertedActions, skippedActions };
}

async function upsertBillRecord(
  db: D1Database,
  bill: CongressBillSummary,
  detail: CongressBillDetail | null,
  fallbackCongress: number,
) {
  const identity = parseBillIdentity(detail ?? bill, fallbackCongress);
  if (!identity) {
    return null;
  }

  const congress = identity.congress;
  const billType = identity.billType;
  const billNumber = identity.billNumber;
  const normalized = detail ?? bill;
  const sponsorName = composePrimarySponsorName(normalized);
  const memberNames = sponsorName ? [sponsorName] : [];
  const memberNamesJson = JSON.stringify(memberNames);
  const memberNamesText = memberNames.join(' ');
  const billIdDisplay = `${billType.toUpperCase()} ${billNumber}`;
  const rawUpstream = JSON.stringify(detail ?? bill ?? {});

  await db.prepare(`
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
      raw_upstream,
      updated_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
    ON CONFLICT(congress, bill_type, bill_number) DO UPDATE SET
      bill_id_display = excluded.bill_id_display,
      title = excluded.title,
      summary = excluded.summary,
      introduced_date = excluded.introduced_date,
      latest_action_date = excluded.latest_action_date,
      latest_action_text = excluded.latest_action_text,
      origin_chamber = excluded.origin_chamber,
      sponsor_name = excluded.sponsor_name,
      member_names_json = excluded.member_names_json,
      member_names_text = excluded.member_names_text,
      raw_upstream = excluded.raw_upstream,
      updated_at = CURRENT_TIMESTAMP
  `).bind(
    congress,
    billType,
    billNumber,
    billIdDisplay,
    normalized.title ?? 'Untitled Bill',
    null,
    toIsoDate(normalized.introducedDate),
    toIsoDate(normalized.latestAction?.actionDate),
    normalized.latestAction?.text ?? null,
    normalized.originChamber ?? null,
    sponsorName,
    memberNamesJson,
    memberNamesText,
    rawUpstream,
  ).run();

  const row = await db.prepare(`
    SELECT id
    FROM bills
    WHERE congress = ? AND bill_type = ? AND bill_number = ?
    LIMIT 1
  `).bind(congress, billType, billNumber).first<{ id: number }>();

  if (!row?.id) {
    return null;
  }

  return {
    id: row.id,
    congress,
    billType,
    billNumber,
  };
}

async function upsertActionRecords(db: D1Database, billId: number, actions: CongressBillAction[]) {
  let insertedOrUpdated = 0;
  let skipped = 0;
  let latestActionDate = null;
  let latestActionText = null;
  let earliestActionDate = null;

  for (let index = 0; index < actions.length; index += 1) {
    const action = actions[index];
    const actionDate = toIsoDate(action.actionDate);
    if (!actionDate) {
      skipped += 1;
      continue;
    }

    await db.prepare(`
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
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(bill_id, action_date, sequence, action_text) DO UPDATE SET
        action_time = excluded.action_time,
        action_code = excluded.action_code,
        chamber = excluded.chamber,
        source = excluded.source,
        raw_upstream = excluded.raw_upstream
    `).bind(
      billId,
      actionDate,
      toIsoDateTime(action.actionTime),
      action.actionCode ?? null,
      action.text ?? '[missing action text]',
      action.chamber ?? null,
      parseActionSource(action),
      index + 1,
      JSON.stringify(action ?? {}),
    ).run();

    if (latestActionDate === null || actionDate > latestActionDate) {
      latestActionDate = actionDate;
      latestActionText = action.text ?? '[missing action text]';
    }

    if (earliestActionDate === null || actionDate < earliestActionDate) {
      earliestActionDate = actionDate;
    }

    insertedOrUpdated += 1;
  }

  if (latestActionDate) {
    await db.prepare(`
      UPDATE bills
      SET latest_action_date = ?,
          latest_action_text = ?,
          introduced_date = COALESCE(introduced_date, ?),
          updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `).bind(latestActionDate, latestActionText, earliestActionDate, billId).run();
  }

  return { insertedOrUpdated, skipped };
}

async function getCheckpoint(db: D1Database, key: string): Promise<BackfillState | null> {
  const row = await db.prepare(`
    SELECT payload
    FROM ingest_checkpoints
    WHERE checkpoint_key = ?
    LIMIT 1
  `).bind(key).first<{ payload: string }>();

  if (!row?.payload) {
    return null;
  }

  try {
    return JSON.parse(row.payload) as BackfillState;
  } catch {
    return null;
  }
}

async function saveCheckpoint(db: D1Database, key: string, payload: BackfillState) {
  await db.prepare(`
    INSERT INTO ingest_checkpoints (checkpoint_key, payload, updated_at)
    VALUES (?, ?, CURRENT_TIMESTAMP)
    ON CONFLICT(checkpoint_key) DO UPDATE SET
      payload = excluded.payload,
      updated_at = CURRENT_TIMESTAMP
  `).bind(key, JSON.stringify(payload)).run();
}

async function clearCheckpoint(db: D1Database, key: string) {
  await db.prepare('DELETE FROM ingest_checkpoints WHERE checkpoint_key = ?').bind(key).run();
}

function parseWindowDates(windowDays: number, now: Date) {
  const end = new Date(now);
  const start = new Date(end);
  start.setUTCDate(start.getUTCDate() - windowDays);

  return {
    fromDateTime: toCongressApiDateTime(start),
    toDateTime: toCongressApiDateTime(end),
    fromDate: start.toISOString().slice(0, 10),
    toDate: end.toISOString().slice(0, 10),
  };
}

function latestActionInRange(bill: CongressBillSummary, fromDate: string, toDate: string): boolean {
  const latest = toIsoDate(bill.latestAction?.actionDate);
  if (!latest) {
    return false;
  }

  return latest >= fromDate && latest <= toDate;
}

function parseActionSource(action: CongressBillAction): string | null {
  return action.sourceSystem?.name ?? action.sourceSystem?.code ?? null;
}

function composePrimarySponsorName(entity: { sponsor?: CongressBillSummary['sponsor']; sponsors?: Array<CongressBillSummary['sponsor']> }): string | null {
  const primary = entity.sponsors?.find(Boolean) ?? entity.sponsor;
  return composeFullName(primary);
}

function composeFullName(entity: CongressBillSummary['sponsor']): string | null {
  const fromFields = [entity?.firstName, entity?.lastName].filter(Boolean).join(' ').trim();
  const normalized = entity?.fullName ?? fromFields;
  return normalized || null;
}

function parseBillIdentity(
  bill: Pick<CongressBillSummary, 'congress' | 'type' | 'number'>,
  fallbackCongress: number,
): { congress: number; billType: string; billNumber: number } | null {
  const congress = Number.parseInt(String(bill.congress ?? fallbackCongress), 10);
  const billType = (bill.type ?? '').toLowerCase();
  const billNumber = maybeBillNumber(bill.number);

  if (!Number.isFinite(congress) || !billType || !billNumber) {
    return null;
  }

  return { congress, billType, billNumber };
}

function maybeBillNumber(value: string | undefined): number | null {
  if (!value) {
    return null;
  }

  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
}

function toIsoDate(value: string | undefined): string | null {
  if (!value) {
    return null;
  }

  const parsed = Date.parse(value);
  if (Number.isNaN(parsed)) {
    return null;
  }

  return new Date(parsed).toISOString().slice(0, 10);
}

function toIsoDateTime(value: string | undefined): string | null {
  if (!value) {
    return null;
  }

  const parsed = Date.parse(value);
  if (Number.isNaN(parsed)) {
    return null;
  }

  const iso = new Date(parsed).toISOString();
  return `${iso.slice(0, 19)}Z`;
}

function toCongressApiDateTime(value: Date): string {
  const iso = value.toISOString();
  return `${iso.slice(0, 19)}Z`;
}

function parsePositiveInt(value: string | undefined, fallback: number): number {
  if (!value) {
    return fallback;
  }

  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function parseNextOffset(nextUrl: string | null | undefined): number | null {
  if (!nextUrl) {
    return null;
  }

  try {
    const parsed = new URL(nextUrl);
    const offsetRaw = parsed.searchParams.get('offset');
    if (!offsetRaw) {
      return null;
    }

    const offset = Number.parseInt(offsetRaw, 10);
    return Number.isFinite(offset) && offset >= 0 ? offset : null;
  } catch {
    return null;
  }
}

function asString(value: string | number | undefined): string | undefined {
  return typeof value === 'string' ? value : undefined;
}

function asNumber(value: string | number | undefined): number | undefined {
  return typeof value === 'number' ? value : undefined;
}

function log(level: 'info' | 'warn' | 'error', event: string, fields: object) {
  console.log(JSON.stringify({
    level,
    event,
    ts: new Date().toISOString(),
    ...(fields as Record<string, unknown>),
  }));
}
