'use client';

import { useEffect, useMemo, useState } from 'react';
import { fetchCongressApiJson } from '@/lib/congress-scanner/browserApiClient';
import CongressScannerBillDetail from './CongressScannerBillDetail';
import type { CongressBillActionsResponse, CongressBillResponse } from './types';

interface Props {
  params: {
    congress: string;
    type: string;
    number: string;
  };
}

export default function CongressScannerBillPageClient({ params }: Props) {
  const [billData, setBillData] = useState<CongressBillResponse['data'] | null>(null);
  const [actionsData, setActionsData] = useState<CongressBillActionsResponse['data'] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const hasValidParams = useMemo(
    () => Boolean(params.congress && params.type && params.number),
    [params.congress, params.number, params.type],
  );

  const billPath = useMemo(
    () => `/congress/bill/${encodeURIComponent(params.congress)}/${encodeURIComponent(params.type)}/${encodeURIComponent(params.number)}`,
    [params.congress, params.number, params.type],
  );

  useEffect(() => {
    let cancelled = false;

    async function load() {
      if (!hasValidParams) {
        setError('Missing bill identifier. Open this page from Congress Scanner search results.');
        return;
      }

      try {
        const [billPayload, actionsPayload] = await Promise.all([
          fetchCongressApiJson<CongressBillResponse>(billPath),
          fetchCongressApiJson<CongressBillActionsResponse>(`${billPath}/actions`),
        ]);

        if (cancelled) {
          return;
        }

        setBillData(billPayload.data);
        setActionsData(actionsPayload.data);
        setError(null);
      } catch (error) {
        if (!cancelled) {
          setBillData(null);
          setActionsData(null);
          setError(error instanceof Error ? error.message : 'This bill could not be loaded.');
        }
      }
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, [billPath, hasValidParams]);

  return (
    <CongressScannerBillDetail
      billData={billData}
      actionsData={actionsData}
      error={error}
    />
  );
}
