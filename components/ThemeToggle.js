"use client";
import { useEffect, useState } from "react";
export default function ThemeToggle() {
  const [theme, setTheme] = useState(null);
  useEffect(() => { setTheme(document.documentElement.dataset.theme || "dark"); }, []);
  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
    setTheme(next);
  }
  return (
    <button onClick={toggle} aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"} className="grid h-10 w-10 place-items-center rounded-full text-lg transition hover:bg-white/10">
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
