import { MapPin, CheckCircle, Globe, FileText } from 'lucide-react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const STATES = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
  'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY',
];

const stats = [
  {
    value: '50',
    label: 'States',
    icon: Globe,
    color: 'text-[#2ea3f2]',
    bg: 'bg-[#2ea3f2]/15',
    border: 'border-[#2ea3f2]/30',
  },
  {
    value: '0',
    label: 'Coverage Gaps',
    icon: CheckCircle,
    color: 'text-[#29c4a9]',
    bg: 'bg-[#29c4a9]/15',
    border: 'border-[#29c4a9]/30',
  },
  {
    value: '1',
    label: 'Specialist Team',
    icon: MapPin,
    color: 'text-[#f59e0b]',
    bg: 'bg-[#f59e0b]/15',
    border: 'border-[#f59e0b]/30',
  },
  {
    value: 'A-Rated',
    label: 'Carrier Partners',
    icon: FileText,
    color: 'text-[#2ea3f2]',
    bg: 'bg-[#2ea3f2]/15',
    border: 'border-[#2ea3f2]/30',
  },
];

export default function CoverageMap() {
  return (
    <section className="particle-bg py-24 relative overflow-hidden">
      {/* Extra ambient glow at center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(46,163,242,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="label-text text-[#29c4a9] font-label text-sm block mb-3">
            Nationwide Coverage
          </span>
          <h2 className="font-headline font-bold text-3xl sm:text-5xl text-white mb-4 leading-tight">
            Coverage in{' '}
            <span className="blue-gradient-text">All 50 States</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
            Licensed to write spray foam contractor insurance in all 50 states. Whether you operate
            in one state or cross borders for every job, we handle multi-state certificates,
            state-specific licensing requirements, and GC endorsements without the runaround.
          </p>
        </div>

        {/* Stat boxes */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {stats.map(({ value, label, icon: Icon, color, bg, border }) => (
            <div
              key={label}
              className={`bg-[#0a1628]/80 border ${border} rounded-2xl p-6 flex flex-col items-center text-center hover:bg-[#0e2040]/90 transition-all hover:-translate-y-0.5`}
            >
              <div className={`w-11 h-11 rounded-full ${bg} flex items-center justify-center mb-3`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <div className={`font-headline font-bold text-2xl sm:text-3xl ${color} leading-none mb-1`}>
                {value}
              </div>
              <div className="label-text font-label text-gray-400 text-xs">{label}</div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="section-divider mb-10" />

        {/* State chips section */}
        <div className="text-center mb-7">
          <p className="text-gray-400 text-sm">
            Authorized to write spray foam insurance in every U.S. state — no exceptions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {STATES.map((state) => (
            <span
              key={state}
              className="inline-flex items-center px-3 py-1.5 rounded-lg border border-[#2ea3f2]/20 bg-[#2ea3f2]/5 text-gray-400 text-xs font-headline font-semibold tracking-wide hover:border-[#2ea3f2]/50 hover:text-[#2ea3f2] hover:bg-[#2ea3f2]/10 transition-all cursor-default select-none"
            >
              {state}
            </span>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div
          className="rounded-2xl border border-[#2ea3f2]/20 bg-[#0a1628]/80 p-8 text-center"
          style={{ boxShadow: '0 0 40px rgba(46,163,242,0.06)' }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="text-left">
              <p className="font-headline font-bold text-white text-xl mb-1">
                Working in multiple states?
              </p>
              <p className="text-gray-400 text-sm">
                We issue multi-state COIs and handle licensing requirements across all jurisdictions — one call, one policy, zero gaps.
              </p>
            </div>
            <Link
              href="/quote/"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-[#2ea3f2] hover:bg-[#1a8fd4] text-white font-headline font-bold px-7 py-3 rounded text-sm transition-all hover:shadow-[0_0_24px_rgba(46,163,242,0.45)] hover:scale-[1.02] whitespace-nowrap"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
