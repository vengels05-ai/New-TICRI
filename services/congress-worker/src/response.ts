import type { ApiErrorBody } from './types';

export function json(status: number, body: unknown, initHeaders?: Record<string, string>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      ...initHeaders,
    },
  });
}

export function errorBody(code: string, message: string, details?: Record<string, unknown>): ApiErrorBody {
  return {
    error: {
      code,
      message,
      ...(details ? { details } : {}),
    },
  };
}
