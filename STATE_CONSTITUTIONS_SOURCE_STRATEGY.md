# State Constitutions - Raw Source Collection Strategy

## New Approach: Official Government Sources Only

We've pivoted from using Ballotpedia to using **official state government websites** as the authoritative source for all 50 state constitutions.

### Why Official Sources?

1. **Public Domain**: State government documents are in the public domain
2. **Most Authoritative**: Direct from state legislatures
3. **Most Current**: Official sites are updated when amendments pass
4. **No Copyright Issues**: Government websites explicitly allow reproduction
5. **Better Attribution**: Can cite official state legislature as source

### What We Built

#### 1. Download Infrastructure (`scripts/download-state-constitutions.js`)
- Creates directory structure: `data/state-constitutions/raw-text/`
- Generates manifest with all 50 state URLs
- Provides download instructions
- Ready for manual or automated collection

#### 2. State Sources Manifest (`raw-text/DOWNLOAD_MANIFEST.json`)
Contains for each state:
- Official legislature website URL
- State name and abbreviation
- File type (HTML or PDF)
- Download status tracking
- Special notes where needed

#### 3. Download Instructions (`raw-text/DOWNLOAD_INSTRUCTIONS.md`)
- Step-by-step manual download process
- Priority order (by population)
- Tips for HTML vs PDF sources
- Tips for multi-page sites

### Current Status

**Infrastructure**: ✅ Complete
- Script created
- Directory structure ready
- Manifest generated with all 50 URLs
- Instructions documented

**Data Collection**: ⏳ Ready to Start
- 0 of 50 states downloaded
- Recommend starting with: CA, TX, FL, NY, PA

### Download Process (Two-Phase Approach)

#### Phase 1: Raw Text Collection (Current Focus)
1. Visit official state legislature website
2. View/download full constitution
3. Save as plain text file: `[STATE]-raw.txt`
4. No formatting - just capture the text
5. Mark state as "downloaded" in manifest

#### Phase 2: Formatting & Structure (Later)
1. Read raw text files
2. Parse into articles and sections
3. Convert to JSON structure
4. Validate completeness
5. Add to website

### Recommended Workflow

**Option A: Manual (Safest)**
- Visit each URL manually
- Copy/paste text into .txt files
- Most reliable for complex sites
- Estimated: 15-30 minutes per state
- Total time: 12-25 hours for all 50

**Option B: Semi-Automated**
- Build scraper for sites with simple structure
- Manual download for complex/PDF sites
- Estimated: 5-10 hours setup + 5-10 hours manual
- Total time: 10-20 hours

**Option C: AI-Assisted**
- Use Claude/GPT with web browsing
- Extract and format text automatically
- Still requires human review
- Fastest but needs verification

### Priority States (Top 10 by Population)

1. **California** - 39.5M - https://leginfo.legislature.ca.gov/
2. **Texas** - 30.0M - https://statutes.capitol.texas.gov/
3. **Florida** - 22.2M - http://www.leg.state.fl.us/
4. **New York** - 19.5M - https://www.nysenate.gov/
5. **Pennsylvania** - 13.0M - https://www.legis.state.pa.us/
6. **Illinois** - 12.6M - https://www.ilga.gov/
7. **Ohio** - 11.8M - https://codes.ohio.gov/
8. **Georgia** - 10.9M - https://www.legis.ga.gov/
9. **North Carolina** - 10.7M - https://www.ncleg.gov/
10. **Michigan** - 10.0M - http://www.legislature.mi.gov/

### Example: California

**URL**: https://leginfo.legislature.ca.gov/faces/codes_displayexpandedbranch.xhtml?lawCode=CONS

**Structure**:
- 35 Articles total
- Each article on separate page
- Preamble on main page
- Clean, well-formatted text
- No paywall or login required

**Download steps**:
1. Visit main URL
2. Copy Preamble
3. Click Article I, copy text
4. Repeat for all 35 articles
5. Combine into single CA-raw.txt file

### Technical Notes

**File Naming**: `[STATE-ABBR]-raw.txt`
- Example: `CA-raw.txt`, `TX-raw.txt`

**Format**: Plain text (.txt)
- UTF-8 encoding
- Preserve line breaks
- Don't worry about perfect formatting
- We'll parse structure later

**Size Estimates**:
- Typical state: 50,000-150,000 words
- Longest (Alabama): ~350,000 words
- File sizes: 300KB - 2MB per state

### Next Steps

1. **Start with California**
   - We already know the site structure
   - Test our download/parse workflow
   - Use as template for others

2. **Build Format Parser**
   - Once we have 2-3 raw files
   - Create script to parse into JSON
   - Test with different state structures

3. **Scale to All 50**
   - Use lessons from first few states
   - Decide on manual vs automated
   - Complete by priority order

### Files Created

```
data/state-constitutions/
├── raw-text/
│   ├── DOWNLOAD_MANIFEST.json
│   ├── DOWNLOAD_INSTRUCTIONS.md
│   └── [STATE]-raw.txt (to be created)
├── official-sources.md
└── [state].json (existing structure)

scripts/
└── download-state-constitutions.js
```

## Summary

We've built the infrastructure to systematically collect all 50 state constitutions from their official government sources. The next step is to actually download the raw text, starting with California.

This approach gives us:
- ✅ Authoritative sources
- ✅ No copyright concerns
- ✅ Most current versions
- ✅ Clear attribution path
- ✅ Public domain content

**Immediate Next Action**: Download California's constitution and save as `CA-raw.txt`
