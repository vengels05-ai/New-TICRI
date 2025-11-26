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
          <h1 className="text-4xl md:text-5xl font-bold">
            Twelfth Amendment
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-lg border-l-4 border-[#1A3A5C] mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[#0F2C47]">Text</h2>
            <p className="text-lg text-gray-800 italic leading-relaxed">
              Electors meet in their states and vote by ballot for President and Vice-President, naming persons for each office; 
              they make separate lists signed and certified to the President of the Senate. The House chooses the President from 
              the top three (one vote per state) if no majority; the Senate chooses the Vice-President from the top two if no 
              majority. No person constitutionally ineligible to be President shall be eligible to that of Vice-President.
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
