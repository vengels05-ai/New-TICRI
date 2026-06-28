#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SOURCE_FILE = path.join(ROOT, 'data', 'state-constitutions', 'all_50_state_constitutions_FINAL.md');
const DATA_DIR = path.join(ROOT, 'data', 'state-constitutions');
const US_STATES_FILE = path.join(ROOT, 'lib', 'usStates.ts');

const args = new Set(process.argv.slice(2));
const shouldWrite = args.has('--write');
const includeHawaii = args.has('--include-hawaii');
const requestedStateArg = process.argv.find((arg) => arg.startsWith('--state='));
const requestedSlug = requestedStateArg ? requestedStateArg.slice('--state='.length) : null;

function readStates() {
  const source = fs.readFileSync(US_STATES_FILE, 'utf8');
  const statePattern = /\{\s*name:\s*'([^']+)',\s*abbreviation:\s*'([^']+)',\s*slug:\s*'([^']+)'/g;
  const states = [];
  let match;

  while ((match = statePattern.exec(source)) !== null) {
    states.push({
      name: match[1],
      abbreviation: match[2],
      slug: match[3],
    });
  }

  if (states.length !== 50) {
    throw new Error(`Expected 50 states in ${US_STATES_FILE}, found ${states.length}`);
  }

  return states;
}

function normalizeText(text) {
  return text
    .replace(/\u00c2/g, '')
    .replace(/\u00a0/g, ' ')
    .replace(/\r\n?/g, '\n')
    .replace(/[ \t]+$/gm, '')
    .replace(/^---+$/gm, '')
    .replace(/^Get free summaries of new opinions delivered to your inbox!$/gm, '')
    .replace(/^\|4em\}\}$/gm, '')
    .replace(/^Colorado Revised Statutes 2024$/gm, '')
    .replace(/^Utah Constitution$/gm, '')
    .replace(/^Page \d+(?: of \d+)?$/gm, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function getCompiledDate(markdown) {
  const match = markdown.match(/\*Compiled:\s*([^*]+)\*/);
  return match ? match[1].trim() : new Date().toISOString().slice(0, 10);
}

function splitStateBlocks(markdown, states) {
  const appendixIndex = markdown.indexOf('\n# Appendix: Failed States');
  const mainMarkdown = appendixIndex >= 0 ? markdown.slice(0, appendixIndex) : markdown;
  const lines = mainMarkdown.split('\n');
  const stateNames = new Set(states.map((state) => state.name));
  const starts = [];

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index].trim();
    if (line.startsWith('# ') && stateNames.has(line.slice(2))) {
      starts.push({ name: line.slice(2), lineIndex: index });
    }
  }

  const blocks = new Map();
  starts.forEach((start, index) => {
    const end = index + 1 < starts.length ? starts[index + 1].lineIndex : lines.length;
    const blockLines = lines.slice(start.lineIndex + 1, end);
    blocks.set(start.name, normalizeText(blockLines.join('\n')));
  });

  return blocks;
}

function stripMarkdownHeading(line) {
  return line.replace(/^#{1,6}\s+/, '').trim();
}

function isLikelyArticleHeading(line) {
  return Boolean(matchArticleHeading(line, []));
}

function isLikelySectionHeading(line) {
  return Boolean(matchSectionHeading(line));
}

function readFollowingTitle(lines, index) {
  const next = lines[index + 1]?.trim();
  if (!next) {
    return { title: '', extraLines: 0 };
  }

  if (
    next.length <= 120 &&
    !isLikelyArticleHeading(next) &&
    !isLikelySectionHeading(next) &&
    !/^(Source|Editor's note|Cross references|Law reviews):/i.test(next)
  ) {
    return { title: stripMarkdownHeading(next).replace(/\.$/, ''), extraLines: 1 };
  }

  return { title: '', extraLines: 0 };
}

function matchArticleHeading(line, lines, index = 0) {
  const clean = stripMarkdownHeading(line).trim();
  let match = clean.match(/^ARTICLE\s+([A-Z0-9][A-Z0-9.-]*|[IVXLCDM]+)\.?\s*(.*)$/i);

  if (match) {
    let title = match[2].replace(/^[-:.\s]+/, '').trim();
    let extraLines = 0;
    if (!title) {
      const following = readFollowingTitle(lines, index);
      title = following.title;
      extraLines = following.extraLines;
    }

    return {
      number: match[1].replace(/\.$/, ''),
      title,
      extraLines,
    };
  }

  match = clean.match(/^Article\s+([A-Z0-9][A-Z0-9.-]*|[IVXLCDM]+)\s*[-:–—]\s*(.+)$/i);
  if (match) {
    return {
      number: match[1].replace(/\.$/, ''),
      title: match[2].trim(),
      extraLines: 0,
    };
  }

  match = clean.match(/^Article\s+([A-Z0-9][A-Z0-9.-]*|[IVXLCDM]+)\s+(.+)$/i);
  if (match && !/^Section\b/i.test(match[2])) {
    return {
      number: match[1].replace(/\.$/, ''),
      title: match[2].trim(),
      extraLines: 0,
    };
  }

  match = clean.match(/^(SCHEDULE|Schedule|AMENDMENTS TO THE CONSTITUTION|APPENDIX\.?.*)$/);
  if (match) {
    return {
      number: '',
      title: match[1].replace(/\.$/, ''),
      extraLines: 0,
    };
  }

  match = clean.match(/^([A-Z][A-Z0-9 ,;&'().-]+)\s+-\s+Section\s+\d+/i);
  if (match && match[1] === match[1].toUpperCase()) {
    return {
      number: '',
      title: match[1].trim(),
      extraLines: 0,
    };
  }

  return null;
}

function matchSectionHeading(line) {
  const clean = stripMarkdownHeading(line).trim();
  let match = clean.match(/^Article\s+([A-Z0-9][A-Z0-9.-]*|[IVXLCDM]+),\s*Section\s+([A-Za-z0-9.-]+[a-z]?)\s*(?:\[(.+?)\])?\.?$/i);
  if (match) {
    return {
      number: match[2],
      title: match[3] || '',
    };
  }

  match = clean.match(/^(?:SECTION|Section|SEC\.?|Sec\.?)\s+([A-Za-z0-9.-]+[a-z]?|[IVXLCDM]+)\.?\s*(.*)$/i);
  if (match) {
    return {
      number: match[1].replace(/\.$/, ''),
      title: match[2].replace(/^[-:.\s]+/, '').trim(),
    };
  }

  match = clean.match(/^Section\s+([A-Za-z0-9.-]+[a-z]?)\s+\.\.\.\s*(.*)$/i);
  if (match) {
    return {
      number: match[1].replace(/\.$/, ''),
      title: match[2].trim(),
    };
  }

  match = clean.match(/^(\d+-\d+[a-z]?)\.\s+(.+)$/i);
  if (match) {
    return {
      number: match[1],
      title: match[2].trim(),
    };
  }

  match = clean.match(/^Art\.\s+([A-Za-z0-9.-]+|[IVXLCDM]+)\.?\s*(.*)$/i);
  if (match) {
    return {
      number: match[1].replace(/\.$/, ''),
      title: match[2].replace(/^[-:.\s]+/, '').trim(),
    };
  }

  match = clean.match(/^§\s*([A-Za-z0-9.-]+[a-z]?)\.?\s*(.*)$/);
  if (match) {
    return {
      number: match[1].replace(/\.$/, ''),
      title: match[2].replace(/^[-:.\s]+/, '').trim(),
    };
  }

  match = clean.match(/^(.+?)\s+SECTION\s+([A-Za-z0-9.-]+[a-z]?m?)\.?$/i);
  if (match && match[1].length <= 140) {
    return {
      number: match[2].replace(/\.$/, ''),
      title: match[1].replace(/\.$/, '').trim(),
    };
  }

  return null;
}

function splitByMatches(lines, matches) {
  return matches.map((match, index) => {
    const next = matches[index + 1];
    const contentStart = match.lineIndex + 1 + (match.extraLines || 0);
    const contentEnd = next ? next.lineIndex : lines.length;
    return {
      ...match,
      contentLines: lines.slice(contentStart, contentEnd),
    };
  });
}

function parseSections(lines) {
  const matches = [];

  lines.forEach((line, lineIndex) => {
    const section = matchSectionHeading(line);
    if (section) {
      matches.push({
        ...section,
        lineIndex,
      });
    }
  });

  if (matches.length === 0) {
    const text = normalizeText(lines.join('\n'));
    return text
      ? [{ number: '1', title: 'Full Text', text }]
      : [];
  }

  return splitByMatches(lines, matches)
    .map((section) => ({
      number: section.number || String(section.lineIndex + 1),
      title: section.title,
      text: normalizeText(section.contentLines.join('\n')),
    }))
    .filter((section) => section.text.length > 0);
}

function parseArticles(text) {
  const lines = text.split('\n');
  const matches = [];

  for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
    const article = matchArticleHeading(lines[lineIndex], lines, lineIndex);
    if (article) {
      matches.push({
        ...article,
        lineIndex,
      });
      lineIndex += article.extraLines || 0;
    }
  }

  if (matches.length === 0) {
    return [{
      number: '',
      title: 'Full Text',
      sections: parseSections(lines),
    }];
  }

  return splitByMatches(lines, matches)
    .map((article) => ({
      number: article.number || '',
      title: article.title || 'Untitled',
      sections: parseSections(article.contentLines),
    }))
    .filter((article) => article.sections.length > 0);
}

function extractPreamble(text) {
  const lines = text.split('\n');
  const preambleIndex = lines.findIndex((line) => /^#{0,6}\s*PREAMBLE\.?$/i.test(stripMarkdownHeading(line).trim()));

  if (preambleIndex < 0) {
    return '';
  }

  const rest = lines.slice(preambleIndex + 1);
  const endIndex = rest.findIndex((line) => isLikelyArticleHeading(line) || isLikelySectionHeading(line));
  const preambleLines = endIndex >= 0 ? rest.slice(0, endIndex) : rest.slice(0, 8);
  return normalizeText(preambleLines.join('\n'));
}

function buildConstitution(state, rawBlock, compiledDate) {
  const warnings = [];
  const text = normalizeText(rawBlock);

  if (state.slug === 'hawaii' && !includeHawaii) {
    warnings.push('Skipped: Hawaii source will be imported from PDF later.');
  }

  if (text.length < 20000) {
    warnings.push(`Short source block: ${text.length} characters.`);
  }

  const articles = parseArticles(text);
  const sections = articles.reduce((count, article) => count + article.sections.length, 0);

  if (articles.length <= 1) {
    warnings.push('Importer found one or fewer article blocks; review structure manually.');
  }

  if (sections <= 1) {
    warnings.push('Importer found one or fewer section blocks; review structure manually.');
  }

  return {
    state: state.name,
    slug: state.slug,
    abbreviation: state.abbreviation,
    lastUpdated: compiledDate,
    source: 'Imported from all_50_state_constitutions_FINAL.md',
    sourceUrl: '',
    preamble: extractPreamble(text),
    articles,
    rawText: text,
    importWarnings: warnings,
  };
}

function main() {
  const states = readStates();
  const markdown = fs.readFileSync(SOURCE_FILE, 'utf8');
  const compiledDate = getCompiledDate(markdown);
  const blocks = splitStateBlocks(markdown, states);
  const selectedStates = states.filter((state) => !requestedSlug || state.slug === requestedSlug);
  const report = [];

  for (const state of selectedStates) {
    const block = blocks.get(state.name);

    if (!block) {
      report.push({ state: state.name, status: 'missing block' });
      continue;
    }

    if (state.slug === 'hawaii' && !includeHawaii) {
      const existingPath = path.join(DATA_DIR, `${state.slug}.json`);
      const existing = fs.existsSync(existingPath)
        ? JSON.parse(fs.readFileSync(existingPath, 'utf8'))
        : null;
      const skipped = {
        state: state.name,
        slug: state.slug,
        abbreviation: state.abbreviation,
        lastUpdated: compiledDate,
        source: 'Pending PDF import',
        sourceUrl: '',
        preamble: existing?.preamble || '',
        articles: existing?.articles || [],
        rawText: existing?.rawText || '',
        importWarnings: ['Skipped: Hawaii source will be imported from PDF later.'],
      };

      if (shouldWrite) {
        fs.writeFileSync(path.join(DATA_DIR, `${state.slug}.json`), `${JSON.stringify(skipped, null, 2)}\n`);
      }

      report.push({
        state: state.name,
        status: 'skipped',
        chars: block.length,
        articles: skipped.articles.length,
        sections: 0,
        warnings: skipped.importWarnings,
      });
      continue;
    }

    const constitution = buildConstitution(state, block, compiledDate);
    const outPath = path.join(DATA_DIR, `${state.slug}.json`);

    if (shouldWrite) {
      fs.writeFileSync(outPath, `${JSON.stringify(constitution, null, 2)}\n`);
    }

    report.push({
      state: state.name,
      status: shouldWrite ? 'written' : 'dry-run',
      chars: constitution.rawText.length,
      articles: constitution.articles.length,
      sections: constitution.articles.reduce((count, article) => count + article.sections.length, 0),
      warnings: constitution.importWarnings,
    });
  }

  console.log(`Mode: ${shouldWrite ? 'write' : 'dry-run'}`);
  console.log(`Source: ${path.relative(ROOT, SOURCE_FILE)}`);
  console.log(`Compiled: ${compiledDate}`);
  console.log('');
  console.table(report.map((item) => ({
    State: item.state,
    Status: item.status,
    Chars: item.chars || 0,
    Articles: item.articles || 0,
    Sections: item.sections || 0,
    Warnings: item.warnings?.length || 0,
  })));

  const warnings = report.filter((item) => item.warnings?.length);
  if (warnings.length > 0) {
    console.log('\nWarnings:');
    warnings.forEach((item) => {
      console.log(`- ${item.state}: ${item.warnings.join(' ')}`);
    });
  }
}

main();
