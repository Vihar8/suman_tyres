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
  { id: 2, name: 'Ceat Grip X3', size: '2.75-18', image: '/ceatbike.jpg' },
  { id: 3, name: 'Ceat Grip X3', size: '3.00-18', image: '/ceatbike.jpg' },
  { id: 4, name: 'Ceat Grip X3', size: '80/100-18', image: '/ceatbike.jpg' },
  { id: 5, name: 'Ceat Grip X3', size: '90/90-18', image: '/ceatbike.jpg' },
  { id: 6, name: 'Ceat MILAZE', size: '3.50-10', image: '/activaceat.png' },
  { id: 7, name: 'Ceat MILAZE', size: '90/100-10', image: '/activaceat.png' },
  { id: 8, name: 'Ceat MILAZE', size: '90/90-12', image: '/activaceat.png' },
  { id: 9, name: 'Ceat MILAZE', size: '100/90-12', image: '/activaceat.png' },
  { id: 10, name: 'Michelin Pilot Street (Bike)', size: '90/90-18', image: '/michelinbike.jpg' },
  { id: 11, name: 'Michelin Pilot Street (Bike)', size: '100/90-18', image: '/michelinbike.jpg' },
  { id: 12, name: 'Michelin Pilot Street (Bike)', size: '110/80-17', image: '/michelinbike.jpg' },
  { id: 13, name: 'Michelin Pilot Street (Bike)', size: '120/70-17', image: '/michelinbike.jpg' },
  { id: 14, name: 'Michelin City Pro (Activa)', size: '90/100-10', image: '/michelinactiva.jpg' },
  { id: 15, name: 'Michelin City Pro (Activa)', size: '90/90-12', image: '/michelinactiva.jpg' },
  { id: 16, name: 'Michelin City Pro (Activa)', size: '100/90-12', image: '/michelinactiva.jpg' },
  { id: 17, name: 'Bridgestone STURDO', size: '135/70 R12', image: '/bridgestonesturdo.png' },
  { id: 18, name: 'Bridgestone STURDO', size: '145/80 R12', image: '/sturdo1.png' },
  { id: 19, name: 'Bridgestone STURDO', size: '155/65 R13', image: '/sturdo2.png' },
  { id: 20, name: 'Bridgestone STURDO', size: '155/70 R13', image: '/sturdo2.png' },
  { id: 21, name: 'Bridgestone STURDO', size: '165/70 R14', image: '/sturdo2.png' },
  { id: 22, name: 'Bridgestone STURDO', size: '185/65 R14', image: '/sturdo2.png' },
  { id: 23, name: 'Bridgestone STURDO', size: '175/65 R14', image: '/sturdo2.png' },
  { id: 24, name: 'Bridgestone STURDO', size: '185/65 R15', image: '/sturdo2.png' },
  { id: 25, name: 'Bridgestone STURDO', size: '195/65 R15', image: '/sturdo2.png' },
  { id: 26, name: 'Ceat Milaze X3', size: '145/80 R12', image: '/ceatcar.jpeg' },
  { id: 27, name: 'Ceat Milaze X3', size: '155/70 R13', image: '/ceatcar.jpeg' },
  { id: 28, name: 'Ceat Milaze X3', size: '165/80 R14', image: '/ceatcar.jpeg' },
  { id: 29, name: 'Ceat Milaze X3', size: '185/65 R15', image: '/ceatcar.jpeg' },
  { id: 30, name: 'Ceat Milaze X3', size: '145/80 R12', image: '/ceatcar.jpeg' },
  { id: 31, name: 'Ceat Milaze X3', size: '155/65 R13', image: '/ceatcar.jpeg' },
  { id: 32, name: 'Ceat Milaze X3', size: '155/70 R13', image: '/ceatcar.jpeg' },
  { id: 33, name: 'Ceat Milaze X3', size: '155/80 R13', image: '/ceatcar.jpeg' },
  { id: 34, name: 'Ceat Milaze X3', size: '165/65 R14', image: '/ceatcar.jpeg' },
  { id: 35, name: 'Ceat Milaze X3', size: '165/70 R14', image: '/ceatcar.jpeg' },
  { id: 36, name: 'Ceat Milaze X3', size: '165/80 R14', image: '/ceatcar.jpeg' },
  { id: 37, name: 'Ceat Milaze X3', size: '175/65 R14', image: '/ceatcar.jpeg' },
  { id: 38, name: 'Ceat Milaze X3', size: '175/65 R15', image: '/ceatcar.jpeg' },
  { id: 39, name: 'Ceat Milaze X3', size: '185/70 R14', image: '/ceatcar.jpeg' },
  { id: 40, name: 'Ceat Milaze X3', size: '195/55 R16', image: '/ceatcar.jpeg' },
  { id: 41, name: 'Ceat Milaze X5', size: '145/80 R12', image: '/ceatx5.webp' },
  { id: 42, name: 'Ceat Milaze X5', size: '155/70 R13', image: '/ceatx5.webp' },
  { id: 43, name: 'Ceat Milaze X5', size: '165/80 R14', image: '/ceatx5.webp' },
  { id: 44, name: 'Ceat Milaze X5', size: '185/65 R15', image: '/ceatx5.webp' },
  { id: 45, name: 'Ceat Milaze X5', size: '145/80 R12', image: '/ceatx5.webp' },
  { id: 46, name: 'Ceat Milaze X5', size: '155/65 R13', image: '/ceatx5.webp' },
  { id: 47, name: 'Ceat Milaze X5', size: '155/70 R13', image: '/ceatx5.webp' },
  { id: 48, name: 'Ceat Milaze X5', size: '155/80 R13', image: '/ceatx5.webp' },
  { id: 49, name: 'Ceat Milaze X5', size: '165/65 R14', image: '/ceatx5.webp' },
  { id: 50, name: 'Ceat Milaze X5', size: '165/70 R14', image: '/ceatx5.webp' },
  { id: 51, name: 'Ceat Milaze X5', size: '165/80 R14', image: '/ceatx5.webp' },
  { id: 52, name: 'Ceat Milaze X5', size: '175/65 R14', image: '/ceatx5.webp' },
  { id: 53, name: 'Ceat Milaze X5', size: '175/65 R15', image: '/ceatx5.webp' },
  { id: 54, name: 'Ceat Milaze X5', size: '185/70 R14', image: '/ceatx5.webp' },
  { id: 55, name: 'Ceat Milaze X5', size: '195/55 R16', image: '/ceatx5.webp' },
  { id: 56, name: 'Ceat Ayushman', size: '6.00 R16', image: '/ceatotr.jpeg' },
  { id: 57, name: 'Ceat Ayushman', size: '8.25 R16', image: '/ceatotr.jpeg' },
  { id: 58, name: 'Ceat Ayushman', size: '12.4 28', image: '/ceat12.jpeg' },
  { id: 59, name: 'Ceat Ayushman', size: '13.4 28', image: '/ceat12.jpeg' },
  { id: 60, name: 'Apollo Alnac 4G', size: '155/65 R14', image: '/apollo.jpeg' },
  { id: 61, name: 'Apollo Alnac 4G', size: '155/70 R13', image: '/apollo.jpeg' },
  { id: 62, name: 'Apollo Alnac 4G', size: '155/80 R13', image: '/apollo.jpeg' },
  { id: 63, name: 'Apollo Alnac 4G', size: '165/65 R14', image: '/apollo.jpeg' },
  { id: 64, name: 'Apollo Alnac 4G', size: '165/70 R14', image: '/apollo.jpeg' },
  { id: 65, name: 'Apollo Alnac 4G', size: '165/80 R14', image: '/apollo.jpeg' },
  { id: 66, name: 'Apollo Alnac 4G', size: '175/65 R14', image: '/apollo.jpeg' },
  { id: 67, name: 'Apollo Alnac 4G', size: '175/70 R14', image: '/apollo.jpeg' },
  { id: 68, name: 'Apollo Alnac 4G', size: '185/60 R14', image: '/apollo.jpeg' },
  { id: 69, name: 'Apollo Alnac 4G', size: '185/65 R14', image: '/apollo.jpeg' },
  { id: 70, name: 'Apollo Alnac 4G', size: '185/70 R14', image: '/apollo.jpeg' },
  { id: 71, name: 'Apollo Alnac 4G', size: '185/60 R15', image: '/apollo.jpeg' },
  { id: 72, name: 'Apollo Alnac 4G', size: '185/65 R15', image: '/apollo.jpeg' },
  { id: 73, name: 'Apollo Alnac 4G', size: '195/50 R15', image: '/apollo.jpeg' },
  { id: 74, name: 'Apollo Alnac 4G', size: '195/55 R15', image: '/apollo.jpeg' },
  { id: 75, name: 'Apollo Alnac 4G', size: '195/60 R15', image: '/apollo.jpeg' },
  { id: 76, name: 'Apollo Alnac 4G', size: '195/65 R15', image: '/apollo.jpeg' },
  { id: 77, name: 'Apollo Alnac 4G', size: '195/55 R16', image: '/apollo.jpeg' },
  { id: 78, name: 'Apollo Alnac 4G', size: '195/60 R16', image: '/apollo.jpeg' },
  { id: 79, name: 'Apollo Alnac 4G', size: '205/55 R16', image: '/apollo.jpeg' },
  { id: 80, name: 'Apollo Alnac 4G', size: '205/60 R16', image: '/apollo.jpeg' },
  { id: 81, name: 'Apollo Alnac 4G', size: '205/65 R16', image: '/apollo.jpeg' },
  { id: 82, name: 'Apollo Alnac 4G', size: '215/60 R16', image: '/apollo.jpeg' },
  { id: 83, name: 'Apollo Alnac 4G', size: '205/55 R17', image: '/apollo.jpeg' },
  { id: 84, name: 'Apollo Alnac 4G', size: '205/50 R17', image: '/apollo.jpeg' },
  { id: 85, name: 'Apollo Alnac 4G', size: '215/55 R17', image: '/apollo.jpeg' },
  { id: 86, name: 'Apollo Alnac 4G', size: '215/60 R17', image: '/apollo.jpeg' }
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
        {/* <Head>
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
    </Head> */} 
    <Head>
      <title>
        Car & Bike Tyres shop in Gandhinagar | Suman Tyres - Quality & Affordable
      </title>

      <meta
        name="description"
        content="Suman Tyres offers a wide range of premium car and bike tyres in Gandhinagar, Gujarat. Shop trusted brands at affordable prices with expert advice and service."
      />

      <meta
        name="keywords"
        content="car tyres Gandhinagar, bike tyres Gandhinagar, best tyre shop Gujarat, affordable tyres Gandhinagar, Suman Tyres, quality car tyres, bike tyre dealer"
      />

      <meta name="author" content="Suman Tyres" />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content="Car & Bike Tyres shop in Gandhinagar | Suman Tyres" />
      <meta
        property="og:description"
        content="Discover top-quality car and bike tyres at Suman Tyres, Gandhinagar. Trusted brands, affordable prices, and expert service all in one place."
      />
      <meta property="og:image" content="https://sumantyres.vercel.app/_next/image?url=%2Fsumantyresshop.jpg&w=640&q=75" />
      <meta property="og:url" content="https://sumantyres.vercel.app/tyres" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Car & Bike Tyres shop in Gandhinagar | Suman Tyres" />
      <meta
        name="twitter:description"
        content="Wide range of premium tyres from Ceat, Bridgestone, Michelin & Apollo for cars and bikes at Suman Tyres, Gandhinagar. Quality products, great prices, expert support."
      />
      <meta name="twitter:image" content="https://sumantyres.vercel.app/_next/image?url=%2Fsumantyresshop.jpg&w=640&q=75" />

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
