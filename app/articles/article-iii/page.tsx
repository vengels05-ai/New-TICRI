import Link from 'next/link';

export default function Article3Page() {
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
            <span className="text-5xl">⚖️</span>
            <div>
              <h1 className="text-4xl font-bold mb-2">Article III</h1>
              <h2 className="text-2xl font-semibold">The Judicial Branch</h2>
            </div>
          </div>
          <p className="text-lg leading-relaxed">
            Article III establishes the federal judiciary, including the Supreme Court and lower federal courts, 
            defines the scope of judicial power, guarantees judicial independence, and sets rules for treason prosecutions.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Overview</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Article III creates the <strong>federal judiciary</strong> as the third co-equal branch of government. It 
            establishes the Supreme Court, authorizes Congress to create lower federal courts, protects judicial 
            independence through lifetime tenure and salary protection, defines federal court jurisdiction, and 
            establishes constitutional protections for treason trials.
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
              § 1 — Federal Courts & Judicial Independence
            </a>
            <a href="#section-2" className="text-blue-600 hover:text-blue-800 hover:underline">
              § 2 — Judicial Power & Jurisdiction
            </a>
            <a href="#section-3" className="text-blue-600 hover:text-blue-800 hover:underline">
              § 3 — Treason
            </a>
          </div>
        </div>

        {/* SECTION 1 */}
        <div id="section-1" className="bg-white rounded-lg shadow-md p-8 mb-6 scroll-mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Section 1 — Federal Courts & Judicial Independence
          </h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">📜 Exact Text</h4>
            <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
              "The judicial Power of the United States, shall be vested in one supreme Court, and in such inferior Courts 
              as the Congress may from time to time ordain and establish. The Judges, both of the supreme and inferior 
              Courts, shall hold their Offices during good Behaviour, and shall, at stated Times, receive for their 
              Services, a Compensation, which shall not be diminished during their Continuance in Office."
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">💭 Plain English</h4>
            <p className="text-gray-700">
              Federal judicial power belongs to the Supreme Court and whatever lower federal courts Congress chooses to 
              create. Federal judges serve for life (during "good behavior") and their salaries cannot be reduced while 
              they serve. These protections ensure judicial independence from political pressure.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚡ Government Powers Created</h4>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">🏛️ Establishment of Federal Courts</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li><strong>Supreme Court</strong> — Constitution directly creates Supreme Court</li>
                  <li><strong>Inferior Courts</strong> — Congress authorized to create lower federal courts</li>
                  <li>Congress has discretion over structure and number of lower courts</li>
                  <li>Congress created: District Courts, Circuit Courts of Appeals, specialized courts</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">🛡️ Judicial Independence Protections</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li><strong>Lifetime Tenure</strong> — Judges serve "during good Behaviour" (life appointment)</li>
                  <li><strong>Salary Protection</strong> — Compensation cannot be diminished during service</li>
                  <li>Can only be removed through impeachment</li>
                  <li>Insulates judges from political pressure and retaliation</li>
                  <li>Ensures independence from executive and legislative branches</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">⚖️ Judicial Power</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li>Power to decide cases and controversies</li>
                  <li>Power of judicial review (interpret Constitution and laws)</li>
                  <li>Final authority on constitutional meaning</li>
                  <li>Apply law to specific disputes between parties</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">🚫 Government Restrictions</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Cannot Reduce Judicial Salaries</strong> — Protects against financial intimidation</li>
              <li><strong>Cannot Remove Judges Except by Impeachment</strong> — Life tenure protects independence</li>
              <li><strong>Congress May Create Lower Courts</strong> — Constitution creates the Supreme Court and lets Congress decide whether to establish inferior federal courts</li>
              <li><strong>Judges Hold Office During Good Behaviour</strong> — Life tenure protects independence unless a judge is removed through impeachment</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">❌ What It Does NOT Say</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Does NOT specify number of Supreme Court justices (currently 9 by statute)</li>
              <li>Does NOT explicitly grant "judicial review" power (established in <em>Marbury v. Madison</em>)</li>
              <li>Does NOT require lower federal courts (Congress could theoretically abolish them)</li>
              <li>Does NOT define "good Behaviour" (judges rarely impeached)</li>
              <li>Does NOT prevent salary increases (only prohibits decreases)</li>
              <li>Does NOT allow mandatory retirement age</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚖️ Key Supreme Court Cases</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 text-sm">
              <li><strong>Marbury v. Madison (1803)</strong> — Established judicial review; courts can declare laws unconstitutional</li>
              <li><strong>United States v. Will (1980)</strong> — Salary protection prevents reducing judges' real compensation</li>
              <li><strong>Evans v. Gore (1920)</strong> — Once limited taxes on judicial salaries, but later doctrine permits generally applicable, nondiscriminatory income taxes</li>
              <li><strong>Northern Pipeline Construction Co. v. Marathon Pipe Line Co. (1982)</strong> — Limits on non-Article III courts handling core judicial functions</li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
            <h5 className="font-semibold text-gray-900 mb-2">Why Judicial Independence Matters</h5>
            <p className="text-sm text-gray-700">
              Lifetime tenure and salary protection ensure judges can rule based on law and Constitution without fear of 
              political retaliation. This independence is essential for protecting minority rights, checking majority 
              tyranny, and maintaining rule of law. Judges need not fear losing their jobs or pay for unpopular but 
              legally correct decisions.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div id="section-2" className="bg-white rounded-lg shadow-md p-8 mb-6 scroll-mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Section 2 — Judicial Power & Jurisdiction
          </h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">📜 Exact Text (Excerpts)</h4>
            <div className="space-y-3">
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                "The judicial Power shall extend to all Cases, in Law and Equity, arising under this Constitution, the 
                Laws of the United States, and Treaties made, or which shall be made, under their Authority;—to all Cases 
                affecting Ambassadors, other public Ministers and Consuls;—to all Cases of admiralty and maritime 
                Jurisdiction;—to Controversies to which the United States shall be a Party;—to Controversies between two 
                or more States;—between a State and Citizens of another State;—between Citizens of different States;—
                between Citizens of the same State claiming Lands under Grants of different States, and between a State, 
                or the Citizens thereof, and foreign States, Citizens or Subjects."
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                "In all Cases affecting Ambassadors, other public Ministers and Consuls, and those in which a State shall 
                be Party, the supreme Court shall have original Jurisdiction. In all the other Cases before mentioned, 
                the supreme Court shall have appellate Jurisdiction, both as to Law and Fact, with such Exceptions, and 
                under such Regulations as the Congress shall make."
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                "The Trial of all Crimes, except in Cases of Impeachment, shall be by Jury; and such Trial shall be held 
                in the State where the said Crimes shall have been committed; but when not committed within any State, 
                the Trial shall be at such Place or Places as the Congress may by Law have directed."
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">💭 Plain English</h4>
            <p className="text-gray-700">
              Federal courts can hear cases involving the Constitution, federal laws, treaties, ambassadors, maritime law, 
              the United States as a party, disputes between states, and diversity cases (citizens of different states). 
              The Supreme Court has original jurisdiction in cases involving states or ambassadors; all other cases come 
              on appeal. Criminal trials must be by jury in the state where the crime occurred.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚡ Federal Court Jurisdiction</h4>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">📋 Subject Matter Jurisdiction (Type of Case)</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li><strong>Federal Question</strong> — Cases arising under Constitution, federal laws, or treaties</li>
                  <li><strong>Admiralty/Maritime</strong> — Cases involving ships, shipping, and navigable waters</li>
                  <li><strong>Ambassadors & Diplomats</strong> — Cases affecting foreign diplomats</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">👥 Party-Based Jurisdiction (Who's Involved)</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li><strong>United States as Party</strong> — Federal government is plaintiff or defendant</li>
                  <li><strong>State vs. State</strong> — Disputes between states</li>
                  <li><strong>Diversity Jurisdiction</strong> — Citizens of different states (modified by 11th Amendment)</li>
                  <li><strong>State vs. Citizens of Another State</strong> — Limited by 11th Amendment</li>
                  <li><strong>Foreign Nations/Citizens</strong> — Involving foreign governments or citizens</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">🏛️ Supreme Court Jurisdiction</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li><strong>Original Jurisdiction</strong> — Cases involving states or ambassadors (Supreme Court is trial court)</li>
                  <li><strong>Appellate Jurisdiction</strong> — All other cases come on appeal from lower courts</li>
                  <li>Congress can make "exceptions and regulations" to appellate jurisdiction</li>
                  <li>Most cases reach Supreme Court by certiorari (discretionary review)</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">⚖️ Trial Rights</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li><strong>Jury Trial Guaranteed</strong> — For all federal crimes (except impeachment)</li>
                  <li><strong>Venue</strong> — Trial must be in state where crime committed</li>
                  <li>Protects against arbitrary venue selection</li>
                  <li>Reinforced by 6th Amendment (jury from state and district where crime committed)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">🚫 Limits on Federal Jurisdiction</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Case or Controversy Requirement</strong> — Courts cannot issue advisory opinions</li>
              <li><strong>Standing Required</strong> — Plaintiff must have actual injury; no abstract disputes</li>
              <li><strong>Ripeness</strong> — Case must be ready for adjudication (not too early)</li>
              <li><strong>Mootness</strong> — Case must present live controversy (not already resolved)</li>
              <li><strong>Political Question Doctrine</strong> — Courts avoid purely political questions</li>
              <li><strong>11th Amendment</strong> — States cannot be sued by citizens of other states without consent</li>
              <li><strong>Sovereign Immunity</strong> — Cannot sue federal government without its consent</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">❌ What It Does NOT Say</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Does NOT grant federal courts general jurisdiction over all disputes</li>
              <li>Does NOT eliminate state courts (most cases still heard in state court)</li>
              <li>Does NOT define "arising under" federal law precisely</li>
              <li>Does NOT specify how many justices on Supreme Court</li>
              <li>Does NOT explicitly create "judicial review" (established by precedent)</li>
              <li>Does NOT guarantee Supreme Court review of every case</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚖️ Key Supreme Court Cases</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 text-sm">
              <li><strong>Marbury v. Madison (1803)</strong> — Established judicial review and limits on Supreme Court original jurisdiction</li>
              <li><strong>Martin v. Hunter's Lessee (1816)</strong> — Supreme Court can review state court decisions on federal questions</li>
              <li><strong>Cohens v. Virginia (1821)</strong> — Supreme Court has jurisdiction over state criminal cases involving federal issues</li>
              <li><strong>Ex parte McCardle (1869)</strong> — Congress can limit Supreme Court appellate jurisdiction</li>
              <li><strong>Lujan v. Defenders of Wildlife (1992)</strong> — Standing requires concrete injury, causation, and redressability</li>
              <li><strong>Baker v. Carr (1962)</strong> — Political question doctrine defined; some issues are justiciable</li>
              <li><strong>Alden v. Maine (1999)</strong> — State sovereign immunity extends to state courts</li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
            <h5 className="font-semibold text-gray-900 mb-2">The Case or Controversy Requirement</h5>
            <p className="text-sm text-gray-700 mb-2">
              Federal courts can only decide actual disputes between adverse parties with concrete stakes. This means:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 ml-2 space-y-1">
              <li><strong>No advisory opinions</strong> — Can't just ask court's view on hypothetical question</li>
              <li><strong>Standing required</strong> — Plaintiff must have suffered actual injury</li>
              <li><strong>Ripeness</strong> — Dispute must be ready for decision (threat must be real and imminent)</li>
              <li><strong>Not moot</strong> — Must still be a live controversy when court decides</li>
            </ul>
            <p className="text-sm text-gray-700 mt-2">
              This ensures courts resolve real disputes, not abstract legal questions, maintaining separation of powers.
            </p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
            <p className="text-sm text-gray-700">
              <strong>11th Amendment:</strong> Modified Section 2 to prevent states from being sued by citizens of other 
              states or foreign nations without their consent. States retain sovereign immunity from most federal lawsuits.
            </p>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="section-3" className="bg-white rounded-lg shadow-md p-8 mb-6 scroll-mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-red-600 pb-2">
            Section 3 — Treason
          </h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-red-600 mb-2">📜 Exact Text</h4>
            <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
              "Treason against the United States, shall consist only in levying War against them, or in adhering to their 
              Enemies, giving them Aid and Comfort. No Person shall be convicted of Treason unless on the Testimony of two 
              Witnesses to the same overt Act, or on Confession in open Court. The Congress shall have Power to declare 
              the Punishment of Treason, but no Attainder of Treason shall work Corruption of Blood, or Forfeiture except 
              during the Life of the Person attainted."
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-red-600 mb-2">💭 Plain English</h4>
            <p className="text-gray-700">
              Treason is narrowly defined as either waging war against the United States or giving aid and comfort to its 
              enemies. To convict someone of treason requires either two witnesses to the same overt act or a confession 
              in open court. Congress sets the punishment, but treason convictions cannot result in "corruption of blood" 
              (punishing the traitor's family) or forfeiture of property beyond the convicted person's lifetime.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-red-600 mb-2">⚡ What Constitutes Treason</h4>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">⚔️ Two Acts That Constitute Treason</h5>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm ml-2">
                  <li><strong>Levying War</strong> — Actually engaging in war against the United States</li>
                  <li><strong>Adhering to Enemies</strong> — Giving aid and comfort to enemies of the United States</li>
                  <li><strong>ONLY these two acts</strong> — Constitution says treason "shall consist only" of these</li>
                  <li>Prevents expansive definition that could target political dissent</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">🔍 High Burden of Proof</h5>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm ml-2">
                  <li><strong>Two Witnesses Required</strong> — Two witnesses must testify to the same overt act</li>
                  <li><strong>OR Confession in Open Court</strong> — Defendant must confess publicly in court</li>
                  <li>Protects against false accusations and show trials</li>
                  <li>Highest evidentiary standard in Constitution</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold text-gray-900 mb-2">⚖️ Punishment Limits</h5>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm ml-2">
                  <li><strong>Congress Sets Punishment</strong> — Including death penalty (if authorized by statute)</li>
                  <li><strong>No Corruption of Blood</strong> — Cannot punish traitor's family or descendants</li>
                  <li><strong>No Perpetual Forfeiture</strong> — Property forfeiture limited to convicted person's life</li>
                  <li>Prevents collective punishment and generational penalties</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-red-600 mb-2">🚫 What Is NOT Treason</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Political Dissent</strong> — Criticizing government is NOT treason (protected by 1st Amendment)</li>
              <li><strong>Speech Alone</strong> — Words without overt acts generally not treason</li>
              <li><strong>Espionage</strong> — Spying is a separate crime, not necessarily treason</li>
              <li><strong>Sedition</strong> — Advocating government overthrow is separate offense (and constitutionally limited)</li>
              <li><strong>Conspiracy</strong> — Planning alone without overt act insufficient</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-red-600 mb-2">❌ What It Does NOT Say</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Does NOT define "enemies" precisely (courts have interpreted this)</li>
              <li>Does NOT specify punishment (Congress determines penalty)</li>
              <li>Does NOT prevent other national security crimes (espionage, sedition statutes exist)</li>
              <li>Does NOT require declaration of war to have "enemies"</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-red-600 mb-2">⚖️ Key Supreme Court Cases</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 text-sm">
              <li><strong>Ex parte Bollman (1807)</strong> — Treason requires actual assemblage of force to levy war</li>
              <li><strong>Cramer v. United States (1945)</strong> — Two witnesses must testify to same overt act; high burden of proof required</li>
              <li><strong>Haupt v. United States (1947)</strong> — Aid to enemy must be concrete and specific, not merely sympathetic</li>
              <li><strong>Kawakita v. United States (1952)</strong> — U.S. citizen can commit treason even while abroad</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-red-600 mb-2">📊 Treason Prosecutions in U.S. History</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 text-sm">
              <li><strong>Very Rare</strong> — Fewer than 40 federal treason prosecutions in U.S. history</li>
              <li><strong>Burr Trial (1807)</strong> — Aaron Burr acquitted; established narrow interpretation</li>
              <li><strong>Civil War Era</strong> — Few Confederate leaders prosecuted (mostly pardoned)</li>
              <li><strong>World War II</strong> — Several prosecutions for aiding Axis powers</li>
              <li><strong>Post-9/11</strong> — No treason prosecutions; terrorism charges used instead</li>
              <li>High constitutional bar makes treason charges unusual</li>
            </ul>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-4 mt-4">
            <h5 className="font-semibold text-gray-900 mb-2">Why Such a Narrow Definition?</h5>
            <p className="text-sm text-gray-700 mb-2">
              The Framers intentionally defined treason narrowly and set a high burden of proof because in England, 
              treason was broadly defined and used to silence political opponents. The Constitution's narrow definition 
              protects:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 ml-2 space-y-1">
              <li><strong>Political dissent</strong> — Can't charge opponents with treason for disagreement</li>
              <li><strong>Free speech</strong> — Words alone generally insufficient for treason</li>
              <li><strong>Fair trials</strong> — Two-witness requirement prevents false accusations</li>
              <li><strong>Individual accountability</strong> — No punishing families for one person's acts</li>
            </ul>
            <p className="text-sm text-gray-700 mt-2">
              This reflects the Founders' experience with arbitrary accusations of treason by the British Crown.
            </p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
            <p className="text-sm text-gray-700">
              <strong>Modern Approach:</strong> Because treason's constitutional definition is so narrow and requires such 
              high proof, federal prosecutors typically charge national security violations under other statutes like 
              espionage (18 U.S.C. § 793), providing aid to terrorists, or conspiracy. These have lower burdens of proof 
              and avoid constitutional treason requirements.
            </p>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 mt-8">
          <h3 className="text-2xl font-bold mb-4">Article III Summary</h3>
          <p className="text-lg leading-relaxed mb-4">
            Article III establishes an independent federal judiciary with the Supreme Court at its apex and lower courts 
            created by Congress. Judicial independence is protected through lifetime tenure and salary guarantees, ensuring 
            judges can decide cases based on law without political pressure.
          </p>
          <p className="leading-relaxed mb-4">
            Federal courts have jurisdiction over cases involving the Constitution, federal laws, treaties, and certain 
            party-based disputes. The "case or controversy" requirement limits courts to deciding actual disputes with 
            concrete stakes, not abstract legal questions.
          </p>
          <p className="leading-relaxed">
            The narrow constitutional definition of treason and high burden of proof protect political dissent and free 
            speech, preventing government from silencing opponents by falsely charging them with disloyalty. This reflects 
            the Founders' experience with arbitrary British accusations of treason.
          </p>
        </div>
      </div>
    </div>
  );
}
