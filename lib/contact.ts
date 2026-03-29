import nodemailer from "nodemailer";

const defaultRecipientEmail = "chukwuemekastar19@gmail.com";

export type ContactFormPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
  website?: string;
};

export class ContactValidationError extends Error {}

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function validateContactPayload(payload: unknown): ContactFormPayload {
  const record = payload && typeof payload === "object" ? payload : {};

  const name = readString((record as Record<string, unknown>).name);
  const email = readString((record as Record<string, unknown>).email);
  const subject = readString((record as Record<string, unknown>).subject);
  const message = readString((record as Record<string, unknown>).message);
  const website = readString((record as Record<string, unknown>).website);

  if (website) {
    return { name, email, subject, message, website };
  }

  if (name.length < 2) {
    throw new ContactValidationError("Please enter your full name.");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new ContactValidationError("Please enter a valid email address.");
  }

  if (subject.length < 3) {
    throw new ContactValidationError("Please enter a subject.");
  }

  if (message.length < 10) {
    throw new ContactValidationError("Please share a little more detail in your message.");
  }

  return { name, email, subject, message };
}

function getSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM ?? user;
  const port = Number(process.env.SMTP_PORT ?? "465");
  const secure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465;

  if (!host || !user || !pass || !from) {
    throw new Error("SMTP is not configured. Add SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and SMTP_FROM.");
  }

  if (Number.isNaN(port)) {
    throw new Error("SMTP_PORT must be a valid number.");
  }

  return { host, port, secure, user, pass, from };
}

export async function sendContactEmail(payload: ContactFormPayload) {
  if (payload.website) {
    return;
  }

  const recipientEmail = process.env.CONTACT_RECEIVER_EMAIL ?? defaultRecipientEmail;
  const smtp = getSmtpConfig();

  const transporter = nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.secure,
    auth: {
      user: smtp.user,
      pass: smtp.pass
    }
  });

  const htmlMessage = escapeHtml(payload.message).replaceAll("\n", "<br />");

  await transporter.sendMail({
    from: smtp.from,
    to: recipientEmail,
    replyTo: payload.email,
    subject: `Portfolio contact: ${payload.subject}`,
    text: [
      "New portfolio contact form submission",
      "",
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Subject: ${payload.subject}`,
      "",
      "Message:",
      payload.message
    ].join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; color: #17171b; line-height: 1.6;">
        <h2 style="margin-bottom: 12px;">New portfolio contact form submission</h2>
        <p style="margin: 0 0 8px;"><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
        <p style="margin: 0 0 8px;"><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
        <p style="margin: 0 0 8px;"><strong>Subject:</strong> ${escapeHtml(payload.subject)}</p>
        <p style="margin: 18px 0 8px;"><strong>Message:</strong></p>
        <p style="margin: 0;">${htmlMessage}</p>
      </div>
    `
  });
}
