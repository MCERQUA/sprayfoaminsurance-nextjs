import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import FAQSection from '@/components/FAQSection';
import CTABar from '@/components/CTABar';
import GlassCard from '@/components/GlassCard';
import ServiceCard from '@/components/ServiceCard';
import { AlertTriangle, Shield, Users, Truck } from 'lucide-react';
import { commercialAutoFaqs } from '@/lib/faqs';

export const metadata: Metadata = {
  title: 'Commercial Auto Insurance for Spray Foam Contractors',
  description: 'Commercial auto insurance for spray foam rigs, vans, and trucks. Covers hired/non-owned auto, trailer coverage, and cargo liability. Free quotes available.',
  alternates: { canonical: 'https://sprayfoaminsurance.com/services/commercial-auto' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'InsuranceAgency',
      name: 'Spray Foam Insurance',
      url: 'https://sprayfoaminsurance.com',
      telephone: '844-967-5247',
      description: 'Commercial auto insurance for spray foam contractors',
      serviceType: 'Commercial Auto Insurance',
    },
  ],
};

export default function CommercialAutoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        title="Commercial Auto for Spray Foam Contractors"
        subtitle="Your rig is a work vehicle carrying chemicals and equipment; a personal auto policy will not respond when it is in use for the business."
        ctaText="Get a Quote"
        ctaHref="/quote"
        badge="Commercial Auto"
      />

      <section className="bg-surface py-12 border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <ServiceCard
              icon={Shield}
              title="General liability"
              description="Discover the comprehensive coverage you need to safeguard your spray foam contracting business. Our General Liability insurance is designed to shield you from unforeseen risks and give you the confidence to build a brighter future."
              href="/services/general-liability-insurance"
            />
            <ServiceCard
              icon={Users}
              title="Workers compensation"
              description="Prioritize your team's well-being with our Workers' Compensation coverage. We're here to ensure your employees are protected, and your business remains secure in the face of workplace injuries. Explore how we can help you create a safer work environment."
              href="/services/workers-compensation-insurance-for-spray-foam-contractors"
            />
            <ServiceCard
              icon={Truck}
              title="Commercial auto"
              description="Your business relies on wheels, and so do we. Our Commercial Auto Insurance ensures your vehicles stay on the road, so you can focus on what matters most—serving your clients. Explore how we can drive your success with tailored coverage."
              href="/services/commercial-auto"
            />
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-text mb-6 text-center">
            Protecting Your Business on the Move
          </h2>
          <p className="text-muted font-label leading-relaxed mb-8">
            Spray foam contractors are known for their versatility and mobility, ensuring that their insulation expertise reaches clients far and wide. Whether it&apos;s transporting equipment to a job site or delivering finished projects, the road plays a vital role in your business operations. However, this mobility comes with its own set of risks and challenges — accidents, theft, and liability claims among them. That&apos;s where Commercial Auto Insurance from Spray Foam Insurance becomes essential – it provides a protective shield for your business and ensures you can keep moving forward.
          </p>
          <GlassCard className="p-6 border-l-4 border-primary">
            <h3 className="font-headline font-bold text-text mb-2">Understanding the Essentials</h3>
            <p className="text-muted font-label text-sm leading-relaxed">
              Your rig is a work vehicle carrying chemicals and equipment; a personal auto policy will not respond when it is in use for the business. This coverage is designed to protect your business in situations where your vehicles or employees are involved in accidents while on the job. It goes beyond protecting your assets; it&apos;s about protecting your reputation as a reliable contractor your clients can count on to show up.
            </p>
          </GlassCard>
        </div>
      </section>

      <section className="blue-gradient-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-text">
              Why Is It Essential for Spray Foam Contractors?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <GlassCard className="p-6 border-l-4 border-primary">
              <div className="w-10 h-10 rounded-lg bg-highlight/10 flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="font-headline font-bold text-base text-text mb-2">Protecting Your Fleet</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                Whether you have a single spray foam rig or a fleet of vehicles, they are vital assets to your business. Commercial Auto Insurance safeguards your investment by covering repairs or replacements in case of accidents, theft, or damage — so a fender-bender or break-in doesn&apos;t take a rig out of service for weeks.
              </p>
            </GlassCard>
            <GlassCard className="p-6 border-l-4 border-primary">
              <div className="w-10 h-10 rounded-lg bg-highlight/10 flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="font-headline font-bold text-base text-text mb-2">Protecting Your Drivers</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                Your crew is on the road as much as they&apos;re on the job site. Commercial Auto liability coverage protects your business if an employee is involved in an at-fault accident while driving to or from a job, including bodily injury and property damage claims from the other party.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-primary to-[#06216b] p-8 sm:p-10 text-white shadow-xl">
            <h2 className="font-headline text-2xl sm:text-3xl font-bold mb-4">Key Components of Coverage</h2>
            <p className="font-label text-sm sm:text-base opacity-90 leading-relaxed mb-6">
              Commercial Auto Insurance from Spray Foam Insurance can be customized to meet your specific needs. Here are some key components of coverage:
            </p>
            <ul className="space-y-3 font-label text-sm sm:text-base">
              <li>
                <span className="font-semibold">Collision Coverage:</span> This covers the costs of repairing or replacing your vehicles if they are damaged in an accident.
              </li>
              <li>
                <span className="font-semibold">Liability Coverage:</span> Protection against claims of bodily injury or property damage that may result from an accident involving your vehicles.
              </li>
              <li>
                <span className="font-semibold">Uninsured/Underinsured Motorist Coverage:</span> Protection if your driver or vehicle is hit by someone with little or no insurance of their own.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="font-headline text-2xl font-bold text-text mb-3">Ensuring Your Business Keeps Moving</h2>
            <p className="text-muted font-label leading-relaxed">
              In the dynamic world of spray foam contracting, your mobility is a competitive advantage. Commercial Auto Insurance from Spray Foam Insurance ensures that your rigs, trailers, and drivers are protected wherever the next job takes them. It&apos;s the safety net that provides peace of mind on the road and at the job site.
            </p>
          </div>
          <div>
            <h2 className="font-headline text-2xl font-bold text-text mb-3">Choose Spray Foam Insurance For Your Commercial Auto Needs</h2>
            <p className="text-muted font-label leading-relaxed mb-4">
              At Spray Foam Insurance, we specialize in providing Commercial Auto Insurance tailored to the unique requirements of spray foam contractors. Our experienced team understands the intricacies of your industry, and we&apos;re committed to ensuring your vehicles have the coverage they need to keep your business moving forward.
            </p>
            <p className="text-muted font-label leading-relaxed">
              Ready to discuss your insurance needs or have questions about Commercial Auto Insurance? Contact Spray Foam Insurance today. We&apos;re here to help you navigate the world of insurance, so you can focus on what you do best – delivering exceptional spray foam solutions to your clients while keeping your fleet on the road.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-headline text-3xl font-bold text-text text-center mb-10">
            Frequently Asked Questions
          </h2>
          <FAQSection items={commercialAutoFaqs} />
        </div>
      </section>

      <CTABar />
    </>
  );
}
