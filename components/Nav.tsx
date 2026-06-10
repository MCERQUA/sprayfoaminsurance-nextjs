'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

const serviceLinks = [
  { label: 'General Liability Insurance', href: '/services/general-liability-insurance/' },
  { label: 'Inland Marine (Rig)', href: '/inland-marine/spray_foam_rig_insurance/' },
  { label: 'Commercial Auto', href: '/services/commercial-auto/' },
  { label: 'Surety Bonds', href: '/services/surety-bonds/' },
  { label: 'Environmental Liability', href: '/services/environmental-liability/' },
  { label: 'Safety & Compliance', href: '/safety-and-compliance-support/' },
  { label: "Workers' Compensation", href: '/services/workers-compensation-insurance-for-spray-foam-contractors/' },
];

const resourceLinks = [
  { label: 'Attic Insulation Certificate', href: '/attic-insulation-certificate/' },
  { label: 'Work Record Form', href: '/spf-resources/work-record-form/' },
];

const contactLinks = [
  { label: 'Get a Quote', href: '/quote/' },
];

const mainNav = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services/', children: serviceLinks },
  { label: 'Resources', href: '/spf-resources/', children: resourceLinks },
  { label: 'Blog', href: '/blog/' },
  { label: 'About Us', href: '/about-us/' },
  { label: 'Contact Us', href: '/contact-us/', children: contactLinks },
];

function DropdownItem({ item }: { item: typeof mainNav[0] }) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="text-white text-sm font-medium px-3 py-2 hover:text-[#2ea3f2] transition-colors whitespace-nowrap"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        className="flex items-center gap-1 text-white text-sm font-medium px-3 py-2 hover:text-[#2ea3f2] transition-colors whitespace-nowrap"
      >
        {item.label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </Link>
      {open && (
        <div className="absolute top-full left-0 pt-1 z-50 min-w-[220px]">
          <div className="bg-[#0d1421] border border-[#2ea3f2]/20 rounded shadow-xl py-1">
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#2ea3f2]/10 hover:text-[#2ea3f2] transition-colors"
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Layer 1 — Top bar */}
      <div className="bg-gradient-to-r from-[#1a6faa] via-[#2ea3f2] to-[#1a6faa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <a
            href="tel:844-967-5247"
            className="block text-center text-white text-sm font-semibold py-2 hover:text-white/90 transition-colors tracking-wide"
          >
            CALL 844-967-5247 (844-WORK-247) FOR A QUICK QUOTE
          </a>
        </div>
      </div>

      {/* Layer 2 — Logo bar */}
      <div className="bg-[#080d16] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 gap-4">
            {/* Logo */}
            <Link href="/" className="shrink-0 flex items-center gap-3">
              <Image
                src="/assets/icons/logo-transparent.png"
                alt="Spray Foam Insurance"
                width={52}
                height={52}
                className="h-[52px] w-auto object-contain"
              />
              <div className="hidden sm:block leading-none">
                <span className="font-headline font-bold text-sm text-gray-100 tracking-wide block">Spray Foam</span>
                <span className="font-headline font-semibold text-sm text-[#2ea3f2] tracking-wide block">Insurance.com</span>
              </div>
            </Link>

            {/* Contact info + CTAs */}
            <div className="hidden md:flex items-center gap-5">
              <a
                href="mailto:josh@sprayfoaminsurance.com"
                className="flex items-center gap-2 text-gray-300 hover:text-[#2ea3f2] transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-[#2ea3f2]" />
                <span>josh@sprayfoaminsurance.com</span>
              </a>
              <a
                href="tel:844-967-5247"
                className="flex items-center gap-2 bg-[#2ea3f2] hover:bg-[#1a8fd4] text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Us Now
              </a>
              <Link
                href="/quote/"
                className="bg-transparent border border-[#2ea3f2] hover:bg-[#2ea3f2]/10 text-[#2ea3f2] text-sm font-semibold px-4 py-2 rounded transition-colors"
              >
                Get Quote
              </Link>
            </div>

            {/* Social icons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://www.facebook.com/sprayfoaminsurance"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#2ea3f2] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/sprayfoamins"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#2ea3f2] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/sprayfoaminsurance"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#2ea3f2] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-gray-300 hover:text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Layer 3 — Main nav bar */}
      <div className="hidden md:block bg-[#0d1421] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Nav links */}
            <div className="flex items-center">
              {mainNav.map((item) => (
                <DropdownItem key={item.href} item={item} />
              ))}
            </div>
            {/* Sign up CTA */}
            <Link
              href="/quote/"
              className="bg-[#f59e0b] hover:bg-[#d97706] text-white text-sm font-bold px-5 py-2.5 my-1 rounded transition-colors uppercase tracking-wide whitespace-nowrap"
            >
              Sign Up Now
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#080d16] border-t border-white/10 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            {mainNav.map((item) => (
              <div key={item.href}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() =>
                        setOpenMobileSection(
                          openMobileSection === item.label ? null : item.label
                        )
                      }
                      className="flex items-center justify-between w-full py-2.5 text-white text-sm font-medium border-b border-white/10"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openMobileSection === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openMobileSection === item.label && (
                      <div className="pl-4 py-1 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block py-2 text-sm text-gray-400 hover:text-[#2ea3f2] transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-2.5 text-white text-sm font-medium border-b border-white/10 hover:text-[#2ea3f2] transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="tel:844-967-5247"
                className="flex items-center justify-center gap-2 bg-[#2ea3f2] text-white text-sm font-bold py-3 rounded"
              >
                <Phone className="w-4 h-4" />
                Call 844-967-5247
              </a>
              <Link
                href="/quote/"
                className="flex items-center justify-center bg-[#f59e0b] text-white text-sm font-bold py-3 rounded uppercase tracking-wide"
                onClick={() => setMobileOpen(false)}
              >
                Sign Up Now
              </Link>
              <Link
                href="/dashboard/"
                className="flex items-center justify-center border border-[#2ea3f2] text-[#2ea3f2] text-sm font-semibold py-3 rounded"
                onClick={() => setMobileOpen(false)}
              >
                Client Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
