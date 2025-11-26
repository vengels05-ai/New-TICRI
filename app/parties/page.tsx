export default function PartiesPage() {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto p-4 md:p-8 max-w-5xl">
        
        {/* Header */}
        <header className="text-center mb-12 bg-gradient-to-br from-purple-700 to-indigo-800 text-white py-12 rounded-lg shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Parties & Policy</h1>
          <p className="text-xl text-gray-100">Where America's two major political parties came from, what they stood for, and how they have changed.</p>
        </header>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
          
          {/* Intro */}
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              Full Historical Timeline: The Democratic and Republican Parties in U.S. History
            </p>
          </div>

          {/* The Democratic Party */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-blue-700 mb-6 border-b-4 border-blue-700 inline-block pb-2">The Democratic Party</h2>
            
            <div className="space-y-6 text-gray-800">
              <p className="leading-relaxed">
                Founded in the early 1800s and rooted in Thomas Jefferson's Democratic-Republicans, the Democratic Party evolved under Andrew Jackson's leadership in the 1820s. 
                Its early base of power was the South and rural America, where it advocated for states' rights, limited federal power, and territorial expansion—positions that also served to defend and extend slavery. 
                By 1860, the party split between Northern Democrats (who supported popular sovereignty) and Southern Democrats (who demanded federal protection of slavery), which fractured the party and helped elect Abraham Lincoln.
              </p>

              <p className="leading-relaxed">
                During and after the Civil War, Democrats in the South became the party of the Confederacy, opposing Reconstruction, Black suffrage, and civil rights enforcement. 
                They established and enforced Jim Crow laws, supported segregation, and used violence—including through the Ku Klux Klan, founded by former Confederate Democrats—to suppress Black voters and Republican officials. 
                For decades, Democrats blocked federal anti-lynching laws. The first successful federal anti-lynching law was not passed until 2022, the <a href="https://www.congress.gov/bill/117th-congress/house-bill/55" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Emmett Till Antilynching Act (Pub. L. 117-107)</a>.
              </p>

              <p className="leading-relaxed">
                In the 1930s, Franklin D. Roosevelt's New Deal massively expanded the federal government's role in economic and social life through Social Security, welfare programs, and labor protections. 
                These were the first large-scale socialist-style policies in the U.S., implemented during a global struggle against fascism and communism. 
                At the same time, FDR authorized <a href="https://www.archives.gov/milestone-documents/executive-order-9066" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Executive Order 9066</a> (February 19, 1942), leading to Japanese internment camps—an infamous violation of American civil liberties.
              </p>

              <p className="leading-relaxed">
                By the 1960s, the Democratic Party divided between Southern segregationists and Northern liberals. 
                John F. Kennedy and Lyndon B. Johnson championed civil rights reform, leading to the passage of the <a href="https://www.loc.gov/exhibits/civil-rights-act/overview.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Civil Rights Act of 1964</a> and the Voting Rights Act of 1965. 
                The Civil Rights Act passed with bipartisan support: in the House, Democrats voted 152–96 (61%) and Republicans 138–34 (80%); in the Senate, Democrats 46–21 and Republicans 27–6. 
                After 1964, Democrats embraced civil rights and urban social coalitions but lost their traditional Southern base as segregationists moved toward the Republican Party.
              </p>

              <p className="leading-relaxed">
                In the modern era, Democrats emphasize social programs, diversity initiatives, and civil rights enforcement. 
                Policies like affirmative action, DEI (diversity, equity, inclusion), and gender/sexual-orientation protections aim to redress past discrimination. 
                Critics argue these measures institutionalize new forms of discrimination and erode merit-based systems. 
                Today, the party's platform includes climate action, healthcare expansion, and federal welfare programs such as Medicaid (over $880B in FY2023), SNAP, and Section 8 housing vouchers. 
                While these programs reduce hardship, studies show they have not eliminated concentrated urban poverty or systemic educational and economic disparities.
              </p>
            </div>
          </section>

          {/* The Republican Party */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-red-700 mb-6 border-b-4 border-red-700 inline-block pb-2">The Republican Party</h2>
            
            <div className="space-y-6 text-gray-800">
              <p className="leading-relaxed">
                The Republican Party was founded in 1854 as an anti-slavery coalition of abolitionists, former Whigs, and northern reformers, united to stop the expansion of slavery into western territories. 
                Under Abraham Lincoln, the GOP led the Union during the Civil War, abolished slavery (13th Amendment, 1865), established citizenship and equal protection (14th Amendment, 1868), and guaranteed voting rights regardless of race (15th Amendment, 1870).
              </p>

              <p className="leading-relaxed">
                During Reconstruction, Republicans pursued civil rights and enfranchisement for freedmen, creating the Freedmen's Bureau and passing federal enforcement acts to combat Klan terrorism—efforts consistently opposed by Southern Democrats. 
                However, the Compromise of 1877 ended Reconstruction, allowing Democrats to regain Southern control and suppress Black rights for nearly a century.
              </p>

              <p className="leading-relaxed">
                By the late 1800s, Republicans aligned with business and industry, supporting protective tariffs and economic growth. 
                At the turn of the 20th century, Progressive Republicans like Theodore Roosevelt broke from party orthodoxy to pursue trust-busting, environmental conservation, and public health laws such as the Pure Food and Drug Act (1906). 
                These efforts established early models for federal consumer and environmental protection.
              </p>

              <p className="leading-relaxed">
                Republicans largely opposed the New Deal in the 1930s, warning that it expanded government power beyond constitutional limits. 
                By the 1950s and 1960s, Republicans had become the party of suburban growth, business interests, and Cold War conservatism. 
                They provided strong support for civil rights legislation—80% of House Republicans and 82% of Senate Republicans voted for the 1964 Civil Rights Act, compared to 61% and 69% of Democrats respectively. 
                Minority Leader Everett Dirksen played a key role in securing the final Senate votes.
              </p>

              <p className="leading-relaxed">
                After Barry Goldwater's 1964 campaign, which opposed the Civil Rights Act on federalism grounds, the Republican Party began shifting toward a conservative identity emphasizing limited government, states' rights, and free markets. 
                The party became dominant in the South as Democrats turned toward urban, minority, and liberal constituencies. 
                Republican policy since the 1980s has emphasized deregulation, tax cuts (Reaganomics, 1981), and "tough on crime" initiatives.
              </p>
            </div>
          </section>

          {/* Eugenics */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-gray-600 inline-block pb-2">Eugenics, Unethical Testing, and Government Abuses</h2>
            
            <div className="space-y-6 text-gray-800">
              <p className="leading-relaxed">
                From 1907 through the 1970s, more than 60,000 Americans—many poor, disabled, or minorities—were sterilized under state eugenics laws. 
                The Supreme Court case <a href="https://www.oyez.org/cases/1900-1940/274us200" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Buck v. Bell (1927)</a> upheld such laws, stating "Three generations of imbeciles are enough." The decision has never been overturned. 
                Skinner v. Oklahoma (1942) limited sterilization for criminals but left eugenics precedent intact.
              </p>

              <p className="leading-relaxed">
                Between the 1930s and 1970s, the U.S. government and military conducted unethical testing on vulnerable populations, including the Tuskegee Syphilis Study (1932–1972), 
                WWII mustard gas experiments on Black soldiers, and Edgewood Arsenal chemical tests (1950s–1975). 
                The Tuskegee study ended only after public exposure in 1972, with a formal government apology issued in 1997.
              </p>
            </div>
          </section>

          {/* War on Drugs */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-gray-600 inline-block pb-2">The Controlled Substances Act, War on Drugs, and Mass Incarceration</h2>
            
            <div className="space-y-6 text-gray-800">
              <p className="leading-relaxed">
                The <a href="https://www.dea.gov/drug-information/drug-scheduling" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Controlled Substances Act (1970)</a> classified narcotics into five schedules and consolidated federal enforcement under the DEA. 
                The Anti-Drug Abuse Acts of 1986 and 1988—passed with bipartisan support—established mandatory minimums and created the 100:1 crack-to-powder cocaine disparity, 
                a policy that disproportionately affected Black Americans and contributed to mass incarceration. 
                The Fair Sentencing Act (2010) reduced the disparity to 18:1, and the First Step Act (2018) retroactively applied parts of that reform.
              </p>

              <p className="leading-relaxed">
                By 2020, Black Americans made up about 37% of the U.S. prison population despite being only 13% of the national population. 
                Incarceration rose more than 220% between 1980 and 2014, driven by mandatory minimums, parole revocations, and "three strikes" laws. 
                Recent reforms have reduced disparities slightly but not eliminated them.
              </p>
            </div>
          </section>

          {/* Great Migration */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-gray-600 inline-block pb-2">The Great Migration and Urban Policy Outcomes</h2>
            
            <div className="space-y-6 text-gray-800">
              <p className="leading-relaxed">
                Between 1916 and 1970, over <a href="https://www.britannica.com/event/Great-Migration" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">6 million Black Americans migrated</a> from the rural South to industrial Northern and Western cities, seeking jobs and safety from Jim Crow laws. 
                These cities—often under Democratic control—became centers of Black culture and political power but also of concentrated poverty, redlining, and school inequality. 
                Deindustrialization in the 1970s further eroded economic stability in these communities.
              </p>
            </div>
          </section>

          {/* Education Inequality */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-gray-600 inline-block pb-2">Education Inequality and Welfare Spending</h2>
            
            <div className="space-y-6 text-gray-800">
              <p className="leading-relaxed">
                Southern states such as Mississippi and Louisiana have consistently ranked near the bottom of U.S. education performance metrics, though recent data show improvements in Grade 4 reading and math scores. 
                Nationwide, trillions have been spent over decades on social programs including <a href="https://www.kff.org/medicaid/health-policy-101-medicaid/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Medicaid</a>, SNAP, TANF, and <a href="https://www.huduser.gov/portal/datasets/hcv.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">housing assistance</a>. 
                While poverty rates have declined during periods of expanded aid, these programs have not closed racial wealth or education gaps.
              </p>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-purple-600 inline-block pb-2">Conclusion: The Two Parties in Perspective</h2>
            
            <div className="space-y-6 text-gray-800">
              <p className="leading-relaxed">
                Over two centuries, both political parties have undergone ideological transformations. 
                Democrats shifted from a pro-slavery, segregationist coalition to one centered on civil rights, social welfare, and diversity. 
                Republicans transitioned from abolitionists and Reconstruction leaders to champions of limited government, markets, and conservative social policies. 
                Each party's policies have produced both progress and failure—from Reconstruction to the War on Drugs.
              </p>

              <p className="leading-relaxed font-semibold text-lg text-purple-800">
                History reveals that neither party represents a consistent moral high ground. 
                Citizens should examine votes, laws, and spending records—not slogans—to judge political integrity and performance. 
                Blind loyalty to any party is dangerous; understanding history is essential for accountability and progress.
              </p>
            </div>
          </section>

          {/* References */}
          <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">References (APA Style)</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• <a href="https://www.congress.gov/bill/117th-congress/house-bill/55" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Emmett Till Antilynching Act (Pub. L. 117-107)</a> — Congress.gov (2022)</li>
              <li>• <a href="https://www.dea.gov/drug-information/drug-scheduling" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DEA — Drug scheduling</a></li>
              <li>• <a href="https://supreme.justia.com/cases/federal/us/274/200/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Buck v. Bell, 274 U.S. 200 (1927)</a> — Justia</li>
              <li>• <a href="https://www.loc.gov/exhibits/civil-rights-act/overview.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">The Civil Rights Act of 1964: A long struggle for freedom</a> — Library of Congress</li>
              <li>• <a href="https://www.archives.gov/milestone-documents/executive-order-9066" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Executive Order 9066</a> — National Archives</li>
              <li>• <a href="https://www.senate.gov/artandhistory/history/common/generic/CivilRightsAct1964.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Civil Rights Act of 1964 — Senate.gov overview</a></li>
              <li>• <a href="https://www.ussc.gov/research/reports/1995-Crack-Report_Full.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Special report to Congress: Cocaine and federal sentencing policy (1995)</a> — U.S. Sentencing Commission</li>
              <li>• <a href="https://www.britannica.com/event/Great-Migration" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Great Migration — Britannica</a></li>
              <li>• <a href="https://www.kff.org/medicaid/health-policy-101-medicaid/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Medicaid 101 — KFF (2025)</a></li>
              <li>• <a href="https://www.huduser.gov/portal/datasets/hcv.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Housing Choice Voucher Program — HUD USER (2025)</a></li>
              <li>• <a href="https://www.mississippifirst.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Contextualizing Mississippi's 2024 NAEP scores — Mississippi First (2025)</a></li>
              <li>• <a href="https://www.oyez.org/cases/1900-1940/274us200" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Buck v. Bell — Oyez</a></li>
              <li>• <a href="https://www.ussc.gov/research/reports/road_to_1_to_1.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">The crack sentencing disparity and the road to 1:1 (2009)</a> — U.S. Sentencing Commission</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}
