/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { PhoneCall } from 'lucide-react';

const OrderCarBatteryOnline: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-2xl my-10 mx-4 md:mx-auto max-w-7xl border border-slate-800">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-20 pointer-events-none">
        <div className="w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-8">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            ORDER CAR/BIKE BATTERY AT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">WHOLESALE PRICE?</span>
          </h2>
          <h3 className="text-lg md:text-2xl font-medium text-slate-300">
            Best Battery Shop in Gandhinagar-Gujarat
          </h3>
          <p className="text-slate-400 max-w-lg mx-auto md:mx-0 text-base md:text-lg">
            On Suman Tyres, you can also search using our battery shop. Select to have your car battery delivered and fitted at a preferred garage, or simply delivered to your doorstep.
          </p>
          
          <div className="pt-6 flex justify-center md:justify-start">
            <a 
              href="tel:+919426636250" 
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full shadow-lg shadow-blue-600/30 hover:shadow-cyan-500/50 hover:scale-105 active:scale-95 transition-all duration-300 group"
            >
              <PhoneCall className="w-6 h-6 group-hover:animate-pulse" />
              Call Now
            </a>
          </div>
        </div>

        {/* Images */}
        <div className="flex-1 flex justify-center items-center gap-4 relative pt-8 md:pt-0">
          <img 
            src="/5lbe.webp" 
            alt="Exide Xplore Battery" 
            className="w-24 md:w-32 lg:w-40 h-auto rounded-xl shadow-2xl transform -rotate-12 hover:rotate-0 transition-transform duration-500 border-4 border-slate-700/50 bg-white" 
          />
          <img 
            src="/acar.png" 
            alt="Amaron Battery" 
            className="w-28 md:w-36 lg:w-44 h-auto rounded-xl shadow-2xl z-10 scale-110 hover:scale-125 transition-transform duration-500 border-4 border-slate-700/50 bg-white p-2" 
          />
          <img 
            src="/ecar.jpeg" 
            alt="Exide Mileage Battery" 
            className="w-24 md:w-32 lg:w-40 h-auto rounded-xl shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-500 border-4 border-slate-700/50 bg-white p-1" 
          />
        </div>
      </div>
    </div>
  );
};

export default OrderCarBatteryOnline;
