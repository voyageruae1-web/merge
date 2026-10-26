"use client";

import { useState } from "react";
import Link from "next/link";
import { products, formatPrice } from "../../data/products";
import { useCart } from "../cart/CartContext";
import ProductImage from "./ProductImage";

const selectCls =
  "border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-700 focus:border-neutral-900 focus:outline-none";

export default function ShopGrid() {
  const [availability, setAvailability] = useState("all");
  const [sort, setSort] = useState("featured");
  const { addItem } = useCart();

  let list = products.filter((p) =>
    availability === "all" ? true : availability === "in" ? p.inStock : !p.inStock
  );
  if (sort === "low") list = [...list].sort((a, b) => a.price - b.price);
  if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);

  return (
    <>
      <div className="flex flex-wrap items-center gap-4 border-b border-neutral-200 pb-5">
        <span className="text-sm text-neutral-500">Filter:</span>

        <label className="flex items-center gap-2 text-sm text-neutral-600">
          Availability
          <select value={availability} onChange={(e) => setAvailability(e.target.value)} className={selectCls}>
            <option value="all">All</option>
            <option value="in">In stock</option>
            <option value="out">Sold out</option>
          </select>
        </label>

        <label className="flex items-center gap-2 text-sm text-neutral-600">
          Price
          <select value={sort} onChange={(e) => setSort(e.target.value)} className={selectCls}>
            <option value="featured">Featured</option>
            <option value="low">Low to high</option>
            <option value="high">High to low</option>
          </select>
        </label>

        <span className="ml-auto text-sm text-neutral-500">
          {list.length} {list.length === 1 ? "product" : "products"}
        </span>
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((p) => (
          <article key={p.slug} className="flex flex-col border border-neutral-200 bg-white transition hover:shadow-lg">
            <Link href={`/marketplace/${p.slug}`} className="block">
              <div className="relative">
                <ProductImage product={p} />
                {!p.inStock && (
                  <span className="absolute right-3 top-3 rounded-full bg-neutral-900 px-3 py-1 text-xs font-semibold text-white">
                    Sold out
                  </span>
                )}
              </div>
              <div className="px-5 pt-5">
                <h2 className="text-base font-semibold leading-6 text-neutral-900">{p.name}</h2>
                <p className="mt-2 text-sm text-neutral-600">{formatPrice(p.price)}</p>
              </div>
            </Link>

            <div className="mt-auto p-5">
              <button
                type="button"
                disabled={!p.inStock}
                onClick={() => addItem(p.slug, 1)}
                className="w-full border-2 border-neutral-900 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-900 transition hover:bg-neutral-900 hover:text-white disabled:cursor-not-allowed disabled:border-neutral-300 disabled:text-neutral-400 disabled:hover:bg-transparent disabled:hover:text-neutral-400"
              >
                {p.inStock ? "Add to cart" : "Sold out"}
              </button>
            </div>
          </article>
        ))}
      </div>

      {list.length === 0 && (
        <p className="mt-16 text-center text-neutral-500">No products match this filter.</p>
      )}
    </>
  );
}
