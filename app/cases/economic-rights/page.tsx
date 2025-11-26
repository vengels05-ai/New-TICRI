export default function EconomicRightsCasesPage() {
  const cases = [
    {
        "name": "Lochner v. New York",
        "year": 1905,
        "slug": "lochner-v-new-york-1905",
        "summary": "Struck down maximum hours law (later repudiated)"
    },
    {
        "name": "West Coast Hotel v. Parrish",
        "year": 1937,
        "slug": "west-coast-hotel-v-parrish-1937",
        "summary": "Upheld minimum wage law, overturning Lochner era"
    },
    {
        "name": "United States v. Carolene Products",
        "year": 1938,
        "slug": "united-states-v-carolene-products-1938",
        "summary": "Economic regulation gets rational basis review"
    }
];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-800 to-yellow-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-5xl mb-4 block">💰</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Economic Rights
            </h1>
            <p className="text-xl text-gray-300">
              Property, contracts, and economic regulation
            </p>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <a href="/cases" className="text-yellow-600 hover:text-yellow-800 font-semibold">
              ← Back to All Cases
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((case_) => (
              <a
                key={case_.slug}
                href={`/cases/economic-rights/${case_.slug}`}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-yellow-600 hover:shadow-xl transition-shadow"
              >
                <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-bold">
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
