import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTABar from '@/components/CTABar';
import RigQuoteForm from '@/components/RigQuoteForm';
import GlassCard from '@/components/GlassCard';
import FormCard from '@/components/FormCard';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Spray Foam Rig & Equipment Insurance | Inland Marine',
  description:
    'Specialized insurance for spray foam rigs: proportioners, hoses, generators, trailers. Replacement cost coverage. Fast quotes for SPF contractors.',
  alternates: { canonical: 'https://sprayfoaminsurance.com/inland-marine/spray_foam_rig_insurance' },
  keywords: [
    'spray foam rig insurance',
    'proportioner insurance',
    'SPF equipment insurance',
    'spray foam trailer insurance',
  ],
  openGraph: {
    title: 'Spray Foam Rig & Equipment Insurance',
    description: 'Purpose-built inland marine coverage for spray foam rigs and equipment.',
    type: 'website',
  },
};

const coverList = [
  {
    label: 'Tools & Equipment:',
    body: 'Essential for contractors and business that frequently move equipment between job sites.',
  },
  {
    label: 'Goods in Transit:',
    body: 'For businesses that ship products domestically, covering the transportation of goods via trucks, trains, or other land-based methods.',
  },
  {
    label: 'Fine Arts & Antiques:',
    body: 'For collectors and businesses that transport valuable artwork or antiques.',
  },
  {
    label: 'Electronics:',
    body: 'Ideal for technology companies or individuals who transport high-value electronics such as laptops, cameras, or servers.',
  },
  {
    label: 'Construction Materials:',
    body: 'Covers the raw materials and supplies used for building or infrastructure projects while they are being transported or stored temporarily off-site.',
  },
];

const whyList = [
  'Mobile or Movable Property',
  'Property in Transit',
  'Property Temporarily Stores Off-Site',
];

const whoNeedsList = [
  {
    label: 'Contractors:',
    body: 'Protect valuable equipment as you move from one job site to another.',
  },
  {
    label: 'Retailers & Wholesalers:',
    body: 'Ensure goods are covered while being transported to customers or between business locations.',
  },
  {
    label: 'Art Collectors & Dealers:',
    body: 'Secure coverages for high-value pieces while in transit or stored temporarily off-site.',
  },
  {
    label: 'IT Professionals:',
    body: 'Safeguard servers, computers, and other technology equipment during transport or setup at client locations.',
  },
];

export default function SprayFoamRigInsurancePage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 pt-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Inland Marine', href: '/inland-marine' },
            { label: 'Spray Foam Rig Insurance' },
          ]}
        />
      </div>

      <PageHero title="Inland Marine For Spray Foam Contractors" />

      {/* Lead form */}
      <section className="max-w-3xl mx-auto px-4 pb-12">
        <FormCard title="Spray Foam Contractors Inland Marine Form">
          <RigQuoteForm />
        </FormCard>
      </section>

      {/* Educational content */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <GlassCard className="p-8">
          <h2 className="font-headline font-bold text-text text-2xl mb-1 text-center">
            Inland Marine Insurance
          </h2>
          <h4 className="font-headline font-semibold text-primary text-sm text-center mb-6">
            Protect Your Property on the Move
          </h4>

          <p className="text-muted text-sm mb-4">
            Inland marine insurance provides coverage for your property that is in transit,
            movable, or used for specialized purposes. Whether you&apos;re transporting goods,
            equipment, or valuable materials, inland marine insurance ensures you&apos;re
            protected against loss or damage while on the go.
          </p>
          <p className="text-muted text-sm mb-6">
            At Spray Foam Insurance, we understand that certain items don&apos;t stay in one
            place and need coverage that travels with them. Our inland marine policies are
            designed to safeguard your high-value assets, ensuring peace of mind wherever your
            business takes you.
          </p>

          <h3 className="font-headline font-bold text-text mb-2">
            What Does Inland Marine Insurance Cover?
          </h3>
          <p className="text-muted text-sm mb-3">
            Inland marine insurance covers a broad range of movable property, including:
          </p>
          <ul className="space-y-2 mb-6 list-disc list-inside">
            {coverList.map((item) => (
              <li key={item.label} className="text-muted text-sm">
                <span className="font-semibold text-text">{item.label}</span> {item.body}
              </li>
            ))}
          </ul>

          <h3 className="font-headline font-bold text-text mb-2">Why Inland Marine Insurance?</h3>
          <p className="text-muted text-sm mb-3">
            Many assume that standard property insurance will cover these items, but property
            insurance generally protects stationary property. Inland marine insurance provides
            the extra layer of protection for:
          </p>
          <ul className="space-y-1 mb-4 list-disc list-inside">
            {whyList.map((item) => (
              <li key={item} className="text-muted text-sm font-semibold text-text">
                {item}
              </li>
            ))}
          </ul>
          <p className="text-muted text-sm mb-6">
            If you regularly transport goods or equipment, rely on technology in different
            locations, or have other valuable assets on the move, inland marine insurance is an
            essential addition to your coverage plan.
          </p>

          <h3 className="font-headline font-bold text-text mb-2">Who Needs Inland Insurance?</h3>
          <ul className="space-y-2 mb-6 list-disc list-inside">
            {whoNeedsList.map((item) => (
              <li key={item.label} className="text-muted text-sm">
                <span className="font-semibold text-text">{item.label}</span> {item.body}
              </li>
            ))}
          </ul>

          <h3 className="font-headline font-bold text-text mb-2">
            Tailored Solutions For Your Business
          </h3>
          <p className="text-muted text-sm mb-6">
            At Spray Foam Insurance, we provide customized inland marine insurance policies based
            on your unique needs. Our expert team will work with you to assess your risks and
            design a policy that covers your property while in motion or storage.
          </p>

          <h3 className="font-headline font-bold text-text mb-2">Get a Quote Today!</h3>
          <p className="text-muted text-sm">
            Don&apos;t leave your property unprotected while it&apos;s on the move. Contact Spray
            Foam Insurance today to learn more about inland marine insurance and get a
            personalized quote. Let us help you secure your assets, no matter where your business
            takes you.
          </p>
        </GlassCard>
      </section>

      <CTABar />
    </>
  );
}
