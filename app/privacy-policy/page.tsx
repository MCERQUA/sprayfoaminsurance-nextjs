import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTABar from '@/components/CTABar';
import GlassCard from '@/components/GlassCard';

export const metadata: Metadata = {
  title: 'Privacy Policy | Spray Foam Insurance',
  description: 'Spray Foam Insurance privacy policy. Learn how we collect, use, and protect your personal information when you request an insurance quote.',
  alternates: { canonical: 'https://sprayfoaminsurance.com/privacy-policy/' },
};

const sections = [
  {
    title: 'Information We Collect',
    content: [
      'When you request a quote or contact us through our website, we may collect the following personal information:',
      '• Name, email address, and phone number',
      '• Business name and address',
      '• Details about your contracting operations (number of employees, annual revenue, types of work performed)',
      '• Any other information you voluntarily provide when submitting a quote request or contact form',
    ],
  },
  {
    title: 'How We Use Your Information',
    content: [
      'We use the information you provide solely to:',
      '• Prepare and deliver insurance quotes tailored to your spray foam contracting business',
      '• Follow up on quote requests and answer questions about coverage options',
      '• Communicate with you about your policy if you become a client',
      '• Improve our website and services',
      'We do not use your information for unrelated marketing and we do not sell or rent your personal information to third parties.',
    ],
  },
  {
    title: 'Information Sharing',
    content: [
      'We do not sell, trade, or rent your personal information to third parties.',
      'We may share your information with insurance carriers and underwriters solely for the purpose of obtaining quotes and binding coverage on your behalf. These partners are required to keep your information confidential.',
      'We may disclose information if required by law or to protect our legal rights.',
    ],
  },
  {
    title: 'Data Security',
    content: [
      'We implement reasonable technical and organizational measures to protect your personal information from unauthorized access, loss, or misuse.',
      'However, no internet transmission is completely secure. We encourage you to avoid sending sensitive financial information (such as credit card numbers) through contact forms.',
    ],
  },
  {
    title: 'Cookies and Analytics',
    content: [
      'Our website may use cookies and similar technologies to improve your browsing experience and understand how visitors use the site. You can disable cookies in your browser settings, though some features of the site may not function properly as a result.',
      'We may use third-party analytics tools (such as Google Analytics) to collect anonymized data about site traffic. This data does not identify individual users.',
    ],
  },
  {
    title: 'Your Rights',
    content: [
      'You may request access to, correction of, or deletion of the personal information we hold about you at any time by contacting us at josh@sprayfoaminsurance.com.',
      'If you are a California resident, you may have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect and the right to request deletion.',
    ],
  },
  {
    title: 'Changes to This Policy',
    content: [
      'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. Continued use of our website after changes are posted constitutes your acceptance of the updated policy.',
    ],
  },
  {
    title: 'Contact Us',
    content: [
      'If you have questions or concerns about this Privacy Policy, please contact us:',
      'Email: josh@sprayfoaminsurance.com',
      'Phone: 844-967-5247',
      'Spray Foam Insurance is a licensed insurance agency.',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information."
        badge="Legal"
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <GlassCard className="p-8 mb-8">
          <p className="text-muted text-sm">
            <strong className="text-text">Effective Date:</strong> January 1, 2024
          </p>
          <p className="text-muted text-sm mt-2">
            Spray Foam Insurance ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard the personal information you provide when using our website at sprayfoaminsurance.com.
          </p>
        </GlassCard>

        <div className="space-y-6">
          {sections.map((section) => (
            <GlassCard key={section.title} className="p-8">
              <h2 className="text-xl font-headline font-bold text-text mb-4">{section.title}</h2>
              <div className="space-y-3">
                {section.content.map((paragraph, i) => (
                  <p key={i} className="text-muted text-sm leading-relaxed">{paragraph}</p>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      <CTABar />
    </>
  );
}
