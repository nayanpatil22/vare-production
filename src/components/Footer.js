"use client";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

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
          <ul className="space-y-3 text-sm break-words">
            <li className="flex items-center gap-2">
              <FiMail className="text-gray-400" />
              <a
                href="mailto:patilvinit712@gmail.com"
                className="hover:text-white transition"
              >
                patilvinit712@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaInstagram className="text-gray-400" />
              <a
                href="https://instagram.com/Vare_production"
                className="hover:text-white transition"
              >
                @Vare_production
              </a>
            </li>
            <li>Location: Vancouver, Canada</li>
          </ul>
        </div>
      </motion.div>

      {/* 🔹 Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Vǎre. All rights reserved.</p>
      </div>
    </footer>
  );
}
