import { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
