import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import FAQSection from '@/components/FAQSection';
import CTABar from '@/components/CTABar';
import GlassCard from '@/components/GlassCard';
import ServiceCard from '@/components/ServiceCard';
import { AlertTriangle, Shield, Users, Truck } from 'lucide-react';
import { generalLiabilityFaqs } from '@/lib/faqs';

export const metadata: Metadata = {
  title: 'General Liability Insurance for Spray Foam Contractors',
  description: 'Specialized GL insurance for spray foam contractors. Covers overspray, property damage, bodily injury, and completed operations. Get a free quote.',
  alternates: { canonical: 'https://sprayfoaminsurance.com/services/general-liability-insurance' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'InsuranceAgency',
      name: 'Spray Foam Insurance',
      url: 'https://sprayfoaminsurance.com',
      telephone: '844-967-5247',
      description: 'Specialized insurance for spray foam contractors',
      areaServed: 'US',
      serviceType: 'General Liability Insurance',
    },
  ],
};

export default function GeneralLiabilityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        title="General Liability Insurance for Spray Foam Contractors"
        subtitle="General Liability Insurance, often referred to as GL Insurance, is a fundamental component of any spray foam contracting business."
        ctaText="Get a Quote"
        ctaHref="/quote"
        badge="GL Insurance"
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
            Securing Your Spray Foam Business: The Role of General Liability Insurance
          </h2>
          <p className="text-muted font-label leading-relaxed mb-8">
            When it comes to the world of spray foam insulation, you&apos;re well aware of the incredible benefits it offers: energy efficiency, moisture control, and improved indoor air quality, to name a few. However, like any business, spray foam contractors face their share of risks and uncertainties. That&apos;s where General Liability Insurance from Spray Foam Insurance comes into play, offering a protective shield that ensures your business remains strong and resilient, no matter what challenges arise.
          </p>
          <GlassCard className="p-6 border-l-4 border-primary">
            <h3 className="font-headline font-bold text-text mb-2">Understanding the Essentials</h3>
            <p className="text-muted font-label text-sm leading-relaxed">
              General Liability Insurance, often referred to as GL Insurance, is a fundamental component of any spray foam contracting business. It&apos;s designed to provide coverage in situations where your business may be held responsible for bodily injury, property damage, or advertising injury claims made by third parties.
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
              <h3 className="font-headline font-bold text-base text-text mb-2">Protection Against Accidents</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                Spray foam application involves equipment, chemicals, and skilled technicians working on clients&apos; properties. Accidents can happen, and when they do, you need to be prepared. General Liability Insurance from Spray Foam Insurance covers medical expenses and property damage costs resulting from accidents that occur during your operations.
              </p>
            </GlassCard>
            <GlassCard className="p-6 border-l-4 border-primary">
              <div className="w-10 h-10 rounded-lg bg-highlight/10 flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="font-headline font-bold text-base text-text mb-2">Property Damage</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                Imagine you&apos;re working on a project, and due to an unforeseen mishap, property damage occurs. Without insurance, you could be held liable for the costs of repair or replacement. General Liability Insurance from Spray Foam Insurance steps in to cover these expenses, ensuring your business remains financially stable.
              </p>
            </GlassCard>
            <GlassCard className="p-6 border-l-4 border-primary">
              <div className="w-10 h-10 rounded-lg bg-highlight/10 flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="font-headline font-bold text-base text-text mb-2">Safeguarding Against Environmental Hazards</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                In the spray foam industry, it&apos;s crucial to address the environmental risks associated with hazardous chemicals. Our General Liability Insurance from Spray Foam Insurance goes beyond standard coverage to protect your business from potential environmental liabilities. This includes coverage for claims related to accidental spills, soil contamination, or other environmental damages that may arise during your operations.
              </p>
            </GlassCard>
            <GlassCard className="p-6 border-l-4 border-primary">
              <div className="w-10 h-10 rounded-lg bg-highlight/10 flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="font-headline font-bold text-base text-text mb-2">Managing Hazards in the Spray Foam Workplace</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                In the spray foam industry, unique hazards abound, from the necessity of wearing PPE to the potential risks of chemical exposure. Spray foam contractors face these challenges daily. Workers&apos; Compensation Insurance ensures your team receives the necessary care and support if accidents occur due to these industry-specific risks, helping them recover and return to work as quickly as possible.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-primary to-[#06216b] p-8 sm:p-10 text-white shadow-xl">
            <h2 className="font-headline text-2xl sm:text-3xl font-bold mb-4">Tailored Coverage for Your Business</h2>
            <p className="font-label text-sm sm:text-base opacity-90 leading-relaxed mb-6">
              Every spray foam contracting business is unique, and that&apos;s why General Liability Insurance from Spray Foam Insurance can be tailored to your specific needs. Here are some common components of coverage:
            </p>
            <ul className="space-y-3 font-label text-sm sm:text-base">
              <li>
                <span className="font-semibold">Bodily Injury Coverage:</span> This covers medical expenses, legal fees, and damages when someone is injured on your work site or as a result of your business operations.
              </li>
              <li>
                <span className="font-semibold">Property Damage Coverage:</span> This aspect of the policy covers the costs associated with damage to a client&apos;s property caused by your work.
              </li>
              <li>
                <span className="font-semibold">Environmental Risk Mitigation:</span> Spray foam contractors often deal with chemicals that can be hazardous to the environment. This coverage can protect your business from claims related to environmental damage or pollution caused by your operations.
              </li>
              <li>
                <span className="font-semibold">Product Liability Coverage:</span> If there&apos;s an issue with the spray foam material itself, such as defects or performance problems, this coverage can protect your business from resulting claims.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="font-headline text-2xl font-bold text-text mb-3">Peace of Mind in Uncertain Times</h2>
            <p className="text-muted font-label leading-relaxed">
              In the dynamic world of construction and contracting, uncertainties are a part of the game. However, with the right General Liability Insurance in place from Spray Foam Insurance, you can face these uncertainties with confidence, knowing that your business is protected, your clients are reassured, and your reputation remains intact.
            </p>
          </div>
          <div>
            <h2 className="font-headline text-2xl font-bold text-text mb-3">Choose Spray Foam Insurance for Your General Liability Needs</h2>
            <p className="text-muted font-label leading-relaxed mb-4">
              At Spray Foam Insurance, we specialize in providing General Liability Insurance tailored to the unique requirements of spray foam contractors. Our experienced team understands the intricacies of your industry, and we&apos;re committed to ensuring you have the coverage you need to thrive and succeed.
            </p>
            <p className="text-muted font-label leading-relaxed">
              Ready to discuss your insurance needs or have questions about General Liability Insurance? Contact Spray Foam Insurance today. We&apos;re here to help you navigate the world of insurance, so you can focus on what you do best – delivering exceptional spray foam solutions to your clients while ensuring the well-being of your team in this challenging and rewarding industry.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-headline text-3xl font-bold text-text text-center mb-10">
            Frequently Asked Questions
          </h2>
          <FAQSection items={generalLiabilityFaqs} />
        </div>
      </section>

      <CTABar />
    </>
  );
}
