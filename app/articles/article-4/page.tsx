import Link from 'next/link';

export default function Article4Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          href="/articles" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          ← Back to Articles
        </Link>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg mb-8">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-5xl">🗺️</span>
            <div>
              <h1 className="text-4xl font-bold mb-2">Article IV</h1>
              <h2 className="text-2xl font-semibold">Interstate Relations</h2>
            </div>
          </div>
          <p className="text-lg leading-relaxed">
            Article IV governs relationships between states and between the federal government and states. It ensures 
            mutual recognition of laws and court decisions, protects citizens traveling across state lines, establishes 
            procedures for admitting new states, and guarantees republican government to every state.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Overview</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Article IV addresses <strong>federalism in action</strong> — how states work together as part of one nation 
            while maintaining their individual sovereignty. It prevents states from becoming isolated or hostile to each 
            other, ensures portability of rights across state lines, and defines the federal government's obligations to 
            protect and admit states.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Each section below uses the <strong>TICRI Constitutional Breakdown</strong> methodology to provide:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-1 text-gray-700 ml-4">
            <li>📜 Exact Constitutional Text</li>
            <li>💭 Plain English Translation</li>
            <li>⚡ Government Powers Created</li>
            <li>🚫 Government Restrictions</li>
            <li>❌ What It Does NOT Say</li>
            <li>⚖️ Supreme Court Interpretations</li>
          </ul>
        </div>

        {/* Table of Contents */}
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Jump to Section:</h3>
          <div className="grid md:grid-cols-2 gap-3">
            <a href="#section-1" className="text-blue-600 hover:text-blue-800 hover:underline">
              § 1 — Full Faith and Credit
            </a>
            <a href="#section-2" className="text-blue-600 hover:text-blue-800 hover:underline">
              § 2 — Privileges and Immunities, Extradition, Fugitive Slaves
            </a>
            <a href="#section-3" className="text-blue-600 hover:text-blue-800 hover:underline">
              § 3 — New States and Federal Property
            </a>
            <a href="#section-4" className="text-blue-600 hover:text-blue-800 hover:underline">
              § 4 — Republican Government Guarantee
            </a>
          </div>
        </div>

        {/* SECTION 1 */}
        <div id="section-1" className="bg-white rounded-lg shadow-md p-8 mb-6 scroll-mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Section 1 — Full Faith and Credit Clause
          </h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">📜 Exact Text</h4>
            <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
              "Full Faith and Credit shall be given in each State to the public Acts, Records, and judicial Proceedings 
              of every other State. And the Congress may by general Laws prescribe the Manner in which such Acts, Records 
              and Proceedings shall be proved, and the Effect thereof."
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">💭 Plain English</h4>
            <p className="text-gray-700">
              Each state must respect and recognize the official acts, public records, and court decisions of other states. 
              Congress can pass laws to determine how these acts, records, and court decisions are proven and what legal 
              effect they have across state lines.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚡ What This Requires</h4>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">⚖️ Judicial Proceedings (Court Decisions)</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li><strong>Judgments Must Be Recognized</strong> — States must enforce valid judgments from other states' courts</li>
                  <li><strong>No Re-litigation</strong> — Cannot retry cases already decided in another state</li>
                  <li><strong>Res Judicata</strong> — Final judgments have binding effect across state lines</li>
                  <li>Example: If you're sued in Texas and lose, you can't be sued again on same claim in California</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">📋 Public Acts (State Laws)</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li>States must recognize other states' statutes in certain contexts</li>
                  <li>Example: If validly married in one state, other states generally must recognize marriage</li>
                  <li><strong>BUT</strong> states not required to apply other states' laws that violate public policy</li>
                  <li>Choice of law rules determine which state's law applies in disputes</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">📄 Public Records</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li>Birth certificates, death certificates, marriage licenses must be recognized</li>
                  <li>Property records and deeds from other states accepted as evidence</li>
                  <li>Official government documents given legal weight across state lines</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">🏛️ Congressional Power</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li>Congress can prescribe how acts/records are authenticated</li>
                  <li>Congress can determine legal effect of state acts in other states</li>
                  <li>Congress has passed statutes implementing Full Faith and Credit</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">🚫 Limits and Exceptions</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Public Policy Exception</strong> — States may refuse to enforce laws that deeply violate their own public policy</li>
              <li><strong>Penal Laws Exception</strong> — States not required to enforce another state's criminal or tax laws</li>
              <li><strong>Due Process Limits</strong> — Must recognize judgments only if rendering court had proper jurisdiction</li>
              <li><strong>Choice of Law</strong> — States retain discretion to apply their own law in many circumstances</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">❌ What It Does NOT Say</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Does NOT require states to apply other states' laws in all cases</li>
              <li>Does NOT eliminate state sovereignty over domestic relations</li>
              <li>Does NOT prevent states from having different laws</li>
              <li>Does NOT require recognition of judgments from courts lacking jurisdiction</li>
              <li>Does NOT force states to abandon their own public policy completely</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚖️ Key Supreme Court Cases</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 text-sm">
              <li><strong>Fauntleroy v. Lum (1910)</strong> — States must enforce sister-state judgments even if based on law the forum state considers invalid</li>
              <li><strong>Williams v. North Carolina (1942 & 1945)</strong> — Divorce decrees entitled to full faith and credit if issuing court had jurisdiction</li>
              <li><strong>Baker v. General Motors Corp. (1998)</strong> — Full faith and credit doesn't compel state to adopt procedures of other states</li>
              <li><strong>V.L. v. E.L. (2016)</strong> — Georgia must recognize Alabama adoption judgment under Full Faith and Credit</li>
              <li><strong>Obergefell v. Hodges (2015)</strong> — Same-sex marriage must be recognized (based on 14th Amendment, not Full Faith and Credit)</li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
            <h5 className="font-semibold text-gray-900 mb-2">Why Full Faith and Credit Matters</h5>
            <p className="text-sm text-gray-700">
              Without this clause, the United States would be 50 separate legal systems with no mutual recognition. You 
              could escape a valid court judgment by moving to another state, marriages and adoptions wouldn't be portable, 
              and the nation would fragment into isolated jurisdictions. Full Faith and Credit creates legal unity while 
              preserving state diversity.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div id="section-2" className="bg-white rounded-lg shadow-md p-8 mb-6 scroll-mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Section 2 — Privileges and Immunities, Extradition, Fugitive Slaves
          </h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">📜 Exact Text</h4>
            <div className="space-y-3">
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                "The Citizens of each State shall be entitled to all Privileges and Immunities of Citizens in the several 
                States."
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                "A Person charged in any State with Treason, Felony, or other Crime, who shall flee from Justice, and be 
                found in another State, shall on Demand of the executive Authority of the State from which he fled, be 
                delivered up, to be removed to the State having Jurisdiction of the Crime."
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded line-through decoration-red-500">
                "No Person held to Service or Labour in one State, under the Laws thereof, escaping into another, shall, 
                in Consequence of any Law or Regulation therein, be discharged from such Service or Labour, but shall be 
                delivered up on Claim of the Party to whom such Service or Labour may be due."
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">💭 Plain English</h4>
            <p className="text-gray-700 mb-3">
              <strong>Clause 1 (Privileges and Immunities):</strong> Citizens traveling to other states are entitled to 
              the same basic rights as citizens of that state. States cannot discriminate against out-of-state citizens 
              in fundamental matters.
            </p>
            <p className="text-gray-700 mb-3">
              <strong>Clause 2 (Extradition):</strong> If someone commits a crime in one state and flees to another, the 
              second state must return them to the first state for trial when the governor requests it.
            </p>
            <p className="text-gray-700">
              <strong>Clause 3 (Fugitive Slave):</strong> This clause required return of escaped slaves and was nullified 
              by the 13th Amendment (1865), which abolished slavery.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚡ Privileges and Immunities Clause</h4>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">✅ Protected Rights for Out-of-State Citizens</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li><strong>Access to Courts</strong> — Can sue and be sued on equal terms</li>
                  <li><strong>Property Rights</strong> — Can own, buy, and sell property</li>
                  <li><strong>Travel and Commerce</strong> — Can engage in business and trade</li>
                  <li><strong>Employment</strong> — Can work in private sector (with some exceptions)</li>
                  <li>Protects "fundamental" rights essential to interstate harmony</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">🚫 What States CAN Do</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li><strong>Charge Higher Tuition</strong> — Can charge out-of-state students more for public colleges</li>
                  <li><strong>Hunting/Fishing Licenses</strong> — Can charge non-residents more for recreational licenses</li>
                  <li><strong>Public Employment</strong> — Can prefer own citizens for some government jobs</li>
                  <li><strong>Political Rights</strong> — Voting and holding office limited to residents</li>
                  <li>Distinctions allowed when not fundamental rights or when substantial reason exists</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚡ Extradition Clause</h4>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">🚔 How Interstate Extradition Works</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li>Person charged with crime flees to another state</li>
                  <li>Governor of state where crime occurred requests extradition</li>
                  <li>Governor of asylum state must surrender the fugitive</li>
                  <li>Federal law (18 U.S.C. § 3182) implements this requirement</li>
                  <li>Applies to all crimes: treason, felonies, and misdemeanors</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">⚖️ Limits and Enforcement</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li>Courts cannot order governors to extradite (political question)</li>
                  <li>But governors routinely comply with requests</li>
                  <li>Fugitive has right to hearing to challenge identity/jurisdiction</li>
                  <li>Cannot challenge guilt or innocence in asylum state</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">❌ What It Does NOT Say</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Does NOT grant absolute equality for out-of-state citizens in all respects</li>
              <li>Does NOT prevent residency requirements for voting or holding office</li>
              <li>Does NOT prohibit reasonable distinctions (like higher college tuition)</li>
              <li>Does NOT require same treatment for corporations (only natural persons)</li>
              <li>Does NOT give federal courts power to order extradition if governor refuses</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚖️ Key Supreme Court Cases</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 text-sm">
              <li><strong>Corfield v. Coryell (1823)</strong> — Defined privileges and immunities as fundamental rights essential to free government</li>
              <li><strong>Paul v. Virginia (1869)</strong> — Corporations not protected by Privileges and Immunities Clause</li>
              <li><strong>Supreme Court of New Hampshire v. Piper (1985)</strong> — State cannot require bar members to be state residents</li>
              <li><strong>Kentucky v. Dennison (1861)</strong> — Federal courts cannot compel governors to extradite (overruled in part)</li>
              <li><strong>Puerto Rico v. Branstad (1987)</strong> — Overruled Dennison; extradition is mandatory, though enforcement remains difficult</li>
              <li><strong>United Haulers Ass'n v. Oneida-Herkimer Solid Waste Management Authority (2007)</strong> — Limits on state discrimination against interstate commerce</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
            <h5 className="font-semibold text-gray-900 mb-2">Fugitive Slave Clause — Nullified by 13th Amendment</h5>
            <p className="text-sm text-gray-700 mb-2">
              The third clause of Section 2 required return of escaped slaves to their "owners." This provision:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 ml-2 space-y-1">
              <li>Was one of the Constitution's compromises with slavery</li>
              <li>Was enforced by Fugitive Slave Acts of 1793 and 1850</li>
              <li>Caused enormous controversy and resistance in free states</li>
              <li>Was rendered void by the 13th Amendment (1865) abolishing slavery</li>
            </ul>
            <p className="text-sm text-gray-700 mt-2">
              The clause remains in the Constitution's text but has no legal effect.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
            <h5 className="font-semibold text-gray-900 mb-2">Privileges and Immunities vs. Equal Protection</h5>
            <p className="text-sm text-gray-700">
              Don't confuse the Article IV Privileges and Immunities Clause with the 14th Amendment's Privileges or 
              Immunities Clause (different text, different meaning). Article IV protects out-of-state citizens from 
              discrimination by states; 14th Amendment protects all persons from state violations of federal rights.
            </p>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="section-3" className="bg-white rounded-lg shadow-md p-8 mb-6 scroll-mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Section 3 — New States and Federal Property
          </h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">📜 Exact Text</h4>
            <div className="space-y-3">
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                "New States may be admitted by the Congress into this Union; but no new State shall be formed or erected 
                within the Jurisdiction of any other State; nor any State be formed by the Junction of two or more States, 
                or Parts of States, without the Consent of the Legislatures of the States concerned as well as of the 
                Congress."
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                "The Congress shall have Power to dispose of and make all needful Rules and Regulations respecting the 
                Territory or other Property belonging to the United States; and nothing in this Constitution shall be so 
                construed as to Prejudice any Claims of the United States, or of any particular State."
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">💭 Plain English</h4>
            <p className="text-gray-700 mb-3">
              <strong>Admission of New States:</strong> Congress can admit new states to the Union. However, new states 
              cannot be created from territory within an existing state, or by merging existing states, without both 
              Congress's approval and the consent of the state legislatures involved.
            </p>
            <p className="text-gray-700">
              <strong>Federal Property:</strong> Congress has power to make rules for federal territories and property, 
              and the Constitution doesn't prejudice claims of the United States or any state.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚡ Admission of New States</h4>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">🏛️ Congressional Power</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li><strong>Discretion to Admit States</strong> — Congress decides when/whether to admit new states</li>
                  <li><strong>Admission Process</strong> — Territory petitions, Congress passes enabling act, territory drafts constitution, Congress admits by joint resolution</li>
                  <li><strong>Equal Footing Doctrine</strong> — New states enter on equal footing with existing states</li>
                  <li>37 states have been admitted since original 13</li>
                  <li>Most recent: Hawaii and Alaska (1959)</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">🚫 Restrictions on Creating States</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li><strong>Cannot Carve New State from Existing State</strong> — Without that state's legislature's consent</li>
                  <li><strong>Cannot Merge States</strong> — Without consent of legislatures and Congress</li>
                  <li>Protects state sovereignty and territorial integrity</li>
                  <li>Historical examples: West Virginia (1863, carved from Virginia with questionable consent during Civil War)</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">📊 Historical State Admissions</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li>Original 13 states ratified Constitution (1787-1790)</li>
                  <li>Vermont through Hawaii: 37 states admitted by Congress</li>
                  <li>Territories that remain: Puerto Rico, U.S. Virgin Islands, Guam, American Samoa, Northern Mariana Islands</li>
                  <li>District of Columbia not a state (requires constitutional amendment)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚡ Federal Property and Territories</h4>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">🏞️ Property Clause Powers</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li><strong>Manage Federal Lands</strong> — National parks, forests, military bases, public lands</li>
                  <li><strong>Govern Territories</strong> — Puerto Rico, Guam, U.S. Virgin Islands, etc.</li>
                  <li><strong>Make Rules for Federal Property</strong> — Environmental regulations, land use, resource management</li>
                  <li>Federal government owns about 28% of U.S. land (mostly in western states)</li>
                  <li>Basis for laws like Endangered Species Act on federal lands</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">🗺️ Territorial Governance</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li>Congress has plenary (complete) power over territories</li>
                  <li>Constitution applies to territories but not always equally</li>
                  <li>Territories have non-voting delegates in House of Representatives</li>
                  <li>Territorial residents are U.S. citizens (except American Samoa: U.S. nationals)</li>
                  <li>Different constitutional rules apply (see Insular Cases)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">🚫 Government Restrictions</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Cannot Create Unequal States</strong> — New states enter on equal footing with existing states</li>
              <li><strong>Cannot Violate State Sovereignty</strong> — Need state consent to alter state boundaries</li>
              <li><strong>Cannot Prejudice State Claims</strong> — Must respect state property claims</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">❌ What It Does NOT Say</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Does NOT require Congress to admit territories as states</li>
              <li>Does NOT specify requirements for statehood (Congress determines)</li>
              <li>Does NOT address status of D.C. or whether it can become a state</li>
              <li>Does NOT limit what conditions Congress can impose on territories</li>
              <li>Does NOT define extent of constitutional rights in territories</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚖️ Key Supreme Court Cases</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 text-sm">
              <li><strong>Coyle v. Smith (1911)</strong> — New states admitted on equal footing; Congress cannot impose unique restrictions</li>
              <li><strong>Pollard v. Hagan (1845)</strong> — Equal footing doctrine; new states have same sovereignty as original states</li>
              <li><strong>Kleppe v. New Mexico (1976)</strong> — Property Clause gives Congress broad power over federal lands</li>
              <li><strong>Insular Cases (1901-1922)</strong> — Constitution applies differently in "unincorporated" territories</li>
              <li><strong>Boumediene v. Bush (2008)</strong> — Constitutional habeas corpus rights extend to Guantanamo Bay</li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
            <h5 className="font-semibold text-gray-900 mb-2">Equal Footing Doctrine</h5>
            <p className="text-sm text-gray-700">
              The "equal footing" doctrine means new states are admitted with the same powers, sovereignty, and 
              jurisdiction as existing states. Congress cannot impose perpetual conditions or restrictions that would 
              make new states inferior. Once admitted, all states are equal under the Constitution.
            </p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
            <h5 className="font-semibold text-gray-900 mb-2">The "Insular Cases" and Territorial Rights</h5>
            <p className="text-sm text-gray-700">
              After the Spanish-American War (1898), the Supreme Court decided the "Insular Cases," holding that 
              territories are "incorporated" (destined for statehood with full constitutional rights) or "unincorporated" 
              (with limited constitutional protections). This controversial doctrine still governs territories like Puerto 
              Rico, limiting full constitutional rights despite U.S. citizenship.
            </p>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="section-4" className="bg-white rounded-lg shadow-md p-8 mb-6 scroll-mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Section 4 — Republican Government Guarantee
          </h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">📜 Exact Text</h4>
            <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
              "The United States shall guarantee to every State in this Union a Republican Form of Government, and shall 
              protect each of them against Invasion; and on Application of the Legislature, or of the Executive (when the 
              Legislature cannot be convened) against domestic Violence."
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">💭 Plain English</h4>
            <p className="text-gray-700">
              The federal government must ensure every state has a republican form of government (representative democracy, 
              not monarchy or dictatorship). The federal government must also protect states from foreign invasion and, 
              when requested by the state legislature or governor, help suppress domestic violence like rebellions or riots.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚡ Federal Government Obligations</h4>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">🏛️ Republican Government Guarantee</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li><strong>Ensures Representative Democracy</strong> — States must have elected legislatures and governments</li>
                  <li><strong>Prevents Autocracy</strong> — No monarchies, dictatorships, or hereditary rule</li>
                  <li><strong>Protects Popular Sovereignty</strong> — Government derives from the people</li>
                  <li>Courts generally treat this as "political question" for Congress to enforce</li>
                  <li>Never successfully invoked to invalidate state government structure</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">🛡️ Protection Against Invasion</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li><strong>Mandatory Federal Protection</strong> — U.S. must defend states from foreign invasion</li>
                  <li>No state request required; federal duty is automatic</li>
                  <li>Basis for federal military defense of all states</li>
                  <li>Reinforces national sovereignty and collective defense</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">🚨 Protection Against Domestic Violence</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li><strong>State Must Request Help</strong> — Governor or legislature must ask for federal assistance</li>
                  <li>Covers rebellions, riots, insurrections, civil disorder</li>
                  <li>President can send federal troops when requested</li>
                  <li>Respects state sovereignty (requires state request)</li>
                  <li>Historical examples: Whiskey Rebellion (1794), Civil War Reconstruction, civil rights era</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">🚫 Limits on Federal Intervention</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Domestic Violence Requires Request</strong> — Cannot intervene without state invitation (generally)</li>
              <li><strong>Must Respect State Autonomy</strong> — Cannot impose specific governmental structures</li>
              <li><strong>Political Question</strong> — Courts won't enforce republican government guarantee</li>
              <li>Exception: Federal government can act to enforce federal laws or constitutional rights</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">❌ What It Does NOT Say</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Does NOT define "republican form of government" precisely</li>
              <li>Does NOT give courts power to enforce this clause</li>
              <li>Does NOT require specific electoral systems (e.g., direct vs. indirect elections)</li>
              <li>Does NOT prohibit direct democracy features (initiatives, referenda)</li>
              <li>Does NOT specify how federal government determines what's "republican"</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚖️ Key Supreme Court Cases</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 text-sm">
              <li><strong>Luther v. Borden (1849)</strong> — Republican government guarantee is political question for Congress, not courts</li>
              <li><strong>Pacific States Telephone & Telegraph Co. v. Oregon (1912)</strong> — Challenge to state initiative/referendum process is political question</li>
              <li><strong>Baker v. Carr (1962)</strong> — Some questions (like reapportionment) are justiciable under Equal Protection, not Guarantee Clause</li>
              <li><strong>New York v. United States (1992)</strong> — Federal government cannot commandeer state legislatures</li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
            <h5 className="font-semibold text-gray-900 mb-2">What Is "Republican" Government?</h5>
            <p className="text-sm text-gray-700 mb-2">
              "Republican" means representative government, not the Republican Party. Essential features include:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 ml-2 space-y-1">
              <li>Representative, not direct democracy (though states can add direct democracy features)</li>
              <li>Popular sovereignty (power derives from the people)</li>
              <li>No hereditary offices or monarchy</li>
              <li>Elected legislators and executive officials</li>
              <li>Rule of law, not arbitrary rule</li>
            </ul>
            <p className="text-sm text-gray-700 mt-2">
              Beyond these basics, states have broad discretion in structuring their governments.
            </p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
            <h5 className="font-semibold text-gray-900 mb-2">Political Question Doctrine</h5>
            <p className="text-sm text-gray-700">
              Courts have consistently held that the Guarantee Clause presents a "political question" for the political 
              branches (Congress and President) to resolve, not the judiciary. This means courts won't invalidate state 
              governments or laws based on the Guarantee Clause. Instead, challenges to state structures are brought 
              under the 14th Amendment's Equal Protection Clause, which courts will enforce.
            </p>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 mt-8">
          <h3 className="text-2xl font-bold mb-4">Article IV Summary</h3>
          <p className="text-lg leading-relaxed mb-4">
            Article IV binds the states together into one nation while respecting their individual sovereignty. Through 
            Full Faith and Credit, states must recognize each other's laws and judgments. Through Privileges and Immunities, 
            citizens carry fundamental rights across state lines. Through extradition, states cooperate in criminal justice.
          </p>
          <p className="leading-relaxed mb-4">
            Article IV gives Congress power to admit new states on equal footing and manage federal territories and 
            property. The federal government guarantees every state a republican form of government and protects states 
            from invasion and (upon request) domestic violence.
          </p>
          <p className="leading-relaxed">
            Together, these provisions create <strong>federalism in action</strong> — states working together as one Union 
            while maintaining their distinct identities and powers, all under the umbrella of constitutional government.
          </p>
        </div>
      </div>
    </div>
  );
}
