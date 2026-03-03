const CONGRESS_API_BASE = (process.env.CONGRESS_API_BASE ?? 'http://127.0.0.1:8787').replace(/\/$/, '');

async function main() {
  const search = await getJson('/congress/search?congress=119&page=1&limit=20');
  assert(search.response.status === 200, `Expected /congress/search to return 200, got ${search.response.status}`);
  assert(search.body && typeof search.body === 'object', 'Expected search response body to be JSON object');
  assert(search.body.data && typeof search.body.data === 'object', 'Expected search response to contain data object');
  assert(Array.isArray(search.body.data.items), 'Expected search response data.items to be an array');
  assert(typeof search.body.data.total === 'number', 'Expected search response data.total to be a number');
  assert(typeof search.body.data.page === 'number', 'Expected search response data.page to be a number');
  assert(typeof search.body.data.pageSize === 'number', 'Expected search response data.pageSize to be a number');
  assert(typeof search.body.data.totalPages === 'number', 'Expected search response data.totalPages to be a number');
  assert(search.body.data.query && typeof search.body.data.query === 'object', 'Expected search response data.query to be an object');

  const bounded = await getJson('/congress/search?limit=5000');
  assert(bounded.response.status === 200, `Expected bounded /congress/search to return 200, got ${bounded.response.status}`);
  assert(bounded.body?.data?.query?.limit === 100, `Expected bounded search query.limit to be 100, got ${String(bounded.body?.data?.query?.limit)}`);
  assert(bounded.body?.data?.pageSize === 100, `Expected bounded search pageSize to be 100, got ${String(bounded.body?.data?.pageSize)}`);

  const invalid = await getJson('/congress/search?from=2026-02-27&to=2026-02-20');
  assert(invalid.response.status === 400, `Expected invalid search to return 400, got ${invalid.response.status}`);
  assert(invalid.body?.error?.code === 'invalid_query', `Expected invalid search error code invalid_query, got ${String(invalid.body?.error?.code)}`);

  const firstBill = search.body.data.items[0];
  assert(firstBill, 'Expected /congress/search to return at least one bill to follow.');

  const congress = firstBill.congress;
  const type = firstBill.type;
  const number = firstBill.number;
  assert(typeof congress === 'number', 'Expected returned bill to include numeric congress');
  assert(typeof type === 'string' && type.length > 0, 'Expected returned bill to include type');
  assert(typeof number === 'number', 'Expected returned bill to include numeric number');

  const detailPath = `/congress/bill/${encodeURIComponent(String(congress))}/${encodeURIComponent(type)}/${encodeURIComponent(String(number))}`;
  const detail = await getJson(detailPath);
  assert(detail.response.status === 200, `Expected ${detailPath} to return 200, got ${detail.response.status}`);
  assert(detail.body?.data?.bill, 'Expected bill detail response to include data.bill');

  const actionsPath = `${detailPath}/actions`;
  const actions = await getJson(actionsPath);
  assert(actions.response.status === 200, `Expected ${actionsPath} to return 200, got ${actions.response.status}`);
  assert(actions.body?.data?.bill, 'Expected bill actions response to include data.bill');
  assert(Array.isArray(actions.body?.data?.actions), 'Expected bill actions response to include data.actions array');

  console.log(JSON.stringify({
    ok: true,
    base: CONGRESS_API_BASE,
    checked: {
      search: true,
      boundedPagination: true,
      invalidInput: true,
      billDetail: {
        congress,
        type,
        number,
      },
      billActions: true,
    },
  }));
}

async function getJson(pathname) {
  const url = `${CONGRESS_API_BASE}${pathname}`;
  let response;

  try {
    response = await fetch(url, {
      headers: {
        Accept: 'application/json',
      },
    });
  } catch (error) {
    throw new Error(`Could not reach Congress Worker at ${CONGRESS_API_BASE}: ${error instanceof Error ? error.message : String(error)}`);
  }

  let body = null;
  try {
    body = await response.json();
  } catch {
    body = null;
  }

  return { response, body };
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

main().catch((error) => {
  console.error(JSON.stringify({
    ok: false,
    base: CONGRESS_API_BASE,
    error: error instanceof Error ? error.message : String(error),
  }));
  process.exitCode = 1;
});
