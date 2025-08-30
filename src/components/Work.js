'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const projects = [
  {
    title: 'Plaid 3.0',
    thumbnail: '/plaid.jpeg',
    btsVideo: 'https://www.youtube.com/embed/UvWrsAdgiOU?autoplay=1',
  },
  {
    title: 'Boxing Machine',
    thumbnail: '/boxing_machine.jpeg',
    btsVideo: 'https://www.youtube.com/embed/VIDEO_ID_2?autoplay=1',
  },
  {
    title: 'Prime Hoverboard',
    thumbnail: '/hoverboard.png',
    btsVideo: 'https://www.youtube.com/embed/VIDEO_ID_3?autoplay=1',
  },
  {
    title: 'Portable Elliptical Trainer',
    thumbnail: '/jogger.png',
    btsVideo: 'https://www.youtube.com/embed/LfD9D0mXDiQ?si=U10I1R-Rsi_mkB5Z',
  },
  {
    title: 'Walking Pad',
    thumbnail: '/walkingpad.jpeg',
    btsVideo: 'https://www.youtube.com/embed/VIDEO_ID_3?autoplay=1',
  },
  {
    title: 'Drone Photography',
    thumbnail: '/drone.jpg',
    btsVideo: 'https://www.youtube.com/embed/VIDEO_ID_3?autoplay=1',
  },
];

export default function Work() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedVideo ? 'hidden' : '';
  }, [selectedVideo]);

  return (
    <section
      id="work"
      className="relative w-full h-screen flex flex-col items-center justify-center text-white overflow-hidden"
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
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-[-1]" />

      {/* 🔹 Heading */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
          Our Work
        </h2>
        <p className="mt-4 text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          From concept to final cut — here are a few handpicked projects that reflect our cinematic storytelling.
        </p>
      </div>

      {/* 🔹 Horizontal Infinite Scroll */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee space-x-6">
          {[...projects, ...projects].map((project, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedVideo(project.btsVideo)}
              className="flex-shrink-0 w-72 cursor-pointer rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-white/30 transform hover:scale-105 transition duration-300"
            >
              <Image
                src={project.thumbnail}
                alt={project.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-black/70">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-300">Watch BTS →</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl aspect-[16/9] bg-black rounded-lg overflow-hidden">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-2 right-3 text-white text-3xl font-bold z-10"
            >
              &times;
            </button>
            <iframe
              src={selectedVideo}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
