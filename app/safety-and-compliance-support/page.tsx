import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTABar from '@/components/CTABar';
import FAQSection from '@/components/FAQSection';
import GlassCard from '@/components/GlassCard';
import ServiceCard from '@/components/ServiceCard';
import { AlertTriangle, Shield, Users, Truck } from 'lucide-react';
import { safetyComplianceFaqs } from '@/lib/faqs';

export const metadata: Metadata = {
  title: 'Safety & Compliance Support for Spray Foam Contractors',
  description: 'OSHA requirements, PPE standards, chemical handling guidelines, and compliance checklists for spray foam insulation contractors. Stay safe and legal.',
  alternates: { canonical: 'https://sprayfoaminsurance.com/safety-and-compliance-support' },
  keywords: ['spray foam OSHA', 'SPF safety guidelines', 'spray foam PPE', 'isocyanate safety', 'spray foam compliance'],
  openGraph: {
    title: 'Safety & Compliance Support for Spray Foam Contractors',
    description: 'OSHA requirements, PPE standards and compliance checklists for SPF contractors.',
    type: 'website',
  },
};

export default function SafetyAndCompliancePage() {
  return (
    <>
      <PageHero
        title="Safety and Compliance Support for Spray Foam Contractors"
        subtitle="Safety and Compliance Support is more than just a service; it's a partnership in your journey towards excellence."
        badge="OSHA Compliant"
        ctaText="Get a Quote"
        ctaHref="/quote"
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
            Guiding Your Path to Excellence and Responsibility
          </h2>
          <p className="text-muted font-label leading-relaxed mb-8">
            In the intricate world of spray foam insulation, safety and compliance are not just buzzwords – they are the cornerstones of your success. Spray foam contractors operate in an environment where adherence to safety standards and regulatory compliance is paramount. That&apos;s why Spray Foam Insurance offers dedicated Safety and Compliance Support services to guide you on the path to excellence, ensuring your operations are not only efficient but also safe and responsible.
          </p>
          <GlassCard className="p-6 border-l-4 border-primary">
            <h3 className="font-headline font-bold text-text mb-2">Understanding the Essentials</h3>
            <p className="text-muted font-label text-sm leading-relaxed">
              Safety and Compliance Support is more than just a service; it&apos;s a partnership in your journey towards excellence. It&apos;s about providing you with the resources, guidance, and expertise you need to navigate the complex landscape of safety protocols and industry regulations.
            </p>
          </GlassCard>
        </div>
      </section>

      <section className="blue-gradient-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-text">
              Why Is Safety and Compliance Support Essential for Spray Foam Contractors?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <GlassCard className="p-6 border-l-4 border-primary">
              <div className="w-10 h-10 rounded-lg bg-highlight/10 flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="font-headline font-bold text-base text-text mb-2">Safety First</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                Your team&apos;s well-being is your top priority. Our support helps you establish robust safety protocols, creating a secure work environment that minimizes accidents and hazards.
              </p>
            </GlassCard>
            <GlassCard className="p-6 border-l-4 border-primary">
              <div className="w-10 h-10 rounded-lg bg-highlight/10 flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="font-headline font-bold text-base text-text mb-2">Regulatory Adherence</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                Navigating the myriad of industry regulations, permits, and compliance requirements can be daunting. Our experts are here to simplify the process, ensuring you meet all legal obligations.
              </p>
            </GlassCard>
            <GlassCard className="p-6 border-l-4 border-primary">
              <div className="w-10 h-10 rounded-lg bg-highlight/10 flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="font-headline font-bold text-base text-text mb-2">Client Confidence</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                Clients and partners seek professionals who prioritize safety and compliance. By demonstrating your commitment to these principles, you gain the trust of your clients and build a stellar reputation.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-primary to-[#06216b] p-8 sm:p-10 text-white shadow-xl">
            <h2 className="font-headline text-2xl sm:text-3xl font-bold mb-4">Services We Offer</h2>
            <p className="font-label text-sm sm:text-base opacity-90 leading-relaxed mb-6">
              Workers&apos; Compensation Insurance from Spray Foam Insurance can be customized to meet your specific needs. Here are some key components of coverage:
            </p>
            <ul className="space-y-3 font-label text-sm sm:text-base">
              <li>
                <span className="font-semibold">Medical Expenses:</span> Coverage for necessary medical treatment and rehabilitation services to help injured employees recover.
              </li>
              <li>
                <span className="font-semibold">Lost Wages:</span> Replacement of a portion of an employee&apos;s lost income due to a work-related injury or illness.
              </li>
              <li>
                <span className="font-semibold">Disability Benefits:</span> Compensation for permanent or temporary disability resulting from workplace accidents.
              </li>
              <li>
                <span className="font-semibold">Death Benefits:</span> Financial support to the family or dependents of an employee who loses their life in a work-related incident.
              </li>
              <li>
                <span className="font-semibold">Legal Protection:</span> Coverage for legal expenses in case of lawsuits related to workplace injuries.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="font-headline text-2xl font-bold text-text mb-3">Enhancing Your Reputation and Ensuring Compliance</h2>
            <p className="text-muted font-label leading-relaxed">
              At Spray Foam Insurance, we understand that your business thrives when it operates safely and responsibly. Our Safety and Compliance Support services are designed to empower you with the knowledge and tools you need to excel in your industry while minimizing risks.
            </p>
          </div>
          <div>
            <h2 className="font-headline text-2xl font-bold text-text mb-3">Choose Spray Foam Insurance for Your Safety and Compliance Needs</h2>
            <p className="text-muted font-label leading-relaxed mb-4">
              Our team specializes in providing Safety and Compliance Support tailored to the unique requirements of spray foam contractors. We&apos;re committed to helping you maintain safety, uphold compliance, and build a reputation for excellence in the spray foam industry.
            </p>
            <p className="text-muted font-label leading-relaxed">
              Ready to discuss your insurance needs or have questions about Workers&apos; Compensation Insurance? Contact Spray Foam Insurance today. We&apos;re here to help you navigate the world of insurance, so you can focus on what you do best – delivering exceptional spray foam solutions to your clients while ensuring the well-being of your team.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-headline text-3xl font-bold text-text text-center mb-10">
            Safety &amp; Compliance FAQs
          </h2>
          <FAQSection items={safetyComplianceFaqs} />
        </div>
      </section>

      <CTABar />
    </>
  );
}
