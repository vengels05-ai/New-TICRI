import Link from 'next/link';

export default function RightToPetitionPage() {
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
            <span className="text-5xl">✍️</span>
            <div>
              <h1 className="text-4xl font-bold mb-2">Right to Petition the Government</h1>
              <h2 className="text-2xl font-semibold">First Amendment</h2>
            </div>
          </div>
          <p className="text-lg leading-relaxed">
            The Petition Clause protects the right to make complaints to the government, seek assistance, and request 
            government action. It ensures citizens can communicate grievances and requests to their representatives.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Overview</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The right to petition is the most overlooked part of the First Amendment, but it's fundamental to 
            self-government. It protects citizens' ability to communicate with government officials, file lawsuits, 
            submit complaints, and request government action without fear of punishment.
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
              "Congress shall make no law... abridging... the right of the people... to petition the Government for a 
              redress of grievances."
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
            You have the right to ask government for help, file complaints, request policy changes, and communicate 
            grievances to elected officials. Government cannot punish you for contacting your representatives, filing 
            lawsuits, or seeking government action.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            "Petition" in modern context includes: writing to Congress, contacting government officials, filing lawsuits, 
            submitting administrative complaints, testifying at hearings, requesting meetings with officials, organizing 
            petition drives, and lobbying for legislation.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
            <p className="text-gray-700">
              <strong>Historical Context:</strong> The Petition Clause has roots in Magna Carta and English common law. 
              In colonial America, the Crown sometimes punished people for petitioning, making this protection essential 
              to the Founders.
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
              <h4 className="font-bold text-gray-900 mb-2">✓ Filing Lawsuits</h4>
              <p className="text-gray-700">
                Right to access courts and file lawsuits against government or private parties. Cannot be punished for 
                bringing legal claims, even if ultimately unsuccessful (unless frivolous or in bad faith).
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Contacting Elected Officials</h4>
              <p className="text-gray-700">
                Writing, calling, emailing, or visiting your representatives to express views, request action, or file 
                complaints. Officials cannot punish constituents for contacting them (though they don't have to respond).
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Administrative Complaints & Hearings</h4>
              <p className="text-gray-700">
                Filing complaints with government agencies, participating in administrative proceedings, submitting 
                comments on proposed regulations, and testifying at government hearings.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Petition Drives & Signatures</h4>
              <p className="text-gray-700">
                Organizing petition drives, collecting signatures for ballot initiatives or to influence government, and 
                presenting petitions to government bodies. Online petitions are modern extension of this right.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Lobbying Government</h4>
              <p className="text-gray-700">
                Professional lobbying and advocacy directed at government officials is petitioning activity. Both 
                professional lobbyists and citizen advocates have petition rights (though lobbying can be regulated).
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Protection from Retaliation</h4>
              <p className="text-gray-700">
                Government cannot retaliate against you for exercising petition rights. Cannot be arrested, fined, or 
                harassed for filing complaints, lawsuits, or contacting officials (with limited exceptions).
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
              <h4 className="font-bold text-gray-900 mb-2">✗ Frivolous or Bad Faith Lawsuits</h4>
              <p className="text-gray-700">
                While you can file lawsuits, repeatedly filing frivolous claims or bringing suits in bad faith can result 
                in sanctions. Petition right doesn't shield abusive litigation or vexatious litigants.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Petitions Containing Threats or Crimes</h4>
              <p className="text-gray-700">
                Petition right doesn't protect threats, extortion, or criminal activity. Cannot threaten officials, 
                make criminal demands, or use petition as cover for illegal conduct.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Guaranteed Response or Action</h4>
              <p className="text-gray-700">
                Right to petition doesn't require government to respond, grant your request, or take action. Officials 
                can ignore petitions. The right is to ask, not to receive.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Harassment or Abuse</h4>
              <p className="text-gray-700">
                Cannot harass officials with excessive contacts, stalking, or abusive behavior disguised as petitioning. 
                Reasonable regulations on time, place, and manner of petitioning are allowed.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Perjury or False Statements</h4>
              <p className="text-gray-700">
                Petition right doesn't protect lying under oath or making knowingly false statements in legal proceedings. 
                Perjury laws apply even when petitioning government through courts.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Unlimited Access to Officials</h4>
              <p className="text-gray-700">
                Right to petition doesn't guarantee face-to-face meetings with officials or unlimited access. Reasonable 
                security measures and appointment systems are constitutional.
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
              <h4 className="font-bold text-gray-900 text-lg mb-2">BE&K Construction Co. v. NLRB (2002)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Lawsuits Are Petitioning</strong> — Filing lawsuits is form of petitioning protected by First 
                Amendment. Even unsuccessful lawsuits cannot be punished unless brought with retaliatory motive and 
                lacking reasonable basis.
              </p>
              <p className="text-gray-700 text-sm">
                Extended petition protection to include litigation. Company filed lawsuits against union; NLRB said it 
                was retaliatory. Court held lawsuits are petitioning and get First Amendment protection.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Bill Johnson's Restaurants v. NLRB (1983)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Right to Sue</strong> — Employer's lawsuit against employees, even if retaliatory, cannot be 
                enjoined unless frivolous. Petition Clause protects access to courts even when motives are mixed.
              </p>
              <p className="text-gray-700 text-sm">
                Balance between petition rights and preventing abusive litigation. Even if lawsuit has retaliatory element, 
                it's protected unless completely baseless.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">McDonald v. Smith (1985)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Petition Doesn't Override Defamation</strong> — False statements in petition to government can 
                still be defamatory. Petition Clause doesn't provide absolute immunity from defamation liability for 
                false statements.
              </p>
              <p className="text-gray-700 text-sm">
                Letter to President falsely accusing someone of criminal conduct. Court held petition right doesn't 
                create blanket immunity for defamation. Must still follow New York Times v. Sullivan standards.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">California Motor Transport Co. v. Trucking Unlimited (1972)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Sham Petitioning Exception</strong> — Petition right doesn't protect abuse of administrative or 
                legal processes. Systematic use of petitioning to harass competitors rather than genuine grievance-seeking 
                loses protection.
              </p>
              <p className="text-gray-700 text-sm">
                Trucking company filed repetitive administrative proceedings to delay competitors. "Sham" petitioning 
                that's merely harassment rather than genuine attempt to influence government isn't protected.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Eastern Railroad Presidents Conference v. Noerr (1961)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Noerr-Pennington Doctrine</strong> — Lobbying government is protected petitioning even when 
                intended to harm competitors. Antitrust laws don't apply to genuine efforts to influence government 
                policy.
              </p>
              <p className="text-gray-700 text-sm">
                Railroad companies lobbied against trucking industry. Even though purpose was anticompetitive, lobbying 
                government is protected petitioning activity. Created "Noerr-Pennington immunity" for lobbying.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">United Mine Workers v. Illinois State Bar (1967)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Collective Petitioning Protected</strong> — Union helping members bring workers' compensation 
                claims was protected petitioning. Groups can organize to help members access legal system without 
                violating unauthorized practice of law rules.
              </p>
              <p className="text-gray-700 text-sm">
                Petition Clause protects collective efforts to help people access courts and government processes. Can't 
                be punished for organizing to petition government together.
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
              <h4 className="font-bold text-gray-900 mb-3">Modern Forms of Petitioning</h4>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
                <li><strong>Emails to representatives:</strong> Modern petition method protected same as letters</li>
                <li><strong>Online petitions (Change.org, etc.):</strong> Digital signature gathering is petitioning</li>
                <li><strong>Social media campaigns:</strong> Organizing online to influence government policy</li>
                <li><strong>Public comments on regulations:</strong> Administrative law provides right to comment</li>
                <li><strong>Town halls and meetings:</strong> Attending and speaking at government meetings</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Anti-SLAPP Laws</h4>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <p className="text-gray-700">
                  <strong>Strategic Lawsuits Against Public Participation (SLAPP):</strong> Lawsuits designed to silence 
                  critics through expensive litigation. Many states have anti-SLAPP laws allowing early dismissal of 
                  suits targeting petition activity. These laws protect petition rights from abusive litigation.
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Lobbying Disclosure</h4>
              <p className="text-gray-700">
                Professional lobbyists can be required to register and disclose activities. Petition Clause doesn't 
                prohibit reasonable regulations on lobbying industry (disclosure, registration), as long as they don't 
                prevent petitioning itself.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Whistleblowers</h4>
              <p className="text-gray-700">
                Reporting government wrongdoing to authorities or media is petitioning activity. Federal and state 
                whistleblower laws provide additional protection for government employees who report misconduct.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Ballot Initiatives & Referendums</h4>
              <p className="text-gray-700">
                Petition signature-gathering for ballot measures is core First Amendment activity. States can regulate 
                the process (signature requirements, deadlines) but cannot unduly burden petition circulation.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Retaliation by Government Officials</h4>
              <p className="text-gray-700">
                Officials cannot retaliate against citizens for petitioning (firing government employee for testifying, 
                denying permits because someone complained, etc.). Section 1983 lawsuits can address retaliation for 
                petition activity.
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
              <span>Right to contact government officials, file complaints, and seek government action without retaliation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Filing lawsuits and accessing courts is protected petitioning activity</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Lobbying government and organizing petition drives are core First Amendment activities</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Modern petitioning includes emails, online petitions, and social media campaigns</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Right to petition doesn't require government response or guarantee success</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Frivolous lawsuits, threats, harassment, and perjury are not protected</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
