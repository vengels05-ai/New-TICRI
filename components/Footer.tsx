import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0F2C47] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">
              <span className="text-[#C41E3A]">TICRI</span>
            </h3>
            <p className="text-gray-300 mb-4">
              The Informed Constitutional Republic Initiative - Plain-English explainers of the Constitution, 
              rights, federalism, and government structure.
            </p>
            <p className="text-sm text-gray-400">
              ™ {new Date().getFullYear()} TICRI. All rights reserved.
            </p>
          </div>

          {/* Learn */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Learn</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/constitution" className="text-gray-300 hover:text-[#C41E3A] transition-colors">
                  Constitution
                </Link>
              </li>
              <li>
                <Link href="/rights" className="text-gray-300 hover:text-[#C41E3A] transition-colors">
                  Rights
                </Link>
              </li>
              <li>
                <Link href="/cases" className="text-gray-300 hover:text-[#C41E3A] transition-colors">
                  Supreme Court Cases
                </Link>
              </li>
              <li>
                <Link href="/voting" className="text-gray-300 hover:text-[#C41E3A] transition-colors">
                  Voting
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/federalism" className="text-gray-300 hover:text-[#C41E3A] transition-colors">
                  Federalism
                </Link>
              </li>
              <li>
                <Link href="/state-powers" className="text-gray-300 hover:text-[#C41E3A] transition-colors">
                  State Powers
                </Link>
              </li>
              <li>
                <Link href="/federal-funding" className="text-gray-300 hover:text-[#C41E3A] transition-colors">
                  Federal Funding
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#C41E3A] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#C41E3A] transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>
            Understanding your government starts with understanding the Constitution.
          </p>
        </div>
      </div>
    </footer>
  );
}
