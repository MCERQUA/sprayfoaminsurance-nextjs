import PageHero from '../../components/PageHero';

export default function Page() {
  return (
    <>
      <PageHero
        title="quote"
        subtitle="Get a customized insurance quote for your spray foam business."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto prose-content">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mt-10 mb-4">Join The Spray Foam Insurance Family</h2>
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mt-10 mb-4">Sign Up Form</h2>
        <p className="text-gray-600 leading-relaxed mb-4">Join The Spray Foam Insurance Family Your journey with Spray Foam Insurance is more than just obtaining an insurance quote; it’s an invitation to an exclusive community. By signing up, you’re gaining entry into a close-knit circle of professionals who share your passion and dedication. Welcome to a space where support, expertise, and a sense of belonging come together. Let’s start protecting your business together.</p>
        <p className="text-gray-600 leading-relaxed mb-4">At Spray Foam Insurance, we make it easy to get the insurance coverage you need. Whether you’re looking for auto, home, life, business, or any specialized insurance, our team is here to provide you with a personalized quote that fits your needs and budget.</p>
        <p className="text-gray-600 leading-relaxed mb-4">Get Your Quote Today!</p>
        <p className="text-gray-600 leading-relaxed mb-4">To receive your free, no-obligation quote, please complete the form below or contact us directly at 844-967-5247 to speak with one of our agents. Our team will get back to you within 24 hours with your personalized insurance quote. We’re here to help you every step of the way!</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li className="text-gray-600 leading-relaxed">Submit Your Information: Fill out the simple form below with your details and the type of insurance coverage you’re looking for.</li>
          <li className="text-gray-600 leading-relaxed">Receive Your Quote: One of our experienced agents will review your information and provide you with a customized quote.</li>
          <li className="text-gray-600 leading-relaxed">Review &amp; Decide: We’ll walk you through the options and help you choose the best coverage to protect what matters most.</li>
          <li className="text-gray-600 leading-relaxed">Expert Guidance: Our knowledgeable agents are here to help you find the right coverage.</li>
          <li className="text-gray-600 leading-relaxed">Customized Plans: We tailor each policy to meet your specific needs.</li>
          <li className="text-gray-600 leading-relaxed">Competitive Rates: Get affordable coverage without compromising on protection.</li>
          <li className="text-gray-600 leading-relaxed">Fast &amp; Easy Process: We make getting a quote simple and stress-free.</li>
        </ul>
        </div>
      </section>
    </>
  );
}
