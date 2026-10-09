import Link from 'next/link';

export default function Article7Page() {
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
            <span className="text-5xl">🎯</span>
            <div>
              <h1 className="text-4xl font-bold mb-2">Article VII</h1>
              <h2 className="text-2xl font-semibold">Ratification</h2>
            </div>
          </div>
          <p className="text-lg leading-relaxed">
            Article VII established the process for the Constitution to become the supreme law of the land, requiring 
            ratification by nine states through special conventions elected by the people. This final article transformed 
            a proposed document into the foundation of American government.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Overview</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Article VII is the Constitution's <strong>"birth certificate"</strong> — it set the rules for how the 
            Constitution would become law. By requiring only nine of thirteen states to ratify (instead of unanimous 
            consent required under the Articles of Confederation) and using special state conventions (instead of state 
            legislatures), the Framers created a path for constitutional change and grounded the new government in 
            <strong>popular sovereignty</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This article uses the <strong>TICRI Constitutional Breakdown</strong> methodology to provide:
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

        {/* Constitutional Text */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Article VII — Full Text
          </h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">📜 Exact Text</h4>
            <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
              "The Ratification of the Conventions of nine States, shall be sufficient for the Establishment of this 
              Constitution between the States so ratifying the Same."
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">💭 Plain English</h4>
            <p className="text-gray-700">
              When nine states ratify this Constitution through special state conventions, it becomes the law of the land 
              for those nine states. The Constitution takes effect among the states that approve it, even if other states 
              reject it.
            </p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
            <h5 className="font-semibold text-gray-900 mb-2">Why This Was Revolutionary</h5>
            <p className="text-sm text-gray-700">
              Article VII was legally and politically radical. It bypassed the requirement in the Articles of Confederation 
              for unanimous state consent to amendments, and it used popular conventions instead of state legislatures. 
              This grounded the Constitution in "We the People" rather than state governments, establishing popular 
              sovereignty as the foundation of American government.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            ⚡ Revolutionary Features of Article VII
          </h3>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-2xl">9️⃣</span>
                Only Nine States Required
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm ml-2">
                <li><strong>Departed from Articles of Confederation</strong> — Articles required unanimous consent of all 13 states for amendments</li>
                <li><strong>Made Change Possible</strong> — Unanimous consent was impossible to achieve (Rhode Island refused to even send delegates)</li>
                <li><strong>Supermajority, Not Unanimity</strong> — 9 of 13 states = 69% supermajority</li>
                <li><strong>Practical Politics</strong> — Framers knew unanimous ratification would never happen</li>
                <li>Created path forward despite inevitable opposition</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-2xl">🗳️</span>
                Ratification by State Conventions
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm ml-2">
                <li><strong>Popular Sovereignty</strong> — People elect delegates to conventions specifically to vote on Constitution</li>
                <li><strong>Bypassed State Legislatures</strong> — State governments might reject Constitution to protect their own power</li>
                <li><strong>Direct Democratic Legitimacy</strong> — Constitution derives authority from "We the People," not state governments</li>
                <li><strong>Special Purpose Elections</strong> — Convention delegates elected solely to decide on Constitution</li>
                <li>Established that Constitution came from the people, not the states</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-2xl">📍</span>
                "Between the States so ratifying"
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm ml-2">
                <li><strong>Partial Implementation</strong> — Constitution takes effect only among ratifying states</li>
                <li><strong>No Force on Non-Ratifying States</strong> — States that reject Constitution remain under Articles of Confederation</li>
                <li><strong>Pressure to Join</strong> — Creates incentive for holdout states to ratify (economic/political isolation)</li>
                <li><strong>Flexible Timeline</strong> — Doesn't require all states to ratify simultaneously</li>
                <li>Allowed Constitution to begin even if some states initially refused</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why These Choices Mattered */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            🏛️ Why the Framers Made These Choices
          </h3>
          
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded">
              <h4 className="font-semibold text-gray-900 mb-2">Why 9 States (Not 13)?</h4>
              <p className="text-gray-700 text-sm mb-2">The Framers chose 9 states for several reasons:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                <li><strong>Practical Necessity</strong> — Unanimous consent under Articles was impossible (Rhode Island didn't even attend)</li>
                <li><strong>Supermajority Legitimacy</strong> — 9 of 13 = nearly 70%, showing broad support</li>
                <li><strong>Enough for Viability</strong> — 9 states included largest/most important states needed for success</li>
                <li><strong>Compromise</strong> — Not simple majority (too easy), not unanimity (impossible)</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded">
              <h4 className="font-semibold text-gray-900 mb-2">Why Conventions (Not State Legislatures)?</h4>
              <p className="text-gray-700 text-sm mb-2">Using state conventions instead of legislatures was crucial:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                <li><strong>Avoid Self-Interest</strong> — State legislatures would lose power under Constitution; might reject to protect themselves</li>
                <li><strong>Popular Sovereignty</strong> — Grounded Constitution in "We the People," not state governments</li>
                <li><strong>Democratic Legitimacy</strong> — People directly chose whether to adopt Constitution</li>
                <li><strong>Legal Clarity</strong> — Made Constitution supreme over state governments (people &gt; state legislatures)</li>
                <li><strong>Bypassed Articles</strong> — Articles required state legislature approval; conventions were new mechanism</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded">
              <h4 className="font-semibold text-gray-900 mb-2">Why "Between States Ratifying"?</h4>
              <p className="text-gray-700 text-sm mb-2">Allowing partial implementation was strategically smart:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                <li><strong>Creates Momentum</strong> — Early ratifications pressure holdouts to join</li>
                <li><strong>Avoids Veto Power</strong> — Single state cannot block entire Constitution</li>
                <li><strong>Economic Pressure</strong> — Non-ratifying states face isolation from new union</li>
                <li><strong>Flexibility</strong> — Allows Constitution to begin while debate continues elsewhere</li>
              </ul>
            </div>
          </div>
        </div>

        {/* The Ratification Process */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            📅 The Ratification Process: 1787-1790
          </h3>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-semibold text-gray-900 mb-3">Timeline of Ratification</h4>
              <div className="space-y-3">
                <div className="border-l-4 border-green-600 pl-4">
                  <p className="font-semibold text-sm text-gray-900">1. Delaware — December 7, 1787</p>
                  <p className="text-xs text-gray-600">First state to ratify (unanimous 30-0)</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <p className="font-semibold text-sm text-gray-900">2. Pennsylvania — December 12, 1787</p>
                  <p className="text-xs text-gray-600">46-23 (controversial, some delegates forced to attend)</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <p className="font-semibold text-sm text-gray-900">3. New Jersey — December 18, 1787</p>
                  <p className="text-xs text-gray-600">Unanimous</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <p className="font-semibold text-sm text-gray-900">4. Georgia — January 2, 1788</p>
                  <p className="text-xs text-gray-600">Unanimous (needed federal protection from Native American conflicts)</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <p className="font-semibold text-sm text-gray-900">5. Connecticut — January 9, 1788</p>
                  <p className="text-xs text-gray-600">128-40</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <p className="font-semibold text-sm text-gray-900">6. Massachusetts — February 6, 1788</p>
                  <p className="text-xs text-gray-600">187-168 (very close, recommended Bill of Rights)</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <p className="font-semibold text-sm text-gray-900">7. Maryland — April 28, 1788</p>
                  <p className="text-xs text-gray-600">63-11</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <p className="font-semibold text-sm text-gray-900">8. South Carolina — May 23, 1788</p>
                  <p className="text-xs text-gray-600">149-73</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4 bg-blue-50">
                  <p className="font-semibold text-sm text-gray-900">9. New Hampshire — June 21, 1788 ⭐</p>
                  <p className="text-xs text-gray-600">57-47 (NINTH STATE — Constitution takes effect!)</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <p className="font-semibold text-sm text-gray-900">10. Virginia — June 25, 1788</p>
                  <p className="text-xs text-gray-600">89-79 (crucial large state, very close)</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <p className="font-semibold text-sm text-gray-900">11. New York — July 26, 1788</p>
                  <p className="text-xs text-gray-600">30-27 (extremely close, recommended many amendments)</p>
                </div>
                <div className="border-l-4 border-orange-600 pl-4">
                  <p className="font-semibold text-sm text-gray-900">12. North Carolina — November 21, 1789</p>
                  <p className="text-xs text-gray-600">Initially rejected, ratified after Bill of Rights proposed</p>
                </div>
                <div className="border-l-4 border-orange-600 pl-4">
                  <p className="font-semibold text-sm text-gray-900">13. Rhode Island — May 29, 1790</p>
                  <p className="text-xs text-gray-600">34-32 (last state, extremely reluctant, threatened with trade sanctions)</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <h5 className="font-semibold text-gray-900 mb-2">Key Moments</h5>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                <li><strong>June 21, 1788:</strong> New Hampshire becomes 9th state — Constitution legally in effect</li>
                <li><strong>March 4, 1789:</strong> New government begins operations under Constitution</li>
                <li><strong>April 30, 1789:</strong> George Washington inaugurated as first President</li>
                <li><strong>September 25, 1789:</strong> Congress proposes Bill of Rights (to satisfy holdouts)</li>
                <li><strong>December 15, 1791:</strong> Bill of Rights ratified</li>
              </ul>
            </div>
          </div>
        </div>

        {/* The Ratification Debates */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            💬 The Ratification Debates: Federalists vs. Anti-Federalists
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-4 rounded border-2 border-green-600">
              <h4 className="font-semibold text-gray-900 mb-3">✅ Federalists (Pro-Constitution)</h4>
              <p className="text-sm text-gray-700 mb-3 font-semibold">Supported ratification. Leaders: Madison, Hamilton, Jay, Washington</p>
              
              <h5 className="font-semibold text-gray-800 mb-2 text-sm">Arguments FOR Constitution:</h5>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                <li>Articles of Confederation too weak to govern</li>
                <li>Need strong national government for defense and commerce</li>
                <li>Separation of powers prevents tyranny</li>
                <li>Large republic better than small republics (Federalist 10)</li>
                <li>Union necessary for survival</li>
                <li>Enumerated powers limit federal authority</li>
              </ul>

              <h5 className="font-semibold text-gray-800 mb-2 text-sm mt-3">Key Documents:</h5>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                <li><strong>The Federalist Papers</strong> — 85 essays by Hamilton, Madison, Jay</li>
                <li>Federalist 10 (factions), 51 (checks and balances), 78 (judicial review)</li>
              </ul>
            </div>

            <div className="bg-red-50 p-4 rounded border-2 border-red-600">
              <h4 className="font-semibold text-gray-900 mb-3">❌ Anti-Federalists (Anti-Constitution)</h4>
              <p className="text-sm text-gray-700 mb-3 font-semibold">Opposed ratification. Leaders: Patrick Henry, George Mason, Brutus</p>
              
              <h5 className="font-semibold text-gray-800 mb-2 text-sm">Arguments AGAINST Constitution:</h5>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                <li>Federal government too powerful, threatens liberty</li>
                <li>No Bill of Rights protecting individual freedoms</li>
                <li>President too much like a king</li>
                <li>States will lose sovereignty</li>
                <li>Large republic cannot preserve freedom (too distant from people)</li>
                <li>Necessary and Proper Clause too broad</li>
                <li>Supremacy Clause destroys state authority</li>
              </ul>

              <h5 className="font-semibold text-gray-800 mb-2 text-sm mt-3">Key Demands:</h5>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                <li><strong>Bill of Rights</strong> — Explicit protections for individual liberty</li>
                <li>Amendments to limit federal power</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
            <h5 className="font-semibold text-gray-900 mb-2">The Compromise: Conditional Ratification</h5>
            <p className="text-sm text-gray-700">
              Several states (Massachusetts, Virginia, New York) ratified with <strong>recommendations</strong> for 
              amendments, particularly a Bill of Rights. Federalists promised to add a Bill of Rights in the first 
              Congress. This compromise secured ratification while addressing Anti-Federalist concerns, leading to the 
              first 10 amendments (Bill of Rights) in 1791.
            </p>
          </div>
        </div>

        {/* What It Does NOT Say */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-600 pb-2">
            ❌ What Article VII Does NOT Say
          </h3>
          
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li><strong>Does NOT require all 13 states</strong> — Only 9 needed</li>
            <li><strong>Does NOT use state legislatures</strong> — Uses special state conventions</li>
            <li><strong>Does NOT specify how convention delegates are chosen</strong> — Left to states</li>
            <li><strong>Does NOT set a deadline for ratification</strong> — States could take their time</li>
            <li><strong>Does NOT allow states to ratify conditionally</strong> — Must accept Constitution as written (can recommend amendments but not require them)</li>
            <li><strong>Does NOT specify what happens to non-ratifying states</strong> — Implied they remain under Articles of Confederation</li>
            <li><strong>Does NOT allow for partial ratification</strong> — States must accept entire Constitution, not pick and choose</li>
            <li><strong>Does NOT require congressional approval</strong> — Bypassed Congress entirely</li>
          </ul>
        </div>

        {/* Legal Controversy */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-red-600 pb-2">
            ⚖️ The Legal Controversy: Was Article VII Illegal?
          </h3>
          
          <div className="bg-red-50 p-4 rounded mb-4">
            <h4 className="font-semibold text-gray-900 mb-2">The Problem</h4>
            <p className="text-gray-700 text-sm mb-2">
              Article VII violated the Articles of Confederation in two ways:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
              <li><strong>Unanimity Requirement:</strong> Articles of Confederation required unanimous consent of all 13 states for amendments</li>
              <li><strong>Legislature Approval:</strong> Articles required state legislatures to approve, not conventions</li>
            </ul>
            <p className="text-gray-700 text-sm mt-2">
              By these standards, the Constitution was technically <strong>"illegal"</strong> under existing law.
            </p>
          </div>

          <div className="bg-green-50 p-4 rounded mb-4">
            <h4 className="font-semibold text-gray-900 mb-2">The Framers' Response</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm ml-2">
              <li><strong>Popular Sovereignty Trumps Legal Formalism</strong> — Constitution derives from "We the People," not state governments or Articles of Confederation</li>
              <li><strong>Revolutionary Right</strong> — People have right to alter or abolish government (Declaration of Independence)</li>
              <li><strong>Articles Were Failing</strong> — Existing system couldn't be reformed through its own procedures</li>
              <li><strong>Higher Authority</strong> — Direct popular ratification &gt; state legislature approval</li>
              <li><strong>Practical Necessity</strong> — Unanimous consent was impossible; nation needed workable government</li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
            <h5 className="font-semibold text-gray-900 mb-2">Historical Verdict</h5>
            <p className="text-sm text-gray-700">
              While Article VII technically violated the Articles of Confederation, the Framers justified it through 
              <strong>popular sovereignty</strong> — the people's inherent right to choose their form of government. The 
              use of state conventions gave the Constitution democratic legitimacy superior to the Articles. History 
              vindicated this approach: the Constitution worked, and no state seriously challenged its legal validity 
              once ratified.
            </p>
          </div>
        </div>

        {/* Supreme Court Cases */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            ⚖️ Supreme Court Cases on Ratification
          </h3>
          
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 text-sm">
            <li><strong>United States v. Sprague (1282)</strong> — Article V's ratification procedures are exclusive; no other method allowed</li>
            <li><strong>Hollingsworth v. Virginia (1798)</strong> — President has no role in amendment process (extends Article VII principle)</li>
            <li><strong>Hawke v. Smith (1920)</strong> — States must use method specified by Congress; cannot add referendum requirement</li>
          </ul>

          <p className="text-gray-700 text-sm mt-4 ml-4">
            Courts have generally avoided questioning the validity of Article VII's ratification process, treating it as 
            a successfully completed political act. The Constitution's ratification is accepted as legitimate based on 
            popular sovereignty and successful operation for over 230 years.
          </p>
        </div>

        {/* Legacy */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            🏛️ Article VII's Lasting Legacy
          </h3>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-semibold text-gray-900 mb-2">Popular Sovereignty Established</h4>
              <p className="text-gray-700 text-sm">
                By requiring ratification through popular conventions, Article VII established that the Constitution 
                derives from <strong>"We the People,"</strong> not state governments. This foundational principle remains 
                central to American constitutional theory.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-semibold text-gray-900 mb-2">Practical over Formal Legality</h4>
              <p className="text-gray-700 text-sm">
                Article VII demonstrated that when formal legal procedures fail (unanimous consent impossible), popular 
                sovereignty justifies constitutional change. This principle influenced later constitutional developments 
                and revolutions worldwide.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-semibold text-gray-900 mb-2">Compromise and Persuasion</h4>
              <p className="text-gray-700 text-sm">
                The ratification debates showcased democratic deliberation at its best. The Federalist Papers remain 
                the most sophisticated defense of constitutional government ever written. The compromise to add a Bill 
                of Rights showed flexibility and responsiveness to popular concerns.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-semibold text-gray-900 mb-2">Created a Nation</h4>
              <p className="text-gray-700 text-sm">
                Article VII transformed 13 separate states under a failing confederation into a unified nation under 
                a working constitution. The successful ratification demonstrated that radical change through peaceful, 
                democratic means was possible — a model for the world.
              </p>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 mt-8">
          <h3 className="text-2xl font-bold mb-4">Article VII Summary</h3>
          <p className="text-lg leading-relaxed mb-4">
            Article VII established the rules for the Constitution's birth — requiring nine states to ratify through 
            special popular conventions. This revolutionary process bypassed the impossible unanimity requirement of the 
            Articles of Confederation and grounded the Constitution in <strong>popular sovereignty</strong> rather than 
            state governments.
          </p>
          <p className="leading-relaxed mb-4">
            The ratification debates between Federalists and Anti-Federalists produced the Federalist Papers and led to 
            the crucial compromise: ratification in exchange for a Bill of Rights. New Hampshire's ratification on 
            June 21, 1788 made the Constitution law, though all 13 states eventually joined.
          </p>
          <p className="leading-relaxed">
            While technically "illegal" under the Articles of Confederation, Article VII's success vindicated the principle 
            that <strong>popular sovereignty trumps formal legality</strong> — the people's right to choose their 
            government is supreme. This principle, combined with the democratic legitimacy of state conventions, 
            transformed an extraordinary proposal into the enduring foundation of American government.
          </p>
        </div>
      </div>
    </div>
  );
}
