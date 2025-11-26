const fs = require('fs');
const path = require('path');

// Paths
const TICRI2_ACTS_DIR = '/Users/vengels/TICRI2/content/acts';
const OUTPUT_DIR = '/Users/vengels/ticri-nextjs/app/acts';

// Parse frontmatter from markdown
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
  const match = content.match(frontmatterRegex);
  
  if (!match) return { frontmatter: {}, body: content };
  
  const frontmatter = {};
  const lines = match[1].split('\n');
  
  lines.forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > -1) {
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();
      
      // Remove quotes
      value = value.replace(/^["']|["']$/g, '');
      
      // Handle arrays
      if (value.startsWith('[')) {
        value = value.replace(/[\[\]]/g, '').split(',').map(v => v.trim().replace(/["']/g, ''));
      }
      
      frontmatter[key] = value;
    }
  });
  
  const body = content.substring(match[0].length).trim();
  return { frontmatter, body };
}

// Convert markdown to React-friendly content
function parseMarkdownSections(body) {
  const sections = [];
  const lines = body.split('\n');
  let currentSection = null;
  let currentContent = [];
  
  lines.forEach(line => {
    // Detect section headers
    if (line.match(/^\*\*\d+\)\s+/)) {
      // Save previous section
      if (currentSection) {
        sections.push({
          title: currentSection,
          content: currentContent.join('\n').trim()
        });
      }
      
      // Start new section
      currentSection = line.replace(/^\*\*\d+\)\s+/, '').replace(/\*\*$/, '').trim();
      currentContent = [];
    } else if (line.trim() && currentSection) {
      currentContent.push(line);
    }
  });
  
  // Add last section
  if (currentSection) {
    sections.push({
      title: currentSection,
      content: currentContent.join('\n').trim()
    });
  }
  
  return sections;
}

// Generate section component
function generateSectionTSX(section, icon) {
  // Remove trailing asterisks and clean title
  const cleanTitle = section.title.replace(/\*\*$/g, '').trim();
  
  const content = section.content
    .replace(/^---$/gm, '') // Remove separator lines
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, text, url) => {
      return `<a href="${url}" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">${text}</a>`;
    })
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .split('\n')
    .filter(line => line.trim() && line.trim() !== '---')
    .map(line => {
      if (line.startsWith('- ')) {
        return `              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div>${line.substring(2)}</div>
              </li>`;
      }
      return `            <p className="text-gray-700 leading-relaxed mb-3">${line}</p>`;
    })
    .join('\n');
  
  const hasListItems = section.content.includes('- ');
  
  return `        <section className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>${icon}</span> ${cleanTitle}
          </h2>
          ${hasListItems ? `<ul className="space-y-3 text-gray-700">
${content}
          </ul>` : content}
        </section>`;
}

// Generate individual Act page
function generateActPage(frontmatter, sections) {
  const title = frontmatter.title || 'Untitled Act';
  const year = frontmatter.year || '';
  const citation = frontmatter.citation || '';
  const link = frontmatter.link || '';
  
  const sectionIcons = {
    'Link to the Text of the Act': '📜',
    'Why It Was Done': '🎯',
    'Pre-existing Law or Constitutional Rights': '📚',
    'Overreach or Proper Role?': '⚖️',
    'Who or What It Controls': '👥',
    'Key Sections / Citations': '📋',
    'Recent Changes or Live Controversies': '🔄',
    'Official Sources': '🔗'
  };
  
  const sectionsHTML = sections.map(section => {
    const icon = sectionIcons[section.title] || '📌';
    return generateSectionTSX(section, icon);
  }).join('\n\n');
  
  return `import Link from 'next/link';

export default function ${toCamelCase(title)}Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/acts" className="inline-block text-blue-200 hover:text-white mb-4 transition-colors">
              ← Back to Acts
            </Link>
            <div className="flex items-center justify-center gap-4 mb-4 flex-wrap">
              <h1 className="text-4xl md:text-5xl font-bold">
                ${escapeJSX(title)}
              </h1>
              ${year ? `<span className="bg-white text-blue-900 px-4 py-2 rounded-full font-bold text-xl">
                ${year}
              </span>` : ''}
            </div>
            ${citation ? `<p className="text-xl text-gray-100">
              ${escapeJSX(citation)}
            </p>` : ''}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
${sectionsHTML}

      </div>
    </div>
  );
}
`;
}

// Generate Timeline page
function generateTimelinePage(frontmatter, body) {
  const title = frontmatter.title || 'Timeline';
  const description = body.split('\n')[0] || '';
  
  // Extract timeline entries from markdown
  const timelineRegex = /## \*\*(.+?)\*\*[\s\S]*?(?=## \*\*|$)/g;
  const entries = [];
  let match;
  
  while ((match = timelineRegex.exec(body)) !== null) {
    const entryTitle = match[1];
    const entryContent = match[0];
    
    // Extract year from title
    const yearMatch = entryTitle.match(/(\d{4})/);
    const year = yearMatch ? yearMatch[1] : '????';
    
    // Extract description
    const lines = entryContent.split('\n').slice(1).filter(l => l.trim() && !l.startsWith('#'));
    const desc = lines.join(' ').substring(0, 300).replace(/\*\*/g, '');
    
    entries.push({
      year,
      title: entryTitle,
      description: desc
    });
  }
  
  const timelineHTML = entries.map((entry, index) => `              <div key="${index}" className={\`relative flex items-start \${${index} % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}\`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  ${entry.year}
                </div>
                <div className={\`ml-24 md:ml-0 \${${index} % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12\`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">${escapeJSX(entry.title)}</h3>
                    <p className="text-gray-700">${escapeJSX(entry.description)}</p>
                  </div>
                </div>
              </div>`).join('\n');
  
  return `import Link from 'next/link';

export default function ${toCamelCase(title)}Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/acts" className="inline-block text-blue-200 hover:text-white mb-4 transition-colors">
              ← Back to Acts
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ${escapeJSX(title)}
            </h1>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-blue-300 h-full"></div>
            <div className="space-y-12">
${timelineHTML}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
`;
}

// Helper functions
function toCamelCase(str) {
  return str
    .replace(/[^a-zA-Z0-9]/g, ' ')
    .split(' ')
    .filter(word => word.length > 0)
    .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('')
    .replace(/^(.)/, match => match.toUpperCase());
}

function toKebabCase(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function escapeJSX(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Main processing function
function processActsFiles() {
  console.log('🚀 Starting Acts generation...\n');
  
  const files = fs.readdirSync(TICRI2_ACTS_DIR);
  let actCount = 0;
  let timelineCount = 0;
  let errorCount = 0;
  
  files.forEach(filename => {
    if (!filename.endsWith('.md')) return;
    if (filename.startsWith('_')) return; // Skip index files
    
    try {
      const filepath = path.join(TICRI2_ACTS_DIR, filename);
      const content = fs.readFileSync(filepath, 'utf-8');
      const { frontmatter, body } = parseFrontmatter(content);
      
      const slug = filename.replace('.md', '');
      const isTimeline = filename.includes('-timeline');
      
      let pageContent;
      if (isTimeline) {
        pageContent = generateTimelinePage(frontmatter, body);
        timelineCount++;
      } else {
        const sections = parseMarkdownSections(body);
        pageContent = generateActPage(frontmatter, sections);
        actCount++;
      }
      
      // Create directory and write file
      const outputDir = path.join(OUTPUT_DIR, slug);
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
      
      const outputPath = path.join(outputDir, 'page.tsx');
      fs.writeFileSync(outputPath, pageContent);
      
      console.log(`✅ Generated: ${slug}`);
      
    } catch (error) {
      console.error(`❌ Error processing ${filename}:`, error.message);
      errorCount++;
    }
  });
  
  console.log(`\n📊 Generation Summary:`);
  console.log(`   Acts: ${actCount}`);
  console.log(`   Timelines: ${timelineCount}`);
  console.log(`   Errors: ${errorCount}`);
  console.log(`   Total: ${actCount + timelineCount} pages created`);
}

// Run the script
processActsFiles();
