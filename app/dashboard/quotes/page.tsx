import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';

export default function QuotesPage() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-headline font-bold text-text mb-1">Quote History</h1>
          <p className="text-muted text-sm">Review and continue saved quotes.</p>
        </div>
        <Link
          href="/quote"
          className="primary-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold font-label"
        >
          New Quote <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Table stub */}
      <div className="glass-card overflow-hidden">
        <div className="px-6 py-4 border-b border-primary/10">
          <div className="grid grid-cols-4 gap-4 text-xs label-text text-muted">
            <span>Quote #</span>
            <span>Coverage Type</span>
            <span>Date</span>
            <span>Status</span>
          </div>
        </div>
        <div className="px-6 py-14 flex flex-col items-center justify-center text-center">
          <Clock className="w-10 h-10 text-highlight mb-3 opacity-50" />
          <p className="text-muted text-sm mb-1">No quotes yet</p>
          <p className="text-xs text-muted/60">Get a quote to see it here</p>
        </div>
      </div>
    </div>
  );
}
