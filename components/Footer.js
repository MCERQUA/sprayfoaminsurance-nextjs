import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 - About */}
          <div>
            <img
              src="/images/Spray_foam_insurance_logo.png"
              alt="Spray Foam Insurance"
              className="h-10 mb-4 brightness-0 invert"
            />
            <p className="text-sm text-gray-400 leading-relaxed">
              Specialized insurance solutions for spray foam contractors.
              Protecting your business, equipment, and reputation.
            </p>
            <div className="mt-4">
              <a href="tel:8449675247" className="text-secondary font-bold text-lg hover:text-orange-400">
                844-967-5247
              </a>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/general-liability-insurance/" className="text-sm text-gray-400 hover:text-white transition-colors">General Liability</Link></li>
              <li><Link href="/services/workers-compensation-insurance-for-spray-foam-contractors/" className="text-sm text-gray-400 hover:text-white transition-colors">Workers&apos; Compensation</Link></li>
              <li><Link href="/services/commercial-auto/" className="text-sm text-gray-400 hover:text-white transition-colors">Commercial Auto</Link></li>
              <li><Link href="/services/environmental-liability/" className="text-sm text-gray-400 hover:text-white transition-colors">Environmental Liability</Link></li>
              <li><Link href="/services/surety-bonds/" className="text-sm text-gray-400 hover:text-white transition-colors">Surety Bonds</Link></li>
              <li><Link href="/inland-marine/" className="text-sm text-gray-400 hover:text-white transition-colors">Inland Marine</Link></li>
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about-us/" className="text-sm text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/safety-and-compliance-support/" className="text-sm text-gray-400 hover:text-white transition-colors">Safety &amp; Compliance</Link></li>
              <li><Link href="/spf-resources/" className="text-sm text-gray-400 hover:text-white transition-colors">Resources</Link></li>
              <li><Link href="/blog/" className="text-sm text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact-us/" className="text-sm text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4 - Quote CTA */}
          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-4">Get Protected</h4>
            <p className="text-sm text-gray-400 mb-4">
              Get a free, no-obligation quote tailored to your spray foam business.
            </p>
            <Link
              href="/quote/"
              className="inline-block bg-secondary hover:bg-orange-600 text-white px-6 py-3 rounded font-semibold text-sm transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Spray Foam Insurance. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/vegas/" className="text-xs text-gray-500 hover:text-gray-300">Las Vegas</Link>
            <Link href="/attic-insulation-certificate/" className="text-xs text-gray-500 hover:text-gray-300">Attic Certificate</Link>
            <Link href="/spf-resources/work-record-form/" className="text-xs text-gray-500 hover:text-gray-300">Work Record Form</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
