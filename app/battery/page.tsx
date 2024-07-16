// pages/battery-landing.tsx
'use client'
import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SearchIcon } from 'lucide-react';

// Sample battery products data
const batteryProducts = [
  { id: 1, name: 'Exide Activa Battery', size: 'BTZ4l', image: '/4lbe.jpeg' },
  { id: 2, name: 'Exide Activa Battery', size: 'BTZ5l', image: '/5lbe.webp' },
  { id: 3, name: 'Exide Bike Battery', size: 'BTZ4L', image: '/4lbe.jpeg' },
  { id: 4, name: 'Exide Bike Battery', size: 'BTZ5L', image: '/5lbe.webp' },
  { id: 5, name: 'Exide Car Battery', size: '200Ah', image: '/ecar.jpeg' },
  { id: 6, name: 'Amaron Activa Battery', size: 'BT4L', image: '/4lb.webp' },
  { id: 7, name: 'Amaron Activa Battery', size: 'BTZ5L', image: '/5lb.webp' },
  { id: 8, name: 'Amaron Bike Battery', size: 'BTZ4L', image: '/4lb.webp' },
  { id: 9, name: 'Amaron Bike Battery', size: 'BTZ5L', image: '/5lb.webp' },
  { id: 10, name: 'Amaron Flo car Battery', size: '200Ah', image: '/acar.png' },
  { id: 11, name: 'Amaron Go car Battery', size: '200Ah', image: '/acargo.png' },
  { id: 12, name: 'Amaron Elito car Battery', size: '200Ah', image: '/aelito.jpeg' },
];

const BatteryLanding: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredBatteries, setFilteredBatteries] = useState(batteryProducts);

  // Function to handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = batteryProducts.filter(product =>
      product.name.toLowerCase().includes(value) || product.size.toLowerCase().includes(value)
    );
    setFilteredBatteries(filtered);
  };

  return (
    <>
      <Head>
        <title>Suman Tyres - Batteries</title>
        <meta name="description" content="Explore our range of high-quality batteries at Suman Tyres." />
      </Head>
      <Navbar />
      <hr className="my-4 border-t-2 border-gray-200" />
      <main className="container mx-auto px-4">
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Our Battery Products</h2>
          {/* Search bar */}
          
          <input
            type="text"
            placeholder="Search by battery name or size..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="border border-gray-300 rounded-full px-4 py-2 w-full mb-4 focus:outline-none focus:border-blue-500 shadow-sm flex items-center"
          />
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredBatteries.map(product => (
              <div key={product.id} className="border border-gray-300 p-4 rounded transition duration-300 hover:shadow-lg">
                <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2 rounded-lg" />
                <p className="font-semibold text-lg">{product.name}</p>
                <p className="text-sm text-gray-600">{product.size}</p>
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

export default BatteryLanding;
