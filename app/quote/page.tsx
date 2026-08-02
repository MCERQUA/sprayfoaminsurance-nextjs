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
          <h1 className="font-headline text-4xl font-bold text-text mb-6">
            Join The Spray Foam Insurance Family
          </h1>
          <div className="space-y-4 font-label text-muted leading-relaxed">
            <p>
              Your journey with Spray Foam Insurance is more than just obtaining an insurance
              quote; it&apos;s an invitation to an exclusive community. By signing up, you&apos;re
              gaining entry into a close-knit circle of professionals who share your passion and
              dedication. Welcome to a space where support, expertise, and a sense of belonging
              come together. Let&apos;s start protecting your business together.
            </p>
            <p>
              At Spray Foam Insurance, we make it easy to get the insurance coverage you need.
              Whether you&apos;re looking for auto, home, life, business, or any specialized
              insurance, our team is here to provide you with a personalized quote that fits your
              needs and budget.
            </p>
          </div>

          <h2 className="font-headline text-xl font-bold text-text mt-8 mb-3">How It Works</h2>
          <ol className="list-decimal list-inside space-y-2 text-muted font-label">
            <li>
              <span className="font-semibold text-text">Submit Your Information:</span> Fill out
              the simple form below with your details and the type of insurance coverage
              you&apos;re looking for.
            </li>
            <li>
              <span className="font-semibold text-text">Receive Your Quote:</span> One of our
              experienced agents will review your information and provide you with a customized
              quote.
            </li>
            <li>
              <span className="font-semibold text-text">Review &amp; Decide:</span> We&apos;ll
              walk you through the options and help you choose the best coverage to protect what
              matters most.
            </li>
          </ol>

          <h2 className="font-headline text-xl font-bold text-text mt-8 mb-3">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-2 text-muted font-label">
            <li>
              <span className="font-semibold text-text">Expert Guidance:</span> Our knowledgeable
              agents are here to help you find the right coverage.
            </li>
            <li>
              <span className="font-semibold text-text">Customized Plans:</span> We tailor each
              policy to meet your specific needs.
            </li>
            <li>
              <span className="font-semibold text-text">Competitive Rates:</span> Get affordable
              coverage without compromising on protection.
            </li>
            <li>
              <span className="font-semibold text-text">Fast &amp; Easy Process:</span> We make
              getting a quote simple and stress-free.
            </li>
          </ul>

          <h2 className="font-headline text-xl font-bold text-text mt-8 mb-3">Get Your Quote Today!</h2>
          <p className="text-muted font-label leading-relaxed">
            To receive your free, no-obligation quote, please complete the form below or contact
            us directly at{' '}
            <a href="tel:8449675247" className="text-primary font-semibold hover:text-accent">
              844-967-5247
            </a>{' '}
            to speak with one of our agents. Our team will get back to you within 24 hours with
            your personalized insurance quote. We&apos;re here to help you every step of the way!
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
