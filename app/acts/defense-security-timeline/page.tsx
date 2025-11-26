import Link from 'next/link';

export default function DefenseNationalSecurityTimelinePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/acts" className="inline-block text-blue-200 hover:text-white mb-4 transition-colors">
              ← Back to Acts
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Defense &amp; National Security Timeline
            </h1>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-blue-300 h-full"></div>
            <div className="space-y-12">
              <div key="0" className={`relative flex items-start ${0 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  1807
                </div>
                <div className={`ml-24 md:ml-0 ${0 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Insurrection Act (1807)</h3>
                    <p className="text-gray-700">- Authorized the President to deploy U.S. military forces domestically to suppress insurrections and enforce federal law.   - Still in effect; invoked during major crises and considered highly controversial.   ---</p>
                  </div>
                </div>
              </div>
              <div key="1" className={`relative flex items-start ${1 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  1878
                </div>
                <div className={`ml-24 md:ml-0 ${1 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Posse Comitatus Act (1878)</h3>
                    <p className="text-gray-700">- Prohibited the use of the U.S. Army (later extended to Air Force) for domestic law enforcement without explicit congressional authorization.   - Limits military involvement in civilian affairs, except where other laws (like the Insurrection Act) apply.   ---</p>
                  </div>
                </div>
              </div>
              <div key="2" className={`relative flex items-start ${2 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  1973
                </div>
                <div className={`ml-24 md:ml-0 ${2 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">War Powers Resolution (1973)</h3>
                    <p className="text-gray-700">- Passed in the aftermath of Vietnam.   - Requires the President to notify Congress within 48 hours of committing armed forces, and limits deployments without congressional approval to 60 days.   - Continues to frame debates over executive vs. congressional authority in war.   ---</p>
                  </div>
                </div>
              </div>
              <div key="3" className={`relative flex items-start ${3 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  1976
                </div>
                <div className={`ml-24 md:ml-0 ${3 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">National Emergencies Act (1976)</h3>
                    <p className="text-gray-700">- Established procedures for the President to declare national emergencies.   - Required periodic review and renewal by Congress, though oversight has often been minimal.   ---</p>
                  </div>
                </div>
              </div>
              <div key="4" className={`relative flex items-start ${4 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  1977
                </div>
                <div className={`ml-24 md:ml-0 ${4 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">International Emergency Economic Powers Act (IEEPA, 1977)</h3>
                    <p className="text-gray-700">- Granted the President broad authority to regulate commerce in response to foreign threats during a declared national emergency.   - Still the legal basis for most U.S. sanctions regimes today.   ---</p>
                  </div>
                </div>
              </div>
              <div key="5" className={`relative flex items-start ${5 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  1950
                </div>
                <div className={`ml-24 md:ml-0 ${5 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Defense Production Act (1950, Korean War; amended many times)</h3>
                    <p className="text-gray-700">- Allows the President to require businesses to prioritize defense-related contracts.   - Invoked for everything from weapons procurement to ventilator production during COVID-19.   ---</p>
                  </div>
                </div>
              </div>
              <div key="6" className={`relative flex items-start ${6 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  2001
                </div>
                <div className={`ml-24 md:ml-0 ${6 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Authorization for Use of Military Force (AUMF, 2001 &amp; 2002)</h3>
                    <p className="text-gray-700">- 2001 AUMF: Authorized force against those responsible for the 9/11 attacks.   - 2002 AUMF: Authorized force in Iraq.   - Still cited as authority for military operations worldwide.   ---</p>
                  </div>
                </div>
              </div>
              <div key="7" className={`relative flex items-start ${7 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  2001
                </div>
                <div className={`ml-24 md:ml-0 ${7 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">USA PATRIOT Act (2001)</h3>
                    <p className="text-gray-700">- Expanded surveillance powers and information sharing after 9/11.   - Amended over time, but key provisions (like Section 215) influenced debates on civil liberties and national security.   ---</p>
                  </div>
                </div>
              </div>
              <div key="8" className={`relative flex items-start ${8 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  2002
                </div>
                <div className={`ml-24 md:ml-0 ${8 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Homeland Security Act (2002)</h3>
                    <p className="text-gray-700">- Created the Department of Homeland Security (DHS).   - Consolidated 22 federal agencies under DHS to coordinate counterterrorism, border, and emergency response.   ---</p>
                  </div>
                </div>
              </div>
              <div key="9" className={`relative flex items-start ${9 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  2003
                </div>
                <div className={`ml-24 md:ml-0 ${9 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Servicemembers Civil Relief Act (SCRA, 2003, with later amendments)</h3>
                    <p className="text-gray-700">- Provides legal and financial protections to active-duty servicemembers.   - Still frequently amended through the National Defense Authorization Acts (NDAAs).   ---</p>
                  </div>
                </div>
              </div>
              <div key="10" className={`relative flex items-start ${10 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  ????
                </div>
                <div className={`ml-24 md:ml-0 ${10 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Why It Matters Today</h3>
                    <p className="text-gray-700">These laws define the scope of:   - Presidential power in emergencies   - Limits on domestic use of the military   - Congressional vs. executive control of war   - Legal protections for servicemembers and families   They remain at the core of modern debates about security, liberty, a</p>
                  </div>
                </div>
              </div>
              <div key="11" className={`relative flex items-start ${11 % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  ????
                </div>
                <div className={`ml-24 md:ml-0 ${11 % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Official Sources</h3>
                    <p className="text-gray-700">- [Congressional Research Service – National Security Powers](https://sgp.fas.org/crs/natsec/index.html)   - [U.S. Code – Title 10 (Armed Forces)](https://uscode.house.gov/view.xhtml?path=/prelim@title10&amp;edition=prelim)   - [U.S. Code – Title 50 (War and National Defense)](https://uscode.house.gov/v</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
