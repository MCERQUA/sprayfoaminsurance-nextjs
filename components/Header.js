'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about-us/', label: 'About Us' },
  {
    href: '/services/',
    label: 'Services',
    children: [
      { href: '/services/general-liability-insurance/', label: 'General Liability' },
      { href: '/services/workers-compensation-insurance-for-spray-foam-contractors/', label: "Workers' Comp" },
      { href: '/services/commercial-auto/', label: 'Commercial Auto' },
      { href: '/services/environmental-liability/', label: 'Environmental Liability' },
      { href: '/services/surety-bonds/', label: 'Surety Bonds' },
    ],
  },
  { href: '/inland-marine/', label: 'Inland Marine' },
  { href: '/safety-and-compliance-support/', label: 'Safety & Compliance' },
  { href: '/spf-resources/', label: 'Resources' },
  { href: '/blog/', label: 'Blog' },
  { href: '/contact-us/', label: 'Contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="bg-dark text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/images/Spray_foam_insurance_logo.png"
              alt="Spray Foam Insurance"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-gray-200 hover:text-white hover:bg-white/10 rounded transition-colors"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white text-gray-800 rounded-lg shadow-xl py-2 min-w-[240px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-primary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:8449675247" className="text-white font-bold text-lg">
              844-967-5247
            </a>
            <Link
              href="/quote/"
              className="bg-secondary hover:bg-orange-600 text-white px-5 py-2.5 rounded font-semibold text-sm transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-dark border-t border-white/10">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="block px-3 py-2 text-gray-200 hover:text-white hover:bg-white/10 rounded"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pl-6">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-3 py-1.5 text-sm text-gray-400 hover:text-white"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-white/10">
              <a href="tel:8449675247" className="block px-3 py-2 text-white font-bold">
                844-967-5247
              </a>
              <Link
                href="/quote/"
                className="block mt-2 bg-secondary text-white text-center px-5 py-2.5 rounded font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
