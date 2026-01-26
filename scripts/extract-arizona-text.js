const fs = require('fs');
const path = require('path');

const htmlDir = path.join(__dirname, '..', 'data', 'state-constitutions', 'raw-text', 'arizona-html');
const outputFile = path.join(__dirname, '..', 'data', 'state-constitutions', 'raw-text', 'AZ-raw.txt');

// Simple HTML tag stripper
function stripHtml(html) {
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\r?\n\s*\r?\n\s*\r?\n/g, '\n\n')
    .trim();
}

let fullText = '='.repeat(80) + '\n';
fullText += 'ARIZONA STATE CONSTITUTION\n';
fullText += 'Source: https://www.azleg.gov/constitution/\n';
fullText += 'Downloaded: ' + new Date().toISOString().split('T')[0] + '\n';
fullText += '='.repeat(80) + '\n\n';

// Read preamble
const preambleFile = path.join(htmlDir, 'preamble.html');
if (fs.existsSync(preambleFile)) {
  const html = fs.readFileSync(preambleFile, 'utf-8');
  const text = stripHtml(html);
  fullText += 'PREAMBLE\n';
  fullText += '-'.repeat(80) + '\n';
  fullText += text + '\n\n\n';
}

// Process each article
const articles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 25, 26, 27, 28, 29, 30];

for (const articleNum of articles) {
  const articleFiles = fs.readdirSync(htmlDir)
    .filter(f => f.startsWith(`article-${articleNum}-section-`) && f.endsWith('.html'))
    .sort((a, b) => {
      const aNum = parseInt(a.match(/section-(\d+)/)[1]);
      const bNum = parseInt(b.match(/section-(\d+)/)[1]);
      return aNum - bNum;
    });

  if (articleFiles.length === 0) continue;

  fullText += '='.repeat(80) + '\n';
  fullText += `ARTICLE ${articleNum}\n`;
  fullText += '='.repeat(80) + '\n\n';

  for (const file of articleFiles) {
    const sectionNum = file.match(/section-(\d+)/)[1];
    const html = fs.readFileSync(path.join(htmlDir, file), 'utf-8');
    const text = stripHtml(html);
    
    fullText += `Section ${sectionNum}\n`;
    fullText += '-'.repeat(80) + '\n';
    fullText += text + '\n\n';
  }

  fullText += '\n';
}

// Write output
fs.writeFileSync(outputFile, fullText, 'utf-8');

console.log('✓ Text extraction complete!');
console.log(`Output saved to: ${outputFile}`);
console.log(`Total size: ${(fullText.length / 1024).toFixed(2)} KB`);
