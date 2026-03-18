"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "About",    href: "#about" },
  { label: "Skills",   href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-[#0a0f1a]/80 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
        >
          CT<span className="text-brand-500">.</span>
        </a>

        <div className="flex items-center gap-1">
          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-3 py-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="ml-2">
            <ThemeToggle />
          </div>
          <a
            href="#contact"
            className="ml-2 hidden md:inline-flex items-center px-4 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium transition-colors"
          >
            Hire me
          </a>
        </div>
      </nav>
    </header>
  );
}
