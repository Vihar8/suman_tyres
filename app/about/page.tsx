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
        <meta property="og:url" content="https://sumantyres.in/about" /> {/* Your page URL */}
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
      "url": "https://sumantyres.in/about",
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
        "Mo-Sa 09:00-20:00",
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
                alt="Suman Tyres Gandhinagar - Store Location View"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Wide Range of Tyres Section */}
        <section className="mt-24 relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl py-12 px-6 sm:px-12 md:py-16">
          {/* Decorative background grid pattern & glowing ambient dots */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Column */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <div className="group relative w-full max-w-[480px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 bg-slate-800">
                <Image
                  src="/stferr.webp"
                  alt="Wide Range of Tyres, Battery and Engine Oil at Suman Tyres"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 flex flex-col order-1 lg:order-2 space-y-6">
              {/* Category Tag */}
              <div className="inline-flex items-center space-x-2 bg-red-500/10 border border-red-500/20 text-red-400 px-3.5 py-1.5 rounded-full text-xs font-black tracking-wider uppercase w-fit self-center lg:self-start">
                <span>OUR EXPERTISE</span>
              </div>

              <div className="text-center lg:text-left space-y-3">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                  Wide Range of <span className="text-red-500 bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">Tyres, Batteries & Oils</span>
                </h2>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Suman Tyres offers an unmatched variety of top-tier automotive essentials. We carry industry-leading brands, ensuring maximum safety, performance, and durability for your vehicles.
                </p>
              </div>

              {/* Quick Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Tyres Card */}
                <div className="bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm p-4 rounded-xl hover:border-red-500/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="text-red-500 font-bold mb-1 text-sm tracking-wide uppercase">Tyres</div>
                  <div className="text-slate-400 text-xs leading-relaxed">Michelin, CEAT, Bridgestone, Apollo, JK & more.</div>
                </div>
                {/* Batteries Card */}
                <div className="bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm p-4 rounded-xl hover:border-red-500/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="text-red-500 font-bold mb-1 text-sm tracking-wide uppercase">Batteries</div>
                  <div className="text-slate-400 text-xs leading-relaxed">High-performance Amaron & Exide power systems.</div>
                </div>
                {/* Lubricants Card */}
                <div className="bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm p-4 rounded-xl hover:border-red-500/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="text-red-500 font-bold mb-1 text-sm tracking-wide uppercase">Engine Oils</div>
                  <div className="text-slate-400 text-xs leading-relaxed">Premium protection with Shell, Castrol & Repsol.</div>
                </div>
              </div>

              {/* Action and Helpline Footer */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start border-t border-slate-800">
                <a
                  href="/tyres"
                  className="w-full sm:w-auto text-center bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-red-600/20 hover:shadow-red-600/30 transition-all duration-300 transform hover:scale-105 text-sm uppercase tracking-wider"
                >
                  Search Tyres
                </a>
                <div className="text-center sm:text-left text-xs sm:text-sm text-slate-400">
                  Don&apos;t find what you need? Call our team:
                  <a href="tel:+919426636250" className="block sm:inline sm:ml-1 font-bold text-red-400 hover:text-red-300 transition-colors">
                    +91 9426636250
                  </a>
                </div>
              </div>
            </div>
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
