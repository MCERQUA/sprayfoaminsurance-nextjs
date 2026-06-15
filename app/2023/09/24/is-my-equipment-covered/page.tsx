import Link from 'next/link';
import { ArrowLeft, Calendar, User, ArrowRight } from 'lucide-react';
import CTABar from '@/components/CTABar';
import GlassCard from '@/components/GlassCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Is My Spray Foam Equipment Covered?',
  description: 'Understanding insurance coverage for spray foam equipment including general liability, inland marine, and commercial property policies.',
  keywords: ['spray foam equipment insurance', 'inland marine insurance', 'equipment breakdown insurance', 'contractor equipment coverage'],
  openGraph: {
    title: 'Is My Spray Foam Equipment Covered?',
    description: 'Understanding insurance coverage for spray foam equipment including general liability, inland marine, and commercial property policies.',
    type: 'article',
  },
};

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Is My Spray Foam Equipment Covered?',
  description: 'Understanding insurance coverage for spray foam equipment including general liability, inland marine, and commercial property policies.',
  author: { '@type': 'Person', name: 'Josh Cotner' },
  publisher: { '@id': 'https://sprayfoaminsurance.com/#organization' },
  datePublished: '2023-09-24',
  dateModified: '2023-09-24',
  url: 'https://sprayfoaminsurance.com/2023/09/24/is-my-equipment-covered/',
};

const relatedPosts = [
  { href: '/2023/09/24/what-factors-affect-insurance-premiums', title: 'What Factors Affect My Insurance Premiums?', category: 'Pricing' },
  { href: '/2023/09/24/is-retrofitting-insurance-available-for-spray-foam-contractors', title: 'Is Retrofitting Insurance Available for Spray Foam Contractors?', category: 'Coverage' },
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
            <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs label-text text-primary">Equipment</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold leading-tight mb-6">
            <span className="blue-gradient-text">Is My Spray Foam Equipment Covered?</span>
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
            <p className="text-muted leading-relaxed mb-5">If you're a spray foam insulation contractor, you're well aware of the importance of your equipment. Your machines, tools, and materials are the lifeblood of your business, allowing you to provide efficient and effective insulation services. But have you ever wondered, "Is my equipment covered?" In this article, we'll explore the ins and outs of insurance for spray foam insulation contractors, focusing on how you can protect your valuable equipment.</p>

            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">General Liability Insurance</h2>
            <p className="text-muted leading-relaxed mb-5">General liability insurance is a fundamental coverage for contractors. While it primarily covers bodily injury and property damage claims, it can indirectly offer some protection for your equipment. For instance, if your equipment were to malfunction and cause damage to a client's property, the liability coverage may come into play.</p>

            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">Inland Marine Insurance</h2>
            <p className="text-muted leading-relaxed mb-5">Inland marine insurance is a specialized policy designed to cover movable property and equipment. It's often used to protect high-value tools and equipment that are frequently transported to job sites. For spray foam insulation contractors, this coverage can be a lifesaver. It can protect your equipment not only at your business location but also while in transit to various job sites.</p>

            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">Builder's Risk Insurance</h2>
            <p className="text-muted leading-relaxed mb-5">If you're working on a new construction project that involves insulation installation, builder's risk insurance can be essential. It covers property and materials on the construction site, including your equipment. If your equipment is damaged or stolen while on the job, this policy can help replace or repair it.</p>

            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">Equipment Breakdown Insurance</h2>
            <p className="text-muted leading-relaxed mb-5">Spray foam insulation equipment can be sophisticated and prone to breakdowns. Equipment breakdown insurance is tailored to cover the cost of repairs or replacement for your machinery and tools in the event of sudden mechanical or electrical failures.</p>

            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">Commercial Property Insurance</h2>
            <p className="text-muted leading-relaxed mb-5">If you have a physical location where you store your equipment when not in use, commercial property insurance can be vital. This coverage protects your building and its contents, including equipment, from perils like fire, theft, vandalism, or natural disasters.</p>

            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">Business Owner's Policy (BOP)</h2>
            <p className="text-muted leading-relaxed mb-5">A BOP is a package policy that combines general liability insurance and commercial property insurance. It can provide a cost-effective way to protect both your liability and your equipment under a single policy.</p>

            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">Equipment Endorsements</h2>
            <p className="text-muted leading-relaxed mb-5">Some insurance policies allow you to add equipment endorsements or riders to your coverage. These endorsements can tailor your policy to include specific equipment and tools, ensuring that they are adequately protected.</p>

            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">Key Considerations</h2>
            <p className="text-muted leading-relaxed mb-5">Assess Your Equipment Value: Before purchasing insurance, take an inventory of your equipment and estimate its value. This will help you determine the appropriate coverage limits.</p>
            <p className="text-muted leading-relaxed mb-5">Review Policy Exclusions: Understand what is covered and what is excluded in your insurance policies. Some policies may exclude coverage for certain types of equipment or specific causes of loss.</p>
            <p className="text-muted leading-relaxed mb-5">Regular Maintenance: Properly maintain your equipment to minimize the risk of breakdowns and ensure that your insurance claims are valid.</p>
            <p className="text-muted leading-relaxed mb-5">Work with an Insurance Professional: Consulting with an insurance agent or broker who specializes in construction and contractor insurance can help you tailor your coverage to your specific needs.</p>
            <p className="text-muted leading-relaxed mb-5">As a spray foam insulation contractor, your equipment is a significant investment, and its protection should be a top priority. By understanding the types of insurance available and how they can safeguard your equipment, you can ensure that your business remains resilient in the face of unexpected challenges. Don't wait until it's too late – explore your insurance options today to secure the future of your spray foam insulation contracting business.</p>
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
