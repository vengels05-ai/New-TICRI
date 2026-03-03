import { buildStatusCard } from './explainer.ts';
import { postgresExecutor, type SqlExecutor, type SqlParamValue } from './postgres.ts';
import {
  getFixtureBillActionsData,
  getFixtureBillData,
  getFixtureSearchData,
  isCongressUiTestModeEnabled,
} from './uiTestFixtures.ts';

interface SearchParams {
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

interface BillPathParams {
  congress: number;
  type: string;
  number: number;
}

interface ApiErrorBody {
  error: {
    code: string;
    message: string;
    details?: Record<string, unknown>;
  };
}

interface BillRecord {
  congress: number;
  type: string;
  number: number;
  billId: string;
  title: string;
  introducedDate: string | null;
  latestActionDate: string | null;
  latestActionText: string | null;
  originChamber: string | null;
  sponsorName: string | null;
  memberNames: string[];
}

interface ActionRecord {
  actionDate: string | null;
  actionTime: string | null;
  actionText: string | null;
  chamber: string | null;
  source: string | null;
}

interface CacheEntry<T> {
  value: T;
  expiresAt: number;
}

const SEARCH_PAGE_DEFAULT = 20;
const SEARCH_PAGE_MAX = 100;
const SEARCH_QUERY_MAX_LENGTH = 200;
const SEARCH_DATE_RANGE_MAX_DAYS = 366;
const DETAIL_CACHE_TTL_MS = 5 * 60 * 1000;
const detailCache = getDetailCache();

const SEARCH_SQL = `
WITH input AS (
  SELECT
    NULLIF(:'from', '')::date AS from_date,
    NULLIF(:'to', '')::date AS to_date,
    NULLIF(:'q', '') AS raw_q,
    NULLIF(:'member', '') AS member_name,
    NULLIF(:'sponsor', '') AS sponsor_name,
    NULLIF(:'bill', '') AS bill_term,
    lower(NULLIF(:'type', '')) AS bill_type,
    NULLIF(:'chamber', '') AS chamber_name,
    NULLIF(:'congress', '')::integer AS congress_number,
    GREATEST(NULLIF(:'page', '')::integer, 1) AS page_number,
    LEAST(GREATEST(NULLIF(:'limit', '')::integer, 1), ${SEARCH_PAGE_MAX})::integer AS page_size,
    CASE
      WHEN NULLIF(:'q', '') IS NULL THEN NULL
      ELSE websearch_to_tsquery('english', NULLIF(:'q', ''))
    END AS ts_query
), filtered AS (
  SELECT
    b.id,
    b.congress,
    b.bill_type,
    b.bill_number,
    b.bill_id_display,
    b.title,
    b.introduced_date,
    b.latest_action_date,
    b.latest_action_text,
    b.origin_chamber,
    b.sponsor_name,
    COALESCE(member_list.member_names, '[]'::json) AS member_names,
    CASE
      WHEN input.ts_query IS NULL THEN 0::real
      ELSE GREATEST(
        ts_rank_cd(b.search_vector, input.ts_query),
        COALESCE(action_match.action_rank, 0::real)
      )
    END AS rank,
    CASE
      WHEN input.ts_query IS NULL THEN NULL
      ELSE ts_headline(
        'english',
        COALESCE(action_match.action_text, b.latest_action_text, b.title, ''),
        input.ts_query,
        'MaxWords=18, MinWords=8, ShortWord=2, StartSel=<mark>, StopSel=</mark>, HighlightAll=false'
      )
    END AS snippet,
    count(*) OVER () AS total_count,
    input.page_number,
    input.page_size
  FROM bills b
  CROSS JOIN input
  LEFT JOIN LATERAL (
    SELECT json_agg(m.full_name ORDER BY m.full_name) AS member_names
    FROM bill_members bm
    JOIN members m ON m.id = bm.member_id
    WHERE bm.bill_id = b.id
  ) member_list ON TRUE
  LEFT JOIN LATERAL (
    SELECT
      ba.action_text,
      ts_rank_cd(ba.search_vector, input.ts_query) AS action_rank
    FROM bill_actions ba
    WHERE input.ts_query IS NOT NULL
      AND ba.bill_id = b.id
      AND ba.search_vector @@ input.ts_query
    ORDER BY action_rank DESC, ba.action_date DESC, ba.sequence DESC
    LIMIT 1
  ) action_match ON TRUE
  WHERE (input.from_date IS NULL OR b.latest_action_date >= input.from_date)
    AND (input.to_date IS NULL OR b.latest_action_date <= input.to_date)
    AND (input.bill_type IS NULL OR b.bill_type = input.bill_type)
    AND (input.chamber_name IS NULL OR COALESCE(b.origin_chamber, '') = input.chamber_name)
    AND (input.congress_number IS NULL OR b.congress = input.congress_number)
    AND (input.sponsor_name IS NULL OR COALESCE(b.sponsor_name, '') ILIKE '%' || input.sponsor_name || '%')
    AND (
      input.bill_term IS NULL
      OR b.bill_id_display ILIKE '%' || input.bill_term || '%'
      OR b.title ILIKE '%' || input.bill_term || '%'
    )
    AND (
      input.member_name IS NULL
      OR EXISTS (
        SELECT 1
        FROM bill_members bm
        JOIN members m ON m.id = bm.member_id
        WHERE bm.bill_id = b.id
          AND m.full_name ILIKE '%' || input.member_name || '%'
      )
    )
    AND (
      input.ts_query IS NULL
      OR b.search_vector @@ input.ts_query
      OR EXISTS (
        SELECT 1
        FROM bill_actions ba
        WHERE ba.bill_id = b.id
          AND ba.search_vector @@ input.ts_query
      )
    )
), paged AS (
  SELECT *
  FROM filtered
  ORDER BY rank DESC, latest_action_date DESC NULLS LAST, congress DESC, bill_type ASC, bill_number DESC
  OFFSET ((SELECT page_number - 1 FROM input) * (SELECT page_size FROM input))
  LIMIT (SELECT page_size FROM input)
)
SELECT json_build_object(
  'items', COALESCE(json_agg(json_build_object(
    'congress', paged.congress,
    'type', paged.bill_type,
    'number', paged.bill_number,
    'billId', paged.bill_id_display,
    'title', paged.title,
    'introducedDate', paged.introduced_date,
    'latestActionDate', paged.latest_action_date,
    'latestActionText', paged.latest_action_text,
    'originChamber', paged.origin_chamber,
    'sponsorName', paged.sponsor_name,
    'memberNames', paged.member_names,
    'rank', round((paged.rank::numeric), 6),
    'snippet', paged.snippet
  )), '[]'::json),
  'total', COALESCE(max(paged.total_count), (SELECT count(*) FROM filtered), 0),
  'page', COALESCE(max(paged.page_number), (SELECT page_number FROM input)),
  'pageSize', COALESCE(max(paged.page_size), (SELECT page_size FROM input))
)::text
FROM paged;
`;

const BILL_SQL = `
SELECT COALESCE((
  SELECT json_build_object(
    'bill', json_build_object(
      'congress', b.congress,
      'type', b.bill_type,
      'number', b.bill_number,
      'billId', b.bill_id_display,
      'title', b.title,
      'introducedDate', b.introduced_date,
      'latestActionDate', b.latest_action_date,
      'latestActionText', b.latest_action_text,
      'originChamber', b.origin_chamber,
      'sponsorName', b.sponsor_name,
      'memberNames', COALESCE(member_list.member_names, '[]'::json)
    )
  )
  FROM bills b
  LEFT JOIN LATERAL (
    SELECT json_agg(m.full_name ORDER BY m.full_name) AS member_names
    FROM bill_members bm
    JOIN members m ON m.id = bm.member_id
    WHERE bm.bill_id = b.id
  ) member_list ON TRUE
  WHERE b.congress = NULLIF(:'congress', '')::integer
    AND b.bill_type = lower(NULLIF(:'type', ''))
    AND b.bill_number = NULLIF(:'number', '')::integer
), '{}'::json)::text;
`;

const ACTIONS_SQL = `
SELECT COALESCE((
  SELECT json_build_object(
    'bill', json_build_object(
      'congress', b.congress,
      'type', b.bill_type,
      'number', b.bill_number,
      'billId', b.bill_id_display
    ),
    'actions', COALESCE((
      SELECT json_agg(json_build_object(
        'actionDate', ba.action_date,
        'actionTime', ba.action_time,
        'actionText', ba.action_text,
        'chamber', ba.chamber,
        'source', ba.source
      ) ORDER BY ba.action_date DESC, ba.sequence DESC, ba.id DESC)
      FROM bill_actions ba
      WHERE ba.bill_id = b.id
    ), '[]'::json)
  )
  FROM bills b
  WHERE b.congress = NULLIF(:'congress', '')::integer
    AND b.bill_type = lower(NULLIF(:'type', ''))
    AND b.bill_number = NULLIF(:'number', '')::integer
), '{}'::json)::text;
`;

export async function handleCongressSearch(request: Request, db: SqlExecutor = postgresExecutor): Promise<Response> {
  try {
    const url = new URL(request.url);
    const parsed = parseSearchParams(url.searchParams);
    if (!parsed.ok) {
      return json(parsed.status, errorBody(parsed.code, parsed.message, parsed.details), 'private, no-store');
    }

    if (isCongressUiTestModeEnabled()) {
      const result = getFixtureSearchData(parsed.value);

      return json(200, {
        data: {
          items: result.items,
          total: result.total,
          page: result.page,
          pageSize: result.pageSize,
          totalPages: Math.max(1, Math.ceil(result.total / result.pageSize)),
          query: parsed.value,
        },
      }, 'private, no-store');
    }

    const result = await db.queryJson<{ items: unknown[]; total: number; page: number; pageSize: number }>(SEARCH_SQL, toSqlParams(parsed.value));

    return json(200, {
      data: {
        items: result.items ?? [],
        total: result.total ?? 0,
        page: result.page ?? parsed.value.page,
        pageSize: result.pageSize ?? parsed.value.limit,
        totalPages: Math.max(1, Math.ceil((result.total ?? 0) / (result.pageSize ?? parsed.value.limit))),
        query: parsed.value,
      },
    }, 'private, no-store');
  } catch (error) {
    return json(500, errorBody('internal_error', error instanceof Error ? error.message : 'Unexpected error'), 'private, no-store');
  }
}

export async function handleCongressBill(
  params: Record<string, string>,
  db: SqlExecutor = postgresExecutor,
): Promise<Response> {
  const parsed = parseBillPathParams(params);
  if (!parsed.ok) {
    return json(parsed.status, errorBody(parsed.code, parsed.message, parsed.details), 'private, no-store');
  }

  if (isCongressUiTestModeEnabled()) {
    const result = getFixtureBillData(parsed.value);
    if (!result?.bill) {
      return json(404, errorBody('not_found', 'Bill not found.'), 'private, no-store');
    }

    return json(200, { data: result }, 'private, no-store');
  }

  try {
    const result = await getCongressBillDetailData(parsed.value, db);
    if (!result.bill) {
      return json(404, errorBody('not_found', 'Bill not found.'), 'private, no-store');
    }

    return json(200, { data: result }, 'public, max-age=300, stale-while-revalidate=900');
  } catch (error) {
    return json(500, errorBody('internal_error', error instanceof Error ? error.message : 'Unexpected error'), 'private, no-store');
  }
}

export async function handleCongressBillActions(
  params: Record<string, string>,
  db: SqlExecutor = postgresExecutor,
): Promise<Response> {
  const parsed = parseBillPathParams(params);
  if (!parsed.ok) {
    return json(parsed.status, errorBody(parsed.code, parsed.message, parsed.details), 'private, no-store');
  }

  if (isCongressUiTestModeEnabled()) {
    const result = getFixtureBillActionsData(parsed.value);
    if (!result?.bill) {
      return json(404, errorBody('not_found', 'Bill not found.'), 'private, no-store');
    }

    return json(200, { data: result }, 'private, no-store');
  }

  try {
    const result = await getCongressBillActionsData(parsed.value, db);
    if (!result.bill) {
      return json(404, errorBody('not_found', 'Bill not found.'), 'private, no-store');
    }

    return json(200, { data: result }, 'public, max-age=300, stale-while-revalidate=900');
  } catch (error) {
    return json(500, errorBody('internal_error', error instanceof Error ? error.message : 'Unexpected error'), 'private, no-store');
  }
}

export async function getCongressBillDetailData(parsed: BillPathParams, db: SqlExecutor = postgresExecutor) {
  const cacheKey = `bill:${parsed.congress}:${parsed.type}:${parsed.number}`;

  return getOrSetCache(cacheKey, async () => {
    const billResult = await db.queryJson<{ bill?: BillRecord }>(BILL_SQL, toSqlParams(parsed));
    if (!billResult.bill) {
      return { bill: undefined, statusCard: undefined };
    }

    const actionsResult = await getCongressBillActionsData(parsed, db);
    const actions = actionsResult.actions ?? [];

    return {
      bill: billResult.bill,
      statusCard: buildStatusCard(billResult.bill, actions),
    };
  });
}

export async function getCongressBillActionsData(parsed: BillPathParams, db: SqlExecutor = postgresExecutor) {
  const cacheKey = `actions:${parsed.congress}:${parsed.type}:${parsed.number}`;
  return getOrSetCache(cacheKey, async () => db.queryJson<{ bill?: unknown; actions?: ActionRecord[] }>(ACTIONS_SQL, toSqlParams(parsed)));
}

function json(status: number, body: unknown, cacheControl: string): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': cacheControl,
    },
  });
}

function errorBody(code: string, message: string, details?: Record<string, unknown>): ApiErrorBody {
  return {
    error: {
      code,
      message,
      ...(details ? { details } : {}),
    },
  };
}

function parseSearchParams(searchParams: URLSearchParams):
  | { ok: true; value: SearchParams }
  | { ok: false; status: number; code: string; message: string; details?: Record<string, unknown> } {
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
      return {
        ok: false,
        status: 400,
        code: 'invalid_query',
        message: `${label} must be in YYYY-MM-DD format.`,
        details: { parameter: label },
      };
    }
  }

  if (from && to && from > to) {
    return {
      ok: false,
      status: 400,
      code: 'invalid_query',
      message: 'from must be before or equal to to.',
      details: { parameter: 'from' },
    };
  }

  if (from && to) {
    const rangeDays = diffIsoDateDays(from, to);
    if (rangeDays > SEARCH_DATE_RANGE_MAX_DAYS) {
      return {
        ok: false,
        status: 400,
        code: 'invalid_query',
        message: `date range must not exceed ${SEARCH_DATE_RANGE_MAX_DAYS} days.`,
        details: { parameter: 'from', maxDays: SEARCH_DATE_RANGE_MAX_DAYS },
      };
    }
  }

  for (const [label, value] of [['q', q], ['member', member], ['sponsor', sponsor], ['bill', bill]] as const) {
    if (value && value.length > SEARCH_QUERY_MAX_LENGTH) {
      return {
        ok: false,
        status: 400,
        code: 'invalid_query',
        message: `${label} is too long.`,
        details: { parameter: label, maxLength: SEARCH_QUERY_MAX_LENGTH },
      };
    }
  }

  if (type && !/^[a-z]{1,12}$/i.test(type)) {
    return {
      ok: false,
      status: 400,
      code: 'invalid_query',
      message: 'type must contain only letters.',
      details: { parameter: 'type' },
    };
  }

  if (chamber && !['House', 'Senate'].includes(chamber)) {
    return {
      ok: false,
      status: 400,
      code: 'invalid_query',
      message: 'chamber must be House or Senate.',
      details: { parameter: 'chamber' },
    };
  }

  let congress: number | null = null;
  if (congressRaw) {
    if (!/^\d{1,3}$/.test(congressRaw)) {
      return {
        ok: false,
        status: 400,
        code: 'invalid_query',
        message: 'congress must be a positive integer.',
        details: { parameter: 'congress' },
      };
    }
    congress = Number.parseInt(congressRaw, 10);
  }

  let page = 1;
  if (pageRaw) {
    if (!/^\d{1,5}$/.test(pageRaw)) {
      return {
        ok: false,
        status: 400,
        code: 'invalid_query',
        message: 'page must be a positive integer.',
        details: { parameter: 'page' },
      };
    }
    page = Math.max(1, Number.parseInt(pageRaw, 10));
  }

  let limit = SEARCH_PAGE_DEFAULT;
  if (limitRaw) {
    if (!/^\d{1,5}$/.test(limitRaw)) {
      return {
        ok: false,
        status: 400,
        code: 'invalid_query',
        message: 'limit must be a positive integer.',
        details: { parameter: 'limit' },
      };
    }
    limit = Math.min(SEARCH_PAGE_MAX, Math.max(1, Number.parseInt(limitRaw, 10)));
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

function parseBillPathParams(params: Record<string, string>):
  | { ok: true; value: BillPathParams }
  | { ok: false; status: number; code: string; message: string; details?: Record<string, unknown> } {
  const congressRaw = params.congress;
  const typeRaw = params.type;
  const numberRaw = params.number;

  if (!/^\d{1,3}$/.test(congressRaw ?? '')) {
    return {
      ok: false,
      status: 400,
      code: 'invalid_path',
      message: 'congress path parameter must be a positive integer.',
      details: { parameter: 'congress' },
    };
  }

  if (!/^[a-z]{1,12}$/i.test(typeRaw ?? '')) {
    return {
      ok: false,
      status: 400,
      code: 'invalid_path',
      message: 'type path parameter must contain only letters.',
      details: { parameter: 'type' },
    };
  }

  if (!/^\d{1,10}$/.test(numberRaw ?? '')) {
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

function toSqlParams(value: SearchParams | BillPathParams): Record<string, SqlParamValue> {
  return Object.fromEntries(
    Object.entries(value).map(([key, val]) => [key, val ?? '']),
  );
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

async function getOrSetCache<T>(key: string, load: () => Promise<T>): Promise<T> {
  const now = Date.now();
  const cached = detailCache.get(key) as CacheEntry<T> | undefined;
  if (cached && cached.expiresAt > now) {
    return cached.value;
  }

  const value = await load();
  detailCache.set(key, {
    value,
    expiresAt: now + DETAIL_CACHE_TTL_MS,
  });
  return value;
}

function getDetailCache() {
  const globalCache = globalThis as typeof globalThis & { __ticriCongressDetailCache?: Map<string, CacheEntry<unknown>> };
  if (!globalCache.__ticriCongressDetailCache) {
    globalCache.__ticriCongressDetailCache = new Map<string, CacheEntry<unknown>>();
  }

  return globalCache.__ticriCongressDetailCache;
}
