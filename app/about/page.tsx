'use client'
import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Image from 'next/image';

const AboutPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Head>
  <title>About Suman Tyres | Best Tyre Dealers in Gandhinagar</title>
  <meta
    name="description"
    content="Learn about Suman Tyres in Gandhinagar, established in 1997. We offer a wide range of tyres including Michelin, Ceat, Bridgestone, and more. Trusted tyre dealer near Cinemax, Sector 11."
  />

  {/* Keywords (optional but can be useful) */}
  <meta
    name="keywords"
    content="Tyres Gandhinagar, Car Tyres Gandhinagar, Bike Tyres Gandhinagar, Tyre Dealer Gandhinagar, Suman Tyres, Michelin Gandhinagar, Ceat Gandhinagar, Bridgestone Gandhinagar, auto service Gandhinagar"
  />

  {/* Open Graph / Social Media */}
  <meta property="og:title" content="About Suman Tyres | Best Tyre Dealers in Gandhinagar" />
  <meta
    property="og:description"
    content="Discover Suman Tyres, a trusted tyre dealer in Gandhinagar since 1997. Wide range of tyres, oils, and batteries. Visit us near Cinemax, Sector 11."
  />
  <meta property="og:image" content="/sumanty.webp" /> {/* Replace with your actual image path */}
  <meta property="og:url" content="https://sumantyres.vercel.app/about" /> {/* Your page URL */}
  <meta property="og:type" content="website" />

  {/* Twitter Card */}
  <meta name="twitter:title" content="About Suman Tyres | Best Tyre Dealers in Gandhinagar" />
  <meta
    name="twitter:description"
    content="Learn about Suman Tyres, a reputed tyre dealer in Gandhinagar since 1997. Wide selection of tyres and auto accessories near Cinemax."
  />
  <meta name="twitter:image" content="/sumanty.webp" /> {/* Your image path */}

  {/* Structured Data (JSON-LD) */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "Store",
      "name": "Suman Tyres",
      "description": "Trusted tyre dealer and auto service provider in Gandhinagar, Gujarat since 1997.",
      "image": "/images/about-suman-tyres.jpg",
      "url": "https://sumantyres.vercel.app/about",
      "telephone": "+91-9426636250",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sector 11, Suman Tower",
        "addressLocality": "Gandhinagar",
        "addressRegion": "Gujarat",
        "postalCode": "382011",
        "addressCountry": "IN"
      },
      "openingHours": [
        "Mo-Sa 09:00-21:00",
        "Su 09:00-16:00"
      ],
      "priceRange": "₹₹",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9426636250",
        "contactType": "Customer Service"
      }
    }
    `}
  </script>
</Head>
      <main className="container mx-auto px-4 py-12">
        {/* About Us Section */}
        <section className="flex flex-col md:flex-row items-center md:space-x-8 space-y-8 md:space-y-0">
          {/* Heading Section */}
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl font-extrabold text-gray-900 animate-bounce mb-6">
              About <span className="text-red-500">Us</span>
            </h1>
            <div className="mx-auto md:mx-0 w-16 h-1 bg-red-500 mb-8" />
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Established in 1997, Suman Tyres is a leading tyre dealer located in Sector 11, Gandhinagar, near Cinemax. Over the years, we have built a reputation for offering high-quality tyres and exceptional service to our customers.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              At Suman Tyres, we cater to a wide range of tyre needs, including brands like Michelin, Ceat, Bridgestone, Shell Lubricant, Castrol, Repsol, Apollo, and JK. Whether you&apos;re looking for tyres for your car, bike, or commercial vehicle, we have you covered.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Our commitment to customer satisfaction has helped us grow into a trusted name in Gandhinagar. We believe in providing not only quality products but also expert advice and reliable service.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Visit us at our store near Cinemax in Sector 11, Gandhinagar, and experience the Suman Tyres difference. We are here to assist you with all your tyre-related needs.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-[350px] h-[350px] overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/sumanty.webp"
                width={350}
                height={350}
                alt="Company Location"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Wide Range of Tyres Section */}
        <section className="mt-16 bg-gray-50 rounded-lg shadow-md p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800">
              Wide Range of Tyres
            </h2>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Suman Tyres offers a great variety of tyres, oils, and batteries for all two-wheelers, three-wheelers, cars, etc. We display products from brands like <strong>Ceat, Michelin, Bridgestone, JK Tyres, Apollo, Amaron, Exide, Shell, Castrol, Repsol</strong>, and more.
            </p>
            <p className="mt-6 text-gray-700">
              If you don’t find the tyres, oils, or batteries you need in our list, kindly contact us at 
              <a href="tel:+919426636250" className="text-blue-600 hover:underline ml-1">
                (+91) 9426636250
              </a>. We’ll be happy to assist you!
            </p>
          </div>
          <div className="flex justify-center items-center mt-8">
            <Image
              src="/stferr.webp"
              alt="Wide Range of Tyres"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="text-center mt-10">
            <a 
              href="/tyres" 
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105"
            >
              Search Tyres
            </a>
          </div>
        </section>
      </main>

      {/* WhatsApp Button */}
      <WhatsAppButton />

      <Footer />
    </>
  );
};

export default AboutPage;
