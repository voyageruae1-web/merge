export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6 border-b border-gray-800 bg-[#0f0f0f]">
      <h1 className="text-3xl font-bold tracking-widest text-[#d4a373]">
        MERGE
      </h1>

      <div className="hidden md:flex gap-8 text-sm uppercase tracking-wider text-gray-300">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}