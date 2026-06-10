import Link from 'next/link';
import { ArrowLeft, Calendar, User, ArrowRight } from 'lucide-react';
import CTABar from '@/components/CTABar';
import GlassCard from '@/components/GlassCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Do I Need Special Coverage for Roofing Projects?',
  description: 'Insurance considerations for spray foam contractors working alongside roofing companies. Special coverage for combined operations and elevated risks.',
  keywords: ['spray foam insurance', 'roofing project coverage', 'contractor equipment insurance', 'inland marine insurance'],
  openGraph: {
    title: 'Do I Need Special Coverage for Roofing Projects?',
    description: 'Insurance considerations for spray foam contractors working alongside roofing companies. Special coverage for combined operations and elevated risks.',
    type: 'article',
  },
};

const relatedPosts = [
  { href: '/2023/09/24/does-insurance-cover-overspray-damage', title: 'Does Insurance Cover Overspray Damage?', category: 'Claims' },
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
            <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs label-text text-primary">Coverage</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold leading-tight mb-6">
            <span className="blue-gradient-text">Do I Need Special Coverage for Roofing Projects?</span>
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
            <p className="text-muted leading-relaxed mb-5">Spray foam insulation contractors often find themselves working in collaboration with roofing companies on spray foam insulation solutions. These collaborative efforts are essential for ensuring a well-insulated, energy-efficient building. But as a spray foam insulation contractor, you might wonder: "Do I need special coverage for roofing projects?" In this article, we'll explore the unique insurance considerations that come into play when working alongside roofers and how you can protect your interests.</p>

            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">Understanding the Roofing Collaboration</h2>
            <p className="text-muted leading-relaxed mb-5">Collaborating with roofing companies is a common practice for spray foam insulation contractors, particularly in projects that involve flat roofs or roof renovations. Your role often comes into play when the roof has been demoed and opened up to provide access for insulation installation before the new roofing materials are applied. This partnership is vital for delivering effective insulation solutions, but it also introduces specific risks and insurance considerations.</p>

            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">Why Special Coverage May Be Necessary</h2>
            <p className="text-muted leading-relaxed mb-5">Specialized Equipment and Skills: Installing spray foam insulation requires specialized, expensive equipment and skilled applicators/operators. Unlike traditional insulation materials like fiberglass batts, spray foam application demands expertise. This means that your work carries its unique set of risks and requirements.</p>
            <p className="text-muted leading-relaxed mb-5">Potential for Property Damage: The process of installing spray foam insulation involves the use of chemicals and equipment that, if not handled correctly, can lead to property damage. For instance, overspray or improper application can result in damage to the roofing structure or other building components.</p>
            <p className="text-muted leading-relaxed mb-5">Liability Concerns: Collaborating with roofers means that you may be working on structures where the risk of accidents is higher due to the nature of roofing projects. Liability concerns come into play, and it's crucial to have adequate coverage in case of accidents, injuries, or property damage.</p>

            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">Insurance Coverage to Consider</h2>
            <p className="text-muted leading-relaxed mb-5">When working on roofing projects as a spray foam insulation contractor, it's important to consider the following types of insurance coverage:</p>
            <p className="text-muted leading-relaxed mb-5">General Liability Insurance: General liability insurance is a foundational coverage that protects against bodily injury, property damage, and personal injury claims. It's essential for addressing potential liability claims that may arise while working on roofing projects.</p>
            <p className="text-muted leading-relaxed mb-5">Contractor's Equipment Insurance: This coverage protects your specialized equipment, such as spray foam machines and tools, against damage or theft. Given the high cost of this equipment, it's crucial to ensure it is adequately insured.</p>
            <p className="text-muted leading-relaxed mb-5">Professional Liability Insurance: If a mistake in insulation application results in performance issues or damage to the building, professional liability insurance can provide coverage. It's often referred to as errors and omissions (E&amp;O) insurance.</p>
            <p className="text-muted leading-relaxed mb-5">Workers' Compensation Insurance: If you have employees, workers' compensation insurance is typically mandatory. It covers medical expenses and lost wages for employees injured on the job.</p>
            <p className="text-muted leading-relaxed mb-5">Inland Marine Insurance: This coverage can protect your equipment while in transit to job sites, particularly when you're collaborating with roofing companies at different locations.</p>

            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">Key Considerations</h2>
            <p className="text-muted leading-relaxed mb-5">Contractual Agreements: Review any contracts or agreements with roofing companies to ensure that insurance requirements are clear and met.</p>
            <p className="text-muted leading-relaxed mb-5">Documentation: Keep thorough records of your work, including the insulation application process, to assist in case of claims or disputes.</p>
            <p className="text-muted leading-relaxed mb-5">Consult an Insurance Professional: Work with an insurance expert who understands the construction industry and can help tailor your coverage to the specific risks associated with spray foam insulation projects in roofing.</p>
            <p className="text-muted leading-relaxed mb-5">Collaborating with roofing companies as a spray foam insulation contractor can be a rewarding endeavor, but it also comes with its own set of insurance considerations. By assessing your unique needs, maintaining appropriate coverage, and working closely with roofing partners and insurance experts, you can ensure that you're adequately protected while delivering high-quality insulation solutions in the roofing industry.</p>
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
