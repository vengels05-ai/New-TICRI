import Link from 'next/link';

export default function UniformedServicesEmploymentAndReemploymentRightsActUserraPage() {
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
                Uniformed Services Employment and Reemployment Rights Act (USERRA)
              </h1>
              <span className="bg-white text-blue-900 px-4 py-2 rounded-full font-bold text-xl">
                1994
              </span>
            </div>
            <p className="text-xl text-gray-100">
              38 U.S.C. §§ 4301–4335; 20 C.F.R. part 1002
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <section className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📌</span> Link to the Text of the Act / Regs
          </h2>
          <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>U.S. Code (38 U.S.C. §§ 4301–4335):</strong>  </div>
              </li>
            <p className="text-gray-700 leading-relaxed mb-3">  <a href="https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title38-section4301&num=0&edition=prelim" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">Read the statute</a>  </p>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>eCFR (20 C.F.R. part 1002):</strong>  </div>
              </li>
            <p className="text-gray-700 leading-relaxed mb-3">  <a href="https://www.ecfr.gov/current/title-20/chapter-IX/part-1002" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">Read the regulations</a>  </p>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>DOL VETS USERRA resources:</strong>  </div>
              </li>
            <p className="text-gray-700 leading-relaxed mb-3">  <a href="https://www.dol.gov/agencies/vets/programs/userra" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">Official guidance</a></p>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📌</span> Why It Was Done
          </h2>
                      <p className="text-gray-700 leading-relaxed mb-3">To ensure people who leave civilian jobs for uniformed service can return to work with the <strong>same status, pay, and seniority</strong> they would have attained, and to prohibit discrimination or retaliation based on service obligations.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📌</span> Pre-existing Law or Constitutional Rights
          </h2>
                      <p className="text-gray-700 leading-relaxed mb-3">USERRA modernized and strengthened earlier reemployment laws (e.g., WWII/Korea-era statutes and the <strong>Veterans’ Reemployment Rights Act (VRRA) of 1974</strong>), clarifying benefits, seniority, and anti-discrimination protections.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📌</span> Overreach or Proper Role?
          </h2>
                      <p className="text-gray-700 leading-relaxed mb-3">Courts generally view USERRA as <strong>remedial</strong> and interpret it broadly for servicemembers. Employers sometimes argue administrative and staffing burdens in complex or long deployments, but the statute’s protections typically prevail.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📌</span> Who or What It Controls
          </h2>
          <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>Private and public employers</strong> (including state/local governments)  </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>Labor organizations</strong> (union membership/benefits)  </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>Pension/benefit plans</strong> (seniority, accruals, health coverage continuation)</div>
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
                <div><strong>38 U.S.C. §§ 4301–4335</strong> (purpose, rights, enforcement, remedies)  </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>20 C.F.R. part 1002</strong> (DOL regulations interpreting USERRA)</div>
              </li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📌</span> Recent Changes or Live Controversies
          </h2>
                      <p className="text-gray-700 leading-relaxed mb-3">Active litigation continues over <strong>reemployment positions, seniority/benefit accruals, differential pay,</strong> and <strong>what counts as discrimination or retaliation</strong>. Agencies regularly issue guidance and FAQs refining compliance expectations.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📌</span> Official Sources
          </h2>
          <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><a href="https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title38-section4301&num=0&edition=prelim" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">U.S. Code (USERRA)</a>  </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><a href="https://www.ecfr.gov/current/title-20/chapter-IX/part-1002" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">eCFR – 20 C.F.R. part 1002</a>  </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><a href="https://www.dol.gov/agencies/vets/programs/userra" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">DOL VETS – USERRA</a></div>
              </li>
          </ul>
        </section>

      </div>
    </div>
  );
}
