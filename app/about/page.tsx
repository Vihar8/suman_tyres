// pages/about.tsx
'use client'
import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Suman Tyres | Best Tyre Dealers in Gandhinagar</title>
        <meta
          name="description"
          content="Learn about Suman Tyres in Gandhinagar, established in 1997. We offer a wide range of tyres including Michelin, Ceat, Bridgestone, and more."
        />
      </Head>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h1 className="text-4xl font-bold text-center text-black animate-bounce">About Us</h1>
          <div className="mx-auto w-28 border-t-2 border-black my-6" />
          <br />
          <p className="text-lg text-gray-700 mb-6">
            Established in 1997, Suman Tyres is a leading tyre dealer located in Sector 11, Gandhinagar, near Cinemax. Over the years, we have built a reputation for offering high-quality tyres and exceptional service to our customers.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            At Suman Tyres, we cater to a wide range of tyre needs, including brands like Michelin, Ceat, Bridgestone, Shell Lubricant, Castrol, Repsol, Apollo, and JK. Whether you&apos;re looking for tyres for your car, bike, or commercial vehicle, we have you covered.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Our commitment to customer satisfaction has helped us grow into a trusted name in Gandhinagar. We believe in providing not only quality products but also expert advice and reliable service.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Visit us at our store near Cinemax in Sector 11, Gandhinagar, and experience the Suman Tyres difference. We are here to assist you with all your tyre-related needs.
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

export default AboutPage;
