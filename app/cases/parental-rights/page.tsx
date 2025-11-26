export default function ParentalRightsCasesPage() {
  const cases = [
    {
        "name": "Meyer v. Nebraska",
        "year": 1923,
        "slug": "meyer-v-nebraska-1923",
        "summary": "Parents have liberty to direct children's education"
    },
    {
        "name": "Pierce v. Society of Sisters",
        "year": 1925,
        "slug": "pierce-v-society-of-sisters-1925",
        "summary": "Parents can choose private/religious schools"
    },
    {
        "name": "Troxel v. Granville",
        "year": 2000,
        "slug": "troxel-v-granville-2000",
        "summary": "Courts can't force grandparent visitation over parent objections"
    }
];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-5xl mb-4 block">👨‍👩‍👧‍👦</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Parents & Family Rights
            </h1>
            <p className="text-xl text-gray-300">
              When can government override parental decisions?
            </p>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <a href="/cases" className="text-green-600 hover:text-green-800 font-semibold">
              ← Back to All Cases
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((case_) => (
              <a
                key={case_.slug}
                href={`/cases/parental-rights/${case_.slug}`}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600 hover:shadow-xl transition-shadow"
              >
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
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
