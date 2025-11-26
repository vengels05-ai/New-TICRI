import Link from 'next/link';

export default function HomelandSecurityActPage() {
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
                Homeland Security Act
              </h1>
              <span className="bg-white text-blue-900 px-4 py-2 rounded-full font-bold text-xl">
                2002
              </span>
            </div>
            <p className="text-xl text-gray-100">
              6 U.S.C. § 101 et seq.
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
                      <p className="text-gray-700 leading-relaxed mb-3"><a href="https://uscode.house.gov/view.xhtml?path=/prelim@title6/chapter1&edition=prelim" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">Read the statute (6 U.S.C. § 101 et seq.)</a></p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📌</span> Why It Was Done
          </h2>
                      <p className="text-gray-700 leading-relaxed mb-3">Passed in the aftermath of <strong>September 11, 2001</strong>, the Act created the <strong>Department of Homeland Security (DHS)</strong> to coordinate national efforts against terrorism, improve border security, and streamline emergency response.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📌</span> Pre-existing Law or Constitutional Rights
          </h2>
                      <p className="text-gray-700 leading-relaxed mb-3">Before 2002, counterterrorism and homeland security functions were spread across multiple agencies (FBI, INS, Customs, FEMA, Coast Guard). The Act consolidated them into a single Cabinet-level department.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📌</span> Overreach or Proper Role?
          </h2>
                      <p className="text-gray-700 leading-relaxed mb-3">Supporters argue it strengthened national security and coordination. Critics claim it centralized too much power, reduced transparency, and created new civil liberties concerns, particularly regarding immigration enforcement and surveillance.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📌</span> Who or What It Controls
          </h2>
          <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>DHS and its component agencies</strong> (CBP, ICE, TSA, FEMA, Secret Service, Coast Guard)  </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>State and local governments</strong> via grants and coordination programs  </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>Private sector partners</strong> in critical infrastructure protection</div>
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
                <div><strong>6 U.S.C. § 111</strong> (establishment of DHS)  </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>6 U.S.C. § 202</strong> (responsibilities of DHS)  </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>6 U.S.C. § 321d</strong> (emergency preparedness and response)  </div>
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
                <div>DHS’s role in <strong>immigration enforcement</strong> remains politically divisive  </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div>Criticism over use of DHS forces in domestic protests (2020)  </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div>Ongoing debates about balance between <strong>counterterrorism, cybersecurity, and civil liberties</strong></div>
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
                <div><a href="https://uscode.house.gov/view.xhtml?path=/prelim@title6/chapter1&edition=prelim" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">U.S. Code – Title 6, Chapter 1</a>  </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><a href="https://www.dhs.gov/about-dhs" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">Department of Homeland Security – About DHS</a></div>
              </li>
          </ul>
        </section>

      </div>
    </div>
  );
}
