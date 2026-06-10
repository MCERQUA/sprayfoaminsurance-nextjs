import { clsx } from 'clsx';

interface FormCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export default function FormCard({ children, className, title, subtitle }: FormCardProps) {
  return (
    <div className={clsx('glass-card p-8 max-w-2xl mx-auto', className)}>
      {title && (
        <div className="mb-6">
          <h2 className="font-headline font-bold text-2xl text-text mb-1">{title}</h2>
          {subtitle && <p className="text-muted text-sm">{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  );
}
