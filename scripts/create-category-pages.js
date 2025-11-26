const fs = require('fs');
const path = require('path');

const CASES_DIR = '/Users/vengels/ticri-nextjs/app/cases';

// Category metadata
const CATEGORIES = {
  'foundational': {
    icon: '🏛️',
    title: 'Constitutional Foundations',
    subtitle: 'How our system of government was built',
    color: 'gray'
  },
  'first-amendment': {
    icon: '🗣️',
    title: 'Free Speech & Religion',
    subtitle: 'Expression, belief, and the marketplace of ideas',
    color: 'blue'
  },
  'civil-rights': {
    icon: '⚖️',
    title: 'Civil Rights & Equal Protection',
    subtitle: 'The long road to equality under law',
    color: 'purple'
  },
  'criminal-justice': {
    icon: '🚨',
    title: 'Criminal Justice',
    subtitle: 'Your rights when dealing with police and courts',
    color: 'red'
  },
  'parental-rights': {
    icon: '👨‍👩‍👧‍👦',
    title: 'Parents & Family Rights',
    subtitle: 'When can government override parental decisions?',
    color: 'green'
  },
  'executive-power': {
    icon: '🇺🇸',
    title: 'Presidential Power',
    subtitle: 'Executive authority, immunity, and limits',
    color: 'indigo'
  },
  'federalism': {
    icon: '🏛️',
    title: 'Federalism',
    subtitle: 'State vs. federal power and the commerce clause',
    color: 'teal'
  },
  'separation-of-powers': {
    icon: '⚖️',
    title: 'Separation of Powers',
    subtitle: 'Checks and balances between branches',
    color: 'orange'
  },
  'economic-rights': {
    icon: '💰',
    title: 'Economic Rights',
    subtitle: 'Property, contracts, and economic regulation',
    color: 'yellow'
  },
  'healthcare-law': {
    icon: '🏥',
    title: 'Healthcare Law',
    subtitle: 'ACA, medical rights, and insurance',
    color: 'pink'
  },
  'military-service': {
    icon: '🪖',
    title: 'Military Service',
    subtitle: 'Military law, veterans, and service rights',
    color: 'slate'
  },
  'wartime-powers': {
    icon: '⚔️',
    title: 'Wartime Powers',
    subtitle: 'War authorization and emergency powers',
    color: 'amber'
  }
};

// Case summaries for each category
const CASE_SUMMARIES = {
  'foundational': [
    { name: "Marbury v. Madison", year: 1803, slug: "marbury-v-madison-1803", summary: "Created judicial review — courts can strike down unconstitutional laws" },
    { name: "McCulloch v. Maryland", year: 1819, slug: "mcculloch-v-maryland-1819", summary: "Federal law is supreme over state law; implied powers established" },
    { name: "Gibbons v. Ogden", year: 1824, slug: "gibbons-v-ogden-1824", summary: "Federal government can regulate interstate commerce" },
    { name: "Martin v. Hunter's Lessee", year: 1816, slug: "martin-v-hunters-lessee-1816", summary: "Supreme Court can review state court decisions on federal questions" },
    { name: "Fletcher v. Peck", year: 1810, slug: "fletcher-v-peck-1810", summary: "First time Supreme Court struck down a state law" },
    { name: "Dartmouth College v. Woodward", year: 1819, slug: "dartmouth-college-v-woodward-1819", summary: "Contracts are protected from state interference" },
    { name: "Cohens v. Virginia", year: 1821, slug: "cohens-v-virginia-1821", summary: "Federal courts can review state criminal convictions" },
    { name: "Chisholm v. Georgia", year: 1793, slug: "chisholm-v-georgia-1793", summary: "Led to the 11th Amendment on state sovereign immunity" },
    { name: "Calder v. Bull", year: 1798, slug: "calder-v-bull-1798", summary: "Defined ex post facto laws and limits on retroactive legislation" },
    { name: "Hylton v. United States", year: 1796, slug: "hylton-v-united-states-1796", summary: "First case examining federal taxing power" },
  ],
  'first-amendment': [
    { name: "Schenck v. United States", year: 1919, slug: "schenck-v-united-states-1919", summary: "\"Clear and present danger\" test for free speech limits" },
    { name: "Near v. Minnesota", year: 1931, slug: "near-v-minnesota-1931", summary: "Prior restraint on press is unconstitutional" },
    { name: "Prince v. Massachusetts", year: 1944, slug: "prince-v-massachusetts-1944", summary: "State can limit parental religious practices that harm children" },
    { name: "Engel v. Vitale", year: 1962, slug: "engel-v-vitale-1962", summary: "School-sponsored prayer violates Establishment Clause" },
    { name: "Tinker v. Des Moines", year: 1969, slug: "tinker-v-des-moines-1969", summary: "Students don't lose free speech rights at school" },
    { name: "Wisconsin v. Yoder", year: 1972, slug: "wisconsin-v-yoder-1972", summary: "Amish can withdraw children from school for religious reasons" },
    { name: "Texas v. Johnson", year: 1989, slug: "texas-v-johnson-1989", summary: "Flag burning is protected symbolic speech" },
  ],
  'civil-rights': [
    { name: "Dred Scott v. Sandford", year: 1857, slug: "dred-scott-v-sandford-1857", summary: "Infamous decision denying citizenship to Black Americans" },
    { name: "Slaughter-House Cases", year: 1873, slug: "slaughter-house-cases-1873", summary: "Narrowly interpreted 14th Amendment Privileges or Immunities" },
    { name: "Civil Rights Cases", year: 1883, slug: "civil-rights-cases-1883", summary: "14th Amendment doesn't apply to private discrimination" },
    { name: "Plessy v. Ferguson", year: 1896, slug: "plessy-v-ferguson-1896", summary: "\"Separate but equal\" upheld racial segregation" },
    { name: "Gitlow v. New York", year: 1925, slug: "gitlow-v-new-york-1925", summary: "First Amendment applies to states via 14th Amendment" },
    { name: "Brown v. Board of Education", year: 1954, slug: "brown-v-board-of-education-1954", summary: "Separate is not equal — segregation unconstitutional" },
    { name: "Cooper v. Aaron", year: 1958, slug: "cooper-v-aaron-1958", summary: "States must follow Supreme Court rulings" },
    { name: "Loving v. Virginia", year: 1967, slug: "loving-v-virginia-1967", summary: "Bans on interracial marriage are unconstitutional" },
    { name: "Roe v. Wade", year: 1973, slug: "roe-v-wade-1973", summary: "Created constitutional right to abortion (overruled 2022)" },
    { name: "Regents v. Bakke", year: 1978, slug: "regents-v-bakke-1978", summary: "Race can be a factor in admissions, but not quotas" },
    { name: "Planned Parenthood v. Casey", year: 1992, slug: "planned-parenthood-v-casey-1992", summary: "Reaffirmed Roe with \"undue burden\" standard" },
    { name: "Lawrence v. Texas", year: 2003, slug: "lawrence-v-texas-2003", summary: "State sodomy laws violate due process" },
    { name: "DC v. Heller", year: 2008, slug: "dc-v-heller-2008", summary: "Second Amendment protects individual right to bear arms" },
    { name: "McDonald v. Chicago", year: 2010, slug: "mcdonald-v-chicago-2010", summary: "Second Amendment applies to states" },
    { name: "Shelby County v. Holder", year: 2013, slug: "shelby-county-v-holder-2013", summary: "Struck down Voting Rights Act preclearance formula" },
    { name: "Obergefell v. Hodges", year: 2015, slug: "obergefell-v-hodges-2015", summary: "Same-sex marriage is a constitutional right" },
    { name: "Dobbs v. Jackson", year: 2022, slug: "dobbs-v-jackson-womens-health-organization-2022", summary: "Overturned Roe v. Wade — no constitutional right to abortion" },
    { name: "Students for Fair Admissions v. Harvard", year: 2023, slug: "students-for-fair-admissions-v-harvard-2023", summary: "Race-based college admissions violate Equal Protection" },
  ],
  'criminal-justice': [
    { name: "Gideon v. Wainwright", year: 1963, slug: "gideon-v-wainwright-1963", summary: "Right to attorney even if you can't afford one" },
    { name: "Miranda v. Arizona", year: 1966, slug: "miranda-v-arizona-1966", summary: "Police must inform you of rights before questioning" },
    { name: "New Jersey v. TLO", year: 1985, slug: "new-jersey-v-tlo-1985", summary: "Students have reduced Fourth Amendment rights at school" },
  ],
  'parental-rights': [
    { name: "Meyer v. Nebraska", year: 1923, slug: "meyer-v-nebraska-1923", summary: "Parents have liberty to direct children's education" },
    { name: "Pierce v. Society of Sisters", year: 1925, slug: "pierce-v-society-of-sisters-1925", summary: "Parents can choose private/religious schools" },
    { name: "Troxel v. Granville", year: 2000, slug: "troxel-v-granville-2000", summary: "Courts can't force grandparent visitation over parent objections" },
  ],
  'executive-power': [
    { name: "United States v. Nixon", year: 1974, slug: "united-states-v-nixon-1974", summary: "Executive privilege is not absolute" },
    { name: "Hamdan v. Rumsfeld", year: 2006, slug: "hamdan-v-rumsfeld-2006", summary: "President's military commissions violated Geneva Conventions" },
    { name: "Trump v. United States", year: 2024, slug: "trump-v-united-states-2024", summary: "Presidents have immunity for official acts" },
  ],
  'federalism': [
    { name: "Worcester v. Georgia", year: 1832, slug: "worcester-v-georgia-1832", summary: "Federal government has exclusive authority over Native American affairs" },
    { name: "US Term Limits v. Thornton", year: 1995, slug: "us-term-limits-v-thornton-1995", summary: "States can't impose congressional term limits" },
    { name: "Massachusetts v. EPA", year: 2007, slug: "massachusetts-v-epa-2007", summary: "EPA must regulate greenhouse gases under Clean Air Act" },
    { name: "NFIB v. Sebelius", year: 2012, slug: "nfib-v-sebelius-2012", summary: "ACA individual mandate upheld as tax, not commerce power" },
    { name: "Rucho v. Common Cause", year: 2019, slug: "rucho-v-common-cause-2019", summary: "Political gerrymandering is non-justiciable" },
    { name: "West Virginia v. EPA", year: 2022, slug: "west-virginia-v-epa-2022", summary: "EPA can't regulate power plant emissions without clear authorization" },
  ],
  'separation-of-powers': [
    { name: "INS v. Chadha", year: 1983, slug: "ins-v-chadha-1983", summary: "Legislative veto violates separation of powers" },
    { name: "Clinton v. City of New York", year: 1998, slug: "clinton-v-city-of-new-york-1998", summary: "Line-item veto is unconstitutional" },
    { name: "Bush v. Gore", year: 2000, slug: "bush-v-gore-2000", summary: "Stopped Florida recount, effectively deciding 2000 election" },
    { name: "Citizens United v. FEC", year: 2010, slug: "citizens-united-v-fec-2010", summary: "Corporations have First Amendment right to political spending" },
  ],
  'economic-rights': [
    { name: "Lochner v. New York", year: 1905, slug: "lochner-v-new-york-1905", summary: "Struck down maximum hours law (later repudiated)" },
    { name: "West Coast Hotel v. Parrish", year: 1937, slug: "west-coast-hotel-v-parrish-1937", summary: "Upheld minimum wage law, overturning Lochner era" },
    { name: "United States v. Carolene Products", year: 1938, slug: "united-states-v-carolene-products-1938", summary: "Economic regulation gets rational basis review" },
  ],
  'healthcare-law': [
    { name: "FDA v. Alliance for Hippocratic Medicine", year: 2024, slug: "fda-v-alliance-for-hippocratic-medicine-2024", summary: "Challengers lacked standing to sue over abortion pill access" },
    { name: "Medina v. Planned Parenthood", year: 2025, slug: "medina-v-planned-parenthood-2025", summary: "Recent healthcare-related decision" },
  ],
  'military-service': [
    { name: "Boone v. Lightner", year: 1943, slug: "boone-v-lightner-1943", summary: "Military service and veterans' rights" },
    { name: "Conroy v. Aniskoff", year: 1993, slug: "conroy-v-aniskoff-1993", summary: "USERRA protections for service members" },
  ],
  'wartime-powers': [
    { name: "Ex Parte Milligan", year: 1866, slug: "ex-parte-milligan-1866", summary: "Military tribunals can't try civilians when courts are open" },
    { name: "Korematsu v. United States", year: 1944, slug: "korematsu-v-united-states-1944", summary: "Upheld Japanese internment (later repudiated)" },
  ]
};

function generateCategoryPage(category, metadata, cases) {
  const componentName = category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('') + 'CasesPage';

  return `export default function ${componentName}() {
  const cases = ${JSON.stringify(cases, null, 4)};

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-${metadata.color}-800 to-${metadata.color}-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-5xl mb-4 block">${metadata.icon}</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              ${metadata.title}
            </h1>
            <p className="text-xl text-gray-300">
              ${metadata.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <a href="/cases" className="text-${metadata.color}-600 hover:text-${metadata.color}-800 font-semibold">
              ← Back to All Cases
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((case_) => (
              <a
                key={case_.slug}
                href={\`/cases/${category}/\${case_.slug}\`}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-${metadata.color}-600 hover:shadow-xl transition-shadow"
              >
                <span className="bg-${metadata.color}-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {case_.year}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-3 mb-2">
                  {case_.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {case_.summary}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
`;
}

// Generate all category pages
Object.keys(CATEGORIES).forEach(category => {
  const metadata = CATEGORIES[category];
  const cases = CASE_SUMMARIES[category] || [];
  
  if (cases.length === 0) {
    console.log(`⚠️  No cases found for ${category}`);
    return;
  }
  
  const content = generateCategoryPage(category, metadata, cases);
  const filePath = path.join(CASES_DIR, category, 'page.tsx');
  
  fs.writeFileSync(filePath, content);
  console.log(`✅ Created: ${category}/page.tsx (${cases.length} cases)`);
});

console.log('\n✨ All category index pages created!');
