import { execFileSync } from 'node:child_process';

const DEFAULT_BASE = 'https://ticri-congress-worker.ticri2025.workers.dev';
const DEFAULT_POLL_DELAY_MS = 1500;
const DEFAULT_MAX_PAGES_PER_REQUEST = 1;
const DEFAULT_MAX_ACTION_PAGES = 1;

function parseArgs(argv) {
  const parsed = {
    confirmFullBackfill: false,
    reset: false,
    pollDelayMs: DEFAULT_POLL_DELAY_MS,
    maxPagesPerRequest: DEFAULT_MAX_PAGES_PER_REQUEST,
    maxActionPages: DEFAULT_MAX_ACTION_PAGES,
    maxRequests: null,
  };

  for (const arg of argv) {
    if (arg === '--confirm-full-backfill') {
      parsed.confirmFullBackfill = true;
      continue;
    }

    if (arg === '--reset') {
      parsed.reset = true;
      continue;
    }

    if (!arg.startsWith('--')) {
      continue;
    }

    const [rawKey, rawValue] = arg.slice(2).split('=', 2);
    parsed[rawKey] = rawValue ?? 'true';
  }

  return parsed;
}

function parsePositiveInteger(value, fallback) {
  if (value === null || value === undefined || value === '') {
    return fallback;
  }

  const parsed = Number.parseInt(String(value), 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function getBaseUrl(raw) {
  const base = String(raw || '').trim() || DEFAULT_BASE;
  return base.replace(/\/$/, '');
}

function getAdminToken() {
  const token = process.env.CONGRESS_ADMIN_TOKEN?.trim();
  if (!token) {
    throw new Error('Missing CONGRESS_ADMIN_TOKEN.');
  }

  return token;
}

async function fetchJson(url, init, { retries = 5 } = {}) {
  let attempt = 0;

  while (attempt <= retries) {
    try {
      const method = init.method ?? 'GET';
      const output = execFileSync('curl', [
        '-sS',
        '-X',
        method,
        '-H',
        `Accept: ${init.headers.Accept}`,
        '-H',
        `Authorization: ${init.headers.Authorization}`,
        String(url),
      ], {
        encoding: 'utf8',
      });

      const payload = JSON.parse(output);
      const status = payload?.error?.code ? (payload?.error?.code === 'not_found' ? 404 : 400) : 200;
      if (status >= 400) {
        const message = payload?.error?.message ?? `Request failed with status ${status}.`;
        const error = new Error(message);
        error.status = status;
        error.payload = payload;
        throw error;
      }

      return payload;
    } catch (error) {
      attempt += 1;
      const status = typeof error?.status === 'number' ? error.status : null;
      const retriableCurlExit = status === 6 || status === 7 || status === 28 || status === 35 || status === 52 || status === 56;
      const retriableStatus = retriableCurlExit
        || status === null
        || status === 408
        || status === 409
        || status === 425
        || status === 429
        || status >= 500;
      if (attempt > retries || !retriableStatus) {
        throw error;
      }

      await sleep(Math.min(8000, 500 * (2 ** (attempt - 1))));
    }
  }

  throw new Error('Unreachable');
}

function buildStatusUrl(baseUrl, params) {
  const url = new URL('/admin/congress/backfill/status', `${baseUrl}/`);
  url.searchParams.set('congress', String(params.congress));

  if (params.windowDays !== null) {
    url.searchParams.set('windowDays', String(params.windowDays));
  }

  return url;
}

function buildRunUrl(baseUrl, params) {
  const url = new URL('/admin/congress/backfill', `${baseUrl}/`);
  url.searchParams.set('mode', 'operator');
  url.searchParams.set('congress', String(params.congress));
  url.searchParams.set('maxPages', String(params.maxPagesPerRequest));
  url.searchParams.set('maxActionPages', String(params.maxActionPages));
  url.searchParams.set('confirm', 'I_UNDERSTAND_BACKFILL');

  if (params.windowDays !== null) {
    url.searchParams.set('windowDays', String(params.windowDays));
  }

  if (params.reset) {
    url.searchParams.set('reset', 'true');
  }

  return url;
}

async function getStatus(baseUrl, token, params) {
  const url = buildStatusUrl(baseUrl, params);
  const payload = await fetchJson(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return payload.data;
}

async function runBatch(baseUrl, token, params) {
  const url = buildRunUrl(baseUrl, params);
  const payload = await fetchJson(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return payload.data;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.confirmFullBackfill) {
    throw new Error('Full backfill requires explicit confirmation. Re-run with --confirm-full-backfill.');
  }

  const baseUrl = getBaseUrl(args.base ?? process.env.CONGRESS_API_BASE ?? process.env.NEXT_PUBLIC_CONGRESS_API_BASE);
  const token = getAdminToken();
  const options = {
    congress: parsePositiveInteger(args.congress ?? process.env.CONGRESS_BACKFILL_CONGRESS, 119),
    windowDays: args.windowDays ? parsePositiveInteger(args.windowDays, null) : null,
    maxPagesPerRequest: parsePositiveInteger(args.maxPagesPerRequest ?? args.maxPages, DEFAULT_MAX_PAGES_PER_REQUEST),
    maxActionPages: parsePositiveInteger(args.maxActionPages, DEFAULT_MAX_ACTION_PAGES),
    pollDelayMs: parsePositiveInteger(args.pollDelayMs, DEFAULT_POLL_DELAY_MS),
    maxRequests: args.maxRequests ? parsePositiveInteger(args.maxRequests, null) : null,
    reset: Boolean(args.reset),
  };

  let requestCount = 0;
  let pendingReset = options.reset;

  while (true) {
    const status = await getStatus(baseUrl, token, options);
    console.log(JSON.stringify({
      level: 'info',
      event: 'backfill.status',
      baseUrl,
      congress: options.congress,
      windowDays: options.windowDays,
      state: status.state,
      requestCount,
    }));

    if (status.state?.done) {
      console.log(JSON.stringify({
        level: 'info',
        event: 'backfill.complete',
        baseUrl,
        congress: options.congress,
        state: status.state,
        requestCount,
      }));
      return;
    }

    if (options.maxRequests !== null && requestCount >= options.maxRequests) {
      console.log(JSON.stringify({
        level: 'info',
        event: 'backfill.paused',
        baseUrl,
        congress: options.congress,
        state: status.state,
        requestCount,
      }));
      return;
    }

    const result = await runBatch(baseUrl, token, {
      ...options,
      reset: pendingReset,
    });
    pendingReset = false;
    requestCount += 1;

    console.log(JSON.stringify({
      level: 'info',
      event: 'backfill.batch_complete',
      baseUrl,
      congress: options.congress,
      windowDays: options.windowDays,
      result,
      requestCount,
    }));

    if (result.done) {
      console.log(JSON.stringify({
        level: 'info',
        event: 'backfill.complete',
        baseUrl,
        congress: options.congress,
        state: result,
        requestCount,
      }));
      return;
    }

    if (options.pollDelayMs > 0) {
      await sleep(options.pollDelayMs);
    }
  }
}

main().catch((error) => {
  console.error(JSON.stringify({
    level: 'error',
    event: 'backfill.exit_failure',
    message: error instanceof Error ? error.message : String(error),
    status: typeof error?.status === 'number' ? error.status : undefined,
    payload: error?.payload,
  }));
  process.exitCode = 1;
});
