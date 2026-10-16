const links = [
  { label: "Discover Chocolate", href: "#discover" },
  { label: "Learn the Science", href: "#learn" },
  { label: "Regulations", href: "#regulations" },
  { label: "Blog", href: "#blog" },
  { label: "About Us", href: "#about" },
];

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
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:underline">
                  {l.label}
                </a>
              </li>
            ))}
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
