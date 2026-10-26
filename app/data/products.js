export const products = [
  {
    slug: "dark-70-bar-sample",
    name: "70% Dark Chocolate Bar (Sample)",
    price: 375,
    inStock: true,
    tone: ["#2b170c", "#6b4226"],
    description:
      "Sample product. A placeholder for a 70% dark chocolate bar, 70 gm. Replace this text with the real product description.",
  },
  {
    slug: "milk-55-bar-sample",
    name: "55% Milk Chocolate Bar (Sample)",
    price: 350,
    inStock: true,
    tone: ["#4a2a15", "#a0693a"],
    description:
      "Sample product. A placeholder for a milk chocolate bar, 70 gm. Replace this text with the real product description.",
  },
  {
    slug: "hazelnut-bar-sample",
    name: "Hazelnut Praline Bar (Sample)",
    price: 420,
    inStock: true,
    tone: ["#3a2012", "#8a5a30"],
    description:
      "Sample product. A placeholder for a hazelnut chocolate bar, 80 gm. Replace this text with the real product description.",
  },
  {
    slug: "orange-dark-bar-sample",
    name: "Orange Peel Dark Bar (Sample)",
    price: 390,
    inStock: true,
    tone: ["#3b1f0e", "#b5702d"],
    description:
      "Sample product. A placeholder for an orange and dark chocolate bar, 70 gm. Replace this text with the real product description.",
  },
  {
    slug: "truffle-box-sample",
    name: "Truffle Gift Box of 12 (Sample)",
    price: 1000,
    inStock: false,
    tone: ["#26130a", "#5c3a22"],
    description:
      "Sample product. A placeholder for a gift box of 12 truffles. Marked sold out to show how unavailable products look.",
  },
  {
    slug: "cocoa-nibs-sample",
    name: "Cocoa Nibs Pouch (Sample)",
    price: 450,
    inStock: true,
    tone: ["#32190c", "#7a4a28"],
    description:
      "Sample product. A placeholder for a pouch of cocoa nibs, 100 gm. Replace this text with the real product description.",
  },
];

export function getProduct(slug) {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(n) {
  return "Rs. " + n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
