import type { Metadata } from 'next';
import Link from 'next/link';
import DashboardSidebarNav from '@/components/DashboardSidebarNav';

export const metadata: Metadata = {
  title: 'Dashboard | Spray Foam Insurance',
  robots: { index: false, follow: false },
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 bg-surface border-r border-primary/10 flex flex-col fixed top-16 bottom-0 left-0 overflow-y-auto">
        {/* User info placeholder */}
        <div className="px-5 py-5 border-b border-primary/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
              <span className="text-primary text-xs font-headline font-bold">SFI</span>
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-text text-sm truncate">Client Portal</p>
              <p className="text-xs text-muted truncate">sprayfoaminsurance.com</p>
            </div>
          </div>
        </div>

        {/* Nav — client component handles active state via usePathname */}
        <DashboardSidebarNav />

        {/* Footer */}
        <div className="px-5 py-4 border-t border-primary/10">
          <Link
            href="/"
            className="text-xs text-muted hover:text-primary transition-colors"
          >
            ← Back to site
          </Link>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 ml-64 bg-background">
        <div className="max-w-6xl mx-auto px-6 py-8">
          {children}
        </div>
      </main>
    </div>
  );
}
