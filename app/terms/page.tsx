import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTABar from '@/components/CTABar';
import GlassCard from '@/components/GlassCard';

export const metadata: Metadata = {
  title: 'Terms of Service | Spray Foam Insurance',
  description: 'Terms of service for Spray Foam Insurance. Information about using our website, quote requests, and the limitations of the content provided.',
  alternates: { canonical: 'https://sprayfoaminsurance.com/terms/' },
};

const sections = [
  {
    title: 'Acceptance of Terms',
    content: [
      'By accessing or using the Spray Foam Insurance website at sprayfoaminsurance.com ("Site"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Site.',
    ],
  },
  {
    title: 'Informational Purposes Only',
    content: [
      'The content on this Site is provided for general informational purposes only. It does not constitute legal, financial, or professional insurance advice.',
      'Insurance coverage requirements, availability, and pricing vary by state, business type, and individual circumstances. Always consult with a licensed insurance professional before making coverage decisions.',
      'We are a licensed insurance agency. Descriptions of coverage types on this Site are general summaries and do not represent the terms of any specific policy. Actual coverage is governed by the terms and conditions of the issued policy document.',
    ],
  },
  {
    title: 'Quote Requests Are Not Binding',
    content: [
      'Submitting a quote request form on this Site does not constitute a purchase, application, or binding insurance agreement.',
      'A quote request initiates a conversation with our team. Coverage is not bound until a formal application is completed, underwriting is approved, and a policy is issued by a licensed insurance carrier.',
      'Premium estimates provided during the quoting process are not guaranteed and may change based on underwriting review.',
    ],
  },
  {
    title: 'Accuracy of Information',
    content: [
      'We strive to keep the information on this Site accurate and current, but we make no warranties or representations regarding completeness, accuracy, or timeliness.',
      'Insurance regulations, carrier programs, and coverage options change frequently. Always confirm current availability and pricing with our team directly.',
    ],
  },
  {
    title: 'Intellectual Property',
    content: [
      'All content on this Site, including text, graphics, logos, and images, is owned by or licensed to Spray Foam Insurance and is protected by applicable intellectual property laws.',
      'You may not reproduce, distribute, or create derivative works from Site content without our express written permission.',
    ],
  },
  {
    title: 'Third-Party Links',
    content: [
      'This Site may contain links to third-party websites. These links are provided for convenience only. We do not endorse or control those sites and are not responsible for their content or privacy practices.',
    ],
  },
  {
    title: 'Limitation of Liability',
    content: [
      'To the fullest extent permitted by law, Spray Foam Insurance and its agents, officers, and employees shall not be liable for any indirect, incidental, or consequential damages arising from your use of this Site or reliance on information provided here.',
      'Our total liability for any claim arising from use of the Site shall not exceed the amount you paid us in the twelve months preceding the claim, if any.',
    ],
  },
  {
    title: 'Changes to These Terms',
    content: [
      'We reserve the right to update these Terms of Service at any time. Changes take effect when posted to this page. Continued use of the Site after changes are posted constitutes acceptance of the updated terms.',
    ],
  },
  {
    title: 'Governing Law',
    content: [
      'These Terms of Service are governed by the laws of the State of Texas, without regard to its conflict of law provisions.',
    ],
  },
  {
    title: 'Contact Us',
    content: [
      'Questions about these Terms of Service? Reach us at:',
      'Email: josh@sprayfoaminsurance.com',
      'Phone: 844-967-5247',
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        subtitle="Please read these terms before using our website or submitting a quote request."
        badge="Legal"
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <GlassCard className="p-8 mb-8">
          <p className="text-muted text-sm">
            <strong className="text-text">Effective Date:</strong> January 1, 2024
          </p>
          <p className="text-muted text-sm mt-2">
            These Terms of Service govern your use of the Spray Foam Insurance website. Spray Foam Insurance is a licensed insurance agency specializing in coverage for spray polyurethane foam contractors.
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
