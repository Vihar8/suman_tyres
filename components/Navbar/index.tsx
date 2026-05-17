/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaOilCan } from "react-icons/fa6";
import { Home, ImageIcon } from "lucide-react";

const TyreIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="5"></circle>
    <circle cx="12" cy="12" r="2"></circle>
    <line x1="12" y1="7" x2="12" y2="2"></line>
    <line x1="12" y1="22" x2="12" y2="17"></line>
    <line x1="22" y1="12" x2="17" y2="12"></line>
    <line x1="7" y1="12" x2="2" y2="12"></line>
    <line x1="18.36" y1="5.64" x2="15.54" y2="8.46"></line>
    <line x1="8.46" y1="15.54" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="18.36" x2="15.54" y2="15.54"></line>
    <line x1="8.46" y1="8.46" x2="5.64" y2="5.64"></line>
  </svg>
);

const BatteryIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="8" width="18" height="12" rx="2"></rect>
    <rect x="6" y="5" width="3" height="3" rx="0.5"></rect>
    <rect x="15" y="5" width="3" height="3" rx="0.5"></rect>
    <path d="M12.5 9L9.5 15H12L11.5 19L15.5 13H13L12.5 9Z" fill="currentColor" stroke="none"></path>
  </svg>
);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "Tyres", path: "/tyres", icon: TyreIcon },
    { name: "Engine Oil", path: "/oil", icon: FaOilCan },
    { name: "Battery", path: "/battery", icon: BatteryIcon },
    { name: "Gallery", path: "/gallery", icon: ImageIcon },
  ];

  return (
    <>
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 md:py-3">
          {/* Logo & Contact Info Group */}
          <div className="flex items-center gap-4 lg:gap-5 xl:gap-8">
            <Link href="/" className="shrink-0">
              <img src="/logo.png" alt="logo" className="h-20 md:h-24 lg:h-24 xl:h-28 object-contain" />
            </Link>

            {/* Desktop & Tablet Header Info Widgets (Visible from md screen up) */}
            <div className="hidden md:flex items-center gap-4 lg:gap-5 xl:gap-6 border-l border-gray-150 pl-4 lg:pl-5 xl:pl-8">
              {/* Phone Widget */}
              <a href="tel:+919426636250" className="flex items-center gap-2.5 xl:gap-3.5 group shrink-0">
                <svg className="w-5 h-8 xl:w-6 xl:h-9 text-red-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <rect x="5" y="2" width="14" height="20" rx="2.5" ry="2.5" />
                  <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" strokeLinecap="round" />
                  <line x1="10" y1="4" x2="14" y2="4" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <div className="text-left">
                  <span className="block text-[10px] xl:text-[11px] font-bold text-[#0f3661] uppercase tracking-wider leading-none mb-1">CALL US TODAY!</span>
                  <span className="block text-lg xl:text-xl font-black text-slate-900 tracking-tight leading-none group-hover:text-red-600 transition-colors">9426636250</span>
                </div>
              </a>

              {/* Hours Widget */}
              <div className="flex items-center gap-2 xl:gap-3 bg-red-50/50 px-3.5 py-2.5 xl:px-5 xl:py-3 rounded-[16px] xl:rounded-[20px] shrink-0">
                <svg className="w-5 h-5 xl:w-6 xl:h-6 text-red-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] xl:text-[10px] font-black text-red-700 uppercase tracking-wider leading-none mb-1 xl:mb-1.5">WE ARE OPEN!</span>
                  <span className="text-xs xl:text-sm font-extrabold text-slate-900 tracking-tight leading-tight mb-0.5">Mon–Sat 9:30 – 7:00</span>
                  <span className="text-[10px] xl:text-[11px] font-bold text-gray-500 tracking-tight leading-none">Sunday 9:00 – 4:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Menu (Visible from lg screen up) */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`flex items-center gap-1 xl:gap-1.5 text-xs xl:text-sm font-medium ${pathname === link.path
                    ? "text-red-600 border-b-2 border-red-600 pb-1"
                    : "text-gray-700 hover:text-red-600"
                    }`}
                >
                  {Icon && <Icon className="w-3.5 h-3.5 xl:w-4 xl:h-4" />}
                  {link.name}
                </Link>
              )
            })}

            <a
              href="tel:+919426636250"
              className="bg-red-600 text-white px-3 py-1.5 xl:px-4 xl:py-2 rounded-full text-xs xl:text-sm font-semibold hover:bg-red-700 transition-colors"
            >
              Call Now
            </a>
          </nav>

          {/* Hamburger (Visible on mobile and tablet, hidden on desktop lg and above) */}
          <button onClick={() => setMenuOpen(true)} className="lg:hidden p-3 text-3xl text-gray-700 hover:text-red-600 transition-colors">
            ☰
          </button>
        </div>
      </header>

      {/* MOBILE & TABLET SIDE DRAWER */}
      {/* Dark Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Drawer Container */}
      <div
        className={`fixed top-0 right-0 z-[60] h-full w-[70%] max-w-[300px] bg-white shadow-2xl transition-transform duration-300 ease-in-out transform ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Top Bar inside Drawer */}
          <div className="flex items-center justify-between px-4 py-9 border-b">
            <span className="font-bold text-gray-900">Menu</span>
            <button onClick={() => setMenuOpen(false)} className="text-2xl p-2">
              ✕
            </button>
          </div>

          {/* Menu Links */}
          <div className="flex flex-col p-6 space-y-6">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 text-lg font-medium ${pathname === link.path ? "text-red-600" : "text-gray-800"
                    }`}
                >
                  {Icon && <Icon className="w-5 h-5" />}
                  {link.name}
                </Link>
              )
            })}
          </div>

          {/* Mobile Info Widgets */}
          <div className="mt-auto px-6 py-6 border-t border-gray-150 bg-gray-50/80 space-y-4">
            {/* Phone Widget */}
            <a href="tel:+919426636250" className="flex items-center gap-3.5 group shrink-0">
              <svg className="w-6 h-9 text-red-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <rect x="5" y="2" width="14" height="20" rx="2.5" ry="2.5" />
                <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" strokeLinecap="round" />
                <line x1="10" y1="4" x2="14" y2="4" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <div className="text-left">
                <span className="block text-[11px] font-bold text-[#0f3661] uppercase tracking-wider leading-none mb-1">CALL US TODAY!</span>
                <span className="block text-xl font-black text-slate-900 tracking-tight leading-none group-hover:text-red-600 transition-colors">9426636250</span>
              </div>
            </a>

            {/* Hours Widget */}
            <div className="flex items-center gap-3 bg-red-50/50 px-5 py-3 rounded-[20px]">
              <svg className="w-6 h-6 text-red-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-black text-red-700 uppercase tracking-wider leading-none mb-1.5">WE ARE OPEN!</span>
                <span className="text-sm font-extrabold text-slate-900 tracking-tight leading-tight mb-0.5">Mon–Sat 9:30 – 7:00</span>
                <span className="text-[11px] font-bold text-gray-500 tracking-tight leading-none">Sunday 9:00 – 4:00</span>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="px-6 pb-8 bg-gray-50/80">
            <a
              href="tel:+919426636250"
              className="block text-center bg-red-600 text-white py-3 rounded-lg text-md font-medium hover:bg-red-700 transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}