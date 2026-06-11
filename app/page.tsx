import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, Users, Truck, Leaf, FileText, Wrench, CheckCircle, Phone, ArrowRight, Star, Clock, Award, Zap, BookOpen, Quote } from 'lucide-react';
import FAQSection from '@/components/FAQSection';
import CTABar from '@/components/CTABar';
import TrustBar from '@/components/TrustBar';
import HowItWorks from '@/components/HowItWorks';
import SameDayCOI from '@/components/SameDayCOI';
import QuoteFormSection from '@/components/QuoteFormSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import WhoWeServe from '@/components/WhoWeServe';
import CoverageMap from '@/components/CoverageMap';
import { homepageFaqs } from '@/lib/faqs';

export const metadata: Metadata = {
  title: 'Spray Foam Insurance | Specialized SPF Contractor Coverage',
  description: 'Specialized insurance for spray foam contractors. General liability, workers comp, commercial auto, environmental & surety bonds. Free quotes available.',
};

export default function HomePage() {
  return (
    <>
      {/* Global Organization/WebSite JSON-LD lives in layout (components/JsonLd.tsx).
          The homepage FAQ emits its own FAQPage schema via FAQSection. */}

      {/* ─── SECTION 1: VIDEO HERO (untouched) ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/images/hero-poster.webp"
          className="hero-video absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/videos/hero.webm" type="video/webm" />
          <source src="/assets/videos/hero.mp4" type="video/mp4" />
        </video>

        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(8,13,22,0.88) 0%, rgba(8,13,22,0.65) 50%, rgba(8,13,22,0.78) 100%)' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="max-w-3xl">
            <div className="hero-badge inline-flex items-center gap-2 border border-primary/40 bg-primary/10 rounded-full px-4 py-1.5 mb-7">
              <span className="label-text text-primary font-label text-xs tracking-widest">
                SPECIALIZED INSURANCE FOR SPRAY FOAM CONTRACTORS
              </span>
            </div>

            <h1 className="hero-headline font-headline font-bold leading-tight mb-6">
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white">
                Protecting Your Business,
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl blue-gradient-text">
                One Spray at a Time
              </span>
            </h1>

            <p className="hero-sub text-gray-300 font-body text-lg sm:text-xl mb-10 max-w-2xl leading-relaxed">
              Professional insurance coverage tailored specifically for spray foam insulation contractors.
              From general liability to rig &amp; equipment — we have you covered in all 50 states.
            </p>

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

      {/* ─── TRUST BAR — credibility strip under hero ─── */}
      <TrustBar />

      {/* ─── SECTION 2: SERVICES — blue gradient background ─── */}
      <section className="blue-gradient-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="label-text text-[#29c4a9] font-label text-sm block mb-3">Comprehensive Protection</span>
            <h2 className="font-headline font-bold text-3xl sm:text-4xl text-white">Core Coverages</h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto">Every policy is built around the unique risks of the spray foam industry.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'General Liability',
                description: 'Protection against third-party bodily injury, property damage, and overspray incidents specific to SPF operations.',
                href: '/services/general-liability-insurance',
                icon: Shield,
                color: 'text-[#2ea3f2]',
                bg: 'bg-[#2ea3f2]/10',
                border: 'border-t-[#2ea3f2]',
              },
              {
                title: "Workers' Compensation",
                description: 'Coverage for your crew in case of on-the-job injuries including chemical exposure from isocyanates and other SPF chemicals.',
                href: '/services/workers-compensation-insurance-for-spray-foam-contractors',
                icon: Users,
                color: 'text-[#29c4a9]',
                bg: 'bg-[#29c4a9]/10',
                border: 'border-t-[#29c4a9]',
              },
              {
                title: 'Commercial Auto',
                description: 'Vehicle coverage for your spray foam rigs, box trucks, and company vehicles against accidents, theft, and liability.',
                href: '/services/commercial-auto',
                icon: Truck,
                color: 'text-[#2ea3f2]',
                bg: 'bg-[#2ea3f2]/10',
                border: 'border-t-[#2ea3f2]',
              },
              {
                title: 'Environmental Liability',
                description: 'Pollution coverage for chemical spills, overspray contamination, off-gassing claims, and environmental remediation costs.',
                href: '/services/environmental-liability',
                icon: Leaf,
                color: 'text-[#29c4a9]',
                bg: 'bg-[#29c4a9]/10',
                border: 'border-t-[#29c4a9]',
              },
              {
                title: 'Surety Bonds',
                description: 'Performance, payment, and license bonds required to bid on public contracts and meet state licensing requirements.',
                href: '/services/surety-bonds',
                icon: FileText,
                color: 'text-[#f59e0b]',
                bg: 'bg-[#f59e0b]/10',
                border: 'border-t-[#f59e0b]',
              },
              {
                title: 'Rig & Equipment Insurance',
                description: 'Specialized inland marine coverage for your proportioner, generator, spray rig, and mobile equipment on-site and in transit.',
                href: '/inland-marine',
                icon: Wrench,
                color: 'text-[#2ea3f2]',
                bg: 'bg-[#2ea3f2]/10',
                border: 'border-t-[#2ea3f2]',
              },
            ].map(({ title, description, href, icon: Icon, color, bg, border }) => (
              <Link
                key={title}
                href={href}
                className={`group block bg-[#0a1628]/80 border-t-2 ${border} rounded-xl p-6 hover:bg-[#0e2040]/90 transition-all hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(46,163,242,0.15)]`}
              >
                <div className={`w-11 h-11 rounded-full ${bg} flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <h3 className="font-headline font-semibold text-white text-lg mb-2 group-hover:text-[#2ea3f2] transition-colors">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
                <div className={`mt-4 flex items-center gap-1 text-sm font-semibold ${color} opacity-0 group-hover:opacity-100 transition-opacity`}>
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS — 3-step process (right after Services) ─── */}
      <HowItWorks />

      {/* ─── WHY CHOOSE US — personal touch / expertise / 24-7 ─── */}
      <WhyChooseUs />

      {/* ─── WHO WE SERVE — applicator/operation types ─── */}
      <WhoWeServe />

      {/* ─── SECTION 3: TRUSTED ALLY — dark with Josh photo ─── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: '#080d16' }}
      >
        {/* Subtle blue left-side glow */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(46,163,242,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: text */}
            <div className="relative z-10">
              <span className="label-text text-[#29c4a9] font-label text-sm block mb-3">Your Industry Expert</span>
              <h2 className="font-headline font-bold text-3xl sm:text-4xl text-white mb-5">
                Your Industry&apos;s<br />
                <span className="blue-gradient-text">Trusted Ally</span>
              </h2>
              <p className="text-gray-400 text-base leading-relaxed mb-8">
                We don&apos;t just offer insurance — we understand the spray foam industry inside out. With 15+ years of experience, we&apos;ve gained a distinct advantage in serving your needs.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: Award, text: 'Specialist knowledge of SPF risks, exclusions, and underwriting nuances' },
                  { icon: Shield, text: 'Access to A-rated carriers with competitive rates for foam contractors' },
                  { icon: Zap, text: 'Same-day certificates of insurance — never miss a job start' },
                  { icon: Clock, text: '24/7 support and dedicated claims advocacy when it matters most' },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2ea3f2]/15 flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-4 h-4 text-[#2ea3f2]" />
                    </span>
                    <span className="text-gray-300 text-sm leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link
                  href="/quote/"
                  className="inline-flex items-center gap-2 bg-[#2ea3f2] hover:bg-[#1a8fd4] text-white font-headline font-bold px-7 py-3 rounded text-sm transition-all hover:shadow-[0_0_20px_rgba(46,163,242,0.4)]"
                >
                  Get Your Free Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: Josh photo */}
            <div className="relative z-10 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glow ring behind photo */}
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(46,163,242,0.25) 0%, transparent 70%)',
                    filter: 'blur(20px)',
                    transform: 'scale(1.08)',
                  }}
                />
                <div className="relative rounded-2xl overflow-hidden border-2 border-[#2ea3f2]/30 shadow-[0_0_40px_rgba(46,163,242,0.2)] bg-gradient-to-b from-[#0d1421] to-[#080d16]">
                  <Image
                    src="/assets/images/josh-clean.webp"
                    alt="Josh Cotner — Spray Foam Insurance specialist"
                    width={480}
                    height={560}
                    className="object-contain w-full max-w-sm lg:max-w-md"
                  />
                  {/* Name badge overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#080d16] via-[#080d16]/70 to-transparent px-6 py-5">
                    <p className="font-headline font-bold text-white text-lg">Josh Cotner</p>
                    <p className="text-[#2ea3f2] text-sm font-label label-text">Founder &amp; Lead Specialist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: BEYOND POLICIES — wireframe sprayer background ─── */}
      <section className="particle-bg py-24 relative">
        {/* Signature blue wireframe contractor — the original site's hero image */}
        <Image
          src="/assets/images/wireframe-sprayer.jpg"
          alt="Spray foam contractor — wireframe illustration"
          fill
          className="object-cover object-right opacity-30 pointer-events-none"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(90deg, #030b18 0%, rgba(3,11,24,0.85) 45%, rgba(3,11,24,0.55) 100%)' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <span className="label-text text-[#29c4a9] font-label text-sm block mb-3">We&apos;re Here For You</span>
            <h2 className="font-headline font-bold text-3xl sm:text-5xl text-white mb-3">
              Beyond Policies:
            </h2>
            <h2 className="font-headline font-bold text-3xl sm:text-5xl blue-gradient-text">
              Your Industry&apos;s True Support
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: 'Tailored Coverage Plans',
                desc: 'Every policy is built around your specific operation — rig size, crew, chemicals used, and states you work in.',
                color: 'text-[#2ea3f2]',
                bg: 'bg-[#2ea3f2]/15',
              },
              {
                icon: BookOpen,
                title: 'Risk Management Resources',
                desc: 'Access guides, checklists, and safety materials designed specifically for spray foam operations.',
                color: 'text-[#29c4a9]',
                bg: 'bg-[#29c4a9]/15',
              },
              {
                icon: Phone,
                title: 'Claims Assistance',
                desc: 'We advocate for your settlement and walk you through every step of the claims process.',
                color: 'text-[#f59e0b]',
                bg: 'bg-[#f59e0b]/15',
              },
              {
                icon: Award,
                title: 'Industry Expertise',
                desc: '15+ years working exclusively with spray foam contractors means we speak your language and know your risks.',
                color: 'text-[#2ea3f2]',
                bg: 'bg-[#2ea3f2]/15',
              },
            ].map(({ icon: Icon, title, desc, color, bg }) => (
              <div
                key={title}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-full ${bg} flex items-center justify-center mb-5`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <h3 className="font-headline font-semibold text-white text-lg mb-3">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SAME-DAY COI — amber feature band ─── */}
      <SameDayCOI />

      {/* ─── COVERAGE MAP — all 50 states ─── */}
      <CoverageMap />

      {/* ─── SECTION 5: TESTIMONIALS — WHITE background (contrast break) ─── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero testimonial */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Quote className="w-12 h-12 text-[#29c4a9] mx-auto mb-6" />
            <p className="text-gray-800 text-xl sm:text-2xl font-body leading-relaxed mb-8">
              &ldquo;Josh is knowledgeable about what needs there are for us as spray foam contractors, and super helpful in taking care of anything we need in a timely manner. I would definitely recommend Josh and Spray Foam Insurance to any foam contractor out there!&rdquo;
            </p>
            <div className="flex items-center justify-center gap-3">
              <Image
                src="/assets/images/integrity-plus.webp"
                alt="Integrity Plus Insulation"
                width={60}
                height={60}
                className="rounded-full object-cover border-2 border-[#29c4a9]/30"
              />
              <div className="text-left">
                <p className="font-headline font-bold text-gray-900">Eric Gladson</p>
                <p className="text-gray-500 text-sm">O/O – Integrity Plus Insulation LLC</p>
              </div>
            </div>
          </div>

          {/* Star ratings grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: 'Same-day COIs every single time. Saved us from losing a major contract. Josh is the best.',
                name: 'Marcus T.',
                role: 'Owner, Summit Spray Foam',
              },
              {
                quote: 'Finally found someone who actually understands spray foam insurance. No generic policies — real coverage for real risks.',
                name: 'Danielle R.',
                role: 'Operations Manager, ProFoam LLC',
              },
              {
                quote: 'When we had a claim, Josh was on the phone with us immediately. The whole process was smooth and professional.',
                name: 'Brian K.',
                role: 'Owner, Glacier Insulation Co.',
              },
            ].map(({ quote, name, role }) => (
              <div key={name} className="bg-gray-50 border border-gray-100 rounded-xl p-6">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">&ldquo;{quote}&rdquo;</p>
                <div>
                  <p className="font-headline font-semibold text-gray-900 text-sm">{name}</p>
                  <p className="text-gray-400 text-xs">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: PHOTO CTA — wireframe handshake ─── */}
      <section className="photo-section relative py-32" style={{ background: '#030b18' }}>
        <Image
          src="/assets/images/wireframe-handshake.webp"
          alt="Partnership — spray foam insurance support"
          fill
          className="object-cover object-left opacity-50"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(270deg, #030b18 0%, rgba(3,11,24,0.80) 50%, rgba(3,11,24,0.5) 100%)', zIndex: 1 }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <span className="label-text text-[#2ea3f2] text-sm mb-4 block">Insurance Excellence</span>
          <h2 className="font-headline font-bold text-4xl sm:text-5xl text-white mb-6">
            Tailored Solutions And Peace Of Mind,<br />
            For Your Spray Foam Business
          </h2>
          <Link
            href="/services/"
            className="inline-flex items-center gap-2 bg-[#2ea3f2] hover:bg-[#1a8fd4] text-white font-bold px-8 py-4 rounded text-lg transition-all hover:shadow-[0_0_24px_rgba(46,163,242,0.5)]"
          >
            View More Services
          </Link>
        </div>
      </section>

      {/* ─── QUOTE FORM — inline lead capture ─── */}
      <QuoteFormSection />

      {/* ─── SECTION 7: FAQ — dark background ─── */}
      <section className="py-24" style={{ background: '#080d16' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="label-text text-[#29c4a9] font-label text-sm block mb-3">Got Questions?</span>
            <h2 className="font-headline font-bold text-3xl sm:text-4xl text-white">Frequently Asked Questions</h2>
          </div>
          <FAQSection items={homepageFaqs} />
        </div>
      </section>

      {/* ─── SECTION 8: CTA BAR ─── */}
      <CTABar />
    </>
  );
}
