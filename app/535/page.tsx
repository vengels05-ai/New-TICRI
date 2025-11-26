export default function Congress535Page() {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto p-4 md:p-8 max-w-5xl">
        
        {/* Header */}
        <header className="text-center mb-12 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-12 rounded-lg shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">535</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">How Congress is elected, how it functions, and institutional mechanisms that shape policymaking: the House, the Senate, the 17th Amendment, the filibuster, and sub-committees.</p>
        </header>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
          
          {/* Intro */}
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Welcome to the <strong>535 section</strong> — an overview of the United States Congress (the 535 voting members in the House and Senate), how representatives and senators are chosen, how institutional rules shape outcomes, and where reform debates are focused.
            </p>
            <p className="text-gray-600 leading-relaxed">
              This section covers how members of the House and Senate are elected and apportioned, the 17th Amendment and the shift to direct election of senators, the filibuster and its history, and how sub-committees can act as barriers to policy and become venues for entrenched interests.
            </p>
          </div>

          {/* Congress Basics */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 border-b-4 border-blue-900 inline-block pb-2">The U.S. Congress: 535 Members</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">House of Representatives</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span><strong>435 voting members</strong> (plus 6 non-voting delegates)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span>Elected by congressional districts within each state</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span><strong>2-year terms</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span>Representation proportional to state population</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span>Reapportioned every 10 years after the census</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-red-900 mb-4">Senate</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span><strong>100 senators</strong> (2 per state)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span>Originally chosen by state legislatures (until 1913)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span>Since 1913: <strong>directly elected by popular vote</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span><strong>6-year terms</strong> (staggered; 1/3 elected every 2 years)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span>Equal representation regardless of state size</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 17th Amendment */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 border-b-4 border-red-600 inline-block pb-2">The 17th Amendment</h2>
            <p className="text-gray-600 italic mb-6">How the 17th Amendment changed Senate elections from selection by state legislatures to direct election by the people.</p>
            
            <div className="space-y-6 text-gray-800">
              <p className="leading-relaxed">
                The <a href="https://www.archives.gov/milestone-documents/seventeenth-amendment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">17th Amendment</a> (ratified 1913) shifted the election of U.S. Senators from state legislatures to direct popular vote. This was a major change in federal-state relations and the democratic franchise.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Key Effects</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Increased direct accountability of senators to voters rather than state legislatures.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Reduced the influence of state political machines and legislative bargaining on Senate composition.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Altered the balance of state-versus-federal influence in national lawmaking.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                <h3 className="text-xl font-bold text-amber-900 mb-4">Critical Perspective on Federalism</h3>
                <p className="leading-relaxed mb-4">
                  Many scholars and critics argue the 17th Amendment substantially weakened American federalism. Prior to 1913, state legislatures selected senators, which created an institutional check: states could influence national policy through their legislative choices. By transferring that selection power to the nationwide electorate, the amendment:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span>Removed an avenue through which states could counterbalance federal centralization. Senators no longer directly represented state legislatures' preferences in Washington.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span>Brought senators into the same electoral incentives as House members, reducing a structural difference that previously encouraged attention to state interests.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span>Consolidated electoral pressure: because the same electorate chooses both representatives and senators, national political coalitions and party organizations have increased leverage over both chambers.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Consequences</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span>With senators responsive directly to popular national campaigns, the formal institutional mechanism that tied senators to state governments was weakened, and with it a check on federal aggrandizement.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span>The change also made it easier for national interests, parties, and well-funded campaigns to shape Senate composition, arguably diluting local or state-specific counterweights.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Filibuster */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 border-b-4 border-red-600 inline-block pb-2">The Filibuster</h2>
            <p className="text-gray-600 italic mb-6">What the filibuster is, its history, why it's not in the Constitution, and how it allows a minority to block legislation.</p>
            
            <div className="space-y-6 text-gray-800">
              <p className="leading-relaxed">
                The filibuster is a Senate rule and practice that allows extended debate and — in its modern form — requires a supermajority (usually 60 votes) to invoke cloture and end debate on most legislation. <strong>It is not a provision in the Constitution</strong>; rather, it is a Senate-created rule that evolved over time.
              </p>

              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <h3 className="text-xl font-bold text-red-900 mb-4">Why It Matters</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">⚠</span>
                    <span>The filibuster enables a minority of senators to block legislation the majority supports.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">⚠</span>
                    <span>Its procedural origins date to changes in Senate rules in the 19th century; it was neither contemplated nor mandated by the Constitution.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">⚠</span>
                    <span>The United States is unusual among democracies for giving such a persistent blocking tool to a minority in a legislative chamber's upper house.</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">History and Key Dates</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-6 py-2">
                  <h4 className="font-bold text-blue-900">Early 19th century</h4>
                  <p className="text-gray-700">The Senate's rules allowed for extended debate; the formal removal of the 'previous question' rule in 1806 removed a mechanism that had limited debate, opening the door to the filibuster as a tactic.</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-6 py-2">
                  <h4 className="font-bold text-blue-900">1837–1841</h4>
                  <p className="text-gray-700">Early sustained uses of filibuster-style tactics occurred, but the practice was not yet a central institution.</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-6 py-2">
                  <h4 className="font-bold text-blue-900">1917</h4>
                  <p className="text-gray-700">The modern cloture rule was adopted (Rule XXII) after repeated filibusters obstructed wartime legislation; the rule initially required two-thirds of those present to end debate.</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-6 py-2">
                  <h4 className="font-bold text-blue-900">1975</h4>
                  <p className="text-gray-700">The Senate reduced the cloture threshold for most legislation from two-thirds to three-fifths (60 votes), which remains the standard for terminating debate on most matters.</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-6 py-2">
                  <h4 className="font-bold text-blue-900">Late 20th to early 21st century</h4>
                  <p className="text-gray-700">The norm of the spoken, continuous filibuster largely faded as the Senate shifted to procedural holds and silent filibusters, where the mere threat of extended debate suffices.</p>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h3 className="text-xl font-bold text-purple-900 mb-4">The End of the Verbal Filibuster</h3>
                <p className="text-gray-700 leading-relaxed">
                  By the mid-20th century the classic image of a senator speaking for hours on the floor declined. Modern obstruction is typically performed through procedural tactics and the threat of extended debate rather than sustained, public floor speeches. The change reflects both the increasing complexity of Senate procedures and deliberate rule adaptations.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-xl font-bold text-green-900 mb-4">Exceptions and Limitations</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span><strong>Budget reconciliation:</strong> Since the Congressional Budget Act of 1974, reconciliation bills are limited in scope and (by Senate rules) are not subject to filibuster on their core budgetary instructions, allowing passage with a simple majority under certain procedural constraints.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span><strong>Nominations:</strong> Senate rules changed in the 2010s to reduce the filibuster for most executive branch nominations and judicial nominations (the "nuclear option" was invoked in 2013 for most nominations and in 2017 for Supreme Court nominees), allowing these confirmations by simple majority.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Sub-committees */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 border-b-4 border-red-600 inline-block pb-2">Sub-committees</h2>
            <p className="text-gray-600 italic mb-6">The role of sub-committees in Congress and their impact on policy.</p>
            
            <div className="space-y-6 text-gray-800">
              <p className="leading-relaxed">
                Sub-committees are smaller groups within congressional committees that focus on specific areas of legislation. They play a crucial role in shaping policy and can significantly influence the legislative process.
              </p>

              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-orange-900 mb-4">How Sub-committees Can Fail in Practice</h3>
                <p className="leading-relaxed mb-4">
                  Originally designed to distribute workload and provide subject-matter focus, congressional sub-committees were intended to make legislating manageable and to surface expert testimony. In practice, critics argue they frequently become:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span><strong>Gatekeepers:</strong> Members of sub-committees — often junior or less experienced members of Congress — can control which bills advance. That gatekeeping can slow or prevent reform even when there is broader support.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span><strong>Capture points for lobbyists:</strong> Sub-committees with narrow jurisdictions attract concentrated attention from industry lobbyists and special-interest groups who can present technical expertise, model legislation, and funding details tailored to committee staff.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span><strong>Engines of opacity:</strong> Major policy changes increasingly arrive in large omnibus bills or appropriations packages that bundle unrelated items together. These 500–1000+ page packages are difficult for the public and many members to parse, enabling hidden riders and funding earmarks that bypass full deliberation.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Resulting Harms</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✗</span>
                    <span>Policy complexity and bill length can hide unrelated spending or regulatory changes, slowing democratic oversight.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✗</span>
                    <span>Lobbyist networks gain outsized influence where expertise is concentrated and staff capacity is limited.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Reform Ideas</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">→</span>
                    <span>Increase transparency for sub-committee markup and require public posting of amendments before votes.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">→</span>
                    <span>Strengthen staff support and nonpartisan review to reduce reliance on outside expertise.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">→</span>
                    <span>Limit omnibus bundling and require more targeted, single-purpose bills where possible.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Resources */}
          <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Sources & Further Reading</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• <a href="https://www.archives.gov/milestone-documents/seventeenth-amendment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Seventeenth Amendment text — National Archives</a></li>
              <li>• <a href="https://www.senate.gov/about/powers-procedures/filibuster-cloture/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Senate Historical Office — Filibuster and Cloture</a></li>
              <li>• Senate Historical Office materials on filibuster history</li>
              <li>• Scholarship on Progressive Era reforms and federalism</li>
              <li>• Contemporary debates on filibuster reform and its democratic costs</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}
