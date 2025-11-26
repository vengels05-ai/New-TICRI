import Link from 'next/link';

export default function Article2Page() {
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
            <span className="text-5xl">🏢</span>
            <div>
              <h1 className="text-4xl font-bold mb-2">Article II</h1>
              <h2 className="text-2xl font-semibold">The Executive Branch</h2>
            </div>
          </div>
          <p className="text-lg leading-relaxed">
            Article II establishes the executive branch headed by the President of the United States, defining the 
            President's powers, duties, qualifications, election process, and the limits on executive authority.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Overview</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Article II creates the <strong>presidency</strong> as the second branch of government, vesting executive power 
            in a single individual elected through the Electoral College, with specific powers balanced by congressional 
            and judicial checks. The President executes laws, commands the military, conducts foreign policy, and ensures 
            faithful execution of constitutional duties.
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
              § 1 — Executive Power & Presidential Election
            </a>
            <a href="#section-2" className="text-blue-600 hover:text-blue-800 hover:underline">
              § 2 — Presidential Powers
            </a>
            <a href="#section-3" className="text-blue-600 hover:text-blue-800 hover:underline">
              § 3 — Presidential Duties
            </a>
            <a href="#section-4" className="text-blue-600 hover:text-blue-800 hover:underline">
              § 4 — Impeachment
            </a>
          </div>
        </div>

        {/* SECTION 1 */}
        <div id="section-1" className="bg-white rounded-lg shadow-md p-8 mb-6 scroll-mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Section 1 — Executive Power & Presidential Election
          </h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">📜 Exact Text (Excerpts)</h4>
            <div className="space-y-3">
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                "The executive Power shall be vested in a President of the United States of America. He shall hold his 
                Office during the Term of four Years..."
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                "No Person except a natural born Citizen, or a Citizen of the United States, at the time of the Adoption 
                of this Constitution, shall be eligible to the Office of President; neither shall any Person be eligible 
                to that Office who shall not have attained to the Age of thirty five Years, and been fourteen Years a 
                Resident within the United States."
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                "Before he enter on the Execution of his Office, he shall take the following Oath or Affirmation:—'I do 
                solemnly swear (or affirm) that I will faithfully execute the Office of President of the United States, 
                and will to the best of my Ability, preserve, protect and defend the Constitution of the United States.'"
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">💭 Plain English</h4>
            <p className="text-gray-700">
              All executive power belongs to the President of the United States. The President serves a four-year term and 
              is elected through the Electoral College system. To be President, a person must be a natural-born U.S. citizen 
              (or a citizen at the time the Constitution was adopted), at least 35 years old, and have lived in the United 
              States for at least 14 years. Before taking office, the President must swear to faithfully execute the office 
              and preserve, protect, and defend the Constitution.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚡ Government Powers Created</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Creates the Presidency</strong> — Vests all executive power in a single individual</li>
              <li><strong>Four-Year Term</strong> — President serves fixed term (limited to two terms by 22nd Amendment)</li>
              <li><strong>Electoral College System</strong> — Presidents elected indirectly through state electors</li>
              <li><strong>Vice Presidency</strong> — Creates office of Vice President as successor and Senate president</li>
              <li><strong>Presidential Succession</strong> — Establishes Vice President as first in line (details in 25th Amendment)</li>
              <li><strong>Presidential Compensation</strong> — Receives salary that cannot be increased or decreased during term</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">📋 Presidential Qualifications</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li><strong>Natural-born citizen</strong> of the United States (or citizen at time of adoption)</li>
              <li><strong>At least 35 years old</strong></li>
              <li><strong>Resident of the United States for at least 14 years</strong></li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">🚫 Government Restrictions</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>No Additional Compensation</strong> — President cannot receive other federal or state pay during term</li>
              <li><strong>Oath Required</strong> — Must swear to preserve, protect, and defend the Constitution</li>
              <li><strong>Fixed Term</strong> — Cannot extend own term beyond four years (elections mandatory)</li>
              <li><strong>Two-Term Limit</strong> — Cannot serve more than two terms (22nd Amendment)</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">❌ What It Does NOT Say</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Does NOT grant unlimited executive power</li>
              <li>Does NOT allow President to make laws</li>
              <li>Does NOT create power to act without constitutional authority</li>
              <li>Does NOT eliminate congressional or judicial checks on executive action</li>
              <li>Does NOT define "natural born citizen" explicitly</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚖️ Key Supreme Court Cases</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 text-sm">
              <li><strong>Youngstown Sheet & Tube Co. v. Sawyer (1952)</strong> — President cannot seize private property without congressional authorization; executive power limited</li>
              <li><strong>United States v. Nixon (1974)</strong> — President not above the law; must comply with judicial subpoenas</li>
              <li><strong>Clinton v. Jones (1997)</strong> — President subject to civil lawsuits while in office</li>
              <li><strong>Trump v. Anderson (2024)</strong> — States cannot unilaterally remove candidates from presidential ballot under Section 3 of 14th Amendment</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> The original Electoral College design (state legislatures choosing electors) was 
              modified by the 12th Amendment (1804) and further reformed by the 23rd Amendment (1961) giving D.C. electors.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div id="section-2" className="bg-white rounded-lg shadow-md p-8 mb-6 scroll-mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Section 2 — Presidential Powers
          </h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">📜 Exact Text (Excerpts)</h4>
            <div className="space-y-3">
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                "The President shall be Commander in Chief of the Army and Navy of the United States, and of the Militia 
                of the several States, when called into the actual Service of the United States..."
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                "He shall have Power, by and with the Advice and Consent of the Senate, to make Treaties, provided two thirds 
                of the Senators present concur; and he shall nominate, and by and with the Advice and Consent of the Senate, 
                shall appoint Ambassadors, other public Ministers and Consuls, Judges of the supreme Court, and all other 
                Officers of the United States..."
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                "...he shall have Power to grant Reprieves and Pardons for Offences against the United States, except in 
                Cases of Impeachment."
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">💭 Plain English</h4>
            <p className="text-gray-700">
              The President commands the military, grants pardons for federal crimes (but not impeachment), makes treaties 
              (with 2/3 Senate approval), and nominates federal judges and executive officers (with Senate confirmation). 
              The President can also fill temporary vacancies when the Senate is not in session and can request written 
              opinions from cabinet officials.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚡ Presidential Powers</h4>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">🎖️ Military Powers</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li><strong>Commander in Chief</strong> — Commands armed forces and state militias when federalized</li>
                  <li><strong>NOT Power to Declare War</strong> — That power belongs to Congress (Article I, Section 8)</li>
                  <li>May direct military operations and strategy</li>
                  <li>Makes military appointments (with Senate consent)</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">🤝 Foreign Affairs Powers</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li><strong>Treaty Power</strong> — Negotiate and make treaties (requires 2/3 Senate approval)</li>
                  <li><strong>Ambassadorial Appointments</strong> — Appoint ambassadors and foreign ministers (with Senate consent)</li>
                  <li><strong>Diplomatic Recognition</strong> — Receive foreign ambassadors (power to recognize nations)</li>
                  <li>Conduct foreign policy and international negotiations</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">⚖️ Appointment Powers</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li><strong>Judicial Appointments</strong> — Nominate Supreme Court justices and federal judges (with Senate consent)</li>
                  <li><strong>Executive Appointments</strong> — Nominate cabinet members, agency heads, and other officers (with Senate consent)</li>
                  <li><strong>Recess Appointments</strong> — Fill vacancies temporarily when Senate not in session</li>
                  <li>Congress may vest appointment of "inferior officers" in President alone, courts, or department heads</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">🔓 Pardon Power</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li><strong>Grant Reprieves and Pardons</strong> — For federal offenses only</li>
                  <li><strong>Cannot Pardon Impeachment</strong> — Impeachment convictions cannot be pardoned</li>
                  <li>Unlimited discretion for federal crimes (no congressional or judicial check)</li>
                  <li>Can issue before or after conviction</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">📋 Advisory Powers</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li><strong>Require Written Opinions</strong> — From heads of executive departments</li>
                  <li>This is the constitutional basis for the Cabinet</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">🚫 Limits on Presidential Powers</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Senate Advice and Consent Required</strong> — For treaties (2/3 vote) and major appointments</li>
              <li><strong>Cannot Declare War</strong> — Only Congress has that power</li>
              <li><strong>Cannot Appropriate Money</strong> — Only Congress can authorize spending</li>
              <li><strong>Cannot Pardon Impeachment</strong> — Impeachment convictions are beyond pardon power</li>
              <li><strong>Recess Appointments Are Temporary</strong> — Expire at end of next Senate session</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">❌ What It Does NOT Say</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Does NOT grant power to make law unilaterally</li>
              <li>Does NOT create "executive privilege" explicitly (judicial doctrine)</li>
              <li>Does NOT allow President to ignore congressional statutes</li>
              <li>Does NOT grant unlimited foreign policy power without congressional input</li>
              <li>Does NOT authorize military action without congressional authorization (War Powers debate)</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚖️ Key Supreme Court Cases</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 text-sm">
              <li><strong>Ex parte Garland (1867)</strong> — Pardon power is unlimited for federal offenses (except impeachment)</li>
              <li><strong>United States v. Curtiss-Wright Export Corp. (1936)</strong> — President has significant foreign affairs authority</li>
              <li><strong>Youngstown Sheet & Tube Co. v. Sawyer (1952)</strong> — Presidential power lowest when acting against congressional will</li>
              <li><strong>Dames & Moore v. Regan (1981)</strong> — President can settle claims with foreign nations via executive agreement</li>
              <li><strong>NLRB v. Noel Canning (2014)</strong> — Recess appointments only valid during substantial Senate recesses</li>
              <li><strong>Zivotofsky v. Kerry (2015)</strong> — President has exclusive power to recognize foreign governments</li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
            <h5 className="font-semibold text-gray-900 mb-2">The Youngstown Framework</h5>
            <p className="text-sm text-gray-700">
              Justice Jackson's concurrence in <em>Youngstown</em> created a three-part framework for analyzing presidential power:
            </p>
            <ol className="list-decimal list-inside text-sm text-gray-700 mt-2 ml-2 space-y-1">
              <li><strong>Maximum Authority:</strong> When President acts with congressional authorization</li>
              <li><strong>Zone of Twilight:</strong> When President acts and Congress is silent (uncertain authority)</li>
              <li><strong>Lowest Ebb:</strong> When President acts against congressional will (presumptively unconstitutional)</li>
            </ol>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="section-3" className="bg-white rounded-lg shadow-md p-8 mb-6 scroll-mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Section 3 — Presidential Duties
          </h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">📜 Exact Text</h4>
            <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
              "He shall from time to time give to the Congress Information of the State of the Union, and recommend to 
              their Consideration such Measures as he shall judge necessary and expedient; he may, on extraordinary 
              Occasions, convene both Houses, or either of them, and in Case of Disagreement between them, with Respect 
              to the Time of Adjournment, he may adjourn them to such Time as he shall think proper; he shall receive 
              Ambassadors and other public Ministers; he shall take Care that the Laws be faithfully executed, and shall 
              Commission all the Officers of the United States."
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">💭 Plain English</h4>
            <p className="text-gray-700">
              The President must regularly inform Congress about the state of the nation and can recommend legislation. 
              The President can call special congressional sessions, receive foreign diplomats, must ensure laws are 
              faithfully executed, and commissions all federal officers. These are duties, not just powers.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚡ Presidential Duties & Powers</h4>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">📊 State of the Union</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li>Must inform Congress "from time to time" about the state of the nation</li>
                  <li>Modern practice: Annual State of the Union address to joint session of Congress</li>
                  <li>Can recommend legislation to Congress</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">🏛️ Congressional Relations</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li><strong>Convene Congress</strong> — Can call special sessions in extraordinary circumstances</li>
                  <li><strong>Adjourn Congress</strong> — Only if House and Senate disagree on adjournment (never used)</li>
                  <li>Recommend legislation but cannot compel Congress to act</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">🌍 Diplomatic Duties</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li><strong>Receive Ambassadors</strong> — Power to recognize foreign governments</li>
                  <li>Conduct diplomatic relations with other nations</li>
                  <li>Represents United States in international affairs</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">⚖️ Faithful Execution Clause (Most Important)</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li><strong>"Take Care that the Laws be faithfully executed"</strong></li>
                  <li>This is a <strong>duty</strong>, not just a power</li>
                  <li>President must enforce all laws, even those disagreed with</li>
                  <li>Cannot refuse to enforce constitutional laws</li>
                  <li>Basis for supervisory authority over executive branch</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">📜 Commissioning Officers</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li>Must commission all federal officers</li>
                  <li>Final step in appointment process</li>
                  <li>Ceremonial but constitutionally required</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">🚫 Limits on Presidential Duties</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Cannot Refuse to Enforce Laws</strong> — "Take Care" clause is mandatory, not optional</li>
              <li><strong>Cannot Make Laws</strong> — Can only recommend legislation; Congress decides</li>
              <li><strong>Cannot Unilaterally Adjourn Congress</strong> — Only when House/Senate disagree on timing</li>
              <li><strong>Must Execute ALL Laws</strong> — Even laws the President believes are bad policy</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚖️ Key Supreme Court Cases</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 text-sm">
              <li><strong>Marbury v. Madison (1803)</strong> — President cannot refuse to deliver commissions once officers appointed</li>
              <li><strong>Youngstown Sheet & Tube Co. v. Sawyer (1952)</strong> — Faithful execution doesn't authorize lawmaking or seizing property</li>
              <li><strong>Myers v. United States (1926)</strong> — President has removal power over executive officers as part of faithful execution</li>
              <li><strong>Humphrey's Executor v. United States (1935)</strong> — Congress can limit removal of quasi-judicial/legislative officers</li>
              <li><strong>Seila Law v. CFPB (2020)</strong> — Single-director independent agencies with removal protection may violate separation of powers</li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
            <h5 className="font-semibold text-gray-900 mb-2">The "Take Care" Clause Debate</h5>
            <p className="text-sm text-gray-700">
              The "Take Care" clause creates ongoing tension between presidential duty to enforce laws and claims of 
              prosecutorial discretion. Presidents cannot <em>refuse</em> to enforce constitutional laws, but they have 
              discretion in <em>how</em> to enforce them within resource constraints. The line between legitimate 
              enforcement discretion and unconstitutional refusal to enforce remains contested.
            </p>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="section-4" className="bg-white rounded-lg shadow-md p-8 mb-6 scroll-mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-red-600 pb-2">
            Section 4 — Impeachment and Removal
          </h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-red-600 mb-2">📜 Exact Text</h4>
            <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
              "The President, Vice President and all civil Officers of the United States, shall be removed from Office 
              on Impeachment for, and Conviction of, Treason, Bribery, or other high Crimes and Misdemeanors."
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-red-600 mb-2">💭 Plain English</h4>
            <p className="text-gray-700">
              The President, Vice President, and all federal civil officers can be removed from office through impeachment 
              by the House and conviction by the Senate for treason, bribery, or other high crimes and misdemeanors. This 
              is the constitutional method for removing a President before their term ends.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-red-600 mb-2">⚡ How Impeachment Works</h4>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">Step 1: House Impeachment</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li>House of Representatives has <strong>sole power of impeachment</strong> (Article I, Section 2)</li>
                  <li>Simple majority vote required to impeach</li>
                  <li>Impeachment = formal accusation (like an indictment)</li>
                  <li>Does NOT remove from office</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">Step 2: Senate Trial</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li>Senate has <strong>sole power to try impeachments</strong> (Article I, Section 3)</li>
                  <li>Requires <strong>2/3 vote</strong> of Senators present to convict</li>
                  <li>Chief Justice presides when President is tried</li>
                  <li>Conviction results in removal from office</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">Who Can Be Impeached?</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li>President</li>
                  <li>Vice President</li>
                  <li>All civil officers of the United States (cabinet members, federal judges, agency heads)</li>
                  <li><strong>NOT</strong> members of Congress (they can be expelled by their own chamber)</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">Impeachable Offenses</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li><strong>Treason</strong> — Defined in Article III, Section 3</li>
                  <li><strong>Bribery</strong> — Taking money/gifts in exchange for official action</li>
                  <li><strong>High Crimes and Misdemeanors</strong> — Serious abuses of power, violations of public trust</li>
                  <li>Does NOT require violation of criminal law</li>
                  <li>Historical meaning: serious misconduct in office</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-red-600 mb-2">🚫 Limits on Impeachment</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Not Reviewable by Courts</strong> — Political question doctrine; courts won't intervene</li>
              <li><strong>Punishment Limited</strong> — Can only remove from office and disqualify from future office</li>
              <li><strong>Criminal Prosecution Separate</strong> — Impeachment doesn't prevent later criminal charges</li>
              <li><strong>Cannot Pardon Impeachment</strong> — President's pardon power explicitly excludes impeachment</li>
              <li><strong>High Threshold</strong> — 2/3 Senate vote makes conviction difficult</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-red-600 mb-2">📊 Presidential Impeachments in History</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 text-sm">
              <li><strong>Andrew Johnson (1868)</strong> — Impeached by House, acquitted by Senate (1 vote short)</li>
              <li><strong>Richard Nixon (1974)</strong> — Resigned before House vote; would have been impeached</li>
              <li><strong>Bill Clinton (1998)</strong> — Impeached by House, acquitted by Senate</li>
              <li><strong>Donald Trump (2019)</strong> — Impeached by House, acquitted by Senate</li>
              <li><strong>Donald Trump (2021)</strong> — Impeached by House (second time), acquitted by Senate</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-red-600 mb-2">⚖️ Key Supreme Court Cases</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 text-sm">
              <li><strong>Nixon v. United States (1993)</strong> — Courts cannot review Senate impeachment procedures (political question)</li>
              <li><strong>United States v. Nixon (1974)</strong> — President must comply with judicial subpoenas; not immune from legal process</li>
              <li><strong>Trump v. United States (2024)</strong> — Presidents have immunity from criminal prosecution for official acts within constitutional authority</li>
            </ul>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-4 mt-4">
            <h5 className="font-semibold text-gray-900 mb-2">What Are "High Crimes and Misdemeanors"?</h5>
            <p className="text-sm text-gray-700 mb-2">
              The phrase comes from English law and refers to serious abuses of power and breaches of public trust. It 
              does NOT mean only violations of criminal law. Historical usage shows it includes:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 ml-2 space-y-1">
              <li>Abuse of authority</li>
              <li>Violation of oath of office</li>
              <li>Betrayal of public trust</li>
              <li>Corruption</li>
              <li>Serious misconduct incompatible with office</li>
            </ul>
            <p className="text-sm text-gray-700 mt-2">
              Congress has ultimate discretion to determine what qualifies, subject only to political accountability.
            </p>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 mt-8">
          <h3 className="text-2xl font-bold mb-4">Article II Summary</h3>
          <p className="text-lg leading-relaxed mb-4">
            Article II creates the presidency as a powerful but limited executive office. The President commands the 
            military, conducts foreign policy, enforces laws, and appoints federal officers — but always subject to 
            constitutional checks and balances.
          </p>
          <p className="leading-relaxed mb-4">
            Key limitations include: Senate consent for treaties and appointments, congressional control over war 
            declarations and appropriations, the mandatory duty to faithfully execute laws, and the impeachment process 
            for serious misconduct.
          </p>
          <p className="leading-relaxed">
            The President is <strong>not a king</strong>. Executive power is broad but bounded by enumerated powers, 
            congressional oversight, judicial review, and the ultimate accountability of impeachment and elections.
          </p>
        </div>
      </div>
    </div>
  );
}
