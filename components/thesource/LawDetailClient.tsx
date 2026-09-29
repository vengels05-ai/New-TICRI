'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AlertCircle, ArrowLeft, ExternalLink, Loader2 } from 'lucide-react';
import { getBillDetail, getEODetail } from '@/lib/thesource';
import type { Bill, ExecutiveOrder } from '@/lib/thesource';
import { cleanDisplayText } from '@/lib/textClean';

type Mode = 'executive-orders' | 'bills';

interface Props {
  mode: Mode;
  id: string;
}

export default function LawDetailClient({ mode, id }: Props) {
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
          <Link href={mode === 'bills' ? '/truth-and-law/bills' : '/truth-and-law/executive-orders'} className="mt-6 inline-flex items-center gap-2 bg-[#0F2C47] px-4 py-2 text-sm font-bold text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to Search
          </Link>
        </div>
      </main>
    );
  }

  if (mode === 'bills') {
    return <BillDetail bill={record as Bill} />;
  }

  return <ExecutiveOrderDetail order={record as ExecutiveOrder} />;
}

function BillDetail({ bill }: { bill: Bill }) {
  const summary = cleanDisplayText(bill.summary_text);

  return (
    <main className="min-h-screen bg-white pb-16">
      <DetailHeader
        backHref="/truth-and-law/bills"
        backLabel="Bills Search"
        kicker={`${bill.bill_type.toUpperCase()} ${bill.bill_number} • ${bill.congress_number}th Congress`}
        title={cleanDisplayText(bill.short_title || bill.title)}
        description={formatBillMeta(bill)}
      >
        <Meta label="Bill ID" value={bill.bill_id} />
        {bill.origin_chamber ? <Meta label="Origin" value={bill.origin_chamber} /> : null}
        {bill.policy_area ? <Meta label="Policy Area" value={bill.policy_area} /> : null}
        {bill.latest_action_date ? <Meta label="Latest Action" value={formatDate(bill.latest_action_date)} /> : null}
      </DetailHeader>

      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <Article title="Summary" emptyText="No summary is stored for this bill yet." text={summary} />

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
      </section>
    </main>
  );
}

function ExecutiveOrderDetail({ order }: { order: ExecutiveOrder }) {
  const fullText = cleanDisplayText(order.full_text);

  return (
    <main className="min-h-screen bg-white pb-16">
      <DetailHeader
        backHref="/truth-and-law/executive-orders"
        backLabel="Executive Order Search"
        kicker={order.eo_number ? `Executive Order ${order.eo_number}` : order.document_number}
        title={cleanDisplayText(order.title)}
        description={`${cleanDisplayText(order.president)}${order.signing_date ? ` • Signed ${formatDate(order.signing_date)}` : ''}${order.citation ? ` • ${order.citation}` : ''}`}
      >
        <Meta label="Document" value={order.document_number} />
        {order.publication_date ? <Meta label="Published" value={formatDate(order.publication_date)} /> : null}
      </DetailHeader>

      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-wrap gap-3">
          {order.fr_url ? <SourceLink href={order.fr_url} label="Federal Register" /> : null}
          {order.pdf_url ? <SourceLink href={order.pdf_url} label="PDF" /> : null}
        </div>
        <Article title="Full Text" emptyText="Full text is not stored for this executive order yet." text={fullText} />
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

function SourceLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 border border-[#0F2C47]/15 px-4 py-2 text-sm font-semibold text-[#0F2C47] hover:border-[#C41E3A] hover:text-[#C41E3A]"
    >
      {label}
      <ExternalLink className="h-4 w-4" />
    </a>
  );
}

function parseExecutiveOrderId(value: string) {
  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed)) {
    throw new Error('Invalid executive order ID.');
  }
  return parsed;
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
