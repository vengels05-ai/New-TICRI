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
            <p className="text-lg text-gray-800 italic leading-relaxed">
              Moves Presidential and Vice-Presidential terms to January 20, and Congressional terms to January 3; 
              provides rules for when a President-elect dies or fails to qualify; addresses "lame duck" sessions.
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
