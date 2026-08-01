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

      {/* What Is an Attic Insulation Certificate — narrative intro */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <p className="label-text text-accent font-label font-semibold text-xs tracking-widest uppercase mb-2">
          THE BASICS
        </p>
        <h2 className="font-headline font-bold text-3xl text-text mb-6">
          What Is an Attic Insulation Certificate?
        </h2>
        <div className="space-y-4 text-muted leading-relaxed">
          <p>
            An attic insulation certificate is a signed, dated document that records exactly what
            insulation work was performed in a home or building&apos;s attic: the product installed,
            the R-value achieved, the coverage area, the installed thickness, and who did the
            work. Think of it as the paper trail that proves an insulation job actually happened
            the way it was supposed to — because unlike a new roof or a repainted room, insulation
            disappears behind drywall and roof decking the moment the job is done. Once the attic
            hatch closes, there&apos;s no visual way for a homeowner, inspector, appraiser, or
            insurance adjuster to verify what&apos;s up there without a physical inspection or a
            document that tells them.
          </p>
          <p>
            For spray foam contractors specifically, a certificate matters even more than it does
            for batt or blown-in insulation. Spray foam is a chemical, in-place product — its
            performance depends on the correct product being used, applied at the correct
            thickness, under the correct conditions. A certificate that documents the exact
            product, lot information where applicable, thickness, and R-value gives everyone
            downstream (the homeowner, a future buyer, a rebate administrator, an inspector) a way
            to confirm the job meets spec without tearing into finished surfaces.
          </p>
          <p>
            In practice, the certificate functions as both a completion record for the contractor
            and a piece of due-diligence documentation for the property. It&apos;s not a warranty
            and it&apos;s not an insurance policy — it&apos;s a factual record of what was installed,
            when, and by whom.
          </p>
        </div>
      </section>

      {/* Who Needs One */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <p className="label-text text-accent font-label font-semibold text-xs tracking-widest uppercase mb-2">
          WHO NEEDS ONE
        </p>
        <h2 className="font-headline font-bold text-3xl text-text mb-6">
          Who Actually Needs an Attic Insulation Certificate
        </h2>
        <div className="space-y-4 text-muted leading-relaxed">
          <p>
            <strong className="text-text">Spray foam contractors</strong> need a standard way to
            close out every job with a document that protects them if a customer, inspector, or
            future buyer ever questions what was installed. Handing over a certificate at the end
            of a job is faster and more professional than trying to reconstruct installation
            details from memory or old invoices months or years later.
          </p>
          <p>
            <strong className="text-text">Homeowners</strong> need one anytime they&apos;re asked to
            prove what insulation is in their attic — for a rebate application, a home sale, a
            refinance appraisal, or simply for their own records. Most homeowners never see their
            own attic after move-in, so the certificate is often the only documentation they&apos;ll
            ever have of what&apos;s actually up there.
          </p>
          <p>
            <strong className="text-text">Real estate agents and buyers</strong> in a home sale
            frequently request insulation documentation during due diligence, particularly for
            older homes being upgraded or homes marketed with energy-efficiency as a selling
            point. A certificate answers the "what kind and how much" question without opening
            the attic hatch.
          </p>
          <p>
            <strong className="text-text">Building departments and code officials</strong> may
            require proof of installed R-values to close out a permit tied to insulation work,
            particularly on additions, renovations, or new construction where the insulation gets
            covered before final inspection.
          </p>
        </div>
      </section>

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

      {/* How Certificates Tie Into Code Compliance */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <p className="label-text text-accent font-label font-semibold text-xs tracking-widest uppercase mb-2">
          CODE COMPLIANCE
        </p>
        <h2 className="font-headline font-bold text-3xl text-text mb-6">
          How This Ties Into Energy Code Compliance
        </h2>
        <div className="space-y-4 text-muted leading-relaxed">
          <p>
            Most U.S. jurisdictions adopt some version of the International Energy Conservation
            Code (IECC), which sets minimum required R-values by climate zone for attics,
            ceilings, walls, and floors. Building departments enforce these minimums at permit
            inspection — but attic insulation is typically installed late in a job, right before
            drywall or roof-deck closure, which means the inspector often only has a narrow window
            to physically verify it before it&apos;s covered for good.
          </p>
          <p>
            A dated, itemized insulation certificate gives the contractor a documented record that
            the installed R-value met or exceeded the code requirement for that project&apos;s
            climate zone at the time of installation — useful if a compliance question comes up
            after the fact, whether that&apos;s a follow-up inspection, a permit closeout, or a
            dispute months or years down the line. It&apos;s not a substitute for pulling the
            correct permit or scheduling the required inspection — it&apos;s a supplementary record
            that backs up what the inspection should already confirm.
          </p>
          <p>
            The same documentation also tends to satisfy the paperwork requirements for utility
            and state energy-rebate programs, which generally ask for proof of R-value achieved,
            the product used, and the installation date before issuing a rebate check — exactly
            the fields captured on the certificate above.
          </p>
        </div>
      </section>

      {/* Request Form */}
      <section id="request" className="max-w-3xl mx-auto px-4 py-8">
        <p className="label-text text-accent font-label font-semibold text-xs tracking-widest uppercase mb-2 text-center">
          GET YOUR CERTIFICATE
        </p>
        <h2 className="font-headline font-bold text-3xl text-text mb-3 text-center">
          Request a Certificate
        </h2>
        <p className="text-muted mb-4 text-center">
          Fill out the form below and we'll prepare your official certificate within 1 business day.
        </p>
        <p className="text-muted text-sm mb-8 text-center max-w-2xl mx-auto">
          Contractors: submit the job details from your completed installation and we&apos;ll turn
          around a certificate you can hand directly to your customer. Homeowners: if your
          contractor hasn&apos;t provided one, call <a href="tel:8449675247" className="text-primary hover:text-accent transition-colors font-semibold">844-967-5247</a> and we can help you get the documentation you need.
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

      {/* Questions before requesting */}
      <section className="max-w-2xl mx-auto px-4 py-8">
        <GlassCard className="p-8 text-center">
          <Download className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="font-headline font-bold text-text text-xl mb-2">
            Not Sure What You&apos;ll Need to Provide?
          </h3>
          <p className="text-muted text-sm mb-6">
            The fields above under &ldquo;What the Certificate Documents&rdquo; are exactly what
            goes on the finished certificate — installation date, material type, R-value,
            coverage area, thickness, and contractor information. Have those on hand and the
            request form only takes a couple of minutes.
          </p>
          <a
            href="#request"
            className="secondary-btn inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-label font-semibold"
          >
            Jump to the Request Form
          </a>
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
