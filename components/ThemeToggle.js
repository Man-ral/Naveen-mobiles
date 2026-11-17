"use client";
import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

function subscribe(onChange) {
  document.addEventListener("theme-change", onChange);
  return () => document.removeEventListener("theme-change", onChange);
}

function getTheme() {
  return document.documentElement.dataset.theme || "dark";
}

function getServerTheme() {
  return null;
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch {}
    document.dispatchEvent(new Event("theme-change"));
  }
  return (
    <button onClick={toggle} aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"} className="grid h-10 w-10 place-items-center rounded-full text-lg transition hover:bg-white/10">
      {theme === "light" ? <Moon size={18} aria-hidden="true" /> : <Sun size={18} aria-hidden="true" />}
    </button>
  );
}
