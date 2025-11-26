import Link from 'next/link';

export default function HomePage() {
  const sections = [
    {
      title: 'The Constitution',
      description: 'Read the Preamble, Articles, and all 27 Amendments in plain English.',
      icon: '📜',
      href: '/constitution',
      color: 'from-blue-50 to-blue-100 border-[#1A3A5C]'
    },
    {
      title: 'Your Rights',
      description: 'Individual liberties and constitutional protections explained simply.',
      icon: '⚖️',
      href: '/rights',
      color: 'from-red-50 to-red-100 border-[#C41E3A]'
    },
    {
      title: 'Acts of Congress',
      description: 'Major federal legislation that shaped rights, powers, and policy.',
      icon: '📋',
      href: '/acts',
      color: 'from-indigo-50 to-indigo-100 border-indigo-600'
    },
    {
      title: 'Constitutional Framework',
      description: 'Literal interpretation of rights, powers, and checks & balances.',
      icon: '🏛️',
      href: '/framework',
      color: 'from-slate-50 to-slate-100 border-slate-700'
    },
    {
      title: 'Supreme Court Cases',
      description: 'Landmark decisions that shaped American law and society.',
      icon: '⚖️',
      href: '/cases',
      color: 'from-purple-50 to-purple-100 border-purple-600'
    },
    {
      title: 'Federalism',
      description: 'How power was supposed to be divided vs. how it works today.',
      icon: '🗳️',
      href: '/federalism',
      color: 'from-green-50 to-green-100 border-green-600'
    },
    {
      title: 'State Powers',
      description: 'What states can and can\'t do under the Constitution.',
      icon: '🏢',
      href: '/state-powers',
      color: 'from-orange-50 to-orange-100 border-orange-600'
    },
    {
      title: 'Federal Funding',
      description: 'How federal money works and its impact on state autonomy.',
      icon: '💰',
      href: '/federal-funding',
      color: 'from-yellow-50 to-yellow-100 border-yellow-600'
    },
    {
      title: 'Taxes',
      description: 'The evolution of federal taxation from 1900 to present day.',
      icon: '💸',
      href: '/taxes',
      color: 'from-emerald-50 to-emerald-100 border-emerald-600'
    },
    {
      title: 'Voting',
      description: 'The functional effect of a citizen\'s vote in our system.',
      icon: '🗳️',
      href: '/voting',
      color: 'from-indigo-50 to-indigo-100 border-indigo-600'
    },
    {
      title: 'Parties & Policy',
      description: 'Where America\'s two major political parties came from and how they changed.',
      icon: '🏛️',
      href: '/parties',
      color: 'from-purple-50 to-purple-100 border-purple-700'
    },
    {
      title: '535',
      description: 'How Congress works: the House, Senate, 17th Amendment, filibuster, and sub-committees.',
      icon: '🏛️',
      href: '/535',
      color: 'from-slate-50 to-slate-100 border-slate-700'
    },
    {
      title: 'Truth & Law',
      description: 'Legal standards and truth-finding in the American justice system.',
      icon: '⚡',
      href: '/truth-and-law',
      color: 'from-pink-50 to-pink-100 border-pink-600'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0F2C47] via-[#1A3A5C] to-[#C41E3A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The Informed Constitutional Republic Initiative
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Plain-English explainers of the Constitution, rights, and government structure
            </p>
            <p className="text-lg max-w-3xl mx-auto text-gray-200">
              Understand how America's government was designed to work, what your rights actually mean,
              and how power is supposed to be divided—so you can focus your energy on the real systems
              and decision-makers shaping your life.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0F2C47]">
            Our Mission
          </h2>
          <p className="text-xl text-gray-800 leading-relaxed">
            To explain the Constitution, rights, and government structure in plain English — 
            so Americans can focus their energy on the real decision-makers and systems shaping 
            their lives, instead of fighting one another.
          </p>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#0F2C47]">
            Explore Topics
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sections.map((section, index) => (
              <Link
                key={index}
                href={section.href}
                className={`bg-gradient-to-br ${section.color} p-8 rounded-lg shadow-lg border-t-4 hover:shadow-xl transition-all transform hover:-translate-y-1`}
              >
                <div className="text-5xl mb-4">{section.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-[#0F2C47]">
                  {section.title}
                </h3>
                <p className="text-gray-800">
                  {section.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What We Break Down */}
      <section className="py-16 bg-gradient-to-r from-[#0F2C47] to-[#1A3A5C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What We Break Down
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#DC2F47]">The Constitution & Amendments</h3>
              <p className="text-gray-200">America's founding document and its evolution through 27 amendments.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#DC2F47]">Citizens' Rights</h3>
              <p className="text-gray-200">Individual liberties and constitutional protections explained simply.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#DC2F47]">Landmark Supreme Court Cases</h3>
              <p className="text-gray-200">Decisions that shaped American law and society.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#DC2F47]">Federalism</h3>
              <p className="text-gray-200">How Federalism was supposed to work vs. how it works today.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#DC2F47]">State Powers & Federal Overreach</h3>
              <p className="text-gray-200">What states can do and where federal power has expanded.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#DC2F47]">The Role of Federal Funding</h3>
              <p className="text-gray-200">How federal money works and its impact on state autonomy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0F2C47]">
            Start Learning
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Understanding your government starts with understanding the Constitution.
          </p>
          <Link
            href="/constitution"
            className="inline-block bg-[#C41E3A] hover:bg-[#9B1829] text-white px-10 py-4 rounded-lg text-xl font-bold transition-colors shadow-lg"
          >
            Read the Constitution
          </Link>
        </div>
      </section>
    </div>
  );
}
