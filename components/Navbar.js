"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { site } from "@/lib/site";
import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/button";
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
        <Button asChild size="sm" className="hidden md:inline-flex">
          <a href={`tel:${site.phone}`}><Phone size={16} aria-hidden="true" />Call now</a>
        </Button>
        <div className="flex items-center md:ml-2"><ThemeToggle />
        <button aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center md:hidden">
          {open ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
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
