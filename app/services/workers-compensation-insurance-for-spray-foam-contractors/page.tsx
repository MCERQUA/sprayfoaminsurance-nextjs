import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import FAQSection from '@/components/FAQSection';
import CTABar from '@/components/CTABar';
import GlassCard from '@/components/GlassCard';
import StatBar from '@/components/StatBar';
import { CheckCircle, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: "Workers' Compensation Insurance for Spray Foam Contractors",
  description:
    "Workers' comp insurance built for the unique risks of spray foam work — chemical exposure, falls, burns, and occupational illness. Get a free quote today.",
};

const faqs = [
  {
    q: 'Is workers’ comp required for spray foam contractors?',
    a: "In almost every state, yes. Workers' comp is mandatory as soon as you have one employee. The specific requirements — including whether owners must cover themselves — vary by state. Operating without it can result in fines, stop-work orders, and personal liability for injured workers' medical bills.",
  },
  {
    q: 'How are workers’ comp rates calculated for spray foam contractors?',
    a: "Rates are based on your payroll (per $100 of payroll), the classification codes assigned to your workers (SPF work typically carries higher rates than general construction), your experience modification rate (EMR), and the state you operate in. A lower EMR means lower premiums — and we can help you achieve that with safety programs.",
  },
  {
    q: 'What is an experience modification rate (EMR)?',
    a: 'Your EMR is a factor that adjusts your workers’ comp premium based on your actual claims history compared to businesses of similar size and industry. An EMR of 1.0 is average. Below 1.0 means lower premiums; above 1.0 means higher premiums. Maintaining good safety practices directly saves you money.',
  },
  {
    q: 'Do I need workers’ comp if I only use subcontractors?',
    a: "Possibly. If your subcontractors don't have their own workers' comp coverage, many states will hold you responsible as the employer of record. We recommend verifying certificates of insurance from all subs and consulting us about your exposure.",
  },
  {
    q: 'What happens if I have a claim?',
    a: "Report the injury immediately, provide appropriate medical care, and notify us or your insurer right away. Timely reporting leads to better outcomes — injured workers who get prompt care return to work faster. We'll guide you through the claims process from start to finish.",
  },
];

export default function WorkersCompPage() {
  return (
    <>
      <PageHero
        title="Workers’ Compensation Insurance for Spray Foam Contractors"
        subtitle="Protecting your most valuable asset — your crew. Coverage for injuries, chemical exposure, and occupational illness from SPF operations."
        ctaText="Get a Quote"
        ctaHref="/quote"
        badge="Workers’ Comp"
      />

      <StatBar
        stats={[
          { value: '#1', label: 'Cause of Occupational Asthma' },
          { value: '40%', label: 'Higher Injury Rate vs Avg' },
          { value: '$50K+', label: 'Avg Claim Cost' },
          { value: '50', label: 'States We Cover' },
        ]}
      />

      <section className="bg-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="label-text">HIGH-RISK INDUSTRY</span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-text mt-3 mb-4">
              Why Spray Foam Work Carries Elevated Risk
            </h2>
            <p className="text-muted max-w-2xl mx-auto font-label">
              Spray foam contracting combines chemical hazards, physical demands, and high-risk environments that place SPF workers among the most exposed in the construction industry. Standard workers&apos; comp programs often misclassify this work — costing contractors coverage and money.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <GlassCard>
              <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5 text-highlight" />
              </div>
              <h3 className="font-headline font-bold text-base text-text mb-2">Chemical Exposure</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                Isocyanates are a leading cause of occupational asthma and sensitization. Once sensitized, a worker may never be able to work around isocyanates again — ending careers.
              </p>
            </GlassCard>
            <GlassCard>
              <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5 text-highlight" />
              </div>
              <h3 className="font-headline font-bold text-base text-text mb-2">Working at Heights</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                Crawlspaces, attics, rooftops, and elevated platforms create fall risk. Falls are the leading cause of construction fatalities.
              </p>
            </GlassCard>
            <GlassCard>
              <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5 text-highlight" />
              </div>
              <h3 className="font-headline font-bold text-base text-text mb-2">Heat &amp; Equipment</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                Proportioners, heated hoses, and hot foam create burn risks. Machinery malfunctions can cause serious injuries.
              </p>
            </GlassCard>
            <GlassCard>
              <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5 text-highlight" />
              </div>
              <h3 className="font-headline font-bold text-base text-text mb-2">Repetitive Stress</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                Carrying heavy equipment, working in confined spaces, and repetitive motion create musculoskeletal injury risks over time.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="bg-surface border-y border-primary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-text">
              What Workers&apos; Compensation Insurance Covers
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <GlassCard>
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <CheckCircle className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-headline font-bold text-base text-text mb-2">Medical Expenses</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                All reasonable medical costs for work-related injuries or illnesses, including emergency care, surgery, hospitalization, and follow-up treatment.
              </p>
            </GlassCard>
            <GlassCard>
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <CheckCircle className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-headline font-bold text-base text-text mb-2">Lost Wages</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                Replaces a portion of income (typically 66–75%) when an employee can&apos;t work due to a covered injury or illness.
              </p>
            </GlassCard>
            <GlassCard>
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <CheckCircle className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-headline font-bold text-base text-text mb-2">Rehabilitation Costs</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                Physical therapy, occupational therapy, and vocational rehabilitation to help injured workers return to the job.
              </p>
            </GlassCard>
            <GlassCard>
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <CheckCircle className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-headline font-bold text-base text-text mb-2">Permanent Disability</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                Compensation for workers who suffer permanent impairment from a work-related injury or illness.
              </p>
            </GlassCard>
            <GlassCard>
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <CheckCircle className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-headline font-bold text-base text-text mb-2">Death Benefits</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                Pays benefits to dependents of workers killed in work-related accidents or from occupational diseases.
              </p>
            </GlassCard>
            <GlassCard>
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <CheckCircle className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-headline font-bold text-base text-text mb-2">Employer Liability</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                Protects your business from lawsuits filed by injured employees, including claims that go beyond standard comp benefits.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="bg-background py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassCard>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <CheckCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-headline font-bold text-text mb-2">State Requirements</h3>
                <p className="text-muted font-label text-sm leading-relaxed">
                  Workers&apos; comp is required by law in virtually all states as soon as you have one or more employees. Even sole proprietors are encouraged to carry it — you can be injured too. Requirements vary by state for owner coverage. Operating without mandatory coverage exposes you to fines, stop-work orders, and direct liability for injured workers&apos; medical expenses and lost wages.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="bg-surface py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-headline text-3xl font-bold text-text">How to Get Workers&apos; Comp Coverage</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center mb-4">
                <span className="font-headline font-bold text-primary text-lg">1</span>
              </div>
              <h3 className="font-headline font-bold text-text mb-2">Tell Us About Your Team</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                Number of employees, job classifications, and estimated annual payroll.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center mb-4">
                <span className="font-headline font-bold text-accent text-lg">2</span>
              </div>
              <h3 className="font-headline font-bold text-text mb-2">We Shop the Market</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                We compare workers&apos; comp rates across multiple carriers that specialize in construction and SPF work.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center mb-4">
                <span className="font-headline font-bold text-primary text-lg">3</span>
              </div>
              <h3 className="font-headline font-bold text-text mb-2">Get Covered &amp; Stay Compliant</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                Policies come with audit support and access to our safety resources to keep your mod rate low.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-headline text-3xl font-bold text-text text-center mb-10">
            Workers&apos; Comp FAQ
          </h2>
          <FAQSection items={faqs} />
        </div>
      </section>

      <CTABar />
    </>
  );
}
