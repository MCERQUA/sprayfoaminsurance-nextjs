import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTABar from '@/components/CTABar';

const BASE_URL = 'https://sprayfoaminsurance.com';
const PAGE_URL = `${BASE_URL}/about/`;
const DESCRIPTION =
  'Spray Foam Insurance helps spray foam contractors request insurance quotes. Josh says he started in 2005 and is licensed in all fifty states.';

export const metadata: Metadata = {
  title: 'About',
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
};

// Only coverages already listed on the site (see Nav / JsonLd serviceType).
const coverages = [
  { label: 'General liability', href: '/services/general-liability-insurance/' },
  { label: "Workers' compensation", href: '/services/workers-compensation-insurance-for-spray-foam-contractors/' },
  { label: 'Commercial auto', href: '/services/commercial-auto/' },
  { label: 'Environmental liability', href: '/services/environmental-liability/' },
  { label: 'Surety bonds', href: '/services/surety-bonds/' },
  { label: 'Rig and equipment (inland marine)', href: '/inland-marine/spray_foam_rig_insurance/' },
];

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: 'About Spray Foam Insurance',
  description: DESCRIPTION,
  isPartOf: { '@id': `${BASE_URL}/#website` },
  about: { '@id': `${BASE_URL}/#organization` },
  mainEntity: { '@id': `${BASE_URL}/#organization` },
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      <PageHero title="About Spray Foam Insurance" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
      </div>

      <section className="bg-background py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="label-text">ABOUT</span>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-text mt-3 mb-6">
            Who we are
          </h2>
          <blockquote className="border-l-4 border-primary pl-4 mb-6 font-label text-text text-lg leading-relaxed">
            &ldquo;I started in 2005. I&rsquo;m licensed in all fifty states.&rdquo;
            <footer className="text-muted text-sm mt-2">&mdash; Josh</footer>
          </blockquote>
          <p className="font-label text-muted leading-relaxed">
            Spray Foam Insurance is a website for spray foam contractors who need business
            insurance. Contractors tell us about their business through our quote request.
          </p>
        </div>
      </section>

      <section className="bg-surface border-y border-primary/10 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-text mb-4">
            Coverages you can request a quote for
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 font-label">
            {coverages.map((c) => (
              <li key={c.href}>
                <Link href={c.href} className="text-text underline underline-offset-2 hover:text-primary transition-colors">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link
              href="/quote/"
              className="primary-btn inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold font-label text-sm"
            >
              Request a quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABar />
    </>
  );
}
