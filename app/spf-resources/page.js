import PageHero from '../../components/PageHero';

export default function Page() {
  return (
    <>
      <PageHero title="Resources" />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-600">Content for this page is being updated. Please check back soon or <a href="/contact-us/" className="text-secondary hover:underline">contact us</a> for more information.</p>
        </div>
      </section>
    </>
  );
}
