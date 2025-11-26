import Link from 'next/link';

export default function Amendment8Page() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-[#C41E3A] to-[#9B1829] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/constitution" className="text-gray-200 hover:text-white mb-4 inline-block">
            ← Back to Constitution
          </Link>
          <div className="text-6xl font-bold mb-4">VIII</div>
          <h1 className="text-4xl md:text-5xl font-bold">
            Eighth Amendment
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-lg shadow-lg border-l-4 border-[#C41E3A] mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[#0F2C47]">Text</h2>
            <p className="text-lg text-gray-800 italic leading-relaxed">
              "Excessive bail shall not be required, nor excessive fines imposed, nor cruel and unusual punishments inflicted."
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#1A3A5C]">
            <h2 className="text-2xl font-bold mb-4 text-[#0F2C47]">Plain English</h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              Bail and fines can't be excessive, and punishments can't be cruel or unusual.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
