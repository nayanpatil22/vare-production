// components/Contact.js
'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-black text-white py-24 px-6 overflow-hidden"
    >
      {/* 🔹 Heading & Text */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Let&rsquo;s Connect
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg"
        >
          Have a story to tell or a project in mind? Reach out — we&rsquo;d love to bring your vision to life.
        </motion.p>
      </div>

      {/* 🔹 Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          alert('Form submitted (not wired up yet)');
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-5 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-5 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          required
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full px-5 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-pink-500 hover:text-white transition-all duration-300"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
}
