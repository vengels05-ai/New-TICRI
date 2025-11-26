import Link from 'next/link';

export default function FamilyAndMedicalLeaveActFmlaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/acts" className="inline-block text-blue-200 hover:text-white mb-4 transition-colors">
              ← Back to Acts
            </Link>
            <div className="flex items-center justify-center gap-4 mb-4 flex-wrap">
              <h1 className="text-4xl md:text-5xl font-bold">
                Family and Medical Leave Act (FMLA)
              </h1>
              <span className="bg-white text-blue-900 px-4 py-2 rounded-full font-bold text-xl">
                1993
              </span>
            </div>
            <p className="text-xl text-gray-100">
              29 U.S.C. § 2601 et seq.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <section className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📌</span> Link to the Text of the Act
          </h2>
                      <p className="text-gray-700 leading-relaxed mb-3"><a href="https://uscode.house.gov/view.xhtml?path=/prelim@title29/chapter28&edition=prelim" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">Read the statute (29 U.S.C. § 2601 et seq.)</a></p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📌</span> Why It Was Done
          </h2>
                      <p className="text-gray-700 leading-relaxed mb-3">Congress enacted FMLA to provide eligible employees with job-protected, unpaid leave for family and medical reasons, recognizing the need to balance work demands with family responsibilities.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📌</span> Pre-existing Law or Constitutional Rights
          </h2>
                      <p className="text-gray-700 leading-relaxed mb-3">Before FMLA, there was no federal requirement for family or medical leave. Some states and employers had policies, but coverage was inconsistent and limited.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📌</span> Overreach or Proper Role?
          </h2>
                      <p className="text-gray-700 leading-relaxed mb-3">Supporters view it as vital workplace protection. Critics argue it burdens small and mid-sized businesses and creates staffing challenges. Subsequent debates have centered on whether to expand it into paid leave.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📌</span> Who or What It Controls
          </h2>
          <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>Employers</strong> with 50+ employees  </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>Federal, state, and local governments</strong> as employers  </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>Employees</strong> (eligibility requires 12 months of work and 1,250 hours in the preceding year)</div>
              </li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📌</span> Key Sections / Citations
          </h2>
          <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>29 U.S.C. § 2612</strong> (entitlement to 12 weeks of leave)  </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>29 U.S.C. § 2614</strong> (job restoration rights)  </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>29 U.S.C. § 2615</strong> (prohibitions on interference/retaliation)</div>
              </li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📌</span> Recent Changes or Live Controversies
          </h2>
          <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div>COVID-19 emergency laws temporarily expanded FMLA provisions in 2020  </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div>Ongoing debate over creating a <strong>paid family leave program</strong>  </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div>States like California and New York have enacted their own paid leave laws</div>
              </li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📌</span> Official Sources
          </h2>
          <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><a href="https://uscode.house.gov/view.xhtml?path=/prelim@title29/chapter28&edition=prelim" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">U.S. Code – Title 29, Chapter 28</a>  </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><a href="https://www.dol.gov/agencies/whd/fmla" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">U.S. Department of Labor – FMLA</a></div>
              </li>
          </ul>
        </section>

      </div>
    </div>
  );
}
