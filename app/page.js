import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary min-h-[600px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Spray Foam Insurance
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Specialized insurance solutions designed exclusively for spray foam contractors.
              Protect your business, equipment, and reputation with coverage that understands your industry.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/quote/"
                className="bg-secondary hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:8449675247"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg border border-white/20 transition-colors"
              >
                Call 844-967-5247
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="/images/Spray_Foam_Insurance.webp"
              alt="Spray Foam Insurance"
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
            <img src="/images/client-logo1.png" alt="Client" className="h-10 opacity-60 hover:opacity-100 transition-opacity" />
            <img src="/images/client-logo2.png" alt="Client" className="h-10 opacity-60 hover:opacity-100 transition-opacity" />
            <img src="/images/client-logo3.png" alt="Client" className="h-10 opacity-60 hover:opacity-100 transition-opacity" />
            <img src="/images/client-logo4.png" alt="Client" className="h-10 opacity-60 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Insurance Coverage for Spray Foam Contractors
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive protection designed specifically for the unique risks of the spray foam insulation industry.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/services/general-liability-insurance/" className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all border border-gray-100">
              <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <span className="text-2xl">&#x1f6e1;</span>
              </div>
              <h3 className="font-heading font-semibold text-xl text-gray-900 mb-2 group-hover:text-primary">General Liability</h3>
              <p className="text-gray-600">Protection against third-party claims for bodily injury, property damage, and overspray incidents.</p>
            </Link>
            <Link href="/services/workers-compensation-insurance-for-spray-foam-contractors/" className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all border border-gray-100">
              <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <span className="text-2xl">&#x1f477;</span>
              </div>
              <h3 className="font-heading font-semibold text-xl text-gray-900 mb-2 group-hover:text-primary">Workers&apos; Compensation</h3>
              <p className="text-gray-600">Coverage for your crew in case of on-the-job injuries, including chemical exposure from spray foam.</p>
            </Link>
            <Link href="/services/commercial-auto/" className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all border border-gray-100">
              <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <span className="text-2xl">&#x1f69a;</span>
              </div>
              <h3 className="font-heading font-semibold text-xl text-gray-900 mb-2 group-hover:text-primary">Commercial Auto</h3>
              <p className="text-gray-600">Vehicle coverage for your spray foam rigs, trucks, and the expensive equipment they carry.</p>
            </Link>
            <Link href="/services/environmental-liability/" className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all border border-gray-100">
              <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <span className="text-2xl">&#x1f30d;</span>
              </div>
              <h3 className="font-heading font-semibold text-xl text-gray-900 mb-2 group-hover:text-primary">Environmental Liability</h3>
              <p className="text-gray-600">Pollution and environmental coverage for chemical spills, fumes, and contamination claims.</p>
            </Link>
            <Link href="/services/surety-bonds/" className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all border border-gray-100">
              <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <span className="text-2xl">&#x1f4dc;</span>
              </div>
              <h3 className="font-heading font-semibold text-xl text-gray-900 mb-2 group-hover:text-primary">Surety Bonds</h3>
              <p className="text-gray-600">License and permit bonds, contract bonds, and performance guarantees for your projects.</p>
            </Link>
            <Link href="/inland-marine/" className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all border border-gray-100">
              <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <span className="text-2xl">&#x1f3d7;</span>
              </div>
              <h3 className="font-heading font-semibold text-xl text-gray-900 mb-2 group-hover:text-primary">Inland Marine / Rig Insurance</h3>
              <p className="text-gray-600">Specialized coverage for your spray foam rigs and mobile equipment while in transit and on-site.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Why Spray Foam Contractors Choose Us
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              We understand the spray foam industry inside and out. Our specialized coverage addresses the unique risks
              that generic insurance policies simply don&apos;t cover.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1 text-xl">&#x2713;</span>
                <span className="text-gray-700">Industry-specific coverage for overspray, chemical exposure, and equipment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1 text-xl">&#x2713;</span>
                <span className="text-gray-700">Competitive rates from top-rated insurance carriers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1 text-xl">&#x2713;</span>
                <span className="text-gray-700">Fast claims processing so you can get back to work</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1 text-xl">&#x2713;</span>
                <span className="text-gray-700">Safety and compliance support to reduce your risk</span>
              </li>
            </ul>
          </div>
          <div>
            <img
              src="/images/Josh_Cotner_Spray_Foam_Insurance.webp"
              alt="Josh Cotner - Spray Foam Insurance"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Ready to Protect Your Spray Foam Business?
          </h2>
          <p className="text-gray-200 text-lg mb-8">
            Get a customized insurance quote in minutes. Our specialists understand your industry.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/quote/"
              className="bg-secondary hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Request a Free Quote
            </Link>
            <a
              href="tel:8449675247"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg border border-white/20 transition-colors"
            >
              Call 844-967-5247
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
