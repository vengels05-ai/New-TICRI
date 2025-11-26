import Link from 'next/link';

export default function GoldReserveActPage() {
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
                Gold Reserve Act
              </h1>
              <span className="bg-white text-blue-900 px-4 py-2 rounded-full font-bold text-xl">
                1934
              </span>
            </div>
            <p className="text-xl text-gray-100">
              Pub. L. 73–87; codified at 31 U.S.C. §§ 5116–5118
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
                      <p className="text-gray-700 leading-relaxed mb-3"><a href="https://www.congress.gov/bill/73rd-congress/house-bill/6976" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">Read the statute (31 U.S.C. §§ 5116–5118)</a></p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📌</span> Why It Was Done
          </h2>
                      <p className="text-gray-700 leading-relaxed mb-3">Passed in the aftermath of the <strong>Great Depression</strong> and following the Emergency Banking Act of 1933, this Act transferred ownership of all monetary gold to the U.S. Treasury and gave the federal government control over gold reserves. It also authorized the President to devalue the dollar relative to gold.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📌</span> Pre-existing Law or Constitutional Rights
          </h2>
                      <p className="text-gray-700 leading-relaxed mb-3">Before this Act, citizens could legally own gold coin, bullion, and certificates. The Act made it illegal for private citizens to hold most forms of gold, curtailing property rights and contract enforcement tied to gold clauses.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📌</span> Overreach or Proper Role?
          </h2>
                      <p className="text-gray-700 leading-relaxed mb-3">Supporters claimed it was necessary to stabilize the dollar and end gold hoarding. Critics argued it was one of the most extreme federal seizures of private property, effectively confiscating gold and voiding private contracts.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📌</span> Who or What It Controls
          </h2>
          <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>U.S. Citizens</strong> (forbidden from owning monetary gold, required to turn it over to the Treasury)  </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>Banks</strong> (all gold holdings transferred to U.S. Treasury)  </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>Federal Reserve</strong> (surrendered gold to Treasury, received gold certificates in return)  </div>
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
                <div><strong>31 U.S.C. § 5116:</strong> Treasury control of gold  </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>31 U.S.C. § 5117:</strong> Issuance of gold certificates to the Federal Reserve  </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>31 U.S.C. § 5118:</strong> Nullified gold clauses in contracts  </div>
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
                <div>Private gold ownership was again legalized in <strong>1974</strong> (by President Gerald Ford).  </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div>The Act remains a touchstone in debates over federal monetary power and the constitutionality of currency control.  </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div>Still cited in critiques of the U.S. leaving the <strong>gold standard</strong> (culminating in Nixon’s 1971 suspension of convertibility).  </div>
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
                <div><a href="https://www.congress.gov/bill/73rd-congress/house-bill/6976" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">Congress.gov – Gold Reserve Act 1934</a>  </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><a href="https://uscode.house.gov/view.xhtml?path=/prelim@title31/subtitle4/chapter51&edition=prelim" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">U.S. Code – 31 U.S.C. §§ 5116–5118</a>  </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><a href="https://www.federalreservehistory.org/essays/gold-reserve-act" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">Federal Reserve History – Gold Reserve Act of 1934</a></div>
              </li>
          </ul>
        </section>

      </div>
    </div>
  );
}
