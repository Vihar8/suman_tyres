// pages/about.tsx
'use client'
import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Suman Tyres - Best Tyre, Oil, and Battery Shop in Gandhinagar</title>
        <meta name="description" content="Learn more about Suman Tyres, the best tyre, oil, and battery shop in Gandhinagar, Gujarat, offering high-quality products at affordable prices." />
      </Head>
      <Navbar />
      <hr className="my-4 border-t-2 border-gray-200" />
      <main className="container mx-auto px-4">
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">About Suman Tyres</h2>
          <p className="mb-4">
            Suman Tyres is renowned as the best tyre, oil, and battery shop in Gandhinagar, Gujarat. Established with a commitment to provide high-quality automotive products at affordable prices, Suman Tyres has been serving customers with dedication and trust.
          </p>
          <p className="mb-4">
            Our shop specializes in offering a wide range of tyres suitable for various vehicles, including cars, bikes, auto rickshaws, tractors, and more. We also provide premium engine oils and batteries from top brands like Ceat, Michelin, Apollo, Amaron, and Exide.
          </p>
          <p className="mb-4">
            At Suman Tyres, customer satisfaction is our priority. Whether you are looking for durable tyres, efficient engine oils, or reliable batteries, our knowledgeable staff is here to assist you in finding the right products that meet your vehicle’s requirements.
          </p>
          <p className="mb-4">
            Visit us at our conveniently located store in Gandhinagar or explore our online platform to browse through our extensive collection of automotive products. Experience the difference with Suman Tyres – where quality meets affordability.
          </p>
        </section>
        <hr className="my-4 border-t-2 border-gray-200" />
      </main>
      <Footer />
    </>
  );
};

export default About;
