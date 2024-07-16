// pages/oil-landing.tsx
'use client'
import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Sample engine oil products data
const oilProducts = [
  { id: 1, name: 'Shell 10W-30 Semi Synthetic', type: 'Activa', image: '/800.png' },
  { id: 10, name: 'Shell 10W-30 Premium Mineral', type: 'Activa', image: '/800y.jpeg' },
  { id: 10, name: 'Shell 5W-40 Fully Synthetic', type: 'car', image: '/540.jpeg' },
  { id: 10, name: 'Shell 10W-40 HX7 Synthetic', type: 'car', image: '/1040c.jpeg' },
  { id: 10, name: 'Shell 5W-40 Fully Synthetic', type: 'car', image: '/540cs.jpeg' },
  { id: 10, name: 'Shell 15W-40 Premium Mineral', type: 'car', image: '/1540cm.jpeg' },
  { id: 10, name: 'Shell 5W-30 TAXI Synthetic Technology', type: 'car', image: '/530taxi.jpeg' },
  { id: 10, name: 'Shell 5W-30 Fully Synthetic', type: 'car', image: '/530cn.jpeg' },
  { id: 2, name: 'Shell Advance 10W-40 AX7', type: 'Bike', image: '/1040s.jpeg' },
  { id: 3, name: 'Shell Advance 10W-30 AX5', type: 'Bike', image: '/1030pm.webp' },
  { id: 11, name: 'Shell Advance 20W-40 AX3', type: 'Bike', image: '/2040.webp' },
  { id: 4, name: 'Shell Rimula R4 15W-40', type: 'Truck', image: '/r4shell.webp' },
  { id: 7, name: 'Castrol Scooter 10W-30 Synthetic', type: 'Activa', image: '/castrolcom.jpeg' },
  { id: 8, name: 'Castrol Edge', type: 'Car', image: '/cased.jpg' },
  { id: 9, name: 'Repsol Moto Sintetico', type: 'Bike', image: '/repsolmoto.jpg' },
  { id: 10, name: 'Repsol Elite', type: 'Car', image: '/repsol-elite.jpeg' },
];

const OilLanding: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredOils, setFilteredOils] = useState(oilProducts);

  // Function to handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = oilProducts.filter(product =>
      product.name.toLowerCase().includes(value) || product.type.toLowerCase().includes(value)
    );
    setFilteredOils(filtered);
  };

  return (
    <>
      <Head>
        <title>Suman Tyres - Engine Oils</title>
        <meta name="description" content="Explore our range of high-quality engine oils at Suman Tyres." />
      </Head>
      <Navbar />
      <hr className="my-4 border-t-2 border-gray-200" />
      <main className="container mx-auto px-4">
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Our Engine Oil Products</h2>
          {/* Search bar */}
          
          <input
            type="text"
            placeholder="Search by oil name or type..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="border border-gray-300 rounded-full px-4 py-2 w-full mb-4 focus:outline-none focus:border-blue-500 shadow-sm flex items-center"
          />
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredOils.map(product => (
              <div key={product.id} className="border border-gray-300 p-4 rounded transition duration-300 hover:shadow-lg">
                <div className="w-full min-h-40 mb-2 rounded-lg overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <p className="font-semibold text-lg">{product.name}</p>
                <p className="text-sm text-gray-600">{product.type}</p>
              </div>
            ))}
          </div>
        </section>
        <hr className="my-4 border-t-2 border-gray-200" />
      </main>
      <Footer />
    </>
  );
};

export default OilLanding;
