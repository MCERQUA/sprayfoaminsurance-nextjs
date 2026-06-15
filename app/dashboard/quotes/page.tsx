'use client';

export const dynamic = 'force-dynamic';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';

type QuoteStatus = 'Under Review' | 'Accepted' | 'Expired';

const quotes: {
  id: string;
  type: string;
  date: string;
  status: QuoteStatus;
  amount: string;
  detail: string;
}[] = [
  {
    id: 'SFI-Q-1042',
    type: 'General Liability',
    date: '2026-05-15',
    status: 'Under Review',
    amount: '$2,400/yr',
    detail:
      'General Liability: $1M/$2M aggregate. Includes Products & Completed Ops, Personal & Advertising Injury. Carrier: Travelers. Awaiting final underwriting review.',
  },
  {
    id: 'SFI-Q-1038',
    type: 'Commercial Auto',
    date: '2026-04-22',
    status: 'Accepted',
    amount: '$3,100/yr',
    detail:
      'Commercial Auto: 2 vehicles (2023 Ford F-250 + spray rig trailer). $1M combined single limit. Hired & non-owned auto included. Carrier: Progressive Commercial.',
  },
  {
    id: 'SFI-Q-1031',
    type: "GL + Workers' Comp",
    date: '2026-03-10',
    status: 'Expired',
    amount: '—',
    detail:
      'Bundle quote for GL ($1M/$2M) and Workers Comp (4 employees, $220K annual payroll). Quote expired — request a new quote to get current pricing.',
  },
];

const statusStyles: Record<QuoteStatus, string> = {
  'Under Review': 'bg-highlight/10 text-highlight border-highlight/20',
  'Accepted': 'bg-accent/10 text-accent border-accent/20',
  'Expired': 'bg-surface text-muted border-primary/10',
};

export default function QuotesPage() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div>
      <div className="mb-8 flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-headline font-bold text-text mb-1">Quote History</h1>
          <p className="text-muted text-sm">Review and continue saved quotes.</p>
        </div>
        <Link
          href="/quote"
          className="primary-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold font-label"
        >
          Request New Quote <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="glass-card overflow-hidden">
        {/* Table header */}
        <div className="hidden sm:grid grid-cols-5 gap-4 px-6 py-3 border-b border-primary/10 bg-surface/50">
          <span className="text-xs label-text text-muted">Quote #</span>
          <span className="text-xs label-text text-muted">Coverage Type</span>
          <span className="text-xs label-text text-muted">Date</span>
          <span className="text-xs label-text text-muted">Status</span>
          <span className="text-xs label-text text-muted">Amount</span>
        </div>

        {quotes.map((quote) => (
          <div key={quote.id} className="border-b border-primary/5 last:border-0">
            {/* Row */}
            <button
              onClick={() => setOpenId(openId === quote.id ? null : quote.id)}
              className="w-full grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-4 px-6 py-4 text-left hover:bg-primary/5 transition-colors items-center"
            >
              <span className="text-sm font-label font-semibold text-primary">{quote.id}</span>
              <span className="text-sm text-text">{quote.type}</span>
              <span className="text-sm text-muted hidden sm:block">{quote.date}</span>
              <span className="hidden sm:block">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold font-label border ${statusStyles[quote.status]}`}>
                  {quote.status}
                </span>
              </span>
              <div className="flex items-center justify-between sm:justify-start gap-2">
                <span className="text-sm font-semibold text-text">{quote.amount}</span>
                <ChevronDown
                  className={`w-4 h-4 text-muted transition-transform ${openId === quote.id ? 'rotate-180' : ''}`}
                />
              </div>
            </button>

            {/* Expandable detail */}
            {openId === quote.id && (
              <div className="px-6 pb-5 bg-surface/30 border-t border-primary/5">
                <div className="sm:hidden flex items-center gap-2 mb-3 mt-4">
                  <span className="text-xs text-muted">{quote.date}</span>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold font-label border ${statusStyles[quote.status]}`}>
                    {quote.status}
                  </span>
                </div>
                <p className="text-sm text-muted leading-relaxed mt-4">{quote.detail}</p>
                {quote.status === 'Expired' && (
                  <Link
                    href="/quote"
                    className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-primary hover:underline"
                  >
                    Request updated quote <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
                {quote.status === 'Under Review' && (
                  <p className="text-xs text-accent mt-4">
                    Our team is reviewing your application. Expect a response within 1–2 business days.
                  </p>
                )}
                {quote.status === 'Accepted' && (
                  <a
                    href="tel:8449675247"
                    className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-accent hover:underline"
                  >
                    Call to bind this policy →
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
