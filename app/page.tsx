'use client'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar"
import Footer from '@/components/Footer';
import { SpeedInsights } from "@vercel/speed-insights/next"


export default function Component() {

  return (
    <div className="flex flex-col min-h-screen">
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
            <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full md:bg-transparent md:text-gray-700" />
            <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full md:bg-transparent md:text-gray-700" />
          </Carousel>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-6">
            {[
              { src: "/tyre1.jpeg", title: "Tyre", desc: "Durable and versatile tyres for driving." },
              { src: "/oil1.jpeg", title: "Oil", desc: "Specially designed for optimal performance." },
              { src: "/battery1.jpeg", title: "Battery", desc: "Engineered for superior handling and responsiveness for your Vehicle Engine." },
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
        </section>
      </main>
      <Footer />
    </div>
  );
}