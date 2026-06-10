import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import FAQSection from '@/components/FAQSection';
import CTABar from '@/components/CTABar';
import GlassCard from '@/components/GlassCard';
import StatBar from '@/components/StatBar';
import { CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'General Liability Insurance for Spray Foam Contractors',
  description: 'Specialized GL insurance for spray foam contractors. Covers overspray, property damage, bodily injury, and completed operations. Get a free quote.',
};

const faqs = [
  {
    q: 'Does standard GL cover spray foam overspray?',
    a: 'Most standard GL policies either exclude or severely limit coverage for overspray incidents. Our SPF-specific GL policies include overspray coverage as standard, protecting you when foam drifts to neighboring properties or vehicles.',
  },
  {
    q: 'What GL limits do I need as a spray foam contractor?',
    a: 'Most general contractors require subcontractors to carry at least $1M per occurrence / $2M aggregate. If you work on large commercial projects, $2M/$4M or higher may be required. We\'ll help you meet whatever certificate requirements your clients demand.',
  },
  {
    q: 'What is Products & Completed Operations coverage?',
    a: 'This extends your GL coverage after a job is completed. If a client later claims the foam you installed caused property damage or health issues, Products & Completed Ops coverage responds — protecting you from long-tail claims.',
  },
  {
    q: 'Does GL cover damage to my own equipment or property?',
    a: 'No. General Liability covers third-party claims only. Your own equipment, tools, and materials in transit are covered by Inland Marine / Rig Insurance. Property you\'re working on may be covered under Builder\'s Risk or Installation Floater.',
  },
  {
    q: 'Can I get GL coverage if I\'ve had claims?',
    a: 'Yes, in most cases. We work with multiple carriers and specialty markets that understand SPF contractors. Prior claims don\'t automatically disqualify you, though they may affect pricing. Share your claims history with us and we\'ll find the best available options.',
  },
  {
    q: 'How quickly can I get a certificate of insurance?',
    a: 'Once your policy is bound and payment is processed, we can issue certificates the same day — often within a few hours. We know contractors can\'t afford to lose jobs over paperwork delays.',
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
      description: 'Specialized insurance for spray foam contractors',
      areaServed: 'US',
      serviceType: 'General Liability Insurance',
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

export default function GeneralLiabilityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        title="General Liability Insurance for Spray Foam Contractors"
        subtitle="Specialized GL coverage that addresses the unique risks of SPF operations — overspray, property damage, bodily injury, and more."
        ctaText="Get a Free Quote"
        ctaHref="/quote"
        badge="GL Insurance"
      />

      <section className="blue-gradient-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="label-text">COVERAGE DETAILS</span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-text mt-3 mb-4">
              What General Liability Covers
            </h2>
            <p className="text-muted max-w-2xl mx-auto font-label">
              General Liability Insurance is the foundation of any spray foam contractor&apos;s insurance program. It protects your business from third-party claims that can arise from your day-to-day operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <GlassCard className="p-6 border border-primary/20 hover:border-primary/50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <CheckCircle className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-headline font-bold text-base text-text mb-2">Bodily Injury</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                Covers medical expenses and legal costs if a third party is injured during or because of your operations.
              </p>
            </GlassCard>
            <GlassCard className="p-6 border border-primary/20 hover:border-primary/50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <CheckCircle className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-headline font-bold text-base text-text mb-2">Property Damage</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                Protects you when your work damages a client&apos;s property, including structures, contents, or adjacent properties.
              </p>
            </GlassCard>
            <GlassCard className="p-6 border border-primary/20 hover:border-primary/50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <CheckCircle className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-headline font-bold text-base text-text mb-2">Overspray Incidents</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                SPF-specific coverage for wind-blown or accidental overspray damaging neighboring vehicles, landscaping, or structures.
              </p>
            </GlassCard>
            <GlassCard className="p-6 border border-primary/20 hover:border-primary/50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <CheckCircle className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-headline font-bold text-base text-text mb-2">Products &amp; Completed Operations</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                Extends protection after a job is done — covers claims arising from installed foam that fails or causes damage.
              </p>
            </GlassCard>
            <GlassCard className="p-6 border border-primary/20 hover:border-primary/50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <CheckCircle className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-headline font-bold text-base text-text mb-2">Personal &amp; Advertising Injury</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                Covers claims for libel, slander, copyright infringement, and other non-physical harms.
              </p>
            </GlassCard>
            <GlassCard className="p-6 border border-primary/20 hover:border-primary/50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <CheckCircle className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-headline font-bold text-base text-text mb-2">Medical Payments</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                Pays for minor injuries to third parties on your job site, regardless of fault, helping avoid larger lawsuits.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="bg-surface border-y border-primary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-text mb-6">
                Why SPF Contractors Face Unique Liability Risks
              </h2>
              <div className="space-y-4 font-label text-muted leading-relaxed">
                <p>
                  Spray polyurethane foam introduces hazards that most standard commercial general liability policies were never written to handle. The application process involves highly reactive chemicals, high-pressure equipment, and aerosol particulates that can travel far beyond the job site.
                </p>
                <p>
                  Overspray is the most common source of third-party claims for SPF contractors. Wind-borne foam particles can coat neighboring vehicles, siding, and landscaping — and a single incident can easily exceed $10,000 in damages. Many standard GL policies exclude this exposure entirely or sub-limit it to amounts that fall well short of the actual claim.
                </p>
                <p>
                  Off-gassing complaints are another growing exposure. Occupants who re-enter a treated structure before the cure window closes may claim respiratory irritation, headaches, or property damage from lingering isocyanate vapors. These claims often arrive months after the job is complete, which is why Products &amp; Completed Operations coverage is essential.
                </p>
                <p>
                  Structural damage claims — from foam expansion warping framing, cracking walls, or trapping moisture — can reach six figures and are rarely anticipated by contractors until they receive the summons.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <Image
                src="/assets/images/spray-foam-insurance.webp"
                alt="Spray foam insulation contractor at work — general liability insurance coverage"
                width={600}
                height={400}
                className="rounded-xl object-cover w-full"
              />
              <GlassCard className="p-6 border-l-4 border-primary">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-highlight/10 flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-text mb-2">Overspray Liability</h3>
                    <p className="text-muted font-label text-sm leading-relaxed">
                      Wind-borne foam can travel 50+ feet and damage cars, siding, and landscaping. Standard policies often exclude this.
                    </p>
                  </div>
                </div>
              </GlassCard>
              <GlassCard className="p-6 border-l-4 border-primary">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-highlight/10 flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-text mb-2">Off-Gassing Complaints</h3>
                    <p className="text-muted font-label text-sm leading-relaxed">
                      Occupants may claim illness or property damage from chemical fumes during or after application.
                    </p>
                  </div>
                </div>
              </GlassCard>
              <GlassCard className="p-6 border-l-4 border-primary">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-highlight/10 flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-text mb-2">Structural Damage Claims</h3>
                    <p className="text-muted font-label text-sm leading-relaxed">
                      Foam expansion can crack walls, warp framing, or trap moisture — claims that can reach six figures.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassCard className="p-8">
            <h2 className="font-headline text-2xl font-bold text-text mb-6">Common Coverage Limits</h2>
            <div className="overflow-x-auto">
              <table className="w-full font-label text-sm">
                <thead>
                  <tr className="border-b border-primary/10">
                    <th className="text-left text-muted font-semibold pb-3 pr-8">Coverage Type</th>
                    <th className="text-left text-muted font-semibold pb-3">Available Limits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary/10">
                  <tr>
                    <td className="text-text py-4 pr-8 font-medium">Per Occurrence</td>
                    <td className="text-muted py-4">$1,000,000 / $2,000,000 / $5,000,000</td>
                  </tr>
                  <tr>
                    <td className="text-text py-4 pr-8 font-medium">Aggregate</td>
                    <td className="text-muted py-4">$2,000,000 / $4,000,000 / $10,000,000</td>
                  </tr>
                  <tr>
                    <td className="text-text py-4 pr-8 font-medium">Products / Completed Ops</td>
                    <td className="text-muted py-4">Included with policy</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted font-label text-sm mt-5 pt-4 border-t border-primary/10">
              Higher limits available based on project requirements and contract requirements.
            </p>
          </GlassCard>
        </div>
      </section>

      <section className="bg-surface py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-headline text-3xl font-bold text-text">How to Get Your GL Coverage</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center mb-4">
                <span className="font-headline font-bold text-primary text-lg">1</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="w-4 h-4 text-accent shrink-0" />
                <h3 className="font-headline font-bold text-text">Apply Online</h3>
              </div>
              <p className="text-muted font-label text-sm leading-relaxed">
                Fill out our 5-minute SPF-specific application with details about your business.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center mb-4">
                <span className="font-headline font-bold text-accent text-lg">2</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="w-4 h-4 text-accent shrink-0" />
                <h3 className="font-headline font-bold text-text">Review Your Quote</h3>
              </div>
              <p className="text-muted font-label text-sm leading-relaxed">
                We&apos;ll shop multiple A-rated carriers and present your best options within 24 hours.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center mb-4">
                <span className="font-headline font-bold text-primary text-lg">3</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="w-4 h-4 text-accent shrink-0" />
                <h3 className="font-headline font-bold text-text">Get Your Certificate</h3>
              </div>
              <p className="text-muted font-label text-sm leading-relaxed">
                Sign digitally, pay securely, and receive your COI the same day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
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
