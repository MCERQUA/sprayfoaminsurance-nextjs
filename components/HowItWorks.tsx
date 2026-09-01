import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

/**
 * Three-step process rail.
 *
 * Redesigned 2026-08-27. What was wrong with the previous version:
 *  - Every card carried BOTH a numbered badge AND a generic lucide icon tile, stacked
 *    vertically, so you passed two pieces of decoration before reaching any content.
 *  - Three unrelated accent colours (blue / teal / amber) assigned per card with no
 *    meaning — decoration reading as information.
 *  - No `gap` anywhere: on mobile the cards butted directly against each other, and on
 *    desktop they were separated only by a fixed-width arrow spacer.
 *  - It used the same "bordered card + icon tile" treatment as WhyChooseUs directly
 *    below it, so two adjacent sections looked like the same component twice.
 *
 * This version: the number IS the graphic (no icons competing with it), one accent
 * carries steps 1-2 with amber reserved for the payoff step, and the steps sit on a
 * connecting rail so the section reads as a sequence rather than a card grid.
 */

const steps = [
  {
    number: '01',
    title: 'Tell Us About Your Operation',
    meta: 'A few minutes',
    description:
      'Share details about your business — crew size, spray rig, chemicals used, and the states you work in.',
  },
  {
    number: '02',
    title: 'We Shop A-Rated Carriers',
    meta: 'Multiple carriers',
    description:
      'We match your operation to specialized SPF coverage across multiple A-rated carriers, finding competitive rates with no coverage gaps.',
  },
  {
    number: '03',
    title: 'Get Covered — Same Day',
    meta: 'COI in hand',
    description:
      'Bind your policy and receive your Certificate of Insurance the same day. Never miss a job start over missing proof of insurance.',
    payoff: true,
  },
];

export default function HowItWorks() {
  return (
    <section className="blue-gradient-section py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading — left-aligned on desktop so it does not read as another centred card deck */}
        <div className="max-w-2xl mb-14 sm:mb-20">
          <span className="label-text text-[#29c4a9] font-label text-sm block mb-3">
            Getting Covered Is Simple
          </span>
          <h2 className="font-headline font-bold text-3xl sm:text-4xl text-text">
            Insured in 3 Easy Steps
          </h2>
          <p className="text-gray-400 mt-4 text-base leading-relaxed">
            From your first call to holding your COI — most contractors are fully covered the
            same day.
          </p>
        </div>

        <ol className="relative grid gap-12 sm:gap-14 lg:grid-cols-3 lg:gap-10">
          {/* The rail: vertical through the number gutter on mobile, horizontal behind the
              numbers on desktop. Sits behind the markers, hence -z-0 / relative markers. */}
          <span
            aria-hidden="true"
            className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-[#2ea3f2]/50 via-[#2ea3f2]/20 to-[#f59e0b]/40 lg:left-0 lg:right-0 lg:top-[27px] lg:bottom-auto lg:h-px lg:w-auto lg:bg-gradient-to-r"
          />

          {steps.map((step) => (
            <li key={step.number} className="relative flex gap-6 lg:flex-col lg:gap-0">
              {/* Number marker — the only graphic. Opaque ground so the rail passes behind it. */}
              <div className="flex-shrink-0 lg:mb-7">
                <span
                  className={`relative flex h-14 w-14 items-center justify-center rounded-full bg-[#ffffff] font-headline text-lg font-bold ring-1 ${
                    step.payoff
                      ? 'text-[#f59e0b] ring-[#f59e0b]/45'
                      : 'text-[#2ea3f2] ring-[#2ea3f2]/40'
                  }`}
                >
                  {step.number}
                </span>
              </div>

              <div className="pb-1 lg:pr-6">
                <div
                  className={`label-text font-label text-[11px] mb-2 ${
                    step.payoff ? 'text-[#f59e0b]' : 'text-gray-500'
                  }`}
                >
                  {step.meta}
                </div>
                <h3 className="font-headline font-semibold text-text text-xl mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-[15px] leading-relaxed">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-16 flex flex-col items-start gap-4 border-t border-black/6 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-gray-400 text-sm">
            Most contractors finish step one in under five minutes.
          </p>
          <Link
            href="/quote/"
            className="inline-flex flex-shrink-0 items-center gap-2 bg-[#2ea3f2] hover:bg-[#1a8fd4] text-white font-headline font-bold px-8 py-3.5 rounded text-base transition-all hover:shadow-[0_0_24px_rgba(46,163,242,0.45)] hover:scale-[1.02]"
          >
            Start Your Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
