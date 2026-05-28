"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Glassmorphism container */}
      <div className="backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <div className="text-white font-bold tracking-[6px] text-lg">
            MERGE<span className="text-amber-400">CHOC</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-10 text-sm text-white/80">
            <a className="hover:text-amber-300 transition" href="#">Home</a>
            <a className="hover:text-amber-300 transition" href="#">Collection</a>
            <a className="hover:text-amber-300 transition" href="#">Luxury</a>
            <a className="hover:text-amber-300 transition" href="#">Contact</a>
          </nav>

          {/* CTA Button */}
          <button className="hidden md:block px-5 py-2 bg-amber-400 text-black rounded-full font-medium hover:bg-amber-300 transition">
            Order Now
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden px-6 pb-6 flex flex-col gap-4 text-white/80">
            <a href="#" className="hover:text-amber-300">Home</a>
            <a href="#" className="hover:text-amber-300">Collection</a>
            <a href="#" className="hover:text-amber-300">Luxury</a>
            <a href="#" className="hover:text-amber-300">Contact</a>

            <button className="mt-2 px-5 py-2 bg-amber-400 text-black rounded-full">
              Order Now
            </button>
          </div>
        )}
      </div>
    </header>
  );
}