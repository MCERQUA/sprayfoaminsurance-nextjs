import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTABar from '@/components/CTABar';
import StatBar from '@/components/StatBar';
import FAQSection from '@/components/FAQSection';
import GlassCard from '@/components/GlassCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Spray Foam Rig & Equipment Insurance | Service Coverage',
  description:
    'Complete rig and equipment insurance for spray foam contractors. Proportioners, trailers, generators, hoses. Replacement cost coverage. Get your quote today.',
  keywords: [
    'spray foam rig insurance',
    'spray foam equipment insurance',
    'proportioner insurance',
    'SPF contractor equipment coverage',
  ],
  openGraph: {
    title: 'Spray Foam Rig & Equipment Insurance',
    description: 'Purpose-built rig and equipment insurance for spray foam contractors.',
    type: 'website',
  },
};

const stats = [
  { label: 'Rig Types Covered', value: 'All' },
  { label: 'Coverage Limit', value: '$500K+' },
  { label: 'Claims Processed', value: '24hr' },
  { label: 'Deductible', value: 'Flexible' },
];

const rigTypes = [
  {
    title: 'Entry-Level Rigs — $40K–$60K',
    body: 'Basic setups with entry-level proportioners, standard trailers, and generators. Perfect coverage for new contractors.',
  },
  {
    title: 'Mid-Range Commercial — $60K–$100K',
    body: 'Hydraulic proportioners, custom trailers, and dual generators for established commercial contractors.',
  },
  {
    title: 'Premium Commercial — $100K+',
    body: 'High-output systems for large commercial applications with fully climate-controlled trailers.',
  },
  {
    title: 'Custom Built Trailers',
    body: 'Specialty trailers built specifically for spray foam — covered at appraised or replacement value.',
  },
  {
    title: 'Mobile Operations',
    body: 'Multi-rig fleets and operations spanning multiple states — single policy, all rigs covered.',
  },
  {
    title: 'New Purchases',
    body: 'Just bought a new rig? Coverage can start the day you take ownership. No waiting period.',
  },
];

const replacementBullets = [
  'No depreciation deducted',
  'Replace with brand new equipment',
  'Best for rigs under 7 years old',
  'Higher annual premium',
];

const acvBullets = [
  'Market value at time of loss',
  'May leave a coverage gap',
  'Lower annual premium',
  'Better for fully depreciated rigs',
];

const faqs = [
  {
    q: 'Does my policy follow my rig to different states?',
    a: 'Yes — inland marine/rig insurance follows your equipment anywhere in the continental US. If you work in multiple states, your coverage travels with you.',
  },
  {
    q: 'What if my rig is stolen overnight on a job site?',
    a: 'Theft is a covered peril. File a police report immediately, document serial numbers and photos, and contact us. Most theft claims are processed within 24–48 hours.',
  },
  {
    q: 'Is my rig covered while being transported on a trailer?',
    a: 'Yes — inland marine insurance covers your equipment during transit, including while loaded on a trailer being towed.',
  },
  {
    q: 'Can I insure a used rig I just purchased?',
    a: 'Absolutely. Used rigs are insured at current market value or agreed value. We recommend a professional appraisal for rigs over $50K.',
  },
  {
    q: 'How does a claim affect my premium?',
    a: 'Filing a claim can affect your renewal premium, typically by 5–20% for a single claim. Contractors with 3+ years of claim-free history often qualify for experience credits.',
  },
];

export default function RigEquipmentPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 pt-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Rig & Equipment Insurance' },
          ]}
        />
      </div>

      <PageHero
        title="Rig & Equipment Insurance"
        subtitle="Your spray foam rig is your business. Protect proportioners, trailers, generators, and hose systems with purpose-built equipment coverage."
        badge="EQUIPMENT PROTECTION"
        ctaText="Get a Quote"
        ctaHref="/quote"
      />

      <StatBar stats={stats} />

      {/* What Rigs Are Covered */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="font-headline font-bold text-text text-2xl md:text-3xl text-center mb-8">
          What Rigs Are Covered
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rigTypes.map(({ title, body }) => (
            <GlassCard key={title} className="p-6">
              <h3 className="font-headline font-bold text-text mb-2">{title}</h3>
              <p className="text-muted text-sm">{body}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Replacement Cost vs ACV */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="font-headline font-bold text-text text-2xl md:text-3xl text-center mb-8">
          Replacement Cost vs. Actual Cash Value
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlassCard className="p-6 border border-accent/30">
            <p className="label-text text-accent text-xs mb-2">RECOMMENDED</p>
            <h3 className="font-headline font-bold text-text text-lg mb-4">Replacement Cost</h3>
            <ul className="space-y-2">
              {replacementBullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted text-sm">{b}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard className="p-6">
            <h3 className="font-headline font-bold text-text text-lg mb-4">Actual Cash Value</h3>
            <ul className="space-y-2">
              {acvBullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-muted shrink-0 mt-0.5" />
                  <span className="text-muted text-sm">{b}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </section>

      {/* Floater Policies */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <GlassCard className="p-6">
          <h3 className="font-headline font-bold text-text text-xl mb-3">
            Floater Policies for Multi-Rig Operations
          </h3>
          <p className="text-muted mb-4">
            If you operate multiple spray foam rigs across different job sites or states, a scheduled floater policy
            lists each rig individually with its value. This ensures full replacement cost on each unit without
            coverage gaps.
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-semibold text-sm"
          >
            Ask about multi-rig fleet discounts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </GlassCard>
      </section>

      {/* FAQ */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="font-headline font-bold text-text text-2xl md:text-3xl text-center mb-8">
          Rig &amp; Equipment Insurance FAQs
        </h2>
        <FAQSection items={faqs} />
      </div>

      <CTABar />
    </>
  );
}
