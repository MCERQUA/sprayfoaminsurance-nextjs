import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import FAQSection from '@/components/FAQSection';
import CTABar from '@/components/CTABar';
import GlassCard from '@/components/GlassCard';
import ServiceCard from '@/components/ServiceCard';
import { AlertTriangle, Shield, Users, Truck } from 'lucide-react';
import { environmentalFaqs } from '@/lib/faqs';

export const metadata: Metadata = {
  title: 'Environmental Liability Insurance for Spray Foam Contractors',
  description: 'Environmental liability insurance for SPF contractors. Covers pollution cleanup, off-gassing claims, overspray contamination, and third-party bodily injury.',
  alternates: { canonical: 'https://sprayfoaminsurance.com/services/environmental-liability' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'InsuranceAgency',
      name: 'Spray Foam Insurance',
      url: 'https://sprayfoaminsurance.com',
      telephone: '844-967-5247',
      serviceType: 'Environmental Liability Insurance',
    },
  ],
};

export default function EnvironmentalLiabilityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        title="Environmental Liability Insurance for Spray Foam Contractors"
        subtitle="Environmental Liability Insurance is more than just an added layer of protection; it's a testament to your dedication to responsible and sustainable practices."
        ctaText="Get a Quote"
        ctaHref="/quote"
        badge="Environmental Liability"
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
            Protecting Your Business and the Environment
          </h2>
          <p className="text-muted font-label leading-relaxed mb-8">
            In the world of spray foam insulation, your commitment extends beyond your clients and projects—it includes safeguarding the environment. Spray foam contractors, by nature of their work with hazardous chemicals, face unique environmental risks. That&apos;s where Environmental Liability Insurance from Spray Foam Insurance comes into play. We provide specialized coverage designed to protect your business from the financial and environmental repercussions of unforeseen incidents.
          </p>
          <GlassCard className="p-6 border-l-4 border-primary">
            <h3 className="font-headline font-bold text-text mb-2">Understanding the Essentials</h3>
            <p className="text-muted font-label text-sm leading-relaxed">
              Environmental Liability Insurance is more than just an added layer of protection; it&apos;s a testament to your dedication to responsible and sustainable practices. This coverage is crucial in mitigating the risks associated with handling hazardous materials and protecting the environment from potential harm.
            </p>
          </GlassCard>
        </div>
      </section>

      <section className="blue-gradient-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-text">
              Why Is Environmental Liability Insurance Essential for Spray Foam Contractors?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <GlassCard className="p-6 border-l-4 border-primary">
              <div className="w-10 h-10 rounded-lg bg-highlight/10 flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="font-headline font-bold text-base text-text mb-2">Protection from Environmental Incidents</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                In the event of accidents, spills, or other environmental incidents involving hazardous spray foam chemicals, our insurance steps in to cover the costs of environmental cleanup and restoration.
              </p>
            </GlassCard>
            <GlassCard className="p-6 border-l-4 border-primary">
              <div className="w-10 h-10 rounded-lg bg-highlight/10 flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="font-headline font-bold text-base text-text mb-2">Legal Compliance</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                Regulatory authorities have strict standards for handling and disposing of hazardous materials. Environmental Liability Insurance ensures you have the resources to meet these standards and avoid legal consequences.
              </p>
            </GlassCard>
            <GlassCard className="p-6 border-l-4 border-primary">
              <div className="w-10 h-10 rounded-lg bg-highlight/10 flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="font-headline font-bold text-base text-text mb-2">Client Confidence</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                Clients today are environmentally conscious. By having Environmental Liability Insurance, you not only protect your business but also instill confidence in your clients, demonstrating your commitment to ethical and environmentally responsible practices.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-secondary to-primary p-8 sm:p-10 text-white shadow-xl">
            <h2 className="font-headline text-2xl sm:text-3xl font-bold mb-4">Key Components of Coverage</h2>
            <p className="font-label text-sm sm:text-base opacity-90 leading-relaxed mb-6">
              Our Environmental Liability Insurance can be tailored to meet the specific needs of spray foam contractors. Here are some key components of coverage:
            </p>
            <ul className="space-y-3 font-label text-sm sm:text-base">
              <li>
                <span className="font-semibold">Environmental Cleanup:</span> Coverage for the costs associated with environmental cleanup, restoration, and remediation in the event of chemical spills or incidents.
              </li>
              <li>
                <span className="font-semibold">Legal Expenses:</span> Protection against legal expenses related to environmental claims and regulatory compliance.
              </li>
              <li>
                <span className="font-semibold">Property Damage:</span> Coverage for property damage caused by environmental incidents, ensuring you can rectify the situation swiftly.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="font-headline text-2xl font-bold text-text mb-3">Preserving Your Reputation and the Environment</h2>
            <p className="text-muted font-label leading-relaxed">
              At Spray Foam Insurance, we understand that environmental responsibility is part of your mission. Our Environmental Liability Insurance goes beyond safeguarding your business; it upholds your commitment to protecting the environment. With our support, you can confidently pursue your projects, knowing you have a financial safety net in place should the unexpected occur.
            </p>
          </div>
          <div>
            <h2 className="font-headline text-2xl font-bold text-text mb-3">Choose Spray Foam Insurance for Your Environmental Liability Needs</h2>
            <p className="text-muted font-label leading-relaxed mb-4">
              Our team specializes in providing Environmental Liability Insurance tailored to the unique requirements of spray foam contractors. We&apos;re committed to helping you navigate the world of environmental risk, ensuring that your business thrives while upholding environmental responsibility.
            </p>
            <p className="text-muted font-label leading-relaxed">
              Ready to discuss your insurance needs or have questions about Environmental Liability Insurance? Contact Spray Foam Insurance today. We&apos;re here to help you protect your business, preserve the environment, and demonstrate your commitment to responsible practices in the spray foam industry.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-headline text-3xl font-bold text-text text-center mb-10">
            Frequently Asked Questions
          </h2>
          <FAQSection items={environmentalFaqs} />
        </div>
      </section>

      <CTABar />
    </>
  );
}
