import ShopGrid from "../components/shop/ShopGrid";

export const metadata = { title: "MERGE Marketplace" };

export default function MarketplacePage() {
  return (
    <section className="bg-[#faf6f1] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-semibold text-neutral-900 md:text-5xl">Products</h1>
        <p className="mt-3 mb-10 text-neutral-600">
          MERGE Marketplace. Discover and purchase chocolate products.
        </p>
        <ShopGrid />
        <p className="mt-16 text-center text-xs text-neutral-500">
          Preview only. All products shown are samples.
        </p>
      </div>
    </section>
  );
}
