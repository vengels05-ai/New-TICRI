import Link from 'next/link';

export default function RightToBearArmsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          href="/rights" 
          className="inline-flex items-center text-red-600 hover:text-red-800 mb-8"
        >
          ← Back to Rights
        </Link>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-800 text-white p-8 rounded-lg shadow-lg mb-8">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-5xl">🔫</span>
            <div>
              <h1 className="text-4xl font-bold mb-2">Right to Bear Arms</h1>
              <h2 className="text-2xl font-semibold">Second Amendment</h2>
            </div>
          </div>
          <p className="text-lg leading-relaxed">
            The Second Amendment protects an individual right to keep and bear arms for self-defense and other lawful 
            purposes, though this right is not unlimited and can be subject to reasonable regulations.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Overview</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Second Amendment is one of the most debated constitutional provisions. For most of American history, courts 
            treated it as protecting only a collective right related to militia service. In 2008, the Supreme Court 
            recognized an individual right to firearm ownership for self-defense, though governments retain authority 
            to regulate firearms.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This breakdown uses the <strong>TICRI Constitutional Rights</strong> methodology to provide:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-1 text-gray-700 ml-4">
            <li>📜 Constitutional Text</li>
            <li>💭 Plain English Explanation</li>
            <li>✅ What IS Protected</li>
            <li>❌ What is NOT Protected</li>
            <li>⚖️ Key Supreme Court Cases</li>
            <li>🔍 Real-World Applications</li>
          </ul>
        </div>

        {/* Constitutional Text */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-red-600 pb-2">
            📜 Constitutional Text
          </h3>
          
          <div className="mb-6">
            <p className="text-gray-700 italic bg-gray-50 p-4 rounded text-lg">
              "A well regulated Militia, being necessary to the security of a free State, the right of the people to 
              keep and bear Arms, shall not be infringed."
            </p>
            <p className="text-sm text-gray-600 mt-2">— Second Amendment, U.S. Constitution (1791)</p>
          </div>
        </div>

        {/* Plain English */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-red-600 pb-2">
            💭 Plain English Explanation
          </h3>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            Individuals have a constitutional right to own and possess firearms for lawful purposes, especially self-defense 
            in the home. The "militia" language explains one purpose of the right but doesn't limit it to militia service.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            This is <strong>not an unlimited right</strong>. Government can prohibit certain dangerous people from having 
            guns (felons, mentally ill), ban certain dangerous weapons, and regulate where guns can be carried. The debate 
            is about where to draw the line.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
            <p className="text-gray-700 mb-2">
              <strong>The Big Change - District of Columbia v. Heller (2008):</strong>
            </p>
            <p className="text-gray-700">
              Before 2008, Second Amendment was largely interpreted as collective right tied to militia service. Heller 
              recognized individual right to firearm ownership for self-defense, fundamentally changing Second Amendment 
              law.
            </p>
          </div>
        </div>

        {/* What IS Protected */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-green-600 pb-2">
            ✅ What IS Protected
          </h3>
          
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Individual Right to Own Firearms</h4>
              <p className="text-gray-700">
                Individuals have right to possess firearms unconnected to militia service. This is personal right, not 
                just collective right of states to maintain militias. Core protection is for self-defense in the home.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Handguns for Self-Defense</h4>
              <p className="text-gray-700">
                Right to possess handguns in the home for self-defense is specifically protected. Government cannot ban 
                entire class of arms (handguns) that are in common use for lawful purposes.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Weapons "In Common Use"</h4>
              <p className="text-gray-700">
                Firearms in common use for lawful purposes receive Second Amendment protection. Test is whether weapon 
                is commonly owned by law-abiding citizens for lawful purposes (hunting, sport, self-defense).
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Right Applies to States</h4>
              <p className="text-gray-700">
                Second Amendment applies to state and local governments through Fourteenth Amendment incorporation 
                (McDonald v. Chicago). States cannot ban handgun possession in home.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Carrying Outside the Home (Recent Development)</h4>
              <p className="text-gray-700">
                New York State Rifle & Pistol Assoc. v. Bruen (2022) recognized right to carry handgun outside home for 
                self-defense. States cannot require applicants to show "special need" beyond general self-defense.
              </p>
            </div>
          </div>
        </div>

        {/* What the Second Amendment Does NOT Say */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-red-600 pb-2">
            📜 What the Second Amendment Does NOT Say
          </h3>
          
          <div className="space-y-4">
            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">The Text Says "Shall Not Be Infringed"</h4>
              <p className="text-gray-700">
                The Second Amendment contains <strong>no exceptions, qualifications, or limitations</strong> on the right 
                to keep and bear arms. It does not say "except felons," "except certain weapons," "except in sensitive places," 
                or "subject to reasonable regulations."
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">The Bruen Standard (2022)</h4>
              <p className="text-gray-700">
                <em>New York State Rifle & Pistol Association v. Bruen</em> (2022) established that <strong>any</strong>{' '}
                firearm regulation must have a historical analogue from 1791 (when the Second Amendment was ratified). 
                Modern gun control measures—background checks, licensing schemes, permit requirements, weapon type 
                restrictions—generally have no basis in the 1791 historical tradition.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">No Federal Power to Regulate Types of Weapons</h4>
              <p className="text-gray-700">
                The Amendment protects "Arms" without qualification. There is no constitutional basis for federal laws 
                banning specific weapon types, restricting magazine capacity, or regulating features. The "dangerous and 
                unusual" language from <em>Heller</em> was dicta (non-binding commentary), not constitutional text.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">No Federal Power to Regulate Carrying Weapons</h4>
              <p className="text-gray-700">
                The text protects the right to <strong>bear</strong> (carry) arms. Federal laws restricting how, when, or 
                where arms may be carried have no constitutional foundation. <em>Bruen</em> struck down New York's requirement 
                for "proper cause" to carry and requires historical support for any carry restrictions.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">No Federal Power to Regulate Manner of Carrying</h4>
              <p className="text-gray-700">
                Laws prohibiting concealed carry, open carry, or prescribing specific manners of carrying are not supported 
                by the constitutional text. Any such regulation would need to show a 1791 historical analogue under <em>Bruen</em>.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">Category-Based Prohibitions Lack Textual Support</h4>
              <p className="text-gray-700">
                Blanket prohibitions on firearm possession by felons, those adjudicated mentally ill, or other categories 
                are not enumerated in the Amendment's text. While such laws exist, they must satisfy <em>Bruen</em>'s 
                requirement of historical analogue from 1791. The Amendment says "the people," not "some people."
              </p>
            </div>
          </div>
        </div>

        {/* Supreme Court Cases */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            ⚖️ Key Supreme Court Cases
          </h3>
          
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">District of Columbia v. Heller (2008)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Individual Right Recognized</strong> — Second Amendment protects individual right to possess 
                firearms for lawful purposes, especially self-defense in the home. Struck down D.C.'s handgun ban and 
                trigger-lock requirement.
              </p>
              <p className="text-gray-700 text-sm">
                Landmark 5-4 decision fundamentally changing Second Amendment law. Rejected "collective right" interpretation 
                in favor of individual right. But emphasized right is "not unlimited" and many regulations remain valid.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">McDonald v. City of Chicago (2010)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Second Amendment Applies to States</strong> — Incorporated Second Amendment against states through 
                Fourteenth Amendment Due Process Clause. States and cities must respect individual gun rights same as 
                federal government.
              </p>
              <p className="text-gray-700 text-sm">
                Extended Heller to state and local governments. Chicago's handgun ban unconstitutional. Made Second Amendment 
                enforceable nationwide, not just against federal government.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">New York State Rifle & Pistol Assoc. v. Bruen (2022)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Right to Carry Outside Home</strong> — Second Amendment protects right to carry handgun in public 
                for self-defense. Struck down New York's requirement to show "proper cause" for concealed carry permit. 
                Established "text, history, and tradition" test for gun regulations.
              </p>
              <p className="text-gray-700 text-sm">
                Major expansion of gun rights. States can still require permits but cannot make applicants prove special 
                need. Rejected "means-end" scrutiny in favor of historical analysis: regulation must be consistent with 
                Nation's historical tradition.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">United States v. Miller (1939)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Pre-Heller Case</strong> — Upheld federal law prohibiting sawed-off shotguns. Second Amendment 
                protects only weapons with "reasonable relationship" to militia use. This was dominant interpretation 
                until Heller changed the framework.
              </p>
              <p className="text-gray-700 text-sm">
                For decades, Miller was read to support collective-right view of Second Amendment. Heller reinterpreted 
                Miller as supporting "common use" test: weapons in common use for lawful purposes are protected.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">United States v. Cruikshank (1876)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Early Limiting Case</strong> — Second Amendment only restricts federal government, not private 
                action or states. This limited the Amendment's reach for over a century until McDonald incorporated it 
                against states in 2010.
              </p>
              <p className="text-gray-700 text-sm">
                Part of post-Civil War cases that narrowly interpreted Reconstruction Amendments. Limited Second Amendment 
                to federal action. McDonald overruled this aspect in 2010.
              </p>
            </div>
          </div>
        </div>

        {/* Real-World Applications */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-purple-600 pb-2">
            🔍 Real-World Applications
          </h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-gray-900 mb-3">The New Test After Bruen: "Text, History, and Tradition"</h4>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <p className="text-gray-700 mb-2">
                  <strong>Major Change:</strong> Bruen rejected interest-balancing tests in favor of historical analysis. 
                  To justify gun regulation, government must show it's consistent with Nation's historical tradition of 
                  firearm regulation.
                </p>
                <p className="text-gray-700">
                  This shifts burden to government to find historical analogues to modern regulations. Many gun control 
                  laws now face renewed challenges under this framework.
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">"Assault Weapons" Bans</h4>
              <p className="text-gray-700">
                Highly contested issue. Some states ban AR-15s and similar semi-automatic rifles. Debate centers on whether 
                these are "dangerous and unusual" or "in common use" for lawful purposes. Post-Bruen, these bans face 
                increased legal scrutiny.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Red Flag Laws</h4>
              <p className="text-gray-700">
                Extreme Risk Protection Orders allow temporary firearm removal from persons deemed dangerous. Require due 
                process (hearing, burden of proof). Constitutional questions about due process and Second Amendment rights 
                remain unsettled.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Universal Background Checks</h4>
              <p className="text-gray-700">
                Federal law requires background checks for commercial sales. Some states extend to private sales. Generally 
                considered constitutional under "longstanding" prohibition on felons possessing firearms. Enforcing through 
                commercial sale regulations is presumptively lawful.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Concealed vs. Open Carry</h4>
              <p className="text-gray-700">
                Bruen protects right to carry, but states can regulate manner. Some states allow open carry but restrict 
                concealed carry, or vice versa. Must allow some form of public carry, but can regulate how it's done.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Evolving Area of Law</h4>
              <p className="text-gray-700">
                Second Amendment law is rapidly developing. Heller (2008), McDonald (2010), and Bruen (2022) are recent 
                cases. Many questions remain unanswered: constitutionality of age restrictions, large-capacity magazine 
                bans, assault weapon bans, and other regulations. Expect continued litigation.
              </p>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-red-600 to-red-800 text-white rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Key Takeaways</h3>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Individual right to possess firearms for lawful purposes, especially self-defense in the home</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Right to carry handguns in public for self-defense (Bruen 2022)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Firearms "in common use" for lawful purposes are protected; "dangerous and unusual" weapons are not</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Many regulations remain constitutional: felon prohibitions, sensitive place restrictions, commercial regulations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>New "text, history, and tradition" test requires government to show historical basis for gun regulations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Rapidly evolving area of law with many unsettled questions about specific regulations</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
