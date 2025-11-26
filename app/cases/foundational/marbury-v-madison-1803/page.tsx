export default function MarburyVMadison1803Page() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-block bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-4">
              1803 • Foundational
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Marbury v. Madison
            </h1>
            <p className="text-xl text-gray-300">
              5 U.S. (1 Cranch) 137 (1803)
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
              href="https://tile.loc.gov/storage-services/service/ll/usrep/usrep005/usrep005137/usrep005137.pdf" 
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
            <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: `William Marbury asked the Supreme Court to order Secretary of State James Madison to deliver Marbury’s judicial commission. Chief Justice John Marshall held that Marbury had a right to the commission, but the statute giving the Supreme Court <strong>original jurisdiction</strong> to issue the writ went beyond Article III. Because that part of the statute conflicted with the Constitution, it was <strong>void</strong>.` }} />
          </div>

          {/* Why It Mattered */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-800 pb-2">
              ⚖️ Why It Mattered
            </h2>
            <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: `This case <strong>cemented judicial review</strong>: federal courts have the duty and power to refuse to enforce laws that violate the Constitution. It defined the Court’s role as the final expositor of what the law is.` }} />
          </div>

          {/* What It Provided or Took Away */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-green-600 pb-2">
              ✅ What It Provided or Took Away
            </h2>
            
            <div className="space-y-4">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                <h3 className="font-bold text-gray-900 mb-2">✅ Provided:</h3>
                <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: `A clear statement that courts can <strong>invalidate unconstitutional laws</strong> and must follow the Constitution first.` }} />
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                <h3 className="font-bold text-gray-900 mb-2">❌ Took Away:</h3>
                <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: `Any idea that Congress can <strong>expand the Supreme Court’s original jurisdiction</strong> beyond what Article III allows.` }} />
              </div>
            </div>
          </div>

          {/* Overreach or Proper Role */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2">
              🤔 Overreach or Proper Role?
            </h2>
            <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: `Bold, but within the Court’s job description. Marshall rooted the ruling in constitutional text and structure (Article III supremacy and the judicial oath). Most scholars view it as the Court doing <strong>exactly</strong> what it’s supposed to do—say what the law is when a statute and the Constitution conflict.` }} />
          </div>

          {/* Plain-English Impact Today */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-lg shadow-lg p-8 mb-6">
            <h2 className="text-3xl font-bold mb-6 border-b-2 border-white pb-2">
              💡 Plain-English Impact Today
            </h2>
            <p className="text-gray-100 leading-relaxed" dangerouslySetInnerHTML={{ __html: `If a law clashes with the Constitution, <strong>the Constitution wins</strong>. That’s why modern rights cases—free speech, due process, gun rights, searches, elections—are all litigated with courts checking statutes and government actions against the Constitution.` }} />
          </div>

          {/* Fast Facts */}
          <div className="bg-gray-50 rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">⚡ Fast Facts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600 font-semibold">Court:</p>
                <p className="text-gray-900">U.S. Supreme Court</p>
              </div>
              <div>
                <p className="text-gray-600 font-semibold">Author:</p>
                <p className="text-gray-900">Chief Justice John Marshall</p>
              </div>
              <div>
                <p className="text-gray-600 font-semibold">Year:</p>
                <p className="text-gray-900">1803</p>
              </div>
              <div>
                <p className="text-gray-600 font-semibold">Key Clauses:</p>
                <p className="text-gray-900">Article III (jurisdiction), Supremacy of the Constitution</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
