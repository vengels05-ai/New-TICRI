import Link from 'next/link';

export default function Amendment11Page() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-[#1A3A5C] to-[#0F2C47] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/constitution" className="text-gray-200 hover:text-white mb-4 inline-block">
            ← Back to Constitution
          </Link>
          <div className="text-6xl font-bold mb-4">XI</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Eleventh Amendment
          </h1>
          <div className="text-gray-200 text-lg">
            <p>Passed by Congress: March 4, 1794</p>
            <p>Ratified: February 7, 1795</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-lg border-l-4 border-[#1A3A5C] mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[#0F2C47]">Text</h2>
            <p className="text-lg text-gray-800 italic leading-relaxed">
              "The Judicial power of the United States shall not be construed to extend to any suit in law or equity, 
              commenced or prosecuted against one of the United States by Citizens of another State, or by Citizens 
              or Subjects of any Foreign State."
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#C41E3A]">
            <h2 className="text-2xl font-bold mb-4 text-[#0F2C47]">Plain English</h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              You generally can't sue a state in federal court if you're from another state or a foreign country 
              (state sovereign immunity).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
