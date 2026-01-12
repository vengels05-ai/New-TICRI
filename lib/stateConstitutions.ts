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

export function getStateConstitution(stateSlug: string): StateConstitution | null {
  try {
    const filePath = path.join(process.cwd(), 'data', 'state-constitutions', `${stateSlug}.json`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error(`Error loading constitution for ${stateSlug}:`, error);
    return null;
  }
}

export function hasConstitutionData(stateSlug: string): boolean {
  try {
    const constitution = getStateConstitution(stateSlug);
    return constitution !== null && constitution.articles.length > 0;
  } catch {
    return false;
  }
}
