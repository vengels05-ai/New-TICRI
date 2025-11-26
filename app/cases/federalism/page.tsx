export default function FederalismCasesPage() {
  const cases = [
    {
        "name": "Worcester v. Georgia",
        "year": 1832,
        "slug": "worcester-v-georgia-1832",
        "summary": "Federal government has exclusive authority over Native American affairs"
    },
    {
        "name": "US Term Limits v. Thornton",
        "year": 1995,
        "slug": "us-term-limits-v-thornton-1995",
        "summary": "States can't impose congressional term limits"
    },
    {
        "name": "Massachusetts v. EPA",
        "year": 2007,
        "slug": "massachusetts-v-epa-2007",
        "summary": "EPA must regulate greenhouse gases under Clean Air Act"
    },
    {
        "name": "NFIB v. Sebelius",
        "year": 2012,
        "slug": "nfib-v-sebelius-2012",
        "summary": "ACA individual mandate upheld as tax, not commerce power"
    },
    {
        "name": "Rucho v. Common Cause",
        "year": 2019,
        "slug": "rucho-v-common-cause-2019",
        "summary": "Political gerrymandering is non-justiciable"
    },
    {
        "name": "West Virginia v. EPA",
        "year": 2022,
        "slug": "west-virginia-v-epa-2022",
        "summary": "EPA can't regulate power plant emissions without clear authorization"
    }
];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-800 to-teal-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-5xl mb-4 block">🏛️</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Federalism
            </h1>
            <p className="text-xl text-gray-300">
              State vs. federal power and the commerce clause
            </p>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <a href="/cases" className="text-teal-600 hover:text-teal-800 font-semibold">
              ← Back to All Cases
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((case_) => (
              <a
                key={case_.slug}
                href={`/cases/federalism/${case_.slug}`}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-teal-600 hover:shadow-xl transition-shadow"
              >
                <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-bold">
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
