'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import LawDetailClient from '@/components/thesource/LawDetailClient';

export default function BillPage() {
  return (
    <Suspense fallback={<LawDetailClient mode="bills" id="" />}>
      <BillContent />
    </Suspense>
  );
}

function BillContent() {
  const searchParams = useSearchParams();
  return <LawDetailClient mode="bills" id={searchParams.get('id') ?? ''} />;
}
