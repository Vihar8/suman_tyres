'use client'
import Head from 'next/head';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
  <title>Suman Tyres | Best Tyre, Oil, Batteries & Wholesale Shop in Gandhinagar, Gujarat</title>
  <meta
    name="description"
    content="Suman Tyres in Gandhinagar, Gujarat offers the best tyres, oils, and batteries. As a trusted wholesaler, we provide the lowest rates and bulk discounts for all vehicle needs. Quality products with reliable service."
  />
  <meta
    name="keywords"
    content="Tyres Gandhinagar, Oil Gujarat, Batteries Gandhinagar, Wholesale Tyres Gujarat, Car Batteries, Bike Batteries, Oil Shop Gandhinagar, Suman Tyres, Best Tyre Shop in Gandhinagar"
  />
  <meta name="author" content="Suman Tyres" />

  {/* Open Graph / Social Media */}
  <meta property="og:title" content="Suman Tyres - Best Tyre, Oil & Battery Shop in Gandhinagar, Gujarat" />
  <meta
    property="og:description"
    content="Discover top-quality tyres, oils, and batteries at Suman Tyres in Gandhinagar. We are a trusted wholesaler offering the best prices, bulk discounts, and reliable service for all vehicles."
  />
  <meta property="og:image" content="/sumantyresshop.jpg" />
  <meta property="og:url" content="https://sumantyres.vercel.app/" />
  <meta property="og:type" content="website" />

  {/* Twitter Card */}
  <meta name="twitter:title" content="Suman Tyres - Top Tyre, Oil & Battery Shop in Gandhinagar" />
  <meta
    name="twitter:description"
    content="Trusted wholesaler for tyres, oils, and batteries in Gandhinagar. Get the best rates, bulk discounts, and quality products at Suman Tyres."
  />
  <meta name="twitter:image" content="/sumantyresshop.jpg" />
  <meta name="twitter:card" content="summary_large_image" />

  {/* Structured Data for Local Business */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "Store",
      "name": "Suman Tyres",
      "description": "Leading tyre, oil, and battery shop in Gandhinagar, Gujarat. Wholesale supplier with the best rates and bulk discounts.",
      "image": "/sumantyresshop.jpg",
      "url": "https://sumantyres.vercel.app/",
      "telephone": "+91-9426636250",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sector 11, Suman Tyres, Suman Tower",
        "addressLocality": "Gandhinagar",
        "addressRegion": "Gujarat",
        "postalCode": "382011",
        "addressCountry": "India"
      },
      "openingHours": [
        "Mo-Sa 09:00-21:00",
        "Su 09:00-16:00"
      ],
      "priceRange": "₹₹",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9426636250",
        "contactType": "Customer Service"
      }
    }
    `}
  </script>

  {/* Favicon */}
  <link rel="icon" href="/favicon.ico" />

  {/* Viewport for responsiveness */}
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</Head>
      <Navbar />
      <main className="flex-1">
        <section className="w-full">
          <Carousel className="w-full p-5 max-w-[500px] mx-auto relative">
            <CarouselContent>
              {["animatedtyre.jpg", "animatedoil.jpg","animatedbattery.jpg","animatedoilfilter.jpg","animatedairfilter.jpg", "animatedbatterycharging.jpg"].map((src, index) => (
                <CarouselItem key={index}>
                  <img
                    src={`/${src}`}
                    width={900}
                    height={500}
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
          <hr />
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <h2 className="bg-rose-600 text-white rounded-xl w-fit text-4xl font-bold p-5 mb-8 mx-auto">
            We Offer
          </h2>

          <div className="container grid grid-cols-2 sm:grid-cols-3 gap-8 mb-8">
            {[
              { src: "/tyre1.jpeg", title: "Tyre", desc: "Durable and versatile tyres for driving." },
              { src: "/oil1.jpeg", title: "Oil", desc: "Specially designed for optimal performance." },
              { src: "/battery1.jpeg", title: "Battery", desc: "Engineered for superior handling and responsiveness for your vehicle." },
              { src: "/oilfilter.jpg", title: "Oil and Air Filter", desc: "it ensure optimal engine performance by trapping contaminants, maintaining clean oil flow and air intake for smooth operation." },
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
          <hr />
          <div className="flex flex-col items-center justify-center py-12 m-4">
            <h2 className="bg-rose-600 text-white rounded-xl text-4xl font-bold p-5 mb-8">
              Our Dealership
            </h2>
            <div className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-8">
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
                { src: "https://tse1.mm.bing.net/th?id=OIP.bL3fSD9-oV7gqGJa3-_I0QHaEK&pid=Api&P=0&h=180", alt: "Bosch" },
              ].map((brand, index) => (
                <div key={index} className="flex items-center justify-center p-4 bg-gray-100 rounded">
                  <img src={brand.src} alt={brand.alt} />
                </div>
              ))}
            </div>
            <div>
              <WhatsAppButton />
            </div>
          </div>
          <hr />
        </section>
      </main>
      <Footer />
    </div>
  );
}
