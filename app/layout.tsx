import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suman Tyres",
  description: "We Help People To Buy!",
  keywords: "tyres, bike tyre, activa tyre, car tyre, wiper blade shop,car battery charging , engine oil, car battery,  wholesale tyres, tyre shop Gandhinagar, tyre wholesaler, Gandhinagar tyres, best tyre shop in gandhinagar, tyre shop near me",
  openGraph: {
    title: "Suman Tyres - Tyres, Oil, Batteries, and More",
    description: "Your one-stop shop for affordable tyres, oil, and car parts in Gandhinagar.",
    url: "https://sumantyres.vercel.app/"
   
  },
  twitter: {
    card: "summary_large_image",
    title: "Suman Tyres",
    description: "We Help People To Buy Tyres, Oil, and More!"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <SpeedInsights />
        </body>
    </html>
  );
}
