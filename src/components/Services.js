'use client';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Ad Films",
    description: "Visually rich commercials crafted to capture attention and inspire action.",
  },
  {
    title: "Brand Storytelling",
    description: "Narratives that reflect the essence of your brand, told cinematically.",
  },
  {
    title: "Event Coverage",
    description: "Capture events in a crisp, clean, and stylish cinematic form.",
  },
  {
    title: "Social Media Content",
    description: "Short-form videos that are visually compelling and algorithm-friendly.",
  },
  {
    title: "Post-Production",
    description: "Editing, color grading, and VFX to polish every frame with finesse.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative w-full min-h-screen text-white py-24 px-6 overflow-hidden">
      
      {/* 🔹 Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-2] opacity-70"
        src="what-we-do-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* 🔹 Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-[-1]" />

      {/* 🔹 Content */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text"
        >
          What We Do
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 hover:bg-white/10 border border-white/10 p-6 rounded-lg transition-all duration-300 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-300 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
