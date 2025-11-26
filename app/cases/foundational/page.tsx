export default function FoundationalCasesPage() {
  const cases = [
    {
        "name": "Marbury v. Madison",
        "year": 1803,
        "slug": "marbury-v-madison-1803",
        "summary": "Created judicial review — courts can strike down unconstitutional laws"
    },
    {
        "name": "McCulloch v. Maryland",
        "year": 1819,
        "slug": "mcculloch-v-maryland-1819",
        "summary": "Federal law is supreme over state law; implied powers established"
    },
    {
        "name": "Gibbons v. Ogden",
        "year": 1824,
        "slug": "gibbons-v-ogden-1824",
        "summary": "Federal government can regulate interstate commerce"
    },
    {
        "name": "Martin v. Hunter's Lessee",
        "year": 1816,
        "slug": "martin-v-hunters-lessee-1816",
        "summary": "Supreme Court can review state court decisions on federal questions"
    },
    {
        "name": "Fletcher v. Peck",
        "year": 1810,
        "slug": "fletcher-v-peck-1810",
        "summary": "First time Supreme Court struck down a state law"
    },
    {
        "name": "Dartmouth College v. Woodward",
        "year": 1819,
        "slug": "dartmouth-college-v-woodward-1819",
        "summary": "Contracts are protected from state interference"
    },
    {
        "name": "Cohens v. Virginia",
        "year": 1821,
        "slug": "cohens-v-virginia-1821",
        "summary": "Federal courts can review state criminal convictions"
    },
    {
        "name": "Chisholm v. Georgia",
        "year": 1793,
        "slug": "chisholm-v-georgia-1793",
        "summary": "Led to the 11th Amendment on state sovereign immunity"
    },
    {
        "name": "Calder v. Bull",
        "year": 1798,
        "slug": "calder-v-bull-1798",
        "summary": "Defined ex post facto laws and limits on retroactive legislation"
    },
    {
        "name": "Hylton v. United States",
        "year": 1796,
        "slug": "hylton-v-united-states-1796",
        "summary": "First case examining federal taxing power"
    }
];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-5xl mb-4 block">🏛️</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Constitutional Foundations
            </h1>
            <p className="text-xl text-gray-300">
              How our system of government was built
            </p>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <a href="/cases" className="text-gray-600 hover:text-gray-800 font-semibold">
              ← Back to All Cases
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((case_) => (
              <a
                key={case_.slug}
                href={`/cases/foundational/${case_.slug}`}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-gray-600 hover:shadow-xl transition-shadow"
              >
                <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-bold">
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
