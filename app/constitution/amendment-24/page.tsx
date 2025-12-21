import Link from 'next/link';

export default function Amendment24() {
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
          <h1 className="text-4xl font-bold mb-2">Amendment XXIV</h1>
          <p className="text-xl">Twenty-Fourth Amendment</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Text</h2>
          <div className="prose prose-lg max-w-none text-gray-700 italic">
            <p className="mb-4">
              <strong>Section 1.</strong> "The right of citizens of the United States to vote in any primary or other election for 
              President or Vice President, for electors for President or Vice President, or for Senator or Representative in Congress, 
              shall not be denied or abridged by the United States or any State by reason of failure to pay poll tax or other tax."
            </p>
            <p>
              <strong>Section 2.</strong> "The Congress shall have power to enforce this article by appropriate legislation."
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Plain English</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            You can't be charged a poll tax to vote in federal elections.
          </p>
        </div>
      </div>
    </div>
  );
}
