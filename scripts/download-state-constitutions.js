#!/usr/bin/env node

/**
 * Script to download state constitutions from official government sources
 * 
 * This script creates raw text files from official state legislature websites.
 * The text will be formatted later - this step is just about capturing the source material.
 * 
 * Usage:
 *   node scripts/download-state-constitutions.js [state-abbreviation]
 *   
 *   Examples:
 *     node scripts/download-state-constitutions.js CA    # Download California only
 *     node scripts/download-state-constitutions.js all   # Download all 50 states
 */

const fs = require('fs');
const path = require('path');

// Official state government URLs for constitutions
const STATE_SOURCES = {
  AL: {
    name: 'Alabama',
    url: 'http://alisondb.legislature.state.al.us/alison/CodeOfAlabama/Constitution/1901/CA-245731.htm',
    type: 'html'
  },
  AK: {
    name: 'Alaska',
    url: 'http://www.legis.state.ak.us/basis/folioproxy.asp?url=http://wwwjnu01.legis.state.ak.us/cgi-bin/folioisa.dll/acontxt/query=*/doc/{t750}',
    type: 'html'
  },
  AZ: {
    name: 'Arizona',
    url: 'https://azleg.gov/const/',
    type: 'html'
  },
  AR: {
    name: 'Arkansas',
    url: 'https://www.arkleg.state.ar.us/Bills/Document?type=pdf&source=static&file=ARConstitution1874.pdf',
    type: 'pdf'
  },
  CA: {
    name: 'California',
    url: 'https://leginfo.legislature.ca.gov/faces/codes_displayexpandedbranch.xhtml?lawCode=CONS',
    type: 'html',
    note: 'Multi-page - need to fetch each article separately'
  },
  CO: {
    name: 'Colorado',
    url: 'https://leg.colorado.gov/colorado-constitution',
    type: 'html'
  },
  CT: {
    name: 'Connecticut',
    url: 'https://www.cga.ct.gov/current/pub/chap_000.htm',
    type: 'html'
  },
  DE: {
    name: 'Delaware',
    url: 'https://delcode.delaware.gov/constitution/',
    type: 'html'
  },
  FL: {
    name: 'Florida',
    url: 'http://www.leg.state.fl.us/Statutes/index.cfm?Mode=Constitution&Submenu=3&Tab=statutes',
    type: 'html'
  },
  GA: {
    name: 'Georgia',
    url: 'https://www.legis.ga.gov/document/constitution/',
    type: 'html'
  },
  HI: {
    name: 'Hawaii',
    url: 'https://www.capitol.hawaii.gov/hrscurrent/Vol01_Ch0001-0042F/00-Hawaii_Constitution/',
    type: 'html'
  },
  ID: {
    name: 'Idaho',
    url: 'https://legislature.idaho.gov/statutesrules/idconst/',
    type: 'html'
  },
  IL: {
    name: 'Illinois',
    url: 'https://www.ilga.gov/commission/lrb/conmain.htm',
    type: 'html'
  },
  IN: {
    name: 'Indiana',
    url: 'http://iga.in.gov/legislative/laws/constitution/',
    type: 'html'
  },
  IA: {
    name: 'Iowa',
    url: 'https://www.legis.iowa.gov/law/iowaConstitution',
    type: 'html'
  },
  KS: {
    name: 'Kansas',
    url: 'http://www.kslegislature.org/li/b2021_22/statute/constitution/',
    type: 'html'
  },
  KY: {
    name: 'Kentucky',
    url: 'https://legislature.ky.gov/Law/constitution/Pages/default.aspx',
    type: 'html'
  },
  LA: {
    name: 'Louisiana',
    url: 'https://senate.la.gov/Documents/Constitution/',
    type: 'html'
  },
  ME: {
    name: 'Maine',
    url: 'https://legislature.maine.gov/legis/const/',
    type: 'html'
  },
  MD: {
    name: 'Maryland',
    url: 'https://mgaleg.maryland.gov/mgawebsite/Laws/Constitution',
    type: 'html'
  },
  MA: {
    name: 'Massachusetts',
    url: 'https://malegislature.gov/Laws/Constitution',
    type: 'html'
  },
  MI: {
    name: 'Michigan',
    url: 'http://www.legislature.mi.gov/documents/publications/Constitution.pdf',
    type: 'pdf'
  },
  MN: {
    name: 'Minnesota',
    url: 'https://www.revisor.mn.gov/constitution/',
    type: 'html'
  },
  MS: {
    name: 'Mississippi',
    url: 'https://law.justia.com/constitution/mississippi/',
    note: 'Check if there is an official MS source'
  },
  MO: {
    name: 'Missouri',
    url: 'https://www.senate.mo.gov/missouri-constitution/',
    type: 'html'
  },
  MT: {
    name: 'Montana',
    url: 'https://leg.mt.gov/bills/mca/Constitution/index.html',
    type: 'html'
  },
  NE: {
    name: 'Nebraska',
    url: 'https://nebraskalegislature.gov/laws/browse-constitution.php',
    type: 'html'
  },
  NV: {
    name: 'Nevada',
    url: 'https://www.leg.state.nv.us/Const/NvConst.html',
    type: 'html'
  },
  NH: {
    name: 'New Hampshire',
    url: 'http://www.gencourt.state.nh.us/rsa/html/NHTOC/NHTOC-CONST-00.htm',
    type: 'html'
  },
  NJ: {
    name: 'New Jersey',
    url: 'https://www.njleg.state.nj.us/constitution',
    type: 'html'
  },
  NM: {
    name: 'New Mexico',
    url: 'https://nmonesource.com/nmos/nmcon/en/nav.do',
    type: 'html'
  },
  NY: {
    name: 'New York',
    url: 'https://www.nysenate.gov/legislation/constitution',
    type: 'html'
  },
  NC: {
    name: 'North Carolina',
    url: 'https://www.ncleg.gov/Laws/Constitution',
    type: 'html'
  },
  ND: {
    name: 'North Dakota',
    url: 'https://www.legis.nd.gov/constitution',
    type: 'html'
  },
  OH: {
    name: 'Ohio',
    url: 'https://codes.ohio.gov/ohio-constitution',
    type: 'html'
  },
  OK: {
    name: 'Oklahoma',
    url: 'http://www.oklegislature.gov/cf/LawsAndRulesOfGovernment/OKConstitution.cfm',
    type: 'html'
  },
  OR: {
    name: 'Oregon',
    url: 'https://www.oregonlegislature.gov/bills_laws/Pages/OrConst.aspx',
    type: 'html'
  },
  PA: {
    name: 'Pennsylvania',
    url: 'https://www.legis.state.pa.us/cfdocs/legis/LI/consCheck.cfm?txtType=HTM&ttl=00',
    type: 'html'
  },
  RI: {
    name: 'Rhode Island',
    url: 'http://webserver.rilegislature.gov/RiConstitution/',
    type: 'html'
  },
  SC: {
    name: 'South Carolina',
    url: 'https://www.scstatehouse.gov/scconstitution/scconst.php',
    type: 'html'
  },
  SD: {
    name: 'South Dakota',
    url: 'https://sdlegislature.gov/Statutes/Constitution',
    type: 'html'
  },
  TN: {
    name: 'Tennessee',
    url: 'https://www.tn.gov/content/dam/tn/stateoftn/documents/TNConstitution.pdf',
    type: 'pdf'
  },
  TX: {
    name: 'Texas',
    url: 'https://statutes.capitol.texas.gov/Index.aspx',
    type: 'html',
    note: 'Constitution listed under statutes'
  },
  UT: {
    name: 'Utah',
    url: 'https://le.utah.gov/xcode/constitution.html',
    type: 'html'
  },
  VT: {
    name: 'Vermont',
    url: 'https://legislature.vermont.gov/statutes/constitution',
    type: 'html'
  },
  VA: {
    name: 'Virginia',
    url: 'https://law.lis.virginia.gov/constitution',
    type: 'html'
  },
  WA: {
    name: 'Washington',
    url: 'https://leg.wa.gov/CodeReviser/Pages/WAConstitution.aspx',
    type: 'html'
  },
  WV: {
    name: 'West Virginia',
    url: 'http://www.wvlegislature.gov/WVCODE/WV_CON.cfm',
    type: 'html'
  },
  WI: {
    name: 'Wisconsin',
    url: 'https://docs.legis.wisconsin.gov/constitution',
    type: 'html'
  },
  WY: {
    name: 'Wyoming',
    url: 'https://www.wyoleg.gov/LegislatureStaff/LawLibrary/WyomingConstitution',
    type: 'html'
  }
};

const RAW_TEXT_DIR = path.join(__dirname, '..', 'data', 'state-constitutions', 'raw-text');

// Create raw-text directory if it doesn't exist
if (!fs.existsSync(RAW_TEXT_DIR)) {
  fs.mkdirSync(RAW_TEXT_DIR, { recursive: true });
}

function createManifest() {
  const manifest = {
    createdAt: new Date().toISOString(),
    totalStates: 50,
    instructions: [
      'Manual download process:',
      '1. Visit each state URL listed below',
      '2. Copy the full constitution text',
      '3. Save as [state-abbreviation]-raw.txt in this directory',
      '4. Mark state as "downloaded" in the manifest',
      '',
      'For HTML sources: Copy visible text from browser',
      'For PDF sources: Download PDF, copy text (or use pdf2text)',
      '',
      'We will format the text into JSON structure in a separate step'
    ],
    states: {}
  };

  Object.keys(STATE_SOURCES).forEach(abbr => {
    const state = STATE_SOURCES[abbr];
    manifest.states[abbr] = {
      name: state.name,
      abbreviation: abbr,
      url: state.url,
      type: state.type,
      note: state.note || '',
      downloaded: false,
      filename: `${abbr}-raw.txt`,
      downloadedAt: null
    };
  });

  const manifestPath = path.join(RAW_TEXT_DIR, 'DOWNLOAD_MANIFEST.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`✓ Created manifest: ${manifestPath}`);
}

function createDownloadInstructions() {
  const instructions = `# State Constitution Download Instructions

## Manual Download Process

Since we want to use official government sources and avoid web scraping issues, 
we'll manually download each constitution. This ensures we have the most accurate, 
official text.

### Steps:

1. Open the URL for each state (see DOWNLOAD_MANIFEST.json)
2. Use your browser to view the full constitution
3. Copy all the text (Cmd+A, Cmd+C on Mac)
4. Save to a file named [STATE-ABBREVIATION]-raw.txt
5. Mark the state as downloaded in the manifest

### Priority Order (by population):

1. CA - California
2. TX - Texas
3. FL - Florida
4. NY - New York
5. PA - Pennsylvania
6. IL - Illinois
7. OH - Ohio
8. GA - Georgia
9. NC - North Carolina
10. MI - Michigan

### Tips:

- **For HTML sources**: Open in browser, view full page, copy all text
- **For PDF sources**: Download PDF first, then copy text (or use tools like pdftotext)
- **Multi-page sites**: Some states split constitution into articles - you may need to visit multiple pages
- **Save as plain text**: .txt files, not .doc or .pdf
- **Keep formatting simple**: Don't worry about formatting - we'll structure it later

### After Downloading:

Once we have raw text files, we'll create a formatting script to convert them into
our JSON structure with proper article/section organization.

## Quick Start - California Example:

1. Visit: https://leginfo.legislature.ca.gov/faces/codes_displayexpandedbranch.xhtml?lawCode=CONS
2. Click through to Article I
3. Copy all text from Article I
4. Repeat for all articles
5. Save combined text as CA-raw.txt
6. Update DOWNLOAD_MANIFEST.json

## Automation Note:

If manual downloading becomes too time-consuming, we can build a scraper for specific
sites that allow it. But starting manually ensures we understand the structure of each
state's constitution first.
`;

  const instructionsPath = path.join(RAW_TEXT_DIR, 'DOWNLOAD_INSTRUCTIONS.md');
  fs.writeFileSync(instructionsPath, instructions);
  console.log(`✓ Created instructions: ${instructionsPath}`);
}

function createStateReadme(abbr) {
  const state = STATE_SOURCES[abbr];
  const readme = `# ${state.name} Constitution

**Source**: ${state.url}
**Type**: ${state.type}
${state.note ? `**Note**: ${state.note}` : ''}

## Download Instructions

1. Visit the URL above
2. Copy the full constitution text
3. Save as ${abbr}-raw.txt in this directory

## Source Information

- **Official Website**: State Legislature
- **Format**: ${state.type.toUpperCase()}
- **Public Domain**: Yes (state government documents)
- **Attribution Required**: Recommended to cite official source

## Status

- [ ] Downloaded
- [ ] Reviewed for completeness
- [ ] Formatted into JSON structure
`;

  const readmePath = path.join(RAW_TEXT_DIR, `${abbr}-README.md`);
  fs.writeFileSync(readmePath, readme);
  return readmePath;
}

// Main execution
console.log('🏛️  State Constitution Download Setup\n');
console.log('Creating directory structure and documentation...\n');

createManifest();
createDownloadInstructions();

console.log('\n✅ Setup complete!');
console.log('\nNext steps:');
console.log('1. Review: data/state-constitutions/raw-text/DOWNLOAD_INSTRUCTIONS.md');
console.log('2. View manifest: data/state-constitutions/raw-text/DOWNLOAD_MANIFEST.json');
console.log('3. Start downloading constitutions from official sources');
console.log('\n💡 Tip: Start with California since we already have the URL open!');
