export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Client Login | Spray Foam Insurance',
  description: 'Log in to your Spray Foam Insurance client portal to manage policies, request certificates, and view your coverage documents.',
  robots: { index: false, follow: false },
};

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-background dot-grid flex items-center justify-center px-4 relative overflow-hidden">
      <div className="ambient-orb w-96 h-96 bg-primary opacity-10 -top-20 -left-20" />
      <div className="ambient-orb w-72 h-72 bg-accent opacity-10 bottom-0 right-0" />

      <div className="relative z-10 glass-card p-10 max-w-md w-full text-center">
        <h1 className="text-3xl font-headline font-bold blue-gradient-text mb-3">Client Login</h1>
        <p className="text-muted text-sm mb-2">Secure client portal coming soon.</p>
        <p className="text-muted text-sm mb-8">
          In the meantime, contact us directly at{' '}
          <a href="tel:8449675247" className="text-primary hover:text-accent transition-colors font-semibold">
            844-967-5247
          </a>
        </p>

        <div className="flex flex-col gap-3">
          <a
            href="tel:8449675247"
            className="secondary-btn inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold font-label"
          >
            <Phone className="w-4 h-4" />
            Call 844-967-5247
          </a>
          <Link
            href="/"
            className="text-xs text-muted hover:text-primary transition-colors"
          >
            ← Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
