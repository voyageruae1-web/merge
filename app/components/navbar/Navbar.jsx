import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="bg-neutral-700 py-3 text-center text-sm tracking-wide text-white">
        <Link href="/knowledge" className="hover:underline">
          Explore the World of Chocolate &rarr;
        </Link>
      </div>

      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6">
          <Link
            href="/"
            className="text-2xl font-semibold tracking-[0.3em] text-neutral-900"
          >
            MERGE
          </Link>

          <nav className="flex items-center gap-8 text-sm text-neutral-600">
            <Link href="/knowledge" className="underline-offset-4 transition hover:text-neutral-900 hover:underline">
              Knowledge
            </Link>
            <Link href="/marketplace" className="underline-offset-4 transition hover:text-neutral-900 hover:underline">
              Marketplace
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
