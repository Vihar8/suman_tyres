'use client'
import React, { useState } from 'react';
import { Camera, Maximize2, X, PlayCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

interface MediaItem {
  id: number;
  type: 'image' | 'video';
  url: string; // This will hold the Video ID for videos
  thumbnail?: string; 
  category: string;
  title: string;
}

const Gallery: React.FC = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TyreShop", // Specific type for Google
    "name": "Suman Tyres",
    "image": "https://img.youtube.com/vi/1hAuhlEAAFE/maxresdefault.jpg",
    "description": "Premium tyre shop and automobile service center. Expert fitting, engine oil change, and battery services.",
    "url": "https://sumantyres.vercel.app/gallery", // Replace with your actual URL
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gandhinagar", // EDIT THIS
      "addressRegion": "Gujarat",  // EDIT THIS
      "addressCountry": "IN"
    }
  };

  const mediaItems: MediaItem[] = [
    // --- VIDEO SECTION ---
    { 
      id: 101, 
      type: 'video', 
      url: '1hAuhlEAAFE', // Extracted ID from your Suman Tyres link
      thumbnail: 'https://img.youtube.com/vi/1hAuhlEAAFE/maxresdefault.jpg', // Dynamic YT Thumbnail
      category: 'Review', 
      title: 'Best Tyre for Activa (Ceat Review)' 
    },
    { 
      id: 102, 
      type: 'video', 
      url: 'bA6Gi6o2qlc', 
      thumbnail: 'https://img.youtube.com/vi/bA6Gi6o2qlc/maxresdefault.jpg',
      category: 'Tour', 
      title: 'How to change Engine oil in activa 125 | Suman Tyres' 
    },
    { 
      id: 103, 
      type: 'video', 
      url: 'P0ryw2dhCIY', 
      thumbnail: 'https://img.youtube.com/vi/P0ryw2dhCIY/maxresdefault.jpg',
      category: 'Tour', 
      title: 'How to change Engine oil in santro car | Suman Tyres' 
    },
    { 
      id: 104, 
      type: 'video', 
      url: 'pZM2Z0k6GQ4', 
      thumbnail: 'https://img.youtube.com/vi/pZM2Z0k6GQ4/hqdefault.jpg',
      category: 'Tour', 
      title: 'How to change Battery in Honda Shine | Suman Tyres' 
    },
    { 
      id: 105, 
      type: 'video', 
      url: 'lS-vUYWqn9Y', 
      thumbnail: 'https://img.youtube.com/vi/lS-vUYWqn9Y/hqdefault.jpg',
      category: 'Tour', 
      title: 'How to Service your activa 5G | Suman Tyres' 
    },
    // --- IMAGE SECTION ---
    { id: 1, type: 'image', url: 'https://lh3.googleusercontent.com/p/AF1QipNfdrfsJL-yAXAnYfr2RieKiB2a7U8wigKBLFya=s680-w680-h510-rw?auto=format&fit=crop&q=80', category: 'Premium', title: 'Suman Tyres Shop Image' },
    { id: 2, type: 'image', url: 'https://lh3.googleusercontent.com/p/AF1QipMjk9RCDUvdFx-F4C4pR3Hs7GeMKqL14sNrknvt=s680-w680-h510-rw?auto=format&fit=crop&q=80', category: 'Inventory', title: 'Interior of Suman Tyres' },
    { id: 3, type: 'image', url: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzwF2wX6JapRJzjDwCJsvuAgmajmkNOnSGXsqW5UB8At6MfQQELTKyoc5oWyCu2w75BKUbUxuZlq9RmutBH6ISfhyN2O0O8VqJbqKa5k8W7ip5d8dfJkXDFP7z8c8Hjw2ARIo1K7wlAmcSF=s680-w680-h510-rw?auto=format&fit=crop&q=80', category: 'Service', title: 'Suman Tyres Shop Image' },
    { id: 4, type: 'image', url: 'https://lh3.googleusercontent.com/p/AF1QipPDAGYRn_hD1fFXQsshuLGfo-KorR4l8TLrYDFc=s680-w680-h510-rw?auto=format&fit=crop&q=80', category: 'Battery', title: 'Amaron Battery fitting in Car' },
    { id: 5, type: 'image', url: 'https://lh3.googleusercontent.com/p/AF1QipOutiDfmcTnur8jmUE363b9deabd8-LXQwogmZS=s680-w680-h510-rw?auto=format&fit=crop&q=80', category: 'Inventory', title: 'Wide Selection of Tyres' },
    { id: 6, type: 'image', url: 'https://lh3.googleusercontent.com/p/AF1QipOiPMDfU3AjqCrINBHdCEtMhDprFU8_cf51WJJP=s680-w680-h510-rw?auto=format&fit=crop&q=80', category: 'Service', title: 'Expert Fitting' },
    { id: 7, type: 'image', url: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy6gtVgG38Ho_fxklDrThDEcTN4gy9EYfajF80jVwdB5WDtBszj5KNlaE8UQLorWx0grVkhwWo6pprtlPYaORfBdXzWaiedH4-TyLnPOTLURHxQxn4uL7uW0a-Eui8ix7SRQ8fVX3WyD7eA=s680-w680-h510-rw?auto=format&fit=crop&q=80', category: 'Service', title: 'Service Necessary items' },
    { id: 8, type: 'image', url: 'https://lh3.googleusercontent.com/p/AF1QipNoNDCCsGuDA78nEqzggW-yjX5Hp3MjqTzX7bx5=s680-w680-h510-rw?auto=format&fit=crop&q=80', category: 'Service', title: 'Expert Fitting' },
    { id: 9, type: 'image', url: 'https://lh3.googleusercontent.com/p/AF1QipMRWzmiGhvIeM-EQj3yIevb4pT8wTHJSAwkzeIa=s680-w680-h510-rw?auto=format&fit=crop&q=80', category: 'Service', title: 'Expert Fitting' },
    { id: 10, type: 'image', url: 'https://lh3.googleusercontent.com/p/AF1QipOenVonjXAgp84_kpXsK0Tq2WQehXBUUaTtJRbf=s680-w680-h510-rw?auto=format&fit=crop&q=80', category: 'Service', title: 'Expert Fitting' },
    { id: 11, type: 'image', url: 'https://lh3.googleusercontent.com/p/AF1QipMSg4nOXRDy2XP_53E-88_NXWk8tnKBoAdFrHyK=s680-w680-h510-rw?auto=format&fit=crop&q=80', category: 'Service', title: 'Expert Fitting' },
  ];

  return (
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="mb-10 text-left">
            <h2 className="text-3xl font-bold text-gray-800 uppercase tracking-tight">Our Gallery & Videos</h2>
            <p className="text-gray-500 mt-2 italic">Check out our latest tyre reviews and workshop updates.</p>
            <div className="w-16 h-1 bg-red-600 mb-8 mt-2" />
          </div>
        </div>

        {/* Media Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaItems.map((item) => (
            <div 
              key={item.id}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100"
              onClick={() => setSelectedMedia(item)}
            >
              <div className="aspect-video sm:aspect-square overflow-hidden bg-gray-200">
                <img
                  src={item.type === 'video' ? item.thumbnail : item.url}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Play Icon always visible on Video thumbnails for clarity */}
                {item.type === 'video' && (
                    <div className="absolute top-4 right-4 bg-black/60 p-2 rounded-full text-white">
                        <PlayCircle className="w-6 h-6" />
                    </div>
                )}
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
                {item.type === 'video' ? (
                  <PlayCircle className="w-16 h-16 mb-2 text-[#88b121]" />
                ) : (
                  <Maximize2 className="w-10 h-10 mb-2" />
                )}
                <p className="font-bold text-lg px-4 text-center">{item.title}</p>
                <span className="text-[10px] bg-[#88b121] px-3 py-1 rounded-full mt-2 uppercase font-bold">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedMedia && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4 md:p-10 animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setSelectedMedia(null)}
              className="absolute top-6 right-6 text-white hover:text-[#88b121] transition-colors z-[70]"
            >
              <X className="w-12 h-12" />
            </button>
            
            <div className="max-w-5xl w-full flex flex-col items-center">
              {selectedMedia.type === 'video' ? (
                <div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl border-2 border-white/10">
                  <iframe
                    width="100%"
                    height="100%"
                    // Using the YouTube Embed URL format correctly here
                    src={`https://www.youtube.com/embed/${selectedMedia.url}?autoplay=1`}
                    title={selectedMedia.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <img 
                  src={selectedMedia.url} 
                  alt={selectedMedia.title} 
                  className="max-h-[80vh] w-auto rounded-lg shadow-2xl"
                />
              )}
              <div className="mt-6 text-center">
                <h3 className="text-3xl font-bold text-white uppercase tracking-wide">{selectedMedia.title}</h3>
                <p className="text-[#88b121] font-bold mt-1 tracking-widest">{selectedMedia.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default Gallery;