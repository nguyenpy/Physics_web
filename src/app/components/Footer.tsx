const Footer = () => {
  return (
    <footer id="top" className="w-full bg-blue-900 px-4 py-10 text-white sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <a
            href="#top"
            className="text-2xl font-extrabold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            STLT{" "}
            <span className="font-medium text-blue-200">Science Program</span>
          </a>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-blue-100">
            Making science become more approachable though classroom and leadership.
          </p>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3">
          <a
            href="/#About"
            className="text-sm font-semibold text-blue-100 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            About
          </a>
          <a
            href="/#Members"
            className="text-sm font-semibold text-blue-100 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Our Team
          </a>
          <a
            href="/#Projects"
            className="text-sm font-semibold text-blue-100 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Projects
          </a>
          <a
            href="/#Contact"
            className="text-sm font-semibold text-blue-100 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Contact
          </a>
        </nav>
      </div>

      <div className="mt-8 flex min-h-12 max-w-7xl ml-15 
      items-center justify-center border-t border-white pt-5 text-xs">
        <span className="font-bold text-white">
          © {new Date().getFullYear()} Made by Thai Nguyen
        </span>
      </div>
    </footer>
  );
};

export default Footer;
