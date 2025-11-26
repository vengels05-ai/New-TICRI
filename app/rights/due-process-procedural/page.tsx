import Link from 'next/link';

export default function DueProcessProceduralPage() {
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
              <h1 className="text-4xl font-bold mb-2">Due Process (Procedural)</h1>
              <h2 className="text-2xl font-semibold">Fifth & Fourteenth Amendments</h2>
            </div>
          </div>
          <p className="text-lg leading-relaxed">
            Procedural due process ensures that government follows fair procedures before depriving you of life, liberty, 
            or property. It's the "how" of government action — requiring notice and a hearing before taking away important 
            interests.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Overview</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Procedural due process is about fairness in government procedures. Before government can take away your life, 
            liberty, or property, it must give you notice and an opportunity to be heard. The specific procedures required 
            depend on how important the interest is and how much process would help.
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
        </div>

        {/* Plain English */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-red-600 pb-2">
            💭 Plain English Explanation
          </h3>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            Before government takes away something important from you (your freedom, property, benefits, job, etc.), it 
            must follow fair procedures. At minimum, this means:
          </p>
          
          <ul className="space-y-2 text-gray-700 ml-4 mb-4">
            <li>• <strong>Notice:</strong> You must be told what government plans to do and why</li>
            <li>• <strong>Opportunity to be heard:</strong> Chance to present your side before neutral decision-maker</li>
            <li>• <strong>Fair tribunal:</strong> Impartial judge or decision-maker</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            The more important the interest at stake, the more process you're entitled to. Criminal trial = extensive 
            procedures (jury, lawyer, etc.). Parking ticket = minimal procedures.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
            <p className="text-gray-700">
              <strong>Two Types of Due Process:</strong>
            </p>
            <ul className="mt-2 space-y-1 text-gray-700 ml-4">
              <li>• <strong>Procedural:</strong> Fair procedures (this page)</li>
              <li>• <strong>Substantive:</strong> Limits on what government can do regardless of procedures (separate page)</li>
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
              <h4 className="font-bold text-gray-900 mb-2">✓ Property Interests</h4>
              <p className="text-gray-700">
                Government benefits you have a legitimate claim to: welfare benefits, public employment, professional 
                licenses, government contracts. Not all property — must be "entitlement" with legitimate claim of 
                entitlement, not just abstract need or desire.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Liberty Interests</h4>
              <p className="text-gray-700">
                Freedom from physical restraint (arrest, imprisonment, commitment to mental institution), damage to 
                reputation combined with loss of employment opportunity, and fundamental rights. Liberty is broadly 
                construed.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Life Interests</h4>
              <p className="text-gray-700">
                Death penalty requires extensive due process protections. Government cannot take your life without the 
                most rigorous procedural safeguards (full criminal trial, appeals, heightened scrutiny).
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Public School Discipline</h4>
              <p className="text-gray-700">
                Students have property/liberty interest in education. Before suspension or expulsion, student entitled 
                to notice and hearing (though informal hearing may suffice for short suspensions).
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Government Employment</h4>
              <p className="text-gray-700">
                Tenured public employees have property interest in continued employment. Before firing, entitled to 
                notice of reasons and opportunity to respond. "At-will" employees have less protection.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Parental Rights</h4>
              <p className="text-gray-700">
                Parents have fundamental liberty interest in custody and care of children. Before state terminates 
                parental rights, must provide full procedural protections including hearing, representation, and proof 
                by clear and convincing evidence.
              </p>
            </div>
          </div>
        </div>

        {/* What is NOT Protected */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-red-600 pb-2">
            ❌ What is NOT Protected (Or Limited Protection)
          </h3>
          
          <div className="space-y-4">
            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Government Benefits Without Entitlement</h4>
              <p className="text-gray-700">
                No due process right to receive government benefits in first place. Must show legitimate claim of 
                entitlement to existing benefit. Initial application for benefits gets less process than termination 
                of existing benefits.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Damage to Reputation Alone</h4>
              <p className="text-gray-700">
                Injury to reputation by itself doesn't trigger due process protection. Must be combined with deprivation 
                of more tangible interest (like loss of job). "Stigma-plus" test requires reputation harm plus denial 
                of right or status.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Emergency Situations</h4>
              <p className="text-gray-700">
                In genuine emergencies, government can act first and provide hearing later. Public health emergencies, 
                contaminated food seizures, or immediate safety threats may justify post-deprivation process.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Random or Unauthorized Government Acts</h4>
              <p className="text-gray-700">
                When deprivation is result of random, unauthorized act by government employee (not established procedure), 
                post-deprivation remedy (like lawsuit) may be sufficient process. Due process doesn't require pre-deprivation 
                hearing for every negligent act.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Right to Specific Procedures</h4>
              <p className="text-gray-700">
                No absolute right to particular type of hearing (oral vs. written, lawyer, cross-examination). Court 
                balances interests using Mathews v. Eldridge test to determine what process is due.
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
              <h4 className="font-bold text-gray-900 text-lg mb-2">Mathews v. Eldridge (1976)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Balancing Test for Procedures</strong> — Established three-factor test to determine what process 
                is due: (1) private interest affected, (2) risk of erroneous deprivation and value of additional procedures, 
                (3) government's interest including administrative burden.
              </p>
              <p className="text-gray-700 text-sm">
                Disability benefits case. Court balanced interests and found written hearing sufficient — didn't need 
                oral hearing before termination. This balancing test is used in most procedural due process cases.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Goldberg v. Kelly (1970)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Welfare Benefits Require Pre-Termination Hearing</strong> — Before terminating welfare benefits, 
                government must provide evidentiary hearing. Welfare benefits are "property" requiring due process 
                protection.
              </p>
              <p className="text-gray-700 text-sm">
                Landmark case recognizing welfare benefits as property interest. Welfare recipients brutally need 
                assistance; cannot terminate without hearing first. Established "new property" concept for government 
                benefits.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Goss v. Lopez (1975)</h4>
              <p className="text-gray-700 mb-3">
                <strong>School Suspension Requires Notice and Hearing</strong> — Students have property/liberty interest 
                in public education. Before suspension, school must provide notice of charges and opportunity to explain. 
                Even short suspensions trigger due process.
              </p>
              <p className="text-gray-700 text-sm">
                Students suspended for 10 days. Court held this required minimal due process (informal hearing, notice, 
                chance to respond). More serious discipline requires more elaborate procedures.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Board of Regents v. Roth (1972)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Defined "Property" and "Liberty"</strong> — Property interests created by state law, not 
                Constitution. Must have legitimate claim of entitlement, not just abstract need. Liberty includes 
                freedom from restraint and protection of good name.
              </p>
              <p className="text-gray-700 text-sm">
                Non-tenured professor not rehired. No property interest because no tenure — just one-year contract. 
                Defined framework for identifying what interests trigger due process protection.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Cleveland Board of Education v. Loudermill (1985)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Public Employee Firing Requires Pre-Termination Hearing</strong> — Tenured public employees 
                entitled to notice and opportunity to respond before termination. Can't balance away constitutional 
                protection by providing only post-termination hearing.
              </p>
              <p className="text-gray-700 text-sm">
                State law gave property interest (tenure), which triggers due process. Must provide some pre-termination 
                process (even if brief), not just elaborate post-termination hearing.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Hamdi v. Rumsfeld (2004)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Enemy Combatant Detention Requires Due Process</strong> — U.S. citizen detained as enemy combatant 
                entitled to meaningful opportunity to contest detention. Even in war context, must provide notice, chance 
                to be heard, and neutral decision-maker.
              </p>
              <p className="text-gray-700 text-sm">
                War on terror case. Executive detention power not unlimited — citizen detainees have due process rights. 
                Must be able to challenge factual basis for enemy combatant designation.
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
              <h4 className="font-bold text-gray-900 mb-3">The Mathews Balancing Test (Most Common Framework)</h4>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <p className="text-gray-700 mb-2">Courts balance three factors:</p>
                <ol className="list-decimal list-inside text-gray-700 space-y-2">
                  <li><strong>Private interest:</strong> How important is the interest to the individual? (Job? Benefits? 
                  Freedom?)</li>
                  <li><strong>Risk of error:</strong> How likely is wrong decision without more procedures? Will additional 
                  procedures help?</li>
                  <li><strong>Government interest:</strong> What's the cost/burden of additional procedures?</li>
                </ol>
                <p className="text-gray-700 mt-2">More important private interest + high error risk + low government 
                burden = more process required</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Government Employment</h4>
              <p className="text-gray-700">
                <strong>Tenured employees:</strong> Property interest in job, entitled to pre-termination notice and 
                hearing. <strong>Probationary/at-will employees:</strong> Generally no property interest, less process 
                required. <strong>Contractors:</strong> Depends on contract terms and whether creates "entitlement."
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Government Benefits (Welfare, Social Security, etc.)</h4>
              <p className="text-gray-700">
                Once receiving benefits, have property interest. Before termination, entitled to notice and opportunity 
                to contest. Level of hearing varies — may be written submission rather than oral hearing depending on 
                Mathews factors.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Driver's License Suspension</h4>
              <p className="text-gray-700">
                License is property interest. Before suspension for cause (DUI, etc.), entitled to hearing. Emergency 
                suspensions (immediate safety threat) may occur first with prompt post-suspension hearing. Administrative 
                hearing generally sufficient — don't need full trial.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Immigration Context</h4>
              <p className="text-gray-700">
                Non-citizens have some due process rights, but limited compared to citizens. Generally entitled to removal 
                hearing before immigration judge. But scope of review and procedures vary based on entry status and claims 
                raised.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">What Due Process Typically Includes</h4>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                <li>Notice of proposed action and reasons</li>
                <li>Opportunity to present your side (written or oral)</li>
                <li>Neutral, impartial decision-maker</li>
                <li>Right to see evidence against you (usually)</li>
                <li>Right to present evidence and witnesses</li>
                <li>Written decision with findings (in many contexts)</li>
                <li>Right to counsel (criminal cases and some civil contexts)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-red-600 to-red-800 text-white rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Key Takeaways</h3>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Before taking your life, liberty, or property, government must provide fair procedures</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>At minimum: notice of what government plans to do and opportunity to be heard</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Mathews balancing test determines what specific procedures are required</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>"Property" includes government benefits you have legitimate entitlement to (welfare, public job, licenses)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>"Liberty" includes freedom from restraint, parental rights, and fundamental freedoms</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>More important the interest, more procedures required — death penalty gets most protection</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
