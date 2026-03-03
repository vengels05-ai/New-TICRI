import type { ExecutionContext, ScheduledController } from './cf-types';
import { assertRequiredEnv, getLimits, parseBoolean } from './config';
import { handleCorsPreflight, rejectIfDisallowedOrigin, withCors } from './cors';
import { getDb } from './db';
import { getBackfillStateForWindow, ingestRecentBills, runBackfillBatch } from './ingest';
import { CongressRepository } from './repository';
import { errorBody, json } from './response';
import type { Env } from './types';
import { CongressApiClient } from './upstreamClient';
import { parseBillPath, parseSearchParams } from './validation';

function toPathSegments(pathname: string): string[] {
  return pathname.split('/').filter((segment) => segment.length > 0);
}

function isActionsRoute(pathname: string): boolean {
  return /\/actions\/?$/.test(pathname);
}

function cacheHeaders(cacheControl: string): Record<string, string> {
  return {
    'cache-control': cacheControl,
  };
}

function routeNotFound(): Response {
  return json(404, errorBody('not_found', 'Route not found.'), cacheHeaders('private, no-store'));
}

function parsePositiveInt(value: string | null, fallback: number): number {
  if (!value) {
    return fallback;
  }

  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return value && typeof value === 'object' ? value as Record<string, unknown> : null;
}

function asNonEmptyString(value: unknown): string | null {
  return typeof value === 'string' && value.trim().length > 0 ? value.trim() : null;
}

function earliestTextVersionDate(textVersions: unknown[]): string | null {
  let earliest: string | null = null;

  for (const item of textVersions) {
    const record = asRecord(item);
    const dateValue = asNonEmptyString(record?.date);
    if (!dateValue) {
      continue;
    }

    const parsed = Date.parse(dateValue);
    if (Number.isNaN(parsed)) {
      continue;
    }

    const normalized = new Date(parsed).toISOString().slice(0, 10);
    if (earliest === null || normalized < earliest) {
      earliest = normalized;
    }
  }

  return earliest;
}

function applyBillDetailEnrichment(
  result: { bill?: unknown; statusCard?: unknown },
  enrichment: { introducedDate?: string | null; sponsorName?: string | null },
) {
  const bill = asRecord(result.bill);
  const statusCard = asRecord(result.statusCard);

  if (enrichment.introducedDate) {
    if (!asNonEmptyString(bill?.introducedDate) && bill) {
      bill.introducedDate = enrichment.introducedDate;
    }

    if (!asNonEmptyString(statusCard?.introducedDate) && statusCard) {
      statusCard.introducedDate = enrichment.introducedDate;
    }
  }

  if (enrichment.sponsorName) {
    if (!asNonEmptyString(bill?.sponsorName) && bill) {
      bill.sponsorName = enrichment.sponsorName;
    }

    if (bill && (!Array.isArray(bill.memberNames) || bill.memberNames.length === 0)) {
      bill.memberNames = [enrichment.sponsorName];
    }

    if (!asNonEmptyString(statusCard?.sponsorName) && statusCard) {
      statusCard.sponsorName = enrichment.sponsorName;
    }
  }
}

interface RateLimitBucket {
  count: number;
  resetAt: number;
}

function getRateLimitState() {
  const g = globalThis as typeof globalThis & { __ticriWorkerSearchRateLimit?: Map<string, RateLimitBucket> };
  if (!g.__ticriWorkerSearchRateLimit) {
    g.__ticriWorkerSearchRateLimit = new Map<string, RateLimitBucket>();
  }

  return g.__ticriWorkerSearchRateLimit;
}

function getClientIdentifier(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0]?.trim() || 'anonymous';
  }

  return request.headers.get('cf-connecting-ip')
    ?? request.headers.get('x-real-ip')
    ?? 'anonymous';
}

function consumeSearchRateLimit(request: Request, env: Env): { allowed: true } | { allowed: false; retryAfterSeconds: number } {
  const enabled = parseBoolean(env.CONGRESS_SEARCH_RATE_LIMIT_ENABLED, true);
  if (!enabled) {
    return { allowed: true };
  }

  const windowMs = parsePositiveInt(env.CONGRESS_SEARCH_RATE_LIMIT_WINDOW_MS ?? null, 60_000);
  const maxRequests = parsePositiveInt(env.CONGRESS_SEARCH_RATE_LIMIT_MAX ?? null, 30);
  const now = Date.now();
  const key = `search:${getClientIdentifier(request)}`;
  const state = getRateLimitState();

  const bucket = state.get(key);
  if (!bucket || bucket.resetAt <= now) {
    state.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true };
  }

  if (bucket.count >= maxRequests) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((bucket.resetAt - now) / 1000)),
    };
  }

  bucket.count += 1;
  state.set(key, bucket);
  return { allowed: true };
}

function logRequest(request: Request, env: Env, payload: {
  route: string;
  status: number;
  durationMs: number;
  rateLimited?: boolean;
}) {
  const enabled = parseBoolean(env.CONGRESS_REQUEST_LOGGING_ENABLED, false);
  if (!enabled) {
    return;
  }

  const includeQuery = parseBoolean(env.CONGRESS_REQUEST_LOG_INCLUDE_QUERY, false);
  const url = new URL(request.url);
  const entry: Record<string, unknown> = {
    level: 'info',
    event: 'worker.request',
    ts: new Date().toISOString(),
    route: payload.route,
    method: request.method,
    status: payload.status,
    durationMs: payload.durationMs,
    rateLimited: Boolean(payload.rateLimited),
  };

  if (includeQuery) {
    entry.query = Object.fromEntries(url.searchParams.entries());
  }

  console.log(JSON.stringify(entry));
}

function safeInternalErrorResponse(request: Request, env: Env): Response {
  logRequest(request, env, {
    route: new URL(request.url).pathname,
    status: 500,
    durationMs: 0,
  });

  return withCors(
    request,
    env,
    json(500, errorBody('internal_error', 'Internal server error.'), cacheHeaders('private, no-store')),
  );
}

function requireAdminAuth(request: Request, env: Env): Response | null {
  const configured = env.CONGRESS_ADMIN_TOKEN?.trim();
  if (!configured) {
    return json(503, errorBody('admin_disabled', 'Admin endpoint is not configured.'), cacheHeaders('private, no-store'));
  }

  const auth = request.headers.get('authorization') ?? '';
  const expected = `Bearer ${configured}`;
  if (auth !== expected) {
    return json(401, errorBody('unauthorized', 'Missing or invalid admin credentials.'), cacheHeaders('private, no-store'));
  }

  return null;
}

function ensureBackfillAllowed(env: Env): Response | null {
  const backfillEnabled = parseBoolean(env.CONGRESS_BACKFILL_ENABLED, false);
  if (!backfillEnabled) {
    return json(403, errorBody('backfill_disabled', 'Backfill is disabled.'), cacheHeaders('private, no-store'));
  }

  const isProduction = (env.APP_ENV ?? 'production').toLowerCase() === 'production';
  const allowProdBackfill = parseBoolean(env.CONGRESS_BACKFILL_ALLOW_PRODUCTION, false);
  if (isProduction && !allowProdBackfill) {
    return json(403, errorBody('backfill_guardrail', 'Backfill is blocked in production unless explicitly enabled.'), cacheHeaders('private, no-store'));
  }

  return null;
}

async function handleAdminBackfill(request: Request, env: Env): Promise<Response> {
  const auth = requireAdminAuth(request, env);
  if (auth) {
    return auth;
  }

  const guardrail = ensureBackfillAllowed(env);
  if (guardrail) {
    return guardrail;
  }

  const url = new URL(request.url);
  const congress = parsePositiveInt(url.searchParams.get('congress'), 0);
  if (congress <= 0) {
    return json(400, errorBody('invalid_query', 'congress must be a positive integer.', {
      parameter: 'congress',
    }), cacheHeaders('private, no-store'));
  }

  const confirmation = url.searchParams.get('confirm');
  if (confirmation !== 'I_UNDERSTAND_BACKFILL') {
    return json(400, errorBody('backfill_guardrail', 'confirm=I_UNDERSTAND_BACKFILL is required.'), cacheHeaders('private, no-store'));
  }

  const maxPerRun = parsePositiveInt(env.CONGRESS_BACKFILL_MAX_PAGES_PER_RUN ?? '10', 10);
  const maxPages = parsePositiveInt(url.searchParams.get('maxPages'), maxPerRun);

  if (maxPages > maxPerRun) {
    return json(400, errorBody('backfill_guardrail', `maxPages cannot exceed ${maxPerRun}.`, {
      parameter: 'maxPages',
      maxPagesPerRun: maxPerRun,
    }), cacheHeaders('private, no-store'));
  }

  const reset = ['1', 'true', 'yes', 'on'].includes((url.searchParams.get('reset') ?? '').toLowerCase());
  const maxActionPages = parsePositiveInt(url.searchParams.get('maxActionPages'), parsePositiveInt(env.CONGRESS_INGEST_MAX_ACTION_PAGES ?? '25', 25));
  const windowDaysRaw = url.searchParams.get('windowDays');
  const windowDays = windowDaysRaw ? parsePositiveInt(windowDaysRaw, 0) : null;

  const state = await runBackfillBatch(env, {
    congress,
    maxPages,
    maxActionPages,
    reset,
    windowDays,
  });

  return json(200, {
    data: {
      ...state,
      maxPagesProcessedThisRun: maxPages,
    },
  }, cacheHeaders('private, no-store'));
}

async function handleAdminBackfillStatus(request: Request, env: Env): Promise<Response> {
  const auth = requireAdminAuth(request, env);
  if (auth) {
    return auth;
  }

  const url = new URL(request.url);
  const congress = parsePositiveInt(url.searchParams.get('congress'), 0);
  if (congress <= 0) {
    return json(400, errorBody('invalid_query', 'congress must be a positive integer.', {
      parameter: 'congress',
    }), cacheHeaders('private, no-store'));
  }

  const windowDaysRaw = url.searchParams.get('windowDays');
  const windowDays = windowDaysRaw ? parsePositiveInt(windowDaysRaw, 0) : null;
  const state = await getBackfillStateForWindow(env, congress, windowDays);
  return json(200, {
    data: {
      congress,
      windowDays,
      state,
    },
  }, cacheHeaders('private, no-store'));
}

async function handleAdminIngestRecent(request: Request, env: Env): Promise<Response> {
  const auth = requireAdminAuth(request, env);
  if (auth) {
    return auth;
  }

  const result = await ingestRecentBills(env);
  return json(200, { data: result }, cacheHeaders('private, no-store'));
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const startedAt = Date.now();
    try {
      assertRequiredEnv(env);

      if (request.method === 'OPTIONS') {
        return handleCorsPreflight(request, env);
      }

      const originRejection = rejectIfDisallowedOrigin(request, env);
      if (originRejection) {
        return originRejection;
      }

      const url = new URL(request.url);
      const segments = toPathSegments(url.pathname);

      if (request.method === 'POST' && url.pathname === '/admin/congress/backfill') {
        const response = withCors(request, env, await handleAdminBackfill(request, env));
        logRequest(request, env, { route: url.pathname, status: response.status, durationMs: Date.now() - startedAt });
        return response;
      }

      if (request.method === 'GET' && url.pathname === '/admin/congress/backfill/status') {
        const response = withCors(request, env, await handleAdminBackfillStatus(request, env));
        logRequest(request, env, { route: url.pathname, status: response.status, durationMs: Date.now() - startedAt });
        return response;
      }

      if (request.method === 'POST' && url.pathname === '/admin/congress/ingest/recent') {
        const response = withCors(request, env, await handleAdminIngestRecent(request, env));
        logRequest(request, env, { route: url.pathname, status: response.status, durationMs: Date.now() - startedAt });
        return response;
      }

      if (request.method !== 'GET') {
        return withCors(
          request,
          env,
          json(405, errorBody('method_not_allowed', 'Only GET, POST, OPTIONS are supported.'), {
            ...cacheHeaders('private, no-store'),
            allow: 'GET, POST, OPTIONS',
          }),
        );
      }

      const limits = getLimits(env);
      const repository = new CongressRepository(getDb(env), limits.maxLimit);

      if (url.pathname === '/congress/search') {
        const rate = consumeSearchRateLimit(request, env);
        if (!rate.allowed) {
          const limited = withCors(
            request,
            env,
            json(429, errorBody('rate_limited', 'Too many requests. Please retry shortly.'), {
              ...cacheHeaders('private, no-store'),
              'retry-after': String(rate.retryAfterSeconds),
            }),
          );
          logRequest(request, env, {
            route: url.pathname,
            status: limited.status,
            durationMs: Date.now() - startedAt,
            rateLimited: true,
          });
          return limited;
        }

        const parsed = parseSearchParams(url.searchParams, limits);
        if (!parsed.ok) {
          const response = withCors(request, env, json(parsed.status, errorBody(parsed.code, parsed.message, parsed.details), cacheHeaders('private, no-store')));
          logRequest(request, env, { route: url.pathname, status: response.status, durationMs: Date.now() - startedAt });
          return response;
        }

        const result = await repository.search(parsed.value);
        const total = result.total ?? 0;
        const pageSize = result.pageSize ?? parsed.value.limit;

        const response = withCors(request, env, json(200, {
          data: {
            items: result.items ?? [],
            total,
            page: result.page ?? parsed.value.page,
            pageSize,
            totalPages: Math.max(1, Math.ceil(total / Math.max(pageSize, 1))),
            query: parsed.value,
          },
        }, cacheHeaders('private, no-store')));
        logRequest(request, env, { route: url.pathname, status: response.status, durationMs: Date.now() - startedAt });
        return response;
      }

      if (segments.length >= 5 && segments[0] === 'congress' && segments[1] === 'bill') {
        const parsed = parseBillPath(url.pathname);
        if (!parsed.ok) {
          const response = withCors(request, env, json(parsed.status, errorBody(parsed.code, parsed.message, parsed.details), cacheHeaders('private, no-store')));
          logRequest(request, env, { route: url.pathname, status: response.status, durationMs: Date.now() - startedAt });
          return response;
        }

        if (isActionsRoute(url.pathname)) {
          const result = await repository.getBillActions(parsed.value);
          if (!result.bill) {
            const response = withCors(request, env, json(404, errorBody('not_found', 'Bill not found.'), cacheHeaders('private, no-store')));
            logRequest(request, env, { route: url.pathname, status: response.status, durationMs: Date.now() - startedAt });
            return response;
          }

          const response = withCors(request, env, json(200, { data: result }, cacheHeaders('public, max-age=300, stale-while-revalidate=900')));
          logRequest(request, env, { route: url.pathname, status: response.status, durationMs: Date.now() - startedAt });
          return response;
        }

        const result = await repository.getBill(parsed.value);
        if (!result.bill) {
          const response = withCors(request, env, json(404, errorBody('not_found', 'Bill not found.'), cacheHeaders('private, no-store')));
          logRequest(request, env, { route: url.pathname, status: response.status, durationMs: Date.now() - startedAt });
          return response;
        }

        let textVersions: unknown[] = [];
        let sponsorName: string | null = null;
        try {
          const client = new CongressApiClient(env);
          textVersions = await client.getBillTextVersions({
            congress: parsed.value.congress,
            billType: parsed.value.type,
            billNumber: parsed.value.number,
          });

          const bill = asRecord(result.bill);
          if (!asNonEmptyString(bill?.sponsorName)) {
            const sponsors = await client.getBillSponsors({
              congress: parsed.value.congress,
              billType: parsed.value.type,
              billNumber: parsed.value.number,
            });
            const primary = sponsors.find((sponsor) => asNonEmptyString(sponsor.fullName) || asNonEmptyString(sponsor.firstName) || asNonEmptyString(sponsor.lastName));
            if (primary) {
              const fallbackName = [primary.firstName, primary.lastName].filter(Boolean).join(' ').trim();
              sponsorName = asNonEmptyString(primary.fullName) ?? (fallbackName || null);
            }
          }
        } catch (error) {
          console.warn(JSON.stringify({
            level: 'warn',
            event: 'worker.bill_text.fetch_failed',
            ts: new Date().toISOString(),
            route: url.pathname,
            message: error instanceof Error ? error.message : String(error),
          }));
        }

        applyBillDetailEnrichment(result, {
          introducedDate: earliestTextVersionDate(textVersions),
          sponsorName,
        });

        const response = withCors(
          request,
          env,
          json(200, { data: { ...result, textVersions } }, cacheHeaders('public, max-age=300, stale-while-revalidate=900')),
        );
        logRequest(request, env, { route: url.pathname, status: response.status, durationMs: Date.now() - startedAt });
        return response;
      }

      const response = withCors(request, env, routeNotFound());
      logRequest(request, env, { route: url.pathname, status: response.status, durationMs: Date.now() - startedAt });
      return response;
    } catch (error) {
      const name = error instanceof Error ? error.name : 'Error';
      const message = error instanceof Error ? error.message : String(error);
      console.error(JSON.stringify({
        level: 'error',
        event: 'worker.request.failure',
        ts: new Date().toISOString(),
        route: new URL(request.url).pathname,
        errorType: name,
        message,
      }));
      return safeInternalErrorResponse(request, env);
    }
  },

  async scheduled(_controller: ScheduledController, env: Env, ctx: ExecutionContext): Promise<void> {
    assertRequiredEnv(env);

    const ingestEnabled = parseBoolean(env.CONGRESS_INGEST_ENABLED, true);
    if (!ingestEnabled) {
      console.log(JSON.stringify({
        level: 'info',
        event: 'worker.ingest.skipped_disabled',
        ts: new Date().toISOString(),
      }));
      return;
    }

    ctx.waitUntil((async () => {
      try {
        await ingestRecentBills(env);
      } catch (error) {
        console.error(JSON.stringify({
          level: 'error',
          event: 'worker.ingest.failure',
          ts: new Date().toISOString(),
          message: error instanceof Error ? error.message : String(error),
        }));
        throw error;
      }
    })());
  },
};
