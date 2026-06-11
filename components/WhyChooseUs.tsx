import { Phone, Award, Clock, Target, Zap } from 'lucide-react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const pillars = [
  {
    icon: Phone,
    title: 'Insurance with a Personal Touch',
    description:
      'You get a dedicated spray foam specialist — not a call center, not a bot. Every question answered by someone who knows your industry, your risks, and your operation by name.',
    tag: 'Dedicated Specialist',
    color: 'text-[#2ea3f2]',
    bg: 'bg-[#2ea3f2]/15',
    border: 'border-[#2ea3f2]/30',
    glowColor: 'rgba(46,163,242,0.12)',
  },
  {
    icon: Award,
    title: 'Decades of Combined Expertise',
    description:
      'SPF-only from day one. Our team has spent over 15 years focused exclusively on spray foam contractors — we understand overspray claims, isocyanate exposures, and rig coverage in a way generalist brokers simply don\'t.',
    tag: 'SPF-Only Focus',
    color: 'text-[#29c4a9]',
    bg: 'bg-[#29c4a9]/15',
    border: 'border-[#29c4a9]/30',
    glowColor: 'rgba(41,196,169,0.12)',
  },
  {
    icon: Clock,
    title: '24/7 Support Anytime',
    description:
      'Contractors don\'t work 9-to-5, and neither do we. Claims, certificates, policy questions — we\'re available around the clock so a Sunday-night job start never gets derailed by a missing COI.',
    tag: 'Always Available',
    color: 'text-[#2ea3f2]',
    bg: 'bg-[#2ea3f2]/15',
    border: 'border-[#2ea3f2]/30',
    glowColor: 'rgba(46,163,242,0.12)',
  },
  {
    icon: Target,
    title: 'Specialized, Not Generic',
    description:
      'Standard contractor policies carry exclusions that gut coverage the moment a spray foam claim comes in. Every policy we write is designed around SPF-specific exposures — overspray, off-gassing, chemical burns, adhesion failures.',
    tag: 'No Coverage Gaps',
    color: 'text-[#f59e0b]',
    bg: 'bg-[#f59e0b]/15',
    border: 'border-[#f59e0b]/30',
    glowColor: 'rgba(245,158,11,0.12)',
  },
  {
    icon: Zap,
    title: 'Same-Day COIs',
    description:
      'Once your policy is bound, certificates of insurance go out the same day — often within hours. Multi-state COIs, GC-specific endorsements, additional insured requests. Fast, accurate, and never a reason to miss a job.',
    tag: 'Instant Turnaround',
    color: 'text-[#29c4a9]',
    bg: 'bg-[#29c4a9]/15',
    border: 'border-[#29c4a9]/30',
    glowColor: 'rgba(41,196,169,0.12)',
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: '#080d16' }}
    >
      {/* Ambient orbs */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(46,163,242,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(41,196,169,0.07) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="label-text text-[#29c4a9] font-label text-sm block mb-3">
            Why Choose Us?
          </span>
          <h2 className="font-headline font-bold text-3xl sm:text-4xl text-white mb-4">
            The Spray Foam Specialist Difference
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
            Any broker can sell you a policy. We built our entire practice around one industry —
            so your coverage actually works when it matters.
          </p>
        </div>

        {/* Top 3 pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {pillars.slice(0, 3).map(({ icon: Icon, title, description, tag, color, bg, border, glowColor }) => (
            <div
              key={title}
              className={`group relative bg-[#0d1421] border ${border} rounded-2xl p-7 hover:bg-[#111827] transition-all hover:-translate-y-1 flex flex-col`}
              style={{
                boxShadow: `0 0 0 transparent`,
              }}
              onMouseEnter={() => {}}
            >
              {/* Subtle hover glow — CSS-only via box-shadow on hover handled via Tailwind */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ boxShadow: `0 8px 32px ${glowColor}` }}
              />
              {/* Tag */}
              <div className={`inline-flex items-center gap-1.5 ${bg} border ${border} rounded-full px-3 py-1 mb-5 self-start`}>
                <span className={`label-text font-label text-[10px] ${color}`}>{tag}</span>
              </div>
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center mb-5`}>
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
              <h3 className="font-headline font-semibold text-white text-lg mb-3 group-hover:text-[#2ea3f2] transition-colors">
                {title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">{description}</p>
            </div>
          ))}
        </div>

        {/* Bottom 2 pillars — centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {pillars.slice(3).map(({ icon: Icon, title, description, tag, color, bg, border, glowColor }) => (
            <div
              key={title}
              className={`group relative bg-[#0d1421] border ${border} rounded-2xl p-7 hover:bg-[#111827] transition-all hover:-translate-y-1 flex flex-col`}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ boxShadow: `0 8px 32px ${glowColor}` }}
              />
              <div className={`inline-flex items-center gap-1.5 ${bg} border ${border} rounded-full px-3 py-1 mb-5 self-start`}>
                <span className={`label-text font-label text-[10px] ${color}`}>{tag}</span>
              </div>
              <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center mb-5`}>
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
              <h3 className="font-headline font-semibold text-white text-lg mb-3 group-hover:text-[#2ea3f2] transition-colors">
                {title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">{description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            href="/quote/"
            className="inline-flex items-center gap-2 bg-[#2ea3f2] hover:bg-[#1a8fd4] text-white font-headline font-bold px-8 py-3.5 rounded text-base transition-all hover:shadow-[0_0_24px_rgba(46,163,242,0.45)] hover:scale-[1.02]"
          >
            Work with a Real Specialist
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
