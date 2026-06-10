import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTABar from '@/components/CTABar';
import StatBar from '@/components/StatBar';
import FAQSection from '@/components/FAQSection';
import GlassCard from '@/components/GlassCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Spray Foam Rig & Equipment Insurance | Inland Marine',
  description:
    'Specialized insurance for spray foam rigs: proportioners, hoses, generators, trailers. Replacement cost coverage. Fast quotes for SPF contractors.',
  keywords: [
    'spray foam rig insurance',
    'proportioner insurance',
    'SPF equipment insurance',
    'spray foam trailer insurance',
  ],
  openGraph: {
    title: 'Spray Foam Rig & Equipment Insurance',
    description: 'Purpose-built inland marine coverage for spray foam rigs and equipment.',
    type: 'website',
  },
};

const rigItems = [
  {
    range: '$15K–$45K',
    title: 'Proportioner System',
    description:
      'Hydraulic and pneumatic proportioners covered against fire, theft, collision, and accidental damage.',
  },
  {
    range: '$8K–$20K',
    title: 'Heated Hose Sets',
    description:
      "200' and 300' heated hose assemblies — damage, theft, and fire covered.",
  },
  {
    range: '$5K–$15K',
    title: 'Generator',
    description:
      'Commercial generators (20–60kW) — theft, fire, vandalism, and physical damage.',
  },
  {
    range: '$8K–$25K',
    title: 'Trailer & Frame',
    description:
      'Custom spray foam trailers including mounted equipment and climate control systems.',
  },
  {
    range: '$3K–$8K',
    title: 'Transfer Pumps & Accessories',
    description: 'Drum pumps, agitators, and material handling equipment.',
  },
  {
    range: '$2K–$5K',
    title: 'Spray Guns & Hand Tools',
    description: 'Guns, applicators, and portable hand tools covered under your rig policy.',
  },
];

const highlights = [
  'Replacement Cost (no depreciation)',
  'On-site + in transit',
  'Theft & vandalism included',
  'Bundled policy discounts',
];

const tiers = [
  {
    labelClass: 'text-muted',
    label: 'ENTRY LEVEL',
    title: 'Basic Rig — $40K–$60K',
    description: 'Entry-level proportioner, standard trailer, single generator.',
    price: '~$1,200–$1,800/year',
  },
  {
    labelClass: 'text-accent',
    label: 'MOST POPULAR',
    title: 'Standard Rig — $60K–$100K',
    description: 'Hydraulic proportioner, custom trailer, commercial generator.',
    price: '~$1,800–$2,800/year',
  },
  {
    labelClass: 'text-primary',
    label: 'FULL COMMERCIAL',
    title: 'Premium Rig — $100K+',
    description:
      'High-output systems, fully equipped commercial trailer, dual generators.',
    price: '~$2,800–$4,500/year',
  },
];

const faqs = [
  {
    q: 'Do I need to list every piece of equipment separately?',
    a: 'For high-value items like proportioners (over $10K), we recommend scheduling them individually. Smaller tools can often be covered under a blanket inland marine limit.',
  },
  {
    q: 'What deductible should I choose for my rig?',
    a: 'Most spray foam contractors choose $1,000–$2,500 deductibles. Higher deductibles reduce your annual premium but mean more out-of-pocket costs if you file a claim.',
  },
  {
    q: 'Does inland marine cover breakdowns from normal wear and tear?',
    a: 'No — inland marine covers sudden accidental physical loss (theft, fire, collision, vandalism). Mechanical breakdown insurance is a separate product.',
  },
  {
    q: 'Can I add my rig to an existing business policy?',
    a: 'In some cases inland marine can be added as an endorsement to your commercial package policy. We will review your current coverage and find the most cost-effective structure.',
  },
  {
    q: 'What documentation do I need to insure my rig?',
    a: 'Serial numbers, purchase receipts or appraisals, photos, and current values. Manufacturer invoices work for newer equipment.',
  },
];

export default function SprayFoamRigInsurancePage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 pt-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Inland Marine', href: '/inland-marine' },
            { label: 'Spray Foam Rig Insurance' },
          ]}
        />
      </div>

      <PageHero
        title="Spray Foam Rig & Equipment Insurance"
        subtitle="Purpose-built coverage for spray foam proportioners, heated hoses, generators, and trailers. Don't let equipment loss shut down your business."
        badge="RIG COVERAGE"
        ctaText="Get a Quote"
        ctaHref="/quote"
      />

      <StatBar
        stats={[
          { label: 'Equipment Types', value: '12+' },
          { label: 'Avg Rig Replacement', value: '$95K' },
          { label: 'Claims Response', value: '24hr' },
          { label: 'SPF Contractors', value: '500+' },
        ]}
      />

      {/* What's Covered on Your Rig */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-headline font-bold text-text mb-2">
          What's Covered on Your Rig
        </h2>
        <p className="text-muted mb-10 max-w-2xl">
          Every component of a professional spray foam rig can be scheduled on your inland marine
          policy. Here are the items we cover most often.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rigItems.map((item) => (
            <GlassCard key={item.title} className="p-6">
              <p className="label-text text-accent text-xs mb-1">{item.range}</p>
              <h3 className="font-headline font-bold text-text mb-2">{item.title}</h3>
              <p className="text-muted text-sm">{item.description}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Coverage Highlights */}
      <section className="max-w-5xl mx-auto px-4 py-4">
        <GlassCard className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map((h) => (
              <div key={h} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                <span className="font-label font-semibold text-sm text-text">{h}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </section>

      {/* Coverage Tiers */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-headline font-bold text-text mb-8">Coverage Tiers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <GlassCard key={tier.title} className="p-6">
              <p className={`label-text text-xs mb-1 ${tier.labelClass}`}>{tier.label}</p>
              <h3 className="font-headline font-bold text-text text-xl mb-3">{tier.title}</h3>
              <p className="text-muted text-sm mb-4">{tier.description}</p>
              <p className="text-primary font-bold">{tier.price}</p>
            </GlassCard>
          ))}
        </div>
        <p className="text-xs text-muted text-center italic mt-6">
          Actual premiums vary based on equipment age, location, claims history, and deductible.
          Get a custom quote for your specific rig.
        </p>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-headline font-bold text-text mb-8">
          Frequently Asked Questions
        </h2>
        <FAQSection items={faqs} />
      </section>

      <CTABar />
    </>
  );
}
