import test from 'node:test';
import assert from 'node:assert/strict';
import { resetCongressServerConfigCache } from './config.ts';
import { resetCongressApiRateLimitState, withCongressApiControls } from './http.ts';

test.beforeEach(() => {
  resetCongressApiRateLimitState();
  resetCongressServerConfigCache();
  process.env.DATABASE_URL = 'postgres://postgres:postgres@localhost:5432/ticri';
  process.env.CONGRESS_API_BASE_URL = 'https://api.congress.gov/v3';
  process.env.CONGRESS_API_KEY = 'test-key';
  process.env.CONGRESS_API_REQUEST_LOGGING_ENABLED = 'false';
  process.env.CONGRESS_API_INCLUDE_QUERY_IN_LOGS = 'false';
  process.env.CONGRESS_API_RATE_LIMIT_ENABLED = 'true';
  process.env.CONGRESS_API_RATE_LIMIT_WINDOW_MS = '60000';
});

test('request logging is disabled by default', async () => {
  const seen: string[] = [];
  const originalInfo = console.info;
  console.info = (message?: unknown) => {
    seen.push(String(message));
  };

  try {
    const response = await withCongressApiControls(
      new Request('https://ticri.test/api/congress/search?q=oversight', {
        headers: { 'x-forwarded-for': '203.0.113.10' },
      }),
      { routeId: 'search', rateLimitMax: 5 },
      async () => new Response(JSON.stringify({ data: { ok: true } }), { status: 200 }),
    );

    assert.equal(response.status, 200);
    assert.equal(seen.length, 0);
  } finally {
    console.info = originalInfo;
  }
});

test('query logging is omitted unless explicitly enabled', async () => {
  process.env.CONGRESS_API_REQUEST_LOGGING_ENABLED = 'true';
  const seen: Array<Record<string, unknown>> = [];
  const originalInfo = console.info;
  console.info = (message?: unknown) => {
    seen.push(JSON.parse(String(message)));
  };

  try {
    await withCongressApiControls(
      new Request('https://ticri.test/api/congress/search?q=oversight&bill=HR%201001', {
        headers: { 'x-forwarded-for': '203.0.113.10' },
      }),
      { routeId: 'search', rateLimitMax: 5 },
      async () => new Response(JSON.stringify({ data: { ok: true } }), { status: 200 }),
    );

    assert.equal(seen.length, 1);
    assert.equal(seen[0].route, 'search');
    assert.equal('query' in seen[0], false);

    process.env.CONGRESS_API_INCLUDE_QUERY_IN_LOGS = 'true';
    resetCongressServerConfigCache();
    await withCongressApiControls(
      new Request('https://ticri.test/api/congress/search?q=oversight&bill=HR%201001', {
        headers: { 'x-forwarded-for': '203.0.113.10' },
      }),
      { routeId: 'search', rateLimitMax: 5 },
      async () => new Response(JSON.stringify({ data: { ok: true } }), { status: 200 }),
    );

    assert.deepEqual(seen[1].query, {
      q: 'oversight',
      bill: 'HR 1001',
    });
  } finally {
    console.info = originalInfo;
  }
});

test('request log shape excludes secrets, request headers, and payloads', async () => {
  process.env.CONGRESS_API_REQUEST_LOGGING_ENABLED = 'true';
  const seen: Array<Record<string, unknown>> = [];
  const originalInfo = console.info;
  console.info = (message?: unknown) => {
    seen.push(JSON.parse(String(message)));
  };

  try {
    await withCongressApiControls(
      new Request('https://ticri.test/api/congress/search?q=education&bill=HR%201001', {
        headers: {
          'x-forwarded-for': '203.0.113.10',
          authorization: 'Bearer secret-token',
          'x-api-key': 'secret-upstream-key',
        },
      }),
      { routeId: 'search', rateLimitMax: 5 },
      async () => new Response(JSON.stringify({
        data: {
          ok: true,
          raw_upstream: { apiKey: process.env.CONGRESS_API_KEY, nested: { payload: 'secret' } },
        },
      }), { status: 200 }),
    );

    assert.equal(seen.length, 1);
    assert.deepEqual(Object.keys(seen[0]).sort(), [
      'durationMs',
      'event',
      'level',
      'method',
      'rateLimited',
      'route',
      'status',
      'ts',
    ]);
    assert.equal(JSON.stringify(seen[0]).includes('education'), false);
    assert.equal(JSON.stringify(seen[0]).includes('HR 1001'), false);
    assert.equal(JSON.stringify(seen[0]).includes('test-key'), false);
    assert.equal(JSON.stringify(seen[0]).includes('secret-token'), false);
    assert.equal(JSON.stringify(seen[0]).includes('secret-upstream-key'), false);
    assert.equal(JSON.stringify(seen[0]).includes('raw_upstream'), false);
    assert.equal(JSON.stringify(seen[0]).includes('payload'), false);
  } finally {
    console.info = originalInfo;
  }
});

test('rate limiting returns 429 with retry-after', async () => {
  process.env.CONGRESS_API_RATE_LIMIT_WINDOW_MS = '60000';

  const request = new Request('https://ticri.test/api/congress/search', {
    headers: { 'x-forwarded-for': '203.0.113.10' },
  });

  const first = await withCongressApiControls(
    request,
    { routeId: 'search', rateLimitMax: 1 },
    async () => new Response(JSON.stringify({ data: { ok: true } }), { status: 200 }),
  );
  const second = await withCongressApiControls(
    request,
    { routeId: 'search', rateLimitMax: 1 },
    async () => new Response(JSON.stringify({ data: { ok: true } }), { status: 200 }),
  );
  const body = await second.json();

  assert.equal(first.status, 200);
  assert.equal(second.status, 429);
  assert.equal(second.headers.get('cache-control'), 'private, no-store');
  assert.match(second.headers.get('retry-after') ?? '', /^\d+$/);
  assert.equal(body.error.code, 'rate_limited');
});
