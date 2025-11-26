import Link from 'next/link';

export default function PreamblePage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-[#0F2C47] to-[#1A3A5C] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/constitution" className="text-gray-300 hover:text-white mb-4 inline-block">
            ← Back to Constitution
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Preamble
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-lg border-l-4 border-[#1A3A5C] mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[#0F2C47]">Text</h2>
            <p className="text-lg text-gray-800 italic leading-relaxed">
              "We the People of the United States, in Order to form a more perfect Union, establish Justice, 
              insure domestic Tranquility, provide for the common defence, promote the general Welfare, 
              and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish 
              this Constitution for the United States of America."
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#C41E3A]">
            <h2 className="text-2xl font-bold mb-4 text-[#0F2C47]">Plain English</h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              This is the mission statement of the Constitution. It explains <em>why</em> the document exists: 
              unity, justice, peace, defense, prosperity, and liberty.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
