import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  badge?: string;
}

export default function PageHero({ title, subtitle, ctaText, ctaHref, badge }: PageHeroProps) {
  return (
    <section className="relative min-h-[480px] flex items-center justify-center overflow-hidden pt-16 bg-background dot-grid">
      {/* Ambient orbs */}
      <div className="ambient-orb w-96 h-96 bg-primary opacity-10 -top-20 -left-20" />
      <div className="ambient-orb w-80 h-80 bg-accent opacity-10 -bottom-10 right-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {badge && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-label font-semibold label-text mb-6">
            {badge}
          </div>
        )}

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold leading-tight mb-6">
          <span className="blue-gradient-text">{title}</span>
        </h1>

        {subtitle && (
          <p className="text-lg text-muted max-w-2xl mx-auto mb-8 leading-relaxed">
            {subtitle}
          </p>
        )}

        {ctaText && ctaHref && (
          <Link
            href={ctaHref}
            className="primary-btn inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-base font-semibold font-label"
          >
            {ctaText}
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </section>
  );
}
