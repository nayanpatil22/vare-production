'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const others = [
  {
    title: 'Prime Hoverboard', //done
    thumbnail: '/hoverboard.png',
    btsVideo: 'https://www.youtube.com/embed/ZBHMsCnhuEc?si=j2YTlDkX1bIvKUu2',
  },
  {
    title: 'Bowen Island Drone Journey', //done
    thumbnail: '/drone2.png',
    btsVideo: 'https://youtube.com/embed/RB0jA9FGgYA?si=ssYmkZYd9lj9-O8u',
  },
  {
    title: 'Gaming Desk', //done
    thumbnail: '/desk2.png',
    btsVideo: 'https://www.youtube.com/embed/Y6kqJ3lXLDY?si=l3xu31zo7OzulQSf',
  },
];

const fitness = [
  {
    title: 'Portable Elliptical Trainer', //done
    thumbnail: '/jogger.png',
    btsVideo: 'https://www.youtube.com/embed/LfD9D0mXDiQ?si=U10I1R-Rsi_mkB5Z',
  },
  {
    title: 'Walking Pad', //done
    thumbnail: '/walkingpad.jpeg',
    btsVideo: 'https://www.youtube.com/embed/mls1a7WLXQ8?si=au87XliaecAUbxXW',
  },
  {
    title: 'Boxing Machine', //done
    thumbnail: '/boxing_machine.jpeg',
    btsVideo: 'https://www.youtube.com/embed/QJAu4VHhcSI?si=zayVx6_GUZVMPgi9',
  },
  {
    title: 'Portable Trampoline', //done
    thumbnail: '/mini_trampoline.png',
    btsVideo: 'https://youtube.com/embed/1tIBDrMTNgg?si=GljCDvt2RXeoyWT4',
  },
];


const gyroscopes = [
  {
    title: 'Flash ', //done
    thumbnail: '/flash_gyro.jpeg',
    btsVideo: 'https://youtube.com/embed/MPCCbKNMpCQ?si=HywmDNHrBzJQunyf',
  },
  {
    title: 'Frost ', //done
    thumbnail: '/frost_gyro.jpeg',
    btsVideo: 'https://youtube.com/embed/i3_GHHoEd0I?si=ujwknp0VGIB9jLme',
  },
  {
    title: 'J30 ', //done
    thumbnail: '/j30gyro.png',
    btsVideo: 'https://youtube.com/embed/TXwsy9Xp9DI?si=7tKWQJp3dFc1cK2h',
  },
  {
    title: 'Radi8', //done
    thumbnail: '/radi_guro.jpeg',
    btsVideo: 'https://youtube.com/embed/kSYBU87GzoA?si=m75oWL9hlXArJ0B4',
  },
  {
    title: 'Vortex ', //done
    thumbnail: '/vortex gyro.jpeg',
    btsVideo: 'https://youtube.com/embed/6aBSot4YD7M?si=qrH14JvYsf6YOZog',
  },
  {
    title: 'Zeno ', //done
    thumbnail: '/zeno_gyro.jpeg',
    btsVideo: 'https://youtube.com/embed/dK65pS4F03M?si=t-3c4-Ng6ipH-2Q9',
  },
  {
    title: 'Plaid 3.0',
    thumbnail: '/plaid.jpeg',
    btsVideo: 'https://www.youtube.com/embed/UvWrsAdgiOU?autoplay=1',
  },
];

export default function Work() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedVideo ? 'hidden' : '';
  }, [selectedVideo]);

  const MarqueeRow = ({ projects, reverse }) => (
    <div
      className={`flex ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} space-x-4`}
    >
      {[...projects, ...projects].map((project, idx) => (
        <div
          key={idx}
          onClick={() => setSelectedVideo(project.btsVideo)}
          className="flex-shrink-0 w-48 cursor-pointer rounded-lg overflow-hidden shadow-lg border border-white/10 hover:border-white/30 transform hover:scale-105 transition duration-300"
        >
          <Image
            src={project.thumbnail}
            alt={project.title}
            width={300}
            height={200}
            className="w-full h-32 object-cover"
          />
          <div className="p-2 bg-black/70">
            <h3 className="text-sm font-semibold truncate">{project.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );

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
      <div className="relative z-10 text-center mb-4">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
          Our Work
        </h2>
        <p className="mt-2 text-gray-300 text-sm sm:text-base max-w-xl mx-auto">
          From concept to final cut — here are a few handpicked projects that reflect our cinematic storytelling.
        </p>
      </div>

      {/* 🔹 3 Different Rows */}
      <div className="relative z-10 w-full space-y-4">
        <MarqueeRow projects={gyroscopes} reverse={false} />
        <MarqueeRow projects={fitness} reverse={true} />
        <MarqueeRow projects={others} reverse={false} />
  
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
