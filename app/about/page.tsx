export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-[#0F2C47] to-[#1A3A5C] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About TICRI
          </h1>
          <p className="text-xl text-gray-200">
            Why this initiative exists
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-800 leading-relaxed mb-8">
              Too often, political conversations in America end in frustration, division, or misplaced blame.
            </p>

            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              I started <strong>The Informed Constitutional Republic Initiative</strong> because too many Americans 
              are angry at each other instead of the decision-makers.
            </p>

            <h2 className="text-3xl font-bold text-[#0F2C47] mb-6 mt-12">
              This site explains:
            </h2>

            <ul className="space-y-4 mb-12">
              <li className="flex items-start">
                <span className="text-[#C41E3A] text-2xl mr-3">•</span>
                <span className="text-lg text-gray-800">Your rights, in plain language.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#C41E3A] text-2xl mr-3">•</span>
                <span className="text-lg text-gray-800">Supreme Court cases, without legal jargon.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#C41E3A] text-2xl mr-3">•</span>
                <span className="text-lg text-gray-800">How federalism is supposed to work.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#C41E3A] text-2xl mr-3">•</span>
                <span className="text-lg text-gray-800">How federal funding ties states' hands.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#C41E3A] text-2xl mr-3">•</span>
                <span className="text-lg text-gray-800">
                  Case law and legislation that show how political parties and Congress have often acted 
                  against the people's interest.
                </span>
              </li>
            </ul>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-lg border-l-4 border-[#1A3A5C] mb-8">
              <h3 className="text-2xl font-bold text-[#0F2C47] mb-4">
                The Goal
              </h3>
              <p className="text-lg text-gray-800 leading-relaxed">
                Shift frustration away from neighbors and toward the systems and leaders making the decisions.
              </p>
            </div>

            <p className="text-xl text-gray-800 font-semibold text-center">
              Knowledge is power — and informed citizens make a stronger republic.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
