import type { Metadata } from 'next';
import FormCard from '@/components/FormCard';
import CTABar from '@/components/CTABar';
import { ArrowRight } from 'lucide-react';

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

const inputBase =
  'w-full bg-background border border-primary/20 rounded-lg px-4 py-2.5 text-text text-sm focus:outline-none focus:border-primary/50 placeholder:text-muted';

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
        <FormCard title="Sign Up Form">
          <div className="mb-4">
            <label className="block text-sm font-label font-semibold text-text mb-1.5">Business Name</label>
            <input type="text" placeholder="E.g. text placeholder" className={inputBase} />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-sm font-label font-semibold text-text mb-1.5">First Name *</label>
              <input type="text" required placeholder="E.g. John" className={inputBase} />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-label font-semibold text-text mb-1.5">Last Name</label>
              <input type="text" placeholder="E.g. Doe" className={inputBase} />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-sm font-label font-semibold text-text mb-1.5">Email Address *</label>
              <input type="email" required placeholder="E.g. john@doe.com" className={inputBase} />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-label font-semibold text-text mb-1.5">Phone Number *</label>
              <input type="tel" required placeholder="E.g. +1 3004005000" className={inputBase} />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-label font-semibold text-text mb-1.5">Street Address *</label>
            <input type="text" required placeholder="E.g. 42 Wallaby Way" className={inputBase} />
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="mb-4">
              <label className="block text-sm font-label font-semibold text-text mb-1.5">City *</label>
              <input type="text" required placeholder="E.g. Sydney" className={inputBase} />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-label font-semibold text-text mb-1.5">State/Province *</label>
              <input type="text" required placeholder="E.g. New South Wales" className={inputBase} />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-label font-semibold text-text mb-1.5">ZIP / Postal Code *</label>
              <input type="text" required placeholder="E.g. 2000" className={inputBase} />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-label font-semibold text-text mb-1.5">Message</label>
            <textarea
              rows={3}
              maxLength={180}
              placeholder="Please let us know how we can help you best. Tell us about your business-are you only doing spray foam insulation, roofing, slab jacking? What percent new versus remodel? What percent commercial versus residential? What price do we need to beat?"
              className={inputBase + ' resize-none'}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-label font-semibold text-text mb-1.5">FEIN</label>
            <input type="text" placeholder="Helps us shop more carriers. Required for Workers Compensation Insurance quotes." className={inputBase} />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-sm font-label font-semibold text-text mb-1.5">Gross Sales</label>
              <input type="text" placeholder="Estimate Next 12 Months" className={inputBase} />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-label font-semibold text-text mb-1.5">Employee count</label>
              <input type="text" placeholder="E.g. 10" className={inputBase} />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-sm font-label font-semibold text-text mb-1.5">Employee Payroll</label>
              <input type="text" placeholder="Estimate Next 12 Months" className={inputBase} />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-label font-semibold text-text mb-1.5">Subcontractor expenses</label>
              <input type="text" placeholder="Estimate Next 12 Months" className={inputBase} />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-label font-semibold text-text mb-1.5">Material Costs</label>
            <input type="text" placeholder="Estimate Next 12 Months" className={inputBase} />
          </div>

          <div className="mb-6">
            <p className="text-sm font-label font-semibold text-text mb-1">How much Spray Foam General Liability Insurance coverage?</p>
            <p className="text-xs text-muted mb-2">Select the amount of spray foam insurance coverage you are looking for.</p>
            <div className="space-y-2">
              {['$500,000/$1,000,000', '$1,000,000/$1,000,000', '$1,000,000/$2,000,000', 'Not Needed'].map((opt) => (
                <label key={opt} className="flex items-center gap-2 text-sm text-muted cursor-pointer">
                  <input type="radio" name="gl_amount" className="accent-primary" />
                  {opt}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <p className="text-sm font-label font-semibold text-text mb-1">
              Workers Compensation Insurance for Your Spray Foam Installers and Other Employees
            </p>
            <p className="text-xs text-muted mb-2">Select the amount of spray foam workers comp coverage you would like quoted.</p>
            <div className="space-y-2">
              {['$100,000', '$500,000', '$1,000,000', 'Not Needed'].map((opt) => (
                <label key={opt} className="flex items-center gap-2 text-sm text-muted cursor-pointer">
                  <input type="radio" name="wc_amount" className="accent-primary" />
                  {opt}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <p className="text-sm font-label font-semibold text-text mb-1">Commercial Auto Insurance for Your Spray Rig</p>
            <p className="text-xs text-muted mb-2">
              Please text a picture of your drivers license, current auto policy info, vin
              number/registration to 480-381-8949 or email
              josh@contractorschoiceagency.tempurl.host.
            </p>
            <div className="space-y-2">
              {['$100,000', '$500,000', '$1,000,000', 'Not Needed'].map((opt) => (
                <label key={opt} className="flex items-center gap-2 text-sm text-muted cursor-pointer">
                  <input type="radio" name="auto_amount" className="accent-primary" />
                  {opt}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <p className="text-sm font-label font-semibold text-text mb-1">Spray Foam Surety Bond</p>
            <p className="text-xs text-muted mb-2">There are many different surety amounts if you don&apos;t see what you need call or email.</p>
            <div className="space-y-2">
              {['$5,000', '$10,000', '$100,000'].map((opt) => (
                <label key={opt} className="flex items-center gap-2 text-sm text-muted cursor-pointer">
                  <input type="radio" name="surety_amount" className="accent-primary" />
                  {opt}
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="amber-cta w-full py-4 rounded-full font-label font-bold text-lg flex items-center justify-center gap-2"
          >
            Send Message
            <ArrowRight className="w-5 h-5" />
          </button>
        </FormCard>
      </div>

      <CTABar />
    </>
  );
}
