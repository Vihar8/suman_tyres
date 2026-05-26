// pages/oil-landing.tsx
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SearchIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';
import OrderCarOilOnline from '@/components/OrderCarOilOnline';
import BrandMarquee from '@/components/BrandMarquee';

// Sample engine oil products data
const oilProducts = [
  { id: 1, name: 'Shell 10W-30 Semi Synthetic', type: 'Activa', image: '/shell-10w30-semi-synthetic-activa.png' },
  { id: 2, name: 'Shell 10W-30 Premium Mineral', type: 'Activa', image: '/shell-10w30-premium-mineral-activa.jpeg' },
  { id: 3, name: 'Shell 5W-40 Fully Synthetic', type: 'Car', image: '/shell-5w40-fully-synthetic-car.jpeg' },
  { id: 4, name: 'Shell 10W-40 HX7 Synthetic', type: 'Car', image: '/shell-10w40-hx7-synthetic-car.jpeg' },
  { id: 5, name: 'Shell 5W-40 Fully Synthetic', type: 'Car', image: '/shell-5w40-fully-synthetic-cs-car.jpeg' },
  { id: 6, name: 'Shell 15W-40 Premium Mineral', type: 'Car', image: '/shell-15w40-premium-mineral-car.jpeg' },
  { id: 7, name: 'Shell 5W-30 TAXI Synthetic Technology', type: 'Car', image: '/shell-5w30-taxi-synthetic-car.jpeg' },
  { id: 8, name: 'Shell 5W-30 Fully Synthetic', type: 'Car', image: '/shell-5w30-fully-synthetic-car.jpeg' },
  { id: 9, name: 'Shell Advance 10W-40 AX7', type: 'Bike', image: '/shell-advance-10w40-ax7-bike.jpeg' },
  { id: 10, name: 'Shell Advance 10W-30 AX5', type: 'Bike', image: '/shell-advance-10w30-ax5-bike.webp' },
  { id: 11, name: 'Shell Advance 20W-40 AX3', type: 'Bike', image: '/shell-advance-20w40-ax3-bike.webp' },
  { id: 12, name: 'Shell Rimula R4 15W-40', type: 'Truck', image: '/shell-rimula-r4-15w40-truck.webp' },
  { id: 13, name: 'Castrol Scooter 10W-30 Synthetic', type: 'Activa', image: '/castrol-scooter-10w30-activa.jpeg' },
  { id: 14, name: 'Castrol Edge', type: 'Car', image: '/castrol-edge-car.jpg' },
  { id: 15, name: 'Repsol Moto Sintetico', type: 'Bike', image: '/repsol-moto-sintetico-bike.jpg' },
  { id: 16, name: 'Repsol Elite', type: 'Car', image: '/repsol-elite-car.jpeg' },
  { id: 17, name: 'Castrol MAGNATEC 5W-30', type: 'Car', image: '/castrol-edge-car.jpg' },
  { id: 18, name: 'Castrol GTX 20W-50', type: 'Car', image: '/castrol-edge-car.jpg' },
  { id: 19, name: 'Castrol POWER1 Ultimate 10W-40', type: 'Bike', image: '/castrol-scooter-10w30-activa.jpeg' },
  { id: 20, name: 'Castrol POWER1 Cruise 15W-50', type: 'Bike', image: '/castrol-scooter-10w30-activa.jpeg' },
  { id: 21, name: 'Castrol Activ 4T 20W-40', type: 'Bike', image: '/castrol-scooter-10w30-activa.jpeg' },
  { id: 22, name: 'Castrol CRB Turbomax 15W-40', type: 'Truck', image: '/castrol-edge-car.jpg' },
  { id: 23, name: 'Castrol Vecton Long Drain 10W-40', type: 'Truck', image: '/castrol-edge-car.jpg' },
  { id: 24, name: 'Shell Helix Ultra 5W-40', type: 'Car', image: '/shell-5w40-fully-synthetic-car.jpeg' },
  { id: 25, name: 'Shell Helix HX8 5W-30', type: 'Car', image: '/shell-5w30-fully-synthetic-car.jpeg' },
  { id: 26, name: 'Shell Helix HX5 15W-40', type: 'Car', image: '/shell-15w40-premium-mineral-car.jpeg' },
  { id: 27, name: 'Shell Advance Ultra 4T 10W-40', type: 'Bike', image: '/shell-advance-10w40-ax7-bike.jpeg' },
  { id: 28, name: 'Shell Advance Scooter 10W-40', type: 'Activa', image: '/shell-10w30-semi-synthetic-activa.png' },
  { id: 29, name: 'Shell Rimula R3 X 15W-40', type: 'Truck', image: '/shell-rimula-r4-15w40-truck.webp' },
  { id: 30, name: 'Shell Rimula R4 L 15W-40', type: 'Truck', image: '/shell-rimula-r4-15w40-truck.webp' },
  { id: 31, name: 'Repsol Moto Scooter 4T 10W-30', type: 'Activa', image: '/repsol-moto-sintetico-bike.jpg' },
  { id: 32, name: 'Repsol Diesel Turbo 15W-40', type: 'Truck', image: '/repsol-elite-car.jpeg' },
  { id: 33, name: 'Repsol Moto Racing 4T 10W-40', type: 'Bike', image: '/repsol-moto-sintetico-bike.jpg' },
  { id: 34, name: 'Repsol Premium Tech 5W-30', type: 'Car', image: '/repsol-elite-car.jpeg' },
  { id: 35, name: 'Servo Pride 15W-40', type: 'Truck', image: '/castrol-edge-car.jpg' },
  { id: 36, name: 'castrol 4T Synth 10W-30', type: 'Bike', image: '/castrol-scooter-10w30-activa.jpeg' },
  { id: 37, name: 'castrol Futura Synth 5W-30', type: 'Car', image: '/castrol-edge-car.jpg' },
  { id: 38, name: 'castrol Scooter Premium 10W-30', type: 'Activa', image: '/castrol-scooter-10w30-activa.jpeg' },
  { id: 39, name: 'Castrol VECTON 15W-40', type: 'Truck', image: '/castrol-edge-car.jpg' },
  { id: 40, name: 'Castrol CRB Multi 15W-40', type: 'Truck', image: '/castrol-edge-car.jpg' },
  { id: 41, name: 'Shell Rimula R2 Extra 15W-40', type: 'Truck', image: '/shell-rimula-r4-15w40-truck.webp' },
  { id: 42, name: 'Shell Helix Taxi 5W-30', type: 'Car', image: '/shell-5w30-taxi-synthetic-car.jpeg' },
  { id: 43, name: 'Elofic Oil Filter', type: 'Car', image: '/oilfilter.jpg' },
  { id: 44, name: 'Bosch Oil Filter', type: 'Car', image: '/oilfilter.jpg' }
];

const OilLanding: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredOils, setFilteredOils] = useState(oilProducts);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  // Function to handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    setFilteredOils(
      oilProducts.filter(product =>
        product.name.toLowerCase().includes(value) || product.type.toLowerCase().includes(value)
      )
    );
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOils = filteredOils.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredOils.length / itemsPerPage);

  const scrollToTop = () => {
    const element = document.getElementById('product-grid');
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    scrollToTop();
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;
    return (
      <div className="flex flex-col sm:flex-row justify-between items-center my-8 bg-white p-4 sm:p-5 rounded-3xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-gray-100">
        <div className="text-sm text-gray-500 font-medium mb-4 sm:mb-0 bg-gray-50/80 px-4 py-2.5 rounded-2xl border border-gray-100/50">
          Showing <span className="text-gray-900 font-bold">{indexOfFirstItem + 1}</span> to <span className="text-gray-900 font-bold">{Math.min(indexOfLastItem, filteredOils.length)}</span> of <span className="text-gray-900 font-bold">{filteredOils.length}</span> products
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
            disabled={currentPage === 1}
            className="group flex items-center justify-center gap-2 px-5 py-2.5 bg-white border-2 border-gray-100 rounded-2xl font-semibold text-gray-700 shadow-sm hover:border-red-200 hover:bg-red-50 hover:text-red-600 disabled:opacity-40 disabled:hover:bg-white disabled:hover:border-gray-100 disabled:hover:text-gray-700 disabled:cursor-not-allowed transition-all duration-200 active:scale-95"
          >
            <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors" />
            <span className="hidden sm:inline">Previous</span>
          </button>

          <div className="flex items-center justify-center min-w-[5rem] px-4 py-2.5 bg-gray-50 border-2 border-gray-100 rounded-2xl text-gray-600 font-medium text-sm">
            <span className="font-bold text-gray-900">{currentPage}</span><span className="mx-1.5 text-gray-300">/</span>{totalPages}
          </div>

          <button
            onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="group flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-red-600 to-rose-500 hover:from-red-700 hover:to-rose-600 text-white rounded-2xl font-semibold shadow-md hover:shadow-lg disabled:opacity-40 disabled:from-gray-300 disabled:to-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed transition-all duration-200 active:scale-95 border-2 border-transparent disabled:border-gray-200"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="w-5 h-5 text-white/90 group-disabled:text-gray-400" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Structured Data for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoPartsStore",
            "name": "Suman Tyres Engine Oil Shop",
            "description": "Leading Engine Oil Dealers in Gandhinagar Gujarat and Automotive Lubricant Suppliers.",
            "image": "https://sumantyres.in/_next/image?url=%2Fsumantyresshop.jpg&w=640&q=75",
            "url": "https://sumantyres.in/oil",
            "telephone": "+91-9426636250",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Sector 11",
              "addressLocality": "Gandhinagar",
              "addressRegion": "Gujarat",
              "postalCode": "382011",
              "addressCountry": "IN"
            },
            "areaServed": ["Gandhinagar", "Ahmedabad", "Vavol", "Dhodakuva"],
            "openingHours": "Mo-Sa 09:00-20:00"
          })
        }}
      />
      <Navbar />
      <div>
        <OrderCarOilOnline />
        <BrandMarquee
          title="Premium Engine Oil & Filter Brands"
          logos={[
            { src: "/shelllogo.jpeg", alt: "Shell Engine Oil Dealer" },
            { src: "/castrollogo.jpeg", alt: "Castrol Engine Oil Dealer" },
            { src: "/repsollogo.jpg", alt: "Repsol Engine Oil Dealer" },
            { src: "/servologo.jpg", alt: "Servo Engine Oil Dealer" },
            { src: "/eloficlogo.jpeg", alt: "Elofic Oil Filter Dealer" },
            { src: "https://tse1.mm.bing.net/th?id=OIP.bL3fSD9-oV7gqGJa3-_I0QHaEK&pid=Api&P=0&h=180", alt: "Bosch Oil Filter Dealer" },
          ]}
        />
      </div>
      <hr className="my-4 border-t-2 border-gray-200" />
      <main className="container mx-auto px-4">
        <section id="product-grid" className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Our Engine Oil and oil filter Products</h2>
          {/* Search bar */}
          <div className="flex items-center border-2 border-red-800 rounded-full px-4 py-2 mb-4 shadow-sm">
            <SearchIcon className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search by oil name or type..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="flex-1 border-none focus:outline-none"
            />
          </div>

          {renderPagination()}

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {currentOils.map(product => (
              <div
                key={product.id}
                className="group bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out flex flex-col relative overflow-hidden"
              >
                {/* Subtle gradient overlay at top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="bg-gray-50 rounded-xl mb-4 p-3 flex items-center justify-center h-48 overflow-hidden relative">
                  {/* Engine Oil Company Logo Badge */}
                  <div className="absolute top-3 left-3 bg-white shadow-sm z-10 flex items-center justify-center border border-gray-200 rounded-md p-1.5 h-8 w-[4.5rem] overflow-hidden">
                    <Image
                      src={
                        product.name.toLowerCase().includes('shell') ? '/shelllogo.jpeg' :
                          product.name.toLowerCase().includes('castrol') ? '/castrollogo.jpeg' :
                            product.name.toLowerCase().includes('repsol') ? '/repsollogo.jpg' :
                              product.name.toLowerCase().includes('servo') ? '/servologo.jpg' :
                                product.name.toLowerCase().includes('elofic') ? '/eloficlogo.jpeg' :
                                  product.name.toLowerCase().includes('bosch') ? 'https://tse1.mm.bing.net/th?id=OIP.bL3fSD9-oV7gqGJa3-_I0QHaEK&pid=Api&P=0&h=180' : '/favicon.ico'
                      }
                      alt={`${product.name.split(' ')[0]} Authorized Oil Dealer Logo`}
                      fill
                      unoptimized
                      className="object-contain mix-blend-multiply"
                    />
                  </div>
                  <Image
                    src={product.image}
                    alt={`Buy ${product.name} Engine Oil - Best Price at Suman Tyres Gandhinagar`}
                    width={200}
                    height={200}
                    className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg leading-tight mb-2 line-clamp-2">{product.name}</h3>
                    <p className="text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-100 inline-block px-2.5 py-1 rounded-md mb-4 uppercase tracking-wider">{product.type}</p>
                  </div>

                  <a
                    href="tel:+919426636250"
                    className="mt-auto w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-semibold py-2.5 px-4 rounded-xl text-center shadow-md hover:shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    Get Best Deal
                  </a>
                </div>
              </div>
            ))}
          </div>

          {renderPagination()}

        </section>
        <hr className="my-4 border-t-2 border-gray-200" />

        {/* SEO Content Section */}
        <section className="sr-only bg-gray-50 py-8 px-6 text-center rounded-lg my-8 border border-gray-200">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Leading Engine Oil Dealers in Gandhinagar Gujarat</h2>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Searching for reliable <strong>Engine Oil Dealers near me</strong>? Suman Tyres is proud to be one of the top <strong>Automotive Lubricant Suppliers in Gujarat</strong>. Conveniently located in Gandhinagar, we serve a wide range of customers across <strong>Gandhinagar, Ahmedabad, Vavol, Dhodakuva</strong>, and nearby areas. We stock premium synthetic, semi-synthetic, and mineral engine oils from the best brands to keep your cars, bikes, and commercial vehicles running smoothly. Visit our shop today for top-quality lubricants at unbeatable prices!
          </p>
        </section>

      </main>
      <div>
        <WhatsAppButton />
      </div>
      <Footer />
    </>
  );
};

export default OilLanding;
