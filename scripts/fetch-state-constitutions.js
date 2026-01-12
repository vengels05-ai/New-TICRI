/**
 * Script to fetch state constitution texts
 * 
 * This script will help you download state constitution texts from various sources
 * and format them for your website.
 * 
 * IMPORTANT: Before using this script:
 * 1. Check each state's official government website for their constitution
 * 2. Verify copyright/licensing - most state constitutions are public domain
 * 3. Many states provide downloadable text/PDF versions
 * 
 * Recommended sources for each state:
 * - State legislature websites (usually have official text)
 * - Ballotpedia (has structured constitution text for all states)
 * - Justia (legal database with state constitutions)
 * - Official state government portals
 */

const fs = require('fs');
const path = require('path');

// State information
const states = [
  { name: 'Alabama', slug: 'alabama', abbr: 'AL' },
  { name: 'Alaska', slug: 'alaska', abbr: 'AK' },
  { name: 'Arizona', slug: 'arizona', abbr: 'AZ' },
  { name: 'Arkansas', slug: 'arkansas', abbr: 'AR' },
  { name: 'California', slug: 'california', abbr: 'CA' },
  { name: 'Colorado', slug: 'colorado', abbr: 'CO' },
  { name: 'Connecticut', slug: 'connecticut', abbr: 'CT' },
  { name: 'Delaware', slug: 'delaware', abbr: 'DE' },
  { name: 'Florida', slug: 'florida', abbr: 'FL' },
  { name: 'Georgia', slug: 'georgia', abbr: 'GA' },
  { name: 'Hawaii', slug: 'hawaii', abbr: 'HI' },
  { name: 'Idaho', slug: 'idaho', abbr: 'ID' },
  { name: 'Illinois', slug: 'illinois', abbr: 'IL' },
  { name: 'Indiana', slug: 'indiana', abbr: 'IN' },
  { name: 'Iowa', slug: 'iowa', abbr: 'IA' },
  { name: 'Kansas', slug: 'kansas', abbr: 'KS' },
  { name: 'Kentucky', slug: 'kentucky', abbr: 'KY' },
  { name: 'Louisiana', slug: 'louisiana', abbr: 'LA' },
  { name: 'Maine', slug: 'maine', abbr: 'ME' },
  { name: 'Maryland', slug: 'maryland', abbr: 'MD' },
  { name: 'Massachusetts', slug: 'massachusetts', abbr: 'MA' },
  { name: 'Michigan', slug: 'michigan', abbr: 'MI' },
  { name: 'Minnesota', slug: 'minnesota', abbr: 'MN' },
  { name: 'Mississippi', slug: 'mississippi', abbr: 'MS' },
  { name: 'Missouri', slug: 'missouri', abbr: 'MO' },
  { name: 'Montana', slug: 'montana', abbr: 'MT' },
  { name: 'Nebraska', slug: 'nebraska', abbr: 'NE' },
  { name: 'Nevada', slug: 'nevada', abbr: 'NV' },
  { name: 'New Hampshire', slug: 'new-hampshire', abbr: 'NH' },
  { name: 'New Jersey', slug: 'new-jersey', abbr: 'NJ' },
  { name: 'New Mexico', slug: 'new-mexico', abbr: 'NM' },
  { name: 'New York', slug: 'new-york', abbr: 'NY' },
  { name: 'North Carolina', slug: 'north-carolina', abbr: 'NC' },
  { name: 'North Dakota', slug: 'north-dakota', abbr: 'ND' },
  { name: 'Ohio', slug: 'ohio', abbr: 'OH' },
  { name: 'Oklahoma', slug: 'oklahoma', abbr: 'OK' },
  { name: 'Oregon', slug: 'oregon', abbr: 'OR' },
  { name: 'Pennsylvania', slug: 'pennsylvania', abbr: 'PA' },
  { name: 'Rhode Island', slug: 'rhode-island', abbr: 'RI' },
  { name: 'South Carolina', slug: 'south-carolina', abbr: 'SC' },
  { name: 'South Dakota', slug: 'south-dakota', abbr: 'SD' },
  { name: 'Tennessee', slug: 'tennessee', abbr: 'TN' },
  { name: 'Texas', slug: 'texas', abbr: 'TX' },
  { name: 'Utah', slug: 'utah', abbr: 'UT' },
  { name: 'Vermont', slug: 'vermont', abbr: 'VT' },
  { name: 'Virginia', slug: 'virginia', abbr: 'VA' },
  { name: 'Washington', slug: 'washington', abbr: 'WA' },
  { name: 'West Virginia', slug: 'west-virginia', abbr: 'WV' },
  { name: 'Wisconsin', slug: 'wisconsin', abbr: 'WI' },
  { name: 'Wyoming', slug: 'wyoming', abbr: 'WY' },
];

// Create data directory if it doesn't exist
const dataDir = path.join(__dirname, '..', 'data', 'state-constitutions');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Template for constitution data
function createConstitutionTemplate(state) {
  return {
    state: state.name,
    slug: state.slug,
    abbreviation: state.abbr,
    lastUpdated: new Date().toISOString(),
    source: 'Official State Legislature Website',
    sourceUrl: '',
    preamble: '',
    articles: [
      // Example structure:
      // {
      //   number: 1,
      //   title: 'Bill of Rights',
      //   sections: [
      //     {
      //       number: 1,
      //       title: 'Freedom of Speech',
      //       text: 'Full text of the section...'
      //     }
      //   ]
      // }
    ]
  };
}

// Generate template files for all states
console.log('Generating template files for state constitutions...\n');

states.forEach(state => {
  const filePath = path.join(dataDir, `${state.slug}.json`);
  
  if (!fs.existsSync(filePath)) {
    const template = createConstitutionTemplate(state);
    fs.writeFileSync(filePath, JSON.stringify(template, null, 2));
    console.log(`✓ Created template: ${state.name}`);
  } else {
    console.log(`- Skipped (exists): ${state.name}`);
  }
});

console.log('\n✅ Template generation complete!');
console.log(`\nFiles created in: ${dataDir}`);
console.log('\nNext steps:');
console.log('1. Find official source for each state constitution');
console.log('2. Copy/paste or import the text into the JSON files');
console.log('3. Structure the text into articles and sections');
console.log('4. Add source URLs for attribution');
console.log('\nRecommended sources:');
console.log('- State legislature websites');
console.log('- Ballotpedia.org');
console.log('- Justia.com');
console.log('- LawServer.com');
