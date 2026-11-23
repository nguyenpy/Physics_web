"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Group2 from "../public /group2.jpg";
import Group from "../public /group.png";

const messages = [
  {
    highlight: "Science",
    heading: " makes sense when everyone can speak it",
    description:
      "A work from Science-Literacy Teacher Leadership at BPS, a UMass Boston and Boston Public School partnership where elementary teachers lead their own classroom research. Explore the projects, publications, and team behind the work.",
    image: Group2,
    imageAlt: "Students collaborating on a classroom project",
  },
  {
    highlight: "Teachers",
    heading: " lead the way in classroom research",
    description:
      "Public School Elementary teachers investigate problems from their own classrooms, engage in research and create structures and environments that best suite the needs of their students.",
    image: Group,
    imageAlt: "Students and a teacher working on a science experiment",
  },
];  {/* an array of messages */}

const Header = () => {
  const [activeMessage, setActiveMessage] = useState(0); {/* state to track the currently active message */}
  const [isSweeping, setIsSweeping] = useState(false); {/* state to track if the sweeping animation is active */}

  useEffect(() => {
    if (isSweeping) return;

    const timeout = window.setTimeout(() => setIsSweeping(true), 5000); 
    {/* set a timeout to trigger the sweeping animation after 5 seconds */}
    return () => window.clearTimeout(timeout);
  }, [isSweeping]);

  const handleSweepEnd = () => {
    setActiveMessage((current) => (current + 1) % messages.length); 
    {/* update the active message index to the next message, 
         wrapping around to the first message if at the end of the array */}
    setIsSweeping(false);
  };

  const message = messages[activeMessage];

  return (
    <header className="relative  w-full overflow-hidden bg-linear-to-r from-white to-blue-950  px-4 py-14 text-slate-900 sm:px-8 sm:py-20 lg:px-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 -top-24 -z-10 h-72 w-72 rounded-full bg-blue-300 animate-pulse blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-20 -z-10 h-96 w-96 rounded-full bg-indigo-200/50 blur-3xl"
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
        <div className="flex flex-col items-start">
          <div
            key={activeMessage}
            className="hero-message-enter flex flex-col items-start"
          >
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/75 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-blue-800 shadow-sm">
              <span
                aria-hidden="true"
                className="h-2 rounded-full bg-blue-500"
              />
              A partnership built around classrooms
            </p>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight text-blue-950 sm:text-5xl lg:text-6xl">
              <span className="text-blue-600">{message.highlight}</span>
              {message.heading}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-blue-950/80 sm:text-lg">
              {message.description}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/fellows"
              className="inline-flex items-center rounded-full bg-blue-950 px-6 py-3 text-base font-bold text-white shadow-lg shadow-blue-900/15 transition hover:-translate-y-0.5 hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-800"
            >
              View projects
              <span aria-hidden="true" className="ml-2">→</span>
            </Link>
            <a
              href="#Contact"
              className="inline-flex items-center rounded-full border border-blue-200 bg-white/70 px-6 py-3 text-base font-bold text-blue-900 transition hover:border-blue-400 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-800"
            >
              Let’s connect
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3 text-sm text-blue-800">
            <span className="h-px w-10 bg-blue-400" />
            <span>Real classrooms · Shared questions · Learning together</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-2xl px-3 pb-3 sm:px-6 sm:pb-6">
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] border-2 border-blue-300 sm:translate-x-5 sm:translate-y-5"
          />
          <div className="relative aspect-[1.55/1] overflow-hidden rounded-[2rem] border-4 border-white bg-blue-900 shadow-[50_24px_90px_rgba(30,64,175,0.2)]">
            <Image
              src={message.image}
              alt={message.imageAlt}
              fill
              sizes="(max-width: 1024px)"
              className={`object-cover ${
                isSweeping ? "hero-image--sweeping" : ""
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 sm:bottom-7 sm:left-7 sm:right-7">
              <p className="max-w-xs text-sm font-semibold leading-relaxed text-white sm:text-base">
                Small questions can lead to big discoveries.
              </p>
              <span className="rounded-full border border-white/50 bg-white/90 px-3 py-1 text-xs font-bold text-slate-800">
                0{activeMessage + 1} / 0{messages.length}
              </span>
            </div>
            <div
              aria-hidden="true"
              onAnimationEnd={handleSweepEnd}
              className={`pointer-events-none absolute inset-0 z-10 border-2 border-black ${
                isSweeping ? "decorative-frame--sweeping" : ""
              }`}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
