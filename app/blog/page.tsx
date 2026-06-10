import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import GlassCard from '@/components/GlassCard';
import { blogPosts as articles, blogCategories as filterPills } from '@/lib/blog-posts';

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

export default function BlogIndexPage() {
  return (
    <>
      <PageHero
        title="Spray Foam Insurance Blog"
        subtitle="Expert coverage guides, safety tips, and industry news for spray foam insulation contractors."
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
