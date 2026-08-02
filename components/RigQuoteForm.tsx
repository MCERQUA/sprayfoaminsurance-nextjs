'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { CheckCircle } from 'lucide-react';

// Delivered via Netlify Forms (registered in public/__forms.html as
// "rig-quote") -> netlify/functions/submission-created.js -> lead pipeline.
// The previous markup had no name attributes and no person-name field at all,
// so nothing was transmitted and nothing would have been attributable if it had
// been. Single `name` field, per the fleet standard.

interface FormState {
  name: string;
  businessName: string;
  phone: string;
  email: string;
  message: string;
}

const EMPTY_FORM: FormState = {
  name: '', businessName: '', phone: '', email: '', message: '',
};

const inputClass =
  'w-full bg-background border border-primary/20 rounded-lg px-4 py-2.5 text-text text-sm focus:outline-none focus:border-primary/50 placeholder:text-muted';
const labelClass = 'block text-sm font-label font-semibold text-text mb-1.5';

export default function RigQuoteForm() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  function handleField(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    const body = new URLSearchParams();
    body.append('form-name', 'rig-quote');
    (Object.keys(form) as (keyof FormState)[]).forEach((k) => body.append(k, form[k]));
    body.append('service_type', 'Rig / Equipment (Inland Marine)');
    body.append('form_type', 'quote-request');
    body.append('source_site', 'sprayfoaminsurance');

    try {
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (!res.ok) throw new Error(`Submit failed: ${res.status}`);
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center text-center gap-4 py-6">
        <CheckCircle className="w-14 h-14 text-accent" />
        <h3 className="font-headline font-bold text-text">Request received</h3>
        <p className="text-muted text-sm leading-relaxed max-w-sm">
          Thanks — a spray-foam insurance specialist will reach out within one business day about
          your rig and equipment coverage.
        </p>
        <button
          type="button"
          onClick={() => { setForm(EMPTY_FORM); setSubmitted(false); }}
          className="mt-2 text-xs text-muted hover:text-text underline transition-colors"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      name="rig-quote"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      noValidate
      className="space-y-4"
    >
      <input type="hidden" name="form-name" value="rig-quote" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" onChange={handleField} />
        </label>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="rq-name" className={labelClass}>Full Name *</label>
          <input
            id="rq-name" name="name" type="text" required
            autoComplete="name"
            placeholder="E.g. Jane Smith"
            className={inputClass}
            value={form.name} onChange={handleField}
          />
        </div>
        <div>
          <label htmlFor="rq-businessName" className={labelClass}>Company/Account Name</label>
          <input
            id="rq-businessName" name="businessName" type="text"
            autoComplete="organization"
            placeholder="Insurance account name"
            className={inputClass}
            value={form.businessName} onChange={handleField}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="rq-phone" className={labelClass}>Phone *</label>
          <input
            id="rq-phone" name="phone" type="tel" required
            autoComplete="tel"
            placeholder="E.g. (480) 555-0142"
            className={inputClass}
            value={form.phone} onChange={handleField}
          />
        </div>
        <div>
          <label htmlFor="rq-email" className={labelClass}>Email Address *</label>
          <input
            id="rq-email" name="email" type="email" required
            autoComplete="email"
            placeholder="E.g. jane@smithfoam.com"
            className={inputClass}
            value={form.email} onChange={handleField}
          />
        </div>
      </div>

      <div>
        <label htmlFor="rq-message" className={labelClass}>
          What do you need covered? <span className="text-muted font-normal">(optional)</span>
        </label>
        <textarea
          id="rq-message" name="message" rows={3}
          placeholder="Rig year/make, proportioner, hose, generator, trailer — anything you want scheduled."
          className={inputClass + ' resize-none'}
          value={form.message} onChange={handleField}
        />
      </div>

      <div className="flex items-center justify-between pt-2 gap-4 flex-wrap">
        <span className="text-xs text-muted">
          We&apos;ll follow up by phone or email to finish the details.
        </span>
        <button
          type="submit"
          disabled={submitting}
          className="primary-btn px-8 py-2.5 rounded-full font-label font-semibold text-sm shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? 'Sending…' : 'Request Quote'}
        </button>
      </div>

      {error && (
        <p className="text-xs text-red-400">
          Something went wrong sending your request. Please call{' '}
          <a href="tel:844-967-5247" className="underline">844-967-5247</a> or email{' '}
          <a href="mailto:josh@sprayfoaminsurance.com" className="underline">josh@sprayfoaminsurance.com</a>.
        </p>
      )}
    </form>
  );
}
