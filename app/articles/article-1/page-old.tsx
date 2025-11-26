import Link from 'next/link';

export default function Article1Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          href="/articles" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          ← Back to Articles
        </Link>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg mb-8">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-5xl">🏛️</span>
            <div>
              <h1 className="text-4xl font-bold mb-2">Article I</h1>
              <h2 className="text-2xl font-semibold">The Legislative Branch</h2>
            </div>
          </div>
          <p className="text-lg leading-relaxed">
            Article I creates the legislative branch of the federal government, establishing Congress with its two chambers 
            (House and Senate), defining their enumerated powers, setting their procedures, and placing important limits 
            on both federal and state authority.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Overview</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Article I establishes Congress as the <strong>first branch</strong> of government with enumerated powers and 
            important constitutional limits, creating the foundation for all federal legislative authority while preserving 
            the federal system and protecting individual rights. It is the longest and most detailed article, reflecting 
            the Framers' view that Congress would be the primary policymaking body.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Each section below uses the <strong>TICRI Constitutional Breakdown</strong> methodology to provide:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-1 text-gray-700 ml-4">
            <li>📜 Exact Constitutional Text</li>
            <li>💭 Plain English Translation</li>
            <li>⚡ Government Powers Created</li>
            <li>🚫 Government Restrictions</li>
            <li>❌ What It Does NOT Say</li>
            <li>⚖️ Supreme Court Interpretations</li>
          </ul>
        </div>

        {/* Table of Contents */}
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Jump to Section:</h3>
          <div className="grid md:grid-cols-2 gap-3">
            <a href="#section-1" className="text-blue-600 hover:text-blue-800 hover:underline">
              § 1 — Legislative Powers Vested in Congress
            </a>
            <a href="#section-2" className="text-blue-600 hover:text-blue-800 hover:underline">
              § 2 — The House of Representatives
            </a>
            <a href="#section-3" className="text-blue-600 hover:text-blue-800 hover:underline">
              § 3 — The Senate
            </a>
            <a href="#section-4" className="text-blue-600 hover:text-blue-800 hover:underline">
              § 4 — Congressional Elections
            </a>
            <a href="#section-5" className="text-blue-600 hover:text-blue-800 hover:underline">
              § 5 — Congressional Rules & Procedures
            </a>
            <a href="#section-6" className="text-blue-600 hover:text-blue-800 hover:underline">
              § 6 — Compensation & Privileges
            </a>
            <a href="#section-7" className="text-blue-600 hover:text-blue-800 hover:underline">
              § 7 — How Bills Become Laws
            </a>
            <a href="#section-8" className="text-blue-600 hover:text-blue-800 hover:underline">
              § 8 — Powers of Congress (Enumerated Powers)
            </a>
            <a href="#section-9" className="text-blue-600 hover:text-blue-800 hover:underline">
              § 9 — Limits on Federal Government
            </a>
            <a href="#section-10" className="text-blue-600 hover:text-blue-800 hover:underline">
              § 10 — Limits on State Governments
            </a>
          </div>
        </div>

        {/* SECTION 1 */}
        <div id="section-1" className="bg-white rounded-lg shadow-md p-8 mb-6 scroll-mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Section 1 — Legislative Powers Vested in Congress
          </h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">📜 Exact Text</h4>
            <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
              "All legislative Powers herein granted shall be vested in a Congress of the United States, which shall 
              consist of a Senate and House of Representatives."
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">💭 Plain English</h4>
            <p className="text-gray-700">
              All federal lawmaking power that the Constitution gives is placed in Congress, and Congress is divided into 
              two parts: the House of Representatives and the Senate.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚡ Government Powers Created</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Creates Congress</strong> — Establishes the United States Congress as the national legislature</li>
              <li><strong>Grants Lawmaking Power</strong> — Gives Congress all legislative authority the Constitution permits</li>
              <li><strong>Establishes Bicameral Structure</strong> — Congress must always have two chambers: House and Senate</li>
              <li><strong>Foundational Principle of Enumerated Powers</strong> — Legislative power exists only where the Constitution grants it</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">🚫 Government Restrictions</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Enumerated Powers Only</strong> — Congress has no power beyond what is specifically granted in Section 8</li>
              <li><strong>No Implied General Authority</strong> — Cannot claim power because "it's reasonable" or "good policy"</li>
              <li><strong>Cannot Change Bicameralism</strong> — Cannot abolish or merge chambers</li>
              <li><strong>President and Courts Cannot Legislate</strong> — Executive and judicial branches cannot make laws</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚖️ Key Supreme Court Cases</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 text-sm">
              <li><strong>INS v. Chadha (1983)</strong> — Congress must follow bicameralism and presentment; both chambers must agree</li>
              <li><strong>Clinton v. City of New York (1998)</strong> — President cannot use line-item veto</li>
              <li><strong>United States v. Lopez (1995)</strong> — Congress's powers are limited to those enumerated</li>
            </ul>
          </div>
        </div>

        {/* SECTION 2 */}
        <div id="section-2" className="bg-white rounded-lg shadow-md p-8 mb-6 scroll-mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Section 2 — The House of Representatives
          </h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">💭 Plain English</h4>
            <p className="text-gray-700">
              The House of Representatives is one part of Congress. Its members are elected every two years by voters in 
              each state. To serve, a person must be at least 25 years old, a U.S. citizen for at least seven years, and 
              live in the state they represent. Seats are divided among states by population using a census every 10 years. 
              The House chooses its Speaker and has the sole power to impeach federal officials.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚡ Government Powers Created</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Creates the House as one chamber of Congress</li>
              <li>Establishes two-year election cycles</li>
              <li>Authorizes national census every 10 years</li>
              <li>Creates population-based apportionment of House seats</li>
              <li>Guarantees each state at least one Representative</li>
              <li>Gives House sole power of impeachment</li>
              <li>House chooses its own Speaker and officers</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">📋 Qualifications for Representatives</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>At least 25 years old</li>
              <li>At least 7 years a U.S. citizen</li>
              <li>Resident of the state they represent</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚖️ Key Supreme Court Cases</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 text-sm">
              <li><strong>Powell v. McCormack (1969)</strong> — Congress cannot refuse to seat a duly elected Representative who meets constitutional qualifications</li>
              <li><strong>Wesberry v. Sanders (1964)</strong> — House districts must have substantially equal population ("one person, one vote")</li>
              <li><strong>U.S. Term Limits v. Thornton (1995)</strong> — States cannot add extra qualifications beyond those in Article I</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> The original "three-fifths" apportionment language remains in the printed text but was 
              eliminated by the 13th and 14th Amendments.
            </p>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="section-3" className="bg-white rounded-lg shadow-md p-8 mb-6 scroll-mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Section 3 — The Senate
          </h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">💭 Plain English</h4>
            <p className="text-gray-700">
              The Senate is made up of two Senators from each state, elected directly by the people (17th Amendment). 
              Senators serve six-year terms, staggered so one-third are elected every two years. Senators must be at least 
              30 years old, U.S. citizens for nine years, and live in their state. The Vice President presides over the 
              Senate and votes only to break ties. The Senate has sole authority to conduct impeachment trials; conviction 
              requires a two-thirds vote.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚡ Government Powers Created</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Each state gets two Senators (equal representation)</li>
              <li>Six-year terms with staggered elections</li>
              <li>Vice President serves as President of the Senate</li>
              <li>Senate has sole power to try impeachments</li>
              <li>Conviction requires 2/3 vote of members present</li>
              <li>Chief Justice presides when President is tried</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">📋 Qualifications for Senators</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>At least 30 years old</li>
              <li>At least 9 years a U.S. citizen</li>
              <li>Resident of the state they represent</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> The 17th Amendment (1913) changed Senate elections from state legislature selection 
              to direct popular vote.
            </p>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="section-4" className="bg-white rounded-lg shadow-md p-8 mb-6 scroll-mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Section 4 — Congressional Elections
          </h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">💭 Plain English</h4>
            <p className="text-gray-700">
              States control the time, place, and manner of congressional elections, but Congress can override those rules 
              by passing its own laws. Congress must meet at least once per year, beginning on January 3 (20th Amendment).
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚡ Key Points</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>States set election rules (time, place, manner)</li>
              <li>Congress can override state election rules by federal law</li>
              <li>Congress must assemble at least once per year</li>
              <li>Default meeting date is January 3 (per 20th Amendment)</li>
            </ul>
          </div>
        </div>

        {/* SECTION 5 */}
        <div id="section-5" className="bg-white rounded-lg shadow-md p-8 mb-6 scroll-mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Section 5 — Congressional Rules & Procedures
          </h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">💭 Plain English</h4>
            <p className="text-gray-700">
              Each chamber judges its own election results and qualifications of members. A majority is required for business. 
              Each chamber sets its own rules, can punish members, and can expel members with a 2/3 vote. Each chamber must 
              keep a public journal of proceedings. Neither chamber can adjourn for more than three days without the other's consent.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚡ Powers Granted</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Each chamber judges elections and member qualifications</li>
              <li>Majority needed for quorum (doing business)</li>
              <li>Each chamber makes its own rules</li>
              <li>Can punish members for disorderly behavior</li>
              <li>Can expel members (requires 2/3 vote)</li>
              <li>Must publish a journal of proceedings</li>
              <li>Must record votes when requested by 1/5 of members</li>
            </ul>
          </div>
        </div>

        {/* SECTION 6 */}
        <div id="section-6" className="bg-white rounded-lg shadow-md p-8 mb-6 scroll-mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Section 6 — Compensation & Privileges
          </h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">💭 Plain English</h4>
            <p className="text-gray-700">
              Members of Congress are paid by the federal treasury. They cannot be arrested while attending or traveling to/from 
              Congress (except for treason, felony, or breach of peace). They cannot be questioned elsewhere for speeches or 
              debates in Congress. No member can hold another federal office while serving in Congress, and no one can serve 
              in Congress while holding a federal office created or whose pay was increased during their term.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚡ Key Provisions</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Compensation:</strong> Paid from U.S. Treasury (not by states)</li>
              <li><strong>Speech or Debate Clause:</strong> Protected from liability for legislative statements</li>
              <li><strong>Arrest Privilege:</strong> Cannot be arrested while attending/traveling to Congress (except for serious crimes)</li>
              <li><strong>Incompatibility Clause:</strong> Cannot hold another federal office while in Congress</li>
              <li><strong>Emoluments Clause:</strong> Cannot take office created or enriched during their term</li>
            </ul>
          </div>
        </div>

        {/* SECTION 7 */}
        <div id="section-7" className="bg-white rounded-lg shadow-md p-8 mb-6 scroll-mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Section 7 — How Bills Become Laws
          </h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">💭 Plain English</h4>
            <p className="text-gray-700">
              All bills for raising revenue must start in the House, but the Senate can propose amendments. Every bill that 
              passes both chambers goes to the President. The President can sign it (becomes law), veto it (sent back to 
              Congress), or do nothing for 10 days (becomes law unless Congress adjourns). Congress can override a veto with 
              a 2/3 vote in both chambers.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚡ Legislative Process</h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
              <li>Revenue bills must originate in the House</li>
              <li>Both chambers must pass identical bill text</li>
              <li>Bill goes to President for approval</li>
              <li>President can: Sign (law), Veto (return to Congress), or wait 10 days (becomes law if Congress in session)</li>
              <li>Congress can override veto with 2/3 vote in each chamber</li>
              <li>Pocket veto: If Congress adjourns within 10 days and President doesn't sign, bill dies</li>
            </ol>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚖️ Key Requirement</h4>
            <p className="text-gray-700">
              This establishes <strong>bicameralism and presentment</strong> — both chambers must agree on identical text, 
              and the President must have opportunity to approve or veto. No shortcuts allowed.
            </p>
          </div>
        </div>

        {/* SECTION 8 */}
        <div id="section-8" className="bg-white rounded-lg shadow-md p-8 mb-6 scroll-mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Section 8 — Powers of Congress (Enumerated Powers)
          </h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">💭 Overview</h4>
            <p className="text-gray-700 mb-4">
              This section lists the specific powers granted to Congress. These are called <strong>"enumerated powers"</strong> 
              because they are specifically listed. Congress has no general legislative authority — only the powers granted here.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚡ Congressional Powers Include:</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">Fiscal Powers</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li>Tax and collect revenues</li>
                  <li>Borrow money</li>
                  <li>Coin money and regulate its value</li>
                  <li>Punish counterfeiting</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">Commerce Powers</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li>Regulate interstate commerce</li>
                  <li>Regulate foreign commerce</li>
                  <li>Regulate commerce with Indian tribes</li>
                  <li>Establish uniform bankruptcy laws</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">Defense & Foreign Affairs</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li>Declare war</li>
                  <li>Raise and support armies</li>
                  <li>Maintain a navy</li>
                  <li>Regulate armed forces</li>
                  <li>Call forth militia</li>
                  <li>Define/punish piracy and international law violations</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">Other Powers</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li>Establish post offices</li>
                  <li>Protect patents and copyrights</li>
                  <li>Create federal courts below Supreme Court</li>
                  <li>Govern District of Columbia</li>
                  <li>Govern federal property</li>
                  <li>Make rules for naturalization</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
            <h5 className="font-semibold text-gray-900 mb-2">Necessary and Proper Clause</h5>
            <p className="text-sm text-gray-700">
              The final clause grants Congress power to "make all Laws which shall be necessary and proper for carrying 
              into Execution the foregoing Powers." This is not a grant of unlimited power, but allows Congress to use 
              reasonable means to execute its enumerated powers.
            </p>
            <p className="text-sm text-gray-700 mt-2">
              <strong>Key Case:</strong> McCulloch v. Maryland (1819) — Upheld implied powers but within limits of enumerated authority.
            </p>
          </div>
        </div>

        {/* SECTION 9 */}
        <div id="section-9" className="bg-white rounded-lg shadow-md p-8 mb-6 scroll-mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-red-600 pb-2">
            Section 9 — Limits on Federal Government
          </h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-red-600 mb-2">💭 Overview</h4>
            <p className="text-gray-700">
              This section lists things the federal government <strong>cannot do</strong>. These are explicit prohibitions 
              on federal power.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-red-600 mb-2">🚫 Federal Government Prohibited From:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Suspending Habeas Corpus</strong> — Except in cases of rebellion or invasion when public safety requires it</li>
              <li><strong>Bills of Attainder</strong> — Cannot pass laws declaring specific person guilty without trial</li>
              <li><strong>Ex Post Facto Laws</strong> — Cannot make past actions criminal retroactively</li>
              <li><strong>Direct Taxes Without Apportionment</strong> — Must be proportional to census (modified by 16th Amendment for income tax)</li>
              <li><strong>Export Taxes</strong> — Cannot tax goods exported from any state</li>
              <li><strong>Preference to State Ports</strong> — Cannot favor one state's ports over another</li>
              <li><strong>Spending Without Appropriation</strong> — No money from Treasury without law; must publish regular statements</li>
              <li><strong>Titles of Nobility</strong> — Cannot grant noble titles</li>
              <li><strong>Foreign Emoluments</strong> — Federal officers cannot accept gifts/titles from foreign states without Congress's consent</li>
            </ul>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-4 mt-4">
            <p className="text-sm text-gray-700">
              <strong>Important:</strong> These limits protect individual liberty and prevent federal tyranny. They establish 
              fundamental rights like habeas corpus and prohibit arbitrary punishment.
            </p>
          </div>
        </div>

        {/* SECTION 10 */}
        <div id="section-10" className="bg-white rounded-lg shadow-md p-8 mb-6 scroll-mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-red-600 pb-2">
            Section 10 — Limits on State Governments
          </h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-red-600 mb-2">💭 Overview</h4>
            <p className="text-gray-700">
              This section lists things that <strong>states cannot do</strong>. It prevents states from acting like 
              independent nations and ensures national unity.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-red-600 mb-2">🚫 States Absolutely Prohibited From:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Making treaties or alliances</li>
              <li>Granting letters of marque and reprisal</li>
              <li>Coining money</li>
              <li>Emitting bills of credit (paper money)</li>
              <li>Making anything but gold and silver legal tender for debts</li>
              <li>Passing bills of attainder</li>
              <li>Passing ex post facto laws</li>
              <li>Impairing the obligation of contracts</li>
              <li>Granting titles of nobility</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-red-600 mb-2">🚫 States Prohibited Without Congressional Consent:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Laying duties on imports or exports (except for inspection fees)</li>
              <li>Keeping troops or ships of war in peacetime</li>
              <li>Entering into agreements with other states or foreign powers</li>
              <li>Engaging in war (unless actually invaded or in imminent danger)</li>
            </ul>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-4 mt-4">
            <p className="text-sm text-gray-700">
              <strong>Purpose:</strong> Section 10 prevents states from fragmenting national unity. It ensures one currency, 
              one foreign policy, protection of contract rights, and prevents states from becoming competing nations.
            </p>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 mt-8">
          <h3 className="text-2xl font-bold mb-4">Article I Summary</h3>
          <p className="text-lg leading-relaxed">
            Article I establishes Congress as the first branch of government with <strong>enumerated powers</strong> and 
            important constitutional limits, creating the foundation for all federal legislative authority while preserving 
            the federal system and protecting individual rights.
          </p>
          <p className="mt-4 leading-relaxed">
            It creates a system of <strong>checks and balances</strong> through bicameralism, presidential veto power, 
            and explicit limits on both federal and state authority, ensuring that power remains divided and accountable 
            to the people.
          </p>
        </div>
      </div>
    </div>
  );
}
