import Link from 'next/link';

export default function ArticleIV() {
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
          <h1 className="text-4xl font-bold mb-2">Article IV</h1>
          <p className="text-xl">Interstate Relations and Federalism</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Article IV addresses the relationships between states and between states and the 
            federal government. It establishes principles of federalism and ensures cooperation 
            among states.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Section 1 - Full Faith and Credit</h3>
            <p className="text-gray-700">
              Each state must give "full faith and credit" to the public acts, records, and 
              judicial proceedings of other states. Congress may regulate how such acts are proven 
              and their legal effect.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Section 2 - State Citizenship and Extradition</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Citizens of each state are entitled to privileges and immunities in all states</li>
              <li>Fugitives from justice must be extradited to the state where the crime was committed</li>
              <li>Escaped slaves must be returned (superseded by 13th Amendment)</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Section 3 - New States and Territories</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Congress may admit new states to the Union</li>
              <li>New states cannot be formed from existing states without consent</li>
              <li>Congress has power to make rules for U.S. territories and property</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Section 4 - Republican Government</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>U.S. guarantees every state a republican form of government</li>
              <li>U.S. will protect states against invasion</li>
              <li>U.S. will protect states against domestic violence upon request</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
