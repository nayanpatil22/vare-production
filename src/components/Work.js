'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'Cinematic Ad',
    thumbnail: '/thumb1.jpg',
  },
  {
    title: 'Brand Story',
    thumbnail: '/thumb2.jpg',
  },
  {
    title: 'Event Highlight',
    thumbnail: '/thumb3.jpg',
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="relative w-full text-white py-24 px-4 sm:px-6 overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* 🔹 Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-2] opacity-70"
        src="/our-work-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* 🔹 Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-[-1]" />

      {/* 🔹 Heading & Content */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text"
        >
          Our Work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-16"
        >
          From concept to final cut — here are a few handpicked projects that reflect our cinematic storytelling.
        </motion.p>

        {/* 🔹 Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
            >
              <Image
                src={project.thumbnail}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-56 sm:h-64 object-cover brightness-[0.6] group-hover:brightness-100 transition-all duration-500"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent px-4 py-3">
                <h3 className="text-white text-base sm:text-lg font-semibold tracking-wide">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
