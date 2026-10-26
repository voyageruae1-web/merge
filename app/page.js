import Link from "next/link";

const sections = [
  {
    title: "MERGE Knowledge",
    text: "Discover, learn, research, and stay informed.",
    href: "/knowledge",
    cta: "Explore Knowledge",
  },
  {
    title: "MERGE Marketplace",
    text: "Discover and purchase chocolate products.",
    href: "/marketplace",
    cta: "Explore Marketplace",
  },
];

export default function Home() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/cocoa-hero.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-20 text-center text-white">
        <p className="mb-12 text-sm font-semibold uppercase tracking-[0.25em] md:text-base">
          Discover. Learn. Explore. Stay Informed. Enjoy.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {sections.map((s) => (
            <div
              key={s.href}
              className="flex flex-col items-center border border-white/30 bg-black/30 p-10 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-extrabold uppercase md:text-3xl">
                {s.title}
              </h2>
              <p className="mt-4 max-w-sm leading-7">{s.text}</p>
              <Link
                href={s.href}
                className="mt-8 inline-block border-2 border-white px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] shadow-[6px_6px_0_0_#ffffff] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                {s.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
