export type ContactEmail = {
  name: string;
  email: string;
  message: string;
};

export async function sendEmail(contact: ContactEmail): Promise<void> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contact),
  });

  let result: { error?: string };
  try {
    result = await response.json();
  } catch {
    throw new Error("Unable to send your message right now. Please try again later.");
  }

  if (!response.ok) {
    throw new Error(
      result.error ?? "Your message could not be sent. Please try again.",
    );
  }
}
