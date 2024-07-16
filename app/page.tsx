'use client'
import { JSX, SVGProps, useState } from 'react';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function Component() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-dvh">
      <header className="bg-gray-300 text-black-foreground">
        <div className="container flex items-center justify-between py-4 px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <img
              src="/logo.jpg"
              width={250}
              height={250}
              alt="Tire Shop"
            />
          </Link>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
              {menuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
          <nav className={`md:flex items-center gap-6 ${menuOpen ? 'block' : 'hidden'}`}>
            <ul className="md:flex items-center gap-6">
            <li>
                <Link href="#" className="font-medium hover:underline" prefetch={false}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="font-medium hover:underline" prefetch={false}>
                  Tyres
                </Link>
              </li>
              <li>
                <Link href="#" className="font-medium hover:underline" prefetch={false}>
                  Engine Oil
                </Link>
              </li>
              <li>
                <Link href="#" className="font-medium hover:underline" prefetch={false}>
                  Battery
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full">
          <Carousel className="w-full max-w-[450px] mx-auto relative">
            <CarouselContent>
            <CarouselItem>
                <img
                  src="/sumantyresshop.jpg"
                  width={1000}
                  height={600}
                  alt="Tire Shop"
                  className="aspect-[1/1] object-cover"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="/tyres.jpg"
                  width={1000}
                  height={600}
                  alt="Tire Shop"
                  className="aspect-[1/1] object-cover"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="/battery.jpg"
                  width={1200}
                  height={600}
                  alt="Tire Services"
                  className="aspect-[1/1] object-cover"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="/oilfilter.jpg"
                  width={1200}
                  height={600}
                  alt="Tire Selection"
                  className="aspect-[1/1] object-cover"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="/engineoil.jpg"
                  width={1200}
                  height={600}
                  alt="Tire Selection"
                  className="aspect-[1/1] object-cover"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="/batterycharging.jpg"
                  width={1200}
                  height={600}
                  alt="Tire Selection"
                  className="aspect-[1/1] object-cover"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full md:bg-transparent md:text-gray-700" />
            <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full md:bg-transparent md:text-gray-700" />
          </Carousel>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-6">
            <Card>
              <CardHeader>
                <img
                  src="/tyre1.jpeg"
                  width={400}
                  height={200}
                  alt="Tire 1"
                  className="aspect-video object-cover rounded-t-md"
                />
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-bold">Tyre</h3>
                <p className="text-muted-foreground">Durable and versatile tyres for year-round driving.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <img
                  src="/oil1.jpeg"
                  width={400}
                  height={200}
                  alt="Tire 2"
                  className="aspect-video object-cover rounded-t-md"
                />
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-bold">Oil</h3>
                <p className="text-muted-foreground">Specially designed for optimal performance in snow and ice.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <img
                  src="/battery1.jpeg"
                  width={400}
                  height={200}
                  alt="Tire 3"
                  className="aspect-video object-cover rounded-t-md"
                />
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-bold">Battery</h3>
                <p className="text-muted-foreground">Engineered for superior handling and responsiveness.</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <footer className="bg-muted text-muted-foreground">
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
              <Link href="https://www.instagram.com/suman_tyres?igsh=bGl3amx4M2ViNXM5" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                <InstagramIcon className="size-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-muted-foreground/10 py-4 text-center text-sm">
          &copy; {new Date().getFullYear()} Suman Tyres. All rights reserved.
        </div>
      </footer>
    </div>
  );
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
