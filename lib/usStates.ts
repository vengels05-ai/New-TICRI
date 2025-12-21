// US States data with full names, abbreviations, and slugs
export interface USState {
  name: string;
  abbreviation: string;
  slug: string;
  capital: string;
  ratificationDate: string; // Date they ratified the US Constitution
  constitutionYear: string; // Year of current state constitution
}

export const usStates: USState[] = [
  { name: 'Alabama', abbreviation: 'AL', slug: 'alabama', capital: 'Montgomery', ratificationDate: 'December 14, 1819', constitutionYear: '1901' },
  { name: 'Alaska', abbreviation: 'AK', slug: 'alaska', capital: 'Juneau', ratificationDate: 'January 3, 1959', constitutionYear: '1956' },
  { name: 'Arizona', abbreviation: 'AZ', slug: 'arizona', capital: 'Phoenix', ratificationDate: 'February 14, 1912', constitutionYear: '1912' },
  { name: 'Arkansas', abbreviation: 'AR', slug: 'arkansas', capital: 'Little Rock', ratificationDate: 'June 15, 1836', constitutionYear: '1874' },
  { name: 'California', abbreviation: 'CA', slug: 'california', capital: 'Sacramento', ratificationDate: 'September 9, 1850', constitutionYear: '1879' },
  { name: 'Colorado', abbreviation: 'CO', slug: 'colorado', capital: 'Denver', ratificationDate: 'August 1, 1876', constitutionYear: '1876' },
  { name: 'Connecticut', abbreviation: 'CT', slug: 'connecticut', capital: 'Hartford', ratificationDate: 'January 9, 1788', constitutionYear: '1965' },
  { name: 'Delaware', abbreviation: 'DE', slug: 'delaware', capital: 'Dover', ratificationDate: 'December 7, 1787', constitutionYear: '1897' },
  { name: 'Florida', abbreviation: 'FL', slug: 'florida', capital: 'Tallahassee', ratificationDate: 'March 3, 1845', constitutionYear: '1968' },
  { name: 'Georgia', abbreviation: 'GA', slug: 'georgia', capital: 'Atlanta', ratificationDate: 'January 2, 1788', constitutionYear: '1983' },
  { name: 'Hawaii', abbreviation: 'HI', slug: 'hawaii', capital: 'Honolulu', ratificationDate: 'August 21, 1959', constitutionYear: '1959' },
  { name: 'Idaho', abbreviation: 'ID', slug: 'idaho', capital: 'Boise', ratificationDate: 'July 3, 1890', constitutionYear: '1890' },
  { name: 'Illinois', abbreviation: 'IL', slug: 'illinois', capital: 'Springfield', ratificationDate: 'December 3, 1818', constitutionYear: '1970' },
  { name: 'Indiana', abbreviation: 'IN', slug: 'indiana', capital: 'Indianapolis', ratificationDate: 'December 11, 1816', constitutionYear: '1851' },
  { name: 'Iowa', abbreviation: 'IA', slug: 'iowa', capital: 'Des Moines', ratificationDate: 'December 28, 1846', constitutionYear: '1857' },
  { name: 'Kansas', abbreviation: 'KS', slug: 'kansas', capital: 'Topeka', ratificationDate: 'January 29, 1861', constitutionYear: '1859' },
  { name: 'Kentucky', abbreviation: 'KY', slug: 'kentucky', capital: 'Frankfort', ratificationDate: 'June 1, 1792', constitutionYear: '1891' },
  { name: 'Louisiana', abbreviation: 'LA', slug: 'louisiana', capital: 'Baton Rouge', ratificationDate: 'April 30, 1812', constitutionYear: '1974' },
  { name: 'Maine', abbreviation: 'ME', slug: 'maine', capital: 'Augusta', ratificationDate: 'March 15, 1820', constitutionYear: '1820' },
  { name: 'Maryland', abbreviation: 'MD', slug: 'maryland', capital: 'Annapolis', ratificationDate: 'April 28, 1788', constitutionYear: '1867' },
  { name: 'Massachusetts', abbreviation: 'MA', slug: 'massachusetts', capital: 'Boston', ratificationDate: 'February 6, 1788', constitutionYear: '1780' },
  { name: 'Michigan', abbreviation: 'MI', slug: 'michigan', capital: 'Lansing', ratificationDate: 'January 26, 1837', constitutionYear: '1963' },
  { name: 'Minnesota', abbreviation: 'MN', slug: 'minnesota', capital: 'Saint Paul', ratificationDate: 'May 11, 1858', constitutionYear: '1857' },
  { name: 'Mississippi', abbreviation: 'MS', slug: 'mississippi', capital: 'Jackson', ratificationDate: 'December 10, 1817', constitutionYear: '1890' },
  { name: 'Missouri', abbreviation: 'MO', slug: 'missouri', capital: 'Jefferson City', ratificationDate: 'August 10, 1821', constitutionYear: '1945' },
  { name: 'Montana', abbreviation: 'MT', slug: 'montana', capital: 'Helena', ratificationDate: 'November 8, 1889', constitutionYear: '1972' },
  { name: 'Nebraska', abbreviation: 'NE', slug: 'nebraska', capital: 'Lincoln', ratificationDate: 'March 1, 1867', constitutionYear: '1875' },
  { name: 'Nevada', abbreviation: 'NV', slug: 'nevada', capital: 'Carson City', ratificationDate: 'October 31, 1864', constitutionYear: '1864' },
  { name: 'New Hampshire', abbreviation: 'NH', slug: 'new-hampshire', capital: 'Concord', ratificationDate: 'June 21, 1788', constitutionYear: '1784' },
  { name: 'New Jersey', abbreviation: 'NJ', slug: 'new-jersey', capital: 'Trenton', ratificationDate: 'December 18, 1787', constitutionYear: '1947' },
  { name: 'New Mexico', abbreviation: 'NM', slug: 'new-mexico', capital: 'Santa Fe', ratificationDate: 'January 6, 1912', constitutionYear: '1912' },
  { name: 'New York', abbreviation: 'NY', slug: 'new-york', capital: 'Albany', ratificationDate: 'July 26, 1788', constitutionYear: '1894' },
  { name: 'North Carolina', abbreviation: 'NC', slug: 'north-carolina', capital: 'Raleigh', ratificationDate: 'November 21, 1789', constitutionYear: '1971' },
  { name: 'North Dakota', abbreviation: 'ND', slug: 'north-dakota', capital: 'Bismarck', ratificationDate: 'November 2, 1889', constitutionYear: '1889' },
  { name: 'Ohio', abbreviation: 'OH', slug: 'ohio', capital: 'Columbus', ratificationDate: 'March 1, 1803', constitutionYear: '1851' },
  { name: 'Oklahoma', abbreviation: 'OK', slug: 'oklahoma', capital: 'Oklahoma City', ratificationDate: 'November 16, 1907', constitutionYear: '1907' },
  { name: 'Oregon', abbreviation: 'OR', slug: 'oregon', capital: 'Salem', ratificationDate: 'February 14, 1859', constitutionYear: '1859' },
  { name: 'Pennsylvania', abbreviation: 'PA', slug: 'pennsylvania', capital: 'Harrisburg', ratificationDate: 'December 12, 1787', constitutionYear: '1968' },
  { name: 'Rhode Island', abbreviation: 'RI', slug: 'rhode-island', capital: 'Providence', ratificationDate: 'May 29, 1790', constitutionYear: '1843' },
  { name: 'South Carolina', abbreviation: 'SC', slug: 'south-carolina', capital: 'Columbia', ratificationDate: 'May 23, 1788', constitutionYear: '1895' },
  { name: 'South Dakota', abbreviation: 'SD', slug: 'south-dakota', capital: 'Pierre', ratificationDate: 'November 2, 1889', constitutionYear: '1889' },
  { name: 'Tennessee', abbreviation: 'TN', slug: 'tennessee', capital: 'Nashville', ratificationDate: 'June 1, 1796', constitutionYear: '1870' },
  { name: 'Texas', abbreviation: 'TX', slug: 'texas', capital: 'Austin', ratificationDate: 'December 29, 1845', constitutionYear: '1876' },
  { name: 'Utah', abbreviation: 'UT', slug: 'utah', capital: 'Salt Lake City', ratificationDate: 'January 4, 1896', constitutionYear: '1896' },
  { name: 'Vermont', abbreviation: 'VT', slug: 'vermont', capital: 'Montpelier', ratificationDate: 'March 4, 1791', constitutionYear: '1793' },
  { name: 'Virginia', abbreviation: 'VA', slug: 'virginia', capital: 'Richmond', ratificationDate: 'June 25, 1788', constitutionYear: '1971' },
  { name: 'Washington', abbreviation: 'WA', slug: 'washington', capital: 'Olympia', ratificationDate: 'November 11, 1889', constitutionYear: '1889' },
  { name: 'West Virginia', abbreviation: 'WV', slug: 'west-virginia', capital: 'Charleston', ratificationDate: 'June 20, 1863', constitutionYear: '1872' },
  { name: 'Wisconsin', abbreviation: 'WI', slug: 'wisconsin', capital: 'Madison', ratificationDate: 'May 29, 1848', constitutionYear: '1848' },
  { name: 'Wyoming', abbreviation: 'WY', slug: 'wyoming', capital: 'Cheyenne', ratificationDate: 'July 10, 1890', constitutionYear: '1890' },
];

export const getStateBySlug = (slug: string): USState | undefined => {
  return usStates.find(state => state.slug === slug);
};

export const getStateByAbbreviation = (abbreviation: string): USState | undefined => {
  return usStates.find(state => state.abbreviation === abbreviation);
};
