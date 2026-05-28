export default function Hero() {
  return (
    <section className="relative text-center py-28 px-6 overflow-hidden">

      {/* Background Glow Layers */}
      <div className="absolute inset-0 bg-[#0f0f0f]"></div>

      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#d4a373] opacity-20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-100px] w-[400px] h-[400px] bg-[#ffffff] opacity-10 blur-[120px] rounded-full"></div>

      {/* Content */}
      <div className="relative z-10">

        <p className="uppercase tracking-[12px] text-[#d4a373] text-sm">
          Luxury Chocolate Collection
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mt-6 leading-tight">
          Crafted For <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a373] to-[#ffffff]">
            True Chocolate Lovers
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-gray-400 mt-8 text-lg leading-8">
          Experience handcrafted premium chocolates made with rich cocoa,
          luxury ingredients, and world-class craftsmanship designed to deliver
          unforgettable taste and elegance.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-5">

          <button className="bg-[#d4a373] text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-[#d4a373]/30">
            Explore Collection
          </button>

          <button className="border border-white/20 text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition duration-300">
            View Story
          </button>

        </div>

      </div>
    </section>
  );
}