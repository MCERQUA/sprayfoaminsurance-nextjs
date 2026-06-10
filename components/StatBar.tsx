interface Stat {
  label: string;
  value: string;
}

interface StatBarProps {
  stats: Stat[];
}

export default function StatBar({ stats }: StatBarProps) {
  return (
    <section className="bg-surface border-y border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <span className="text-4xl font-headline font-bold blue-gradient-text mb-1">
                {s.value}
              </span>
              <span className="text-sm text-muted label-text">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
