import Link from 'next/link';

export default function FreeExerciseOfReligionPage() {
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
            <span className="text-5xl">⛪</span>
            <div>
              <h1 className="text-4xl font-bold mb-2">Free Exercise of Religion</h1>
              <h2 className="text-2xl font-semibold">First Amendment</h2>
            </div>
          </div>
          <p className="text-lg leading-relaxed">
            The Free Exercise Clause protects the right to hold religious beliefs and practice religion without 
            government interference, though religious practice can be regulated when it conflicts with important 
            government interests.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Overview</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Free Exercise Clause has two main components: <strong>absolute protection</strong> for religious 
            beliefs and opinions, and <strong>limited protection</strong> for religious conduct. While you have an 
            absolute right to believe whatever you want religiously, religious actions can be regulated by neutral laws 
            of general applicability.
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
              "Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof..."
            </p>
            <p className="text-sm text-gray-600 mt-2">— First Amendment, U.S. Constitution (1791)</p>
          </div>
        </div>

        {/* Plain English */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-red-600 pb-2">
            💭 Plain English Explanation
          </h3>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            The government cannot tell you what to believe religiously, force you to practice (or not practice) a religion, 
            or punish you for your religious beliefs. You have absolute freedom of religious conscience.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            However, when it comes to <em>religious conduct</em> (actions based on religious beliefs), the protection is 
            more limited. The government can enforce neutral laws that apply to everyone, even if they burden religious 
            practice. But laws that specifically target religious practice get strict scrutiny.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
            <p className="text-gray-700">
              <strong>Key Distinction:</strong> Belief vs. Conduct
            </p>
            <ul className="mt-2 space-y-1 text-gray-700 ml-4">
              <li>• <strong>Religious Belief:</strong> Absolutely protected (government can never regulate)</li>
              <li>• <strong>Religious Conduct:</strong> Limited protection (can be regulated by neutral laws)</li>
            </ul>
          </div>
        </div>

        {/* What IS Protected */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-green-600 pb-2">
            ✅ What IS Protected
          </h3>
          
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Religious Beliefs (Absolute Protection)</h4>
              <p className="text-gray-700">
                You can believe anything you want religiously. Government cannot inquire into the truth or validity of 
                religious beliefs. Protection extends to all sincere religious beliefs, even if unconventional or not part 
                of organized religion.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Religious Worship & Practice</h4>
              <p className="text-gray-700">
                Protected activities include attending religious services, prayer, religious education, wearing religious 
                garb, religious rituals, and other forms of worship. Government needs compelling justification to interfere.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Laws Targeting Religion (Strict Scrutiny)</h4>
              <p className="text-gray-700">
                If a law specifically targets religious practice or is not neutral and generally applicable, courts apply 
                strict scrutiny. Government must show the law is necessary to achieve a compelling interest.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Religious Exemptions (Sometimes)</h4>
              <p className="text-gray-700">
                Many federal and state laws provide religious exemptions (e.g., Religious Freedom Restoration Act). While 
                the Constitution doesn't require exemptions from neutral laws, legislatures can create them.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Prisoners' Religious Rights</h4>
              <p className="text-gray-700">
                Incarcerated individuals retain religious exercise rights, though they can be limited for compelling 
                security reasons. Prisons must provide reasonable accommodation for religious practice.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Religious Organizations' Autonomy</h4>
              <p className="text-gray-700">
                Churches and religious organizations have autonomy to make internal decisions about doctrine, governance, 
                and selection of ministers without government interference (ministerial exception).
              </p>
            </div>
          </div>
        </div>

        {/* What is NOT Protected */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-red-600 pb-2">
            ❌ What is NOT Protected
          </h3>
          
          <div className="space-y-4">
            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Exemptions from Neutral Laws</h4>
              <p className="text-gray-700">
                The Constitution doesn't require religious exemptions from neutral laws of general applicability. If a law 
                applies to everyone equally and doesn't target religion, it's constitutional even if it burdens religious 
                practice (Employment Division v. Smith).
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Religious Conduct Harming Others</h4>
              <p className="text-gray-700">
                Religious beliefs cannot justify actions that harm others. Examples: religious human sacrifice, religiously 
                motivated violence, child abuse justified on religious grounds, or refusing medical care for children.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Using Religion to Violate Civil Rights Laws</h4>
              <p className="text-gray-700">
                Religious beliefs generally don't exempt businesses from civil rights laws prohibiting discrimination in 
                public accommodations, though some specific exemptions exist (churches, religious schools).
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Tax Evasion Based on Religious Beliefs</h4>
              <p className="text-gray-700">
                Religious objections don't exempt individuals from paying taxes. Tax laws are neutral laws of general 
                applicability that apply even to those with religious objections to taxation.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Breaking Criminal Laws</h4>
              <p className="text-gray-700">
                Religious motivation doesn't exempt you from generally applicable criminal laws. Religious belief cannot 
                justify theft, fraud, assault, or other crimes that apply to everyone.
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
              <h4 className="font-bold text-gray-900 text-lg mb-2">Employment Division v. Smith (1990)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Neutral Laws Don't Require Exemptions</strong> — Upheld denial of unemployment benefits to Native 
                Americans fired for using peyote in religious ceremony. Neutral laws of general applicability don't violate 
                Free Exercise Clause even if they burden religion.
              </p>
              <p className="text-gray-700 text-sm">
                Major shift in Free Exercise law. Prior cases suggested religious exemptions might be required; Smith said 
                they're not constitutionally mandated (though legislatures can provide them). Led to Religious Freedom 
                Restoration Act (RFRA).
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Sherbert v. Verner (1963)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Pre-Smith Standard (No Longer Applied)</strong> — Required government to show compelling interest 
                for laws burdening religion. State couldn't deny unemployment benefits to Seventh-day Adventist who refused 
                Saturday work.
              </p>
              <p className="text-gray-700 text-sm">
                Established "Sherbert test" requiring compelling interest and least restrictive means. Smith largely 
                overruled this approach for neutral laws, but Sherbert still applies to individualized assessments and laws 
                targeting religion.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Church of the Lukumi Babalu Aye v. Hialeah (1993)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Laws Targeting Religion Are Unconstitutional</strong> — Struck down city ordinances banning animal 
                sacrifice that were specifically designed to target Santeria religion. Laws must be neutral toward religion.
              </p>
              <p className="text-gray-700 text-sm">
                Even after Smith, laws that target religious practice or lack neutrality get strict scrutiny. City's 
                ordinances had exceptions for killing animals in other contexts (hunting, kosher slaughter) but banned 
                religious sacrifice.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Wisconsin v. Yoder (1972)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Amish Education Exemption</strong> — Amish families could not be required to send children to 
                school past 8th grade when it violated sincere religious beliefs. Compulsory education law violated Free 
                Exercise.
              </p>
              <p className="text-gray-700 text-sm">
                Recognized that compulsory high school attendance would destroy Amish community way of life. Case shows 
                courts will sometimes require exemptions when laws severely burden religious practice of insular communities.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Hosanna-Tabor Evangelical Lutheran Church v. EEOC (2012)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Ministerial Exception</strong> — Religious organizations have autonomy to select ministers and 
                religious leaders without government interference. Employment discrimination laws don't apply to selection 
                of ministers.
              </p>
              <p className="text-gray-700 text-sm">
                First Amendment gives religious organizations special autonomy over internal affairs and religious leadership. 
                Government cannot dictate who serves as minister, even to enforce generally applicable employment laws.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Burwell v. Hobby Lobby (2014)</h4>
              <p className="text-gray-700 mb-3">
                <strong>RFRA Protects For-Profit Corporations</strong> — Closely held corporations have religious exercise 
                rights under Religious Freedom Restoration Act. Hobby Lobby could not be required to provide contraception 
                coverage.
              </p>
              <p className="text-gray-700 text-sm">
                Decided under RFRA statute, not directly under Constitution. Controversial decision extending religious 
                exercise rights to for-profit companies and allowing them exemptions from healthcare law's contraception 
                mandate.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Fulton v. City of Philadelphia (2021)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Religious Foster Care Agencies</strong> — Philadelphia violated Free Exercise by excluding Catholic 
                agency from foster care program because agency wouldn't certify same-sex couples. Policy wasn't generally 
                applicable.
              </p>
              <p className="text-gray-700 text-sm">
                City's policy had mechanism for exceptions, making it not generally applicable under Smith. When government 
                has system of individualized exemptions, denying religious exemption violates Free Exercise.
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
              <h4 className="font-bold text-gray-900 mb-3">Religious Freedom Restoration Act (RFRA)</h4>
              <p className="text-gray-700 mb-2">
                After Smith, Congress passed RFRA requiring government to show compelling interest and use least restrictive 
                means when substantially burdening religion. RFRA applies to federal government and about half the states 
                have similar laws.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-2">
                <p className="text-gray-700">
                  <strong>Important:</strong> RFRA provides stronger protection than the Constitution requires. Many religious 
                  liberty claims are brought under RFRA, not the Free Exercise Clause itself.
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">COVID-19 Restrictions</h4>
              <p className="text-gray-700">
                Recent cases found that treating religious gatherings less favorably than comparable secular activities 
                (like businesses) violates Free Exercise. Religious gatherings can be regulated for public health, but 
                must be treated at least as well as similar secular activities.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Military & Prison Contexts</h4>
              <p className="text-gray-700">
                Military service members and prisoners retain religious exercise rights, but they can be limited more than 
                in civilian contexts. Courts give deference to military and prison officials' judgments about security and 
                order, but some accommodation is required.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Religious Exemptions from Healthcare Laws</h4>
              <p className="text-gray-700">
                Under RFRA and ACA regulations, religious employers can receive exemptions from contraception mandate. 
                Balance between religious liberty and ensuring healthcare access remains controversial and evolving.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Religious Dress & Appearance</h4>
              <p className="text-gray-700">
                Wearing religious garb (hijab, yarmulke, turban, cross) is protected. Employers must reasonably accommodate 
                religious dress unless it creates undue hardship. Schools generally cannot ban religious clothing.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">What Counts as "Religion"?</h4>
              <p className="text-gray-700">
                Courts define religion broadly to include belief systems that occupy a place parallel to traditional 
                theistic religions. Must be sincere and not purely secular philosophy. New Age beliefs, ethical frameworks, 
                and non-theistic religions can qualify.
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
              <span>Religious beliefs are absolutely protected; government can never regulate what you believe</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Religious conduct has limited protection under neutral laws of general applicability (Smith rule)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Laws targeting religion or lacking neutrality face strict scrutiny and are usually unconstitutional</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>RFRA and state religious freedom laws provide stronger protection than Constitution requires</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Religious organizations have autonomy over internal affairs and selection of ministers</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Religious practice cannot justify harming others or violating generally applicable criminal laws</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
