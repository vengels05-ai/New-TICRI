import Link from 'next/link';

export default function CriminalTrialRightsPage() {
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
              <h1 className="text-4xl font-bold mb-2">Criminal Trial Rights</h1>
              <h2 className="text-2xl font-semibold">Fourth, Fifth, Sixth, & Eighth Amendments</h2>
            </div>
          </div>
          <p className="text-lg leading-relaxed">
            The Constitution provides extensive protections for people accused of crimes, including rights to counsel, 
            jury trial, confrontation of witnesses, protection against self-incrimination, and freedom from cruel and 
            unusual punishment.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Overview</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Criminal trial rights are among the most detailed constitutional protections. The Framers, having experienced 
            British colonial abuses, created extensive safeguards for the accused. These rights apply in federal and state 
            prosecutions and ensure fairness in the criminal justice system.
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
          
          <div className="space-y-4">
            <div>
              <p className="text-gray-700 font-semibold mb-2">Fifth Amendment (1791):</p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                "No person shall be held to answer for a capital, or otherwise infamous crime, unless on a presentment 
                or indictment of a Grand Jury... nor shall any person be subject for the same offence to be twice put 
                in jeopardy of life or limb; nor shall be compelled in any criminal case to be a witness against himself, 
                nor be deprived of life, liberty, or property, without due process of law..."
              </p>
            </div>

            <div>
              <p className="text-gray-700 font-semibold mb-2">Sixth Amendment (1791):</p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                "In all criminal prosecutions, the accused shall enjoy the right to a speedy and public trial, by an 
                impartial jury... to be informed of the nature and cause of the accusation; to be confronted with the 
                witnesses against him; to have compulsory process for obtaining witnesses in his favor, and to have the 
                Assistance of Counsel for his defence."
              </p>
            </div>

            <div>
              <p className="text-gray-700 font-semibold mb-2">Eighth Amendment (1791):</p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                "Excessive bail shall not be required, nor excessive fines imposed, nor cruel and unusual punishments 
                inflicted."
              </p>
            </div>
          </div>
        </div>

        {/* Plain English */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-red-600 pb-2">
            💭 Plain English Explanation
          </h3>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            If you're accused of a crime, you have extensive constitutional protections:
          </p>
          
          <ul className="space-y-2 text-gray-700 ml-4 mb-4">
            <li>• <strong>Right to remain silent:</strong> Cannot be forced to testify against yourself</li>
            <li>• <strong>Right to lawyer:</strong> Free attorney if you can't afford one</li>
            <li>• <strong>Right to jury trial:</strong> Jury of peers decides guilt in serious cases</li>
            <li>• <strong>Right to confront witnesses:</strong> Cross-examine people who testify against you</li>
            <li>• <strong>Protection from double jeopardy:</strong> Can't be tried twice for same crime</li>
            <li>• <strong>Speedy and public trial:</strong> Can't be held indefinitely without trial</li>
            <li>• <strong>Notice of charges:</strong> Must be told what you're accused of</li>
            <li>• <strong>No cruel punishment:</strong> Punishment must fit the crime</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
            <p className="text-gray-700">
              <strong>Important:</strong> These rights apply when you're formally accused of crime. Police encounters, 
              investigations, and civil proceedings have different (and often fewer) protections.
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
              <h4 className="font-bold text-gray-900 mb-2">✓ Right to Counsel (Sixth Amendment)</h4>
              <p className="text-gray-700">
                You have right to lawyer in all criminal prosecutions where jail time is possible. If you can't afford 
                lawyer, government must provide one free (Gideon v. Wainwright). Right attaches at "critical stages" 
                (arraignment, interrogation after charges, trial, sentencing, first appeal).
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Right Against Self-Incrimination (Fifth Amendment)</h4>
              <p className="text-gray-700">
                Cannot be compelled to testify against yourself. Can "plead the Fifth" and refuse to answer questions. 
                Prosecutors cannot comment on your silence at trial. Miranda warnings required for custodial interrogation. 
                Anything you say can be used against you (if Miranda warnings given).
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Right to Jury Trial (Sixth Amendment)</h4>
              <p className="text-gray-700">
                Jury trial required for "serious" offenses (crimes with potential sentence over 6 months). Jury must be 
                impartial and represent fair cross-section of community. Unanimous verdict required in federal cases and 
                now state felonies (Ramos v. Louisiana). Can waive jury and have bench trial.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Right to Confront Witnesses (Sixth Amendment)</h4>
              <p className="text-gray-700">
                Right to cross-examine witnesses who testify against you. Witnesses must generally testify in person at 
                trial. Limits use of hearsay evidence. Defendant must be present during testimony (with narrow exceptions 
                for disruptive defendants).
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Double Jeopardy Protection (Fifth Amendment)</h4>
              <p className="text-gray-700">
                Cannot be tried twice for same offense after acquittal or conviction. Jeopardy attaches when jury is sworn 
                (or first witness sworn in bench trial). Mistrials and appeals have complex rules. Separate sovereigns 
                (state and federal) can both prosecute for same conduct.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Speedy Trial (Sixth Amendment)</h4>
              <p className="text-gray-700">
                Right to trial without unnecessary delay. Balancing test considers length of delay, reason for delay, 
                defendant's assertion of right, and prejudice to defendant. Remedy for violation is dismissal with 
                prejudice (charges dropped permanently).
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-2">✓ Protection from Cruel and Unusual Punishment (Eighth Amendment)</h4>
              <p className="text-gray-700">
                Punishment must be proportionate to crime. Death penalty restricted to murder and must follow specific 
                procedures. Certain punishments categorically prohibited (torture, execution of juveniles, execution of 
                intellectually disabled). Prison conditions must meet basic human needs.
              </p>
            </div>
          </div>
        </div>

        {/* What is NOT Protected */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-red-600 pb-2">
            ❌ What is NOT Protected (Or Has Limitations)
          </h3>
          
          <div className="space-y-4">
            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Right to Counsel Before Charges</h4>
              <p className="text-gray-700">
                Sixth Amendment right to counsel doesn't attach until formal charges filed. Police can question you 
                without lawyer present before arrest (though Miranda requires warnings during custodial interrogation). 
                You have no right to lawyer during investigation before charges.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Petty Offenses Don't Get Jury Trial</h4>
              <p className="text-gray-700">
                Crimes with maximum penalty of 6 months or less don't get jury trial. Traffic violations, minor 
                misdemeanors, and petty offenses can be tried by judge alone. Jury trial only for "serious" offenses.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Grand Jury Right Not Incorporated</h4>
              <p className="text-gray-700">
                Fifth Amendment grand jury requirement applies only to federal prosecutions. States can charge felonies 
                by information (prosecutor's charging document) without grand jury. Only major constitutional right not 
                incorporated against states.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ No Right to Lawyer on Appeals Beyond First</h4>
              <p className="text-gray-700">
                Right to counsel for first appeal as of right, but no constitutional right to lawyer for discretionary 
                appeals or habeas corpus proceedings. After direct appeal, generally on your own unless you can afford 
                lawyer.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Dual Sovereignty & Double Jeopardy</h4>
              <p className="text-gray-700">
                State and federal governments are separate sovereigns. Can be prosecuted by both for same conduct without 
                violating Double Jeopardy Clause. Also applies to different states prosecuting same conduct.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
              <h4 className="font-bold text-gray-900 mb-2">✗ Death Penalty Not Categorically Unconstitutional</h4>
              <p className="text-gray-700">
                Death penalty is constitutional for murder if procedures provide individualized sentencing consideration 
                and limit arbitrariness. Cannot execute juveniles or intellectually disabled. Must allow mitigation 
                evidence. But death penalty itself doesn't violate Eighth Amendment.
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
              <h4 className="font-bold text-gray-900 text-lg mb-2">Gideon v. Wainwright (1963)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Right to Free Lawyer</strong> — States must provide free lawyer to defendants who can't afford 
                one in felony cases. Sixth Amendment right to counsel applies to states through Fourteenth Amendment. 
                Lawyers are necessity, not luxury, in criminal justice system.
              </p>
              <p className="text-gray-700 text-sm">
                Landmark case establishing public defender systems. Extended to any case where imprisonment is imposed 
                (Argersinger). Gideon wrote petition from prison; Supreme Court appointed Abe Fortas to represent him.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Miranda v. Arizona (1966)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Miranda Warnings Required</strong> — Before custodial interrogation, police must warn suspects 
                of right to remain silent and right to lawyer. Statements obtained without Miranda warnings generally 
                inadmissible. Famous "You have the right to remain silent..." warning.
              </p>
              <p className="text-gray-700 text-sm">
                Created prophylactic rule to protect Fifth Amendment right against self-incrimination. Warnings required 
                when person is in custody and interrogated. Can waive rights if done knowingly and voluntarily.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Crawford v. Washington (2004)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Confrontation Clause Strengthened</strong> — "Testimonial" out-of-court statements cannot be 
                used unless witness is unavailable and defendant had prior opportunity to cross-examine. Confrontation 
                Clause requires face-to-face cross-examination.
              </p>
              <p className="text-gray-700 text-sm">
                Major shift in confrontation law. Rejected prior "reliability" test. If statement is testimonial (made 
                for prosecution), must allow cross-examination. Forensic reports, 911 calls, witness statements all 
                implicated.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Batson v. Kentucky (1986)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Racial Discrimination in Jury Selection Prohibited</strong> — Prosecutors cannot use peremptory 
                challenges to strike jurors based on race. Violates Equal Protection. Defendant can challenge pattern 
                of strikes; prosecution must provide race-neutral explanation.
              </p>
              <p className="text-gray-700 text-sm">
                Extended to gender and civil cases. Created framework for challenging discriminatory jury selection. 
                Prosecutor must articulate neutral reason; judge determines if pretextual. Difficult to prove and enforce.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Ramos v. Louisiana (2020)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Unanimous Jury Required</strong> — Sixth Amendment requires unanimous jury verdict for state 
                felony convictions. Oregon and Louisiana laws allowing non-unanimous verdicts unconstitutional. All 12 
                jurors must agree to convict.
              </p>
              <p className="text-gray-700 text-sm">
                Overruled Apodaca v. Oregon (1972). Non-unanimous verdict rules had racist origins in Jim Crow era. 
                Unanimous verdict required by common law tradition and Sixth Amendment.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Gregg v. Georgia (1976)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Death Penalty Constitutional With Safeguards</strong> — Death penalty not per se cruel and 
                unusual, but requires guided discretion, individualized sentencing, and appellate review. States can 
                execute murderers if procedures limit arbitrariness.
              </p>
              <p className="text-gray-700 text-sm">
                Responded to Furman v. Georgia (1972) which struck down death penalty as arbitrary. New statutes with 
                aggravating/mitigating factors and guided discretion upheld. Death penalty remains controversial.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-gray-900 text-lg mb-2">Apprendi v. New Jersey (2000)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Jury Must Find Sentencing Facts</strong> — Any fact that increases sentence beyond statutory 
                maximum must be found by jury beyond reasonable doubt. Cannot have judge find facts to enhance sentence. 
                Sixth Amendment jury trial right.
              </p>
              <p className="text-gray-700 text-sm">
                Major sentencing case affecting federal guidelines and state sentencing schemes. Led to United States 
                v. Booker making federal guidelines advisory. Jury's role in fact-finding cannot be usurped by judge.
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
              <h4 className="font-bold text-gray-900 mb-3">What To Do If Arrested</h4>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <p className="text-gray-700 mb-2">
                  <strong>Your Rights:</strong>
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>You have right to remain silent — USE IT. Don't talk to police without lawyer.</li>
                  <li>Say: "I want my lawyer" or "I invoke my Fifth Amendment right to remain silent"</li>
                  <li>Police must stop questioning once you invoke rights (though they often try to continue)</li>
                  <li>Don't consent to searches — say "I do not consent"</li>
                  <li>Be polite but firm — don't physically resist but don't waive rights</li>
                  <li>Public defender will be appointed if you can't afford lawyer</li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Miranda Warnings</h4>
              <p className="text-gray-700 mb-2">
                Required before <em>custodial interrogation</em> (in custody + questioning). Warnings:
              </p>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                <li>Right to remain silent</li>
                <li>Anything you say can be used against you</li>
                <li>Right to lawyer</li>
                <li>Lawyer will be provided if you can't afford one</li>
              </ul>
              <p className="text-gray-700 mt-2">
                If police fail to give Miranda and then question you in custody, statements usually inadmissible. But 
                physical evidence found as result may still be used.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Plea Bargaining (Reality of Criminal Justice)</h4>
              <p className="text-gray-700">
                About 95% of convictions result from plea bargains, not trials. You have right to trial, but prosecutors 
                offer reduced charges/sentences for guilty plea. Right to counsel includes right to effective assistance 
                during plea negotiations. Can't be punished for exercising right to trial, but plea deals offer leniency.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Ineffective Assistance of Counsel</h4>
              <p className="text-gray-700">
                Sixth Amendment guarantees not just lawyer, but <em>effective</em> lawyer. To prove ineffective assistance: 
                (1) counsel's performance was deficient, and (2) deficiency prejudiced defense. Very hard to win. Must 
                show outcome would have been different with competent lawyer.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Juvenile Justice</h4>
              <p className="text-gray-700">
                Juveniles have many same rights as adults (counsel, confront witnesses, privilege against self-incrimination) 
                but not jury trial right in juvenile proceedings. States can try juveniles as adults for serious crimes. 
                Cannot execute juveniles or sentence to life without parole for non-homicide crimes.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Death Penalty Limits</h4>
              <p className="text-gray-700">
                Death penalty constitutional but heavily restricted:
              </p>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                <li>Only for murder (not rape or other non-homicide crimes)</li>
                <li>Cannot execute juveniles (under 18 at time of crime)</li>
                <li>Cannot execute intellectually disabled persons</li>
                <li>Must allow consideration of all mitigating evidence</li>
                <li>Automatic appellate review required</li>
                <li>Aggravating factors must be found to justify death</li>
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
              <span>Right to lawyer in all criminal cases with possible jail time — free if you can't afford one</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Right to remain silent and not incriminate yourself — Miranda warnings required for custodial interrogation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Right to jury trial for serious offenses (over 6 months) — must be unanimous verdict</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Right to confront and cross-examine witnesses who testify against you</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Protection from double jeopardy — can't be tried twice for same offense (with exceptions)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Protection from cruel and unusual punishment — death penalty allowed but heavily restricted</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
