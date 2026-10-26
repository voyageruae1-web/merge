import Link from "next/link";

export const metadata = { title: "MERGE Knowledge" };

const options = [
  { label: "Discover" },
  { label: "Learn" },
  { label: "Industry" },
  { label: "Regulations" },
  { label: "Innovation" },
  { label: "Standards" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "Blog" },
  { label: "About" },
];

export default function KnowledgePage() {
  return (
    <section className="bg-[#faf6f1] px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <h1 className="text-3xl font-semibold text-neutral-900 md:text-4xl">
            MERGE Knowledge
          </h1>
          <p className="mt-4 text-neutral-600">
            Discover, learn, research, and stay informed.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {options.map((o, i) => {
            const card = (
              <>
                <span className="text-sm font-semibold tracking-widest text-amber-700">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 text-xl font-semibold text-neutral-900">
                  {o.label}
                </h2>
                {!o.href && (
                  <span className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                    Coming soon
                  </span>
                )}
              </>
            );

            const cls =
              "flex flex-col rounded-sm border border-neutral-200 bg-white p-8";

            return o.href ? (
              <Link
                key={o.label}
                href={o.href}
                className={`${cls} transition hover:-translate-y-1 hover:shadow-lg`}
              >
                {card}
              </Link>
            ) : (
              <div key={o.label} className={cls}>
                {card}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
