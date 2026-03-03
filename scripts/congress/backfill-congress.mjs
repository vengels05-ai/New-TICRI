import { backfillCongress } from '../../lib/congress-scanner/backfillCongress.mjs';

function parseArgs(argv) {
  const parsed = {
    confirmFullBackfill: false,
    keepCheckpoint: false,
  };

  for (const arg of argv) {
    if (arg === '--confirm-full-backfill') {
      parsed.confirmFullBackfill = true;
      continue;
    }

    if (arg === '--keep-checkpoint') {
      parsed.keepCheckpoint = true;
      continue;
    }

    if (!arg.startsWith('--')) {
      continue;
    }

    const [rawKey, rawValue] = arg.slice(2).split('=', 2);
    parsed[rawKey] = rawValue ?? 'true';
  }

  return parsed;
}

const args = parseArgs(process.argv.slice(2));

backfillCongress({
  congress: args.congress,
  limit: args.limit,
  maxPages: args.maxPages,
  throttleMs: args.throttleMs,
  interPageDelayMs: args.interPageDelayMs,
  checkpointPath: args.checkpointPath,
  checkpointDir: args.checkpointDir,
  keepCheckpoint: args.keepCheckpoint,
  confirmFullBackfill: args.confirmFullBackfill,
})
  .then((result) => {
    console.log(JSON.stringify({ level: 'info', event: 'backfill.exit_success', ...result }));
  })
  .catch((error) => {
    console.error(JSON.stringify({
      level: 'error',
      event: 'backfill.exit_failure',
      message: error instanceof Error ? error.message : String(error),
    }));
    process.exitCode = 1;
  });
