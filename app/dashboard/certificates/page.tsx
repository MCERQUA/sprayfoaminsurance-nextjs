'use client';

import { useState } from 'react';
import { Award, CheckCircle, Download, AlertCircle } from 'lucide-react';

const issuedCerts = [
  {
    id: 'COI-2026-001',
    type: 'General Liability',
    holder: 'ABC General Contracting',
    issued: 'Jan 20, 2026',
    expires: 'Jan 15, 2027',
  },
  {
    id: 'COI-2026-002',
    type: "GL + Workers' Comp",
    holder: 'Sunbelt Commercial Builders',
    issued: 'Feb 5, 2026',
    expires: 'Jan 15, 2027',
  },
];

const coverageTypes = [
  'General Liability',
  "Workers' Compensation",
  'Commercial Auto',
  'General Liability + Workers Comp',
  'All Coverages',
];

const inputClass =
  'w-full bg-surface border border-primary/20 rounded-lg px-4 py-2.5 text-sm text-text placeholder:text-muted focus:outline-none focus:border-primary/50 transition-colors';

export default function CertificatesPage() {
  const [form, setForm] = useState({
    holderName: '',
    holderAddress: '',
    additionalInsured: false,
    coverageType: '',
    specialRequirements: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const target = e.target;
    setForm((prev) => ({
      ...prev,
      [target.name]: target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-headline font-bold text-text mb-1">Certificates of Insurance</h1>
        <p className="text-muted text-sm">Request new certificates and view previously issued ones.</p>
      </div>

      {/* Issued certificates */}
      <div className="mb-8">
        <h2 className="font-headline font-semibold text-text text-base mb-4">Your Certificates</h2>
        <div className="glass-card overflow-hidden">
          <div className="hidden sm:grid grid-cols-5 gap-4 px-6 py-3 border-b border-primary/10 bg-surface/50">
            <span className="text-xs label-text text-muted">Cert #</span>
            <span className="text-xs label-text text-muted">Coverage Type</span>
            <span className="text-xs label-text text-muted">Certificate Holder</span>
            <span className="text-xs label-text text-muted">Issued / Expires</span>
            <span className="text-xs label-text text-muted">Download</span>
          </div>
          {issuedCerts.map((cert) => (
            <div
              key={cert.id}
              className="grid grid-cols-1 sm:grid-cols-5 gap-2 sm:gap-4 px-6 py-4 border-b border-primary/5 last:border-0 hover:bg-primary/5 transition-colors"
            >
              <span className="text-xs font-label text-muted">{cert.id}</span>
              <span className="text-sm text-text font-medium">{cert.type}</span>
              <span className="text-sm text-text">{cert.holder}</span>
              <div>
                <p className="text-xs text-muted">Issued: {cert.issued}</p>
                <p className="text-xs text-muted">Expires: {cert.expires}</p>
              </div>
              <button
                disabled
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold font-label bg-surface border border-primary/20 text-muted cursor-not-allowed opacity-60 w-fit"
              >
                <Download className="w-3.5 h-3.5" />
                PDF
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Request form */}
      <div className="glass-card p-6">
        <div className="flex items-center gap-2 mb-1">
          <Award className="w-5 h-5 text-primary" />
          <h2 className="font-headline font-semibold text-text text-base">Request a Certificate</h2>
        </div>
        <p className="text-xs text-muted mb-6 flex items-center gap-1.5">
          <AlertCircle className="w-3.5 h-3.5 text-accent" />
          Certificates are typically issued within 1 business day.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center justify-center py-10 text-center gap-3">
            <CheckCircle className="w-12 h-12 text-accent" />
            <h3 className="font-headline font-bold text-text text-lg">Request Submitted!</h3>
            <p className="text-muted text-sm max-w-sm">
              Your certificate request has been received. You&apos;ll receive your COI within 1 business day at
              the email on file. Questions? Call 844-967-5247.
            </p>
            <button
              onClick={() => { setSubmitted(false); setForm({ holderName: '', holderAddress: '', additionalInsured: false, coverageType: '', specialRequirements: '' }); }}
              className="mt-2 text-primary text-sm hover:underline font-semibold"
            >
              Request another certificate
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs label-text text-muted mb-1.5">
                  Certificate Holder Name <span className="text-highlight">*</span>
                </label>
                <input
                  name="holderName"
                  type="text"
                  required
                  placeholder="Company or individual name"
                  value={form.holderName}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs label-text text-muted mb-1.5">Holder Address</label>
                <input
                  name="holderAddress"
                  type="text"
                  placeholder="Street, City, State ZIP"
                  value={form.holderAddress}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs label-text text-muted mb-1.5">Coverage Type</label>
                <select
                  name="coverageType"
                  value={form.coverageType}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select coverage type...</option>
                  {coverageTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-3 pt-6">
                <input
                  id="additionalInsured"
                  name="additionalInsured"
                  type="checkbox"
                  checked={form.additionalInsured}
                  onChange={handleChange}
                  className="w-4 h-4 accent-primary"
                />
                <label htmlFor="additionalInsured" className="text-sm text-text cursor-pointer">
                  Add holder as Additional Insured
                </label>
              </div>
            </div>

            <div>
              <label className="block text-xs label-text text-muted mb-1.5">Special Requirements</label>
              <textarea
                name="specialRequirements"
                rows={3}
                placeholder="Any special language, wording, or requirements for this certificate..."
                value={form.specialRequirements}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
              />
            </div>

            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={submitting || !form.holderName}
                className="primary-btn px-7 py-2.5 rounded-full text-sm font-semibold font-label disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Submitting...' : 'Submit Request'}
              </button>
              <p className="text-xs text-muted">Or call us: 844-967-5247</p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
