import Link from 'next/link';

export default function Amendment2Page() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-[#C41E3A] to-[#9B1829] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/constitution" className="text-gray-200 hover:text-white mb-4 inline-block">
            ← Back to Constitution
          </Link>
          <div className="text-6xl font-bold mb-4">II</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Second Amendment
          </h1>
          <div className="text-gray-200 text-lg">
            <p>Passed by Congress: September 25, 1789</p>
            <p>Ratified: December 15, 1791</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-lg shadow-lg border-l-4 border-[#C41E3A] mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[#0F2C47]">Text</h2>
            <p className="text-lg text-gray-800 italic leading-relaxed">
              "A well regulated Militia, being necessary to the security of a free State, the right of the people 
              to keep and bear Arms, shall not be infringed."
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#1A3A5C]">
            <h2 className="text-2xl font-bold mb-4 text-[#0F2C47]">Plain English</h2>
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              Citizens have the right to own and carry firearms.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              The amendment also states that a well-regulated militia — meaning a trained, organized, and coordinated 
              body of local citizen defenders — is essential to the security of a free and sovereign state within the 
              Constitution's federalist design. In this context, "state" refers broadly to the political community: 
              a town, city, county, or state. The term "militia" here does not refer to the modern National Guard.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
