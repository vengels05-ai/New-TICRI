import test from 'node:test';
import assert from 'node:assert/strict';

const CONGRESS_API_BASE = (process.env.CONGRESS_API_BASE ?? 'http://127.0.0.1:8787').replace(/\/$/, '');

async function getJson(pathname) {
  const url = `${CONGRESS_API_BASE}${pathname}`;
  let response;

  try {
    response = await fetch(url, {
      headers: {
        Accept: 'application/json',
      },
    });
  } catch (error) {
    assert.fail(`Could not reach Congress Worker at ${CONGRESS_API_BASE}. Start wrangler dev first. (${String(error)})`);
  }

  let body = null;
  try {
    body = await response.json();
  } catch {
    body = null;
  }

  return { response, body };
}

test('search endpoint returns stable JSON shape', async () => {
  const { response, body } = await getJson('/congress/search?congress=119&page=1&limit=20');

  assert.equal(response.status, 200);
  assert.equal(response.headers.get('content-type')?.includes('application/json'), true);
  assert.ok(body?.data);
  assert.ok(Array.isArray(body.data.items));
  assert.equal(typeof body.data.total, 'number');
  assert.equal(typeof body.data.page, 'number');
  assert.equal(typeof body.data.pageSize, 'number');
  assert.equal(typeof body.data.totalPages, 'number');
  assert.equal(typeof body.data.query, 'object');
});

test('search endpoint enforces invalid date-range validation', async () => {
  const { response, body } = await getJson('/congress/search?from=2026-02-27&to=2026-02-20');

  assert.equal(response.status, 400);
  assert.equal(body?.error?.code, 'invalid_query');
  assert.equal(body?.error?.message, 'from must be before or equal to to.');
});

test('search endpoint enforces max limit clamp', async () => {
  const { response, body } = await getJson('/congress/search?limit=5000');

  assert.equal(response.status, 200);
  assert.equal(body?.data?.query?.limit, 100);
  assert.equal(body?.data?.pageSize, 100);
});

test('bill endpoint returns stable JSON shape (200 or 404)', async () => {
  const { response, body } = await getJson('/congress/bill/119/hr/1001');

  assert.ok([200, 404].includes(response.status));
  if (response.status === 404) {
    assert.equal(body?.error?.code, 'not_found');
    return;
  }

  assert.ok(body?.data);
  assert.ok(body.data.bill);
  assert.equal(typeof body.data.bill.congress, 'number');
  assert.equal(typeof body.data.bill.type, 'string');
  assert.equal(typeof body.data.bill.number, 'number');
});

test('bill actions endpoint returns stable JSON shape (200 or 404)', async () => {
  const { response, body } = await getJson('/congress/bill/119/hr/1001/actions');

  assert.ok([200, 404].includes(response.status));
  if (response.status === 404) {
    assert.equal(body?.error?.code, 'not_found');
    return;
  }

  assert.ok(body?.data);
  assert.ok(body.data.bill);
  assert.ok(Array.isArray(body.data.actions));
});
