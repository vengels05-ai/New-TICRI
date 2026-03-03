import { performance } from 'node:perf_hooks';
import { CongressApiClient } from '../../lib/congress-scanner/congressApiClient.ts';

const SYNTHETIC_UPSTREAM_DELAY_MS = 40;

function clearSharedCache() {
  const globalState = globalThis;
  globalState.__ticriCongressApiSharedCache?.responseCache.clear();
  globalState.__ticriCongressApiSharedCache?.inflightRequests.clear();
}

async function main() {
  clearSharedCache();

  let fetchCount = 0;
  const fetchMock = async () => {
    fetchCount += 1;
    await new Promise((resolve) => setTimeout(resolve, SYNTHETIC_UPSTREAM_DELAY_MS));
    return new Response(JSON.stringify({
      bills: [{ number: '1001', title: 'Cache Measurement Bill' }],
      pagination: { next: null, count: 1 },
    }), {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'cache-control': 'max-age=300',
      },
    });
  };

  const firstClient = new CongressApiClient({
    baseUrl: 'https://api.congress.gov/v3',
    apiKey: 'test-key',
    throttleMs: 0,
    fetchFn: fetchMock,
  });
  const secondClient = new CongressApiClient({
    baseUrl: 'https://api.congress.gov/v3',
    apiKey: 'test-key',
    throttleMs: 0,
    fetchFn: fetchMock,
  });

  const coldStart = performance.now();
  await firstClient.getBillsPage({ congress: 119, limit: 1 });
  const coldDurationMs = performance.now() - coldStart;

  const warmStart = performance.now();
  await secondClient.getBillsPage({ congress: 119, limit: 1 });
  const warmDurationMs = performance.now() - warmStart;

  console.log(JSON.stringify({
    syntheticUpstreamDelayMs: SYNTHETIC_UPSTREAM_DELAY_MS,
    fetchCount,
    coldDurationMs: Number(coldDurationMs.toFixed(2)),
    warmDurationMs: Number(warmDurationMs.toFixed(2)),
    cacheHitAvoidedNetwork: fetchCount === 1,
  }, null, 2));
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
