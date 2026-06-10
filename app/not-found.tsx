import Link from 'next/link';
import { Home, ArrowRight, Phone, FileText } from 'lucide-react';
import CTABar from '@/components/CTABar';

const navCards = [
  { href: '/', icon: Home, label: 'Home', desc: 'Go to homepage', color: 'text-primary' },
  { href: '/quote', icon: ArrowRight, label: 'Get a Quote', desc: 'Insurance coverage', color: 'text-accent' },
  { href: '/blog', icon: FileText, label: 'Blog', desc: 'Read insurance guides', color: 'text-highlight' },
  { href: '/contact-us', icon: Phone, label: 'Contact', desc: 'Speak with a specialist', color: 'text-primary' },
];

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1 relative overflow-hidden flex items-center justify-center dot-grid py-20">
        {/* Ambient orbs */}
        <div className="ambient-orb w-96 h-96 bg-primary opacity-10 -top-20 -left-20" />
        <div className="ambient-orb w-80 h-80 bg-accent opacity-10 -bottom-10 right-10" />

        <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
          {/* 404 */}
          <p className="text-8xl sm:text-9xl font-headline font-bold blue-gradient-text leading-none mb-4">
            404
          </p>
          <h1 className="text-3xl sm:text-4xl font-headline font-bold text-text mb-4">
            Page Not Found
          </h1>
          <p className="text-muted max-w-md mx-auto mb-10 leading-relaxed">
            The page you were looking for doesn&apos;t exist. Here are some helpful links to get you back on track.
          </p>

          {/* Navigation cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {navCards.map(({ href, icon: Icon, label, desc, color }) => (
              <Link
                key={href}
                href={href}
                className="glass-card p-5 text-center hover:scale-105 transition-transform flex flex-col items-center"
              >
                <Icon className={`w-8 h-8 ${color} mb-2`} />
                <p className="font-headline font-semibold text-text text-sm mb-0.5">{label}</p>
                <p className="text-muted text-xs">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <CTABar />
    </div>
  );
}
