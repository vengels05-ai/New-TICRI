export default function FederalismPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Federalism
          </h1>
          <p className="text-xl text-gray-200">
            Federalism was meant to balance national unity with state independence. Today it often looks more like feudalism than freedom.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* What It Was Supposed to Be */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-green-600 pb-2">
              📜 What Federalism Was Supposed to Be
            </h2>
            
            <p className="text-gray-700 mb-4">
              In the Constitution, <strong>federalism</strong> means power is shared between the national government and the states.
            </p>

            <div className="bg-green-50 p-6 rounded-lg mb-4 border-l-4 border-green-600">
              <h3 className="font-bold text-gray-900 mb-3">The Original Design:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>The federal government was supposed to handle things that affect the whole nation: defense, foreign policy, trade between states, printing money.</li>
                <li>States were meant to control most of daily life: schools, local laws, policing, property, and family law.</li>
                <li>The Tenth Amendment makes this clear: <em>"The powers not delegated to the United States by the Constitution… are reserved to the States respectively, or to the people."</em></li>
              </ul>
            </div>

            <p className="text-gray-700">
              The design was a <strong>balance</strong>: Washington could not smother the states, and states could not ignore national needs.
            </p>
          </div>

          {/* How It Works Now */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-green-600 pb-2">
              ⚖️ How Federalism Works Now
            </h2>
            
            <p className="text-gray-700 mb-4">
              Over time, that balance has shifted.
            </p>

            <div className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-600">
                <h4 className="font-bold text-gray-900 mb-2">💰 Money as Control</h4>
                <p className="text-gray-700">
                  The federal government uses <strong>money</strong> to control states. If a state wants federal highway funds, it must follow federal rules (like the drinking age at 21).
                </p>
              </div>

              <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-600">
                <h4 className="font-bold text-gray-900 mb-2">🔗 Strings Attached</h4>
                <p className="text-gray-700">
                  Programs like Medicaid or education grants come with strings attached, forcing states to follow national policies.
                </p>
              </div>

              <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-600">
                <h4 className="font-bold text-gray-900 mb-2">📈 Expanded Federal Reach</h4>
                <p className="text-gray-700">
                  Supreme Court decisions and congressional laws have expanded federal reach far beyond what the founders likely imagined.
                </p>
              </div>
            </div>

            <div className="bg-red-50 p-6 rounded-lg mt-6 border-l-4 border-red-600">
              <p className="text-gray-800 font-semibold">
                Today, <strong>states often act like administrators for Washington's agenda</strong>, not independent governments.
              </p>
            </div>
          </div>

          {/* How Feudalism Worked */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-green-600 pb-2">
              🏰 How Feudalism Worked
            </h2>
            
            <p className="text-gray-700 mb-4">
              Most people don't study feudalism in school, but here's the simple version:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><strong>Feudalism</strong> was the system in medieval Europe.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span>A <strong>king</strong> owned all the land and granted pieces to <strong>lords</strong> in exchange for loyalty and taxes.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span>Lords let peasants farm the land, and peasants owed labor, crops, or money back up the chain.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span>Everyone was locked in place: peasants couldn't easily leave, and lords were bound to the king.</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 italic">
              It was a system of <strong>obligations and dependency</strong>, not freedom.
            </p>
          </div>

          {/* The Parallel */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-red-600 pb-2">
              🔄 How Our System Resembles Feudalism Today
            </h2>
            
            <div className="space-y-4">
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                <div className="flex items-start mb-3">
                  <span className="text-2xl mr-3">👑</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Washington, D.C. = The King</h4>
                    <p className="text-gray-700">It controls the money.</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                <div className="flex items-start mb-3">
                  <span className="text-2xl mr-3">🏛️</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">States = The Lords</h4>
                    <p className="text-gray-700">They get money from Washington but must obey its conditions.</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                <div className="flex items-start mb-3">
                  <span className="text-2xl mr-3">👥</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Citizens = The Peasants</h4>
                    <p className="text-gray-700">They pay taxes up the chain and live under rules set far away.</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                <div className="flex items-start mb-3">
                  <span className="text-2xl mr-3">🔇</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Powerlessness</h4>
                    <p className="text-gray-700">Just as medieval peasants had little voice, modern citizens often feel powerless when policies are dictated from above.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg mt-6">
              <p className="text-gray-800 text-center font-semibold">
                The names are different — "federal" instead of "feudal" — but the <strong>dynamic of control through resources</strong> looks similar.
              </p>
            </div>
          </div>

          {/* Why This Matters */}
          <div className="bg-gradient-to-br from-green-600 to-green-800 text-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 border-b-2 border-white pb-2">
              💡 Why This Matters
            </h2>
            
            <p className="text-gray-100 mb-4">
              Federalism was supposed to give citizens two shields of protection: state governments close to the people and a national government limited in scope.
            </p>

            <p className="text-gray-100 mb-4">
              Instead, federal leverage has turned states into <strong>dependents</strong>.
            </p>

            <p className="text-white font-semibold text-lg">
              Recognizing the parallels to feudalism helps explain why so many Americans feel unheard and trapped in a system that seems upside down.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
