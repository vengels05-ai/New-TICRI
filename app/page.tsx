import Link from 'next/link';
import { TOPICS } from '@/config/nav';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  // Only show ready topics on homepage
  const featuredTopics = TOPICS.filter(t => t.status === 'ready');

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0F2C47] via-[#1A3A5C] to-[#C41E3A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The Informed Constitutional Republic Initiative
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Plain-English explainers of the Constitution, rights, and government structure
            </p>
            <p className="text-lg max-w-3xl mx-auto text-gray-200">
              Understand how America's government was designed to work, what your rights actually mean,
              and how power is supposed to be divided—so you can focus your energy on the real systems
              and decision-makers shaping your life.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0F2C47]">
            Our Mission
          </h2>
          <p className="text-xl text-gray-800 leading-relaxed">
            To explain the Constitution, rights, and government structure in plain English — 
            so Americans can focus their energy on the real decision-makers and systems shaping 
            their lives, instead of fighting one another.
          </p>
        </div>
      </section>

      {/* Featured Topics Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F2C47]">
              Topics
            </h2>
            <Link
              href="/topics"
              className="inline-flex items-center gap-2 text-[#C41E3A] hover:text-[#9B1829] font-semibold transition-colors"
            >
              View All
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTopics.map((topic, index) => (
              <Link
                key={index}
                href={topic.href}
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#C41E3A] hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <h3 className="text-2xl font-bold mb-3 text-[#0F2C47]">
                  {topic.title}
                </h3>
                <p className="text-gray-800">
                  {topic.description}
                </p>
              </Link>
            ))}
          </div>

          {featuredTopics.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Topics coming soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* What We Break Down */}
      <section className="py-16 bg-gradient-to-r from-[#0F2C47] to-[#1A3A5C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What We Break Down
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#DC2F47]">The Constitution & Amendments</h3>
              <p className="text-gray-200">America's founding document and its evolution through 27 amendments.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#DC2F47]">Citizens' Rights</h3>
              <p className="text-gray-200">Individual liberties and constitutional protections explained simply.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#DC2F47]">Landmark Supreme Court Cases</h3>
              <p className="text-gray-200">Decisions that shaped American law and society.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#DC2F47]">Federalism & State Powers</h3>
              <p className="text-gray-200">How federalism was supposed to work vs. how it works today.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#DC2F47]">Federal Legislation</h3>
              <p className="text-gray-200">Major acts of Congress that shaped rights, powers, and policy.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#DC2F47]">Government Data & Resources</h3>
              <p className="text-gray-200">Budget data, voting systems, and how Congress works.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0F2C47]">
            Start Learning
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Understanding your government starts with understanding the Constitution.
          </p>
          <Link
            href="/constitution"
            className="inline-block bg-[#C41E3A] hover:bg-[#9B1829] text-white px-10 py-4 rounded-lg text-xl font-bold transition-colors shadow-lg"
          >
            Read the Constitution
          </Link>
        </div>
      </section>

      {/* Useful Links */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6 text-[#0F2C47] text-center">
            Useful Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <a 
                href="https://www.usafacts.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg font-semibold text-[#C41E3A] hover:text-[#9B1829] transition-colors"
              >
                USAFacts.org
              </a>
              <p className="text-gray-700 mt-2">
                A nonprofit, neutral, government-sourced data reference.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <a 
                href="https://www.535project.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg font-semibold text-[#C41E3A] hover:text-[#9B1829] transition-colors"
              >
                Project 535
              </a>
              <p className="text-gray-700 mt-2">
                Civic engagement and information about how Congress works.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
