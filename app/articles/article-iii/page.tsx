import Link from 'next/link';

export default function ArticleIII() {
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
          <h1 className="text-4xl font-bold mb-2">Article III</h1>
          <p className="text-xl">The Judicial Branch</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Article III establishes the federal judiciary, including the Supreme Court and 
            lower federal courts created by Congress. It defines judicial power, jurisdiction, 
            and the crime of treason.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Section 1 - Federal Courts</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Judicial power vested in the Supreme Court and inferior courts established by Congress</li>
              <li>Judges serve during "good behavior" (lifetime appointments)</li>
              <li>Judges' compensation cannot be reduced during their service</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Section 2 - Jurisdiction</h3>
            <p className="text-gray-700 mb-3 font-semibold">Federal courts have jurisdiction over:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Cases arising under the Constitution, federal laws, and treaties</li>
              <li>Cases affecting ambassadors and public ministers</li>
              <li>Admiralty and maritime cases</li>
              <li>Controversies involving the United States</li>
              <li>Disputes between states</li>
              <li>Disputes between citizens of different states</li>
              <li>Cases involving foreign nations or citizens</li>
            </ul>
            <p className="text-gray-700 mt-4">
              <strong>Supreme Court Original Jurisdiction:</strong> Cases involving ambassadors and 
              states. In all other cases, the Supreme Court has appellate jurisdiction.
            </p>
            <p className="text-gray-700 mt-4">
              <strong>Trial by Jury:</strong> All crimes (except impeachment) must be tried by jury 
              in the state where committed.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Section 3 - Treason</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Treason defined as levying war against the U.S. or giving aid and comfort to enemies</li>
              <li>Conviction requires testimony of two witnesses or confession in open court</li>
              <li>Congress sets punishment for treason</li>
              <li>Punishment cannot include "corruption of blood" (punishing family members)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
