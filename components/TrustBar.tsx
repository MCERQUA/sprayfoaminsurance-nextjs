import Image from 'next/image';
import { ShieldCheck, MapPin, Award, BadgeCheck, CheckCircle } from 'lucide-react';

const signals = [
  { icon: ShieldCheck, label: 'A-Rated Carrier Partners', color: 'text-[#2ea3f2]', bg: 'bg-[#2ea3f2]/10' },
  { icon: MapPin,      label: 'Licensed in All 50 States', color: 'text-[#29c4a9]', bg: 'bg-[#29c4a9]/10' },
  { icon: Award,       label: '15+ Years SPF-Only Focus',  color: 'text-[#2ea3f2]', bg: 'bg-[#2ea3f2]/10' },
  { icon: BadgeCheck,  label: '500+ Contractors Insured',  color: 'text-[#29c4a9]', bg: 'bg-[#29c4a9]/10' },
  { icon: CheckCircle, label: 'Same-Day Certificates',     color: 'text-[#f59e0b]', bg: 'bg-[#f59e0b]/10'  },
];

const carrierLogos = [
  { src: '/assets/images/carriers/client-logo1.png', alt: 'Carrier Partner', w: 172, h: 47 },
  { src: '/assets/images/carriers/client-logo2.png', alt: 'Carrier Partner', w: 151, h: 54 },
  { src: '/assets/images/carriers/client-logo3.png', alt: 'Carrier Partner', w: 169, h: 44 },
  { src: '/assets/images/carriers/client-logo4.png', alt: 'Carrier Partner', w: 144, h: 56 },
];

export default function TrustBar() {
  return (
    <div className="border-y border-white/5 bg-[#080d16]">
      {/* Credibility signals row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {signals.map(({ icon: Icon, label, color, bg }) => (
            <div key={label} className="flex items-center gap-3">
              <div className={`flex-shrink-0 w-8 h-8 rounded-full ${bg} flex items-center justify-center`}>
                <Icon className={`w-4 h-4 ${color}`} />
              </div>
              <span className="text-gray-300 text-xs font-body leading-snug">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hairline divider */}
      <div className="section-divider" />

      {/* Carrier logo strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap items-center justify-center gap-6">
          <span className="label-text text-gray-500 text-[10px] tracking-widest mr-2 whitespace-nowrap">
            Our Carriers
          </span>
          {carrierLogos.map((logo, i) => (
            <Image
              key={i}
              src={logo.src}
              alt={logo.alt}
              width={logo.w}
              height={logo.h}
              className="grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
