/* eslint-disable @typescript-eslint/no-require-imports -- Node CommonJS generator. */
const fs = require('fs');
const path = require('path');

// Curated cases from scripts/create-category-pages.js
const CATEGORIES = {
  'foundational': [
    { name: "Marbury v. Madison", year: 1803, slug: "marbury-v-madison-1803", id: null },
    { name: "McCulloch v. Maryland", year: 1819, slug: "mcculloch-v-maryland-1819", id: 1320585 },
    { name: "Gibbons v. Ogden", year: 1824, slug: "gibbons-v-ogden-1824", id: 85412 },
    { name: "Martin v. Hunter's Lessee", year: 1816, slug: "martin-v-hunters-lessee-1816", id: null },
    { name: "Fletcher v. Peck", year: 1810, slug: "fletcher-v-peck-1810", id: null },
    { name: "Dartmouth College v. Woodward", year: 1819, slug: "dartmouth-college-v-woodward-1819", id: 85282 },
    { name: "Cohens v. Virginia", year: 1821, slug: "cohens-v-virginia-1821", id: 85330 },
    { name: "Chisholm v. Georgia", year: 1793, slug: "chisholm-v-georgia-1793", id: null },
    { name: "Calder v. Bull", year: 1798, slug: "calder-v-bull-1798", id: 84695 },
    { name: "Hylton v. United States", year: 1796, slug: "hylton-v-united-states-1796", id: 84686 },
  ],
  'first-amendment': [
    { name: "Schenck v. United States", year: 1919, slug: "schenck-v-united-states-1919", id: 99296 },
    { name: "Near v. Minnesota", year: 1931, slug: "near-v-minnesota-1931", id: 101773 },
    { name: "Prince v. Massachusetts", year: 1944, slug: "prince-v-massachusetts-1944", id: 103933 },
    { name: "Engel v. Vitale", year: 1962, slug: "engel-v-vitale-1962", id: 106443 },
    { name: "Tinker v. Des Moines", year: 1969, slug: "tinker-v-des-moines-1969", id: 107841 },
    { name: "Wisconsin v. Yoder", year: 1972, slug: "wisconsin-v-yoder-1972", id: 108530 },
    { name: "Texas v. Johnson", year: 1989, slug: "texas-v-johnson-1989", id: 112304 },
  ],
  'civil-rights': [
    { name: "Dred Scott v. Sandford", year: 1857, slug: "dred-scott-v-sandford-1857", id: null },
    { name: "Slaughter-House Cases", year: 1873, slug: "slaughter-house-cases-1873", id: null },
    { name: "Civil Rights Cases", year: 1883, slug: "civil-rights-cases-1883", id: 90897 },
    { name: "Plessy v. Ferguson", year: 1896, slug: "plessy-v-ferguson-1896", id: 94508 },
    { name: "Gitlow v. New York", year: 1925, slug: "gitlow-v-new-york-1925", id: 100708 },
    { name: "Brown v. Board of Education", year: 1954, slug: "brown-v-board-of-education-1954", id: 105221 },
    { name: "Cooper v. Aaron", year: 1958, slug: "cooper-v-aaron-1958", id: 105766 },
    { name: "Loving v. Virginia", year: 1967, slug: "loving-v-virginia-1967", id: 107480 },
    { name: "Roe v. Wade", year: 1973, slug: "roe-v-wade-1973", id: 108713 },
    { name: "Regents v. Bakke", year: 1978, slug: "regents-v-bakke-1978", id: 109930 },
    { name: "Planned Parenthood v. Casey", year: 1992, slug: "planned-parenthood-v-casey-1992", id: 112786 },
    { name: "Lawrence v. Texas", year: 2003, slug: "lawrence-v-texas-2003", id: 130160 },
    { name: "DC v. Heller", year: 2008, slug: "dc-v-heller-2008", id: 145777 },
    { name: "McDonald v. Chicago", year: 2010, slug: "mcdonald-v-chicago-2010", id: 149702 },
    { name: "Shelby County v. Holder", year: 2013, slug: "shelby-county-v-holder-2013", id: 931614 },
    { name: "Obergefell v. Hodges", year: 2015, slug: "obergefell-v-hodges-2015", id: 2812209 },
    { name: "Dobbs v. Jackson", year: 2022, slug: "dobbs-v-jackson-2022", id: 6481357 },
    { name: "Students for Fair Admissions v. Harvard", year: 2023, slug: "students-for-fair-admissions-v-harvard-2023", id: 10049657 },
  ],
  'criminal-justice': [
    { name: "Gideon v. Wainwright", year: 1963, slug: "gideon-v-wainwright-1963", id: 106545 },
    { name: "Miranda v. Arizona", year: 1966, slug: "miranda-v-arizona-1966", id: 107252 },
    { name: "New Jersey v. TLO", year: 1985, slug: "new-jersey-v-tlo-1985", id: 111301 },
  ],
  'parental-rights': [
    { name: "Meyer v. Nebraska", year: 1923, slug: "meyer-v-nebraska-1923", id: 100233 },
    { name: "Pierce v. Society of Sisters", year: 1925, slug: "pierce-v-society-of-sisters-1925", id: null },
    { name: "Troxel v. Granville", year: 2000, slug: "troxel-v-granville-2000", id: 1087668 },
  ],
  'executive-power': [
    { name: "United States v. Nixon", year: 1974, slug: "united-states-v-nixon-1974", id: 109101 },
    { name: "Hamdan v. Rumsfeld", year: 2006, slug: "hamdan-v-rumsfeld-2006", id: 145625 },
    { name: "Trump v. United States", year: 2024, slug: "trump-v-united-states-2024", id: 10600038 },
  ],
  'federalism': [
    { name: "Worcester v. Georgia", year: 1832, slug: "worcester-v-georgia-1832", id: null },
    { name: "US Term Limits v. Thornton", year: 1995, slug: "us-term-limits-v-thornton-1995", id: 117935 },
    { name: "Massachusetts v. EPA", year: 2007, slug: "massachusetts-v-epa-2007", id: 145749 },
    { name: "NFIB v. Sebelius", year: 2012, slug: "nfib-v-sebelius-2012", id: 809122 },
    { name: "Rucho v. Common Cause", year: 2019, slug: "rucho-v-common-cause-2019", id: 4633469 },
    { name: "West Virginia v. EPA", year: 2022, slug: "west-virginia-v-epa-2022", id: 6620345 },
  ],
  'separation-of-powers': [
    { name: "INS v. Chadha", year: 1983, slug: "ins-v-chadha-1983", id: 110985 },
    { name: "Clinton v. City of New York", year: 1998, slug: "clinton-v-city-of-new-york-1998", id: 118238 },
    { name: "Bush v. Gore", year: 2000, slug: "bush-v-gore-2000", id: 118395 },
    { name: "Citizens United v. FEC", year: 2010, slug: "citizens-united-v-fec-2010", id: 1741 },
  ],
  'economic-rights': [
    { name: "Lochner v. New York", year: 1905, slug: "lochner-v-new-york-1905", id: 96276 },
    { name: "West Coast Hotel v. Parrish", year: 1937, slug: "west-coast-hotel-v-parrish-1937", id: 102784 },
    { name: "United States v. Carolene Products", year: 1938, slug: "united-states-v-carolene-products-1938", id: 103017 },
  ],
  'healthcare-law': [
    { name: "FDA v. Alliance for Hippocratic Medicine", year: 2024, slug: "fda-v-alliance-for-hippocratic-medicine-2024", id: 9546125 },
    { name: "Medina v. Planned Parenthood", year: 2025, slug: "medina-v-planned-parenthood-2025", id: 10617643 },
  ],
  'military-service': [
    { name: "Boone v. Lightner", year: 1943, slug: "boone-v-lightner-1943", id: 103864 },
    { name: "Conroy v. Aniskoff", year: 1993, slug: "conroy-v-aniskoff-1993", id: 112840 },
  ],
  'wartime-powers': [
    { name: "Ex Parte Milligan", year: 1866, slug: "ex-parte-milligan-1866", id: 1528394 },
    { name: "Korematsu v. United States", year: 1944, slug: "korematsu-v-united-states-1944", id: 104040 },
  ]
};

// IDs are reviewed against the opinion text. Name/year matching is ambiguous:
// the same case can have merits opinions, certiorari orders, and rehearing denials.
// Keep unresolved cases on their existing PDF sources until an ID is verified.
const DATA_DIR = path.join(__dirname, '../data/scotus');
const index = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'search-index.json'), 'utf8'));
const byId = new Map(index.map(record => [record.id, record]));
const mapping = {};
let matchedCount = 0;

for (const [category, cases] of Object.entries(CATEGORIES)) {
  for (const curatedCase of cases) {
    const { id, name, year, slug } = curatedCase;
    const record = id === null ? null : byId.get(id);
    if (id !== null && !record) {
      throw new Error(`Verified opinion ${id} for ${slug} is missing from the index`);
    }
    if (record) {
      const detail = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'cases', `${id}.json`), 'utf8'));
      const text = (detail.opinions || []).map(opinion => opinion.text || '').join('');
      if (text.replace(/<[^>]*>/g, '').trim().length < 2000) {
        throw new Error(`Verified opinion ${id} for ${slug} has no substantive opinion text`);
      }
      matchedCount++;
    }
    mapping[slug] = {
      id, name, ...(record ? { bulkName: record.n } : {}), year, category, slug,
    };
  }
}

fs.writeFileSync(path.join(DATA_DIR, 'curated-mapping.json'), JSON.stringify(mapping, null, 2) + '\n');
console.log(`Mapped ${matchedCount} verified opinions out of ${Object.keys(mapping).length} curated cases.`);
