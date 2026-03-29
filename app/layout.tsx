import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "Developer Portfolio",
  description: "A polished frontend portfolio built with Next.js, TypeScript, and Tailwind CSS.",
  icons: {
    icon: "/Logo.webp",
    shortcut: "/Logo.webp"
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var storedTheme = localStorage.getItem('theme');
                var theme = storedTheme === 'light' ? 'light' : 'dark';
                document.documentElement.classList.toggle('dark', theme === 'dark');
                document.documentElement.classList.toggle('light', theme === 'light');
              })();
            `
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
