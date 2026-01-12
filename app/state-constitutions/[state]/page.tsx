import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getStateBySlug, usStates } from '@/lib/usStates';
import { getStateConstitution, hasConstitutionData } from '@/lib/stateConstitutions';

export async function generateStaticParams() {
  return usStates.map((state) => ({
    state: state.slug,
  }));
}

export default function StateConstitutionPage({ params }: { params: { state: string } }) {
  const stateInfo = getStateBySlug(params.state);
  const constitution = getStateConstitution(params.state);
  const hasData = hasConstitutionData(params.state);

  if (!stateInfo) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0F2C47] to-[#1A3A5C] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/state-constitutions" className="text-gray-200 hover:text-white mb-4 inline-block">
            ← Back to State Constitutions
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="text-6xl font-bold">{stateInfo.abbreviation}</div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">
                {stateInfo.name}
              </h1>
              <p className="text-xl text-gray-200">State Constitution</p>
            </div>
          </div>
        </div>
      </section>

      {/* State Info Cards */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-lg p-6 border-l-4 border-[#1A3A5C]">
              <div className="text-sm text-gray-600 uppercase font-bold mb-2">Capital</div>
              <div className="text-2xl font-bold text-[#0F2C47]">{stateInfo.capital}</div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg shadow-lg p-6 border-l-4 border-[#C41E3A]">
              <div className="text-sm text-gray-600 uppercase font-bold mb-2">Admitted to Union</div>
              <div className="text-2xl font-bold text-[#0F2C47]">{stateInfo.ratificationDate}</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg shadow-lg p-6 border-l-4 border-emerald-600">
              <div className="text-sm text-gray-600 uppercase font-bold mb-2">Current Constitution</div>
              <div className="text-2xl font-bold text-[#0F2C47]">{stateInfo.constitutionYear}</div>
            </div>
          </div>

          {/* Constitution Content */}
          <div className="space-y-8">
            {/* Display full constitution text if available */}
            {hasData && constitution ? (
              <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#0F2C47]">
                <h2 className="text-3xl font-bold text-[#0F2C47] mb-6">Constitution Text</h2>
                
                {/* Preamble */}
                {constitution.preamble && (
                  <div className="mb-8 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                    <h3 className="text-2xl font-bold text-[#1A3A5C] mb-4">Preamble</h3>
                    <p className="text-gray-800 leading-relaxed italic text-lg">{constitution.preamble}</p>
                  </div>
                )}

                {/* Articles */}
                {constitution.articles && constitution.articles.map((article) => (
                  <div key={article.number} className="mb-12 bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="text-2xl font-bold text-[#0F2C47] mb-6 border-b-2 border-[#C41E3A] pb-2">
                      Article {article.number}: {article.title}
                    </h3>
                    
                    {/* Sections */}
                    {article.sections && article.sections.map((section) => (
                      <div key={section.number} className="mb-6 last:mb-0">
                        <h4 className="text-lg font-bold text-[#1A3A5C] mb-2">
                          Section {section.number}
                          {section.title && `: ${section.title}`}
                        </h4>
                        <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                          {section.text}
                        </p>
                      </div>
                    ))}
                  </div>
                ))}

                {/* Source Attribution */}
                <div className="mt-8 p-4 bg-gray-100 rounded-lg text-sm text-gray-600">
                  <p>
                    <strong>Source:</strong> {constitution.source}
                    {constitution.sourceUrl && (
                      <> | <a href={constitution.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        View Original
                      </a></>
                    )}
                  </p>
                  <p className="mt-1">
                    <strong>Last Updated:</strong> {constitution.lastUpdated}
                  </p>
                </div>
              </div>
            ) : (
              /* Primary Resource Link - only show if no local data */
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-400 rounded-lg shadow-lg p-8">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">📜</div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-[#0F2C47] mb-3">Read the Full Constitution</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Access the complete, current text of the {stateInfo.name} Constitution through the 
                      comprehensive 50 Constitutions database maintained by the State Democracy Research Initiative 
                      at the University of Wisconsin Law School.
                    </p>
                    <a 
                      href={`https://50constitutions.org/constitutions/${params.state}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#0F2C47] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#C41E3A] transition-colors shadow-md"
                    >
                      View {stateInfo.name} Constitution →
                    </a>
                    <p className="text-sm text-gray-600 mt-3">
                      Source: <a href="https://50constitutions.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">50constitutions.org</a>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Overview Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#1A3A5C]">
              <h2 className="text-3xl font-bold text-[#0F2C47] mb-4">Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                The {stateInfo.name} Constitution of {stateInfo.constitutionYear} serves as the fundamental law 
                of the state, establishing the framework for government and protecting the rights of its citizens.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#C41E3A]">
              <h2 className="text-3xl font-bold text-[#0F2C47] mb-4">History</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {stateInfo.name} was admitted to the Union on {stateInfo.ratificationDate}.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The current constitution was adopted in {stateInfo.constitutionYear}. State constitutions 
                are often amended more frequently than the federal Constitution, reflecting changing needs 
                and values of state residents.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-emerald-600">
              <h2 className="text-3xl font-bold text-[#0F2C47] mb-4">Structure of Government</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-4xl mb-3">⚖️</div>
                  <h3 className="text-xl font-bold text-[#1A3A5C] mb-2">Legislative</h3>
                  <p className="text-sm text-gray-600">State Legislature</p>
                </div>
                <div className="text-center p-6 bg-red-50 rounded-lg">
                  <div className="text-4xl mb-3">🏛️</div>
                  <h3 className="text-xl font-bold text-[#1A3A5C] mb-2">Executive</h3>
                  <p className="text-sm text-gray-600">Governor & Cabinet</p>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <div className="text-4xl mb-3">👨‍⚖️</div>
                  <h3 className="text-xl font-bold text-[#1A3A5C] mb-2">Judicial</h3>
                  <p className="text-sm text-gray-600">State Courts</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-purple-600">
              <h2 className="text-3xl font-bold text-[#0F2C47] mb-4">Bill of Rights</h2>
              <p className="text-gray-700 leading-relaxed">
                Like the U.S. Constitution, the {stateInfo.name} Constitution includes protections for individual 
                rights and liberties. State constitutions often provide broader protections than the federal 
                Constitution, serving as a &quot;floor&quot; rather than a &quot;ceiling&quot; for rights.
              </p>
            </div>

            {/* External Resources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#0F2C47] mb-4">Official Resources</h3>
              <div className="space-y-2">
                <p className="text-gray-700">
                  📄 <a 
                    href={`https://www.google.com/search?q=${encodeURIComponent(stateInfo.name + ' state constitution official text')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Search for official {stateInfo.name} Constitution
                  </a>
                </p>
                <p className="text-gray-700">
                  🏛️ <a 
                    href={`https://www.google.com/search?q=${encodeURIComponent(stateInfo.name + ' state government official website')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    {stateInfo.name} State Government Website
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
