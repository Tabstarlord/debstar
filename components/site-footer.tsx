import Link from "next/link";

import { navItems, socialLinks } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-white dark:border-white/10 dark:bg-slate-950">
      <div className="container-shell py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <p className="text-base font-semibold text-brand-dark">Developer Portfolio</p>
            <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">
              Crafting high-performance, accessible, and visually stunning web experiences with modern frontend technologies.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink dark:text-white">Navigation</p>
            <div className="mt-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-slate-500 transition hover:text-brand-dark dark:text-slate-400 dark:hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink dark:text-white">Social</p>
            <div className="mt-4 space-y-3">
              {socialLinks.map((item) => (
                <Link key={item.label} href={item.href} className="block text-sm text-slate-500 transition hover:text-brand-dark dark:text-slate-400 dark:hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink dark:text-white">Contact</p>
            <div className="mt-4 space-y-3 text-sm text-slate-500 dark:text-slate-400">
              <p>chukwuemekastar19@gmail.com</p>
              <p>Based in Lagos, Nigeria</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 text-xs text-slate-400 dark:border-white/10 dark:text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Developer Portfolio. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/" className="transition hover:text-brand-dark dark:hover:text-white">
              
            </Link>
            <Link href="/" className="transition hover:text-brand-dark dark:hover:text-white">
              
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
