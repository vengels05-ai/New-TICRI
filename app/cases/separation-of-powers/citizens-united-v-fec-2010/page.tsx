export default function CitizensUnitedVFec2010Page() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-block bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-4">
              2010 • Separation of Powers
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Citizens United v. Federal Election Commission
            </h1>
            <p className="text-xl text-gray-300">
              558 U.S. 310 (2010)
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
              href="https://tile.loc.gov/storage-services/service/ll/usrep/usrep558/usrep558310/usrep558310.pdf" 
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
            <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: `Citizens United, a nonprofit, produced a film critical of Hillary Clinton during the 2008 Democratic primaries. The Bipartisan Campaign Reform Act (BCRA) restricted such electioneering communications by corporations and unions. The Supreme Court ruled 5–4 that these restrictions violated the <strong>First Amendment</strong>, holding that corporations and unions have the same free speech rights as individuals in the context of political spending.` }} />
          </div>

          {/* Why It Mattered */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-800 pb-2">
              ⚖️ Why It Mattered
            </h2>
            <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: `This case dramatically changed campaign finance law, allowing unlimited independent political spending by corporations, unions, and outside groups. It led to the rise of <strong>Super PACs</strong>.` }} />
          </div>

          {/* What It Provided or Took Away */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-green-600 pb-2">
              ✅ What It Provided or Took Away
            </h2>
            
            <div className="space-y-4">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                <h3 className="font-bold text-gray-900 mb-2">✅ Provided:</h3>
                <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: `Robust First Amendment protection for political spending by corporations and unions.` }} />
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                <h3 className="font-bold text-gray-900 mb-2">❌ Took Away:</h3>
                <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: `Limits on independent expenditures near elections.` }} />
              </div>
            </div>
          </div>

          {/* Overreach or Proper Role */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2">
              🤔 Overreach or Proper Role?
            </h2>
            <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: `Supporters say the Court protected free expression; critics argue it unleashed moneyed interests into politics and undermined electoral fairness.` }} />
          </div>

          {/* Plain-English Impact Today */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-lg shadow-lg p-8 mb-6">
            <h2 className="text-3xl font-bold mb-6 border-b-2 border-white pb-2">
              💡 Plain-English Impact Today
            </h2>
            <p className="text-gray-100 leading-relaxed" dangerouslySetInnerHTML={{ __html: `Corporations and unions can spend unlimited money on independent political ads. This decision reshaped U.S. elections by vastly increasing outside spending.` }} />
          </div>

          {/* Fast Facts */}
          

        </div>
      </section>
    </div>
  );
}
