"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="p-8 h-full">
      <h2 className="text-2xl font-bold">Profile and Password Settings</h2>
      <p className="mb-4 text-gray-500">
        Manage your Profile and Password settings
      </p>
      <div className="tabs tabs-lift">
        <Link
          role="tab"
          href="/profile"
          className={`tab ${pathname === "/profile" ? "tab-active" : ""}`}
        >
          Profile
        </Link>
        <div className="p-6 tab-content bg-base-100 border-base-300">
          {children}
        </div>
        <Link
          role="tab"
          href="/profile/password"
          className={`tab ${pathname === "/profile/password" ? "tab-active" : ""}`}
        >
          Password
        </Link>
        <div className="p-6 tab-content bg-base-100 border-base-300">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
