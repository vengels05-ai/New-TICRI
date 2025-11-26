import Link from 'next/link';

export default function FirstStepActPage() {
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
                First Step Act
              </h1>
              <span className="bg-white text-blue-900 px-4 py-2 rounded-full font-bold text-xl">
                2018
              </span>
            </div>
            <p className="text-xl text-gray-100">
              Pub. L. 115–391
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
                      <p className="text-gray-700 leading-relaxed mb-3"><a href="https://www.congress.gov/bill/115th-congress/senate-bill/756" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">Read the statute (Pub. L. 115–391)</a></p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📌</span> Why It Was Done
          </h2>
                      <p className="text-gray-700 leading-relaxed mb-3">The Act was passed to address concerns over <strong>mass incarceration, sentencing disparities, and prison conditions</strong>. It emphasized rehabilitation, reduced certain mandatory minimum sentences, and sought to give nonviolent offenders a fairer chance at reentry.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📌</span> Pre-existing Law or Constitutional Rights
          </h2>
                      <p className="text-gray-700 leading-relaxed mb-3">Before this Act, harsh sentencing laws from the <strong>1980s “War on Drugs” era</strong> disproportionately impacted minority communities. The First Step Act amended prior sentencing laws, expanded programs under the Bureau of Prisons, and applied reforms retroactively.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📌</span> Overreach or Proper Role?
          </h2>
                      <p className="text-gray-700 leading-relaxed mb-3">Supporters argue it was a landmark bipartisan reform that corrected injustices in sentencing and improved prison rehabilitation. Critics say it didn’t go far enough and left systemic mass incarceration issues largely intact.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📌</span> Who or What It Controls
          </h2>
          <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>Federal courts</strong> (sentencing guidelines and retroactive relief)  </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>Federal Bureau of Prisons (BOP)</strong> (rehabilitation programs, earned-time credits)  </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>Inmates</strong> (expanded eligibility for early release and reduced sentences)  </div>
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
                <div><strong>Section 101:</strong> Risk and needs assessment system for inmates.  </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>Section 402–403:</strong> Reduced mandatory minimums for some drug offenses; expanded “safety valve” relief.  </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>Section 404:</strong> Made the <strong>Fair Sentencing Act of 2010</strong> retroactive, reducing crack/powder cocaine disparities.  </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>Section 603:</strong> Expanded compassionate release for elderly and terminally ill prisoners.  </div>
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
                <div>Implementation of earned-time credits has been uneven, with lawsuits over BOP compliance.  </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div>Ongoing debate about whether further reform is needed for violent offenses and mandatory minimums.  </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div>Continues to be a model for bipartisan criminal justice reform discussions.  </div>
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
                <div><a href="https://www.congress.gov/bill/115th-congress/senate-bill/756" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">Congress.gov – First Step Act 2018</a>  </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><a href="https://www.ussc.gov/topic/first-step-act" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">U.S. Sentencing Commission – First Step Act Resources</a>  </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><a href="https://www.justice.gov/criminal/prison-reform/first-step-act" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">Department of Justice – First Step Act Implementation</a></div>
              </li>
          </ul>
        </section>

      </div>
    </div>
  );
}
