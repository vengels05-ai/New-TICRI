import Link from 'next/link';

export default function ImmigrationTimelinePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/acts" className="inline-block text-blue-200 hover:text-white mb-4 transition-colors">
              ← Back to Acts
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Immigration Timeline
            </h1>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-blue-300 h-full"></div>
            <div className="space-y-12">
              <div key="0" className={`relative flex items-start ${0 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  1986
                </div>
                <div className={`ml-24 md:ml-0 ${0 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Immigration Reform and Control Act (IRCA, 1986)</h3>
                    <p className="text-gray-700">- Legalized approximately 3 million undocumented immigrants meeting residency and work criteria.   - Prohibited employers from knowingly hiring unauthorized workers.   - Introduced the I-9 employment verification system, later expanded into E-Verify.   ---</p>
                  </div>
                </div>
              </div>
              <div key="1" className={`relative flex items-start ${1 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  1996
                </div>
                <div className={`ml-24 md:ml-0 ${1 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Illegal Immigration Reform and Immigrant Responsibility Act (IIRIRA, 1996)</h3>
                    <p className="text-gray-700">- Expanded deportation/removal grounds and introduced expedited removal procedures.   - Imposed 3-year, 10-year, and permanent reentry bars for unlawful presence.   - Created the 287(g) program, allowing state and local law enforcement to enforce immigration laws.   - Mandated detention </p>
                  </div>
                </div>
              </div>
              <div key="2" className={`relative flex items-start ${2 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  ????
                </div>
                <div className={`ml-24 md:ml-0 ${2 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Why It Matters Today</h3>
                    <p className="text-gray-700">These laws:   - Define the core structure of U.S. immigration enforcement.   - Balance legalization programs with heavy sanctions and restrictions.   - Remain central to debates over border security, DACA, asylum, and immigration reform.   ---</p>
                  </div>
                </div>
              </div>
              <div key="3" className={`relative flex items-start ${3 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  ????
                </div>
                <div className={`ml-24 md:ml-0 ${3 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Official Sources</h3>
                    <p className="text-gray-700">- [8 U.S.C. – Immigration and Nationality Act](https://uscode.house.gov/view.xhtml?path=/prelim@title8&amp;edition=prelim)   - [Congress.gov – IRCA 1986](https://www.congress.gov/bill/99th-congress/house-bill/3810)   - [Congress.gov – IIRIRA 1996](https://www.congress.gov/bill/104th-congress/house-bill/</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
