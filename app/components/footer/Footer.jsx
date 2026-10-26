import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white px-6 py-14">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
        <div>
          <p className="text-xl font-semibold tracking-[0.3em] text-neutral-900">
            MERGE
          </p>
          <p className="mt-3 text-sm text-neutral-500">
            The World of Chocolate, Connected.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-900">
            Explore
          </p>
          <ul className="mt-4 space-y-2 text-sm text-neutral-600">
            <li><Link href="/knowledge" className="hover:underline">MERGE Knowledge</Link></li>
            <li><Link href="/marketplace" className="hover:underline">MERGE Marketplace</Link></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-neutral-200 pt-6 text-xs leading-6 text-neutral-500">
        <p>&copy; 2026 MERGE. All rights reserved.</p>
        <p className="mt-1">
          Content on MERGE is general information and is not legal advice. MERGE
          does not guarantee regulatory compliance.
        </p>
      </div>
    </footer>
  );
}
