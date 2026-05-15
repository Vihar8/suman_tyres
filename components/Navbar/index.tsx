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
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link href="/">
            <img src="/logo.png" alt="logo" className="h-24" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
              <Link
                key={link.name}
                href={link.path}
                className={`flex items-center gap-1.5 text-sm font-medium ${pathname === link.path
                  ? "text-red-600 border-b-2 border-red-600 pb-1"
                  : "text-gray-700 hover:text-red-600"
                  }`}
              >
                {Icon && <Icon className="w-4 h-4" />}
                {link.name}
              </Link>
            )})}

            <a
              href="tel:+919426636250"
              className="bg-red-600 text-white px-4 py-2 rounded-full text-sm"
            >
              Call Now
            </a>
          </nav>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(true)} className="md:hidden p-2 text-2xl">
            ☰
          </button>
        </div>
      </header>

      {/* MOBILE SIDE DRAWER */}
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
            )})}
          </div>

          {/* Bottom CTA */}
          <div className="mt-auto px-6 pb-8">
            <a
              href="tel:+919426636250"
              className="block text-center bg-red-600 text-white py-3 rounded-lg text-md font-medium"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}