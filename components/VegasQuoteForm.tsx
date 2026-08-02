'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { CheckCircle } from 'lucide-react';

// Delivered via Netlify Forms (registered in public/__forms.html as
// "vegas-quote-request"); netlify/functions/submission-created.js forwards it
// into the lead pipeline. Single `name` field — the previous
// Prefix/First/Middle/Last split carried no name attributes at all, so nothing
// was ever transmitted.

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

const fieldBase =
  'w-full bg-[#080d16] border border-[#2ea3f2]/20 rounded-lg px-4 py-2.5 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-[#2ea3f2]/60';

const labelBase = 'block text-xs font-medium text-gray-400 mb-1.5';

export default function VegasQuoteForm() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  function handleField(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    const body = new URLSearchParams();
    body.append('form-name', 'vegas-quote-request');
    (Object.keys(form) as (keyof FormState)[]).forEach((k) => body.append(k, form[k]));
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
      <div className="flex flex-col items-center text-center py-8 gap-4">
        <CheckCircle className="w-14 h-14 text-[#29c4a9]" />
        <h2 className="font-headline text-xl font-bold text-white">Request received</h2>
        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
          Thanks — a spray-foam insurance specialist will reach out within one business day.
        </p>
        <button
          onClick={() => { setForm(EMPTY_FORM); setSubmitted(false); }}
          className="mt-2 text-xs text-gray-300 hover:text-white underline transition-colors"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <>
      <h2 className="font-headline text-xl font-bold text-white mb-6">Request Quote</h2>
      <form
        onSubmit={handleSubmit}
        name="vegas-quote-request"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        noValidate
        className="space-y-4"
      >
        <input type="hidden" name="form-name" value="vegas-quote-request" />
        <p className="hidden">
          <label>
            Don&apos;t fill this out: <input name="bot-field" onChange={handleField} />
          </label>
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="vq-name" className={labelBase}>
              Full Name <span className="text-[#f59e0b]">*</span>
            </label>
            <input
              id="vq-name" name="name" type="text" required
              autoComplete="name"
              placeholder="E.g. Jane Smith"
              value={form.name} onChange={handleField} className={fieldBase}
            />
          </div>
          <div>
            <label htmlFor="vq-businessName" className={labelBase}>Company Name</label>
            <input
              id="vq-businessName" name="businessName" type="text"
              autoComplete="organization"
              placeholder="E.g. Smith Spray Foam LLC"
              value={form.businessName} onChange={handleField} className={fieldBase}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="vq-phone" className={labelBase}>
              Phone Number <span className="text-[#f59e0b]">*</span>
            </label>
            <input
              id="vq-phone" name="phone" type="tel" required
              autoComplete="tel"
              placeholder="E.g. (702) 555-0142"
              value={form.phone} onChange={handleField} className={fieldBase}
            />
          </div>
          <div>
            <label htmlFor="vq-email" className={labelBase}>
              Email Address <span className="text-[#f59e0b]">*</span>
            </label>
            <input
              id="vq-email" name="email" type="email" required
              autoComplete="email"
              placeholder="E.g. jane@smithfoam.com"
              value={form.email} onChange={handleField} className={fieldBase}
            />
          </div>
        </div>

        <div>
          <label htmlFor="vq-message" className={labelBase}>Additional notes</label>
          <textarea
            id="vq-message" name="message" rows={4} maxLength={180}
            value={form.message} onChange={handleField}
            className={fieldBase + ' resize-none'}
          />
          <p className="text-right text-xs text-gray-600 mt-1">{form.message.length} / 180</p>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="primary-btn px-8 py-3 rounded-lg text-sm font-semibold font-label disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? 'Sending…' : 'Request Quote'}
        </button>

        {error && (
          <p className="text-xs text-red-400 mt-3">
            Something went wrong sending your request. Please call{' '}
            <a href="tel:844-967-5247" className="underline">844-967-5247</a> or email{' '}
            <a href="mailto:josh@sprayfoaminsurance.com" className="underline">josh@sprayfoaminsurance.com</a>.
          </p>
        )}
      </form>
    </>
  );
}
