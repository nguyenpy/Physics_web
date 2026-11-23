import { Resend } from "resend";

const recipient = "anhthai13052005@gmail.com";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 16_000) {
    return Response.json({ error: "The message is too large." }, { status: 413 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch (error) {
    if (error instanceof SyntaxError) {
      return Response.json({ error: "The submitted form is invalid." }, { status: 400 });
    }
    throw error;
  }

  if (
    !body ||
    typeof body !== "object" ||
    !("name" in body) ||
    !("email" in body) ||
    !("message" in body)
  ) {
    return Response.json({ error: "The submitted form is invalid." }, { status: 400 });
  }

  const { name, email, message } = body;
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string"
  ) {
    return Response.json({ error: "Please complete all fields." }, { status: 400 });
  }

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();

  if (
    trimmedName.length < 1 ||
    trimmedName.length > 100 ||
    trimmedEmail.length > 254 ||
    !emailPattern.test(trimmedEmail) ||
    trimmedMessage.length < 1 ||
    trimmedMessage.length > 5000
  ) {
    return Response.json(
      { error: "Please check your name, email, and message, then try again." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !from) {
    console.error("Contact form is missing RESEND_API_KEY or RESEND_FROM_EMAIL.");
    return Response.json(
      { error: "The contact form is not configured yet. Please try again later." },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from,
      to: [recipient],
      replyTo: trimmedEmail,
      subject: "New STLT Science Program inquiry",
      text: `Name: ${trimmedName}\nEmail: ${trimmedEmail}\n\n${trimmedMessage}`,
    });

    if (error) {
      console.error("Resend could not deliver a contact form message:", error);
      return Response.json(
        { error: "We couldn’t send your message. Please try again later." },
        { status: 502 },
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Unexpected error sending contact form message:", error);
    return Response.json(
      { error: "We couldn’t send your message. Please try again later." },
      { status: 502 },
    );
  }
}
