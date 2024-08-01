import { Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-700">
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-12 px-4 md:px-6">
      <div className="space-y-2">
          <h4 className="text-lg font-bold mb-3">About Us</h4>
          <p>
          Suman Tyres is one of the Oldest and influential hub for low cost Tyres, Battery , Oil, etc in Gandhinagar. We offer all sizes of tyres for your cars and two-wheelers. At Suman Tyres, you can choose from a wide range of tyers from all leading manufacturers. We make your life simple!
          </p>
        </div>
        
        <div className="space-y-2">
          <h4 className="text-lg font-bold mb-3">Follow Us</h4>
          <div className="flex gap-4">
          <a href="https://www.youtube.com/@SumanTyres" className="text-gray-700 hover:text-black transition-colors duration-300">
              <Youtube className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/suman_tyres?igsh=bGl3amx4M2ViNXM5" className="text-gray-700 hover:text-black transition-colors duration-300">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-bold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="font-medium text-lg hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="font-medium text-lg hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="font-medium text-lg hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-bold mb-3">Contact Us</h4>
          <p>Sec 11, Suman Tower, Suman Tyres</p>
          <p>Near Cinemax Gandhinagar, Gujarat</p>
          <p className="mt-4 text-lg font-semibold">Phone No:</p>
          <a href="tel:+919426636250" className="hover:text-red-800 text-lg transition-colors duration-300">
            (+91) 9426636250
          </a>
        </div>
      </div>
      <div className="bg-gray-300 py-4 text-center text-sm">
        Copyright &copy; {new Date().getFullYear()} Suman Tyres. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
