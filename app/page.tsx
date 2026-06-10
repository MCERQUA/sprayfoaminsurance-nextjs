import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Users, Truck, Leaf, FileText, Wrench, CheckCircle, Phone, ArrowRight, Star, Clock, Award, Zap } from 'lucide-react';
import StatBar from '@/components/StatBar';
import ServiceCard from '@/components/ServiceCard';
import FAQSection from '@/components/FAQSection';
import CTABar from '@/components/CTABar';
import GlassCard from '@/components/GlassCard';

export const metadata: Metadata = {
  title: 'Spray Foam Insurance | Specialized SPF Contractor Coverage',
  description: 'Specialized insurance for spray foam contractors. General liability, workers comp, commercial auto, environmental & surety bonds. Free quotes available.',
};

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'InsuranceAgency',
  name: 'Spray Foam Insurance',
  url: 'https://sprayfoaminsurance.com',
  telephone: '844-967-5247',
  description: 'Specialized insurance for spray foam contractors across the United States.',
  areaServed: 'US',
  sameAs: ['https://sprayfoaminsurance.com'],
  knowsAbout: [
    'General Liability Insurance',
    "Workers' Compensation Insurance",
    'Commercial Auto Insurance',
    'Surety Bonds',
    'Environmental Liability Insurance',
    'Inland Marine Insurance',
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <section className="relative min-h-screen flex items-center overflow-hidden bg-background dot-grid">
        <div className="ambient-orb w-[600px] h-[600px] bg-primary/15 top-[-100px] left-[-200px]" />
        <div className="ambient-orb w-[500px] h-[500px] bg-accent/15 bottom-[-100px] right-[-100px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-primary/30 rounded-full px-4 py-1.5 mb-8">
              <span className="label-text text-accent font-label text-sm">SPF Insurance Specialists</span>
            </div>

            <h1 className="font-headline font-bold leading-tight mb-6">
              <span className="block text-5xl sm:text-6xl lg:text-7xl blue-gradient-text">Spray Foam Insurance</span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl blue-gradient-text">Specialized Coverage</span>
            </h1>

            <p className="text-muted font-body text-lg sm:text-xl mb-10 max-w-2xl">
              Supporting your success, beyond the policy. Built specifically for the unique risks of SPF professionals.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <Link href="/quote" className="primary-btn flex items-center gap-2">
                Get Instant Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="tel:8449675247" className="secondary-btn flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call 844-967-5247
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-primary/10 pt-8">
              <div className="flex items-center gap-2 text-muted text-sm font-label label-text">
                <Shield className="w-4 h-4 text-accent flex-shrink-0" />
                <span>A-Rated Carriers</span>
              </div>
              <div className="flex items-center gap-2 text-muted text-sm font-label label-text">
                <Award className="w-4 h-4 text-accent flex-shrink-0" />
                <span>SPFA Member</span>
              </div>
              <div className="flex items-center gap-2 text-muted text-sm font-label label-text">
                <Zap className="w-4 h-4 text-accent flex-shrink-0" />
                <span>Fast Certs</span>
              </div>
              <div className="flex items-center gap-2 text-muted text-sm font-label label-text">
                <Users className="w-4 h-4 text-accent flex-shrink-0" />
                <span>Dedicated Team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatBar
        stats={[
          { value: '500+', label: 'Contractors Insured' },
          { value: '15+', label: 'Years Experience' },
          { value: '24hr', label: 'Quote Turnaround' },
          { value: '$50M+', label: 'Claims Paid' },
        ]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <span className="label-text text-accent font-label text-sm block mb-3">Comprehensive Protection</span>
          <h2 className="font-headline font-bold text-3xl sm:text-4xl text-text">Core Coverages</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            title="General Liability"
            description="Protection against third-party bodily injury, property damage, and overspray incidents specific to SPF operations."
            href="/services/general-liability-insurance"
            icon={Shield}
          />
          <ServiceCard
            title="Workers' Compensation"
            description="Coverage for your crew in case of on-the-job injuries including chemical exposure from isocyanates and other SPF chemicals."
            href="/services/workers-compensation-insurance-for-spray-foam-contractors"
            icon={Users}
          />
          <ServiceCard
            title="Commercial Auto"
            description="Vehicle coverage for your spray foam rigs, box trucks, and company vehicles against accidents, theft, and liability."
            href="/services/commercial-auto"
            icon={Truck}
          />
          <ServiceCard
            title="Environmental Liability"
            description="Pollution coverage for chemical spills, overspray contamination, off-gassing claims, and environmental remediation costs."
            href="/services/environmental-liability"
            icon={Leaf}
          />
          <ServiceCard
            title="Surety Bonds"
            description="Performance, payment, and license bonds required to bid on public contracts and meet state licensing requirements."
            href="/services/surety-bonds"
            icon={FileText}
          />
          <ServiceCard
            title="Rig & Equipment Insurance"
            description="Specialized inland marine coverage for your proportioner, generator, spray rig, and mobile equipment on-site and in transit."
            href="/inland-marine"
            icon={Wrench}
          />
        </div>
      </section>

      <section className="bg-surface border-y border-primary/10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="label-text text-accent font-label text-sm block mb-3">Why Choose SFI?</span>
              <h2 className="font-headline font-bold text-3xl sm:text-4xl text-text mb-8">Built for SPF Professionals</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="glass-card p-5">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Star className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-headline font-semibold text-text mb-2">Specialist Underwriters</h3>
                  <p className="text-muted text-sm font-body">Experts who know A-side from B-side, isocyanate risks, and SPF-specific exclusions.</p>
                </div>
                <div className="glass-card p-5">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Award className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-headline font-semibold text-text mb-2">A-Rated Carriers</h3>
                  <p className="text-muted text-sm font-body">Financially stable partners offering competitive rates for SPF-specific risks.</p>
                </div>
                <div className="glass-card p-5">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Zap className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-headline font-semibold text-text mb-2">Same-Day Certificates</h3>
                  <p className="text-muted text-sm font-body">Never miss a job waiting for paper. Get COIs delivered the same day.</p>
                </div>
                <div className="glass-card p-5">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-headline font-semibold text-text mb-2">Claims Advocacy</h3>
                  <p className="text-muted text-sm font-body">We fight for your fair settlement and guide you through every step.</p>
                </div>
              </div>
            </div>

            <div>
              <GlassCard className="p-8">
                <h3 className="font-headline font-bold text-2xl text-text mb-8">The SFI Process</h3>
                <div className="relative">
                  <div className="absolute left-5 top-10 bottom-10 w-px bg-primary/20" />
                  <div className="space-y-8">
                    <div className="flex gap-6 items-start">
                      <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0 bg-surface z-10">
                        <span className="font-headline font-bold text-primary text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="font-headline font-semibold text-text mb-1">Apply Online</h4>
                        <p className="text-muted text-sm font-body">Complete our specialized SPF application in 5 minutes.</p>
                      </div>
                    </div>
                    <div className="flex gap-6 items-start">
                      <div className="w-10 h-10 rounded-full border-2 border-accent flex items-center justify-center flex-shrink-0 bg-surface z-10">
                        <span className="font-headline font-bold text-accent text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="font-headline font-semibold text-text mb-1">Review Quote</h4>
                        <p className="text-muted text-sm font-body">Receive tailored options from multiple A-rated carriers within 24 hours.</p>
                      </div>
                    </div>
                    <div className="flex gap-6 items-start">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0 z-10">
                        <span className="font-headline font-bold text-white text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="font-headline font-semibold text-text mb-1">Get Covered</h4>
                        <p className="text-muted text-sm font-body">Sign digitally, pay online, and receive your certificates instantly.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <h2 className="font-headline font-bold text-3xl sm:text-4xl text-text">Frequently Asked Questions</h2>
        </div>
        <FAQSection
          items={[
            {
              q: 'What types of insurance do spray foam contractors need?',
              a: 'Most spray foam contractors need a combination of General Liability Insurance, Workers\' Compensation, Commercial Auto Insurance, and Equipment/Inland Marine coverage. Depending on your projects, you may also need Environmental Liability Insurance and Surety Bonds. We specialize in bundling these coverages to make sure there are no gaps.',
            },
            {
              q: 'How much does spray foam contractor insurance cost?',
              a: 'Premiums vary based on your annual revenue, number of employees, claims history, states you operate in, and coverage limits. General liability for SPF contractors typically starts around $2,500–$5,000/year. Workers\' comp rates vary significantly by state and payroll. Contact us for a free quote tailored to your operation.',
            },
            {
              q: 'Does standard general liability cover overspray damage?',
              a: 'Most standard GL policies have exclusions or limitations for overspray incidents, which is one of the most common claims for spray foam contractors. Our specialized SPF-specific policies include overspray coverage as a standard feature, protecting you when wind or application errors cause damage to neighboring properties or vehicles.',
            },
            {
              q: 'Are there specific insurance requirements for spray foam contractors?',
              a: 'Yes. Many general contractors and project owners require SPF subcontractors to carry at least $1M/$2M general liability. Some states require workers\' comp for even one employee. Certain projects require environmental liability or surety bonds. We\'ll help you meet any certificate of insurance (COI) requirements.',
            },
            {
              q: 'How quickly can I get a certificate of insurance?',
              a: 'Once your policy is bound, we can issue certificates of insurance (COIs) the same day — often within hours. We know contractors often need proof of insurance to start a job, so we make this process as fast as possible.',
            },
          ]}
        />
      </section>

      <CTABar />
    </>
  );
}
