import { ingestRecentBills } from '../../lib/congress-scanner/ingestRecentBills.mjs';

ingestRecentBills()
  .then((result) => {
    console.log(JSON.stringify({ level: 'info', event: 'ingest.exit_success', ...result }));
  })
  .catch((error) => {
    console.error(JSON.stringify({
      level: 'error',
      event: 'ingest.exit_failure',
      message: error instanceof Error ? error.message : String(error),
    }));
    process.exitCode = 1;
  });
