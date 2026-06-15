export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { FileText, Award, Clock, FolderOpen, ArrowRight, Phone, CheckCircle } from 'lucide-react';

const stats = [
  { label: 'Active Policies', value: '2', icon: FileText, color: 'text-primary' },
  { label: 'Pending Certificates', value: '1', icon: Award, color: 'text-accent' },
  { label: 'Open Quotes', value: '3', icon: Clock, color: 'text-highlight' },
  { label: 'Documents', value: '8', icon: FolderOpen, color: 'text-primary' },
];

const quickActions = [
  { label: 'Request Certificate', href: '/dashboard/certificates', primary: true },
  { label: 'Get New Quote', href: '/quote', primary: true },
  { label: 'Contact Agent', href: '/contact-us', primary: false },
];

const recentActivity = [
  { label: 'General Liability policy renewed', time: '2 days ago', icon: CheckCircle, color: 'text-accent' },
  { label: 'Certificate of insurance issued', time: '5 days ago', icon: Award, color: 'text-primary' },
  { label: 'Quote #SFI-Q-1042 received', time: '3 weeks ago', icon: Clock, color: 'text-highlight' },
];

export default function DashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-headline font-bold text-text mb-1">
          Welcome to your <span className="blue-gradient-text">Dashboard</span>
        </h1>
        <p className="text-muted text-sm">
          Manage your spray foam insurance policies, certificates, and documents.
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="glass-card p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs label-text text-muted">{label}</span>
              <Icon className={`w-4 h-4 ${color}`} />
            </div>
            <span className={`text-3xl font-headline font-bold ${color}`}>{value}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Quick actions */}
        <div className="lg:col-span-2 glass-card p-6">
          <h2 className="font-headline font-bold text-lg text-text mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-3">
            {quickActions.map(({ label, href, primary }) => (
              <Link
                key={label}
                href={href}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold font-label transition-all ${
                  primary ? 'primary-btn' : 'secondary-btn'
                }`}
              >
                {label} <ArrowRight className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>

        {/* Recent activity */}
        <div className="glass-card p-6">
          <h2 className="font-headline font-bold text-base text-text mb-4">Recent Activity</h2>
          <ul className="space-y-4">
            {recentActivity.map(({ label, time, icon: Icon, color }) => (
              <li key={label} className="flex items-start gap-3">
                <Icon className={`w-4 h-4 mt-0.5 shrink-0 ${color}`} />
                <div>
                  <p className="text-sm text-text leading-tight">{label}</p>
                  <p className="text-xs text-muted mt-0.5">{time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Help strip */}
      <div className="glass-card p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between border border-primary/20">
        <div>
          <h3 className="font-headline font-semibold text-text mb-1">Need help with your coverage?</h3>
          <p className="text-muted text-sm">Our specialists are available Mon–Fri, 8am–6pm MST.</p>
        </div>
        <a
          href="tel:8449675247"
          className="secondary-btn inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold font-label whitespace-nowrap shrink-0"
        >
          <Phone className="w-4 h-4" />
          844-967-5247
        </a>
      </div>
    </div>
  );
}
