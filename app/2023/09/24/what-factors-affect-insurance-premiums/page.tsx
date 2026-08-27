import Link from 'next/link';
import { ArrowLeft, Calendar, User, ArrowRight } from 'lucide-react';
import CTABar from '@/components/CTABar';
import GlassCard from '@/components/GlassCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Factors Affect My Insurance Premiums?',
  description: 'Key factors that determine spray foam contractor insurance premiums: coverage type, claims history, revenue, employee count, and more.',
  keywords: ['spray foam insurance', 'insurance premiums', 'premium factors', 'contractor insurance cost'],
  openGraph: {
    title: 'What Factors Affect My Insurance Premiums?',
    description: 'Key factors that determine spray foam contractor insurance premiums: coverage type, claims history, revenue, employee count, and more.',
    type: 'article',
  },
};

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'What Factors Affect My Insurance Premiums?',
  description: 'Key factors that determine spray foam contractor insurance premiums: coverage type, claims history, revenue, employee count, and more.',
  author: { '@type': 'Person', name: 'Josh Cotner' },
  publisher: { '@id': 'https://sprayfoaminsurance.com/#organization' },
  datePublished: '2023-09-24',
  dateModified: '2023-09-24',
  url: 'https://sprayfoaminsurance.com/2023/09/24/what-factors-affect-insurance-premiums/',
};

const relatedPosts = [
  { href: '/2023/09/24/what-are-the-insurance-requirements-for-large-commercial-projects', title: 'Insurance Requirements for Large Commercial Projects', category: 'Commercial' },
  { href: '/2023/09/24/is-my-equipment-covered', title: 'Is My Spray Foam Equipment Covered?', category: 'Equipment' },
  { href: '/2025/07/04/spray-foam-equipment-financing-building-strong-banking-relationships', title: 'Equipment Financing Guide', category: 'Business' },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      {/* Hero */}
      <section className="relative overflow-hidden bg-background dot-grid pt-8 pb-16">
        <div className="ambient-orb w-96 h-96 bg-primary opacity-10 -top-20 -left-20" />
        <div className="ambient-orb w-80 h-80 bg-accent opacity-10 -bottom-10 right-0" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/blog/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs label-text text-primary">Pricing</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold leading-tight mb-6">
            <span className="blue-gradient-text">Insurance Premium Factors</span>
          </h1>
          <div className="flex items-center gap-6 text-sm text-muted">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> September 24, 2023</span>
            <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> Josh Cotner</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface/50 rounded-2xl p-8 lg:p-12 border border-primary/10">
            <p className="text-muted leading-relaxed mb-5">Two spray foam contractors with similar revenue can be quoted very differently. Premiums are not a flat rate on your sales — carriers price the specific risk your operation presents, and most of what drives that number is inside your control. Here is what an underwriter is actually looking at when they rate a spray foam account.</p>
            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">The coverages you carry, and the limits you pick</h2>
            <p className="text-muted leading-relaxed mb-5">Each line prices its own exposure. <Link href="/services/general-liability-insurance/" className="text-primary hover:text-accent underline">General liability</Link> responds to third-party bodily injury and property damage. <Link href="/services/workers-compensation-insurance-for-spray-foam-contractors/" className="text-primary hover:text-accent underline">Workers&apos; compensation</Link> is rated on payroll by class code. <Link href="/services/commercial-auto/" className="text-primary hover:text-accent underline">Commercial auto</Link> follows your vehicles and drivers. <Link href="/services/environmental-liability/" className="text-primary hover:text-accent underline">Environmental and pollution liability</Link> covers the overspray, fumes and off-gassing exposures a standard GL policy usually excludes. <Link href="/inland-marine/spray_foam_rig_insurance/" className="text-primary hover:text-accent underline">Inland marine</Link> covers the rig and equipment itself. Higher limits and lower deductibles cost more; the right question is not &quot;what is cheapest&quot; but which limits your contracts and your general contractors actually require.</p>
            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">Payroll, revenue and how the work splits</h2>
            <p className="text-muted leading-relaxed mb-5">GL and workers&apos; comp are rated on exposure basis — typically payroll and gross receipts. Underwriters also want the split: residential versus commercial, new construction versus retrofit, and how much of the work is at height or in confined attic and crawl space conditions. Two operations at the same revenue can rate differently purely on that mix.</p>
            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">Class codes</h2>
            <p className="text-muted leading-relaxed mb-5">The class code assigned to your crews drives the workers&apos; comp rate before any credit or debit is applied. Spray foam work can be miscoded onto a neighbouring insulation or roofing class, and a wrong code follows you from year to year. It is worth confirming what you are coded as — a correction here often moves the premium more than shopping the policy does.</p>
            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">Claims history and your experience mod</h2>
            <p className="text-muted leading-relaxed mb-5">Carriers pull loss runs, usually three to five years. Frequency matters more than a single large loss: several small claims signal a process problem, while one severe claim with documented corrective action often reads better. On workers&apos; comp, that history becomes your experience modification factor, which multiplies the manual premium directly.</p>
            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">Subcontractors</h2>
            <p className="text-muted leading-relaxed mb-5">If you use subs, expect questions about how many, what they do, and whether you collect certificates of insurance from them. Uninsured subcontractors typically get picked up on your policy at audit and charged as payroll — one of the most common reasons a renewal audit produces a bill nobody budgeted for. Collecting certificates is free; not collecting them is not.</p>
            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">How you spray, and what you spray</h2>
            <p className="text-muted leading-relaxed mb-5">Open cell versus closed cell, the chemical systems you run, ventilation and re-entry practice, whether crews are trained and documented, and how you handle occupied-building jobs all feed the pollution and GL side. This is the part of the file where documentation earns money: a contractor who can produce job records is a better risk than one who cannot.</p>
            <p className="text-muted leading-relaxed mb-5">If you do not already keep a per-job record, the <Link href="/spf-resources/work-record-form/" className="text-primary hover:text-accent underline">SPF work record form</Link> on this site captures the conditions, lot numbers and substrate details underwriters and claims adjusters ask for after the fact.</p>
            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">Your rig and equipment values</h2>
            <p className="text-muted leading-relaxed mb-5">Inland marine is rated on what is actually on the truck. Scheduling the proportioner, hoses, generator and the rig itself at accurate replacement values matters in both directions — undervaluing invites a coinsurance problem at claim time, and carrying stale values on equipment you no longer own means paying for coverage you cannot use.</p>
            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">Where you work</h2>
            <p className="text-muted leading-relaxed mb-5">Rates are filed by state, so the states your crews operate in change the number — as does operating in several states at once, which raises questions about licensing, comp coverage in each state, and travel exposure on the auto policy.</p>
            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">What actually moves the number</h2>
            <p className="text-muted leading-relaxed mb-5">In practice the biggest wins are unglamorous: correct class codes, clean and complete loss runs, certificates on file for every sub, documented safety and job records, and accurate equipment schedules. Those are underwriting facts you control. Presenting them well is most of the difference between a submission that gets a competitive quote and one that gets declined or loaded.</p>
            <p className="text-muted leading-relaxed mb-5">If you want a read on where your own operation sits, <Link href="/quote/" className="text-primary hover:text-accent underline">request a quote</Link> and we will tell you what a carrier is likely to focus on before you go to market.</p>
          </div>
          <div className="mt-8">
            <Link href="/blog/" className="inline-flex items-center gap-2 secondary-btn px-6 py-2.5 rounded-full text-sm font-semibold font-label">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-12 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-headline font-bold text-text mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <GlassCard key={post.href} className="flex flex-col p-6">
                <span className="text-xs label-text text-accent mb-3 block">{post.category}</span>
                <h3 className="font-headline font-bold text-text mb-4 flex-1">{post.title}</h3>
                <Link href={post.href} className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:text-accent transition-colors">
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <CTABar />
    </>
  );
}
