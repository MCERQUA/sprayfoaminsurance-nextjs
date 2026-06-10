import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTABar from '@/components/CTABar';
import StatBar from '@/components/StatBar';
import FAQSection from '@/components/FAQSection';
import GlassCard from '@/components/GlassCard';
import { Building2, Thermometer, Award, CheckCircle, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Spray Foam Insurance Las Vegas & Nevada | 844-967-5247',
  description:
    'Spray foam contractor insurance in Las Vegas and throughout Nevada. General liability, workers comp, equipment coverage. Local specialists. Call 844-967-5247.',
  keywords: [
    'spray foam insurance Las Vegas',
    'Nevada spray foam contractor insurance',
    'Las Vegas insulation contractor insurance',
    'Nevada SPF insurance',
  ],
  openGraph: {
    title: 'Spray Foam Insurance Las Vegas & Nevada',
    description: 'Specialized spray foam contractor insurance for Nevada and Las Vegas. Local experts.',
    type: 'website',
  },
};

const stats = [
  { label: 'NV Contractors Insured', value: '150+' },
  { label: 'Coverage Types', value: '8' },
  { label: 'Years in Nevada', value: '10+' },
  { label: 'Response', value: 'Same Day' },
];

const requirements = [
  {
    Icon: Building2,
    title: 'Nevada Contractor License',
    body: 'Nevada requires spray foam contractors to carry minimum $500,000 GL with the Nevada State Contractors Board (NSCB) as certificate holder.',
  },
  {
    Icon: Award,
    title: 'Workers Comp in Nevada',
    body: 'Nevada workers’ compensation must be obtained through the Nevada SIIS or certified private carriers.',
  },
  {
    Icon: Thermometer,
    title: 'Extreme Heat Considerations',
    body: 'Las Vegas temperatures exceed 115°F. Spray foam application in extreme heat affects cure times, safety protocols, and equipment performance. Our policies account for Nevada’s climate.',
  },
  {
    Icon: Building2,
    title: 'Commercial Las Vegas Market',
    body: 'Las Vegas has significant hospitality and casino resort construction. We specialize in helping Nevada contractors qualify for large commercial project insurance requirements.',
  },
];

const coverageCards = [
  {
    title: 'General Liability for Nevada',
    bullets: [
      'NSCB-compliant certs issued same business day',
      '$500K minimum met',
      '$1M/$2M aggregate available',
    ],
  },
  {
    title: 'Workers Compensation',
    bullets: [
      'Nevada-compliant carriers',
      'SIIS alternative options',
      'Coverage from day one of hire',
    ],
  },
  {
    title: 'Rig & Equipment',
    bullets: [
      'Desert climate unique risks covered',
      'Extreme heat and UV exposure protection',
      'Long hauls between jobs included',
    ],
  },
];

const whyUs = [
  'Nevada contractor license requirements met automatically',
  'Same-day certificates for project bids',
  'Understanding of Nevada construction and hospitality sector',
  'Competitive rates for Nevada spray foam market',
];

const faqs = [
  {
    q: 'What insurance does Nevada require for spray foam contractors?',
    a: 'Nevada requires a minimum of $500,000 general liability insurance for most contractor license classifications. Many commercial clients require $1M/$2M aggregate. Workers’ compensation is required as soon as you hire your first employee.',
  },
  {
    q: 'Do you provide certificates for the Nevada State Contractors Board?',
    a: 'Yes — we issue NSCB-compliant certificates with the Board listed as certificate holder, typically within 1–2 hours during business hours.',
  },
  {
    q: 'Are there special considerations for spray foam work in Las Vegas heat?',
    a: 'Yes — extreme heat in the Las Vegas Valley (110°F+) affects isocyanate reaction rates and PPE comfort. Our policy terms account for Nevada’s climate conditions.',
  },
  {
    q: 'Can I get coverage for casino resort and hospitality projects in Las Vegas?',
    a: 'Yes — commercial spray foam work on casino resorts requires higher liability limits (often $2M–$5M per occurrence) and may require additional insured endorsements. We specialize in structuring policies for Las Vegas commercial work.',
  },
];

export default function VegasPage() {
  return (
    <>
      <PageHero
        title="Spray Foam Insurance — Las Vegas & Nevada"
        subtitle="Specialized insurance for Nevada spray foam contractors. Local expertise, competitive rates, coverage meeting Nevada license requirements."
        badge="LAS VEGAS & NEVADA"
        ctaText="Get Nevada Quote"
        ctaHref="/quote"
      />

      <StatBar stats={stats} />

      {/* Nevada Insurance Requirements */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="font-headline font-bold text-text text-2xl md:text-3xl text-center mb-8">
          Nevada Insurance Requirements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {requirements.map(({ Icon, title, body }) => (
            <GlassCard key={title} className="p-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 mb-4">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-headline font-bold text-text mb-2">{title}</h3>
              <p className="text-muted text-sm">{body}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Coverage for Nevada SPF Contractors */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="font-headline font-bold text-text text-2xl md:text-3xl text-center mb-8">
          Coverage for Nevada SPF Contractors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coverageCards.map(({ title, bullets }) => (
            <GlassCard key={title} className="p-6">
              <h3 className="font-headline font-bold text-text mb-4">{title}</h3>
              <ul className="space-y-2">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Why Nevada Contractors Choose Us */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <GlassCard className="p-8">
            <h3 className="font-headline font-bold text-text text-xl mb-4">
              Why Nevada Contractors Choose Us
            </h3>
            {whyUs.map((item) => (
              <div key={item} className="flex items-start gap-3 mb-3">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-muted">{item}</span>
              </div>
            ))}
          </GlassCard>
        </div>
      </section>

      {/* Local Contact */}
      <div className="max-w-lg mx-auto my-8 px-4">
        <GlassCard className="p-8 text-center">
          <h3 className="font-headline font-bold text-text text-xl mb-4">
            Nevada &amp; Las Vegas Spray Foam Insurance
          </h3>
          <Phone className="w-8 h-8 text-primary mx-auto mb-2" />
          <a
            href="tel:8449675247"
            className="text-3xl font-headline font-bold text-primary block mb-2"
          >
            844-967-5247
          </a>
          <p className="text-muted text-sm">Mon–Fri 8am–6pm PST</p>
          <p className="text-muted text-sm mt-2">
            Service Area: Las Vegas &bull; Henderson &bull; North Las Vegas &bull; Reno &bull; Carson City &bull; Statewide
          </p>
        </GlassCard>
      </div>

      {/* FAQ */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <FAQSection items={faqs} />
      </div>

      <CTABar />
    </>
  );
}
