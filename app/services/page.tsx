import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ServiceCard from '@/components/ServiceCard';
import CTABar from '@/components/CTABar';
import GlassCard from '@/components/GlassCard';
import { Shield, Users, Truck, Leaf, FileText, Wrench, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Spray Foam Insurance Coverage Options',
  description: 'Explore all insurance coverage options for spray foam contractors — GL, workers comp, commercial auto, environmental, surety bonds, and rig insurance.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Insurance Coverage for Spray Foam Contractors"
        subtitle="Comprehensive protection built specifically for SPF professionals — from general liability to surety bonds."
        ctaText="Get a Free Quote"
        ctaHref="/quote"
        badge="SPF Specialists"
      />

      <section className="bg-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="label-text">OUR COVERAGES</span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-text mt-3 mb-4">
              Complete Protection for Your SPF Business
            </h2>
            <p className="text-muted max-w-2xl mx-auto font-label">
              Every coverage line we offer is built around the real risks spray foam contractors face — not generic policies retrofitted for your trade.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              title="General Liability Insurance"
              description="Coverage for third-party bodily injury, property damage, and SPF-specific risks like overspray incidents."
              href="/services/general-liability-insurance"
              icon={Shield}
            />
            <ServiceCard
              title="Workers' Compensation"
              description="Medical and lost-wage coverage for employees injured on the job, including chemical exposure from isocyanates."
              href="/services/workers-compensation-insurance-for-spray-foam-contractors"
              icon={Users}
            />
            <ServiceCard
              title="Commercial Auto Insurance"
              description="Fleet coverage for spray rigs, box trucks, and company vehicles including hired/non-owned auto liability."
              href="/services/commercial-auto"
              icon={Truck}
            />
            <ServiceCard
              title="Environmental Liability"
              description="Pollution coverage for chemical spills, off-gassing claims, overspray contamination, and environmental remediation."
              href="/services/environmental-liability"
              icon={Leaf}
            />
            <ServiceCard
              title="Surety Bonds"
              description="Performance, payment, and license bonds required to bid on contracts and meet state licensing requirements."
              href="/services/surety-bonds"
              icon={FileText}
            />
            <ServiceCard
              title="Rig & Equipment Insurance"
              description="Inland marine coverage for proportioners, generators, and mobile spray equipment on-site and in transit."
              href="/inland-marine"
              icon={Wrench}
            />
          </div>
        </div>
      </section>

      <section className="bg-surface border-y border-primary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-text mb-4">
              Why Work With an SPF Insurance Specialist?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-text text-lg mb-2">SPF-Specific Policies</h3>
                  <p className="text-muted font-label text-sm leading-relaxed">
                    Standard insurance often excludes common SPF risks like overspray. We use forms designed specifically for spray foam contractors with no surprise exclusions.
                  </p>
                </div>
              </div>
            </GlassCard>
            <GlassCard className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-text text-lg mb-2">A-Rated Carriers</h3>
                  <p className="text-muted font-label text-sm leading-relaxed">
                    We partner with financially stable carriers who understand the spray foam industry and don&apos;t cancel policies at renewal over minor claims.
                  </p>
                </div>
              </div>
            </GlassCard>
            <GlassCard className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-text text-lg mb-2">Same-Day Certificates</h3>
                  <p className="text-muted font-label text-sm leading-relaxed">
                    Get your certificate of insurance the same day your policy is bound. We know contractors need to move fast.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <CTABar />
    </>
  );
}
