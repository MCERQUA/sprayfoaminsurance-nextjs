import Link from 'next/link';

// Mirrors the live site's primary nav, replicated in the footer (matches
// sprayfoaminsurance.com footer structure exactly — STRUCTURE-NOTES.md).
const navigate = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'General Liability Insurance', href: '/services/general-liability-insurance' },
  { label: 'Inland Marine', href: '/inland-marine/spray_foam_rig_insurance' },
  { label: 'Commercial Auto', href: '/services/commercial-auto' },
  { label: 'Surety Bonds', href: '/services/surety-bonds' },
  { label: 'Environmental Liability', href: '/services/environmental-liability' },
  { label: 'Safety and Compliance', href: '/safety-and-compliance-support' },
  { label: "Workers' Compensation", href: '/services/workers-compensation-insurance-for-spray-foam-contractors' },
  { label: 'Resources', href: '/spf-resources' },
  { label: 'Attic Insulation Certificate', href: '/attic-insulation-certificate' },
  { label: 'Work Record Form', href: '/spf-resources/work-record-form' },
  { label: 'Blog', href: '/blog' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'Quote', href: '/quote' },
];

// "Spray Foam Insurance Service Pages" secondary list — en-dash prefixed,
// exactly as it appears on the live footer.
const servicePages = [
  { label: 'General Liability Insurance', href: '/services/general-liability-insurance' },
  { label: 'Commercial Auto Insurance', href: '/services/commercial-auto' },
  { label: 'Surety Bonds', href: '/services/surety-bonds' },
  { label: 'Environmental Liability Insurance', href: '/services/environmental-liability' },
  { label: 'Safety and Compliance Support', href: '/safety-and-compliance-support' },
  { label: "Workers' Compensation Insurance", href: '/services/workers-compensation-insurance-for-spray-foam-contractors' },
];

// Extras kept beyond the live site's footer (dashboard/legal pages this
// replica adds on top of the live route set).
const legal = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms' },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-headline font-bold text-xl blue-gradient-text mb-3">
              Spray Foam Insurance
            </h3>
            <p className="text-muted text-sm leading-relaxed mb-4">
              Specialized insurance solutions designed exclusively for spray polyurethane foam contractors.
            </p>
            <a
              href="tel:8449675247"
              className="text-primary font-semibold text-sm hover:text-accent transition-colors block mb-1"
            >
              844-967-5247
            </a>
            <a
              href="mailto:Josh@sprayfoaminsurance.com"
              className="text-muted text-sm hover:text-primary transition-colors"
            >
              Josh@sprayfoaminsurance.com
            </a>
          </div>

          {/* Navigate — mirrors the live main nav */}
          <div>
            <h4 className="font-label font-semibold text-xs label-text text-muted mb-4">Navigate</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {navigate.map((l) => (
                <li key={l.href + l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Spray Foam Insurance Service Pages */}
          <div>
            <h4 className="font-label font-semibold text-xs label-text text-muted mb-4">
              Spray Foam Insurance Service Pages
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
              {servicePages.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted hover:text-primary transition-colors"
                  >
                    &ndash; {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-muted text-xs">
            &copy; {new Date().getFullYear()} Spray Foam Insurance. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {legal.map((l) => (
              <Link key={l.href} href={l.href} className="text-muted text-xs hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
