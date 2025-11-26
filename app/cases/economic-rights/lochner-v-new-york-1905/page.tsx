export default function LochnerVNewYork1905Page() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-block bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-4">
              1905 • Case
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Lochner v. New York
            </h1>
            <p className="text-xl text-gray-300">
              198 U.S. 45 (1905)
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Link to Opinion */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-2">📄 Read the Actual Opinion</h3>
            <a 
              href="https://tile.loc.gov/storage-services/service/ll/usrep/usrep198/usrep198045/usrep198045.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              U.S. Reports opinion (PDF) →
            </a>
          </div>

          {/* Summary */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-800 pb-2">
              📋 Summary of the Opinion
            </h2>
            <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: `New York passed a law limiting bakers to 60 hours of work per week. Joseph Lochner challenged the law, and the Supreme Court struck it down, ruling that it interfered with the “liberty of contract” protected by the 14th Amendment’s Due Process Clause.` }} />
          </div>

          {/* Why It Mattered */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-800 pb-2">
              ⚖️ Why It Mattered
            </h2>
            <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: `This case became the hallmark of the <strong>Lochner era</strong>, when the Court frequently invalidated social and economic regulations in the name of economic liberty.` }} />
          </div>

          {/* What It Provided or Took Away */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-green-600 pb-2">
              ✅ What It Provided or Took Away
            </h2>
            
            <div className="space-y-4">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                <h3 className="font-bold text-gray-900 mb-2">✅ Provided:</h3>
                <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: `Strong judicial protection of freedom of contract.` }} />
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                <h3 className="font-bold text-gray-900 mb-2">❌ Took Away:</h3>
                <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: `States’ ability to impose many workplace health and safety regulations.` }} />
              </div>
            </div>
          </div>

          {/* Overreach or Proper Role */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2">
              🤔 Overreach or Proper Role?
            </h2>
            <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: `Most scholars view this as <strong>judicial overreach</strong>, with the Court imposing its own economic philosophy instead of deferring to legislatures.` }} />
          </div>

          {/* Plain-English Impact Today */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-lg shadow-lg p-8 mb-6">
            <h2 className="text-3xl font-bold mb-6 border-b-2 border-white pb-2">
              💡 Plain-English Impact Today
            </h2>
            <p className="text-gray-100 leading-relaxed" dangerouslySetInnerHTML={{ __html: `The Lochner era ended in the 1930s, but the case is still invoked in debates over judicial activism and economic regulation.` }} />
          </div>

          {/* Fast Facts */}
          

        </div>
      </section>
    </div>
  );
}
