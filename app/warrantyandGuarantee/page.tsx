'use client'
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const companies = [
  {
    src: "/ceatlogo.jpg",
    alt: "Ceat",
    phone: (
      <a href="tel:1800221213" className="hover:text-red-800 text-lg transition-colors duration-300">
        1800-22-1213
      </a>
    ),
  },
  {
    src: "/michelinlogo.jpg",
    alt: "Michelin",
    phone: (
      <a href="tel:18001036424" className="hover:text-red-800 text-lg transition-colors duration-300">
        1800-103-6424
      </a>
    ),
  },
  {
    src: "/bridgestonelogo.jpg",
    alt: "Bridgestone",
    phone: (
      <a href="tel: 18002668055" className="hover:text-red-800 text-lg transition-colors duration-300">
         1800-266-8055
      </a>
    ),
  },
  {
    src: "/apollologo.jpeg",
    alt: "Apollo",
    phone: (
      <a href="tel:18002127021" className="hover:text-red-800 text-lg transition-colors duration-300">
        1800-212-7021
      </a>
    ),
  },
  {
    src: "/jklogo.png",
    alt: "JK Tyre",
    phone: (
      <a href="tel:18002581100" className="hover:text-red-800 text-lg transition-colors duration-300">
        1800-258-1100
      </a>
    ),
  },
  {
    src: "/shelllogo.jpeg",
    alt: "Shell",
    phone: (
      <a href="tel:4446945101" className="hover:text-red-800 text-lg transition-colors duration-300">
        44-46945101
      </a>
    ),
  },
  {
    src: "/castrollogo.jpeg",
    alt: "Castrol",
    phone: (
      <a href="tel:1800223733" className="hover:text-red-800 text-lg transition-colors duration-300">
        1800-223-733
      </a>
    ),
  },
  {
    src: "/servologo.jpg",
    alt: "Servo",
    phone: (
      <a href="tel:18001807788" className="hover:text-red-800 text-lg transition-colors duration-300">
       1800-180-7788
      </a>
    ),
  },
  {
    src: "/amaronlogo.jpg",
    alt: "Amaron",
    phone: (
      <a href="tel:18004254848" className="hover:text-red-800 text-lg transition-colors duration-300">
        1800-425-4848
      </a>
    ),
  },
  {
    src: "/exidelogo.jpeg",
    alt: "Exide",
    phone: (
      <a href="tel:18001035454" className="hover:text-red-800 text-lg transition-colors duration-300">
        1800-103-5454
      </a>
    ),
  },
  {
    src: "/eloficlogo.jpeg",
    alt: "Elofic",
    phone: (
      <a href="tel:18003132025" className="hover:text-red-800 text-lg transition-colors duration-300">
        1800-313-2025
      </a>
    ),
  },
];

export default function WarrantyPage() {
  return (
    <div className="bg-gray-50">
      <Navbar />

      {/* Warranty Section */}
      <section id="warranty" className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 animate-bounce">Warranty and Guarantee</h2>
        <div className="flex justify-center mt-4">
    <hr className="w-52 border-t-2 border-black my-6" />
  </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 container mx-auto">
          {companies.map((brand, index) => (
            <div
              key={index}
              className="border border-gray-300 bg-white p-4 rounded-md shadow-md flex items-center space-x-4 transition hover:shadow-lg"
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                width={60}
                height={60}
                className="rounded-md"
              />
              <div>
                <p className="font-semibold text-lg text-gray-700">{brand.alt}</p>
                <p className="text-sm text-gray-600 flex items-center">
                  <span className="material-icons text-blue-500 mr-2">phone</span>
                  {brand.phone}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div>
        <WhatsAppButton />
      </div>
      <Footer />
    </div>
  );
}
