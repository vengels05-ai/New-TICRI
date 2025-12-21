import Link from 'next/link';

export default function Amendment17Page() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-[#1A3A5C] to-[#0F2C47] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/constitution" className="text-gray-200 hover:text-white mb-4 inline-block">
            ← Back to Constitution
          </Link>
          <div className="text-6xl font-bold mb-4">XVII</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Seventeenth Amendment
          </h1>
          <div className="text-gray-200 text-lg">
            <p>Passed by Congress: May 13, 1912</p>
            <p>Ratified: April 8, 1913</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-lg border-l-4 border-[#1A3A5C] mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[#0F2C47]">Text</h2>
            <p className="text-lg text-gray-800 italic leading-relaxed mb-4">
              "The Senate of the United States shall be composed of two Senators from each State, elected by the people thereof, 
              for six years; and each Senator shall have one vote. The electors in each State shall have the qualifications 
              requisite for electors of the most numerous branch of the State legislatures."
            </p>
            <p className="text-lg text-gray-800 italic leading-relaxed">
              "When vacancies happen in the representation of any State in the Senate, the executive authority of such State shall 
              issue writs of election to fill such vacancies: Provided, That the legislature of any State may empower the executive 
              thereof to make temporary appointments until the people fill the vacancies by election as the legislature may direct."
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#C41E3A]">
            <h2 className="text-2xl font-bold mb-4 text-[#0F2C47]">Plain English</h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              People elect Senators directly; states can set temporary appointments and specials for vacancies.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
