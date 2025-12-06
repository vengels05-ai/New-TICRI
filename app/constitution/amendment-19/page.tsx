import Link from 'next/link';

export default function Amendment19Page() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-[#1A3A5C] to-[#0F2C47] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/constitution" className="text-gray-200 hover:text-white mb-4 inline-block">
            ← Back to Constitution
          </Link>
          <div className="text-6xl font-bold mb-4">XIX</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nineteenth Amendment
          </h1>
          <div className="text-gray-200 text-lg">
            <p>Passed by Congress: June 4, 1919</p>
            <p>Ratified: August 18, 1920</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-lg border-l-4 border-[#1A3A5C] mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[#0F2C47]">Text</h2>
            <p className="text-lg text-gray-800 italic leading-relaxed">
              "The right of citizens of the United States to vote shall not be denied or abridged by the United States 
              or by any State on account of sex." Congress may enforce by legislation.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#C41E3A]">
            <h2 className="text-2xl font-bold mb-4 text-[#0F2C47]">Plain English</h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              Guarantees women's right to vote.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
