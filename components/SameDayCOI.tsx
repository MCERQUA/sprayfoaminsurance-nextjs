import { Clock, CheckCircle, MapPin, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const callouts = [
  {
    icon: Clock,
    headline: 'Most COIs issued within hours',
    body: 'After binding your policy, certificates are typically ready the same business day — often within just a few hours of your request.',
  },
  {
    icon: CheckCircle,
    headline: 'Never miss a job start',
    body: "GC requiring proof of insurance before you set foot on site? We send COIs directly to your general contractor or project owner.",
  },
  {
    icon: MapPin,
    headline: '50-state multi-state certificates',
    body: 'Work across multiple states? We handle multi-state COIs and GC-specific endorsements with zero hassle.',
  },
];

export default function SameDayCOI() {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0d0a00 0%, #1a1200 50%, #0d0a00 100%)',
        borderTop: '1px solid rgba(245,158,11,0.2)',
        borderBottom: '1px solid rgba(245,158,11,0.2)',
      }}
    >
      {/* Ambient amber glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 80% at 25% 50%, rgba(245,158,11,0.09) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: headline + copy + CTA */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#f59e0b]/15 border border-[#f59e0b]/30 rounded-full px-4 py-1.5 mb-6">
              <FileText className="w-3.5 h-3.5 text-[#f59e0b]" />
              <span className="label-text text-[#f59e0b] text-xs">Same-Day COI</span>
            </div>

            <h2 className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-5 leading-tight">
              Need a COI to Start a Job?{' '}
              <span className="text-[#f59e0b]">Get One the Same Day.</span>
            </h2>

            <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-lg">
              A missing Certificate of Insurance shouldn&apos;t cost you a contract. Once your policy
              is bound, we issue your COI the same day — keeping you on-site and on schedule.
            </p>

            <Link
              href="/quote/"
              className="inline-flex items-center gap-2 amber-cta px-7 py-3.5 rounded font-headline font-bold text-base"
            >
              Request a Certificate
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Right: callout list */}
          <div className="flex flex-col gap-6">
            {callouts.map(({ icon: Icon, headline, body }) => (
              <div key={headline} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#f59e0b]/15 border border-[#f59e0b]/25 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#f59e0b]" />
                </div>
                <div>
                  <h3 className="font-headline font-semibold text-white text-base mb-1">
                    {headline}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
