import type { D1Database } from './cf-types';
import type { BillPathParams, ParsedActionsResult, ParsedBillResult, ParsedSearchResult, SearchParams } from './types';

interface BillRow {
  id: number;
  congress: number;
  bill_type: string;
  bill_number: number;
  bill_id_display: string;
  title: string;
  introduced_date: string | null;
  latest_action_date: string | null;
  latest_action_text: string | null;
  origin_chamber: string | null;
  sponsor_name: string | null;
  member_names_json: string;
}

interface ActionRow {
  action_date: string | null;
  action_time: string | null;
  action_text: string | null;
  chamber: string | null;
  source: string | null;
}

export class CongressRepository {
  constructor(
    private readonly db: D1Database,
    private readonly maxLimit: number,
  ) {}

  async search(params: SearchParams): Promise<ParsedSearchResult> {
    const offset = Math.max(0, (params.page - 1) * params.limit);
    const where: string[] = [];
    const binds: unknown[] = [];
    const ftsQuery = params.q ? toFtsQuery(params.q) : null;

    if (params.from) {
      where.push('b.latest_action_date >= ?');
      binds.push(params.from);
    }

    if (params.to) {
      where.push('b.latest_action_date <= ?');
      binds.push(params.to);
    }

    if (params.type) {
      where.push('b.bill_type = ?');
      binds.push(params.type);
    }

    if (params.chamber) {
      where.push('ifnull(b.origin_chamber, \'\') = ?');
      binds.push(params.chamber);
    }

    if (params.congress !== null) {
      where.push('b.congress = ?');
      binds.push(params.congress);
    }

    if (params.sponsor) {
      where.push('ifnull(b.sponsor_name, \'\') LIKE ?');
      binds.push(`%${params.sponsor}%`);
    }

    if (params.member) {
      where.push('ifnull(b.member_names_text, \'\') LIKE ?');
      binds.push(`%${params.member}%`);
    }

    if (params.bill) {
      where.push('(b.bill_id_display LIKE ? OR b.title LIKE ?)');
      binds.push(`%${params.bill}%`, `%${params.bill}%`);
    }

    const fromClause = ftsQuery
      ? 'FROM bills b JOIN bills_fts ON bills_fts.rowid = b.id'
      : 'FROM bills b';

    if (ftsQuery) {
      where.push('bills_fts MATCH ?');
      binds.push(ftsQuery);
    }

    const whereClause = where.length > 0 ? `WHERE ${where.join(' AND ')}` : '';
    const countStatement = this.db.prepare(`SELECT COUNT(*) AS total ${fromClause} ${whereClause}`);
    const countResult = await countStatement.bind(...binds).first<{ total: number }>();
    const total = Number(countResult?.total ?? 0);

    const selectColumns = ftsQuery
      ? `
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
          b.member_names_json,
          CAST(-bm25(bills_fts) AS REAL) AS rank,
          substr(COALESCE(b.latest_action_text, b.title, ''), 1, 180) AS snippet
        `
      : `
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
          b.member_names_json,
          0.0 AS rank,
          NULL AS snippet
        `;

    const itemsStatement = this.db.prepare(`
      SELECT ${selectColumns}
      ${fromClause}
      ${whereClause}
      ORDER BY rank DESC, b.latest_action_date DESC, b.congress DESC, b.bill_type ASC, b.bill_number DESC
      LIMIT ? OFFSET ?
    `);

    const rows = await itemsStatement.bind(...binds, Math.min(this.maxLimit, params.limit), offset).all<Record<string, unknown>>();
    const items = (rows.results ?? []).map((row) => ({
      congress: Number(row.congress),
      type: String(row.bill_type),
      number: Number(row.bill_number),
      billId: String(row.bill_id_display),
      title: String(row.title),
      introducedDate: asNullableString(row.introduced_date),
      latestActionDate: asNullableString(row.latest_action_date),
      latestActionText: asNullableString(row.latest_action_text),
      originChamber: asNullableString(row.origin_chamber),
      sponsorName: asNullableString(row.sponsor_name),
      memberNames: parseJsonArray(row.member_names_json),
      rank: Number(row.rank ?? 0),
      snippet: asNullableString(row.snippet),
    }));

    return {
      items,
      total,
      page: params.page,
      pageSize: Math.min(this.maxLimit, params.limit),
    };
  }

  async getBill(params: BillPathParams): Promise<ParsedBillResult> {
    const row = await this.getBillRow(params);
    if (!row) {
      return {};
    }

    return {
      bill: mapBillRow(row),
    };
  }

  async getBillActions(params: BillPathParams): Promise<ParsedActionsResult> {
    const row = await this.getBillRow(params);
    if (!row) {
      return {};
    }

    const actions = await this.db.prepare(`
      SELECT action_date, action_time, action_text, chamber, source
      FROM bill_actions
      WHERE bill_id = ?
      ORDER BY action_date DESC, sequence DESC, id DESC
    `).bind(row.id).all<ActionRow>();

    return {
      bill: {
        congress: row.congress,
        type: row.bill_type,
        number: row.bill_number,
        billId: row.bill_id_display,
      },
      actions: (actions.results ?? []).map((action) => ({
        actionDate: action.action_date,
        actionTime: action.action_time,
        actionText: action.action_text,
        chamber: action.chamber,
        source: action.source,
      })),
    };
  }

  private async getBillRow(params: BillPathParams): Promise<BillRow | null> {
    return this.db.prepare(`
      SELECT id, congress, bill_type, bill_number, bill_id_display, title, introduced_date, latest_action_date, latest_action_text, origin_chamber, sponsor_name, member_names_json
      FROM bills
      WHERE congress = ? AND bill_type = ? AND bill_number = ?
      LIMIT 1
    `).bind(params.congress, params.type, params.number).first<BillRow>();
  }
}

function mapBillRow(row: BillRow) {
  return {
    congress: row.congress,
    type: row.bill_type,
    number: row.bill_number,
    billId: row.bill_id_display,
    title: row.title,
    introducedDate: row.introduced_date,
    latestActionDate: row.latest_action_date,
    latestActionText: row.latest_action_text,
    originChamber: row.origin_chamber,
    sponsorName: row.sponsor_name,
    memberNames: parseJsonArray(row.member_names_json),
  };
}

function parseJsonArray(value: unknown): string[] {
  if (typeof value !== 'string') {
    return [];
  }

  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.filter((item) => typeof item === 'string') : [];
  } catch {
    return [];
  }
}

function asNullableString(value: unknown): string | null {
  return typeof value === 'string' ? value : null;
}

function toFtsQuery(raw: string): string {
  const tokens = raw
    .split(/\s+/)
    .map((token) => token.trim().replace(/"/g, '').replace(/[^\w-]/g, ''))
    .filter(Boolean);

  if (tokens.length === 0) {
    return '""';
  }

  return tokens.map((token) => `${token}*`).join(' OR ');
}
