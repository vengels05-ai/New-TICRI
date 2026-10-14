'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { primaryNavItems, secondaryNavItems } from './siteNavigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0F2C47] text-white shadow-lg">
      <nav className="w-full px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-20 max-w-full items-center justify-between">
          <Link href="/" className="group flex items-center space-x-3" onClick={closeMenus}>
            <div className="relative h-12 w-12 transition-transform group-hover:scale-105 sm:h-14 sm:w-14">
              <Image
                src="/TICRI.png"
                alt="TICRI Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden text-lg font-bold sm:text-xl lg:block">
              <span className="text-white">TICRI</span>
            </div>
          </Link>

          <div className="hidden items-center space-x-6 md:flex lg:space-x-8">
            {primaryNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold transition-colors hover:text-[#C41E3A] lg:text-base"
              >
                {item.label}
              </Link>
            ))}

            <div className="relative">
              <button
                type="button"
                className="cursor-pointer text-sm font-semibold transition-colors hover:text-[#C41E3A] lg:text-base"
                aria-expanded={openDropdown === 'more'}
                onClick={() => setOpenDropdown(openDropdown === 'more' ? null : 'more')}
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
                  <div className="w-60 rounded-lg bg-white py-2 text-gray-800 shadow-xl">
                    {secondaryNavItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-4 py-2 hover:bg-gray-100 ${item.highlight ? 'font-bold text-[#C41E3A]' : ''}`}
                        onClick={closeMenus}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <button
            type="button"
            className="rounded-md p-2 text-white transition-colors hover:bg-[#1A3A5C] md:hidden"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
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

        {mobileMenuOpen && (
          <div className="max-h-[80vh] space-y-2 overflow-y-auto py-4 md:hidden">
            {primaryNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-md px-3 py-2 transition-colors hover:bg-[#1A3A5C]"
                onClick={closeMenus}
              >
                {item.label}
              </Link>
            ))}

            <div className="my-2 border-t border-[#1A3A5C]" />
            <div className="px-3 py-2 text-xs font-semibold text-gray-300">MORE INFO</div>

            {secondaryNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-md px-3 py-2 transition-colors hover:bg-[#1A3A5C] ${
                  item.highlight ? 'bg-[#C41E3A] font-bold hover:bg-[#A01828]' : ''
                }`}
                onClick={closeMenus}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
