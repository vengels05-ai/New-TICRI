import Link from 'next/link';

export default function Article6Page() {
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
            <span className="text-5xl">⚡</span>
            <div>
              <h1 className="text-4xl font-bold mb-2">Article VI</h1>
              <h2 className="text-2xl font-semibold">Federal Supremacy</h2>
            </div>
          </div>
          <p className="text-lg leading-relaxed">
            Article VI establishes the Constitution, federal laws, and treaties as the "supreme Law of the Land," binding 
            all judges and officials. It requires constitutional oaths for all federal and state officers and prohibits 
            religious tests for public office.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Overview</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Article VI contains the <strong>Supremacy Clause</strong>, one of the Constitution's most important provisions. 
            It resolves conflicts between federal and state law, establishes federal constitutional authority over all 
            government officials, and prohibits religious qualifications for office — ensuring both national unity and 
            religious freedom.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Each clause below uses the <strong>TICRI Constitutional Breakdown</strong> methodology to provide:
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
          <h3 className="text-xl font-bold text-gray-900 mb-4">Jump to Clause:</h3>
          <div className="grid md:grid-cols-2 gap-3">
            <a href="#clause-1" className="text-blue-600 hover:text-blue-800 hover:underline">
              Clause 1 — Prior Debts and Engagements
            </a>
            <a href="#clause-2" className="text-blue-600 hover:text-blue-800 hover:underline">
              Clause 2 — Supremacy Clause (Most Important)
            </a>
            <a href="#clause-3" className="text-blue-600 hover:text-blue-800 hover:underline">
              Clause 3 — Oaths and Religious Tests
            </a>
          </div>
        </div>

        {/* CLAUSE 1 */}
        <div id="clause-1" className="bg-white rounded-lg shadow-md p-8 mb-6 scroll-mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Clause 1 — Prior Debts and Engagements
          </h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">📜 Exact Text</h4>
            <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
              "All Debts contracted and Engagements entered into, before the Adoption of this Constitution, shall be as 
              valid against the United States under this Constitution, as under the Confederation."
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">💭 Plain English</h4>
            <p className="text-gray-700">
              The United States government under the new Constitution will honor all debts and commitments made by the 
              United States under the Articles of Confederation. The change in government doesn't cancel obligations.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚡ What This Accomplished</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Assured Creditors</strong> — Revolutionary War debts would be honored</li>
              <li><strong>Protected International Standing</strong> — Treaties and foreign debts remained valid</li>
              <li><strong>Ensured Continuity</strong> — New government inherited obligations of old government</li>
              <li><strong>Built Financial Trust</strong> — Crucial for new nation's creditworthiness</li>
              <li>Prevented argument that new Constitution canceled prior obligations</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">🏛️ Historical Context</h4>
            <p className="text-gray-700 mb-2">
              This provision was critical in 1787-1789 because:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 text-sm">
              <li>United States owed significant debts from Revolutionary War</li>
              <li>Articles of Confederation government was weak and couldn't pay debts</li>
              <li>Foreign creditors (France, Netherlands) and domestic bondholders needed assurance</li>
              <li>Without this clause, opponents could argue Constitution was a way to escape debts</li>
              <li>Alexander Hamilton's financial plan relied on federal assumption of state debts</li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
            <h5 className="font-semibold text-gray-900 mb-2">Why This Mattered</h5>
            <p className="text-sm text-gray-700">
              This clause assured the world that America would honor its obligations despite changing its form of 
              government. It established the United States as a reliable debtor and treaty partner, essential for the 
              young nation's survival and international credibility. Hamilton later used this to justify his controversial 
              plan to have the federal government assume state Revolutionary War debts.
            </p>
          </div>
        </div>

        {/* CLAUSE 2 - SUPREMACY CLAUSE */}
        <div id="clause-2" className="bg-white rounded-lg shadow-md p-8 mb-6 scroll-mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Clause 2 — The Supremacy Clause (Supreme Law of the Land)
          </h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">📜 Exact Text</h4>
            <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
              "This Constitution, and the Laws of the United States which shall be made in Pursuance thereof; and all 
              Treaties made, or which shall be made, under the Authority of the United States, shall be the supreme Law 
              of the Land; and the Judges in every State shall be bound thereby, any Thing in the Constitution or Laws of 
              any State to the Contrary notwithstanding."
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">💭 Plain English</h4>
            <p className="text-gray-700">
              The Constitution, federal laws made under constitutional authority, and treaties are the highest law in the 
              nation. All judges (federal and state) must follow them. When federal law conflicts with state law, federal 
              law wins — even if state constitutions or laws say otherwise.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚡ The Hierarchy of Law</h4>
            
            <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-6 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-4 text-center">Supreme Law of the Land (in order)</h5>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-600">
                  <h6 className="font-bold text-blue-600 mb-1">1. U.S. Constitution</h6>
                  <p className="text-sm text-gray-700">Highest authority; all government must comply</p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500">
                  <h6 className="font-bold text-blue-600 mb-1">2. Federal Laws "in Pursuance" of Constitution</h6>
                  <p className="text-sm text-gray-700">Statutes enacted under constitutional authority</p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500">
                  <h6 className="font-bold text-blue-600 mb-1">3. Treaties "under Authority" of United States</h6>
                  <p className="text-sm text-gray-700">Treaties made pursuant to constitutional treaty power</p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm border-l-4 border-gray-400">
                  <h6 className="font-bold text-gray-600 mb-1">4. State Constitutions</h6>
                  <p className="text-sm text-gray-700">Highest state law, but subordinate to federal law</p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm border-l-4 border-gray-400">
                  <h6 className="font-bold text-gray-600 mb-1">5. State Statutes and Local Laws</h6>
                  <p className="text-sm text-gray-700">Subordinate to all above</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚡ What the Supremacy Clause Does</h4>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">🏛️ Establishes Federal Supremacy</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li>When federal and state law conflict, federal law prevails</li>
                  <li>States cannot nullify or ignore federal law</li>
                  <li>Federal Constitution supreme over state constitutions</li>
                  <li>Creates unified legal system under national Constitution</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">⚖️ Binds All Judges</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li>State judges must enforce federal law</li>
                  <li>State courts must apply federal Constitution</li>
                  <li>State judges can declare state laws unconstitutional under federal Constitution</li>
                  <li>Creates dual obligation: state judges enforce both state and federal law</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">🚫 Preemption Doctrine</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li><strong>Express Preemption</strong> — Federal law explicitly overrides state law</li>
                  <li><strong>Implied Preemption</strong> — Federal law occupies field, leaving no room for state law</li>
                  <li><strong>Conflict Preemption</strong> — Impossible to comply with both federal and state law</li>
                  <li>States cannot regulate what federal law prohibits or regulate areas Congress has occupied</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">🚫 Critical Limitation: "In Pursuance Thereof"</h4>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-gray-700 text-sm mb-2">
                <strong>ONLY federal laws "in pursuance" of the Constitution are supreme.</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                <li>Federal laws must be constitutional to be supreme</li>
                <li>Congress cannot claim supremacy for unconstitutional laws</li>
                <li>If federal law exceeds constitutional authority, it is not "supreme law"</li>
                <li>States (and courts) can challenge unconstitutional federal laws</li>
                <li>Supremacy depends on constitutional validity</li>
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">❌ What the Supremacy Clause Does NOT Say</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Does NOT give Congress unlimited power</strong> — Federal laws must be constitutional</li>
              <li><strong>Does NOT eliminate states</strong> — States retain sovereignty in areas not delegated to federal government</li>
              <li><strong>Does NOT authorize federal commandeering</strong> — Cannot force states to enforce federal law</li>
              <li><strong>Does NOT make all federal actions supreme</strong> — Only constitutional federal laws and treaties</li>
              <li><strong>Does NOT give federal government general police power</strong> — States retain most regulatory authority</li>
              <li><strong>Does NOT create national government supremacy in all matters</strong> — Only in areas of federal authority</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚖️ Key Supreme Court Cases</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 text-sm">
              <li><strong>McCulloch v. Maryland (1819)</strong> — States cannot tax or interfere with constitutional federal operations; "power to tax is power to destroy"</li>
              <li><strong>Gibbons v. Ogden (1824)</strong> — Federal commerce power supreme; state monopoly invalid when conflicts with federal law</li>
              <li><strong>Cooper v. Aaron (1958)</strong> — State officials cannot nullify Supreme Court decisions; all must obey federal constitutional law</li>
              <li><strong>Arizona v. United States (2012)</strong> — Federal immigration law preempts conflicting state immigration enforcement</li>
              <li><strong>Murphy v. NCAA (2018)</strong> — Federal government cannot commandeer states to enforce federal law</li>
              <li><strong>Gade v. National Solid Wastes Management Ass'n (1505)</strong> — Federal OSHA regulations preempt state safety laws</li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
            <h5 className="font-semibold text-gray-900 mb-2">Supremacy vs. Nullification</h5>
            <p className="text-sm text-gray-700 mb-2">
              The Supremacy Clause definitively rejected the concept of state "nullification" — the idea that states can 
              refuse to enforce federal laws they believe are unconstitutional. Key principles:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 ml-2 space-y-1">
              <li>States cannot "nullify" federal law (settled since Civil War)</li>
              <li>States can challenge federal laws in court but must obey until courts rule</li>
              <li>Only courts, not states, decide if federal laws are constitutional</li>
              <li>State officials are bound by constitutional oaths to enforce federal law</li>
            </ul>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-4 mt-4">
            <h5 className="font-semibold text-gray-900 mb-2">Federalism Balance</h5>
            <p className="text-sm text-gray-700">
              The Supremacy Clause does NOT eliminate federalism. States retain sovereignty over matters not delegated 
              to the federal government (10th Amendment). Federal supremacy applies ONLY when: (1) federal government acts 
              within constitutional authority, and (2) federal and state law actually conflict. In vast areas of law 
              (family law, property, contracts, criminal law, education), states remain supreme because federal government 
              lacks constitutional authority.
            </p>
          </div>
        </div>

        {/* CLAUSE 3 */}
        <div id="clause-3" className="bg-white rounded-lg shadow-md p-8 mb-6 scroll-mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Clause 3 — Oaths of Office and No Religious Tests
          </h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">📜 Exact Text</h4>
            <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
              "The Senators and Representatives before mentioned, and the Members of the several State Legislatures, and 
              all executive and judicial Officers, both of the United States and of the several States, shall be bound by 
              Oath or Affirmation, to support this Constitution; but no religious Test shall ever be required as a 
              Qualification to any Office or public Trust under the United States."
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">💭 Plain English</h4>
            <p className="text-gray-700">
              All federal and state officials — legislators, executives, and judges — must take an oath (or affirmation) 
              to support the Constitution. However, the federal government cannot require any religious belief or test as 
              a qualification for holding federal office.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚡ The Oath Requirement</h4>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">👥 Who Must Take the Oath</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li><strong>Federal Officials:</strong> Senators, Representatives, President, federal judges, executive officers</li>
                  <li><strong>State Officials:</strong> State legislators, governors, state judges, state executive officers</li>
                  <li><strong>All Levels:</strong> Extends to all executive and judicial officers at all levels</li>
                  <li>Creates universal obligation to uphold Constitution</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">📜 What the Oath Means</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li><strong>Bind Officials to Constitution</strong> — Personal commitment to uphold constitutional law</li>
                  <li><strong>Dual Loyalty for State Officials</strong> — State officers swear to support U.S. Constitution</li>
                  <li><strong>Creates Accountability</strong> — Violating oath can be basis for removal (impeachment, recall)</li>
                  <li><strong>Oath or Affirmation</strong> — Allows non-religious alternative to accommodate religious objections to swearing</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">⚖️ Standard Federal Oath (5 U.S.C. § 3331)</h5>
                <p className="text-gray-700 text-sm italic mb-2">
                  "I do solemnly swear (or affirm) that I will support and defend the Constitution of the United States 
                  against all enemies, foreign and domestic; that I will bear true faith and allegiance to the same; that 
                  I take this obligation freely, without any mental reservation or purpose of evasion; and that I will 
                  well and faithfully discharge the duties of the office on which I am about to enter. So help me God."
                </p>
                <p className="text-gray-700 text-sm">
                  (The "So help me God" is optional for those using affirmation)
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚡ No Religious Test Clause</h4>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">🚫 What This Prohibits</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li><strong>Cannot Require Religious Belief</strong> — Federal government cannot require officials to be religious</li>
                  <li><strong>Cannot Require Specific Religion</strong> — Cannot prefer one religion over another</li>
                  <li><strong>Cannot Exclude Based on Religion</strong> — Cannot bar atheists, Muslims, Jews, etc.</li>
                  <li>Applies to all federal offices and public trusts</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">🏛️ Historical Significance</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li><strong>Revolutionary for 1787</strong> — Most states had religious tests for office</li>
                  <li><strong>Broke with European Tradition</strong> — European nations required official state religions</li>
                  <li><strong>Expanded by 14th Amendment</strong> — Later applied to states (no state religious tests either)</li>
                  <li>Reflected Enlightenment values and religious pluralism</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">⚖️ What Is Allowed</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li>Optional religious oath language ("So help me God")</li>
                  <li>Voluntary religious expressions by officials</li>
                  <li>Religious motivations for policy positions</li>
                  <li>Voters can consider religion when voting (1st Amendment protects voter choice)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">🚫 Government Restrictions</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Cannot Require Religious Belief</strong> — For any federal office or public trust</li>
              <li><strong>Cannot Prefer One Religion</strong> — Must be neutral among religions and between religion/non-religion</li>
              <li><strong>Cannot Exclude Based on Faith</strong> — Atheists, minority religions have equal access to office</li>
              <li><strong>States Also Bound</strong> — 14th Amendment applies no-religious-test rule to states</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">❌ What It Does NOT Say</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Does NOT prohibit voluntary religious references in oaths</li>
              <li>Does NOT prevent officials from being religious or expressing faith</li>
              <li>Does NOT bar voters from considering candidate's religion</li>
              <li>Does NOT require government to be hostile to religion</li>
              <li>Does NOT originally apply to state offices (but 14th Amendment extended it)</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚖️ Key Supreme Court Cases</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 text-sm">
              <li><strong>Torcaso v. Watkins (1961)</strong> — Struck down Maryland law requiring belief in God for public office; applies to states via 14th Amendment</li>
              <li><strong>McDaniel v. Paty (1978)</strong> — States cannot bar clergy from holding public office</li>
              <li><strong>Silverman v. Campbell (1975)</strong> — "So help me God" in oath is optional, not mandatory</li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
            <h5 className="font-semibold text-gray-900 mb-2">Oath or Affirmation</h5>
            <p className="text-sm text-gray-700">
              The Constitution gives the option of "oath or affirmation" to accommodate Quakers and others with religious 
              objections to swearing oaths. An affirmation has the same legal force as an oath but uses "affirm" instead 
              of "swear" and omits religious references. This reflects the Framers' sensitivity to religious conscience 
              even while requiring commitment to the Constitution.
            </p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
            <h5 className="font-semibold text-gray-900 mb-2">Revolutionary Provision</h5>
            <p className="text-sm text-gray-700">
              In 1787, the no-religious-test clause was radical. Most states required Christian belief (or sometimes 
              Protestant belief) for office. Several states banned Catholics, Jews, or atheists from office. The 
              Constitution's rejection of religious tests was controversial but reflected Enlightenment ideals and 
              practical recognition of American religious diversity. It paved the way for the 1st Amendment's fuller 
              protection of religious freedom.
            </p>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 mt-8">
          <h3 className="text-2xl font-bold mb-4">Article VI Summary</h3>
          <p className="text-lg leading-relaxed mb-4">
            Article VI establishes the Constitution as the <strong>supreme law of the land</strong>, binding all federal 
            and state officials. The Supremacy Clause resolves conflicts between federal and state law in favor of 
            constitutional federal law, preventing states from nullifying federal authority while preserving federalism.
          </p>
          <p className="leading-relaxed mb-4">
            The oath requirement creates universal obligation: all officials, federal and state, must swear to uphold the 
            Constitution. This binds state officials to federal constitutional law and establishes dual loyalty for state 
            officers.
          </p>
          <p className="leading-relaxed">
            The no-religious-test clause ensures religious freedom in public service — a revolutionary provision in 1787 
            that barred religious qualifications for federal office and paved the way for the 1st Amendment's broader 
            religious liberty protections. Together, these provisions create <strong>constitutional supremacy, federal-state 
            cooperation, and religious freedom</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
