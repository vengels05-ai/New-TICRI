import { buildStatusCard } from './explainer.ts';

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

interface FixtureBill {
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

interface FixtureAction {
  actionDate: string | null;
  actionTime: string | null;
  actionText: string | null;
  chamber: string | null;
  source: string | null;
}

interface FixtureRecord {
  bill: FixtureBill;
  actions: FixtureAction[];
}

const UI_TEST_MODE_FLAG = 'CONGRESS_SCANNER_UI_TEST_MODE';

const primaryFixture: FixtureRecord = {
  bill: {
    congress: 119,
    type: 'hr',
    number: 1001,
    billId: 'H.R. 1001',
    title: 'Clean Water Restoration Act',
    introducedDate: '2026-02-18',
    latestActionDate: '2026-02-20',
    latestActionText: 'Referred to House Subcommittee on Water Resources.',
    originChamber: 'House',
    sponsorName: 'Alice Monroe',
    memberNames: ['Alice Monroe', 'Diego Torres'],
  },
  actions: [
    {
      actionDate: '2026-02-20',
      actionTime: '15:30:00',
      actionText: 'Referred to House Subcommittee on Water Resources.',
      chamber: 'House',
      source: 'Congress.gov',
    },
    {
      actionDate: '2026-02-18',
      actionTime: '09:00:00',
      actionText: 'Introduced in House',
      chamber: 'House',
      source: 'Congress.gov',
    },
    {
      actionDate: '2026-02-19',
      actionTime: '11:15:00',
      actionText: 'Referred to the House Committee on Energy and Commerce.',
      chamber: 'House',
      source: 'Congress.gov',
    },
  ],
};

const fixtureRecords: FixtureRecord[] = [
  primaryFixture,
  ...Array.from({ length: 20 }, (_, index) => {
    const number = 1002 + index;
    const chamber = index % 2 === 0 ? 'House' : 'Senate';
    const type = chamber === 'House' ? 'hr' : 's';
    const sponsorName = chamber === 'House' ? `Jordan House ${index + 1}` : `Taylor Senate ${index + 1}`;
    const title = chamber === 'House'
      ? `Community Health Expansion Act ${index + 1}`
      : `Energy Grid Reliability Act ${index + 1}`;
    const latestActionDate = `2026-02-${String(Math.max(1, 19 - index)).padStart(2, '0')}`;

    return {
      bill: {
        congress: 119,
        type,
        number,
        billId: `${type === 'hr' ? 'H.R.' : 'S.'} ${number}`,
        title,
        introducedDate: `2026-01-${String((index % 20) + 1).padStart(2, '0')}`,
        latestActionDate,
        latestActionText: chamber === 'House'
          ? 'Referred to the House Committee on Education and Workforce.'
          : 'Read twice and referred to the Committee on Energy and Natural Resources.',
        originChamber: chamber,
        sponsorName,
        memberNames: [sponsorName],
      },
      actions: [
        {
          actionDate: `2026-01-${String((index % 20) + 1).padStart(2, '0')}`,
          actionTime: '09:00:00',
          actionText: chamber === 'House' ? 'Introduced in House' : 'Introduced in Senate',
          chamber,
          source: 'Congress.gov',
        },
        {
          actionDate: latestActionDate,
          actionTime: '14:00:00',
          actionText: chamber === 'House'
            ? 'Referred to the House Committee on Education and Workforce.'
            : 'Read twice and referred to the Committee on Energy and Natural Resources.',
          chamber,
          source: 'Congress.gov',
        },
      ],
    };
  }),
];

export function isCongressUiTestModeEnabled() {
  return process.env[UI_TEST_MODE_FLAG] === 'true';
}

export function getFixtureSearchData(params: SearchParams) {
  const filtered = fixtureRecords
    .filter((record) => matchesSearch(record, params))
    .sort(compareFixtureBillsDesc);

  const startIndex = (params.page - 1) * params.limit;
  const items = filtered.slice(startIndex, startIndex + params.limit).map(({ bill }) => ({
    ...bill,
    rank: params.q ? 0.92 : 0,
    snippet: params.q ? buildSnippet(bill, params.q) : null,
  }));

  return {
    items,
    total: filtered.length,
    page: params.page,
    pageSize: params.limit,
  };
}

export function getFixtureBillData(params: BillPathParams) {
  const record = findFixtureRecord(params);
  if (!record) {
    return null;
  }

  return {
    bill: record.bill,
    statusCard: buildStatusCard(record.bill, record.actions),
  };
}

export function getFixtureBillActionsData(params: BillPathParams) {
  const record = findFixtureRecord(params);
  if (!record) {
    return null;
  }

  return {
    bill: {
      congress: record.bill.congress,
      type: record.bill.type,
      number: record.bill.number,
      billId: record.bill.billId,
    },
    actions: record.actions,
  };
}

function findFixtureRecord(params: BillPathParams) {
  return fixtureRecords.find(({ bill }) =>
    bill.congress === params.congress
    && bill.type === params.type
    && bill.number === params.number);
}

function matchesSearch(record: FixtureRecord, params: SearchParams) {
  const { bill } = record;

  if (params.congress !== null && bill.congress !== params.congress) {
    return false;
  }

  if (params.type && bill.type !== params.type) {
    return false;
  }

  if (params.chamber && bill.originChamber !== params.chamber) {
    return false;
  }

  if (params.from && (!bill.latestActionDate || bill.latestActionDate < params.from)) {
    return false;
  }

  if (params.to && (!bill.latestActionDate || bill.latestActionDate > params.to)) {
    return false;
  }

  if (params.sponsor && !contains(bill.sponsorName, params.sponsor)) {
    return false;
  }

  const memberQuery = params.member;
  if (memberQuery && !bill.memberNames.some((memberName) => contains(memberName, memberQuery))) {
    return false;
  }

  if (params.bill && !contains(`${bill.billId} ${bill.title}`, params.bill)) {
    return false;
  }

  if (params.q && !contains(`${bill.title} ${bill.latestActionText ?? ''}`, params.q)) {
    return false;
  }

  return true;
}

function buildSnippet(bill: FixtureBill, query: string) {
  const normalizedQuery = query.trim();
  if (!normalizedQuery) {
    return null;
  }

  const candidate = bill.latestActionText ?? bill.title;
  const pattern = new RegExp(escapeRegExp(normalizedQuery), 'ig');
  if (!pattern.test(candidate)) {
    return null;
  }

  return candidate.replace(pattern, (match) => `<mark>${match}</mark>`);
}

function compareFixtureBillsDesc(left: FixtureRecord, right: FixtureRecord) {
  return compareNullableDesc(left.bill.latestActionDate, right.bill.latestActionDate)
    || compareNullableDesc(left.bill.introducedDate, right.bill.introducedDate)
    || right.bill.number - left.bill.number;
}

function compareNullableDesc(left: string | null, right: string | null) {
  if (left === right) {
    return 0;
  }

  if (left === null) {
    return 1;
  }

  if (right === null) {
    return -1;
  }

  return left < right ? 1 : -1;
}

function contains(value: string | null, query: string) {
  return (value ?? '').toLowerCase().includes(query.toLowerCase());
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
