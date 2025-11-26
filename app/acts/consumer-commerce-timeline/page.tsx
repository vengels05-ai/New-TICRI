import Link from 'next/link';

export default function ConsumerCommerceTimelinePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/acts" className="inline-block text-blue-200 hover:text-white mb-4 transition-colors">
              ← Back to Acts
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Consumer &amp; Commerce Timeline
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
                  1890
                </div>
                <div className={`ml-24 md:ml-0 ${0 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Sherman Antitrust Act (1890)</h3>
                    <p className="text-gray-700">- First federal law prohibiting monopolies and restraints of trade.   - Foundation of U.S. antitrust enforcement.   ---</p>
                  </div>
                </div>
              </div>
              <div key="1" className={`relative flex items-start ${1 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  1914
                </div>
                <div className={`ml-24 md:ml-0 ${1 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Clayton Antitrust Act (1914)</h3>
                    <p className="text-gray-700">- Strengthened antitrust law by prohibiting specific anti-competitive practices like price discrimination and exclusive contracts.   - Allowed private lawsuits for triple damages.   ---</p>
                  </div>
                </div>
              </div>
              <div key="2" className={`relative flex items-start ${2 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  1914
                </div>
                <div className={`ml-24 md:ml-0 ${2 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Federal Trade Commission Act (1914)</h3>
                    <p className="text-gray-700">- Created the FTC to prevent “unfair methods of competition” and deceptive practices.   - Still the core law for consumer protection and competition enforcement.   ---</p>
                  </div>
                </div>
              </div>
              <div key="3" className={`relative flex items-start ${3 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  1968
                </div>
                <div className={`ml-24 md:ml-0 ${3 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Truth in Lending Act (TILA, 1968)</h3>
                    <p className="text-gray-700">- Required lenders to clearly disclose loan terms, APR, and borrower rights.   - Codified at 15 U.S.C. § 1601 et seq.   ---</p>
                  </div>
                </div>
              </div>
              <div key="4" className={`relative flex items-start ${4 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  1970
                </div>
                <div className={`ml-24 md:ml-0 ${4 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Fair Credit Reporting Act (FCRA, 1970)</h3>
                    <p className="text-gray-700">- Regulated collection and use of consumer credit information.   - Gave consumers rights to access and correct credit reports.   ---</p>
                  </div>
                </div>
              </div>
              <div key="5" className={`relative flex items-start ${5 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  1977
                </div>
                <div className={`ml-24 md:ml-0 ${5 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Fair Debt Collection Practices Act (FDCPA, 1977)</h3>
                    <p className="text-gray-700">- Restricted abusive or deceptive practices by debt collectors.   - Still one of the strongest consumer financial protection laws.   ---</p>
                  </div>
                </div>
              </div>
              <div key="6" className={`relative flex items-start ${6 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  1978
                </div>
                <div className={`ml-24 md:ml-0 ${6 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Electronic Fund Transfer Act (EFTA, 1978)</h3>
                    <p className="text-gray-700">- Provided consumer protections for ATM, debit card, and electronic transfers.   - Codified at 15 U.S.C. § 1693 et seq.   ---</p>
                  </div>
                </div>
              </div>
              <div key="7" className={`relative flex items-start ${7 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  1978
                </div>
                <div className={`ml-24 md:ml-0 ${7 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Bankruptcy Reform Act (1978)</h3>
                    <p className="text-gray-700">- Overhauled bankruptcy law, creating the modern Bankruptcy Code.   - Balanced debtor relief with creditor rights.   ---</p>
                  </div>
                </div>
              </div>
              <div key="8" className={`relative flex items-start ${8 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  1972
                </div>
                <div className={`ml-24 md:ml-0 ${8 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Consumer Product Safety Act (1972)</h3>
                    <p className="text-gray-700">- Created the Consumer Product Safety Commission (CPSC).   - Authorized regulation and recalls of hazardous consumer products.   ---</p>
                  </div>
                </div>
              </div>
              <div key="9" className={`relative flex items-start ${9 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  ????
                </div>
                <div className={`ml-24 md:ml-0 ${9 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Recent Updates &amp; Continuing Impact</h3>
                    <p className="text-gray-700">- Many of these laws were later folded under the Consumer Financial Protection Bureau (CFPB) via the Dodd–Frank Act (2010).   - Antitrust law is being reexamined in the digital economy era (Big Tech cases).   - Credit reporting, debt collection, and consumer data use remain active areas of litig</p>
                  </div>
                </div>
              </div>
              <div key="10" className={`relative flex items-start ${10 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  ????
                </div>
                <div className={`ml-24 md:ml-0 ${10 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Why It Matters Today</h3>
                    <p className="text-gray-700">These acts:   - Ensure fair competition in markets.   - Protect consumers from fraud, deception, and abuse.   - Regulate the flow of credit, debt, and commerce that underpins the U.S. economy.   ---</p>
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
                    <p className="text-gray-700">- [FTC – Antitrust Laws](https://www.ftc.gov/advice-guidance/competition-guidance/guide-antitrust-laws/antitrust-laws)   - [Consumer Financial Protection Bureau – Consumer Laws](https://www.consumerfinance.gov/rules-policy/regulations/)   - [U.S. Code – Title 15 (Commerce and Trade)](https://uscode.</p>
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
