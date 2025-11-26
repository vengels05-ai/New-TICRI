import Link from 'next/link';

export default function CivilRightsActsTimelinePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/acts" className="inline-block text-blue-200 hover:text-white mb-4 transition-colors">
              ← Back to Acts
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Civil Rights Acts Timeline
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
                  1866
                </div>
                <div className={`ml-24 md:ml-0 ${0 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Civil Rights Act of 1866</h3>
                    <p className="text-gray-700">- First U.S. civil rights law, passed after the Civil War.   - Guaranteed citizenship and equal rights regardless of race.   - Codified in 42 U.S.C. § 1981 (contracts and property rights).   ---</p>
                  </div>
                </div>
              </div>
              <div key="1" className={`relative flex items-start ${1 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  1871
                </div>
                <div className={`ml-24 md:ml-0 ${1 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Civil Rights Act of 1871 (Ku Klux Klan Act)</h3>
                    <p className="text-gray-700">- Targeted racial violence and intimidation in the South.   - Created civil remedies against those acting “under color of law” to deprive rights.   - Still forms the basis of 42 U.S.C. § 1983 civil rights lawsuits.   ---</p>
                  </div>
                </div>
              </div>
              <div key="2" className={`relative flex items-start ${2 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  1964
                </div>
                <div className={`ml-24 md:ml-0 ${2 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Civil Rights Act of 1964</h3>
                    <p className="text-gray-700">- Landmark modern civil rights law.   - Prohibited discrimination in employment (Title VII), public accommodations (Title II), and federally funded programs (Title VI).   - Created the EEOC to enforce anti-discrimination law.   ---</p>
                  </div>
                </div>
              </div>
              <div key="3" className={`relative flex items-start ${3 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  1968
                </div>
                <div className={`ml-24 md:ml-0 ${3 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Civil Rights Act of 1968 (Fair Housing Act)</h3>
                    <p className="text-gray-700">- Prohibited housing discrimination based on race, color, religion, or national origin.   - Later amended to include sex (1974), disability (1988), and family status (1988).   ---</p>
                  </div>
                </div>
              </div>
              <div key="4" className={`relative flex items-start ${4 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  1991
                </div>
                <div className={`ml-24 md:ml-0 ${4 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Civil Rights Act of 1991</h3>
                    <p className="text-gray-700">- Strengthened employee rights under Title VII.   - Allowed jury trials and compensatory/punitive damages for intentional discrimination.   - Clarified burden of proof standards in employment discrimination cases.   ---</p>
                  </div>
                </div>
              </div>
              <div key="5" className={`relative flex items-start ${5 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  ????
                </div>
                <div className={`ml-24 md:ml-0 ${5 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Why It Matters Today</h3>
                    <p className="text-gray-700">The Civil Rights Acts collectively:   - Ensure equal access to jobs, housing, and public spaces.   - Provide a legal pathway to sue for discrimination or government overreach.   - Remain central to debates over race, equality, and federal enforcement powers.   ---</p>
                  </div>
                </div>
              </div>
              <div key="6" className={`relative flex items-start ${6 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  ????
                </div>
                <div className={`ml-24 md:ml-0 ${6 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Official Sources</h3>
                    <p className="text-gray-700">- [U.S. Code – 42 U.S.C. §§ 1981, 1983, 2000e et seq.](https://uscode.house.gov/view.xhtml?path=/prelim@title42&amp;edition=prelim)   - [Congress.gov – Civil Rights Act of 1964](https://www.congress.gov/bill/88th-congress/house-bill/7152)   - [Department of Justice – Civil Rights Division](https://www.j</p>
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
