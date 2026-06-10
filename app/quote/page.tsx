import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTABar from '@/components/CTABar';
import StatBar from '@/components/StatBar';
import GlassCard from '@/components/GlassCard';
import FormCard from '@/components/FormCard';
import { ClipboardList, Search, FileCheck, ArrowRight, Star, Zap, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Get a Spray Foam Insurance Quote | Fast, Free, Specialized',
  description:
    'Get your free spray foam insurance quote in minutes. General liability, workers comp, commercial auto, rig coverage. Specialists in SPF contractor insurance.',
  keywords: [
    'spray foam insurance quote',
    'SPF contractor insurance quote',
    'free spray foam insurance quote',
    'spray foam liability quote',
  ],
  openGraph: {
    title: 'Get a Spray Foam Insurance Quote',
    description: 'Free, fast spray foam contractor insurance quotes from specialists.',
    type: 'website',
  },
};

const stats = [
  { label: 'Average Response', value: '<24hr' },
  { label: 'Coverage Options', value: '8+' },
  { label: 'States Covered', value: '50' },
  { label: 'SPF Specialists', value: '100%' },
];

const checkboxCoverages = [
  {
    id: 'gl',
    name: 'General Liability',
    description: 'Required by most GCs and commercial clients',
  },
  {
    id: 'wc',
    name: 'Workers Compensation',
    description: 'Required if you have employees in most states',
  },
  {
    id: 'auto',
    name: 'Commercial Auto',
    description: 'For company vehicles used for business',
  },
  {
    id: 'inland',
    name: 'Inland Marine / Equipment',
    description: 'For your spray foam rig and tools',
  },
  {
    id: 'env',
    name: 'Environmental Liability',
    description: 'For pollution/chemical exposure coverage',
  },
  {
    id: 'surety',
    name: 'Surety Bond',
    description: 'May be required for state licensing',
  },
];

const whyCards = [
  {
    Icon: Star,
    title: 'Spray Foam Specialists',
    body: 'We only work with contractors in the spray foam and insulation industry. We know your risks better than any generalist agent.',
  },
  {
    Icon: Zap,
    title: 'Multiple Carrier Access',
    body: 'We compare rates from multiple A-rated insurance carriers to find you the best coverage at the best price.',
  },
  {
    Icon: FileCheck,
    title: 'Fast Turnaround',
    body: 'Most quotes delivered within 1 business day. Need coverage today? Call 844-967-5247.',
  },
  {
    Icon: Shield,
    title: 'No Obligation',
    body: 'Your quote is completely free. No pressure, no obligation — just expert advice and competitive options.',
  },
];

export default function QuotePage() {
  return (
    <>
      <PageHero
        title="Get Your Spray Foam Insurance Quote"
        subtitle="Tell us about your business and we'll match you with the best coverage options. Fast, free, specialized for spray foam contractors."
        badge="FREE QUOTE"
        ctaText="Start Quote"
        ctaHref="#quote-form"
      />

      <StatBar stats={stats} />

      {/* What Happens Next */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="font-headline font-bold text-text text-2xl md:text-3xl text-center mb-8">
          What Happens Next
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard className="p-6">
            <ClipboardList className="w-10 h-10 text-primary mb-3" />
            <p className="label-text text-accent text-xs mb-1">STEP 1</p>
            <h3 className="font-headline font-bold text-text mb-2">Submit Your Info</h3>
            <p className="text-muted text-sm">Fill out the form with your business details and coverage needs.</p>
          </GlassCard>

          <GlassCard className="p-6">
            <Search className="w-10 h-10 text-primary mb-3" />
            <p className="label-text text-accent text-xs mb-1">STEP 2</p>
            <h3 className="font-headline font-bold text-text mb-2">We Shop the Market</h3>
            <p className="text-muted text-sm">Our specialists compare rates from multiple A-rated carriers.</p>
          </GlassCard>

          <GlassCard className="p-6">
            <FileCheck className="w-10 h-10 text-primary mb-3" />
            <p className="label-text text-accent text-xs mb-1">STEP 3</p>
            <h3 className="font-headline font-bold text-text mb-2">Get Your Quote</h3>
            <p className="text-muted text-sm">Receive your customized quote within 1 business day, often same-day.</p>
          </GlassCard>
        </div>
      </section>

      {/* Quote Form */}
      <div id="quote-form" className="max-w-3xl mx-auto my-12 px-4">
        <FormCard title="Request Your Quote" subtitle="All required fields marked with *. Takes about 3 minutes.">
          {/* Section A — Business Information */}
          <h3 className="font-headline font-semibold text-text mb-4">Business Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4 md:col-span-2">
              <label className="block text-sm font-label font-semibold text-text mb-1.5">Company Name *</label>
              <input
                type="text"
                className="w-full bg-background border border-primary/20 rounded-lg px-4 py-2.5 text-text text-sm focus:outline-none focus:border-primary/50 placeholder:text-muted"
                placeholder="Your company name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-label font-semibold text-text mb-1.5">Primary State *</label>
              <input
                type="text"
                className="w-full bg-background border border-primary/20 rounded-lg px-4 py-2.5 text-text text-sm focus:outline-none focus:border-primary/50 placeholder:text-muted"
                placeholder="e.g. Texas"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-label font-semibold text-text mb-1.5">Years in Business *</label>
              <select className="w-full bg-background border border-primary/20 rounded-lg px-4 py-2.5 text-text text-sm focus:outline-none focus:border-primary/50">
                <option value="">Select...</option>
                <option value="lt1">Less than 1 year</option>
                <option value="1-3">1–3 years</option>
                <option value="3-5">3–5 years</option>
                <option value="5-10">5–10 years</option>
                <option value="10plus">10+ years</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-label font-semibold text-text mb-1.5">Number of Employees *</label>
              <select className="w-full bg-background border border-primary/20 rounded-lg px-4 py-2.5 text-text text-sm focus:outline-none focus:border-primary/50">
                <option value="">Select...</option>
                <option value="1">Just me</option>
                <option value="2-5">2–5</option>
                <option value="6-10">6–10</option>
                <option value="11-25">11–25</option>
                <option value="26plus">26+</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-label font-semibold text-text mb-1.5">Annual Revenue *</label>
              <select className="w-full bg-background border border-primary/20 rounded-lg px-4 py-2.5 text-text text-sm focus:outline-none focus:border-primary/50">
                <option value="">Select...</option>
                <option value="lt250k">Under $250K</option>
                <option value="250-500k">$250K–$500K</option>
                <option value="500k-1m">$500K–$1M</option>
                <option value="1-3m">$1M–$3M</option>
                <option value="3mplus">$3M+</option>
              </select>
            </div>
          </div>

          {/* Section B — Coverage Needed */}
          <div className="border-t border-primary/10 pt-6 mt-6">
            <h3 className="font-headline font-semibold text-text mb-4">Coverage Needed</h3>
            <p className="text-muted text-sm mb-4">Select all that apply:</p>
            <div className="space-y-3">
              {checkboxCoverages.map((cov) => (
                <div
                  key={cov.id}
                  className="flex items-start gap-3 p-3 rounded-lg border border-primary/10 hover:border-primary/30 cursor-pointer transition-colors"
                >
                  <input
                    type="checkbox"
                    id={cov.id}
                    className="mt-1 w-4 h-4 accent-primary shrink-0"
                  />
                  <div>
                    <p className="font-semibold text-text text-sm">{cov.name}</p>
                    <p className="text-muted text-xs">{cov.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section C — Contact Information */}
          <div className="border-t border-primary/10 pt-6 mt-6">
            <h3 className="font-headline font-semibold text-text mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-sm font-label font-semibold text-text mb-1.5">Full Name *</label>
                <input
                  type="text"
                  className="w-full bg-background border border-primary/20 rounded-lg px-4 py-2.5 text-text text-sm focus:outline-none focus:border-primary/50 placeholder:text-muted"
                  placeholder="Your full name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-label font-semibold text-text mb-1.5">Phone *</label>
                <input
                  type="tel"
                  className="w-full bg-background border border-primary/20 rounded-lg px-4 py-2.5 text-text text-sm focus:outline-none focus:border-primary/50 placeholder:text-muted"
                  placeholder="(555) 000-0000"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-label font-semibold text-text mb-1.5">Email *</label>
                <input
                  type="email"
                  className="w-full bg-background border border-primary/20 rounded-lg px-4 py-2.5 text-text text-sm focus:outline-none focus:border-primary/50 placeholder:text-muted"
                  placeholder="you@company.com"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-label font-semibold text-text mb-1.5">Best Time to Call</label>
                <select className="w-full bg-background border border-primary/20 rounded-lg px-4 py-2.5 text-text text-sm focus:outline-none focus:border-primary/50">
                  <option value="">Select...</option>
                  <option value="morning">Morning 8–11am</option>
                  <option value="midday">Midday 11am–2pm</option>
                  <option value="afternoon">Afternoon 2–5pm</option>
                  <option value="anytime">Anytime</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section D — Additional Information */}
          <div className="border-t border-primary/10 pt-6 mt-6">
            <h3 className="font-headline font-semibold text-text mb-4">Additional Information</h3>

            <div className="mb-4">
              <label className="block text-sm font-label font-semibold text-text mb-1.5">
                Prior Claims in Last 3 Years?
              </label>
              <div className="flex gap-6 mt-2">
                <label className="flex items-center gap-2 text-muted text-sm cursor-pointer">
                  <input type="radio" name="prior_claims" value="yes" className="accent-primary" />
                  Yes
                </label>
                <label className="flex items-center gap-2 text-muted text-sm cursor-pointer">
                  <input type="radio" name="prior_claims" value="no" className="accent-primary" />
                  No
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-label font-semibold text-text mb-1.5">Currently Insured?</label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 text-muted text-sm cursor-pointer">
                  <input type="radio" name="currently_insured" value="yes" className="accent-primary" />
                  Yes
                </label>
                <label className="flex items-center gap-2 text-muted text-sm cursor-pointer">
                  <input type="radio" name="currently_insured" value="no" className="accent-primary" />
                  No
                </label>
                <label className="flex items-center gap-2 text-muted text-sm cursor-pointer">
                  <input type="radio" name="currently_insured" value="first" className="accent-primary" />
                  First Time
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-label font-semibold text-text mb-1.5">Notes</label>
              <textarea
                rows={3}
                className="w-full bg-background border border-primary/20 rounded-lg px-4 py-2.5 text-text text-sm focus:outline-none focus:border-primary/50 placeholder:text-muted"
                placeholder="Any additional information about your coverage needs..."
              />
            </div>
          </div>

          <p className="text-xs text-muted mt-4">
            Your information is kept confidential and used only to prepare your quote. We never sell your data.
          </p>
          <button
            type="submit"
            className="amber-cta w-full py-4 rounded-full font-label font-bold text-lg flex items-center justify-center gap-2 mt-2"
          >
            Get My Free Quote
            <ArrowRight className="w-5 h-5" />
          </button>
        </FormCard>
      </div>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="font-headline font-bold text-text text-2xl md:text-3xl text-center mb-8">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyCards.map(({ Icon, title, body }) => (
            <GlassCard key={title} className="p-6">
              <Icon className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-headline font-bold text-text mb-2">{title}</h3>
              <p className="text-muted text-sm">{body}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <CTABar />
    </>
  );
}
