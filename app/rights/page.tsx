import Link from 'next/link';

export default function RightsPage() {
  const rights = [
    { title: 'Freedom of Speech', slug: 'freedom-of-speech', icon: '🗣️' },
    { title: 'Freedom of the Press', slug: 'freedom-of-the-press', icon: '📰' },
    { title: 'Free Exercise of Religion', slug: 'free-exercise-of-religion', icon: '⛪' },
    { title: 'Establishment Clause', slug: 'establishment-clause', icon: '🏛️' },
    { title: 'Freedom of Assembly', slug: 'freedom-of-assembly', icon: '👥' },
    { title: 'Right to Petition', slug: 'right-to-petition', icon: '📝' },
    { title: 'Right to Bear Arms', slug: 'right-to-bear-arms', icon: '🔫' },
    { title: 'Search and Seizure', slug: 'search-and-seizure', icon: '🔍' },
    { title: 'Due Process (Procedural)', slug: 'due-process-procedural', icon: '⚖️' },
    { title: 'Due Process (Substantive)', slug: 'due-process-substantive', icon: '📜' },
    { title: 'Equal Protection', slug: 'equal-protection', icon: '🤝' },
    { title: 'Criminal Trial Rights', slug: 'criminal-trial-rights', icon: '⚡' },
  ];

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-[#C41E3A] to-[#9B1829] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your Rights
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Individual liberties and constitutional protections explained in plain English
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rights.map((right) => (
              <Link
                key={right.slug}
                href={`/rights/${right.slug}`}
                className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-lg shadow-lg border-l-4 border-[#C41E3A] hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-4">{right.icon}</div>
                <h3 className="text-xl font-bold text-[#0F2C47]">
                  {right.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
