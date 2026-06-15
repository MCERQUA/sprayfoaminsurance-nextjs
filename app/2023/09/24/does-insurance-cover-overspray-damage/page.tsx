import Link from 'next/link';
import { ArrowLeft, Calendar, User, ArrowRight } from 'lucide-react';
import CTABar from '@/components/CTABar';
import GlassCard from '@/components/GlassCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Does Insurance Cover Overspray Damage?',
  description: 'How general liability and specialized spray foam insurance covers overspray damage to neighboring properties, vehicles, and surfaces.',
  keywords: ['spray foam insurance', 'overspray damage', 'general liability insurance', 'environmental liability'],
  openGraph: {
    title: 'Does Insurance Cover Overspray Damage?',
    description: 'How general liability and specialized spray foam insurance covers overspray damage to neighboring properties, vehicles, and surfaces.',
    type: 'article',
  },
};

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Does Insurance Cover Overspray Damage?',
  description: 'How general liability and specialized spray foam insurance covers overspray damage to neighboring properties, vehicles, and surfaces.',
  author: { '@type': 'Person', name: 'Josh Cotner' },
  publisher: { '@id': 'https://sprayfoaminsurance.com/#organization' },
  datePublished: '2023-09-24',
  dateModified: '2023-09-24',
  url: 'https://sprayfoaminsurance.com/2023/09/24/does-insurance-cover-overspray-damage/',
};

const relatedPosts = [
  { href: '/2023/09/24/can-i-get-coverage-for-mold-and-mildew-claims', title: 'Can I Get Coverage for Mold & Mildew Claims?', category: 'Coverage' },
  { href: '/2023/09/24/do-i-need-special-coverage-for-roofing-projects', title: 'Do I Need Special Coverage for Roofing Projects?', category: 'Coverage' },
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
            <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs label-text text-primary">Claims</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold leading-tight mb-6">
            <span className="blue-gradient-text">Does Insurance Cover Overspray Damage?</span>
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
            <p className="text-muted leading-relaxed mb-5">In the dynamic world of spray foam insulation, where precision meets innovation, overspray—unintentional dispersion of foam material—can sometimes become an unintended challenge. Overspray can affect neighboring properties, vehicles, and even architectural features of the project site. It's a concern that spray foam contractors take seriously, and one question frequently asked is whether insurance covers overspray damage.</p>

            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">Understanding Overspray Damage</h2>
            <p className="text-muted leading-relaxed mb-5">Overspray is an inherent risk in spray foam applications. Despite meticulous planning and skilled execution, unforeseen circumstances can lead to foam material drifting or adhering to unintended surfaces. This can result in paint damage, surface alterations, or even more substantial consequences, such as damage to vehicles or expensive construction materials.</p>

            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">Does Insurance Provide Coverage?</h2>
            <p className="text-muted leading-relaxed mb-5">The coverage for overspray damage largely depends on the specific insurance policies you have in place. Here are some key considerations:</p>
            <p className="text-muted leading-relaxed mb-5">General Liability Insurance: Typically, General Liability Insurance provides coverage for third-party property damage, including overspray damage. If overspray from your project affects a neighbor's property or a nearby vehicle, your General Liability Insurance may help cover the associated costs of repairs or replacement.</p>
            <p className="text-muted leading-relaxed mb-5">Environmental Liability Insurance: In cases where overspray damage could lead to environmental concerns, such as soil or water contamination, Environmental Liability Insurance may come into play. This specialized coverage can help address the environmental impact and cleanup costs.</p>
            <p className="text-muted leading-relaxed mb-5">Policy Terms and Exclusions: It's essential to review your insurance policies carefully, as some may have specific terms and conditions related to overspray damage. Additionally, certain exclusions may apply, so understanding the scope of coverage is crucial.</p>
            <p className="text-muted leading-relaxed mb-5">Contractual Obligations: If you are subcontracting or working as a subcontractor, the terms of your contract may specify insurance requirements and responsibilities for overspray damage. Ensure that your insurance aligns with these contractual obligations.</p>

            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">Preventing Overspray Damage</h2>
            <p className="text-muted leading-relaxed mb-5">While insurance can provide a safety net, prevention is always the first line of defense. Here are some proactive measures to minimize overspray:</p>
            <p className="text-muted leading-relaxed mb-5">Invest in proper containment and protective measures during spray foam applications. Conduct regular site inspections to identify potential overspray risks. Provide thorough training to your team members to ensure precise application techniques. Communicate with neighboring property owners or construction site supervisors to mitigate risks and coordinate efforts.</p>

            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">Consult with Your Insurance Provider</h2>
            <p className="text-muted leading-relaxed mb-5">To fully understand how your insurance coverage addresses overspray damage, it's advisable to consult with your insurance provider or agent. They can provide specific details about your policy, including any endorsements or additional coverage options that may be available.</p>
            <p className="text-muted leading-relaxed mb-5">In the complex world of spray foam insulation, overspray challenges are not uncommon. However, with the right insurance coverage and proactive risk management, you can protect your business and reputation while delivering quality spray foam solutions to your clients.</p>
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
