import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://sumantyres.in"),
  title: "Suman Tyres - Best Tyre Shop in Gandhinagar & Near Me",
  description:
    "Established in 1997, Suman Tyres is your trusted tyre shop in Gandhinagar. We serve Gandhinagar, Ahmedabad, Vavol, Dhodakuva, and nearby areas with premium tyres, batteries, and engine oils.",
  keywords: [
    "tyre shop in gandhinagar",
    "tyre shop near me",
    "Suman Tyres",
    "Tyres Shop Gandhinagar",
    "tyres shop Ahmedabad",
    "tyres shop Vavol",
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
    "truck tyres",
    "tractor tyres",
    "premium tyres",
    "budget tyres",
    "engine oil dealer Gandhinagar",
    "auto parts near me"
  ],
  openGraph: {
    title: "Suman Tyres – Your One-Stop Tyre Shop in Gandhinagar",
    description:
      "Explore a comprehensive range of tyres, batteries, and automotive accessories at Suman Tyres, serving Gandhinagar since 1997.",
    url: "https://sumantyres.in/",
    type: "website",
    locale: "en_IN",
    siteName: "Suman Tyres",
    images: [
      {
        url: "https://sumantyres.in/_next/image?url=%2Fsumantyresshop.jpg&w=640&q=75",
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
                postalCode: "382017",
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
