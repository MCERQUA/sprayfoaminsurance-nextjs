import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { LayoutDashboard, FileText, Award, Clock, FolderOpen } from 'lucide-react';

const sidebarLinks = [
  { label: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { label: 'My Policies', href: '/dashboard/policies', icon: FileText },
  { label: 'Certificates', href: '/dashboard/certificates', icon: Award },
  { label: 'Quote History', href: '/dashboard/quotes', icon: Clock },
  { label: 'Documents', href: '/dashboard/documents', icon: FolderOpen },
];

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { userId } = await auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const user = await currentUser();

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 bg-surface border-r border-primary/10 flex flex-col fixed top-16 bottom-0 left-0 overflow-y-auto">
        {/* User info */}
        <div className="px-5 py-5 border-b border-primary/10">
          <p className="text-xs label-text text-muted mb-1">Logged in as</p>
          <p className="font-semibold text-text text-sm truncate">
            {user?.firstName} {user?.lastName}
          </p>
          <p className="text-xs text-muted truncate">
            {user?.emailAddresses[0]?.emailAddress}
          </p>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {sidebarLinks.map(({ label, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted hover:text-primary hover:bg-primary/10 transition-all group text-sm font-medium"
            >
              <Icon className="w-4 h-4 group-hover:text-primary transition-colors" />
              {label}
            </Link>
          ))}
        </nav>

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
