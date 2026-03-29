import Link from "next/link";
import Image from "next/image";

import { DotIcon } from "@/components/icons";
import { educationItems, experienceItems, expertiseGroups } from "@/data/site";

const profileMetrics = [
  { value: "8+", label: "Years Experience" },
  { value: "30+", label: "Projects Delivered" },
  { value: "8", label: "Certifications" },
  { value: "100%", label: "Client Satisfaction" }
];

export function AboutPage() {
  return (
    <div>
      <section className="container-shell grid gap-10 py-16 lg:grid-cols-[320px_1fr]">
        <aside className="panel h-fit p-6">
          <div className="mx-auto flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-4 border-brand-soft bg-gradient-to-br from-amber-200 via-orange-100 to-brand-soft text-3xl font-bold text-slate-700">
            <Image src="/logo.webp" alt="" width={40} height={40} className="h-full w-full object-contain rounded-full" />
          </div>
          <div className="mt-5 text-center">
            <h1 className="text-3xl font-bold text-ink dark:text-white">Chukwuemeka Henry Izukanne</h1>
            <p className="mt-2 text-sm font-medium text-brand-dark dark:text-brand">Senior Frontend Engineer</p>
            <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">
              Building thoughtful digital products with equal attention to performance, clarity, and visual detail.
            </p>
          </div>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/contact" className="button-primary px-4 py-2.5 text-xs">
              Let&apos;s Talk
            </Link>
            <Link href="/Chukwuemeka%20Henry%20Izukanne.pdf"
              download="Chukwuemeka-Henry-Izukanne-CV.pdf" className="button-secondary px-4 py-2.5 text-xs">
              Download CV
            </Link>
          </div>
        </aside>

        <div>
          <span className="section-tag">About Me</span>
          <h2 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-ink dark:text-white">
            Transforming complex problems into elegant user experiences.
          </h2>
          <div className="mt-6 max-w-4xl space-y-5 text-sm leading-8 text-slate-500 dark:text-slate-400">
            <p>
              Over the last several years, I&apos;ve focused on crafting product interfaces that feel intuitive, fast,
              and dependable. My primary sweet spot sits between systems thinking and expressive interface design.
            </p>
            <p>
              I care deeply about clear architecture, accessible interaction patterns, and building reusable UI
              foundations that help teams move faster without sacrificing polish.
            </p>
            <p>
              Outside of delivery work, I mentor junior developers, refine internal design systems, and explore ways
              to make the web more inclusive and memorable.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {profileMetrics.map((item) => (
              <div key={item.label} className="rounded-3xl border border-line bg-white p-6 dark:border-white/10 dark:bg-slate-900/80">
                <p className="text-3xl font-bold text-brand-dark dark:text-brand">{item.value}</p>
                <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-12">
        <span className="section-tag">Career Journey</span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight dark:text-white">Professional Experience</h2>

        <div className="mt-10 space-y-8">
          {experienceItems.map((item) => (
            <article key={item.role} className="relative rounded-[28px] border border-line bg-white p-6 pl-10 shadow-panel dark:border-white/10 dark:bg-slate-900/80 dark:shadow-none">
              <span className="absolute left-5 top-8 h-3 w-3 rounded-full bg-brand" />
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-ink dark:text-white">{item.role}</h3>
                  <p className="text-sm font-medium text-brand-dark dark:text-brand">{item.company}</p>
                </div>
                <p className="text-sm font-medium text-slate-400 dark:text-slate-500">{item.period}</p>
              </div>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-500 dark:text-slate-400">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <DotIcon className="mt-2 h-2.5 w-2.5 shrink-0 text-brand" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell py-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr]">
          <div className="panel p-8">
            <h2 className="text-2xl font-bold tracking-tight dark:text-white">Education & Certifications</h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-500 dark:text-slate-400">
              {educationItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <DotIcon className="mt-2 h-2.5 w-2.5 shrink-0 text-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="panel p-8">
            <span className="section-tag">Technical Expertise</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight dark:text-white">Core Expertise</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {expertiseGroups.slice(0, 3).map((group) => (
                <div key={group.title} className="rounded-3xl border border-line bg-paper p-5 dark:border-white/10 dark:bg-slate-950">
                  <p className="text-sm font-semibold text-ink dark:text-white">{group.title}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell py-20">
        <div className="panel px-8 py-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ink dark:text-white">Need a full copy of my professional record?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-400">
            My resume includes detailed metrics, notable launches, and selected client work across design systems and
            product engineering.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="button-primary">
              Get in Touch
            </Link>
            <Link href="/projects" className="button-secondary">
              Download Full Resume (PDF)
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
