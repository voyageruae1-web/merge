"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);
const KEY = "merge-cart";
const MAX_QTY = 10;

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setItems(parsed);
      }
    } catch (e) {}
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      window.localStorage.setItem(KEY, JSON.stringify(items));
    } catch (e) {}
  }, [items, loaded]);

  const addItem = (slug, qty = 1) =>
    setItems((prev) => {
      const found = prev.find((i) => i.slug === slug);
      if (found) {
        return prev.map((i) =>
          i.slug === slug ? { ...i, qty: Math.min(MAX_QTY, i.qty + qty) } : i
        );
      }
      return [...prev, { slug, qty: Math.min(MAX_QTY, qty) }];
    });

  const setQty = (slug, qty) =>
    setItems((prev) =>
      prev.map((i) =>
        i.slug === slug ? { ...i, qty: Math.max(1, Math.min(MAX_QTY, qty)) } : i
      )
    );

  const removeItem = (slug) =>
    setItems((prev) => prev.filter((i) => i.slug !== slug));

  const count = items.reduce((sum, i) => sum + i.qty, 0);

  return (
    <CartContext.Provider
      value={{ items, count, addItem, setQty, removeItem, maxQty: MAX_QTY }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
