import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suman Tyres",
  description:
    "Established in 1997, Suman Tyres offers a wide range of car and bike tyres, batteries, engine oils, and accessories in Gandhinagar, Gujarat.",
  keywords: [
    "Suman Tyres",
    "Tyres Shop",
    "Battery Shop",
    "battery Shop Gandhinagar",
    "tyre shop Gandhinagar",
    "bike tyres",
    "car tyres",
    "bike battery",
    "car battery",
    "engine oil",
    "car battery",
    "car battery charging",
    "battery charging",
    "tyre dealer Gujarat",
    "battery dealer Gujarat",
    "engine oil dealer Gujarat",
    "tyre fitting", "Suman Tyres",
    "truck tyres",
    "tractor tyres",
    "off-road tyres",
    "all-season tyres",
    "premium tyres",
    "budget tyres",
    "tyre fitting",
    "bike battery",
    "car battery",
    "truck battery",
    "tractor battery",
    "e-rickshaw battery",
    "bike battery shop",
    "car battery shop",
    "battery dealer Gandhinagar",
    "battery dealer Gujarat",
    "battery dealer Gandhinagar",
    "engine oil",
    "car engine oil",
    "bike engine oil",
    "synthetic engine oil",
    "mineral engine oil",
    "semi-synthetic oil",
    "engine oil dealer Gujarat",
    "engine oil dealer Gandhinagar",
    "tyre dealer Gujarat",
    "battery dealer Gujarat",
    "engine oil dealer Gujarat",
  ],
  openGraph: {
    title: "Suman Tyres – Your One-Stop Tyre Shop in Gandhinagar",
    description:
      "Explore a comprehensive range of tyres, batteries, and automotive accessories at Suman Tyres, serving Gandhinagar since 1997.",
    url: "https://sumantyres.vercel.app/",
    type: "website",
    locale: "en_IN",
    siteName: "Suman Tyres",
    images: [
      {
        url: "https://sumantyres.vercel.app/_next/image?url=%2Fsumantyresshop.jpg&w=640&q=75",
        width: 1200,
        height: 630,
        alt: "Suman Tyres Storefront"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Suman Tyres – Trusted Tyre Dealer in Gandhinagar",
    description: "Offering quality tyres, batteries, and engine oils in gandhinagar, Affordable tyres, oils, batteries, and auto parts in Gandhinagar.",
    site: "@SumanTyres",
    creator: "@SumanTyres"
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
              "@type": "tyreshop",
              name: "Suman Tyres",
              image: "https://sumantyres.vercel.app/_next/image?url=%2Fsumantyresshop.jpg&w=640&q=75",
              "@id": "https://sumantyres.vercel.app",
              url: "https://sumantyres.vercel.app",
              telephone: "+91-9426636250",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Sector 11",
                addressLocality: "Gandhinagar",
                addressRegion: "Gujarat",
                postalCode: "382017",
                addressCountry: "IN"
              },
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
                  opens: "09:00",
                  closes: "20:00"
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
