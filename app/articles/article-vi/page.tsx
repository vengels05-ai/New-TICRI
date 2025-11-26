import Link from 'next/link';

export default function ArticleVI() {
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
          <h1 className="text-4xl font-bold mb-2">Article VI</h1>
          <p className="text-xl">Federal Supremacy and Oaths</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Article VI establishes the Constitution as the supreme law of the land and requires 
            government officials to take an oath to support it.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Prior Debts and Obligations</h3>
            <p className="text-gray-700">
              All debts and engagements entered into before the Constitution's adoption remain 
              valid under the new government.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Supremacy Clause</h3>
            <p className="text-gray-700 mb-3">
              The Constitution, federal laws made pursuant to it, and treaties are the 
              <strong> supreme law of the land</strong>.
            </p>
            <p className="text-gray-700">
              State judges are bound by federal law, even if state constitutions or laws conflict. 
              This establishes federal supremacy in cases of conflict between state and federal law.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Oaths of Office</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>All federal and state legislators, executive officers, and judges must take an oath 
                  to support the Constitution</li>
              <li><strong>No religious test</strong> can be required for any federal office</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
