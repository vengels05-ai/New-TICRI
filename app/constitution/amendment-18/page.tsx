import Link from 'next/link';

export default function Amendment18Page() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-[#1A3A5C] to-[#0F2C47] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/constitution" className="text-gray-200 hover:text-white mb-4 inline-block">
            ← Back to Constitution
          </Link>
          <div className="text-6xl font-bold mb-4">XVIII</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Eighteenth Amendment (Repealed)
          </h1>
          <div className="text-gray-200 text-lg">
            <p>Passed by Congress: December 18, 1917</p>
            <p>Ratified: January 16, 1919</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-lg border-l-4 border-[#1A3A5C] mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[#0F2C47]">Text</h2>
            <p className="text-lg text-gray-800 italic leading-relaxed">
              Prohibited manufacture, sale, or transportation of intoxicating liquors (later repealed by the Twenty-First Amendment).
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#C41E3A]">
            <h2 className="text-2xl font-bold mb-4 text-[#0F2C47]">Plain English</h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              Started national Prohibition; later undone by the 21st Amendment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
