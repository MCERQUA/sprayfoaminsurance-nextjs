import Link from 'next/link';
import { FileText, Download, ExternalLink } from 'lucide-react';

const documents = [
  {
    name: 'GL Policy Certificate',
    type: 'PDF',
    date: 'Jan 15, 2026',
    size: '248 KB',
    category: 'Policy',
    categoryColor: 'bg-primary/10 text-primary border-primary/20',
  },
  {
    name: "Workers' Comp Policy",
    type: 'PDF',
    date: 'Jan 15, 2026',
    size: '312 KB',
    category: 'Policy',
    categoryColor: 'bg-primary/10 text-primary border-primary/20',
  },
  {
    name: 'Commercial Auto Policy',
    type: 'PDF',
    date: 'Feb 1, 2026',
    size: '290 KB',
    category: 'Policy',
    categoryColor: 'bg-primary/10 text-primary border-primary/20',
  },
  {
    name: 'Safety Manual Template',
    type: 'PDF',
    date: 'Dec 1, 2025',
    size: '1.4 MB',
    category: 'Resource',
    categoryColor: 'bg-accent/10 text-accent border-accent/20',
  },
  {
    name: 'Spray Foam Work Record Form',
    type: 'PDF',
    date: 'Ongoing',
    size: '84 KB',
    category: 'Form',
    categoryColor: 'bg-highlight/10 text-highlight border-highlight/20',
  },
];

export default function DocumentsPage() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-headline font-bold text-text mb-1">Documents</h1>
          <p className="text-muted text-sm">Access your policy documents, forms, and certificates.</p>
        </div>
        <Link
          href="/contact-us"
          className="secondary-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold font-label"
        >
          <ExternalLink className="w-4 h-4" />
          Request a Document
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {documents.map((doc) => (
          <div key={doc.name} className="glass-card p-5 flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-surface border border-primary/20 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-headline font-semibold text-text text-sm leading-tight">{doc.name}</p>
                <p className="text-xs text-muted mt-0.5">{doc.type} &middot; {doc.size}</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold font-label border ${doc.categoryColor}`}>
                  {doc.category}
                </span>
                <p className="text-xs text-muted mt-1">{doc.date}</p>
              </div>
              <button
                disabled
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold font-label bg-surface border border-primary/20 text-muted cursor-not-allowed opacity-60"
                title="Downloads available once policy is active"
              >
                <Download className="w-3.5 h-3.5" />
                Download
              </button>
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-muted text-center">
        Need a document not listed here?{' '}
        <Link href="/contact-us" className="text-primary hover:underline">
          Contact your agent
        </Link>{' '}
        and we&apos;ll get it to you same day.
      </p>
    </div>
  );
}
