import Link from 'next/link';

export default function Amendment20Page() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-[#1A3A5C] to-[#0F2C47] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/constitution" className="text-gray-200 hover:text-white mb-4 inline-block">
            ← Back to Constitution
          </Link>
          <div className="text-6xl font-bold mb-4">XX</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Twentieth Amendment
          </h1>
          <div className="text-gray-200 text-lg">
            <p>Passed by Congress: March 2, 1932</p>
            <p>Ratified: January 23, 1933</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-lg border-l-4 border-[#1A3A5C] mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[#0F2C47]">Text</h2>
            <p className="text-lg text-gray-800 italic leading-relaxed mb-4">
              <strong>Section 1.</strong> "The terms of the President and the Vice President shall end at noon on the 20th day of 
              January, and the terms of Senators and Representatives at noon on the 3d day of January, of the years in which such 
              terms would have ended if this article had not been ratified; and the terms of their successors shall then begin."
            </p>
            <p className="text-lg text-gray-800 italic leading-relaxed mb-4">
              <strong>Section 2.</strong> "The Congress shall assemble at least once in every year, and such meeting shall begin at 
              noon on the 3d day of January, unless they shall by law appoint a different day."
            </p>
            <p className="text-lg text-gray-800 italic leading-relaxed mb-4">
              <strong>Section 3.</strong> "If, at the time fixed for the beginning of the term of the President, the President elect 
              shall have died, the Vice President elect shall become President. If a President shall not have been chosen before the 
              time fixed for the beginning of his term, or if the President elect shall have failed to qualify, then the Vice President 
              elect shall act as President until a President shall have qualified; and the Congress may by law provide for the case 
              wherein neither a President elect nor a Vice President shall have qualified, declaring who shall then act as President, 
              or the manner in which one who is to act shall be selected, and such person shall act accordingly until a President or 
              Vice President shall have qualified."
            </p>
            <p className="text-lg text-gray-800 italic leading-relaxed mb-4">
              <strong>Section 4.</strong> "The Congress may by law provide for the case of the death of any of the persons from whom 
              the House of Representatives may choose a President whenever the right of choice shall have devolved upon them, and for 
              the case of the death of any of the persons from whom the Senate may choose a Vice President whenever the right of choice 
              shall have devolved upon them."
            </p>
            <p className="text-lg text-gray-800 italic leading-relaxed mb-4">
              <strong>Section 5.</strong> "Sections 1 and 2 shall take effect on the 15th day of October following the ratification 
              of this article."
            </p>
            <p className="text-lg text-gray-800 italic leading-relaxed">
              <strong>Section 6.</strong> "This article shall be inoperative unless it shall have been ratified as an amendment to 
              the Constitution by the legislatures of three-fourths of the several States within seven years from the date of its 
              submission."
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#C41E3A]">
            <h2 className="text-2xl font-bold mb-4 text-[#0F2C47]">Plain English</h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              Changes start dates for terms and sets backup rules for President-elect problems.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
