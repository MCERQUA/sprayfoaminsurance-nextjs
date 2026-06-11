import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import FAQSection from '@/components/FAQSection';
import CTABar from '@/components/CTABar';
import GlassCard from '@/components/GlassCard';
import { CheckCircle, FileText, MapPin } from 'lucide-react';
import { suretyBondsFaqs } from '@/lib/faqs';

export const metadata: Metadata = {
  title: 'Surety Bonds for Spray Foam Contractors',
  description: 'Performance bonds, payment bonds, and license bonds for spray foam contractors. Meet contract requirements and state licensing. Fast quotes available.',
  alternates: { canonical: 'https://sprayfoaminsurance.com/services/surety-bonds' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'InsuranceAgency',
      name: 'Spray Foam Insurance',
      url: 'https://sprayfoaminsurance.com',
      telephone: '844-967-5247',
      serviceType: 'Surety Bonds',
    },
    {
      '@type': 'FAQPage',
      mainEntity: suretyBondsFaqs.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      })),
    },
  ],
};

export default function SuretyBondsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        title="Surety Bonds for Spray Foam Contractors"
        subtitle="Performance bonds, payment bonds, and license bonds to satisfy contract requirements and state licensing."
        ctaText="Get a Bond Quote"
        ctaHref="/quote"
        badge="Surety Bonds"
      />

      <section className="bg-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-text mb-4">
              What Is a Surety Bond?
            </h2>
            <p className="text-muted max-w-2xl mx-auto font-label leading-relaxed">
              A surety bond is a three-party agreement that guarantees you will fulfill your contractual obligations. Unlike insurance — which protects you — a bond protects the party requiring it. If you fail to perform, the surety steps in and the cost is ultimately recovered from you.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/images/bond-diagram.png"
                alt="Surety bond three-party diagram showing principal, obligee, and surety relationships"
                width={600}
                height={400}
                className="rounded-xl border border-primary/20 w-full max-w-md mx-auto"
              />
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-muted font-label leading-relaxed">
                Understanding who is involved in a surety bond helps clarify what you&apos;re buying and what is expected of each party:
              </p>
              <GlassCard>
                <h3 className="font-headline font-bold text-text mb-2">Principal (You)</h3>
                <p className="text-muted font-label text-sm leading-relaxed">
                  The contractor who purchases the bond. You are legally bound to perform the obligation specified — whether completing a project, paying subcontractors, or complying with licensing laws.
                </p>
              </GlassCard>
              <GlassCard>
                <h3 className="font-headline font-bold text-text mb-2">Obligee (Project Owner / State)</h3>
                <p className="text-muted font-label text-sm leading-relaxed">
                  The entity requiring the bond as protection — typically a general contractor, government agency, or state licensing board. The bond exists to protect their financial interests.
                </p>
              </GlassCard>
              <GlassCard>
                <h3 className="font-headline font-bold text-text mb-2">Surety (The Insurance Company)</h3>
                <p className="text-muted font-label text-sm leading-relaxed">
                  Guarantees your performance and pays valid claims to the obligee if you default. The surety then has the right to seek full reimbursement from you — making this a credit product, not a transfer of risk.
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface border-y border-primary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-text mb-4">
              Types of Surety Bonds for SPF Contractors
            </h2>
            <p className="text-muted max-w-2xl mx-auto font-label leading-relaxed">
              The type of bond you need depends on the work you do and the requirements set by your state or project owner. Most spray foam contractors encounter at least one of these three bond types.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard>
              <div className="flex flex-col gap-4">
                <FileText className="w-8 h-8 text-primary" />
                <h3 className="font-headline font-bold text-text text-lg">Performance Bond</h3>
                <p className="text-muted font-label text-sm leading-relaxed">
                  Guarantees you&apos;ll complete the project according to contract specifications. Required for most public and many commercial projects. Covers the cost of project completion if you default, protecting the project owner from financial loss.
                </p>
              </div>
            </GlassCard>
            <GlassCard>
              <div className="flex flex-col gap-4">
                <FileText className="w-8 h-8 text-primary" />
                <h3 className="font-headline font-bold text-text text-lg">Payment Bond</h3>
                <p className="text-muted font-label text-sm leading-relaxed">
                  Ensures subcontractors, suppliers, and laborers will be paid for their work. Often paired with performance bonds on public contracts under the Miller Act. Prevents mechanics&apos; liens and protects your downstream partners.
                </p>
              </div>
            </GlassCard>
            <GlassCard>
              <div className="flex flex-col gap-4">
                <FileText className="w-8 h-8 text-primary" />
                <h3 className="font-headline font-bold text-text text-lg">License &amp; Permit Bond</h3>
                <p className="text-muted font-label text-sm leading-relaxed">
                  Required by many states for contractor licensing. Protects the public against financial harm from contractors who violate licensing laws or regulations. Often the first bond a new contractor needs to obtain before beginning work legally.
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="bg-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-text mb-6 text-center">
              State Licensing &amp; Bond Requirements
            </h2>
            <GlassCard className="mb-6">
              <p className="text-muted font-label leading-relaxed mb-4">
                Most states require spray foam contractors to be licensed and bonded before performing work. Bond amounts vary — from $5,000 to $100,000+ depending on the state and license type. Failing to maintain required bonds can result in license suspension and project shutdowns.
              </p>
              <p className="text-muted font-label leading-relaxed">
                Below are bond requirements for some of the highest-volume states for spray foam work. These figures are approximate — requirements change frequently based on legislative updates and licensing board rules.
              </p>
            </GlassCard>
            <GlassCard>
              <ul className="flex flex-col gap-4 mb-5">
                <li className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-text font-label text-sm">
                    <span className="font-semibold">Arizona</span>
                    <span className="text-muted"> — $4,000–$15,000 depending on license classification</span>
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-text font-label text-sm">
                    <span className="font-semibold">Texas</span>
                    <span className="text-muted"> — $10,000 for general contractor registration</span>
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-text font-label text-sm">
                    <span className="font-semibold">Florida</span>
                    <span className="text-muted"> — $10,000–$25,000 based on license type and county</span>
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-text font-label text-sm">
                    <span className="font-semibold">California</span>
                    <span className="text-muted"> — $15,000 CSLB contractor license bond</span>
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-text font-label text-sm">
                    <span className="font-semibold">New York</span>
                    <span className="text-muted"> — $15,000 for home improvement contractor registration</span>
                  </span>
                </li>
              </ul>
              <div className="flex items-start gap-3 pt-4 border-t border-primary/10">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p className="text-muted font-label text-sm leading-relaxed">
                  Requirements change frequently. Contact us to verify current bond requirements in your state before applying for or renewing your contractor license.
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-headline text-3xl font-bold text-text text-center mb-10">
            Surety Bond FAQ
          </h2>
          <FAQSection items={suretyBondsFaqs} />
        </div>
      </section>

      <CTABar />
    </>
  );
}
