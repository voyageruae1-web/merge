"use client";

import Link from "next/link";
import { getProduct, formatPrice } from "../../data/products";
import { useCart } from "./CartContext";
import ProductImage from "../shop/ProductImage";

export default function CartView() {
  const { items, setQty, removeItem, maxQty } = useCart();

  const lines = items
    .map((i) => ({ ...i, product: getProduct(i.slug) }))
    .filter((l) => l.product);

  const total = lines.reduce((sum, l) => sum + l.product.price * l.qty, 0);

  if (lines.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-neutral-600">Your cart is empty.</p>
        <Link
          href="/marketplace"
          className="mt-8 inline-block border-2 border-neutral-900 px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
        >
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-12 lg:grid-cols-3">
      <ul className="divide-y divide-neutral-200 border-y border-neutral-200 lg:col-span-2">
        {lines.map((l) => (
          <li key={l.slug} className="flex gap-5 py-6">
            <div className="w-24 shrink-0">
              <ProductImage product={l.product} />
            </div>

            <div className="flex-1">
              <Link href={`/marketplace/${l.slug}`} className="font-semibold text-neutral-900 hover:underline">
                {l.product.name}
              </Link>
              <p className="mt-1 text-sm text-neutral-600">{formatPrice(l.product.price)}</p>

              <div className="mt-4 flex items-center gap-5">
                <div className="inline-flex items-center border border-neutral-900">
                  <button type="button" aria-label="Decrease quantity" onClick={() => setQty(l.slug, l.qty - 1)} className="h-10 w-10 hover:bg-neutral-100">
                    &minus;
                  </button>
                  <span className="w-10 text-center text-sm">{l.qty}</span>
                  <button type="button" aria-label="Increase quantity" disabled={l.qty >= maxQty} onClick={() => setQty(l.slug, l.qty + 1)} className="h-10 w-10 hover:bg-neutral-100 disabled:text-neutral-300">
                    +
                  </button>
                </div>
                <button type="button" onClick={() => removeItem(l.slug)} className="text-sm text-neutral-500 underline hover:text-neutral-900">
                  Remove
                </button>
              </div>
            </div>

            <p className="text-sm font-semibold text-neutral-900">
              {formatPrice(l.product.price * l.qty)}
            </p>
          </li>
        ))}
      </ul>

      <aside className="h-fit border border-neutral-200 bg-white p-8">
        <div className="flex items-center justify-between">
          <span className="text-neutral-600">Estimated total</span>
          <span className="text-lg font-semibold text-neutral-900">{formatPrice(total)}</span>
        </div>
        <p className="mt-2 text-sm text-neutral-500">Tax included. Shipping calculated at checkout.</p>

        <button
          type="button"
          disabled
          className="mt-8 w-full cursor-not-allowed border-2 border-neutral-300 px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400"
        >
          Checkout coming soon
        </button>
        <p className="mt-4 text-xs leading-5 text-neutral-500">
          This is a preview with sample products. Payments and orders are not enabled yet.
        </p>
      </aside>
    </div>
  );
}
