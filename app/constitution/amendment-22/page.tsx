import Link from 'next/link';

export default function Amendment22() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          href="/constitution" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          ← Back to Constitution
        </Link>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg mb-8">
          <h1 className="text-4xl font-bold mb-2">Amendment XXII</h1>
          <p className="text-xl">Twenty-Second Amendment</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Text</h2>
          <div className="prose prose-lg max-w-none text-gray-700 italic">
            <p className="mb-4">
              <strong>Section 1.</strong> "No person shall be elected to the office of the President more than twice, and no person 
              who has held the office of President, or acted as President, for more than two years of a term to which some other 
              person was elected President shall be elected to the office of President more than once. But this Article shall not 
              apply to any person holding the office of President when this Article was proposed by Congress, and shall not prevent 
              any person who may be holding the office of President, or acting as President, during the term within which this Article 
              becomes operative from holding the office of President or acting as President during the remainder of such term."
            </p>
            <p>
              <strong>Section 2.</strong> "This article shall be inoperative unless it shall have been ratified as an amendment to 
              the Constitution by the legislatures of three-fourths of the several States within seven years from the date of its 
              submission to the States by the Congress."
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Plain English</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Limits Presidents to two elections (with a partial-term rule).
          </p>
        </div>
      </div>
    </div>
  );
}
