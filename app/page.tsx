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
      {/* VIDEO HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/images/hero-bg.webp"
          className="hero-video absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/videos/hero.webm" type="video/webm" />
          <source src="/assets/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(8,13,22,0.88) 0%, rgba(8,13,22,0.65) 50%, rgba(8,13,22,0.78) 100%)' }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="hero-badge inline-flex items-center gap-2 border border-primary/40 bg-primary/10 rounded-full px-4 py-1.5 mb-7">
              <span className="label-text text-primary font-label text-xs tracking-widest">
                SPECIALIZED INSURANCE FOR SPRAY FOAM CONTRACTORS
              </span>
            </div>

            {/* Headline */}
            <h1 className="hero-headline font-headline font-bold leading-tight mb-6">
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white">
                Protecting Your Business,
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl blue-gradient-text">
                One Spray at a Time
              </span>
            </h1>

            {/* Subtext */}
            <p className="hero-sub text-gray-300 font-body text-lg sm:text-xl mb-10 max-w-2xl leading-relaxed">
              Professional insurance coverage tailored specifically for spray foam insulation contractors.
              From general liability to rig &amp; equipment — we have you covered in all 50 states.
            </p>

            {/* CTAs */}
            <div className="hero-ctas flex flex-wrap gap-4 mb-14">
              <Link
                href="/quote/"
                className="inline-flex items-center gap-2 bg-[#2ea3f2] hover:bg-[#1a8fd4] text-white font-headline font-bold px-8 py-3.5 rounded text-base transition-all hover:shadow-[0_0_24px_rgba(46,163,242,0.45)] hover:scale-[1.02]"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:844-967-5247"
                className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white font-headline font-bold px-8 py-3.5 rounded text-base transition-all hover:bg-white/10"
              >
                <Phone className="w-5 h-5" />
                Call 844-967-5247
              </a>
            </div>

            {/* Stats bar */}
            <div className="hero-stats grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 pt-8">
              {[
                { value: '15+', label: 'Years Experience' },
                { value: '500+', label: 'Contractors Insured' },
                { value: '50', label: 'States Covered' },
                { value: 'A-Rated', label: 'Carrier Partners' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-headline font-bold blue-gradient-text leading-none mb-1">
                    {value}
                  </div>
                  <div className="text-gray-400 text-xs font-label label-text">{label}</div>
                </div>
              ))}
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
