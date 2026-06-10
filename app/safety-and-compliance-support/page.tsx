import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTABar from '@/components/CTABar';
import StatBar from '@/components/StatBar';
import FAQSection from '@/components/FAQSection';
import GlassCard from '@/components/GlassCard';
import { Wind, AlertTriangle, Zap, Shield, Phone, FileText, Download, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Safety & Compliance Support for Spray Foam Contractors',
  description: 'OSHA requirements, PPE standards, chemical handling guidelines, and compliance checklists for spray foam insulation contractors. Stay safe and legal.',
  keywords: ['spray foam OSHA', 'SPF safety guidelines', 'spray foam PPE', 'isocyanate safety', 'spray foam compliance'],
  openGraph: {
    title: 'Safety & Compliance Support for Spray Foam Contractors',
    description: 'OSHA requirements, PPE standards and compliance checklists for SPF contractors.',
    type: 'website',
  },
};

const oshaCards = [
  {
    icon: <Wind className="w-6 h-6" />,
    title: 'Respiratory Protection',
    body: 'OSHA 29 CFR 1910.134 requires supplied-air respirators during spray foam application. Standard dust masks are NOT compliant.',
  },
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    title: 'Chemical Hazard Communication',
    body: 'SDS sheets for all isocyanate products must be on-site. Workers must be trained on chemical hazards under OSHA HazCom 1910.1200.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Ventilation Requirements',
    body: 'Adequate ventilation required during and after application. Indoor air quality monitoring required for occupied structures.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'PPE Standards',
    body: 'Required: supplied-air respirator, chemical-resistant gloves, protective coveralls, eye/face protection, chemical-resistant boots.',
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Emergency Response',
    body: 'Emergency eyewash stations, first aid supplies, and documented emergency procedures required for isocyanate-based products.',
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: 'Training Documentation',
    body: 'All applicators must complete manufacturer certification training. Keep training records for all crew members.',
  },
];

const ppeItems = [
  'Supplied-air respirator (SAR) or SCBA during application',
  'Chemical-resistant gloves (minimum nitrile, preferably butyl)',
  'Full-body coverall or Tyvek suit (disposable)',
  'Chemical splash goggles or face shield',
  'Chemical-resistant boots or boot covers',
  'Hard hat in overhead application environments',
  'High-visibility vest for outdoor/roadway jobs',
  'Hearing protection near generators/equipment',
];

const chemicalCards = [
  {
    title: 'Storage',
    body: 'Store A and B components at 60–80°F. Keep away from moisture. Use within manufacturer\'s shelf life guidelines.',
  },
  {
    title: 'Handling',
    body: 'Never mix components outside proportioner. Use proper PPE when handling drums. Inspect hoses and connections before each use.',
  },
  {
    title: 'Disposal',
    body: 'Dispose of cured foam as solid waste. Uncured or liquid chemical waste is hazardous — follow state/local disposal requirements.',
  },
];

const faqItems = [
  {
    q: 'What respirator does OSHA require for spray foam application?',
    a: 'OSHA requires at minimum a supplied-air respirator (SAR) type CE with full-face piece during spray application. Standard N95 masks are NOT sufficient for isocyanate exposure. After the resin cures (typically 24 hours), workers may re-enter with appropriate half-mask respirators with organic vapor/P100 cartridges.',
  },
  {
    q: 'Do I need OSHA training certificates for my crew?',
    a: 'OSHA HazCom training is required for all workers handling isocyanate chemicals. Manufacturer application certification is typically required for product warranties. Document all training for every crew member.',
  },
  {
    q: 'Is spray foam considered hazardous by OSHA?',
    a: 'The isocyanate component (B-side) is regulated as a hazardous chemical under OSHA HazCom. It can cause occupational asthma with repeated exposure. Proper PPE, ventilation, and training are non-negotiable.',
  },
  {
    q: 'What insurance covers OSHA fines?',
    a: 'Standard liability insurance does not cover OSHA fines, which are civil penalties. However, proper safety protocols reduce accident risk, keeping your Workers\' Compensation and GL premiums lower and helping avoid claims.',
  },
  {
    q: 'How does safety compliance affect my premiums?',
    a: 'Insurers review your safety record, OSHA violation history, and training documentation when pricing policies. Contractors with documented safety programs and clean records typically receive better rates.',
  },
];

const downloadResources = [
  {
    title: 'SPF Safety Quick Reference Guide',
    body: 'Essential safety protocols in an easy-to-print one-page format.',
  },
  {
    title: 'OSHA Compliance Checklist',
    body: 'Step-by-step checklist for spray foam contractor OSHA compliance.',
  },
  {
    title: 'Chemical Handling SOP Template',
    body: 'Standard operating procedure template for handling isocyanate products.',
  },
];

export default function SafetyAndCompliancePage() {
  return (
    <>
      <PageHero
        title="Safety & Compliance Support"
        subtitle="OSHA requirements, PPE standards, and chemical handling guidelines for spray foam contractors."
        badge="OSHA COMPLIANT"
        ctaText="Get Protected"
        ctaHref="/quote"
      />

      <StatBar
        stats={[
          { label: 'OSHA Standards Covered', value: '12+' },
          { label: 'PPE Requirements', value: '8' },
          { label: 'Compliance Areas', value: '6' },
          { label: 'Training Resources', value: '15+' },
        ]}
      />

      {/* OSHA Requirements */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <p className="label-text text-accent font-label font-semibold text-xs tracking-widest uppercase mb-2">
          OSHA COMPLIANCE
        </p>
        <h2 className="font-headline font-bold text-3xl text-text mb-3">
          OSHA Requirements for SPF Contractors
        </h2>
        <p className="text-muted max-w-2xl">
          Federal OSHA standards impose specific obligations on spray foam applicators. Understand what's required before you pull the trigger on your next job.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {oshaCards.map((card) => (
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

      {/* PPE Checklist */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <p className="label-text text-accent font-label font-semibold text-xs tracking-widest uppercase mb-2">
          REQUIRED GEAR
        </p>
        <h2 className="font-headline font-bold text-3xl text-text mb-3">
          PPE Requirements Checklist
        </h2>
        <p className="text-muted mb-8">
          Every crew member on a spray foam job must be equipped with the following personal protective equipment before work begins.
        </p>

        <GlassCard className="p-8">
          {ppeItems.map((item) => (
            <div key={item} className="flex items-start gap-3 mb-4 last:mb-0">
              <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <span className="text-muted text-sm">{item}</span>
            </div>
          ))}
        </GlassCard>
      </section>

      {/* Chemical Handling */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <p className="label-text text-accent font-label font-semibold text-xs tracking-widest uppercase mb-2">
          CHEMICAL SAFETY
        </p>
        <h2 className="font-headline font-bold text-3xl text-text mb-3">
          Chemical Handling Guidelines
        </h2>
        <p className="text-muted mb-8 max-w-2xl">
          Improper handling of isocyanate components is a leading cause of spray foam contractor claims and OSHA violations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {chemicalCards.map((card) => (
            <GlassCard key={card.title} className="p-6">
              <h3 className="font-headline font-bold text-text mb-2">{card.title}</h3>
              <p className="text-muted text-sm">{card.body}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <p className="label-text text-accent font-label font-semibold text-xs tracking-widest uppercase mb-2">
          COMMON QUESTIONS
        </p>
        <h2 className="font-headline font-bold text-3xl text-text mb-8">
          Safety & Compliance FAQs
        </h2>
        <FAQSection items={faqItems} />
      </section>

      {/* Download Resources */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <p className="label-text text-accent font-label font-semibold text-xs tracking-widest uppercase mb-2">
          FREE RESOURCES
        </p>
        <h2 className="font-headline font-bold text-3xl text-text mb-3">
          Download Resources
        </h2>
        <p className="text-muted mb-8 max-w-2xl">
          Print-ready compliance tools your crew can actually use on the job.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {downloadResources.map((resource) => (
            <GlassCard key={resource.title} className="p-6">
              <Download className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-headline font-bold text-text mb-2">{resource.title}</h3>
              <p className="text-muted text-sm mb-4">{resource.body}</p>
              <a
                href="#"
                className="secondary-btn inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-label font-semibold"
              >
                <Download className="w-4 h-4" />
                Download
              </a>
            </GlassCard>
          ))}
        </div>
      </section>

      <CTABar />
    </>
  );
}
