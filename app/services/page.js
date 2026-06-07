import PageHero from '../../components/PageHero';

export default function Page() {
  return (
    <>
      <PageHero
        title="Services"
        subtitle="Comprehensive insurance coverage tailored for the spray foam insulation industry."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto prose-content">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mt-10 mb-4">Insurance Services</h2>
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mt-10 mb-4">General Liability</h2>
        <h4 className="text-lg font-heading font-semibold text-gray-800 mt-6 mb-2">More Details&gt;</h4>
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mt-10 mb-4">Workers Compensation</h2>
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mt-10 mb-4">Commercial Auto</h2>
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mt-10 mb-4">Our Comprehensive Insurance Services for Spray Foam Contractors</h2>
        <h4 className="text-lg font-heading font-semibold text-gray-800 mt-6 mb-2">Expertise in Spray Foam Insurance</h4>
        <h4 className="text-lg font-heading font-semibold text-gray-800 mt-6 mb-2">Personalized Service</h4>
        <h4 className="text-lg font-heading font-semibold text-gray-800 mt-6 mb-2">Industry Partnerships</h4>
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mt-10 mb-4">We're Here To Help Any-Time Any-Day</h2>
        <h3 className="text-xl font-heading font-semibold text-gray-900 mt-8 mb-3">Hours a Day</h3>
        <h3 className="text-xl font-heading font-semibold text-gray-900 mt-8 mb-3">Days A Year</h3>
        <h3 className="text-xl font-heading font-semibold text-gray-900 mt-8 mb-3">Hours Per Year</h3>
        <h3 className="text-xl font-heading font-semibold text-gray-900 mt-8 mb-3">Happy Clients</h3>
        <p className="text-gray-600 leading-relaxed mb-4">With many years of dedicated focus on the spray foam industry, we’ve honed our expertise to understand the unique risks and needs of spray foam contractors. Our specialized knowledge allows us to provide tailored insurance solutions that truly protect your business.</p>
        <p className="text-gray-600 leading-relaxed mb-4">We pride ourselves on delivering personalized service. We work closely with each client, taking the time to understand your specific requirements. This ensures you receive insurance solutions that match your business goals and preferences, with a personal touch you can trust.</p>
        <p className="text-gray-600 leading-relaxed mb-4">We’ve cultivated strong partnerships within the spray foam industry. These connections enable us to stay updated on industry trends, regulations, and emerging risks, so you can benefit from the latest insights and solutions when you choose us as your insurance partner.</p>
        </div>
      </section>
    </>
  );
}
