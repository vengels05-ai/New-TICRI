#!/usr/bin/env python3
"""
Download Arizona Constitution from official state legislature website.
Saves as raw text file for later formatting.
"""

import requests
from bs4 import BeautifulSoup
import time

# Base URL
BASE_URL = "https://www.azleg.gov/const/"

# Article structure - mapping article numbers to titles
ARTICLES = {
    "preamble": "PREAMBLE",
    "1": "STATE BOUNDARIES",
    "2": "DECLARATION OF RIGHTS",
    "3": "DISTRIBUTION OF POWERS",
    "4": "LEGISLATIVE DEPARTMENT",
    "5": "EXECUTIVE DEPARTMENT",
    "6": "JUDICIAL DEPARTMENT",
    "7": "SUFFRAGE AND ELECTIONS",
    "8": "REMOVAL FROM OFFICE",
    "9": "PUBLIC DEBT, REVENUE, AND TAXATION",
    "10": "STATE AND SCHOOL LANDS",
    "11": "EDUCATION",
    "12": "COUNTIES",
    "13": "MUNICIPAL CORPORATIONS",
    "14": "CORPORATIONS OTHER THAN MUNICIPAL",
    "15": "THE CORPORATION COMMISSION",
    "16": "MILITIA",
    "17": "WATER RIGHTS",
    "18": "LABOR",
    "19": "MINES",
    "20": "ORDINANCE",
    "21": "MODE OF AMENDING",
    "22": "SCHEDULE AND MISCELLANEOUS",
    "25": "RIGHT TO WORK",
    "26": "RIGHT OF LICENSED REAL ESTATE BROKERS AND SALESMEN",
    "27": "REGULATION OF HEALTH, SAFETY AND WELFARE",
    "28": "ENGLISH AS THE OFFICIAL LANGUAGE",
    "29": "PUBLIC RETIREMENT SYSTEMS",
    "30": "MARRIAGE"
}

def fetch_section(article_num, section_num=1):
    """Fetch a single section from Arizona constitution."""
    if article_num == "preamble":
        url = f"{BASE_URL}preamble.htm"
    else:
        url = f"{BASE_URL}{article_num}/{section_num}.htm"
    
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Extract the main text content
        # Arizona's site structure may vary, adjust selector as needed
        content = soup.get_text()
        return content.strip()
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return None

def download_arizona_constitution():
    """Download entire Arizona constitution."""
    output = []
    output.append("=" * 80)
    output.append("ARIZONA STATE CONSTITUTION")
    output.append("Source: https://azleg.gov/constitution/")
    output.append(f"Downloaded: {time.strftime('%Y-%m-%d')}")
    output.append("=" * 80)
    output.append("")
    
    # Fetch preamble
    print("Fetching preamble...")
    preamble = fetch_section("preamble")
    if preamble:
        output.append("PREAMBLE")
        output.append("-" * 40)
        output.append(preamble)
        output.append("")
    time.sleep(1)  # Be nice to the server
    
    # Fetch each article
    for art_num, title in ARTICLES.items():
        if art_num == "preamble":
            continue
            
        print(f"Fetching Article {art_num}: {title}...")
        output.append("=" * 80)
        output.append(f"ARTICLE {art_num} - {title}")
        output.append("=" * 80)
        output.append("")
        
        # Try to fetch sections (Arizona may have multiple sections per article)
        # Start with section 1, continue until we get an error
        section = 1
        while True:
            text = fetch_section(art_num, section)
            if text:
                output.append(f"Section {section}")
                output.append("-" * 40)
                output.append(text)
                output.append("")
                section += 1
                time.sleep(0.5)  # Be nice to the server
            else:
                break
        
        if section == 1:
            print(f"  Warning: No content found for Article {art_num}")
    
    # Save to file
    output_file = "data/state-constitutions/raw-text/AZ-raw.txt"
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write('\n'.join(output))
    
    print(f"\n✓ Arizona constitution saved to {output_file}")
    print(f"  Total lines: {len(output)}")

if __name__ == "__main__":
    print("Downloading Arizona State Constitution...")
    print("From: https://azleg.gov/constitution/")
    print("")
    download_arizona_constitution()
    print("\nDone!")
