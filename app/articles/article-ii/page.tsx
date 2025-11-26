import Link from 'next/link';

export default function ArticleII() {
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
          <h1 className="text-4xl font-bold mb-2">Article II</h1>
          <p className="text-xl">The Executive Branch</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Article II establishes the executive branch headed by the President of the United States. 
            It defines the President's powers, duties, qualifications, and the process for election.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Section 1 - The President and Vice President</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Executive power vested in the President</li>
              <li>Four-year term, elected via Electoral College</li>
              <li>Must be a natural-born citizen, at least 35 years old, and a resident for 14 years</li>
              <li>President receives compensation that cannot be changed during their term</li>
              <li>Takes oath to "preserve, protect and defend the Constitution"</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Section 2 - Presidential Powers</h3>
            <p className="text-gray-700 mb-3 font-semibold">The President has power to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Serve as Commander in Chief of the armed forces</li>
              <li>Require written opinions from executive department heads</li>
              <li>Grant reprieves and pardons (except in impeachment cases)</li>
              <li>Make treaties (with two-thirds Senate approval)</li>
              <li>Nominate ambassadors, judges, and federal officers (with Senate consent)</li>
              <li>Fill vacancies during Senate recess (temporary appointments)</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Section 3 - Presidential Duties</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Give Congress information on the State of the Union</li>
              <li>Recommend measures to Congress</li>
              <li>Convene or adjourn Congress in special circumstances</li>
              <li>Receive ambassadors and public ministers</li>
              <li>Ensure laws are faithfully executed</li>
              <li>Commission all federal officers</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Section 4 - Impeachment</h3>
            <p className="text-gray-700">
              The President, Vice President, and all civil officers can be removed from office 
              through impeachment for treason, bribery, or other high crimes and misdemeanors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
