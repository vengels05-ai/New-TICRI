const fs = require('fs');
const path = require('path');

// Source and destination directories
const SOURCE_DIR = '/Users/vengels/TICRI2/content/cases';
const DEST_DIR = '/Users/vengels/ticri-nextjs/app/cases';

// Categories to process
const CATEGORIES = [
  'foundational',
  'first-amendment',
  'civil-rights',
  'criminal-justice',
  'parental-rights',
  'executive-power',
  'federalism',
  'separation-of-powers',
  'economic-rights',
  'healthcare-law',
  'military-service',
  'wartime-powers'
];

// Helper function to parse front matter and content from markdown
function parseMarkdown(content) {
  const frontMatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontMatterRegex);
  
  if (!match) {
    return { frontMatter: {}, body: content };
  }
  
  const frontMatterText = match[1];
  const body = match[2];
  
  // Parse YAML-like front matter
  const frontMatter = {};
  frontMatterText.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > -1) {
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();
      // Remove quotes if present
      value = value.replace(/^["']|["']$/g, '');
      frontMatter[key] = value;
    }
  });
  
  return { frontMatter, body };
}

// Helper function to extract sections from markdown body
function extractSections(body) {
  const sections = {};
  
  // Extract link to opinion
  const linkMatch = body.match(/\[Read the U\.S\. Reports opinion \(PDF\)\]\((.*?)\)/);
  sections.opinionLink = linkMatch ? linkMatch[1] : '';
  
  // Extract summary
  const summaryMatch = body.match(/\*\*2\) Summary of the Opinion\*\*\s+([\s\S]*?)(?=\n---|\*\*3\))/);
  sections.summary = summaryMatch ? summaryMatch[1].trim() : '';
  
  // Extract why it mattered
  const whyMatch = body.match(/\*\*3\) Why It Mattered\*\*\s+([\s\S]*?)(?=\n---|\*\*4\))/);
  sections.whyMatters = whyMatch ? whyMatch[1].trim() : '';
  
  // Extract what it provided/took away
  const providedMatch = body.match(/\*\*4\) What It Provided or Took Away\*\*\s+([\s\S]*?)(?=\n---|\*\*5\))/);
  if (providedMatch) {
    const text = providedMatch[1].trim();
    const providedRegex = /- \*\*Provided:\*\*\s+(.*?)(?=\n- \*\*Took Away|\n\*\*5\)|$)/s;
    const tookAwayRegex = /- \*\*Took Away:\*\*\s+(.*?)(?=\n---|\n\*\*5\)|$)/s;
    
    const provided = text.match(providedRegex);
    const tookAway = text.match(tookAwayRegex);
    
    sections.provided = provided ? provided[1].trim() : '';
    sections.tookAway = tookAway ? tookAway[1].trim() : '';
  }
  
  // Extract overreach or proper role
  const overreachMatch = body.match(/\*\*5\) Overreach or Proper Role\?\*\*\s+([\s\S]*?)(?=\n---|\*\*6\))/);
  sections.overreach = overreachMatch ? overreachMatch[1].trim() : '';
  
  // Extract plain-English impact
  const impactMatch = body.match(/\*\*6\) Plain-English Impact Today\*\*\s+([\s\S]*?)(?=\n---|\n## Fast Facts|$)/);
  sections.impact = impactMatch ? impactMatch[1].trim() : '';
  
  // Extract fast facts
  const fastFactsMatch = body.match(/## Fast Facts\s+([\s\S]*?)$/);
  if (fastFactsMatch) {
    const factsText = fastFactsMatch[1];
    sections.fastFacts = {};
    
    const courtMatch = factsText.match(/- \*\*Court:\*\*\s+(.*)/);
    const authorMatch = factsText.match(/- \*\*Author:\*\*\s+(.*)/);
    const decidedMatch = factsText.match(/- \*\*Argued\/Decided:\*\*\s+(.*)/);
    const clausesMatch = factsText.match(/- \*\*Key Clauses:\*\*\s+(.*)/);
    
    if (courtMatch) sections.fastFacts.court = courtMatch[1].trim();
    if (authorMatch) sections.fastFacts.author = authorMatch[1].trim();
    if (decidedMatch) sections.fastFacts.decided = decidedMatch[1].trim();
    if (clausesMatch) sections.fastFacts.clauses = clausesMatch[1].trim();
  }
  
  return sections;
}

// Helper function to convert markdown bold/italic to HTML
function convertMarkdownFormatting(text) {
  if (!text) return '';
  
  // Convert **text** to <strong>text</strong>
  text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
  // Convert *text* to <em>text</em>
  text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
  
  return text;
}

// Generate React component from parsed data
function generateComponent(frontMatter, sections, caseName) {
  const { title, year, citation, category } = frontMatter;
  const categoryBadge = category || 'Case';
  
  // Convert case name to component name (e.g., "marbury-v-madison" -> "MarburyVMadison")
  const componentName = caseName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
  
  const summary = convertMarkdownFormatting(sections.summary);
  const whyMatters = convertMarkdownFormatting(sections.whyMatters);
  const provided = convertMarkdownFormatting(sections.provided);
  const tookAway = convertMarkdownFormatting(sections.tookAway);
  const overreach = convertMarkdownFormatting(sections.overreach);
  const impact = convertMarkdownFormatting(sections.impact);
  
  return `export default function ${componentName}Page() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-block bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-4">
              ${year} • ${categoryBadge}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              ${title}
            </h1>
            ${citation ? `<p className="text-xl text-gray-300">\n              ${citation}\n            </p>` : ''}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          ${sections.opinionLink ? `{/* Link to Opinion */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-2">📄 Read the Actual Opinion</h3>
            <a 
              href="${sections.opinionLink}" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              U.S. Reports opinion (PDF) →
            </a>
          </div>` : ''}

          {/* Summary */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-800 pb-2">
              📋 Summary of the Opinion
            </h2>
            <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: \`${summary}\` }} />
          </div>

          {/* Why It Mattered */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-800 pb-2">
              ⚖️ Why It Mattered
            </h2>
            <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: \`${whyMatters}\` }} />
          </div>

          {/* What It Provided or Took Away */}
          ${provided || tookAway ? `<div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-green-600 pb-2">
              ✅ What It Provided or Took Away
            </h2>
            
            <div className="space-y-4">
              ${provided ? `<div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                <h3 className="font-bold text-gray-900 mb-2">✅ Provided:</h3>
                <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: \`${provided}\` }} />
              </div>` : ''}

              ${tookAway ? `<div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                <h3 className="font-bold text-gray-900 mb-2">❌ Took Away:</h3>
                <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: \`${tookAway}\` }} />
              </div>` : ''}
            </div>
          </div>` : ''}

          {/* Overreach or Proper Role */}
          ${overreach ? `<div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2">
              🤔 Overreach or Proper Role?
            </h2>
            <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: \`${overreach}\` }} />
          </div>` : ''}

          {/* Plain-English Impact Today */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-lg shadow-lg p-8 mb-6">
            <h2 className="text-3xl font-bold mb-6 border-b-2 border-white pb-2">
              💡 Plain-English Impact Today
            </h2>
            <p className="text-gray-100 leading-relaxed" dangerouslySetInnerHTML={{ __html: \`${impact}\` }} />
          </div>

          {/* Fast Facts */}
          ${sections.fastFacts ? `<div className="bg-gray-50 rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">⚡ Fast Facts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${sections.fastFacts.court ? `<div>
                <p className="text-gray-600 font-semibold">Court:</p>
                <p className="text-gray-900">${sections.fastFacts.court}</p>
              </div>` : ''}
              ${sections.fastFacts.author ? `<div>
                <p className="text-gray-600 font-semibold">Author:</p>
                <p className="text-gray-900">${sections.fastFacts.author}</p>
              </div>` : ''}
              ${sections.fastFacts.decided ? `<div>
                <p className="text-gray-600 font-semibold">Year:</p>
                <p className="text-gray-900">${sections.fastFacts.decided}</p>
              </div>` : ''}
              ${sections.fastFacts.clauses ? `<div>
                <p className="text-gray-600 font-semibold">Key Clauses:</p>
                <p className="text-gray-900">${sections.fastFacts.clauses}</p>
              </div>` : ''}
            </div>
          </div>` : ''}

        </div>
      </section>
    </div>
  );
}
`;
}

// Main conversion function
function convertCase(sourceFile, category) {
  const content = fs.readFileSync(sourceFile, 'utf8');
  const { frontMatter, body } = parseMarkdown(content);
  const sections = extractSections(body);
  
  // Get case name from filename
  const caseName = path.basename(sourceFile, '.md');
  
  // Generate component
  const component = generateComponent(frontMatter, sections, caseName);
  
  // Create destination directory and file
  const destDir = path.join(DEST_DIR, category, caseName);
  const destFile = path.join(destDir, 'page.tsx');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  
  // Write component file
  fs.writeFileSync(destFile, component);
  
  console.log(`✅ Created: ${category}/${caseName}/page.tsx`);
  return caseName;
}

// Process all categories
function processAllCases() {
  let totalCases = 0;
  const results = {};
  
  CATEGORIES.forEach(category => {
    const categoryDir = path.join(SOURCE_DIR, category);
    
    if (!fs.existsSync(categoryDir)) {
      console.log(`⚠️  Category not found: ${category}`);
      return;
    }
    
    const files = fs.readdirSync(categoryDir)
      .filter(file => file.endsWith('.md') && !file.startsWith('_index'));
    
    console.log(`\n📁 Processing ${category} (${files.length} cases)...`);
    results[category] = [];
    
    files.forEach(file => {
      const sourceFile = path.join(categoryDir, file);
      try {
        const caseName = convertCase(sourceFile, category);
        results[category].push(caseName);
        totalCases++;
      } catch (error) {
        console.error(`❌ Error processing ${file}:`, error.message);
      }
    });
  });
  
  console.log(`\n\n✨ Conversion complete! Created ${totalCases} case pages.`);
  console.log('\nSummary by category:');
  Object.keys(results).forEach(category => {
    console.log(`  ${category}: ${results[category].length} cases`);
  });
}

// Run the script
processAllCases();
