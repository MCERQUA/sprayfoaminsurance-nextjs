import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CTABar from '@/components/CTABar';
import GlassCard from '@/components/GlassCard';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Inland Marine Insurance for Spray Foam Contractors',
  description:
    'Protect your spray foam rig and equipment with inland marine insurance. Coverage for proportioners, hoses, generators, and trailers wherever the job takes you.',
  alternates: { canonical: 'https://sprayfoaminsurance.com/inland-marine' },
  keywords: [
    'inland marine insurance spray foam',
    'SPF rig insurance',
    'spray foam equipment insurance',
    'contractor equipment coverage',
  ],
  openGraph: {
    title: 'Inland Marine Insurance for Spray Foam Contractors',
    description:
      'Equipment coverage for spray foam proportioners, hoses, generators, and trailers.',
    type: 'website',
  },
};

const relatedServices = [
  {
    title: 'General liability',
    body: 'Discover the comprehensive coverage you need to safeguard your spray foam contracting business. Our General Liability insurance is designed to shield you from unforeseen risks and give you the confidence to build a brighter future.',
    href: '/services/general-liability-insurance',
  },
  {
    title: 'Workers compensation',
    body: "Prioritize your team's well-being with our Workers' Compensation coverage. We're here to ensure your employees are protected, and your business remains secure in the face of workplace injuries. Explore how we can help you create a safer work environment.",
    href: '/services/workers-compensation-insurance-for-spray-foam-contractors',
  },
  {
    title: 'Commercial auto',
    body: 'Your business relies on wheels, and so do we. Our Commercial Auto Insurance ensures your vehicles stay on the road, so you can focus on what matters most—serving your clients. Explore how we can drive your success with tailored coverage.',
    href: '/services/commercial-auto',
  },
];

const documentationItems = [
  {
    title: 'Asset Valuation:',
    body: 'Detailed documentation provides an accurate account of the value of your equipment. This is particularly crucial when it comes to replacement or repair coverage. With precise records, you can ensure that your assets are adequately insured, down to the last proportioner and spray gun.',
  },
  {
    title: 'Urgency in Case of Loss:',
    body: "In the unfortunate event of theft or damage, every moment counts. Detailed documentation allows for a swift and informed response. You'll know exactly what's missing or damaged and can act urgently to minimize further losses.",
  },
  {
    title: 'Chemical and Environmental Considerations:',
    body: 'The nature of spray foam work means that you may carry hazardous chemicals and materials. Accurate documentation is essential to ensure the safe and effective containment, cleanup, and disposal of these materials in case of an accident or spill.',
  },
  {
    title: 'Equipment Expertise:',
    body: 'In the event of a loss, having a comprehensive inventory not only speeds up the claims process but also ensures that the insurance adjuster understands the unique nature of your equipment. This avoids situations where valuable components go unrecognized or underappreciated.',
  },
];

const investmentItems = [
  {
    label: 'Accurate Valuation:',
    body: 'With detailed records, you can be confident that your equipment is insured for its true value.',
  },
  {
    label: 'Rapid Response:',
    body: 'In case of loss or damage, you can respond swiftly and effectively, minimizing downtime and further losses.',
  },
  {
    label: 'Environmental Safety:',
    body: 'Precise documentation ensures that any environmental concerns are promptly addressed, reducing potential harm and liability.',
  },
  {
    label: 'Full Equipment Recognition:',
    body: 'Your unique equipment is fully recognized and appreciated during the claims process, ensuring that you receive the compensation you deserve.',
  },
];

export default function InlandMarinePage() {
  return (
    <>
      <PageHero
        title="Inland Marine"
        subtitle="For Spray Foam Contractors"
        ctaText="Get a Quote"
        ctaHref="/quote"
      />

      {/* Related Coverage Cards */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedServices.map((item) => (
            <GlassCard key={item.title} className="p-6 flex flex-col">
              <h2 className="font-headline font-bold text-text text-xl mb-3 text-center">
                {item.title}
              </h2>
              <p className="text-muted text-sm mb-6 flex-1">{item.body}</p>
              <Link
                href={item.href}
                className="text-primary text-sm font-semibold hover:text-accent transition-colors text-center"
              >
                More Details&gt;
              </Link>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Why Documented Coverage Matters */}
      <section className="max-w-5xl mx-auto px-4 py-8 text-center">
        <h2 className="text-3xl font-headline font-bold text-text mb-6">
          Why Spray Foam Contractors Need Properly Documented Inland Marine Coverage
        </h2>
        <p className="text-muted max-w-3xl mx-auto">
          In the world of spray foam contracting, precision and attention to detail are not only
          integral to your craft but also extend to how you safeguard your valuable equipment.
          Inland Marine Insurance plays a vital role in this process, ensuring that your assets
          are protected with the same meticulous care that you apply to your work.
        </p>
      </section>

      {/* Documentation as a Pillar of Protection */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <GlassCard className="p-8">
          <h3 className="font-headline font-bold text-text text-xl mb-3">
            Documentation as a Pillar of Protection
          </h3>
          <p className="text-muted text-sm">
            Inland marine is rated on what is actually on the truck &mdash; the proportioner,
            hoses, generator, compressor and the rig itself. Schedule them at accurate
            replacement values: undervaluing invites a coinsurance shortfall at claim time,
            and carrying stale values on equipment you no longer own means paying for
            coverage you cannot use. Precise
            documentation of these assets is more than just a best practice – it&apos;s an
            essential component of comprehensive protection for your business.
          </p>
        </GlassCard>
      </section>

      {/* Detailed Equipment Documentation: Why It Matters */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-headline font-bold text-text mb-8 text-center">
          Detailed Equipment Documentation: Why It Matters
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          {documentationItems.map((item) => (
            <div key={item.title}>
              <h3 className="font-headline font-bold text-text mb-2">{item.title}</h3>
              <p className="text-muted text-sm">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Protecting Your Investment */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <div className="rounded-2xl bg-primary-gradient p-8 text-white">
          <h2 className="font-headline font-bold text-2xl mb-3">Protecting Your Investment</h2>
          <p className="text-text/90 text-sm mb-5">
            Your spray foam equipment represents a significant financial investment, and its
            proper protection is an investment in your business&apos;s continued success. Inland
            Marine Insurance, supported by meticulous documentation, offers peace of mind and the
            following advantages:
          </p>
          <ul className="space-y-3">
            {investmentItems.map((item) => (
              <li key={item.label} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span className="text-sm text-text/90">
                  <span className="font-semibold text-text">{item.label}</span> {item.body}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Choose Spray Foam Insurance */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <h3 className="font-headline font-bold text-text text-2xl mb-3">
          Choose Spray Foam Insurance for Comprehensive Inland Marine Coverage
        </h3>
        <p className="text-muted text-sm max-w-3xl">
          Spray Foam Insurance specializes in providing Inland Marine Insurance tailored to the
          specific needs of spray foam contractors. Our team understands the intricacies of your
          industry, and we&apos;re dedicated to ensuring that your equipment and assets are
          adequately protected.
        </p>
      </section>

      {/* Form CTA */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-headline font-bold text-text mb-6">
          Click Below To Fill Our Our Detailed Inland Marine Form For Spray Foam Contractors
        </h2>
        <Link
          href="/inland-marine/spray_foam_rig_insurance"
          className="primary-btn inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-label font-semibold text-sm"
        >
          Fill Our Our Inland Marine Form
          <ArrowRight className="w-4 h-4" />
        </Link>
        <p className="text-muted text-sm max-w-2xl mx-auto mt-6">
          Ready to discuss your insurance needs or have questions about Inland Marine Insurance?
          Contact Spray Foam Insurance today. We&apos;re here to help you navigate the world of
          insurance, so you can focus on what you do best – delivering exceptional spray foam
          solutions to your clients while safeguarding your valuable assets with precision.
        </p>
      </section>

      <CTABar />
    </>
  );
}
