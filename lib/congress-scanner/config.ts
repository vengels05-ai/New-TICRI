export interface CongressServerConfig {
  databaseUrl: string;
  congressApiBaseUrl: string;
  congressApiKey: string;
  congressApiThrottleMs: number;
  requestLoggingEnabled: boolean;
  includeQueryInLogs: boolean;
  rateLimitEnabled: boolean;
  rateLimitWindowMs: number;
}

interface EnvSource {
  [key: string]: string | undefined;
}

let cachedConfig: CongressServerConfig | null = null;

export function getCongressServerConfig(env: EnvSource = process.env): CongressServerConfig {
  if (env === process.env && cachedConfig) {
    return cachedConfig;
  }

  const missing = [
    ['DATABASE_URL', required(env, 'DATABASE_URL')],
    ['CONGRESS_API_BASE_URL', required(env, 'CONGRESS_API_BASE_URL')],
    ['CONGRESS_API_KEY', required(env, 'CONGRESS_API_KEY')],
  ].filter(([, value]) => value === null)
    .map(([key]) => key);

  if (missing.length > 0) {
    throw new Error(`Missing required server environment variables: ${missing.join(', ')}`);
  }

  const config: CongressServerConfig = {
    databaseUrl: env.DATABASE_URL as string,
    congressApiBaseUrl: env.CONGRESS_API_BASE_URL as string,
    congressApiKey: env.CONGRESS_API_KEY as string,
    congressApiThrottleMs: parsePositiveInteger(env.CONGRESS_API_THROTTLE_MS, 250),
    requestLoggingEnabled: parseBoolean(env.CONGRESS_API_REQUEST_LOGGING_ENABLED, false),
    includeQueryInLogs: parseBoolean(env.CONGRESS_API_INCLUDE_QUERY_IN_LOGS, false),
    rateLimitEnabled: parseBoolean(env.CONGRESS_API_RATE_LIMIT_ENABLED, true),
    rateLimitWindowMs: parsePositiveInteger(env.CONGRESS_API_RATE_LIMIT_WINDOW_MS, 60_000),
  };

  if (env === process.env) {
    cachedConfig = config;
  }

  return config;
}

export function resetCongressServerConfigCache() {
  cachedConfig = null;
}

function required(env: EnvSource, key: string) {
  const value = env[key]?.trim();
  return value ? value : null;
}

function parseBoolean(value: string | undefined, fallback: boolean) {
  if (value === undefined) {
    return fallback;
  }

  return ['1', 'true', 'yes', 'on'].includes(value.toLowerCase());
}

function parsePositiveInteger(value: string | undefined, fallback: number) {
  if (value === undefined) {
    return fallback;
  }

  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}
