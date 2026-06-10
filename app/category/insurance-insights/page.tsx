import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import GlassCard from '@/components/GlassCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import { blogPosts } from '@/lib/blog-posts';

export const metadata: Metadata = {
  title: 'Insurance Insights | Spray Foam Insurance Blog',
  description:
    'Expert insurance guidance for spray foam contractors — coverage tips, compliance guides, and industry news from SPF insurance specialists.',
  keywords: ['spray foam insurance insights', 'SPF contractor insurance tips', 'spray foam coverage guidance'],
  openGraph: {
    title: 'Insurance Insights | Spray Foam Insurance Blog',
    description: 'Expert insurance guidance for spray foam contractors.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://sprayfoaminsurance.com/category/insurance-insights/',
  },
};

export default function InsuranceInsightsPage() {
  return (
    <>
      <PageHero
        title="Insurance Insights"
        subtitle="Expert guidance for spray foam contractors — coverage tips, compliance answers, and industry news."
        badge="Insurance Insights"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: 'Insurance Insights' },
          ]}
        />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex items-center justify-between mb-8">
          <p className="text-muted text-sm">
            {blogPosts.length} articles
          </p>
          <Link
            href="/blog"
            className="text-sm text-primary hover:text-accent transition-colors font-semibold"
          >
            View all categories →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((article) => (
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
