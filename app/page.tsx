'use client'
import Head from 'next/head';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Suman Tyres | Best Tyre, Oil, and Battery Shop in Gandhinagar</title>
        <meta name="description" content="Suman Tyres is the best shop in Gandhinagar, Gujarat for tyres, oil, and batteries. We are a wholesaler providing the cheapest rates to our customers." />
        <meta name="keywords" content="tyres, oil, batteries, Gandhinagar, Gujarat, Suman Tyres, wholesaler" />
        <meta name="author" content="Suman Tyres" />
        <meta property="og:title" content="Suman Tyres | Best Tyre, Oil, and Battery Shop in Gandhinagar" />
        <meta property="og:description" content="Suman Tyres is the best shop in Gandhinagar, Gujarat for tyres, oil, and batteries. We are a wholesaler providing the cheapest rates to our customers. best tyre shop in gandhinagar" />
        <meta property="og:image" content="/sumantyresshop.jpg" />
        <meta property="og:url" content="https://sumantyres.vercel.app/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex-1">
        <section className="w-full">
          <Carousel className="w-full max-w-[450px] mx-auto relative">
            <CarouselContent>
              {["sumantyresshop.jpg", "tyres.jpg", "battery.jpg", "oilfilter.jpg", "engineoil.jpg", "batterycharging.jpg"].map((src, index) => (
                <CarouselItem key={index}>
                  <img
                    src={`/${src}`}
                    width={1000}
                    height={600}
                    alt="Carousel Image"
                    className="aspect-[1/1] object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-400 text-gray-900 p-2 rounded-full shadow-lg transition ease-in-out duration-200 hover:bg-white/100 hover:scale-105">
              <span className="sr-only">Previous</span>
              <svg
                className="w-6 h-6 md:w-8 md:h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </CarouselPrevious>
            <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-400 text-gray-900 p-2 rounded-full shadow-lg transition ease-in-out duration-200 hover:bg-white/100 hover:scale-105">
              <span className="sr-only">Next</span>
              <svg
                className="w-6 h-6 md:w-8 md:h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </CarouselNext>
          </Carousel>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-6">
            {[
              { src: "/tyre1.jpeg", title: "Tyre", desc: "Durable and versatile tyres for driving." },
              { src: "/oil1.jpeg", title: "Oil", desc: "Specially designed for optimal performance." },
              { src: "/battery1.jpeg", title: "Battery", desc: "Engineered for superior handling and responsiveness for your vehicle." },
            ].map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <img
                    src={item.src}
                    width={400}
                    height={200}
                    alt={item.title}
                    className="aspect-video object-cover rounded-t-md"
                  />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex flex-col items-center justify-center py-12">
            <h2 className="bg-rose-600 text-white rounded-xl text-4xl font-bold p-5 mb-8">
              Our Dealership
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
              {[
                { src: "/ceatlogo.jpg", alt: "Ceat" },
                { src: "/michelinlogo.jpg", alt: "Michelin" },
                { src: "/bridgestonelogo.jpg", alt: "Bridgestone" },
                { src: "/apollologo.jpeg", alt: "Apollo" },
                { src: "/jklogo.png", alt: "JK" },
                { src: "/shelllogo.jpeg", alt: "Shell" },
                { src: "/castrollogo.jpeg", alt: "Castrol" },
                { src: "/repsollogo.jpg", alt: "Repsol" },
                { src: "/servologo.jpg", alt: "Servo" },
                { src: "/amaronlogo.jpg", alt: "Amaron" },
                { src: "/exidelogo.jpeg", alt: "Exide" },
                { src: "/eloficlogo.jpeg", alt: "Elofic" },
              ].map((brand, index) => (
                <div key={index} className="flex items-center justify-center p-4 bg-gray-100 rounded">
                  <img src={brand.src} alt={brand.alt} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
