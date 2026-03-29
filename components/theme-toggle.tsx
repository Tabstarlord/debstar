"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

function applyTheme(theme: Theme) {
  const root = document.documentElement;

  root.classList.toggle("dark", theme === "dark");
  root.classList.toggle("light", theme === "light");
  localStorage.setItem("theme", theme);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const resolvedTheme: Theme = storedTheme === "light" ? "light" : "dark";

    applyTheme(resolvedTheme);
    setTheme(resolvedTheme);
    setMounted(true);
  }, []);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle color mode"}
      aria-pressed={isDark}
      onClick={() => {
        const nextTheme: Theme = isDark ? "light" : "dark";

        setTheme(nextTheme);
        applyTheme(nextTheme);
      }}
      className="inline-flex items-center gap-3 rounded-full border border-line bg-white/80 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:border-brand hover:text-brand-dark dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-brand dark:hover:text-white"
    >
      <span className="text-[11px] uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">
        {isDark ? "Dark" : "Light"}
      </span>
      <span className="relative flex h-6 w-11 items-center rounded-full bg-slate-200 p-1 transition dark:bg-slate-700">
        <span
          className={`h-4 w-4 rounded-full bg-white shadow-sm transition ${isDark ? "translate-x-5 bg-brand" : "translate-x-0"}`}
        />
      </span>
    </button>
  );
}
