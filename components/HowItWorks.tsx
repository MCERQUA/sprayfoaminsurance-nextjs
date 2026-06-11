import { Fragment } from 'react';
import { ClipboardList, Search, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Tell Us About Your Operation',
    description:
      'Share details about your business — crew size, spray rig, chemicals used, and the states you work in. Takes just a few minutes.',
    iconColor: 'text-[#2ea3f2]',
    iconBg: 'bg-[#2ea3f2]/15',
    badgeColor: 'text-[#2ea3f2]',
    badgeBorder: 'border-[#2ea3f2]/40',
    topBorder: 'border-t-[#2ea3f2]',
  },
  {
    number: '02',
    icon: Search,
    title: 'We Shop A-Rated Carriers',
    description:
      'We match your operation to specialized SPF coverage across multiple A-rated carriers, finding competitive rates with no coverage gaps.',
    iconColor: 'text-[#29c4a9]',
    iconBg: 'bg-[#29c4a9]/15',
    badgeColor: 'text-[#29c4a9]',
    badgeBorder: 'border-[#29c4a9]/40',
    topBorder: 'border-t-[#29c4a9]',
  },
  {
    number: '03',
    icon: Zap,
    title: 'Get Covered — Same Day',
    description:
      'Bind your policy and receive your Certificate of Insurance the same day. Never miss a job start over missing proof of insurance.',
    iconColor: 'text-[#f59e0b]',
    iconBg: 'bg-[#f59e0b]/15',
    badgeColor: 'text-[#f59e0b]',
    badgeBorder: 'border-[#f59e0b]/40',
    topBorder: 'border-t-[#f59e0b]',
  },
];

export default function HowItWorks() {
  return (
    <section className="blue-gradient-section py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="label-text text-[#29c4a9] font-label text-sm block mb-3">
            Getting Covered Is Simple
          </span>
          <h2 className="font-headline font-bold text-3xl sm:text-4xl text-white">
            Insured in 3 Easy Steps
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            From your first call to holding your COI — most contractors are fully covered the same day.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Fragment key={step.number}>
                <div
                  className={`flex-1 bg-[#0a1628]/80 border-t-2 ${step.topBorder} border-x border-b border-white/10 rounded-2xl p-8 hover:bg-[#0e2040]/90 transition-all hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(46,163,242,0.12)] group flex flex-col`}
                >
                  {/* Number badge */}
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-full border-2 ${step.badgeBorder} ${step.iconBg} mb-5 flex-shrink-0`}
                  >
                    <span className={`font-headline font-bold text-sm ${step.badgeColor}`}>
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl ${step.iconBg} flex items-center justify-center mb-5 flex-shrink-0`}
                  >
                    <Icon className={`w-7 h-7 ${step.iconColor}`} />
                  </div>

                  <h3 className="font-headline font-semibold text-white text-xl mb-3 group-hover:text-[#2ea3f2] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1">
                    {step.description}
                  </p>
                </div>

                {/* Connector arrow — desktop only */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center w-10 flex-shrink-0">
                    <ArrowRight className="w-6 h-6 text-white/25" />
                  </div>
                )}
              </Fragment>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/quote/"
            className="inline-flex items-center gap-2 bg-[#2ea3f2] hover:bg-[#1a8fd4] text-white font-headline font-bold px-8 py-3.5 rounded text-base transition-all hover:shadow-[0_0_24px_rgba(46,163,242,0.45)] hover:scale-[1.02]"
          >
            Start Your Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
