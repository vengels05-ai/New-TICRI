'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const actCategories = [
    "Administrative Law", "Antitrust & Competition", "Banking & Finance", "Civil Rights",
    "Criminal Justice", "Defense & Security", "Economic Policy", "Education",
    "Energy & Environment", "Healthcare & Social", "Immigration", "Labor & Employment",
    "Technology & Privacy", "Voting Rights"
  ];

  const caseCategories = [
    "Foundational", "Civil Rights", "Criminal Justice", "Economic Rights",
    "Executive Power", "Federalism", "First Amendment", "Healthcare Law",
    "Military Service", "Parental Rights", "Separation of Powers", "Wartime Powers"
  ];

  const amendments = Array.from({ length: 27 }, (_, i) => i + 1);

  return (
    <header className="bg-[#0F2C47] text-white sticky top-0 z-50 shadow-lg">
      <nav className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 max-w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 transition-transform group-hover:scale-105">
              <Image
                src="/TICRI.png"
                alt="TICRI Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="text-lg sm:text-xl font-bold hidden lg:block">
              <span className="text-white">TICRI</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link href="/" className="hover:text-[#C41E3A] transition-colors text-sm lg:text-base font-semibold">
              Home
            </Link>

            {/* Constitution Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setOpenDropdown('constitution')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link href="/constitution" className="hover:text-[#C41E3A] transition-colors text-sm lg:text-base font-semibold">
                Constitution
              </Link>
              {openDropdown === 'constitution' && (
                <div className="absolute left-0 mt-2 w-64 bg-white text-gray-800 rounded-lg shadow-xl py-2 max-h-96 overflow-y-auto">
                  <Link href="/constitution/preamble" className="block px-4 py-2 hover:bg-gray-100">
                    Preamble
                  </Link>
                  {amendments.map(num => (
                    <Link 
                      key={num} 
                      href={`/constitution/amendment-${num}`} 
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Amendment {num}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Articles Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setOpenDropdown('articles')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link href="/articles" className="hover:text-[#C41E3A] transition-colors text-sm lg:text-base font-semibold">
                Articles
              </Link>
              {openDropdown === 'articles' && (
                <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-xl py-2">
                  {['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'].map(num => (
                    <Link 
                      key={num} 
                      href={`/articles/article-${num.toLowerCase()}`} 
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Article {num}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Acts Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setOpenDropdown('acts')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link href="/acts" className="hover:text-[#C41E3A] transition-colors text-sm lg:text-base font-semibold">
                Acts
              </Link>
              {openDropdown === 'acts' && (
                <div className="absolute left-0 mt-2 w-64 bg-white text-gray-800 rounded-lg shadow-xl py-2 max-h-96 overflow-y-auto">
                  {actCategories.map(cat => (
                    <Link 
                      key={cat} 
                      href={`/acts#${cat.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Cases Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setOpenDropdown('cases')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link href="/cases" className="hover:text-[#C41E3A] transition-colors text-sm lg:text-base font-semibold">
                Cases
              </Link>
              {openDropdown === 'cases' && (
                <div className="absolute left-0 mt-2 w-64 bg-white text-gray-800 rounded-lg shadow-xl py-2 max-h-96 overflow-y-auto">
                  {caseCategories.map(cat => (
                    <Link 
                      key={cat} 
                      href={`/cases/${cat.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/contact" className="hover:text-[#C41E3A] transition-colors text-sm lg:text-base font-semibold">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden rounded-md p-2 text-white hover:bg-[#1A3A5C] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 max-h-[80vh] overflow-y-auto">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md hover:bg-[#1A3A5C] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/constitution"
              className="block px-3 py-2 rounded-md hover:bg-[#1A3A5C] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Constitution
            </Link>
            <Link
              href="/articles"
              className="block px-3 py-2 rounded-md hover:bg-[#1A3A5C] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Articles
            </Link>
            <Link
              href="/acts"
              className="block px-3 py-2 rounded-md hover:bg-[#1A3A5C] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Acts
            </Link>
            <Link
              href="/cases"
              className="block px-3 py-2 rounded-md hover:bg-[#1A3A5C] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cases
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md hover:bg-[#1A3A5C] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
