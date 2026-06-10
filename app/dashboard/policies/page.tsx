import Link from 'next/link';
import { ArrowRight, Shield, Users, Calendar, ExternalLink } from 'lucide-react';

const policies = [
  {
    id: 'SFI-2024-001',
    type: 'General Liability Insurance',
    icon: Shield,
    iconColor: 'text-primary',
    iconBg: 'bg-primary/10 border-primary/20',
    status: 'Active',
    limit: '$1,000,000 / $2,000,000',
    effective: 'Jan 15, 2026',
    expiration: 'Jan 15, 2027',
    carrier: 'Travelers Insurance',
  },
  {
    id: 'SFI-2024-002',
    type: "Workers' Compensation",
    icon: Users,
    iconColor: 'text-accent',
    iconBg: 'bg-accent/10 border-accent/20',
    status: 'Active',
    limit: 'Statutory / $1,000,000 EL',
    effective: 'Jan 15, 2026',
    expiration: 'Jan 15, 2027',
    carrier: 'Hartford Financial',
  },
];

export default function PoliciesPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-headline font-bold text-text mb-1">My Policies</h1>
        <p className="text-muted text-sm">View and manage your active insurance policies.</p>
      </div>

      <div className="space-y-4 mb-10">
        {policies.map((policy) => {
          const Icon = policy.icon;
          return (
            <div key={policy.id} className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${policy.iconBg}`}>
                  <Icon className={`w-6 h-6 ${policy.iconColor}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-headline font-bold text-text">{policy.type}</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold font-label bg-accent/10 text-accent border border-accent/20">
                      {policy.status}
                    </span>
                  </div>
                  <p className="text-xs text-muted mt-0.5">
                    Policy # {policy.id} &middot; {policy.carrier}
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-5 pt-5 border-t border-primary/10">
                <div>
                  <p className="text-xs label-text text-muted mb-1">Coverage Limit</p>
                  <p className="text-sm font-semibold text-text">{policy.limit}</p>
                </div>
                <div>
                  <p className="text-xs label-text text-muted mb-1">Effective</p>
                  <p className="text-sm text-text flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-muted" />
                    {policy.effective}
                  </p>
                </div>
                <div>
                  <p className="text-xs label-text text-muted mb-1">Expires</p>
                  <p className="text-sm text-text flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-muted" />
                    {policy.expiration}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-primary/10">
                <Link
                  href="/dashboard/certificates"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold font-label primary-btn"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  View Certificate
                </Link>
                <a
                  href="tel:8449675247"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold font-label secondary-btn"
                >
                  Request Changes
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Additional coverage CTA */}
      <div className="glass-card p-6 border border-primary/20 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <div>
          <h3 className="font-headline font-semibold text-text mb-1">Need additional coverage?</h3>
          <p className="text-muted text-sm">Explore commercial auto, surety bonds, environmental liability, and more.</p>
        </div>
        <Link
          href="/services"
          className="primary-btn inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold font-label whitespace-nowrap shrink-0"
        >
          View Coverage Options <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
