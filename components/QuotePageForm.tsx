'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import FormCard from '@/components/FormCard';

// Delivered via Netlify Forms (form registered in public/__forms.html as
// "quote-detailed"). Netlify's submission-created function
// (netlify/functions/submission-created.js) forwards the flattened submission
// into Josh's lead pipeline. Deliberately NO client-side webhook fetch here —
// a second fire-and-forget POST duplicated every lead and swallowed its own
// failures. Netlify Forms + the function is the single supported path.

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

const GL_AMOUNTS = ['$500,000/$1,000,000', '$1,000,000/$1,000,000', '$1,000,000/$2,000,000', 'Not Needed'];
const WC_AMOUNTS = ['$100,000', '$500,000', '$1,000,000', 'Not Needed'];
const AUTO_AMOUNTS = ['$100,000', '$500,000', '$1,000,000', 'Not Needed'];
const SURETY_AMOUNTS = ['$5,000', '$10,000', '$100,000'];

interface FormState {
  businessName: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  message: string;
  fein: string;
  grossSales: string;
  employeeCount: string;
  employeePayroll: string;
  subcontractorExpenses: string;
  materialCosts: string;
  gl_amount: string;
  wc_amount: string;
  auto_amount: string;
  surety_amount: string;
}

const EMPTY_FORM: FormState = {
  businessName: '', name: '', email: '', phone: '',
  address: '', city: '', state: '', zip: '',
  message: '', fein: '', grossSales: '', employeeCount: '',
  employeePayroll: '', subcontractorExpenses: '', materialCosts: '',
  gl_amount: '', wc_amount: '', auto_amount: '', surety_amount: '',
};

const inputBase =
  'w-full bg-background border border-primary/20 rounded-lg px-4 py-2.5 text-text text-sm focus:outline-none focus:border-primary/50 placeholder:text-muted';

const labelBase = 'block text-sm font-label font-semibold text-text mb-1.5';

export default function QuotePageForm() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  function handleField(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // 2026-08-27: these forms carry `noValidate`, and nothing replaced the native
    // checks — a submission with no name, email or phone could be sent, producing a
    // lead nobody can contact back. Run the browser's own constraint validation
    // before building the payload.
    if (!e.currentTarget.checkValidity()) {
      e.currentTarget.reportValidity();
      return;
    }
    setSubmitting(true);
    setError(false);

    const body = new URLSearchParams();
    body.append('form-name', 'quote-detailed');
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
      <FormCard title="Request Received">
        <div className="flex flex-col items-center text-center py-8 gap-4">
          <CheckCircle className="w-14 h-14 text-accent" />
          <p className="text-muted text-sm leading-relaxed max-w-sm">
            Thanks — we&apos;ll review your information and get back to you within one
            business day with your personalized quote.
          </p>
          <button
            onClick={() => { setForm(EMPTY_FORM); setSubmitted(false); }}
            className="mt-2 text-xs text-muted hover:text-text underline transition-colors"
          >
            Submit another request
          </button>
        </div>
      </FormCard>
    );
  }

  function radioGroup(
    field: 'gl_amount' | 'wc_amount' | 'auto_amount' | 'surety_amount',
    options: string[],
  ) {
    return (
      <div className="space-y-2">
        {options.map((opt) => (
          <label key={opt} className="flex items-center gap-2 text-sm text-muted cursor-pointer">
            <input
              type="radio"
              name={field}
              value={opt}
              checked={form[field] === opt}
              onChange={handleField}
              className="accent-primary"
            />
            {opt}
          </label>
        ))}
      </div>
    );
  }

  return (
    <FormCard title="Sign Up Form">
      <form
        onSubmit={handleSubmit}
        name="quote-detailed"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        noValidate
      >
        {/* Netlify form-name + honeypot (hidden) */}
        <input type="hidden" name="form-name" value="quote-detailed" />
        <p className="hidden">
          <label>
            Don&apos;t fill this out: <input name="bot-field" onChange={handleField} />
          </label>
        </p>

        <div className="mb-4">
          <label htmlFor="qp-businessName" className={labelBase}>Business Name *</label>
          <input
            id="qp-businessName" name="businessName" type="text"
            autoComplete="organization"
            placeholder="E.g. Smith Spray Foam LLC"
            value={form.businessName} onChange={handleField} className={inputBase}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="qp-name" className={labelBase}>Full Name *</label>
          <input
            id="qp-name" name="name" type="text" required
            autoComplete="name"
            placeholder="E.g. Jane Smith"
            value={form.name} onChange={handleField} className={inputBase}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="qp-email" className={labelBase}>Email Address *</label>
            <input
              id="qp-email" name="email" type="email" required
              autoComplete="email"
              placeholder="E.g. jane@smithfoam.com"
              value={form.email} onChange={handleField} className={inputBase}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="qp-phone" className={labelBase}>Phone Number *</label>
            <input
              id="qp-phone" name="phone" type="tel" required
              autoComplete="tel"
              placeholder="E.g. (480) 555-0142"
              value={form.phone} onChange={handleField} className={inputBase}
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="qp-address" className={labelBase}>Street Address *</label>
          <input
            id="qp-address" name="address" type="text" required
            autoComplete="street-address"
            placeholder="E.g. 1200 W Chandler Blvd"
            value={form.address} onChange={handleField} className={inputBase}
          />
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          <div className="mb-4">
            <label htmlFor="qp-city" className={labelBase}>City *</label>
            <input
              id="qp-city" name="city" type="text" required
              autoComplete="address-level2"
              placeholder="E.g. Chandler"
              value={form.city} onChange={handleField} className={inputBase}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="qp-state" className={labelBase}>State *</label>
            <select
              id="qp-state" name="state" required
              value={form.state} onChange={handleField}
              className={inputBase + ' appearance-none cursor-pointer'}
            >
              <option value="" disabled>Select…</option>
              {US_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="qp-zip" className={labelBase}>ZIP Code *</label>
            <input
              id="qp-zip" name="zip" type="text" required
              autoComplete="postal-code"
              placeholder="E.g. 85249"
              value={form.zip} onChange={handleField} className={inputBase}
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="qp-message" className={labelBase}>Message</label>
          <textarea
            id="qp-message" name="message" rows={3} maxLength={180}
            placeholder="Please let us know how we can help you best. Tell us about your business-are you only doing spray foam insulation, roofing, slab jacking? What percent new versus remodel? What percent commercial versus residential? What price do we need to beat?"
            value={form.message} onChange={handleField}
            className={inputBase + ' resize-none'}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="qp-fein" className={labelBase}>FEIN</label>
          <input
            id="qp-fein" name="fein" type="text"
            placeholder="Helps us shop more carriers. Required for Workers Compensation Insurance quotes."
            value={form.fein} onChange={handleField} className={inputBase}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="qp-grossSales" className={labelBase}>Gross Sales</label>
            <input
              id="qp-grossSales" name="grossSales" type="text"
              placeholder="Estimate Next 12 Months"
              value={form.grossSales} onChange={handleField} className={inputBase}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="qp-employeeCount" className={labelBase}>Employee count</label>
            <input
              id="qp-employeeCount" name="employeeCount" type="text"
              placeholder="E.g. 10"
              value={form.employeeCount} onChange={handleField} className={inputBase}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="qp-employeePayroll" className={labelBase}>Employee Payroll</label>
            <input
              id="qp-employeePayroll" name="employeePayroll" type="text"
              placeholder="Estimate Next 12 Months"
              value={form.employeePayroll} onChange={handleField} className={inputBase}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="qp-subcontractorExpenses" className={labelBase}>Subcontractor expenses</label>
            <input
              id="qp-subcontractorExpenses" name="subcontractorExpenses" type="text"
              placeholder="Estimate Next 12 Months"
              value={form.subcontractorExpenses} onChange={handleField} className={inputBase}
            />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="qp-materialCosts" className={labelBase}>Material Costs</label>
          <input
            id="qp-materialCosts" name="materialCosts" type="text"
            placeholder="Estimate Next 12 Months"
            value={form.materialCosts} onChange={handleField} className={inputBase}
          />
        </div>

        <div className="mb-6">
          <p className="text-sm font-label font-semibold text-text mb-1">
            How much Spray Foam General Liability Insurance coverage?
          </p>
          <p className="text-xs text-muted mb-2">
            Select the amount of spray foam insurance coverage you are looking for.
          </p>
          {radioGroup('gl_amount', GL_AMOUNTS)}
        </div>

        <div className="mb-6">
          <p className="text-sm font-label font-semibold text-text mb-1">
            Workers Compensation Insurance for Your Spray Foam Installers and Other Employees
          </p>
          <p className="text-xs text-muted mb-2">
            Select the amount of spray foam workers comp coverage you would like quoted.
          </p>
          {radioGroup('wc_amount', WC_AMOUNTS)}
        </div>

        <div className="mb-6">
          <p className="text-sm font-label font-semibold text-text mb-1">
            Commercial Auto Insurance for Your Spray Rig
          </p>
          <p className="text-xs text-muted mb-2">
            Please email a picture of your drivers license, current auto policy info, and vin
            number/registration to Josh@sprayfoaminsurance.com, or call 844-967-5247.
          </p>
          {radioGroup('auto_amount', AUTO_AMOUNTS)}
        </div>

        <div className="mb-6">
          <p className="text-sm font-label font-semibold text-text mb-1">Spray Foam Surety Bond</p>
          <p className="text-xs text-muted mb-2">
            There are many different surety amounts if you don&apos;t see what you need call or email.
          </p>
          {radioGroup('surety_amount', SURETY_AMOUNTS)}
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="amber-cta w-full py-4 rounded-full font-label font-bold text-lg flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? 'Sending…' : 'Send Message'}
          {!submitting && <ArrowRight className="w-5 h-5" />}
        </button>

        {error && (
          <p className="text-center text-xs text-red-400 mt-3">
            Something went wrong sending your request. Please call{' '}
            <a href="tel:844-967-5247" className="underline">844-967-5247</a> or email{' '}
            <a href="mailto:josh@sprayfoaminsurance.com" className="underline">josh@sprayfoaminsurance.com</a>.
          </p>
        )}
      </form>
    </FormCard>
  );
}
