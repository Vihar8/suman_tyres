import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suman Tyres",
  description: "We are wholesaler Sell We Help People To Buy!",
  keywords: "tyres, bike tyre, activa tyre, car tyre, wiper blade shop,car battery charging , engine oil, car battery,  wholesale tyres, tyre shop Gandhinagar, tyre wholesaler, Gandhinagar tyres, best tyre shop in gandhinagar, tyre shop near me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
