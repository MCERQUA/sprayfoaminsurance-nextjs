'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { clsx } from 'clsx';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionProps {
  items: FAQItem[];
}

function stripHtml(str: string): string {
  return str.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

export default function FAQSection({ items }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: stripHtml(item.q),
      acceptedAnswer: {
        '@type': 'Answer',
        text: stripHtml(item.a),
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="space-y-3">
        {items.map((item, i) => (
          <div
            key={i}
            className={clsx('glass-card overflow-hidden', openIndex === i && 'accordion-item active')}
          >
            <button
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span className="font-headline font-semibold text-text text-sm sm:text-base">
                {item.q}
              </span>
              <Plus
                className={clsx(
                  'w-5 h-5 text-primary shrink-0 transition-transform duration-300',
                  openIndex === i && 'rotate-45'
                )}
              />
            </button>
            <div
              className={clsx(
                'px-6 overflow-hidden transition-all duration-400 ease-out',
                openIndex === i ? 'max-h-[500px] pb-5' : 'max-h-0'
              )}
            >
              <p className="text-muted text-sm leading-relaxed">{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
