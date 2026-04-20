'use client';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";

type MediaItem = {
  src: string;
  category: string;
  type: "image" | "video";
};

const Gallery: React.FC = () => {
  const categories: string[] = ["All", "Products", "Services"];

  const media: MediaItem[] = [
    { src: "https://lh3.googleusercontent.com/p/AF1QipOAy9NvDwpq0JJQIL8Pt4-QOUZ2--6DlbUWS0ys=s680-w680-h510-rw", category: "Products", type: "image" },
    { src: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHAMw9GvYtwPqrgZMzpbMMhA8HQVVtxbakruhpePdzW5vODHiYgl9K5-_UbGLSdbz0XFMinTx3uMJyCHYz67nbbllrh5FargNbNCFgXXRX_NA_qtIEKLdVkyGZfadECyJNErVFbxfwmgAdq=w207-h148-n-k-no-nu", category: "Products", type: "image" },
    { src: "https://lh3.googleusercontent.com/p/AF1QipNoNDCCsGuDA78nEqzggW-yjX5Hp3MjqTzX7bx5=s680-w680-h510-rw", category: "Products", type: "image" },
    { src: "https://lh3.googleusercontent.com/p/AF1QipN6wqs5Nt5RP2dHGiEE23kdy5LqYjwJUg_QUcK1=w207-h346-n-k-no-nu", category: "Products", type: "image" },
    { src: "https://lh3.googleusercontent.com/p/AF1QipO2vhNiEvDopaAaB1ot4AyZoFpC3WJdkWsIYNYW=w207-h148-n-k-no-nu", category: "Products", type: "image" },
    { src: "https://lh3.googleusercontent.com/p/AF1QipOhpl77mU1prK4XVR60hjk7eoEkLn9BLepQvy5V=w207-h346-n-k-no-nu", category: "Products", type: "image" },
    { src: "https://lh3.googleusercontent.com/p/AF1QipPVdvQ3J_H18OEpq_xl8VOAzjTlM4SP69x1amfi=s680-w680-h510-rw", category: "Products", type: "image" },
    { src: "https://lh3.googleusercontent.com/p/AF1QipOutiDfmcTnur8jmUE363b9deabd8-LXQwogmZS=s680-w680-h510-rw", category: "Products", type: "image" },
    { src: "https://lh3.googleusercontent.com/p/AF1QipMSg4nOXRDy2XP_53E-88_NXWk8tnKBoAdFrHyK=w207-h346-n-k-no-nu", category: "Services", type: "image" },
    { src: "https://lh3.googleusercontent.com/p/AF1QipM5TydlOQ3p3U_TKND_-wjTANwdYxgNYq2b2WUq=s680-w680-h510-rw", category: "Services", type: "image" },
    { src: "https://lh3.googleusercontent.com/p/AF1QipM3fjYOdIHYI5KZABns76MUmFCyZ-vkqHnqoTTL=w207-h208-n-k-no-nu", category: "Services", type: "image" },
  ];

  const [active, setActive] = useState<string>("All");

  const filteredMedia: MediaItem[] =
    active === "All" ? media : media.filter((item) => item.category === active);

  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openLightbox = (index: number): void => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = (): void => setLightboxOpen(false);

  const prevMedia = (): void => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredMedia.length - 1 : prev - 1
    );
  };

  const nextMedia = (): void => {
    setCurrentIndex((prev) =>
      prev === filteredMedia.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Our Gallery</h2>
          <p className="text-gray-500 mt-2">
            Quality tyres, engine oils, batteries, and trusted services – all in one place.
          </p>
          <div className="mr-auto md:mx-0 w-16 h-1 bg-[#E11D48] mb-8 mt-2" />
        </div>

        {/* Filter Buttons */}
        <div className="flex space-x-3 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                active === cat
                  ? "bg-[#E11D48] text-white"
                  : "bg-gray-100 text-black hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {filteredMedia.map((img, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-lg shadow-md bg-white group cursor-pointer"
              onClick={() => openLightbox(idx)}
            >
              <div className="w-full h-52 overflow-hidden">
                {img.type === "image" ? (
                  <img
                    src={img.src}
                    alt={`${img.category} at Sumant Tyres`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <video
                    src={img.src}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 text-white text-3xl"
            >
              ✕
            </button>

            <button
              onClick={prevMedia}
              className="absolute left-5 text-white text-4xl px-3"
            >
              ‹
            </button>

            <div className="max-w-5xl max-h-[90vh] px-4">
              {filteredMedia[currentIndex].type === "image" ? (
                <img
                  src={filteredMedia[currentIndex].src}
                  className="max-h-[90vh] object-contain rounded-lg"
                />
              ) : (
                <video
                  src={filteredMedia[currentIndex].src}
                  controls
                  autoPlay
                  className="max-h-[90vh] rounded-lg"
                />
              )}
            </div>

            <button
              onClick={nextMedia}
              className="absolute right-5 text-white text-4xl px-3"
            >
              ›
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Gallery;