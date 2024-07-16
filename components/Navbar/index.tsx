
import { JSX, SVGProps, useState } from 'react';
import Link from 'next/link';


function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-gray-300 text-black">
        <div className="container flex items-center justify-between py-4 px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <img src="/logo.jpg" width={230} height={230} alt="Tire Shop" />
          </Link>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
              {menuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
          <nav className={`md:flex items-center gap-6 ${menuOpen ? 'block' : 'hidden'}`}>
            <ul className="md:flex items-center gap-6">
              <li>
                <Link href="/" className="font-medium text-xl hover:underline" prefetch={false}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="\tyres" className="font-medium text-xl hover:underline" prefetch={false}>
                  Tyres
                </Link>
              </li>
              <li>
                <Link href="\oil" className="font-medium text-xl hover:underline" prefetch={false}>
                  Engine Oil
                </Link>
              </li>
              <li>
                <Link href="\battery" className="font-medium text-xl hover:underline" prefetch={false}>
                  Battery
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
  )
}
function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>
    );
  }
  
  function CloseIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
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

  export default Navbar;