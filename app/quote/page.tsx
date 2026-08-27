import type { Metadata } from 'next';
import CTABar from '@/components/CTABar';
import QuotePageForm from '@/components/QuotePageForm';

export const metadata: Metadata = {
  title: 'Get a Spray Foam Insurance Quote | Fast, Free, Specialized',
  description:
    'Get your free spray foam insurance quote in minutes. General liability, workers comp, commercial auto, rig coverage. Specialists in SPF contractor insurance.',
  keywords: [
    'spray foam insurance quote',
    'SPF contractor insurance quote',
    'free spray foam insurance quote',
    'spray foam liability quote',
  ],
  openGraph: {
    title: 'Get a Spray Foam Insurance Quote',
    description: 'Free, fast spray foam contractor insurance quotes from specialists.',
    type: 'website',
  },
};

export default function QuotePage() {
  return (
    <>
      <section className="bg-background pt-24 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="label-text text-[#29c4a9] font-label text-sm block mb-3">
            Free &amp; No Obligation
          </span>
          <h1 className="font-headline text-4xl font-bold text-text mb-6">
            Get Your Spray Foam Insurance Quote
          </h1>
          <div className="space-y-4 font-label text-muted leading-relaxed">
            <p>
              Tell us how your operation actually runs — crew size, rigs, the chemicals you
              spray, and the states you work in — and we will match it to coverage built for
              spray foam contractors. No generic small-business policy with exclusions you find
              out about after a claim.
            </p>
            <p>
              Spray foam is all we write. That means we already know the underwriting questions
              your carrier will ask, which exclusions matter on an SPF job, and how to get a
              certificate issued the same day so a general contractor never holds up your start.
            </p>
          </div>

          <h2 className="font-headline text-xl font-bold text-text mt-8 mb-3">What Happens Next</h2>
          <ol className="list-decimal list-inside space-y-2 text-muted font-label">
            <li>
              <span className="font-semibold text-text">You send the details:</span> the form
              below takes a few minutes — no account, no obligation.
            </li>
            <li>
              <span className="font-semibold text-text">We shop A-rated carriers:</span> a
              specialist reviews your operation and quotes it across multiple carriers rather
              than one appetite.
            </li>
            <li>
              <span className="font-semibold text-text">You review the options:</span> we walk
              through what is covered, what is excluded, and what it costs — then you decide.
            </li>
          </ol>

          <h2 className="font-headline text-xl font-bold text-text mt-8 mb-3">
            Why Contractors Come To Us
          </h2>
          <ul className="list-disc list-inside space-y-2 text-muted font-label">
            <li>
              <span className="font-semibold text-text">SPF-only focus:</span> we are not
              learning your trade on your policy.
            </li>
            <li>
              <span className="font-semibold text-text">A-rated carrier access:</span> multiple
              markets competing for your business instead of a single quote.
            </li>
            <li>
              <span className="font-semibold text-text">Same-day certificates:</span> COIs issued
              the day you bind, so a missing certificate never costs you a job start.
            </li>
            <li>
              <span className="font-semibold text-text">Licensed in all 50 states:</span> your
              coverage travels with your crews.
            </li>
          </ul>

          <h2 className="font-headline text-xl font-bold text-text mt-8 mb-3">Start Below</h2>
          <p className="text-muted font-label leading-relaxed">
            Complete the form for a free, no-obligation quote, or call{' '}
            <a href="tel:8449675247" className="text-primary font-semibold hover:text-accent">
              844-967-5247
            </a>{' '}
            to talk it through with a specialist. We respond within one business day.
          </p>
        </div>
      </section>

      {/* Sign Up Form */}
      <div className="max-w-3xl mx-auto my-12 px-4">
        <QuotePageForm />
      </div>

      <CTABar />
    </>
  );
}
