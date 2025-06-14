'use client';
import Link from 'next/link'; // ✅ Import Link from next/link

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md text-white px-6 py-4 flex justify-between items-center">
      {/* ✅ Replaced <a> with <Link> for internal routing */}
      <Link href="/" className="text-2xl font-bold text-white cursor-pointer">StudioReel</Link>

      <div className="flex space-x-6">
        <a
          href="#about"
          className="relative inline-block transition duration-300 transform hover:scale-105 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 hover:drop-shadow-[0_0_16px_rgba(255,255,255,0.6)] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
        >
          About
        </a>
        <a
          href="#work"
          className="relative inline-block transition duration-300 transform hover:scale-105 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 hover:drop-shadow-[0_0_16px_rgba(255,255,255,0.6)] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
        >
          Work
        </a>
        <a
          href="#services"
          className="relative inline-block transition duration-300 transform hover:scale-105 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 hover:drop-shadow-[0_0_16px_rgba(255,255,255,0.6)] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
        >
          Services
        </a>
        <a
          href="#contact"
          className="relative inline-block transition duration-300 transform hover:scale-105 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 hover:drop-shadow-[0_0_16px_rgba(255,255,255,0.6)] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
