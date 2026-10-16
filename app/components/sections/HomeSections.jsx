const topics = [
  {
    id: "discover",
    title: "Discover Chocolate",
    text: "Explore chocolate varieties, flavors, and cocoa origins, and learn what separates fine chocolate from the ordinary.",
  },
  {
    id: "learn",
    title: "Learn the Science of Chocolate",
    text: "Understand how cocoa is grown, fermented, roasted, and transformed into chocolate, and the science behind flavor and texture.",
  },
  {
    id: "industry",
    title: "Latest Chocolate Industry Developments",
    text: "Follow dated, source-attributed updates on manufacturing, ingredients, and business across the chocolate industry.",
  },
  {
    id: "regulations",
    title: "Laws, Regulations & Compliance",
    text: "Jurisdiction-specific summaries of chocolate-related laws and requirements, linked to official sources with clear status and dates. General information only, not legal advice.",
  },
  {
    id: "innovation",
    title: "Innovation, Sustainability & Research",
    text: "Discover new research, technology, and sustainability initiatives shaping the future of cocoa and chocolate.",
  },
  {
    id: "standards",
    title: "Global Chocolate Standards & Market Updates",
    text: "Track international standards, trade developments, and market updates that affect chocolate worldwide.",
  },
];

export default function HomeSections() {
  return (
    <>
      {/* Knowledge sections 1-6 */}
      <section className="bg-[#faf6f1] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
              Discover. Learn. Explore. Stay Informed.
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-neutral-900 md:text-4xl">
              Explore MERGE
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((t, i) => (
              <article
                key={t.id}
                id={t.id}
                className="flex flex-col rounded-sm border border-neutral-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-semibold tracking-widest text-amber-700">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl font-semibold text-neutral-900">
                  {t.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-neutral-600">
                  {t.text}
                </p>
                <span className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                  Coming soon
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Marketplace */}
      <section id="marketplace" className="bg-neutral-900 px-6 py-20 text-center text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
          07
        </p>
        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
          Shop &ndash; MERGE Marketplace
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-7 text-neutral-300">
          Our marketplace is being planned. Details will be announced soon.
        </p>
      </section>

      {/* 8. Blog */}
      <section id="blog" className="px-6 py-20 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
          08
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-neutral-900 md:text-4xl">
          Blog
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-7 text-neutral-600">
          Stories from the world of chocolate. Our first articles are coming
          soon.
        </p>
      </section>

      {/* 9. About */}
      <section id="about" className="bg-[#faf6f1] px-6 py-20 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
          09
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-neutral-900 md:text-4xl">
          About Us
        </h2>
        <p className="mx-auto mt-5 max-w-3xl leading-8 text-neutral-600">
          MERGE helps readers understand chocolate beyond the wrapper, from
          cocoa origins and processing to manufacturing, quality,
          sustainability, and emerging technologies. We also aim to make
          developments in food safety, labeling, ingredient standards,
          packaging, trade, laws, and regulations easier to understand.
        </p>
      </section>
    </>
  );
}
