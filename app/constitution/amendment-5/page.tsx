import Link from 'next/link';

export default function Amendment5Page() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-[#C41E3A] to-[#9B1829] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/constitution" className="text-gray-200 hover:text-white mb-4 inline-block">
            ← Back to Constitution
          </Link>
          <div className="text-6xl font-bold mb-4">V</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Fifth Amendment
          </h1>
          <div className="text-gray-200 text-lg">
            <p>Passed by Congress: September 25, 1789</p>
            <p>Ratified: December 15, 1791</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-lg shadow-lg border-l-4 border-[#C41E3A] mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[#0F2C47]">Text</h2>
            <p className="text-lg text-gray-800 italic leading-relaxed">
              "No person shall be held to answer for a capital, or otherwise infamous crime, unless on a presentment 
              or indictment of a Grand Jury, except in cases arising in the land or naval forces, or in the Militia, 
              when in actual service in time of War or public danger; nor shall any person be subject for the same 
              offence to be twice put in jeopardy of life or limb; nor shall be compelled in any criminal case to be 
              a witness against himself, nor be deprived of life, liberty, or property, without due process of law; 
              nor shall private property be taken for public use, without just compensation."
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#1A3A5C]">
            <h2 className="text-2xl font-bold mb-4 text-[#0F2C47]">Plain English</h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              Serious federal charges need a grand jury. You can't be tried twice for the same offense, forced to 
              testify against yourself, or punished without due process. If the government takes your property for 
              public use, it must pay you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
