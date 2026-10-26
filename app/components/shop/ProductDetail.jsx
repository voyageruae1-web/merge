"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { formatPrice } from "../../data/products";
import { useCart } from "../cart/CartContext";
import ProductImage from "./ProductImage";

export default function ProductDetail({ product }) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem, maxQty } = useCart();
  const router = useRouter();

  const add = () => {
    addItem(product.slug, qty);
    setAdded(true);
  };

  const buyNow = () => {
    addItem(product.slug, qty);
    router.push("/cart");
  };

  return (
    <section className="px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <Link href="/marketplace" className="text-sm text-neutral-500 hover:text-neutral-900 hover:underline">
          &larr; Back to Marketplace
        </Link>

        <div className="mt-8 grid gap-12 md:grid-cols-2">
          <ProductImage product={product} />

          <div>
            <h1 className="text-3xl font-semibold leading-tight text-neutral-900 md:text-4xl">
              {product.name}
            </h1>

            <p className="mt-6 flex items-center gap-3 text-lg text-neutral-800">
              {formatPrice(product.price)}
              {!product.inStock && (
                <span className="rounded-full bg-neutral-900 px-3 py-1 text-xs font-semibold text-white">
                  Sold out
                </span>
              )}
            </p>
            <p className="mt-1 text-sm text-neutral-500">Tax included. Shipping calculated at checkout.</p>

            {product.inStock && (
              <div className="mt-8">
                <p className="text-sm text-neutral-600">Quantity</p>
                <div className="mt-2 inline-flex items-center border border-neutral-900">
                  <button type="button" aria-label="Decrease quantity" onClick={() => setQty(Math.max(1, qty - 1))} className="h-12 w-12 text-xl hover:bg-neutral-100">
                    &minus;
                  </button>
                  <span className="w-12 text-center">{qty}</span>
                  <button type="button" aria-label="Increase quantity" onClick={() => setQty(Math.min(maxQty, qty + 1))} className="h-12 w-12 text-xl hover:bg-neutral-100">
                    +
                  </button>
                </div>
              </div>
            )}

            <div className="mt-8 flex max-w-md flex-col gap-4">
              <button
                type="button"
                disabled={!product.inStock}
                onClick={add}
                className="border-2 border-neutral-900 px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-900 transition hover:bg-neutral-900 hover:text-white disabled:cursor-not-allowed disabled:border-neutral-300 disabled:text-neutral-400 disabled:hover:bg-transparent disabled:hover:text-neutral-400"
              >
                {product.inStock ? "Add to cart" : "Sold out"}
              </button>

              {product.inStock && (
                <button
                  type="button"
                  onClick={buyNow}
                  className="border-2 border-neutral-900 bg-neutral-900 px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-neutral-700"
                >
                  Buy it now
                </button>
              )}

              {added && (
                <p className="text-sm text-amber-700">
                  Added to your cart.{" "}
                  <Link href="/cart" className="underline">
                    View cart
                  </Link>
                </p>
              )}
            </div>

            <p className="mt-10 max-w-xl leading-8 text-neutral-600">{product.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
