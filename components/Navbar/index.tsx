"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Tyres", path: "/tyres" },
    { name: "Engine Oil", path: "/oil" },
    { name: "Battery", path: "/battery" },
    { name: "Gallery", path: "/gallery" },
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
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-sm font-medium ${pathname === link.path
                  ? "text-red-600 border-b-2 border-red-600 pb-1"
                  : "text-gray-700 hover:text-red-600"
                  }`}
              >
                {link.name}
              </Link>
            ))}

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
            <span className="font-bold text-gray-800">Menu</span>
            <button onClick={() => setMenuOpen(false)} className="text-2xl p-2">
              ✕
            </button>
          </div>

          {/* Menu Links */}
          <div className="flex flex-col p-6 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setMenuOpen(false)}
                className={`text-lg font-medium ${pathname === link.path ? "text-red-600" : "text-gray-800"
                  }`}
              >
                {link.name}
              </Link>
            ))}
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