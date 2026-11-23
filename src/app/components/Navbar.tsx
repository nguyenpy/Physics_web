"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const sectionHref = (section: string) =>
    pathname === "/" ? `#${section}` : `/#${section}`;

  if (pathname === "/fellows") return null;

  return (
    <div className="flex w-full max-h-screen flex-col items-center justify-between">
      <div className="flex h-[5rem] w-full items-center gap-1 rounded-lg bg-blue-950 px-4">
        <span className="text-5xl text-white text-bold font-bold">STLT</span>
        <h1 className="text-2xl font-bold text-white mt-1">Science Program</h1>

        <div className="ml-auto flex items-center gap-2 sm:gap-6">
          <Link href={sectionHref("About")} className="cursor-pointer rounded-xl p-2 text-xl font-bold
           text-white transition duration-300 ease-in-out 
            hover:text-black hover:border-2 hover:border-white hover:bg-white
            hover:rounded-xl
               hover:underline sm:text-2xl">
            About Us
          </Link>
          <Link
            href={sectionHref("Members")}
            className="cursor-pointer rounded-xl p-2 text-xl font-bold text-white transition duration-300 ease-in-out hover:border-2 hover:border-white hover:bg-white hover:text-black hover:underline sm:text-2xl"
          >
            Our Team
          </Link>
          <Link href={sectionHref("Projects")} className="cursor-pointer 
           hover:border-2 hover:border-white hover:bg-white
            hover:rounded-xl
          rounded-xl p-2 text-xl font-bold text-white transition duration-300 ease-in-out hover:text-black hover:underline sm:text-2xl">
            Projects
          </Link>
          <Link href="/publications" className="cursor-pointer 
           hover:border-2 hover:border-white hover:bg-white
            hover:rounded-xl
          rounded-xl p-2 text-xl font-bold text-white transition duration-300 ease-in-out hover:text-black hover:underline sm:text-2xl">
            Publications
          </Link>
          <Link
            href={sectionHref("Contact")}
            className="cursor-pointer rounded-xl p-2 text-xl font-bold text-white transition duration-300 ease-in-out hover:border-2 hover:border-white hover:bg-white hover:text-black hover:underline sm:text-2xl"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}