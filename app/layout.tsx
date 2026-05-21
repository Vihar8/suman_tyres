import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://sumantyres.in"),
  alternates: {
    canonical: "https://sumantyres.in"
  },
  title: "Best Tyre Shop in Gandhinagar Gujarat | Car Tyres & Battery Dealer | Suman Tyres",
  description:
    "Best Tyre Shop & Battery Dealer in Gandhinagar. ✓Car Tyres ✓Wheel Alignment ✓Puncture Repair ✓Alloy Wheels ✓Radial Tyres, ✓Tubeless Tyres, ✓Bike Tyre Shops in Gandhinagar Gujarat. Serving Randesan, Raysan, Kudasan, Sargasan, PDPU, GIFT City & Vavol. Call +91-9426636250 for best price!, Tyre shops near me in Gandhinagr Gujarat",
  keywords: [
    "Best Tyre Shop in Gandhinagar",
    "Tyre Shop Near Me",
    "Car Tyres in Gandhinagar",
    "Bike Tyres in Gandhinagar",
    "Best Battery Shop in Gandhinagar",
    "Engine Oil Shop in Gandhinagar",
    "Wheel Alignment & Balancing",
    "Puncture Repair",
    "Alloy Wheels",
    "nitrogen air",
    "complete car care services in Gandhinagar",
    "20000+ Happy Customers",
    "Randesan",
    "Raysan",
    "Sargasan",
    "Kudasan",
    "PDPU",
    "Koba",
    "GIFT City",
    "Por",
    "Adalaj",
    "Palaj",
    "Lavarpur",
    "Shahpur",
    "Ratanpur",
    "Raksha Shakti",
    "Vavol",
    "Top Tyre Shops in Gandhinagar Gujarat",
    "Tyre Dealers in Gandhinagar Gujarat",
    "Best Car Tyres Dealers near me",
    "Tyre Shops in Gandhinagar Sector 11",
    "Suman Tyres Gandhinagar Sector 11",
    "Car Tyres Gandhinagar",
    "Bike Tyre Shops in Gandhinagar",
    "Radial Tyres Gandhinagar",
    "Tubeless Tyres Gandhinagar",
    "Tyre Dealers in Gandhinagar Sector 11",
    "best tyre shop in Gandhinagar",
    "Car Battery Dealers Gandhinagar Sector 11",
    "Exide battery dealers Gandhinagar",
    "Amaron battery dealers Gandhinagar",
    "engine oil dealer Gandhinagar",
    "tyre shop near me",
    "top tyre shops near me",
    "local Tyre Dealers",
    "popular Tyre Dealers",
    "Suman Tyres",
    "Tyres Shop Gandhinagar",
    "tyres shop Ahmedabad",
    "tyres shop Dhodakuva",
    "Battery Shop Gandhinagar",
    "bike tyres near me",
    "car tyres near me",
    "car battery shop near me",
    "bike battery",
    "car battery",
    "engine oil",
    "car battery charging",
    "battery charging",
    "tyre dealer Gujarat",
    "tyre fitting near me",
    "premium tyres",
    "budget tyres",
    "auto parts near me"
  ],
  openGraph: {
    title: "Suman Tyres | Best Tyre Shop & Car Battery Dealers in Gandhinagar Gujarat",
    description:
      "Established in 1997, Suman Tyres in Gandhinagar Gujarat (Sector 11) is your top-rated shop for Car & Bike Tyres, Wheel Alignment, and Batteries. Serving Randesan, Kudasan, Sargasan, PDPU, and GIFT City.",
    url: "https://sumantyres.in/",
    type: "website",
    locale: "en_IN",
    siteName: "Suman Tyres",
    images: [
      {
        url: "https://sumantyres.in/_next/image?url=%2Fsumantyresshop.jpg&w=640&q=75",
        width: 1200,
        height: 630,
        alt: "Suman Tyres Storefront in Sector 11, Gandhinagar, Gujarat"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Suman Tyres | Best Tyre Shop in Gandhinagar Gujarat",
    description: "Suman Tyres is the leading tyre & battery shop in Gandhinagar. We offer premium tyres, engine oils, wheel alignment, and puncture repair. Serving Randesan, Sargasan, Kudasan, and nearby areas.",
    site: "@SumanTyres",
    creator: "@SumanTyres"
  },
  other: {
    "google-adsense-account": "ca-pub-3879802047017698"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TireShop",
              name: "Suman Tyres",
              image: "https://sumantyres.in/_next/image?url=%2Fsumantyresshop.jpg&w=640&q=75",
              "@id": "https://sumantyres.in",
              url: "https://sumantyres.in",
              telephone: "+91-9426636250",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Sector 11",
                addressLocality: "Gandhinagar",
                addressRegion: "Gujarat",
                postalCode: "382011",
                addressCountry: "IN"
              },
              areaServed: ["Gandhinagar", "Ahmedabad", "Vavol", "Dhodakuva"],
              geo: {
                "@type": "GeoCoordinates",
                latitude: 23.223347,
                longitude: 72.647705
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                  ],
                  opens: "09:30",
                  closes: "19:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Sunday"
                  ],
                  opens: "09:00",
                  closes: "16:00"
                }
              ],
              sameAs: [
                "https://www.instagram.com/sumantyres"
              ]
            })
          }}
        />
      </Head>
      <body className={inter.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
