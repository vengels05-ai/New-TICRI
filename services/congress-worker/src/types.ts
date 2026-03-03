import type { D1Database } from '@cloudflare/workers-types';

export interface Env {
  DB: D1Database;
  CONGRESS_API_KEY?: string;
  CONGRESS_API_BASE_URL?: string;
  CONGRESS_API_THROTTLE_MS?: string;
  CONGRESS_API_MAX_REQUESTS_PER_MINUTE?: string;
  CONGRESS_UPSTREAM_CACHE_TTL_MS?: string;
  CONGRESS_INGEST_ENABLED?: string;
  CONGRESS_INGEST_CONGRESS?: string;
  CONGRESS_INGEST_WINDOW_DAYS?: string;
  CONGRESS_INGEST_MAX_PAGES?: string;
  CONGRESS_INGEST_MAX_ACTION_PAGES?: string;
  CONGRESS_INGEST_MAX_BILLS_PER_RUN?: string;
  CONGRESS_ADMIN_TOKEN?: string;
  CONGRESS_BACKFILL_ENABLED?: string;
  CONGRESS_BACKFILL_ALLOW_PRODUCTION?: string;
  CONGRESS_BACKFILL_MAX_PAGES_PER_RUN?: string;
  APP_ENV?: string;
  CORS_ALLOWED_ORIGINS?: string;
  CONGRESS_REQUEST_LOGGING_ENABLED?: string;
  CONGRESS_REQUEST_LOG_INCLUDE_QUERY?: string;
  CONGRESS_SEARCH_RATE_LIMIT_ENABLED?: string;
  CONGRESS_SEARCH_RATE_LIMIT_WINDOW_MS?: string;
  CONGRESS_SEARCH_RATE_LIMIT_MAX?: string;
  MAX_DATE_RANGE_DAYS?: string;
  MAX_KEYWORD_LENGTH?: string;
  SEARCH_DEFAULT_LIMIT?: string;
  SEARCH_MAX_LIMIT?: string;
}

export interface ApiErrorBody {
  error: {
    code: string;
    message: string;
    details?: Record<string, unknown>;
  };
}

export interface SearchParams {
  from: string | null;
  to: string | null;
  q: string | null;
  member: string | null;
  sponsor: string | null;
  bill: string | null;
  type: string | null;
  chamber: string | null;
  congress: number | null;
  page: number;
  limit: number;
}

export interface BillPathParams {
  congress: number;
  type: string;
  number: number;
}

export interface Limits {
  maxDateRangeDays: number;
  maxKeywordLength: number;
  defaultLimit: number;
  maxLimit: number;
}

export interface ParsedSearchResult {
  items: unknown[];
  total: number;
  page: number;
  pageSize: number;
}

export interface ParsedBillResult {
  bill?: unknown;
}

export interface ParsedActionsResult {
  bill?: unknown;
  actions?: unknown[];
}
