'use client'
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { FaGoogle, FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { User } from 'lucide-react';
import FAQSection from '@/components/FAQSection';
import YouTubeCarousel from '@/components/YouTubeCarousel';
import Head from 'next/head';

const ReviewerImage = ({ src, name }: { src: string; name: string }) => {
  const [error, setError] = useState(false);

  if (!src || error) {
    return (
      <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center mr-3 text-gray-400 shrink-0">
        <User className="w-6 h-6" />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={`${name} Profile`}
      width={40}
      height={40}
      unoptimized
      onError={() => setError(true)}
      className="rounded-full object-cover mr-3 w-10 h-10 shrink-0"
    />
  );
};

const brands = [
  { src: "/ceatlogo.jpg", alt: "CEAT", category: "tyres" },
  { src: "/michelinlogo.jpg", alt: "Michelin", category: "tyres" },
  { src: "/bridgestonelogo.jpg", alt: "Bridgestone", category: "tyres" },
  { src: "/apollologo.jpeg", alt: "Apollo", category: "tyres" },
  { src: "/jklogo.png", alt: "JK Tyre", category: "tyres" },
  { src: "/shelllogo.jpeg", alt: "Shell", category: "oils" },
  { src: "/castrollogo.jpeg", alt: "Castrol", category: "oils" },
  { src: "/repsollogo.jpg", alt: "Repsol", category: "oils" },
  { src: "/servologo.jpg", alt: "Servo", category: "oils" },
  { src: "/amaronlogo.jpg", alt: "Amaron", category: "batteries" },
  { src: "/exidelogo.jpeg", alt: "Exide", category: "batteries" },
  { src: "/eloficlogo.jpeg", alt: "Elofic", category: "batteries" },
  { src: "https://tse1.mm.bing.net/th?id=OIP.bL3fSD9-oV7gqGJa3-_I0QHaEK&pid=Api&P=0&h=180", alt: "Bosch", category: "batteries" },
];

export default function Component() {
  const [activeTab, setActiveTab] = useState("all");

  const reviews = [
    {
      name: "Daksh Panchal",
      imgUrl: "https://lh3.googleusercontent.com/a-/ALV-UjUU1Ushz8lvIRZVI0R5PDvPkp807wCwL6NO9Z5hb5eiB7rWkw=w65-h65-p-rp-mo-ba2-br100",
      date: "a week ago",
      text: "Amazing place to buy tyre. They are very corporative in helping you to buy the perfect tyres within your budget. The rate they offer is also the best all over in Gandhinagar as compared to all other dealers.",
    },
    {
      name: "Divy Patel",
      imgUrl: "https://lh3.googleusercontent.com/a-/ALV-UjVe9NAVpibqoNlShIj_vHpoQZgP4QMHvHVFULEl6puWUfOXMR6L=w65-h65-p-rp-mo-ba3-br100",
      date: "4 month ago",
      text: "I recently visited Suman Tyres, and I’m very satisfied with the overall experience. The staff was knowledgeable, polite, and quick to assist me in choosing the right set of tyres for my vehicle. They offered a good variety of brands and explained the pros and cons of each based on my driving needs and budget.",
    },
    {
      name: "Adonis",
      imgUrl: "https://lh3.googleusercontent.com/a-/ALV-UjUnyRNrMkQ6t_qVbRZdRE6zl5dr-gN6iFZrzYZeJx9BqAKDHfkQ=w65-h65-p-rp-mo-ba4-br100",
      date: "2023-05-22",
      text: "Got really good experience here. The seller was humble and cooperative. He made me understand about tyres and helped me in selection.",
    },
    {
      name: "Dr Shah",
      imgUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-vector%2Fmodern-dr-logo-icon-vector_364014244.htm&psig=AOvVaw19vpGcQhDtxiyNefcvRJkb&ust=1760801931990000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMiopMDIq5ADFQAAAAAdAAAAABAE",
      date: "a week ago",
      text: "I recently visited Suman Tyres in Sector 11, Gandhinagar for a car battery replacement and charging service. The staff was very professional and helped me choose the right Amaron battery for my car. They also performed a battery health check and ensured proper installation.Fast, reliable, and trustworthy service! If you’re looking for a battery store in Gandhinagar with replacement, charging, or maintenance services, I highly recommend Suman Tyres.",
    },
    {
      name: "Niranjan Korde",
      imgUrl: "https://lh3.googleusercontent.com/a-/ALV-UjUptM0WHSx5OL4sx_va5UuAybiqz0-07TzLp8mmavT0Y7zLbxRn=w65-h65-p-rp-mo-ba6-br100",
      date: "2023-04-10",
      text: "Fairly maintained outlet. Reasonable price and good service",
    },
  ];

  // Only show the carousel if there are reviews
  if (reviews.length === 0) return null;

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden w-full max-w-[100vw]">
      {/* Structured Data for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TireShop",
            "name": "Suman Tyres",
            "description": "Leading tyre, oil, and battery shop serving Gandhinagar, Ahmedabad, Vavol, and Dhodakuva.",
            "image": "https://sumantyres.in/_next/image?url=%2Fsumantyresshop.jpg&w=640&q=75",
            "url": "https://sumantyres.in/",
            "telephone": "+91-9426636250",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Sector 11, Suman Tyres, Suman Tower",
              "addressLocality": "Gandhinagar",
              "addressRegion": "Gujarat",
              "postalCode": "382011",
              "addressCountry": "India"
            },
            "areaServed": ["Gandhinagar", "Ahmedabad", "Vavol", "Dhodakuva"],
            "openingHours": [
              "Mo-Sa 09:00-20:00",
              "Su 09:00-16:00"
            ],
            "priceRange": "₹₹",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9426636250",
              "contactType": "Customer Service"
            }
          })
        }}
      />
      <Head>
        <link rel="canonical" href="https://sumantyres.in/" />
      </Head>
      <Navbar />
      <main className="flex-1">
        <section className="w-full">
          <h1 className='sr-only'>Suman Tyres Gandhinagar | Suman Battery Services</h1>
          <Carousel className="w-full p-5 max-w-[500px] mx-auto relative">
            <CarouselContent>
              {["sumantyregandhinagar.jpg", "animatedtyre.jpg", "animatedoil.jpg", "animatedbattery.jpg", "animatedoilfilter.jpg", "animatedairfilter.jpg", "animatedbatterycharging.jpg"].map((src, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={`/${src}`}
                    width={900}
                    height={500}
                    alt="Car tyres, engine oil and battery services at Suman Tyres Gandhinagar"
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
        <section className="w-full py-16 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Premium Header */}
            <div className="text-center mb-12">
              <span className="text-rose-600 font-semibold tracking-wider text-sm uppercase">Our Trusted Partners</span>
              <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-4 tracking-tight">
                Authorized Dealerships & Brands
              </h2>
              <div className="w-24 h-1.5 bg-rose-600 mx-auto rounded-full"></div>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
                We partner with leading global manufacturers to provide 100% genuine tyres, high-performance engine oils, and long-lasting batteries.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {[
                { id: "all", label: "All Brands" },
                { id: "tyres", label: "Tyres" },
                { id: "oils", label: "Engine Oils & Filters" },
                { id: "batteries", label: "Batteries" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 transform active:scale-95 ${activeTab === tab.id
                    ? "bg-rose-600 text-white shadow-md shadow-rose-600/20"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 hover:text-gray-900"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Brands Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-12">
              {brands
                .filter((brand) => activeTab === "all" || brand.category === activeTab)
                .map((brand, index) => (
                  <div
                    key={index}
                    className="group relative flex flex-col items-center justify-between p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
                  >
                    {/* Badge */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-rose-50 text-rose-600 px-2 py-0.5 rounded border border-rose-100">
                        Genuine
                      </span>
                    </div>

                    {/* Logo Image */}
                    <div className="flex-1 flex items-center justify-center min-h-[90px] w-full p-2">
                      <Image
                        src={brand.src}
                        alt={`${brand.alt} available at Suman Tyres Gandhinagar`}
                        width={140}
                        height={90}
                        className="object-contain max-h-[80px] w-auto transition-transform duration-300 group-hover:scale-105"
                        unoptimized
                      />
                    </div>

                    {/* Brand Name Text label */}
                    <span className="mt-4 text-sm font-semibold text-gray-500 group-hover:text-gray-800 transition-colors duration-200">
                      {brand.alt}
                    </span>
                  </div>
                ))}
            </div>

            {/* Bottom Call to Action */}
            <div className="flex justify-center mt-4">
              <WhatsAppButton />
            </div>
          </div>
        </section>
        <div className='w-full py-16 bg-gray-50'>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                Shop by Category
              </h2>
              <div className="w-24 h-1.5 bg-rose-600 mx-auto rounded-full"></div>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Explore our premium range of products tailored for your vehicle&apos;s ultimate performance.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                { src: "/tyre1.jpeg", title: "Premium Tyres", path: "/tyres" },
                { src: "/oil1.jpeg", title: "Engine Oils", path: "/oil" },
                { src: "/battery1.jpeg", title: "Car Batteries", path: "/battery" },
                { src: "/oilfilter.jpg", title: "Filters & Parts", path: "/oil" },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className="group relative block rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 flex items-end justify-between overflow-hidden">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white tracking-wide">
                      {item.title}
                    </h3>
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-rose-600 flex items-center justify-center text-white transform translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <hr />
        <div className="text-center mt-12 mb-8 px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1.5 bg-rose-600 mx-auto rounded-full mb-4"></div>
        </div>

        <div className="flex justify-center items-center w-full py-8 bg-white px-4 md:px-12">
          <Carousel className="w-full max-w-7xl relative" opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-4">
              {reviews.map((review, i) => (
                <CarouselItem key={i} className="pl-4 sm:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-xl shadow-md p-5 h-full border flex flex-col">
                    {/* Header: Profile, Name, Date, Google Icon */}
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center">
                        {/* Profile Image and Text */}
                        <ReviewerImage src={review.imgUrl} name={review.name} />
                        <div>
                          <h3 className="font-semibold text-gray-800">{review.name}</h3>
                          <p className="text-sm text-gray-500">{review.date}</p>
                        </div>
                      </div>
                      {/* Google Icon (Top Right) */}
                      <FcGoogle className="text-gray-400 text-xl" />
                    </div>

                    {/* Rating and Verified Badge */}
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, idx) => (
                        <FaStar key={idx} className="text-yellow-500" size={16} />
                      ))}
                      {/* Blue Checkmark */}
                      <GoVerified className="text-blue-500 ml-1" size={16} />
                    </div>

                    {/* Review text */}
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap flex-1">
                      {review.text}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12" />
            <CarouselNext className="hidden md:flex -right-4 lg:-right-12" />
          </Carousel>
        </div>
        <hr />
        <div className="bg-gray-50 py-12 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

            {/* Left Content */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-6">Types of Tyres</h2>

              {/* Conventional Tubed */}
              <div className="mb-6 flex">
                <div className="w-2 h-24 bg-green-600 mr-2"></div>
                <div>
                  <h3 className="font-semibold text-lg flex items-center">
                    Conventional Tubed
                  </h3>
                  <p className="text-gray-600 mt-2">
                    A tubed tyre that has a separate inner tube placed inside it. If a tubed tyre is punctured,
                    then you will not be able to drive the vehicle.
                  </p>
                </div>
              </div>

              {/* Tubeless */}
              <div>
                <h3 className="font-semibold text-lg">Tubeless</h3>
                <p className="text-gray-600 mt-2">
                  A tubeless tyre does not have a tube inside it. If the tubeless tyre is punctured, the tyre never goes flat
                  and it will still run for days.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 flex justify-centernpm">
              <Image
                src="/tyre.png"
                alt="Car and Bike Tyres in Gandhinagar"
                width={288}
                height={288}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <hr />
        <YouTubeCarousel />

        <FAQSection />

        {/* SEO Content Section */}
        <div className="sr-only bg-white py-12 px-6 text-center border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Trusted Local Tyre Shop Near Me</h2>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Searching for a <strong>tyre shop near me</strong>? Suman Tyres is conveniently located in Gandhinagar, providing top-notch tyres, batteries, and engine oils to customers from <strong>Gandhinagar, Ahmedabad, Vavol, Dhodakuva</strong>, and surrounding nearby areas. Whether you need an urgent tyre replacement, wheel alignment, or routine maintenance, visit the best <strong>tyre shop in Gandhinagar</strong> today! We offer a wide range of premium products and exceptional service to ensure your vehicle is always ready for the road.
          </p>
        </div>

      </main>
      <Footer />
    </div>
  );
}
