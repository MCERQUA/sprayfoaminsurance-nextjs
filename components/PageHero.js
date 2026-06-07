export default function PageHero({ title, subtitle, backgroundImage }) {
  return (
    <section
      className="relative bg-cover bg-center py-24 md:py-32"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      <div className="absolute inset-0 bg-primary/80" />
      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
