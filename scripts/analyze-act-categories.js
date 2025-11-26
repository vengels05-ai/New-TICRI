const fs = require('fs');
const path = require('path');

const TICRI2_ACTS_DIR = '/Users/vengels/TICRI2/content/acts';

// Parse frontmatter
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
  const match = content.match(frontmatterRegex);
  
  if (!match) return {};
  
  const frontmatter = {};
  const lines = match[1].split('\n');
  
  lines.forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > -1) {
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();
      value = value.replace(/^["']|["']$/g, '');
      
      if (value.startsWith('[')) {
        value = value.replace(/[\[\]]/g, '').split(',').map(v => v.trim().replace(/["']/g, ''));
      }
      
      frontmatter[key] = value;
    }
  });
  
  return frontmatter;
}

// Category mapping based on primary tag
const categoryMap = {
  'civil rights': 'Civil Rights & Equality',
  'healthcare': 'Healthcare & Social Policy',
  'environment': 'Environmental Law',
  'employment': 'Labor & Employment',
  'finance': 'Finance & Banking',
  'banking': 'Finance & Banking',
  'consumer protection': 'Consumer Protection',
  'national security': 'National Security & Defense',
  'military': 'National Security & Defense',
  'immigration': 'Immigration',
  'education': 'Education',
  'criminal justice': 'Criminal Justice',
  'criminal law': 'Criminal Justice',
  'administrative law': 'Administrative Law',
  'internet': 'Technology & Privacy',
  'technology': 'Technology & Privacy',
  'surveillance': 'Technology & Privacy',
  'cybersecurity': 'Technology & Privacy',
  'elections': 'Voting & Elections',
  'voting': 'Voting & Elections',
  'securities': 'Securities & Markets',
  'antitrust': 'Antitrust & Competition',
  'public health': 'Public Health',
  'trade': 'International Trade',
  'foreign policy': 'Foreign Policy',
  'tax': 'Taxation',
  'social welfare': 'Social Welfare',
  'emergency powers': 'Emergency Powers',
  'public lands': 'Natural Resources',
  'energy': 'Energy Policy',
  'transparency': 'Government Transparency'
};

function getCategoryFromTags(tags) {
  if (!tags || !Array.isArray(tags)) return 'Miscellaneous';
  
  // Check each tag against category map
  for (const tag of tags) {
    const lowerTag = tag.toLowerCase();
    if (categoryMap[lowerTag]) {
      return categoryMap[lowerTag];
    }
  }
  
  return 'Miscellaneous';
}

// Analyze all acts
const files = fs.readdirSync(TICRI2_ACTS_DIR);
const actsByCategory = {};
const allActs = [];

files.forEach(filename => {
  if (!filename.endsWith('.md')) return;
  if (filename.startsWith('_')) return;
  if (filename.includes('-timeline')) return;
  
  const filepath = path.join(TICRI2_ACTS_DIR, filename);
  const content = fs.readFileSync(filepath, 'utf-8');
  const frontmatter = parseFrontmatter(content);
  
  const slug = filename.replace('.md', '');
  const category = getCategoryFromTags(frontmatter.tags);
  
  const act = {
    slug,
    title: frontmatter.title || 'Untitled',
    year: frontmatter.year || '????',
    tags: frontmatter.tags || [],
    category
  };
  
  allActs.push(act);
  
  if (!actsByCategory[category]) {
    actsByCategory[category] = [];
  }
  actsByCategory[category].push(act);
});

// Sort categories and acts
const sortedCategories = Object.keys(actsByCategory).sort();

console.log('\n=== ACTS BY CATEGORY ===\n');

sortedCategories.forEach(category => {
  const acts = actsByCategory[category].sort((a, b) => {
    const yearA = parseInt(a.year) || 9999;
    const yearB = parseInt(b.year) || 9999;
    return yearA - yearB;
  });
  
  console.log(`\n${category} (${acts.length} acts):`);
  acts.forEach(act => {
    console.log(`  - ${act.year}: ${act.title} (${act.slug})`);
  });
});

console.log(`\n\nTOTAL: ${allActs.length} acts across ${sortedCategories.length} categories\n`);

// Output JSON for use in React
const output = {
  categories: sortedCategories.map(cat => ({
    name: cat,
    count: actsByCategory[cat].length,
    acts: actsByCategory[cat].sort((a, b) => parseInt(a.year) - parseInt(b.year))
  })),
  totalActs: allActs.length
};

fs.writeFileSync(
  path.join(__dirname, '../app/acts/acts-by-category.json'),
  JSON.stringify(output, null, 2)
);

console.log('✅ Generated acts-by-category.json');
