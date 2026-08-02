interface Stat {
  label: string;
  value: string;
}

interface StatBarProps {
  stats: Stat[];
}

// Column count derives from how many stats are passed, capped at 4. The class
// strings are written out in full rather than interpolated — Tailwind scans
// source text, so a constructed `md:grid-cols-${n}` would be purged from the
// build and the grid would silently collapse to a single column.
// The 4-stat case resolves to the previous hardcoded value, so it is a no-op.
const GRID_BY_COUNT: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-2 md:grid-cols-3',
  4: 'grid-cols-2 md:grid-cols-4',
};

export default function StatBar({ stats }: StatBarProps) {
  const columns = GRID_BY_COUNT[Math.min(Math.max(stats.length, 1), 4)];

  return (
    <section className="bg-surface border-y border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className={`grid ${columns} gap-6 text-center`}>
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
