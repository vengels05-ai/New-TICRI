export default function WartimePowersCasesPage() {
  const cases = [
    {
        "name": "Ex Parte Milligan",
        "year": 1866,
        "slug": "ex-parte-milligan-1866",
        "summary": "Military tribunals can't try civilians when courts are open"
    },
    {
        "name": "Korematsu v. United States",
        "year": 1944,
        "slug": "korematsu-v-united-states-1944",
        "summary": "Upheld Japanese internment (later repudiated)"
    }
];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-800 to-amber-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-5xl mb-4 block">⚔️</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Wartime Powers
            </h1>
            <p className="text-xl text-gray-300">
              War authorization and emergency powers
            </p>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <a href="/cases" className="text-amber-600 hover:text-amber-800 font-semibold">
              ← Back to All Cases
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((case_) => (
              <a
                key={case_.slug}
                href={`/cases/wartime-powers/${case_.slug}`}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-600 hover:shadow-xl transition-shadow"
              >
                <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-bold">
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
