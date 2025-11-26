import Link from 'next/link';

export default function DueProcessSubstantivePage() {
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
            <span className="text-5xl">🛡️</span>
            <div>
              <h1 className="text-4xl font-bold mb-2">Due Process (Substantive)</h1>
              <h2 className="text-2xl font-semibold">Fifth & Fourteenth Amendments</h2>
            </div>
          </div>
          <p className="text-lg leading-relaxed">
            Substantive due process protects fundamental rights from government interference regardless of procedures used. 
            It's the "what" of government action — limiting what government can do even with perfect procedures.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Overview</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            While procedural due process is about fair procedures, substantive due process protects certain fundamental 
            rights from government interference. Even if government follows perfect procedures, it cannot violate these 
            core liberties. This doctrine is controversial because it involves courts identifying unenumerated rights.
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
            <p className="text-gray-700 italic bg-gray-50 p-4 rounded text-lg mb-3">
              "No person shall... be deprived of life, liberty, or property, without due process of law..."
            </p>
            <p className="text-sm text-gray-600 mb-4">— Fifth Amendment (applies to federal government)</p>
            
            <p className="text-gray-700 italic bg-gray-50 p-4 rounded text-lg mb-3">
              "...nor shall any State deprive any person of life, liberty, or property, without due process of law..."
            </p>
            <p className="text-sm text-gray-600">— Fourteenth Amendment (applies to states)</p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
            <p className="text-gray-700">
              <strong>Note:</strong> Same text as procedural due process, but interpreted to protect substantive rights, 
              not just procedures. Controversial interpretation deriving unenumerated rights from "liberty."
            </p>
          </div>
        </div>

        {/* Plain English */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-red-600 pb-2">
            💭 Plain English Explanation
          </h3>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            The Constitution protects certain fundamental rights even though they're not specifically listed. "Liberty" 
            in Due Process Clause includes more than just freedom from physical restraint — it includes fundamental 
            aspects of personal autonomy and private life.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>When government restricts fundamental right:</strong> Courts apply strict scrutiny. Government must 
            show the law is necessary to achieve a compelling government interest and is narrowly tailored. Very hard 
            to satisfy.
          </p>

          <p className="text-gray-700 leading-relaxed">
            <strong>When law doesn't affect fundamental right:</strong> Courts apply rational basis review. Government 
            only needs to show law is rationally related to legitimate government purpose. Very easy to satisfy.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
            <p className="text-gray-700 mb-2">
              <strong>The Controversy:</strong> Critics say courts shouldn't "invent" rights not in Constitution's text. 
              Supporters say "liberty" must evolve to protect essential freedoms. This debate continues.
            </p>
          </div>
        </div>

        {/* What IS Protected */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-green-600 pb-2">
            ✅ What IS Protected (Fundamental Rights)
          </h3>
          
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Marriage & Family Rights</h4>
              <p className="text-gray-700">
                Right to marry (including same-sex marriage), raise children, live with family, make decisions about 
                children's upbringing. Government cannot prohibit marriage without compelling justification. Includes 
                interracial marriage, prisoner marriage, same-sex marriage.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Parental Rights</h4>
              <p className="text-gray-700">
                Parents have fundamental right to direct upbringing and education of children. Can choose private school, 
                homeschool, religious education. State cannot unreasonably interfere with parent-child relationship.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Privacy & Bodily Autonomy</h4>
              <p className="text-gray-700">
                Right to make intimate personal decisions about sex, contraception, and reproduction. Originally included 
                abortion (Roe v. Wade), but Dobbs v. Jackson (2022) overruled Roe, holding no constitutional right to 
                abortion. Contraception access still protected.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Sexual Intimacy</h4>
              <p className="text-gray-700">
                Adults have right to engage in consensual sexual conduct in privacy of home (Lawrence v. Texas). Government 
                cannot criminalize consensual adult sexual activity based on moral disapproval.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Right to Refuse Medical Treatment</h4>
              <p className="text-gray-700">
                Competent adults have right to refuse unwanted medical treatment, including life-sustaining treatment. 
                Bodily integrity is fundamental aspect of liberty. May extend to withdrawal of life support for incompetent 
                patients with clear prior wishes.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Freedom of Movement</h4>
              <p className="text-gray-700">
                Right to travel interstate is fundamental. States cannot restrict right to enter or leave state, or treat 
                new residents differently from longtime residents. Protects freedom to move to new state.
              </p>
            </div>
          </div>
        </div>

        {/* What is NOT Protected */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-red-600 pb-2">
            ❌ What is NOT Protected (Or No Longer Protected)
          </h3>
          
          <div className="space-y-4">
            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Abortion Rights (As of 2022)</h4>
              <p className="text-gray-700">
                Dobbs v. Jackson Women's Health Organization (2022) overruled Roe v. Wade and Planned Parenthood v. Casey. 
                No constitutional right to abortion. States can regulate or ban abortion without violating Due Process 
                Clause. Major reversal of 50 years of precedent.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Economic Rights & "Liberty of Contract"</h4>
              <p className="text-gray-700">
                Lochner era (1897-1937) recognized economic liberty as fundamental right. Court struck down minimum wage, 
                maximum hour, and labor laws. Rejected since 1937 — economic regulations get only rational basis review. 
                No fundamental right to economic liberty.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Right to Physician-Assisted Suicide</h4>
              <p className="text-gray-700">
                No fundamental right to assistance in committing suicide (Washington v. Glucksberg). States can ban 
                physician-assisted suicide without violating Due Process. Distinguished from right to refuse treatment.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Education</h4>
              <p className="text-gray-700">
                No fundamental right to education under federal Constitution (San Antonio v. Rodriguez). States can provide 
                different levels of school funding without violating Due Process. Some state constitutions protect 
                education more strongly.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Welfare or Social Services</h4>
              <p className="text-gray-700">
                No fundamental right to welfare benefits, housing, or healthcare under federal Constitution. Government 
                can deny or terminate benefits (with procedural due process). Not every important interest is 
                "fundamental."
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
              <h4 className="font-bold text-gray-900 text-lg mb-2">Griswold v. Connecticut (1965)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Privacy Right to Contraception</strong> — Married couples have right to use contraception. 
                Constitution protects "zones of privacy" formed by penumbras of specific Bill of Rights guarantees. 
                State cannot ban contraception for married couples.
              </p>
              <p className="text-gray-700 text-sm">
                Foundational privacy case. Recognized unenumerated privacy right, though justices disagreed on source 
                (penumbras, Ninth Amendment, or Due Process Clause). Led to expansion of privacy rights.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Roe v. Wade (1973) & Dobbs v. Jackson (2022)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Abortion Rights: Established Then Overturned</strong> — Roe recognized constitutional right to 
                abortion based on privacy and due process. Dobbs overruled Roe 49 years later, holding no constitutional 
                right to abortion. States can now regulate or ban abortion.
              </p>
              <p className="text-gray-700 text-sm">
                Most consequential substantive due process reversal. Dobbs limited substantive due process to rights 
                "deeply rooted in Nation's history and tradition." Abortion doesn't qualify under that test. Heightened 
                controversy over unenumerated rights.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Obergefell v. Hodges (2015)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Same-Sex Marriage Constitutional Right</strong> — Right to marry is fundamental, includes 
                same-sex couples. States cannot deny marriage licenses to same-sex couples. Combination of Due Process 
                and Equal Protection.
              </p>
              <p className="text-gray-700 text-sm">
                Extended marriage right to same-sex couples nationwide. Relied on dignity and autonomy protected by 
                Due Process Clause. After Dobbs, some question whether Obergefell remains secure.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Lawrence v. Texas (2003)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Consensual Sexual Conduct Protected</strong> — Adults have liberty interest in consensual sexual 
                conduct in privacy of home. States cannot criminalize sodomy based on moral disapproval. Overruled 
                Bowers v. Hardwick (1986).
              </p>
              <p className="text-gray-700 text-sm">
                Major gay rights decision. Recognized that intimate consensual adult conduct is protected by Due Process. 
                Paved way for later marriage equality decisions.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Loving v. Virginia (1967)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Interracial Marriage</strong> — Right to marry is fundamental. Virginia's ban on interracial 
                marriage violated both Due Process and Equal Protection. Marriage is "one of the vital personal rights 
                essential to the orderly pursuit of happiness."
              </p>
              <p className="text-gray-700 text-sm">
                Struck down bans on interracial marriage that existed in 16 states. Established marriage as fundamental 
                right protected by Due Process, not just Equal Protection issue.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Meyer v. Nebraska (1923) & Pierce v. Society of Sisters (1925)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Parental Rights</strong> — Parents have liberty interest in directing children's upbringing and 
                education. State cannot prohibit teaching foreign languages or force children to attend public school. 
                Parents can choose private or religious education.
              </p>
              <p className="text-gray-700 text-sm">
                Early substantive due process cases protecting family rights. Established parental autonomy in child-rearing 
                as fundamental right surviving to present day.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Washington v. Glucksberg (1997)</h4>
              <p className="text-gray-700 mb-3">
                <strong>No Right to Assisted Suicide</strong> — No fundamental right to physician-assisted suicide. 
                Established test for new fundamental rights: must be "deeply rooted in Nation's history and tradition" 
                and "implicit in concept of ordered liberty."
              </p>
              <p className="text-gray-700 text-sm">
                Rejected broad due process liberty claims. Set high bar for recognizing new fundamental rights — must 
                describe right narrowly and show historical tradition. Dobbs relied heavily on this framework.
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
              <h4 className="font-bold text-gray-900 mb-3">Post-Dobbs Landscape</h4>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <p className="text-gray-700 mb-2">
                  <strong>Major Shift in 2022:</strong> Dobbs overturned Roe, eliminating constitutional abortion right. 
                  Court limited substantive due process to rights with deep historical roots. This creates uncertainty 
                  about other privacy rights.
                </p>
                <p className="text-gray-700">
                  Justice Thomas's concurrence suggested reconsidering other substantive due process precedents (contraception, 
                  sodomy, same-sex marriage). Majority said these weren't at issue, but concern remains.
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Marriage Rights</h4>
              <p className="text-gray-700">
                Marriage is fundamental right protected by substantive due process. Includes:
              </p>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1 mt-2">
                <li>Interracial marriage (Loving v. Virginia)</li>
                <li>Prisoner marriage (Turner v. Safley)</li>
                <li>Same-sex marriage (Obergefell v. Hodges)</li>
                <li>Right to not marry (cannot be forced to marry)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Family & Parental Rights</h4>
              <p className="text-gray-700">
                Parents have broad autonomy in raising children:
              </p>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1 mt-2">
                <li>Choice of school (public, private, religious, homeschool)</li>
                <li>Medical decisions for minor children</li>
                <li>Religious upbringing</li>
                <li>Maintaining family relationships (grandparents' rights limited)</li>
              </ul>
              <p className="text-gray-700 mt-2">
                State can intervene only with compelling interest (abuse, neglect). Child welfare is compelling, but 
                must respect parental rights.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Contraception Access</h4>
              <p className="text-gray-700">
                Access to contraception remains protected under Griswold and its progeny. Applies to married and unmarried 
                people, adults and minors. After Dobbs, some states considering restrictions, but current precedent still 
                protects contraception access.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Medical Decisions & Bodily Autonomy</h4>
              <p className="text-gray-700">
                Competent adults can refuse medical treatment, including life-sustaining treatment (Cruzan). Right to 
                bodily integrity is fundamental. But no recognized right to affirmative assistance in dying (Washington 
                v. Glucksberg).
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Levels of Scrutiny</h4>
              <div className="bg-blue-50 p-4 rounded">
                <p className="text-gray-700 mb-2">
                  <strong>Fundamental Right Affected:</strong> Strict Scrutiny
                </p>
                <p className="text-gray-700 text-sm ml-4 mb-3">
                  Government must show law is necessary to achieve compelling interest and narrowly tailored. Very 
                  difficult — most laws fail.
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>No Fundamental Right:</strong> Rational Basis Review
                </p>
                <p className="text-gray-700 text-sm ml-4">
                  Government only needs to show law is rationally related to legitimate interest. Very easy — most 
                  laws pass.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-red-600 to-red-800 text-white rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Key Takeaways</h3>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Due Process Clause protects certain fundamental rights not explicitly listed in Constitution</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Fundamental rights: marriage, family, parental rights, contraception, sexual intimacy, bodily autonomy</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Laws affecting fundamental rights face strict scrutiny (compelling interest, narrowly tailored)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Abortion rights eliminated in Dobbs v. Jackson (2022), overruling Roe v. Wade</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>New fundamental rights must be "deeply rooted in Nation's history and tradition" (high bar)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Controversial doctrine — debate over judicial identification of unenumerated rights continues</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
