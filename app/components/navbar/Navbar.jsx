"use client";

import { useState } from "react";

const links = [
  { label: "Discover", href: "#discover" },
  { label: "Learn", href: "#learn" },
  { label: "Industry", href: "#industry" },
  { label: "Regulations", href: "#regulations" },
  { label: "Innovation", href: "#innovation" },
  { label: "Standards", href: "#standards" },
  { label: "Marketplace", href: "#marketplace" },
  { label: "Blog", href: "#blog" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-neutral-700 py-3 text-center text-sm tracking-wide text-white">
        <a href="#discover" className="hover:underline">
          Explore the World of Chocolate &rarr;
        </a>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6">
          <a
            href="#top"
            className="text-2xl font-semibold tracking-[0.3em] text-neutral-900"
          >
            MERGE
          </a>

          {/* Desktop menu */}
          <nav className="hidden items-center gap-7 text-sm text-neutral-600 xl:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="transition hover:text-neutral-900 hover:underline underline-offset-4"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4 text-neutral-700">
            <button aria-label="Search" className="hover:text-black">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
            </button>

            <button
              aria-label="Menu"
              className="hover:text-black xl:hidden"
              onClick={() => setOpen(!open)}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="flex flex-col gap-4 border-t border-neutral-200 bg-white px-6 py-5 text-neutral-700 xl:hidden">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
