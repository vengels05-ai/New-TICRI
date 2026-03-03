import { getCongressServerConfig } from './config.ts';

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
    party?: string;
    state?: string;
  };
}

export interface CongressBillAction {
  actionDate?: string;
  actionTime?: string;
  text?: string;
  type?: string;
  actionCode?: string;
  sourceSystem?: {
    name?: string;
    code?: string;
  };
}

export interface PaginatedResult<TItem> {
  items: TItem[];
  pagination: CongressApiPagination;
}

export interface GetBillsPageParams {
  congress: number;
  billType?: string;
  fromDateTime?: string;
  toDateTime?: string;
  sort?: string;
  offset?: number;
  limit?: number;
}

export interface GetBillActionsPageParams {
  congress: number;
  billType: string;
  billNumber: string | number;
  offset?: number;
  limit?: number;
}

export interface CongressApiClientOptions {
  baseUrl?: string;
  apiKey?: string;
  throttleMs?: number;
  fetchFn?: typeof fetch;
}

interface RequestOptions {
  query?: Record<string, string | number | boolean | undefined>;
}

interface CacheEntry<T> {
  data: T;
  etag?: string;
  lastModified?: string;
  expiresAt?: number;
}

interface ParsedCacheControl {
  maxAgeSeconds?: number;
  noStore: boolean;
  noCache: boolean;
}

interface SharedCacheState {
  responseCache: Map<string, CacheEntry<unknown>>;
  inflightRequests: Map<string, Promise<unknown>>;
}

const DEFAULT_CACHE_TTL_MS = 5 * 60 * 1000;
const sharedState = getSharedCacheState();

export class CongressApiError extends Error {
  public readonly status: number;
  public readonly url: string;
  public readonly responseBody: string;

  constructor(message: string, status: number, url: string, responseBody: string) {
    super(message);
    this.name = 'CongressApiError';
    this.status = status;
    this.url = url;
    this.responseBody = responseBody;
  }
}

export class CongressApiClient {
  private readonly baseUrl: string;
  private readonly apiKey: string;
  private readonly throttleMs: number;
  private readonly fetchFn: typeof fetch;
  private lastRequestAt = 0;
  private throttleChain: Promise<void> = Promise.resolve();

  constructor(options: CongressApiClientOptions = {}) {
    const config = options.baseUrl && options.apiKey
      ? null
      : getCongressServerConfig();

    this.baseUrl = options.baseUrl ?? config?.congressApiBaseUrl ?? 'https://api.congress.gov/v3';
    this.apiKey = options.apiKey ?? config?.congressApiKey ?? '';
    this.throttleMs = options.throttleMs ?? config?.congressApiThrottleMs ?? 250;
    this.fetchFn = options.fetchFn ?? fetch;

    if (!this.apiKey) {
      throw new Error('Missing CONGRESS_API_KEY. Set it in environment or pass apiKey to CongressApiClient.');
    }
  }

  async getBillsPage(params: GetBillsPageParams): Promise<PaginatedResult<CongressBillSummary>> {
    const path = params.billType
      ? `/bill/${params.congress}/${params.billType}`
      : `/bill/${params.congress}`;

    return this.getPaginatedPage<CongressBillSummary>(path, 'bills', {
      fromDateTime: params.fromDateTime,
      toDateTime: params.toDateTime,
      sort: params.sort,
      offset: params.offset,
      limit: params.limit,
    });
  }

  async getAllBills(
    params: Omit<GetBillsPageParams, 'offset'>,
    maxPages = 50,
  ): Promise<CongressBillSummary[]> {
    const path = params.billType
      ? `/bill/${params.congress}/${params.billType}`
      : `/bill/${params.congress}`;

    return this.collectPaginated<CongressBillSummary>(path, 'bills', {
      fromDateTime: params.fromDateTime,
      toDateTime: params.toDateTime,
      sort: params.sort,
      limit: params.limit,
    }, maxPages);
  }

  async getBillActionsPage(params: GetBillActionsPageParams): Promise<PaginatedResult<CongressBillAction>> {
    const path = `/bill/${params.congress}/${params.billType}/${params.billNumber}/actions`;

    return this.getPaginatedPage<CongressBillAction>(path, 'actions', {
      offset: params.offset,
      limit: params.limit,
    });
  }

  async getAllBillActions(
    params: Omit<GetBillActionsPageParams, 'offset'>,
    maxPages = 50,
  ): Promise<CongressBillAction[]> {
    const path = `/bill/${params.congress}/${params.billType}/${params.billNumber}/actions`;

    return this.collectPaginated<CongressBillAction>(path, 'actions', {
      limit: params.limit,
    }, maxPages);
  }

  private async collectPaginated<T>(
    path: string,
    key: string,
    query: Record<string, string | number | boolean | undefined>,
    maxPages: number,
  ): Promise<T[]> {
    const items: T[] = [];
    let nextPathOrUrl: string | undefined = path;
    let nextQuery: Record<string, string | number | boolean | undefined> | undefined = query;

    for (let page = 0; page < maxPages && nextPathOrUrl; page += 1) {
      const current: PaginatedResult<T> = await this.getPaginatedPage<T>(nextPathOrUrl, key, nextQuery);
      items.push(...current.items);

      if (!current.pagination.next) {
        break;
      }

      nextPathOrUrl = current.pagination.next;
      nextQuery = undefined;
    }

    return items;
  }

  private async getPaginatedPage<T>(
    pathOrUrl: string,
    resultKey: string,
    query?: Record<string, string | number | boolean | undefined>,
  ): Promise<PaginatedResult<T>> {
    const data = await this.getJson<unknown>(pathOrUrl, { query });
    const record = expectRecord(data, 'Paginated API response');

    const itemsRaw = record[resultKey];
    if (!Array.isArray(itemsRaw)) {
      throw new Error(`Expected response field "${resultKey}" to be an array.`);
    }

    const pagination = this.readPagination(record.pagination);
    return {
      items: itemsRaw as T[],
      pagination,
    };
  }

  private readPagination(value: unknown): CongressApiPagination {
    if (!value || typeof value !== 'object') {
      return {};
    }

    const pagination = value as Record<string, unknown>;
    return {
      count: typeof pagination.count === 'number' ? pagination.count : undefined,
      next: typeof pagination.next === 'string' ? pagination.next : null,
      previous: typeof pagination.previous === 'string' ? pagination.previous : null,
    };
  }

  private async getJson<T>(pathOrUrl: string, options: RequestOptions = {}): Promise<T> {
    const url = this.buildUrl(pathOrUrl, options.query);
    const cacheKey = url.toString();
    const cached = sharedState.responseCache.get(cacheKey);
    const now = Date.now();

    if (cached?.expiresAt && now < cached.expiresAt) {
      return cached.data as T;
    }

    const inflight = sharedState.inflightRequests.get(cacheKey);
    if (inflight) {
      return inflight as Promise<T>;
    }

    const requestPromise = this.fetchJson<T>(url, cacheKey, cached, now)
      .finally(() => {
        sharedState.inflightRequests.delete(cacheKey);
      });

    sharedState.inflightRequests.set(cacheKey, requestPromise);
    return requestPromise;
  }

  private async fetchJson<T>(url: URL, cacheKey: string, cached: CacheEntry<unknown> | undefined, now: number): Promise<T> {
    const headers = new Headers({
      Accept: 'application/json',
    });

    if (cached?.etag) {
      headers.set('If-None-Match', cached.etag);
    }

    if (cached?.lastModified) {
      headers.set('If-Modified-Since', cached.lastModified);
    }

    await this.waitForThrottle();

    const response = await this.fetchFn(url, {
      method: 'GET',
      headers,
    });

    if (response.status === 304) {
      if (cached) {
        this.updateCacheExpiryFromHeaders(cacheKey, cached, response.headers, now);
        return cached.data as T;
      }

      throw new CongressApiError('Received 304 but no cached response exists.', 304, url.toString(), '');
    }

    if (!response.ok) {
      const errorBody = await response.text();
      throw new CongressApiError(
        `Congress API request failed with status ${response.status}`,
        response.status,
        url.toString(),
        errorBody,
      );
    }

    const payload = (await response.json()) as T;
    this.storeCachedResponse(cacheKey, payload, response.headers, now);
    return payload;
  }

  private storeCachedResponse<T>(cacheKey: string, payload: T, headers: Headers, now: number): void {
    const cacheControl = parseCacheControl(headers.get('cache-control'));
    if (cacheControl.noStore) {
      sharedState.responseCache.delete(cacheKey);
      return;
    }

    const entry: CacheEntry<T> = {
      data: payload,
      etag: headers.get('etag') ?? undefined,
      lastModified: headers.get('last-modified') ?? undefined,
      expiresAt: computeExpiresAt(now, headers, cacheControl),
    };

    sharedState.responseCache.set(cacheKey, entry);
  }

  private updateCacheExpiryFromHeaders(
    cacheKey: string,
    cached: CacheEntry<unknown>,
    headers: Headers,
    now: number,
  ): void {
    const cacheControl = parseCacheControl(headers.get('cache-control'));
    if (cacheControl.noStore) {
      sharedState.responseCache.delete(cacheKey);
      return;
    }

    const next: CacheEntry<unknown> = {
      ...cached,
      etag: headers.get('etag') ?? cached.etag,
      lastModified: headers.get('last-modified') ?? cached.lastModified,
      expiresAt: computeExpiresAt(now, headers, cacheControl) ?? cached.expiresAt,
    };

    sharedState.responseCache.set(cacheKey, next);
  }

  private buildUrl(
    pathOrUrl: string,
    query?: Record<string, string | number | boolean | undefined>,
  ): URL {
    const url = pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')
      ? new URL(pathOrUrl)
      : new URL(pathOrUrl, `${this.baseUrl}/`);

    if (!url.searchParams.has('api_key')) {
      url.searchParams.set('api_key', this.apiKey);
    }

    if (!url.searchParams.has('format')) {
      url.searchParams.set('format', 'json');
    }

    if (query) {
      for (const [key, value] of Object.entries(query)) {
        if (value === undefined || value === null) {
          continue;
        }

        url.searchParams.set(key, String(value));
      }
    }

    return url;
  }

  private async waitForThrottle(): Promise<void> {
    const job = this.throttleChain.then(async () => {
      const waitMs = Math.max(0, this.lastRequestAt + this.throttleMs - Date.now());
      if (waitMs > 0) {
        await sleep(waitMs);
      }
      this.lastRequestAt = Date.now();
    });

    this.throttleChain = job.catch(() => undefined);
    await job;
  }
}

function getSharedCacheState(): SharedCacheState {
  const globalCache = globalThis as typeof globalThis & { __ticriCongressApiSharedCache?: SharedCacheState };
  if (!globalCache.__ticriCongressApiSharedCache) {
    globalCache.__ticriCongressApiSharedCache = {
      responseCache: new Map<string, CacheEntry<unknown>>(),
      inflightRequests: new Map<string, Promise<unknown>>(),
    };
  }

  return globalCache.__ticriCongressApiSharedCache;
}

function parseCacheControl(value: string | null): ParsedCacheControl {
  if (!value) {
    return { noStore: false, noCache: false };
  }

  const directives = value
    .split(',')
    .map((part) => part.trim().toLowerCase())
    .filter(Boolean);

  const noStore = directives.includes('no-store');
  const noCache = directives.includes('no-cache');
  const maxAgeDirective = directives.find((directive) => directive.startsWith('max-age='));

  if (!maxAgeDirective) {
    return { noStore, noCache };
  }

  const rawMaxAge = maxAgeDirective.slice('max-age='.length);
  const parsed = Number.parseInt(rawMaxAge, 10);

  if (!Number.isFinite(parsed) || parsed < 0) {
    return { noStore, noCache };
  }

  return {
    noStore,
    noCache,
    maxAgeSeconds: parsed,
  };
}

function computeExpiresAt(
  now: number,
  headers: Headers,
  cacheControl: ParsedCacheControl,
): number | undefined {
  if (cacheControl.noCache) {
    return now;
  }

  if (cacheControl.maxAgeSeconds !== undefined) {
    return now + cacheControl.maxAgeSeconds * 1000;
  }

  const expiresHeader = headers.get('expires');
  if (!expiresHeader) {
    return now + DEFAULT_CACHE_TTL_MS;
  }

  const expiresMs = Date.parse(expiresHeader);
  if (!Number.isNaN(expiresMs)) {
    return expiresMs;
  }

  return now + DEFAULT_CACHE_TTL_MS;
}

function expectRecord(value: unknown, label: string): Record<string, unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new Error(`${label} must be an object.`);
  }

  return value as Record<string, unknown>;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
