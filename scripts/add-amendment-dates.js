const fs = require('fs');
const path = require('path');

// Amendment dates: [Passed by Congress, Ratified]
const amendmentDates = {
  1: ['September 25, 1789', 'December 15, 1791'],
  2: ['September 25, 1789', 'December 15, 1791'],
  3: ['September 25, 1789', 'December 15, 1791'],
  4: ['September 25, 1789', 'December 15, 1791'],
  5: ['September 25, 1789', 'December 15, 1791'],
  6: ['September 25, 1789', 'December 15, 1791'],
  7: ['September 25, 1789', 'December 15, 1791'],
  8: ['September 25, 1789', 'December 15, 1791'],
  9: ['September 25, 1789', 'December 15, 1791'],
  10: ['September 25, 1789', 'December 15, 1791'],
  11: ['March 4, 1794', 'February 7, 1795'],
  12: ['December 9, 1803', 'June 15, 1804'],
  13: ['January 31, 1865', 'December 6, 1865'],
  14: ['June 13, 1866', 'July 9, 1868'],
  15: ['February 26, 1869', 'February 3, 1870'],
  16: ['July 12, 1909', 'February 3, 1913'],
  17: ['May 13, 1912', 'April 8, 1913'],
  18: ['December 18, 1917', 'January 16, 1919'],
  19: ['June 4, 1919', 'August 18, 1920'],
  20: ['March 2, 1932', 'January 23, 1933'],
  21: ['February 20, 1933', 'December 5, 1933'],
  22: ['March 21, 1947', 'February 27, 1951'],
  23: ['June 16, 1960', 'March 29, 1961'],
  24: ['August 27, 1962', 'January 23, 1964'],
  25: ['July 6, 1965', 'February 10, 1967'],
  26: ['March 23, 1971', 'July 1, 1971'],
  27: ['September 25, 1789', 'May 7, 1992'],
};

const constitutionDir = path.join(__dirname, '../app/constitution');

for (let i = 1; i <= 27; i++) {
  const amendmentDir = path.join(constitutionDir, `amendment-${i}`);
  const filePath = path.join(amendmentDir, 'page.tsx');
  
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping amendment-${i}: file not found`);
    continue;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  const [passed, ratified] = amendmentDates[i];
  
  // Find the pattern and add dates
  const regex = /(          <h1 className="text-4xl md:text-5xl font-bold)("?>[\s\S]*?<\/h1>\s*)(        <\/div>\s*<\/section>)/;
  
  const replacement = `$1 mb-4$2          <div className="text-gray-200 text-lg">
            <p>Passed by Congress: ${passed}</p>
            <p>Ratified: ${ratified}</p>
          </div>
$3`;
  
  content = content.replace(regex, replacement);
  
  fs.writeFileSync(filePath, content);
  console.log(`✓ Updated amendment-${i}`);
}

console.log('Done!');
