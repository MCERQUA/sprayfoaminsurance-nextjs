import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import FAQSection from '@/components/FAQSection';
import CTABar from '@/components/CTABar';
import GlassCard from '@/components/GlassCard';
import ServiceCard from '@/components/ServiceCard';
import { AlertTriangle, Shield, Users, Truck } from 'lucide-react';
import { suretyBondsFaqs } from '@/lib/faqs';

export const metadata: Metadata = {
  title: 'Surety Bonds for Spray Foam Contractors',
  description: 'Performance bonds, payment bonds, and license bonds for spray foam contractors. Meet contract requirements and state licensing. Fast quotes available.',
  alternates: { canonical: 'https://sprayfoaminsurance.com/services/surety-bonds' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'InsuranceAgency',
      name: 'Spray Foam Insurance',
      url: 'https://sprayfoaminsurance.com',
      telephone: '844-967-5247',
      serviceType: 'Surety Bonds',
    },
  ],
};

export default function SuretyBondsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        title="Surety Bonds for Spray Foam Contractors"
        subtitle="Surety bonds are a form of risk management that goes beyond standard insurance coverage. They serve as guarantees that you, as a spray foam contractor, will fulfill your obligations."
        ctaText="Get a Quote"
        ctaHref="/quote"
        badge="Surety Bonds"
      />

      <section className="bg-surface py-12 border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <ServiceCard
              icon={Shield}
              title="General liability"
              description="Discover the comprehensive coverage you need to safeguard your spray foam contracting business. Our General Liability insurance is designed to shield you from unforeseen risks and give you the confidence to build a brighter future."
              href="/services/general-liability-insurance"
            />
            <ServiceCard
              icon={Users}
              title="Workers compensation"
              description="Prioritize your team's well-being with our Workers' Compensation coverage. We're here to ensure your employees are protected, and your business remains secure in the face of workplace injuries. Explore how we can help you create a safer work environment."
              href="/services/workers-compensation-insurance-for-spray-foam-contractors"
            />
            <ServiceCard
              icon={Truck}
              title="Commercial auto"
              description="Your business relies on wheels, and so do we. Our Commercial Auto Insurance ensures your vehicles stay on the road, so you can focus on what matters most—serving your clients. Explore how we can drive your success with tailored coverage."
              href="/services/commercial-auto"
            />
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-text mb-6 text-center">
            Building Trust, Meeting Legal Requirements
          </h2>
          <p className="text-muted font-label leading-relaxed mb-8">
            In the dynamic world of spray foam contracting, trust and professionalism are your currency. Clients rely on your expertise to deliver exceptional insulation solutions. However, the industry&apos;s regulatory landscape demands more than just technical prowess—it requires adherence to licenses, permits, and performance standards. That&apos;s where Surety Bonds from Spray Foam Insurance come into play. We offer essential surety bonds tailored to your needs, ensuring compliance, instilling confidence in your clients, and paving the way for your business success.
          </p>
          <GlassCard className="p-6 border-l-4 border-primary">
            <h3 className="font-headline font-bold text-text mb-2">Understanding the Essentials</h3>
            <p className="text-muted font-label text-sm leading-relaxed">
              Surety bonds are a form of risk management that goes beyond standard insurance coverage. They serve as guarantees that you, as a spray foam contractor, will fulfill your obligations, whether it&apos;s completing projects, adhering to regulations, or meeting financial commitments. Surety bonds are crucial for maintaining your reputation as a reliable contractor and demonstrating your commitment to ethical and professional practices.
            </p>
          </GlassCard>
        </div>
      </section>

      <section className="blue-gradient-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-text">
              Why Are Surety Bonds Essential for Spray Foam Contractors?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <GlassCard className="p-6 border-l-4 border-primary">
              <div className="w-10 h-10 rounded-lg bg-highlight/10 flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="font-headline font-bold text-base text-text mb-2">License and Permit Bonds</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                Many jurisdictions require spray foam contractors to obtain license and permit bonds as a prerequisite for operating legally. These bonds ensure that you adhere to local laws and regulations, providing peace of mind to clients and authorities.
              </p>
            </GlassCard>
            <GlassCard className="p-6 border-l-4 border-primary">
              <div className="w-10 h-10 rounded-lg bg-highlight/10 flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="font-headline font-bold text-base text-text mb-2">Performance Bonds</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                Performance bonds are a testament to your commitment to delivering on your promises. They reassure clients that you will complete projects as agreed, even in unforeseen circumstances.
              </p>
            </GlassCard>
            <GlassCard className="p-6 border-l-4 border-primary">
              <div className="w-10 h-10 rounded-lg bg-highlight/10 flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="font-headline font-bold text-base text-text mb-2">Financial Responsibility</h3>
              <p className="text-muted font-label text-sm leading-relaxed">
                Surety bonds also serve as indicators of your financial stability and responsibility. They demonstrate your ability to meet financial obligations, which can be crucial in securing contracts and clients.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-text mb-4 text-center">
            Key Types of Surety Bonds for Spray Foam Contractors
          </h2>
          <p className="text-muted font-label leading-relaxed mb-6">
            In the spray foam contracting industry, maintaining trust and professionalism is paramount. Our Surety Bonds for spray foam contractors offer a comprehensive solution to meet legal requirements, instill confidence in your clients, and safeguard the integrity of your projects. Whether it&apos;s adhering to regulations, completing projects on time, ensuring payments to subcontractors and suppliers, or upholding your commitment to contracts, our tailored Surety Bonds cover your diverse needs, ensuring your reputation as a reliable and responsible contractor remains unblemished.
          </p>
          <div className="rounded-3xl bg-gradient-to-br from-secondary to-primary p-8 sm:p-10 text-white shadow-xl">
            <ul className="space-y-3 font-label text-sm sm:text-base">
              <li>
                <span className="font-semibold">License and Permit Bonds:</span> These bonds are typically required by local authorities to ensure that you comply with regulations and standards specific to your industry and location.
              </li>
              <li>
                <span className="font-semibold">Performance Bonds:</span> Performance bonds guarantee that you will complete projects according to contract terms, protecting clients from potential losses.
              </li>
              <li>
                <span className="font-semibold">Payment Bonds:</span> Payment bonds ensure that you will pay subcontractors, laborers, and suppliers, preventing disputes and project disruptions.
              </li>
              <li>
                <span className="font-semibold">Bid Bonds:</span> Bid bonds provide assurance that you will enter into a contract if your bid is accepted, safeguarding the integrity of the bidding process.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="font-headline text-2xl font-bold text-text mb-3">Building Confidence and Reputation</h2>
            <p className="text-muted font-label leading-relaxed">
              Surety bonds from Spray Foam Insurance are more than legal requirements; they are tools for building trust and enhancing your reputation. Clients appreciate the financial security they provide and the assurance that you will meet your obligations. By obtaining and displaying these bonds, you demonstrate your commitment to professionalism and ethical practices.
            </p>
          </div>
          <div>
            <h2 className="font-headline text-2xl font-bold text-text mb-3">Choose Spray Foam Insurance for Your Surety Bond Needs</h2>
            <p className="text-muted font-label leading-relaxed mb-4">
              At Spray Foam Insurance, we specialize in providing Surety Bonds tailored to the unique requirements of spray foam contractors. Our experienced team understands the intricacies of your industry and the specific bond needs you may encounter. We&apos;re committed to helping you navigate the world of surety bonds, ensuring you have the coverage necessary to instill confidence in your clients and meet legal requirements.
            </p>
            <p className="text-muted font-label leading-relaxed">
              Ready to discuss your insurance and surety bond needs or have questions about Surety Bonds? Contact Spray Foam Insurance today. We&apos;re here to help you build trust, meet legal obligations, and succeed in the competitive world of spray foam contracting.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-headline text-3xl font-bold text-text text-center mb-10">
            Surety Bond FAQ
          </h2>
          <FAQSection items={suretyBondsFaqs} />
        </div>
      </section>

      <CTABar />
    </>
  );
}
