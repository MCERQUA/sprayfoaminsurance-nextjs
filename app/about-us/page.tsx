import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import CTABar from '@/components/CTABar';
import GlassCard from '@/components/GlassCard';
import StatBar from '@/components/StatBar';
import FAQSection from '@/components/FAQSection';
import { CheckCircle, Award, Users, Shield, Zap } from 'lucide-react';
import { aboutFaqs } from '@/lib/faqs';

export const metadata: Metadata = {
  title: 'About Spray Foam Insurance | SPF Coverage Specialists',
  description: 'Spray Foam Insurance — SPF contractor coverage specialists since 2009. Serving contractors in all 50 states with tailored GL, workers comp, and specialty programs.',
  alternates: { canonical: 'https://sprayfoaminsurance.com/about-us' },
};

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        title="About Spray Foam Insurance"
        subtitle="We built the first insurance program designed exclusively for spray polyurethane foam contractors — because generic coverage wasn't enough."
        ctaText="Get a Quote"
        ctaHref="/quote"
        badge="Our Story"
      />

      <StatBar
        stats={[
          { value: '500+', label: 'Contractors Insured' },
          { value: '15+', label: 'Years SPF Focus' },
          { value: '50', label: 'States Covered' },
          { value: 'A+', label: 'Carrier Ratings' },
        ]}
      />

      <section className="bg-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="label-text">OUR MISSION</span>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-text mt-3 mb-6">
                Spray Foam Insurance Was Built For You
              </h2>
              <div className="space-y-4 font-label text-muted leading-relaxed">
                <p>
                  Spray Foam Insurance was founded with a single mission: to make specialized, reliable insurance accessible to every spray polyurethane foam contractor in America. We saw too many SPF professionals being underserved by generic policies that excluded their most common risks.
                </p>
                <p>
                  Our founder, Josh Cotner, spent years working alongside contractors and insurance carriers to understand exactly where standard policies fell short. From overspray exclusions to workers&apos; comp misclassifications, the gaps were real — and costly.
                </p>
                <p>
                  Today we serve hundreds of spray foam contractors across all 50 states, from owner-operators running a single rig to multi-crew commercial operations. Every client gets the same dedicated service: custom quotes, fast certificates, and an advocate in their corner at claim time.
                </p>
              </div>
            </div>
            <div>
              <Image
                src="/assets/images/josh-cotner.webp"
                alt="Josh Cotner - Spray Foam Insurance Specialist"
                width={400}
                height={500}
                className="rounded-xl object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface border-y border-primary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-text">
              Why We Focus Exclusively on Spray Foam
            </h2>
          </div>
          <div className="max-w-3xl mx-auto mb-12">
            <GlassCard>
              <p className="text-muted font-label text-sm leading-relaxed">
                Most insurance agents sell dozens of different types of coverage across many industries. We don&apos;t. We focus exclusively on spray polyurethane foam contractors because we believe specialization leads to better outcomes. We know the SPFA standards, the OSHA regulations, the common exclusions that catch contractors off guard, and the carriers that price SPF risk fairly.
              </p>
            </GlassCard>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-headline font-bold text-text mb-2">Industry Expertise</h3>
                <p className="text-muted font-label text-sm leading-relaxed">
                  We speak SPF. We know A-side from B-side, proportioner ratios, and the difference between open-cell and closed-cell risk profiles.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-headline font-bold text-text mb-2">No Coverage Gaps</h3>
                <p className="text-muted font-label text-sm leading-relaxed">
                  We&apos;ve mapped every common exclusion in standard policies and built programs that close them. You&apos;re covered where it matters most.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-headline font-bold text-text mb-2">Contractor Advocates</h3>
                <p className="text-muted font-label text-sm leading-relaxed">
                  When you have a claim, we go to bat for you. We don&apos;t just hand you a policy and disappear.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-headline font-bold text-text mb-2">Fast Service</h3>
                <p className="text-muted font-label text-sm leading-relaxed">
                  Quotes within 24 hours. Certificates same day. We know contractors move fast and we match that speed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <GlassCard>
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <CheckCircle className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-headline font-bold text-base text-text mb-2">SPFA Member</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                Active member of the Spray Polyurethane Foam Alliance.
              </p>
            </GlassCard>
            <GlassCard>
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <CheckCircle className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-headline font-bold text-base text-text mb-2">A-Rated Carriers</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                We only place coverage with financially stable, A-rated carriers.
              </p>
            </GlassCard>
            <GlassCard>
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <CheckCircle className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-headline font-bold text-base text-text mb-2">Licensed Nationwide</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                Licensed to place insurance in all 50 states.
              </p>
            </GlassCard>
            <GlassCard>
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <CheckCircle className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-headline font-bold text-base text-text mb-2">5-Star Service</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                Dedicated account management for every client.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-headline text-3xl font-bold text-text text-center mb-10">
            Frequently Asked Questions
          </h2>
          <FAQSection items={aboutFaqs} />
        </div>
      </section>

      <CTABar />
    </>
  );
}
