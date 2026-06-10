import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTABar from '@/components/CTABar';
import FAQSection from '@/components/FAQSection';
import GlassCard from '@/components/GlassCard';
import FormCard from '@/components/FormCard';
import { Calendar, Package, Thermometer, Layout, Ruler, User, Download } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Attic Insulation Certificate for Spray Foam Contractors',
  description: 'Request or download an attic insulation certificate documenting R-value, coverage area, and material specs. Required for energy rebates and home sales.',
  keywords: ['attic insulation certificate', 'spray foam R-value certificate', 'insulation documentation', 'energy rebate certificate'],
  openGraph: {
    title: 'Attic Insulation Certificate',
    description: 'Official attic insulation certificates for spray foam contractors.',
    type: 'website',
  },
};

const documentCards = [
  {
    icon: <Calendar className="w-6 h-6" />,
    title: 'Installation Date',
    body: 'The exact date insulation was installed, establishing the warranty timeline and work history.',
  },
  {
    icon: <Package className="w-6 h-6" />,
    title: 'Material Type',
    body: 'Specific spray foam product, manufacturer name, and whether open-cell or closed-cell type.',
  },
  {
    icon: <Thermometer className="w-6 h-6" />,
    title: 'R-Value Achieved',
    body: 'Documented R-value per inch and total R-value achieved for the installed depth.',
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: 'Coverage Area',
    body: 'Square footage covered, including areas treated and any exclusions noted.',
  },
  {
    icon: <Ruler className="w-6 h-6" />,
    title: 'Installed Thickness',
    body: 'Measured depth of spray foam applied in inches at multiple measurement points.',
  },
  {
    icon: <User className="w-6 h-6" />,
    title: 'Contractor Information',
    body: 'Licensed contractor name, license number, and contact information for verification.',
  },
];

const whenNeededItems = [
  {
    num: '1',
    heading: 'Energy Rebate Programs',
    body: 'Utility companies and government programs require documentation of insulation type and R-value.',
  },
  {
    num: '2',
    heading: 'Home Sale / Transfer',
    body: 'Buyers and inspectors often request proof of insulation work during due diligence.',
  },
  {
    num: '3',
    heading: 'Building Permits',
    body: 'Some jurisdictions require certificates of installation for energy code compliance.',
  },
  {
    num: '4',
    heading: 'Insurance Claims',
    body: 'Documented proof of installation protects you if you file a claim related to insulation.',
  },
  {
    num: '5',
    heading: 'Warranty Claims',
    body: "Manufacturer warranties often require a completion certificate for coverage.",
  },
];

const faqItems = [
  {
    q: 'How long does it take to receive my certificate?',
    a: 'Certificates are typically prepared within 1 business day. Urgent requests can often be processed same-day — call 844-967-5247.',
  },
  {
    q: 'Is this certificate accepted for energy rebate programs?',
    a: 'Our certificates meet the documentation requirements for most state and utility energy efficiency programs. Some programs have specific format requirements — check with your rebate program first.',
  },
  {
    q: 'Can I get a certificate for work done years ago?',
    a: 'Yes, if you have records of the installation (date, product, thickness), we can prepare a certificate based on your documentation. Older jobs may require additional verification.',
  },
  {
    q: 'Does the homeowner get a copy?',
    a: 'Yes — certificates are provided to both the contractor and the property owner. We recommend keeping copies on file for at least 10 years.',
  },
];

export default function AtticInsulationCertificatePage() {
  return (
    <>
      <PageHero
        title="Attic Insulation Certificate"
        subtitle="Official documentation of your spray foam installation for homeowners, inspectors, and rebate programs."
        badge="OFFICIAL DOCUMENTATION"
        ctaText="Request Certificate"
        ctaHref="#request"
      />

      {/* What the Certificate Documents */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <p className="label-text text-accent font-label font-semibold text-xs tracking-widest uppercase mb-2">
          CERTIFICATE CONTENTS
        </p>
        <h2 className="font-headline font-bold text-3xl text-text mb-3">
          What the Certificate Documents
        </h2>
        <p className="text-muted max-w-2xl mb-10">
          Every attic insulation certificate we issue captures the complete picture of your spray foam installation in a single verifiable document.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documentCards.map((card) => (
            <GlassCard key={card.title} className="p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                {card.icon}
              </div>
              <h3 className="font-headline font-bold text-text mb-2">{card.title}</h3>
              <p className="text-muted text-sm">{card.body}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* When You Need a Certificate */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <p className="label-text text-accent font-label font-semibold text-xs tracking-widest uppercase mb-2">
          USE CASES
        </p>
        <h2 className="font-headline font-bold text-3xl text-text mb-3">
          When You Need a Certificate
        </h2>
        <p className="text-muted mb-8">
          A documented installation certificate protects contractors and homeowners alike across a range of situations.
        </p>

        <GlassCard className="p-8">
          {whenNeededItems.map((item) => (
            <div key={item.num} className="flex items-start gap-4 mb-5 last:mb-0">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold flex items-center justify-center font-label">
                {item.num}
              </span>
              <div>
                <p className="font-semibold text-text text-sm">{item.heading}</p>
                <p className="text-muted text-sm">{item.body}</p>
              </div>
            </div>
          ))}
        </GlassCard>
      </section>

      {/* Request Form */}
      <section id="request" className="max-w-3xl mx-auto px-4 py-8">
        <p className="label-text text-accent font-label font-semibold text-xs tracking-widest uppercase mb-2 text-center">
          GET YOUR CERTIFICATE
        </p>
        <h2 className="font-headline font-bold text-3xl text-text mb-3 text-center">
          Request a Certificate
        </h2>
        <p className="text-muted mb-8 text-center">
          Fill out the form below and we'll prepare your official certificate within 1 business day.
        </p>

        <FormCard
          title="Certificate Request Form"
          subtitle="Submit your job details and we'll prepare your certificate within 1 business day."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Contractor Company Name — full width */}
            <div className="md:col-span-2">
              <label className="block text-sm font-label font-semibold text-text mb-1.5">
                Contractor Company Name
              </label>
              <input
                type="text"
                placeholder="ABC Spray Foam LLC"
                className="w-full bg-background border border-primary/20 rounded-lg px-4 py-2.5 text-text text-sm focus:outline-none focus:border-primary/50 placeholder:text-muted"
              />
            </div>

            {/* License Number */}
            <div>
              <label className="block text-sm font-label font-semibold text-text mb-1.5">
                License Number
              </label>
              <input
                type="text"
                placeholder="LIC-123456"
                className="w-full bg-background border border-primary/20 rounded-lg px-4 py-2.5 text-text text-sm focus:outline-none focus:border-primary/50 placeholder:text-muted"
              />
            </div>

            {/* Installation Date */}
            <div>
              <label className="block text-sm font-label font-semibold text-text mb-1.5">
                Installation Date
              </label>
              <input
                type="date"
                className="w-full bg-background border border-primary/20 rounded-lg px-4 py-2.5 text-text text-sm focus:outline-none focus:border-primary/50 placeholder:text-muted"
              />
            </div>

            {/* Property Address — full width */}
            <div className="md:col-span-2">
              <label className="block text-sm font-label font-semibold text-text mb-1.5">
                Property Address
              </label>
              <input
                type="text"
                placeholder="123 Main St"
                className="w-full bg-background border border-primary/20 rounded-lg px-4 py-2.5 text-text text-sm focus:outline-none focus:border-primary/50 placeholder:text-muted"
              />
            </div>

            {/* City/State/ZIP */}
            <div>
              <label className="block text-sm font-label font-semibold text-text mb-1.5">
                City / State / ZIP
              </label>
              <input
                type="text"
                placeholder="Phoenix, AZ 85001"
                className="w-full bg-background border border-primary/20 rounded-lg px-4 py-2.5 text-text text-sm focus:outline-none focus:border-primary/50 placeholder:text-muted"
              />
            </div>

            {/* Contact Email */}
            <div>
              <label className="block text-sm font-label font-semibold text-text mb-1.5">
                Contact Email
              </label>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full bg-background border border-primary/20 rounded-lg px-4 py-2.5 text-text text-sm focus:outline-none focus:border-primary/50 placeholder:text-muted"
              />
            </div>

            {/* SPF Type */}
            <div className="md:col-span-2">
              <label className="block text-sm font-label font-semibold text-text mb-1.5">
                SPF Type
              </label>
              <select className="w-full bg-background border border-primary/20 rounded-lg px-4 py-2.5 text-text text-sm focus:outline-none focus:border-primary/50">
                <option value="">Select SPF type…</option>
                <option value="open-cell-0.5">Open-Cell 0.5lb</option>
                <option value="closed-cell-2">Closed-Cell 2lb</option>
                <option value="closed-cell-3">Closed-Cell High-Density 3lb</option>
              </select>
            </div>

            {/* Thickness Installed */}
            <div>
              <label className="block text-sm font-label font-semibold text-text mb-1.5">
                Thickness Installed (inches)
              </label>
              <input
                type="number"
                placeholder="e.g. 6"
                min="0"
                step="0.5"
                className="w-full bg-background border border-primary/20 rounded-lg px-4 py-2.5 text-text text-sm focus:outline-none focus:border-primary/50 placeholder:text-muted"
              />
            </div>

            {/* R-Value Achieved */}
            <div>
              <label className="block text-sm font-label font-semibold text-text mb-1.5">
                R-Value Achieved
              </label>
              <input
                type="number"
                placeholder="e.g. 38"
                min="0"
                className="w-full bg-background border border-primary/20 rounded-lg px-4 py-2.5 text-text text-sm focus:outline-none focus:border-primary/50 placeholder:text-muted"
              />
            </div>

            {/* Square Footage */}
            <div>
              <label className="block text-sm font-label font-semibold text-text mb-1.5">
                Square Footage
              </label>
              <input
                type="number"
                placeholder="e.g. 1200"
                min="0"
                className="w-full bg-background border border-primary/20 rounded-lg px-4 py-2.5 text-text text-sm focus:outline-none focus:border-primary/50 placeholder:text-muted"
              />
            </div>

            {/* Grid alignment spacer */}
            <div />

            {/* Notes — full width */}
            <div className="md:col-span-2">
              <label className="block text-sm font-label font-semibold text-text mb-1.5">
                Notes / Special Instructions
              </label>
              <textarea
                rows={3}
                placeholder="Any additional details about the installation…"
                className="w-full bg-background border border-primary/20 rounded-lg px-4 py-2.5 text-text text-sm focus:outline-none focus:border-primary/50 placeholder:text-muted resize-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="primary-btn w-full py-3 rounded-full font-label font-semibold mt-2"
          >
            Request Certificate
          </button>
          <p className="text-xs text-muted text-center mt-3">
            We prepare your certificate within 1 business day and send it to your email at no charge.
          </p>
        </FormCard>
      </section>

      {/* Download Example */}
      <section className="max-w-2xl mx-auto px-4 py-8">
        <GlassCard className="p-8 text-center">
          <Download className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="font-headline font-bold text-text text-xl mb-2">
            Download Example Certificate
          </h3>
          <p className="text-muted text-sm mb-6">
            Preview what your completed certificate looks like before requesting one.
          </p>
          <a
            href="#"
            className="secondary-btn inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-label font-semibold"
          >
            <Download className="w-4 h-4" />
            Download Example (PDF)
          </a>
          <p className="text-xs text-muted mt-3">PDF format &bull; 1 page &bull; Printable</p>
        </GlassCard>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <p className="label-text text-accent font-label font-semibold text-xs tracking-widest uppercase mb-2">
          COMMON QUESTIONS
        </p>
        <h2 className="font-headline font-bold text-3xl text-text mb-8">
          Certificate FAQs
        </h2>
        <FAQSection items={faqItems} />
      </section>

      <CTABar />
    </>
  );
}
