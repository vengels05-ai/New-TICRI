'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import CongressScannerBillPageClient from '@/components/congress-scanner/CongressScannerBillPageClient';

interface BillParams {
  congress: string;
  type: string;
  number: string;
}

export default function CongressScannerBillPage() {
  return (
    <Suspense fallback={<CongressScannerBillPageClient params={{ congress: '', type: '', number: '' }} />}>
      <BillPageContent />
    </Suspense>
  );
}

function BillPageContent() {
  const searchParams = useSearchParams();
  const params: BillParams = {
    congress: searchParams.get('congress') ?? '',
    type: searchParams.get('type') ?? '',
    number: searchParams.get('number') ?? '',
  };

  return <CongressScannerBillPageClient params={params} />;
}
