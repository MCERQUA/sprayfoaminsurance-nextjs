import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import GlassCard from '@/components/GlassCard';

export const metadata: Metadata = {
  title: 'Spray Foam Insurance Blog | Industry Insights',
  description:
    'Expert coverage guides, safety tips, and industry news for spray foam insulation contractors. Free resources from SPF insurance specialists.',
  keywords: ['spray foam insurance blog', 'SPF contractor tips', 'spray foam coverage guides'],
  openGraph: {
    title: 'Spray Foam Insurance Blog',
    description: 'Expert coverage guides and industry news for spray foam contractors.',
    type: 'website',
  },
};

const articles = [
  {
    href: '/2023/09/24/can-i-get-coverage-for-mold-and-mildew-claims',
    title: 'Can I Get Coverage for Mold & Mildew Claims?',
    date: 'Sep 24, 2023',
    category: 'Coverage',
    excerpt:
      'Mold and mildew pose real risks for spray foam contractors. Learn how specialized insurance coverage protects your business from moisture-related liability claims.',
  },
  {
    href: '/2023/09/24/do-i-need-insurance-if-i-subcontract-work',
    title: 'Do I Need Insurance If I Subcontract Work?',
    date: 'Sep 24, 2023',
    category: 'Business',
    excerpt:
      'Subcontracting introduces unique insurance responsibilities for both general contractors and subcontractors. Understand your obligations before your next project.',
  },
  {
    href: '/2023/09/24/do-i-need-special-coverage-for-roofing-projects',
    title: 'Do I Need Special Coverage for Roofing Projects?',
    date: 'Sep 24, 2023',
    category: 'Coverage',
    excerpt:
      'When spray foam contractors work alongside roofers, special insurance considerations come into play. Know your coverage before combined operations.',
  },
  {
    href: '/2023/09/24/does-insurance-cover-overspray-damage',
    title: 'Does Insurance Cover Overspray Damage?',
    date: 'Sep 24, 2023',
    category: 'Claims',
    excerpt:
      'Overspray is an inherent risk in spray foam applications. Discover how liability and specialized policies protect you from unintended foam dispersion claims.',
  },
  {
    href: '/2023/09/24/how-does-insurance-protect-my-clients',
    title: 'How Does Insurance Protect My Clients?',
    date: 'Sep 24, 2023',
    category: 'Business',
    excerpt:
      'Your insurance coverage does more than protect your business — it gives clients peace of mind and financial protection throughout every project.',
  },
  {
    href: '/2023/09/24/is-my-equipment-covered',
    title: 'Is My Spray Foam Equipment Covered?',
    date: 'Sep 24, 2023',
    category: 'Equipment',
    excerpt:
      'Your proportioner, hoses, and rig represent a massive investment. Find out which policies actually cover your equipment and how to avoid coverage gaps.',
  },
  {
    href: '/2023/09/24/is-retrofitting-insurance-available-for-spray-foam-contractors',
    title: 'Is Retrofitting Insurance Available for SPF Contractors?',
    date: 'Sep 24, 2023',
    category: 'Coverage',
    excerpt:
      'As energy efficiency demands grow, spray foam contractors are doing more retrofit work. Learn how your insurance can adapt to protect these projects.',
  },
  {
    href: '/2023/09/24/what-are-the-insurance-requirements-for-large-commercial-projects',
    title: 'Insurance Requirements for Large Commercial Projects',
    date: 'Sep 24, 2023',
    category: 'Commercial',
    excerpt:
      'Commercial spray foam projects come with elevated insurance requirements. This guide covers the policies needed to win bids and stay compliant.',
  },
  {
    href: '/2023/09/24/what-factors-affect-insurance-premiums',
    title: 'What Factors Affect My Insurance Premiums?',
    date: 'Sep 24, 2023',
    category: 'Pricing',
    excerpt:
      'From claims history to crew size and revenue, many factors shape your spray foam insurance premiums. Understand what drives costs to manage them.',
  },
  {
    href: '/2025/07/04/spray-foam-equipment-financing-building-strong-banking-relationships',
    title: 'Spray Foam Equipment Financing: Building Strong Banking Relationships',
    date: 'Jul 4, 2025',
    category: 'Business',
    excerpt:
      'Spray foam rigs cost $40k–$150k+. Building strong banking relationships is key to financing your equipment and scaling your business.',
  },
];

const filterPills = ['All', 'Coverage', 'Business', 'Equipment', 'Claims', 'Commercial', 'Pricing'];

export default function BlogIndexPage() {
  return (
    <>
      <PageHero
        headline="Spray Foam Insurance Blog"
        subheadline="Expert coverage guides, safety tips, and industry news for spray foam insulation contractors."
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category filter pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {filterPills.map((pill) =>
            pill === 'All' ? (
              <span
                key={pill}
                className="px-4 py-1.5 rounded-full border border-primary/60 bg-primary/10 text-primary text-sm font-label cursor-pointer"
              >
                {pill}
              </span>
            ) : (
              <span
                key={pill}
                className="px-4 py-1.5 rounded-full border border-primary/20 text-muted text-sm font-label cursor-pointer hover:border-primary/40 hover:text-text transition-colors"
              >
                {pill}
              </span>
            )
          )}
        </div>

        {/* Article grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <GlassCard key={article.href} className="flex flex-col h-full p-6">
              <span className="text-xs label-text text-accent mb-3 block">{article.category}</span>
              <h3 className="font-headline font-bold text-text text-lg mb-2">{article.title}</h3>
              <p className="text-xs text-muted mb-3">{article.date}</p>
              <p className="text-muted text-sm leading-relaxed flex-1 mb-4">{article.excerpt}</p>
              <Link
                href={article.href}
                className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:text-accent transition-colors mt-auto"
              >
                Read Article <ArrowRight className="w-4 h-4" />
              </Link>
            </GlassCard>
          ))}
        </div>
      </section>
    </>
  );
}
