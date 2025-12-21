import Link from 'next/link';

export default function Amendment12Page() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-[#1A3A5C] to-[#0F2C47] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/constitution" className="text-gray-200 hover:text-white mb-4 inline-block">
            ← Back to Constitution
          </Link>
          <div className="text-6xl font-bold mb-4">XII</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Twelfth Amendment
          </h1>
          <div className="text-gray-200 text-lg">
            <p>Passed by Congress: December 9, 1803</p>
            <p>Ratified: June 15, 1804</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-lg border-l-4 border-[#1A3A5C] mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[#0F2C47]">Text</h2>
            <p className="text-lg text-gray-800 italic leading-relaxed mb-4">
              "The Electors shall meet in their respective states and vote by ballot for President and Vice-President, one 
              of whom, at least, shall not be an inhabitant of the same state with themselves; they shall name in their ballots 
              the person voted for as President, and in distinct ballots the person voted for as Vice-President, and they shall 
              make distinct lists of all persons voted for as President, and of all persons voted for as Vice-President, and of 
              the number of votes for each, which lists they shall sign and certify, and transmit sealed to the seat of the 
              government of the United States, directed to the President of the Senate;—the President of the Senate shall, in 
              the presence of the Senate and House of Representatives, open all the certificates and the votes shall then be 
              counted;—The person having the greatest number of votes for President, shall be the President, if such number be 
              a majority of the whole number of Electors appointed; and if no person have such majority, then from the persons 
              having the highest numbers not exceeding three on the list of those voted for as President, the House of 
              Representatives shall choose immediately, by ballot, the President. But in choosing the President, the votes shall 
              be taken by states, the representation from each state having one vote; a quorum for this purpose shall consist of 
              a member or members from two-thirds of the states, and a majority of all the states shall be necessary to a choice. 
              And if the House of Representatives shall not choose a President whenever the right of choice shall devolve upon 
              them, before the fourth day of March next following, then the Vice-President shall act as President, as in case of 
              the death or other constitutional disability of the President. The person having the greatest number of votes as 
              Vice-President, shall be the Vice-President, if such number be a majority of the whole number of Electors appointed, 
              and if no person have a majority, then from the two highest numbers on the list, the Senate shall choose the 
              Vice-President; a quorum for the purpose shall consist of two-thirds of the whole number of Senators, and a majority 
              of the whole number shall be necessary to a choice. But no person constitutionally ineligible to the office of 
              President shall be eligible to that of Vice-President of the United States."
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#C41E3A]">
            <h2 className="text-2xl font-bold mb-4 text-[#0F2C47]">Plain English</h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              Creates separate Electoral College votes for President and VP, and sets tie/contingent election procedures.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
