'use client';

import CongressScannerBillPageClient from '@/components/congress-scanner/CongressScannerBillPageClient';

interface BillParams {
  congress: string;
  type: string;
  number: string;
}

const EMPTY_PARAMS: BillParams = {
  congress: '',
  type: '',
  number: '',
};

export default function CongressScannerBillPage() {
  const params = readBillParamsFromWindow();

  return <CongressScannerBillPageClient params={params} />;
}

function readBillParamsFromWindow(): BillParams {
  if (typeof window === 'undefined') {
    return EMPTY_PARAMS;
  }

  const urlParams = new URLSearchParams(window.location.search);
  return {
    congress: urlParams.get('congress') ?? '',
    type: urlParams.get('type') ?? '',
    number: urlParams.get('number') ?? '',
  };
}
