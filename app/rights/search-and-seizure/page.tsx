import Link from 'next/link';

export default function SearchAndSeizurePage() {
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
            <span className="text-5xl">🔍</span>
            <div>
              <h1 className="text-4xl font-bold mb-2">Search and Seizure Protections</h1>
              <h2 className="text-2xl font-semibold">Fourth Amendment</h2>
            </div>
          </div>
          <p className="text-lg leading-relaxed">
            The Fourth Amendment protects against unreasonable searches and seizures by government. It requires warrants 
            based on probable cause and protects your privacy in your home, belongings, and personal information.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Overview</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Fourth Amendment is the primary constitutional protection for privacy. It limits government's power to 
            search your property, seize your belongings, or arrest you. The general rule is that government needs a 
            warrant based on probable cause, though many exceptions exist.
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
              "The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable 
              searches and seizures, shall not be violated, and no Warrants shall issue, but upon probable cause, 
              supported by Oath or affirmation, and particularly describing the place to be searched, and the persons 
              or things to be seized."
            </p>
            <p className="text-sm text-gray-600 mt-2">— Fourth Amendment, U.S. Constitution (1791)</p>
          </div>
        </div>

        {/* Plain English */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-red-600 pb-2">
            💭 Plain English Explanation
          </h3>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            Police generally need a warrant to search your home, car, or belongings. To get a warrant, they must convince 
            a judge there's probable cause (good reason to believe) that evidence of a crime will be found. The warrant 
            must specifically describe what they're searching for and where they'll look.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Key components:</strong>
          </p>
          <ul className="space-y-2 text-gray-700 ml-4">
            <li>• <strong>Reasonableness:</strong> Government searches and seizures must be reasonable</li>
            <li>• <strong>Warrant Requirement:</strong> Generally need warrant from neutral judge</li>
            <li>• <strong>Probable Cause:</strong> Must be good reason to believe search will find evidence</li>
            <li>• <strong>Particularity:</strong> Warrant must specifically describe what's being searched</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
            <p className="text-gray-700">
              <strong>Important:</strong> The Fourth Amendment only restricts <em>government</em> searches. Private 
              parties (employers, landlords, store security) aren't bound by Fourth Amendment, though other laws may 
              apply.
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
              <h4 className="font-bold text-gray-900 mb-2">✓ Your Home</h4>
              <p className="text-gray-700">
                Strongest Fourth Amendment protection. Police generally need warrant to enter your home. "A man's home 
                is his castle" — the most sacred privacy space. Includes curtilage (area immediately surrounding home).
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Your Person & Belongings</h4>
              <p className="text-gray-700">
                Police need probable cause to arrest you or search your pockets, bags, or personal items. Pat-down 
                searches ("Terry stops") allowed with reasonable suspicion, but full searches need more justification.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Your Car (Limited Protection)</h4>
              <p className="text-gray-700">
                Cars have less protection than homes, but police still need probable cause to search. Cannot search car 
                during routine traffic stop unless they have reason to believe it contains evidence of crime.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Reasonable Expectation of Privacy</h4>
              <p className="text-gray-700">
                Protected when you have both: (1) subjective expectation of privacy, and (2) society recognizes that 
                expectation as reasonable. Test from Katz v. United States. Applies to phone calls, emails, and other 
                communications.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Exclusionary Rule</h4>
              <p className="text-gray-700">
                Evidence obtained through illegal searches generally cannot be used in court. This is the main enforcement 
                mechanism for Fourth Amendment. "Fruit of the poisonous tree" doctrine excludes evidence derived from 
                illegal searches.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Cell Phone Location Data</h4>
              <p className="text-gray-700">
                Police need warrant to access historical cell phone location data (Carpenter v. United States). Your 
                location data reveals intimate details of life and receives Fourth Amendment protection.
              </p>
            </div>
          </div>
        </div>

        {/* What is NOT Protected */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-red-600 pb-2">
            ❌ What is NOT Protected (Warrant Exceptions)
          </h3>
          
          <div className="space-y-4">
            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Plain View</h4>
              <p className="text-gray-700">
                Police can seize evidence in plain view if they're lawfully present and it's immediately apparent the 
                item is evidence. No warrant needed for what's visible to anyone.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Consent Searches</h4>
              <p className="text-gray-700">
                If you consent to a search, no warrant needed. Consent must be voluntary. You can refuse consent, and 
                police cannot search based solely on your refusal. Important: you have right to say "I do not consent 
                to this search."
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Search Incident to Arrest</h4>
              <p className="text-gray-700">
                When police arrest you, they can search your person and immediate area for weapons and evidence. This 
                includes pockets, bags you're carrying, and area within your reach. Cannot search entire house without 
                warrant.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Automobile Exception</h4>
              <p className="text-gray-700">
                If police have probable cause that car contains evidence, they can search it without warrant. Cars are 
                mobile and have reduced privacy expectation. Includes all compartments where evidence could be hidden.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Exigent Circumstances</h4>
              <p className="text-gray-700">
                Emergency situations allow warrantless searches: pursuing fleeing suspect, preventing imminent destruction 
                of evidence, protecting people from harm, or "hot pursuit." Must be genuine emergency.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Items You Expose to Public</h4>
              <p className="text-gray-700">
                No privacy expectation in things you knowingly expose to public. Trash left for collection, conversations 
                in public, activities visible from public areas — all can be observed without warrant.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Third-Party Doctrine</h4>
              <p className="text-gray-700">
                Generally no Fourth Amendment protection for information voluntarily given to third parties (bank records, 
                phone numbers dialed). Controversial doctrine being reconsidered in digital age (Carpenter limited this).
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
              <h4 className="font-bold text-gray-900 text-lg mb-2">Katz v. United States (1967)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Reasonable Expectation of Privacy Test</strong> — Fourth Amendment protects people, not places. 
                Protection depends on whether person has reasonable expectation of privacy, not just whether location 
                is constitutionally protected area.
              </p>
              <p className="text-gray-700 text-sm">
                FBI bugged phone booth. Court held this was search requiring warrant even though booth wasn't private 
                property. Established modern framework: protected where you have reasonable privacy expectation that 
                society recognizes.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Mapp v. Ohio (1961)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Exclusionary Rule Applied to States</strong> — Evidence obtained through illegal searches cannot 
                be used in state criminal prosecutions. Incorporated Fourth Amendment exclusionary rule against states.
              </p>
              <p className="text-gray-700 text-sm">
                Police illegally searched home for bombing suspect, found obscene materials, convicted her. Supreme Court 
                reversed, holding illegally obtained evidence must be excluded. Major enforcement mechanism for Fourth 
                Amendment.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Terry v. Ohio (1968)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Stop and Frisk</strong> — Police can briefly detain and pat down person for weapons with reasonable 
                suspicion (lower than probable cause). "Terry stop" allows investigative detention and protective frisk.
              </p>
              <p className="text-gray-700 text-sm">
                Officer observed suspicious behavior, stopped and patted down suspect, found gun. Court created exception 
                allowing brief stops and frisks with reasonable suspicion for officer safety. Controversial practice with 
                concerns about racial profiling.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Riley v. California (2014)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Cell Phone Searches Require Warrant</strong> — Police cannot search cell phone incident to arrest 
                without warrant. Cell phones contain vast amounts of personal information requiring greater privacy 
                protection.
              </p>
              <p className="text-gray-700 text-sm">
                Recognized digital privacy concerns in modern era. Cell phones are "miniature hard drives" containing 
                intimate details of life. Search incident to arrest exception doesn't apply to cell phone contents.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Carpenter v. United States (2018)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Cell Phone Location Data Protected</strong> — Police need warrant to access historical cell site 
                location information. Third-party doctrine doesn't apply to comprehensive digital records that reveal 
                intimate details.
              </p>
              <p className="text-gray-700 text-sm">
                Major digital privacy decision. Cell phone location data too revealing to allow warrantless access. Limited 
                third-party doctrine in recognition of digital age realities.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">United States v. Jones (2012)</h4>
              <p className="text-gray-700 mb-3">
                <strong>GPS Tracking Is Search</strong> — Attaching GPS device to car and tracking movements is search 
                requiring warrant. Physical intrusion on property (trespass) combined with information gathering violates 
                Fourth Amendment.
              </p>
              <p className="text-gray-700 text-sm">
                Police attached GPS to car and tracked for 28 days. Unanimous decision that this was search, though 
                justices differed on reasoning (trespass vs. privacy invasion).
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Florida v. Jardines (2013)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Drug-Sniffing Dog at Home</strong> — Bringing drug-sniffing dog to front porch is search. 
                Curtilage (area around home) receives same Fourth Amendment protection as home itself.
              </p>
              <p className="text-gray-700 text-sm">
                Police brought dog to porch, dog alerted to drugs, obtained warrant. Court held initial use of dog was 
                unlawful search. Cannot conduct investigative activity in curtilage without warrant.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">California v. Greenwood (1988)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Trash Searches</strong> — No privacy expectation in trash left for collection. Police can search 
                garbage without warrant. What you knowingly expose to public isn't protected.
              </p>
              <p className="text-gray-700 text-sm">
                Controversial decision. Once you put trash out for collection, you've exposed it to public and abandoned 
                privacy interest. Police can rummage through garbage without Fourth Amendment constraint.
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
              <h4 className="font-bold text-gray-900 mb-3">What To Do If Police Want to Search</h4>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <p className="text-gray-700 mb-2">
                  <strong>Your Rights:</strong>
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Ask: "Am I free to leave?" (If yes, you can leave)</li>
                  <li>Ask: "Do you have a warrant?" (If no, you can refuse consent)</li>
                  <li>Say: "I do not consent to this search" (clearly and repeatedly)</li>
                  <li>Do not physically resist, but do not help with search</li>
                  <li>Ask for lawyer if arrested: "I want my lawyer"</li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Traffic Stops</h4>
              <p className="text-gray-700">
                Police can stop car with reasonable suspicion of traffic violation. Can ask for license and registration. 
                Cannot search car without probable cause or consent. Cannot extend stop indefinitely — must be reasonably 
                brief. Drug dogs can be used during legitimate stop but cannot unreasonably prolong it.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Airport & Border Searches</h4>
              <p className="text-gray-700">
                Different rules at borders and airports. Border searches can be more intrusive without individualized 
                suspicion. TSA screening at airports doesn't require warrant (administrative search). But forensic search 
                of electronic devices at border may require reasonable suspicion.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">School Searches</h4>
              <p className="text-gray-700">
                Students have Fourth Amendment rights, but reduced in school context. School officials need only "reasonable 
                grounds" (lower than probable cause) to search students. Drug testing of student athletes and students in 
                extracurricular activities allowed.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Digital Privacy & Encryption</h4>
              <p className="text-gray-700">
                Evolving area. Courts generally require warrants for email content, text messages, and cloud storage. 
                Question of whether you can be forced to unlock encrypted phone is unsettled (Fifth Amendment self-incrimination 
                vs. Fourth Amendment search issues).
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Drones & Aerial Surveillance</h4>
              <p className="text-gray-700">
                Police can observe from public airspace without warrant (aerial observation from plane is allowed). But 
                technology-enhanced surveillance may require warrant. Use of thermal imaging to see inside home requires 
                warrant (Kyllo v. United States).
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
              <span>Police generally need warrant based on probable cause to search your home, person, or belongings</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>You have reasonable expectation of privacy in home, car, phone, and personal information</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Many exceptions to warrant requirement: consent, plain view, car searches, arrest, exigent circumstances</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>You can refuse consent to search — say "I do not consent"</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Illegally obtained evidence generally excluded from trial (exclusionary rule)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Digital privacy protections evolving: warrants required for cell phone searches and location data</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
