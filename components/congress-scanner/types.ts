export interface CongressSearchItem {
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
  rank: number;
  snippet: string | null;
}

export interface CongressSearchResponse {
  data: {
    items: CongressSearchItem[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
    query: {
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
    };
  };
}

export interface CongressStatusCard {
  billId: string;
  title: string;
  congress: number;
  billType: {
    code: string;
    label: string;
    explanation: string;
  };
  sponsorName: string | null;
  originChamber: string | null;
  introducedDate: string | null;
  latestActionDate: string | null;
  latestActionText: string | null;
  latestActionPlainEnglish: string | null;
  currentStage: string;
  statusSummary: string;
  actionCount: number;
  recentActions: Array<{
    actionDate: string | null;
    actionText: string | null;
    plainEnglish: string | null;
  }>;
}

export interface CongressBillResponse {
  data: {
    bill: {
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
    };
    statusCard: CongressStatusCard;
    textVersions: Array<{
      date: string | null;
      type: string | null;
      formats: Array<{
        type: string | null;
        url: string | null;
      }>;
    }>;
  };
}

export interface CongressBillActionsResponse {
  data: {
    bill: {
      congress: number;
      type: string;
      number: number;
      billId: string;
    };
    actions: Array<{
      actionDate: string | null;
      actionTime: string | null;
      actionText: string | null;
      chamber: string | null;
      source: string | null;
    }>;
  };
}
