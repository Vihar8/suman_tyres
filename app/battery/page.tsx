// pages/battery-landing.tsx
/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SearchIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import WhatsAppButton from '@/components/WhatsAppButton';
import CarBatteryReplacement from '@/components/CarBatteryReplacement';
import BestCarBatteryService from '@/components/BestCarBatteryService';
import OrderCarBatteryOnline from '@/components/OrderCarBatteryOnline';
import BrandMarquee from '@/components/BrandMarquee';

// Sample battery products data
const batteryProducts = [
  { id: 1, name: 'Amaron Activa Battery', size: 'BT4LB', image: '/4lb.webp' },
  { id: 2, name: 'Amaron Activa Battery', size: 'BTZ5LB', image: '/5lb.webp' },
  { id: 5, name: 'Amaron Car Battery', size: 'Din 55 FLO', image: '/din55.jpeg' },
  { id: 6, name: 'Amaron Flo Car Battery', size: '40Ah', image: '/acar.png' },
  { id: 7, name: 'Amaron Go Car Battery', size: '35Ah', image: '/acargo.png' },
  { id: 8, name: 'Amaron Elito Car Battery', size: '35Ah', image: '/aelito.jpeg' },
  { id: 9, name: 'Exide Activa Battery', size: 'BTZ4LB', image: '/4lbe.jpeg' },
  { id: 10, name: 'Exide Activa Battery', size: 'BTZ5LB', image: '/5lbe.webp' },
  { id: 13, name: 'Exide Car Battery', size: '40Ah', image: '/ecar.jpeg' },
  { id: 14, name: 'Amaron Car Battery', size: '35Ah', image: '/96_96_Amaron FLO 36B20L.jpg' },
  { id: 15, name: 'Amaron Car Battery', size: '65Ah', image: '/2.jpg' },
  { id: 16, name: 'Amaron Car Battery', size: '45Ah', image: '/3.png' },
  { id: 17, name: 'Amaron Car Battery', size: '50Ah', image: '/4.png' },
  { id: 18, name: 'Amaron Car Battery', size: '60Ah', image: '/5.jpg' },
  { id: 18, name: 'Amaron Car Battery', size: '100Ah', image: '/6.png' },
  { id: 19, name: 'Exide Car Battery', size: '35Ah', image: '/7.jpg' },
  { id: 20, name: 'Exide Car Battery', size: '44Ah', image: '/8.jpg' },
  { id: 21, name: 'Exide Car Battery', size: '50Ah', image: '/9.jpg' },
  { id: 22, name: 'Amaron Pro Car Battery', size: 'Din 60', image: '/2.jpg' },
  { id: 23, name: 'Amaron Pro Car Battery', size: 'Din 74', image: '/3.png' },
  { id: 24, name: 'Amaron Hi-Life Car Battery', size: '45Ah', image: '/4.png' },
  { id: 25, name: 'Amaron Hi-Life Car Battery', size: '50Ah', image: '/5.jpg' },
  { id: 26, name: 'Amaron Black Car Battery', size: '35Ah', image: '/acar.png' },
  { id: 27, name: 'Amaron Pro Bike Rider', size: '9Ah', image: '/5lb.webp' },
  { id: 28, name: 'Exide Mileage Car Battery', size: '35Ah', image: '/ecar.jpeg' },
  { id: 29, name: 'Exide Mileage Car Battery', size: '45Ah', image: '/7.jpg' },
  { id: 30, name: 'Exide Matrix Car Battery', size: 'Din 55', image: '/8.jpg' },
  { id: 31, name: 'Exide Matrix Car Battery', size: 'Din 60', image: '/9.jpg' },
  { id: 32, name: 'Exide Epiq Car Battery', size: '35Ah', image: '/ecar.jpeg' },
  { id: 33, name: 'Exide Xplore Bike Battery', size: '9Ah', image: '/5lbe.webp' },
  { id: 34, name: 'Exide Xplore Bike Battery', size: '5Ah', image: '/4lbe.jpeg' },
  { id: 35, name: 'Exide Heavy Duty (JCB) Battery', size: '130Ah', image: '/6.png' },
  { id: 36, name: 'Exide Heavy Duty (JCB) Battery', size: '150Ah', image: '/6.png' },
  { id: 37, name: 'Amaron Heavy Duty (JCB) Battery', size: '130Ah', image: '/6.png' },
  { id: 38, name: 'Amaron Heavy Duty (JCB) Battery', size: '150Ah', image: '/6.png' },
  { id: 39, name: 'Exide Commercial Vehicle Battery', size: '100Ah', image: '/2.jpg' },
  { id: 40, name: 'Amaron Commercial Vehicle Battery', size: '100Ah', image: '/3.png' },
  { id: 41, name: 'Exide InvaTubular Battery', size: '150Ah', image: '/9.jpg' },
  { id: 42, name: 'Exide InvaTubular Battery', size: '200Ah', image: '/9.jpg' },
  { id: 43, name: 'Amaron Current Tubular Battery', size: '150Ah', image: '/5.jpg' },
  { id: 44, name: 'Amaron Current Tubular Battery', size: '200Ah', image: '/5.jpg' },
  { id: 45, name: 'Exide Matrix Car Battery', size: '65Ah', image: '/ecar.jpeg' },
  { id: 46, name: 'Amaron Pro Car Battery', size: '65Ah', image: '/acar.png' },
  { id: 47, name: 'Exide Mileage Car Battery', size: '55Ah', image: '/ecar.jpeg' },
  { id: 48, name: 'Amaron Hi-Life Car Battery', size: '55Ah', image: '/acar.png' },
  { id: 49, name: 'Exide Heavy Duty Truck Battery', size: '180Ah', image: '/6.png' },
  { id: 50, name: 'Amaron Heavy Duty Truck Battery', size: '180Ah', image: '/6.png' }
];

const BatteryLanding: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredBatteries, setFilteredBatteries] = useState(batteryProducts);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  // Function to handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    setFilteredBatteries(
      batteryProducts.filter(product =>
        product.name.toLowerCase().includes(value) || product.size.toLowerCase().includes(value)
      )
    );
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBatteries = filteredBatteries.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredBatteries.length / itemsPerPage);

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
          Showing <span className="text-gray-900 font-bold">{indexOfFirstItem + 1}</span> to <span className="text-gray-900 font-bold">{Math.min(indexOfLastItem, filteredBatteries.length)}</span> of <span className="text-gray-900 font-bold">{filteredBatteries.length}</span> products
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
            disabled={currentPage === 1}
            className="group flex items-center justify-center gap-2 px-5 py-2.5 bg-white border-2 border-gray-100 rounded-2xl font-semibold text-gray-700 shadow-sm hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 disabled:opacity-40 disabled:hover:bg-white disabled:hover:border-gray-100 disabled:hover:text-gray-700 disabled:cursor-not-allowed transition-all duration-200 active:scale-95"
          >
            <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
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
      {/* <Head>
      <title>Suman Tyres - Wholesale Batteries for Bikes & Cars in Gandhinagar, Gujarat | Best Prices</title>
      <meta
        name="description"
        content="Get high-quality batteries for 2-wheelers and 4-wheelers at wholesale rates in Gandhinagar, Gujarat. Wide selection of trusted brands for bikes and cars. Affordable prices & bulk discounts!"
      />
      <meta
        name="keywords"
        content="Wholesale Bike Batteries Gandhinagar, Car Batteries Wholesale Gujarat, 2 Wheeler Batteries Bulk Prices, Car Batteries Discount Gandhinagar, Best Wholesale Battery Shop, Suman Tyres, Bulk Battery Deals Gujarat"
      />
      <meta name="author" content="Suman Tyres" />
      <meta property="og:title" content="Suman Tyres - Wholesale Batteries for Bikes & Cars in Gandhinagar, Gujarat" />
      <meta
        property="og:description"
        content="Purchase batteries for 2-wheelers and cars at wholesale rates from Suman Tyres in Gandhinagar, Gujarat. Trusted brands, bulk discounts, and expert service for all vehicle needs!"
      />
      <meta property="og:image" content="/sumantyresshop.jpg" />
      <meta property="og:url" content="https://sumantyres.vercel.app/battery" />
      <meta property="og:type" content="website" />
    </Head> */}
      <Head>
        <title>
          Top Battery Dealers & Car Jump-Start in Gandhinagar | Suman Tyres
        </title>

        <meta
          name="description"
          content="Need a car jump-start on the spot or battery replacement in minutes? Suman Tyres is the top battery dealer in Gandhinagar offering fast onsite service and premium batteries."
        />

        <meta
          name="keywords"
          content="car battery replacement in minutes, car jump-start on the spot, battery shop in gandhinagar, emergency jump start near me, Top Battery Dealers in Gandhinagar Gujarat, Best Battery Dealers near me, Car Battery Dealers, Rechargeable Battery Dealers, Inverter Battery Dealers, Batteries for Sale in Gandhinagar Gujarat, battery dealers in Ahmedabad, Suman Tyres"
        />

        <meta name="author" content="Suman Tyres" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Top Battery Dealers & Car Jump-Start in Gandhinagar | Suman Tyres"
        />
        <meta
          property="og:description"
          content="Need a car jump-start on the spot or battery replacement in minutes? Suman Tyres is the top battery dealer in Gandhinagar offering fast onsite service and premium batteries."
        />
        <meta
          property="og:image"
          content="https://sumantyres.vercel.app/_next/image?url=%2Fsumantyresshop.jpg&w=640&q=75"
        />
        <meta property="og:url" content="https://sumantyres.vercel.app/battery" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Top Battery Dealers & Car Jump-Start in Gandhinagar | Suman Tyres"
        />
        <meta
          name="twitter:description"
          content="Need a car jump-start on the spot or battery replacement in minutes? Suman Tyres is the top battery dealer in Gandhinagar offering fast onsite service and premium batteries."
        />
        <meta
          name="twitter:image"
          content="https://sumantyres.vercel.app/_next/image?url=%2Fsumantyresshop.jpg&w=640&q=75"
        />

        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Structured Data for Local Business */}
        <script type="application/ld+json">
          {`
        {
          "@context": "https://schema.org",
          "@type": "AutoPartsStore",
          "name": "Suman Tyres Battery Shop",
          "description": "Top Battery Dealers in Gandhinagar Gujarat offering Car Battery, Rechargeable Battery, and Inverter Battery.",
          "image": "https://sumantyres.vercel.app/_next/image?url=%2Fsumantyresshop.jpg&w=640&q=75",
          "url": "https://sumantyres.vercel.app/battery",
          "telephone": "+91-9426636250",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Sector 11",
            "addressLocality": "Gandhinagar",
            "addressRegion": "Gujarat",
            "postalCode": "382017",
            "addressCountry": "IN"
          },
          "areaServed": ["Gandhinagar", "Ahmedabad", "Vavol", "Dhodakuva"],
          "openingHours": "Mo-Sa 09:00-20:00"
        }
        `}
        </script>
      </Head>
      <Navbar />
      <div>
        <OrderCarBatteryOnline />
        <BrandMarquee
          title="Trusted Battery Brands"
          logos={[
            { src: "/amaronlogo.jpg", alt: "Amaron Battery Authorized Dealer" },
            { src: "/exidelogo.jpeg", alt: "Exide Battery Authorized Dealer" },
          ]}
        />
      </div>
      <hr className="my-4 border-t-2 border-gray-200" />
      <main className="container mx-auto px-4">
        <section id="product-grid" className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Our Battery Products</h2>
          {/* Search bar */}
          <div className="flex items-center border-2 border-red-800 rounded-full px-4 py-2 mb-4 shadow-sm">
            <SearchIcon className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search by battery name or size..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="flex-1 border-none focus:outline-none"
            />
          </div>

          {renderPagination()}

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {currentBatteries.map(product => (
              <div
                key={product.id}
                className="group bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out flex flex-col relative overflow-hidden"
              >
                {/* Subtle gradient overlay at top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="bg-gray-50 rounded-xl mb-4 p-3 flex items-center justify-center h-48 overflow-hidden relative">
                  {/* Battery Company Logo Badge */}
                  <div className="absolute top-3 left-3 bg-white shadow-sm z-10 flex items-center justify-center border border-gray-200 rounded-md p-1.5 h-8 w-[4.5rem] overflow-hidden">
                    <img
                      src={
                        product.name.toLowerCase().includes('amaron') ? '/amaronlogo.jpg' :
                          product.name.toLowerCase().includes('exide') ? '/exidelogo.jpeg' : ''
                      }
                      alt={`${product.name.split(' ')[0]} Authorized Dealer Logo`}
                      className="w-full h-full object-contain mix-blend-multiply"
                    />
                  </div>
                  <Image
                    src={product.image}
                    alt={`Buy ${product.name} ${product.size} - Best Price at Suman Tyres Gandhinagar`}
                    width={300}
                    height={200}
                    className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg leading-tight mb-2 line-clamp-2">{product.name}</h3>
                    <p className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 inline-block px-2.5 py-1 rounded-md mb-4 uppercase tracking-wider">{product.size}</p>
                  </div>

                  <a
                    href="tel:+919426636250"
                    className="mt-auto w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-semibold py-2.5 px-4 rounded-xl text-center shadow-md hover:shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>


          {renderPagination()}

        </section>
        <div>
          <CarBatteryReplacement />
        </div>
        <div>
          <BestCarBatteryService />
        </div>
        <hr className="my-4 border-t-2 border-gray-200" />

        {/* SEO Content Section */}
        <section className="bg-gray-50 py-8 px-6 text-center rounded-lg my-8 border border-gray-200">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Top Battery Dealers in Gandhinagar</h2>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Are you searching for a <strong>battery shop near me</strong> or need a <strong>car jump-start on the spot</strong>? Look no further! Suman Tyres is the leading <strong>battery shop in Gandhinagar</strong>, serving customers across <strong>Gandhinagar, Ahmedabad, Vavol, and Dhodakuva</strong>. If you are stranded, we offer <strong>car battery replacement in minutes</strong> so you can get back on the road. We are authorized <strong>Car Battery Dealers</strong>, <strong>Rechargeable Battery Dealers</strong>, and <strong>Inverter Battery Dealers</strong>. Whether you need an emergency jump start for your vehicle or reliable home power backup, we have a wide range of premium <strong>Batteries for Sale in Gandhinagar Gujarat</strong>. Visit us today for the best prices and expert installation services!
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

export default BatteryLanding;
