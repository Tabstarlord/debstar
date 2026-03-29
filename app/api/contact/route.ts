import { NextResponse } from "next/server";

import { ContactValidationError, sendContactEmail, validateContactPayload } from "@/lib/contact";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const payload = validateContactPayload(await request.json());

    await sendContactEmail(payload);

    return NextResponse.json({
      message: "Your message has been sent successfully. I will get back to you soon."
    });
  } catch (error) {
    if (error instanceof ContactValidationError) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    const errorMessage =
      process.env.NODE_ENV === "development" && error instanceof Error
        ? error.message
        : "I couldn't send your message right now. Please try again in a moment.";

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
