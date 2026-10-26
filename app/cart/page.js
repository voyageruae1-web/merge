import CartView from "../components/cart/CartView";

export const metadata = { title: "Your Cart" };

export default function CartPage() {
  return (
    <section className="bg-[#faf6f1] px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-10 text-4xl font-semibold text-neutral-900">Your Cart</h1>
        <CartView />
      </div>
    </section>
  );
}
