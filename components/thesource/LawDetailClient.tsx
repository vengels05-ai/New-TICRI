'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AlertCircle, ArrowLeft, Loader2 } from 'lucide-react';
import { getBillDetail, getEODetail } from '@/lib/thesource';
import type { Bill, ExecutiveOrder } from '@/lib/thesource';
import { cleanDisplayText } from '@/lib/textClean';
import PrimarySourceReader from '@/components/thesource/PrimarySourceReader';

type Mode = 'executive-orders' | 'bills';

interface Props {
  mode: Mode;
  id: string;
  backHref?: string;
  backLabel?: string;
}

export default function LawDetailClient({ mode, id, backHref, backLabel }: Props) {
  const [record, setRecord] = useState<Bill | ExecutiveOrder | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function loadRecord() {
      if (!id) {
        setError('Missing record ID.');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const payload = mode === 'executive-orders'
          ? await getEODetail(parseExecutiveOrderId(id))
          : await getBillDetail(id);

        if (active) {
          setRecord(payload);
        }
      } catch (loadError) {
        if (active) {
          setError(loadError instanceof Error ? loadError.message : 'Could not load this record.');
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    void loadRecord();

    return () => {
      active = false;
    };
  }, [id, mode]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white px-4">
        <div className="text-center">
          <Loader2 className="mx-auto mb-4 h-10 w-10 animate-spin text-[#C41E3A]" />
          <p className="text-sm font-semibold text-[#29465f]">Loading source text...</p>
        </div>
      </main>
    );
  }

  if (error || !record) {
    return (
      <main className="min-h-screen bg-white px-4 py-16">
        <div className="mx-auto max-w-xl text-center">
          <AlertCircle className="mx-auto mb-4 h-12 w-12 text-red-600" />
          <h1 className="text-2xl font-black text-[#0F2C47]">Could Not Load Record</h1>
          <p className="mt-3 text-sm text-slate-600">{error || 'This source record is unavailable.'}</p>
          <Link href={backHref || (mode === 'bills' ? '/acts' : '/executive-orders')} className="mt-6 inline-flex items-center gap-2 bg-[#0F2C47] px-4 py-2 text-sm font-bold text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to Search
          </Link>
        </div>
      </main>
    );
  }

  if (mode === 'bills') {
    return <BillDetail bill={record as Bill} backHref={backHref} backLabel={backLabel} />;
  }

  return <ExecutiveOrderDetail order={record as ExecutiveOrder} backHref={backHref} backLabel={backLabel} />;
}

function BillDetail({ bill, backHref, backLabel }: { bill: Bill; backHref?: string; backLabel?: string }) {
  const readerText = bill.full_text || bill.summary_text || '';
  const cosponsors = bill.cosponsors ?? [];

  return (
    <main className="min-h-screen bg-white pb-16">
      <DetailHeader
        backHref={backHref || '/acts'}
        backLabel={backLabel || 'Bills Search'}
        kicker={`${bill.bill_type.toUpperCase()} ${bill.bill_number} • ${bill.congress_number}th Congress`}
        title={cleanDisplayText(bill.short_title || bill.title)}
        description={formatBillMeta(bill)}
      >
        <Meta label="Bill ID" value={bill.bill_id} />
        {bill.origin_chamber ? <Meta label="Origin" value={bill.origin_chamber} /> : null}
        {bill.policy_area ? <Meta label="Policy Area" value={bill.policy_area} /> : null}
        {bill.latest_action_date ? <Meta label="Latest Action" value={formatDate(bill.latest_action_date)} /> : null}
        {cosponsors.length ? <Meta label="Cosponsors" value={cosponsors.length.toLocaleString()} /> : null}
      </DetailHeader>

      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <PrimarySourceReader
          title={bill.full_text ? 'Bill Text' : 'Bill Summary'}
          text={readerText}
          emptyText="No primary text is stored for this bill yet."
          sourceLabel={bill.full_text ? 'GovInfo' : 'Congress.gov Summary'}
          sourceDetail={bill.full_text_source === 'r2'
            ? 'Loaded from TheSource R2 primary-source storage.'
            : 'Loaded from TheSource bill metadata.'}
        />

        {bill.latest_action_text ? (
          <Article title="Latest Action" text={cleanDisplayText(bill.latest_action_text)} />
        ) : null}

        {bill.constitutional_authority_text ? (
          <Article title="Constitutional Authority" text={cleanDisplayText(bill.constitutional_authority_text)} />
        ) : null}

        {bill.subjects?.length ? (
          <article className="mt-6 border border-[#0F2C47]/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="border-b border-[#0F2C47]/10 pb-3 text-2xl font-black text-[#0F2C47]">Subjects</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {bill.subjects.map((subject) => (
                <span key={subject} className="border border-[#0F2C47]/10 px-3 py-1 text-sm text-[#29465f]">
                  {cleanDisplayText(subject)}
                </span>
              ))}
            </div>
          </article>
        ) : null}

        {cosponsors.length ? (
          <article className="mt-6 border border-[#0F2C47]/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="border-b border-[#0F2C47]/10 pb-3 text-2xl font-black text-[#0F2C47]">Cosponsors</h2>
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              {cosponsors.slice(0, 80).map((cosponsor) => (
                <div key={`${cosponsor.bioguide_id}-${cosponsor.sponsorship_date || ''}`} className="border border-[#0F2C47]/10 px-3 py-2 text-sm text-[#29465f]">
                  <span className="font-semibold text-[#0F2C47]">{cleanDisplayText(cosponsor.name)}</span>
                  <span> {formatPartyState(cosponsor.party, cosponsor.state)}</span>
                </div>
              ))}
            </div>
            {cosponsors.length > 80 ? (
              <p className="mt-4 text-sm text-slate-600">Showing 80 of {cosponsors.length.toLocaleString()} cosponsors.</p>
            ) : null}
          </article>
        ) : null}
      </section>
    </main>
  );
}

function ExecutiveOrderDetail({ order, backHref, backLabel }: { order: ExecutiveOrder; backHref?: string; backLabel?: string }) {
  return (
    <main className="min-h-screen bg-white pb-16">
      <DetailHeader
        backHref={backHref || '/executive-orders'}
        backLabel={backLabel || 'Executive Order Search'}
        kicker={order.eo_number ? `Executive Order ${order.eo_number}` : order.document_number}
        title={cleanDisplayText(order.title)}
        description={`${cleanDisplayText(order.president)}${order.signing_date ? ` • Signed ${formatDate(order.signing_date)}` : ''}${order.citation ? ` • ${order.citation}` : ''}`}
      >
        <Meta label="Document" value={order.document_number} />
        {order.president ? <Meta label="President" value={cleanDisplayText(order.president)} /> : null}
        {order.signing_date ? <Meta label="Signed" value={formatDate(order.signing_date)} /> : null}
        {order.citation ? <Meta label="Citation" value={order.citation} /> : null}
        {order.publication_date ? <Meta label="Published" value={formatDate(order.publication_date)} /> : null}
      </DetailHeader>

      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <PrimarySourceReader
          title="Executive Order Text"
          text={order.full_text}
          emptyText="Full text is not stored for this executive order yet."
          sourceLabel="Federal Register"
          sourceDetail={order.full_text_source === 'r2'
            ? 'Loaded from TheSource R2 primary-source storage.'
            : 'Loaded from TheSource executive order metadata.'}
        />

        {order.disposition_notes ? (
          <Article title="Disposition Notes" text={cleanDisplayText(order.disposition_notes)} />
        ) : null}
      </section>
    </main>
  );
}

function DetailHeader({
  backHref,
  backLabel,
  kicker,
  title,
  description,
  children,
}: {
  backHref: string;
  backLabel: string;
  kicker: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-[#0F2C47]/10 bg-[#EEF3F8]">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <Link href={backHref} className="inline-flex items-center gap-2 text-sm font-semibold text-[#29465f] hover:text-[#C41E3A]">
          <ArrowLeft className="h-4 w-4" />
          {backLabel}
        </Link>
        <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[#C41E3A]">{kicker}</p>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-[#0F2C47]">{title}</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-[#29465f]">{description}</p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm">{children}</div>
      </div>
    </section>
  );
}

function Article({ title, text, emptyText }: { title: string; text: string; emptyText?: string }) {
  return (
    <article className="border border-[#0F2C47]/10 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="border-b border-[#0F2C47]/10 pb-3 text-2xl font-black text-[#0F2C47]">{title}</h2>
      {text ? (
        <p className="mt-6 whitespace-pre-wrap text-sm leading-7 text-slate-800">{text}</p>
      ) : (
        <p className="mt-6 text-sm text-slate-600">{emptyText || 'No text is stored for this record yet.'}</p>
      )}
    </article>
  );
}

function Meta({ label, value }: { label: string; value: string | number }) {
  return (
    <span className="border border-[#0F2C47]/10 bg-white px-3 py-1 font-semibold text-[#29465f]">
      {label}: {value}
    </span>
  );
}

function parseExecutiveOrderId(value: string) {
  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed)) {
    throw new Error('Invalid executive order ID.');
  }
  return parsed;
}

function formatPartyState(party?: string | null, state?: string | null) {
  const parts = [party, state].filter(Boolean);
  return parts.length ? `(${parts.join('-')})` : '';
}

function formatDate(value: string) {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return value;
  }
  return parsed.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function formatBillMeta(bill: Bill) {
  const parts = [
    bill.sponsor_name ? cleanDisplayText(bill.sponsor_name) : null,
    bill.sponsor_party && bill.sponsor_state ? `${bill.sponsor_party}-${bill.sponsor_state}` : bill.sponsor_party || bill.sponsor_state,
    bill.introduced_date ? `Introduced ${formatDate(bill.introduced_date)}` : null,
    bill.origin_chamber || null,
  ].filter(Boolean);

  return parts.length ? parts.join(' • ') : cleanDisplayText(bill.policy_area) || 'Bill metadata pending';
}
