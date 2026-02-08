import { Scale, Target, Landmark, Users, AlertCircle, MessageSquare, Flag, DollarSign, Heart, Shield, Sword, Star, BookOpen } from 'lucide-react';

export default function CasesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Scale className="w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Constitutional Law in Action
            </h1>
          </div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Discover how Supreme Court decisions shape your daily life — from family rights to presidential power, these cases define what the Constitution means in practice.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Quick Navigation */}
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-8 h-8 text-gray-900" />
            <h2 className="text-3xl font-bold text-gray-900">Find Cases By Your Interests</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            <a href="/cases/foundational" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-gray-800 text-center">
              <Landmark className="w-12 h-12 mx-auto mb-3 text-gray-700" />
              <div className="font-bold text-gray-900 mb-2">Constitutional Foundations</div>
              <div className="text-gray-600 text-sm">Marbury v. Madison, McCulloch v. Maryland</div>
            </a>
            
            <a href="/cases/parental-rights" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-gray-800 text-center">
              <Users className="w-12 h-12 mx-auto mb-3 text-gray-700" />
              <div className="font-bold text-gray-900 mb-2">Parents & Family</div>
              <div className="text-gray-600 text-sm">Homeschooling, school choice, family authority</div>
            </a>
            
            <a href="/cases/criminal-justice" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-gray-800 text-center">
              <AlertCircle className="w-12 h-12 mx-auto mb-3 text-gray-700" />
              <div className="font-bold text-gray-900 mb-2">Criminal Justice</div>
              <div className="text-gray-600 text-sm">Police rights, Miranda warnings, searches</div>
            </a>
            
            <a href="/cases/first-amendment" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-gray-800 text-center">
              <MessageSquare className="w-12 h-12 mx-auto mb-3 text-gray-700" />
              <div className="font-bold text-gray-900 mb-2">Free Speech & Religion</div>
              <div className="text-gray-600 text-sm">Expression, religion, student rights</div>
            </a>
            
            <a href="/cases/executive-power" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-gray-800 text-center">
              <Flag className="w-12 h-12 mx-auto mb-3 text-gray-700" />
              <div className="font-bold text-gray-900 mb-2">Presidential Power</div>
              <div className="text-gray-600 text-sm">Executive authority, immunity, war powers</div>
            </a>
            
            <a href="/cases/civil-rights" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-gray-800 text-center">
              <Scale className="w-12 h-12 mx-auto mb-3 text-gray-700" />
              <div className="font-bold text-gray-900 mb-2">Civil Rights</div>
              <div className="text-gray-600 text-sm">Equal protection, discrimination, voting</div>
            </a>
            
            <a href="/cases/federalism" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-gray-800 text-center">
              <Landmark className="w-12 h-12 mx-auto mb-3 text-gray-700" />
              <div className="font-bold text-gray-900 mb-2">Federalism</div>
              <div className="text-gray-600 text-sm">State vs. federal power, commerce clause</div>
            </a>
            
            <a href="/cases/separation-of-powers" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-gray-800 text-center">
              <Scale className="w-12 h-12 mx-auto mb-3 text-gray-700" />
              <div className="font-bold text-gray-900 mb-2">Separation of Powers</div>
              <div className="text-gray-600 text-sm">Checks and balances, branch authority</div>
            </a>
            
            <a href="/cases/economic-rights" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-gray-800 text-center">
              <DollarSign className="w-12 h-12 mx-auto mb-3 text-gray-700" />
              <div className="font-bold text-gray-900 mb-2">Economic Rights</div>
              <div className="text-gray-600 text-sm">Property, contracts, economic regulation</div>
            </a>
            
            <a href="/cases/healthcare-law" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-gray-800 text-center">
              <Heart className="w-12 h-12 mx-auto mb-3 text-gray-700" />
              <div className="font-bold text-gray-900 mb-2">Healthcare Law</div>
              <div className="text-gray-600 text-sm">ACA, medical rights, insurance</div>
            </a>
            
            <a href="/cases/military-service" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-gray-800 text-center">
              <Shield className="w-12 h-12 mx-auto mb-3 text-gray-700" />
              <div className="font-bold text-gray-900 mb-2">Military Service</div>
              <div className="text-gray-600 text-sm">Military law, veterans, service rights</div>
            </a>
            
            <a href="/cases/wartime-powers" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-gray-800 text-center">
              <Sword className="w-12 h-12 mx-auto mb-3 text-gray-700" />
              <div className="font-bold text-gray-900 mb-2">Wartime Powers</div>
              <div className="text-gray-600 text-sm">War authorization, emergency powers</div>
            </a>
          </div>

          {/* Featured Cases */}
          <div className="flex items-center gap-3 mb-6 mt-12">
            <Star className="w-8 h-8 text-gray-900" />
            <h2 className="text-3xl font-bold text-gray-900">Featured Cases</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <a href="/cases/foundational/marbury-v-madison-1803" className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg p-6 shadow-md hover:shadow-xl transition-all border border-gray-300 hover:border-gray-800">
              <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-bold">1803</span>
              <div className="text-2xl font-bold text-gray-900 mt-3 mb-2">Marbury v. Madison</div>
              <div className="text-gray-700 mb-3">Created judicial review — courts can strike down unconstitutional laws</div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <Landmark className="w-4 h-4" />
                <span>Constitutional Foundations</span>
              </div>
            </a>

            <a href="/cases/civil-rights/brown-v-board-of-education-1954" className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-6 shadow-md hover:shadow-xl transition-all border border-blue-300 hover:border-blue-800">
              <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-bold">1954</span>
              <div className="text-2xl font-bold text-gray-900 mt-3 mb-2">Brown v. Board of Education</div>
              <div className="text-gray-700 mb-3">Separate is not equal — segregation in schools unconstitutional</div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <Scale className="w-4 h-4" />
                <span>Civil Rights</span>
              </div>
            </a>

            <a href="/cases/criminal-justice/miranda-v-arizona-1966" className="bg-gradient-to-br from-red-100 to-red-200 rounded-lg p-6 shadow-md hover:shadow-xl transition-all border border-red-300 hover:border-red-800">
              <span className="bg-red-800 text-white px-3 py-1 rounded-full text-sm font-bold">1966</span>
              <div className="text-2xl font-bold text-gray-900 mt-3 mb-2">Miranda v. Arizona</div>
              <div className="text-gray-700 mb-3">Police must inform you of your rights before questioning</div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>Criminal Justice</span>
              </div>
            </a>

            <a href="/cases/first-amendment/new-york-times-co-v-united-states-1971" className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg p-6 shadow-md hover:shadow-xl transition-all border border-purple-300 hover:border-purple-800">
              <span className="bg-purple-800 text-white px-3 py-1 rounded-full text-sm font-bold">1971</span>
              <div className="text-2xl font-bold text-gray-900 mt-3 mb-2">New York Times v. United States</div>
              <div className="text-gray-700 mb-3">Pentagon Papers — government can't stop press from publishing</div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <MessageSquare className="w-4 h-4" />
                <span>First Amendment</span>
              </div>
            </a>

            <a href="/cases/civil-rights/obergefell-v-hodges-2015" className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-6 shadow-md hover:shadow-xl transition-all border border-blue-300 hover:border-blue-800">
              <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-bold">2015</span>
              <div className="text-2xl font-bold text-gray-900 mt-3 mb-2">Obergefell v. Hodges</div>
              <div className="text-gray-700 mb-3">Same-sex marriage is a constitutional right nationwide</div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <Scale className="w-4 h-4" />
                <span>Civil Rights</span>
              </div>
            </a>

            <a href="/cases/civil-rights/dobbs-v-jackson-womens-health-organization-2022" className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-6 shadow-md hover:shadow-xl transition-all border border-blue-300 hover:border-blue-800">
              <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-bold">2022</span>
              <div className="text-2xl font-bold text-gray-900 mt-3 mb-2">Dobbs v. Jackson Women's Health</div>
              <div className="text-gray-700 mb-3">Overturned Roe v. Wade — abortion returned to states</div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <Scale className="w-4 h-4" />
                <span>Civil Rights</span>
              </div>
            </a>
          </div>

          {/* Note Section */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mt-8">
            <p className="text-gray-800 flex items-start gap-2">
              <BookOpen className="w-5 h-5 mt-1 text-blue-600 flex-shrink-0" />
              <span>
                <strong>Explore 63+ Supreme Court Cases:</strong> Click any category above to browse landmark decisions. Each case includes plain-English explanations, real-world impacts, and what it means for your daily life.
              </span>
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
