import Link from 'next/link';
import { ArrowLeft, Calendar, User, ArrowRight } from 'lucide-react';
import CTABar from '@/components/CTABar';
import GlassCard from '@/components/GlassCard';
import type { Metadata } from 'next';
import { OG_IMAGES } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Insulation Certificates for Spray Foam Contractors',
  description:
    'What a spray foam insulation certificate documents, why manufacturers and insurers ask for it, and how to generate one with a free tool built for SPF contractors.',
  keywords: ['insulation certificate', 'spray foam documentation', 'SPF warranty claim', 'insulation certificate contractor', 'spray foam insurance documentation'],
  openGraph: {
    title: 'Insulation Certificates for Spray Foam Contractors',
    description:
      'What a spray foam insulation certificate documents, why manufacturers and insurers ask for it, and how to generate one with a free tool built for SPF contractors.',
    type: 'article',
    images: OG_IMAGES,
  },
  alternates: { canonical: 'https://sprayfoaminsurance.com/2026/11/13/insulation-certificates-for-spray-foam-contractors/' },
};

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Insulation Certificates for Spray Foam Contractors',
  description:
    'What a spray foam insulation certificate documents, why manufacturers and insurers ask for it, and how to generate one with a free tool built for SPF contractors.',
  author: { '@type': 'Person', name: 'Josh Cotner' },
  publisher: { '@id': 'https://sprayfoaminsurance.com/#organization' },
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  url: 'https://sprayfoaminsurance.com/2026/11/13/insulation-certificates-for-spray-foam-contractors/',
};

const relatedPosts = [
  { href: '/2023/09/24/is-my-equipment-covered', title: 'Is My Spray Foam Equipment Covered?', category: 'Equipment' },
  { href: '/2023/09/24/does-insurance-cover-overspray-damage', title: 'Does Insurance Cover Overspray Damage?', category: 'Claims' },
  { href: '/2023/09/24/what-are-the-insurance-requirements-for-large-commercial-projects', title: 'Insurance Requirements for Large Commercial Projects', category: 'Commercial' },
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
          <Link href="/blog/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs label-text text-primary">Claims</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold leading-tight mb-6">
            <span className="blue-gradient-text">Insulation Certificates for Spray Foam Contractors</span>
          </h1>
          <p className="text-lg text-muted mt-2">Why Job Documentation Protects Your Warranty and Your Insurance Claim</p>
          <div className="flex items-center gap-6 text-sm text-muted mt-4">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> November 13, 2026</span>
            <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> Josh Cotner</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface/50 rounded-2xl p-8 lg:p-12 border border-primary/10">

            <h2 className="text-2xl font-headline font-bold text-text mb-4">Table of Contents</h2>
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5 mb-10 list-decimal list-inside text-muted text-sm">
              <li><a href="#introduction" className="hover:text-primary transition-colors">Introduction</a></li>
              <li><a href="#why-it-matters" className="hover:text-primary transition-colors">Why Documentation Matters</a></li>
              <li><a href="#what-is-it" className="hover:text-primary transition-colors">What an Insulation Certificate Is</a></li>
              <li><a href="#ten-categories" className="hover:text-primary transition-colors">The 10 Documentation Categories</a></li>
              <li><a href="#how-it-works" className="hover:text-primary transition-colors">How to Generate One</a></li>
              <li><a href="#who-its-for" className="hover:text-primary transition-colors">Who This Is For</a></li>
              <li><a href="#next-steps" className="hover:text-primary transition-colors">Next Steps</a></li>
            </ol>

            <h2 id="introduction" className="text-2xl font-headline font-bold text-text mt-10 mb-4">Introduction</h2>
            <p className="text-muted leading-relaxed mb-5">Most spray foam contractors keep a bid, an invoice, and maybe a few job-site photos. That is usually fine — until a warranty claim comes in, a general contractor asks for proof of what was actually installed, or an insurance claim turns on whether the job was done to spec. At that point, a thin file is the difference between a claim that gets paid and one that gets denied.</p>
            <p className="text-muted leading-relaxed mb-5">Our agency, <a href="https://insulationcertificate.com" target="_blank" rel="noopener" className="text-primary hover:text-accent underline">The Contractors Choice Agency</a>, has spent over 25 years writing insurance for spray foam contractors. We built <a href="https://insulationcertificate.com" target="_blank" rel="noopener" className="text-primary hover:text-accent underline">InsulationCertificate.com</a> after seeing the same pattern too many times: a contractor did the work correctly, but couldn&apos;t prove it when a warranty or liability dispute landed on the manufacturer&apos;s or the insurer&apos;s desk.</p>

            <h2 id="why-it-matters" className="text-2xl font-headline font-bold text-text mt-10 mb-4">Why Documentation Matters</h2>
            <h4 className="text-lg font-headline font-bold text-text mb-3">Warranty Claims Get Denied Without It</h4>
            <p className="text-muted leading-relaxed mb-5">Spray foam manufacturers can require proof of the installation conditions the product was applied under before they&apos;ll honor a warranty claim — things like substrate temperature, humidity, and batch numbers for the chemical components used. Without those records on file, a legitimate warranty claim can be denied outright, even when the installation itself was done correctly.</p>
            <h4 className="text-lg font-headline font-bold text-text mb-3">It Satisfies General Contractors</h4>
            <p className="text-muted leading-relaxed mb-5">On larger jobs, the GC often wants proof of what was installed, when, and by whom before they&apos;ll sign off and release final payment. A documented job file answers that before it&apos;s even asked.</p>
            <h4 className="text-lg font-headline font-bold text-text mb-3">It Backs You Up in a Liability Dispute</h4>
            <p className="text-muted leading-relaxed mb-5">If a mold, overspray, or moisture-related claim ever lands on your general liability policy, the carrier is going to ask what conditions existed on-site and what was disclosed to the property owner. A consistent paper trail — not your memory of the job six months later — is what actually supports the claim.</p>
            <p className="text-muted leading-relaxed mb-5">The <a href="https://www.sprayfoam.org" target="_blank" rel="noopener" className="text-primary hover:text-accent underline">Spray Polyurethane Foam Alliance (SPFA)</a> makes the same point in its own contractor risk-management guidance: a job file that holds only the bid and the invoice, with no photos and no record of what was disclosed to the homeowner, is a weak position to be in if a dispute ever follows the job. The <a href="https://archive.epa.gov/epa/sites/production/files/2015-08/documents/checklist_professional_spf_insulation_contractors.pdf" target="_blank" rel="noopener" className="text-primary hover:text-accent underline">EPA&apos;s own SPF contractor checklist</a> recommends the same baseline: document the job, not just the invoice.</p>

            <h2 id="what-is-it" className="text-2xl font-headline font-bold text-text mt-10 mb-4">What an Insulation Certificate Is</h2>
            <p className="text-muted leading-relaxed mb-5">An insulation certificate is a document generated at the end of a job that records the specifics of the installation: the contractor and project information, the product used, the application type (open cell, closed cell, roofing, wall cavity, attic, or crawlspace), the thickness applied, and the date the work was sprayed. It is the piece of paper that turns &quot;we sprayed this attic in October&quot; into a verifiable record a manufacturer, a GC, or an insurer can actually check against a claim.</p>

            <h2 id="ten-categories" className="text-2xl font-headline font-bold text-text mt-10 mb-4">The 10 Documentation Categories</h2>
            <p className="text-muted leading-relaxed mb-5">InsulationCertificate.com organizes job documentation into ten categories, built around what manufacturers, GCs, and insurers actually ask for after the fact:</p>
            <h4 className="text-lg font-headline font-bold text-text mb-3">1. Project Identification</h4>
            <p className="text-muted leading-relaxed mb-5">The customer, property, building type, and whether the work is new construction or a retrofit — the core job-number-level details.</p>
            <h4 className="text-lg font-headline font-bold text-text mb-3">2. Product &amp; Material Documentation</h4>
            <p className="text-muted leading-relaxed mb-5">Traces the foam back to its source: manufacturer, spec sheets, and A-side/B-side batch numbers.</p>
            <h4 className="text-lg font-headline font-bold text-text mb-3">3. Environmental Conditions</h4>
            <p className="text-muted leading-relaxed mb-5">Site and weather readings taken during application, including relative humidity, dew point, and substrate temperature — exactly the kind of record manufacturers require before honoring a warranty claim.</p>
            <h4 className="text-lg font-headline font-bold text-text mb-3">4. Equipment Settings &amp; Spray Data</h4>
            <p className="text-muted leading-relaxed mb-5">Machine configuration during spraying — hose temperature, heater settings, ratio confirmation — useful for diagnosing a problem after the fact.</p>
            <h4 className="text-lg font-headline font-bold text-text mb-3">5. Installation Details</h4>
            <p className="text-muted leading-relaxed mb-5">What was applied and how: lift thickness, number of passes, core samples, and density verification.</p>
            <h4 className="text-lg font-headline font-bold text-text mb-3">6. Crew &amp; Certification Records</h4>
            <p className="text-muted leading-relaxed mb-5">Who did the work and what training they hold, including SPFA PCP certification level and OSHA training documentation.</p>
            <h4 className="text-lg font-headline font-bold text-text mb-3">7. Insurance &amp; Compliance</h4>
            <p className="text-muted leading-relaxed mb-5">Proof of general liability coverage, workers&apos; comp, and contractor license numbers on file for the job.</p>
            <h4 className="text-lg font-headline font-bold text-text mb-3">8. Safety &amp; Jobsite Controls</h4>
            <p className="text-muted leading-relaxed mb-5">Ventilation, PPE, and re-entry time communicated to the homeowner during and after application.</p>
            <h4 className="text-lg font-headline font-bold text-text mb-3">9. Post-Installation Documentation</h4>
            <p className="text-muted leading-relaxed mb-5">Final thickness checks, any repairs made, and the warranty paperwork actually handed to the customer.</p>
            <h4 className="text-lg font-headline font-bold text-text mb-3">10. Financial &amp; Operational Data</h4>
            <p className="text-muted leading-relaxed mb-5">Optional cost and productivity tracking — board feet per set, labor hours, waste percentage — useful for the business side, not required for a claim.</p>

            <h2 id="how-it-works" className="text-2xl font-headline font-bold text-text mt-10 mb-4">How to Generate One</h2>
            <p className="text-muted leading-relaxed mb-5">InsulationCertificate.com walks through four steps: download the free 10-category checklist, customize it to your crew and the products you run, document every job against it, and generate the certificate itself — a short form asking for your contractor information plus the project address, square footage, spray date, product, thickness, and application type. There&apos;s no published price on the site; estimates are quoted directly through its <a href="https://insulationcertificate.com/contact" target="_blank" rel="noopener" className="text-primary hover:text-accent underline">contact page</a>.</p>

            <h2 id="who-its-for" className="text-2xl font-headline font-bold text-text mt-10 mb-4">Who This Is For</h2>
            <p className="text-muted leading-relaxed mb-5">This is built for spray foam contractors, not homeowners — residential and commercial crews who want a consistent record on every job instead of reconstructing one from memory the day a claim shows up. If your crew is already producing an <Link href="/attic-insulation-certificate/" className="text-primary hover:text-accent underline">attic insulation certificate</Link> for energy-rebate or resale purposes, the same underlying job data covers both uses.</p>

            <h2 id="next-steps" className="text-2xl font-headline font-bold text-text mt-10 mb-4">Next Steps</h2>
            <p className="text-muted leading-relaxed mb-5">Start with the free checklist at <a href="https://insulationcertificate.com" target="_blank" rel="noopener" className="text-primary hover:text-accent underline">InsulationCertificate.com</a>, and if you want to make sure your general liability, workers&apos; comp, and equipment coverage actually line up with what you&apos;re documenting, <Link href="/quote/" className="text-primary hover:text-accent underline">get a spray foam insurance quote</Link> from the agency that built the tool.</p>
          </div>
          <div className="mt-8">
            <Link href="/blog/" className="inline-flex items-center gap-2 secondary-btn px-6 py-2.5 rounded-full text-sm font-semibold font-label">
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
