import Link from "next/link";

import { ContactForm } from "@/components/contact-form";
import { MailIcon } from "@/components/icons";
import { contactCards, socialLinks } from "@/data/site";

const scheduleCallUrl = process.env.SCHEDULE_CALL_URL?.trim() || "/contact";
const isExternalScheduleUrl = /^https?:\/\//.test(scheduleCallUrl);

function ContactInfoBlock({
  label,
  value,
  meta
}: {
  label: string;
  value: string;
  meta: string;
}) {
  return (
    <article className="rounded-2xl border border-line bg-white p-4 dark:border-white/10 dark:bg-slate-900/80">
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">{label}</p>
      <p className="mt-3 text-sm font-semibold text-ink dark:text-white">{value}</p>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{meta}</p>
    </article>
  );
}

export function ContactPage() {
  return (
    <div>
      <section className="border-b border-line bg-gradient-to-r from-white via-white to-brand-soft/60 dark:border-white/10 dark:from-slate-950 dark:via-slate-950 dark:to-brand/10">
        <div className="container-shell py-20">
          <span className="section-tag">Available For New Projects</span>
          <h1 className="mt-6 max-w-3xl text-5xl font-bold leading-tight tracking-tight text-ink dark:text-white">
            Let&apos;s design something <span className="text-brand-dark italic dark:text-brand">extraordinary</span> together.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500 dark:text-slate-400">
            Whether you have a specific project in mind or just want to say hi, my inbox is always open. I typically
            respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="container-shell grid gap-8 py-16 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="space-y-10">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-brand" />
              <h2 className="text-2xl font-bold tracking-tight dark:text-white">Contact Information</h2>
            </div>
            <div className="space-y-4">
              {contactCards.map((item) => (
                <ContactInfoBlock key={item.label} {...item} />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-brand" />
              <h2 className="text-2xl font-bold tracking-tight dark:text-white">Digital Presence</h2>
            </div>
            <div className="space-y-4">
              {socialLinks.map((item) => (
                <article key={item.label} className="rounded-2xl border border-line bg-white p-4 dark:border-white/10 dark:bg-slate-900/80">
                  <p className="text-sm font-semibold text-ink dark:text-white">{item.label}</p>
                  <Link
                    href={item.href}
                    className="mt-1 inline-flex text-sm text-slate-500 transition hover:text-brand-dark dark:text-slate-400 dark:hover:text-brand"
                  >
                    {item.href}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="panel p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white">
              <MailIcon />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-ink dark:text-white">Send a Message</h2>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Fill out the form below and I&apos;ll get back to you shortly.</p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="bg-paper py-16 dark:bg-slate-900/50">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-ink dark:text-white">Need a faster response?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-400">
              For urgent matters, technical consulting, or partnership opportunities, feel free to schedule a quick
              15-minute intro call.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href={scheduleCallUrl}
                className="button-primary"
                target={isExternalScheduleUrl ? "_blank" : undefined}
                rel={isExternalScheduleUrl ? "noreferrer" : undefined}
              >
                Schedule a Call
              </Link>
              <Link href="/projects" className="button-secondary">
                View Portfolio First
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
