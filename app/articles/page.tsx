import Link from 'next/link';
import { Landmark, Building2, Scale, Map, FileEdit, Zap, Target } from 'lucide-react';

export default function ArticlesPage() {
  const articles = [
    {
      number: 'I',
      title: 'The Legislative Branch',
      icon: Landmark,
      subtitle: 'Congress: The Power to Make Laws',
      description: 'All federal lawmaking authority, including the power to tax, regulate interstate commerce, declare war, and establish federal courts. Divided into House of Representatives and Senate with specific powers and limitations.',
      keyPowers: 'Taxation, interstate commerce regulation, war declarations, federal court creation, impeachment',
      keyLimits: 'Enumerated powers only, no bills of attainder, no ex post facto laws',
      href: '/articles/article-1'
    },
    {
      number: 'II',
      title: 'The Executive Branch',
      icon: Building2,
      subtitle: 'The President: The Power to Execute Laws',
      description: 'Presidential powers including command of armed forces, treaty-making, appointments, and faithful execution of laws. Establishes Electoral College system and impeachment process.',
      keyPowers: 'Commander-in-Chief, treaty negotiations, federal appointments, law enforcement',
      keyLimits: 'Senate approval for treaties/appointments, congressional oversight, impeachment',
      href: '/articles/article-2'
    },
    {
      number: 'III',
      title: 'The Judicial Branch',
      icon: Scale,
      subtitle: 'Federal Courts: The Power to Interpret Laws',
      description: 'Federal judiciary structure, judicial independence, and constitutional protections. Establishes Supreme Court and defines federal court jurisdiction over constitutional questions and interstate disputes.',
      keyPowers: 'Constitutional interpretation, federal law adjudication, interstate dispute resolution',
      keyLimits: 'Cases and controversies only, no advisory opinions, judicial impeachment possible',
      href: '/articles/article-3'
    },
    {
      number: 'IV',
      title: 'Interstate Relations',
      icon: Map,
      subtitle: 'States Working Together: Federalism in Action',
      description: 'How states interact with each other and requirements for mutual recognition. Includes Full Faith and Credit Clause, extradition procedures, and federal guarantee of republican government.',
      keyPrinciples: 'Full Faith and Credit, interstate privileges and immunities, state admission process',
      keyProtections: 'Republican government guarantee, protection from invasion and domestic violence',
      href: '/articles/article-4'
    },
    {
      number: 'V',
      title: 'Amendment Process',
      icon: FileEdit,
      subtitle: 'Constitutional Change: How to Modify the Constitution',
      description: 'The deliberately difficult process for amending the Constitution. Requires broad consensus through multiple pathways for both proposing and ratifying constitutional changes.',
      proposalMethods: 'Congressional 2/3 vote OR Constitutional Convention',
      ratificationMethods: 'State legislatures 3/4 OR State conventions 3/4',
      href: '/articles/article-5'
    },
    {
      number: 'VI',
      title: 'Federal Supremacy',
      icon: Zap,
      subtitle: 'Supreme Law of the Land: Federal vs State Authority',
      description: 'The Supremacy Clause establishing federal constitutional law as supreme, oath requirements for all officials, and prohibition on religious tests for public office.',
      corePrinciple: 'Federal law supreme when constitutional',
      requirements: 'Constitutional oath for all federal and state officials',
      href: '/articles/article-6'
    },
    {
      number: 'VII',
      title: 'Ratification',
      icon: Target,
      subtitle: 'Constitutional Birth: How the Constitution Became Law',
      description: 'The historical process by which the Constitution replaced the Articles of Confederation, requiring only nine states for ratification through popular conventions.',
      requirements: '9 of 13 state ratifications through popular conventions',
      legacy: 'Established constitutional legitimacy through popular sovereignty',
      href: '/articles/article-7'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">The Seven Articles of the U.S. Constitution</h1>
          <p className="text-xl max-w-4xl leading-relaxed">
            The Constitution's seven Articles establish the framework of American government — creating three branches, 
            defining their powers, and setting the rules for how they operate together. Each article is now available 
            as a detailed, focused analysis using the <strong>TICRI Constitutional Breakdown</strong> methodology.
          </p>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Navigate by Article</h2>
        
        <div className="space-y-8">
          {articles.map((article, index) => {
            const IconComponent = article.icon;
            return (
              <Link 
                key={article.number}
                href={article.href}
                className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-8 border-l-4 border-blue-600"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <IconComponent className="w-16 h-16 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">
                        Article {article.number} — {article.title}
                      </h3>
                    </div>
                    <p className="text-lg font-semibold text-blue-600 mb-4">{article.subtitle}</p>
                    <p className="text-gray-700 mb-4 leading-relaxed">{article.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    {article.keyPowers && (
                      <div>
                        <span className="font-semibold text-gray-900">Key Powers: </span>
                        <span className="text-gray-600">{article.keyPowers}</span>
                      </div>
                    )}
                    {article.keyLimits && (
                      <div>
                        <span className="font-semibold text-gray-900">Key Limits: </span>
                        <span className="text-gray-600">{article.keyLimits}</span>
                      </div>
                    )}
                    {article.keyPrinciples && (
                      <div>
                        <span className="font-semibold text-gray-900">Key Principles: </span>
                        <span className="text-gray-600">{article.keyPrinciples}</span>
                      </div>
                    )}
                    {article.keyProtections && (
                      <div>
                        <span className="font-semibold text-gray-900">Key Protections: </span>
                        <span className="text-gray-600">{article.keyProtections}</span>
                      </div>
                    )}
                    {article.proposalMethods && (
                      <div>
                        <span className="font-semibold text-gray-900">Proposal Methods: </span>
                        <span className="text-gray-600">{article.proposalMethods}</span>
                      </div>
                    )}
                    {article.ratificationMethods && (
                      <div>
                        <span className="font-semibold text-gray-900">Ratification Methods: </span>
                        <span className="text-gray-600">{article.ratificationMethods}</span>
                      </div>
                    )}
                    {article.corePrinciple && (
                      <div>
                        <span className="font-semibold text-gray-900">Core Principle: </span>
                        <span className="text-gray-600">{article.corePrinciple}</span>
                      </div>
                    )}
                    {article.requirements && (
                      <div>
                        <span className="font-semibold text-gray-900">Requirements: </span>
                        <span className="text-gray-600">{article.requirements}</span>
                      </div>
                    )}
                    {article.legacy && (
                      <div>
                        <span className="font-semibold text-gray-900">Legacy: </span>
                        <span className="text-gray-600">{article.legacy}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
            );
          })}
        </div>

        {/* Understanding Section */}
        <div className="mt-20 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding the Constitutional Framework</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Why Seven Articles?</h3>
            <p className="text-gray-700 mb-4">The Framers organized the Constitution into seven logical divisions:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Articles I-III:</strong> The three branches of government (separation of powers)</li>
              <li><strong>Article IV:</strong> How states relate to each other (federalism)</li>
              <li><strong>Article V:</strong> How to change the Constitution (amendment process)</li>
              <li><strong>Article VI:</strong> Which laws are supreme (federal supremacy)</li>
              <li><strong>Article VII:</strong> How the Constitution became valid (ratification)</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Key Constitutional Principles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">🔄 Separation of Powers</h4>
                <p className="text-gray-700 text-sm">Each branch has distinct functions to prevent concentration of power</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">⚖️ Checks and Balances</h4>
                <p className="text-gray-700 text-sm">Each branch can limit the others to prevent abuse</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">🏛️ Federalism</h4>
                <p className="text-gray-700 text-sm">Power divided between national and state governments</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">📋 Enumerated Powers</h4>
                <p className="text-gray-700 text-sm">Federal government has only the powers specifically granted</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">👥 Popular Sovereignty</h4>
                <p className="text-gray-700 text-sm">Government authority derives from the people</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">The TICRI Constitutional Breakdown Method</h3>
            <p className="text-gray-700 mb-4">Each article page uses our comprehensive TICRI analysis framework:</p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>📜 Exact Constitutional Text</strong> — Word-for-word from the Constitution</li>
              <li><strong>💭 Plain English Translation</strong> — What it actually means</li>
              <li><strong>⚡ Government Powers Created</strong> — What authority is granted</li>
              <li><strong>🚫 Government Restrictions</strong> — What limits are imposed</li>
              <li><strong>❌ What It Does NOT Say</strong> — Common misconceptions clarified</li>
              <li><strong>⚖️ Supreme Court Interpretations</strong> — How courts have applied it</li>
              <li><strong>📝 Constitutional Amendments</strong> — How it's been modified</li>
              <li><strong>🎯 TICRI Summary</strong> — Key takeaways for civic education</li>
            </ol>
          </div>
        </div>

        {/* Why This Matters */}
        <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Why This Matters</h3>
          <p className="text-gray-700 mb-3">Understanding the Constitution's structure is essential for informed citizenship. These seven articles:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
            <li><strong>Create</strong> the government we live under today</li>
            <li><strong>Define</strong> what our government can and cannot do</li>
            <li><strong>Establish</strong> how power is divided and checked</li>
            <li><strong>Guarantee</strong> both federal authority and state rights</li>
            <li><strong>Ensure</strong> democratic participation and constitutional change</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
