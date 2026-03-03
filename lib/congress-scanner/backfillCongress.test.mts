import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {
  assertBackfillAllowed,
  backfillCongress,
  buildCheckpointPath,
  readCheckpoint,
  writeCheckpoint,
} from './backfillCongress.mjs';

test('backfill guardrail blocks production runs without explicit allow flag', () => {
  assert.throws(() => {
    assertBackfillAllowed({
      confirmFullBackfill: true,
      allowProduction: false,
      environment: 'production',
    });
  }, /blocked in production/i);
});

test('backfill requires explicit confirmation', () => {
  assert.throws(() => {
    assertBackfillAllowed({
      confirmFullBackfill: false,
      allowProduction: true,
      environment: 'development',
    });
  }, /requires explicit confirmation/i);
});

test('backfill resumes from checkpoint and removes checkpoint on completion', async () => {
  const tempDir = fs.mkdtempSync(path.join(process.cwd(), 'tmp-backfill-test-'));
  const checkpointPath = buildCheckpointPath(119, tempDir);
  writeCheckpoint(checkpointPath, {
    congress: 119,
    offset: 2,
    pageCount: 1,
    processedBills: 2,
    upsertedBills: 2,
    upsertedActions: 4,
    skippedActions: 0,
    totalAvailable: 4,
    updatedAt: '2026-02-27T00:00:00Z',
  });

  const seenOffsets: number[] = [];
  const client = {
    async getBillsPage(params: { offset?: number; limit?: number }) {
      seenOffsets.push(params.offset ?? 0);
      if ((params.offset ?? 0) === 2) {
        return {
          items: [
            { congress: 119, type: 'hr', number: '1003', title: 'Bill 3' },
            { congress: 119, type: 'hr', number: '1004', title: 'Bill 4' },
          ],
          pagination: { count: 4 },
        };
      }

      return {
        items: [],
        pagination: { count: 4 },
      };
    },
  };

  const ingestedBatches: number[] = [];
  const result = await backfillCongress({
    congress: 119,
    client,
    checkpointPath,
    checkpointDir: tempDir,
    maxPages: 5,
    limit: 2,
    interPageDelayMs: 0,
    confirmFullBackfill: true,
    environment: 'development',
    ingestBillsFn: async (bills: unknown[]) => {
      ingestedBatches.push(bills.length);
      return {
        upsertedBills: bills.length,
        upsertedActions: bills.length * 2,
        skippedActions: 0,
      };
    },
  });

  assert.deepEqual(seenOffsets, [2, 4]);
  assert.deepEqual(ingestedBatches, [2]);
  assert.equal(result.processedBills, 4);
  assert.equal(result.upsertedBills, 4);
  assert.equal(result.upsertedActions, 8);
  assert.equal(readCheckpoint(checkpointPath), null);

  fs.rmSync(tempDir, { recursive: true, force: true });
});
