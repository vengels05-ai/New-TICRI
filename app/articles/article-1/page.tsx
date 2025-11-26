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
            <h4 className="text-lg font-semibold text-blue-600 mb-2">❌ What It Does NOT Say</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Does NOT give Congress unlimited power—only "herein granted" powers</li>
              <li>Does NOT allow the President or courts to make laws</li>
              <li>Does NOT specify how many members each chamber should have</li>
              <li>Does NOT define what counts as "legislative" vs "executive" power in all cases</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚖️ Key Supreme Court Cases</h4>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">INS v. Chadha (1983)</h5>
                <p className="text-gray-700 mt-2">
                  Struck down the legislative veto, holding that when Congress takes legislative action, it must follow 
                  bicameralism (both houses) and presentment (to the President). Reaffirmed that Article I creates strict 
                  procedural requirements for lawmaking.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">Clinton v. City of New York (1998)</h5>
                <p className="text-gray-700 mt-2">
                  Invalidated the line-item veto, ruling that the President cannot unilaterally amend or repeal parts of 
                  statutes. Only Congress has legislative power, and the President's role is limited to signing or vetoing 
                  entire bills.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">Youngstown Sheet & Tube Co. v. Sawyer (1952)</h5>
                <p className="text-gray-700 mt-2">
                  The "Steel Seizure Case" ruled that the President cannot make law or seize private property without 
                  congressional authorization. The legislative power belongs to Congress alone.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2 */}
        <div id="section-2" className="bg-white rounded-lg shadow-md p-8 mb-6 scroll-mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Section 2 — The House of Representatives
          </h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">� Exact Constitutional Text (Key Excerpts)</h4>
            <div className="space-y-3">
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                "The House of Representatives shall be composed of Members chosen every second Year by the People of the several States..."
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                "No Person shall be a Representative who shall not have attained to the Age of twenty five Years, and been seven Years a Citizen of the United States..."
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                "Representatives and direct Taxes shall be apportioned among the several States... according to their respective Numbers..."
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                "The House of Representatives shall chuse their Speaker and other Officers; and shall have the sole Power of Impeachment."
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">�💭 Plain English Translation</h4>
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
              <li><strong>Creates the House of Representatives</strong> — First chamber of bicameral Congress</li>
              <li><strong>Two-Year Terms</strong> — Ensures frequent accountability to voters</li>
              <li><strong>Population-Based Representation</strong> — More populous states get more Representatives</li>
              <li><strong>Census Authority</strong> — Requires counting population every 10 years for apportionment</li>
              <li><strong>Sole Power of Impeachment</strong> — Only House can bring impeachment charges against federal officials</li>
              <li><strong>Chooses Speaker</strong> — House selects its own presiding officer</li>
              <li><strong>Qualifications Enforcement</strong> — Can judge elections and qualifications of members</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">📋 Qualifications for Representatives</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li><strong>At least 25 years old</strong></li>
              <li><strong>U.S. citizen for at least 7 years</strong></li>
              <li><strong>Resident of the state they represent</strong></li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">🚫 Government Restrictions</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Cannot Skip Elections</strong> — Elections must happen every two years</li>
              <li><strong>Cannot Add Qualifications</strong> — States cannot impose requirements beyond age, citizenship, residency</li>
              <li><strong>Equal Population Districts</strong> — Must maintain "one person, one vote" within states</li>
              <li><strong>Must Guarantee One Seat Per State</strong> — Even smallest states get at least one Representative</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">❌ What It Does NOT Say</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Does NOT specify total number of Representatives (currently 435 by law)</li>
              <li>Does NOT require Representatives to live in their specific district (only the state)</li>
              <li>Does NOT mandate term limits for House members</li>
              <li>Does NOT allow House to convict in impeachment (Senate has sole power to try)</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚖️ Key Supreme Court Cases</h4>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">Powell v. McCormack (1969)</h5>
                <p className="text-gray-700 mt-2">
                  Ruled that Congress cannot exclude a duly elected member who meets the three constitutional qualifications 
                  (age, citizenship, residency). Congress can expel members by 2/3 vote but cannot add extra qualifications.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">Wesberry v. Sanders (1964)</h5>
                <p className="text-gray-700 mt-2">
                  Established the "one person, one vote" principle for House districts within each state. Congressional 
                  districts must have substantially equal populations.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">U.S. Term Limits, Inc. v. Thornton (1995)</h5>
                <p className="text-gray-700 mt-2">
                  States cannot impose term limits on their congressional delegations. The qualifications in Article I 
                  (age, citizenship, residency) are exclusive and cannot be supplemented.
                </p>
              </div>
            </div>
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
            <h4 className="text-lg font-semibold text-blue-600 mb-2">📜 Exact Constitutional Text (Verbatim)</h4>
            <div className="space-y-3">
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                "The Senate of the United States shall be composed of two Senators from each State, chosen by the Legislature thereof, for six Years; and each Senator shall have one Vote."
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                "Immediately after they shall be assembled in Consequence of the first Election, they shall be divided as equally as may be into three Classes. The Seats of the Senators of the first Class shall be vacated at the Expiration of the second Year, of the second Class at the Expiration of the fourth Year, and of the third Class at the Expiration of the sixth Year, so that one third may be chosen every second Year; and if Vacancies happen by Resignation, or otherwise, during the Recess of the Legislature of any State, the Executive thereof may make temporary Appointments until the next Meeting of the Legislature, which shall then fill such Vacancies."
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                "No Person shall be a Senator who shall not have attained to the Age of thirty Years, and been nine Years a Citizen of the United States, and who shall not, when elected, be an Inhabitant of that State for which he shall be chosen."
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                "The Vice President of the United States shall be President of the Senate, but shall have no Vote, unless they be equally divided."
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                "The Senate shall chuse their other Officers, and also a President pro tempore, in the Absence of the Vice President, or when he shall exercise the Office of President of the United States."
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                "The Senate shall have the sole Power to try all Impeachments. When sitting for that Purpose, they shall be on Oath or Affirmation. When the President of the United States is tried, the Chief Justice shall preside: And no Person shall be convicted without the Concurrence of two thirds of the Members present."
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                "Judgment in Cases of Impeachment shall not extend further than to removal from Office, and disqualification to hold and enjoy any Office of honor, Trust or Profit under the United States: but the Party convicted shall nevertheless be liable and subject to Indictment, Trial, Judgment and Punishment, according to Law."
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">💭 Plain English Translation</h4>
            <p className="text-gray-700">
              The Senate is made up of two Senators from each state. Originally, state legislatures chose Senators, but today (after the 17th Amendment) they are elected directly by the people. Senators serve six-year terms, and their terms are staggered so that one-third of the Senate is elected every two years.
            </p>
            <p className="text-gray-700 mt-3">
              Senators must be at least 30 years old, must have been U.S. citizens for nine years, and must live in the state they represent.
            </p>
            <p className="text-gray-700 mt-3">
              The Vice President presides over the Senate and can only vote to break a tie. The Senate chooses its other officers, including a temporary president when the Vice President is absent.
            </p>
            <p className="text-gray-700 mt-3">
              The Senate has the sole authority to conduct impeachment trials. Conviction requires a two-thirds vote. Punishment can only include removal from office and possibly disqualification from future office, but the person can still face regular criminal charges afterward.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚡ Government Powers Created</h4>
            <div className="space-y-3">
              <p className="text-gray-700 font-semibold">Creates and defines the U.S. Senate:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Two Senators per state, regardless of population</li>
                <li>Six-year terms</li>
                <li>Senators staggered into three classes for continuity</li>
              </ul>

              <p className="text-gray-700 font-semibold mt-4">Gives states a role in federal representation:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Originally: Senators were chosen by state legislatures</li>
                <li>After the 17th Amendment: Senators are elected directly by the people</li>
              </ul>

              <p className="text-gray-700 font-semibold mt-4">Fills Senate vacancies:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Originally: Governor could appoint until the legislature met</li>
                <li>After 17th Amendment: States may allow governors to appoint temporarily, but only if state law permits. Otherwise, vacancies require special elections</li>
              </ul>

              <p className="text-gray-700 font-semibold mt-4">Creates qualifications for Senators:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Age: 30+</li>
                <li>Citizenship: 9 years</li>
                <li>Residency: Must live in the represented state</li>
              </ul>

              <p className="text-gray-700 font-semibold mt-4">Defines Vice President's legislative role:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Presides over the Senate</li>
                <li>Votes only to break ties</li>
              </ul>

              <p className="text-gray-700 font-semibold mt-4">Gives Senate impeachment-trial authority:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Sole power to try impeachments</li>
                <li>Must be under oath</li>
                <li>Chief Justice presides when the President is on trial</li>
                <li>Conviction requires 2/3 vote</li>
                <li>Penalty is limited to removal and possible disqualification</li>
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">🚫 Government Restrictions / Limits</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Senate cannot change its size</strong> (always two per state)</li>
              <li><strong>Senate cannot remove Senators simply by vote</strong> (expulsion requires 2/3 under Section 5)</li>
              <li><strong>Senators MUST meet constitutional qualifications</strong> — Congress cannot change them</li>
              <li><strong>Senate cannot convict in impeachment with less than 2/3 vote</strong></li>
              <li><strong>Senate's punishment in impeachment is limited ONLY to:</strong> removal and optional disqualification</li>
              <li><strong>Senate cannot impose criminal penalties</strong> — only courts can</li>
              <li><strong>Vice President:</strong> Cannot vote unless the Senate is tied; Has no legislative veto power</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">❌ What It Does NOT Say</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Does not give the Senate power to impeach — only to try impeachments (House impeaches)</li>
              <li>Does not set term limits for Senators</li>
              <li>Does not allow states to reduce their number of Senators</li>
              <li>Does not allow Congress to change the equal representation of states in the Senate without state consent (protected by Article V)</li>
              <li>Does not define how political parties operate in the Senate</li>
              <li>Does not give the Vice President ordinary voting power</li>
              <li>Does not allow impeachment to include criminal penalties</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">🔄 Provisions No Longer in Legal Force (But Text Remains)</h4>
            <div className="bg-yellow-50 p-4 rounded">
              <p className="text-gray-700 font-semibold">Original Method of Selecting Senators</p>
              <p className="text-gray-700 mt-2 italic">
                The original text states: "chosen by the Legislature thereof"
              </p>
              <p className="text-gray-700 mt-2">
                This system was replaced by:
              </p>
              <p className="text-gray-700 mt-2 font-semibold">
                ✔ 17th Amendment (1913)
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mt-2">
                <li>Direct election of Senators by the people of each state</li>
                <li>States may authorize temporary gubernatorial appointments, but must fill vacancies by election</li>
              </ul>
              <p className="text-gray-700 mt-2 italic">
                *Nothing else in Section 3 has been legally superseded.*
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚖️ Key Supreme Court Interpretations</h4>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">Powell v. McCormack (1969)</h5>
                <p className="text-gray-700 mt-2">
                  Congress may not add qualifications beyond those listed in the Constitution.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">U.S. Term Limits v. Thornton (1995)</h5>
                <p className="text-gray-700 mt-2">
                  States cannot impose additional qualifications (like term limits) on Senators.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">Nixon v. United States (1993)</h5>
                <p className="text-gray-700 mt-2">
                  The Senate has exclusive authority to determine impeachment trial procedures; courts cannot intervene.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">Burton v. United States (1906)</h5>
                <p className="text-gray-700 mt-2">
                  Senators, like all federal officers, are subject to federal criminal law and can be prosecuted independently of impeachment.
                </p>
              </div>
            </div>
          </div>
        {/* SECTION 4 */}
        <div id="section-4" className="bg-white rounded-lg shadow-md p-8 mb-6 scroll-mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Section 4 — Congressional Elections
          </h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">📜 Exact Constitutional Text (Verbatim)</h4>
            <div className="space-y-3">
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                "The Times, Places and Manner of holding Elections for Senators and Representatives, shall be prescribed in each State by the Legislature thereof; but the Congress may at any time by Law make or alter such Regulations, except as to the Places of chusing Senators."
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                "The Congress shall assemble at least once in every Year, and such Meeting shall be on the first Monday in December, unless they shall by Law appoint a different Day."
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                *(Note: The second clause—on the meeting date of Congress—was modified by the 20th Amendment, but the original text remains printed for historical accuracy.)*
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">💭 Plain English Translation</h4>
            <p className="text-gray-700">
              State legislatures decide when, where, and how elections for Congress are held. However, Congress has the authority to change those election rules at any time, except Congress cannot choose the physical location where Senators are elected.
            </p>
            <p className="text-gray-700 mt-3">
              Congress must meet at least once every year. Originally, the Constitution set the meeting date as the first Monday in December, but Congress now sets its meeting date under its constitutional authority, and the 20th Amendment moved the start of congressional terms to January.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚡ Government Powers Created</h4>
            <div className="space-y-3">
              <p className="text-gray-700 font-semibold">Gives states primary authority over congressional elections</p>
              <p className="text-gray-700">State legislatures control:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Election dates (except the uniform federal date now set by Congress)</li>
                <li>Polling locations</li>
                <li>Registration rules</li>
                <li>Ballot formats</li>
                <li>Districting (subject to other constitutional limits)</li>
                <li>Election administration</li>
              </ul>

              <p className="text-gray-700 font-semibold mt-4">Gives Congress broad power to override state election rules</p>
              <p className="text-gray-700">Congress can:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Change election dates</li>
                <li>Regulate mail voting</li>
                <li>Require uniform ballots</li>
                <li>Set rules for federal election procedures</li>
                <li>Regulate districting (as it did with the Apportionment Act of 1842)</li>
                <li>Mandate single-member districts</li>
                <li>Protect voting rights under the 14th, 15th, 24th, and 26th Amendments</li>
              </ul>

              <p className="text-gray-700 font-semibold mt-4">Creates the requirement for an annual meeting of Congress</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Congress must meet every year</li>
                <li>Originally required a December meeting; now modified by the 20th Amendment</li>
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">🚫 Government Restrictions / Limits</h4>
            <div className="space-y-3">
              <p className="text-gray-700 font-semibold">State limits</p>
              <p className="text-gray-700">States cannot:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Refuse to hold congressional elections</li>
                <li>Set election rules that violate federal law or the Constitution</li>
                <li>Select their own Senators (17th Amendment ended this)</li>
                <li>Draw districts with significant population inequality (via Supreme Court rulings)</li>
                <li>Discriminate in voting based on race, sex, age over 18, or failure to pay a tax</li>
              </ul>

              <p className="text-gray-700 font-semibold mt-4">Federal limits</p>
              <p className="text-gray-700">Congress cannot:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Dictate the physical "place" of Senate elections (obsolete after 17th Amendment)</li>
                <li>Abolish state-run election systems entirely</li>
                <li>Postpone elections indefinitely</li>
                <li>Remove the requirement that states hold elections for Representatives</li>
              </ul>

              <p className="text-gray-700 font-semibold mt-4">Legislative calendar limits</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Congress must meet at least once every year—cannot skip a year</li>
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">❌ What It Does NOT Say</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>It does not establish political parties</li>
              <li>It does not give Congress total control of elections from the start—states hold primary authority</li>
              <li>It does not give the President any election authority for Congress</li>
              <li>It does not specify how districts must be drawn (single-member districts came later by statute)</li>
              <li>It does not give Congress power to cancel federal elections</li>
              <li>It does not give states power to refuse or delay elections</li>
              <li>It does not define who can vote (later amendments do that)</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">🔄 Provisions No Longer Legally in Force (But Text Remains)</h4>
            <div className="bg-yellow-50 p-4 rounded">
              <p className="text-gray-700 font-semibold">Original Senate election clause</p>
              <p className="text-gray-700 mt-2 italic">
                "except as to the Places of chusing Senators"
              </p>
              <p className="text-gray-700 mt-2">
                This is obsolete because the 17th Amendment (1913) replaced state-legislature elections of Senators with direct popular elections.
              </p>

              <p className="text-gray-700 font-semibold mt-4">Original annual meeting date</p>
              <p className="text-gray-700 mt-2 italic">
                "the first Monday in December"
              </p>
              <p className="text-gray-700 mt-2">
                This was changed by the:
              </p>
              <p className="text-gray-700 mt-2 font-semibold">
                ✔ 20th Amendment (1933)
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mt-2">
                <li>Congress begins new terms on January 3</li>
                <li>Congress sets its own meeting schedule by law</li>
                <li>The requirement that Congress meet at least once per year remains valid</li>
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚖️ Key Supreme Court Interpretations</h4>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">Arizona State Legislature v. Arizona Independent Redistricting Commission (2015)</h5>
                <p className="text-gray-700 mt-2">
                  State legislatures may delegate redistricting authority to independent commissions; "Legislature" means the state lawmaking process, not just the body of elected legislators.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">Smiley v. Holm (1932)</h5>
                <p className="text-gray-700 mt-2">
                  State governors may veto redistricting bills—redistricting is subject to the full state legislative process.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">Oregon v. Mitchell (1970)</h5>
                <p className="text-gray-700 mt-2">
                  Congress may regulate federal election standards, including voting age (later resolved by the 26th Amendment).
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">RNC v. DNC (2020)</h5>
                <p className="text-gray-700 mt-2">
                  States control election timing and administration unless Congress overrides.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">Ex parte Yarbrough (1884)</h5>
                <p className="text-gray-700 mt-2">
                  Congress has power to protect federal elections, including prosecuting interference or intimidation.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
            <p className="text-sm text-gray-700">
              <strong>Summary for TICRI:</strong> Article I, Section 4 creates the basic federalist election system: States run federal elections, Congress has override authority, Annual congressional meetings are mandatory, Certain parts were later changed by the 17th and 20th Amendments.
            </p>
          </div>
        </div>
        {/* SECTION 5 */}
        <div id="section-5" className="bg-white rounded-lg shadow-md p-8 mb-6 scroll-mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Section 5 — Congressional Rules & Procedures
          </h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">📜 Exact Constitutional Text (Verbatim)</h4>
            <div className="space-y-3">
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                "Each House shall be the Judge of the Elections, Returns and Qualifications of its own Members, and a Majority of each shall constitute a Quorum to do Business; but a smaller Number may adjourn from day to day, and may be authorized to compel the Attendance of absent Members, in such Manner, and under such Penalties as each House may provide."
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                "Each House may determine the Rules of its Proceedings, punish its Members for disorderly Behaviour, and, with the Concurrence of two thirds, expel a Member."
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                "Each House shall keep a Journal of its Proceedings, and from time to time publish the same, excepting such Parts as may in their Judgment require Secrecy; and the Yeas and Nays of the Members of either House on any question shall, at the Desire of one fifth of those Present, be entered on the Journal."
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                "Neither House, during the Session of Congress, shall, without the Consent of the other, adjourn for more than three days, nor to any other Place than that in which the two Houses shall be sitting."
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">💭 Plain English Translation</h4>
            <p className="text-gray-700">
              Each chamber of Congress (House and Senate) decides whether its members were properly elected, whether they meet the constitutional qualifications, and whether election results are valid. A majority of either chamber is required to conduct official business, but a smaller number can meet and force absent members to attend.
            </p>
            <p className="text-gray-700 mt-3">
              Each chamber sets its own rules, can punish members for disorderly behavior, and can expel a member with a two-thirds vote.
            </p>
            <p className="text-gray-700 mt-3">
              Both the House and Senate must keep an official journal of what they do, must publish it except for parts requiring secrecy, and must record the votes of members when at least one-fifth of those present request it.
            </p>
            <p className="text-gray-700 mt-3">
              Neither chamber may adjourn for more than three days or meet somewhere else without the consent of the other.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚡ Government Powers Created</h4>
            <div className="space-y-3">
              <p className="text-gray-700 font-semibold">Membership Oversight</p>
              <p className="text-gray-700">Each chamber judges:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>The validity of elections</li>
                <li>The returns (counting and certification)</li>
                <li>Whether a member meets constitutional qualifications</li>
              </ul>

              <p className="text-gray-700 font-semibold mt-4">Internal Authority</p>
              <p className="text-gray-700">Each chamber may:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Establish its own procedural rules</li>
                <li>Set standards of conduct</li>
                <li>Punish members</li>
                <li>Expel members with a 2/3 vote</li>
                <li>Organize committees and internal structure</li>
              </ul>

              <p className="text-gray-700 font-semibold mt-4">Operational Powers</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Each chamber determines its own quorum (majority)</li>
                <li>Can compel attendance of absent members</li>
                <li>Must keep and publish journals</li>
                <li>Must record votes when requested by at least 1/5 of present members</li>
              </ul>

              <p className="text-gray-700 font-semibold mt-4">Adjournment Rules</p>
              <p className="text-gray-700">Neither chamber may adjourn:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>For more than three days</li>
                <li>Or to a different location</li>
              </ul>
              <p className="text-gray-700 ml-4">—unless the other chamber consents. This forces the House and Senate to remain coordinated and co-located.</p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">🚫 Government Restrictions / Limits</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Chambers must judge elections and qualifications based only on constitutional qualifications, not political preference</li>
              <li>Congress cannot change the constitutional qualifications for members (age, citizenship, residency)</li>
              <li>Expulsion requires 2/3 majority, preventing partisan simple-majority abuse</li>
              <li>Chambers must publish proceedings except very limited secrecy</li>
              <li>Chambers must record votes when 20% of members request it</li>
              <li>Neither chamber can operate in a different city, state, or location without mutual agreement</li>
              <li>Neither chamber can adjourn for more than three days without the other's approval</li>
              <li>They cannot compel attendance in unconstitutional ways (must follow due process)</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">❌ What It Does NOT Say</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Does not allow political parties to control membership decisions</li>
              <li>Does not allow each chamber to add new qualifications for members</li>
              <li>Does not authorize "expulsion by simple majority"</li>
              <li>Does not give Congress authority to refuse to seat a member who meets all qualifications (Powell v. McCormack)</li>
              <li>Does not authorize Congress to hide all proceedings—secrecy must be justified</li>
              <li>Does not allow Congress to adjourn indefinitely or relocate without mutual consent</li>
              <li>Does not give Congress power to overturn state election laws</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚖️ Key Supreme Court Interpretations</h4>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">Powell v. McCormack (1969)</h5>
                <p className="text-gray-700 mt-2">
                  Congress CANNOT refuse to seat a member who meets the constitutional qualifications (age, citizenship, residency). Congress can expel members by 2/3 vote but cannot add extra qualifications.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">U.S. Term Limits v. Thornton (1995)</h5>
                <p className="text-gray-700 mt-2">
                  States cannot impose additional qualifications (like term limits) on federal legislators because Article I sets the only qualifications.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">Ballin (1892)</h5>
                <p className="text-gray-700 mt-2">
                  Each chamber has wide authority to set its own rules, but those rules cannot violate the Constitution.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">McGrain v. Daugherty (1927)</h5>
                <p className="text-gray-700 mt-2">
                  Congress has broad power to compel attendance of members and conduct investigations.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">United States v. Smith (1936)</h5>
                <p className="text-gray-700 mt-2">
                  The Senate's journal and recorded votes are constitutionally required; the courts may rely on those records.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
            <p className="text-sm text-gray-700">
              <strong>Summary for TICRI:</strong> Article I, Section 5 establishes self-governance within Congress. Congress judges the elections and qualifications of its own members. Each chamber is responsible for its own rules and discipline. The Senate and House cannot operate independently of one another when it comes to adjournment and location. This section reinforces the independence of Congress from the executive and judiciary—while also preventing either chamber from acting without accountability or transparency.
            </p>
          </div>
        </div>


        <div id="section-6" className="bg-white rounded-lg shadow-md p-8 mb-6 scroll-mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Section 6 — Compensation & Privileges
          </h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">📜 Exact Constitutional Text</h4>
            <div className="space-y-3">
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                <strong>Section 6.</strong>
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                The Senators and Representatives shall receive a Compensation for their Services, to be ascertained by Law, 
                and paid out of the Treasury of the United States. They shall in all Cases, except Treason, Felony and Breach 
                of the Peace, be privileged from Arrest during their Attendance at the Session of their respective Houses, and 
                in going to and returning from the same; and for any Speech or Debate in either House, they shall not be 
                questioned in any other Place.
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                No Senator or Representative shall, during the Time for which he was elected, be appointed to any civil Office 
                under the Authority of the United States, which shall have been created, or the Emoluments whereof shall have 
                been increased during such time; and no Person holding any Office under the United States, shall be a Member of 
                either House during his Continuance in Office.
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">💭 Plain English Translation</h4>
            <div className="space-y-3">
              <p className="text-gray-700">
                Members of Congress are paid a salary set by law and paid by the U.S. Treasury. They cannot be arrested while 
                attending congressional sessions or traveling to and from them, except for serious crimes. Members cannot be sued, 
                prosecuted, or questioned outside of Congress for things they say during official debates.
              </p>
              <p className="text-gray-700">
                A member of Congress cannot be appointed to a federal office that was created or had its salary increased during 
                the time they were elected to serve. Also, anyone who currently holds a federal office cannot simultaneously 
                serve in Congress.
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚡ Government Powers Created</h4>
            
            <h5 className="font-semibold text-gray-900 mt-4 mb-2">Compensation authority</h5>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Congress has authority to determine its own pay by law.</li>
              <li>Payment must come from the U.S. Treasury.</li>
            </ul>

            <h5 className="font-semibold text-gray-900 mt-4 mb-2">Legislative immunity ("Speech or Debate Clause")</h5>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Immunity from arrest (except serious crimes) while performing legislative duties.</li>
              <li>Immunity from being questioned in courts or other venues about their legislative speeches, votes, or debates.</li>
            </ul>

            <h5 className="font-semibold text-gray-900 mt-4 mb-2">Separation of powers</h5>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Prevents members of Congress from being appointed to newly created or newly enhanced federal offices.</li>
              <li>Prohibits federal office-holders from simultaneously serving in Congress.</li>
              <li>These provisions ensure Congress is not influenced or bribed by executive appointments.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">🚫 Government Restrictions</h4>
            
            <h5 className="font-semibold text-gray-900 mt-4 mb-2">Limits on arrest immunity</h5>
            <p className="text-gray-700 mb-2">Members are NOT immune from arrest for:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Treason</li>
              <li>Felony</li>
              <li>Breach of the peace (interpreted broadly to mean all crimes)</li>
            </ul>

            <h5 className="font-semibold text-gray-900 mt-4 mb-2">Limits on compensation</h5>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Congress cannot secretly pay itself through other channels.</li>
              <li>Compensation must be set by statute (subject to presidential veto).</li>
            </ul>

            <h5 className="font-semibold text-gray-900 mt-4 mb-2">Limits preventing corruption</h5>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>A legislator cannot take a federal job created during their term.</li>
              <li>A legislator cannot accept a position whose salary was increased during their term.</li>
              <li>Federal officers cannot simultaneously serve in Congress.</li>
            </ul>

            <h5 className="font-semibold text-gray-900 mt-4 mb-2">Limits on legal vulnerability</h5>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Members cannot be punished or sued for legislative statements.</li>
              <li>Courts cannot question Congress' motivations or statements during debate.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">❌ What It Does NOT Say</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Does not prohibit Congress from raising its own salary—only that it must be done by law. (The 27th Amendment later restricts when pay raises take effect.)</li>
              <li>Does not grant members immunity for crimes or for actions outside legislative functions.</li>
              <li>Does not prevent members from being subpoenaed for non-legislative conduct.</li>
              <li>Does not forbid Congress from lowering salaries.</li>
              <li>Does not authorize perks, pensions, or benefits—those are created entirely by statute, not the Constitution.</li>
              <li>Does not define what counts as "civil office" beyond typical federal executive or judicial roles.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚖️ Key Supreme Court Cases</h4>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">Gravel v. United States (1972)</h5>
                <p className="text-gray-700 mt-2">
                  The Speech or Debate Clause protects speeches, votes, committee actions, and any "legislative acts." 
                  But it does not protect political activity, press releases, criminal conduct, or private publication of documents.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">United States v. Brewster (1972)</h5>
                <p className="text-gray-700 mt-2">
                  The Speech or Debate Clause does not protect bribery, even if it involves legislative matters.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">Kilbourn v. Thompson (1881)</h5>
                <p className="text-gray-700 mt-2">
                  Legislative immunity is absolute for legitimate legislative acts; not for criminal or private actions.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">Evans v. Stephens (2004) (11th Cir.)</h5>
                <p className="text-gray-700 mt-2">
                  Clarified boundaries of "civil office" and incompatibility clauses.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">U.S. v. Rose (1848)</h5>
                <p className="text-gray-700 mt-2">
                  Arrest immunity does not apply to any indictable offense.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">📝 Provisions Modified by Later Amendments</h4>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <h5 className="font-bold text-gray-900 mb-2">✔ 27th Amendment (1992)</h5>
              <p className="text-gray-700">
                Congress can still raise its pay — but the raise cannot take effect until after the next House election, 
                preventing immediate self-enrichment.
              </p>
              <p className="text-gray-700 mt-2">
                No other part of Section 6 has been altered; all other clauses remain fully operative.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
            <p className="text-gray-700">
              <strong>TICRI Summary:</strong> Article I, Section 6 protects legislative independence, separation of powers, 
              freedom of debate in Congress, and protection from executive pressure. It prevents corruption by blocking Congress 
              from creating jobs for themselves, prohibiting members from holding federal office simultaneously, and preventing 
              executive "bribery by appointment." It secures democratic accountability by requiring transparent pay set by law and 
              ensuring voters can react to pay changes (via the 27th Amendment).
            </p>
          </div>
        </div>

        {/* SECTION 7 */}
        <div id="section-7" className="bg-white rounded-lg shadow-md p-8 mb-6 scroll-mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Section 7 — How Bills Become Laws
          </h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">📜 Exact Constitutional Text</h4>
            <div className="space-y-3">
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                <strong>Section 7.</strong>
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                All Bills for raising Revenue shall originate in the House of Representatives; but the Senate may propose 
                or concur with Amendments as on other Bills.
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                Every Bill which shall have passed the House of Representatives and the Senate, shall, before it become a 
                Law, be presented to the President of the United States; If he approve he shall sign it, but if not he shall 
                return it, with his Objections to that House in which it shall have originated, who shall enter the Objections 
                at large on their Journal, and proceed to reconsider it. If after such Reconsideration two thirds of that House 
                shall agree to pass the Bill, it shall be sent, together with the Objections, to the other House, by which it 
                shall likewise be reconsidered, and if approved by two thirds of that House, it shall become a Law. But in all 
                such Cases the Votes of both Houses shall be determined by Yeas and Nays, and the Names of the Persons voting 
                for and against the Bill shall be entered on the Journal of each House respectively. If any Bill shall not be 
                returned by the President within ten Days (Sundays excepted) after it shall have been presented to him, the Same 
                shall be a Law, in like Manner as if he had signed it, unless the Congress by their Adjournment prevent its 
                Return, in which Case it shall not be a Law.
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                Every Order, Resolution, or Vote to which the Concurrence of the Senate and House of Representatives may be 
                necessary (except on a question of Adjournment) shall be presented to the President of the United States; and 
                before the Same shall take Effect, shall be approved by him, or being disapproved by him, shall be repassed by 
                two thirds of the Senate and House of Representatives, according to the Rules and Limitations prescribed in the 
                Case of a Bill.
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">💭 Plain English Translation</h4>
            <div className="space-y-3">
              <p className="text-gray-700">
                Money bills (laws that raise revenue, such as taxes) must start in the House of Representatives, but the Senate 
                can amend them.
              </p>
              <p className="text-gray-700">
                For any bill to become law, it must pass both the House and Senate and then be sent to the President. The 
                President can sign it into law or veto it and send it back with objections. Congress can override the veto with 
                a two-thirds vote in each chamber.
              </p>
              <p className="text-gray-700">
                If the President does nothing for ten days (not counting Sundays), the bill becomes law unless Congress has 
                adjourned in a way that prevents its return — in that case, it does not become law (a "pocket veto").
              </p>
              <p className="text-gray-700">
                Any order or resolution requiring the agreement of both chambers must also be sent to the President for approval 
                or veto, except for adjournments.
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚡ Government Powers Created</h4>
            
            <h5 className="font-semibold text-gray-900 mt-4 mb-2">The Origination Clause</h5>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Gives the House of Representatives the exclusive power to initiate revenue-raising bills.</li>
              <li>Senate retains power to amend those bills.</li>
            </ul>

            <h5 className="font-semibold text-gray-900 mt-4 mb-2">The Presentment Clause</h5>
            <p className="text-gray-700 mb-2">All bills (revenue or otherwise) must follow a specific procedure:</p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
              <li>Pass both chambers in identical form</li>
              <li>Be presented to the President</li>
              <li>President signs (law), vetoes (returns to Congress), or waits 10 days</li>
              <li>If vetoed, Congress may override with 2/3 vote in each chamber</li>
            </ol>

            <h5 className="font-semibold text-gray-900 mt-4 mb-2">Presidential Veto Authority</h5>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>President can reject any bill and return it with objections</li>
              <li>Veto must be of the entire bill (no line-item vetoes)</li>
              <li>Congress records veto objections and votes on override by roll call</li>
            </ul>

            <h5 className="font-semibold text-gray-900 mt-4 mb-2">Congressional Override Power</h5>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Congress can override a veto with 2/3 vote in each chamber</li>
              <li>Votes must be recorded by yeas and nays (roll call)</li>
              <li>Override converts vetoed bill into law without presidential approval</li>
            </ul>

            <h5 className="font-semibold text-gray-900 mt-4 mb-2">Pocket Veto</h5>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>If President takes no action for 10 days while Congress is in session, bill becomes law</li>
              <li>If Congress adjourns within those 10 days and prevents return, bill dies ("pocket veto")</li>
              <li>Pocket veto cannot be overridden because bill was not formally returned</li>
            </ul>

            <h5 className="font-semibold text-gray-900 mt-4 mb-2">Bicameralism + Presentment Requirement</h5>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Every legislative action requiring force of law must pass both chambers AND be presented to President</li>
              <li>This includes orders, resolutions, and votes (except adjournments)</li>
              <li>No shortcuts allowed—INS v. Chadha struck down "legislative vetoes"</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">🚫 Government Restrictions</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Senate Cannot Originate Revenue Bills</strong> — Only House can start tax bills (but Senate can amend)</li>
              <li><strong>President Cannot Line-Item Veto</strong> — Must accept or reject entire bill (Clinton v. City of New York, 1998)</li>
              <li><strong>No Legislative Vetoes</strong> — Congress cannot pass laws allowing one chamber to veto executive actions (INS v. Chadha, 1983)</li>
              <li><strong>Cannot Skip Bicameralism</strong> — Both House and Senate must pass identical text</li>
              <li><strong>Cannot Skip Presentment</strong> — President must have opportunity to sign or veto</li>
              <li><strong>President Cannot Amend Bills</strong> — Only sign, veto, or allow to become law by inaction</li>
              <li><strong>No Partial Approvals</strong> — President cannot sign parts of a bill and reject others</li>
              <li><strong>Override Requires Supermajority</strong> — 2/3 of each chamber, not simple majority</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">❌ What It Does NOT Say</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Does not say spending bills (appropriations) must originate in the House—only revenue-raising bills.</li>
              <li>Does not require the President to endorse or sign adjournments.</li>
              <li>Does not give the President unilateral power to make law.</li>
              <li>Does not allow Congress to skip the President by calling a bill something else (joint resolutions count).</li>
              <li>Does not allow the President to add notes, conditions, or partial approvals to signed legislation.</li>
              <li>Does not authorize executive orders to override statutes.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚖️ Key Supreme Court Cases</h4>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">Clinton v. City of New York (1998)</h5>
                <p className="text-gray-700 mt-2">
                  The line-item veto is unconstitutional; the President must approve or reject the entire bill.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">INS v. Chadha (1983)</h5>
                <p className="text-gray-700 mt-2">
                  Congress cannot pass legislation without bicameralism + presentment, even for "resolutions." Legislative 
                  vetoes are unconstitutional—Congress must follow Article I procedures when taking legislative action.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">United States v. Munoz-Flores (1990)</h5>
                <p className="text-gray-700 mt-2">
                  A bill is "for raising revenue" only if its primary purpose is to raise money for the general treasury — 
                  not if it merely generates revenue incidentally.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">Pocket Veto Case (1929) & Wright v. United States (1938)</h5>
                <p className="text-gray-700 mt-2">
                  Clarified when adjournment prevents bill return and when pocket veto applies.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">Field v. Clark (1892)</h5>
                <p className="text-gray-700 mt-2">
                  Courts accept the enrolled bill authenticated by Congress; they do not investigate internal legislative procedures.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">📝 Provisions Modified by Later Amendments</h4>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <h5 className="font-bold text-gray-900 mb-2">20th Amendment</h5>
              <p className="text-gray-700">
                Adjusted the congressional calendar, which affects how the 10-day clock for vetoes sometimes functions.
              </p>
              <p className="text-gray-700 mt-2">
                No other part of Section 7 has been altered. The Origination Clause and Presentment Clause remain fully operative.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
            <p className="text-gray-700">
              <strong>TICRI Summary:</strong> Article I, Section 7 establishes the entire federal lawmaking process: House 
              starts tax bills, Senate can amend, both must pass a bill, President signs or vetoes, Congress may override. 
              No legislative shortcuts allowed. This section sets the foundational rule: <strong>Laws only exist when all 
              three branches participate as the Constitution requires.</strong>
            </p>
          </div>
        </div>

        {/* SECTION 8 */}
        <div id="section-8" className="bg-white rounded-lg shadow-md p-8 mb-6 scroll-mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Section 8 — Powers of Congress (Enumerated Powers)
          </h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">📜 Exact Constitutional Text</h4>
            <div className="space-y-3">
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                <strong>Section 8.</strong>
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                The Congress shall have Power To lay and collect Taxes, Duties, Imposts and Excises, to pay the Debts and 
                provide for the common Defence and general Welfare of the United States; but all Duties, Imposts and Excises 
                shall be uniform throughout the United States;
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                To borrow Money on the credit of the United States;
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                To regulate Commerce with foreign Nations, and among the several States, and with the Indian Tribes;
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                To establish an uniform Rule of Naturalization, and uniform Laws on the subject of Bankruptcies throughout 
                the United States;
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                To coin Money, regulate the Value thereof, and of foreign Coin, and fix the Standard of Weights and Measures;
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                To provide for the Punishment of counterfeiting the Securities and current Coin of the United States;
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                To establish Post Offices and post Roads;
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                To promote the Progress of Science and useful Arts, by securing for limited Times to Authors and Inventors 
                the exclusive Right to their respective Writings and Discoveries;
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                To constitute Tribunals inferior to the supreme Court;
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                To define and punish Piracies and Felonies committed on the high Seas, and Offences against the Law of Nations;
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                To declare War, grant Letters of Marque and Reprisal, and make Rules concerning Captures on Land and Water;
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                To raise and support Armies, but no Appropriation of Money to that Use shall be for a longer Term than two Years;
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                To provide and maintain a Navy;
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                To make Rules for the Government and Regulation of the land and naval Forces;
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                To provide for calling forth the Militia to execute the Laws of the Union, suppress Insurrections and repel Invasions;
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                To provide for organizing, arming, and disciplining, the Militia, and for governing such Part of them as may 
                be employed in the Service of the United States, reserving to the States respectively, the Appointment of the 
                Officers, and the Authority of training the Militia according to the discipline prescribed by Congress;
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                To exercise exclusive Legislation in all Cases whatsoever, over such District (not exceeding ten Miles square) 
                as may, by Cession of particular States, and the Acceptance of Congress, become the Seat of the Government of 
                the United States…
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                And
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                To make all Laws which shall be necessary and proper for carrying into Execution the foregoing Powers, and all 
                other Powers vested by this Constitution in the Government of the United States, or in any Department or Officer thereof.
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">💭 Plain English Translation</h4>
            <p className="text-gray-700">
              Congress has specific powers. It can tax, borrow money, regulate trade, make rules for naturalization and 
              bankruptcy, coin money, establish post offices, create federal courts, punish crimes on the seas, declare war, 
              raise armies, maintain a navy, call up and regulate the militia, run the capital district, and make any laws 
              necessary to carry out the powers the Constitution gives it.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚡ Government Powers Created</h4>
            
            <h5 className="font-semibold text-gray-900 mt-4 mb-2">(1) Fiscal Powers</h5>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Taxation (must be uniform for indirect taxes)</li>
              <li>Borrowing money</li>
              <li>Paying national debts</li>
              <li>Funding general welfare</li>
              <li>Collecting duties, imposts, excises</li>
            </ul>

            <h5 className="font-semibold text-gray-900 mt-4 mb-2">(2) Commerce Powers</h5>
            <p className="text-gray-700 mb-2">Regulating trade:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>foreign nations</li>
              <li>between states</li>
              <li>with Indian tribes</li>
            </ul>

            <h5 className="font-semibold text-gray-900 mt-4 mb-2">(3) Citizenship & Economic Rules</h5>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Uniform naturalization laws</li>
              <li>Uniform bankruptcy laws</li>
            </ul>

            <h5 className="font-semibold text-gray-900 mt-4 mb-2">(4) Monetary Authority</h5>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Coining money</li>
              <li>Regulating value</li>
              <li>Setting weights and measures</li>
              <li>Punishing counterfeiting</li>
            </ul>

            <h5 className="font-semibold text-gray-900 mt-4 mb-2">(5) Infrastructure & Intellectual Property</h5>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Establishing post offices & post roads</li>
              <li>Copyrights & patents (limited times)</li>
            </ul>

            <h5 className="font-semibold text-gray-900 mt-4 mb-2">(6) Judiciary</h5>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Creating all courts except the Supreme Court (which the Constitution itself creates)</li>
            </ul>

            <h5 className="font-semibold text-gray-900 mt-4 mb-2">(7) Law of Nations & Crime</h5>
            <p className="text-gray-700 mb-2">Defining and punishing:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>piracy</li>
              <li>felonies on high seas</li>
              <li>offenses against international law</li>
            </ul>

            <h5 className="font-semibold text-gray-900 mt-4 mb-2">(8) War & Military</h5>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Declaring war</li>
              <li>Granting letters of marque and reprisal</li>
              <li>Making rules on captures</li>
              <li>Raising and supporting armies (funding max 2 years)</li>
              <li>Maintaining a navy</li>
              <li>Regulating armed forces</li>
            </ul>

            <h5 className="font-semibold text-gray-900 mt-4 mb-2">(9) Militia Powers</h5>
            <p className="text-gray-700 mb-2">Calling forth militia:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>enforce laws</li>
              <li>suppress insurrection</li>
              <li>repel invasions</li>
            </ul>
            <p className="text-gray-700 mt-2 mb-2">Organizing, arming, disciplining militia:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Federal control when militia is in U.S. service</li>
            </ul>
            <p className="text-gray-700 mt-2 mb-2">States retain:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>officer appointments</li>
              <li>training authority</li>
            </ul>

            <h5 className="font-semibold text-gray-900 mt-4 mb-2">(10) Federal District Authority</h5>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Exclusive legislation over D.C. (up to 10 miles square)</li>
            </ul>

            <h5 className="font-semibold text-gray-900 mt-4 mb-2">(11) Necessary and Proper Clause</h5>
            <p className="text-gray-700 mb-2">Congress may pass laws needed to execute:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>its own powers</li>
              <li>powers of the entire government</li>
              <li>powers of executive branch</li>
              <li>powers of judiciary</li>
            </ul>
            <p className="text-gray-700 mt-2">This is the "elastic clause."</p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">🚫 Government Restrictions</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Indirect taxes must be uniform across states.</li>
              <li>Army appropriations cannot last more than two years.</li>
              <li>Commerce Clause allows regulation of commerce, not anything Congress calls commerce.</li>
              <li>Necessary & Proper Clause cannot justify laws that expand federal power beyond enumerated authority, 
                  violate other constitutional protections, or give Congress "general police power" (reserved to states).</li>
              <li>Copyright/patent rights must be temporary and for the purpose of promoting science & arts.</li>
              <li>Militia powers shared with states; Congress cannot eliminate state officers.</li>
              <li>D.C. authority is limited to territory ceded by states.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">❌ What It Does NOT Say</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Does not give Congress unlimited power.</li>
              <li>Does not give Congress "general welfare" authority beyond spending and taxing.</li>
              <li>Does not allow Congress to regulate non-economic activity (this is heavily litigated).</li>
              <li>Does not create federal police power (reserved to states).</li>
              <li>Does not authorize Congress to declare martial law.</li>
              <li>Does not authorize Congress to maintain standing armies indefinitely without appropriations.</li>
              <li>Does not give Congress control over state militias except when in federal service.</li>
              <li>Does not allow Congress to redefine money outside the constitutional framework unless amended.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚖️ Key Supreme Court Cases</h4>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">McCulloch v. Maryland (1819)</h5>
                <p className="text-gray-700 mt-2">
                  Necessary & Proper Clause allows implied powers if tied to enumerated powers. States cannot tax federal institutions.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">Gibbons v. Ogden (1824)</h5>
                <p className="text-gray-700 mt-2">
                  Broad reading of interstate commerce; Congress controls navigation when used for commerce.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">U.S. v. Lopez (1995) & U.S. v. Morrison (2000)</h5>
                <p className="text-gray-700 mt-2">
                  Limits Commerce Clause — Congress cannot regulate non-economic activity by calling it "commerce."
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">NFIB v. Sebelius (2012)</h5>
                <p className="text-gray-700 mt-2">
                  Congress cannot compel commerce (cannot force purchases) under the Commerce Clause.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">J.W. Hampton Jr. & Co. (1928)</h5>
                <p className="text-gray-700 mt-2">
                  Delegation of power to agencies is permitted but must have an "intelligible principle."
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">The Prize Cases (1863)</h5>
                <p className="text-gray-700 mt-2">
                  President may use military force without formal declaration if nation is under attack.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">📝 Amendments Affecting Section 8</h4>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
              <h5 className="font-bold text-gray-900 mb-2">16th Amendment</h5>
              <p className="text-gray-700">
                Gives Congress power to tax income without apportionment. This modifies the taxation structure in Section 8.
              </p>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <h5 className="font-bold text-gray-900 mb-2">Militia Clauses + 2nd Amendment</h5>
              <p className="text-gray-700">
                Section 8 militia powers must be interpreted in harmony with state authority and individual right to keep 
                and bear arms.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
            <p className="text-gray-700">
              <strong>TICRI Summary:</strong> Article I, Section 8 = The Enumerated Powers of Congress. This section 
              establishes every major federal power: taxation, spending, war, commerce, money, courts, immigration, military, 
              and implied powers. <strong>Everything the federal government does must trace back to something written here 
              or in the amendments.</strong>
            </p>
          </div>
        </div>

        {/* SECTION 9 */}
        <div id="section-9" className="bg-white rounded-lg shadow-md p-8 mb-6 scroll-mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Section 9 — Limits on Federal Government
          </h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">📜 Exact Constitutional Text</h4>
            <div className="space-y-3">
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                <strong>Section 9.</strong>
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                The Migration or Importation of such Persons as any of the States now existing shall think proper to admit, 
                shall not be prohibited by the Congress prior to the Year one thousand eight hundred and eight, but a Tax or 
                duty may be imposed on such Importation, not exceeding ten dollars for each Person.
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                The Privilege of the Writ of Habeas Corpus shall not be suspended, unless when in Cases of Rebellion or 
                Invasion the public Safety may require it.
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                No Bill of Attainder or ex post facto Law shall be passed.
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                No Capitation, or other direct, Tax shall be laid, unless in Proportion to the Census or Enumeration herein 
                before directed to be taken.
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                No Tax or Duty shall be laid on Articles exported from any State.
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                No Preference shall be given by any Regulation of Commerce or Revenue to the Ports of one State over those of 
                another; nor shall Vessels bound to, or from, one State, be obliged to enter, clear, or pay Duties in another.
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                No Money shall be drawn from the Treasury, but in Consequence of Appropriations made by Law; and a regular 
                Statement and Account of the Receipts and Expenditures of all public Money shall be published from time to time.
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                No Title of Nobility shall be granted by the United States: And no Person holding any Office of Profit or Trust 
                under them, shall, without the Consent of the Congress, accept of any present, Emolument, Office, or Title, of 
                any kind whatever, from any King, Prince, or foreign State.
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">💭 Plain English Translation</h4>
            <div className="space-y-3">
              <p className="text-gray-700">
                Congress could not ban the slave trade before 1808, but it could tax imported persons. The right to habeas 
                corpus cannot be suspended except during rebellion or invasion. Congress cannot pass laws that declare someone 
                guilty without trial or laws that punish people retroactively.
              </p>
              <p className="text-gray-700">
                Direct taxes must be based on population unless changed by later amendments (the 16th Amendment allows income 
                taxes without apportionment). Congress cannot tax exports, nor can it favor one state's ports over another.
              </p>
              <p className="text-gray-700">
                No money can be spent by the federal government unless Congress passes a law authorizing it, and the government 
                must publish its financial records. The United States cannot grant titles of nobility, and federal officers 
                cannot accept gifts or titles from foreign governments without congressional approval.
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">🚫 Government Powers Limited or Prohibited</h4>
            
            <h5 className="font-semibold text-gray-900 mt-4 mb-2">(1) Slave Trade Clause (No longer operative after 1808 + 13th Amendment)</h5>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Before 1808: Congress could not ban the importation of slaves.</li>
              <li>Could impose up to a $10 tax per imported person.</li>
              <li>After 1808: Congress could prohibit it.</li>
              <li>After the 13th Amendment (1865): The clause is obsolete.</li>
            </ul>

            <h5 className="font-semibold text-gray-900 mt-4 mb-2">(2) Habeas Corpus</h5>
            <p className="text-gray-700 mb-2">Congress CANNOT suspend habeas corpus except:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>rebellion</li>
              <li>invasion</li>
              <li>when public safety requires it</li>
            </ul>
            <p className="text-gray-700 mt-2">This ensures the government cannot detain people indefinitely without judicial review.</p>

            <h5 className="font-semibold text-gray-900 mt-4 mb-2">(3) No Bills of Attainder</h5>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Congress cannot declare someone guilty without a trial.</li>
            </ul>

            <h5 className="font-semibold text-gray-900 mt-4 mb-2">(4) No Ex Post Facto Laws</h5>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Congress cannot punish people for acts that were legal when committed.</li>
            </ul>

            <h5 className="font-semibold text-gray-900 mt-4 mb-2">(5) Direct Tax Limit (Modified by 16th Amendment)</h5>
            <p className="text-gray-700 mb-2">Originally:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Direct taxes must be apportioned by population.</li>
            </ul>
            <p className="text-gray-700 mt-2">
              The 16th Amendment (1913) allows income taxes without apportionment, overriding this requirement for income taxes.
            </p>

            <h5 className="font-semibold text-gray-900 mt-4 mb-2">(6) No Export Taxes</h5>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Congress cannot tax goods exported from any state.</li>
            </ul>

            <h5 className="font-semibold text-gray-900 mt-4 mb-2">(7) No Port Preferences</h5>
            <p className="text-gray-700 mb-2">Congress cannot:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>favor the ports of one state</li>
              <li>require ships to enter or pay duties in another state's port</li>
            </ul>
            <p className="text-gray-700 mt-2">This protects equal commerce among states.</p>

            <h5 className="font-semibold text-gray-900 mt-4 mb-2">(8) Spending Restrictions</h5>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Federal money can ONLY be spent by law (through appropriations).</li>
              <li>Government must publish financial statements ("regular statement and account").</li>
            </ul>

            <h5 className="font-semibold text-gray-900 mt-4 mb-2">(9) No Titles of Nobility</h5>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>U.S. cannot grant aristocratic titles.</li>
              <li>No federal officeholder may accept foreign titles, gifts, or offices without Congress's consent.</li>
              <li>This is the Foreign Emoluments Clause.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">🚫 Government Restrictions Summarized</h4>
            <p className="text-gray-700 mb-2"><strong>Congress may NOT:</strong></p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Suspend habeas corpus (except rebellion/invasion)</li>
              <li>Pass bills of attainder</li>
              <li>Pass ex post facto laws</li>
              <li>Lay direct taxes without apportionment (except income taxes due to the 16th Amendment)</li>
              <li>Tax exports</li>
              <li>Favor one state's ports over another</li>
              <li>Spend money without a law authorizing it</li>
              <li>Hide financial records</li>
              <li>Grant titles of nobility</li>
              <li>Allow federal officers to accept foreign gifts/titles without permission</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">❌ What It Does NOT Say</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Does not define what counts as a "direct tax" (courts clarified over time).</li>
              <li>Does not authorize Congress to suspend habeas corpus lightly; the exceptions are extremely narrow.</li>
              <li>Does not prohibit all foreign gifts — only prohibits accepting them without congressional consent.</li>
              <li>Does not prevent the President from receiving foreign gifts entirely — the Emoluments Clause applies broadly but is subject to Congress's approval.</li>
              <li>Does not prohibit Congress from regulating imports — only exports.</li>
              <li>Does not prevent Congress from spending money for any purpose it chooses (the limit is authorization, not purpose).</li>
              <li>Does not define "regular publication" of financial statements—Congress determines this by law.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚖️ Key Supreme Court Cases</h4>
            
            <h5 className="font-semibold text-gray-900 mt-4 mb-3">(A) Habeas Corpus</h5>
            <div className="space-y-4 mb-4">
              <div className="bg-blue-50 p-4 rounded">
                <h6 className="font-bold text-gray-900">Ex parte Merryman (1861)</h6>
                <p className="text-gray-700 mt-2">
                  President alone cannot suspend habeas corpus.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h6 className="font-bold text-gray-900">Boumediene v. Bush (2008)</h6>
                <p className="text-gray-700 mt-2">
                  Detainees must have access to habeas unless properly suspended.
                </p>
              </div>
            </div>

            <h5 className="font-semibold text-gray-900 mt-4 mb-3">(B) Bills of Attainder</h5>
            <div className="space-y-4 mb-4">
              <div className="bg-blue-50 p-4 rounded">
                <h6 className="font-bold text-gray-900">Cummings v. Missouri (1867)</h6>
                <p className="text-gray-700 mt-2">
                  Bills of attainder are forbidden.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h6 className="font-bold text-gray-900">United States v. Brown (1965)</h6>
                <p className="text-gray-700 mt-2">
                  Reaffirmed prohibition on bills of attainder.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h6 className="font-bold text-gray-900">Nixon v. Adm'r of General Services (1977)</h6>
                <p className="text-gray-700 mt-2">
                  Not every law targeting specific individuals is a bill of attainder.
                </p>
              </div>
            </div>

            <h5 className="font-semibold text-gray-900 mt-4 mb-3">(C) Ex Post Facto Laws</h5>
            <div className="space-y-4 mb-4">
              <div className="bg-blue-50 p-4 rounded">
                <h6 className="font-bold text-gray-900">Calder v. Bull (1798)</h6>
                <p className="text-gray-700 mt-2">
                  Applies only to criminal laws.
                </p>
              </div>
            </div>

            <h5 className="font-semibold text-gray-900 mt-4 mb-3">(D) Direct and Indirect Taxes</h5>
            <div className="space-y-4 mb-4">
              <div className="bg-blue-50 p-4 rounded">
                <h6 className="font-bold text-gray-900">Pollock v. Farmers' Loan & Trust Co. (1895)</h6>
                <p className="text-gray-700 mt-2">
                  Income tax = direct tax. Overridden by the 16th Amendment.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h6 className="font-bold text-gray-900">NFIB v. Sebelius (2012)</h6>
                <p className="text-gray-700 mt-2">
                  Congress may levy taxes even if labeled otherwise, but cannot force commerce under tax power.
                </p>
              </div>
            </div>

            <h5 className="font-semibold text-gray-900 mt-4 mb-3">(E) Emoluments</h5>
            <div className="space-y-4 mb-4">
              <div className="bg-blue-50 p-4 rounded">
                <p className="text-gray-700">
                  Modern litigation has reaffirmed: Federal officials cannot accept foreign gifts or payments without Congress's approval.
                </p>
              </div>
            </div>

            <h5 className="font-semibold text-gray-900 mt-4 mb-3">(F) Spending Clause Controls</h5>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded">
                <h6 className="font-bold text-gray-900">Cincinnati Soap Co. v. U.S. (1937)</h6>
                <p className="text-gray-700 mt-2">
                  Congress controls appropriations.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h6 className="font-bold text-gray-900">Train v. City of New York (1975)</h6>
                <p className="text-gray-700 mt-2">
                  President cannot refuse to spend appropriated funds.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">📝 Provisions Modified by Amendments</h4>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
              <h5 className="font-bold text-gray-900 mb-2">13th Amendment</h5>
              <p className="text-gray-700">
                Abolished slavery, rendering the slave importation clause obsolete.
              </p>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <h5 className="font-bold text-gray-900 mb-2">16th Amendment</h5>
              <p className="text-gray-700">
                Allows income taxes without apportionment, superseding the direct-tax limits in Section 9.
              </p>
              <p className="text-gray-700 mt-2">
                No other clauses have been altered; the rest remain fully operative.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
            <p className="text-gray-700">
              <strong>TICRI Summary:</strong> Article I, Section 9 is the Constitution's list of prohibitions on Congress — 
              it defines what Congress may not do. These are absolute structural safeguards protecting individual liberty, 
              states, interstate equality, the economy, and foundational rule of law. Combined with Section 10's limits on 
              states, this section forms the backbone of constitutional checks against government abuse.
            </p>
          </div>
        </div>

        {/* SECTION 10 */}
        <div id="section-10" className="bg-white rounded-lg shadow-md p-8 mb-6 scroll-mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Section 10 — Limits on State Governments
          </h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">📜 Exact Constitutional Text</h4>
            <div className="space-y-3">
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                <strong>Section 10.</strong>
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                No State shall enter into any Treaty, Alliance, or Confederation; grant Letters of Marque and Reprisal; coin 
                Money; emit Bills of Credit; make any Thing but gold and silver Coin a Tender in Payment of Debts; pass any 
                Bill of Attainder, ex post facto Law, or Law impairing the Obligation of Contracts, or grant any Title of Nobility.
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                No State shall, without the Consent of the Congress, lay any Imposts or Duties on Imports or Exports, except 
                what may be absolutely necessary for executing it's inspection Laws: and the net Produce of all Duties and 
                Imposts, laid by any State on Imports or Exports, shall be for the Use of the Treasury of the United States; 
                and all such Laws shall be subject to the Revision and Control of the Congress.
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                No State shall, without the Consent of Congress, lay any Duty of Tonnage, keep Troops, or Ships of War in time 
                of Peace, enter into any Agreement or Compact with another State, or with a foreign Power, or engage in War, 
                unless actually invaded, or in such imminent Danger as will not admit of delay.
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">💭 Plain English Translation</h4>
            <div className="space-y-3">
              <p className="text-gray-700">
                States are forbidden from acting like independent nations. They cannot make treaties, coin money, create their 
                own currency, declare war, or enter alliances. States also cannot pass retroactive criminal laws, declare people 
                guilty without trial, or violate contracts.
              </p>
              <p className="text-gray-700">
                States may not tax imports or exports without Congress's permission, and any money collected must go to the 
                federal Treasury. States need congressional approval to keep armies or warships in peacetime, or to enter 
                agreements with other states or foreign nations — unless they are actually invaded or in immediate danger.
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">🚫 Government Powers Limited (What States Are Forbidden to Do)</h4>
            
            <h5 className="font-semibold text-gray-900 mt-4 mb-2">(A) States cannot act as sovereign nations</h5>
            <p className="text-gray-700 mb-2">States are prohibited from:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>making treaties</li>
              <li>forming alliances</li>
              <li>forming confederations</li>
              <li>issuing letters of marque and reprisal</li>
              <li>declaring war (unless invaded or in imminent danger)</li>
            </ul>

            <h5 className="font-semibold text-gray-900 mt-4 mb-2">(B) States cannot create or manipulate currency</h5>
            <p className="text-gray-700 mb-2">States may NOT:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>coin money</li>
              <li>issue bills of credit (paper money)</li>
              <li>make anything but gold or silver a legal tender for paying debts</li>
            </ul>
            <p className="text-gray-700 mt-2 italic text-sm">
              (This clause was significantly weakened after the Civil War due to national currency laws, but the text remains.)
            </p>

            <h5 className="font-semibold text-gray-900 mt-4 mb-2">(C) States cannot violate basic rule-of-law protections</h5>
            <p className="text-gray-700 mb-2">States may NOT pass:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>bills of attainder</li>
              <li>ex post facto laws</li>
              <li>laws impairing contract obligations</li>
              <li>titles of nobility</li>
            </ul>

            <h5 className="font-semibold text-gray-900 mt-4 mb-2">(D) States cannot violate federal control of interstate and international commerce</h5>
            <p className="text-gray-700 mb-2">States may NOT:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>impose taxes on imports/exports without Congress's consent</li>
              <li>impose duties of tonnage without consent</li>
              <li>keep troops or warships in peacetime without consent</li>
            </ul>

            <h5 className="font-semibold text-gray-900 mt-4 mb-2">(E) States cannot enter into compacts</h5>
            <p className="text-gray-700 mb-2">Unless Congress approves, states cannot:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>enter agreements with other states</li>
              <li>enter agreements with foreign powers</li>
            </ul>
            <p className="text-gray-700 mt-2">This protects national unity.</p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">🚫 Government Restrictions Summarized</h4>
            <p className="text-gray-700 mb-2"><strong>States MAY NOT:</strong></p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Make treaties</li>
              <li>Form alliances or confederations</li>
              <li>Coin money</li>
              <li>Issue their own paper currency</li>
              <li>Use anything but gold/silver as legal tender</li>
              <li>Pass bills of attainder</li>
              <li>Pass ex post facto laws</li>
              <li>Impair contracts</li>
              <li>Grant titles of nobility</li>
              <li>Tax imports/exports without Congress's consent</li>
              <li>Tax tonnage</li>
              <li>Keep armies or navies in peacetime without consent</li>
              <li>Enter compacts without consent</li>
              <li>Engage in war unless invaded or in immediate danger</li>
            </ul>
            <p className="text-gray-700 mt-4">
              <strong>Note:</strong> No other section of the Constitution places this many prohibitions on states — Section 10 
              is the hard limit on state sovereignty.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">❌ What It Does NOT Say</h4>
            
            <h5 className="font-semibold text-gray-900 mt-4 mb-2">Does not restrict states from:</h5>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>running their own police powers</li>
              <li>establishing state currencies for accounting (but not legal tender)</li>
              <li>issuing bonds (legal, as debt instruments, not currency)</li>
              <li>having state militias / National Guard units (authorized elsewhere)</li>
              <li>entering routine cooperative agreements with federal agencies (non-compacts)</li>
            </ul>

            <h5 className="font-semibold text-gray-900 mt-4 mb-2">Does not allow states to:</h5>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>nullify federal law</li>
              <li>secede</li>
              <li>claim foreign policy authority</li>
            </ul>

            <h5 className="font-semibold text-gray-900 mt-4 mb-2">Does not prohibit states from:</h5>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>using fiat currency created by Congress</li>
              <li>establishing state inspection laws</li>
              <li>taxing goods once they are inside the state (sales, use, excise)</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚖️ Key Supreme Court Cases</h4>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">Fletcher v. Peck (1810)</h5>
                <p className="text-gray-700 mt-2">
                  States cannot impair vested contractual obligations — first major use of the Contracts Clause.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">Dartmouth College v. Woodward (1819)</h5>
                <p className="text-gray-700 mt-2">
                  Reaffirmed the Contracts Clause: states cannot interfere with private corporate charters.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">Gibbons v. Ogden (1824)</h5>
                <p className="text-gray-700 mt-2">
                  State laws interfering with interstate commerce violate the Commerce Clause + Section 10.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">Craig v. Missouri (1830)</h5>
                <p className="text-gray-700 mt-2">
                  States cannot issue bills of credit — meaning they cannot circulate paper money.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">Austin v. New Hampshire (1975)</h5>
                <p className="text-gray-700 mt-2">
                  States cannot impose discriminatory taxes on citizens of other states.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">United States Steel v. Multistate Tax Commission (1978)</h5>
                <p className="text-gray-700 mt-2">
                  Interstate compacts without increased state power do not require congressional approval.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">New York v. United States (1992)</h5>
                <p className="text-gray-700 mt-2">
                  States cannot be "commandeered" by the federal government, but state limits under Section 10 remain in force.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">📝 Provisions Modified by Later Amendments</h4>
            <div className="space-y-4">
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <h5 className="font-bold text-gray-900 mb-2">13th Amendment</h5>
                <p className="text-gray-700">
                  Not directly modifying Section 10, but elimination of slavery changed the context of state powers.
                </p>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <h5 className="font-bold text-gray-900 mb-2">14th Amendment</h5>
                <p className="text-gray-700 mb-2">
                  Applies many restrictions to states through:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Due process</li>
                  <li>Equal protection</li>
                  <li>Privileges or immunities</li>
                </ul>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <h5 className="font-bold text-gray-900 mb-2">16th Amendment</h5>
                <p className="text-gray-700">
                  Does not affect states but changed federal tax structure, altering some interactions with Section 10's taxation limits.
                </p>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <h5 className="font-bold text-gray-900 mb-2">17th Amendment</h5>
                <p className="text-gray-700">
                  Impacts state legislatures but not Section 10 directly.
                </p>
              </div>
              <p className="text-gray-700 mt-4">
                <strong>Note:</strong> No clause in Section 10 has been formally repealed or superseded, but national currency 
                laws and federal supremacy significantly limit the effect of the "gold and silver" tender clause.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
            <p className="text-gray-700 mb-4">
              <strong>TICRI Summary:</strong> Article I, Section 10 is the Constitution's list of prohibitions on state 
              governments — placing absolute limits on state sovereignty to prevent interstate conflict, economic fragmentation, 
              separate foreign policies, competing currencies, and violations of contract rights.
            </p>
            <p className="text-gray-700">
              This section creates the foundation of federal supremacy and national unity, preventing states from acting as 
              independent nations.
            </p>
          </div>
        </div>

        {/* CLOSING */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg mt-8">
          <h3 className="text-2xl font-bold mb-4">Article I Summary</h3>
          <p className="text-lg leading-relaxed">
            <strong>Article I establishes Congress as the first branch of government with enumerated powers and important 
            constitutional limits, creating the foundation for all federal legislative authority while preserving the federal 
            system and protecting individual rights.</strong>
          </p>
        </div>
      </div>
    </div>
  </div>
  );
}
