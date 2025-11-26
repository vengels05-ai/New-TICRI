import Link from 'next/link';

export default function Amendment27() {
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
          <h1 className="text-4xl font-bold mb-2">Amendment XXVII</h1>
          <p className="text-xl">Twenty-Seventh Amendment</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Text</h2>
          <div className="prose prose-lg max-w-none text-gray-700 italic">
            <p>
              "No law, varying the compensation for the services of the Senators and Representatives, 
              shall take effect, until an election of Representatives shall have intervened."
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Plain English</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Congress can't change its own pay to take effect until after the next House election.
          </p>
        </div>
      </div>
    </div>
  );
}
