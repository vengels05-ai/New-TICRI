# State Constitutions Data

This directory contains the full text of all 50 U.S. state constitutions in structured JSON format.

## Data Structure

Each state's constitution is stored in a JSON file named `{state-slug}.json` with the following structure:

```json
{
  "state": "California",
  "slug": "california",
  "abbreviation": "CA",
  "lastUpdated": "2026-01-12T...",
  "source": "California State Legislature",
  "sourceUrl": "https://leginfo.legislature.ca.gov/...",
  "preamble": "We, the People of the State of California...",
  "articles": [
    {
      "number": 1,
      "title": "Declaration of Rights",
      "sections": [
        {
          "number": 1,
          "title": "Inalienable Rights",
          "text": "All people are by nature free and independent..."
        }
      ]
    }
  ]
}
```

## How to Populate

### Recommended Sources

1. **Official State Legislature Websites** (most authoritative)
   - Each state's official legislature website typically has the constitution
   - Look for ".gov" domains

2. **Ballotpedia** (comprehensive, well-structured)
   - https://ballotpedia.org/
   - Has all 50 state constitutions with good formatting

3. **Justia** (legal database)
   - https://law.justia.com/
   - Provides structured access to state constitutions

4. **LawServer** (state law database)
   - https://www.lawserver.com/
   - State constitutions organized by article/section

### Process

1. Find the official source for a state's constitution
2. Copy the text systematically by article and section
3. Paste into the appropriate JSON file
4. Add the source URL for attribution
5. Update the `lastUpdated` field

### Tips

- State constitutions are public domain (no copyright)
- Include attribution/source for credibility
- Maintain the original structure (articles, sections)
- Preserve official numbering
- Keep formatting consistent across all states

## Using the Data

The data files will be imported and displayed by the Next.js application automatically.

See `/app/state-constitutions/[state]/page.tsx` for how the data is consumed.
