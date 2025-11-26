import Link from 'next/link';

export default function ArticleVII() {
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
          <h1 className="text-4xl font-bold mb-2">Article VII</h1>
          <p className="text-xl">Ratification</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Article VII established the requirements for the Constitution to take effect, 
            requiring ratification by nine of the thirteen original states.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Ratification Requirement</h3>
            <p className="text-gray-700 mb-4">
              The Constitution would take effect upon ratification by conventions in nine states 
              (out of the original thirteen).
            </p>
            <p className="text-gray-700 mb-4">
              This was a departure from the Articles of Confederation, which required unanimous 
              consent for amendments.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Historical Context</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>The Constitution was signed on September 17, 1787</li>
              <li>Delaware was the first state to ratify (December 7, 1787)</li>
              <li>New Hampshire was the ninth state to ratify (June 21, 1788), making the Constitution effective</li>
              <li>Virginia and New York ratified shortly after, making the new government viable</li>
              <li>North Carolina and Rhode Island ratified after the new government began operating</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Significance</h3>
            <p className="text-gray-700">
              Article VII represented a bold step in establishing a new form of government. By 
              requiring only nine states (rather than all thirteen), the Framers acknowledged the 
              practical difficulty of unanimous agreement while still requiring substantial support 
              for this fundamental change in governance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
