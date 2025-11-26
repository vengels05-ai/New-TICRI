import Link from 'next/link';

export default function Amendment13Page() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-[#1A3A5C] to-[#0F2C47] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/constitution" className="text-gray-200 hover:text-white mb-4 inline-block">
            ← Back to Constitution
          </Link>
          <div className="text-6xl font-bold mb-4">XIII</div>
          <h1 className="text-4xl md:text-5xl font-bold">
            Thirteenth Amendment
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-lg border-l-4 border-[#1A3A5C] mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[#0F2C47]">Text</h2>
            <p className="text-lg text-gray-800 italic leading-relaxed mb-4">
              <strong>Section 1.</strong> "Neither slavery nor involuntary servitude, except as a punishment for crime 
              whereof the party shall have been duly convicted, shall exist within the United States, or any place 
              subject to their jurisdiction."
            </p>
            <p className="text-lg text-gray-800 italic leading-relaxed">
              <strong>Section 2.</strong> "Congress shall have power to enforce this article by appropriate legislation."
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#C41E3A]">
            <h2 className="text-2xl font-bold mb-4 text-[#0F2C47]">Plain English</h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              Abolishes slavery and allows Congress to enforce that ban.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
