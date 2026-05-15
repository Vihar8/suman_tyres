import React from 'react';
import Image from 'next/image';

type BrandMarqueeProps = {
  title: string;
  logos: { src: string; alt: string }[];
};

const BrandMarquee: React.FC<BrandMarqueeProps> = ({ title, logos }) => {
  // Duplicate logos multiple times to ensure the marquee is wide enough to loop seamlessly
  const doubledLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <div className="w-full py-12 bg-white overflow-hidden border-y border-gray-100">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-2xl font-bold text-center text-gray-800">{title}</h2>
      </div>
      
      <div className="relative flex overflow-hidden group">
        <div className="flex w-max animate-marquee gap-8 md:gap-16 hover:[animation-play-state:paused] px-4 md:px-8">
          {doubledLogos.map((logo, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-32 md:w-48 h-24 flex items-center justify-center p-4 bg-gray-50 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
            >
              <Image 
                src={logo.src} 
                alt={logo.alt} 
                width={150}
                height={100}
                className="w-auto h-auto max-w-full max-h-full object-contain mix-blend-multiply transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
        
        {/* Gradient fades for smooth edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white to-transparent"></div>
      </div>
    </div>
  );
};

export default BrandMarquee;
