import Link from "next/link";

const teams = [
  {
    title: "Advisory",
    members: [
      { name: "Prof. Dr. Arthur Eisenkraft", affiliation: "COSMIC" },
      {
        name: "Dr. Nicole Guttenberg",
        affiliation: "STE Program Director, BPS Department",
      },
      { name: "Dr. Casandra Gonzalez", affiliation: "Science Euducation Specialist at DESE" },
      {
        name: "Prof. Dr. Lisa Gonsalves",
        affiliation: "Department of Curriculum and Instruction, UMB",
      },
    ],
  },
  {
    title: "Project PI Team",
    members: [
      { name: "Prof. Dr. Tej Dalvi", affiliation: "" },
      { name: "Prof. Dr. Pat Paugh", affiliation: "" },
    ],
  },
  {
    title: "Student Support",
    members: [
      { name: "Savvy Demers", affiliation: "UMB" },
      { name: "Thai Nguyen", affiliation: "Student Software Enginneer" },
    ],
  },
];

const Member = () => {
  return (
    <section
      id="Members"
      className="relative w-full overflow-hidden 
      bg-blue-200 
      px-4 py-16 sm:px-8 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -left-16 top-17 h-56 w-56 rounded-full bg-blue-700 animate-pulse blur-3xl" />
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-indigo-200/60 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-cyan-200/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl  ">
        <div className="relative grid gap-8 rounded-4xl border-2 border-blue-700 p-5 pb-8 md:grid-cols-[1fr_2fr] md:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/60 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-blue-800 shadow-sm backdrop-blur-sm">
              <span className=" rounded-full bg-blue-500" />
              The people behind the work
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight text-blue-950 sm:text-5xl">
              Meet the team
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed font-extrabold text-blue-950 md:justify-self-end">
            Educators and researchers working together to support more
            equitable science learning.
          </p>
          <svg
            aria-hidden="true"
            className="member-header-border-runner pointer-events-none absolute inset-0 h-full w-full"
            viewBox=" 0 0 1000 300"
            preserveAspectRatio="none"
          >
            <rect
              x="1"
              y="2"
              width="996"
              height="296"
              rx="36"
              pathLength="2000"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              overlineThickness={10}
            />
          </svg>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-[1fr_2fr] md:grid-rows-2">
          {teams.map((team) => (
            <section
              key={team.title}
              className={`h-full rounded-3xl border border-blue-300/80 bg-white/65 p-5 
              hover:-translate-y-2 transition-all ease-in-out duration-200
              shadow-2xl shadow-blue-700 backdrop-blur-sm sm:p-6  ${
                team.title === "Advisory"
                  ? "md:col-start-2 md:row-start-1 md:row-span-2  "
                  : team.title === "Project PI Team"
                    ? "md:col-start-1 md:row-start-1"
                    : "md:col-start-1 md:row-start-2"
              }`}
            >
              <h3 className="mb-5 border-b border-blue-200 pb-4 text-2xl font-extrabold tracking-tight text-blue-950">
                {team.title}
              </h3>
              <ul className="grid gap-4">
                {team.members.map((member, index) => (
                  <li
                    key={member.name}
                    className=" relative 
                    overflow-hidden rounded-2xl border border-blue-200
                     bg-white/90 p-4 shadow-sm transition-all 
                     duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 origin-left scale-x-0 bg-blue-950 transition-transform duration-700 ease-in-out group-hover:scale-x-100"
                    />
                    <div className="relative flex items-start gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full
                       bg-blue-100 text-xs font-black t
                      abular-nums text-blue-800 transition-colors duration-500
                       group-hover:bg-white/15 group-hover:text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0">
                        <p className="font-bold leading-snug text-blue-950 transition-colors duration-500 group-hover:text-white">
                          {member.name}
                        </p>
                        {member.affiliation && (
                          <p className="mt-1 text-sm leading-snug text-blue-800 transition-colors duration-500 group-hover:text-blue-100">
                            {member.affiliation}
                          </p>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-7 flex flex-col 
        gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-blue-950 font-semibold ">
            Always welcoming new members who wants to make science become more accesible 
          </p>

          <div className="relative shrink-0">
            <div
              aria-hidden="true"
              className="pointer-events-none 
              absolute left-1/2 top-10 h-[20rem] w-[20rem] -translate-x-90 translate-y-8 
              rounded-full bg-blue-950 blur-3xl  transition-all ease-in-out"
            />
            <Link
              href="/fellows"
              className="relative z-10 inline-flex w-fit items-center rounded-2xl bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 px-5 py-3 text-base font-bold text-white shadow-lg shadow-blue-950/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-900/25 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-950"
            >
              Explore projects
              <span aria-hidden="true" className="ml-2 text-lg">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Member;
