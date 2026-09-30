'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import LawDetailClient from '@/components/thesource/LawDetailClient';

export default function ActBillPage() {
  return (
    <Suspense fallback={<LawDetailClient mode="bills" id="" backHref="/acts" backLabel="Acts" />}>
      <ActBillContent />
    </Suspense>
  );
}

function ActBillContent() {
  const searchParams = useSearchParams();
  return (
    <LawDetailClient
      mode="bills"
      id={searchParams.get('id') ?? ''}
      backHref="/acts"
      backLabel="Acts"
    />
  );
}
