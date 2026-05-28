import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";

const chocolates = [
  {
    name: "Dark Velvet",
    price: "$18",
    image:
      "https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Hazelnut Gold",
    price: "$22",
    image:
      "https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Cocoa Royale",
    price: "$25",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Almond Truffle",
    price: "$20",
    image:
      "https://images.unsplash.com/photo-1575377427642-087cf684f29d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Midnight Cocoa",
    price: "$28",
    image:
      "https://images.unsplash.com/photo-1481391032119-d89fee407e44?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Home() {
  return (
    <main className="bg-[#0f0f0f] text-white min-h-screen">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* PRODUCTS SECTION */}
      <section className="px-8 py-24">
        <div className="text-center mb-16">
          <p className="text-[#d4a373] uppercase tracking-[6px] text-sm">
            Featured Chocolates
          </p>

          <h3 className="text-4xl font-bold mt-4">
            Our Signature Collection
          </h3>
        </div>

        {/* PREMIUM GRID */}
        <div className="grid md:grid-cols-3 gap-10">

          {chocolates.map((item, index) => (
            <div
              key={index}
              className="group relative bg-[#141414] rounded-3xl overflow-hidden border border-white/10 transition-all duration-500 hover:scale-[1.03] hover:border-[#d4a373]/50 hover:shadow-[0_0_30px_rgba(212,163,115,0.25)]"
            >

              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[320px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 relative z-10">

                <h4 className="text-2xl font-semibold">{item.name}</h4>

                <p className="text-[#d4a373] mt-2 text-lg font-medium">
                  {item.price}
                </p>

                <button className="mt-6 border border-[#d4a373] text-[#d4a373] px-6 py-3 rounded-full hover:bg-[#d4a373] hover:text-black transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(212,163,115,0.4)]">
                  View Product
                </button>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ABOUT */}
      <section className="px-8 py-24 text-center bg-[#161616]">
        <p className="uppercase tracking-[6px] text-[#d4a373] text-sm">
          Our Story
        </p>

        <h3 className="text-4xl font-bold mt-4">
          Passion In Every Bite
        </h3>

        <p className="max-w-3xl mx-auto text-gray-400 mt-8 text-lg leading-8">
          MERGE creates handcrafted premium chocolates using carefully selected
          cocoa beans and luxury ingredients. Every piece is designed to deliver
          elegance, richness, and unforgettable taste.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 py-10 text-center text-gray-500">
        <p>© 2026 MERGE Chocolate. All Rights Reserved.</p>
      </footer>

    </main>
  );
}