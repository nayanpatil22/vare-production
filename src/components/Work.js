'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const projects = [
  {
    title: 'Cinematic Ad',
    thumbnail: '/thumb1.jpg',
    btsVideo: '/bts1.mp4',
  },
  {
    title: 'Brand Story',
    thumbnail: '/thumb2.jpg',
    btsVideo: '/bts2.mp4',
  },
  {
    title: 'Event Highlight',
    thumbnail: '/thumb3.jpg',
    btsVideo: '/bts3.mp4',
  },
];

export default function Work() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // 🔒 Lock scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedVideo ? 'hidden' : '';
  }, [selectedVideo]);

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
              onClick={() => setSelectedVideo(project.btsVideo)}
              className="relative group rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 cursor-pointer"
            >
              <Image
                src={project.thumbnail}
                alt={project.title}
                width={450}
                height={600}
                className="w-full h-[440px] object-cover scale-100 group-hover:scale-105 group-hover:contrast-125 transition-all duration-500 border border-white/10 group-hover:border-white/30"

              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">Watch BTS</span>
              </div>

              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent px-4 py-3">
                <h3 className="text-white text-base sm:text-lg font-semibold tracking-wide">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔹 Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl bg-black rounded-lg overflow-hidden">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-2 right-3 text-white text-3xl font-bold z-10"
            >
              &times;
            </button>
            <video src={selectedVideo} controls autoPlay className="w-full h-auto" />
          </div>
        </div>
      )}
    </section>
  );
}
