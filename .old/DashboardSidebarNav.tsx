'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, FileText, Award, Clock, FolderOpen, User } from 'lucide-react';
import { clsx } from 'clsx';

const sidebarLinks = [
  { label: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { label: 'My Policies', href: '/dashboard/policies', icon: FileText },
  { label: 'Certificates', href: '/dashboard/certificates', icon: Award },
  { label: 'Quote History', href: '/dashboard/quotes', icon: Clock },
  { label: 'Documents', href: '/dashboard/documents', icon: FolderOpen },
  { label: 'Profile', href: '/dashboard/profile', icon: User },
];

export default function DashboardSidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="flex-1 px-3 py-4 space-y-1">
      {sidebarLinks.map(({ label, href, icon: Icon }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={clsx(
              'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-sm font-medium',
              isActive
                ? 'bg-primary/15 text-primary border border-primary/20'
                : 'text-muted hover:text-primary hover:bg-primary/10 border border-transparent'
            )}
          >
            <Icon className={clsx('w-4 h-4 shrink-0', isActive ? 'text-primary' : '')} />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
