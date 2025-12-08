export default function PartiesPage() {
  return (
    <div className="bg-gray-50">
      <header className="bg-[#1e293b] text-white py-12 px-4 shadow-lg border-b-8 border-[#b91c1c]">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif">The Great Realignment</h1>
          <p className="text-xl md:text-2xl text-gray-300 italic font-serif">From the Founding Fathers to the Crisis of 2025</p>
          <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm max-w-3xl mx-auto">
            <p className="text-sm md:text-base leading-relaxed">
              American politics is not static. The definitions of &quot;Liberal,&quot; &quot;Conservative,&quot; &quot;Big Government,&quot; and &quot;States&apos; Rights&quot; have flipped repeatedly over 250 years. This timeline tracks the seven major eras and the current constitutional showdown.
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-12 relative">

        {/* DEFINITIONS SECTION */}
        <section className="mb-16 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
          <div className="bg-gray-800 p-6 text-white">
            <h2 className="text-2xl font-bold font-serif flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 w-6 h-6 text-yellow-500"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
              Defining the Terms
            </h2>
            <p className="text-gray-400 text-sm mt-1">Before we look at the parties, we must define the words. These terms originated in the French National Assembly (1789), where supporters of the King sat on the Right and supporters of the Revolution sat on the Left.</p>
          </div>
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="p-6 bg-blue-50/50">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Liberalism (&quot;The Left&quot;)</h3>
              <p className="text-xs font-bold text-blue-600 uppercase mb-3">Origin: Latin *Liber* (Free)</p>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Originally, &quot;Classical Liberalism&quot; meant <span className="font-bold">limited government</span>, free markets, and individual rights against monarchs. However, in the 20th century (Era 5), it evolved into &quot;Social Liberalism&quot;—the belief that true liberty requires <span className="font-bold">economic security</span> provided by a robust government safety net.
              </p>
              <ul className="text-sm space-y-2">
                <li className="flex items-start"><span className="text-blue-500 mr-2">▶</span> <strong>Core Value:</strong> Equality & Progress.</li>
                <li className="flex items-start"><span className="text-blue-500 mr-2">▶</span> <strong>View of Gov:</strong> A tool to correct social injustices.</li>
              </ul>
            </div>
            <div className="p-6 bg-red-50/50">
              <h3 className="text-xl font-bold text-red-900 mb-2">Conservatism (&quot;The Right&quot;)</h3>
              <p className="text-xs font-bold text-red-600 uppercase mb-3">Origin: Latin *Conservare* (To Preserve)</p>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Originally, this meant preserving the Monarchy and Church structure. In America, it evolved to mean preserving the <span className="font-bold">Constitutional order</span> and <span className="font-bold">traditions</span>. Ironically, modern American Conservatism adopted the economic views of &quot;Classical Liberalism&quot; (Free Markets), seeking to preserve the Founders&apos; vision of limited federal power.
              </p>
              <ul className="text-sm space-y-2">
                <li className="flex items-start"><span className="text-red-500 mr-2">▶</span> <strong>Core Value:</strong> Order, Tradition & Liberty.</li>
                <li className="flex items-start"><span className="text-red-500 mr-2">▶</span> <strong>View of Gov:</strong> A necessary evil that must be restrained.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SUMMARY TABLE */}
        <section className="mb-20 bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="bg-gray-700 p-4 text-white text-center">
            <h2 className="text-xl font-bold">The Arc of History: A Quick Comparison</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 border-b-2 border-gray-300 text-sm uppercase tracking-wider">
                  <th className="p-4 font-bold text-gray-600">Feature</th>
                  <th className="p-4 font-bold text-[#b91c1c]">1790 (Founding)</th>
                  <th className="p-4 font-bold text-[#b91c1c]">1860 (Civil War)</th>
                  <th className="p-4 font-bold text-[#1d4ed8]">1980 (Reagan)</th>
                  <th className="p-4 font-bold text-purple-700">2025 (Current)</th>
                </tr>
              </thead>
              <tbody className="text-sm md:text-base">
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-bold bg-gray-50">Party of Big Gov</td>
                  <td className="p-4">Federalists (Right)</td>
                  <td className="p-4">Republicans (Right)</td>
                  <td className="p-4">Democrats (Left)</td>
                  <td className="p-4 font-bold bg-blue-50 text-blue-800">Democrats (Left)*</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-bold bg-gray-50">Party of Business</td>
                  <td className="p-4">Federalists (Right)</td>
                  <td className="p-4">Republicans (Right)</td>
                  <td className="p-4">Republicans (Right)</td>
                  <td className="p-4 font-bold text-gray-500 italic">Split / Mixed</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-bold bg-gray-50">Party of &quot;The Little Guy&quot;</td>
                  <td className="p-4">Dem-Republicans (Left)</td>
                  <td className="p-4">Democrats (Left)</td>
                  <td className="p-4">Democrats (Left)</td>
                  <td className="p-4 font-bold bg-red-50 text-red-800">Republicans (Right)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-bold bg-gray-50">Foreign Policy</td>
                  <td className="p-4">Isolationist (Left)</td>
                  <td className="p-4">Expansionist (Right)</td>
                  <td className="p-4">Hawkish (Right)</td>
                  <td className="p-4 font-bold bg-blue-50 text-blue-800">Hawkish (Left)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-gray-50 text-xs text-gray-500 text-center">
            *In 2025, Democrats defend the &quot;Administrative State&quot; while Republicans use &quot;Executive Power&quot; to dismantle it.
          </div>
        </section>

        {/* TIMELINE - 7 Eras */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300 z-0"></div>

          {/* ERA 1: The Founding */}
          <div className="mb-16 md:flex justify-between items-center w-full group">
            <div className="order-1 w-full md:w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full justify-center text-white font-bold border-4 border-white mx-auto md:mx-0">1</div>
            <div className="order-1 w-full md:w-5/12 px-1 py-4">
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-yellow-600 transition-transform hover:-translate-y-0.5">
                <h3 className="font-bold text-gray-400 text-xs uppercase tracking-wide mb-1">1789 – 1824</h3>
                <h2 className="text-2xl font-bold text-gray-800 font-serif mb-2">The Founding</h2>
                <p className="text-sm text-gray-600 italic mb-4">&quot;Energetic Government&quot; vs. &quot;Empire of Liberty&quot;</p>
                
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded border border-blue-100">
                    <span className="bg-red-100 text-red-800 border border-red-300 text-[0.7rem] px-1.5 py-0.5 rounded-full uppercase font-bold inline-block mb-1">Functionally Conservative (Order)</span>
                    <span className="font-bold text-blue-900 block">Federalists (Hamilton)</span>
                    <span className="text-xs text-gray-600">Urban elites, bankers. Wanted strong central bank & army. <br/><strong className="text-blue-700">Modern Echo:</strong> Big Gov Republicans.</span>
                  </div>
                  <div className="bg-orange-50 p-3 rounded border border-orange-100">
                    <span className="bg-blue-100 text-blue-800 border border-blue-300 text-[0.7rem] px-1.5 py-0.5 rounded-full uppercase font-bold inline-block mb-1">Functionally Liberal (Liberty)</span>
                    <span className="font-bold text-orange-900 block">Dem-Republicans (Jefferson)</span>
                    <span className="text-xs text-gray-600">Rural farmers. Feared tyranny. Wanted agrarian independence. <br/><strong className="text-orange-700">Modern Echo:</strong> Populist Right.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ERA 2: Age of Jackson */}
          <div className="mb-16 md:flex justify-between items-center w-full md:flex-row-reverse group">
            <div className="order-1 w-full md:w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full justify-center text-white font-bold border-4 border-white mx-auto md:mx-0">2</div>
            <div className="order-1 w-full md:w-5/12 px-1 py-4">
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500 transition-transform hover:-translate-y-0.5">
                <h3 className="font-bold text-gray-400 text-xs uppercase tracking-wide mb-1">1828 – 1854</h3>
                <h2 className="text-2xl font-bold text-gray-800 font-serif mb-2">Age of Jackson</h2>
                <p className="text-sm text-gray-600 italic mb-4">The Common Man vs. The Elites</p>
                
                <div className="grid grid-cols-1 gap-3 mt-4">
                  <div className="p-3 bg-orange-50 rounded border border-orange-100">
                    <span className="bg-red-100 text-red-800 border border-red-300 text-[0.7rem] px-1.5 py-0.5 rounded-full uppercase font-bold inline-block mb-1">Socially Conservative / Econ Libertarian</span>
                    <div className="font-bold text-orange-800 text-sm">Democrats (Jackson)</div>
                    <div className="text-xs text-gray-600 leading-tight mt-1">Anti-Bank. Pro-Slavery (Social Hierarchy). Represented the &quot;Common Man&quot; against elites.</div>
                  </div>
                  <div className="p-3 bg-purple-50 rounded border border-purple-100">
                    <span className="bg-blue-100 text-blue-800 border border-blue-300 text-[0.7rem] px-1.5 py-0.5 rounded-full uppercase font-bold inline-block mb-1">Reformist / Modernizers</span>
                    <div className="font-bold text-purple-800 text-sm">Whigs (Clay)</div>
                    <div className="text-xs text-gray-600 leading-tight mt-1">Infrastructure lovers. Moral reformers (Temperance). Wanted to modernize America.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ERA 3: Civil War & Reconstruction */}
          <div className="mb-16 md:flex justify-between items-center w-full group">
            <div className="order-1 w-full md:w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full justify-center text-white font-bold border-4 border-white mx-auto md:mx-0">3</div>
            <div className="order-1 w-full md:w-5/12 px-1 py-4">
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-600 transition-transform hover:-translate-y-0.5">
                <h3 className="font-bold text-gray-400 text-xs uppercase tracking-wide mb-1">1854 – 1896</h3>
                <h2 className="text-2xl font-bold text-gray-800 font-serif mb-2">Civil War & Reconstruction</h2>
                <div className="bg-red-100 text-red-800 text-xs font-bold px-2 py-1 inline-block rounded mb-3">MAJOR FLIP</div>
                
                <div className="space-y-3">
                  <div className="bg-red-50 p-3 rounded border border-red-100">
                    <span className="bg-blue-100 text-blue-800 border border-blue-300 text-[0.7rem] px-1.5 py-0.5 rounded-full uppercase font-bold inline-block mb-1">Radical Liberals</span>
                    <span className="font-bold text-red-900 block">Republicans (The North)</span>
                    <span className="text-xs text-gray-600">Used Big Gov power to crush rebellion & end slavery. Pro-business & railroads.</span>
                  </div>
                  <div className="bg-blue-50 p-3 rounded border border-blue-100">
                    <span className="bg-red-100 text-red-800 border border-red-300 text-[0.7rem] px-1.5 py-0.5 rounded-full uppercase font-bold inline-block mb-1">Traditional Conservatives</span>
                    <span className="font-bold text-blue-900 block">Democrats (The South)</span>
                    <span className="text-xs text-gray-600">Fought to preserve tradition (white supremacy). Limited federal power (&quot;States&apos; Rights&quot;). Agrarian.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ERA 4: The Progressive Era */}
          <div className="mb-16 md:flex justify-between items-center w-full md:flex-row-reverse group">
            <div className="order-1 w-full md:w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full justify-center text-white font-bold border-4 border-white mx-auto md:mx-0">4</div>
            <div className="order-1 w-full md:w-5/12 px-1 py-4">
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-teal-600 transition-transform hover:-translate-y-0.5">
                <h3 className="font-bold text-gray-400 text-xs uppercase tracking-wide mb-1">1896 – 1932</h3>
                <h2 className="text-2xl font-bold text-gray-800 font-serif mb-2">The Progressive Era</h2>
                <p className="text-sm text-gray-600 italic mb-2">The Blurring of Lines</p>
                <p className="text-xs text-gray-600 mb-3">Both parties had &quot;Progressive&quot; wings fighting monopolies.</p>
                <ul className="text-xs space-y-2 list-disc list-inside text-gray-700">
                  <li><strong className="text-teal-700">Progressive Republicans (Teddy Roosevelt):</strong> Trust-busting & Imperialism.</li>
                  <li><strong className="text-teal-700">Progressive Democrats (Wilson):</strong> Income Tax & Federal Reserve.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ERA 5: The Great Switch (New Deal) */}
          <div className="mb-16 md:flex justify-between items-center w-full group">
            <div className="order-1 w-full md:w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full justify-center text-white font-bold border-4 border-white mx-auto md:mx-0">5</div>
            <div className="order-1 w-full md:w-5/12 px-1 py-4">
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 transition-transform hover:-translate-y-0.5">
                <h3 className="font-bold text-gray-400 text-xs uppercase tracking-wide mb-1">1932 – 1968</h3>
                <h2 className="text-2xl font-bold text-gray-800 font-serif mb-2">The Great Switch (New Deal)</h2>
                <div className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 inline-block rounded mb-3">MODERN LABELS BORN</div>
                
                <div className="grid grid-cols-1 gap-3">
                  <div className="bg-blue-50 p-3 rounded">
                    <span className="bg-blue-100 text-blue-800 border border-blue-300 text-[0.7rem] px-1.5 py-0.5 rounded-full uppercase font-bold inline-block mb-1">Modern Liberals</span>
                    <h4 className="font-bold text-blue-900 text-sm">Democrats (FDR)</h4>
                    <p className="text-xs text-gray-600 mt-1">FDR defines liberty as &quot;economic security.&quot; Gov intervention helps poor & unions. 1964: Civil Rights Act aligns minorities with Dems.</p>
                  </div>
                  <div className="bg-red-50 p-3 rounded">
                    <span className="bg-red-100 text-red-800 border border-red-300 text-[0.7rem] px-1.5 py-0.5 rounded-full uppercase font-bold inline-block mb-1">Modern Conservatives</span>
                    <h4 className="font-bold text-red-900 text-sm">Republicans (GOP)</h4>
                    <p className="text-xs text-gray-600 mt-1">Reaction to FDR. &quot;Freedom FROM Government.&quot; The Southern Strategy moves the South to the GOP.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ERA 6: The Reagan Revolution */}
          <div className="mb-16 md:flex justify-between items-center w-full md:flex-row-reverse group">
            <div className="order-1 w-full md:w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full justify-center text-white font-bold border-4 border-white mx-auto md:mx-0">6</div>
            <div className="order-1 w-full md:w-5/12 px-1 py-4">
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-indigo-600 transition-transform hover:-translate-y-0.5">
                <h3 className="font-bold text-gray-400 text-xs uppercase tracking-wide mb-1">1980 – 2015</h3>
                <h2 className="text-2xl font-bold text-gray-800 font-serif mb-2">The Reagan Revolution</h2>
                <p className="text-sm text-gray-600 italic mb-2">The &quot;Conservative Consensus&quot;</p>
                
                <div className="flex justify-between text-center gap-2 text-xs mt-4">
                  <div className="bg-gray-100 p-2 rounded flex-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mx-auto text-green-600 mb-1"><line x1="12" y1="2" x2="12" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                    Fiscal
                  </div>
                  <div className="bg-gray-100 p-2 rounded flex-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mx-auto text-purple-600 mb-1"><path d="m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2"></path><path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"></path><path d="M18 22V5l-6-3-6 3v17"></path><path d="M12 7v5"></path><path d="M10 9h4"></path></svg>
                    Social
                  </div>
                  <div className="bg-gray-100 p-2 rounded flex-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mx-auto text-red-600 mb-1"><path d="M14.5 17.5 3 6V3h3l11.5 11.5"></path><path d="M13 19 2 8"></path><path d="M16 16 5 5"></path><path d="m20 11-4.5 4.5"></path><path d="m21 15-2 2"></path></svg>
                    Foreign
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                  <div className="text-center">
                    <span className="bg-red-100 text-red-800 border border-red-300 text-[0.7rem] px-1.5 py-0.5 rounded-full uppercase font-bold inline-block mb-1">Conservative</span><br/>
                    <span className="text-gray-500">GOP: Deregulation & Tradition</span>
                  </div>
                  <div className="text-center">
                    <span className="bg-blue-100 text-blue-800 border border-blue-300 text-[0.7rem] px-1.5 py-0.5 rounded-full uppercase font-bold inline-block mb-1">Liberal</span><br/>
                    <span className="text-gray-500">Dems: Technocratic Elite</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ERA 7: The Populist Realignment */}
          <div className="mb-16 md:flex justify-between items-center w-full group">
            <div className="order-1 w-full md:w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full justify-center text-white font-bold border-4 border-white mx-auto md:mx-0">7</div>
            <div className="order-1 w-full md:w-5/12 px-1 py-4">
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-600 transition-transform hover:-translate-y-0.5">
                <h3 className="font-bold text-gray-400 text-xs uppercase tracking-wide mb-1">2016 – 2025</h3>
                <h2 className="text-2xl font-bold text-gray-800 font-serif mb-2">The Populist Realignment</h2>
                <div className="bg-purple-100 text-purple-800 text-xs font-bold px-2 py-1 inline-block rounded mb-3">CURRENT ERA</div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-red-700 text-sm border-b border-red-200 pb-1 mb-2">The New &quot;Right&quot;</h4>
                    <span className="bg-red-100 text-red-800 text-[0.7rem] px-1.5 py-0.5 rounded-full uppercase font-bold inline-block mb-2">Populist Nationalism</span>
                    <ul className="text-[11px] space-y-2 mt-2">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 mr-1 mt-0.5 text-red-500"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                        Protectionist (Tariffs)
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 mr-1 mt-0.5 text-red-500"><circle cx="12" cy="12" r="10"></circle><path d="m4.9 4.9 14.2 14.2"></path></svg>
                        Isolationist / &quot;America First&quot;
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-700 text-sm border-b border-blue-200 pb-1 mb-2">The New &quot;Left&quot;</h4>
                    <span className="bg-blue-100 text-blue-800 text-[0.7rem] px-1.5 py-0.5 rounded-full uppercase font-bold inline-block mb-2">Establishment Liberalism</span>
                    <ul className="text-[11px] space-y-2 mt-2">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 mr-1 mt-0.5 text-blue-500"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                        Globalist / Interventionist
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 mr-1 mt-0.5 text-blue-500"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg>
                        Managerial Elite
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CURRENT STATE SECTION (December 2025) */}
        <section className="mt-24 border-t-4 border-gray-300 pt-12">
          <div className="text-center mb-10">
            <div className="inline-block bg-red-600 text-white px-3 py-1 text-sm font-bold uppercase tracking-widest rounded mb-2">Simulation Status</div>
            <h2 className="text-4xl font-bold text-gray-900 font-serif">December 2025: The Era of &quot;The Exception&quot;</h2>
            <p className="text-lg text-red-600 font-semibold mt-2">Constitutional Crisis in Progress</p>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Small government conservatism is dead. It has been replaced by &quot;National Survival&quot; conservatism. 
              Democrats have become the &quot;Conservative&quot; force trying to preserve institutional norms.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-500">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-red-100 rounded-lg text-red-600 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M9 12h.01"></path><path d="M15 12h.01"></path><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"></path><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"></path></svg>
                </div>
                <h3 className="font-bold text-gray-800">Birthright Citizenship</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                <strong className="text-red-700">The Shift:</strong> Moving from Border Control to Redefining Citizenship.
              </p>
              <div className="bg-gray-100 p-3 rounded text-xs border-l-2 border-gray-400">
                <span className="font-bold block mb-1">STATUS: Dec 5, 2025</span>
                SCOTUS agrees to hear case on Exec Order denying 14th Amendment rights to children of undocumented immigrants.
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-500">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-red-100 rounded-lg text-red-600 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
                </div>
                <h3 className="font-bold text-gray-800">Posse Comitatus</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                <strong className="text-red-700">The Shift:</strong> Military deployed for domestic policing without Governor consent.
              </p>
              <div className="bg-gray-100 p-3 rounded text-xs border-l-2 border-gray-400">
                <span className="font-bold block mb-1">STATUS: Active Conflict</span>
                Blue State Governors suing Federal Gov over National Guard deployment for ICE raids.
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-500">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-red-100 rounded-lg text-red-600 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                </div>
                <h3 className="font-bold text-gray-800">&quot;Narco-Terrorism&quot;</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                <strong className="text-red-700">The Shift:</strong> Drugs moved from DOJ (Crime) to DoD (War).
              </p>
              <div className="bg-gray-100 p-3 rounded text-xs border-l-2 border-gray-400">
                <span className="font-bold block mb-1">STATUS: Strikes Ongoing</span>
                US Military conducting strikes on cartel infrastructure, bypassing civilian courts.
              </div>
            </div>
          </div>
        </section>

        {/* THE CONSTITUTIONAL CORE SECTION */}
        <section className="mt-24 border-t-4 border-gray-300 pt-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 font-serif">The Constitutional Core: Beyond Party Lines</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              While parties frame these issues as ideological battles between &quot;Liberalism&quot; and &quot;Conservatism,&quot; the functional reality often reveals a struggle for votes, corporate contracts, and constitutional power.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* LGBTQ */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-gray-100 p-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="font-bold text-gray-800 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2 text-indigo-600"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  LGBTQ+ & DEI
                </h3>
              </div>
              <div className="p-4">
                <div className="mb-3">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">The Party Narrative</span>
                  <p className="text-sm text-gray-600 mt-1">
                    <span className="text-blue-700 font-semibold">Dems:</span> Protecting human rights.<br/>
                    <span className="text-red-700 font-semibold">Reps:</span> Opposing unfair DEI practices.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <span className="text-xs font-bold text-indigo-700 uppercase tracking-wide flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 mr-1"><path d="M20 6 9 17l-5-5"></path></svg>
                    The Structural Reality
                  </span>
                  <p className="text-sm font-bold text-gray-800 mt-1">About Voters.</p>
                  <p className="text-xs text-gray-500 mt-1">Mobilizing specific voter blocs for electoral power.</p>
                </div>
              </div>
            </div>

            {/* Immigration */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-gray-100 p-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="font-bold text-gray-800 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2 text-indigo-600"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                  Immigration
                </h3>
              </div>
              <div className="p-4">
                <div className="mb-3">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">The Party Narrative</span>
                  <p className="text-sm text-gray-600 mt-1">
                    <span className="text-blue-700 font-semibold">Dems:</span> Compassion & Opportunity.<br/>
                    <span className="text-red-700 font-semibold">Reps:</span> Security & Sovereignty.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <span className="text-xs font-bold text-indigo-700 uppercase tracking-wide flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 mr-1"><path d="M20 6 9 17l-5-5"></path></svg>
                    The Structural Reality
                  </span>
                  <p className="text-sm font-bold text-gray-800 mt-1">About Votes.</p>
                  <p className="text-xs text-gray-500 mt-1">Shifting demographics and securing future electoral majorities.</p>
                </div>
              </div>
            </div>

            {/* Privacy */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-gray-100 p-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="font-bold text-gray-800 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2 text-indigo-600"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                  Privacy & Surveillance
                </h3>
              </div>
              <div className="p-4">
                <div className="mb-3">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">The Party Narrative</span>
                  <p className="text-sm text-gray-600 mt-1">Both claim &quot;National Security&quot; necessitates surveillance.</p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <span className="text-xs font-bold text-indigo-700 uppercase tracking-wide flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 mr-1"><path d="M20 6 9 17l-5-5"></path></svg>
                    The Structural Reality
                  </span>
                  <p className="text-sm font-bold text-gray-800 mt-1">Corporate Contracts & Power Control.</p>
                  <p className="text-xs text-gray-500 mt-1">Lobbying for lucrative data contracts; control over information.</p>
                </div>
              </div>
            </div>

            {/* Corporate Lobbying */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-gray-100 p-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="font-bold text-gray-800 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2 text-indigo-600"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>
                  Corporate Lobbying
                </h3>
              </div>
              <div className="p-4">
                <div className="mb-3">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">The Party Narrative</span>
                  <p className="text-sm text-gray-600 mt-1">Often ignored or blamed on the &quot;other side.&quot;</p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <span className="text-xs font-bold text-indigo-700 uppercase tracking-wide flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 mr-1"><path d="M20 6 9 17l-5-5"></path></svg>
                    The Structural Reality
                  </span>
                  <p className="text-sm font-bold text-gray-800 mt-1">Self-Serving System.</p>
                  <p className="text-xs text-gray-500 mt-1">The mechanism that funds both parties, ensuring corporate interests prevail.</p>
                </div>
              </div>
            </div>

            {/* Healthcare */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-gray-100 p-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="font-bold text-gray-800 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2 text-indigo-600"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path></svg>
                  Healthcare
                </h3>
              </div>
              <div className="p-4">
                <div className="mb-3">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">The Party Narrative</span>
                  <p className="text-sm text-gray-600 mt-1">
                    <span className="text-blue-700 font-semibold">Dems:</span> Helping People.<br/>
                    <span className="text-red-700 font-semibold">Reps:</span> Stopping Gov Overreach.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <span className="text-xs font-bold text-indigo-700 uppercase tracking-wide flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 mr-1"><path d="M20 6 9 17l-5-5"></path></svg>
                    The Structural Reality
                  </span>
                  <p className="text-sm font-bold text-gray-800 mt-1">Both want corporations to benefit.</p>
                  <p className="text-xs text-gray-500 mt-1">Insurance & Pharma lobbies shape legislation on both sides.</p>
                </div>
              </div>
            </div>

            {/* AI & Energy */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-gray-100 p-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="font-bold text-gray-800 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2 text-indigo-600"><rect width="16" height="16" x="4" y="4" rx="2"></rect><rect width="6" height="6" x="9" y="9" rx="1"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>
                  AI & Energy
                </h3>
              </div>
              <div className="p-4">
                <div className="mb-3">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">The Party Narrative</span>
                  <p className="text-sm text-gray-600 mt-1">Innovation, Safety, or Green Transition.</p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <span className="text-xs font-bold text-indigo-700 uppercase tracking-wide flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 mr-1"><path d="M20 6 9 17l-5-5"></path></svg>
                    The Structural Reality
                  </span>
                  <p className="text-sm font-bold text-gray-800 mt-1">Arms Race for Power & Control.</p>
                  <p className="text-xs text-gray-500 mt-1">Tied to corporate dominance and future regulatory control.</p>
                </div>
              </div>
            </div>

            {/* Climate Change (Centered and Same Size) */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow md:col-span-2 md:w-[calc(50%-0.75rem)] md:mx-auto">
              <div className="bg-gray-100 p-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="font-bold text-gray-800 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2 text-indigo-600"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
                  Climate Change
                </h3>
              </div>
              <div className="p-4">
                <div className="mb-3">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">The Party Narrative</span>
                  <p className="text-sm text-gray-600 mt-1">Existential Threat vs. Economic Freedom.</p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <span className="text-xs font-bold text-indigo-700 uppercase tracking-wide flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 mr-1"><path d="M20 6 9 17l-5-5"></path></svg>
                    The Structural Reality
                  </span>
                  <p className="text-sm font-bold text-gray-800 mt-1">Pushing Contracts & Legislation for Corporations.</p>
                  <p className="text-xs text-gray-500 mt-1">The debate often masks the massive transfer of wealth via government contracts.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Final Statement */}
          <div className="mt-12 p-8 bg-gray-50 border-t-4 border-indigo-600 rounded-lg shadow-inner text-center">
            <h3 className="text-2xl font-bold text-gray-800 font-serif mb-4">A Warning to the Citizenry</h3>
            <p className="text-lg text-gray-700 font-medium italic leading-relaxed max-w-3xl mx-auto">
              &quot;None of these issues are party issues. They are all being kidnapped and used as weapons to divide citizens against one another. They are powerful tools since they are tied to human rights and constitutional authority.&quot;
            </p>
          </div>
        </section>

      </div>

      <footer className="bg-gray-800 text-gray-400 py-8 text-center mt-12">
        <p className="text-sm">™ The Informed Constitutional Republic Initiative</p>
      </footer>
    </div>
  );
}
