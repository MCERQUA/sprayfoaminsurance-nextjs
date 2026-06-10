import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Profile | Dashboard',
};

export default function ProfilePage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-headline font-bold text-text mb-1">Profile</h1>
        <p className="text-muted text-sm">Manage your account and business information.</p>
      </div>

      <div className="glass-card p-10 flex flex-col items-center justify-center text-center max-w-lg mx-auto">
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <span className="text-primary text-xl font-headline font-bold">SFI</span>
        </div>
        <h2 className="font-headline font-bold text-lg text-text mb-2">Profile management coming soon</h2>
        <p className="text-muted text-sm mb-6 leading-relaxed">
          Contact your agent to update your business information, email address, or account details.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="tel:8449675247"
            className="secondary-btn inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold font-label"
          >
            <Phone className="w-4 h-4" />
            844-967-5247
          </a>
          <Link
            href="/contact-us"
            className="primary-btn inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold font-label"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
