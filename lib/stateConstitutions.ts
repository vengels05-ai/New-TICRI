import fs from 'fs';
import path from 'path';

export interface ConstitutionSection {
  number: number;
  title: string;
  text: string;
}

export interface ConstitutionArticle {
  number: number;
  title: string;
  sections: ConstitutionSection[];
}

export interface StateConstitution {
  state: string;
  slug: string;
  abbreviation: string;
  lastUpdated: string;
  source: string;
  sourceUrl: string;
  preamble: string;
  articles: ConstitutionArticle[];
}

function normalizeStateSlug(stateSlug: string | null | undefined): string | null {
  const normalized = stateSlug?.trim().toLowerCase();
  return normalized && normalized.length > 0 ? normalized : null;
}

export function getStateConstitution(stateSlug: string | null | undefined): StateConstitution | null {
  const normalizedSlug = normalizeStateSlug(stateSlug);
  if (!normalizedSlug) {
    return null;
  }

  try {
    const filePath = path.join(process.cwd(), 'data', 'state-constitutions', `${normalizedSlug}.json`);
    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error(`Error loading constitution for ${normalizedSlug}:`, error);
    return null;
  }
}

export function hasConstitutionData(stateSlug: string | null | undefined): boolean {
  try {
    const constitution = getStateConstitution(stateSlug);
    return constitution !== null && constitution.articles.length > 0;
  } catch {
    return false;
  }
}
