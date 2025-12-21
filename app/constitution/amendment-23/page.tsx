import Link from 'next/link';

export default function Amendment23() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          href="/constitution" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          ← Back to Constitution
        </Link>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg mb-8">
          <h1 className="text-4xl font-bold mb-2">Amendment XXIII</h1>
          <p className="text-xl">Twenty-Third Amendment</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Text</h2>
          <div className="prose prose-lg max-w-none text-gray-700 italic">
            <p className="mb-4">
              <strong>Section 1.</strong> "The District constituting the seat of Government of the United States shall appoint in 
              such manner as Congress may direct: A number of electors of President and Vice President equal to the whole number of 
              Senators and Representatives in Congress to which the District would be entitled if it were a State, but in no event 
              more than the least populous State; they shall be in addition to those appointed by the States, but they shall be 
              considered, for the purposes of the election of President and Vice President, to be electors appointed by a State; and 
              they shall meet in the District and perform such duties as provided by the twelfth article of amendment."
            </p>
            <p>
              <strong>Section 2.</strong> "The Congress shall have power to enforce this article by appropriate legislation."
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Plain English</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            DC gets Electoral College votes.
          </p>
        </div>
      </div>
    </div>
  );
}
