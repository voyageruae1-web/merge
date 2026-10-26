"use client";

import Link from "next/link";
import { useCart } from "./CartContext";

export default function CartLink() {
  const { count } = useCart();

  return (
    <Link
      href="/cart"
      aria-label={`Cart, ${count} items`}
      className="relative text-neutral-700 hover:text-black"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 8h14l-1.2 11H6.2L5 8z" />
        <path d="M9 8V6a3 3 0 016 0v2" />
      </svg>
      {count > 0 && (
        <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-neutral-900 px-1 text-[11px] font-semibold text-white">
          {count}
        </span>
      )}
    </Link>
  );
}
