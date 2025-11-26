import Link from 'next/link';

export default function FederalFoodDrugAndCosmeticActFdcaPage() {
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
                Federal Food, Drug, and Cosmetic Act (FDCA)
              </h1>
              <span className="bg-white text-blue-900 px-4 py-2 rounded-full font-bold text-xl">
                1938
              </span>
            </div>
            <p className="text-xl text-gray-100">
              21 U.S.C. § 301 et seq.
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
                      <p className="text-gray-700 leading-relaxed mb-3"><a href="https://uscode.house.gov/view.xhtml?path=/prelim@title21/chapter9&edition=prelim" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">Read the statute (21 U.S.C. § 301 et seq.)</a></p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📌</span> Why It Was Done
          </h2>
                      <p className="text-gray-700 leading-relaxed mb-3">The FDCA was passed after a public health disaster involving a toxic drug (Elixir Sulfanilamide) killed over 100 people. It gave the <strong>Food and Drug Administration (FDA)</strong> authority to oversee food, drugs, and cosmetics for safety.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📌</span> Pre-existing Law or Constitutional Rights
          </h2>
                      <p className="text-gray-700 leading-relaxed mb-3">The <strong>Pure Food and Drug Act of 1906</strong> provided some regulation but lacked teeth. It did not require pre-market safety approval for drugs. The FDCA created stronger standards.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📌</span> Overreach or Proper Role?
          </h2>
                      <p className="text-gray-700 leading-relaxed mb-3">Supporters argue it established essential consumer protections. Critics say FDA authority has expanded too far, delaying innovation and restricting consumer choice.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📌</span> Who or What It Controls
          </h2>
          <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>Manufacturers of food, drugs, and cosmetics</strong> (must comply with safety and labeling requirements)  </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>FDA</strong> (gains power to approve new drugs and monitor safety)  </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>Consumers</strong> (gain assurance of regulated safety standards)  </div>
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
                <div><strong>21 U.S.C. § 355:</strong> New drug approval requirements  </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>21 U.S.C. § 342:</strong> Adulterated food provisions  </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>21 U.S.C. § 352:</strong> Misbranded drugs and devices  </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>21 U.S.C. § 374:</strong> FDA inspection authority  </div>
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
                <div>Expanded through amendments (e.g., Kefauver–Harris Drug Amendments of 1962 requiring proof of efficacy)  </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div>Continues to evolve with issues like e-cigarettes, dietary supplements, and gene therapies  </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div>Ongoing debates over FDA speed vs. safety in approving drugs and vaccines  </div>
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
                <div><a href="https://uscode.house.gov/view.xhtml?path=/prelim@title21/chapter9&edition=prelim" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">U.S. Code – Title 21, Chapter 9</a>  </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><a href="https://www.fda.gov/regulatory-information/laws-enforced-fda/federal-food-drug-and-cosmetic-act-fdc-act" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">FDA – Laws Enforced by FDA</a>  </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><a href="https://www.fda.gov/about-fda/fda-history/federal-food-drug-and-cosmetic-act-fdc-act" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">History of the FDCA</a></div>
              </li>
          </ul>
        </section>

      </div>
    </div>
  );
}
