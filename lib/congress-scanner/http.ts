import { getCongressServerConfig } from './config.ts';
import { isCongressUiTestModeEnabled } from './uiTestFixtures.ts';

interface RouteControlOptions {
  routeId: 'search' | 'bill-detail' | 'bill-actions';
  rateLimitMax: number;
}

interface RequestLogPayload {
  route: RouteControlOptions['routeId'];
  method: string;
  status: number;
  durationMs: number;
  rateLimited: boolean;
  query?: Record<string, string>;
}

interface RateLimitBucket {
  resetAt: number;
  count: number;
}

const DEFAULT_RATE_LIMIT_WINDOW_MS = 60_000;
const rateLimitState = getRateLimitState();

export async function withCongressApiControls(
  request: Request,
  options: RouteControlOptions,
  handler: () => Promise<Response>,
): Promise<Response> {
  const startedAt = Date.now();

  if (isRateLimitEnabled()) {
    const limit = consumeRateLimit(request, options);
    if (!limit.allowed) {
      const response = jsonError(429, 'rate_limited', 'Too many requests. Please retry shortly.', {
        'retry-after': String(limit.retryAfterSeconds),
      });
      logRequest(request, {
        route: options.routeId,
        method: request.method,
        status: response.status,
        durationMs: Date.now() - startedAt,
        rateLimited: true,
      });
      return response;
    }
  }

  const response = await handler();
  logRequest(request, {
    route: options.routeId,
    method: request.method,
    status: response.status,
    durationMs: Date.now() - startedAt,
    rateLimited: false,
  });
  return response;
}

export function resetCongressApiRateLimitState() {
  rateLimitState.clear();
}

function consumeRateLimit(request: Request, options: RouteControlOptions) {
  const now = Date.now();
  const windowMs = getRateLimitWindowMs();
  const key = `${options.routeId}:${getClientIdentifier(request)}`;
  const current = rateLimitState.get(key);

  if (!current || current.resetAt <= now) {
    rateLimitState.set(key, {
      count: 1,
      resetAt: now + windowMs,
    });
    pruneExpiredBuckets(now);
    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (current.count >= options.rateLimitMax) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((current.resetAt - now) / 1000)),
    };
  }

  current.count += 1;
  rateLimitState.set(key, current);
  return { allowed: true, retryAfterSeconds: 0 };
}

function pruneExpiredBuckets(now: number) {
  for (const [key, bucket] of rateLimitState.entries()) {
    if (bucket.resetAt <= now) {
      rateLimitState.delete(key);
    }
  }
}

function getClientIdentifier(request: Request) {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0]?.trim() || 'anonymous';
  }

  return request.headers.get('cf-connecting-ip')
    ?? request.headers.get('x-real-ip')
    ?? 'anonymous';
}

function logRequest(request: Request, payload: RequestLogPayload) {
  if (!isRequestLoggingEnabled()) {
    return;
  }

  const event: Record<string, unknown> = {
    level: 'info',
    event: 'congress_api.request',
    ts: new Date().toISOString(),
    route: payload.route,
    method: payload.method,
    status: payload.status,
    durationMs: payload.durationMs,
    rateLimited: payload.rateLimited,
  };

  if (isQueryLoggingEnabled()) {
    event.query = Object.fromEntries(new URL(request.url).searchParams.entries());
  }

  console.info(JSON.stringify(event));
}

function jsonError(status: number, code: string, message: string, extraHeaders?: Record<string, string>) {
  return new Response(JSON.stringify({
    error: {
      code,
      message,
    },
  }), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'private, no-store',
      ...extraHeaders,
    },
  });
}

function isRateLimitEnabled() {
  if (isCongressUiTestModeEnabled()) {
    return false;
  }

  return getCongressServerConfig().rateLimitEnabled;
}

function isRequestLoggingEnabled() {
  if (isCongressUiTestModeEnabled()) {
    return false;
  }

  return getCongressServerConfig().requestLoggingEnabled;
}

function isQueryLoggingEnabled() {
  if (isCongressUiTestModeEnabled()) {
    return false;
  }

  return getCongressServerConfig().includeQueryInLogs;
}

function getRateLimitWindowMs() {
  if (isCongressUiTestModeEnabled()) {
    return DEFAULT_RATE_LIMIT_WINDOW_MS;
  }

  return getCongressServerConfig().rateLimitWindowMs ?? DEFAULT_RATE_LIMIT_WINDOW_MS;
}

function getRateLimitState() {
  const globalState = globalThis as typeof globalThis & { __ticriCongressRateLimitState?: Map<string, RateLimitBucket> };
  if (!globalState.__ticriCongressRateLimitState) {
    globalState.__ticriCongressRateLimitState = new Map<string, RateLimitBucket>();
  }

  return globalState.__ticriCongressRateLimitState;
}
