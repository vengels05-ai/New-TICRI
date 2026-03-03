import Link from 'next/link';
import type { CongressBillActionsResponse, CongressBillResponse } from './types';

interface Props {
  billData: CongressBillResponse['data'] | null;
  actionsData: CongressBillActionsResponse['data'] | null;
  error?: string | null;
}

export default function CongressScannerBillDetail({ billData, actionsData, error }: Props) {
  if (error || !billData || !actionsData) {
    return (
      <div className="min-h-screen bg-[linear-gradient(180deg,#eef4f9_0%,#f7f2e8_100%)] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[32px] border border-red-200 bg-white/90 p-10 shadow-[0_18px_50px_rgba(15,44,71,0.08)]">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C41E3A]">Congress Scanner</p>
          <h1 className="mt-3 text-3xl font-bold text-[#0F2C47]">Bill details unavailable</h1>
          <p className="mt-4 text-slate-700">{error ?? 'This bill could not be loaded.'}</p>
          <Link href="/congress-scanner" className="mt-6 inline-flex rounded-full bg-[#0F2C47] px-5 py-3 font-semibold text-white transition hover:bg-[#1A3A5C] focus:outline-none focus:ring-2 focus:ring-[#0F2C47] focus:ring-offset-2">
            Back to search
          </Link>
        </div>
      </div>
    );
  }

  const { bill, statusCard } = billData;
  const orderedActions = [...actionsData.actions].sort(compareTimelineActions);

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#eef4f9_0%,#f7f2e8_100%)] pb-20">
      <section className="border-b border-[#0F2C47]/10 bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <Link href="/congress-scanner" className="inline-flex items-center gap-2 rounded-full border border-[#0F2C47]/15 bg-white px-4 py-2 text-sm font-semibold text-[#0F2C47] transition hover:bg-[#F7F3EA] focus:outline-none focus:ring-2 focus:ring-[#0F2C47] focus:ring-offset-2">
            <span aria-hidden="true">←</span>
            Back to Congress Scanner
          </Link>
          <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl">
              <p className="inline-flex rounded-full bg-[#F7F3EA] px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#0F2C47]">
                {bill.billId}
              </p>
              <h1 className="mt-4 text-4xl font-black tracking-tight text-[#0F2C47] sm:text-5xl">{bill.title}</h1>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-[#29465f]">Deterministic bill metadata and action history built from stored Congress.gov data only.</p>
            </div>
            <div className="rounded-[24px] border border-[#C41E3A]/10 bg-[#FFF8F8] px-5 py-4 text-sm text-slate-700 shadow-sm">
              <p className="font-semibold text-[#C41E3A]">Current stage</p>
              <p className="mt-2 text-base font-bold capitalize text-[#0F2C47]">{statusCard.currentStage.replace('-', ' ')}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-4 pt-8 sm:px-6 lg:grid-cols-[minmax(0,1.25fr)_360px] lg:px-8">
        <div className="space-y-8">
          <section className="rounded-[30px] border border-[#0F2C47]/10 bg-white/92 p-7 shadow-[0_18px_50px_rgba(15,44,71,0.08)]">
            <h2 className="text-2xl font-bold text-[#0F2C47]">Bill metadata</h2>
            <dl className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              <MetaItem label="Bill ID" value={bill.billId} />
              <MetaItem label="Congress" value={String(bill.congress)} />
              <MetaItem label="Bill type" value={statusCard.billType.label} />
              <MetaItem label="Origin chamber" value={bill.originChamber ?? 'Unknown'} />
              <MetaItem label="Sponsor" value={bill.sponsorName ?? 'Unknown'} />
              <MetaItem label="Introduced" value={formatDate(bill.introducedDate)} />
              <MetaItem label="Latest action date" value={formatDate(bill.latestActionDate)} />
              <MetaItem label="Tracked members" value={bill.memberNames.length > 0 ? bill.memberNames.join(', ') : 'None stored'} />
            </dl>
            <div className="mt-6 rounded-3xl border border-[#0F2C47]/10 bg-[#F5F8FB] p-5">
              <h3 className="text-lg font-bold text-[#0F2C47]">Latest action text</h3>
              <p className="mt-3 text-slate-700">{bill.latestActionText ?? 'No latest action text stored.'}</p>
            </div>
          </section>

          <section className="rounded-[30px] border border-[#0F2C47]/10 bg-white/92 p-7 shadow-[0_18px_50px_rgba(15,44,71,0.08)]">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-[#0F2C47]">Action timeline</h2>
                <p className="mt-1 text-sm text-slate-600">Official action history stored in TICRI&apos;s Congress Scanner database.</p>
              </div>
              <p className="text-sm text-slate-600">{orderedActions.length} action{orderedActions.length === 1 ? '' : 's'}</p>
            </div>

            {orderedActions.length === 0 ? (
              <div className="mt-6 rounded-3xl border border-dashed border-[#0F2C47]/20 bg-[#F9FBFD] p-6 text-slate-600">
                No actions are stored for this bill yet.
              </div>
            ) : (
              <ol className="mt-6 space-y-4">
                {orderedActions.map((action, index) => (
                  <li key={`${action.actionDate ?? 'unknown'}-${action.actionText ?? 'empty'}-${index}`} className="rounded-3xl border border-[#0F2C47]/10 bg-[#FBFCFE] p-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#C41E3A]">{formatDate(action.actionDate)}</p>
                        <p className="mt-2 text-lg font-semibold text-[#0F2C47]">{action.actionText ?? 'No action text stored.'}</p>
                      </div>
                      <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-600 shadow-sm">
                        <p><span className="font-semibold text-[#0F2C47]">Chamber:</span> {action.chamber ?? 'Unknown'}</p>
                        <p className="mt-1"><span className="font-semibold text-[#0F2C47]">Source:</span> {action.source ?? 'Unknown'}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            )}
          </section>
        </div>

        <aside className="space-y-8 self-start">
          <section className="rounded-[30px] border border-[#C41E3A]/10 bg-white/92 p-7 shadow-[0_18px_50px_rgba(15,44,71,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C41E3A]">Status card</p>
            <h2 className="mt-3 text-2xl font-bold text-[#0F2C47]">Plain-English status</h2>
            <div className="mt-5 rounded-3xl bg-[#FFF7F7] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C41E3A]">Summary</p>
              <p className="mt-3 text-lg font-semibold leading-8 text-[#0F2C47]">{statusCard.statusSummary}</p>
            </div>
            <dl className="mt-5 space-y-4 text-sm text-slate-700">
              <StatusItem label="Current stage" value={statusCard.currentStage.replace('-', ' ')} />
              <StatusItem label="Latest action date" value={formatDate(statusCard.latestActionDate)} />
              <StatusItem label="Action count" value={String(statusCard.actionCount)} />
              <StatusItem label="Bill type meaning" value={statusCard.billType.explanation} />
            </dl>
          </section>

          <section className="rounded-[30px] border border-[#0F2C47]/10 bg-white/92 p-7 shadow-[0_18px_50px_rgba(15,44,71,0.08)]">
            <h2 className="text-xl font-bold text-[#0F2C47]">Recent deterministic explanations</h2>
            <ul className="mt-5 space-y-4">
              {statusCard.recentActions.length === 0 ? (
                <li className="rounded-2xl bg-[#F5F8FB] px-4 py-3 text-sm text-slate-600">No action explanations are available yet.</li>
              ) : (
                statusCard.recentActions.map((action, index) => (
                  <li key={`${action.actionDate ?? 'unknown'}-${index}`} className="rounded-2xl bg-[#F5F8FB] px-4 py-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#C41E3A]">{formatDate(action.actionDate)}</p>
                    <p className="mt-2 text-sm font-semibold text-[#0F2C47]">{action.actionText ?? 'No action text stored.'}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">{action.plainEnglish ?? 'No deterministic explanation available.'}</p>
                  </li>
                ))
              )}
            </ul>
          </section>
        </aside>
      </div>
    </div>
  );
}

function formatDate(value: string | null) {
  if (!value) {
    return 'Unknown';
  }

  return new Date(`${value}T00:00:00Z`).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl bg-[#F5F8FB] px-4 py-4">
      <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C41E3A]">{label}</dt>
      <dd className="mt-2 text-sm font-medium leading-6 text-[#0F2C47]">{value}</dd>
    </div>
  );
}

function StatusItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[#0F2C47]/10 px-4 py-3">
      <dt className="font-semibold text-[#0F2C47]">{label}</dt>
      <dd className="mt-2 leading-6">{value}</dd>
    </div>
  );
}

function compareTimelineActions(
  left: CongressBillActionsResponse['data']['actions'][number],
  right: CongressBillActionsResponse['data']['actions'][number],
) {
  return compareNullableAsc(left.actionDate, right.actionDate)
    || compareNullableAsc(left.actionTime, right.actionTime)
    || (left.actionText ?? '').localeCompare(right.actionText ?? '');
}

function compareNullableAsc(left: string | null, right: string | null) {
  if (left === right) {
    return 0;
  }

  if (left === null) {
    return 1;
  }

  if (right === null) {
    return -1;
  }

  return left.localeCompare(right);
}
