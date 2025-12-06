import Link from 'next/link';

export default function ConstitutionPage() {
  const amendments = [
    { number: 'Preamble', title: 'Preamble', slug: 'preamble' },
    { number: 'I', title: 'First Amendment', slug: 'amendment-1', passed: 'Sept 25, 1789', ratified: 'Dec 15, 1791' },
    { number: 'II', title: 'Second Amendment', slug: 'amendment-2', passed: 'Sept 25, 1789', ratified: 'Dec 15, 1791' },
    { number: 'III', title: 'Third Amendment', slug: 'amendment-3', passed: 'Sept 25, 1789', ratified: 'Dec 15, 1791' },
    { number: 'IV', title: 'Fourth Amendment', slug: 'amendment-4', passed: 'Sept 25, 1789', ratified: 'Dec 15, 1791' },
    { number: 'V', title: 'Fifth Amendment', slug: 'amendment-5', passed: 'Sept 25, 1789', ratified: 'Dec 15, 1791' },
    { number: 'VI', title: 'Sixth Amendment', slug: 'amendment-6', passed: 'Sept 25, 1789', ratified: 'Dec 15, 1791' },
    { number: 'VII', title: 'Seventh Amendment', slug: 'amendment-7', passed: 'Sept 25, 1789', ratified: 'Dec 15, 1791' },
    { number: 'VIII', title: 'Eighth Amendment', slug: 'amendment-8', passed: 'Sept 25, 1789', ratified: 'Dec 15, 1791' },
    { number: 'IX', title: 'Ninth Amendment', slug: 'amendment-9', passed: 'Sept 25, 1789', ratified: 'Dec 15, 1791' },
    { number: 'X', title: 'Tenth Amendment', slug: 'amendment-10', passed: 'Sept 25, 1789', ratified: 'Dec 15, 1791' },
    { number: 'XI', title: 'Eleventh Amendment', slug: 'amendment-11', passed: 'Mar 4, 1794', ratified: 'Feb 7, 1795' },
    { number: 'XII', title: 'Twelfth Amendment', slug: 'amendment-12', passed: 'Dec 9, 1803', ratified: 'Jun 15, 1804' },
    { number: 'XIII', title: 'Thirteenth Amendment', slug: 'amendment-13', passed: 'Jan 31, 1865', ratified: 'Dec 6, 1865' },
    { number: 'XIV', title: 'Fourteenth Amendment', slug: 'amendment-14', passed: 'Jun 13, 1866', ratified: 'Jul 9, 1868' },
    { number: 'XV', title: 'Fifteenth Amendment', slug: 'amendment-15', passed: 'Feb 26, 1869', ratified: 'Feb 3, 1870' },
    { number: 'XVI', title: 'Sixteenth Amendment', slug: 'amendment-16', passed: 'Jul 12, 1909', ratified: 'Feb 3, 1913' },
    { number: 'XVII', title: 'Seventeenth Amendment', slug: 'amendment-17', passed: 'May 13, 1912', ratified: 'Apr 8, 1913' },
    { number: 'XVIII', title: 'Eighteenth Amendment', slug: 'amendment-18', passed: 'Dec 18, 1917', ratified: 'Jan 16, 1919' },
    { number: 'XIX', title: 'Nineteenth Amendment', slug: 'amendment-19', passed: 'Jun 4, 1919', ratified: 'Aug 18, 1920' },
    { number: 'XX', title: 'Twentieth Amendment', slug: 'amendment-20', passed: 'Mar 2, 1932', ratified: 'Jan 23, 1933' },
    { number: 'XXI', title: 'Twenty-First Amendment', slug: 'amendment-21', passed: 'Feb 20, 1933', ratified: 'Dec 5, 1933' },
    { number: 'XXII', title: 'Twenty-Second Amendment', slug: 'amendment-22', passed: 'Mar 21, 1947', ratified: 'Feb 27, 1951' },
    { number: 'XXIII', title: 'Twenty-Third Amendment', slug: 'amendment-23', passed: 'Jun 16, 1960', ratified: 'Mar 29, 1961' },
    { number: 'XXIV', title: 'Twenty-Fourth Amendment', slug: 'amendment-24', passed: 'Aug 27, 1962', ratified: 'Jan 23, 1964' },
    { number: 'XXV', title: 'Twenty-Fifth Amendment', slug: 'amendment-25', passed: 'Jul 6, 1965', ratified: 'Feb 10, 1967' },
    { number: 'XXVI', title: 'Twenty-Sixth Amendment', slug: 'amendment-26', passed: 'Mar 23, 1971', ratified: 'Jul 1, 1971' },
    { number: 'XXVII', title: 'Twenty-Seventh Amendment', slug: 'amendment-27', passed: 'Sept 25, 1789', ratified: 'May 7, 1992' },
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
                  <h3 className="text-lg font-semibold text-[#0F2C47] mb-3">
                    {amendment.title}
                  </h3>
                  <div className="text-xs text-gray-600">
                    <p>Passed: {amendment.passed}</p>
                    <p>Ratified: {amendment.ratified}</p>
                  </div>
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
                  <h3 className="text-sm font-semibold text-[#0F2C47] mb-3">
                    {amendment.title}
                  </h3>
                  <div className="text-xs text-gray-600">
                    <p>Passed: {amendment.passed}</p>
                    <p>Ratified: {amendment.ratified}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
