import Link from 'next/link';

export default function EqualProtectionPage() {
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
            <span className="text-5xl">⚖️</span>
            <div>
              <h1 className="text-4xl font-bold mb-2">Equal Protection</h1>
              <h2 className="text-2xl font-semibold">Fourteenth Amendment</h2>
            </div>
          </div>
          <p className="text-lg leading-relaxed">
            The Equal Protection Clause requires government to treat similarly situated people equally. It prohibits 
            discrimination based on race, sex, and other characteristics, and ensures that laws apply fairly to all.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Overview</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Equal Protection is the primary constitutional tool for challenging discrimination. Originally enacted after 
            Civil War to protect freed slaves, it now applies broadly to prevent government discrimination. The level of 
            judicial scrutiny depends on the classification used: race gets strictest review, most other classifications 
            get minimal review.
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
              "No State shall... deny to any person within its jurisdiction the equal protection of the laws."
            </p>
            <p className="text-sm text-gray-600 mt-2">— Fourteenth Amendment, Section 1, U.S. Constitution (1868)</p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
            <p className="text-gray-700">
              <strong>Note:</strong> Equal Protection Clause only applies to states. Federal government is bound by equal 
              protection principles through Fifth Amendment Due Process Clause (reverse incorporation from Bolling v. Sharpe).
            </p>
          </div>
        </div>

        {/* Plain English */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-red-600 pb-2">
            💭 Plain English Explanation
          </h3>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            Government must treat people equally under the law. When government classifies or distinguishes between people, 
            courts examine whether the distinction is justified. Some classifications (race, national origin) are almost 
            never allowed. Others (age, wealth) are allowed if government has any reasonable justification.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Three levels of scrutiny:</strong>
          </p>

          <div className="space-y-3">
            <div className="bg-red-100 p-3 rounded">
              <p className="text-gray-900 font-semibold">Strict Scrutiny (Hardest to Satisfy)</p>
              <p className="text-gray-700 text-sm">
                Race, national origin, alienage (sometimes). Government must show compelling interest and narrowly 
                tailored means. Almost always fails.
              </p>
            </div>

            <div className="bg-yellow-100 p-3 rounded">
              <p className="text-gray-900 font-semibold">Intermediate Scrutiny (Middle Level)</p>
              <p className="text-gray-700 text-sm">
                Sex, illegitimacy. Government must show important interest and substantially related means. Moderately 
                difficult to satisfy.
              </p>
            </div>

            <div className="bg-green-100 p-3 rounded">
              <p className="text-gray-900 font-semibold">Rational Basis (Easiest to Satisfy)</p>
              <p className="text-gray-700 text-sm">
                Everything else (age, disability, wealth, sexual orientation). Government only needs legitimate interest 
                and rational relationship. Almost always passes.
              </p>
            </div>
          </div>
        </div>

        {/* What IS Protected */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-green-600 pb-2">
            ✅ What IS Protected (Gets Strict or Heightened Scrutiny)
          </h3>
          
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Race & National Origin (Strict Scrutiny)</h4>
              <p className="text-gray-700">
                Any classification based on race or national origin is presumed unconstitutional. Government must show 
                compelling interest and narrow tailoring. Applies to discrimination against any race (including whites). 
                Affirmative action faces strict scrutiny.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Sex/Gender (Intermediate Scrutiny)</h4>
              <p className="text-gray-700">
                Discrimination based on sex requires "exceedingly persuasive justification." Government must show important 
                objective and substantial relationship between classification and objective. Both intentional discrimination 
                and gender stereotypes are prohibited.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Illegitimacy (Intermediate Scrutiny)</h4>
              <p className="text-gray-700">
                Classifications based on whether parents were married (legitimacy) get intermediate scrutiny. Cannot 
                punish children for parents' conduct. Most illegitimacy classifications struck down.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Fundamental Rights (Strict Scrutiny)</h4>
              <p className="text-gray-700">
                When law discriminates regarding fundamental right (voting, travel, court access), strict scrutiny applies 
                even if classification isn't suspect. Can't deny fundamental rights to disfavored groups without compelling 
                justification.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Alienage - Complex</h4>
              <p className="text-gray-700">
                State discrimination against legal aliens generally gets strict scrutiny. Federal alienage classifications 
                get rational basis (immigration is federal power). Exception: state can require citizenship for "political 
                function" jobs (police, teachers, judges).
              </p>
            </div>
          </div>
        </div>

        {/* What is NOT Protected */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-red-600 pb-2">
            ❌ What is NOT Protected (Gets Only Rational Basis)
          </h3>
          
          <div className="space-y-4">
            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Age</h4>
              <p className="text-gray-700">
                Age discrimination by government gets only rational basis review. Mandatory retirement ages, senior 
                discounts, age-based benefits all constitutional if rationally related to legitimate purpose. Age 
                Discrimination in Employment Act protects private employment, not constitutional protection.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Disability</h4>
              <p className="text-gray-700">
                Rational basis review for disability classifications. Government can distinguish based on disability if 
                rationally related to legitimate interest. Americans with Disabilities Act provides statutory protection 
                beyond Constitution.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Wealth</h4>
              <p className="text-gray-700">
                Wealth is not suspect classification. Government can treat rich and poor differently (tax rates, fees, 
                benefits) with rational basis. Exception: cannot deny fundamental rights (court access, voting) based 
                on inability to pay.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Sexual Orientation</h4>
              <p className="text-gray-700">
                Supreme Court has not declared sexual orientation a suspect classification. Gets rational basis review, 
                though with some "teeth" (laws based solely on animus fail). Obergefell recognized marriage right but 
                didn't establish heightened scrutiny for sexual orientation.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Most Economic & Social Regulations</h4>
              <p className="text-gray-700">
                Ordinary economic regulations get rational basis. Government can classify businesses, set different tax 
                rates, regulate industries differently. As long as there's conceivable rational basis, court upholds law.
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
              <h4 className="font-bold text-gray-900 text-lg mb-2">Brown v. Board of Education (1954)</h4>
              <p className="text-gray-700 mb-3">
                <strong>"Separate But Equal" Unconstitutional</strong> — Racial segregation in public schools violates 
                Equal Protection even if facilities are equal. Segregation inherently generates feeling of inferiority. 
                Overruled Plessy v. Ferguson (1896).
              </p>
              <p className="text-gray-700 text-sm">
                Most important Equal Protection case. Ended legal segregation and launched Civil Rights Movement. 
                Recognized that separate is inherently unequal. Applied to all government segregation, not just schools.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Loving v. Virginia (1967)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Interracial Marriage Ban Unconstitutional</strong> — Virginia's ban on interracial marriage 
                violated Equal Protection. Racial classifications must be necessary to achieve compelling interest. 
                No such interest here — based solely on racial prejudice.
              </p>
              <p className="text-gray-700 text-sm">
                Established strict scrutiny for racial classifications. "White supremacy" is not legitimate government 
                purpose. Ended bans on interracial marriage in 16 states.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Students for Fair Admissions v. Harvard & UNC (2023)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Affirmative Action in College Admissions Unconstitutional</strong> — Race-conscious admissions 
                programs violate Equal Protection. Universities cannot consider race as factor in admissions. Overruled 
                Grutter v. Bollinger's approval of narrow race considerations.
              </p>
              <p className="text-gray-700 text-sm">
                Major shift ending affirmative action in higher education. Court held race-conscious admissions lack 
                sufficient connection to educational benefits and stereotyped students. Schools can still consider 
                applicant's discussion of how race affected their life.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">United States v. Virginia (1996)</h4>
              <p className="text-gray-700 mb-3">
                <strong>VMI Gender Exclusion Unconstitutional</strong> — Virginia Military Institute's male-only admissions 
                policy violated Equal Protection. Sex classifications require "exceedingly persuasive justification." 
                Generalizations about "typical" men and women insufficient.
              </p>
              <p className="text-gray-700 text-sm">
                Strengthened intermediate scrutiny for sex discrimination. Cannot exclude women from educational opportunities 
                based on stereotypes about capabilities or preferences. Rejected "separate but equal" alternative women's 
                program.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Craig v. Boren (1976)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Intermediate Scrutiny for Sex</strong> — Established intermediate scrutiny for sex classifications. 
                Oklahoma law allowing 3.2% beer sales to women at 18 but men at 21 violated Equal Protection. Sex 
                classification must serve important objective and be substantially related.
              </p>
              <p className="text-gray-700 text-sm">
                Created "intermediate scrutiny" tier. First case applying heightened review to discrimination against men. 
                Statistical generalizations about drunk driving insufficient to justify gender line.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Korematsu v. United States (1944)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Japanese Internment Upheld (Now Discredited)</strong> — Upheld WWII exclusion and internment of 
                Japanese Americans. Applied strict scrutiny but found military necessity sufficient. Universally condemned; 
                Court has said Korematsu was wrongly decided.
              </p>
              <p className="text-gray-700 text-sm">
                Dark stain on Court's history. First case to articulate strict scrutiny for racial classifications, but 
                then upheld blatant racial discrimination. Explicitly overruled in Trump v. Hawaii (2018) though that was 
                largely symbolic.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Romer v. Evans (1996)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Anti-Gay Amendment Unconstitutional</strong> — Colorado amendment prohibiting laws protecting gays 
                and lesbians violated Equal Protection. Law based on animus toward group fails even rational basis review. 
                Cannot make class of persons "unequal to everyone else."
              </p>
              <p className="text-gray-700 text-sm">
                Applied rational basis with "bite." Law motivated solely by animus fails Equal Protection. Important 
                LGBT rights case, though didn't establish heightened scrutiny for sexual orientation.
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
              <h4 className="font-bold text-gray-900 mb-3">Affirmative Action After SFFA (2023)</h4>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <p className="text-gray-700 mb-2">
                  <strong>Major Change:</strong> Colleges can no longer consider race in admissions decisions. Race-conscious 
                  affirmative action programs are unconstitutional under Equal Protection Clause.
                </p>
                <p className="text-gray-700">
                  Schools can consider applicant's discussion of how race affected their life as part of individualized 
                  review, but cannot use race as a plus factor or seek racial diversity directly.
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Intentional Discrimination vs. Disparate Impact</h4>
              <p className="text-gray-700 mb-2">
                <strong>Intentional Discrimination:</strong> Violates Equal Protection. Must show discriminatory purpose, 
                not just discriminatory effect. Facially neutral law with discriminatory intent is unconstitutional.
              </p>
              <p className="text-gray-700">
                <strong>Disparate Impact:</strong> Law that affects groups differently but lacks discriminatory purpose 
                generally doesn't violate Equal Protection (though may violate statutes like Title VII). Constitution 
                requires discriminatory intent.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Sex Discrimination</h4>
              <p className="text-gray-700">
                Intermediate scrutiny requires "exceedingly persuasive justification." Examples:
              </p>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1 mt-2">
                <li>Cannot exclude women from military academies (VMI)</li>
                <li>Cannot give husbands automatic preference as estate administrators</li>
                <li>Cannot set different drinking ages for men and women</li>
                <li>Cannot provide benefits to widows but not widowers without justification</li>
                <li>Can have separate restrooms and some sports teams (privacy and competitive fairness)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Voting Rights</h4>
              <p className="text-gray-700">
                Voting is fundamental right. Laws that restrict voting face strict scrutiny. Cannot use poll taxes, literacy 
                tests, or racial gerrymandering. But voter ID laws generally upheld (unless shown to have discriminatory 
                purpose). Partisan gerrymandering is political question outside court review.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">School Funding Inequality</h4>
              <p className="text-gray-700">
                Wealth is not suspect class and education is not fundamental right under federal Constitution (San Antonio 
                v. Rodriguez). States can fund schools differently in rich and poor districts without violating Equal 
                Protection. Many state constitutions provide greater protection.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">LGBT Rights</h4>
              <p className="text-gray-700">
                Sexual orientation gets rational basis review (not heightened scrutiny). But animus-based laws fail. 
                Obergefell recognized marriage right under Due Process and Equal Protection, but didn't establish sexual 
                orientation as suspect classification. Laws must have legitimate justification beyond mere disapproval.
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
              <span>Equal Protection requires government to treat similarly situated people equally</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Three tiers: Strict scrutiny (race, national origin), Intermediate (sex, illegitimacy), Rational basis (everything else)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Racial classifications almost never pass strict scrutiny — includes affirmative action (as of 2023)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Sex discrimination requires "exceedingly persuasive justification" (intermediate scrutiny)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Age, disability, wealth, sexual orientation get only rational basis review</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Must show discriminatory intent/purpose, not just discriminatory impact</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
