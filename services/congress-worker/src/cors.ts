import { getAllowedOrigins } from './config';
import { json, errorBody } from './response';
import type { Env } from './types';

export function handleCorsPreflight(request: Request, env: Env): Response {
  const origin = request.headers.get('origin');
  const allowedOrigin = resolveAllowedOrigin(origin, env);

  if (!allowedOrigin) {
    return json(403, errorBody('forbidden_origin', 'Origin is not allowed for this API.'), {
      'cache-control': 'private, no-store',
      vary: 'Origin',
    });
  }

  return new Response(null, {
    status: 204,
    headers: buildCorsHeaders(allowedOrigin),
  });
}

export function rejectIfDisallowedOrigin(request: Request, env: Env): Response | null {
  const origin = request.headers.get('origin');
  if (!origin) {
    return null;
  }

  const allowedOrigin = resolveAllowedOrigin(origin, env);
  if (allowedOrigin) {
    return null;
  }

  return json(403, errorBody('forbidden_origin', 'Origin is not allowed for this API.'), {
    'cache-control': 'private, no-store',
    vary: 'Origin',
  });
}

export function withCors(request: Request, env: Env, response: Response): Response {
  const origin = request.headers.get('origin');
  const allowedOrigin = resolveAllowedOrigin(origin, env);

  const headers = new Headers(response.headers);
  headers.set('vary', 'Origin');

  if (allowedOrigin) {
    for (const [key, value] of Object.entries(buildCorsHeaders(allowedOrigin))) {
      headers.set(key, value);
    }
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

function resolveAllowedOrigin(origin: string | null, env: Env): string | null {
  if (!origin) {
    return null;
  }

  const allowedOrigins = getAllowedOrigins(env);
  return allowedOrigins.includes(origin) ? origin : null;
}

function buildCorsHeaders(origin: string): Record<string, string> {
  return {
    'access-control-allow-origin': origin,
    'access-control-allow-methods': 'GET, OPTIONS',
    'access-control-allow-headers': 'content-type',
    'access-control-max-age': '86400',
  };
}
