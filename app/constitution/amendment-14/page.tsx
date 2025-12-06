import Link from 'next/link';

export default function Amendment14Page() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-[#1A3A5C] to-[#0F2C47] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/constitution" className="text-gray-200 hover:text-white mb-4 inline-block">
            ← Back to Constitution
          </Link>
          <div className="text-6xl font-bold mb-4">XIV</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Fourteenth Amendment
          </h1>
          <div className="text-gray-200 text-lg">
            <p>Passed by Congress: June 13, 1866</p>
            <p>Ratified: July 9, 1868</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-lg border-l-4 border-[#1A3A5C] mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[#0F2C47]">Text</h2>
            <p className="text-lg text-gray-800 italic leading-relaxed mb-4">
              <strong>Section 1.</strong> All persons born or naturalized in the U.S. are citizens; no state shall abridge 
              the privileges or immunities of U.S. citizens; nor deprive any person of life, liberty, or property without 
              due process of law; nor deny any person within its jurisdiction the equal protection of the laws.
            </p>
            <p className="text-lg text-gray-800 italic leading-relaxed mb-4">
              <strong>Section 2.</strong> (Apportionment rules).
            </p>
            <p className="text-lg text-gray-800 italic leading-relaxed mb-4">
              <strong>Section 3.</strong> (Bars certain former rebels from office unless Congress removes the disability).
            </p>
            <p className="text-lg text-gray-800 italic leading-relaxed mb-4">
              <strong>Section 4.</strong> (Public debt validity; no payment for rebellion or loss of slaves).
            </p>
            <p className="text-lg text-gray-800 italic leading-relaxed">
              <strong>Section 5.</strong> Congress may enforce this article by appropriate legislation.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#C41E3A]">
            <h2 className="text-2xl font-bold mb-4 text-[#0F2C47]">Plain English</h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              Makes people born or naturalized here citizens; requires states to provide due process and equal protection; 
              and lets Congress enforce these protections.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
