import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon?: LucideIcon;
}

export default function ServiceCard({ title, description, href, icon: Icon }: ServiceCardProps) {
  return (
    <Link href={href} className="block group">
      <div className="glass-card p-6 h-full flex flex-col">
        {Icon && (
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        )}
        <h3 className="font-headline font-bold text-lg text-text mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted leading-relaxed flex-1">
          {description}
        </p>
        <div className="flex items-center gap-1 text-primary text-sm font-semibold mt-4 group-hover:gap-2 transition-all">
          Learn More <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}
