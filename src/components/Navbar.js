'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkStyle =
    "relative inline-block transition duration-300 transform hover:scale-105 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 hover:drop-shadow-[0_0_16px_rgba(255,255,255,0.6)] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-white cursor-pointer">
        StudioReel
      </Link>

      {/* Hamburger for mobile */}
      <div className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
        <svg
          className="w-8 h-8 cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex space-x-6">
        <a href="#about" className={navLinkStyle}>About</a>
        <a href="#work" className={navLinkStyle}>Work</a>
        <a href="#services" className={navLinkStyle}>Services</a>
        <a href="#contact" className={navLinkStyle}>Contact</a>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-black/90 px-6 py-4 flex flex-col space-y-4 md:hidden z-40">
          <a href="#about" className={navLinkStyle} onClick={() => setIsOpen(false)}>About</a>
          <a href="#work" className={navLinkStyle} onClick={() => setIsOpen(false)}>Work</a>
          <a href="#services" className={navLinkStyle} onClick={() => setIsOpen(false)}>Services</a>
          <a href="#contact" className={navLinkStyle} onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}
