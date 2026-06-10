'use client';

import { useState } from 'react';
import PageHero from '@/components/PageHero';
import CTABar from '@/components/CTABar';
import FormCard from '@/components/FormCard';
import GlassCard from '@/components/GlassCard';
import { CheckCircle, Printer } from 'lucide-react';

const inputClass =
  'w-full bg-background border border-primary/20 rounded-lg px-4 py-2.5 text-text text-sm focus:outline-none focus:border-primary/50 placeholder:text-muted';
const labelClass = 'block text-sm font-label font-semibold text-text mb-1.5';
const fieldClass = 'mb-4';

const initialForm = {
  // Section A
  companyName: '',
  licenseNum: '',
  applicatorName: '',
  phone: '',
  email: '',
  // Section B
  address: '',
  cityStateZip: '',
  ownerName: '',
  jobDate: '',
  // Section C
  spfType: '',
  appArea: '',
  substrate: '',
  thickness: '',
  rValue: '',
  sqft: '',
  materialLot: '',
  // Section D
  moistureCheck: '',
  ventilation: '',
  ppeUsed: '',
  notes: '',
  // Section E
  sigName: '',
  sigDate: '',
};

type FormData = typeof initialForm;

export default function WorkRecordFormPage() {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        title="SPF Work Record Form"
        subtitle="Document every job with accuracy. Keep records on file for insurance, warranty, and compliance."
        badge="FREE TOOL"
        ctaText="Get a Quote"
        ctaHref="/quote"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 py-12">
        {/* Left — Form */}
        <div className="lg:col-span-2">
          <FormCard
            title="Job Documentation Form"
            subtitle="Complete all sections for accurate records"
          >
            {submitted ? (
              <GlassCard className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <CheckCircle className="w-14 h-14 text-accent" />
                </div>
                <h3 className="font-headline font-bold text-text text-xl mb-2">
                  Record Saved Successfully
                </h3>
                <p className="text-muted text-sm max-w-md mx-auto">
                  Your work record has been saved. Print a copy for your files and share one with
                  your client for warranty documentation.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="primary-btn inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-label font-semibold text-sm mt-6"
                >
                  Fill Out Another
                </button>
              </GlassCard>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Section A — Contractor Information */}
                <h3 className="font-headline font-semibold text-text mb-4">
                  A. Contractor Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                  <div className={fieldClass}>
                    <label className={labelClass} htmlFor="companyName">
                      Company Name
                    </label>
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      className={inputClass}
                      placeholder="Acme Spray Foam LLC"
                      value={formData.companyName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={fieldClass}>
                    <label className={labelClass} htmlFor="licenseNum">
                      License Number
                    </label>
                    <input
                      id="licenseNum"
                      name="licenseNum"
                      type="text"
                      className={inputClass}
                      placeholder="LIC-000000"
                      value={formData.licenseNum}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={fieldClass}>
                    <label className={labelClass} htmlFor="applicatorName">
                      Applicator Name
                    </label>
                    <input
                      id="applicatorName"
                      name="applicatorName"
                      type="text"
                      className={inputClass}
                      placeholder="John Smith"
                      value={formData.applicatorName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={fieldClass}>
                    <label className={labelClass} htmlFor="phone">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className={inputClass}
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={`${fieldClass} sm:col-span-2`}>
                    <label className={labelClass} htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={inputClass}
                      placeholder="contractor@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Section B — Job Site Details */}
                <div className="border-t border-primary/10 pt-6 mt-2">
                  <h3 className="font-headline font-semibold text-text mb-4">
                    B. Job Site Details
                  </h3>
                  <div className={fieldClass}>
                    <label className={labelClass} htmlFor="address">
                      Street Address
                    </label>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      className={inputClass}
                      placeholder="123 Main Street"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                    <div className={fieldClass}>
                      <label className={labelClass} htmlFor="cityStateZip">
                        City, State, ZIP
                      </label>
                      <input
                        id="cityStateZip"
                        name="cityStateZip"
                        type="text"
                        className={inputClass}
                        placeholder="Austin, TX 78701"
                        value={formData.cityStateZip}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={fieldClass}>
                      <label className={labelClass} htmlFor="ownerName">
                        Property Owner Name
                      </label>
                      <input
                        id="ownerName"
                        name="ownerName"
                        type="text"
                        className={inputClass}
                        placeholder="Jane Doe"
                        value={formData.ownerName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={fieldClass}>
                      <label className={labelClass} htmlFor="jobDate">
                        Job Date
                      </label>
                      <input
                        id="jobDate"
                        name="jobDate"
                        type="date"
                        className={inputClass}
                        value={formData.jobDate}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Section C — SPF Application Details */}
                <div className="border-t border-primary/10 pt-6 mt-2">
                  <h3 className="font-headline font-semibold text-text mb-4">
                    C. SPF Application Details
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                    <div className={fieldClass}>
                      <label className={labelClass} htmlFor="spfType">
                        SPF Type
                      </label>
                      <select
                        id="spfType"
                        name="spfType"
                        className={inputClass}
                        value={formData.spfType}
                        onChange={handleChange}
                      >
                        <option value="">Select type...</option>
                        <option value="open-cell">Open-Cell (0.5 lb)</option>
                        <option value="closed-cell-2">Closed-Cell (2 lb)</option>
                        <option value="closed-cell-3">Closed-Cell High-Density (3 lb)</option>
                      </select>
                    </div>
                    <div className={fieldClass}>
                      <label className={labelClass} htmlFor="appArea">
                        Application Area
                      </label>
                      <select
                        id="appArea"
                        name="appArea"
                        className={inputClass}
                        value={formData.appArea}
                        onChange={handleChange}
                      >
                        <option value="">Select area...</option>
                        <option value="attic">Attic</option>
                        <option value="crawl-space">Crawl Space</option>
                        <option value="walls">Walls</option>
                        <option value="roof-deck">Roof Deck</option>
                        <option value="basement">Basement</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className={fieldClass}>
                      <label className={labelClass} htmlFor="substrate">
                        Substrate
                      </label>
                      <select
                        id="substrate"
                        name="substrate"
                        className={inputClass}
                        value={formData.substrate}
                        onChange={handleChange}
                      >
                        <option value="">Select substrate...</option>
                        <option value="wood">Wood</option>
                        <option value="concrete">Concrete</option>
                        <option value="metal">Metal</option>
                        <option value="existing-insulation">Existing Insulation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className={fieldClass}>
                      <label className={labelClass} htmlFor="thickness">
                        Thickness (inches)
                      </label>
                      <input
                        id="thickness"
                        name="thickness"
                        type="number"
                        min="0"
                        step="0.25"
                        className={inputClass}
                        placeholder="e.g. 3.5"
                        value={formData.thickness}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={fieldClass}>
                      <label className={labelClass} htmlFor="rValue">
                        R-Value
                      </label>
                      <input
                        id="rValue"
                        name="rValue"
                        type="number"
                        min="0"
                        className={inputClass}
                        placeholder="e.g. 20"
                        value={formData.rValue}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={fieldClass}>
                      <label className={labelClass} htmlFor="sqft">
                        Square Footage
                      </label>
                      <input
                        id="sqft"
                        name="sqft"
                        type="number"
                        min="0"
                        className={inputClass}
                        placeholder="e.g. 1200"
                        value={formData.sqft}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={`${fieldClass} sm:col-span-2`}>
                      <label className={labelClass} htmlFor="materialLot">
                        Material Lot / Batch Number
                      </label>
                      <input
                        id="materialLot"
                        name="materialLot"
                        type="text"
                        className={inputClass}
                        placeholder="LOT-XXXXXXXX"
                        value={formData.materialLot}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Section D — Quality & Safety */}
                <div className="border-t border-primary/10 pt-6 mt-2">
                  <h3 className="font-headline font-semibold text-text mb-4">
                    D. Quality &amp; Safety
                  </h3>

                  <div className={fieldClass}>
                    <span className={labelClass}>Moisture Check Completed?</span>
                    <div className="flex gap-4 mt-1">
                      {['Yes', 'No'].map((opt) => (
                        <label
                          key={opt}
                          className="flex items-center gap-2 text-sm text-text cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="moistureCheck"
                            value={opt}
                            checked={formData.moistureCheck === opt}
                            onChange={handleChange}
                            className="accent-primary w-4 h-4"
                          />
                          {opt}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className={fieldClass}>
                    <span className={labelClass}>Adequate Ventilation Confirmed?</span>
                    <div className="flex gap-4 mt-1">
                      {['Yes', 'No'].map((opt) => (
                        <label
                          key={opt}
                          className="flex items-center gap-2 text-sm text-text cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="ventilation"
                            value={opt}
                            checked={formData.ventilation === opt}
                            onChange={handleChange}
                            className="accent-primary w-4 h-4"
                          />
                          {opt}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className={fieldClass}>
                    <label className={labelClass} htmlFor="ppeUsed">
                      PPE Used
                    </label>
                    <input
                      id="ppeUsed"
                      name="ppeUsed"
                      type="text"
                      className={inputClass}
                      placeholder="e.g. Supplied-air respirator, Tyvek suit, gloves, goggles"
                      value={formData.ppeUsed}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={fieldClass}>
                    <label className={labelClass} htmlFor="notes">
                      Additional Notes
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      className={inputClass}
                      placeholder="Any special conditions, observations, or client instructions..."
                      value={formData.notes}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Section E — Certification */}
                <div className="border-t border-primary/10 pt-6 mt-2">
                  <h3 className="font-headline font-semibold text-text mb-4">
                    E. Certification
                  </h3>
                  <p className="text-muted text-sm mb-4">
                    By completing this form, the applicator certifies that the information above is
                    accurate and that all work was performed in accordance with manufacturer
                    specifications and applicable regulations.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                    <div className={fieldClass}>
                      <label className={labelClass} htmlFor="sigName">
                        Contractor Name
                      </label>
                      <input
                        id="sigName"
                        name="sigName"
                        type="text"
                        className={inputClass}
                        placeholder="Print full name"
                        value={formData.sigName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={fieldClass}>
                      <label className={labelClass} htmlFor="sigDate">
                        Date Completed
                      </label>
                      <input
                        id="sigDate"
                        name="sigDate"
                        type="date"
                        className={inputClass}
                        value={formData.sigDate}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-6 flex-wrap">
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="secondary-btn inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-label font-semibold text-sm"
                  >
                    <Printer className="w-4 h-4" />
                    Print Form
                  </button>
                  <button
                    type="submit"
                    className="primary-btn inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-label font-semibold text-sm"
                  >
                    Save Record
                  </button>
                </div>
              </form>
            )}
          </FormCard>
        </div>

        {/* Right — Sidebar */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          {/* Card 1 — Why Use This Form */}
          <GlassCard className="p-6">
            <h3 className="font-headline font-semibold text-text mb-4">Why Use This Form?</h3>
            <ul className="space-y-3">
              {[
                'After every spray foam application job',
                'Insurance claim documentation',
                'Warranty validation',
                'Client transparency',
                'Regulatory compliance',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted">
                  <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted mt-4 border-t border-primary/10 pt-4">
              Keep records for a minimum of 7 years.
            </p>
          </GlassCard>

          {/* Card 2 — Quick Tips */}
          <GlassCard className="p-6">
            <h3 className="font-headline font-semibold text-text mb-4">Quick Tips</h3>
            <ul className="space-y-4">
              <li className="text-muted text-sm">
                <span className="font-semibold text-text block mb-0.5">Record lot numbers</span>
                Always note the material batch number in case of product recalls or warranty disputes.
              </li>
              <li className="text-muted text-sm">
                <span className="font-semibold text-text block mb-0.5">Fill out on-site</span>
                Complete the form at the job location while details are fresh — don't rely on memory.
              </li>
              <li className="text-muted text-sm">
                <span className="font-semibold text-text block mb-0.5">Leave a copy with the client</span>
                A signed copy builds trust and gives homeowners documentation for energy rebates or resale.
              </li>
            </ul>
          </GlassCard>

          {/* Card 3 — Need Coverage? */}
          <GlassCard className="p-6 amber-cta">
            <h3 className="font-headline font-semibold text-text mb-2">Need Coverage?</h3>
            <p className="text-muted text-sm mb-4">
              Proper documentation starts with proper insurance. Get a quote tailored to spray foam
              contractors today.
            </p>
            <a
              href="/quote"
              className="primary-btn inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-label font-semibold"
            >
              Get a Free Quote
            </a>
          </GlassCard>
        </div>
      </div>

      <CTABar />
    </>
  );
}
