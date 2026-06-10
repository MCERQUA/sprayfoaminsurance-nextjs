import Link from 'next/link';
import { ArrowLeft, Calendar, User, ArrowRight } from 'lucide-react';
import CTABar from '@/components/CTABar';
import GlassCard from '@/components/GlassCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Does Insurance Protect My Clients?',
  description: 'How spray foam contractor insurance protects construction clients through financial safeguards, liability protection, and quality assurance.',
  keywords: ['spray foam insurance', 'client protection', 'contractor liability', 'construction insurance'],
  openGraph: {
    title: 'How Does Insurance Protect My Clients?',
    description: 'How spray foam contractor insurance protects construction clients through financial safeguards, liability protection, and quality assurance.',
    type: 'article',
  },
};

const relatedPosts = [
  { href: '/2023/09/24/do-i-need-insurance-if-i-subcontract-work', title: 'Do I Need Insurance If I Subcontract Work?', category: 'Business' },
  { href: '/2023/09/24/what-are-the-insurance-requirements-for-large-commercial-projects', title: 'Insurance Requirements for Large Commercial Projects', category: 'Commercial' },
  { href: '/2025/07/04/spray-foam-equipment-financing-building-strong-banking-relationships', title: 'Equipment Financing Guide', category: 'Business' },
];

export default function Page() {
  return (
    <>
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
            <span className="blue-gradient-text">How Does Insurance Protect My Clients?</span>
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
            <p className="text-muted leading-relaxed mb-5">Welcome, everyone! I'm here to delve into an important topic today: how insurance safeguards the interests of clients in the construction industry. As someone deeply involved in the world of construction insurance, I've witnessed firsthand the vital role it plays in ensuring the well-being of clients. Let's explore the ways insurance serves as a crucial shield for construction clients:</p>

            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">Financial Safeguard</h2>
            <p className="text-muted leading-relaxed mb-5">Construction projects often involve substantial investments. Clients hire contractors with the expectation that their project will be completed on time and within budget. Unfortunately, unforeseen events such as accidents, material damage, or project delays can disrupt these plans. This is where insurance steps in. It serves as a financial safeguard, assuring clients that any unexpected costs resulting from project mishaps will be covered. This ensures that the clients' financial interests are protected.</p>

            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">Liability Coverage</h2>
            <p className="text-muted leading-relaxed mb-5">In the construction industry, liability is a significant concern. Clients need assurance that they won't be held responsible for accidents or injuries that occur on their property during a construction project. Insurance policies, such as general liability and workers' compensation, provide clients with this peace of mind. In the event of accidents, injuries, or property damage, the insurance covers the associated costs, sparing clients from potential legal disputes or financial liabilities.</p>

            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">Project Completion Guarantee</h2>
            <p className="text-muted leading-relaxed mb-5">Clients hire contractors to get their projects completed successfully. However, construction projects are subject to various risks, such as contractor bankruptcy, subcontractor failures, or unforeseen obstacles. Insurance policies, such as surety bonds, offer clients a guarantee that their project will be completed even if unexpected issues arise. This adds another layer of security for clients, assuring them that their investment will yield the desired results.</p>

            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">Quality Assurance</h2>
            <p className="text-muted leading-relaxed mb-5">Insurance requirements often serve as a filter for clients when selecting contractors. Contractors who maintain proper insurance demonstrate their commitment to professionalism and responsibility. This indirectly assures clients of the quality of work they can expect. Clients can have confidence that the contractors they hire are not only skilled but also financially prepared to handle any setbacks that may occur during the project.</p>

            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">Contractual Obligations</h2>
            <p className="text-muted leading-relaxed mb-5">Many construction contracts require contractors to carry specific insurance coverage as a condition of the agreement. Clients can leverage these contractual obligations to ensure that their interests are protected. By stipulating insurance requirements in the contract, clients can ensure that contractors are adequately insured, reducing the risk of disputes and complications down the road.</p>
            <p className="text-muted leading-relaxed mb-5">In the dynamic and often unpredictable world of construction, insurance stands as a formidable shield that safeguards the interests of clients. It provides financial security, shields against legal liabilities, guarantees project completion, and ensures the quality and professionalism of contractors. Clients who recognize the importance of insurance in construction projects can make more informed decisions, ultimately enjoying a smoother and worry-free construction experience.</p>
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
