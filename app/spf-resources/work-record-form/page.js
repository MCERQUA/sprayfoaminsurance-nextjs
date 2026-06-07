import PageHero from '../../../components/PageHero';

export default function Page() {
  return (
    <>
      <PageHero
        title="Work Record Form"
        subtitle="Spray foam work record form for documentation."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto prose-content">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mt-10 mb-4">Spray Foam Application Work Record</h2>
        <p className="text-gray-600 leading-relaxed mb-4">Spray Foam Application Work Record Our Work Record Form is an essential tool for accurately documenting all critical jobsite data during spray foam insulation projects. This form is designed to capture environmental and material conditions to ensure the optimal application of spray foam insulation. By recording atmospheric and substrate information, we guarantee that each project meets industry standards for safety, performance, and quality.</p>
        <p className="text-gray-600 leading-relaxed mb-4">What the Form Captures:</p>
        <p className="text-gray-600 leading-relaxed mb-4">Proper documentation of these environmental and material conditions helps to:</p>
        <p className="text-gray-600 leading-relaxed mb-4">Our form is straightforward and easy to use. Simply enter the required data during the job, and our system will store the information for easy access and review. This documentation helps maintain a professional standard and ensures the best performance for every spray foam insulation project.</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li className="text-gray-600 leading-relaxed">Jobsite: Record the data, time, location, and jobsite conditions to create a comprehensive log for each project.</li>
          <li className="text-gray-600 leading-relaxed">Atmospheric Conditions: 

Ambient Temperature: This tracks the air temperature at the jobsite to ensure that the foam is applied under optimal conditions.</li>
          <li className="text-gray-600 leading-relaxed">Substrate Temperature: Recording the temperature of the surface where spray foam is applied is crucial for adhesion and overall insulation performance.</li>
          <li className="text-gray-600 leading-relaxed">Moisture Content: Monitoring the moisture levels in the substrate helps prevent foam from absorbing water, which can affect both application and long-term performance.</li>
          <li className="text-gray-600 leading-relaxed">Spray Foam Application Data:

Starting Temperatures: Measure the initial temperatures of the foam material components before application to ensure the correct chemical reaction during spraying.</li>
          <li className="text-gray-600 leading-relaxed">Initial Pressures: Document the pressure levels in the spray foam equipment to ensure the proper mix and delivery of materials.</li>
          <li className="text-gray-600 leading-relaxed">Ensure the foam is applied in compliance with manufacturer and industry guidelines.</li>
          <li className="text-gray-600 leading-relaxed">Minimize the risk of product failure due to environmental factors.</li>
          <li className="text-gray-600 leading-relaxed">Provide a record for quality control and troubleshooting if issues arise.</li>
        </ul>
        </div>
      </section>
    </>
  );
}
