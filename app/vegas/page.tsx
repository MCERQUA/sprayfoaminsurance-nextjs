import type { Metadata } from 'next';
import Image from 'next/image';
import CTABar from '@/components/CTABar';

export const metadata: Metadata = {
  title: 'Spray Foam Insurance Las Vegas & Nevada | 844-967-5247',
  description:
    'Spray foam contractor insurance in Las Vegas and throughout Nevada. General liability, workers comp, equipment coverage. Local specialists. Call 844-967-5247.',
};

const PREFIXES = ['Mr.', 'Mrs.', 'Ms.', 'Mx.', 'Miss', 'Dr.', 'Prof.'];

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
      <section className="bg-[#080d16] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto glass-card p-6 sm:p-8">
          <h2 className="font-headline text-xl font-bold text-white mb-6">Request Quote</h2>
          <form
            name="vegas-quote-request"
            method="POST"
            data-netlify="true"
            className="space-y-4"
          >
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">Prefix</label>
                <select className="w-full bg-[#080d16] border border-[#2ea3f2]/20 rounded-lg px-4 py-2.5 text-sm text-gray-100 focus:outline-none focus:border-[#2ea3f2]/60">
                  {PREFIXES.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">
                  First Name <span className="text-[#f59e0b]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="E.g. John"
                  className="w-full bg-[#080d16] border border-[#2ea3f2]/20 rounded-lg px-4 py-2.5 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-[#2ea3f2]/60"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">Company Name</label>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full bg-[#080d16] border border-[#2ea3f2]/20 rounded-lg px-4 py-2.5 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-[#2ea3f2]/60"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">Middle Name</label>
                <input
                  type="text"
                  placeholder="E.g. Smith"
                  className="w-full bg-[#080d16] border border-[#2ea3f2]/20 rounded-lg px-4 py-2.5 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-[#2ea3f2]/60"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">
                  Last Name <span className="text-[#f59e0b]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="E.g. Doe"
                  className="w-full bg-[#080d16] border border-[#2ea3f2]/20 rounded-lg px-4 py-2.5 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-[#2ea3f2]/60"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">
                  Phone Number <span className="text-[#f59e0b]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="E.g. +1 3004005000"
                  className="w-full bg-[#080d16] border border-[#2ea3f2]/20 rounded-lg px-4 py-2.5 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-[#2ea3f2]/60"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">
                  Email Address <span className="text-[#f59e0b]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="E.g. john@doe.com"
                  className="w-full bg-[#080d16] border border-[#2ea3f2]/20 rounded-lg px-4 py-2.5 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-[#2ea3f2]/60"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1.5">Additional notes</label>
              <textarea
                rows={4}
                maxLength={180}
                className="w-full bg-[#080d16] border border-[#2ea3f2]/20 rounded-lg px-4 py-2.5 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-[#2ea3f2]/60 resize-none"
              />
              <p className="text-right text-xs text-gray-600 mt-1">0 / 180</p>
            </div>

            <button
              type="submit"
              className="primary-btn px-8 py-3 rounded-lg text-sm font-semibold font-label"
            >
              Request Quote
            </button>
          </form>
        </div>
      </section>

      <CTABar />
    </>
  );
}
