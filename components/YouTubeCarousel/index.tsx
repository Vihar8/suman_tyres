'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight, FaYoutube } from 'react-icons/fa';

const videos = [
  { id: 'W5_IZGr0acU', title: 'CEAT Puncture Safe Tyre – New Technology Bike Tyre' },
  { id: 'bA6Gi6o2qlc', title: 'Engine Oil Change in Activa 125 | Shell AX7 10W-30' },
  { id: '1RAM5Xpcj6E', title: 'Royal Enfield Meteor 350 Battery Change | Best Battery' },
  { id: 'PKxOSRhBlrI', title: 'Bullet Battery Change & Voltage Check | Royal Enfield' },
  { id: '82MHJtdrt3U', title: 'Activa 125 Battery Change | Step-by-Step Guide' },
  { id: 'WVsxDqSAOVA', title: 'Santro Engine Oil Change | Step-by-Step Guide' },
  { id: '3AzjLriceJY', title: 'Activa Gear Oil Change | Castrol Gear Oil' },
  { id: 'u_OV3N7oaLQ', title: 'Maruti Alto Battery Change | Amaron Battery' },
  { id: 'XTe6VYq5tfk', title: 'Activa Engine Oil Change | Shell Advance 10W30' },
  { id: 'ml8dn3JmNno', title: 'Exide Battery for Activa & Bikes | Exide Xplore' },
  { id: '-871G7wlRss', title: '46 Piece Tool Kit Unboxing | Best Tool Set Under ₹400' },
];

export default function YouTubeCarousel() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopAuto = () => {
    if (autoRef.current) clearInterval(autoRef.current);
  };

  const startAuto = useCallback(() => {
    stopAuto();
    if (!playing) {
      autoRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % videos.length);
      }, 4000);
    }
  }, [playing]);

  useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, [startAuto, playing]);

  const goTo = (idx: number) => {
    setCurrent(idx);
    setPlaying(false);
    stopAuto();
    startAuto();
  };

  const prev = () => goTo((current - 1 + videos.length) % videos.length);
  const next = () => goTo((current + 1) % videos.length);

  const handlePlay = () => {
    setPlaying(true);
    stopAuto();
  };

  const embedSrc = `https://www.youtube-nocookie.com/embed/${videos[current].id}?autoplay=${playing ? 1 : 0}&rel=0&modestbranding=1&enablejsapi=1`;

  return (
    <div className="w-full bg-gray-950 py-6 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <FaYoutube className="text-red-500 text-2xl" />
          <div className="text-center">
            <h2 className="text-lg font-extrabold text-white tracking-tight">
              Watch Us on YouTube
            </h2>
            <p className="text-gray-400 text-xs">
              Tips, guides &amp; demos from Suman Tyres Gandhinagar
            </p>
          </div>
        </div>

        {/* Video Player */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-black">
          <div className="relative w-full aspect-video">
            <iframe
              key={`${videos[current].id}-${playing}`}
              src={embedSrc}
              title={videos[current].title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              onPlay={handlePlay}
            />
          </div>

          {/* Overlay title */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent px-5 py-4 pointer-events-none">
            <p className="text-white text-sm md:text-base font-semibold line-clamp-2">
              {videos[current].title}
            </p>
          </div>

          {/* Nav Arrows */}
          <button
            onClick={prev}
            aria-label="Previous video"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-red-600 text-white flex items-center justify-center transition-all duration-200 hover:scale-110 z-10"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={next}
            aria-label="Next video"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-red-600 text-white flex items-center justify-center transition-all duration-200 hover:scale-110 z-10"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-1.5 mt-3">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to video ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${i === current
                ? 'w-4 h-2 bg-red-500'
                : 'w-2 h-2 bg-gray-600 hover:bg-gray-400'
                }`}
            />
          ))}
        </div>

        {/* Thumbnail Strip */}
        <div className="mt-3 grid grid-cols-6 md:grid-cols-11 gap-1.5">
          {videos.map((v, i) => (
            <button
              key={v.id}
              onClick={() => goTo(i)}
              className={`relative rounded overflow-hidden aspect-video border transition-all duration-200 ${i === current
                ? 'border-red-500 shadow-sm shadow-red-500/30'
                : 'border-gray-700 hover:border-gray-500 opacity-50 hover:opacity-100'
                }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
                alt={v.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Subscribe CTA */}
        <div className="mt-4 text-center">
          <a
            href="https://www.youtube.com/@SumanTyres"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-4 py-2 rounded-full transition-all duration-200 hover:scale-105"
          >
            <FaYoutube />
            Subscribe to Our Channel
          </a>
        </div>
      </div>
    </div>
  );
}
