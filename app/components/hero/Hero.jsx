export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-black"
    >
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/cocoa-hero.jpg')" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/75" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center text-white">
        <h1 className="text-3xl font-extrabold uppercase leading-tight md:text-5xl">
          MERGE &mdash;
          <br />
          The World of Chocolate, Connected.
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 md:text-lg">
          MERGE is a knowledge platform dedicated to discovering chocolate,
          learning about cocoa science, and exploring innovations shaping the
          chocolate industry.
        </p>

        <a
          href="#discover"
          className="mt-10 inline-block border-2 border-white px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] shadow-[6px_6px_0_0_#ffffff] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
        >
          Explore Chocolate
        </a>
      </div>
    </section>
  );
}
