import type { BillPathParams, Limits, SearchParams } from './types';

type ValidationError = {
  ok: false;
  status: number;
  code: string;
  message: string;
  details?: Record<string, unknown>;
};

type ValidationSuccess<T> = {
  ok: true;
  value: T;
};

export type ValidationResult<T> = ValidationSuccess<T> | ValidationError;

export function parseSearchParams(searchParams: URLSearchParams, limits: Limits): ValidationResult<SearchParams> {
  const from = normalizeText(searchParams.get('from'));
  const to = normalizeText(searchParams.get('to'));
  const q = normalizeText(searchParams.get('q'));
  const member = normalizeText(searchParams.get('member'));
  const sponsor = normalizeText(searchParams.get('sponsor'));
  const bill = normalizeText(searchParams.get('bill'));
  const type = normalizeText(searchParams.get('type'));
  const chamber = normalizeText(searchParams.get('chamber'));
  const congressRaw = normalizeText(searchParams.get('congress'));
  const pageRaw = normalizeText(searchParams.get('page'));
  const limitRaw = normalizeText(searchParams.get('limit'));

  for (const [label, value] of [['from', from], ['to', to]] as const) {
    if (value && !isIsoDate(value)) {
      return invalidQuery(`${label} must be in YYYY-MM-DD format.`, { parameter: label });
    }
  }

  if (from && to && from > to) {
    return invalidQuery('from must be before or equal to to.', { parameter: 'from' });
  }

  if (from && to) {
    const rangeDays = diffIsoDateDays(from, to);
    if (rangeDays > limits.maxDateRangeDays) {
      return invalidQuery(`date range must not exceed ${limits.maxDateRangeDays} days.`, {
        parameter: 'from',
        maxDays: limits.maxDateRangeDays,
      });
    }
  }

  if (q && q.length > limits.maxKeywordLength) {
    return invalidQuery('q is too long.', {
      parameter: 'q',
      maxLength: limits.maxKeywordLength,
    });
  }

  for (const [label, value] of [['member', member], ['sponsor', sponsor], ['bill', bill]] as const) {
    if (value && value.length > 200) {
      return invalidQuery(`${label} is too long.`, { parameter: label, maxLength: 200 });
    }
  }

  if (type && !/^[a-z]{1,12}$/i.test(type)) {
    return invalidQuery('type must contain only letters.', { parameter: 'type' });
  }

  if (chamber && !['House', 'Senate'].includes(chamber)) {
    return invalidQuery('chamber must be House or Senate.', { parameter: 'chamber' });
  }

  let congress: number | null = null;
  if (congressRaw) {
    if (!/^\d{1,3}$/.test(congressRaw)) {
      return invalidQuery('congress must be a positive integer.', { parameter: 'congress' });
    }
    congress = Number.parseInt(congressRaw, 10);
  }

  let page = 1;
  if (pageRaw) {
    if (!/^\d{1,5}$/.test(pageRaw)) {
      return invalidQuery('page must be a positive integer.', { parameter: 'page' });
    }
    page = Math.max(1, Number.parseInt(pageRaw, 10));
  }

  let limit = limits.defaultLimit;
  if (limitRaw) {
    if (!/^\d{1,5}$/.test(limitRaw)) {
      return invalidQuery('limit must be a positive integer.', { parameter: 'limit' });
    }
    limit = Math.min(limits.maxLimit, Math.max(1, Number.parseInt(limitRaw, 10)));
  }

  return {
    ok: true,
    value: {
      from,
      to,
      q,
      member,
      sponsor,
      bill,
      type: type ? type.toLowerCase() : null,
      chamber,
      congress,
      page,
      limit,
    },
  };
}

export function parseBillPath(pathname: string): ValidationResult<BillPathParams> {
  const segments = pathname.split('/').filter((value) => value.length > 0);
  if (segments.length < 5 || segments[0] !== 'congress' || segments[1] !== 'bill') {
    return {
      ok: false,
      status: 404,
      code: 'not_found',
      message: 'Route not found.',
    };
  }

  const congressRaw = segments[2];
  const typeRaw = segments[3];
  const numberRaw = segments[4];

  if (!congressRaw || !/^\d{1,3}$/.test(congressRaw)) {
    return {
      ok: false,
      status: 400,
      code: 'invalid_path',
      message: 'congress path parameter must be a positive integer.',
      details: { parameter: 'congress' },
    };
  }

  if (!typeRaw || !/^[a-zA-Z]{1,12}$/.test(typeRaw)) {
    return {
      ok: false,
      status: 400,
      code: 'invalid_path',
      message: 'type path parameter must contain only letters.',
      details: { parameter: 'type' },
    };
  }

  if (!numberRaw || !/^\d{1,10}$/.test(numberRaw)) {
    return {
      ok: false,
      status: 400,
      code: 'invalid_path',
      message: 'number path parameter must be a positive integer.',
      details: { parameter: 'number' },
    };
  }

  return {
    ok: true,
    value: {
      congress: Number.parseInt(congressRaw, 10),
      type: typeRaw.toLowerCase(),
      number: Number.parseInt(numberRaw, 10),
    },
  };
}

function invalidQuery(message: string, details?: Record<string, unknown>): ValidationError {
  return {
    ok: false,
    status: 400,
    code: 'invalid_query',
    message,
    details,
  };
}

function normalizeText(value: string | null): string | null {
  if (value === null) {
    return null;
  }

  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

function isIsoDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }

  const parsed = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().startsWith(value);
}

function diffIsoDateDays(from: string, to: string): number {
  return Math.floor((parseIsoDateUtc(to) - parseIsoDateUtc(from)) / 86_400_000);
}

function parseIsoDateUtc(value: string): number {
  const [year, month, day] = value.split('-').map((segment) => Number.parseInt(segment, 10));
  return Date.UTC(year, month - 1, day);
}
