export default function MilitaryServiceCasesPage() {
  const cases = [
    {
        "name": "Boone v. Lightner",
        "year": 1943,
        "slug": "boone-v-lightner-1943",
        "summary": "Military service and veterans' rights"
    },
    {
        "name": "Conroy v. Aniskoff",
        "year": 1993,
        "slug": "conroy-v-aniskoff-1993",
        "summary": "USERRA protections for service members"
    }
];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-5xl mb-4 block">🪖</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Military Service
            </h1>
            <p className="text-xl text-gray-300">
              Military law, veterans, and service rights
            </p>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <a href="/cases" className="text-slate-600 hover:text-slate-800 font-semibold">
              ← Back to All Cases
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((case_) => (
              <a
                key={case_.slug}
                href={`/cases/military-service/${case_.slug}`}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-slate-600 hover:shadow-xl transition-shadow"
              >
                <span className="bg-slate-600 text-white px-3 py-1 rounded-full text-sm font-bold">
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
