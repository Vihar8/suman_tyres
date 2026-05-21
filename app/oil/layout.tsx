import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://sumantyres.in/oil"
  },
  title: "Engine Oil Dealers in Gandhinagar & Near Me | Top Engine Oil Dealers in Gandhinagar Gujarat |  Engine oil store",
  description: "Looking for Engine Oil Dealers near me? Suman Tyres in Gandhinagar Sector 11 is the top Automotive Lubricant Supplier in Gandhinagar. Find ✓Shell, ✓Castrol ✓Servo, ✓Gulf, ✓Repsol Engine Oil Dealers, ✓Castrol Oil Shop, ✓Castrol Lubricants Store, ✓Castrol Oil Distributors, ✓Repsol Engine Oil Dealers, ✓Repsol Oil Shop, ✓Repsol Lubricants Store, ✓Repsol Oil Distributors, ✓Gulf Engine Oil Dealers, ✓Gulf Oil Shop, ✓Gulf Lubricants Store, ✓Gulf Oil Distributors, ✓Servo Engine Oil Dealers, ✓Servo Oil Shop, ✓Servo Lubricants Store, ✓Servo Oil Distributors in Gandhinagar Gujarat.",
  keywords: [
    "Engine Oil Dealers in Gandhinagar Gujarat",
    "Automotive Lubricant Suppliers Gujarat",
    "Engine Oil Dealers near me",
    "Automotive Lubricant Suppliers near me",
    "Engine Oils Gandhinagar",
    "Car Oil Gujarat",
    "Bike Oil Gandhinagar",
    "Synthetic Engine Oil",
    "Mineral Oil",
    "Car & Bike Lubricants",
    "Shell Engine Oil Dealers",
    "Castrol Engine Oil Dealers",
    "Servo Engine Oil Dealers",
    "Gulf Engine Oil Dealers",
    "Shell Oil Shop Gandhinagar",
    "Castrol Oil Shop Gandhinagar",
    "Servo Oil Shop Gandhinagar",
    "Gulf Oil Shop Gandhinagar",
    "Shell Lubricants Gujarat",
    "Castrol Lubricants Gujarat",
    "Servo Lubricants Gujarat",
    "Gulf Lubricants Gujarat",
    "Suman Tyres",
    "Oil Dealer Gandhinagar",
    "oil dealers in Ahmedabad",
    "oil dealers in Vavol",
    "oil dealers in Dhodakuva"
  ],
  openGraph: {
    title: "Suman Tyres | Engine Oil Dealers & Automotive Lubricant Suppliers in Gandhinagar Gujarat",
    description:
      "Looking for Engine Oil Dealers near me? Suman Tyres in Sector 11, Gandhinagar is the top Automotive Lubricant Supplier serving Gandhinagar, Ahmedabad, and Vavol.",
    url: "https://sumantyres.in/oil",
    type: "website",
    locale: "en_IN",
    siteName: "Suman Tyres",
    images: [
      {
        url: "https://sumantyres.in/_next/image?url=%2Fsumantyresshop.jpg&w=640&q=75",
        width: 1200,
        height: 630,
        alt: "Suman Tyres Engine Oil Shop in Sector 11, Gandhinagar, Gujarat"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Suman Tyres | Engine Oil Dealers in Gandhinagar Gujarat",
    description: "Suman Tyres in Gandhinagar Sector 11 is the top Automotive Lubricant Supplier. Premium synthetic, semi-synthetic, and mineral engine oils at best prices.",
    site: "@SumanTyres",
    creator: "@SumanTyres"
  }
};

export default function OilLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
