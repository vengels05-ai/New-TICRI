import Link from 'next/link';

export default function FreedomOfAssemblyPage() {
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
            <span className="text-5xl">👥</span>
            <div>
              <h1 className="text-4xl font-bold mb-2">Freedom of Assembly</h1>
              <h2 className="text-2xl font-semibold">First Amendment</h2>
            </div>
          </div>
          <p className="text-lg leading-relaxed">
            The right to peacefully assemble allows people to gather together for protests, demonstrations, meetings, 
            and collective action. It's essential for political activism, social movements, and democratic participation.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Overview</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Freedom of assembly protects collective expression and the right to join with others to advance shared ideas. 
            It includes both the right to assemble in public spaces and the right of expressive association — choosing 
            who you associate with based on shared beliefs.
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
              "Congress shall make no law... abridging... the right of the people peaceably to assemble..."
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
            People have the right to gather together peacefully for protests, demonstrations, rallies, meetings, and other 
            collective activities. Government cannot prevent peaceful assembly simply because it disagrees with the message 
            or finds it inconvenient.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            <strong>Two components:</strong>
          </p>
          <ul className="mt-2 space-y-2 text-gray-700 ml-4">
            <li>• <strong>Physical Assembly:</strong> Right to gather in public spaces for expressive purposes</li>
            <li>• <strong>Freedom of Association:</strong> Right to join groups, organizations, and movements based on 
            shared beliefs (implied from assembly right)</li>
          </ul>
        </div>

        {/* What IS Protected */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-green-600 pb-2">
            ✅ What IS Protected
          </h3>
          
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Peaceful Protests & Demonstrations</h4>
              <p className="text-gray-700">
                Right to organize and participate in peaceful protests, marches, rallies, and demonstrations on matters 
                of public concern. Government cannot ban protests based on viewpoint or message.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Access to Public Forums</h4>
              <p className="text-gray-700">
                Traditional public forums (streets, sidewalks, parks) are protected spaces for assembly. Government has 
                limited ability to restrict access to these areas and cannot discriminate based on content.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Freedom of Association</h4>
              <p className="text-gray-700">
                Right to join political parties, advocacy groups, labor unions, social organizations, and other associations. 
                Government cannot compel disclosure of membership in advocacy organizations or punish people for associations.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Expressive Association</h4>
              <p className="text-gray-700">
                Organizations can choose members based on shared beliefs and exclude those who don't share the group's 
                message. Boy Scouts can exclude atheist members; parade organizers can exclude unwanted groups.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Symbolic Assembly (Sit-ins, Die-ins)</h4>
              <p className="text-gray-700">
                Non-violent direct action and symbolic forms of assembly are protected. Sit-ins, die-ins, human chains, 
                and similar peaceful tactics that dramatize a message receive First Amendment protection.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Permits Can Be Required, But...</h4>
              <p className="text-gray-700">
                Government can require permits for large assemblies to manage traffic and safety, but permit systems must 
                be content-neutral, have clear standards, and not give officials unbridled discretion to deny permits.
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
              <h4 className="font-bold text-gray-900 mb-2">✗ Violent Assembly or Riots</h4>
              <p className="text-gray-700">
                The right to "peaceably" assemble does not include violent protests, riots, property destruction, or 
                assaults. Once assembly becomes violent, First Amendment protection is lost.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Blocking Traffic or Access</h4>
              <p className="text-gray-700">
                No right to completely block roads, highways, or building entrances. Government can enforce reasonable 
                time, place, and manner restrictions to keep traffic flowing and ensure access to buildings.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Trespassing on Private Property</h4>
              <p className="text-gray-700">
                No First Amendment right to assemble on private property without permission. Property owners can exclude 
                protesters from private land. Shopping malls, private businesses, and homes can restrict assembly.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Disrupting Government Functions</h4>
              <p className="text-gray-700">
                Cannot disrupt government meetings, legislative sessions, or court proceedings. While public has access 
                to many government proceedings, disruptive conduct can be restricted.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Unlimited Access to All Government Property</h4>
              <p className="text-gray-700">
                Non-public forums (military bases, jails, airport terminals) can have stricter restrictions. Government 
                can limit assembly in areas not traditionally open to public expression.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Associating for Illegal Purposes</h4>
              <p className="text-gray-700">
                Freedom of association doesn't protect groups organized for illegal purposes (criminal conspiracies, 
                terrorist organizations). Must be genuine advocacy, not just cover for illegal activity.
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
              <h4 className="font-bold text-gray-900 text-lg mb-2">NAACP v. Alabama (1958)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Freedom of Association Recognized</strong> — State could not compel NAACP to disclose membership 
                lists. Privacy of association is essential to effective advocacy, especially for unpopular groups. First 
                Amendment includes implied right of association.
              </p>
              <p className="text-gray-700 text-sm">
                Landmark case establishing freedom of association as constitutional right. During civil rights era, 
                disclosure would have exposed members to harassment and retaliation.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Hague v. CIO (1939)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Public Forum Doctrine</strong> — Streets and parks are "public forums" that have been used 
                "time out of mind" for assembly and communication. Government has limited power to restrict assembly 
                in these traditional public spaces.
              </p>
              <p className="text-gray-700 text-sm">
                Established foundation for public forum doctrine. Recognized that public spaces have special First 
                Amendment status as venues for collective expression.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Cox v. Louisiana (1965)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Time, Place, Manner Restrictions</strong> — Government can impose reasonable restrictions on 
                assemblies, but they must be content-neutral, narrowly tailored, and leave open alternative channels 
                of communication.
              </p>
              <p className="text-gray-700 text-sm">
                Civil rights protest near courthouse. Court established framework for regulating assembly: restrictions 
                must serve significant government interest and cannot be based on message content.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Boy Scouts of America v. Dale (2000)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Expressive Association Protects Membership Decisions</strong> — Boy Scouts could exclude gay 
                scoutmaster because forced inclusion would interfere with organization's expressive message. Right to 
                associate includes right to exclude.
              </p>
              <p className="text-gray-700 text-sm">
                Controversial case balancing anti-discrimination laws with associational freedom. Groups with expressive 
                purpose can exclude members whose presence would affect group's message.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Hurley v. Irish-American Gay Group (1995)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Cannot Force Inclusion in Parade</strong> — Boston St. Patrick's Day parade organizers could not 
                be forced to include gay rights group. Parades are expressive, and organizers have right to control 
                message.
              </p>
              <p className="text-gray-700 text-sm">
                Parade is itself expressive activity, and forcing inclusion of group with different message violates 
                organizers' speech rights. Unanimous decision protecting editorial discretion over expressive events.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">DeJonge v. Oregon (1937)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Peaceful Assembly Cannot Be Criminalized</strong> — State could not make it a crime to attend 
                a Communist Party meeting. Peaceful assembly is protected even when organized by unpopular or radical 
                groups.
              </p>
              <p className="text-gray-700 text-sm">
                Important case protecting right to assemble even for controversial causes. Cannot criminalize mere 
                attendance at peaceful meeting, even of group government dislikes.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Forsyth County v. Nationalist Movement (1992)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Permit Fees Cannot Vary by Content</strong> — Permit system allowing officials to charge higher 
                fees for controversial assemblies was unconstitutional. Permit fees must be content-neutral and based 
                on fixed standards.
              </p>
              <p className="text-gray-700 text-sm">
                County tried to charge more for permits based on estimated need for police protection (which varied with 
                controversy of message). Unconstitutional because it penalizes unpopular speech.
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
              <h4 className="font-bold text-gray-900 mb-3">Protest Permits & Time/Place/Manner Restrictions</h4>
              <p className="text-gray-700 mb-2">
                Cities can require permits for large demonstrations to coordinate traffic and safety, but:
              </p>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                <li>Permit process must be content-neutral (can't favor some viewpoints)</li>
                <li>Fees must be reasonable and not based on message</li>
                <li>Officials cannot have unbridled discretion to deny permits</li>
                <li>Spontaneous protests may not require advance permits</li>
                <li>Small assemblies generally don't need permits</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Public vs. Private Property</h4>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <p className="text-gray-700 mb-2">
                  <strong>Public Property:</strong> Traditional public forums (streets, parks, sidewalks) have strong 
                  assembly rights. Government property not traditionally open to public (military bases, prisons) can 
                  be closed to assembly.
                </p>
                <p className="text-gray-700">
                  <strong>Private Property:</strong> No First Amendment right to assemble on private property. Shopping 
                  malls, private businesses, and private land can exclude protesters (some state constitutions provide 
                  more protection).
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Counter-Protesters</h4>
              <p className="text-gray-700">
                Both protesters and counter-protesters have assembly rights. Police must protect both groups and cannot 
                shut down one group because the other might react violently ("heckler's veto"). Must allow both sides 
                to assemble peacefully.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Social Media & Digital Assembly</h4>
              <p className="text-gray-700">
                While traditional assembly is physical gathering, modern questions arise: Do social media platforms 
                constitute "assembly"? Can government restrict online organizing? Generally, online organizing receives 
                free speech protection, but "digital assembly" doctrine is still developing.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Labor Unions & Strikes</h4>
              <p className="text-gray-700">
                Workers have right to assemble and organize unions, protected by both First Amendment and federal labor 
                laws. Peaceful picketing is protected, though specific labor law provides additional framework beyond 
                constitutional protections.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Campus Protests</h4>
              <p className="text-gray-700">
                Public universities are bound by First Amendment and must allow peaceful assembly. Private universities 
                aren't subject to First Amendment (though many have similar policies). Universities can enforce 
                content-neutral time, place, manner rules.
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
              <span>Right to peacefully assemble in public spaces for protests, demonstrations, and collective expression</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Freedom of association protects joining groups and organizations based on shared beliefs</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Traditional public forums (streets, parks) have strongest protection for assembly</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Government can impose time, place, manner restrictions if content-neutral and reasonable</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Violent assembly, blocking traffic, and trespassing are not protected</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Expressive associations can choose members and exclude those who don't share group's message</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
