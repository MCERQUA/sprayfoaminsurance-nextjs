'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { CheckCircle, Shield, Clock, MapPin, Star } from 'lucide-react';

const US_STATES = [
  'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut',
  'Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa',
  'Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan',
  'Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire',
  'New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio',
  'Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota',
  'Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia',
  'Wisconsin','Wyoming',
];

const COVERAGE_OPTIONS = [
  { id: 'general-liability', label: 'General Liability' },
  { id: 'workers-comp', label: "Workers' Comp" },
  { id: 'commercial-auto', label: 'Commercial Auto' },
  { id: 'surety-bonds', label: 'Surety Bonds' },
  { id: 'environmental', label: 'Environmental' },
  { id: 'rig-equipment', label: 'Rig / Equipment' },
];

const TRUST_BULLETS = [
  { icon: Shield,  text: 'A-rated carriers — real financial strength' },
  { icon: Clock,   text: 'Same-day COIs issued within hours' },
  { icon: MapPin,  text: 'Licensed in all 50 states' },
  { icon: Star,    text: '15+ years SPF-only expertise' },
];

interface FormState {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  state: string;
  coverage: string[];
  message: string;
}

const EMPTY_FORM: FormState = {
  fullName: '',
  businessName: '',
  email: '',
  phone: '',
  state: '',
  coverage: [],
  message: '',
};

export default function QuoteFormSection() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleField(e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleCoverage(e: ChangeEvent<HTMLInputElement>) {
    const { value, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      coverage: checked
        ? [...prev.coverage, value]
        : prev.coverage.filter((v) => v !== value),
    }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    // TODO: wire to CRM/email endpoint
    // e.g. await fetch('/api/quote', { method: 'POST', body: JSON.stringify(form) });

    await new Promise((r) => setTimeout(r, 600)); // simulate latency
    setSubmitting(false);
    setSubmitted(true);
  }

  const inputBase =
    'w-full bg-[#080d16] border border-[#2ea3f2]/20 rounded-lg px-4 py-2.5 text-sm text-gray-100 ' +
    'placeholder-gray-500 focus:outline-none focus:border-[#2ea3f2]/60 focus:ring-1 focus:ring-[#2ea3f2]/30 transition-colors';

  return (
    <section className="blue-gradient-section py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <p className="label-text text-xs text-[#29c4a9] mb-3 tracking-widest">Free Quote</p>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── LEFT: headline + trust bullets ── */}
          <div className="lg:pt-4">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
              Get Coverage Built for{' '}
              <span className="blue-gradient-text">Spray Foam Pros</span>
            </h2>
            <p className="text-gray-400 text-base mb-10 leading-relaxed max-w-md">
              Fill out the form and a spray-foam insurance specialist will reach out within
              one business day — no pushy sales calls, just straight answers.
            </p>

            <ul className="space-y-5">
              {TRUST_BULLETS.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#2ea3f2]/10 border border-[#2ea3f2]/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#2ea3f2]" />
                  </span>
                  <span className="text-gray-300 text-sm leading-relaxed pt-2.5">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── RIGHT: form card ── */}
          <div className="glass-card p-6 sm:p-8">

            {submitted ? (
              /* ── Success state ── */
              <div className="flex flex-col items-center text-center py-8 gap-4">
                <CheckCircle className="w-14 h-14 text-[#29c4a9]" />
                <h3 className="font-headline text-xl font-bold text-white">You&apos;re all set!</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                  Thanks — we&apos;ll review your request and reach out within{' '}
                  <span className="text-[#2ea3f2] font-semibold">1 business day</span>.
                </p>
                <button
                  onClick={() => { setForm(EMPTY_FORM); setSubmitted(false); }}
                  className="mt-2 text-xs text-gray-500 hover:text-gray-300 underline transition-colors"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              /* ── Form ── */
              <form onSubmit={handleSubmit} noValidate>
                <h3 className="font-headline text-lg font-bold text-white mb-6">
                  Request Your Free Quote
                </h3>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="qf-fullName" className="block text-xs font-medium text-gray-400 mb-1.5">
                      Full Name <span className="text-[#f59e0b]">*</span>
                    </label>
                    <input
                      id="qf-fullName"
                      name="fullName"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Jane Smith"
                      value={form.fullName}
                      onChange={handleField}
                      className={inputBase}
                    />
                  </div>

                  {/* Business Name */}
                  <div>
                    <label htmlFor="qf-businessName" className="block text-xs font-medium text-gray-400 mb-1.5">
                      Business Name <span className="text-[#f59e0b]">*</span>
                    </label>
                    <input
                      id="qf-businessName"
                      name="businessName"
                      type="text"
                      required
                      autoComplete="organization"
                      placeholder="Smith Spray Foam LLC"
                      value={form.businessName}
                      onChange={handleField}
                      className={inputBase}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="qf-email" className="block text-xs font-medium text-gray-400 mb-1.5">
                      Email <span className="text-[#f59e0b]">*</span>
                    </label>
                    <input
                      id="qf-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="jane@smithfoam.com"
                      value={form.email}
                      onChange={handleField}
                      className={inputBase}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="qf-phone" className="block text-xs font-medium text-gray-400 mb-1.5">
                      Phone <span className="text-[#f59e0b]">*</span>
                    </label>
                    <input
                      id="qf-phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="(555) 000-0000"
                      value={form.phone}
                      onChange={handleField}
                      className={inputBase}
                    />
                  </div>
                </div>

                {/* State */}
                <div className="mb-4">
                  <label htmlFor="qf-state" className="block text-xs font-medium text-gray-400 mb-1.5">
                    State <span className="text-[#f59e0b]">*</span>
                  </label>
                  <select
                    id="qf-state"
                    name="state"
                    required
                    value={form.state}
                    onChange={handleField}
                    className={inputBase + ' appearance-none cursor-pointer'}
                  >
                    <option value="" disabled>Select your state…</option>
                    {US_STATES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Coverage checkboxes */}
                <fieldset className="mb-4">
                  <legend className="block text-xs font-medium text-gray-400 mb-2.5">
                    Coverage Needed <span className="text-[#f59e0b]">*</span>
                  </legend>
                  <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                    {COVERAGE_OPTIONS.map(({ id, label }) => (
                      <label key={id} className="flex items-center gap-2.5 cursor-pointer group">
                        <input
                          id={`qf-${id}`}
                          type="checkbox"
                          name="coverage"
                          value={id}
                          checked={form.coverage.includes(id)}
                          onChange={handleCoverage}
                          className="w-4 h-4 rounded border-[#2ea3f2]/30 bg-[#080d16] accent-[#2ea3f2] cursor-pointer"
                        />
                        <span className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors">
                          {label}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                {/* Message */}
                <div className="mb-6">
                  <label htmlFor="qf-message" className="block text-xs font-medium text-gray-400 mb-1.5">
                    Additional Details <span className="text-gray-600">(optional)</span>
                  </label>
                  <textarea
                    id="qf-message"
                    name="message"
                    rows={3}
                    placeholder="Rig count, annual revenue, current carrier, anything helpful…"
                    value={form.message}
                    onChange={handleField}
                    className={inputBase + ' resize-none'}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="amber-cta w-full py-3.5 rounded-lg text-sm font-bold uppercase tracking-widest disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Sending…' : 'Get My Free Quote'}
                </button>

                <p className="text-center text-xs text-gray-600 mt-3">
                  No spam. No obligation. SPF specialists only.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
