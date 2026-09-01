import type { Metadata } from 'next';
import Image from 'next/image';
import CTABar from '@/components/CTABar';
import VegasQuoteForm from '@/components/VegasQuoteForm';

export const metadata: Metadata = {
  title: 'Spray Foam Insurance Las Vegas & Nevada | 844-967-5247',
  description:
    'Spray foam contractor insurance in Las Vegas and throughout Nevada. General liability, workers comp, equipment coverage. Local specialists. Call 844-967-5247.',
};

export default function VegasPage() {
  return (
    <>
      {/* Hero — Vegas signage image with logo overlay, matches live capture */}
      <section className="relative min-h-[420px] flex items-center justify-center overflow-hidden bg-[#06216b]">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/assets/images/hero-bg.webp"
            alt="Las Vegas"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 py-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-label font-semibold label-text mb-6">
            LAS VEGAS
          </span>
          <h1 className="text-4xl sm:text-5xl font-headline font-bold blue-gradient-text">
            Spray Foam Insurance — Las Vegas
          </h1>
        </div>
      </section>

      {/* Quote request form — mirrors the live Vegas landing-page form fields */}
      <section className="bg-[#f4f7fb] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto glass-card p-6 sm:p-8">
          <VegasQuoteForm />
        </div>
      </section>

      <CTABar />
    </>
  );
}
