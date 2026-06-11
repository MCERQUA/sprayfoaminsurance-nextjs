import { Wind, Layers, Umbrella, Home, Building2, Hammer } from 'lucide-react';

const operations = [
  {
    icon: Wind,
    title: 'Open-Cell Foam Applicators',
    description:
      'Soft-cell SPF presents off-gassing and improper-cure liability that standard GL policies exclude. Our open-cell coverage is written to close those gaps.',
    color: 'text-[#2ea3f2]',
    bg: 'bg-[#2ea3f2]/15',
    border: 'border-t-[#2ea3f2]',
  },
  {
    icon: Layers,
    title: 'Closed-Cell Foam Applicators',
    description:
      'High-density SPF brings elevated risks — vapor barrier disputes, adhesion failures, and moisture claims. Policies built for closed-cell work, not generic construction.',
    color: 'text-[#29c4a9]',
    bg: 'bg-[#29c4a9]/15',
    border: 'border-t-[#29c4a9]',
  },
  {
    icon: Umbrella,
    title: 'SPF Roofing Contractors',
    description:
      'Roofing foam requires coverage for overspray drift, UV coating liability, and substrate adhesion claims. We understand SPF roof systems inside and out.',
    color: 'text-[#2ea3f2]',
    bg: 'bg-[#2ea3f2]/15',
    border: 'border-t-[#2ea3f2]',
  },
  {
    icon: Home,
    title: 'Residential Applicators',
    description:
      'Owner-occupied job sites demand extra diligence. Coverage for property damage, odor complaints, and accidental overspray on residential insulation projects.',
    color: 'text-[#29c4a9]',
    bg: 'bg-[#29c4a9]/15',
    border: 'border-t-[#29c4a9]',
  },
  {
    icon: Building2,
    title: 'Commercial & Industrial Contractors',
    description:
      'Warehouses, cold storage, and industrial facilities require higher limits and GC-specific endorsements. We place the coverage large-project owners demand.',
    color: 'text-[#f59e0b]',
    bg: 'bg-[#f59e0b]/15',
    border: 'border-t-[#f59e0b]',
  },
  {
    icon: Hammer,
    title: 'New Construction & Retrofit',
    description:
      'Whether you\'re spraying a new build or retrofitting existing structures, your policy adapts to project type, timeline, and subcontractor insurance requirements.',
    color: 'text-[#2ea3f2]',
    bg: 'bg-[#2ea3f2]/15',
    border: 'border-t-[#2ea3f2]',
  },
];

export default function WhoWeServe() {
  return (
    <section className="blue-gradient-section py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="label-text text-[#29c4a9] font-label text-sm block mb-3">
            Who We Serve
          </span>
          <h2 className="font-headline font-bold text-3xl sm:text-4xl text-white mb-4">
            Built for Every Spray Foam Operation
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
            From a one-rig residential crew to a multi-state commercial operation — we write coverage
            that fits your specific work, not a generic contractor template.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {operations.map(({ icon: Icon, title, description, color, bg, border }) => (
            <div
              key={title}
              className={`group bg-[#0a1628]/80 border-t-2 ${border} border-x border-b border-white/10 rounded-2xl p-7 hover:bg-[#0e2040]/90 transition-all hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(46,163,242,0.12)] flex flex-col`}
            >
              <div
                className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center mb-5 flex-shrink-0`}
              >
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
              <h3 className="font-headline font-semibold text-white text-lg mb-3 group-hover:text-[#2ea3f2] transition-colors">
                {title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
