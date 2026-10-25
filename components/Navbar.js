"use client";
import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";
import ThemeToggle from "./ThemeToggle";
const links = [["/", "Home"], ["/gallery", "Our shop"], ["/location", "Find us"]];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 nav-bar backdrop-blur-xl shadow-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" className="font-display text-lg font-extrabold" onClick={() => setOpen(false)}>
          Naveen <span className="text-[var(--logo)]">Mobile</span>
        </Link>
        <div className="hidden gap-8 md:flex">
          {links.map(([h, t]) => <Link key={h} href={h} className="font-medium opacity-80 transition hover:text-[var(--logo)] hover:opacity-100">{t}</Link>)}
        </div>
        <a href={`tel:${site.phone}`} className="btn btn-main hidden !py-2 md:inline-flex">Call now</a>
        <div className="flex items-center md:ml-2"><ThemeToggle />
        <button aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center md:hidden">
          <span className="block w-6 space-y-1.5">
            <i className={`block h-0.5 bg-[var(--nav-text)] transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <i className={`block h-0.5 bg-[var(--nav-text)] transition ${open ? "opacity-0" : ""}`} />
            <i className={`block h-0.5 bg-[var(--nav-text)] transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button></div>
      </nav>
      <div className={`grid overflow-hidden transition-all duration-300 md:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="min-h-0">
          <div className="flex flex-col gap-1 px-5 pb-5">
            {links.map(([h, t]) => <Link key={h} href={h} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-lg font-semibold hover:bg-white/10">{t}</Link>)}
          </div>
        </div>
      </div>
    </header>
  );
}
