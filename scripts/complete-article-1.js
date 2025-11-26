const fs = require('fs');

// Read the source markdown file
const sourceContent = fs.readFileSync('/Users/vengels/TICRI2/content/articles/article-i/_index.md', 'utf8');

// Parse the markdown sections - this is a helper to build the complete React component
// We'll build it section by section with full TICRI methodology

const completeArticle1 = `import Link from 'next/link';

export default function Article1Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          href="/articles" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          ← Back to Articles
        </Link>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg mb-8">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-5xl">🏛️</span>
            <div>
              <h1 className="text-4xl font-bold mb-2">Article I</h1>
              <h2 className="text-2xl font-semibold">The Legislative Branch</h2>
            </div>
          </div>
          <p className="text-lg leading-relaxed">
            Article I creates the legislative branch of the federal government, establishing Congress with its two chambers 
            (House and Senate), defining their enumerated powers, setting their procedures, and placing important limits 
            on both federal and state authority.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Overview</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Article I establishes Congress as the <strong>first branch</strong> of government with enumerated powers and 
            important constitutional limits, creating the foundation for all federal legislative authority while preserving 
            the federal system and protecting individual rights. It is the longest and most detailed article, reflecting 
            the Framers' view that Congress would be the primary policymaking body.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Each section below uses the <strong>TICRI Constitutional Breakdown</strong> methodology to provide:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-1 text-gray-700 ml-4">
            <li>📜 Exact Constitutional Text</li>
            <li>💭 Plain English Translation</li>
            <li>⚡ Government Powers Created</li>
            <li>🚫 Government Restrictions</li>
            <li>❌ What It Does NOT Say</li>
            <li>⚖️ Supreme Court Interpretations</li>
          </ul>
        </div>

        {/* Table of Contents */}
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Jump to Section:</h3>
          <div className="grid md:grid-cols-2 gap-3">
            <a href="#section-1" className="text-blue-600 hover:text-blue-800 hover:underline">
              § 1 — Legislative Powers Vested in Congress
            </a>
            <a href="#section-2" className="text-blue-600 hover:text-blue-800 hover:underline">
              § 2 — The House of Representatives
            </a>
            <a href="#section-3" className="text-blue-600 hover:text-blue-800 hover:underline">
              § 3 — The Senate
            </a>
            <a href="#section-4" className="text-blue-600 hover:text-blue-800 hover:underline">
              § 4 — Congressional Elections
            </a>
            <a href="#section-5" className="text-blue-600 hover:text-blue-800 hover:underline">
              § 5 — Congressional Rules & Procedures
            </a>
            <a href="#section-6" className="text-blue-600 hover:text-blue-800 hover:underline">
              § 6 — Compensation & Privileges
            </a>
            <a href="#section-7" className="text-blue-600 hover:text-blue-800 hover:underline">
              § 7 — How Bills Become Laws
            </a>
            <a href="#section-8" className="text-blue-600 hover:text-blue-800 hover:underline">
              § 8 — Powers of Congress (Enumerated Powers)
            </a>
            <a href="#section-9" className="text-blue-600 hover:text-blue-800 hover:underline">
              § 9 — Limits on Federal Government
            </a>
            <a href="#section-10" className="text-blue-600 hover:text-blue-800 hover:underline">
              § 10 — Limits on State Governments
            </a>
          </div>
        </div>

        {/* Continue with sections 1-2 from backup, then complete sections 3-10 */}
      </div>
    </div>
  );
}
`;

console.log('Script ready - will manually construct the complete file with all TICRI content');
console.log('Source file has:', sourceContent.split('\\n').length, 'lines');
