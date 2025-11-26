import Link from 'next/link';

export default function LaborEmploymentRightsTimelinePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/acts" className="inline-block text-blue-200 hover:text-white mb-4 transition-colors">
              ← Back to Acts
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Labor &amp; Employment Rights Timeline
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
                  1938
                </div>
                <div className={`ml-24 md:ml-0 ${0 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Fair Labor Standards Act (FLSA, 1938)</h3>
                    <p className="text-gray-700">- Established the minimum wage, overtime pay, and child labor protections.   - Codified at 29 U.S.C. § 201 et seq.   - Continues to be amended to adjust wage and hour standards.   ---</p>
                  </div>
                </div>
              </div>
              <div key="1" className={`relative flex items-start ${1 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  1963
                </div>
                <div className={`ml-24 md:ml-0 ${1 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Equal Pay Act (1963)</h3>
                    <p className="text-gray-700">- Amended the FLSA to require equal pay for equal work regardless of sex.   - Foundation for modern pay equity litigation.   ---</p>
                  </div>
                </div>
              </div>
              <div key="2" className={`relative flex items-start ${2 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  1964
                </div>
                <div className={`ml-24 md:ml-0 ${2 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Civil Rights Act of 1964 (Title VII)</h3>
                    <p className="text-gray-700">- Prohibited employment discrimination based on race, color, religion, sex, or national origin.   - Created the Equal Employment Opportunity Commission (EEOC).   ---</p>
                  </div>
                </div>
              </div>
              <div key="3" className={`relative flex items-start ${3 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  1967
                </div>
                <div className={`ml-24 md:ml-0 ${3 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Age Discrimination in Employment Act (ADEA, 1967)</h3>
                    <p className="text-gray-700">- Prohibited discrimination against workers age 40 and over.   - Still a key protection for older employees.   ---</p>
                  </div>
                </div>
              </div>
              <div key="4" className={`relative flex items-start ${4 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  1970
                </div>
                <div className={`ml-24 md:ml-0 ${4 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Occupational Safety and Health Act (OSHA, 1970)</h3>
                    <p className="text-gray-700">- Established the Occupational Safety and Health Administration.   - Required employers to provide workplaces “free from recognized hazards.”   ---</p>
                  </div>
                </div>
              </div>
              <div key="5" className={`relative flex items-start ${5 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  1973
                </div>
                <div className={`ml-24 md:ml-0 ${5 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Rehabilitation Act (1973)</h3>
                    <p className="text-gray-700">- Prohibited discrimination on the basis of disability in federal programs and contractors.   - Precursor to the ADA.   ---</p>
                  </div>
                </div>
              </div>
              <div key="6" className={`relative flex items-start ${6 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  1990
                </div>
                <div className={`ml-24 md:ml-0 ${6 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Americans with Disabilities Act (ADA, 1990; amended 2008)</h3>
                    <p className="text-gray-700">- Prohibited discrimination based on disability in employment, public accommodations, and government services.   - Amended in 2008 to broaden the definition of disability.   ---</p>
                  </div>
                </div>
              </div>
              <div key="7" className={`relative flex items-start ${7 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  1993
                </div>
                <div className={`ml-24 md:ml-0 ${7 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Family and Medical Leave Act (FMLA, 1993)</h3>
                    <p className="text-gray-700">- Guaranteed eligible employees up to 12 weeks unpaid, job-protected leave for family or medical reasons.   - Expanded to include military caregiver leave provisions.   ---</p>
                  </div>
                </div>
              </div>
              <div key="8" className={`relative flex items-start ${8 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  1994
                </div>
                <div className={`ml-24 md:ml-0 ${8 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Uniformed Services Employment and Reemployment Rights Act (USERRA, 1994)</h3>
                    <p className="text-gray-700">- Protects the employment and reemployment rights of servicemembers returning from duty.   - Codified at 38 U.S.C. §§ 4301–4335.   ---</p>
                  </div>
                </div>
              </div>
              <div key="9" className={`relative flex items-start ${9 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  1991
                </div>
                <div className={`ml-24 md:ml-0 ${9 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Civil Rights Act of 1991</h3>
                    <p className="text-gray-700">- Strengthened Title VII protections.   - Allowed jury trials and damages for intentional discrimination.   ---</p>
                  </div>
                </div>
              </div>
              <div key="10" className={`relative flex items-start ${10 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  ????
                </div>
                <div className={`ml-24 md:ml-0 ${10 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Recent Updates &amp; Continuing Impact</h3>
                    <p className="text-gray-700">- Wage, overtime, and leave standards continue to evolve through regulation and litigation.   - Debates continue over paid leave, minimum wage, gig work, and workplace discrimination.   - These laws remain the foundation of worker rights in the U.S.   ---</p>
                  </div>
                </div>
              </div>
              <div key="11" className={`relative flex items-start ${11 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  ????
                </div>
                <div className={`ml-24 md:ml-0 ${11 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Official Sources</h3>
                    <p className="text-gray-700">- [U.S. Department of Labor – Major Laws](https://www.dol.gov/general/aboutdol/majorlaws)   - [U.S. Code – Title 29 (Labor)](https://uscode.house.gov/view.xhtml?path=/prelim@title29&amp;edition=prelim)   - [EEOC – Employment Discrimination Laws](https://www.eeoc.gov/statutes)   - [USERRA – 38 U.S.C. §§ </p>
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
