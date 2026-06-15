import Link from 'next/link';
import { ArrowLeft, Calendar, User, ArrowRight } from 'lucide-react';
import CTABar from '@/components/CTABar';
import GlassCard from '@/components/GlassCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Can I Get Coverage for Mold & Mildew Claims?',
  description: 'Learn about insurance coverage for mold and mildew claims as a spray foam insulation contractor. Builder\'s risk, inland marine, pollution liability options explained.',
  keywords: ['spray foam insurance', 'mold and mildew claims', 'pollution liability', 'builder\'s risk insurance'],
  openGraph: {
    title: 'Can I Get Coverage for Mold & Mildew Claims?',
    description: 'Learn about insurance coverage for mold and mildew claims as a spray foam insulation contractor. Builder\'s risk, inland marine, pollution liability options explained.',
    type: 'article',
  },
};

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Can I Get Coverage for Mold & Mildew Claims?',
  description: "Learn about insurance coverage for mold and mildew claims as a spray foam insulation contractor. Builder's risk, inland marine, pollution liability options explained.",
  author: { '@type': 'Person', name: 'Josh Cotner' },
  publisher: { '@id': 'https://sprayfoaminsurance.com/#organization' },
  datePublished: '2023-09-24',
  dateModified: '2023-09-24',
  url: 'https://sprayfoaminsurance.com/2023/09/24/can-i-get-coverage-for-mold-and-mildew-claims/',
};

const relatedPosts = [
  { href: '/2023/09/24/does-insurance-cover-overspray-damage', title: 'Does Insurance Cover Overspray Damage?', category: 'Claims' },
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
            <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs label-text text-primary">Coverage</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold leading-tight mb-6">
            <span className="blue-gradient-text">Can I Get Coverage for Mold &amp; Mildew Claims?</span>
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
            <p className="text-muted leading-relaxed mb-5">Mold and mildew are persistent issues that can plague buildings, causing health concerns and property damage. For spray foam insulation contractors, who work closely with building materials and insulation, the risk of mold and mildew development is a significant concern. In this article, we'll explore the importance of coverage for mold and mildew claims and how it directly impacts spray foam insulation contractors.</p>

            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">Understanding the Mold and Mildew Challenge</h2>
            <p className="text-muted leading-relaxed mb-5">Mold and mildew are fungi that thrive in damp, humid conditions. They can grow on a variety of surfaces, including wood, drywall, and insulation materials. For spray foam insulation contractors, the following factors make mold and mildew prevention and insurance coverage essential:</p>
            <p className="text-muted leading-relaxed mb-5">Moisture Control: Spray foam insulation is known for its air-sealing properties, which help prevent moisture intrusion. However, if not installed correctly or if other moisture issues exist in a building, moisture can become trapped, creating an environment conducive to mold growth.</p>
            <p className="text-muted leading-relaxed mb-5">Health Concerns: Mold and mildew can pose health risks to occupants of a building. Exposure to mold spores can lead to respiratory issues, allergies, and other health problems. As a contractor, you want to ensure that your work doesn't inadvertently contribute to these problems.</p>
            <p className="text-muted leading-relaxed mb-5">Property Damage: Mold and mildew can cause structural damage to buildings, including insulation materials. This can lead to costly repairs and potential liability claims.</p>

            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">Insurance Coverage for Mold and Mildew Claims</h2>
            <p className="text-muted leading-relaxed mb-5">While insurance policies typically cover damage caused by sudden and accidental events, they often exclude coverage for mold and mildew issues resulting from long-term moisture problems or poor maintenance. However, there are insurance options to consider:</p>
            <p className="text-muted leading-relaxed mb-5">Builder's Risk Insurance: This policy can provide coverage for damage to the insured property, including insulation, resulting from mold and mildew. It's often used during new construction projects and renovations.</p>
            <p className="text-muted leading-relaxed mb-5">Inland Marine Insurance: Inland marine insurance can cover your equipment, including insulation materials, against damage from mold and mildew if the damage is due to a covered peril.</p>
            <p className="text-muted leading-relaxed mb-5">Endorsements and Riders: Some insurance companies offer endorsements or riders that can be added to commercial property insurance or general liability insurance policies to provide limited coverage for mold and mildew claims.</p>
            <p className="text-muted leading-relaxed mb-5">Pollution Liability Insurance: In some cases, mold and mildew may be considered pollutants. Pollution liability insurance can provide coverage for damages related to pollutants, including mold, as long as it is caused by a covered event.</p>

            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">Key Considerations for Spray Foam Insulation Contractors</h2>
            <p className="text-muted leading-relaxed mb-5">Proactive Prevention: Prevention is key. Ensure that you follow best practices in insulation installation, including proper ventilation, moisture control, and sealing. This can reduce the risk of mold and mildew issues.</p>
            <p className="text-muted leading-relaxed mb-5">Documentation: Maintain detailed records of your work, including moisture control measures and insulation installation techniques. Good documentation can be crucial in case of a claim.</p>
            <p className="text-muted leading-relaxed mb-5">Insurance Review: Consult with an insurance professional who understands the specific risks and challenges faced by spray foam insulation contractors. They can help you identify the right insurance coverage for your needs.</p>
            <p className="text-muted leading-relaxed mb-5">Contractual Obligations: Review your contracts with clients to ensure that you are not assuming liability for mold and mildew issues beyond your control.</p>
            <p className="text-muted leading-relaxed mb-5">Coverage for mold and mildew claims is a critical consideration for spray foam insulation contractors. With the right insurance coverage in place, you can protect your business from potential liability claims and ensure that your work contributes to healthier, safer, and more resilient buildings. Take the time to understand your insurance options and work with an expert who can tailor coverage to your specific needs, helping you navigate the unique challenges of your industry.</p>
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
