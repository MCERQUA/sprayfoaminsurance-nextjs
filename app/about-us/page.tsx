import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTABar from '@/components/CTABar';
import StatBar from '@/components/StatBar';
import FAQSection from '@/components/FAQSection';
import { aboutFaqs } from '@/lib/faqs';

export const metadata: Metadata = {
  title: 'About Us | Spray Foam Insurance Call 844-967-5247',
  description: 'Spray Foam Insurance — SPF contractor coverage specialists since 2009. Serving contractors in all 50 states with tailored GL, workers comp, and specialty programs.',
  alternates: { canonical: 'https://sprayfoaminsurance.com/about-us' },
};

const team = [
  { name: 'Jessica Rabbit', role: 'Consultant Officer', photo: '/assets/images/team/team-01.jpg' },
  { name: 'Robert Brown', role: 'Product Analyst', photo: '/assets/images/team/team-02.jpg' },
  { name: 'Elaine Chao', role: 'Service Officer', photo: '/assets/images/team/team-03.jpg' },
];

export default function AboutUsPage() {
  return (
    <>
      <PageHero title="About Us" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About US' }]} />
      </div>

      {/* Intro — "We Listen And Work Together..." */}
      <section className="bg-background py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="label-text">ABOUT US</span>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-text mt-3 mb-6">
            We Listen And Work Together To Provide You The Best Coverage.
          </h2>
          <p className="font-label text-muted leading-relaxed">
            We like to listen to our customers because they know their business very well. Most
            of our clients have a lifetime of construction experience and they have tons of
            safety knowledge like work site safety training and applicator training. As much as
            you know about spray foam we know about spray foam contractors insurance. We try to
            ask only the questions we need in order to keep our time short on the phone. Once we
            have gathered your information we shop around for you. Our proprietary quote engine
            allows us to gather your information once and then shop your company with multiple
            carriers. We write thousands of contractors coast to coast every year.
          </p>
        </div>
      </section>

      {/* My Story */}
      <section className="bg-surface border-y border-primary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <Image
              src="/assets/images/josh-cotner.webp"
              alt="Josh Cotner - Spray Foam Insurance Specialist"
              width={500}
              height={600}
              className="rounded-xl object-cover w-full"
            />
            <div>
              <span className="label-text">ABOUT US</span>
              <h3 className="font-headline text-2xl md:text-3xl font-bold text-text mt-2 mb-6 border-l-4 border-primary pl-4">
                MY STORY
              </h3>
              <div className="space-y-4 font-label text-muted leading-relaxed">
                <p>
                  My name is Josh Cotner and I used to work in construction. I fell through a
                  roof in 2005 and had a nightmare workers compensation claim. I needed to
                  support my family and I learned a lot about liability and insurance during my
                  recovery time. I had to fight the workers compensation company to get the
                  results I was entitled to.
                </p>
                <p>
                  After my injury I learned a lot about insurance and the law and I started
                  selling insurance with a National Contractors Insurance Company, RRG which was
                  started by ABC Supply.
                </p>
                <p>
                  I worked with them for several years until the depression took its toll on the
                  insurance carriers reserves. NCIC was shut down but all my roofers still needed
                  coverage, so I worked and found other insurance companies to work with that
                  liked writing roofing insurance.
                </p>
                <p>
                  I have sold a lot of insurance to contractors over the years and I have seen it
                  all. I have helped thousands of spray foam contractors find affordable
                  insurance, cover the construction risks, keep money in their pockets, and fight
                  for coverage to pay claims for my clients.
                </p>
              </div>

              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-primary/10">
                <Image
                  src="/assets/images/josh-cotner.webp"
                  alt="Josh Cotner"
                  width={64}
                  height={64}
                  className="rounded-full object-cover w-16 h-16"
                />
                <div>
                  <p className="font-headline font-bold text-text">Josh Cotner</p>
                  <p className="text-muted text-sm italic">(CEO / Founder)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatBar
        stats={[
          { value: '2,500+', label: 'Happy Customer' },
          { value: '12', label: 'Staff Members' },
          { value: '20,000+', label: 'Work Hours' },
          { value: '5', label: 'Win Awarded' },
        ]}
      />

      {/* Team — replicated verbatim from live site (Divi demo placeholder data, see report) */}
      <section className="bg-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name} className="glass-card overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-headline font-bold text-text text-lg">{member.name}</h3>
                  <p className="text-muted text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-headline text-3xl font-bold text-text text-center mb-10">
            Frequently Asked Questions
          </h2>
          <FAQSection items={aboutFaqs} />
        </div>
      </section>

      <CTABar />
    </>
  );
}
