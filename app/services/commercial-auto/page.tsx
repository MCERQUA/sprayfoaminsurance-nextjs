import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import FAQSection from '@/components/FAQSection';
import CTABar from '@/components/CTABar';
import GlassCard from '@/components/GlassCard';
import { CheckCircle, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Commercial Auto Insurance for Spray Foam Contractors',
  description: 'Commercial auto insurance for spray foam rigs, vans, and trucks. Covers hired/non-owned auto, trailer coverage, and cargo liability. Free quotes available.',
};

const faqItems = [
  {
    q: 'Do I need commercial auto if I only use my personal truck?',
    a: 'Yes, if you use your personal vehicle for business purposes — like hauling equipment or driving between job sites — you need commercial auto coverage. Personal auto policies typically exclude business use, meaning a claim could be denied if you\'re driving for work.',
  },
  {
    q: 'What is hired and non-owned auto coverage?',
    a: 'Hired auto covers vehicles your business rents or leases. Non-owned auto covers vehicles owned personally by your employees when used for business purposes. Both are important for spray foam contractors who may use rental trucks or have employees running business errands in their personal vehicles.',
  },
  {
    q: 'Does commercial auto cover my spray foam equipment inside the rig?',
    a: 'The vehicle itself is covered, but the spray equipment inside it — proportioners, generators, hoses — is typically covered under a separate Inland Marine / Rig Insurance policy. We can bundle both coverages together for comprehensive protection.',
  },
  {
    q: 'How are commercial auto rates calculated?',
    a: 'Rates depend on the number and type of vehicles, drivers\' MVR records, annual mileage, radius of operations, and your claims history. Spray foam rigs are rated differently than regular commercial trucks due to the hazardous materials they carry.',
  },
  {
    q: 'Can I add drivers mid-policy?',
    a: 'Yes. We can add or remove drivers from your policy as your team changes. New drivers are typically subject to an MVR check. It\'s important to list all regular drivers on the policy — unlisted drivers may not be covered in an accident.',
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
      description: 'Commercial auto insurance for spray foam contractors',
      serviceType: 'Commercial Auto Insurance',
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqItems.map((item) => ({
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

export default function CommercialAutoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        title="Commercial Auto Insurance for Spray Foam Contractors"
        subtitle="Coverage for your spray rigs, vans, trucks, and the expensive equipment they carry."
        ctaText="Get a Quote"
        ctaHref="/quote"
        badge="Commercial Auto"
      />

      <section className="bg-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="label-text">VEHICLE COVERAGE</span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-text mt-3 mb-4">
              What Commercial Auto Insurance Covers
            </h2>
            <p className="text-muted max-w-2xl mx-auto font-label leading-relaxed">
              Personal auto policies explicitly exclude business use. If your vehicle is registered to your company, hauling equipment, or carrying employees between job sites, you need a commercial auto policy. Without it, a single accident on the way to a job could leave you fully exposed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <GlassCard>
              <div className="flex flex-col gap-4">
                <CheckCircle className="w-8 h-8 text-accent" />
                <h3 className="font-headline font-bold text-text text-lg">Owned Vehicles</h3>
                <p className="text-muted font-label text-sm leading-relaxed">
                  Spray foam rigs, box trucks, vans, and pickups owned by your business. Covers liability, collision, and comprehensive for all named vehicles on your policy.
                </p>
              </div>
            </GlassCard>
            <GlassCard>
              <div className="flex flex-col gap-4">
                <CheckCircle className="w-8 h-8 text-accent" />
                <h3 className="font-headline font-bold text-text text-lg">Hired &amp; Non-Owned Auto</h3>
                <p className="text-muted font-label text-sm leading-relaxed">
                  Coverage when you or employees drive rented or personal vehicles for business purposes. Fills the gap left by personal auto policies and rental company waivers.
                </p>
              </div>
            </GlassCard>
            <GlassCard>
              <div className="flex flex-col gap-4">
                <CheckCircle className="w-8 h-8 text-accent" />
                <h3 className="font-headline font-bold text-text text-lg">Trailer Coverage</h3>
                <p className="text-muted font-label text-sm leading-relaxed">
                  Protection for trailers hauling equipment, generators, and materials to and from job sites. Covers physical damage to the trailer itself as well as attached cargo.
                </p>
              </div>
            </GlassCard>
            <GlassCard>
              <div className="flex flex-col gap-4">
                <CheckCircle className="w-8 h-8 text-accent" />
                <h3 className="font-headline font-bold text-text text-lg">Loading &amp; Unloading</h3>
                <p className="text-muted font-label text-sm leading-relaxed">
                  Liability coverage for bodily injury or property damage during the loading and unloading of your equipment — a critical exposure point for spray foam rigs.
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="bg-surface border-y border-primary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-text mb-10 text-center">
            Why Spray Foam Contractors Need Commercial Auto Coverage
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="prose prose-invert max-w-none">
              <p className="text-muted font-label leading-relaxed mb-5">
                Personal auto policies contain explicit business-use exclusions. The moment you drive a vehicle for commercial purposes — hauling equipment, transporting employees, or driving between job sites — your personal insurer can deny a claim. That denial can leave you personally liable for property damage, medical expenses, and legal costs.
              </p>
              <p className="text-muted font-label leading-relaxed mb-5">
                Spray foam rigs carry a unique combination of risk: expensive proportioning equipment, pressurized chemical drums, and potentially hazardous materials including isocyanates and polyol resin. A commercial auto policy written for SPF contractors properly accounts for these exposures where a standard commercial policy may not.
              </p>
              <p className="text-muted font-label leading-relaxed">
                Whether you run a single rig or a multi-vehicle fleet, protecting your vehicles with the right commercial policy keeps your business moving after an accident — and keeps you in compliance with most general contractor requirements.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <GlassCard>
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-highlight shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-headline font-semibold text-text mb-1">Personal Policies Don&apos;t Apply</h3>
                    <p className="text-muted font-label text-sm leading-relaxed">
                      If you use a personal vehicle to haul equipment and get in an accident, your personal auto insurer can deny the claim — leaving you personally responsible for damages and legal costs.
                    </p>
                  </div>
                </div>
              </GlassCard>
              <GlassCard>
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-highlight shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-headline font-semibold text-text mb-1">Rig Replacement Costs</h3>
                    <p className="text-muted font-label text-sm leading-relaxed">
                      Spray foam rigs can cost $80,000–$200,000+. If your rig is totaled, you need proper coverage to get back to work quickly — without draining your operating capital.
                    </p>
                  </div>
                </div>
              </GlassCard>
              <GlassCard>
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-highlight shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-headline font-semibold text-text mb-1">Cargo &amp; Chemical Liability</h3>
                    <p className="text-muted font-label text-sm leading-relaxed">
                      Transporting isocyanates and polyol resin creates additional liability exposure that requires commercial-grade coverage. A spill in transit can trigger environmental and property damage claims.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-text mb-4">
              Fleet Coverage for Every Size Operation
            </h2>
            <p className="text-muted font-label leading-relaxed">
              We cover fleets of all sizes — from a single spray rig to a fleet of 20+ vehicles. Ask about fleet discounts when you insure multiple vehicles on one policy.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <GlassCard>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted font-label text-sm leading-relaxed">
                    Single rig and sole operators welcome — no minimum vehicle requirements
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted font-label text-sm leading-relaxed">
                    Fleet policies available for multiple vehicles with bundled pricing and simplified management
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted font-label text-sm leading-relaxed">
                    Driver scheduling and motor vehicle record (MVR) services available to help manage driver compliance
                  </span>
                </li>
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-headline text-3xl font-bold text-text text-center mb-10">
            Frequently Asked Questions
          </h2>
          <FAQSection items={faqItems} />
        </div>
      </section>

      <CTABar />
    </>
  );
}
