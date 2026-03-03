import type { Env, Limits } from './types';

const DEFAULT_MAX_DATE_RANGE_DAYS = 366;
const DEFAULT_MAX_KEYWORD_LENGTH = 200;
const DEFAULT_SEARCH_LIMIT = 20;
const DEFAULT_MAX_LIMIT = 100;

export function getLimits(env: Env): Limits {
  return {
    maxDateRangeDays: readPositiveInt(env.MAX_DATE_RANGE_DAYS, DEFAULT_MAX_DATE_RANGE_DAYS),
    maxKeywordLength: readPositiveInt(env.MAX_KEYWORD_LENGTH, DEFAULT_MAX_KEYWORD_LENGTH),
    defaultLimit: readPositiveInt(env.SEARCH_DEFAULT_LIMIT, DEFAULT_SEARCH_LIMIT),
    maxLimit: readPositiveInt(env.SEARCH_MAX_LIMIT, DEFAULT_MAX_LIMIT),
  };
}

export function getAllowedOrigins(env: Env): string[] {
  const raw = env.CORS_ALLOWED_ORIGINS ?? 'https://ticri.org,https://www.ticri.org';
  return raw
    .split(',')
    .map((value) => value.trim())
    .filter((value) => value.length > 0);
}

export function assertRequiredEnv(env: Env) {
  if (!env.DB) {
    throw new Error('Missing required D1 binding: DB');
  }
}

export function parseBoolean(value: string | undefined, fallback: boolean): boolean {
  if (value === undefined) {
    return fallback;
  }

  return ['1', 'true', 'yes', 'on'].includes(value.toLowerCase());
}

function readPositiveInt(raw: string | undefined, fallback: number): number {
  if (!raw) {
    return fallback;
  }

  const parsed = Number.parseInt(raw, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}
