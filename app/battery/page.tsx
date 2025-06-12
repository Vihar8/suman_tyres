// pages/battery-landing.tsx
'use client';
import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SearchIcon } from 'lucide-react';
import Image from 'next/image';
import WhatsAppButton from '@/components/WhatsAppButton';
import CarBatteryReplacement from '@/components/CarBatteryReplacement';
import BestCarBatteryService from '@/components/BestCarBatteryService';
import OrderCarBatteryOnline from '@/components/OrderCarBatteryOnline';

// Sample battery products data
const batteryProducts = [
  { id: 1, name: 'Amaron Activa Battery', size: 'BT4LB', image: '/4lb.webp' },
  { id: 2, name: 'Amaron Activa Battery', size: 'BTZ5LB', image: '/5lb.webp' },
  { id: 3, name: 'Amaron Bike Battery', size: 'BTZ4LB', image: '/4lb.webp' },
  { id: 4, name: 'Amaron Bike Battery', size: 'BTZ5LB', image: '/5lb.webp' },
  { id: 5, name: 'Amaron Car Battery', size: 'Din 55 FLO', image: '/din55.jpeg' },
  { id: 6, name: 'Amaron Flo Car Battery', size: '40Ah', image: '/acar.png' },
  { id: 7, name: 'Amaron Go Car Battery', size: '35Ah', image: '/acargo.png' },
  { id: 8, name: 'Amaron Elito Car Battery', size: '35Ah', image: '/aelito.jpeg' },
  { id: 9, name: 'Exide Activa Battery', size: 'BTZ4LB', image: '/4lbe.jpeg' },
  { id: 10, name: 'Exide Activa Battery', size: 'BTZ5LB', image: '/5lbe.webp' },
  { id: 11, name: 'Exide Bike Battery', size: 'BTZ4LB', image: '/4lbe.jpeg' },
  { id: 12, name: 'Exide Bike Battery', size: 'BTZ5LB', image: '/5lbe.webp' },
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
];

const BatteryLanding: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredBatteries, setFilteredBatteries] = useState(batteryProducts);

  // Function to handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    setFilteredBatteries(
      batteryProducts.filter(product =>
        product.name.toLowerCase().includes(value) || product.size.toLowerCase().includes(value)
      )
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
        Suman Tyres - Wholesale Batteries for Bikes & Cars in Gandhinagar, Gujarat | Best Prices & Bulk Deals
      </title>

      <meta
        name="description"
        content="Get high-quality batteries for 2-wheelers and 4-wheelers at wholesale rates in Gandhinagar, Gujarat. Wide range of trusted brands for bikes and cars. Affordable prices with bulk discounts!"
      />

      <meta
        name="keywords"
        content="Wholesale Bike Batteries Gandhinagar, Car Batteries Wholesale Gujarat, 2 Wheeler Batteries Bulk Prices, Car Batteries Discount Gandhinagar, Best Wholesale Battery Shop Gujarat, Suman Tyres, Bulk Battery Deals Gujarat, Bike Battery Shop Gandhinagar"
      />

      <meta name="author" content="Suman Tyres" />

      {/* Open Graph */}
      <meta
        property="og:title"
        content="Suman Tyres - Wholesale Batteries for Bikes & Cars in Gandhinagar, Gujarat"
      />
      <meta
        property="og:description"
        content="Purchase batteries for 2-wheelers and cars at wholesale rates from Suman Tyres in Gandhinagar. Trusted brands, bulk discounts, and expert service for all vehicle needs."
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
        content="Suman Tyres - Wholesale Batteries for Bikes & Cars in Gandhinagar, Gujarat"
      />
      <meta
        name="twitter:description"
        content="Get top-quality batteries from Amaron, Exide and Many more for bikes and cars at wholesale prices from Suman Tyres, Gandhinagar. Bulk deals and trusted brands for all your battery needs."
      />
      <meta
        name="twitter:image"
        content="https://sumantyres.vercel.app/_next/image?url=%2Fsumantyresshop.jpg&w=640&q=75"
      />

      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
      <Navbar />
      <div>
      <OrderCarBatteryOnline />
    </div>
      <hr className="my-4 border-t-2 border-gray-200" />
      <main className="container mx-auto px-4">
        <section className="mb-8">
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
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredBatteries.map(product => (
              <div key={product.id} className="border border-gray-300 p-4 rounded transition duration-300 hover:shadow-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="w-full object-cover min-h-40 mb-2 rounded-lg overflow-hidden"
                />
                <p className="font-semibold text-lg">{product.name}</p>
                <p className="text-sm text-gray-600">{product.size}</p>
              </div>
            ))}
          </div>
        </section>
        <div>
      <CarBatteryReplacement />
    </div>
    <div>
      <BestCarBatteryService />
    </div>
        <hr className="my-4 border-t-2 border-gray-200" />
      </main>
      <div>
              <WhatsAppButton />
            </div>
      <Footer />
    </>
  );
};

export default BatteryLanding;
