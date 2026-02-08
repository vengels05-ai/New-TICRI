#!/usr/bin/env node

/**
 * Internal Link Checker for TICRI
 * 
 * This script checks all internal links on the built site to ensure
 * they work correctly. Run after building the site.
 * 
 * Usage:
 *   npm run build
 *   npm run check-links
 * 
 * Or for local dev server:
 *   npm run dev (in another terminal)
 *   node scripts/check-links.js http://localhost:3000
 */

const { LinkChecker } = require('linkinator');

const url = process.argv[2] || 'http://localhost:3000';

console.log(`🔍 Checking links on ${url}...\n`);

const checker = new LinkChecker();

checker.check({
  path: url,
  recurse: true,
  linksToSkip: [
    // Skip external links
    'https://www.usafacts.org',
    'https://www.535project.org',
    'https://discord.gg/*',
    // Skip common external domains
    'https://twitter.com/*',
    'https://facebook.com/*',
    'https://www.congress.gov/*',
    'https://www.supremecourt.gov/*',
  ],
}).then(result => {
  const brokenLinks = result.links.filter(link => link.state === 'BROKEN');
  const skippedLinks = result.links.filter(link => link.state === 'SKIPPED');
  const okLinks = result.links.filter(link => link.state === 'OK');

  console.log('\n📊 Summary:');
  console.log(`  ✅ OK: ${okLinks.length}`);
  console.log(`  ⏭️  Skipped: ${skippedLinks.length}`);
  console.log(`  ❌ Broken: ${brokenLinks.length}\n`);

  if (brokenLinks.length > 0) {
    console.log('❌ Broken Links Found:\n');
    brokenLinks.forEach(link => {
      console.log(`  ${link.url}`);
      console.log(`    Status: ${link.status || 'N/A'}`);
      console.log(`    Found on: ${link.parent || 'N/A'}\n`);
    });
    process.exit(1);
  } else {
    console.log('✅ All internal links are working!\n');
    process.exit(0);
  }
}).catch(error => {
  console.error('Error checking links:', error);
  process.exit(1);
});
