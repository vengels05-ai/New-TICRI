export default function CivilRightsCasesPage() {
  const cases = [
    {
        "name": "Dred Scott v. Sandford",
        "year": 1857,
        "slug": "dred-scott-v-sandford-1857",
        "summary": "Infamous decision denying citizenship to Black Americans"
    },
    {
        "name": "Slaughter-House Cases",
        "year": 1873,
        "slug": "slaughter-house-cases-1873",
        "summary": "Narrowly interpreted 14th Amendment Privileges or Immunities"
    },
    {
        "name": "Civil Rights Cases",
        "year": 1883,
        "slug": "civil-rights-cases-1883",
        "summary": "14th Amendment doesn't apply to private discrimination"
    },
    {
        "name": "Plessy v. Ferguson",
        "year": 1896,
        "slug": "plessy-v-ferguson-1896",
        "summary": "\"Separate but equal\" upheld racial segregation"
    },
    {
        "name": "Gitlow v. New York",
        "year": 1925,
        "slug": "gitlow-v-new-york-1925",
        "summary": "First Amendment applies to states via 14th Amendment"
    },
    {
        "name": "Brown v. Board of Education",
        "year": 1954,
        "slug": "brown-v-board-of-education-1954",
        "summary": "Separate is not equal — segregation unconstitutional"
    },
    {
        "name": "Cooper v. Aaron",
        "year": 1958,
        "slug": "cooper-v-aaron-1958",
        "summary": "States must follow Supreme Court rulings"
    },
    {
        "name": "Loving v. Virginia",
        "year": 1967,
        "slug": "loving-v-virginia-1967",
        "summary": "Bans on interracial marriage are unconstitutional"
    },
    {
        "name": "Roe v. Wade",
        "year": 1973,
        "slug": "roe-v-wade-1973",
        "summary": "Created constitutional right to abortion (overruled 2022)"
    },
    {
        "name": "Regents v. Bakke",
        "year": 1978,
        "slug": "regents-v-bakke-1978",
        "summary": "Race can be a factor in admissions, but not quotas"
    },
    {
        "name": "Planned Parenthood v. Casey",
        "year": 1992,
        "slug": "planned-parenthood-v-casey-1992",
        "summary": "Reaffirmed Roe with \"undue burden\" standard"
    },
    {
        "name": "Lawrence v. Texas",
        "year": 2003,
        "slug": "lawrence-v-texas-2003",
        "summary": "State sodomy laws violate due process"
    },
    {
        "name": "DC v. Heller",
        "year": 2008,
        "slug": "dc-v-heller-2008",
        "summary": "Second Amendment protects individual right to bear arms"
    },
    {
        "name": "McDonald v. Chicago",
        "year": 2010,
        "slug": "mcdonald-v-chicago-2010",
        "summary": "Second Amendment applies to states"
    },
    {
        "name": "Shelby County v. Holder",
        "year": 2013,
        "slug": "shelby-county-v-holder-2013",
        "summary": "Struck down Voting Rights Act preclearance formula"
    },
    {
        "name": "Obergefell v. Hodges",
        "year": 2015,
        "slug": "obergefell-v-hodges-2015",
        "summary": "Same-sex marriage is a constitutional right"
    },
    {
        "name": "Dobbs v. Jackson",
        "year": 2022,
        "slug": "dobbs-v-jackson-womens-health-organization-2022",
        "summary": "Overturned Roe v. Wade — no constitutional right to abortion"
    },
    {
        "name": "Students for Fair Admissions v. Harvard",
        "year": 2023,
        "slug": "students-for-fair-admissions-v-harvard-2023",
        "summary": "Race-based college admissions violate Equal Protection"
    }
];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-800 to-purple-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-5xl mb-4 block">⚖️</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Civil Rights & Equal Protection
            </h1>
            <p className="text-xl text-gray-300">
              The long road to equality under law
            </p>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <a href="/cases" className="text-purple-600 hover:text-purple-800 font-semibold">
              ← Back to All Cases
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((case_) => (
              <a
                key={case_.slug}
                href={`/cases/civil-rights/${case_.slug}`}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:shadow-xl transition-shadow"
              >
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">
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
