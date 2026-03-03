import type { Env } from './types';

export interface CongressApiPagination {
  count?: number;
  next?: string | null;
  previous?: string | null;
}

export interface CongressBillSummary {
  congress?: number;
  number?: string;
  type?: string;
  title?: string;
  introducedDate?: string;
  originChamber?: string;
  latestAction?: {
    actionDate?: string;
    text?: string;
  };
  sponsor?: {
    bioguideId?: string;
    firstName?: string;
    lastName?: string;
    fullName?: string;
  };
}

export interface CongressBillDetail {
  congress?: number;
  number?: string;
  type?: string;
  title?: string;
  introducedDate?: string;
  originChamber?: string;
  latestAction?: {
    actionDate?: string;
    text?: string;
  };
  sponsor?: CongressBillSummary['sponsor'];
  sponsors?: Array<CongressBillSummary['sponsor']>;
}

export interface CongressBillAction {
  actionDate?: string;
  actionTime?: string;
  text?: string;
  actionCode?: string;
  chamber?: string;
  sourceSystem?: {
    name?: string;
    code?: string;
  };
}

interface PaginatedResult<TItem> {
  items: TItem[];
  pagination: CongressApiPagination;
}

interface CacheEntry<T> {
  data: T;
  etag?: string;
  lastModified?: string;
  expiresAt?: number;
}

interface CacheControl {
  maxAgeSeconds?: number;
  noStore: boolean;
  noCache: boolean;
}

interface SharedState {
  responseCache: Map<string, CacheEntry<unknown>>;
  inflight: Map<string, Promise<unknown>>;
}

const DEFAULT_CACHE_TTL_MS = 5 * 60_000;
const sharedState = getSharedState();

export class CongressApiClient {
  private readonly baseUrl: string;
  private readonly apiKey: string;
  private readonly throttleMs: number;
  private readonly maxRequestsPerMinute: number;
  private readonly fallbackCacheTtlMs: number;

  private throttleChain: Promise<void> = Promise.resolve();
  private lastRequestAt = 0;
  private readonly minuteRequestTimes: number[] = [];

  constructor(env: Env) {
    this.baseUrl = env.CONGRESS_API_BASE_URL?.trim() || 'https://api.congress.gov/v3';
    this.apiKey = env.CONGRESS_API_KEY?.trim() || '';
    this.throttleMs = parsePositiveInt(env.CONGRESS_API_THROTTLE_MS, 250);
    this.maxRequestsPerMinute = parsePositiveInt(env.CONGRESS_API_MAX_REQUESTS_PER_MINUTE, 120);
    this.fallbackCacheTtlMs = parsePositiveInt(env.CONGRESS_UPSTREAM_CACHE_TTL_MS, DEFAULT_CACHE_TTL_MS);

    if (!this.apiKey) {
      throw new Error('Missing required server env var: CONGRESS_API_KEY');
    }
  }

  async getBillsPage(params: {
    congress: number;
    fromDateTime?: string;
    toDateTime?: string;
    sort?: string;
    offset?: number;
    limit?: number;
  }): Promise<PaginatedResult<CongressBillSummary>> {
    return this.getPaginated<CongressBillSummary>(`/bill/${params.congress}`, 'bills', params);
  }

  async getAllBillActions(params: {
    congress: number;
    billType: string;
    billNumber: number;
    limit?: number;
  }, maxPages: number): Promise<CongressBillAction[]> {
    const path = `/bill/${params.congress}/${params.billType}/${params.billNumber}/actions`;
    const items: CongressBillAction[] = [];
    let next: string | null = path;
    let query: Record<string, string | number | undefined> | undefined = { limit: params.limit };

    for (let page = 0; page < maxPages && next; page += 1) {
      const current: PaginatedResult<CongressBillAction> = await this.getPaginated<CongressBillAction>(next, 'actions', query);
      items.push(...current.items);
      next = current.pagination.next ?? null;
      query = undefined;
    }

    return items;
  }

  async getBillDetail(params: {
    congress: number;
    billType: string;
    billNumber: number;
  }): Promise<CongressBillDetail | null> {
    const data = await this.getJson<Record<string, unknown>>(
      `/bill/${params.congress}/${params.billType}/${params.billNumber}`,
    );

    const singular = data.bill;
    if (singular && typeof singular === 'object') {
      return singular as CongressBillDetail;
    }

    const plural = data.bills;
    if (Array.isArray(plural) && plural.length > 0) {
      const first = plural[0];
      return first && typeof first === 'object' ? (first as CongressBillDetail) : null;
    }

    return null;
  }

  private async getPaginated<T>(
    pathOrUrl: string,
    key: string,
    query?: Record<string, string | number | undefined>,
  ): Promise<PaginatedResult<T>> {
    const data = await this.getJson<Record<string, unknown>>(pathOrUrl, query);
    const itemsRaw = data[key];
    if (!Array.isArray(itemsRaw)) {
      throw new Error(`Expected response field ${key} to be an array.`);
    }

    const paginationRaw = data.pagination;
    const pagination = paginationRaw && typeof paginationRaw === 'object'
      ? {
          count: typeof (paginationRaw as Record<string, unknown>).count === 'number'
            ? ((paginationRaw as Record<string, unknown>).count as number)
            : undefined,
          next: typeof (paginationRaw as Record<string, unknown>).next === 'string'
            ? ((paginationRaw as Record<string, unknown>).next as string)
            : null,
          previous: typeof (paginationRaw as Record<string, unknown>).previous === 'string'
            ? ((paginationRaw as Record<string, unknown>).previous as string)
            : null,
        }
      : {};

    return { items: itemsRaw as T[], pagination };
  }

  private async getJson<T>(pathOrUrl: string, query?: Record<string, string | number | undefined>): Promise<T> {
    const url = this.buildUrl(pathOrUrl, query);
    const key = url.toString();
    const now = Date.now();
    const cached = sharedState.responseCache.get(key) as CacheEntry<T> | undefined;

    if (cached?.expiresAt && now < cached.expiresAt) {
      return cached.data;
    }

    const inflight = sharedState.inflight.get(key);
    if (inflight) {
      return inflight as Promise<T>;
    }

    const promise = this.fetchJson<T>(url, key, cached, now)
      .finally(() => {
        sharedState.inflight.delete(key);
      });

    sharedState.inflight.set(key, promise);
    return promise;
  }

  private async fetchJson<T>(url: URL, cacheKey: string, cached: CacheEntry<T> | undefined, now: number): Promise<T> {
    const headers = new Headers({ Accept: 'application/json' });
    if (cached?.etag) {
      headers.set('If-None-Match', cached.etag);
    }
    if (cached?.lastModified) {
      headers.set('If-Modified-Since', cached.lastModified);
    }

    await this.waitForRateAndThrottle();

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers,
    });

    if (response.status === 304 && cached) {
      this.refreshCache(cacheKey, cached, response.headers, now);
      return cached.data;
    }

    if (!response.ok) {
      const body = await response.text();
      throw new Error(`Congress API error ${response.status}: ${body.slice(0, 300)}`);
    }

    const payload = (await response.json()) as T;
    this.storeCache(cacheKey, payload, response.headers, now);
    return payload;
  }

  private buildUrl(pathOrUrl: string, query?: Record<string, string | number | undefined>): URL {
    const url = pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')
      ? new URL(pathOrUrl)
      : new URL(pathOrUrl.replace(/^\/+/, ''), ensureTrailingSlash(this.baseUrl));

    if (!url.searchParams.has('api_key')) {
      url.searchParams.set('api_key', this.apiKey);
    }

    if (!url.searchParams.has('format')) {
      url.searchParams.set('format', 'json');
    }

    if (query) {
      for (const [k, v] of Object.entries(query)) {
        if (v === undefined) {
          continue;
        }
        url.searchParams.set(k, String(v));
      }
    }

    return url;
  }

  private async waitForRateAndThrottle() {
    const job = this.throttleChain.then(async () => {
      const now = Date.now();
      const waitThrottle = Math.max(0, this.lastRequestAt + this.throttleMs - now);
      if (waitThrottle > 0) {
        await sleep(waitThrottle);
      }

      await this.waitForMinuteRateLimit();
      this.lastRequestAt = Date.now();
      this.minuteRequestTimes.push(this.lastRequestAt);
    });

    this.throttleChain = job.catch(() => undefined);
    await job;
  }

  private async waitForMinuteRateLimit() {
    while (true) {
      const now = Date.now();
      while (this.minuteRequestTimes.length > 0 && now - this.minuteRequestTimes[0] >= 60_000) {
        this.minuteRequestTimes.shift();
      }

      if (this.minuteRequestTimes.length < this.maxRequestsPerMinute) {
        return;
      }

      const oldest = this.minuteRequestTimes[0] ?? now;
      const waitMs = Math.max(1, 60_000 - (now - oldest));
      await sleep(waitMs);
    }
  }

  private storeCache<T>(key: string, payload: T, headers: Headers, now: number) {
    const cc = parseCacheControl(headers.get('cache-control'));
    if (cc.noStore) {
      sharedState.responseCache.delete(key);
      return;
    }

    sharedState.responseCache.set(key, {
      data: payload,
      etag: headers.get('etag') ?? undefined,
      lastModified: headers.get('last-modified') ?? undefined,
      expiresAt: computeExpiresAt(now, headers, cc, this.fallbackCacheTtlMs),
    });
  }

  private refreshCache<T>(key: string, cached: CacheEntry<T>, headers: Headers, now: number) {
    const cc = parseCacheControl(headers.get('cache-control'));
    if (cc.noStore) {
      sharedState.responseCache.delete(key);
      return;
    }

    sharedState.responseCache.set(key, {
      ...cached,
      etag: headers.get('etag') ?? cached.etag,
      lastModified: headers.get('last-modified') ?? cached.lastModified,
      expiresAt: computeExpiresAt(now, headers, cc, this.fallbackCacheTtlMs) ?? cached.expiresAt,
    });
  }
}

function ensureTrailingSlash(value: string): string {
  return value.endsWith('/') ? value : `${value}/`;
}

function parseCacheControl(value: string | null): CacheControl {
  if (!value) {
    return { noStore: false, noCache: false };
  }

  const directives = value.split(',').map((v) => v.trim().toLowerCase());
  const noStore = directives.includes('no-store');
  const noCache = directives.includes('no-cache');
  const maxAge = directives.find((d) => d.startsWith('max-age='));

  if (!maxAge) {
    return { noStore, noCache };
  }

  const parsed = Number.parseInt(maxAge.slice('max-age='.length), 10);
  if (!Number.isFinite(parsed) || parsed < 0) {
    return { noStore, noCache };
  }

  return { noStore, noCache, maxAgeSeconds: parsed };
}

function computeExpiresAt(now: number, headers: Headers, cc: CacheControl, fallbackTtlMs: number): number {
  if (cc.noCache) {
    return now;
  }

  if (cc.maxAgeSeconds !== undefined) {
    return now + cc.maxAgeSeconds * 1000;
  }

  const expires = headers.get('expires');
  if (expires) {
    const parsed = Date.parse(expires);
    if (!Number.isNaN(parsed)) {
      return parsed;
    }
  }

  return now + fallbackTtlMs;
}

function getSharedState(): SharedState {
  const g = globalThis as typeof globalThis & { __ticriWorkerCongressCache?: SharedState };
  if (!g.__ticriWorkerCongressCache) {
    g.__ticriWorkerCongressCache = {
      responseCache: new Map<string, CacheEntry<unknown>>(),
      inflight: new Map<string, Promise<unknown>>(),
    };
  }

  return g.__ticriWorkerCongressCache;
}

function parsePositiveInt(value: string | undefined, fallback: number): number {
  if (!value) {
    return fallback;
  }

  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
