import Link from 'next/link';

export default function FreedomOfPressPage() {
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
            <span className="text-5xl">📰</span>
            <div>
              <h1 className="text-4xl font-bold mb-2">Freedom of the Press</h1>
              <h2 className="text-2xl font-semibold">First Amendment</h2>
            </div>
          </div>
          <p className="text-lg leading-relaxed">
            The First Amendment protects the press from government censorship, allowing journalists to investigate, 
            report, and publish information without prior restraint or government interference.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Overview</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Freedom of the press is essential to democracy, serving as a check on government power and ensuring that 
            citizens have access to information needed to participate in self-governance. The press acts as a "Fourth Estate," 
            holding government accountable and informing public debate.
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
              "Congress shall make no law... abridging the freedom of speech, or of the press..."
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
            The government cannot censor newspapers, magazines, television, online media, or any other form of press before 
            publication (prior restraint). Journalists can investigate and report on government activities, publish 
            information of public interest, and operate free from government control.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            <strong>Key principle:</strong> "The press" doesn't refer to a special class of people with unique rights. 
            Anyone can engage in journalism and invoke press freedom protections. The freedom protects the <em>activity</em> 
            of publishing and disseminating information, not just institutional media.
          </p>
        </div>

        {/* What IS Protected */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-green-600 pb-2">
            ✅ What IS Protected
          </h3>
          
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ No Prior Restraint</h4>
              <p className="text-gray-700">
                Government cannot prevent publication before it occurs. Courts can only stop publication in the most 
                extreme circumstances (national security threat that is immediate and direct). This is the strongest 
                protection for press freedom.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Investigative Journalism</h4>
              <p className="text-gray-700">
                Journalists can investigate government wrongdoing, corruption, and abuse of power. Publishing leaked 
                classified documents is generally protected (though the leaker may face prosecution).
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Anonymous Sources</h4>
              <p className="text-gray-700">
                Journalists have some protection for confidential sources, though it's not absolute. Many states have 
                "shield laws" that protect reporter-source relationships.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Criticism of Public Officials</h4>
              <p className="text-gray-700">
                Press can criticize government officials and public figures with strong protection against defamation suits. 
                Public officials must prove actual malice (knowing falsity or reckless disregard for truth).
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Access to Court Proceedings</h4>
              <p className="text-gray-700">
                The press and public have a First Amendment right of access to criminal trials and many court proceedings. 
                Courts can only close proceedings in rare circumstances.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Citizen Journalism</h4>
              <p className="text-gray-700">
                You don't need a press pass or journalism degree to invoke press freedom protections. Bloggers, independent 
                journalists, and citizens publishing news online have the same First Amendment rights as traditional media.
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
              <h4 className="font-bold text-gray-900 mb-2">✗ Defamation</h4>
              <p className="text-gray-700">
                Publishing false statements of fact that harm reputation can result in liability. The press has strong 
                defenses when reporting on public officials (actual malice standard), but less protection for private 
                individuals.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Invasion of Privacy</h4>
              <p className="text-gray-700">
                Publishing private facts about individuals, intrusion into private spaces, or misappropriation of likeness 
                can lead to civil liability. Newsworthiness is a strong defense, but limits exist.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ No Special Access Rights</h4>
              <p className="text-gray-700">
                The press has no greater right of access to government information, crime scenes, or disaster areas than 
                the general public. Government can deny access to areas closed to the public.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Journalist Privilege (Limited)</h4>
              <p className="text-gray-700">
                There is no absolute federal constitutional privilege protecting confidential sources. Journalists can be 
                compelled to testify or reveal sources, though many states provide statutory protections.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Illegal Gathering Methods</h4>
              <p className="text-gray-700">
                Journalists cannot break the law to gather information. Trespassing, wiretapping, hacking, or stealing 
                documents are not protected by the First Amendment, even if done for newsgathering purposes.
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
              <h4 className="font-bold text-gray-900 text-lg mb-2">New York Times Co. v. United States (1971)</h4>
              <p className="text-gray-700 mb-3">
                <strong>"The Pentagon Papers Case"</strong> — Rejected government attempt to prevent publication of 
                classified documents about Vietnam War. Established that prior restraint carries a "heavy presumption" 
                against constitutionality.
              </p>
              <p className="text-gray-700 text-sm">
                Government must meet an extremely high burden to justify prior restraint. Even classified information 
                can generally be published once leaked. The leaker may face prosecution, but the publisher is protected.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">New York Times Co. v. Sullivan (1964)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Actual Malice Standard</strong> — Public officials suing for defamation must prove the press 
                published with knowledge of falsity or reckless disregard for truth. Protects vigorous press criticism 
                of government.
              </p>
              <p className="text-gray-700 text-sm">
                Recognized that debate on public issues should be "uninhibited, robust, and wide-open" and may include 
                "vehement, caustic, and sometimes unpleasantly sharp attacks on government and public officials."
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Branzburg v. Hayes (1972)</h4>
              <p className="text-gray-700 mb-3">
                <strong>No Absolute Reporter's Privilege</strong> — Journalists can be required to testify before grand 
                juries about confidential sources. No constitutional privilege protects reporter-source relationships.
              </p>
              <p className="text-gray-700 text-sm">
                Controversial decision that rejected absolute privilege, but many states have since enacted shield laws 
                providing statutory protection for journalists.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Bartnicki v. Vopper (2001)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Publishing Illegally Obtained Information</strong> — Press can publish information of public concern 
                even if the information was illegally obtained by a third party, as long as the publisher didn't participate 
                in the illegal acquisition.
              </p>
              <p className="text-gray-700 text-sm">
                Protected publication of illegally intercepted phone call involving public officials discussing public 
                business. First Amendment interest in public debate outweighs privacy interests.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Hustler Magazine v. Falwell (1988)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Parody Protection</strong> — Public figures cannot recover for intentional infliction of emotional 
                distress based on parody or satire. Protected outrageous parody of public figure.
              </p>
              <p className="text-gray-700 text-sm">
                Rejected lawsuit over offensive parody suggesting minister had sex with his mother. Press freedom includes 
                right to publish offensive material that is clearly not factual.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Richmond Newspapers, Inc. v. Virginia (1980)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Right of Access</strong> — Press and public have First Amendment right of access to criminal trials. 
                Courts can only close proceedings to protect higher interests like fair trial.
              </p>
              <p className="text-gray-700 text-sm">
                Recognized that open trials are essential to maintaining public confidence in the justice system and serve 
                as a check on judicial power.
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
              <h4 className="font-bold text-gray-900 mb-3">Leaked Classified Documents</h4>
              <p className="text-gray-700">
                Publishers generally cannot be prosecuted for publishing leaked classified information (Pentagon Papers). 
                However, the person who leaked the documents can face prosecution under espionage laws or other statutes.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Bloggers & Online Media</h4>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <p className="text-gray-700">
                  <strong>Important:</strong> You don't need to work for a newspaper or TV station to have press freedom. 
                  Bloggers, YouTubers, podcasters, and anyone publishing news online have the same First Amendment rights 
                  as traditional media.
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Recording Police</h4>
              <p className="text-gray-700">
                Most courts recognize a First Amendment right to record police officers performing duties in public. 
                This is an important tool for accountability and documenting potential misconduct.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">FOI/Sunshine Laws</h4>
              <p className="text-gray-700">
                While the First Amendment doesn't guarantee access to government records, federal Freedom of Information 
                Act (FOIA) and state sunshine laws provide statutory rights to access government documents. These are 
                essential tools for investigative journalism.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">National Security Claims</h4>
              <p className="text-gray-700">
                Government frequently invokes national security to justify restricting press freedom. Courts apply strict 
                scrutiny and require specific, concrete harms — not general claims about classified information.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Digital Age Challenges</h4>
              <p className="text-gray-700">
                Press freedom principles apply to digital media, but new challenges arise: government surveillance of 
                journalists, seizure of electronic records, encryption, protection of sources in the digital age, and 
                online harassment of journalists.
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
              <span>Government cannot prevent publication before it occurs (no prior restraint)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Anyone can be "the press" — you don't need credentials or institutional backing</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Press has strong protection when reporting on public officials and matters of public concern</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Publishing leaked information is generally protected, even if classified</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Press freedom doesn't grant special access rights or absolute privilege for sources</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Defamation, privacy invasion, and illegal newsgathering methods are not protected</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
