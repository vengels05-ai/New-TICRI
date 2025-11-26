export default function CivilRightsCases1883Page() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-block bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-4">
              1883 • Case
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Civil Rights Cases
            </h1>
            <p className="text-xl text-gray-300">
              109 U.S. 3 (1883)
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
              href="https://tile.loc.gov/storage-services/service/ll/usrep/usrep109/usrep109003/usrep109003.pdf" 
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
            <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: `The Supreme Court struck down provisions of the Civil Rights Act of 1875, which had outlawed racial discrimination in public accommodations like inns, theaters, and public transport. The Court held that the 14th Amendment only restricts <strong>state action</strong>, not discrimination by private individuals or businesses.` }} />
          </div>

          {/* Why It Mattered */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-800 pb-2">
              ⚖️ Why It Mattered
            </h2>
            <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: `This ruling gutted Reconstruction-era civil rights protections and allowed <strong>Jim Crow segregation</strong> to flourish unchecked for decades.` }} />
          </div>

          {/* What It Provided or Took Away */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-green-600 pb-2">
              ✅ What It Provided or Took Away
            </h2>
            
            <div className="space-y-4">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                <h3 className="font-bold text-gray-900 mb-2">✅ Provided:</h3>
                <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: `States near-complete authority to regulate (or ignore) racial segregation and discrimination.` }} />
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                <h3 className="font-bold text-gray-900 mb-2">❌ Took Away:</h3>
                <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: `Federal power to ban racial discrimination by private businesses.  
- <strong>Provided:</strong> States near-complete authority to regulate (or ignore) racial segregation and discrimination.` }} />
              </div>
            </div>
          </div>

          {/* Overreach or Proper Role */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2">
              🤔 Overreach or Proper Role?
            </h2>
            <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: `It was a narrow and formalistic interpretation that ignored the Amendment’s purpose. Widely seen as judicial failure to enforce civil rights.` }} />
          </div>

          {/* Plain-English Impact Today */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-lg shadow-lg p-8 mb-6">
            <h2 className="text-3xl font-bold mb-6 border-b-2 border-white pb-2">
              💡 Plain-English Impact Today
            </h2>
            <p className="text-gray-100 leading-relaxed" dangerouslySetInnerHTML={{ __html: `The decision left civil rights largely unprotected until the Civil Rights Act of 1964, passed under Congress’s Commerce Clause powers, finally outlawed segregation in public accommodations.` }} />
          </div>

          {/* Fast Facts */}
          

        </div>
      </section>
    </div>
  );
}
