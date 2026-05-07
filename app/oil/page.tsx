// pages/oil-landing.tsx
'use client';
import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SearchIcon } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';
import OrderCarOilOnline from '@/components/OrderCarOilOnline';
import BrandMarquee from '@/components/BrandMarquee';

// Sample engine oil products data
const oilProducts = [
  { id: 1, name: 'Shell 10W-30 Semi Synthetic', type: 'Activa', image: '/800.png' },
  { id: 2, name: 'Shell 10W-30 Premium Mineral', type: 'Activa', image: '/800y.jpeg' },
  { id: 3, name: 'Shell 5W-40 Fully Synthetic', type: 'Car', image: '/540.jpeg' },
  { id: 4, name: 'Shell 10W-40 HX7 Synthetic', type: 'Car', image: '/1040c.jpeg' },
  { id: 5, name: 'Shell 5W-40 Fully Synthetic', type: 'Car', image: '/540cs.jpeg' },
  { id: 6, name: 'Shell 15W-40 Premium Mineral', type: 'Car', image: '/1540cm.jpeg' },
  { id: 7, name: 'Shell 5W-30 TAXI Synthetic Technology', type: 'Car', image: '/530taxi.jpeg' },
  { id: 8, name: 'Shell 5W-30 Fully Synthetic', type: 'Car', image: '/530cn.jpeg' },
  { id: 9, name: 'Shell Advance 10W-40 AX7', type: 'Bike', image: '/1040s.jpeg' },
  { id: 10, name: 'Shell Advance 10W-30 AX5', type: 'Bike', image: '/1030pm.webp' },
  { id: 11, name: 'Shell Advance 20W-40 AX3', type: 'Bike', image: '/2040.webp' },
  { id: 12, name: 'Shell Rimula R4 15W-40', type: 'Truck', image: '/r4shell.webp' },
  { id: 13, name: 'Castrol Scooter 10W-30 Synthetic', type: 'Activa', image: '/castrolcom.jpeg' },
  { id: 14, name: 'Castrol Edge', type: 'Car', image: '/cased.jpg' },
  { id: 15, name: 'Repsol Moto Sintetico', type: 'Bike', image: '/repsolmoto.jpg' },
  { id: 16, name: 'Repsol Elite', type: 'Car', image: '/repsol-elite.jpeg' },
];

const OilLanding: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredOils, setFilteredOils] = useState(oilProducts);

  // Function to handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    setFilteredOils(
      oilProducts.filter(product =>
        product.name.toLowerCase().includes(value) || product.type.toLowerCase().includes(value)
      )
    );
  };

  return (
    <>
      {/* <Head>
  <title>Suman Tyres - Premium Engine Oils in Gandhinagar, Gujarat | Car & Bike Oil Shop</title>
  <meta
    name="description"
    content="Discover high-quality engine oils at Suman Tyres in Gandhinagar, Gujarat. Wide range of synthetic, mineral, and scooter oils for cars, bikes, and trucks. Affordable rates & trusted brands!"
  />
  <meta
    name="keywords"
    content="Engine Oils Gandhinagar, Car Oil Gujarat, Bike Oil Gandhinagar, Synthetic Engine Oil, Mineral Oil, Car & Bike Lubricants, Best Oil Shop in Gandhinagar, Suman Tyres, Oil Dealer Gujarat"
  />
  <meta name="author" content="Suman Tyres" />
  <meta property="og:title" content="Suman Tyres - Best Engine Oils in Gandhinagar, Gujarat" />
  <meta
    property="og:description"
    content="Visit Suman Tyres in Gandhinagar for a wide selection of engine oils suitable for cars, bikes, trucks, and scooters. Premium brands, affordable prices, expert advice!"
  />
  <meta property="og:image" content="/sumantyresshop.jpg" />
  <meta property="og:url" content="https://sumantyres.vercel.app/oil" />
  <meta property="og:type" content="website" />
</Head> */}
 <Head>
      <title>
        Engine Oil Dealers in Gandhinagar & Near Me | Automotive Lubricant Suppliers
      </title>

      <meta
        name="description"
        content="Looking for Engine Oil Dealers near me? Suman Tyres is the top Automotive Lubricant Supplier serving Gandhinagar, Ahmedabad, Vavol, and Dhodakuva."
      />

      <meta
        name="keywords"
        content="Engine Oil Dealers in Gandhinagar Gujarat, Automotive Lubricant Suppliers Gujarat, Engine Oil Dealers near me, Automotive Lubricant Suppliers near me, Engine Oils Gandhinagar, Car Oil Gujarat, Bike Oil Gandhinagar, Synthetic Engine Oil, Mineral Oil, Car & Bike Lubricants, Suman Tyres, Oil Dealer Gandhinagar, oil dealers in Ahmedabad, oil dealers in Vavol, oil dealers in Dhodakuva"
      />

      <meta name="author" content="Suman Tyres" />

      {/* Open Graph */}
      <meta
        property="og:title"
        content="Engine Oil Dealers in Gandhinagar & Near Me | Automotive Lubricant Suppliers"
      />
      <meta
        property="og:description"
        content="Looking for Engine Oil Dealers near me? Suman Tyres is the top Automotive Lubricant Supplier serving Gandhinagar, Ahmedabad, Vavol, and Dhodakuva."
      />
      <meta
        property="og:image"
        content="https://sumantyres.vercel.app/_next/image?url=%2Fsumantyresshop.jpg&w=640&q=75"
      />
      <meta property="og:url" content="https://sumantyres.vercel.app/oil" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Engine Oil Dealers in Gandhinagar & Near Me | Automotive Lubricant Suppliers"
      />
       <meta
        name="twitter:description"
        content="Looking for Engine Oil Dealers near me? Suman Tyres is the top Automotive Lubricant Supplier serving Gandhinagar, Ahmedabad, Vavol, and Dhodakuva."
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
          "name": "Suman Tyres Engine Oil Shop",
          "description": "Leading Engine Oil Dealers in Gandhinagar Gujarat and Automotive Lubricant Suppliers.",
          "image": "https://sumantyres.vercel.app/_next/image?url=%2Fsumantyresshop.jpg&w=640&q=75",
          "url": "https://sumantyres.vercel.app/oil",
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
      <OrderCarOilOnline />
      <BrandMarquee 
        title="Premium Engine Oil Brands" 
        logos={[
          { src: "/shelllogo.jpeg", alt: "Shell" },
          { src: "/castrollogo.jpeg", alt: "Castrol" },
          { src: "/repsollogo.jpg", alt: "Repsol" },
          { src: "/servologo.jpg", alt: "Servo" },
        ]} 
      />
    </div>
      <hr className="my-4 border-t-2 border-gray-200" />
      <main className="container mx-auto px-4">
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Our Engine Oil Products</h2>
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
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredOils.map(product => (
              <div 
                key={product.id} 
                className="group bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out flex flex-col relative overflow-hidden"
              >
                {/* Subtle gradient overlay at top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="bg-gray-50 rounded-xl mb-4 p-3 flex items-center justify-center h-48 overflow-hidden">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
        <hr className="my-4 border-t-2 border-gray-200" />
        
        {/* SEO Content Section */}
        <section className="bg-gray-50 py-8 px-6 text-center rounded-lg my-8 border border-gray-200">
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
