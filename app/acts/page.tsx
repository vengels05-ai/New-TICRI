import Link from 'next/link';
import actsData from './acts-by-category.json';
import { Landmark, Scale, Vote, Sprout, HardHat, Shield, ShoppingCart, Heart, Cpu, Globe, User, Gavel, FileText } from 'lucide-react';

export default function ActsPage() {
  const timelines = [
    {
      title: 'Finance & Banking Timeline',
      description: 'Federal Reserve Act, Glass-Steagall, Dodd-Frank, and the evolution of financial regulation',
      icon: Landmark,
      href: '/acts/financial-system-timeline',
      color: 'from-green-50 to-green-100 border-green-600'
    },
    {
      title: 'Civil Rights Timeline',
      description: 'From the Civil Rights Act of 1964 to the Americans with Disabilities Act',
      icon: Scale,
      href: '/acts/civil-rights-timeline',
      color: 'from-blue-50 to-blue-100 border-blue-600'
    },
    {
      title: 'Voting Rights Timeline',
      description: 'Voting Rights Act, National Voter Registration Act, and election law evolution',
      icon: Vote,
      href: '/acts/voting-rights-timeline',
      color: 'from-purple-50 to-purple-100 border-purple-600'
    },
    {
      title: 'Environmental Law Timeline',
      description: 'Clean Air Act, Clean Water Act, CERCLA, and environmental protection',
      icon: Sprout,
      href: '/acts/environmental-law-timeline',
      color: 'from-emerald-50 to-emerald-100 border-emerald-600'
    },
    {
      title: 'Labor & Employment Timeline',
      description: 'Fair Labor Standards, NLRA, OSHA, and workplace rights',
      icon: HardHat,
      href: '/acts/labor-employment-timeline',
      color: 'from-orange-50 to-orange-100 border-orange-600'
    },
    {
      title: 'Defense & Security Timeline',
      description: 'War Powers Resolution, PATRIOT Act, and national security legislation',
      icon: Shield,
      href: '/acts/defense-security-timeline',
      color: 'from-red-50 to-red-100 border-red-600'
    },
    {
      title: 'Consumer & Commerce Timeline',
      description: 'Truth in Lending, Consumer Product Safety, and commerce regulation',
      icon: ShoppingCart,
      href: '/acts/consumer-commerce-timeline',
      color: 'from-yellow-50 to-yellow-100 border-yellow-600'
    },
    {
      title: 'Healthcare & Social Policy Timeline',
      description: 'Social Security Act, Medicare, Medicaid, ACA, and social safety net',
      icon: Heart,
      href: '/acts/healthcare-social-timeline',
      color: 'from-pink-50 to-pink-100 border-pink-600'
    },
    {
      title: 'Criminal Justice & Due Process Timeline',
      description: 'Controlled Substances Act, Crime Control Acts, and criminal law',
      icon: Gavel,
      href: '/acts/criminal-justice-timeline',
      color: 'from-indigo-50 to-indigo-100 border-indigo-600'
    },
    {
      title: 'Technology & Privacy Timeline',
      description: 'ECPA, CFAA, Section 230, and digital age legislation',
      icon: Cpu,
      href: '/acts/technology-privacy-timeline',
      color: 'from-cyan-50 to-cyan-100 border-cyan-600'
    },
    {
      title: 'Immigration Timeline',
      description: 'Immigration and Nationality Act, IRCA, and border policy',
      icon: Globe,
      href: '/acts/immigration-timeline',
      color: 'from-teal-50 to-teal-100 border-teal-600'
    },
    {
      title: 'Administrative Law Timeline',
      description: 'APA, regulatory framework, and the administrative state',
      icon: FileText,
      href: '/acts/administrative-law-timeline',
      color: 'from-slate-50 to-slate-100 border-slate-600'
    }
  ];

  const majorActs = [
    {
      title: 'Social Security Act (1935)',
      description: 'Created federal safety net for elderly, unemployed, and disadvantaged',
      href: '/acts/social-security-act-1935',
      year: 1935
    },
    {
      title: 'Administrative Procedure Act (1946)',
      description: 'Established framework for federal agency rulemaking and adjudication',
      href: '/acts/administrative-procedure-act-1946',
      year: 1946
    },
    {
      title: 'Civil Rights Act (1964)',
      description: 'Prohibited discrimination based on race, color, religion, sex, or national origin',
      href: '/acts/civil-rights-act-1964',
      year: 1964
    },
    {
      title: 'Voting Rights Act (1965)',
      description: 'Outlawed discriminatory voting practices and protected minority voting rights',
      href: '/acts/voting-rights-act-1965',
      year: 1965
    },
    {
      title: 'Controlled Substances Act (1970)',
      description: 'Federalized drug policy and created DEA enforcement framework',
      href: '/acts/controlled-substances-act-1970',
      year: 1970
    },
    {
      title: 'War Powers Resolution (1973)',
      description: 'Limited presidential war powers and required congressional authorization',
      href: '/acts/war-powers-resolution-1973',
      year: 1973
    },
    {
      title: 'Americans with Disabilities Act (1990)',
      description: 'Prohibited discrimination against individuals with disabilities',
      href: '/acts/americans-with-disabilities-act-1990',
      year: 1990
    },
    {
      title: 'PATRIOT Act (2001)',
      description: 'Expanded surveillance and law enforcement powers post-9/11',
      href: '/acts/patriot-act-2001',
      year: 2001
    },
    {
      title: 'Affordable Care Act (2010)',
      description: 'Major healthcare reform expanding insurance coverage and regulation',
      href: '/acts/affordable-care-act-2010',
      year: 2010
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Acts of Congress
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-100">
              Federal Acts that shape rights, duties, and powers in the U.S.
            </p>
            <p className="text-lg max-w-3xl mx-auto text-gray-200">
              Major legislation that defines government powers and limits, establishes individual rights,
              and shapes the economy, environment, security, and social policy.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">📚 Understanding Federal Acts</h2>
            <p className="text-gray-700 mb-4">
              This section organizes <strong>major Acts of Congress</strong> that have shaped American law, 
              governance, rights, and daily life.
            </p>
            <p className="text-gray-700 mb-4">
              Each Act entry provides:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Link to the text of the statute</li>
              <li>Historical context and purpose</li>
              <li>Impact on rights, governance, and society</li>
              <li>Key sections and citations</li>
              <li>Updates and live controversies</li>
            </ul>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-6">
              <h3 className="text-xl font-bold text-blue-900 mb-2">🏛 Why It Matters</h3>
              <p className="text-gray-700">
                Understanding these Acts is essential because they define the <strong>powers and limits</strong> of 
                government, establish and protect <strong>individual rights</strong>, shape the economy, environment, 
                security, and social policy, and provide insight into the ongoing debate over the role of Congress 
                vs. the states vs. the courts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Browse Acts by Category</h2>
          <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
            Explore all {actsData.totalActs} federal acts organized by policy area. Click on a category to see all related acts.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {actsData.categories.map((category) => (
              <div
                key={category.name}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-blue-600 p-6"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {category.name}
                  </h3>
                  <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {category.count}
                  </span>
                </div>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {category.acts.map((act) => (
                    <Link
                      key={act.slug}
                      href={`/acts/${act.slug}`}
                      className="block text-sm text-gray-700 hover:text-blue-600 hover:underline"
                    >
                      <span className="font-semibold">{act.year}:</span> {act.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timelines */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Historical Timelines</h2>
          <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
            See how legislation evolved over time in key policy areas.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {timelines.map((timeline) => {
              const IconComponent = timeline.icon;
              return (
                <Link
                  key={timeline.href}
                  href={timeline.href}
                  className={`block bg-gradient-to-br ${timeline.color} rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 p-6`}
                >
                  <div className="flex items-start space-x-4">
                    <IconComponent className="w-10 h-10" />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {timeline.title}
                      </h3>
                      <p className="text-gray-700 text-sm">
                        {timeline.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Major Acts */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Most Influential Acts</h2>
          <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
            Landmark legislation that fundamentally shaped American law and society.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {majorActs.map((act) => (
              <Link
                key={act.href}
                href={act.href}
                className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-gray-200 hover:border-blue-600 p-6"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">
                    {act.title}
                  </h3>
                  <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {act.year}
                  </span>
                </div>
                <p className="text-gray-700 text-sm">
                  {act.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
