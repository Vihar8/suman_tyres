import React, { SVGProps } from 'react';

function Footer() {
  return (
    <footer className= " bg-gray-200 text-gray-700">
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-12 px-4 md:px-6">
        <div className="space-y-2">
          <h4 className="text-lg font-bold">Contact Us</h4>
          <p>Sec 11, Suman Tower, Suman Tyres</p>
          <p>Near Cinemax Gandhinagar, Gujarat</p>
          <br />
          <p className='text-l'>Phone No: </p>
          <a href="tel:+919426636250" className="hover:text-red-800 text-l transition-colors duration-300">
            (+91) 9426636250
          </a>
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-bold">Follow Us</h4>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/suman_tyres?igsh=bGl3amx4M2ViNXM5" className="text-gray-700 hover:text-black transition-colors duration-300">
              <InstagramIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-300 py-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Suman Tyres. All rights reserved.
      </div>
    </footer>
  );
}

function InstagramIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default Footer;
