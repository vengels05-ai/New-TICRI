'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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

            <Link href="/constitution" className="hover:text-[#C41E3A] transition-colors text-sm lg:text-base font-semibold">
              Constitution
            </Link>

            <Link href="/articles" className="hover:text-[#C41E3A] transition-colors text-sm lg:text-base font-semibold">
              Articles
            </Link>

            <Link href="/acts" className="hover:text-[#C41E3A] transition-colors text-sm lg:text-base font-semibold">
              Acts
            </Link>

            <Link href="/cases" className="hover:text-[#C41E3A] transition-colors text-sm lg:text-base font-semibold">
              Cases
            </Link>

            {/* More Info Dropdown */}
            <div 
              className="relative"
            >
              <button 
                className="hover:text-[#C41E3A] transition-colors text-sm lg:text-base font-semibold cursor-pointer"
                onMouseEnter={() => setOpenDropdown('more')}
              >
                More Info
              </button>
              {openDropdown === 'more' && (
                <div 
                  className="absolute right-0 top-full pt-1"
                  onMouseEnter={() => setOpenDropdown('more')}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <div className="w-56 bg-white text-gray-800 rounded-lg shadow-xl py-2">
                    <Link href="/framework" className="block px-4 py-2 hover:bg-gray-100">
                      Framework
                    </Link>
                    <Link href="/rights" className="block px-4 py-2 hover:bg-gray-100">
                      Rights
                    </Link>
                    <Link href="/federalism" className="block px-4 py-2 hover:bg-gray-100">
                      Federalism
                    </Link>
                    <Link href="/state-powers" className="block px-4 py-2 hover:bg-gray-100">
                      State Powers
                    </Link>
                    <Link href="/state-constitutions" className="block px-4 py-2 hover:bg-gray-100">
                      State Constitutions
                    </Link>
                    <Link href="/federal-funding" className="block px-4 py-2 hover:bg-gray-100">
                      Federal Funding
                    </Link>
                    <Link href="/taxes" className="block px-4 py-2 hover:bg-gray-100">
                      Taxes
                    </Link>
                    <Link href="/voting" className="block px-4 py-2 hover:bg-gray-100">
                      Voting
                    </Link>
                    <Link href="/parties" className="block px-4 py-2 hover:bg-gray-100">
                      Parties & Policy
                    </Link>
                    <Link href="/spending" className="block px-4 py-2 hover:bg-gray-100">
                      Government Spending
                    </Link>
                    <Link href="/535" className="block px-4 py-2 hover:bg-gray-100 font-bold text-[#C41E3A]">
                      Project 535
                    </Link>
                    <Link href="/truth-and-law" className="block px-4 py-2 hover:bg-gray-100">
                      Truth and Law
                    </Link>
                    <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">
                      About
                    </Link>
                    <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100">
                      Contact
                    </Link>
                  </div>
                </div>
              )}
            </div>
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
            
            <div className="border-t border-[#1A3A5C] my-2"></div>
            <div className="px-3 py-2 text-xs font-semibold text-gray-300">MORE INFO</div>
            
            <Link
              href="/framework"
              className="block px-3 py-2 rounded-md hover:bg-[#1A3A5C] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Framework
            </Link>
            <Link
              href="/rights"
              className="block px-3 py-2 rounded-md hover:bg-[#1A3A5C] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Rights
            </Link>
            <Link
              href="/federalism"
              className="block px-3 py-2 rounded-md hover:bg-[#1A3A5C] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Federalism
            </Link>
            <Link
              href="/state-powers"
              className="block px-3 py-2 rounded-md hover:bg-[#1A3A5C] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              State Powers
            </Link>
            <Link
              href="/state-constitutions"
              className="block px-3 py-2 rounded-md hover:bg-[#1A3A5C] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              State Constitutions
            </Link>
            <Link
              href="/federal-funding"
              className="block px-3 py-2 rounded-md hover:bg-[#1A3A5C] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Federal Funding
            </Link>
            <Link
              href="/taxes"
              className="block px-3 py-2 rounded-md hover:bg-[#1A3A5C] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Taxes
            </Link>
            <Link
              href="/voting"
              className="block px-3 py-2 rounded-md hover:bg-[#1A3A5C] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Voting
            </Link>
            <Link
              href="/parties"
              className="block px-3 py-2 rounded-md hover:bg-[#1A3A5C] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Parties & Policy
            </Link>
            <Link
              href="/spending"
              className="block px-3 py-2 rounded-md hover:bg-[#1A3A5C] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Government Spending
            </Link>
            <Link
              href="/535"
              className="block px-3 py-2 rounded-md bg-[#C41E3A] hover:bg-[#A01828] transition-colors font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Project 535
            </Link>
            <Link
              href="/truth-and-law"
              className="block px-3 py-2 rounded-md hover:bg-[#1A3A5C] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Truth and Law
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md hover:bg-[#1A3A5C] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
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
