# State Constitution Download Instructions

## Manual Download Process

Since we want to use official government sources and avoid web scraping issues, 
we'll manually download each constitution. This ensures we have the most accurate, 
official text.

### Steps:

1. Open the URL for each state (see DOWNLOAD_MANIFEST.json)
2. Use your browser to view the full constitution
3. Copy all the text (Cmd+A, Cmd+C on Mac)
4. Save to a file named [STATE-ABBREVIATION]-raw.txt
5. Mark the state as downloaded in the manifest

### Priority Order (by population):

1. CA - California
2. TX - Texas
3. FL - Florida
4. NY - New York
5. PA - Pennsylvania
6. IL - Illinois
7. OH - Ohio
8. GA - Georgia
9. NC - North Carolina
10. MI - Michigan

### Tips:

- **For HTML sources**: Open in browser, view full page, copy all text
- **For PDF sources**: Download PDF first, then copy text (or use tools like pdftotext)
- **Multi-page sites**: Some states split constitution into articles - you may need to visit multiple pages
- **Save as plain text**: .txt files, not .doc or .pdf
- **Keep formatting simple**: Don't worry about formatting - we'll structure it later

### After Downloading:

Once we have raw text files, we'll create a formatting script to convert them into
our JSON structure with proper article/section organization.

## Quick Start - California Example:

1. Visit: https://leginfo.legislature.ca.gov/faces/codes_displayexpandedbranch.xhtml?lawCode=CONS
2. Click through to Article I
3. Copy all text from Article I
4. Repeat for all articles
5. Save combined text as CA-raw.txt
6. Update DOWNLOAD_MANIFEST.json

## Automation Note:

If manual downloading becomes too time-consuming, we can build a scraper for specific
sites that allow it. But starting manually ensures we understand the structure of each
state's constitution first.
