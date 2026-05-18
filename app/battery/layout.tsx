import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://sumantyres.in/battery"
  },
  title: "Top Battery Dealers in Gandhinagar Gujarat | Best Battery Dealers Near Me | Top Battery Dealers Amaron in Gandhinagar Gujarat | Suman Tyres | Top Battery Dealers Exide in Gandhinagar Gujarat | Battery Store | Gandhinagar",
  description:
    "Suman Tyres in Gandhinagar Gujarat (Sector 11). Find ✓Car Battery Dealers, ✓Inverter Battery, ✓Batteries for Sale near me,  ✓Batteries for Sale in Gandhinagar Gujarat,  ✓Battery Dealers-Exide, ✓Car Battery Dealers Amaron, ✓Two Wheeler Battery Dealers in Gandhinagar Gujarat. Get Address, Reviews & Best Prices!",
  keywords: [
    "Top Battery Dealers in Gandhinagar Gujarat",
    "Best Battery Dealers near me",
    "Suman Tyres Battery Shop",
    "Top Battery Dealers Amaron in Gandhinagar Gujarat",
    "Top Battery Dealers Exide in Gandhinagar Gujarat",
    "Battery Store | Gandhinagar",
    "Car Battery Dealers Gandhinagar",
    "Rechargeable Battery Dealers",
    "Inverter Battery Dealers Gandhinagar",
    "Batteries for Sale in Gandhinagar Gujarat",
    "battery shop in gandhinagar Sector 11",
    "car battery replacement in minutes",
    "car jump-start on the spot",
    "Exide battery dealers Gandhinagar",
    "Amaron battery dealers Gandhinagar",
    "List of Battery Dealers in Gandhinagar Gujarat",
    "emergency jump start near me",
    "Suman Tyres",
    "battery dealers in Ahmedabad",
    "popular Battery Dealers",
    "local Battery Dealers"
  ],
  openGraph: {
    title: "Suman Tyres | Top Battery Dealers & Car Jump-Start in Gandhinagar Gujarat",
    description:
      "Need a car jump-start on the spot or battery replacement in minutes? Suman Tyres in Gandhinagar Sector 11 offers fast onsite service and premium batteries.",
    url: "https://sumantyres.in/battery",
    type: "website",
    locale: "en_IN",
    siteName: "Suman Tyres",
    images: [
      {
        url: "https://sumantyres.in/_next/image?url=%2Fsumantyresshop.jpg&w=640&q=75",
        width: 1200,
        height: 630,
        alt: "Suman Tyres Battery Shop in Sector 11, Gandhinagar, Gujarat"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Suman Tyres | Top Battery Dealers in Gandhinagar Gujarat",
    description: "Suman Tyres in Gandhinagar Sector 11 offers Car Battery, Inverter Battery, and fast onsite jump-start. Get the best rates from authorized dealers.",
    site: "@SumanTyres",
    creator: "@SumanTyres"
  }
};

export default function BatteryLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
