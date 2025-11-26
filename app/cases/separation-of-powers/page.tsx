export default function SeparationOfPowersCasesPage() {
  const cases = [
    {
        "name": "INS v. Chadha",
        "year": 1983,
        "slug": "ins-v-chadha-1983",
        "summary": "Legislative veto violates separation of powers"
    },
    {
        "name": "Clinton v. City of New York",
        "year": 1998,
        "slug": "clinton-v-city-of-new-york-1998",
        "summary": "Line-item veto is unconstitutional"
    },
    {
        "name": "Bush v. Gore",
        "year": 2000,
        "slug": "bush-v-gore-2000",
        "summary": "Stopped Florida recount, effectively deciding 2000 election"
    },
    {
        "name": "Citizens United v. FEC",
        "year": 2010,
        "slug": "citizens-united-v-fec-2010",
        "summary": "Corporations have First Amendment right to political spending"
    }
];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-800 to-orange-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-5xl mb-4 block">⚖️</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Separation of Powers
            </h1>
            <p className="text-xl text-gray-300">
              Checks and balances between branches
            </p>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <a href="/cases" className="text-orange-600 hover:text-orange-800 font-semibold">
              ← Back to All Cases
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((case_) => (
              <a
                key={case_.slug}
                href={`/cases/separation-of-powers/${case_.slug}`}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-600 hover:shadow-xl transition-shadow"
              >
                <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold">
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
