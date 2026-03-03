const CONGRESS_API_BASE = process.env.NEXT_PUBLIC_CONGRESS_API_BASE ?? '';

interface FetchJsonOptions {
  params?: URLSearchParams;
  init?: RequestInit;
}

export function getCongressApiBase(): string {
  return CONGRESS_API_BASE.trim().replace(/\/$/, '');
}

export function buildCongressApiUrl(pathname: string, params?: URLSearchParams): string {
  const base = getCongressApiBase();
  if (!base) {
    throw new Error('Congress Scanner API is not configured. Set NEXT_PUBLIC_CONGRESS_API_BASE.');
  }

  const normalizedPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const url = new URL(normalizedPath, `${base}/`);
  if (params) {
    url.search = params.toString();
  }

  return url.toString();
}

export async function fetchCongressApiJson<T>(pathname: string, options: FetchJsonOptions = {}): Promise<T> {
  const url = buildCongressApiUrl(pathname, options.params);
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
    ...options.init,
  });

  const payload = await response.json();
  if (!response.ok) {
    const message = readApiError(payload) ?? 'Request failed.';
    throw new Error(message);
  }

  return payload as T;
}

function readApiError(payload: unknown): string | null {
  if (!payload || typeof payload !== 'object') {
    return null;
  }

  const error = (payload as { error?: { message?: string } }).error;
  return typeof error?.message === 'string' ? error.message : null;
}
