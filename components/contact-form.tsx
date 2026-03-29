"use client";

import { type FormEvent, useState, useTransition } from "react";

type SubmissionState = {
  type: "idle" | "success" | "error";
  message: string;
};

const fieldClassName =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none transition focus:border-brand dark:border-white/10 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500";

export function ContactForm() {
  const [submissionState, setSubmissionState] = useState<SubmissionState>({
    type: "idle",
    message: ""
  });
  const [isPending, startTransition] = useTransition();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? "")
    };

    setSubmissionState({ type: "idle", message: "" });

    startTransition(() => {
      void (async () => {
        try {
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
          });

          const result = (await response.json()) as { message?: string; error?: string };

          if (!response.ok) {
            throw new Error(result.error ?? "I couldn't send your message right now. Please try again.");
          }

          form.reset();
          setSubmissionState({
            type: "success",
            message: result.message ?? "Your message has been sent successfully."
          });
        } catch (error) {
          setSubmissionState({
            type: "error",
            message: error instanceof Error ? error.message : "I couldn't send your message right now. Please try again."
          });
        }
      })();
    });
  }

  return (
    <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-500 dark:text-slate-400">Full Name</span>
          <input type="text" name="name" placeholder="Jane Doe" required className={fieldClassName} />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-500 dark:text-slate-400">Email Address</span>
          <input type="email" name="email" placeholder="jane@company.com" required className={fieldClassName} />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-500 dark:text-slate-400">Subject</span>
        <input
          type="text"
          name="subject"
          placeholder="Project Inquiry / Collaboration"
          required
          className={fieldClassName}
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-500 dark:text-slate-400">Your Message</span>
        <textarea
          rows={6}
          name="message"
          placeholder="Tell me about your project, goals, and timeline..."
          required
          minLength={10}
          className={fieldClassName}
        />
      </label>

      <button type="submit" disabled={isPending} className="button-primary w-full disabled:cursor-not-allowed disabled:opacity-70">
        {isPending ? "Sending..." : "Send Message"}
      </button>

      {submissionState.message ? (
        <p
          aria-live="polite"
          className={`text-center text-sm ${
            submissionState.type === "success" ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
          }`}
        >
          {submissionState.message}
        </p>
      ) : null}

      <p className="text-center text-xs text-slate-400 dark:text-slate-500">Your data is secure and never shared with third parties.</p>
    </form>
  );
}
