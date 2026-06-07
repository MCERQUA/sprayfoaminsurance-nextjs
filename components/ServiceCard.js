import Link from 'next/link';

export default function ServiceCard({ title, description, href, icon }) {
  return (
    <Link href={href} className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="p-6">
        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
          <span className="text-primary group-hover:text-white transition-colors text-2xl">{icon}</span>
        </div>
        <h3 className="font-heading font-semibold text-lg text-gray-900 mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        <span className="inline-block mt-4 text-sm font-medium text-secondary group-hover:translate-x-1 transition-transform">
          Learn More &rarr;
        </span>
      </div>
    </Link>
  );
}
