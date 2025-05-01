'use client';

import { signOut } from 'next-auth/react';

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/auth/login' })}
      className="text-red-500 hover:text-red-700 transition-colors"
    >
      Logout
    </button>
  );
} 