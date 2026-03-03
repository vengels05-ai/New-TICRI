import type { D1Database } from './cf-types';
import type { Env } from './types';

export function getDb(env: Env): D1Database {
  if (!env.DB) {
    throw new Error('Missing required D1 binding: DB');
  }

  return env.DB;
}
