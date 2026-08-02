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
  // Contact & job site
  businessName: '',
  installerName: '',
  email: '',
  phone: '',
  address: '',
  aptSuite: '',
  city: '',
  state: '',
  zip: '',
  // Spray area conditions
  isolatedFromWind: '',
  signagePosted: '',
  ventilated: '',
  // Material
  spfManufacture: '',
  isoLot: '',
  isoExpiry: '',
  resinLot: '',
  resinExpiry: '',
  proportionerType: '',
  isoTemp: '',
  isoPressure: '',
  resinTemp: '',
  resinPressure: '',
  hoseHeatTemp: '',
  strokesUsed: '',
  ambientTemp: '',
  substrateTemp: '',
  relativeHumidity: '',
  windVelocity: '',
  substrateHumidity: '',
  substrateType: '',
  substrateDry: '',
  substrateClean: '',
  substrateFastened: '',
  primerRequired: '',
  exteriorCoatingRequired: '',
  notes: '',
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
      <PageHero title="Spray Foam Application Work Record" />

      {/* About the form */}
      <section className="max-w-4xl mx-auto px-4 pt-4">
        <GlassCard className="p-8">
          <p className="text-muted text-sm mb-4">
            Our <span className="font-semibold text-text">Work Record Form</span> is an essential
            tool for accurately documenting all critical jobsite data during spray foam
            insulation projects. This form is designed to capture environmental and material
            conditions to ensure the optimal application of spray foam insulation. By recording
            atmospheric and substrate information, we guarantee that each project meets industry
            standards for safety, performance, and quality.
          </p>

          <h3 className="font-headline font-bold text-text mb-2">What the Form Captures:</h3>
          <ul className="space-y-2 mb-4 list-disc list-inside text-muted text-sm">
            <li>
              <span className="font-semibold text-text">Jobsite:</span> Record the data, time,
              location, and jobsite conditions to create a comprehensive log for each project.
            </li>
            <li>
              <span className="font-semibold text-text">Atmospheric Conditions:</span> Ambient
              Temperature: This tracks the air temperature at the jobsite to ensure that the foam
              is applied under optimal conditions.
            </li>
            <li>
              <span className="font-semibold text-text">Substrate Temperature:</span> Recording
              the temperature of the surface where spray foam is applied is crucial for adhesion
              and overall insulation performance.
            </li>
            <li>
              <span className="font-semibold text-text">Moisture Content:</span> Monitoring the
              moisture levels in the substrate helps prevent foam from absorbing water, which can
              affect both application and long-term performance.
            </li>
            <li>
              <span className="font-semibold text-text">Spray Foam Application Data:</span>{' '}
              Starting Temperatures: Measure the initial temperatures of the foam material
              components before application to ensure the correct chemical reaction during
              spraying.
            </li>
            <li>
              <span className="font-semibold text-text">Initial Pressures:</span> Document the
              pressure levels in the spray foam equipment to ensure the proper mix and delivery of
              materials.
            </li>
          </ul>

          <h3 className="font-headline font-bold text-text mb-2">Why It&apos;s Important:</h3>
          <p className="text-muted text-sm mb-2">
            Proper documentation of these environmental and material conditions helps to:
          </p>
          <ul className="space-y-1 mb-4 list-disc list-inside text-muted text-sm">
            <li>Ensure the foam is applied in compliance with manufacturer and industry guidelines.</li>
            <li>Minimize the risk of product failure due to environmental factors.</li>
            <li>Provide a record for quality control and troubleshooting if issues arise.</li>
          </ul>

          <h3 className="font-headline font-bold text-text mb-2">How to Use the Form:</h3>
          <p className="text-muted text-sm">
            Our form is straightforward and easy to use. Simply enter the required data during the
            job, and our system will store the information for easy access and review. This
            documentation helps maintain a professional standard and ensures the best performance
            for every spray foam insulation project.
          </p>
        </GlassCard>
      </section>

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
                {/* Contact & Job Site */}
                <div className={fieldClass}>
                  <label className={labelClass} htmlFor="businessName">
                    Business Name
                  </label>
                  <input
                    id="businessName"
                    name="businessName"
                    type="text"
                    className={inputClass}
                    placeholder="E.g. Smith Spray Foam LLC"
                    value={formData.businessName}
                    onChange={handleChange}
                  />
                </div>

                <div className={fieldClass}>
                  <label className={labelClass} htmlFor="installerName">
                    Installer Name *
                  </label>
                  <input
                    id="installerName"
                    name="installerName"
                    type="text"
                    className={inputClass}
                    placeholder="E.g. John Doe"
                    value={formData.installerName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                  <div className={fieldClass}>
                    <label className={labelClass} htmlFor="email">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={inputClass}
                      placeholder="E.g. john@doe.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={fieldClass}>
                    <label className={labelClass} htmlFor="phone">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className={inputClass}
                      placeholder="E.g. (480) 555-0142"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className={fieldClass}>
                  <label className={labelClass} htmlFor="address">
                    Job Site Street Address *
                  </label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    className={inputClass}
                    placeholder="E.g. 1200 W Chandler Blvd"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={fieldClass}>
                  <label className={labelClass} htmlFor="aptSuite">
                    Apartment, suite, etc
                  </label>
                  <input
                    id="aptSuite"
                    name="aptSuite"
                    type="text"
                    className={inputClass}
                    value={formData.aptSuite}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                  <div className={fieldClass}>
                    <label className={labelClass} htmlFor="city">
                      City *
                    </label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      className={inputClass}
                      placeholder="E.g. Chandler"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={fieldClass}>
                    <label className={labelClass} htmlFor="state">
                      State/Province *
                    </label>
                    <input
                      id="state"
                      name="state"
                      type="text"
                      className={inputClass}
                      placeholder="E.g. Arizona"
                      value={formData.state}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className={fieldClass}>
                  <label className={labelClass} htmlFor="zip">
                    ZIP / Postal Code *
                  </label>
                  <input
                    id="zip"
                    name="zip"
                    type="text"
                    className={inputClass}
                    placeholder="E.g. 85249"
                    value={formData.zip}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Spray Area Conditions */}
                <div className="border-t border-primary/10 pt-6 mt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4">
                    {(
                      [
                        ['isolatedFromWind', 'Spray Area Isolated From Wind?'],
                        ['signagePosted', 'Spray Area Signage Posted?'],
                        ['ventilated', 'Spray Area Ventilated?'],
                      ] as const
                    ).map(([name, label]) => (
                      <div key={name} className={fieldClass}>
                        <span className={labelClass}>{label}</span>
                        <div className="flex gap-4 mt-1">
                          {['Yes', 'No'].map((opt) => (
                            <label
                              key={opt}
                              className="flex items-center gap-2 text-sm text-text cursor-pointer"
                            >
                              <input
                                type="radio"
                                name={name}
                                value={opt}
                                checked={formData[name] === opt}
                                onChange={handleChange}
                                className="accent-primary w-4 h-4"
                              />
                              {opt}
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Material & Application Data */}
                <div className="border-t border-primary/10 pt-6 mt-2">
                  <div className={fieldClass}>
                    <label className={labelClass} htmlFor="spfManufacture">
                      SPF Manufacture
                    </label>
                    <input
                      id="spfManufacture"
                      name="spfManufacture"
                      type="text"
                      className={inputClass}
                      placeholder="Brand/Type"
                      value={formData.spfManufacture}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                    <div className={fieldClass}>
                      <label className={labelClass} htmlFor="isoLot">
                        (A) Iso LOT#
                      </label>
                      <input
                        id="isoLot"
                        name="isoLot"
                        type="text"
                        className={inputClass}
                        placeholder="(A) Iso LOT#"
                        value={formData.isoLot}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={fieldClass}>
                      <label className={labelClass} htmlFor="isoExpiry">
                        (A) ISO Expiry Date
                      </label>
                      <input
                        id="isoExpiry"
                        name="isoExpiry"
                        type="date"
                        className={inputClass}
                        value={formData.isoExpiry}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={fieldClass}>
                      <label className={labelClass} htmlFor="resinLot">
                        (B) Resin LOT#
                      </label>
                      <input
                        id="resinLot"
                        name="resinLot"
                        type="text"
                        className={inputClass}
                        placeholder="Resin (B) LOT#"
                        value={formData.resinLot}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={fieldClass}>
                      <label className={labelClass} htmlFor="resinExpiry">
                        (B) Resin Expiry Date
                      </label>
                      <input
                        id="resinExpiry"
                        name="resinExpiry"
                        type="date"
                        className={inputClass}
                        value={formData.resinExpiry}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className={fieldClass}>
                    <label className={labelClass} htmlFor="proportionerType">
                      Proportioner Type
                    </label>
                    <input
                      id="proportionerType"
                      name="proportionerType"
                      type="text"
                      className={inputClass}
                      placeholder="Brand/Type"
                      value={formData.proportionerType}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                    <div className={fieldClass}>
                      <label className={labelClass} htmlFor="isoTemp">
                        (A) Iso Temperature
                      </label>
                      <input
                        id="isoTemp"
                        name="isoTemp"
                        type="text"
                        className={inputClass}
                        placeholder="(A) Iso Temperature"
                        value={formData.isoTemp}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={fieldClass}>
                      <label className={labelClass} htmlFor="isoPressure">
                        (A) ISO Pressure
                      </label>
                      <input
                        id="isoPressure"
                        name="isoPressure"
                        type="text"
                        className={inputClass}
                        placeholder="(B) Resin Pressure"
                        value={formData.isoPressure}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={fieldClass}>
                      <label className={labelClass} htmlFor="resinTemp">
                        (B) Resin Temperature
                      </label>
                      <input
                        id="resinTemp"
                        name="resinTemp"
                        type="text"
                        className={inputClass}
                        placeholder="(B) Resin Temperature"
                        value={formData.resinTemp}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={fieldClass}>
                      <label className={labelClass} htmlFor="resinPressure">
                        (B) Resin Pressure
                      </label>
                      <input
                        id="resinPressure"
                        name="resinPressure"
                        type="text"
                        className={inputClass}
                        placeholder="(B) Resin Pressure"
                        value={formData.resinPressure}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                    <div className={fieldClass}>
                      <label className={labelClass} htmlFor="hoseHeatTemp">
                        Hose Heat Temperature
                      </label>
                      <input
                        id="hoseHeatTemp"
                        name="hoseHeatTemp"
                        type="text"
                        className={inputClass}
                        placeholder="Hose Heat Temperature"
                        value={formData.hoseHeatTemp}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={fieldClass}>
                      <label className={labelClass} htmlFor="strokesUsed">
                        Strokes Used
                      </label>
                      <input
                        id="strokesUsed"
                        name="strokesUsed"
                        type="text"
                        className={inputClass}
                        placeholder="Enter Number Of Strokes Used"
                        value={formData.strokesUsed}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                    <div className={fieldClass}>
                      <label className={labelClass} htmlFor="ambientTemp">
                        Ambient Temperature
                      </label>
                      <input
                        id="ambientTemp"
                        name="ambientTemp"
                        type="text"
                        className={inputClass}
                        placeholder="Ambient Temperature"
                        value={formData.ambientTemp}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={fieldClass}>
                      <label className={labelClass} htmlFor="substrateTemp">
                        Substrate Temperature
                      </label>
                      <input
                        id="substrateTemp"
                        name="substrateTemp"
                        type="text"
                        className={inputClass}
                        placeholder="Substrate Temperature"
                        value={formData.substrateTemp}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4">
                    <div className={fieldClass}>
                      <label className={labelClass} htmlFor="relativeHumidity">
                        Relative Humidity
                      </label>
                      <input
                        id="relativeHumidity"
                        name="relativeHumidity"
                        type="text"
                        className={inputClass}
                        placeholder="Relative Humidity"
                        value={formData.relativeHumidity}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={fieldClass}>
                      <label className={labelClass} htmlFor="windVelocity">
                        Wind Velocity
                      </label>
                      <input
                        id="windVelocity"
                        name="windVelocity"
                        type="text"
                        className={inputClass}
                        placeholder="Substrate"
                        value={formData.windVelocity}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={fieldClass}>
                      <label className={labelClass} htmlFor="substrateHumidity">
                        Substrate Humidity
                      </label>
                      <input
                        id="substrateHumidity"
                        name="substrateHumidity"
                        type="text"
                        className={inputClass}
                        placeholder="Substrate Humidity"
                        value={formData.substrateHumidity}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className={fieldClass}>
                    <label className={labelClass} htmlFor="substrateType">
                      Substrate Type
                    </label>
                    <input
                      id="substrateType"
                      name="substrateType"
                      type="text"
                      className={inputClass}
                      placeholder="Substrate Type/Description"
                      value={formData.substrateType}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4">
                    {(
                      [
                        ['substrateDry', 'Substrate Dry?'],
                        ['substrateClean', 'Substrate Clean?'],
                        ['substrateFastened', 'Substrate Fastend/Secure?'],
                      ] as const
                    ).map(([name, label]) => (
                      <div key={name} className={fieldClass}>
                        <span className={labelClass}>{label}</span>
                        <div className="flex gap-4 mt-1">
                          {['Yes', 'No'].map((opt) => (
                            <label
                              key={opt}
                              className="flex items-center gap-2 text-sm text-text cursor-pointer"
                            >
                              <input
                                type="radio"
                                name={name}
                                value={opt}
                                checked={formData[name] === opt}
                                onChange={handleChange}
                                className="accent-primary w-4 h-4"
                              />
                              {opt}
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                    {(
                      [
                        ['primerRequired', 'Primer Required?'],
                        ['exteriorCoatingRequired', 'Exterior Coating Required?'],
                      ] as const
                    ).map(([name, label]) => (
                      <div key={name} className={fieldClass}>
                        <span className={labelClass}>{label}</span>
                        <div className="flex gap-4 mt-1">
                          {['Yes', 'No'].map((opt) => (
                            <label
                              key={opt}
                              className="flex items-center gap-2 text-sm text-text cursor-pointer"
                            >
                              <input
                                type="radio"
                                name={name}
                                value={opt}
                                checked={formData[name] === opt}
                                onChange={handleChange}
                                className="accent-primary w-4 h-4"
                              />
                              {opt}
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className={fieldClass}>
                    <label className={labelClass} htmlFor="notes">
                      Job Notes
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      className={inputClass}
                      placeholder="Add any Notes about the job or the substrate"
                      value={formData.notes}
                      onChange={handleChange}
                    />
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
                    Send Message
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
