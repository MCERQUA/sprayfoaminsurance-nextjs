import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';

export default function CTABar() {
  return (
    <section className="relative overflow-hidden bg-surface border-y border-primary/20">
      {/* Accent stripe */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-headline font-bold text-text mb-1">
              Ready to protect your business?
            </h2>
            <p className="text-muted text-sm">
              Get specialized coverage built for spray foam contractors — fast, flexible, competitive.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              href="/quote"
              className="primary-btn inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold font-label text-sm whitespace-nowrap"
            >
              Get a Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:8449675247"
              className="secondary-btn inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold font-label text-sm whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              844-967-5247
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
