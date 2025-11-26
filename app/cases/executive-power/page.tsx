export default function ExecutivePowerCasesPage() {
  const cases = [
    {
        "name": "United States v. Nixon",
        "year": 1974,
        "slug": "united-states-v-nixon-1974",
        "summary": "Executive privilege is not absolute"
    },
    {
        "name": "Hamdan v. Rumsfeld",
        "year": 2006,
        "slug": "hamdan-v-rumsfeld-2006",
        "summary": "President's military commissions violated Geneva Conventions"
    },
    {
        "name": "Trump v. United States",
        "year": 2024,
        "slug": "trump-v-united-states-2024",
        "summary": "Presidents have immunity for official acts"
    }
];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-800 to-indigo-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-5xl mb-4 block">🇺🇸</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Presidential Power
            </h1>
            <p className="text-xl text-gray-300">
              Executive authority, immunity, and limits
            </p>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <a href="/cases" className="text-indigo-600 hover:text-indigo-800 font-semibold">
              ← Back to All Cases
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((case_) => (
              <a
                key={case_.slug}
                href={`/cases/executive-power/${case_.slug}`}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-indigo-600 hover:shadow-xl transition-shadow"
              >
                <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-bold">
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
