export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden px-4 sm:px-6">
      {/* 🔹 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-1] brightness-[0.5]"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔹 Overlay Content */}
      <div className="z-10 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          We Don’t Just Shoot — We Tell Stories.
        </h1>

        <p className="text-xs sm:text-sm md:text-base uppercase tracking-widest text-gray-300 mb-6">
          cinematic excellence
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          {/* 🔘 View Our Work */}
          <a
            href="#work"
            className="relative inline-block px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base font-semibold text-white/70 border border-white/70 group overflow-hidden transition-all duration-300 hover:text-black hover:border-white"
          >
            <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0"></span>
            <span className="relative z-10 group-hover:text-black">View Our Work</span>
          </a>

          {/* 🔘 Contact Us */}
          <a
            href="#contact"
            className="relative inline-block px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base font-semibold text-white/70 border border-white/70 group overflow-hidden transition-all duration-300 hover:text-black hover:border-white"
          >
            <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0"></span>
            <span className="relative z-10 group-hover:text-black">Contact Us</span>
          </a>
        </div>
      </div>
    </section>
  );
}
