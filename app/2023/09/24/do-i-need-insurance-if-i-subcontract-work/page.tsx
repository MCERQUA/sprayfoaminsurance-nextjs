import Link from 'next/link';
import { ArrowLeft, Calendar, User, ArrowRight } from 'lucide-react';
import CTABar from '@/components/CTABar';
import GlassCard from '@/components/GlassCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Do I Need Insurance If I Subcontract Work?',
  description: 'Understanding insurance responsibilities when subcontracting spray foam work. Coverage requirements for GCs and subcontractors explained.',
  keywords: ['spray foam insurance', 'subcontracting insurance', 'general contractor coverage', 'subcontractor liability'],
  openGraph: {
    title: 'Do I Need Insurance If I Subcontract Work?',
    description: 'Understanding insurance responsibilities when subcontracting spray foam work. Coverage requirements for GCs and subcontractors explained.',
    type: 'article',
  },
};

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Do I Need Insurance If I Subcontract Work?',
  description: 'Understanding insurance responsibilities when subcontracting spray foam work. Coverage requirements for GCs and subcontractors explained.',
  author: { '@type': 'Person', name: 'Josh Cotner' },
  publisher: { '@id': 'https://sprayfoaminsurance.com/#organization' },
  datePublished: '2023-09-24',
  dateModified: '2023-09-24',
  url: 'https://sprayfoaminsurance.com/2023/09/24/do-i-need-insurance-if-i-subcontract-work/',
};

const relatedPosts = [
  { href: '/2023/09/24/what-are-the-insurance-requirements-for-large-commercial-projects', title: 'Insurance Requirements for Large Commercial Projects', category: 'Commercial' },
  { href: '/2023/09/24/how-does-insurance-protect-my-clients', title: 'How Does Insurance Protect My Clients?', category: 'Business' },
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
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs label-text text-primary">Business</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold leading-tight mb-6">
            <span className="blue-gradient-text">Do I Need Insurance If I Subcontract Work?</span>
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
            <p className="text-muted leading-relaxed mb-5">Today, we're going to address a common question in the world of contracting: Do I need insurance if I subcontract work? Whether you're a general contractor considering subcontracting some aspects of your project or a subcontractor seeking clarity on your insurance responsibilities, it's crucial to understand the role of insurance in subcontracting relationships. Let's dive in:</p>

            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">The Role of Insurance in Subcontracting</h2>
            <p className="text-muted leading-relaxed mb-5">Subcontracting is a common practice in the construction industry, and it offers several benefits, such as specialization and cost-effectiveness. However, it also introduces certain risks and insurance considerations that all parties involved should be aware of.</p>
            <p className="text-muted leading-relaxed mb-5">General Contractor's Insurance: As a general contractor, when you subcontract work to other contractors or individuals, you remain responsible for the overall project. This means you need to maintain insurance coverage that not only protects your interests but also addresses potential risks associated with subcontracted work.</p>
            <p className="text-muted leading-relaxed mb-5">General Liability Insurance is essential for general contractors. It covers bodily injury, property damage, and personal injury claims that may arise during the project, regardless of whether the claim is related to the work you subcontracted.</p>
            <p className="text-muted leading-relaxed mb-5">Completed Operations Insurance covers claims that may arise after your subcontractors have completed their work. It's crucial because defects or issues with subcontracted work could surface later, and you want to ensure coverage for such situations.</p>
            <p className="text-muted leading-relaxed mb-5">Additional Insured Endorsement: Consider requiring your subcontractors to name you as an additional insured on their liability insurance policies. This provides you with an added layer of protection.</p>

            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">Subcontractor's Insurance</h2>
            <p className="text-muted leading-relaxed mb-5">If you're a subcontractor, it's essential to have your insurance in place. This not only protects your interests but also demonstrates professionalism and reliability to the general contractor and clients. Here are some insurance types subcontractors should consider:</p>
            <p className="text-muted leading-relaxed mb-5">General Liability Insurance: Similar to general contractors, subcontractors should carry this coverage to protect against claims related to their work, such as accidents, injuries, or property damage.</p>
            <p className="text-muted leading-relaxed mb-5">Workers' Compensation Insurance: If you have employees, workers' compensation insurance is often mandatory. It covers medical expenses and lost wages for employees injured on the job.</p>
            <p className="text-muted leading-relaxed mb-5">Contractor's Equipment Insurance: If you use specialized equipment or tools in your subcontracted work, this insurance can cover damage or loss of equipment.</p>
            <p className="text-muted leading-relaxed mb-5">Professional Liability Insurance: Subcontractors in specialized fields (e.g., engineers or architects) may need professional liability insurance to cover errors or omissions in their work.</p>

            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">Key Considerations</h2>
            <p className="text-muted leading-relaxed mb-5">Review Contracts Thoroughly: Before entering into any subcontracting agreement, carefully review the contract terms and insurance requirements. Ensure that you understand your insurance obligations and those of the other parties involved.</p>
            <p className="text-muted leading-relaxed mb-5">Consult an Insurance Professional: Insurance requirements can vary widely depending on the project, location, and industry. Consulting with an insurance expert can help you tailor your coverage to your specific needs.</p>
            <p className="text-muted leading-relaxed mb-5">Communication Is Key: Open and transparent communication between general contractors and subcontractors is crucial. Discuss insurance requirements, expectations, and any potential risks upfront to avoid surprises down the road.</p>
            <p className="text-muted leading-relaxed mb-5">In the world of subcontracting, insurance is not just a formality; it's a vital aspect of risk management. General contractors and subcontractors both need appropriate insurance coverage to protect their interests and ensure the smooth execution of construction projects. By understanding your insurance obligations and collaborating effectively with all parties involved, you can navigate the subcontracting landscape with confidence and peace of mind.</p>
          </div>
          <div className="mt-8">
            <Link href="/blog" className="inline-flex items-center gap-2 secondary-btn px-6 py-2.5 rounded-full text-sm font-semibold font-label">
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
