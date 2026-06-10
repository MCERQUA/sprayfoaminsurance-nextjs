'use client';

import { useState } from 'react';
import { useUser, UserProfile } from '@clerk/nextjs';
import { Save, CheckCircle } from 'lucide-react';

const states = [
  'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA',
  'ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK',
  'OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY',
];

const coverageTypes = [
  'General Liability',
  "Workers' Compensation",
  'Commercial Auto',
  'Surety Bonds',
  'Environmental Liability',
  'Multiple / Bundle',
];

const inputClass =
  'w-full bg-surface border border-primary/20 rounded-lg px-4 py-2.5 text-sm text-text placeholder:text-muted focus:outline-none focus:border-primary/50 transition-colors';

export default function ProfilePage() {
  const { user } = useUser();
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    companyName: '',
    businessPhone: '',
    state: '',
    zip: '',
    yearsInBusiness: '',
    primaryCoverage: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }, 700);
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-headline font-bold text-text mb-1">Profile</h1>
        <p className="text-muted text-sm">Update your business information and account settings.</p>
      </div>

      {/* Business profile form */}
      <div className="glass-card p-6 mb-8">
        <h2 className="font-headline font-semibold text-text text-base mb-5">Business Information</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs label-text text-muted mb-1.5">First Name</label>
              <input
                name="firstName"
                type="text"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First name"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs label-text text-muted mb-1.5">Last Name</label>
              <input
                name="lastName"
                type="text"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last name"
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs label-text text-muted mb-1.5">Company Name</label>
              <input
                name="companyName"
                type="text"
                value={form.companyName}
                onChange={handleChange}
                placeholder="Your company name"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs label-text text-muted mb-1.5">Business Phone</label>
              <input
                name="businessPhone"
                type="tel"
                value={form.businessPhone}
                onChange={handleChange}
                placeholder="(555) 000-0000"
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            <div className="sm:col-span-2">
              <label className="block text-xs label-text text-muted mb-1.5">State</label>
              <select
                name="state"
                value={form.state}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select state...</option>
                {states.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs label-text text-muted mb-1.5">ZIP Code</label>
              <input
                name="zip"
                type="text"
                value={form.zip}
                onChange={handleChange}
                placeholder="85001"
                maxLength={10}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs label-text text-muted mb-1.5">Years in Business</label>
              <input
                name="yearsInBusiness"
                type="number"
                min="0"
                max="100"
                value={form.yearsInBusiness}
                onChange={handleChange}
                placeholder="e.g. 5"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs label-text text-muted mb-1.5">Primary Coverage Type</label>
            <select
              name="primaryCoverage"
              value={form.primaryCoverage}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Select primary coverage...</option>
              {coverageTypes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-4 pt-1">
            <button
              type="submit"
              disabled={saving}
              className="primary-btn inline-flex items-center gap-2 px-7 py-2.5 rounded-full text-sm font-semibold font-label disabled:opacity-60"
            >
              <Save className="w-4 h-4" />
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
            {saved && (
              <span className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold">
                <CheckCircle className="w-4 h-4" />
                Saved!
              </span>
            )}
          </div>
        </form>
      </div>

      {/* Clerk UserProfile */}
      <div className="glass-card p-6">
        <h2 className="font-headline font-semibold text-text text-base mb-5">Account Settings</h2>
        <p className="text-xs text-muted mb-4">
          Manage your email address, password, and connected accounts.
        </p>
        <UserProfile
          appearance={{
            elements: {
              rootBox: 'w-full',
              card: 'bg-transparent shadow-none border-0 p-0',
              navbar: 'hidden',
              pageScrollBox: 'p-0',
            },
          }}
        />
      </div>
    </div>
  );
}
