#!/usr/bin/env python3
"""
Build complete Article I page with all TICRI source content.
This ensures 100% accuracy - no truncation of constitutional text.
"""

# Read current file to preserve Sections 1-2 and React structure
with open('/Users/vengels/ticri-nextjs/app/articles/article-1/page.tsx', 'r') as f:
    current_content = f.read()

# Find where Section 3 starts
section_3_start = current_content.find('        {/* SECTION 3 */')
# Keep everything before Section 3
header_and_sections_1_2 = current_content[:section_3_start]

# Now build complete sections 3-10 from scratch with full TICRI content
# This matches the source file structure exactly

complete_file = header_and_sections_1_2 + '''        {/* SECTION 3 */}
        <div id="section-3" className="bg-white rounded-lg shadow-md p-8 mb-6 scroll-mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Section 3 — The Senate
          </h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">📜 Exact Constitutional Text (Verbatim)</h4>
            <div className="space-y-3">
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                "The Senate of the United States shall be composed of two Senators from each State, chosen by the Legislature thereof, for six Years; and each Senator shall have one Vote."
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                "Immediately after they shall be assembled in Consequence of the first Election, they shall be divided as equally as may be into three Classes. The Seats of the Senators of the first Class shall be vacated at the Expiration of the second Year, of the second Class at the Expiration of the fourth Year, and of the third Class at the Expiration of the sixth Year, so that one third may be chosen every second Year; and if Vacancies happen by Resignation, or otherwise, during the Recess of the Legislature of any State, the Executive thereof may make temporary Appointments until the next Meeting of the Legislature, which shall then fill such Vacancies."
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                "No Person shall be a Senator who shall not have attained to the Age of thirty Years, and been nine Years a Citizen of the United States, and who shall not, when elected, be an Inhabitant of that State for which he shall be chosen."
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                "The Vice President of the United States shall be President of the Senate, but shall have no Vote, unless they be equally divided."
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                "The Senate shall chuse their other Officers, and also a President pro tempore, in the Absence of the Vice President, or when he shall exercise the Office of President of the United States."
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                "The Senate shall have the sole Power to try all Impeachments. When sitting for that Purpose, they shall be on Oath or Affirmation. When the President of the United States is tried, the Chief Justice shall preside: And no Person shall be convicted without the Concurrence of two thirds of the Members present."
              </p>
              <p className="text-gray-700 italic bg-gray-50 p-4 rounded">
                "Judgment in Cases of Impeachment shall not extend further than to removal from Office, and disqualification to hold and enjoy any Office of honor, Trust or Profit under the United States: but the Party convicted shall nevertheless be liable and subject to Indictment, Trial, Judgment and Punishment, according to Law."
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">💭 Plain English Translation</h4>
            <p className="text-gray-700">
              The Senate is made up of two Senators from each state. Originally, state legislatures chose Senators, but today (after the 17th Amendment) they are elected directly by the people. Senators serve six-year terms, and their terms are staggered so that one-third of the Senate is elected every two years.
            </p>
            <p className="text-gray-700 mt-3">
              Senators must be at least 30 years old, must have been U.S. citizens for nine years, and must live in the state they represent.
            </p>
            <p className="text-gray-700 mt-3">
              The Vice President presides over the Senate and can only vote to break a tie. The Senate chooses its other officers, including a temporary president when the Vice President is absent.
            </p>
            <p className="text-gray-700 mt-3">
              The Senate has the sole authority to conduct impeachment trials. Conviction requires a two-thirds vote. Punishment can only include removal from office and possibly disqualification from future office, but the person can still face regular criminal charges afterward.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚡ Government Powers Created</h4>
            <div className="space-y-3">
              <p className="text-gray-700 font-semibold">Creates and defines the U.S. Senate:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Two Senators per state, regardless of population</li>
                <li>Six-year terms</li>
                <li>Senators staggered into three classes for continuity</li>
              </ul>

              <p className="text-gray-700 font-semibold mt-4">Gives states a role in federal representation:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Originally: Senators were chosen by state legislatures</li>
                <li>After the 17th Amendment: Senators are elected directly by the people</li>
              </ul>

              <p className="text-gray-700 font-semibold mt-4">Fills Senate vacancies:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Originally: Governor could appoint until the legislature met</li>
                <li>After 17th Amendment: States may allow governors to appoint temporarily, but only if state law permits. Otherwise, vacancies require special elections</li>
              </ul>

              <p className="text-gray-700 font-semibold mt-4">Creates qualifications for Senators:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Age: 30+</li>
                <li>Citizenship: 9 years</li>
                <li>Residency: Must live in the represented state</li>
              </ul>

              <p className="text-gray-700 font-semibold mt-4">Defines Vice President's legislative role:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Presides over the Senate</li>
                <li>Votes only to break ties</li>
              </ul>

              <p className="text-gray-700 font-semibold mt-4">Gives Senate impeachment-trial authority:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Sole power to try impeachments</li>
                <li>Must be under oath</li>
                <li>Chief Justice presides when the President is on trial</li>
                <li>Conviction requires 2/3 vote</li>
                <li>Penalty is limited to removal and possible disqualification</li>
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">🚫 Government Restrictions / Limits</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Senate cannot change its size</strong> (always two per state)</li>
              <li><strong>Senate cannot remove Senators simply by vote</strong> (expulsion requires 2/3 under Section 5)</li>
              <li><strong>Senators MUST meet constitutional qualifications</strong> — Congress cannot change them</li>
              <li><strong>Senate cannot convict in impeachment with less than 2/3 vote</strong></li>
              <li><strong>Senate's punishment in impeachment is limited ONLY to:</strong> removal and optional disqualification</li>
              <li><strong>Senate cannot impose criminal penalties</strong> — only courts can</li>
              <li><strong>Vice President:</strong> Cannot vote unless the Senate is tied; Has no legislative veto power</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">❌ What It Does NOT Say</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Does not give the Senate power to impeach — only to try impeachments (House impeaches)</li>
              <li>Does not set term limits for Senators</li>
              <li>Does not allow states to reduce their number of Senators</li>
              <li>Does not allow Congress to change the equal representation of states in the Senate without state consent (protected by Article V)</li>
              <li>Does not define how political parties operate in the Senate</li>
              <li>Does not give the Vice President ordinary voting power</li>
              <li>Does not allow impeachment to include criminal penalties</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">🔄 Provisions No Longer in Legal Force (But Text Remains)</h4>
            <div className="bg-yellow-50 p-4 rounded">
              <p className="text-gray-700 font-semibold">Original Method of Selecting Senators</p>
              <p className="text-gray-700 mt-2 italic">
                The original text states: "chosen by the Legislature thereof"
              </p>
              <p className="text-gray-700 mt-2">
                This system was replaced by:
              </p>
              <p className="text-gray-700 mt-2 font-semibold">
                ✔ 17th Amendment (1913)
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mt-2">
                <li>Direct election of Senators by the people of each state</li>
                <li>States may authorize temporary gubernatorial appointments, but must fill vacancies by election</li>
              </ul>
              <p className="text-gray-700 mt-2 italic">
                *Nothing else in Section 3 has been legally superseded.*
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">⚖️ Key Supreme Court Interpretations</h4>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">Powell v. McCormack (1969)</h5>
                <p className="text-gray-700 mt-2">
                  Congress may not add qualifications beyond those listed in the Constitution.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">U.S. Term Limits v. Thornton (1995)</h5>
                <p className="text-gray-700 mt-2">
                  States cannot impose additional qualifications (like term limits) on Senators.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">Nixon v. United States (1993)</h5>
                <p className="text-gray-700 mt-2">
                  The Senate has exclusive authority to determine impeachment trial procedures; courts cannot intervene.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-bold text-gray-900">Burton v. United States (1906)</h5>
                <p className="text-gray-700 mt-2">
                  Senators, like all federal officers, are subject to federal criminal law and can be prosecuted independently of impeachment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sections 4-10 and closing... */}
      </div>
    </div>
  );
}
'''

print("Python script created - this approach is too manual.")
print("Better to directly edit the TypeScript file in sections.")
print(f"Header length: {len(header_and_sections_1_2)} characters")
