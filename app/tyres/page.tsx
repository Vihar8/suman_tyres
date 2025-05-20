// pages/tyre-landing.tsx
'use client';
import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SearchIcon } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';
import OrderCarTyreOnline from '@/components/OrderCarTyreOnline';

// Sample tyre products data
const tyreProducts = [
  { id: 1, name: 'Ceat Buland (Auto Rickshaw)', size: '400-8', image: '/ceat3.jpeg' },
  { id: 5, name: 'Ceat Bike Tyre', size: '2.75-18', image: '/ceatbike.jpg' },
  { id: 6, name: 'Ceat Bike Tyre', size: '3.00-18', image: '/ceatbike.jpg' },
  { id: 7, name: 'Ceat Bike Tyre', size: '80/100-18', image: '/ceatbike.jpg' },
  { id: 8, name: 'Ceat Bike Tyre', size: '90/90-18', image: '/ceatbike.jpg' },
  { id: 9, name: 'Ceat Activa Tyre', size: '3.50-10', image: '/activaceat.png' },
  { id: 10, name: 'Ceat Activa Tyre', size: '90/100-10', image: '/activaceat.png' },
  { id: 11, name: 'Ceat Activa Tyre', size: '90/90-12', image: '/activaceat.png' },
  { id: 12, name: 'Ceat Activa Tyre', size: '100/90-12', image: '/activaceat.png' },
  { id: 29, name: 'Michelin Pilot Street (Bike)', size: '90/90-18', image: '/michelinbike.jpg' },
  { id: 30, name: 'Michelin Pilot Street (Bike)', size: '100/90-18', image: '/michelinbike.jpg' },
  { id: 31, name: 'Michelin Pilot Street (Bike)', size: '110/80-17', image: '/michelinbike.jpg' },
  { id: 32, name: 'Michelin Pilot Street (Bike)', size: '120/70-17', image: '/michelinbike.jpg' },
  { id: 33, name: 'Michelin City Pro (Activa)', size: '90/100-10', image: '/michelinactiva.jpg' },
  { id: 34, name: 'Michelin City Pro (Activa)', size: '90/90-12', image: '/michelinactiva.jpg' },
  { id: 35, name: 'Michelin City Pro (Activa)', size: '100/90-12', image: '/michelinactiva.jpg' },
  { id: 13, name: 'Ceat Car Tyre', size: '145/80 R12', image: '/ceatcar.jpeg' },
  { id: 14, name: 'Ceat Car Tyre', size: '155/70 R13', image: '/ceatcar.jpeg' },
  { id: 15, name: 'Ceat Car Tyre', size: '165/80 R14', image: '/ceatcar.jpeg' },
  { id: 16, name: 'Ceat Car Tyre', size: '185/65 R15', image: '/ceatcar.jpeg' },
  { id: 17, name: 'Ceat Tractor front Tyre', size: '6.00 R16', image: '/ceatotr.jpeg' },
  { id: 18, name: 'Ceat Tractor Front Tyre', size: '8.25 R16', image: '/ceatotr.jpeg' },
  { id: 19, name: 'Ceat Tractor Tyre', size: '12.4 28', image: '/ceat12.jpeg' },
  { id: 20, name: 'Ceat Tractor Tyre', size: '13.4 28', image: '/ceat12.jpeg' },
  { id: 36, name: 'Apollo Alnac 4G', size: '165/80 R14', image: '/apollo.jpeg' },
  { id: 37, name: 'Apollo Amazer 4G Life', size: '175/65 R14', image: '/apollo.jpeg' },
  { id: 38, name: 'Apollo Aspire 4G', size: '195/55 R16', image: '/apollo.jpeg' },
  { id: 39, name: 'Apollo Apterra AT2', size: '235/70 R16', image: '/apollo.jpeg' },
  { id: 40, name: 'Apollo Apterra HT2', size: '215/60 R17', image: '/apollo.jpeg' }
];

const TyreLanding: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredTyres, setFilteredTyres] = useState(tyreProducts);

  // Function to handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = tyreProducts.filter(product =>
      product.name.toLowerCase().includes(value) || product.size.toLowerCase().includes(value)
    );
    setFilteredTyres(filtered);
  };

  return (
    <>
        <Head>
      <title>Suman Tyres - Best Tyre Shop in Gandhinagar, Gujarat | Wide Range of Car & Bike Tyres</title>
      <meta
        name="description"
        content="Visit Suman Tyres in Gandhinagar, Gujarat for a wide selection of high-quality car and bike tyres. Affordable rates, expert service, and trusted brands. Your one-stop tyre shop!"
      />
      <meta
        name="keywords"
        content="Tyres Gandhinagar, Car Tyres Gujarat, Bike Tyres Gandhinagar, Best Tyre Shop in Gandhinagar, Car & Bike Tyres Gujarat, Suman Tyres, Tyre Dealer Gandhinagar"
      />
      <meta name="author" content="Suman Tyres" />
      <meta property="og:title" content="Suman Tyres - Top Tyre Shop in Gandhinagar, Gujarat" />
      <meta
        property="og:description"
        content="Explore a wide range of car and bike tyres at Suman Tyres in Gandhinagar, Gujarat. Quality brands, affordable prices, and expert service. Visit us today!"
      />
      <meta property="og:image" content="/sumantyresshop.jpg" />
      <meta property="og:url" content="https://sumantyres.vercel.app/tyres" />
      <meta property="og:type" content="website" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
      <Navbar />
      <div>
        <OrderCarTyreOnline />
      </div>
      <hr className="my-4 border-t-2 border-gray-200" />
      <main className="container mx-auto px-4">
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Our Tyre Products</h2>
          {/* Search bar */}
          <div className="flex items-center border-2 border-red-800 rounded-full px-4 py-2 mb-4 shadow-sm">
            <SearchIcon className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search by tyre name or size..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="flex-1 border-none focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredTyres.map(product => (
              <div key={product.id} className="border border-gray-300 p-4 rounded transition duration-300 hover:shadow-lg">
                <img src={product.image} alt={product.name} className="w-full object-cover min-h-40 mb-2 rounded-lg overflow-hidden" />
                <p className="font-semibold text-lg">{product.name}</p>
                <p className="text-sm text-gray-600">{product.size}</p>
              </div>
            ))}
          </div>
        </section>
        <hr className="my-4 border-t-2 border-gray-200" />
      </main>
      <div>
              <WhatsAppButton />
            </div>
      <Footer />
    </>
  );
};

export default TyreLanding;
