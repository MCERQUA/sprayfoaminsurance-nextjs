import { currentUser } from '@clerk/nextjs/server';
import Link from 'next/link';
import { FileText, Award, Clock, FolderOpen, ArrowRight, Phone } from 'lucide-react';

const stats = [
  { label: 'Active Policies', value: '—', icon: FileText, color: 'text-primary' },
  { label: 'Pending Certificates', value: '—', icon: Award, color: 'text-accent' },
  { label: 'Open Quotes', value: '—', icon: Clock, color: 'text-highlight' },
  { label: 'Documents', value: '—', icon: FolderOpen, color: 'text-primary' },
];

const quickActions = [
  { label: 'Request Certificate', href: '/dashboard/certificates', primary: true },
  { label: 'Get New Quote', href: '/quote', primary: true },
  { label: 'Contact Agent', href: '/contact-us', primary: false },
];

export default async function DashboardPage() {
  const user = await currentUser();
  const firstName = user?.firstName || 'there';

  return (
    <div>
      {/* Welcome */}
      <div className="mb-8">
        <h1 className="text-3xl font-headline font-bold text-text mb-1">
          Welcome back, <span className="blue-gradient-text">{firstName}</span>
        </h1>
        <p className="text-muted text-sm">
          Manage your spray foam insurance policies, certificates, and documents.
        </p>
      </div>

      {/* Stats */}
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

      {/* Quick actions */}
      <div className="glass-card p-6 mb-8">
        <h2 className="font-headline font-bold text-lg text-text mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          {quickActions.map(({ label, href, primary }) => (
            <Link
              key={label}
              href={href}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold font-label transition-all ${
                primary
                  ? 'primary-btn'
                  : 'secondary-btn'
              }`}
            >
              {label} <ArrowRight className="w-4 h-4" />
            </Link>
          ))}
        </div>
      </div>

      {/* Help card */}
      <div className="glass-card p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <div>
          <h3 className="font-headline font-semibold text-text mb-1">Need help with your coverage?</h3>
          <p className="text-muted text-sm">Our specialists are ready to assist you.</p>
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
