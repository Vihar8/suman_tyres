import { useState } from 'react';
import Link from 'next/link';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-300 text-black shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <img
            src="/logo.jpg"
            width={menuOpen ? 180 : 230}  // Adjust logo size on menu open
            height={menuOpen ? 180 : 230}
            alt="Suman Tyres Logo"
            className="transition-all duration-300"
          />
        </Link>
        <div className="md:hidden z-50">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
            aria-label="Toggle menu"
          >
            {menuOpen ? <CloseIcon className="w-8 h-8 text-black" /> : <MenuIcon className="w-8 h-8 text-black" />}
          </button>
        </div>
        <nav
          className={`fixed inset-0 bg-gray-800 bg-opacity-90 z-40 flex flex-col items-center justify-center space-y-8 transition-transform transform ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          } md:static md:bg-transparent md:flex-row md:space-y-0 md:translate-x-0 md:gap-6`}
        >
          <ul className="text-center text-white md:flex md:items-center gap-3 md:text-black">
            <li>
              <Link href="/" className="text-2xl md:text-lg font-medium hover:underline" prefetch={false}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/tyres" className="text-2xl md:text-lg font-medium hover:underline" prefetch={false}>
                Tyres
              </Link>
            </li>
            <li>
              <Link href="/oil" className="text-2xl md:text-lg font-medium hover:underline" prefetch={false}>
                Engine Oil
              </Link>
            </li>
            <li>
              <Link href="/battery" className="text-2xl md:text-lg font-medium hover:underline" prefetch={false}>
                Battery
              </Link>
            </li>
          </ul>
        </nav>
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </div>
    </header>
  );
}

function MenuIcon(props) {
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
      aria-label="Open menu"
    >
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon(props) {
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
      aria-label="Close menu"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default Navbar;
