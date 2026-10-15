import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// https://developers.cloudflare.com/pages/platform/limits/
// Use the limit enforced by this project's Pages deployment.
export function validatePagesAssets(outputDir, { maxFiles = 20_000, maxFileBytes = 25 * 1024 * 1024 } = {}) {
  let fileCount = 0;
  let totalBytes = 0;

  function visit(directory) {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const assetPath = path.join(directory, entry.name);
      const relativePath = path.relative(outputDir, assetPath);
      if (entry.isSymbolicLink()) {
        throw new Error(`Export contains a symlink: ${relativePath}. Keep bulk data outside the static export.`);
      }
      if (entry.isDirectory()) {
        visit(assetPath);
      } else if (entry.isFile()) {
        const { size } = fs.statSync(assetPath);
        if (size > maxFileBytes) {
          throw new Error(`Asset ${relativePath} exceeds the Cloudflare Pages file size limit (${maxFileBytes} bytes).`);
        }
        fileCount++;
        totalBytes += size;
        if (fileCount > maxFiles) {
          throw new Error(`Export exceeds the Cloudflare Pages limit of ${maxFiles} files. Keep bulk data outside public/.`);
        }
      }
    }
  }

  visit(outputDir);
  return { fileCount, totalBytes };
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const outputDir = path.resolve(process.argv[2] || 'out');
  try {
    const { fileCount, totalBytes } = validatePagesAssets(outputDir);
    console.log(`Cloudflare Pages assets verified: ${fileCount}/20000 files, ${(totalBytes / 1024 / 1024).toFixed(1)} MiB total; every file within 25 MiB.`);
  } catch (error) {
    console.error(`Cloudflare Pages asset validation failed: ${error.message}`);
    process.exitCode = 1;
  }
}
