import test from 'node:test';
import assert from 'node:assert/strict';
import {
  ACTION_PHRASE_MAPPINGS,
  BILL_TYPE_DEFINITIONS,
  buildStatusCard,
  explainActionPhrase,
  getBillTypeDefinition,
} from './explainer.ts';

test('bill type definitions cover common congressional measure types', () => {
  assert.equal(getBillTypeDefinition('hr').label, 'H.R.');
  assert.equal(getBillTypeDefinition('S').label, 'S.');
  assert.equal(getBillTypeDefinition('h.j.res.').label, 'H.J.Res.');
  assert.equal(getBillTypeDefinition('sconres').label, 'S.Con.Res.');
  assert.ok(Object.keys(BILL_TYPE_DEFINITIONS).length >= 8);
});

test('unknown bill types fall back to deterministic generic text', () => {
  const result = getBillTypeDefinition('x123');
  assert.equal(result.code, 'x');
  assert.equal(result.label, 'X123');
  assert.match(result.explanation, /not recognized/i);
});

test('action mappings convert common committee phrases into plain English', () => {
  const explained = explainActionPhrase('Referred to the House Committee on Oversight and Government Reform.');
  assert.equal(explained.stage, 'committee');
  assert.equal(explained.matchedRuleId, 'referred-committee');
  assert.equal(explained.plainEnglish, 'Sent to the House Committee on Oversight and Government Reform for review.');
});

test('mapping table has coverage for core legislative stages', () => {
  const ids = new Set(ACTION_PHRASE_MAPPINGS.map((rule) => rule.id));
  assert.ok(ids.has('introduced'));
  assert.ok(ids.has('referred-committee'));
  assert.ok(ids.has('read-twice-referred'));
  assert.ok(ids.has('ordered-reported'));
  assert.ok(ids.has('passed-chamber'));
  assert.ok(ids.has('presented-president'));
  assert.ok(ids.has('signed-president'));
  assert.ok(ids.has('vetoed-president'));
});

test('translator covers common chamber transfer and reading patterns conservatively', () => {
  const received = explainActionPhrase('Received in the Senate, read twice and referred to the Committee on the Judiciary.');
  assert.equal(received.matchedRuleId, 'read-twice-referred');
  assert.equal(received.stage, 'committee');
  assert.match(received.plainEnglish ?? '', /given the required readings/i);

  const thirdReading = explainActionPhrase('Read the third time.');
  assert.equal(thirdReading.matchedRuleId, 'read-third-time');
  assert.equal(thirdReading.stage, 'calendar');
  assert.match(thirdReading.plainEnglish ?? '', /third formal reading/i);
});

test('translator covers common committee and floor procedure patterns conservatively', () => {
  const ordered = explainActionPhrase('Ordered to be Reported by the Yeas and Nays: 42 - 0.');
  assert.equal(ordered.matchedRuleId, 'ordered-reported');
  assert.equal(ordered.stage, 'committee');
  assert.match(ordered.plainEnglish ?? '', /Approved in committee/i);

  const passed = explainActionPhrase('Passed House under suspension of the rules.');
  assert.equal(passed.matchedRuleId, 'passed-chamber-procedure');
  assert.equal(passed.stage, 'passed-chamber');
  assert.equal(passed.plainEnglish, 'Passed by the House and moved to the next stage of the process.');
});

test('unknown actions fall back without failing', () => {
  const explained = explainActionPhrase('Held at the desk pending further review.');
  assert.equal(explained.matchedRuleId, null);
  assert.equal(explained.stage, 'unknown');
  assert.equal(explained.plainEnglish, 'Recorded action (not yet mapped): Held at the desk pending further review.');
});

test('unmapped actions do not invent meaning when only weak clues exist', () => {
  const explained = explainActionPhrase('Star Print ordered on the bill.');
  assert.equal(explained.matchedRuleId, null);
  assert.equal(explained.stage, 'unknown');
  assert.equal(explained.plainEnglish, 'Recorded action (not yet mapped): Star Print ordered on the bill.');
});

test('status card is built only from stored metadata and actions', () => {
  const card = buildStatusCard(
    {
      congress: 119,
      type: 'hr',
      number: 1001,
      billId: 'H.R. 1001',
      title: 'Congress Scanner Demonstration Act',
      introducedDate: '2026-02-20',
      latestActionDate: '2026-02-24',
      latestActionText: 'Referred to the House Committee on Oversight and Government Reform.',
      originChamber: 'House',
      sponsorName: 'Suzan K. DelBene',
    },
    [
      {
        actionDate: '2026-02-24',
        actionText: 'Referred to the House Committee on Oversight and Government Reform.',
      },
      {
        actionDate: '2026-02-20',
        actionText: 'Introduced in House',
      },
    ],
  );

  assert.equal(card.billId, 'H.R. 1001');
  assert.equal(card.billType.label, 'H.R.');
  assert.equal(card.currentStage, 'committee');
  assert.equal(card.latestActionPlainEnglish, 'Sent to the House Committee on Oversight and Government Reform for review.');
  assert.equal(card.actionCount, 2);
  assert.equal(card.recentActions[0].plainEnglish, 'Sent to the House Committee on Oversight and Government Reform for review.');
});

test('status card falls back to action history when bill latest action is missing', () => {
  const card = buildStatusCard(
    {
      congress: 119,
      type: 's',
      number: 42,
      title: 'Fallback Status Act',
    },
    [
      {
        actionDate: '2026-02-25',
        actionText: 'Passed Senate',
      },
    ],
  );

  assert.equal(card.billId, 'S. 42');
  assert.equal(card.currentStage, 'passed-chamber');
  assert.equal(card.latestActionText, 'Passed Senate');
  assert.equal(card.latestActionPlainEnglish, 'Passed by the Senate and moved to the next stage of the process.');
});
