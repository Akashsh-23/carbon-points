'use client';

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import LogoutButton from "@/components/LogoutButton";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const userName = session?.user?.name || 'User';

  const navItems = [
    { href: '/', label: 'Dashboard' },
    { href: '/activities', label: 'Activities' },
    { href: '/rewards', label: 'Rewards' },
    { href: '/community', label: 'Community' },
    { href: '/profile', label: 'Profile' },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Carbon Points</h1>
        </div>
        {session?.user && (
          <div className="mb-4">
            <p className="text-sm text-gray-400">Welcome,</p>
            <p className="font-medium">{userName}</p>
            <LogoutButton />
          </div>
        )}
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block py-2 px-4 rounded transition-colors ${
                pathname === item.href
                  ? 'bg-gray-700 text-white'
                  : 'hover:bg-gray-700 text-gray-300'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
} 