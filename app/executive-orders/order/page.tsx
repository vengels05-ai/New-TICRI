'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import LawDetailClient from '@/components/thesource/LawDetailClient';

export default function ExecutiveOrderPage() {
  return (
    <Suspense fallback={<LawDetailClient mode="executive-orders" id="" backHref="/executive-orders" backLabel="Executive Orders" />}>
      <ExecutiveOrderContent />
    </Suspense>
  );
}

function ExecutiveOrderContent() {
  const searchParams = useSearchParams();
  return (
    <LawDetailClient
      mode="executive-orders"
      id={searchParams.get('id') ?? ''}
      backHref="/executive-orders"
      backLabel="Executive Orders"
    />
  );
}
