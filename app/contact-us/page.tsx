import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTABar from '@/components/CTABar';
import ContactForm from '@/components/ContactForm';
import FAQSection from '@/components/FAQSection';
import GlassCard from '@/components/GlassCard';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { contactFaqs } from '@/lib/faqs';

export const metadata: Metadata = {
  title: 'Contact Us | Spray Foam Insurance Call 844-967-5247',
  description: 'Contact our spray foam insurance specialists. Call 844-967-5247 or send us a message. GL, workers comp, and equipment coverage quotes available.',
  alternates: { canonical: 'https://sprayfoaminsurance.com/contact-us' },
  keywords: ['contact spray foam insurance', '844-967-5247', 'spray foam insurance agent', 'SPF insurance quote'],
  openGraph: {
    title: 'Contact Spray Foam Insurance | 844-967-5247',
    description: 'Get in touch with our spray foam insurance specialists. Fast response guaranteed.',
    type: 'website',
  },
};

const officeHours = [
  'Monday: 9:00 AM – 5:00 PM',
  'Tuesday: 9:00 AM – 5:00 PM',
  'Wednesday: 9:00 AM – 5:00 PM',
  'Thursday: 9:00 AM – 5:00 PM',
  'Friday: 9:00 AM – 5:00 PM',
];

export default function ContactUsPage() {
  return (
    <>
      <PageHero title="Contact Us" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact US' }]} />
      </div>

      <section className="bg-background pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted font-label leading-relaxed">
            At The Contractor&apos;s Choice Agency Inc., we&apos;re here to provide you with the
            best insurance solutions tailored to your needs. Whether you&apos;re looking for
            auto, home, life, or business insurance, our team of dedicated professionals is ready
            to assist you.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left — Send Us A Message */}
          <div>
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-text mb-3">
              Send Us A Message
            </h2>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Have questions or need assistance? We&apos;re here to help. Feel free to send us a
              message using the form below, and one of our experienced team members will get back
              to you promptly. Your inquiries are important to us, and we look forward to
              assisting you with any insurance-related needs or inquiries you may have.
            </p>

            <ContactForm />
          </div>

          {/* Right — Office Location */}
          <div>
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-text mb-6">
              Office Location
            </h2>
            <div className="space-y-4">
              <GlassCard className="p-6 flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-headline font-bold text-text mb-1">Address</p>
                  <p className="text-muted text-sm">12220 E Riggs Road, Suite #105, Chandler, AZ 85249, United States</p>
                </div>
              </GlassCard>

              <GlassCard className="p-6 flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-headline font-bold text-text mb-1">Call Us Today</p>
                  <a href="tel:8449675247" className="text-primary text-sm hover:text-accent transition-colors">
                    Tel.: +1 844-967-5247
                  </a>
                </div>
              </GlassCard>

              <GlassCard className="p-6 flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-headline font-bold text-text mb-1">Email Us</p>
                  <a href="mailto:Josh@sprayfoaminsurance.com" className="text-primary text-sm hover:text-accent transition-colors block">
                    Josh@sprayfoaminsurance.com
                  </a>
                  <a href="mailto:info@sprayfoaminsurance.com" className="text-primary text-sm hover:text-accent transition-colors block">
                    info@sprayfoaminsurance.com
                  </a>
                </div>
              </GlassCard>

              <GlassCard className="p-6 flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-headline font-bold text-text mb-1">Office Hours</p>
                  {officeHours.map((line) => (
                    <p key={line} className="text-muted text-sm">{line}</p>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-text font-label leading-relaxed mb-4">
            You&apos;re always welcome to stop by our office during business hours, or if it&apos;s
            more convenient, feel free to give us a call or send us an email. We&apos;re happy to
            schedule a time that works best for you!
          </p>
          <p className="text-muted text-sm leading-relaxed">
            Your protection is our priority. We&apos;re committed to offering you the guidance and
            support you need to make informed decisions about your insurance coverage. Let us
            help you find peace of mind.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="font-headline font-bold text-text text-2xl md:text-3xl text-center mb-8">
          Frequently Asked Questions
        </h2>
        <FAQSection items={contactFaqs} />
      </div>

      <CTABar />
    </>
  );
}
