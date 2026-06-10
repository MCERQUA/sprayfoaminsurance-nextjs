import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CTABar from '@/components/CTABar';
import StatBar from '@/components/StatBar';
import FAQSection from '@/components/FAQSection';
import GlassCard from '@/components/GlassCard';
import { FileText, Award, Shield, CheckSquare, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Spray Foam Contractor Resources | Forms, Guides & Tools',
  description:
    'Download essential resources for spray foam contractors — work record forms, attic certificates, safety guides, OSHA compliance docs. All free.',
  keywords: [
    'spray foam contractor resources',
    'work record form',
    'attic certificate',
    'SPF compliance guide',
  ],
  openGraph: {
    title: 'Spray Foam Contractor Resources',
    description: 'Free forms, guides, and tools for spray foam insulation contractors.',
    type: 'website',
  },
};

const resources = [
  {
    icon: FileText,
    title: 'Work Record Form',
    description:
      'Document every spray foam job with our professional work record form. Essential for warranty claims and insurance documentation.',
    href: '/spf-resources/work-record-form',
    cta: 'Access Form',
  },
  {
    icon: Award,
    title: 'Attic Insulation Certificate',
    description:
      'Official certificates documenting R-value, coverage area, and specs.',
    href: '/attic-insulation-certificate',
    cta: 'Get Certificate',
  },
  {
    icon: Shield,
    title: 'Safety & Compliance Guide',
    description:
      'OSHA requirements, PPE standards, and chemical handling guidelines.',
    href: '/safety-and-compliance-support',
    cta: 'View Guide',
  },
  {
    icon: CheckSquare,
    title: 'Insurance Checklist',
    description:
      'Coverages every spray foam contractor should carry before any job.',
    href: '/quote',
    cta: 'View Checklist',
  },
];

const faqItems = [
  {
    q: 'Are these resources free?',
    a: 'Yes — all downloadable forms and guides are completely free for spray foam contractors. No sign-up required for most resources.',
  },
  {
    q: 'Do I need the work record form on every job?',
    a: 'While not legally required in all states, maintaining detailed work records is strongly recommended for warranty documentation, insurance claims, and client trust.',
  },
  {
    q: 'What is an attic insulation certificate?',
    a: 'An official document recording the type, depth, and R-value of insulation installed in an attic. Many energy rebate programs and home sales require them.',
  },
  {
    q: 'How do I stay OSHA compliant as a spray foam contractor?',
    a: 'OSHA requires proper PPE including supplied-air respirators during application, ventilation standards, and chemical handling procedures for isocyanate products. Our safety guide covers all key requirements.',
  },
];

const stats = [
  { label: 'Resources Available', value: '12+' },
  { label: 'Contractors Served', value: '2,000+' },
  { label: 'States Covered', value: '50' },
  { label: 'Years Experience', value: '15+' },
];

export default function SPFResourcesPage() {
  return (
    <>
      <PageHero
        title="Spray Foam Contractor Resources"
        subtitle="Everything you need to document jobs, stay compliant, and protect your business."
        badge="FREE RESOURCES"
        ctaText="Get a Quote"
        ctaHref="/quote"
      />

      {/* Resource Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <p className="label-text text-accent">RESOURCE CENTER</p>
          <h2 className="font-headline font-bold text-3xl text-text mt-2">
            Tools &amp; Downloads for SPF Contractors
          </h2>
          <p className="text-muted max-w-2xl mx-auto mt-4">
            Access free professional forms, compliance guides, and documentation tools built
            specifically for spray foam insulation contractors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {resources.map(({ icon: Icon, title, description, href, cta }) => (
            <GlassCard key={title} className="flex flex-col p-6 h-full">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-headline font-bold text-text text-lg mb-2">{title}</h3>
              <p className="text-muted text-sm mb-4 flex-1">{description}</p>
              <Link
                href={href}
                className="primary-btn inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-label font-semibold mt-auto"
              >
                {cta} <ArrowRight className="w-4 h-4" />
              </Link>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Stat Bar */}
      <StatBar stats={stats} />

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <p className="label-text text-accent">COMMON QUESTIONS</p>
          <h2 className="font-headline font-bold text-3xl text-text mt-2">
            Frequently Asked Questions
          </h2>
        </div>
        <FAQSection items={faqItems} />
      </section>

      <CTABar />
    </>
  );
}
