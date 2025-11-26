import Link from 'next/link';

export default function ConstitutionPage() {
  const amendments = [
    { number: 'Preamble', title: 'Preamble', slug: 'preamble' },
    { number: 'I', title: 'First Amendment', slug: 'amendment-1' },
    { number: 'II', title: 'Second Amendment', slug: 'amendment-2' },
    { number: 'III', title: 'Third Amendment', slug: 'amendment-3' },
    { number: 'IV', title: 'Fourth Amendment', slug: 'amendment-4' },
    { number: 'V', title: 'Fifth Amendment', slug: 'amendment-5' },
    { number: 'VI', title: 'Sixth Amendment', slug: 'amendment-6' },
    { number: 'VII', title: 'Seventh Amendment', slug: 'amendment-7' },
    { number: 'VIII', title: 'Eighth Amendment', slug: 'amendment-8' },
    { number: 'IX', title: 'Ninth Amendment', slug: 'amendment-9' },
    { number: 'X', title: 'Tenth Amendment', slug: 'amendment-10' },
    { number: 'XI', title: 'Eleventh Amendment', slug: 'amendment-11' },
    { number: 'XII', title: 'Twelfth Amendment', slug: 'amendment-12' },
    { number: 'XIII', title: 'Thirteenth Amendment', slug: 'amendment-13' },
    { number: 'XIV', title: 'Fourteenth Amendment', slug: 'amendment-14' },
    { number: 'XV', title: 'Fifteenth Amendment', slug: 'amendment-15' },
    { number: 'XVI', title: 'Sixteenth Amendment', slug: 'amendment-16' },
    { number: 'XVII', title: 'Seventeenth Amendment', slug: 'amendment-17' },
    { number: 'XVIII', title: 'Eighteenth Amendment', slug: 'amendment-18' },
    { number: 'XIX', title: 'Nineteenth Amendment', slug: 'amendment-19' },
    { number: 'XX', title: 'Twentieth Amendment', slug: 'amendment-20' },
    { number: 'XXI', title: 'Twenty-First Amendment', slug: 'amendment-21' },
    { number: 'XXII', title: 'Twenty-Second Amendment', slug: 'amendment-22' },
    { number: 'XXIII', title: 'Twenty-Third Amendment', slug: 'amendment-23' },
    { number: 'XXIV', title: 'Twenty-Fourth Amendment', slug: 'amendment-24' },
    { number: 'XXV', title: 'Twenty-Fifth Amendment', slug: 'amendment-25' },
    { number: 'XXVI', title: 'Twenty-Sixth Amendment', slug: 'amendment-26' },
    { number: 'XXVII', title: 'Twenty-Seventh Amendment', slug: 'amendment-27' },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0F2C47] to-[#1A3A5C] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            The Constitution
          </h1>
          <p className="text-xl text-center text-gray-200 max-w-3xl mx-auto">
            Read America's founding document and all 27 amendments in plain English
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#0F2C47]">
              The Preamble
            </h2>
            <Link
              href="/constitution/preamble"
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-lg border-l-4 border-[#1A3A5C] hover:shadow-xl transition-all block"
            >
              <h3 className="text-xl font-bold text-[#0F2C47] mb-2">
                📜 Preamble
              </h3>
              <p className="text-gray-700">
                The mission statement of the Constitution
              </p>
            </Link>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#0F2C47]">
              The Bill of Rights (Amendments I-X)
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {amendments.slice(1, 11).map((amendment) => (
                <Link
                  key={amendment.slug}
                  href={`/constitution/${amendment.slug}`}
                  className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg shadow-lg border-l-4 border-[#C41E3A] hover:shadow-xl transition-all"
                >
                  <div className="text-3xl font-bold text-[#C41E3A] mb-2">
                    {amendment.number}
                  </div>
                  <h3 className="text-lg font-semibold text-[#0F2C47]">
                    {amendment.title}
                  </h3>
                </Link>
              ))}
            </div>

            <h2 className="text-3xl font-bold mb-6 text-[#0F2C47]">
              Additional Amendments (XI-XXVII)
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {amendments.slice(11).map((amendment) => (
                <Link
                  key={amendment.slug}
                  href={`/constitution/${amendment.slug}`}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-lg border-l-4 border-[#1A3A5C] hover:shadow-xl transition-all"
                >
                  <div className="text-2xl font-bold text-[#1A3A5C] mb-2">
                    {amendment.number}
                  </div>
                  <h3 className="text-sm font-semibold text-[#0F2C47]">
                    {amendment.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
