export default function FirstAmendmentCasesPage() {
  const cases = [
    {
        "name": "Schenck v. United States",
        "year": 1919,
        "slug": "schenck-v-united-states-1919",
        "summary": "\"Clear and present danger\" test for free speech limits"
    },
    {
        "name": "Near v. Minnesota",
        "year": 1931,
        "slug": "near-v-minnesota-1931",
        "summary": "Prior restraint on press is unconstitutional"
    },
    {
        "name": "Prince v. Massachusetts",
        "year": 1944,
        "slug": "prince-v-massachusetts-1944",
        "summary": "State can limit parental religious practices that harm children"
    },
    {
        "name": "Engel v. Vitale",
        "year": 1962,
        "slug": "engel-v-vitale-1962",
        "summary": "School-sponsored prayer violates Establishment Clause"
    },
    {
        "name": "Tinker v. Des Moines",
        "year": 1969,
        "slug": "tinker-v-des-moines-1969",
        "summary": "Students don't lose free speech rights at school"
    },
    {
        "name": "Wisconsin v. Yoder",
        "year": 1972,
        "slug": "wisconsin-v-yoder-1972",
        "summary": "Amish can withdraw children from school for religious reasons"
    },
    {
        "name": "Texas v. Johnson",
        "year": 1989,
        "slug": "texas-v-johnson-1989",
        "summary": "Flag burning is protected symbolic speech"
    }
];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-5xl mb-4 block">🗣️</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Free Speech & Religion
            </h1>
            <p className="text-xl text-gray-300">
              Expression, belief, and the marketplace of ideas
            </p>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <a href="/cases" className="text-blue-600 hover:text-blue-800 font-semibold">
              ← Back to All Cases
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((case_) => (
              <a
                key={case_.slug}
                href={`/cases/first-amendment/${case_.slug}`}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow"
              >
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
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
