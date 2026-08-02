import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CTABar from '@/components/CTABar';
import GlassCard from '@/components/GlassCard';
import FAQSection from '@/components/FAQSection';
import StatBar from '@/components/StatBar';

export const metadata: Metadata = {
  title: 'Spray Foam Services | Spray Foam Insurance Call 844-967-5247',
  description: 'Explore all insurance coverage options for spray foam contractors — GL, workers comp, commercial auto, environmental, surety bonds, and rig insurance.',
};

const topServices = [
  {
    title: 'General Liability',
    description:
      "Discover the comprehensive coverage you need to safeguard your spray foam contracting business. Our General Liability insurance is designed to shield you from unforeseen risks and give you the confidence to build a brighter future.",
    href: '/services/general-liability-insurance',
  },
  {
    title: 'Workers Compensation',
    description:
      "Prioritize your team's well-being with our Workers' Compensation coverage. We're here to ensure your employees are protected, and your business remains secure in the face of workplace injuries. Explore how we can help you create a safer work environment.",
    href: '/services/workers-compensation-insurance-for-spray-foam-contractors',
  },
  {
    title: 'Commercial Auto',
    description:
      "Your business relies on wheels, and so do we. Our Commercial Auto Insurance ensures your vehicles stay on the road, so you can focus on what matters most—serving your clients. Explore how we can drive your success with tailored coverage.",
    href: '/services/commercial-auto',
  },
];

const comprehensiveItems = [
  {
    q: 'Expertise in Spray Foam Insurance',
    a: "With many years of dedicated focus on the spray foam industry, we've honed our expertise to understand the unique risks and needs of spray foam contractors. Our specialized knowledge allows us to provide tailored insurance solutions that truly protect your business.",
  },
  {
    q: 'Personalized Service',
    a: 'We pride ourselves on delivering personalized service. We work closely with each client, taking the time to understand your specific requirements. This ensures you receive insurance solutions that match your business goals and preferences, with a personal touch you can trust.',
  },
  {
    q: 'Industry Partnerships',
    a: "We've cultivated strong partnerships within the spray foam industry. These connections enable us to stay updated on industry trends, regulations, and emerging risks, so you can benefit from the latest insights and solutions when you choose us as your insurance partner.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Insurance Services" subtitle="For Spray Foam Contractors" />

      <section className="bg-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topServices.map(({ title, description, href }) => (
              <GlassCard key={title} className="flex flex-col h-full text-center">
                <h3 className="font-headline font-bold text-text text-xl mb-4">{title}</h3>
                <p className="text-muted text-sm leading-relaxed flex-1 mb-4">{description}</p>
                <Link href={href} className="text-primary text-sm font-bold hover:text-accent transition-colors">
                  More Details&gt;
                </Link>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface border-y border-primary/10 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-text text-center mb-10">
            Our Comprehensive Insurance Services for Spray Foam Contractors
          </h2>
          <FAQSection items={comprehensiveItems} />
        </div>
      </section>

      <section className="blue-gradient-section py-16 text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-white">
          We&apos;re Here To Help Any-Time Any-Day
        </h2>
      </section>

      <StatBar
        stats={[
          { value: '24', label: 'Hours a Day' },
          { value: '365', label: 'Days A Year' },
          { value: '8,760', label: 'Hours Per Year' },
          { value: '298', label: 'Active Contractor Clients' },
        ]}
      />

      <CTABar />
    </>
  );
}
