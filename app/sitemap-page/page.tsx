import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sitemap | Suman Tyres Gandhinagar – Best Tyre Shop Near Me",
  description:
    "Complete sitemap of Suman Tyres Gandhinagar – your trusted tyre shop in Sector 11, Gandhinagar, Gujarat. Find all services: Car Tyres, Bike Tyres, Battery, Engine Oil, Wheel Alignment, Puncture Repair & more.",
  alternates: {
    canonical: "https://sumantyres.in/sitemap-page",
  },
  keywords: [
    "Suman Tyres Gandhinagar sitemap",
    "tyre shop Gandhinagar",
    "best tyre shop in Gandhinagar",
    "car tyres Gandhinagar",
    "bike tyres Gandhinagar",
    "battery shop Gandhinagar",
    "engine oil Gandhinagar",
    "wheel alignment Gandhinagar",
  ],
};

// ─── Data ────────────────────────────────────────────────────────────────────

const pages = [
  { label: "Home", href: "/", desc: "Suman Tyres – Best Tyre Shop in Gandhinagar" },
  { label: "Tyres", href: "/tyres", desc: "Car & Bike Tyres – All Brands, All Sizes" },
  { label: "Battery", href: "/battery", desc: "Car & Bike Battery – Exide, Amaron & more" },
  { label: "Engine Oil", href: "/oil", desc: "Engine Oil & Lubricants in Gandhinagar" },
  { label: "Gallery", href: "/gallery", desc: "Our Shop, Services & Happy Customers" },
  { label: "About Us", href: "/about", desc: "Our Story – Est. 1997, Sector 11 Gandhinagar" },
  { label: "Warranty & Guarantee", href: "/warrantyandGuarantee", desc: "Our Warranty & Guarantee Policy" },
  { label: "Contact Us", href: "/contact", desc: "Visit, Call or Email Suman Tyres Gandhinagar" },
];

const services = [
  "Car Tyre Replacement Gandhinagar",
  "Bike Tyre Replacement Gandhinagar",
  "Tubeless Tyre Fitting",
  "Radial Tyre Fitting",
  "Wheel Alignment & Balancing Gandhinagar",
  "Puncture Repair Gandhinagar",
  "Nitrogen Air Filling",
  "Alloy Wheel Fitting",
  "Car Battery Replacement Gandhinagar",
  "Bike Battery Replacement Gandhinagar",
  "Battery Charging Service",
  "Engine Oil Change Gandhinagar",
  "Mobil Engine Oil Dealer",
  "Castrol Oil Dealer Gandhinagar",
  "Shell Helix Oil Dealer",
  "MRF Tyre Dealer Gandhinagar",
  "Apollo Tyre Dealer Gandhinagar",
  "CEAT Tyre Dealer Gandhinagar",
  "Bridgestone Tyre Dealer Gandhinagar",
  "Michelin Tyre Dealer Gandhinagar",
  "JK Tyre Dealer Gandhinagar",
  "Goodyear Tyre Dealer Gandhinagar",
  "Yokohama Tyre Dealer Gandhinagar",
  "Exide Battery Dealer Gandhinagar",
  "Amaron Battery Dealer Gandhinagar",
  "Order Car Oil Online Gandhinagar",
  "Complete Car Care Services Gandhinagar",
];

// ─── Battery Keywords ─────────────────────────────────────────────────────────
const batteryKeywords = [
  // Service types
  "Car Battery Shop Gandhinagar",
  "Bike Battery Shop Gandhinagar",
  "Car Battery Replacement Gandhinagar",
  "Bike Battery Replacement Gandhinagar",
  "Battery Charging Service Gandhinagar",
  "Dead Battery Replacement Gandhinagar",
  "Battery Jump Start Service Gandhinagar",
  "Battery Testing & Check Gandhinagar",
  "New Battery Installation Gandhinagar",
  "Old Battery Exchange Gandhinagar",
  // Brands
  "Exide Battery Dealer Gandhinagar",
  "Exide Car Battery Gandhinagar",
  "Exide Bike Battery Gandhinagar",
  "Amaron Battery Dealer Gandhinagar",
  "Amaron Car Battery Gandhinagar",
  "Amaron Bike Battery Gandhinagar",
  "Amaron Pro Battery Gandhinagar",
  "Livguard Battery Dealer Gandhinagar",
  "Luminous Battery Gandhinagar",
  // Near me
  "Battery Shop Near Me Gandhinagar",
  "Car Battery Near Me",
  "Bike Battery Near Me Gandhinagar",
  "Battery Replacement Near Me",
  "Best Battery Shop Near Me",
  "Cheap Battery Shop Gandhinagar",
  // Local area
  "Battery Shop Sector 11 Gandhinagar",
  "Battery Shop Near Randesan",
  "Battery Shop Near Kudasan",
  "Battery Shop Near Sargasan",
  "Battery Shop Near GIFT City",
  "Battery Shop Near PDPU",
  "Battery Shop Near Koba",
  "Battery Shop Vavol Gandhinagar",
  // Long-tail
  "best car battery dealer in Gandhinagar",
  "affordable battery shop Gandhinagar",
  "Exide battery price Gandhinagar",
  "Amaron battery price Gandhinagar",
  "battery warranty Gandhinagar",
  "36 month battery Gandhinagar",
  "maintenance free battery Gandhinagar",
  "car battery with installation Gandhinagar",
];

// ─── Engine Oil Keywords ──────────────────────────────────────────────────────
const engineOilKeywords = [
  // Service types
  "Engine Oil Change Gandhinagar",
  "Engine Oil Dealer Gandhinagar",
  "Engine Oil Shop Gandhinagar",
  "Bike Engine Oil Gandhinagar",
  "Car Engine Oil Gandhinagar",
  "Gear Oil Gandhinagar",
  "Transmission Oil Gandhinagar",
  "Brake Fluid Gandhinagar",
  "Coolant Dealer Gandhinagar",
  "Lubricants Shop Gandhinagar",
  "Engine Oil Flush Gandhinagar",
  "Full Synthetic Engine Oil Gandhinagar",
  "Semi Synthetic Engine Oil Gandhinagar",
  "Mineral Engine Oil Gandhinagar",
  // Brands
  "Castrol Engine Oil Dealer Gandhinagar",
  "Castrol GTX Gandhinagar",
  "Castrol Magnatec Gandhinagar",
  "Castrol EDGE Gandhinagar",
  "Mobil Engine Oil Dealer Gandhinagar",
  "Mobil 1 Synthetic Oil Gandhinagar",
  "Shell Helix Oil Dealer Gandhinagar",
  "Shell Helix Ultra Gandhinagar",
  "Motul Oil Dealer Gandhinagar",
  "Gulf Oil Dealer Gandhinagar",
  "HP Lubricants Gandhinagar",
  "Servo Engine Oil Gandhinagar",
  "Veedol Engine Oil Gandhinagar",
  "Pennzoil Oil Gandhinagar",
  // Near me
  "Engine Oil Near Me Gandhinagar",
  "Car Oil Change Near Me",
  "Bike Oil Change Near Me Gandhinagar",
  "Engine Oil Shop Near Me",
  "Best Engine Oil Shop Near Me",
  // Local area
  "Engine Oil Shop Sector 11 Gandhinagar",
  "Engine Oil Near Randesan Gandhinagar",
  "Engine Oil Near Kudasan Gandhinagar",
  "Engine Oil Near PDPU Gandhinagar",
  "Engine Oil Near GIFT City",
  "Oil Change Service Gandhinagar",
  "Order Engine Oil Online Gandhinagar",
  // Long-tail
  "best engine oil for car in Gandhinagar",
  "best engine oil for bike in Gandhinagar",
  "cheap engine oil Gandhinagar",
  "engine oil with free installation Gandhinagar",
  "genuine engine oil dealer Gandhinagar",
  "authorised Castrol dealer Gandhinagar",
  "authorised Mobil oil dealer Gandhinagar",
  "engine oil change price Gandhinagar",
];

// ─── Brand Keywords ───────────────────────────────────────────────────────────
const brandKeywords = [
  // ── Tyre Brands ──
  {
    brand: "CEAT",
    icon: "🚗",
    color: "bg-red-50 border-red-200 text-red-900 hover:bg-red-100 hover:border-red-400",
    accent: "text-red-600",
    keywords: [
      "CEAT Tyre Dealer Gandhinagar",
      "CEAT Tyres Gandhinagar Sector 11",
      "CEAT Car Tyre Gandhinagar",
      "CEAT Bike Tyre Gandhinagar",
      "CEAT Tyre Price Gandhinagar",
      "CEAT Tubeless Tyre Gandhinagar",
      "CEAT Milaze Tyre Gandhinagar",
      "CEAT Zoom Tyre Gandhinagar",
      "CEAT Tyre Near Me",
      "CEAT Authorised Dealer Gandhinagar",
    ],
  },
  {
    brand: "Apollo",
    icon: "🚗",
    color: "bg-blue-50 border-blue-200 text-blue-900 hover:bg-blue-100 hover:border-blue-400",
    accent: "text-blue-600",
    keywords: [
      "Apollo Tyre Dealer Gandhinagar",
      "Apollo Tyres Gandhinagar Sector 11",
      "Apollo Car Tyre Gandhinagar",
      "Apollo Bike Tyre Gandhinagar",
      "Apollo Tyre Price Gandhinagar",
      "Apollo Alnac Tyre Gandhinagar",
      "Apollo Amazer Tyre Gandhinagar",
      "Apollo Aspire Tyre Gandhinagar",
      "Apollo Tyre Near Me",
      "Apollo Authorised Dealer Gandhinagar",
    ],
  },
  {
    brand: "Bridgestone",
    icon: "🚗",
    color: "bg-indigo-50 border-indigo-200 text-indigo-900 hover:bg-indigo-100 hover:border-indigo-400",
    accent: "text-indigo-600",
    keywords: [
      "Bridgestone Tyre Dealer Gandhinagar",
      "Bridgestone Tyres Gandhinagar",
      "Bridgestone Car Tyre Gandhinagar",
      "Bridgestone Bike Tyre Gandhinagar",
      "Bridgestone Tyre Price Gandhinagar",
      "Bridgestone Ecopia Tyre Gandhinagar",
      "Bridgestone Turanza Tyre Gandhinagar",
      "Bridgestone Tyre Near Me",
      "Bridgestone Authorised Dealer Gandhinagar",
    ],
  },
  {
    brand: "JK Tyre",
    icon: "🚗",
    color: "bg-orange-50 border-orange-200 text-orange-900 hover:bg-orange-100 hover:border-orange-400",
    accent: "text-orange-600",
    keywords: [
      "JK Tyre Dealer Gandhinagar",
      "JK Tyres Gandhinagar Sector 11",
      "JK Car Tyre Gandhinagar",
      "JK Bike Tyre Gandhinagar",
      "JK Tyre Price Gandhinagar",
      "JK UX Royale Tyre Gandhinagar",
      "JK Vectra Tyre Gandhinagar",
      "JK Tyre Near Me",
      "JK Authorised Dealer Gandhinagar",
    ],
  },
  // ── Engine Oil Brands ──
  {
    brand: "Shell",
    icon: "🛢️",
    color: "bg-yellow-50 border-yellow-200 text-yellow-900 hover:bg-yellow-100 hover:border-yellow-400",
    accent: "text-yellow-600",
    keywords: [
      "Shell Helix Oil Dealer Gandhinagar",
      "Shell Helix Ultra Gandhinagar",
      "Shell Helix HX7 Gandhinagar",
      "Shell Helix HX5 Gandhinagar",
      "Shell Engine Oil Gandhinagar",
      "Shell Advance Bike Oil Gandhinagar",
      "Shell Oil Near Me Gandhinagar",
      "Shell Authorised Dealer Gandhinagar",
      "Shell Oil Price Gandhinagar",
    ],
  },
  {
    brand: "Castrol",
    icon: "🛢️",
    color: "bg-lime-50 border-lime-200 text-lime-900 hover:bg-lime-100 hover:border-lime-400",
    accent: "text-lime-600",
    keywords: [
      "Castrol Oil Dealer Gandhinagar",
      "Castrol GTX Gandhinagar",
      "Castrol Magnatec Gandhinagar",
      "Castrol EDGE Gandhinagar",
      "Castrol Power1 Bike Oil Gandhinagar",
      "Castrol Activ Bike Oil Gandhinagar",
      "Castrol Engine Oil Price Gandhinagar",
      "Castrol Oil Near Me",
      "Castrol Authorised Dealer Gandhinagar",
    ],
  },
  {
    brand: "Servo",
    icon: "🛢️",
    color: "bg-teal-50 border-teal-200 text-teal-900 hover:bg-teal-100 hover:border-teal-400",
    accent: "text-teal-600",
    keywords: [
      "Servo Engine Oil Dealer Gandhinagar",
      "Servo Oil Gandhinagar",
      "Servo 4T Bike Oil Gandhinagar",
      "Servo Pride Car Oil Gandhinagar",
      "Servo Gear Oil Gandhinagar",
      "Servo Oil Near Me Gandhinagar",
      "Servo Authorised Dealer Gandhinagar",
      "IOCL Servo Oil Gandhinagar",
    ],
  },
  {
    brand: "Gulf",
    icon: "🛢️",
    color: "bg-sky-50 border-sky-200 text-sky-900 hover:bg-sky-100 hover:border-sky-400",
    accent: "text-sky-600",
    keywords: [
      "Gulf Oil Dealer Gandhinagar",
      "Gulf Pride 4T Bike Oil Gandhinagar",
      "Gulf Formula G Car Oil Gandhinagar",
      "Gulf Engine Oil Price Gandhinagar",
      "Gulf Oil Near Me Gandhinagar",
      "Gulf Authorised Dealer Gandhinagar",
      "Gulf Lubricants Gandhinagar",
      "Gulf Gear Oil Gandhinagar",
    ],
  },
  // ── Battery Brands ──
  {
    brand: "Amaron",
    icon: "🔋",
    color: "bg-green-50 border-green-200 text-green-900 hover:bg-green-100 hover:border-green-400",
    accent: "text-green-600",
    keywords: [
      "Amaron Battery Dealer Gandhinagar",
      "Amaron Car Battery Gandhinagar",
      "Amaron Bike Battery Gandhinagar",
      "Amaron Pro Battery Gandhinagar",
      "Amaron Go Battery Gandhinagar",
      "Amaron Flo Battery Gandhinagar",
      "Amaron Battery Price Gandhinagar",
      "Amaron Battery Near Me",
      "Amaron Authorised Dealer Gandhinagar",
      "Amaron Battery Warranty Gandhinagar",
    ],
  },
  {
    brand: "Exide",
    icon: "🔋",
    color: "bg-purple-50 border-purple-200 text-purple-900 hover:bg-purple-100 hover:border-purple-400",
    accent: "text-purple-600",
    keywords: [
      "Exide Battery Dealer Gandhinagar",
      "Exide Car Battery Gandhinagar",
      "Exide Bike Battery Gandhinagar",
      "Exide Matrix Battery Gandhinagar",
      "Exide Mileage Battery Gandhinagar",
      "Exide FFS Battery Gandhinagar",
      "Exide Battery Price Gandhinagar",
      "Exide Battery Near Me",
      "Exide Authorised Dealer Gandhinagar",
      "Exide Battery Warranty Gandhinagar",
    ],
  },
];

const localAreas = [
  "Tyre Shop Sector 11 Gandhinagar",
  "Tyre Shop Near Randesan Gandhinagar",
  "Tyre Shop Near Raysan Gandhinagar",
  "Tyre Shop Near Kudasan Gandhinagar",
  "Tyre Shop Near Sargasan Gandhinagar",
  "Tyre Shop Near PDPU Gandhinagar",
  "Tyre Shop Near GIFT City",
  "Tyre Shop Near Koba Gandhinagar",
  "Tyre Shop Near Vavol Gandhinagar",
  "Tyre Shop Near Por Gandhinagar",
  "Tyre Shop Near Adalaj Gandhinagar",
  "Tyre Shop Near Palaj Gandhinagar",
  "Tyre Shop Near Lavarpur Gandhinagar",
  "Tyre Shop Near Shahpur Gandhinagar",
  "Tyre Shop Near Ratanpur Gandhinagar",
  "Tyre Shop Near Raksha Shakti University",
  "Tyre Shop Near Dhodakuva",
  "Tyre Shop Ahmedabad",
  "Tyre Shop Near Me Gandhinagar",
  "Car Tyre Shop Near Me",
  "Bike Tyre Shop Near Me",
  "Battery Shop Near Me Gandhinagar",
  "Battery Shop Near Me Ahmedabad",
  "Engine Oil Shop Near Me Gandhinagar",
  "Engine Oil Shop Near Me Ahmedabad",
  "Car Service Near Me Gandhinagar",
  "Auto Parts Near Me Gandhinagar",
];

const longTailKeywords = [
  "best tyre shop in Gandhinagar Gujarat",
  "top-rated tyre shop Gandhinagar",
  "affordable tyre shop Gandhinagar",
  "cheapest tyre shop Gandhinagar",
  "tyre dealers in Gandhinagar sector 11",
  "Suman Tyres Gandhinagar Sector 11 review",
  "Suman Tyres near Cinemax Gandhinagar",
  "Suman Tower tyre shop Gandhinagar",
  "car tyre change near me Gandhinagar",
  "puncture repair near me Gandhinagar",
  "wheel balancing near me Gandhinagar",
  "nitrogen tyre filling Gandhinagar",
  "alloy wheels Gandhinagar",
  // Battery long-tails
  "car battery dealer near me Gandhinagar",
  "car battery replacement near me",
  "bike battery shop Gandhinagar",
  "best car battery in Gandhinagar",
  "Exide battery price list Gandhinagar",
  "Amaron battery price list Gandhinagar",
  "battery with warranty Gandhinagar",
  "free battery installation Gandhinagar",
  "old battery exchange offer Gandhinagar",
  "emergency battery replacement Gandhinagar",
  // Engine oil long-tails
  "engine oil change near me Gandhinagar",
  "best engine oil for car Gandhinagar",
  "best engine oil for bike Gandhinagar",
  "Castrol oil dealer near me",
  "Mobil 1 oil dealer Gandhinagar",
  "cheap engine oil Gandhinagar",
  "genuine oil dealer Gandhinagar",
  "bike oil change Gandhinagar",
  "car oil change Gandhinagar",
  "engine oil delivery Gandhinagar",
  // General
  "premium tyres Gandhinagar",
  "budget tyres Gandhinagar",
  "local tyre dealers Gandhinagar",
  "popular tyre shop Gujarat",
  "tyre shop with home delivery Gandhinagar",
  "SUV tyres Gandhinagar",
  "truck tyres Gandhinagar",
  "commercial tyre dealer Gandhinagar",
  "auto parts near me Gandhinagar",
  "best car service in Gandhinagar",
  "20000 happy customers Suman Tyres",
  "4.4 star tyre shop Gandhinagar",
  "established 1997 tyre shop Gandhinagar",
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function SitemapPage() {
  return (
    <>
      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://sumantyres.in/" },
              { "@type": "ListItem", position: 2, name: "Sitemap", item: "https://sumantyres.in/sitemap-page" },
            ],
          }),
        }}
      />

      <div className="min-h-screen bg-white">
        <Navbar />

        {/* ── Hero Banner ── */}
        <section
          style={{
            background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 70%, #c0392b 100%)",
          }}
          className="py-16 px-4 text-center text-white"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            🗺️ Suman Tyres – Complete Sitemap
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
            Best Tyre Shop in Gandhinagar, Gujarat · Sector 11 · Est. 1997 · 50,000+ Happy Customers
          </p>
          <p className="mt-3 text-sm text-gray-300">
            📍 Near Cinemax, Suman Tower, Sector 11, Gandhinagar – 382011 &nbsp;|&nbsp;
            📞 <a href="tel:+919426636250" className="underline hover:text-yellow-300">+91 9426636250</a>
          </p>
        </section>

        <main className="max-w-6xl mx-auto px-4 py-12 space-y-14">

          {/* ── All Pages ── */}
          <section aria-labelledby="pages-heading">
            <h2
              id="pages-heading"
              className="text-2xl font-bold text-gray-900 border-l-4 border-red-600 pl-4 mb-6"
            >
              📄 All Pages
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {pages.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="group block rounded-xl border border-gray-200 bg-gray-50 hover:bg-red-50 hover:border-red-400 p-4 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <span className="font-semibold text-gray-900 group-hover:text-red-700 text-base block">
                    {p.label}
                  </span>
                  <span className="text-xs text-gray-500 mt-1 block">{p.desc}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* ── Brands We Stock ── */}
          <section aria-labelledby="brands-heading">
            <h2
              id="brands-heading"
              className="text-2xl font-bold text-gray-900 border-l-4 border-red-600 pl-4 mb-2"
            >
              🏷️ Brands We Stock – Tyres, Battery & Engine Oil
            </h2>
            <p className="text-gray-600 mb-8 text-sm">
              Suman Tyres, Sector 11 Gandhinagar is an authorised dealer of India's most trusted tyre, battery and engine oil brands. Buy genuine products at the best prices.
            </p>
            <div className="space-y-10">
              {brandKeywords.map(({ brand, icon, color, accent, keywords }) => (
                <div key={brand}>
                  <h3 className={`inline-flex items-center gap-2 text-lg font-bold mb-3 px-4 py-1.5 rounded-full border ${color}`}>
                    <span>{icon}</span> {brand} – Suman Tyres Gandhinagar
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    {keywords.map((kw) => (
                      <div
                        key={kw}
                        className={`flex items-center gap-2 rounded-lg border px-3 py-2.5 text-xs font-medium transition-all duration-150 ${color}`}
                      >
                        <span className={`font-bold ${accent}`}>{icon}</span> {kw}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Services & Keywords ── */}
          <section aria-labelledby="services-heading">
            <h2
              id="services-heading"
              className="text-2xl font-bold text-gray-900 border-l-4 border-red-600 pl-4 mb-6"
            >
              🔧 Our Services in Gandhinagar
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {services.map((s) => (
                <div
                  key={s}
                  className="flex items-center gap-2 rounded-lg bg-gray-50 border border-gray-200 px-4 py-3 text-sm text-gray-800 font-medium hover:bg-red-50 hover:border-red-300 transition-all duration-150"
                >
                  <span className="text-red-600 font-bold">✓</span> {s}
                </div>
              ))}
            </div>
          </section>

          {/* ── Battery Keywords ── */}
          <section aria-labelledby="battery-heading">
            <h2
              id="battery-heading"
              className="text-2xl font-bold text-gray-900 border-l-4 border-green-600 pl-4 mb-6"
            >
              🔋 Battery Services & Keywords – Gandhinagar
            </h2>
            <p className="text-gray-600 mb-5 text-sm">
              Suman Tyres is an authorised dealer of <strong>Exide</strong> and <strong>Amaron</strong> batteries in Gandhinagar. We offer car battery replacement, bike battery replacement, battery charging, dead battery swap and old battery exchange. Serving Sector 11, Randesan, Kudasan, Sargasan, GIFT City & all of Gandhinagar.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {batteryKeywords.map((kw) => (
                <div
                  key={kw}
                  className="flex items-center gap-2 rounded-lg bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-900 font-medium hover:bg-green-100 hover:border-green-400 transition-all duration-150"
                >
                  <span className="text-green-600 font-bold">🔋</span> {kw}
                </div>
              ))}
            </div>
          </section>

          {/* ── Engine Oil Keywords ── */}
          <section aria-labelledby="oil-heading">
            <h2
              id="oil-heading"
              className="text-2xl font-bold text-gray-900 border-l-4 border-amber-500 pl-4 mb-6"
            >
              🛢️ Engine Oil Services & Keywords – Gandhinagar
            </h2>
            <p className="text-gray-600 mb-5 text-sm">
              Suman Tyres is a trusted dealer for <strong>Castrol, Mobil, Shell Helix, Motul, Gulf, HP Lubricants</strong> and more in Gandhinagar. We offer engine oil change, gear oil, brake fluid, coolant and all types of lubricants for cars and bikes. Fast service at Sector 11, Gandhinagar.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {engineOilKeywords.map((kw) => (
                <div
                  key={kw}
                  className="flex items-center gap-2 rounded-lg bg-amber-50 border border-amber-200 px-4 py-3 text-sm text-amber-900 font-medium hover:bg-amber-100 hover:border-amber-400 transition-all duration-150"
                >
                  <span className="text-amber-600 font-bold">🛢️</span> {kw}
                </div>
              ))}
            </div>
          </section>

          {/* ── Local Areas Served ── */}
          <section aria-labelledby="areas-heading">
            <h2
              id="areas-heading"
              className="text-2xl font-bold text-gray-900 border-l-4 border-red-600 pl-4 mb-6"
            >
              📍 Areas We Serve – Gandhinagar & Nearby
            </h2>
            <p className="text-gray-600 mb-5 text-sm">
              Suman Tyres is conveniently located in Sector 11, Gandhinagar and serves customers from across Gandhinagar, Ahmedabad and all surrounding localities.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {localAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 rounded-lg bg-blue-50 border border-blue-100 px-4 py-3 text-sm text-blue-900 font-medium hover:bg-blue-100 transition-all duration-150"
                >
                  <span className="text-blue-600">📌</span> {area}
                </div>
              ))}
            </div>
          </section>

          {/* ── Long-tail Keywords (SEO) ── */}
          <section aria-labelledby="keywords-heading">
            <h2
              id="keywords-heading"
              className="text-2xl font-bold text-gray-900 border-l-4 border-red-600 pl-4 mb-6"
            >
              🔍 What People Search For – Find Us Easily
            </h2>
            <p className="text-gray-600 mb-5 text-sm">
              Whether you are searching for a tyre shop near me, car battery dealer, or engine oil shop in Gandhinagar – Suman Tyres is your one-stop solution since 1997.
            </p>
            <div className="flex flex-wrap gap-2">
              {longTailKeywords.map((kw) => (
                <span
                  key={kw}
                  className="bg-gray-100 border border-gray-300 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full hover:bg-red-100 hover:border-red-400 hover:text-red-800 transition-colors duration-150"
                >
                  {kw}
                </span>
              ))}
            </div>
          </section>

          {/* ── Business Info Card ── */}
          <section
            aria-labelledby="business-info-heading"
            style={{
              background: "linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)",
            }}
            className="rounded-2xl p-8 text-white"
          >
            <h2 id="business-info-heading" className="text-2xl font-bold mb-6 text-yellow-400">
              🏪 Suman Tyres – Business Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm">
              <div>
                <h3 className="text-yellow-300 font-semibold mb-2">📍 Address</h3>
                <p>Sector 11, Suman Tower,</p>
                <p>Near Cinemax, Gandhinagar,</p>
                <p>Gujarat – 382011, India</p>
              </div>
              <div>
                <h3 className="text-yellow-300 font-semibold mb-2">📞 Contact</h3>
                <p>
                  Phone:{" "}
                  <a href="tel:+919426636250" className="underline hover:text-yellow-300">
                    +91 9426636250
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a href="mailto:sumantyres@gmail.com" className="underline hover:text-yellow-300">
                    sumantyres@gmail.com
                  </a>
                </p>
                <p>Website: sumantyres.in</p>
              </div>
              <div>
                <h3 className="text-yellow-300 font-semibold mb-2">🕐 Opening Hours</h3>
                <p>Mon – Sat: 9:00 AM – 8:00 PM</p>
                <p>Sunday: 9:00 AM – 4:00 PM</p>
                <p className="mt-2 text-green-400 font-semibold">⭐ Rating: 4.4 / 5</p>
                <p className="text-gray-300">Est. Since 1997 · 20,000+ Customers</p>
              </div>
            </div>
          </section>

          {/* ── FAQ Section for SEO ── */}
          <section aria-labelledby="faq-heading">
            <h2
              id="faq-heading"
              className="text-2xl font-bold text-gray-900 border-l-4 border-red-600 pl-4 mb-6"
            >
              ❓ Frequently Asked Questions
            </h2>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "Where is Suman Tyres located in Gandhinagar?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Suman Tyres is located at Sector 11, Suman Tower, Near Cinemax, Gandhinagar, Gujarat – 382011.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What are the best tyre brands available at Suman Tyres Gandhinagar?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Suman Tyres stocks all leading tyre brands including MRF, Apollo, CEAT, Bridgestone, Michelin, JK Tyre, Goodyear, and Yokohama.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Does Suman Tyres offer wheel alignment and balancing in Gandhinagar?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, Suman Tyres offers professional wheel alignment, balancing, puncture repair, nitrogen filling and alloy wheel fitting services in Gandhinagar.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Which battery brands are available at Suman Tyres?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Suman Tyres is an authorised dealer for Exide and Amaron batteries for cars and bikes in Gandhinagar.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What is the phone number of Suman Tyres Gandhinagar?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "You can reach Suman Tyres at +91 9426636250. They are open Monday to Saturday 9:00 AM – 8:00 PM and Sunday 9:00 AM – 4:00 PM.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Does Suman Tyres serve areas near Randesan, Kudasan and GIFT City?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, Suman Tyres serves customers from Randesan, Raysan, Kudasan, Sargasan, PDPU, GIFT City, Koba, Vavol, Por, Adalaj, Palaj and all of Gandhinagar.",
                      },
                    },
                  ],
                }),
              }}
            />
            <div className="space-y-4">
              {[
                {
                  q: "Where is Suman Tyres located in Gandhinagar?",
                  a: "Suman Tyres is located at Sector 11, Suman Tower, Near Cinemax, Gandhinagar, Gujarat – 382011.",
                },
                {
                  q: "What tyre brands are available at Suman Tyres?",
                  a: "We stock Apollo, CEAT, Bridgestone, Michelin, JK Tyre, Goodyear and many more.",
                },
                {
                  q: "Which battery brands does Suman Tyres carry?",
                  a: "We are an authorised dealer for Exide and Amaron batteries for cars and bikes.",
                },
                {
                  q: "What areas near Gandhinagar does Suman Tyres serve?",
                  a: "We serve Randesan, Raysan, Kudasan, Sargasan, PDPU, GIFT City, Koba, Vavol, Por, Adalaj, Palaj, Lavarpur, Shahpur, Dhodakuva and all of Gandhinagar & Ahmedabad.",
                },
              ].map(({ q, a }) => (
                <details
                  key={q}
                  className="group rounded-xl border border-gray-200 bg-gray-50 overflow-hidden"
                >
                  <summary className="flex justify-between items-center cursor-pointer px-5 py-4 font-semibold text-gray-900 hover:bg-red-50 hover:text-red-700 transition-colors duration-150 list-none">
                    {q}
                    <span className="ml-4 text-red-600 group-open:rotate-45 transition-transform duration-200 text-xl font-bold">+</span>
                  </summary>
                  <p className="px-5 pb-4 text-gray-700 text-sm leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </section>

        </main>

        <WhatsAppButton />
        <Footer />
      </div>
    </>
  );
}
