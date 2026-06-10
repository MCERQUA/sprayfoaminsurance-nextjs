import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CTABar from '@/components/CTABar';
import StatBar from '@/components/StatBar';
import FAQSection from '@/components/FAQSection';
import GlassCard from '@/components/GlassCard';
import { Wrench, Zap, Truck, ArrowRight, CheckCircle, Settings, Package } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Inland Marine Insurance for Spray Foam Contractors',
  description:
    'Protect your spray foam rig and equipment with inland marine insurance. Coverage for proportioners, hoses, generators, and trailers wherever the job takes you.',
  keywords: [
    'inland marine insurance spray foam',
    'SPF rig insurance',
    'spray foam equipment insurance',
    'contractor equipment coverage',
  ],
  openGraph: {
    title: 'Inland Marine Insurance for Spray Foam Contractors',
    description:
      'Equipment coverage for spray foam proportioners, hoses, generators, and trailers.',
    type: 'website',
  },
};

const coverageItems = [
  {
    icon: <Settings className="w-6 h-6" />,
    title: 'Spray Foam Proportioners',
    description:
      'Your proportioner is the heart of your operation. Covers hydraulic systems against mechanical breakdown, theft, and physical damage.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Heated Hose Systems',
    description:
      "200’ and 300’ heated hose sets covered against fire, theft, and accidental damage during transport and on-site use.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'Generators & Power Equipment',
    description:
      'Commercial generators (20–60kW) covered against theft, vandalism, fire, and collision damage.',
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: 'Trailers & Transport',
    description:
      'Custom spray foam trailers covered against collision, overturn, and physical damage.',
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: 'Hand Tools & Small Equipment',
    description:
      'Transfer pumps, spray guns, heated hose accessories, and portable equipment under a blanket tools policy.',
  },
  {
    icon: <Package className="w-6 h-6" />,
    title: 'Rented & Leased Equipment',
    description:
      'Extend your inland marine coverage to protect rented equipment under your policy.',
  },
];

const rcvItems = [
  'No depreciation deducted',
  'Buy new equipment after a loss',
  'Best for rigs under 5 years old',
  'Higher annual premium — worth it',
];

const acvItems = [
  'Market value at time of loss',
  'May leave a gap for older equipment',
  'Lower annual premium',
  'Better for fully depreciated rigs',
];

const steps = [
  {
    num: '1',
    title: 'Inventory Your Equipment',
    body: 'List every piece with make, model, serial number, and current value.',
  },
  {
    num: '2',
    title: 'Choose Coverage Amounts',
    body: 'We recommend insuring at full replacement cost to avoid out-of-pocket gaps after a loss.',
  },
  {
    num: '3',
    title: 'Select Your Deductible',
    body: 'Higher deductibles lower your premium. $1,000–$2,500 is common for spray foam contractors.',
  },
  {
    num: '4',
    title: 'Bundle with Your Other Policies',
    body: "Inland marine pairs well with GL, workers’ comp, and commercial auto for a complete protection package.",
  },
];

const faqs = [
  {
    q: 'Is my equipment covered while in transit?',
    a: 'Yes — inland marine insurance covers your equipment on the road, at job sites, in storage, and at your shop. Unlike commercial property insurance limited to a fixed location, inland marine follows your equipment everywhere.',
  },
  {
    q: 'Does my commercial auto policy cover my rig?',
    a: 'Commercial auto covers the vehicle for collision and liability, but typically does NOT cover the equipment inside the trailer. You need a separate inland marine policy to cover the proportioner, hoses, and tools.',
  },
  {
    q: 'What if my equipment is stolen from a job site?',
    a: 'Theft is a covered peril under most inland marine policies. File a police report immediately and document serial numbers. Most theft claims are processed within 24–48 hours.',
  },
  {
    q: 'How much does inland marine insurance cost for a spray foam contractor?',
    a: 'Most spray foam contractors pay between $1,200 and $4,000 annually for a comprehensive inland marine policy, depending on total equipment value, deductible, and claims history.',
  },
];

export default function InlandMarinePage() {
  return (
    <>
      <PageHero
        title="Inland Marine Insurance"
        subtitle="Comprehensive coverage for your spray foam equipment wherever the job takes you — proportioners, hoses, generators, and trailers."
        badge="EQUIPMENT COVERAGE"
        ctaText="Get a Quote"
        ctaHref="/quote"
      />

      <StatBar
        stats={[
          { label: 'Average Rig Value', value: '$85K+' },
          { label: 'Claims Paid', value: '99%' },
          { label: 'Coverage Types', value: '6+' },
          { label: 'Coverage Starts', value: 'Day 1' },
        ]}
      />

      {/* What Inland Marine Covers */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-headline font-bold text-text mb-2">
          What Inland Marine Covers
        </h2>
        <p className="text-muted mb-10 max-w-2xl">
          Inland marine insurance travels with your equipment — on the road, at the job site, and
          in storage. Here&apos;s what&apos;s protected.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coverageItems.map((item) => (
            <GlassCard key={item.title} className="p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                {item.icon}
              </div>
              <h3 className="font-headline font-bold text-text mb-2">{item.title}</h3>
              <p className="text-muted text-sm">{item.description}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Replacement Cost vs. Actual Cash Value */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-headline font-bold text-text mb-2">
          Replacement Cost vs. Actual Cash Value
        </h2>
        <p className="text-muted mb-8 max-w-2xl">
          The valuation method you choose has a major impact on your payout after a loss.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlassCard className="border border-accent/30">
            <p className="label-text text-accent text-xs mb-2">RECOMMENDED</p>
            <h3 className="font-headline font-bold text-text text-xl mb-3">
              Replacement Cost (Recommended)
            </h3>
            <ul className="space-y-2">
              {rcvItems.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle className="text-accent w-4 h-4 shrink-0" />
                  <span className="text-muted text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard>
            <h3 className="font-headline font-bold text-text text-xl mb-3">
              Actual Cash Value
            </h3>
            <ul className="space-y-2">
              {acvItems.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle className="text-muted w-4 h-4 shrink-0" />
                  <span className="text-muted text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted text-xs mt-4 italic">
              We typically recommend Replacement Cost coverage for spray foam rigs due to the high
              cost of proportioners and heated hose systems.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* How to Insure Your Rig */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-headline font-bold text-text mb-8">
          How to Insure Your Rig
        </h2>
        {steps.map((step) => (
          <div key={step.num} className="flex items-start gap-4 mb-6">
            <span className="w-8 h-8 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-bold flex items-center justify-center shrink-0 font-label">
              {step.num}
            </span>
            <div>
              <h4 className="font-headline font-semibold text-text mb-1">{step.title}</h4>
              <p className="text-muted text-sm">{step.body}</p>
            </div>
          </div>
        ))}
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-headline font-bold text-text mb-8">
          Frequently Asked Questions
        </h2>
        <FAQSection items={faqs} />
      </section>

      {/* Link to rig detail page */}
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <GlassCard className="flex items-center justify-between gap-6">
          <div>
            <p className="label-text text-accent text-xs mb-1">SPECIALIZED COVERAGE</p>
            <h3 className="font-headline font-bold text-text">
              Spray Foam Rig &amp; Equipment Insurance
            </h3>
            <p className="text-muted text-sm">
              Detailed coverage guide for spray foam rigs and proportioners.
            </p>
          </div>
          <Link
            href="/inland-marine/spray_foam_rig_insurance"
            className="primary-btn inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-label font-semibold text-sm shrink-0"
          >
            View Details
            <ArrowRight className="w-4 h-4" />
          </Link>
        </GlassCard>
      </div>

      <CTABar />
    </>
  );
}
