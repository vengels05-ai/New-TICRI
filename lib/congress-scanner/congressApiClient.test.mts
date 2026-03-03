import test from 'node:test';
import assert from 'node:assert/strict';
import { CongressApiClient } from './congressApiClient.ts';

test.beforeEach(() => {
  const globalState = globalThis as typeof globalThis & {
    __ticriCongressApiSharedCache?: {
      responseCache: Map<string, unknown>;
      inflightRequests: Map<string, Promise<unknown>>;
    };
  };

  globalState.__ticriCongressApiSharedCache?.responseCache.clear();
  globalState.__ticriCongressApiSharedCache?.inflightRequests.clear();
});

function jsonResponse(body: unknown, init?: ResponseInit): Response {
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      ...init?.headers,
    },
    ...init,
  });
}

test('adds API key and supports pagination traversal', async () => {
  const seenUrls: string[] = [];

  const fetchMock: typeof fetch = async (input) => {
    const url = String(input);
    seenUrls.push(url);

    if (seenUrls.length === 1) {
      return jsonResponse({
        bills: [{ number: '1', title: 'First Bill' }],
        pagination: {
          next: 'https://api.congress.gov/v3/bill/119?offset=1&limit=1',
          count: 2,
        },
      });
    }

    return jsonResponse({
      bills: [{ number: '2', title: 'Second Bill' }],
      pagination: {
        next: null,
        count: 2,
      },
    });
  };

  const client = new CongressApiClient({
    baseUrl: 'https://api.congress.gov/v3',
    apiKey: 'test-key',
    throttleMs: 0,
    fetchFn: fetchMock,
  });

  const bills = await client.getAllBills({
    congress: 119,
    limit: 1,
  });

  assert.equal(bills.length, 2);
  assert.equal(seenUrls.length, 2);
  assert.match(seenUrls[0], /api_key=test-key/);
  assert.match(seenUrls[0], /format=json/);
  assert.match(seenUrls[1], /api_key=test-key/);
});

test('reuses a shared cache entry across client instances for the same URL', async () => {
  let fetchCount = 0;

  const fetchMock: typeof fetch = async () => {
    fetchCount += 1;
    return jsonResponse(
      {
        bills: [{ number: '1001', title: 'Cache Test Bill' }],
        pagination: { next: null, count: 1 },
      },
      {
        headers: {
          'cache-control': 'max-age=120',
          etag: '"etag-1"',
        },
      },
    );
  };

  const firstClient = new CongressApiClient({
    baseUrl: 'https://api.congress.gov/v3',
    apiKey: 'test-key',
    throttleMs: 0,
    fetchFn: fetchMock,
  });
  const secondClient = new CongressApiClient({
    baseUrl: 'https://api.congress.gov/v3',
    apiKey: 'test-key',
    throttleMs: 0,
    fetchFn: fetchMock,
  });

  const first = await firstClient.getBillsPage({ congress: 119, limit: 1 });
  const second = await secondClient.getBillsPage({ congress: 119, limit: 1 });

  assert.equal(fetchCount, 1);
  assert.equal(first.items[0]?.number, '1001');
  assert.equal(second.items[0]?.number, '1001');
});

test('sends conditional cache headers and uses 304 cached payload', async () => {
  const requestHeaders: Headers[] = [];
  let fetchCount = 0;

  const fetchMock: typeof fetch = async (_input, init) => {
    fetchCount += 1;
    requestHeaders.push(new Headers(init?.headers));

    if (fetchCount === 1) {
      return jsonResponse(
        {
          actions: [{ actionDate: '2026-02-24', text: 'Introduced in House' }],
          pagination: { next: null, count: 1 },
        },
        {
          headers: {
            etag: '"action-etag"',
            'cache-control': 'no-cache',
          },
        },
      );
    }

    return new Response(null, {
      status: 304,
      headers: {
        etag: '"action-etag"',
      },
    });
  };

  const client = new CongressApiClient({
    baseUrl: 'https://api.congress.gov/v3',
    apiKey: 'test-key',
    throttleMs: 0,
    fetchFn: fetchMock,
  });

  const first = await client.getBillActionsPage({
    congress: 119,
    billType: 'hr',
    billNumber: 1001,
    limit: 1,
  });

  const second = await client.getBillActionsPage({
    congress: 119,
    billType: 'hr',
    billNumber: 1001,
    limit: 1,
  });

  assert.equal(fetchCount, 2);
  assert.equal(requestHeaders[1].get('if-none-match'), '"action-etag"');
  assert.equal(first.items[0]?.text, 'Introduced in House');
  assert.equal(second.items[0]?.text, 'Introduced in House');
});

test('throttles requests by configured interval', async () => {
  const callTimes: number[] = [];

  const fetchMock: typeof fetch = async () => {
    callTimes.push(Date.now());
    return jsonResponse({
      bills: [{ number: '10', title: 'Throttle Test' }],
      pagination: { next: null, count: 1 },
    });
  };

  const throttleMs = 60;
  const client = new CongressApiClient({
    baseUrl: 'https://api.congress.gov/v3',
    apiKey: 'test-key',
    throttleMs,
    fetchFn: fetchMock,
  });

  await client.getBillsPage({ congress: 119, limit: 1 });
  await client.getBillsPage({ congress: 119, limit: 1, offset: 1 });

  assert.equal(callTimes.length, 2);
  const delta = callTimes[1] - callTimes[0];
  assert.ok(delta >= throttleMs - 5, `Expected at least ${throttleMs}ms between requests, got ${delta}ms`);
});
