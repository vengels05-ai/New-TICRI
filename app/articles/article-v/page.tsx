import Link from 'next/link';

export default function ArticleV() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          href="/articles" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          ← Back to Articles
        </Link>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg mb-8">
          <h1 className="text-4xl font-bold mb-2">Article V</h1>
          <p className="text-xl">The Amendment Process</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Article V establishes the process for amending the Constitution, providing two methods 
            for proposing amendments and two methods for ratification.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Proposing Amendments</h3>
            <p className="text-gray-700 mb-3">Amendments may be proposed by:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Two-thirds vote</strong> of both houses of Congress, OR</li>
              <li><strong>National convention</strong> called by Congress at the request of two-thirds of state legislatures</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Ratifying Amendments</h3>
            <p className="text-gray-700 mb-3">Amendments must be ratified by:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Three-fourths of state legislatures</strong>, OR</li>
              <li><strong>Three-fourths of state ratifying conventions</strong></li>
            </ul>
            <p className="text-gray-700 mt-4">
              Congress determines which ratification method will be used.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Limitations</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>No state can be deprived of equal representation in the Senate without its consent</li>
              <li>Original text protected slave trade until 1808 (no longer relevant)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
