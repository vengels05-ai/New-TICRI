import fs from 'node:fs';
import path from 'node:path';
import { createCongressApiClient, ingestBillCollection, log } from './ingestRecentBills.mjs';

const DEFAULT_LIMIT = 250;
const DEFAULT_CHECKPOINT_DIR = path.resolve(process.cwd(), 'data/congress-scanner/checkpoints');

function ensureDirectory(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function normalizeInteger(value, fallback) {
  const parsed = Number.parseInt(String(value ?? fallback), 10);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function buildCheckpointPath(congress, checkpointDir = DEFAULT_CHECKPOINT_DIR) {
  return path.join(checkpointDir, `backfill-${congress}.json`);
}

export function readCheckpoint(checkpointPath) {
  if (!fs.existsSync(checkpointPath)) {
    return null;
  }

  return JSON.parse(fs.readFileSync(checkpointPath, 'utf8'));
}

export function writeCheckpoint(checkpointPath, payload) {
  ensureDirectory(path.dirname(checkpointPath));
  fs.writeFileSync(checkpointPath, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
}

export function deleteCheckpoint(checkpointPath) {
  if (fs.existsSync(checkpointPath)) {
    fs.unlinkSync(checkpointPath);
  }
}

export function assertBackfillAllowed(options) {
  const isProduction = options.environment === 'production';
  if (!options.confirmFullBackfill) {
    throw new Error('Full backfill requires explicit confirmation. Re-run with --confirm-full-backfill.');
  }

  if (isProduction && !options.allowProduction) {
    throw new Error('Full backfill is blocked in production unless CONGRESS_BACKFILL_ALLOW_PRODUCTION=true is set.');
  }
}

export async function backfillCongress(options = {}) {
  const congress = normalizeInteger(options.congress ?? process.env.CONGRESS_BACKFILL_CONGRESS, 119);
  const limit = normalizeInteger(options.limit ?? process.env.CONGRESS_BACKFILL_PAGE_LIMIT, DEFAULT_LIMIT);
  const maxPages = normalizeInteger(options.maxPages ?? process.env.CONGRESS_BACKFILL_MAX_PAGES, 5000);
  const interPageDelayMs = normalizeInteger(options.interPageDelayMs ?? process.env.CONGRESS_BACKFILL_INTER_PAGE_DELAY_MS, 250);
  const checkpointDir = options.checkpointDir ?? DEFAULT_CHECKPOINT_DIR;
  const checkpointPath = options.checkpointPath ?? buildCheckpointPath(congress, checkpointDir);
  const client = options.client ?? createCongressApiClient({
    throttleMs: normalizeInteger(options.throttleMs ?? process.env.CONGRESS_BACKFILL_THROTTLE_MS, 500),
  });
  const ingestBillsFn = options.ingestBillsFn ?? ingestBillCollection;

  assertBackfillAllowed({
    confirmFullBackfill: Boolean(options.confirmFullBackfill),
    allowProduction: String(options.allowProduction ?? process.env.CONGRESS_BACKFILL_ALLOW_PRODUCTION ?? '').toLowerCase() === 'true',
    environment: options.environment ?? process.env.NODE_ENV ?? 'development',
  });

  const checkpoint = readCheckpoint(checkpointPath);
  let offset = normalizeInteger(checkpoint?.offset, 0);
  let pageCount = normalizeInteger(checkpoint?.pageCount, 0);
  let processedBills = normalizeInteger(checkpoint?.processedBills, 0);
  let upsertedBills = normalizeInteger(checkpoint?.upsertedBills, 0);
  let upsertedActions = normalizeInteger(checkpoint?.upsertedActions, 0);
  let skippedActions = normalizeInteger(checkpoint?.skippedActions, 0);
  let totalAvailable = typeof checkpoint?.totalAvailable === 'number' ? checkpoint.totalAvailable : null;

  log('info', 'backfill.start', {
    congress,
    checkpointPath,
    resumed: Boolean(checkpoint),
    offset,
    limit,
    maxPages,
    interPageDelayMs,
  });

  while (pageCount < maxPages) {
    const page = await client.getBillsPage({
      congress,
      offset,
      limit,
      sort: 'updateDate+desc',
    });

    const bills = page.items ?? [];
    totalAvailable = page.pagination.count ?? totalAvailable;

    if (bills.length === 0) {
      break;
    }

    const totals = await ingestBillsFn(bills, {
      client,
      congress,
      maxPages: 50,
    });

    processedBills += bills.length;
    upsertedBills += totals.upsertedBills;
    upsertedActions += totals.upsertedActions;
    skippedActions += totals.skippedActions;
    offset += bills.length;
    pageCount += 1;

    writeCheckpoint(checkpointPath, {
      congress,
      offset,
      pageCount,
      processedBills,
      upsertedBills,
      upsertedActions,
      skippedActions,
      totalAvailable,
      updatedAt: new Date().toISOString(),
    });

    log('info', 'backfill.page_complete', {
      congress,
      pageCount,
      offset,
      billsSeen: bills.length,
      processedBills,
      upsertedBills,
      upsertedActions,
      skippedActions,
      totalAvailable,
    });

    if (bills.length < limit) {
      break;
    }

    if (interPageDelayMs > 0) {
      await sleep(interPageDelayMs);
    }
  }

  const result = {
    congress,
    processedBills,
    upsertedBills,
    upsertedActions,
    skippedActions,
    pageCount,
    totalAvailable,
    checkpointPath,
  };

  if (options.keepCheckpoint !== true) {
    deleteCheckpoint(checkpointPath);
  }

  log('info', 'backfill.complete', result);
  return result;
}
