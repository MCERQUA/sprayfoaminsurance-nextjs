import Link from 'next/link';

const coverage = [
  { label: 'General Liability', href: '/services/general-liability-insurance' },
  { label: "Workers' Comp", href: '/services/workers-compensation-insurance-for-spray-foam-contractors' },
  { label: 'Commercial Auto', href: '/services/commercial-auto' },
  { label: 'Surety Bonds', href: '/services/surety-bonds' },
  { label: 'Environmental Liability', href: '/services/environmental-liability' },
  { label: 'Rig & Equipment', href: '/inland-marine/spray_foam_rig_insurance' },
];

const resources = [
  { label: 'SPF Resources', href: '/spf-resources' },
  { label: 'Blog', href: '/blog' },
  { label: 'Safety & Compliance', href: '/safety-and-compliance-support' },
  { label: 'Get a Quote', href: '/quote' },
];

const company = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Contact', href: '/contact-us' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms' },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-headline font-bold text-xl blue-gradient-text mb-3">
              Spray Foam Insurance
            </h3>
            <p className="text-muted text-sm leading-relaxed mb-4">
              Specialized insurance solutions designed exclusively for spray polyurethane foam contractors.
            </p>
            <a
              href="tel:8449675247"
              className="text-primary font-semibold text-sm hover:text-accent transition-colors"
            >
              844-967-5247
            </a>
          </div>

          {/* Coverage */}
          <div>
            <h4 className="font-label font-semibold text-xs label-text text-muted mb-4">Coverage</h4>
            <ul className="space-y-2">
              {coverage.map((l) => (
                <li key={l.href}>
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

          {/* Resources */}
          <div>
            <h4 className="font-label font-semibold text-xs label-text text-muted mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((l) => (
                <li key={l.href}>
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

          {/* Company */}
          <div>
            <h4 className="font-label font-semibold text-xs label-text text-muted mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((l) => (
                <li key={l.href}>
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
        </div>

        <div className="border-t border-primary/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-muted text-xs">
            &copy; {new Date().getFullYear()} Spray Foam Insurance. All rights reserved.
          </p>
          <p className="text-muted text-xs">
            Licensed insurance agency. Coverage subject to policy terms and conditions.
          </p>
        </div>
      </div>
    </footer>
  );
}
