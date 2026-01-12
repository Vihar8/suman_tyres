'use client'
import Head from 'next/head';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { FaGoogle, FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useEffect, useState } from 'react';

export default function Component() {
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

  const [index, setIndex] = useState(0);

  // Constants for carousel movement calculation
  const CARD_WIDTH = 320;
  const GAP_WIDTH = 24; // Tailwind's gap-6 is 1.5rem = 24px
  const CARD_WIDTH_PLUS_GAP = CARD_WIDTH + GAP_WIDTH;

  // The carousel can only slide up to the point where the last 3 cards are visible.
  const maxIndex = reviews.length - 3;

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Auto slide every 3 seconds (3000ms)
  useEffect(() => {
    // Only auto-slide if there are more than 3 reviews
    if (reviews.length <= 3) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(timer);
  }, [index]);


  // Only show the carousel if there are reviews
  if (reviews.length === 0) return null;

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Suman Tyres | Best Tyre, Oil, Batteries & Wholesale Shop in Gandhinagar, Gujarat</title>
        <meta
          name="description"
          content="Suman Tyres in Gandhinagar, Gujarat offers the best tyres, oils, and batteries. As a trusted wholesaler, we provide the lowest rates and bulk discounts for all vehicle needs. Quality products with reliable service.Suman Tyres in Gandhinagar offers a wide selection of car and bike tyres, puncture repairs, wheel alignment, batteries, and auto accessories. Trusted brands like Ceat, Michelin, Bridgestone, Apollo, and MRF. Visit us for quality service near Sector 11 and Khodiyar Tyres."
        />
        <meta
          name="keywords"
          content="Tyres Gandhinagar, Oil Gujarat, Batteries Gandhinagar, Wholesale Tyres Gujarat, Car Batteries, Bike Batteries, Oil Shop Gandhinagar, Suman Tyres, Best Tyre Shop in Gandhinagar, tyre shop Gandhinagar, car tyres Gandhinagar, bike tyres Gandhinagar, puncture repair Gandhinagar, tyre dealers Gandhinagar, ceat tyres Gandhinagar, bridgestone tyres Gandhinagar, michelin tyres Gandhinagar, mrf tyres Gandhinagar, car batteries Gandhinagar, auto parts Gandhinagar, wheel alignment Gandhinagar, tyre shop near me, puncture shop near me, tyre showroom Gandhinagar, Khodiyar tyres, radhe tyres, tyre dealer Gandhinagar, tyre store Gandhinagar, Gandhinagar tyre shop, sector 11 tyre shop, khodiyar tyres, tyre repair near me"
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
              {["animatedtyre.jpg", "animatedoil.jpg", "animatedbattery.jpg", "animatedoilfilter.jpg", "animatedairfilter.jpg", "animatedbatterycharging.jpg"].map((src, index) => (
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
        <section className="w-full py-12">
          <div className="flex flex-col items-center justify-center m-4">
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
          <div className='w-full py-12'>

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
          </div>
          <hr />
          <h2 className="text-black rounded-xl w-fit text-2xl font-bold mt-5 mx-auto">
            What Our Customers Say
          </h2>
          <div className="flex justify-center items-center w-full py-8 bg-white">
            {/* max-w-7xl matches your original code, setting the content width */}
            <div className="relative w-full max-w-7xl flex items-center justify-center">
              {/* Left arrow */}
              <button
                onClick={prevSlide}
                // Positioning the arrow slightly outside the content area
                className="absolute -left-1 bg-white border rounded-full shadow-lg p-2 hover:bg-gray-100 transition-all duration-300 z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <FaChevronLeft size={20} className="text-gray-700" />
              </button>

              {/* Review cards Wrapper - Creates the viewport for the three cards */}
              <div
                className="overflow-hidden px-8"
                style={{ width: `${(CARD_WIDTH * 3) + (GAP_WIDTH * 4)}px` }}
              >
                <div
                  // This inner div holds ALL the review cards in a single row
                  className="flex gap-6 transition-transform duration-700 ease-in-out"
                  // Applies the translation to slide the entire row
                  style={{
                    transform: `translateX(-${index * CARD_WIDTH_PLUS_GAP}px)`
                  }}
                >
                  {reviews.map((review, i) => (
                    <div
                      key={i}
                      // Cards are full opacity and scaled to match the image
                      className="bg-white rounded-xl shadow-md p-5 w-[320px] min-h-[230px] border shrink-0"
                    >
                      {/* Header: Profile, Name, Date, Google Icon */}
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center">
                          {/* Profile Image and Text */}
                          <div className="flex items-center">
                            <img
                              src={review.imgUrl}
                              alt={review.name}
                              className="w-10 h-10 rounded-full object-cover mr-3"
                            />
                            <div>
                              <h3 className="font-semibold text-gray-800">{review.name}</h3>
                              <p className="text-sm text-gray-500">{review.date}</p>
                            </div>
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
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">
                        {review.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right arrow */}
              <button
                onClick={nextSlide}
                // Positioning the arrow slightly outside the content area
                className="absolute -right-1 bg-white border rounded-full shadow-lg p-2 hover:bg-gray-100 transition-all duration-300 z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <FaChevronRight size={20} className="text-gray-700" />
              </button>
            </div>
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
                <img
                  src="/tyre.png"
                  alt="Tyre"
                  className="w-72 h-72 object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
