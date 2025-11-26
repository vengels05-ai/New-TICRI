import Link from 'next/link';

export default function FreedomOfSpeechPage() {
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
            <span className="text-5xl">🗣️</span>
            <div>
              <h1 className="text-4xl font-bold mb-2">Freedom of Speech</h1>
              <h2 className="text-2xl font-semibold">First Amendment</h2>
            </div>
          </div>
          <p className="text-lg leading-relaxed">
            The First Amendment protects your right to express opinions, criticize government, engage in political speech, 
            and communicate ideas without government censorship or punishment.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Overview</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Freedom of speech is one of the most fundamental rights in American democracy. It protects individuals from 
            government censorship and allows for robust public debate, political dissent, and the free exchange of ideas. 
            However, this right is not absolute and has important limitations.
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
              "Congress shall make no law... abridging the freedom of speech..."
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
            The government cannot punish you, censor you, or restrict your ability to express your thoughts, opinions, 
            and ideas. This includes political speech, criticism of government, unpopular opinions, symbolic expression, 
            and most forms of communication.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            <strong>Key principle:</strong> The government must remain "viewpoint neutral" — it cannot favor or suppress 
            speech based on the message being expressed. Even offensive, controversial, or unpopular speech is generally 
            protected.
          </p>
        </div>

        {/* What IS Protected */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-green-600 pb-2">
            ✅ What IS Protected
          </h3>
          
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Political Speech</h4>
              <p className="text-gray-700">
                Criticism of government, political candidates, and public officials receives the highest protection. 
                You can advocate for policy changes, protest government actions, and express political opinions without 
                fear of punishment.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Offensive or Hateful Speech</h4>
              <p className="text-gray-700">
                Even offensive, hateful, or deeply unpopular speech is generally protected. The government cannot ban 
                speech simply because it's offensive or hurts people's feelings (with narrow exceptions for true threats 
                and incitement).
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Symbolic Speech</h4>
              <p className="text-gray-700">
                Actions that communicate a message are protected, including flag burning, wearing armbands, displaying 
                signs, and peaceful protests. Expression doesn't have to be verbal to be protected.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Anonymous Speech</h4>
              <p className="text-gray-700">
                You have the right to speak anonymously. The government cannot force you to reveal your identity when 
                expressing political views (with limited exceptions).
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Commercial Speech (Limited)</h4>
              <p className="text-gray-700">
                Advertising and commercial speech receive some protection but can be regulated more heavily than political 
                speech. False or misleading commercial speech is not protected.
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
              <h4 className="font-bold text-gray-900 mb-2">✗ True Threats</h4>
              <p className="text-gray-700">
                Serious expressions of intent to commit violence against a person or group are not protected. The threat 
                must be genuine and objectively threatening.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Incitement to Imminent Lawless Action</h4>
              <p className="text-gray-700">
                Speech that is directed to inciting or producing <em>imminent</em> lawless action and is likely to produce 
                such action can be restricted. General advocacy of violence is protected; specific incitement is not.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Defamation</h4>
              <p className="text-gray-700">
                False statements of fact that harm someone's reputation can lead to civil liability. Public figures must 
                prove "actual malice" (knowing falsity or reckless disregard for truth). Private individuals have a lower 
                burden.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Obscenity</h4>
              <p className="text-gray-700">
                Material that appeals to prurient interest, depicts sexual conduct in a patently offensive way, and lacks 
                serious literary, artistic, political, or scientific value is not protected (Miller test). Child pornography 
                is categorically unprotected.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Fighting Words</h4>
              <p className="text-gray-700">
                Words that by their very utterance inflict injury or tend to incite an immediate breach of peace are not 
                protected. This is a very narrow category rarely applied in modern cases.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Fraud</h4>
              <p className="text-gray-700">
                False statements made to deceive for financial or personal gain are not protected. This includes false 
                advertising, securities fraud, and perjury.
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
              <h4 className="font-bold text-gray-900 text-lg mb-2">Brandenburg v. Ohio (1969)</h4>
              <p className="text-gray-700 mb-3">
                <strong>The Standard:</strong> Established the "imminent lawless action" test. Government can only restrict 
                speech that is directed to inciting or producing imminent lawless action AND is likely to produce such action.
              </p>
              <p className="text-gray-700 text-sm">
                Overturned the conviction of a KKK leader who advocated violence in abstract terms. General advocacy of 
                violence or lawbreaking is protected; only speech that incites immediate illegal action can be punished.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">New York Times Co. v. Sullivan (1964)</h4>
              <p className="text-gray-700 mb-3">
                <strong>The Standard:</strong> Public officials must prove "actual malice" (knowledge of falsity or reckless 
                disregard for truth) to win defamation suits. Protects robust debate about public issues.
              </p>
              <p className="text-gray-700 text-sm">
                Revolutionized defamation law to protect criticism of public officials. Recognizes that some false statements 
                are inevitable in free debate and must be protected to ensure breathing room for truthful speech.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Texas v. Johnson (1989)</h4>
              <p className="text-gray-700 mb-3">
                <strong>The Standard:</strong> Symbolic speech is protected. Government cannot ban expression based on 
                disagreement with the message being conveyed.
              </p>
              <p className="text-gray-700 text-sm">
                Struck down law banning flag burning. Even offensive symbolic speech expressing contempt for American symbols 
                is protected by the First Amendment.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Snyder v. Phelps (2011)</h4>
              <p className="text-gray-700 mb-3">
                <strong>The Standard:</strong> Speech on matters of public concern receives special protection, even when 
                it's deeply offensive and hurtful to private individuals.
              </p>
              <p className="text-gray-700 text-sm">
                Protected Westboro Baptist Church's right to protest at military funerals with offensive signs. Speech 
                addressing public issues cannot be restricted simply because it's hurtful or outrageous.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Citizens United v. FEC (2010)</h4>
              <p className="text-gray-700 mb-3">
                <strong>The Standard:</strong> Political speech cannot be restricted based on the speaker's corporate identity. 
                Government cannot suppress political speech based on who is speaking.
              </p>
              <p className="text-gray-700 text-sm">
                Struck down restrictions on corporate and union independent political expenditures. Controversial decision 
                extending First Amendment protections to corporate political speech.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Matal v. Tam (2017)</h4>
              <p className="text-gray-700 mb-3">
                <strong>The Standard:</strong> Government cannot refuse to register trademarks based on viewpoint discrimination. 
                Even offensive speech is protected.
              </p>
              <p className="text-gray-700 text-sm">
                Struck down law barring registration of "disparaging" trademarks. Government must remain viewpoint neutral 
                and cannot suppress speech because it finds it offensive.
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
              <h4 className="font-bold text-gray-900 mb-3">Social Media & Private Platforms</h4>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <p className="text-gray-700">
                  <strong>Important:</strong> The First Amendment only restricts <em>government</em> censorship. Private 
                  companies (Facebook, Twitter, YouTube, etc.) can moderate content, ban users, and enforce their own rules. 
                  You do NOT have a First Amendment right to use private platforms.
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Public Schools</h4>
              <p className="text-gray-700">
                Students have First Amendment rights, but they can be limited to prevent substantial disruption of school 
                activities (<em>Tinker v. Des Moines</em>). Schools can regulate speech that is lewd, promotes illegal drug 
                use, or occurs in school-sponsored activities.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Government Employees</h4>
              <p className="text-gray-700">
                Public employees can be disciplined for speech made as part of their official duties or speech that disrupts 
                workplace efficiency. Speech on matters of public concern as a private citizen receives more protection.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Protests & Public Forums</h4>
              <p className="text-gray-700">
                You have strong First Amendment rights to protest in traditional public forums (streets, sidewalks, parks). 
                Government can impose reasonable time, place, and manner restrictions that are content-neutral, but cannot 
                ban speech based on viewpoint.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Hate Speech</h4>
              <p className="text-gray-700">
                The United States does not have "hate speech" laws. Speech expressing hatred of groups based on race, religion, 
                gender, etc. is generally protected unless it crosses into true threats, incitement, or fighting words. This 
                is a major difference between U.S. law and many other countries.
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
              <span>Freedom of speech protects you from <strong>government</strong> censorship, not private censorship</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Political speech and criticism of government receive the highest protection</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Offensive and unpopular speech is generally protected</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>True threats, incitement to imminent lawless action, defamation, obscenity, and fraud are NOT protected</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>The government must remain viewpoint neutral and cannot favor or suppress speech based on its message</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
