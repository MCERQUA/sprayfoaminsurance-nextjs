import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import FAQSection from '@/components/FAQSection';
import CTABar from '@/components/CTABar';
import GlassCard from '@/components/GlassCard';
import { CheckCircle, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Environmental Liability Insurance for Spray Foam Contractors',
  description: 'Environmental liability insurance for SPF contractors. Covers pollution cleanup, off-gassing claims, overspray contamination, and third-party bodily injury.',
};

const faqs = [
  {
    q: "Doesn't my general liability cover pollution?",
    a: "Standard GL policies contain a 'pollution exclusion' that can bar coverage for chemical-related claims. Environmental Liability Insurance fills this gap. For spray foam contractors who work with reactive chemicals daily, this exclusion is a significant exposure. We recommend all SPF contractors carry both GL and environmental liability.",
  },
  {
    q: 'What are isocyanates and why do they matter for insurance?',
    a: "Isocyanates (the A-side of SPF) are among the leading causes of occupational asthma. They're classified as potential carcinogens and are tightly regulated by OSHA and EPA. A single claim from a building occupant or worker alleging isocyanate-related illness can result in six-figure legal costs — exactly what environmental liability insurance is designed to cover.",
  },
  {
    q: 'Does environmental liability cover off-ratio foam?',
    a: 'Off-ratio foam (where the A and B components aren\'t properly mixed) can off-gas excessively and fail structurally. Environmental liability can cover third-party claims arising from off-ratio installations, including relocation costs, remediation, and property damage.',
  },
  {
    q: 'How much environmental liability coverage do I need?',
    a: 'Coverage needs vary by project type and location. A minimum of $1M per occurrence is common, with $2M+ for commercial projects or work near sensitive environments. Some project owners and GCs require $5M or more for large commercial work.',
  },
  {
    q: 'Can I bundle environmental liability with my GL policy?',
    a: "In many cases, yes. Depending on the carrier, we can add pollution liability as an endorsement to your GL policy or as a separate standalone policy. We'll evaluate your operations and recommend the most cost-effective approach.",
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'InsuranceAgency',
      name: 'Spray Foam Insurance',
      url: 'https://sprayfoaminsurance.com',
      telephone: '844-967-5247',
      serviceType: 'Environmental Liability Insurance',
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((item) => ({
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

export default function EnvironmentalLiabilityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        title="Environmental Liability Insurance for Spray Foam Contractors"
        subtitle="Protection against pollution claims, chemical exposure, off-gassing complaints, and environmental contamination from SPF operations."
        ctaText="Get a Quote"
        ctaHref="/quote"
        badge="Environmental Liability"
      />

      <section className="bg-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="label-text">ENVIRONMENTAL RISKS</span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-text mt-3 mb-4">
              Why Spray Foam Creates Environmental Liability
            </h2>
            <p className="text-muted max-w-2xl mx-auto font-label">
              SPF involves two reactive chemicals — A-side isocyanates and B-side polyols — that create real environmental and health risks during and after application. Standard insurance policies were not designed to handle these exposures, leaving contractors dangerously uncovered.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <GlassCard>
              <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5 text-highlight" />
              </div>
              <h3 className="font-headline font-bold text-base text-text mb-2">Chemical Off-Gassing</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                During and after installation, SPF releases volatile organic compounds (VOCs) and isocyanate vapors. Occupants may file claims for health impacts, property damage, or the cost of temporary relocation.
              </p>
            </GlassCard>
            <GlassCard>
              <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5 text-highlight" />
              </div>
              <h3 className="font-headline font-bold text-base text-text mb-2">Overspray &amp; Drift Contamination</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                Wind-blown foam can contaminate neighboring properties, waterways, soil, or vegetation. Cleanup and remediation costs can be significant.
              </p>
            </GlassCard>
            <GlassCard>
              <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5 text-highlight" />
              </div>
              <h3 className="font-headline font-bold text-base text-text mb-2">Improper Disposal</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                Chemical waste, empty drums, and contaminated materials require proper disposal. Improper handling can create regulatory fines and environmental remediation liability.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="bg-surface border-y border-primary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-text">
              What Environmental Liability Insurance Covers
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <GlassCard>
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <CheckCircle className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-headline font-bold text-base text-text mb-2">Pollution Cleanup Costs</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                Pays for remediation of contaminated soil, water, or structures resulting from your operations.
              </p>
            </GlassCard>
            <GlassCard>
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <CheckCircle className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-headline font-bold text-base text-text mb-2">Third-Party Bodily Injury</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                Covers medical costs and legal defense if a third party claims illness or injury from chemical exposure.
              </p>
            </GlassCard>
            <GlassCard>
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <CheckCircle className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-headline font-bold text-base text-text mb-2">Property Damage</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                Pays for damage to neighboring properties caused by chemical drift, overspray, or contamination.
              </p>
            </GlassCard>
            <GlassCard>
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <CheckCircle className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-headline font-bold text-base text-text mb-2">Legal Defense Costs</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                Environmental claims involve complex litigation. Coverage includes attorney fees, expert witnesses, and court costs.
              </p>
            </GlassCard>
            <GlassCard>
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <CheckCircle className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-headline font-bold text-base text-text mb-2">Regulatory Fines &amp; Penalties</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                Certain policies can include coverage for government-assessed fines and penalties related to environmental violations.
              </p>
            </GlassCard>
            <GlassCard>
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <CheckCircle className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-headline font-bold text-base text-text mb-2">Transportation Incidents</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                Coverage for spills or releases that occur while transporting chemicals to or from job sites.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="bg-background py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-headline text-3xl font-bold text-text mb-8">
            Who Needs Environmental Liability Coverage?
          </h2>
          <GlassCard>
            <ul className="space-y-4">
              {[
                'Any contractor applying SPF in occupied or semi-occupied buildings',
                'Contractors working near waterways, wetlands, or sensitive ecosystems',
                'Contractors performing remediation of failed or off-ratio foam',
                'Any contractor required by GC or project owner to carry pollution coverage',
                'Contractors operating in states with strict environmental regulations',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted font-label text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-headline text-3xl font-bold text-text text-center mb-10">
            Frequently Asked Questions
          </h2>
          <FAQSection items={faqs} />
        </div>
      </section>

      <CTABar />
    </>
  );
}
