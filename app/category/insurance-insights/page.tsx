import type { Metadata } from 'next';
import Link from 'next/link';
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

// Author attribution matches the live site's category archive (WordPress "by" byline).
const authorByHref: Record<string, string> = {
  '/2025/07/04/spray-foam-equipment-financing-building-strong-banking-relationships': 'mike',
};

// Sorted newest-first to match the live category archive order.
const sortedPosts = [...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export default function InsuranceInsightsPage() {
  return (
    <>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
        <div className="divide-y divide-primary/10">
          {sortedPosts.map((post) => (
            <article key={post.href} className="py-8 first:pt-0">
              <h1 className="font-headline font-bold text-text text-2xl sm:text-3xl mb-2">
                <Link href={post.href} className="hover:text-primary transition-colors">
                  {post.title}
                </Link>
              </h1>
              <p className="text-xs text-muted mb-3">
                by {authorByHref[post.href] ?? 'Josh Cotner'} | {post.date} | Insurance Insights
              </p>
              <p className="text-muted text-sm leading-relaxed">{post.excerpt}</p>
              <Link
                href={post.href}
                className="inline-block text-primary text-sm font-semibold hover:text-accent transition-colors mt-3"
              >
                Read More
              </Link>
            </article>
          ))}
        </div>

        <div className="pt-4">
          <Link
            href="/blog"
            className="text-primary text-sm font-semibold hover:text-accent transition-colors"
          >
            « Older Entries
          </Link>
        </div>
      </section>
    </>
  );
}
