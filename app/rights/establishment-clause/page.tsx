import Link from 'next/link';

export default function EstablishmentClausePage() {
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
            <span className="text-5xl">🏛️</span>
            <div>
              <h1 className="text-4xl font-bold mb-2">Establishment Clause</h1>
              <h2 className="text-2xl font-semibold">First Amendment - Separation of Church & State</h2>
            </div>
          </div>
          <p className="text-lg leading-relaxed">
            The Establishment Clause prevents government from establishing an official religion, endorsing religion over 
            non-religion, or favoring one religion over others. It creates a separation between church and state.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Overview</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Establishment Clause works together with the Free Exercise Clause to protect religious liberty. While Free 
            Exercise protects individual religious practice, the Establishment Clause limits government involvement in 
            religion. This creates a "separation of church and state" (though that phrase doesn't appear in the Constitution).
          </p>
          <p className="text-gray-700 leading-relaxed">
            This breakdown uses the <strong>TICRI Constitutional Rights</strong> methodology to provide:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-1 text-gray-700 ml-4">
            <li>📜 Constitutional Text</li>
            <li>💭 Plain English Explanation</li>
            <li>✅ What IS Allowed</li>
            <li>❌ What is NOT Allowed</li>
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
              "Congress shall make no law respecting an establishment of religion..."
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
            The government cannot create an official state religion, favor one religion over others, or favor religion 
            over non-religion. Government must remain neutral in matters of religion.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            This doesn't mean government must be hostile to religion or remove all religious references from public life. 
            It means government cannot use its power to promote or establish religious beliefs. The goal is to ensure 
            religious liberty for all by preventing government from taking sides on religious questions.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
            <p className="text-gray-700 mb-2">
              <strong>Three Key Principles:</strong>
            </p>
            <ul className="mt-2 space-y-1 text-gray-700 ml-4">
              <li>1. Government cannot establish an official religion</li>
              <li>2. Government cannot favor one religion over another</li>
              <li>3. Government cannot favor religion over non-religion (or vice versa)</li>
            </ul>
          </div>
        </div>

        {/* What IS Allowed */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-green-600 pb-2">
            ✅ What IS Allowed
          </h3>
          
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Ceremonial Deism & Historical References</h4>
              <p className="text-gray-700">
                "In God We Trust" on currency, "under God" in Pledge of Allegiance, legislative prayer, and similar 
                historical practices are allowed. Courts treat these as ceremonial traditions without religious coercion.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Private Religious Speech on Public Property</h4>
              <p className="text-gray-700">
                Private citizens and groups can engage in religious speech on public property (schools, parks, government 
                buildings) when secular groups have similar access. Allowing religious speech doesn't equal government 
                endorsement.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Neutral Aid Programs Including Religious Organizations</h4>
              <p className="text-gray-700">
                Government programs that provide aid based on neutral criteria can include religious organizations. School 
                vouchers, tax credits, and social service grants that go to both religious and secular organizations are 
                constitutional.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Teaching About Religion</h4>
              <p className="text-gray-700">
                Public schools can teach about religion from an academic perspective (history of religions, comparative 
                religion, Bible as literature). Teaching about religion is different from religious indoctrination.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Religious Displays with Secular Context</h4>
              <p className="text-gray-700">
                Religious symbols in government spaces may be constitutional if they're part of broader secular display 
                or have historical context. Nativity scene alongside secular holiday symbols might be allowed.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Accommodating Religion</h4>
              <p className="text-gray-700">
                Government can accommodate religious practice without violating Establishment Clause (allowing religious 
                clothing in government offices, providing kosher meals in prisons). Accommodation ≠ Establishment.
              </p>
            </div>
          </div>
        </div>

        {/* What is NOT Allowed */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-red-600 pb-2">
            ❌ What is NOT Allowed
          </h3>
          
          <div className="space-y-4">
            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ School-Sponsored Prayer or Bible Reading</h4>
              <p className="text-gray-700">
                Public schools cannot lead prayer, require Bible reading, or conduct religious activities. This includes 
                prayer at graduations, football games, and official school events. Student-initiated prayer is different 
                and protected.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Teaching Creationism as Science</h4>
              <p className="text-gray-700">
                Schools cannot teach creationism or intelligent design as science because they are religious doctrines, 
                not scientific theories. Teaching evolution is not an Establishment Clause violation.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Posting Ten Commandments in Schools/Courthouses</h4>
              <p className="text-gray-700">
                Government cannot post Ten Commandments or other religious texts in public schools or courthouses if the 
                purpose is religious. Must have secular purpose and not endorse religion.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Direct Funding of Religious Instruction</h4>
              <p className="text-gray-700">
                Government funds cannot be used to pay for religious instruction or worship. While neutral aid programs 
                can include religious schools, money cannot be earmarked specifically for religious teaching.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Religious Tests for Public Office</h4>
              <p className="text-gray-700">
                Government cannot require religious belief (or specific religious belief) as a condition for holding 
                public office. Article VI explicitly bans religious tests, reinforced by Establishment Clause.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Coercive Religious Practices</h4>
              <p className="text-gray-700">
                Government cannot coerce participation in religious activity. Even if participation is technically 
                "voluntary," social pressure in public settings (like schools) can constitute unconstitutional coercion.
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
              <h4 className="font-bold text-gray-900 text-lg mb-2">Engel v. Vitale (1962)</h4>
              <p className="text-gray-700 mb-3">
                <strong>School Prayer Unconstitutional</strong> — Banned state-composed prayer in public schools, even if 
                non-denominational and voluntary. Government-sponsored prayer in schools violates Establishment Clause 
                regardless of intent.
              </p>
              <p className="text-gray-700 text-sm">
                Landmark case establishing that public schools cannot lead prayer. "It is no part of the business of 
                government to compose official prayers for any group of the American people to recite."
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Lemon v. Kurtzman (1971)</h4>
              <p className="text-gray-700 mb-3">
                <strong>The "Lemon Test"</strong> — Established three-part test for Establishment Clause: (1) secular 
                purpose, (2) primary effect neither advances nor inhibits religion, (3) no excessive government entanglement 
                with religion.
              </p>
              <p className="text-gray-700 text-sm">
                Used for decades to evaluate Establishment Clause claims, though increasingly questioned by current Court. 
                Struck down state salary supplements for teachers in religious schools.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Lee v. Weisman (1992)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Graduation Prayer Unconstitutional</strong> — School-sponsored prayer at graduation violates 
                Establishment Clause. Even though attendance is voluntary, social pressure creates indirect coercion to 
                participate in religious exercise.
              </p>
              <p className="text-gray-700 text-sm">
                Court recognized that for students, graduation is not truly voluntary and peer pressure makes religious 
                prayer coercive. Extended school prayer ban beyond classroom to school events.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Zelman v. Simmons-Harris (2002)</h4>
              <p className="text-gray-700 mb-3">
                <strong>School Vouchers Constitutional</strong> — Program providing tuition vouchers that parents could 
                use at private religious schools doesn't violate Establishment Clause. Neutral program of private choice 
                where aid goes to schools only as result of genuine independent choices.
              </p>
              <p className="text-gray-700 text-sm">
                Major shift allowing public funds to flow to religious schools through neutral voucher programs. Government 
                doesn't endorse religion when individuals direct benefits through private choice.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Town of Greece v. Galloway (2014)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Legislative Prayer Allowed</strong> — Town council could open meetings with prayer, even when 
                prayers were predominantly Christian. Long tradition of legislative prayer and no coercion of participation.
              </p>
              <p className="text-gray-700 text-sm">
                Distinguished schools (captive audience of children) from legislative settings (adults who can choose not 
                to participate). Historical practice of legislative prayer weighs heavily.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Kennedy v. Bremerton School District (2022)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Coach's Prayer Constitutional</strong> — High school football coach could pray on field after 
                games. Private religious expression by public employee doesn't violate Establishment Clause when not 
                coercive or government speech.
              </p>
              <p className="text-gray-700 text-sm">
                Recent case scaling back Establishment Clause restrictions. Rejected Lemon test in favor of "history and 
                tradition" approach. Controversial decision with strong dissent about coercion of students.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Epperson v. Arkansas (1968)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Cannot Ban Evolution</strong> — State law banning teaching of evolution violates Establishment 
                Clause. Government cannot tailor curriculum to conform to religious views or ban scientific theory because 
                it conflicts with religion.
              </p>
              <p className="text-gray-700 text-sm">
                First major case addressing science education and religion. Later cases extended to ban teaching 
                creationism as science (Edwards v. Aguillard).
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
              <h4 className="font-bold text-gray-900 mb-3">Public Schools: The Key Battleground</h4>
              <p className="text-gray-700 mb-2">
                Most Establishment Clause cases involve public schools because of captive audience of impressionable 
                children and government's role in education. Rules are stricter for schools than other government contexts.
              </p>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                <li>Schools cannot lead prayer or Bible reading</li>
                <li>Students can pray individually or in groups voluntarily</li>
                <li>Teachers in official capacity cannot lead religious activities</li>
                <li>Schools can teach about religion objectively</li>
                <li>Religious clubs must have equal access to school facilities</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Holiday Displays</h4>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <p className="text-gray-700">
                  <strong>Complex Area:</strong> Religious symbols on government property are evaluated case-by-case. 
                  Nativity scene alone = unconstitutional. Nativity scene with secular symbols = might be OK. Ten 
                  Commandments monument = depends on context and history.
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">School Funding & Vouchers</h4>
              <p className="text-gray-700">
                Modern Court allows government funding to flow to religious schools through neutral programs of private 
                choice. School vouchers, tax credit scholarships, and similar programs are constitutional if they're 
                neutral and parents choose religious schools.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">"Under God" in Pledge of Allegiance</h4>
              <p className="text-gray-700">
                Courts have upheld "under God" as ceremonial deism with no coercive effect. Challenges generally fail. 
                Students cannot be forced to recite pledge, but the words themselves don't violate Establishment Clause.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Current Trends: Moving Away from Lemon Test</h4>
              <p className="text-gray-700">
                Recent Supreme Court decisions have de-emphasized the Lemon test in favor of "history and tradition" 
                approach. Focus on historical practices and whether government is coercing religious participation. This 
                shift generally means more accommodation of religion.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Religious Speech vs. Government Speech</h4>
              <p className="text-gray-700">
                Key distinction: Private religious speech on public property is protected by Free Speech Clause and cannot 
                be censored. Government's own religious speech may violate Establishment Clause. Question is who is 
                speaking: private citizens or government?
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
              <span>Government must remain neutral toward religion — cannot favor one religion or religion over non-religion</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Public schools cannot lead prayer or religious activities, but students can pray voluntarily</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Neutral government programs can include religious organizations (vouchers, grants)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Private religious speech on public property is protected, not an Establishment Clause violation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Historical traditions like legislative prayer and "In God We Trust" are allowed as ceremonial deism</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Current Court emphasizes "history and tradition" over strict separation in many cases</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
