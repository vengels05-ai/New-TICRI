export default function CriminalJusticeCasesPage() {
  const cases = [
    {
        "name": "Gideon v. Wainwright",
        "year": 1963,
        "slug": "gideon-v-wainwright-1963",
        "summary": "Right to attorney even if you can't afford one"
    },
    {
        "name": "Miranda v. Arizona",
        "year": 1966,
        "slug": "miranda-v-arizona-1966",
        "summary": "Police must inform you of rights before questioning"
    },
    {
        "name": "New Jersey v. TLO",
        "year": 1985,
        "slug": "new-jersey-v-tlo-1985",
        "summary": "Students have reduced Fourth Amendment rights at school"
    }
];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-800 to-red-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-5xl mb-4 block">🚨</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Criminal Justice
            </h1>
            <p className="text-xl text-gray-300">
              Your rights when dealing with police and courts
            </p>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <a href="/cases" className="text-red-600 hover:text-red-800 font-semibold">
              ← Back to All Cases
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((case_) => (
              <a
                key={case_.slug}
                href={`/cases/criminal-justice/${case_.slug}`}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-600 hover:shadow-xl transition-shadow"
              >
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
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
