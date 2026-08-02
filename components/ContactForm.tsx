'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { CheckCircle } from 'lucide-react';

// Delivered via Netlify Forms (registered in public/__forms.html as "contact")
// -> netlify/functions/submission-created.js -> lead pipeline. Single `name`
// field; the previous markup had no name attributes at all, so every message
// sent from this page was discarded by the browser before it left the machine.

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const EMPTY_FORM: FormState = { name: '', email: '', phone: '', message: '' };

const inputClass =
  'w-full bg-background border border-primary/20 rounded-lg px-4 py-2.5 text-text text-sm focus:outline-none focus:border-primary/50 placeholder:text-muted';
const labelClass = 'block text-sm font-label font-semibold text-text mb-1.5';

export default function ContactForm() {
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
    body.append('form-name', 'contact');
    (Object.keys(form) as (keyof FormState)[]).forEach((k) => body.append(k, form[k]));
    body.append('form_type', 'contact');
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
      <div className="glass-card p-6 sm:p-8 flex flex-col items-center text-center gap-4">
        <CheckCircle className="w-14 h-14 text-accent" />
        <h3 className="font-headline font-bold text-text">Message sent</h3>
        <p className="text-muted text-sm leading-relaxed max-w-sm">
          Thanks — one of our team members will get back to you within one business day.
        </p>
        <button
          type="button"
          onClick={() => { setForm(EMPTY_FORM); setSubmitted(false); }}
          className="mt-2 text-xs text-muted hover:text-text underline transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      name="contact"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      noValidate
      className="glass-card p-6 sm:p-8"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" onChange={handleField} />
        </label>
      </p>

      <div className="mb-4">
        <label htmlFor="cf-name" className={labelClass}>Name *</label>
        <input
          id="cf-name" name="name" type="text" required
          autoComplete="name"
          className={inputClass} placeholder="Your name"
          value={form.name} onChange={handleField}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="cf-email" className={labelClass}>Email Address *</label>
        <input
          id="cf-email" name="email" type="email" required
          autoComplete="email"
          className={inputClass} placeholder="you@company.com"
          value={form.email} onChange={handleField}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="cf-phone" className={labelClass}>Phone</label>
        <input
          id="cf-phone" name="phone" type="tel"
          autoComplete="tel"
          className={inputClass} placeholder="E.g. (480) 555-0142"
          value={form.phone} onChange={handleField}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="cf-message" className={labelClass}>Message *</label>
        <textarea
          id="cf-message" name="message" rows={5} required
          className={inputClass} placeholder="Tell us about your coverage needs..."
          value={form.message} onChange={handleField}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="primary-btn w-full py-3 rounded-full font-label font-semibold text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? 'Sending…' : 'Submit'}
      </button>

      {error && (
        <p className="text-center text-xs text-red-400 mt-3">
          Something went wrong sending your message. Please call{' '}
          <a href="tel:844-967-5247" className="underline">844-967-5247</a> or email{' '}
          <a href="mailto:josh@sprayfoaminsurance.com" className="underline">josh@sprayfoaminsurance.com</a>.
        </p>
      )}
    </form>
  );
}
