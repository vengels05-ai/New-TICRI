import test from 'node:test';
import assert from 'node:assert/strict';
import { getCongressServerConfig, resetCongressServerConfigCache } from './config.ts';

test.beforeEach(() => {
  resetCongressServerConfigCache();
});

test('server config requires server-only env vars without printing values', () => {
  assert.throws(
    () => getCongressServerConfig({}),
    /Missing required server environment variables: DATABASE_URL, CONGRESS_API_BASE_URL, CONGRESS_API_KEY/,
  );
});

test('server config parses required values and safe defaults', () => {
  const config = getCongressServerConfig({
    DATABASE_URL: 'postgres://postgres:postgres@localhost:5432/ticri',
    CONGRESS_API_BASE_URL: 'https://api.congress.gov/v3',
    CONGRESS_API_KEY: 'secret-token',
  });

  assert.equal(config.databaseUrl, 'postgres://postgres:postgres@localhost:5432/ticri');
  assert.equal(config.congressApiBaseUrl, 'https://api.congress.gov/v3');
  assert.equal(config.congressApiKey, 'secret-token');
  assert.equal(config.requestLoggingEnabled, false);
  assert.equal(config.includeQueryInLogs, false);
  assert.equal(config.rateLimitEnabled, true);
  assert.equal(config.rateLimitWindowMs, 60_000);
});
