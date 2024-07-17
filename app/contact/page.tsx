'use client'
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Head from 'next/head';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Footer from "@/components/Footer";

export default function Component() {
  return (
    <>
      <Head>
        <title>Suman Tyres</title>
        <meta name="description" content="Get in touch with our team for any inquiries or support. Contact us via address, phone, or email." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://sumantyres.vercel.app/" />
      </Head>
      <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
        <Navbar />
        <Card className="mx-auto max-w-3xl mt-10 px-4 md:px-8 py-8 space-y-8 bg-white rounded-lg shadow-lg">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-black animate-bounce">Contact Us</h1>
            <p className="mt-4 text-lg font-semibold text-red-700">Get in touch with our team for any inquiries or support.</p>
            <div className="mx-auto w-24 border-t-2 border-black my-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            <div className="space-y-6 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-red-800 text-2xl" />
                <div>
                  <h2 className="text-xl font-semibold text-black">Address</h2>
                  <p className="text-gray-900">Sec 11, Suman Tower, Suman Tyres</p>
          <p className="text-gray-900">Near Cinemax Gandhinagar, Gujarat</p>
          
                </div>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center space-x-4">
                  <FaPhoneAlt className="text-red-800 text-2xl" />
                  <div>
                  <h2 className="text-xl font-semibold text-black">Phone No</h2>
                    <p className="text-gray-900">
                    <a href="tel:+919426636250" className="hover:text-red-800 text-lg transition-colors duration-300">
            (+91) 9426636250
          </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-red-800 text-2xl" />
                  <div>
                    <h2 className="text-xl font-semibold text-black">Email</h2>
                    <p className="text-gray-900">
                      <a href="mailto:docusync07@gmail.com" className="hover:text-red-800 text-lg transition-colors duration-300">
                        sumantyres@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-full overflow-hidden rounded-lg shadow-lg group">
              <img
                src="/sumantyresshop.jpg"
                width="400"
                height="400"
                alt="Company Location"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
          </div>
        
        </Card>
        <br />
        <br />
        <Footer />
      </div>
    </>
  );
}
