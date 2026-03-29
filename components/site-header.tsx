"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ThemeToggle } from "@/components/theme-toggle";
import { navItems } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-line/80 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-slate-950/85">
      <div className="container-shell flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-18 w-18 items-center justify-center rounded-full border border-line bg-slate-950 dark:border-white/10 dark:bg-slate-900">
            <Image src="/logo.webp" alt="TS monogram logo" width={40} height={40} className="h-full w-full object-contain rounded-full" />
          </div>
          <div>
            <p className="text-lg font-black text-brand-dark">Chukwuemeka Henry Izukanne</p>
            <p className="text-md text-slate-400 dark:text-slate-500">Frontend engineer</p>
          </div>
        </Link>

        <div className="flex items-center gap-5">
          <ThemeToggle />
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link key={item.href} href={item.href} className={`nav-link ${active ? "nav-link-active" : ""}`}>
                  {item.label}
                </Link>
              );
            })}
            
          </nav>
        </div>
      </div>
    </header>
  );
}
