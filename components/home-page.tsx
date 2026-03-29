import Link from "next/link";

import { ArrowRightIcon, SparkIcon } from "@/components/icons";
import { expertiseGroups, featuredProjects, stats } from "@/data/site";

function FeatureProjectCard({
  title,
  subtitle,
  tags,
  palette
}: {
  title: string;
  subtitle: string;
  tags: string[];
  palette: string;
}) {
  return (
    <article className="overflow-hidden rounded-[28px] border border-line bg-white dark:border-white/10 dark:bg-slate-900/80">
      <div className={`h-40 bg-gradient-to-br ${palette} p-5 text-white`}>
        <div className="flex h-full flex-col justify-between rounded-[22px] border border-white/10 bg-black/10 p-4 backdrop-blur-sm">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-white/70">
            <span>Case Study</span>
            <span>2026</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-2 max-w-xs text-sm text-white/80">{subtitle}</p>
          </div>
        </div>
      </div>
      <div className="space-y-5 p-5">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-300">
              {tag}
            </span>
          ))}
        </div>
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-dark dark:text-brand">
          View Case Study <ArrowRightIcon />
        </Link>
      </div>
    </article>
  );
}

export function HomePage() {
  return (
    <div>
      <section className="container-shell grid gap-16 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div className="max-w-xl">
          <span className="section-tag">Frontend Developer Portfolio</span>
          <h1 className="mt-6 text-5xl font-bold leading-[0.95] tracking-tight text-ink dark:text-white sm:text-6xl">
            Frontend Developer & <span className="text-brand-dark dark:text-brand">UI Architect</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-8 text-slate-500 dark:text-slate-400">
            Building accessible, high-performance web experiences with precision and artistry. I bridge the gap
            between complex engineering and intuitive user interface design.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/projects" className="button-primary">
              View Projects
            </Link>
            <Link href="/about" className="button-secondary">
              Read Bio
            </Link>
          </div>

          <div className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-8 dark:border-white/10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="stat-value">{stat.value}</p>
                <p className="stat-label mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex min-h-[420px] items-center justify-center">
          <div className="absolute inset-x-10 top-6 h-72 rounded-[36px] border border-brand/20 bg-gradient-to-br from-brand-soft to-white dark:from-brand/15 dark:to-slate-900" />
          <div className="absolute right-10 top-14 h-64 w-[78%] rounded-[28px] border border-line bg-white p-6 shadow-panel dark:border-white/10 dark:bg-slate-900 dark:shadow-none">
            <div className="h-full rounded-[22px] border border-line bg-paper p-6 dark:border-white/10 dark:bg-slate-950">
              <div className="flex items-center gap-3 text-xs text-slate-400 dark:text-slate-500">
                <span className="h-2 w-2 rounded-full bg-red-400" />
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="ml-2">PortfolioComponent.tsx</span>
              </div>
              <div className="mt-8 space-y-3 text-sm">
                {[
                  "const hero = <section className='grid gap-6'>",
                  "<Headline accent='UI Architect' />",
                  "<ProjectGrid items={featuredProjects} />",
                  "<CTA variant='dark' />"
                ].map((line) => (
                  <div key={line} className="rounded-xl bg-white px-4 py-3 text-slate-500 shadow-sm dark:bg-slate-900 dark:text-slate-300 dark:shadow-none">
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 panel w-60 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand-dark dark:bg-brand/15 dark:text-brand">
                <SparkIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">Design System</p>
                <p className="mt-1 text-sm font-semibold text-ink dark:text-white">Built as a lightweight Next.js kit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell py-6 lg:py-10">
        <div className="flex items-center justify-between">
          <div>
            <span className="section-tag">Portfolio</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight dark:text-white">Featured Projects</h2>
          </div>
          <Link href="/projects" className="hidden text-sm font-semibold text-slate-500 dark:text-slate-400 md:inline-flex">
            View all work
          </Link>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <FeatureProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section className="container-shell py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-tag">My Expertise</span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight dark:text-white">Comprehensive Technical Stack</h2>
          <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">
            I specialize in the modern web engineering ecosystem, balancing visual craft, system thinking, and
            exceptional user experiences.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {expertiseGroups.map((group) => (
            <article key={group.title} className="panel p-6">
              <p className="text-sm font-semibold text-ink dark:text-white">{group.title}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full bg-paper px-3 py-1.5 text-xs font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="panel mt-8 flex flex-col items-start justify-between gap-4 bg-brand-soft p-6 dark:bg-brand/10 md:flex-row md:items-center">
          <div>
            <p className="text-base font-semibold text-ink dark:text-white">Looking for a UI designer too?</p>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">I also partner on design systems and interface prototyping.</p>
          </div>
          <Link href="/contact" className="button-primary whitespace-nowrap px-4 py-2.5 text-xs">
            Explore Design Services
          </Link>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="container-shell text-center">
          <h2 className="text-4xl font-bold tracking-tight">
            Ready to build something <span className="text-brand">extraordinary?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/65">
            Whether it&apos;s a flagship product launch, a design system refresh, or a lightning-fast portfolio, I&apos;d
            love to bring your vision to life.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="button-primary">
              Start a Project
            </Link>
            <Link
              href="/Chukwuemeka%20Henry%20Izukanne.pdf"
              download="Chukwuemeka-Henry-Izukanne-CV.pdf"
              className="button-secondary border-white/15 bg-white/5 text-white hover:border-white/30 hover:text-white dark:bg-white/5"
            >
              View Resume
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-white/55">
            <span>Clean Code</span>
            <span>SEO Optimized</span>
            <span>Responsive</span>
            <span>Accessibility First</span>
          </div>
        </div>
      </section>
    </div>
  );
}
