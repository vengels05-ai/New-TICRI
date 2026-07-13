interface D1Result<T = Record<string, unknown>> {
  results: T[];
}

interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  first<T = Record<string, unknown>>(): Promise<T | null>;
  all<T = Record<string, unknown>>(): Promise<D1Result<T>>;
}

interface D1Database {
  prepare(query: string): D1PreparedStatement;
}

interface Env {
  SCOTUS_DB: D1Database;
  CONGRESS_DB: D1Database;
  LAW_DB: D1Database;
  CORS_ALLOWED_ORIGINS?: string;
}

type JsonBody = Record<string, unknown> | unknown[];

function buildCorsHeaders(origin: string | null, env: Env): Headers {
  const headers = new Headers({
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
    Vary: 'Origin',
  });

  const allowedOrigins = (env.CORS_ALLOWED_ORIGINS ?? '').split(',').map((value) => value.trim()).filter(Boolean);

  if (allowedOrigins.includes('*')) {
    headers.set('Access-Control-Allow-Origin', '*');
    return headers;
  }

  if (origin && allowedOrigins.includes(origin)) {
    headers.set('Access-Control-Allow-Origin', origin);
  }

  return headers;
}

function json(body: JsonBody, env: Env, origin: string | null, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: buildCorsHeaders(origin, env),
  });
}

function err(message: string, env: Env, origin: string | null, status = 400, details?: Record<string, unknown>): Response {
  return json({ error: message, ...(details ? { details } : {}) }, env, origin, status);
}

function safeLimit(value: string | null, defaultLimit = 20, maxLimit = 100): number {
  const parsed = Number.parseInt(value ?? String(defaultLimit), 10);
  if (Number.isNaN(parsed) || parsed <= 0) {
    return defaultLimit;
  }
  return Math.min(parsed, maxLimit);
}

function safeOffset(value: string | null): number {
  const parsed = Number.parseInt(value ?? '0', 10);
  if (Number.isNaN(parsed) || parsed < 0) {
    return 0;
  }
  return parsed;
}

function parseOptionalInt(value: string | null): number | null {
  if (!value) {
    return null;
  }

  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed)) {
    return null;
  }

  return parsed;
}

function parsePathId(value: string): number | null {
  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed) || parsed <= 0) {
    return null;
  }
  return parsed;
}

function mapSubjectRows(rows: Array<{ subject?: string }>): string[] {
  return rows.map((row) => row.subject).filter((value): value is string => Boolean(value));
}

const worker: ExportedHandler<Env> = {
  async fetch(request, env) {
    const requestId = crypto.randomUUID();
    const origin = request.headers.get('Origin');

    if (request.method === 'OPTIONS') {
      const corsHeaders = buildCorsHeaders(origin, env);
      if (!corsHeaders.get('Access-Control-Allow-Origin')) {
        return new Response(null, { status: 403, headers: corsHeaders });
      }
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (request.method !== 'GET') {
      return err('Method not allowed', env, origin, 405);
    }

    const url = new URL(request.url);
    const path = url.pathname;
    const p = url.searchParams;

    try {
      if (path === '/api/cases/search') {
        const q = (p.get('q') ?? '').trim();
        const limit = safeLimit(p.get('limit'), 20, 50);
        const offset = safeOffset(p.get('offset'));

        if (!q) {
          return err('q parameter required', env, origin);
        }

        const results = await env.SCOTUS_DB.prepare(`
          SELECT
            c.id, c.case_name, c.date_filed,
            c.scdb_decision_direction, c.scdb_votes_majority, c.scdb_votes_minority,
            c.precedential_status, c.citation_count,
            d.docket_number
          FROM scotus_opinion_clusters c
          JOIN scotus_dockets d ON d.id = c.docket_id
          WHERE c.case_name LIKE ?
            AND c.precedential_status IN ('Published', 'Precedential')
          ORDER BY c.date_filed DESC
          LIMIT ? OFFSET ?
        `).bind(`%${q}%`, limit, offset).all();

        const total = await env.SCOTUS_DB.prepare(`
          SELECT COUNT(*) AS n
          FROM scotus_opinion_clusters c
          WHERE c.case_name LIKE ?
            AND c.precedential_status IN ('Published', 'Precedential')
        `).bind(`%${q}%`).first<{ n?: number }>();

        return json({ results: results.results, total: total?.n ?? 0, offset, limit }, env, origin);
      }

      if (path === '/api/cases/recent') {
        const limit = safeLimit(p.get('limit'), 20, 50);
        const results = await env.SCOTUS_DB.prepare(`
          SELECT c.id, c.case_name, c.date_filed,
            c.scdb_decision_direction, c.scdb_votes_majority, c.scdb_votes_minority,
            c.citation_count, d.docket_number
          FROM scotus_opinion_clusters c
          JOIN scotus_dockets d ON d.id = c.docket_id
          WHERE c.precedential_status IN ('Published', 'Precedential')
            AND c.date_filed IS NOT NULL
          ORDER BY c.date_filed DESC
          LIMIT ?
        `).bind(limit).all();

        return json({ results: results.results }, env, origin);
      }

      if (path === '/api/cases/notable') {
        const limit = safeLimit(p.get('limit'), 20, 50);
        const results = await env.SCOTUS_DB.prepare(`
          SELECT c.id, c.case_name, c.date_filed,
            c.scdb_decision_direction, c.scdb_votes_majority, c.scdb_votes_minority,
            c.citation_count, d.docket_number
          FROM scotus_opinion_clusters c
          JOIN scotus_dockets d ON d.id = c.docket_id
          WHERE c.precedential_status IN ('Published', 'Precedential')
            AND c.citation_count > 0
          ORDER BY c.citation_count DESC
          LIMIT ?
        `).bind(limit).all();

        return json({ results: results.results }, env, origin);
      }

      const caseMatch = path.match(/^\/api\/cases\/(\d+)$/);
      if (caseMatch) {
        const id = parsePathId(caseMatch[1]);
        if (!id) {
          return err('Invalid case id', env, origin);
        }

        const cluster = await env.SCOTUS_DB.prepare(`
          SELECT c.*, d.docket_number, d.date_argued, d.date_cert_granted,
            d.jurisdiction_type, d.nature_of_suit
          FROM scotus_opinion_clusters c
          JOIN scotus_dockets d ON d.id = c.docket_id
          WHERE c.id = ?
        `).bind(id).first<Record<string, unknown>>();

        if (!cluster) {
          return err('Case not found', env, origin, 404);
        }

        const opinions = await env.SCOTUS_DB.prepare(`
          SELECT id, type, per_curiam, author_str, joined_by_str,
            plain_text, html_with_citations, page_count
          FROM scotus_opinions
          WHERE cluster_id = ?
          ORDER BY type
        `).bind(id).all();

        const citations = await env.SCOTUS_DB.prepare(`
          SELECT ci.cited_opinion_id, cl.case_name, cl.date_filed
          FROM scotus_citations ci
          JOIN scotus_opinions op ON op.id = ci.citing_opinion_id
          JOIN scotus_opinion_clusters cl ON cl.id = ci.cited_opinion_id
          WHERE op.cluster_id = ?
          LIMIT 20
        `).bind(id).all();

        return json({ ...cluster, opinions: opinions.results, citations: citations.results }, env, origin);
      }

      if (path === '/api/bills/search') {
        const q = (p.get('q') ?? '').trim();
        const congressRaw = p.get('congress');
        const congress = parseOptionalInt(congressRaw);
        const limit = safeLimit(p.get('limit'), 20, 50);
        const offset = safeOffset(p.get('offset'));

        if (congressRaw && congress === null) {
          return err('congress must be an integer', env, origin);
        }

        let sql = `
          SELECT bill_id, congress_number, bill_type, bill_number, title, short_title,
            sponsor_name, sponsor_party, sponsor_state, introduced_date,
            latest_action_date, latest_action_text, policy_area, origin_chamber
          FROM congress_bills
          WHERE 1 = 1
        `;
        const binds: unknown[] = [];

        if (q) {
          sql += ' AND (title LIKE ? OR short_title LIKE ?)';
          binds.push(`%${q}%`, `%${q}%`);
        }

        if (congress !== null) {
          sql += ' AND congress_number = ?';
          binds.push(congress);
        }

        sql += ' ORDER BY introduced_date DESC LIMIT ? OFFSET ?';
        binds.push(limit, offset);

        const results = await env.CONGRESS_DB.prepare(sql).bind(...binds).all();
        return json({ results: results.results, offset, limit }, env, origin);
      }

      if (path === '/api/bills/recent') {
        const limit = safeLimit(p.get('limit'), 20, 50);
        const results = await env.CONGRESS_DB.prepare(`
          SELECT bill_id, congress_number, bill_type, bill_number, title, short_title,
            sponsor_name, sponsor_party, sponsor_state, introduced_date,
            latest_action_date, latest_action_text, policy_area, origin_chamber
          FROM congress_bills
          WHERE introduced_date IS NOT NULL
          ORDER BY introduced_date DESC
          LIMIT ?
        `).bind(limit).all();

        return json({ results: results.results }, env, origin);
      }

      const billMatch = path.match(/^\/api\/bills\/([A-Za-z0-9-]+)$/);
      if (billMatch) {
        const billId = billMatch[1];

        const bill = await env.CONGRESS_DB.prepare(`
          SELECT * FROM congress_bills WHERE bill_id = ?
        `).bind(billId).first<Record<string, unknown>>();

        if (!bill) {
          return err('Bill not found', env, origin, 404);
        }

        const subjects = await env.CONGRESS_DB.prepare(`
          SELECT subject FROM congress_bill_subjects WHERE bill_id = ? LIMIT 50
        `).bind(billId).all<{ subject?: string }>();

        const cosponsors = await env.CONGRESS_DB.prepare(`
          SELECT bioguide_id, name, party, state, sponsorship_date
          FROM congress_bill_cosponsors WHERE bill_id = ? LIMIT 50
        `).bind(billId).all();

        const committees = await env.CONGRESS_DB.prepare(`
          SELECT committee_name, committee_code, chamber
          FROM congress_bill_committees WHERE bill_id = ? LIMIT 20
        `).bind(billId).all();

        return json({
          ...bill,
          subjects: mapSubjectRows(subjects.results),
          cosponsors: cosponsors.results,
          committees: committees.results,
        }, env, origin);
      }

      if (path === '/api/members/search') {
        const q = (p.get('q') ?? '').trim();
        const state = (p.get('state') ?? '').trim();
        const party = (p.get('party') ?? '').trim();
        const limit = safeLimit(p.get('limit'), 20, 50);

        let sql = 'SELECT * FROM congress_members WHERE 1 = 1';
        const binds: unknown[] = [];

        if (q) {
          sql += ' AND name LIKE ?';
          binds.push(`%${q}%`);
        }

        if (state) {
          sql += ' AND state = ?';
          binds.push(state);
        }

        if (party) {
          sql += ' AND party LIKE ?';
          binds.push(`%${party}%`);
        }

        sql += ' ORDER BY last_name LIMIT ?';
        binds.push(limit);

        const results = await env.CONGRESS_DB.prepare(sql).bind(...binds).all();
        return json({ results: results.results }, env, origin);
      }

      if (path === '/api/uscode/search') {
        const q = (p.get('q') ?? '').trim();
        const titleRaw = p.get('title');
        const title = parseOptionalInt(titleRaw);
        const limit = safeLimit(p.get('limit'), 20, 50);
        const offset = safeOffset(p.get('offset'));

        if (titleRaw && title === null) {
          return err('title must be an integer', env, origin);
        }

        if (!q && title === null) {
          return err('q or title parameter required', env, origin);
        }

        let sql = `
          SELECT granule_id, title_number, title_name, citation,
            section_number, heading, chapter, subchapter
          FROM uscode_sections
          WHERE 1 = 1
        `;
        const binds: unknown[] = [];

        if (q) {
          sql += ' AND (heading LIKE ? OR full_text LIKE ?)';
          binds.push(`%${q}%`, `%${q}%`);
        }

        if (title !== null) {
          sql += ' AND title_number = ?';
          binds.push(title);
        }

        sql += ' ORDER BY title_number, section_number LIMIT ? OFFSET ?';
        binds.push(limit, offset);

        const results = await env.LAW_DB.prepare(sql).bind(...binds).all();
        return json({ results: results.results, offset, limit }, env, origin);
      }

      const uscodeMatch = path.match(/^\/api\/uscode\/(.+)$/);
      if (uscodeMatch) {
        const granuleId = decodeURIComponent(uscodeMatch[1]);
        const section = await env.LAW_DB.prepare(`
          SELECT * FROM uscode_sections WHERE granule_id = ?
        `).bind(granuleId).first();

        if (!section) {
          return err('Section not found', env, origin, 404);
        }

        return json(section as Record<string, unknown>, env, origin);
      }

      if (path === '/api/eos/search') {
        const q = (p.get('q') ?? '').trim();
        const president = (p.get('president') ?? '').trim();
        const limit = safeLimit(p.get('limit'), 20, 50);
        const offset = safeOffset(p.get('offset'));

        let sql = `
          SELECT id, document_number, eo_number, title, president,
            president_slug, signing_date, citation, fr_url
          FROM executive_orders
          WHERE 1 = 1
        `;
        const binds: unknown[] = [];

        if (q) {
          sql += ' AND (title LIKE ? OR full_text LIKE ?)';
          binds.push(`%${q}%`, `%${q}%`);
        }

        if (president) {
          sql += ' AND president_slug = ?';
          binds.push(president);
        }

        sql += ' ORDER BY signing_date DESC LIMIT ? OFFSET ?';
        binds.push(limit, offset);

        const results = await env.LAW_DB.prepare(sql).bind(...binds).all();
        return json({ results: results.results, offset, limit }, env, origin);
      }

      const eoMatch = path.match(/^\/api\/eos\/(\d+)$/);
      if (eoMatch) {
        const id = parsePathId(eoMatch[1]);
        if (!id) {
          return err('Invalid executive order id', env, origin);
        }

        const eo = await env.LAW_DB.prepare(`
          SELECT * FROM executive_orders WHERE id = ?
        `).bind(id).first();

        if (!eo) {
          return err('Executive order not found', env, origin, 404);
        }

        return json(eo as Record<string, unknown>, env, origin);
      }

      const fredMatch = path.match(/^\/api\/fred\/([A-Z0-9_]+)$/);
      if (fredMatch) {
        const seriesId = fredMatch[1];
        const series = await env.LAW_DB.prepare(`
          SELECT * FROM fred_series WHERE series_id = ?
        `).bind(seriesId).first<Record<string, unknown>>();

        if (!series) {
          return err('Series not found', env, origin, 404);
        }

        const observations = await env.LAW_DB.prepare(`
          SELECT obs_date, value
          FROM fred_observations
          WHERE series_id = ?
          ORDER BY obs_date ASC
        `).bind(seriesId).all();

        return json({ ...series, observations: observations.results }, env, origin);
      }

      if (path === '/health') {
        const [scotus, congress, law] = await Promise.all([
          env.SCOTUS_DB.prepare('SELECT 1 AS ok FROM scotus_dockets LIMIT 1').first<{ ok?: number }>(),
          env.CONGRESS_DB.prepare('SELECT 1 AS ok FROM congress_bills LIMIT 1').first<{ ok?: number }>(),
          env.LAW_DB.prepare('SELECT 1 AS ok FROM uscode_sections LIMIT 1').first<{ ok?: number }>(),
        ]);

        return json({
          status: 'ok',
          request_id: requestId,
          scotus_ready: Boolean(scotus?.ok),
          congress_ready: Boolean(congress?.ok),
          law_ready: Boolean(law?.ok),
        }, env, origin);
      }

      return err('Not found', env, origin, 404);
    } catch (error) {
      console.error('TheSource worker error', {
        requestId,
        path,
        error: error instanceof Error ? error.message : String(error),
      });

      return err('Internal server error', env, origin, 500, { request_id: requestId });
    }
  },
};

export default worker;
