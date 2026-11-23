"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import ChristaImage from "../public /Christa.png";
import JihanImage from "../public /Jihan.png";
import JackImage from "../public /Jack.png";
import YearTwoImage from "../public /group3.jpeg";
import Link from "next/link";

const Fellows = () => {
  const reduceMotion = useReducedMotion() ?? false;
  const [openQuotes, setOpenQuotes] = useState<Set<string>>(() => new Set());
  const [activeYear, setActiveYear] = useState<1 | 2>(1);

  const teacherFellows = [
    {
      name: "Christa Iwanowski",
      image: ChristaImage,
      alignment: "left",
      school: "Teaches at Mattahunt Elementary",
      scaffold: "Reasoning Scaffold",
      quote:
        "I teach STEM. I see each class once a week. Each project starts with reading a book and ends with some reflection questions. Lots of engineering projects.",
      description:
        "Sequenced, intentional questions during hands-on design tasks help students move beyond recalling what they did to explain why, add reasons to their ideas, and take part in discussion-based inquiry.",
    },
    {
      name: "Jihan Mehideen",
      image: JihanImage,
      alignment: "right",
      school: "Teaches at Higginson-Lewis K-8 School, BPS",
      scaffold: "Notetaking Scaffold",
      quote:
        "I teach science and math in my homeroom. ELA standards are part of my daily focus to help the students produce work “correctly”. One of the whole school’s goals this year is to improve writing by at least 20% so writing daily in science and math class is a must.",
      description:
        "Regular science journaling supported by teacher modeling, drawing-first prompts, encouraging responses to student drawings, supportive non-punitive norms, monthly check-ins, self-assessment, and opportunities to revise writing.",
    },
    {
      name: "Jack McLarnon",
      image: JackImage,
      alignment: "left",
      school: "Teaches at Russell Elementary",
      scaffold: "Activator for Scientific Inquiry through Literacy",
      quote:
        "I support students with literacy and language. Usually this is focused on ELA, but the Focus curriculum also brings in a lot of science. Also, inquiry uses language to share ideas.",
      description:
        "Colorful visuals, prompts, and routines such as morphemic vocabulary analysis prepare students to access academic language, ask questions, and engage with upcoming science texts.",
    },
  ];
  const additionalTeacherNames = [
    { name: "Cora Carey", school: "Neighborhood Charter School" },
    { name: "Stephanie Allieri", school: "Mendell School" },
    { name: "Ebenezer Shim", school: "Jr. Elementary School" },
    { name: "Stephanie Figueroa", school: "Sarah Greenwood School K-8" },
    { name: "Sarah Colella", school: "Conley Elementary" },
    { name: "Taylese Parker", school: "Sarah Greenwood School K-8" },
  ];

  return (
    <div
      id="Fellows"
      className="relative min-h-5xl w-full overflow-hidden bg-linear-to-br from-blue-200 via-blue-200 to-blue-950 px-4 py-8 text-slate-900 sm:px-8 sm:py-12 lg:px-16"
    >
      <div className="mx-auto flex min-h-5xl w-full max-w-7xl flex-col">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mt-10 flex min-h-72 flex-1 flex-col items-center justify-center overflow-hidden rounded-3xl border border-amber-200/60 bg-white/10 
        p-6 text-center shadow-xl backdrop-blur-sm sm:mt-12 sm:p-12"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <motion.div
              animate={reduceMotion ? undefined : { opacity: [0.5, 0.9, 0.5], scale: [1, 1.12, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-20 -top-24 h-56 w-56 rounded-full bg-yellow-500 blur-3xl"
            />
            <motion.div
              animate={reduceMotion ? undefined : { opacity: [0.45, 0.85, 0.45], scale: [1.1, 1, 1.1] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-28 -right-16 h-64 w-64 rounded-full bg-yellow-500 blur-3xl"
            />
            <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-amber-200/80 to-transparent" />
            <div className="absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-yellow-200/60 to-transparent" />
            <div className="absolute left-[5%] top-1/2 h-24 w-1 -translate-y-1/2 rounded-full bg-gradient-to-b from-transparent via-amber-300/70 to-transparent" />
            <div className="absolute right-[5%] top-1/2 h-24 w-1 -translate-y-1/2 rounded-full bg-gradient-to-b from-transparent via-yellow-500 to-transparent" />
            <div className="absolute -left-16 top-1/2 h-52 w-52 -translate-y-1/2 rounded-full border border-yellow-200 sm:left-8 sm:h-64 sm:w-64" />
            <div className="absolute -left-6 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full border border-yellow-200 sm:left-18 sm:h-48 sm:w-48" />
            <div className="absolute -right-16 top-1/2 h-52 w-52 -translate-y-1/2 rounded-full border border-white/20 sm:right-8 sm:h-64 sm:w-64" />
            <div className="absolute -right-6 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full border border-white/15 sm:right-18 sm:h-48 sm:w-48" />
            <motion.span
              animate={reduceMotion ? undefined : { opacity: [0.5, 1, 0.5], scale: [0.8, 1.25, 0.8] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[8%] top-[16%] h-2 w-2 rounded-full bg-yellow-200 shadow-[0_0_16px_rgba(253,224,71,0.8)]"
            />
            <motion.span
              animate={reduceMotion ? undefined : { opacity: [0.45, 1, 0.45], scale: [1, 1.4, 1] }}
              transition={{ duration: 4, delay: 0.6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-[9%] top-[18%] h-1.5 w-1.5 rounded-full bg-amber-100 shadow-[0_0_14px_rgba(253,230,138,0.8)]"
            />
            <motion.span
              animate={reduceMotion ? undefined : { opacity: [0.4, 1, 0.4], scale: [1.2, 0.8, 1.2] }}
              transition={{ duration: 3.6, delay: 1.1, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[13%] left-[14%] h-1.5 w-1.5 rounded-full bg-amber-200 shadow-[0_0_14px_rgba(253,230,138,0.8)]"
            />
            <motion.span
              animate={reduceMotion ? undefined : { opacity: [0.55, 1, 0.55], scale: [0.8, 1.25, 0.8] }}
              transition={{ duration: 4.4, delay: 0.4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[12%] right-[12%] h-2 w-2 rounded-full bg-yellow-200 shadow-[0_0_16px_rgba(253,224,71,0.8)]"
            />
            <motion.span
              animate={reduceMotion ? undefined : { y: [0, -9, 0], rotate: [45, 58, 45], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[7%] top-[39%] h-3 w-3 rounded-sm border border-yellow-100/80 bg-amber-300/70"
            />
            <motion.span
              animate={reduceMotion ? undefined : { y: [0, 7, 0], rotate: [12, 0, 12], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 4.5, delay: 0.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[17%] bottom-[10%] h-2 w-2 rounded-sm bg-yellow-200/80"
            />
            <motion.span
              animate={reduceMotion ? undefined : { y: [0, 8, 0], rotate: [-12, 2, -12], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 5.5, delay: 0.3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-[7%] top-[62%] h-3 w-3 rounded-sm border border-amber-100/80 bg-yellow-300/70"
            />
            <motion.span
              animate={reduceMotion ? undefined : { y: [0, -7, 0], rotate: [45, 32, 45], opacity: [0.65, 1, 0.65] }}
              transition={{ duration: 4.8, delay: 1, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-[17%] top-[10%] h-2 w-2 rounded-sm bg-amber-200/80"
            />
            <motion.span
              animate={reduceMotion ? undefined : { opacity: [0.4, 1, 0.4], scale: [1, 1.5, 1] }}
              transition={{ duration: 3.8, delay: 0.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[36%] top-[12%] h-1.5 w-1.5 rounded-full bg-yellow-100 shadow-[0_0_12px_rgba(253,224,71,0.8)]"
            />
            <motion.span
              animate={reduceMotion ? undefined : { opacity: [0.5, 1, 0.5], scale: [1.4, 0.8, 1.4] }}
              transition={{ duration: 4.2, delay: 0.9, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-[36%] bottom-[12%] h-1.5 w-1.5 rounded-full bg-amber-100 shadow-[0_0_12px_rgba(253,230,138,0.8)]"
            />
            <span className="absolute left-[18%] top-[24%] h-3 w-3 rounded-full bg-cyan-100/70 shadow-[0_0_24px_rgba(207,250,254,0.8)]" />
            <span className="absolute left-[26%] bottom-[23%] h-2 w-2 rounded-full bg-white/70" />
            <span className="absolute right-[19%] top-[25%] h-2 w-2 rounded-full bg-white/70" />
            <span className="absolute right-[26%] bottom-[22%] h-3 w-3 rounded-full bg-blue-100/70 shadow-[0_0_24px_rgba(219,234,254,0.8)]" />
            <motion.span
              animate={reduceMotion ? undefined : { y: [0, -10, 0], rotate: [12, 22, 12] }}
              transition={{ duration: 6, delay: 0.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[12%] top-[38%] h-5 w-5 rounded-sm bg-amber-300/90 shadow-lg shadow-amber-300/30 sm:left-[20%] sm:h-7 sm:w-7"
            />
            <motion.span
              animate={reduceMotion ? undefined : { y: [0, 8, 0], rotate: [-12, 0, -12] }}
              transition={{ duration: 5, delay: 0.7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[23%] bottom-[15%] h-3 w-3 rounded-[2px] bg-yellow-200/90 shadow-md shadow-yellow-200/30 sm:left-[31%] sm:h-4 sm:w-4"
            />
            <motion.span
              animate={reduceMotion ? undefined : { y: [0, -8, 0], rotate: [-6, -18, -6] }}
              transition={{ duration: 5.5, delay: 0.4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-[13%] top-[39%] h-4 w-4 rounded-sm bg-yellow-300/90 shadow-lg shadow-yellow-300/30 sm:right-[21%] sm:h-6 sm:w-6"
            />
            <motion.span
              animate={reduceMotion ? undefined : { y: [0, 9, 0], rotate: [12, 2, 12] }}
              transition={{ duration: 6.2, delay: 1.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-[24%] bottom-[14%] h-5 w-5 rounded-sm bg-amber-200/90 shadow-md shadow-amber-200/30 sm:right-[32%] sm:h-6 sm:w-6"
            />
          </div>
          <h1
            aria-label="What We Do"
            className="relative z-10 flex flex-col items-center f
            ont-semibold leading-[0.78] tracking-[-0.06em]
             text-white [text-shadow:5px_3px_0_rgba(234,179,8,0.65),0_0_18px_rgba(250,204,21,0.25)]"
          >
            <motion.span
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.15 }}
              className="relative z-10 block text-[clamp(3rem,18vw,14rem)]"
            >
              OUR
            </motion.span>
            <span className="-mt-[0.06em] flex items-center gap-[0.18em] text-[clamp(3rem,18vw,14rem)]">
              <motion.span
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.3 }}
              >
                
              </motion.span>
              <motion.span
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.45 }}
              >
                ACTIONS
              </motion.span>
            </span>
          </h1>
          <p className="relative z-10 mt-6 text-[10px] font-semibold uppercase tracking-[0.3em]
           text-blue-950 sm:mt-8 sm:text-xs border-2 border-blue-950 p-3 rounded-xl ">
            TOGETHER <span className="mx-2 text-yellow-700">·</span> WE 
            <span className="mx-2 text-yello2-700">·</span> ARE 
            <span className="mx-2 text-yellow-700">·</span> SCIENCE
          </p>
        </motion.div>

        <section
          aria-labelledby="teacher-fellows-heading"
          className="mt-12 rounded-3xl border border-white/40 bg-white/10 p-6 shadow-xl backdrop-blur-sm sm:p-8"
        >
          <div className="mb-6 flex items-center justify-between gap-4">
            <h1 className="text-4xl font-bold text-blue-950 sm:text-5xl">
              Year {activeYear}
            </h1>
            <button
              type="button"
              onClick={() => setActiveYear((year) => (year === 1 ? 2 : 1))}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-blue-950 px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-950"
            >
              {activeYear === 1 ? "Go to Year 2" : "Back to Year 1"}
              <span aria-hidden="true">{activeYear === 1 ? "→" : "←"}</span>
            </button>
          </div>

          <AnimatePresence mode="wait">
            {activeYear === 1 ? (
              <motion.div
                key="year-1-content"
                initial={reduceMotion ? false : { opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, x: 20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <motion.h2
                  id="teacher-fellows-heading"
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-2xl font-bold text-blue-950 sm:text-3xl"
                >
                  Participating Teacher Fellows
                </motion.h2>
                <p className="mt-3 max-w-3xl text-sm font-semibold leading-tight text-blue-950/80 sm:text-base">
                  Meet the teacher fellows that participate in local Boston
                  Public School and share meaningful science learning experience.
                </p>
                <div className="relative mt-7 grid gap-4">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-1 z-0 rotate-3 rounded-[2rem] border-2 border-yellow-400/90 bg-transparent"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-3 z-0 -rotate-4 rounded-[2rem] border-2 border-amber-400/90 bg-transparent"
                  />
                  {teacherFellows.map((fellow, index) => (
                    <motion.article
                      key={Fellows.name}
                      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.45,
                        delay: reduceMotion ? 0 : index * 0.2,
                        ease: "easeOut",
                      }}
                      className={`relative z-10 flex w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-white/60 bg-white/90 shadow-lg sm:flex-row ${
                        fellow.alignment === "right"
                          ? "sm:ml-auto sm:flex-row-reverse"
                          : ""
                      }`}
                    >
                      <div className="relative flex aspect-[2/3] w-full shrink-0 items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-950 sm:aspect-auto sm:min-h-[20rem] sm:w-2/5">
                        {fellow.image ? (
                          <>
                            <Image
                              src={fellow.image}
                              alt={`${fellow.name}, teacher fellow`}
                              fill
                              sizes="(max-width: 640px) 120vw, 40vw"
                              className="object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-transparent" />
                          </>
                        ) : (
                          <span
                            aria-hidden="true"
                            className="text-6xl font-bold tracking-tight text-white/85"
                          >
                            {fellow.name
                              .split(" ")
                              .map((part) => part[1])
                              .join("")}
                          </span>
                        )}
                        <h3 className="absolute bottom-4 left-5 text-3xl font-bold tracking-tight text-white drop-shadow-lg sm:bottom-5 sm:left-6 sm:text-4xl">
                          {fellow.name}
                        </h3>
                      </div>
                      <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                          Teacher Fellow
                        </p>
                        {fellow.school && (
                          <p className="mt-1 text-sm font-semibold text-slate-600">
                            {fellow.school}
                          </p>
                        )}
                        <h4 className="mt-5 text-lg font-bold text-blue-950">
                          {fellow.scaffold}
                        </h4>
                        {fellow.description && (
                          <p className="mt-2 leading-relaxed text-slate-700">
                            {fellow.description}
                          </p>
                        )}
                        {fellow.quote && (
                          <>
                            <button
                              type="button"
                              aria-expanded={openQuotes.has(fellow.name)}
                              aria-controls={`quote-${index}`}
                              onClick={() =>
                                setOpenQuotes((current) => {
                                  const next = new Set(current);
                                  if (next.has(fellow.name)) {
                                    next.delete(fellow.name);
                                  } else {
                                    next.add(fellow.name);
                                  }
                                  return next;
                                })
                              }
                              className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-900 transition-colors hover:bg-amber-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
                            >
                              {openQuotes.has(fellow.name)
                                ? "Hide quote"
                                : `${fellow.name}'s experience`}
                            </button>
                            {openQuotes.has(fellow.name) && (
                              <motion.blockquote
                                id={`quote-${index}`}
                                initial={
                                  reduceMotion ? false : { opacity: 0, y: 8 }
                                }
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                  duration: 0.25,
                                  ease: "easeOut",
                                }}
                                className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm italic leading-relaxed text-slate-700"
                              >
                                “{fellow.quote}”
                              </motion.blockquote>
                            )}
                          </>
                        )}
                      </div>
                    </motion.article>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="year-2-content"
                initial={reduceMotion ? false : { opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, x: 50 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="relative flex min-h-[28rem] items-end overflow-hidden rounded-3xl border border-white/50 p-8 text-left shadow-[0_24px_50px_rgba(15,23,42,0.4)] sm:min-h-[36rem] sm:p-12"
              >
                <Image
                  src={YearTwoImage}
                  alt="Teacher fellows collaborating during Year 2"
                  fill
                  sizes="(max-width: 768px) 100vw, 80vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-slate-950/30 to-transparent" />
                <div className="relative z-10 w-full">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-200">
                    Next chapter
                  </p>
                  <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                    Year 2 - In Progress
                  </h2>
                  <ul className="mt-6 flex flex-wrap gap-3">
                    {additionalTeacherNames.map((teacher) => (
                      <li
                        key={teacher.name}
                        className="rounded-2xl border border-white/40 bg-blue-950/65 px-4 py-3 text-left text-white shadow-md backdrop-blur-sm"
                      >
                        <p className="font-semibold">{teacher.name}</p>
                        <p className="mt-1 text-sm font-medium text-amber-200">{teacher.school}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        <motion.section
          aria-labelledby="teacher-community-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-8 rounded-3xl border mb-12 border-yellow-400 bg-gradient-to-br
           from-yellow-200/70 via-white to-white p-6 shadow-xl sm:p-8"
        >
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-700">
            Beyond the classroom
          </p>
          <h2
            id="teacher-community-heading"
            className="mt-2 text-2xl font-bold text-blue-950 sm:text-3xl"
          >
            Building a Teacher Learning Community
          </h2>
          <p className="mt-4 max-w-4xl leading-relaxed text-slate-700 sm:text-lg">
            This small group built a welcoming space where teachers could share
            experiences and offer one another support, feedback, and suggestions
            on this project and broader school and teaching matters. The
            community helped educators feel comfortable sharing their practice
            and can continue supporting one another beyond the pilot.
          </p>

          

        </motion.section>
        <Link
            href="/"
            className=" relative mt-5 flex items-center justify-center 
             bg-blue-950 px-6 py-3 font-semibold rounded-4xl w-[10rem]
             left-[35rem]
              text-white shadow-md transition hover:-translate-y-0.5
               hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-4
                focus-visible:outline-blue-950"
          >
            Back to Home
          </Link>
      </div>
    </div>
  );
};

export default Fellows;