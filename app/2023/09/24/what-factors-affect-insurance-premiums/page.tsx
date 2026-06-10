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

const relatedPosts = [
  { href: '/2023/09/24/what-are-the-insurance-requirements-for-large-commercial-projects', title: 'Insurance Requirements for Large Commercial Projects', category: 'Commercial' },
  { href: '/2023/09/24/is-my-equipment-covered', title: 'Is My Spray Foam Equipment Covered?', category: 'Equipment' },
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
            <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs label-text text-primary">Pricing</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold leading-tight mb-6">
            <span className="blue-gradient-text">What Factors Affect My Insurance Premiums?</span>
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
            <p className="text-muted leading-relaxed mb-5">Insurance is a financial safety net that provides protection and peace of mind when unexpected events occur. Whether you're insuring your car, home, business, or even your life, understanding the factors that influence insurance premiums is crucial. As someone who has worked extensively in the insurance industry, I'm here to shed light on the key factors that play a significant role in determining your insurance premiums.</p>

            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">Type of Insurance</h2>
            <p className="text-muted leading-relaxed mb-5">Different types of insurance cover various risks, and the type of coverage you choose greatly influences your premiums. For example, auto insurance premiums will differ from those for homeowner's insurance or health insurance. The specific coverage you need and its associated risks will dictate your premium costs.</p>

            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">Coverage Amount and Deductibles</h2>
            <p className="text-muted leading-relaxed mb-5">The level of coverage you select and the deductible you choose significantly impact your insurance premiums. Higher coverage limits and lower deductibles generally result in higher premiums. Conversely, lower coverage limits and higher deductibles tend to lower your premiums. Finding the right balance between coverage and affordability is essential.</p>

            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">Risk Factors</h2>
            <p className="text-muted leading-relaxed mb-5">Insurers assess risk when determining premiums. Risk factors related to the insured person or property play a significant role:</p>
            <p className="text-muted leading-relaxed mb-5">Age and Gender: For auto and life insurance, age and gender can influence premiums. Younger drivers often face higher auto insurance rates, while life insurance premiums may vary based on age and gender.</p>
            <p className="text-muted leading-relaxed mb-5">Location: Where you live matters. Areas with higher crime rates or natural disaster risks may result in higher premiums for auto, home, or property insurance.</p>
            <p className="text-muted leading-relaxed mb-5">Health: Health insurance premiums are influenced by factors like your age, health history, and lifestyle choices (e.g., smoking). Poor health can lead to higher premiums.</p>
            <p className="text-muted leading-relaxed mb-5">Driving Record: Auto insurance premiums are affected by your driving history. Accidents, traffic violations, and claims can cause rates to increase.</p>

            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">Insurance History</h2>
            <p className="text-muted leading-relaxed mb-5">Your past insurance claims and history play a role in determining your premiums. A record of frequent claims or lapses in coverage may result in higher premiums.</p>

            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">Credit Score</h2>
            <p className="text-muted leading-relaxed mb-5">In some cases, insurers use credit scores to assess risk. A lower credit score can lead to higher premiums for auto and homeowner's insurance. Maintaining good credit can help keep premiums in check.</p>

            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">Vehicle or Property Details</h2>
            <p className="text-muted leading-relaxed mb-5">For auto and property insurance, the specifics matter. Vehicle Type: The make, model, age, and safety features of your car can affect auto insurance rates. Home Details: Home insurance premiums are influenced by factors like the age and condition of your home, the materials used in construction, and security features.</p>

            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">Annual Mileage</h2>
            <p className="text-muted leading-relaxed mb-5">The number of miles you drive annually can affect auto insurance premiums. Lower mileage often results in lower rates because it reduces the likelihood of accidents.</p>

            <h2 className="text-2xl font-headline font-bold text-text mt-10 mb-4">Policy Discounts</h2>
            <p className="text-muted leading-relaxed mb-5">Many insurers offer discounts for various reasons, such as bundling multiple policies (e.g., home and auto), maintaining a good driving record, or installing security systems. Taking advantage of these discounts can help lower your premiums.</p>
            <p className="text-muted leading-relaxed mb-5">Understanding the factors that impact insurance premiums is essential for making informed decisions about your coverage. By evaluating your specific needs, managing risk factors, and seeking discounts where applicable, you can strike a balance between comprehensive coverage and affordable premiums. Remember that insurance is a tool for financial protection, and tailoring your policy to your unique circumstances is key to finding the right coverage at the right price.</p>
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
