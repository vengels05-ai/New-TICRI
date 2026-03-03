import { execFileSync } from 'node:child_process';
import { getCongressServerConfig } from './config.ts';

export type SqlParamValue = string | number | boolean | null | undefined;

export interface SqlExecutor {
  queryJson<T>(sql: string, params?: Record<string, SqlParamValue>): Promise<T>;
}

function getDatabaseUrl(): string {
  return getCongressServerConfig().databaseUrl;
}

function toPsqlVariable(value: SqlParamValue): string {
  if (value === null || value === undefined) {
    return '';
  }

  return String(value);
}

export class PsqlExecutor implements SqlExecutor {
  async queryJson<T>(sql: string, params: Record<string, SqlParamValue> = {}): Promise<T> {
    const args = ['-v', 'ON_ERROR_STOP=1', '-q', '-t', '-A'];

    for (const [key, value] of Object.entries(params)) {
      args.push('-v', `${key}=${toPsqlVariable(value)}`);
    }

    args.push('-c', sql, getDatabaseUrl());

    const output = execFileSync('psql', args, {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    }).trim();

    if (!output) {
      throw new Error('Expected JSON result from Postgres, but query returned no rows.');
    }

    return JSON.parse(output) as T;
  }
}

export const postgresExecutor = new PsqlExecutor();
