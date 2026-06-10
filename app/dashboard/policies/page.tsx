import Link from 'next/link';
import { FileText, ArrowRight } from 'lucide-react';

export default function PoliciesPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-headline font-bold text-text mb-1">My Policies</h1>
        <p className="text-muted text-sm">View and manage your active insurance policies.</p>
      </div>

      <div className="glass-card p-10 flex flex-col items-center justify-center text-center">
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <FileText className="w-7 h-7 text-primary" />
        </div>
        <h2 className="font-headline font-bold text-lg text-text mb-2">Your policies will appear here</h2>
        <p className="text-muted text-sm max-w-sm mb-6">
          Once you have active policies, you'll be able to view details, download documents, and request changes.
        </p>
        <Link
          href="/quote"
          className="primary-btn inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold font-label"
        >
          Get a Quote <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
