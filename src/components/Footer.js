"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
      >
        {/* 🔹 Studio Info */}
        <div>
          <h2 className="text-white text-xl sm:text-2xl font-semibold mb-4">
            Vǎre
          </h2>
          <p className="text-sm leading-relaxed text-gray-400">
            A creative video production studio crafting cinematic stories for
            brands, events, and everything in between.
          </p>
        </div>

        {/* 🔹 Quick Links */}
        <div>
          <h3 className="text-white text-lg sm:text-xl font-medium mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#about" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="#work" className="hover:text-white transition">
                Work
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* 🔹 Contact */}
        <div>
          <h3 className="text-white text-lg sm:text-xl font-medium mb-4">
            Connect
          </h3>
          <ul className="space-y-2 text-sm break-words">
            <li>
              Email:{" "}
              <a
                href="mailto:hello@studioreel.com"
                className="hover:text-white transition"
              >
                hello@studioreel.com
              </a>
            </li>
            <li>
              Instagram:{" "}
              <a
                href="https://instagram.com"
                className="hover:text-white transition"
              >
                @studioreel
              </a>
            </li>
            <li>Location: Mumbai, India</li>
          </ul>
        </div>
      </motion.div>

      {/* 🔹 Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Vare. All rights reserved.</p>
      </div>
    </footer>
  );
}
