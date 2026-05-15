// pages/tyre-landing.tsx
'use client';
import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SearchIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';
import OrderCarTyreOnline from '@/components/OrderCarTyreOnline';
import BrandMarquee from '@/components/BrandMarquee';

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
  { id: 86, name: 'Apollo Alnac 4G', size: '215/60 R17', image: '/apollo.jpeg' },
  { id: 87, name: 'Apollo Amazer 4G Life', size: '165/70 R14', image: '/apollo.jpeg' },
  { id: 88, name: 'Apollo Amazer 4G Life', size: '175/65 R14', image: '/apollo.jpeg' },
  { id: 89, name: 'Apollo Amazer 4G Life', size: '185/65 R14', image: '/apollo.jpeg' },
  { id: 90, name: 'Apollo Apterra AT2', size: '235/65 R17', image: '/apollo.jpeg' },
  { id: 91, name: 'Apollo Apterra AT2', size: '265/65 R17', image: '/apollo.jpeg' },
  { id: 92, name: 'Ceat SecuraDrive', size: '185/65 R15', image: '/ceatcar.jpeg' },
  { id: 93, name: 'Ceat SecuraDrive', size: '195/55 R16', image: '/ceatcar.jpeg' },
  { id: 94, name: 'Ceat SecuraDrive', size: '205/55 R16', image: '/ceatcar.jpeg' },
  { id: 95, name: 'Ceat Czar A/T', size: '235/65 R17', image: '/ceatotr.jpeg' },
  { id: 96, name: 'Ceat Czar A/T', size: '265/65 R17', image: '/ceatotr.jpeg' },
  { id: 97, name: 'Bridgestone Ecopia EP150', size: '175/65 R14', image: '/sturdo2.png' },
  { id: 98, name: 'Bridgestone Ecopia EP150', size: '185/65 R15', image: '/sturdo2.png' },
  { id: 99, name: 'Bridgestone Ecopia EP150', size: '195/65 R15', image: '/sturdo2.png' },
  { id: 100, name: 'Bridgestone B290', size: '155/70 R13', image: '/bridgestonesturdo.png' },
  { id: 101, name: 'Bridgestone B290', size: '165/70 R14', image: '/bridgestonesturdo.png' },
  { id: 102, name: 'Bridgestone Dueler A/T', size: '235/65 R17', image: '/sturdo1.png' },
  { id: 103, name: 'Bridgestone Dueler A/T', size: '265/65 R17', image: '/sturdo1.png' },
  { id: 104, name: 'Apollo Apterra HT2', size: '235/65 R17', image: '/apollo.jpeg' },
  { id: 105, name: 'Apollo Apterra HT2', size: '245/70 R16', image: '/apollo.jpeg' },
  { id: 106, name: 'Apollo Altrust', size: '195/80 R15', image: '/apollo.jpeg' },
  { id: 107, name: 'Apollo EnduMaxx', size: '155/80 R13', image: '/apollo.jpeg' },
  { id: 108, name: 'Apollo Aspire 4G', size: '225/55 R16', image: '/apollo.jpeg' },
  { id: 109, name: 'Apollo Amazer XL', size: '145/80 R12', image: '/apollo.jpeg' },
  { id: 110, name: 'Ceat Zoom XL', size: '140/70-17', image: '/ceatbike.jpg' },
  { id: 111, name: 'Ceat Zoom XL', size: '130/70-17', image: '/ceatbike.jpg' },
  { id: 112, name: 'Ceat Gripp XL', size: '110/90-19', image: '/ceatbike.jpg' },
  { id: 113, name: 'Ceat Gripp XL', size: '120/80-18', image: '/ceatbike.jpg' },
  { id: 114, name: 'Ceat Czar H/T', size: '245/70 R16', image: '/ceatotr.jpeg' },
  { id: 115, name: 'Ceat Czar H/T', size: '235/70 R16', image: '/ceatotr.jpeg' },
  { id: 116, name: 'Ceat FuelSmarrt', size: '165/80 R14', image: '/ceatcar.jpeg' },
  { id: 117, name: 'Ceat FuelSmarrt', size: '185/70 R14', image: '/ceatcar.jpeg' },
  { id: 118, name: 'Bridgestone Turanza T005', size: '195/55 R16', image: '/bridgestonesturdo.png' },
  { id: 119, name: 'Bridgestone Turanza T005', size: '205/55 R16', image: '/bridgestonesturdo.png' },
  { id: 120, name: 'Bridgestone Potenza GIII', size: '195/60 R15', image: '/sturdo2.png' },
  { id: 121, name: 'Bridgestone Potenza GIII', size: '205/65 R15', image: '/sturdo2.png' },
  { id: 122, name: 'Bridgestone Dueler H/T 684', size: '245/70 R16', image: '/sturdo1.png' },
  { id: 123, name: 'Bridgestone Dueler H/T 684', size: '265/65 R17', image: '/sturdo1.png' },
  { id: 124, name: 'Bridgestone Ecopia EP850', size: '215/65 R16', image: '/sturdo1.png' },
  { id: 125, name: 'Bridgestone B390', size: '205/65 R15', image: '/bridgestonesturdo.png' }
];



const TyreLanding: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredTyres, setFilteredTyres] = useState(tyreProducts);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  // Function to handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = tyreProducts.filter(product =>
      product.name.toLowerCase().includes(value) || product.size.toLowerCase().includes(value)
    );
    setFilteredTyres(filtered);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTyres = filteredTyres.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredTyres.length / itemsPerPage);

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
          Showing <span className="text-gray-900 font-bold">{indexOfFirstItem + 1}</span> to <span className="text-gray-900 font-bold">{Math.min(indexOfLastItem, filteredTyres.length)}</span> of <span className="text-gray-900 font-bold">{filteredTyres.length}</span> products
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
        <BrandMarquee 
          title="Our Partnered Tyre Brands" 
          logos={[
            { src: "/ceatlogo.jpg", alt: "Ceat" },
            { src: "/michelinlogo.jpg", alt: "Michelin" },
            { src: "/bridgestonelogo.jpg", alt: "Bridgestone" },
            { src: "/apollologo.jpeg", alt: "Apollo" },
            { src: "/jklogo.png", alt: "JK Tyre" },
          ]} 
        />
      </div>
      <hr className="my-4 border-t-2 border-gray-200" />
      <main className="container mx-auto px-4">
        <section id="product-grid" className="mb-8">
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

          {renderPagination()}

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {currentTyres.map(product => (
              <div 
                key={product.id} 
                className="group bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out flex flex-col relative overflow-hidden"
              >
                {/* Subtle gradient overlay at top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-rose-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="bg-gray-50 rounded-xl mb-4 p-3 flex items-center justify-center h-48 overflow-hidden relative">
                  {/* Tyre Company Logo Badge */}
                  <div className="absolute top-3 left-3 bg-white shadow-sm z-10 flex items-center justify-center border border-gray-200 rounded-md p-1.5 h-8 w-[4.5rem] overflow-hidden">
                    <img 
                      src={
                        product.name.toLowerCase().includes('ceat') ? '/ceatlogo.jpg' :
                        product.name.toLowerCase().includes('michelin') ? '/michelinlogo.jpg' :
                        product.name.toLowerCase().includes('bridgestone') ? '/bridgestonelogo.jpg' :
                        product.name.toLowerCase().includes('apollo') ? '/apollologo.jpeg' :
                        product.name.toLowerCase().includes('jk') ? '/jklogo.png' : ''
                      }
                      alt={product.name.split(' ')[0]} 
                      className="w-full h-full object-contain mix-blend-multiply"
                    />
                  </div>
                  
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg leading-tight mb-2 line-clamp-2">{product.name}</h3>
                    <p className="text-xs font-semibold text-red-600 bg-red-50 border border-red-100 inline-block px-2.5 py-1 rounded-md mb-4 uppercase tracking-wider">{product.size}</p>
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

          
          {renderPagination()}

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
