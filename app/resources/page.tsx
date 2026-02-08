import Link from 'next/link';

export default function ResourcesPage() {
  const resources = [
    {
      title: 'USAFacts.org',
      description: 'A nonprofit, neutral, government-sourced data reference.',
      url: 'https://www.usafacts.org',
      external: true,
    },
    {
      title: 'Project 535',
      description: 'Civic engagement and information about how Congress works.',
      url: 'https://www.535project.org',
      external: true,
    },
    {
      title: 'Constitution',
      description: 'Read the full text of the U.S. Constitution with all amendments.',
      url: '/constitution',
      external: false,
    },
    {
      title: 'Supreme Court Cases',
      description: 'Landmark decisions that shaped American law.',
      url: '/cases',
      external: false,
    },
    {
      title: 'Acts of Congress',
      description: 'Major federal legislation throughout American history.',
      url: '/acts',
      external: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0F2C47] via-[#1A3A5C] to-[#C41E3A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Resources
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl">
            Useful references, data sources, and related projects for understanding American government.
          </p>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {resources.map((resource, index) => (
            resource.external ? (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#C41E3A] hover:shadow-xl transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-[#0F2C47]">
                      {resource.title}
                    </h3>
                    <p className="text-gray-700 mb-2">
                      {resource.description}
                    </p>
                    <span className="text-sm text-[#C41E3A] hover:text-[#9B1829]">
                      Visit site →
                    </span>
                  </div>
                </div>
              </a>
            ) : (
              <Link
                key={index}
                href={resource.url}
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#C41E3A] hover:shadow-xl transition-all"
              >
                <h3 className="text-2xl font-bold mb-2 text-[#0F2C47]">
                  {resource.title}
                </h3>
                <p className="text-gray-700 mb-2">
                  {resource.description}
                </p>
                <span className="text-sm text-[#C41E3A] hover:text-[#9B1829]">
                  Learn more →
                </span>
              </Link>
            )
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-[#0F2C47]">
            About These Resources
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We link to high-quality, nonpartisan sources that provide factual information about 
            American government, law, and civic engagement. All external resources are carefully 
            selected for their accuracy, neutrality, and educational value.
          </p>
        </div>
      </div>
    </div>
  );
}
