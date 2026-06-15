import Link from 'next/link';
import { ArrowLeft, Calendar, User, ArrowRight } from 'lucide-react';
import CTABar from '@/components/CTABar';
import GlassCard from '@/components/GlassCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insurance Requirements for Large Commercial Projects',
  description: 'Essential insurance requirements for spray foam contractors working on large commercial projects. GL, workers comp, professional liability and more.',
  keywords: ['spray foam insurance', 'commercial project insurance', 'contractor liability', 'workers compensation'],
  openGraph: {
    title: 'Insurance Requirements for Large Commercial Projects',
    description: 'Essential insurance requirements for spray foam contractors working on large commercial projects. GL, workers comp, professional liability and more.',
    type: 'article',
  },
};

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Insurance Requirements for Large Commercial Projects',
  description: 'Essential insurance requirements for spray foam contractors working on large commercial projects. GL, workers comp, professional liability and more.',
  author: { '@type': 'Person', name: 'Josh Cotner' },
  publisher: { '@id': 'https://sprayfoaminsurance.com/#organization' },
  datePublished: '2023-09-24',
  dateModified: '2023-09-24',
  url: 'https://sprayfoaminsurance.com/2023/09/24/what-are-the-insurance-requirements-for-large-commercial-projects/',
};

const relatedPosts = [
  { href: '/2023/09/24/do-i-need-insurance-if-i-subcontract-work', title: 'Do I Need Insurance If I Subcontract Work?', category: 'Business' },
  { href: '/2023/09/24/what-factors-affect-insurance-premiums', title: 'What Factors Affect My Insurance Premiums?', category: 'Pricing' },
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
            <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs label-text text-primary">Commercial</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold leading-tight mb-6">
            <span className="blue-gradient-text">Insurance Requirements for Large Commercial Projects</span>
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
            <p className="text-muted leading-relaxed mb-5">As a spray foam contractor, taking on large commercial projects can be both a significant opportunity and a complex undertaking. These projects often come with heightened responsibilities and specific requirements, including insurance. In this article, we'll explore the essential insurance requirements for spray foam contractors working on large commercial projects, helping you navigate this challenging but rewarding sector of the construction industry.</p>

            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">General Liability Insurance</h2>
            <p className="text-muted leading-relaxed mb-5">General liability insurance is typically the foundation of any contractor's insurance coverage. For large commercial projects, substantial liability coverage is crucial. This policy can protect you from third-party claims related to bodily injury, property damage, or personal injury that may occur during the course of your work. Commercial projects often have more stakeholders and higher potential risks, making robust general liability coverage essential.</p>

            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">Workers' Compensation Insurance</h2>
            <p className="text-muted leading-relaxed mb-5">Large commercial projects often involve a significant workforce. Workers' compensation insurance is typically mandatory in most states when you have employees. It provides coverage for medical expenses and lost wages in case a worker is injured on the job. Compliance with workers' compensation regulations is vital on large projects to ensure the well-being of your employees and legal compliance.</p>

            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">Commercial Auto Insurance</h2>
            <p className="text-muted leading-relaxed mb-5">If your business involves vehicles, such as trucks or vans used for transporting equipment and materials to the project site, commercial auto insurance is essential. It covers accidents, injuries, and property damage involving your company vehicles. For large commercial projects that may span a wide geographic area, this coverage is especially important.</p>

            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">Umbrella or Excess Liability Insurance</h2>
            <p className="text-muted leading-relaxed mb-5">For large commercial projects, it's wise to consider umbrella or excess liability insurance. This type of coverage provides an additional layer of protection beyond your primary liability policies. It's valuable when dealing with high-value projects and potential catastrophic events that could exhaust your primary policy limits.</p>

            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">Professional Liability Insurance</h2>
            <p className="text-muted leading-relaxed mb-5">Professional liability insurance, often referred to as errors and omissions (E&amp;O) insurance, may be required for certain commercial projects. It provides protection against claims of professional negligence, mistakes, or errors in your work. Large commercial clients may expect this coverage to ensure the quality and integrity of the project.</p>

            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">Contractor's Pollution Liability Insurance</h2>
            <p className="text-muted leading-relaxed mb-5">If your spray foam insulation work involves chemicals or materials that could be considered pollutants, contractor's pollution liability insurance is essential. It covers claims related to pollution events, such as chemical spills or contamination, which could be particularly relevant in large commercial projects.</p>

            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">Builder's Risk Insurance</h2>
            <p className="text-muted leading-relaxed mb-5">Builder's risk insurance can be necessary for large construction projects, including those involving substantial renovations or new builds. It protects the project itself, including the materials and equipment used during construction. As a spray foam contractor, your work may be covered under this policy if it's considered part of the overall project.</p>

            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">Contractual Obligations</h2>
            <p className="text-muted leading-relaxed mb-5">It's crucial to review your contract with the project owner or general contractor carefully. Commercial projects often have specific insurance requirements outlined in contracts, and you must ensure that your coverage aligns with these contractual obligations.</p>
            <p className="text-muted leading-relaxed mb-5">Taking on large commercial projects as a spray foam contractor can be a rewarding endeavor, but it also comes with significant responsibilities. Understanding and meeting the insurance requirements for these projects is a fundamental part of your success. By working closely with insurance professionals, reviewing contracts diligently, and maintaining appropriate coverage, you can navigate the complexities of large commercial projects with confidence and ensure that your work meets the highest standards of quality and safety.</p>
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
