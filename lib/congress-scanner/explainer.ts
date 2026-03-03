export interface StoredBillMetadata {
  congress: number;
  type: string;
  number: number;
  billId?: string;
  title: string;
  introducedDate?: string | null;
  latestActionDate?: string | null;
  latestActionText?: string | null;
  originChamber?: string | null;
  sponsorName?: string | null;
}

export interface StoredBillAction {
  actionDate?: string | null;
  actionTime?: string | null;
  actionText?: string | null;
  chamber?: string | null;
  source?: string | null;
}

export interface StatusCard {
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

export const BILL_TYPE_DEFINITIONS: Record<string, { label: string; explanation: string }> = {
  hr: {
    label: 'H.R.',
    explanation: 'A bill introduced in the House of Representatives. It must pass both chambers and be signed by the president to become law.',
  },
  s: {
    label: 'S.',
    explanation: 'A bill introduced in the Senate. It must pass both chambers and be signed by the president to become law.',
  },
  hjres: {
    label: 'H.J.Res.',
    explanation: 'A joint resolution introduced in the House. It can become law like a bill, except constitutional amendments go to the states instead of the president.',
  },
  sjres: {
    label: 'S.J.Res.',
    explanation: 'A joint resolution introduced in the Senate. It can become law like a bill, except constitutional amendments go to the states instead of the president.',
  },
  hconres: {
    label: 'H.Con.Res.',
    explanation: 'A concurrent resolution introduced in the House. It must pass both chambers but does not go to the president and does not become law.',
  },
  sconres: {
    label: 'S.Con.Res.',
    explanation: 'A concurrent resolution introduced in the Senate. It must pass both chambers but does not go to the president and does not become law.',
  },
  hres: {
    label: 'H.Res.',
    explanation: 'A simple resolution introduced in the House. It affects only House business and does not become law.',
  },
  sres: {
    label: 'S.Res.',
    explanation: 'A simple resolution introduced in the Senate. It affects only Senate business and does not become law.',
  },
};

interface ActionMappingRule {
  id: string;
  stage: string;
  pattern: RegExp;
  explain: (match: RegExpMatchArray) => string;
}

export const ACTION_PHRASE_MAPPINGS: ActionMappingRule[] = [
  {
    id: 'introduced',
    stage: 'introduced',
    pattern: /^Introduced in (House|Senate)\.?$/i,
    explain: (match) => `Officially introduced in the ${match[1]} and added to the legislative agenda.`,
  },
  {
    id: 'introduced-house-extended',
    stage: 'introduced',
    pattern: /^Introduced in House \(?by request\)?\.?$/i,
    explain: () => 'Officially introduced in the House and added to the legislative agenda.',
  },
  {
    id: 'introduced-senate-extended',
    stage: 'introduced',
    pattern: /^Introduced in Senate\.?$/i,
    explain: () => 'Officially introduced in the Senate and added to the legislative agenda.',
  },
  {
    id: 'read-twice-referred',
    stage: 'committee',
    pattern: /^Received in the (House|Senate),? read twice and referred to the Committee on (.+?)\.?$/i,
    explain: (match) => `Received in the ${match[1]}, given the required readings, and sent to the Committee on ${trimTrailingPeriod(match[2])} for review.`,
  },
  {
    id: 'received-other-chamber',
    stage: 'other-chamber',
    pattern: /^Received in the (House|Senate)\.?$/i,
    explain: (match) => `Received in the ${match[1]} for consideration there.`,
  },
  {
    id: 'referred-committee',
    stage: 'committee',
    pattern: /^Referred to the (House|Senate) Committee on (.+?)\.?$/i,
    explain: (match) => `Sent to the ${match[1]} Committee on ${trimTrailingPeriod(match[2])} for review.`,
  },
  {
    id: 'referred-subcommittee',
    stage: 'committee',
    pattern: /^Referred to the (House|Senate) Subcommittee on (.+?)\.?$/i,
    explain: (match) => `Sent to the ${match[1]} Subcommittee on ${trimTrailingPeriod(match[2])} for more specific review.`,
  },
  {
    id: 'reported-committee',
    stage: 'committee',
    pattern: /^Reported by the Committee on (.+?)\.?$/i,
    explain: (match) => `Approved by the Committee on ${trimTrailingPeriod(match[1])} and sent forward for the next step.`,
  },
  {
    id: 'ordered-reported',
    stage: 'committee',
    pattern: /^Ordered to be Reported(?: \(Amended\))? by the Yeas and Nays: .+$/i,
    explain: () => 'Approved in committee to be formally reported to the full chamber.',
  },
  {
    id: 'committee-hearing-held',
    stage: 'committee',
    pattern: /^Committee (?:Consideration and )?(?:Markup|Mark-up) Session Held\.?$/i,
    explain: () => 'A committee held a formal session to review or revise the measure.',
  },
  {
    id: 'placed-calendar',
    stage: 'calendar',
    pattern: /^Placed on (the )?(.+?) Calendar\.?$/i,
    explain: (match) => `Added to the ${trimTrailingPeriod(match[2])} Calendar so chamber leaders can schedule it for floor action.`,
  },
  {
    id: 'read-first-time',
    stage: 'calendar',
    pattern: /^Read the first time\.?$/i,
    explain: () => 'Received its first formal reading in the chamber.',
  },
  {
    id: 'read-second-time',
    stage: 'calendar',
    pattern: /^Read the second time\.?$/i,
    explain: () => 'Received its second formal reading in the chamber.',
  },
  {
    id: 'read-third-time',
    stage: 'calendar',
    pattern: /^Read the third time\.?$/i,
    explain: () => 'Received its third formal reading before a final chamber vote.',
  },
  {
    id: 'passed-chamber',
    stage: 'passed-chamber',
    pattern: /^Passed (House|Senate)(?: amended)?\.?$/i,
    explain: (match) => `Passed by the ${match[1]} and moved to the next stage of the process.`,
  },
  {
    id: 'passed-chamber-procedure',
    stage: 'passed-chamber',
    pattern: /^Passed (House|Senate) (?:under suspension of the rules|by (?:Yea-Nay|the Yeas and Nays|Voice Vote).+)\.?$/i,
    explain: (match) => `Passed by the ${match[1]} and moved to the next stage of the process.`,
  },
  {
    id: 'agreed-chamber-procedure',
    stage: 'agreed',
    pattern: /^Agreed to in (House|Senate) by .+$/i,
    explain: (match) => `Approved in the ${match[1]}.`,
  },
  {
    id: 'laid-on-table',
    stage: 'stalled',
    pattern: /^Motion to reconsider laid on the table(?: Agreed to without objection)?\.?$/i,
    explain: () => 'The chamber set aside a new vote attempt for now, leaving the previous result in place.',
  },
  {
    id: 'house-message-sent',
    stage: 'other-chamber',
    pattern: /^On passage Passed without objection\.?$/i,
    explain: () => 'Passed without objection and moved to the next stage of the process.',
  },
  {
    id: 'presented-president',
    stage: 'to-president',
    pattern: /^Presented to President\.?$/i,
    explain: () => 'Sent to the president for signature or veto.',
  },
  {
    id: 'signed-president',
    stage: 'became-law',
    pattern: /^Signed by President\.?$/i,
    explain: () => 'Signed by the president and made into law.',
  },
  {
    id: 'became-public-law',
    stage: 'became-law',
    pattern: /^Became Public Law No: .+$/i,
    explain: () => 'Completed the federal lawmaking process and became public law.',
  },
  {
    id: 'vetoed-president',
    stage: 'vetoed',
    pattern: /^Vetoed by President\.?$/i,
    explain: () => 'Rejected by the president. Congress would need to override the veto to enact it.',
  },
  {
    id: 'failed-cloture',
    stage: 'stalled',
    pattern: /^Cloture on the motion to proceed .* not invoked .*$/i,
    explain: () => 'The Senate did not get enough votes to move forward at that stage.',
  },
  {
    id: 'agreed-to-resolution',
    stage: 'agreed',
    pattern: /^Agreed to in (House|Senate)\.?$/i,
    explain: (match) => `Approved in the ${match[1]}.`,
  },
];

export function getBillTypeDefinition(type: string | null | undefined): { code: string; label: string; explanation: string } {
  const normalized = normalizeBillType(type);
  const found = normalized ? BILL_TYPE_DEFINITIONS[normalized] : undefined;

  if (found) {
    return {
      code: normalized ?? 'unknown',
      ...found,
    };
  }

  return {
    code: normalized || 'unknown',
    label: type ? type.toUpperCase() : 'Unknown',
    explanation: 'A congressional measure. The exact measure type is not recognized by this explainer yet.',
  };
}

export function explainActionPhrase(actionText: string | null | undefined): { plainEnglish: string | null; stage: string; matchedRuleId: string | null } {
  if (!actionText) {
    return {
      plainEnglish: null,
      stage: 'unknown',
      matchedRuleId: null,
    };
  }

  for (const rule of ACTION_PHRASE_MAPPINGS) {
    const match = actionText.match(rule.pattern);
    if (match) {
      return {
        plainEnglish: rule.explain(match),
        stage: rule.stage,
        matchedRuleId: rule.id,
      };
    }
  }

  return {
    plainEnglish: formatUnmappedAction(actionText),
    stage: inferFallbackStage(actionText),
    matchedRuleId: null,
  };
}

export function buildStatusCard(bill: StoredBillMetadata, actions: StoredBillAction[]): StatusCard {
  const billType = getBillTypeDefinition(bill.type);
  const latestText = bill.latestActionText ?? firstNonEmptyActionText(actions);
  const latestExplanation = explainActionPhrase(latestText);
  const normalizedActions = actions
    .map((action) => ({
      actionDate: action.actionDate ?? null,
      actionText: action.actionText ?? null,
      plainEnglish: explainActionPhrase(action.actionText).plainEnglish,
    }))
    .sort(compareActionsDesc);

  return {
    billId: bill.billId ?? `${billType.label} ${bill.number}`,
    title: bill.title,
    congress: bill.congress,
    billType,
    sponsorName: bill.sponsorName ?? null,
    originChamber: bill.originChamber ?? null,
    introducedDate: bill.introducedDate ?? null,
    latestActionDate: bill.latestActionDate ?? normalizedActions[0]?.actionDate ?? null,
    latestActionText: latestText ?? null,
    latestActionPlainEnglish: latestExplanation.plainEnglish,
    currentStage: latestExplanation.stage,
    statusSummary: buildStatusSummary(latestExplanation.stage, latestExplanation.plainEnglish),
    actionCount: normalizedActions.length,
    recentActions: normalizedActions.slice(0, 5),
  };
}

function buildStatusSummary(stage: string, plainEnglish: string | null): string {
  if (plainEnglish) {
    return plainEnglish;
  }

  switch (stage) {
    case 'introduced':
      return 'The measure has been introduced.';
    case 'committee':
      return 'The measure is being handled in committee.';
    case 'passed-chamber':
      return 'The measure has passed one chamber.';
    case 'became-law':
      return 'The measure has become law.';
    default:
      return 'The current status is available from the recorded actions.';
  }
}

function normalizeBillType(type: string | null | undefined): string | null {
  if (!type) {
    return null;
  }

  return type.toLowerCase().replace(/[^a-z]/g, '');
}

function inferFallbackStage(actionText: string): string {
  const lower = actionText.toLowerCase();

  if (lower.includes('committee')) {
    return 'committee';
  }
  if (lower.includes('subcommittee')) {
    return 'committee';
  }
  if (lower.includes('received in the house') || lower.includes('received in the senate')) {
    return 'other-chamber';
  }
  if (lower.includes('calendar') || lower.includes('read the first time') || lower.includes('read the second time') || lower.includes('read the third time')) {
    return 'calendar';
  }
  if (lower.includes('passed')) {
    return 'passed-chamber';
  }
  if (lower.includes('public law') || lower.includes('signed by president')) {
    return 'became-law';
  }
  if (lower.includes('president')) {
    return 'to-president';
  }
  if (lower.includes('veto')) {
    return 'vetoed';
  }

  return 'unknown';
}

function formatUnmappedAction(actionText: string): string {
  return `Recorded action (not yet mapped): ${actionText.trim()}`;
}

function trimTrailingPeriod(value: string): string {
  return value.replace(/\.$/, '');
}

function firstNonEmptyActionText(actions: StoredBillAction[]): string | null {
  for (const action of actions) {
    if (action.actionText) {
      return action.actionText;
    }
  }

  return null;
}

function compareActionsDesc(a: { actionDate: string | null }, b: { actionDate: string | null }): number {
  const left = a.actionDate ?? '';
  const right = b.actionDate ?? '';
  if (left === right) {
    return 0;
  }
  return left > right ? -1 : 1;
}
