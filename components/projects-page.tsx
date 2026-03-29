import Image from "next/image";
import Link from "next/link";

import { projectGrid } from "@/data/site";

export function ProjectsPage() {
  return (
    <div>
      <section className="container-shell py-20 text-center">
        <span className="section-tag">Case Studies</span>
        <h1 className="mt-5 text-5xl font-bold tracking-tight text-ink dark:text-white">
          Selected <span className="text-brand-dark dark:text-brand">Projects</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-400">
          A curated collection of digital experiences, focusing on high-performance frontend solutions, robust
          architectures, and intuitive user interface design.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {["All", "React", "Next.js", "TypeScript", "UI/UX"].map((filter, index) => (
            <span
              key={filter}
              className={`rounded-full px-4 py-2 text-sm font-medium ${
                index === 0
                  ? "bg-brand text-white"
                  : "border border-line bg-white text-slate-500 dark:border-white/10 dark:bg-slate-900 dark:text-slate-300"
              }`}
            >
              {filter}
            </span>
          ))}
        </div>
      </section>

      <section className="container-shell pb-20">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projectGrid.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[28px] border border-line bg-white shadow-panel transition duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-slate-900/80 dark:shadow-none"
            >
              <div className="relative h-52 overflow-hidden bg-slate-950">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(min-width: 1280px) 30vw, (min-width: 768px) 46vw, 100vw"
                  className={`object-cover transition duration-700 ease-out group-hover:scale-105 ${project.imagePosition}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-slate-950/10" />
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-950/45 to-transparent" />
                <div className="absolute left-5 top-5 inline-flex rounded-full bg-white/92 px-3 py-1 text-xs font-semibold text-slate-900 shadow-sm backdrop-blur-sm dark:bg-slate-950/75 dark:text-white">
                  {project.badge}
                </div>
              </div>
              <div className="space-y-5 p-5">
                <div>
                  <h2 className="text-2xl font-semibold text-ink dark:text-white">{project.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">{project.blurb}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span key={item} className="rounded-full bg-paper px-3 py-1 text-xs font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-paper py-16 dark:bg-slate-900/50">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl panel px-8 py-14 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-ink dark:text-white">Have a project in mind?</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500 dark:text-slate-400">
              I&apos;m always looking for exciting opportunities to build exceptional web applications. Let&apos;s
              collaborate and turn your vision into reality.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="button-primary">
                Get in Touch
              </Link>
              <Link href="/about" className="button-secondary">
                Learn More About Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
