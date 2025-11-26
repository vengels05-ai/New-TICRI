import Link from 'next/link';

export default function ArticleI() {
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
          <h1 className="text-4xl font-bold mb-2">Article I</h1>
          <p className="text-xl">The Legislative Branch</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Article I establishes Congress as the legislative branch of the federal government. 
            It creates a bicameral legislature consisting of the Senate and House of Representatives, 
            defines their powers, and sets limitations on both federal and state authority.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Section 1 - Legislative Powers</h3>
            <p className="text-gray-700">All legislative powers are vested in Congress, consisting of the Senate and House of Representatives.</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Section 2 - The House of Representatives</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Members elected every two years by the people</li>
              <li>Must be at least 25 years old, a U.S. citizen for 7 years, and a resident of their state</li>
              <li>Representation based on state population</li>
              <li>House has sole power of impeachment</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Section 3 - The Senate</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Two Senators from each state, serving six-year terms</li>
              <li>Must be at least 30 years old, a U.S. citizen for 9 years, and a resident of their state</li>
              <li>Vice President serves as President of the Senate</li>
              <li>Senate has sole power to try impeachments</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Section 4 - Elections and Meetings</h3>
            <p className="text-gray-700">States regulate election times, places, and manner, but Congress may override. Congress must meet at least once per year.</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Section 5 - Rules and Proceedings</h3>
            <p className="text-gray-700">Each house judges its own elections, sets its own rules, and can expel members with a two-thirds vote.</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Section 6 - Compensation and Privileges</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Members receive compensation from the U.S. Treasury</li>
              <li>Protected from arrest during sessions (except for treason, felony, or breach of peace)</li>
              <li>Cannot hold other federal offices while serving in Congress</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Section 7 - How Bills Become Laws</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>All revenue bills must originate in the House</li>
              <li>Both chambers must pass identical versions of a bill</li>
              <li>President can sign or veto legislation</li>
              <li>Congress can override a veto with a two-thirds vote in both chambers</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Section 8 - Powers of Congress</h3>
            <p className="text-gray-700 mb-3 font-semibold">Congress has the power to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Levy taxes, duties, and excises</li>
              <li>Borrow money on U.S. credit</li>
              <li>Regulate interstate and foreign commerce</li>
              <li>Establish naturalization and bankruptcy laws</li>
              <li>Coin money and regulate its value</li>
              <li>Establish post offices and post roads</li>
              <li>Grant patents and copyrights</li>
              <li>Create federal courts below the Supreme Court</li>
              <li>Declare war and regulate the military</li>
              <li>Make all laws "necessary and proper" to execute its powers</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Section 9 - Limits on Federal Power</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>No ex post facto laws or bills of attainder</li>
              <li>Habeas corpus cannot be suspended except in emergencies</li>
              <li>No taxes on exports from states</li>
              <li>No titles of nobility</li>
              <li>No money drawn from Treasury without appropriation</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Section 10 - Limits on State Power</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>States cannot make treaties, coin money, or grant titles of nobility</li>
              <li>States cannot impair contracts</li>
              <li>States cannot tax imports/exports without Congressional consent</li>
              <li>States cannot keep troops or make agreements with other states without Congressional consent</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
