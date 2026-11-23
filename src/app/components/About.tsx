"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";

const cycle = [
  {
    step: "Teachers identify a classroom challenge in science teaching or student learning",
    role: "Individual teacher input",
    outcome:
      "More elementary students, including dual language learners, can take part in integrated and equitable science and engineering learning.",
  },
  {
    step: "Teachers engage in problem scoping,  and design a strategy that best suits the students need.",
    role: "Peer group, facilitated by the researcher",
    outcome:
      "Teachers reconsider how disciplinary language and literacy can support students’ sensemaking as they engage in NGSS practices.",
  },
  {
    step: "Teachers test the strategy in their classroom and collect data",
    role: "Individual teacher action, with researcher help in class if needed",
    outcome:
      "Teachers identify and refine classroom scaffolds that help students use language and literacy while learning science and engineering.",
  },
  {
    step: "Teachers analyze student work, share and reflect with peers, and thereby revise the strategy",
    role: "Peer group, led by the teacher, with the researcher as moderator",
    outcome:
      "The work contributes linguistically equitable tools that scaffold STEM learning for all elementary students.",
  },
];

const About = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [flippedCards, setFlippedCards] = useState<Set<number>>(() => new Set());

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading || prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        gsap.fromTo(
          heading,
          { autoAlpha: 0, y: 24 },
          
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            clearProps: "all",
          },
        );
        observer.disconnect();
      },
      { threshold: 0.3 },
    );

    observer.observe(heading);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  const reduceMotion = prefersReducedMotion ?? false;

  const toggleCard = (index: number) => {
    setFlippedCards((current) => {
      const next = new Set(current);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <section
      id="About"
      className="relative w-full overflow-hidden bg-blue-200 px-4 py-16 sm:px-8 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-8 h-40 w-40 rounded-full bg-sky-200/60 blur-3xl" />
        <div className="absolute right-10 top-14 h-52 w-52 rounded-full bg-indigo-100 blur-3xl" />
        <div className="absolute bottom-8 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-cyan-100 blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-12">
        <div className="relative overflow-hidden rounded-[32px] border border-blue-100 bg-white/80 p-6 shadow-[0_25px_60px_rgba(37,99,235,0.06)] backdrop-blur-sm sm:p-8">
          <div className="absolute -right-10 -top-8 h-36 w-36 rounded-full bg-blue-100/80 blur-2xl" />
          <div className="absolute bottom-0 left-10 h-24 w-24 rounded-full bg-sky-100 blur-2xl" />

          <div className="relative">
            <div className="max-w-4xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-blue-700">
                Program goals
              </p>
              <h2
                ref={headingRef}
                className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl"
              >
                Building teacher leadership in science education
              </h2>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Inquiry",
                  "Practice",
                  "Leadership",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-blue-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <motion.p
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mt-5 max-w-xl text-lg leading-relaxed text-slate-700 sm:text-xl"
              >
                Teacher leaders investigate classroom challenges, test ideas in
                practice, and share what works across schools.
              </motion.p>
            </div>

          </div>

          <div className="relative mt-8 grid gap-3 sm:grid-cols-3  ">
            {[
              "Research",
              "Action",
              "Reflection",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.08 }}
                className="rounded-2xl border border-blue-500 bg-gradient-to-l from-blue-50 to-blue-200 px-4 py-5 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-xs font-black text-white">
                    {index + 1}
                  </span>
                  <span className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                    {item}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.h3
            initial={reduceMotion ? false : { opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-6 text-2xl font-bold text-blue-950 sm:text-3xl "
          >
            The action research cycle
          </motion.h3>

          <ol className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {cycle.map((item, index) => (
              <motion.li
                key={item.step}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: reduceMotion ? 0 : index * 0.12,
                  ease: "easeOut",
                }}
                whileHover={reduceMotion ? undefined : { y: -8, scale: 1.01 }}
                className="group"
              >
                <div className="h-[22rem]" style={{ perspective: 520 }}>
                  <motion.button
                    type="button"
                    aria-label={
                      flippedCards.has(index)
                        ? `Potential outcome: ${item.outcome} Activate to return to the research step.`
                        : `Research step ${index + 1}: ${item.step}. Activate to reveal the potential outcome.`
                    }
                    aria-pressed={flippedCards.has(index)}
                    onClick={() => toggleCard(index)}
                    animate={{ rotateX: flippedCards.has(index) ? 180 : 0 }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="relative h-full w-full rounded-[5rem] text-left 
                    focus-visible:outline-2 focus-visible:outline-offset-4
                     focus-visible:outline-blue-500 "
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 flex flex-col rounded-[26px] border
                       border-blue-200 bg-[linear-gradient(180deg,#f8fbff_0%,#edf6ff_100%)] 
                       p-5 shadow-[0_18px_35px_rgba(59,130,246,0.08)] transition-all duration-300
                        group-hover:border-blue-300 
                        group-hover:shadow-[0_22px_42px_rgba(59,130,246,0.12)]"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-500 text-lg font-black text-white shadow-lg shadow-blue-200">
                          {index + 1}
                        </span>
                        <span className="rounded-full border border-blue-200 bg-white px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-blue-700">
                          Step
                        </span>
                      </div>

                      <span className="mt-5 text-base font-semibold leading-7 text-slate-800">
                        {item.step}
                      </span>

                      <span className="mt-5 border-t border-blue-100 pt-4 text-sm
                       leading-relaxed text-slate-600">
                        <span className="font-bold text-blue-900">
                          Researchers : {" "}
                        </span>
                        {item.role}
                      </span>

                      <span className="mt-auto pt-4 text-sm font-semibold text-blue-700">
                        Click to reveal outcome
                      </span>
                    </span>

                    <span
                      aria-hidden="true"
                      className="absolute inset-0 flex flex-col rounded-[26px] border border-blue-500 bg-[linear-gradient(180deg,#0f172a_0%,#1e3a8a_100%)] p-5 text-white shadow-2xl shadow-blue-700"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateX(180deg)",
                      }}
                    >
                      <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-blue-200">
                        Potential outcome
                      </span>
                      <span className="mt-4 text-lg font-semibold leading-relaxed text-white">
                        {item.outcome}
                      </span>
                      <span className="mt-auto pt-4 text-sm text-blue-200">
                        Click to return to the research step
                      </span>
                    </span>
                  </motion.button>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default About;
