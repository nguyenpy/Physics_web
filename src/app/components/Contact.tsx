"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { sendEmail } from "./Email";

type Toast = {
  type: "success" | "error";
  message: string;
};

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [toast, setToast] = useState<Toast | null>(null);

  useEffect(() => {
    if (!toast) return;

    const timeout = window.setTimeout(() => setToast(null), 6000);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);
    setToast(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      await sendEmail({
        name: String(formData.get("name")),
        email: String(formData.get("email")),
        message: String(formData.get("message")),
      });

      form.reset();
      setToast({
        type: "success",
        message: "Thanks for reaching out. Your message has been sent.",
      });
    } catch (error) {
      setToast({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to send your message right now. Please try again later.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="Contact"
      className="w-full bg-blue-950 px-4 py-16 text-white sm:px-8 sm:py-24"
    >
      
      
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-5xl">
        
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
            Get in touch
          </p>
          <h2 className="mt-0 text-4xl font-extrabold sm:text-5xl">
            Interested in the work?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-blue-100">
            Have a question or want to learn more about the program? Send our
            team a message.
          </p>

          <div aria-hidden="true" className="relative mt-8 h-56 max-w-xl">
            <span className="absolute left-[8%] top-4 -rotate-6 font-serif text-4xl font-black text-blue-200 sm:text-5xl">
              Curious?
            </span>
            <span className="absolute left-[52%] top-2 rotate-3 font-mono text-xl font-bold text-cyan-300 sm:text-2xl">
              Purposeful?
            </span>
            <span className="absolute left-[30%] top-[5.5rem] -rotate-3 font-sans text-3xl font-extrabold italic text-white sm:text-4xl">
              Leader?
            </span>
            <span className="absolute left-[4%] top-[9rem] rotate-6 font-serif text-xl italic text-blue-300 sm:text-2xl">
              Driven?
            </span>
            <span className="absolute left-[62%] top-[8rem] -rotate-6 font-mono text-2xl font-black text-sky-200 sm:text-3xl">
              Determine?
            </span>
            <span className="absolute left-[15%] top-[12rem] 
            rotate-2 font-sans text-lg font-bold text-blue-300 sm:text-xl">
              Ambitious?
            </span>
          </div>

        </div>


        <form
          onSubmit={handleSubmit}
          className="grid gap-5 rounded-2xl bg-white p-6 text-blue-950 shadow-xl sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold">
              Name
              <input
                autoComplete="name"
                className="rounded-lg border-2 border-blue-400 px-4 py-3 font-normal outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                maxLength={100}
                name="name"
                required
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold">
              Email
              <input
                autoComplete="email"
                className="rounded-lg border-2 border-blue-400 px-4 py-3 font-normal outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                maxLength={254}
                name="email"
                required
                type="email"
              />
            </label>
          </div>
          <label className="grid gap-2 text-sm font-semibold">
            Message
            <textarea
              className="min-h-36 resize-y rounded-lg border-2 border-blue-400 px-4 py-3 font-normal outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              maxLength={5000}
              name="message"
              required
              rows={5}
            />
          </label>
          <button
            className="w-fit rounded-xl bg-blue-700 px-5 py-3 font-bold text-white transition-colors hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 disabled:cursor-wait disabled:opacity-60"
            disabled={isSending}
            type="submit"
          >
            {isSending ? "Sending…" : "Send message"}
          </button>
        </form>
      </div>
      {toast && (
        <div
          role={toast.type === "error" ? "alert" : "status"}
          aria-live={toast.type === "error" ? "assertive" : "polite"}
          className={`fixed bottom-6 right-6 z-50 flex max-w-sm items-start gap-4 rounded-xl border p-4 text-sm font-semibold shadow-xl ${
            toast.type === "success"
              ? "border-green-200 bg-green-50 text-green-950"
              : "border-red-200 bg-red-50 text-red-950"
          }`}
        >
          <span>{toast.message}</span>
          <button
            type="button"
            aria-label="Dismiss notification"
            onClick={() => setToast(null)}
            className="shrink-0 rounded px-1 text-lg leading-none hover:bg-black/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
};

export default Contact;
