import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import FAQSection from '@/components/FAQSection';
import CTABar from '@/components/CTABar';
import GlassCard from '@/components/GlassCard';
import ServiceCard from '@/components/ServiceCard';
import { AlertTriangle, Shield, Users, Truck } from 'lucide-react';
import { workersCompFaqs } from '@/lib/faqs';

export const metadata: Metadata = {
  title: "Workers' Compensation Insurance for Spray Foam Contractors",
  description:
    "Workers' comp insurance built for the unique risks of spray foam work — chemical exposure, falls, burns, and occupational illness. Get a free quote today.",
  alternates: { canonical: 'https://sprayfoaminsurance.com/services/workers-compensation-insurance-for-spray-foam-contractors' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'InsuranceAgency',
      name: 'Spray Foam Insurance',
      url: 'https://sprayfoaminsurance.com',
      telephone: '844-967-5247',
      description: "Workers' compensation insurance for spray foam contractors",
      areaServed: 'US',
      serviceType: "Workers Compensation Insurance",
    },
  ],
};

export default function WorkersCompPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        title="Workers' Compensation for Spray Foam Contractors"
        subtitle="Workers' Compensation Insurance is more than just a legal requirement; it's a commitment to the people who make your business thrive."
        ctaText="Get a Quote"
        ctaHref="/quote"
        badge="Workers' Comp"
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
            Protecting Your Team, Ensuring Your Success
          </h2>
          <p className="text-muted font-label leading-relaxed mb-8">
            Spray foam contractors are the backbone of the construction industry, creating energy-efficient, moisture-resistant, and eco-friendly insulation solutions. The demanding nature of the work, often involving the use of heavy equipment and chemicals, means that ensuring the safety and well-being of your team is paramount. That&apos;s where Workers&apos; Compensation Insurance from Spray Foam Insurance steps in – to provide your employees with the protection they need while safeguarding the future of your business.
          </p>
          <GlassCard className="p-6 border-l-4 border-primary">
            <h3 className="font-headline font-bold text-text mb-2">Understanding the Essentials</h3>
            <p className="text-muted font-label text-sm leading-relaxed">
              Workers&apos; Compensation Insurance is more than just a legal requirement; it&apos;s a commitment to the people who make your business thrive. This vital coverage is designed to provide benefits to employees who suffer work-related injuries or illnesses. It not only protects your employees by covering their medical expenses and lost wages but also protects your business from costly lawsuits that can arise from workplace accidents.
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <GlassCard className="p-6 border-l-4 border-primary">
              <div className="w-10 h-10 rounded-lg bg-highlight/10 flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="font-headline font-bold text-base text-text mb-2">Caring for Your Team</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                The health and safety of your employees should always be a top priority. Accidents can happen in any workplace, and the spray foam industry is no exception. Workers&apos; Compensation Insurance ensures that your team receives the care and support they need if they are injured on the job, helping them recover and return to work as quickly as possible.
              </p>
            </GlassCard>
            <GlassCard className="p-6 border-l-4 border-primary">
              <div className="w-10 h-10 rounded-lg bg-highlight/10 flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="font-headline font-bold text-base text-text mb-2">Legal Compliance</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                In many jurisdictions, carrying Workers&apos; Compensation Insurance is a legal requirement. Compliance with these regulations is not just about avoiding fines and penalties; it&apos;s about fulfilling your responsibility as an employer to provide a safe and supportive work environment.
              </p>
            </GlassCard>
            <GlassCard className="p-6 border-l-4 border-primary">
              <div className="w-10 h-10 rounded-lg bg-highlight/10 flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="font-headline font-bold text-base text-text mb-2">Financial Security</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                Workplace injuries can lead to substantial financial costs, including medical bills and lost wages. Without insurance, these expenses could be borne by your business. Workers&apos; Compensation Insurance from Spray Foam Insurance ensures that your business remains financially stable in the face of unexpected accidents.
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
            <h2 className="font-headline text-2xl font-bold text-text mb-3">A Commitment to Safety</h2>
            <p className="text-muted font-label leading-relaxed">
              At Spray Foam Insurance, we understand that prevention is the first step in creating a safe work environment. We provide resources and support to help you implement best practices in workplace safety. By working together, we can reduce the risk of accidents and ensure the well-being of your employees.
            </p>
          </div>
          <div>
            <h2 className="font-headline text-2xl font-bold text-text mb-3">Choose Spray Foam Insurance for Your Workers&apos; Compensation Needs</h2>
            <p className="text-muted font-label leading-relaxed mb-4">
              Your employees are your most valuable asset, and protecting them is crucial. At Spray Foam Insurance, we specialize in providing Workers&apos; Compensation Insurance tailored to the unique requirements of spray foam contractors. Our experienced team understands the intricacies of your industry, and we&apos;re committed to ensuring your employees have the coverage they need to thrive and succeed.
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
            Workers&apos; Comp FAQ
          </h2>
          <FAQSection items={workersCompFaqs} />
        </div>
      </section>

      <CTABar />
    </>
  );
}
