import Link from 'next/link';

export default function Article5Page() {
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
            <span className="text-5xl">📝</span>
            <div>
              <h1 className="text-4xl font-bold mb-2">Article V</h1>
              <h2 className="text-2xl font-semibold">The Amendment Process</h2>
            </div>
          </div>
          <p className="text-lg leading-relaxed">
            Article V establishes how the Constitution can be amended — a deliberately difficult process requiring broad 
            consensus across multiple levels of government. It balances the need for constitutional stability with the 
            ability to adapt to changing circumstances.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Overview</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Article V is the Constitution's <strong>"self-correction mechanism"</strong> — it allows the Constitution 
            to be amended without requiring a complete rewrite. The process is intentionally difficult, requiring 
            supermajorities at both proposal and ratification stages, ensuring that only amendments with broad, sustained 
            support become part of our fundamental law.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This section uses the <strong>TICRI Constitutional Breakdown</strong> methodology to provide:
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
            Article V — Full Text
          </h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">📜 Exact Text</h4>
            <p className="text-gray-700 italic bg-gray-50 p-4 rounded leading-relaxed">
              "The Congress, whenever two thirds of both Houses shall deem it necessary, shall propose Amendments to this 
              Constitution, or, on the Application of the Legislatures of two thirds of the several States, shall call a 
              Convention for proposing Amendments, which, in either Case, shall be valid to all Intents and Purposes, as 
              Part of this Constitution, when ratified by the Legislatures of three fourths of the several States, or by 
              Conventions in three fourths thereof, as the one or the other Mode of Ratification may be proposed by the 
              Congress; Provided that no Amendment which may be made prior to the Year One thousand eight hundred and 
              eight shall in any Manner affect the first and fourth Clauses in the Ninth Section of the first Article; 
              and that no State, without its Consent, shall be deprived of its equal Suffrage in the Senate."
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">💭 Plain English</h4>
            <p className="text-gray-700 leading-relaxed">
              Amendments can be proposed in two ways: (1) by a 2/3 vote in both houses of Congress, or (2) by a convention 
              called when 2/3 of state legislatures request it. Proposed amendments must then be ratified (approved) by 
              either 3/4 of state legislatures or 3/4 of state conventions, whichever method Congress chooses. There is one 
              permanent limitation: no state can lose its equal representation in the Senate without its consent.
            </p>
          </div>
        </div>

        {/* Amendment Process Flowchart */}
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">The Amendment Process: Two Pathways</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Proposal Methods */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-lg font-bold text-blue-600 mb-4">Step 1: Proposal (Choose One)</h4>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h5 className="font-semibold text-gray-900 mb-2">Method A: Congressional Proposal</h5>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                    <li><strong>2/3 vote in House</strong> (290 of 435)</li>
                    <li><strong>2/3 vote in Senate</strong> (67 of 100)</li>
                    <li>Used for all 27 amendments</li>
                    <li>Most common method</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-600 pl-4">
                  <h5 className="font-semibold text-gray-900 mb-2">Method B: Convention</h5>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                    <li><strong>2/3 of state legislatures</strong> (34 states) petition Congress</li>
                    <li>Congress must call convention</li>
                    <li>Convention proposes amendments</li>
                    <li><strong>Never used</strong> in U.S. history</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Ratification Methods */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-lg font-bold text-blue-600 mb-4">Step 2: Ratification (Congress Chooses)</h4>
              
              <div className="space-y-4">
                <div className="border-l-4 border-purple-600 pl-4">
                  <h5 className="font-semibold text-gray-900 mb-2">Method A: State Legislatures</h5>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                    <li><strong>3/4 of states</strong> (38 of 50 states)</li>
                    <li>State legislatures vote to ratify</li>
                    <li>Used for 26 of 27 amendments</li>
                    <li>Most common method</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-600 pl-4">
                  <h5 className="font-semibold text-gray-900 mb-2">Method B: State Conventions</h5>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                    <li><strong>3/4 of states</strong> (38 of 50 states)</li>
                    <li>Special state conventions vote</li>
                    <li>Used only for 21st Amendment (repeal of Prohibition)</li>
                    <li>Rare method</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <p className="text-sm text-gray-700">
              <strong>Key Point:</strong> Both steps require supermajorities. This means amendments need broad, sustained 
              consensus across different levels of government to succeed — preventing hasty changes and ensuring 
              constitutional stability.
            </p>
          </div>
        </div>

        {/* Powers Created */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            ⚡ Government Powers Created
          </h3>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-semibold text-gray-900 mb-2">🏛️ Congressional Powers</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm ml-2">
                <li><strong>Propose Amendments</strong> — With 2/3 vote in both chambers</li>
                <li><strong>Choose Ratification Method</strong> — Decide whether states ratify by legislature or convention</li>
                <li><strong>Set Ratification Deadlines</strong> — Can impose time limits (typically 7 years)</li>
                <li><strong>Call Convention</strong> — Must call convention if 2/3 of states apply</li>
                <li>Congress has discretion over amendment procedures and timing</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-semibold text-gray-900 mb-2">🗳️ State Powers</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm ml-2">
                <li><strong>Petition for Convention</strong> — 2/3 of states can force Congress to call convention</li>
                <li><strong>Ratify or Reject</strong> — 3/4 of states must approve for amendment to become law</li>
                <li><strong>Veto Power</strong> — 13 states can block any amendment (more than 1/4)</li>
                <li>States are essential gatekeepers of constitutional change</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-semibold text-gray-900 mb-2">📝 Amendment Power Itself</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm ml-2">
                <li><strong>Constitution Can Be Changed</strong> — Not a static document</li>
                <li><strong>Formal Process Required</strong> — Cannot amend by custom, practice, or interpretation</li>
                <li><strong>Becomes Part of Constitution</strong> — Amendments have equal status to original text</li>
                <li>27 amendments ratified since 1791</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Restrictions */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-red-600 pb-2">
            🚫 Government Restrictions & Limits
          </h3>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-semibold text-gray-900 mb-2">🔒 Permanent Limitation</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm ml-2">
                <li><strong>Equal Senate Representation Protected</strong> — No state can lose equal suffrage in Senate without its consent</li>
                <li>Only unamendable provision in Constitution</li>
                <li>Protects small-state interests permanently</li>
                <li>Could theoretically be circumvented by first amending Article V itself, then changing Senate representation</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-semibold text-gray-900 mb-2">⏱️ Historical Limitations (Expired)</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm ml-2">
                <li><strong>Slave Trade Protection (until 1808)</strong> — No amendments affecting slave importation clauses before 1808</li>
                <li>This limitation expired in 1808 and is now void</li>
                <li>Protected slavery temporarily as part of constitutional compromise</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-semibold text-gray-900 mb-2">🚧 Procedural Limitations</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm ml-2">
                <li><strong>Cannot Amend Without Following Article V</strong> — No shortcuts or workarounds</li>
                <li><strong>Supermajorities Required</strong> — 2/3 to propose, 3/4 to ratify</li>
                <li><strong>President Has No Role</strong> — Cannot veto or approve amendments</li>
                <li><strong>States Cannot Rescind Ratification</strong> — Once ratified, generally cannot be undone</li>
                <li>Process designed to be difficult to prevent frivolous changes</li>
              </ul>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-4 mt-4">
            <h5 className="font-semibold text-gray-900 mb-2">Why So Difficult?</h5>
            <p className="text-sm text-gray-700">
              The Framers made amendment intentionally hard to prevent temporary majorities from rewriting fundamental law 
              on a whim. Constitutional stability requires broad, sustained consensus. The process filters out passing fads 
              and ensures only amendments with deep, widespread support become part of our fundamental law.
            </p>
          </div>
        </div>

        {/* What It Does NOT Say */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-600 pb-2">
            ❌ What Article V Does NOT Say
          </h3>
          
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li><strong>Does NOT define how a constitutional convention would work</strong> — No rules on convention procedures, delegates, or scope</li>
            <li><strong>Does NOT specify if convention can be limited to one topic</strong> — Debate over whether convention could become "runaway"</li>
            <li><strong>Does NOT set time limits for ratification</strong> — Congress adds those (typically 7 years)</li>
            <li><strong>Does NOT allow states to rescind ratification</strong> — Unclear if states can change their vote</li>
            <li><strong>Does NOT give President any role</strong> — President cannot sign or veto amendments</li>
            <li><strong>Does NOT limit subject matter of amendments</strong> — Except equal Senate representation and expired slave trade provision</li>
            <li><strong>Does NOT require popular vote</strong> — People vote only if state uses convention method</li>
            <li><strong>Does NOT specify minimum number of states</strong> — Uses fraction (3/4), adjusts as states added</li>
          </ul>
        </div>

        {/* Supreme Court Cases */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            ⚖️ Key Supreme Court Cases
          </h3>
          
          <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
            <li className="text-sm">
              <strong>Hollingsworth v. Virginia (1798)</strong> — President's signature not required for constitutional amendments
            </li>
            <li className="text-sm">
              <strong>Hawke v. Smith (1920)</strong> — State legislatures ratify; state cannot require referendum to approve legislature's ratification
            </li>
            <li className="text-sm">
              <strong>National Prohibition Cases (1920)</strong> — Courts cannot question "wisdom" of amendments; if properly ratified, amendment is valid
            </li>
            <li className="text-sm">
              <strong>Dillon v. Gloss (1921)</strong> — Congress can set reasonable time limits for ratification
            </li>
            <li className="text-sm">
              <strong>Coleman v. Miller (1939)</strong> — Most amendment questions are political questions for Congress to decide
            </li>
            <li className="text-sm">
              <strong>Idaho v. Freeman (1981)</strong> — Held states cannot rescind ERA ratification (later mooted when amendment failed)
            </li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
            <h5 className="font-semibold text-gray-900 mb-2">Political Question Doctrine</h5>
            <p className="text-sm text-gray-700">
              Courts generally treat amendment procedures as "political questions" for Congress to resolve. Courts won't 
              second-guess whether enough time has passed, whether states followed proper procedures, or whether 
              ratification was "valid." Congress has final say on whether an amendment has been properly ratified.
            </p>
          </div>
        </div>

        {/* Amendment History */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            📊 Amendment History & Statistics
          </h3>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-semibold text-gray-900 mb-3">By the Numbers</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm ml-2">
                  <li><strong>27 amendments</strong> ratified (including Bill of Rights)</li>
                  <li><strong>10 amendments</strong> in Bill of Rights (1791)</li>
                  <li><strong>17 amendments</strong> since Bill of Rights</li>
                  <li><strong>~11,000+ amendments</strong> proposed in Congress</li>
                </ul>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm ml-2">
                  <li><strong>33 amendments</strong> sent to states by Congress</li>
                  <li><strong>27 ratified</strong> by states (82% success rate once proposed)</li>
                  <li><strong>0 conventions</strong> ever called</li>
                  <li><strong>Last amendment:</strong> 27th Amendment (1992)</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-semibold text-gray-900 mb-3">Waves of Amendment Activity</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm ml-2">
                <li><strong>1791:</strong> Bill of Rights (Amendments 1-10)</li>
                <li><strong>1865-1870:</strong> Reconstruction Amendments (13th, 14th, 15th) — abolished slavery, equal protection, voting rights</li>
                <li><strong>1913-1920:</strong> Progressive Era (16th-19th) — income tax, direct election of senators, Prohibition, women's suffrage</li>
                <li><strong>1961-1971:</strong> Modern amendments (23rd-26th) — D.C. voting, poll tax ban, succession, 18-year-old vote</li>
                <li><strong>1992:</strong> 27th Amendment (Congressional pay) — originally proposed 1789, ratified 203 years later!</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-semibold text-gray-900 mb-3">Notable Failed Amendments</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm ml-2">
                <li><strong>Equal Rights Amendment (ERA)</strong> — Passed Congress 1972, fell 3 states short of ratification</li>
                <li><strong>District of Columbia Voting Rights</strong> — Passed Congress 1978, ratified by only 16 states</li>
                <li><strong>Child Labor Amendment</strong> — Passed Congress 1924, never ratified (issue addressed by statute instead)</li>
                <li><strong>Balanced Budget Amendment</strong> — Repeatedly proposed, never passed Congress</li>
                <li><strong>Flag Desecration Amendment</strong> — Repeatedly proposed, never passed Congress</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-semibold text-gray-900 mb-3">Convention Applications</h4>
              <p className="text-gray-700 text-sm mb-2">
                While no Article V convention has ever been called, states have submitted applications on various topics:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm ml-2">
                <li><strong>Balanced Budget Amendment</strong> — 28-34 states (depending on counting) have applied</li>
                <li><strong>Term Limits for Congress</strong> — Several states have applied</li>
                <li><strong>Direct Election of President</strong> — Historical applications</li>
                <li>Controversy exists over counting applications, time limits, and whether they can be rescinded</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Comparison: Informal vs Formal Change */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Formal vs. Informal Constitutional Change
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-4 rounded border-2 border-green-600">
              <h4 className="font-semibold text-gray-900 mb-3">✅ Formal Amendment (Article V)</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm ml-2">
                <li>Explicit text changes to Constitution</li>
                <li>Requires supermajorities</li>
                <li>27 successful amendments</li>
                <li>Slow, deliberate, difficult process</li>
                <li>Changes are permanent and unambiguous</li>
                <li><strong>Examples:</strong> Bill of Rights, abolition of slavery, women's suffrage</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded border-2 border-blue-600">
              <h4 className="font-semibold text-gray-900 mb-3">📋 Informal Change (Non-Article V)</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm ml-2">
                <li>Constitutional interpretation and practice</li>
                <li>No formal text change</li>
                <li>Happens continuously</li>
                <li>Judicial decisions, customs, statutes</li>
                <li>Can evolve over time</li>
                <li><strong>Examples:</strong> Executive agreements, administrative agencies, judicial review</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
            <p className="text-sm text-gray-700">
              <strong>Key Distinction:</strong> Article V creates the only method for <em>formally</em> changing the 
              Constitution's text. However, much constitutional development happens through interpretation, custom, and 
              practice. The combination of formal difficulty and informal flexibility allows the Constitution to remain 
              both stable and adaptable.
            </p>
          </div>
        </div>

        {/* Open Questions */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-yellow-600 pb-2">
            ❓ Unresolved Questions About Article V
          </h3>
          
          <div className="space-y-4">
            <div className="bg-yellow-50 p-4 rounded">
              <h4 className="font-semibold text-gray-900 mb-2">🏛️ Constitutional Convention Questions</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm ml-2">
                <li>Can states limit a convention to one topic, or could it become a "runaway convention"?</li>
                <li>How are delegates chosen? Do states get equal votes or proportional representation?</li>
                <li>What are the convention's procedural rules?</li>
                <li>Can Congress refuse to call a convention even if 2/3 of states apply?</li>
                <li>Must state applications be identical, or can they vary in wording?</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-4 rounded">
              <h4 className="font-semibold text-gray-900 mb-2">📅 Timing and Rescission Questions</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm ml-2">
                <li>Can states rescind their ratification before 3/4 threshold is reached?</li>
                <li>Is there a time limit for ratification if Congress doesn't set one?</li>
                <li>Can Congress extend ratification deadlines?</li>
                <li>Can an amendment be ratified centuries later? (27th Amendment suggests yes)</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-4 rounded">
              <h4 className="font-semibold text-gray-900 mb-2">🔍 Substantive Limits Questions</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm ml-2">
                <li>Are there implied limits on what can be amended (e.g., can you amend away free speech)?</li>
                <li>Could an amendment violate "unamendable" principles of republican government?</li>
                <li>Can equal Senate representation protection be circumvented by first amending Article V?</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
            <p className="text-sm text-gray-700">
              <strong>Political Question Doctrine:</strong> Most courts would likely treat these as political questions for 
              Congress and the states to resolve, not judicial questions. This means the political branches have primary 
              responsibility for interpreting Article V's procedures.
            </p>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 mt-8">
          <h3 className="text-2xl font-bold mb-4">Article V Summary</h3>
          <p className="text-lg leading-relaxed mb-4">
            Article V provides the Constitution's self-correction mechanism — a deliberately difficult process requiring 
            broad consensus at both proposal (2/3) and ratification (3/4) stages. This high bar ensures constitutional 
            stability while allowing adaptation when needed.
          </p>
          <p className="leading-relaxed mb-4">
            Two proposal methods (congressional vote or state convention) and two ratification methods (state legislatures 
            or state conventions) provide flexibility, but all paths require supermajorities across multiple levels of 
            government. Only 27 amendments have succeeded in over 230 years — proof of the process's difficulty.
          </p>
          <p className="leading-relaxed">
            The sole permanent limitation — no state can lose equal Senate representation without consent — protects 
            small-state interests. The difficult amendment process filters out temporary passions and ensures only 
            amendments with deep, sustained support become part of our fundamental law, balancing <strong>constitutional 
            stability with democratic adaptability</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
