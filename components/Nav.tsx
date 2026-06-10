'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SignInButton, UserButton, SignedIn, SignedOut } from '@clerk/nextjs';
import { Menu, X, ChevronDown } from 'lucide-react';

const services = [
  { label: 'General Liability', href: '/services/general-liability' },
  { label: "Workers' Comp", href: '/services/workers-comp' },
  { label: 'Commercial Auto', href: '/services/commercial-auto' },
  { label: 'Surety Bonds', href: '/services/surety-bonds' },
  { label: 'Environmental Liability', href: '/services/environmental-liability' },
  { label: 'Rig & Equipment', href: '/services/rig-and-equipment' },
];

const navLinks = [
  { label: 'Resources', href: '/spf-resources' },
  { label: 'Blog', href: '/blog' },
  { label: 'Safety & Compliance', href: '/safety-and-compliance-support' },
  { label: 'Contact', href: '/contact-us' },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="nav-glass fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="font-headline font-bold text-xl blue-gradient-text">
              Spray Foam Insurance
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Services dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-sm text-text hover:text-primary transition-colors font-medium"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                Services <ChevronDown className="w-4 h-4" />
              </button>
              {servicesOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-56 glass-card py-2 z-50"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2 text-sm text-muted hover:text-primary hover:bg-primary/5 transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-text hover:text-primary transition-colors font-medium"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/quote"
              className="primary-btn px-4 py-2 rounded-full text-sm font-semibold font-label"
            >
              Get a Quote
            </Link>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="secondary-btn px-4 py-2 rounded-full text-sm font-semibold font-label">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-muted hover:text-text p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-primary/10 bg-surface">
          <div className="px-4 py-4 space-y-3">
            <div className="space-y-1">
              <p className="text-xs label-text text-muted mb-2">Services</p>
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="block py-1.5 text-sm text-muted hover:text-primary transition-colors pl-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {s.label}
                </Link>
              ))}
            </div>
            <div className="border-t border-primary/10 pt-3 space-y-1">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block py-1.5 text-sm text-text hover:text-primary transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="border-t border-primary/10 pt-3 flex flex-col gap-2">
              <Link
                href="/quote"
                className="primary-btn px-4 py-2.5 rounded-full text-sm font-semibold font-label text-center"
                onClick={() => setMobileOpen(false)}
              >
                Get a Quote
              </Link>
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="secondary-btn px-4 py-2.5 rounded-full text-sm font-semibold font-label w-full">
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <div className="flex items-center gap-2 px-2">
                  <UserButton afterSignOutUrl="/" />
                  <span className="text-sm text-muted">My Account</span>
                </div>
              </SignedIn>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
