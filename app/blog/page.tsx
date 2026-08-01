import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import GlassCard from '@/components/GlassCard';
import FAQSection from '@/components/FAQSection';
import CTABar from '@/components/CTABar';
import { blogPosts as articles } from '@/lib/blog-posts';
import { blogFaqs } from '@/lib/faqs';

export const metadata: Metadata = {
  title: 'Spray Foam Insurance Blog | Spray Foam Insurance Call 844-967-5247',
  description:
    'Expert coverage guides, safety tips, and industry news for spray foam insulation contractors. Free resources from SPF insurance specialists.',
  alternates: { canonical: 'https://sprayfoaminsurance.com/blog' },
  keywords: ['spray foam insurance blog', 'SPF contractor tips', 'spray foam coverage guides'],
  openGraph: {
    title: 'Spray Foam Insurance Blog',
    description: 'Expert coverage guides and industry news for spray foam contractors.',
    type: 'website',
  },
};

export default function BlogIndexPage() {
  const featured = articles[articles.length - 1]; // most recent post, matches live "featured" slot
  const rest = articles.filter((a) => a.href !== featured.href);

  return (
    <>
      <PageHero title="Spray Foam Insurance Blog" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Featured article */}
          <div className="lg:col-span-2">
            <GlassCard className="flex flex-col h-full overflow-hidden p-0">
              {featured.image && (
                <div className="relative w-full h-64 shrink-0">
                  <Image
                    src={featured.image}
                    alt={`Featured image for ${featured.title}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="font-headline font-bold text-text text-2xl mb-3">{featured.title}</h3>
                <Link
                  href={featured.href}
                  className="primary-btn inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-label font-semibold"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </GlassCard>
          </div>

          {/* Subscribe widget */}
          <div>
            <GlassCard className="p-0 overflow-hidden h-full">
              <div className="bg-primary p-6">
                <h2 className="font-headline font-bold text-white text-xl mb-4">Subscribe</h2>
                <input
                  type="email"
                  placeholder="EMAIL"
                  className="w-full bg-white border border-white/40 rounded-lg px-4 py-2.5 text-sm text-text placeholder-muted mb-3 focus:outline-none"
                />
                <button
                  type="button"
                  className="w-full bg-[#080d16] text-white text-xs font-bold uppercase tracking-widest py-3 rounded-lg"
                >
                  Subscribe
                </button>
              </div>
              <div className="p-5 space-y-4">
                {articles.slice(0, 3).map((a) => (
                  <div key={a.href}>
                    <p className="font-headline font-bold text-text text-sm">{a.title}</p>
                    <Link href={a.href} className="text-primary text-xs font-semibold hover:text-accent">
                      read more
                    </Link>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Article grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((article) => (
            <GlassCard key={article.href} className="flex flex-col h-full overflow-hidden p-0">
              {article.image && (
                <div className="relative w-full h-48 shrink-0">
                  <Image
                    src={article.image}
                    alt={`Featured image for ${article.title}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              )}
              <div className="flex flex-col flex-1 p-6">
                <span className="text-xs label-text text-accent mb-3 block">{article.category}</span>
                <h3 className="font-headline font-bold text-text text-lg mb-2">{article.title}</h3>
                <p className="text-xs text-muted mb-3">{article.date}</p>
                <p className="text-muted text-sm leading-relaxed flex-1 mb-4">{article.excerpt}</p>
                <Link
                  href={article.href}
                  className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:text-accent transition-colors mt-auto"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-headline text-3xl font-bold text-text text-center mb-10">
            Frequently Asked Questions
          </h2>
          <FAQSection items={blogFaqs} />
        </div>
      </section>

      <CTABar />
    </>
  );
}
