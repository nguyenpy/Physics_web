
import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Publications | STLT Science Program",
  description: "Publications from the Science Teacher Leadership Team.",
};

export default function PublicationsPage() {




  return (
    <section className="min-h-[65vh] bg-blue-100 px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl ">
        <div className="rounded-[32px] border leading-2.5
         border-blue-200 bg-white/90 p-8 shadow-[0_25px_60px_rgba(37,99,235,0.08)] sm:p-12">
          
          <p className="text-xs font-bold uppercase tracking-[0.28em] hover text-blue-700">
            STLT Science Program
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Publications
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-700">
            Explore our program publications through the actions of each teacher fellows
          </p>

          <ol className="mt-10 list-inside list-decimal space-y-7 ">
            <li className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5 
            leading-relaxed text-slate-800 ">
              Paugh, P., Dalvi, T. (2026) (accepted, in press). Texts as Sites
              of Disciplinary Sensemaking for Elementary Teaching Pre-service
              Teachers. <em>Journal of International Interdisciplinary Literacy</em>,
              3 (1).
            </li>
            <li className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5 leading-relaxed text-slate-800">
              Dalvi, T. (Tej), &amp; Iwanoski, C. (2025). Collaborative
              Play-Based Learning Module: Supporting second graders’ active
              engagement in phenomenon-based discovery of causal mechanisms.{" "}
              <em>Science and Children, 62</em>(3), 31–36.{" "}
              <a
                href="https://doi.org/10.1080/00368148.2025.2482270"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-800 underline decoration-blue-300 underline-offset-4 hover:text-blue-950"
              >
                https://doi.org/10.1080/00368148.2025.2482270
              </a>
            </li>
            <li className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5 leading-relaxed text-slate-800">
              Dalvi, T., Paugh, P., &amp; Mehideen, J. Reimagining a
              practitioner-researcher collaboration model. Leveraging trust;
              nurturing relationships; responding to science classroom needs.
              National Association for Research in Science Teaching (NARST
              2026), Seattle, WA.
            </li>
            <li className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5 leading-relaxed text-slate-800">
              Dalvi, T., &amp; Paugh, P. Paper, Sensemaking Scaffolds –
              Facilitation tools leveraging disciplinary literacies to support
              students’ scientific sensemaking. MAST Annual Conference, MA
              Association of Science Teachers (MAST), Marlborough, MA (July
              2025).
            </li>
            <li className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5 leading-relaxed text-slate-800">
              Paugh, P., &amp; Dalvi, T. What does language have to do with it?
              Collaboration and Integration of ELA and Science/Engineering in
              Preservice Coursework. National Council of Teachers of English
              (NCTE), November 24, 2024.
            </li>
            <li className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5 leading-relaxed text-slate-800">
              Dalvi, T., &amp; Paugh, P. A dynamic facilitation scaffold to
              integrate instruction across Science and ELA: An approach to
              support student sensemaking. (2024). Paper presented at the
              National Science Teachers Association (NSTA) Annual Conference
              in New Orleans, LA.
            </li>
            <li className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5 leading-relaxed text-slate-800">
              Paugh, P., Dalvi, T., Joyner, V., &amp; McLarnon, J. What Does
              Language Have to Do with It? Collaboration and Integration of
              ELA and Science/Engineering in Preservice Coursework. (Nov.
              2024). Paper presented at the annual conference of the National
              Council of Teachers of English (NCTE) in Boston, MA.
            </li>
           
          </ol>

          <Link
            href="/"
            className="mt-8 inline-flex rounded-xl bg-blue-950 px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-950"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
