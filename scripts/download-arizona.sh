#!/bin/bash

# Download Arizona Constitution from official state website
# Saves raw HTML for manual text extraction

echo "Downloading Arizona State Constitution..."
echo "Source: https://azleg.gov/constitution/"
echo ""

# Create output directory
mkdir -p data/state-constitutions/raw-text/arizona-html

# Download preamble
echo "Fetching preamble..."
curl -s "https://www.azleg.gov/const/preamble.htm" > data/state-constitutions/raw-text/arizona-html/preamble.html

# Download articles 1-22, 25-30
for i in 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 25 26 27 28 29 30; do
    echo "Fetching Article $i..."
    
    # Try to fetch multiple sections per article
    section=1
    while [ $section -le 50 ]; do
        url="https://www.azleg.gov/const/$i/$section.htm"
        output_file="data/state-constitutions/raw-text/arizona-html/article-${i}-section-${section}.html"
        
        # Download and check if successful
        http_code=$(curl -s -o "$output_file" -w "%{http_code}" "$url")
        
        if [ "$http_code" = "200" ]; then
            echo "  ✓ Section $section"
            section=$((section + 1))
            sleep 0.3  # Be nice to the server
        else
            # No more sections for this article
            rm -f "$output_file"
            break
        fi
    done
    
    sleep 0.5  # Pause between articles
done

echo ""
echo "✓ Download complete!"
echo "Files saved to: data/state-constitutions/raw-text/arizona-html/"
echo ""
echo "Next step: Extract text from HTML files manually or with script"
