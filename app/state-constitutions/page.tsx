import Link from 'next/link';
import UsStateMap from '@/components/UsStateMap';
import { usStates } from '@/lib/usStates';

export default function StateConstitutionsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0F2C47] to-[#1A3A5C] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-gray-200 hover:text-white mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            State Constitutions
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Each state has its own constitution that establishes the structure of state government and 
            protects individual rights. Click or tap on any state to explore its constitutional framework.
          </p>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0F2C47] mb-4">
              Select a State
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Click or tap on any state on the map below to view its constitution, history, and key provisions.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <UsStateMap />
          </div>

          <div className="text-center text-sm text-gray-500">
            <p>All 50 states have written constitutions that must comply with the U.S. Constitution&apos;s Supremacy Clause.</p>
          </div>
        </div>
      </section>

      {/* State List Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0F2C47] mb-8 text-center">
            Browse All States Alphabetically
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {usStates.map((state) => (
              <Link
                key={state.abbreviation}
                href={`/state-constitutions/${state.slug}`}
                className="block bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6 border-l-4 border-[#0F2C47] hover:border-[#C41E3A]"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#0F2C47]">{state.name}</h3>
                    <p className="text-sm text-gray-500">{state.abbreviation}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400">Constitution</p>
                    <p className="text-sm font-semibold text-[#1A3A5C]">{state.constitutionYear}</p>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-500">
                  <p>Capital: {state.capital}</p>
                  <p>Admitted: {state.ratificationDate}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0F2C47] mb-6 text-center">
            About State Constitutions
          </h2>
          
          <div className="space-y-6 text-gray-700">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold text-[#1A3A5C] mb-3">What Are State Constitutions?</h3>
              <p className="leading-relaxed">
                State constitutions are the fundamental governing documents for each U.S. state. They establish 
                the structure of state government, define powers and duties of government branches, and protect 
                individual rights. State constitutions often provide more detailed protections than the U.S. Constitution.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold text-[#1A3A5C] mb-3">Relationship to Federal Constitution</h3>
              <p className="leading-relaxed">
                Under the Supremacy Clause (Article VI), the U.S. Constitution is the &quot;supreme law of the land.&quot; 
                State constitutions cannot conflict with federal law, but they can provide additional rights and 
                protections beyond those in the federal Constitution. States serve as &quot;laboratories of democracy,&quot; 
                experimenting with different approaches to governance and individual rights.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold text-[#1A3A5C] mb-3">Key Facts</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Massachusetts has the oldest state constitution still in use (1780)</li>
                <li>Louisiana is the only state with a civil law system (based on French/Spanish law)</li>
                <li>Some state constitutions are much longer and more detailed than the U.S. Constitution</li>
                <li>State constitutions are generally easier to amend than the federal Constitution</li>
                <li>Every state except Nebraska has a bicameral legislature (two chambers)</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-400 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-[#1A3A5C] mb-3">📚 Constitutional Text Resource</h3>
              <p className="leading-relaxed mb-4">
                For access to the full, current text of all 50 state constitutions, we recommend visiting 
                <strong> 50 Constitutions</strong>, maintained by the State Democracy Research Initiative at 
                the University of Wisconsin Law School. This comprehensive database provides searchable constitutional 
                texts and detailed historical information.
              </p>
              <a 
                href="https://50constitutions.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-[#0F2C47] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#C41E3A] transition-colors shadow-md"
              >
                Visit 50constitutions.org →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
