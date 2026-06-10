import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTABar from '@/components/CTABar';
import FAQSection from '@/components/FAQSection';
import GlassCard from '@/components/GlassCard';
import FormCard from '@/components/FormCard';
import { Clock, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Spray Foam Insurance | 844-967-5247',
  description: 'Contact our spray foam insurance specialists. Call 844-967-5247 or send us a message. GL, workers comp, and equipment coverage quotes available.',
  keywords: ['contact spray foam insurance', '844-967-5247', 'spray foam insurance agent', 'SPF insurance quote'],
  openGraph: {
    title: 'Contact Spray Foam Insurance | 844-967-5247',
    description: 'Get in touch with our spray foam insurance specialists. Fast response guaranteed.',
    type: 'website',
  },
};

const coverages = [
  'General Liability',
  'Workers Compensation',
  'Commercial Auto',
  'Inland Marine / Rig Insurance',
  'Environmental Liability',
  'Surety Bonds',
];

const faqs = [
  {
    q: 'How quickly can I get a quote?',
    a: 'Most spray foam contractors receive a quote within 1 business day. Call 844-967-5247 for same-day quotes on straightforward risks.',
  },
  {
    q: 'Do you work in all 50 states?',
    a: 'Yes — we provide spray foam insurance across all 50 states. Contact us to confirm availability of specialty coverages in your area.',
  },
  {
    q: 'Can I get a certificate of insurance same day?',
    a: 'Certificates for existing policies are typically issued within 1–2 hours during business hours. New policy certificates may take 1 business day.',
  },
  {
    q: 'Do you insure new contractors with no prior coverage?',
    a: "Yes — we work with contractors at all stages. New contractors may face slightly higher initial premiums but we'll find the best available rate.",
  },
  {
    q: 'What information do I need to get a quote?',
    a: 'Basic info needed: years in business, number of employees, annual revenue, states where you operate, and any prior claims history.',
  },
];

export default function ContactUsPage() {
  return (
    <>
      <PageHero
        title="Contact Spray Foam Insurance"
        subtitle="Our specialists are ready to help you find the right coverage. Most quotes delivered within 24 hours."
        badge="GET IN TOUCH"
        ctaText="Call 844-967-5247"
        ctaHref="tel:8449675247"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left column */}
          <div className="space-y-6">
            <GlassCard className="p-6">
              <p className="label-text text-accent text-xs mb-3">CALL US</p>
              <h3 className="font-headline font-bold text-text text-xl mb-2">Call Our Specialists</h3>
              <a
                href="tel:8449675247"
                className="text-3xl font-headline font-bold text-primary hover:text-accent transition-colors block mb-2"
              >
                844-967-5247
              </a>
              <p className="text-muted text-sm">Mon–Fri 8am–6pm CST</p>
            </GlassCard>

            <GlassCard className="p-6">
              <h3 className="font-headline font-bold text-text mb-3">Coverages We Handle</h3>
              {coverages.map((item) => (
                <div key={item} className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span className="text-muted text-sm">{item}</span>
                </div>
              ))}
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex items-start gap-4">
                <Clock className="w-8 h-8 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-headline font-bold text-text mb-2">Response Time</h3>
                  <p className="text-muted text-sm">Under 24 Hours — typical response</p>
                  <p className="text-muted text-sm">Same Business Day — for new quotes</p>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right column */}
          <FormCard title="Send Us a Message" subtitle="We'll respond within 1 business day.">
            <div className="mb-4">
              <label className="block text-sm font-label font-semibold text-text mb-1.5">Name</label>
              <input
                type="text"
                className="w-full bg-background border border-primary/20 rounded-lg px-4 py-2.5 text-text text-sm focus:outline-none focus:border-primary/50 placeholder:text-muted"
                placeholder="Your name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-label font-semibold text-text mb-1.5">Company Name</label>
              <input
                type="text"
                className="w-full bg-background border border-primary/20 rounded-lg px-4 py-2.5 text-text text-sm focus:outline-none focus:border-primary/50 placeholder:text-muted"
                placeholder="Your company name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-label font-semibold text-text mb-1.5">Phone</label>
              <input
                type="tel"
                className="w-full bg-background border border-primary/20 rounded-lg px-4 py-2.5 text-text text-sm focus:outline-none focus:border-primary/50 placeholder:text-muted"
                placeholder="(555) 000-0000"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-label font-semibold text-text mb-1.5">Email</label>
              <input
                type="email"
                className="w-full bg-background border border-primary/20 rounded-lg px-4 py-2.5 text-text text-sm focus:outline-none focus:border-primary/50 placeholder:text-muted"
                placeholder="you@company.com"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-label font-semibold text-text mb-1.5">Coverage Type</label>
              <select className="w-full bg-background border border-primary/20 rounded-lg px-4 py-2.5 text-text text-sm focus:outline-none focus:border-primary/50">
                <option value="">Select coverage type...</option>
                <option value="gl">General Liability</option>
                <option value="wc">Workers Comp</option>
                <option value="auto">Commercial Auto</option>
                <option value="inland">Inland Marine / Rig Insurance</option>
                <option value="env">Environmental Liability</option>
                <option value="surety">Surety Bonds</option>
                <option value="multiple">Multiple Coverages</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-label font-semibold text-text mb-1.5">Years in Business</label>
              <select className="w-full bg-background border border-primary/20 rounded-lg px-4 py-2.5 text-text text-sm focus:outline-none focus:border-primary/50">
                <option value="">Select years in business...</option>
                <option value="lt1">Less than 1 year</option>
                <option value="1-3">1–3 years</option>
                <option value="3-5">3–5 years</option>
                <option value="5-10">5–10 years</option>
                <option value="10plus">10+ years</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-label font-semibold text-text mb-1.5">Message</label>
              <textarea
                rows={5}
                className="w-full bg-background border border-primary/20 rounded-lg px-4 py-2.5 text-text text-sm focus:outline-none focus:border-primary/50 placeholder:text-muted"
                placeholder="Tell us about your coverage needs..."
              />
            </div>

            <button type="submit" className="primary-btn w-full py-3 rounded-full font-label font-semibold text-base">
              Send Message
            </button>
            <p className="text-xs text-muted text-center mt-3">Or call us directly: 844-967-5247</p>
          </FormCard>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="font-headline font-bold text-text text-2xl md:text-3xl text-center mb-8">
          Frequently Asked Questions
        </h2>
        <FAQSection items={faqs} />
      </div>

      <CTABar />
    </>
  );
}
