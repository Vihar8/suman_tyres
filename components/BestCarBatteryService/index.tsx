// import React from 'react';
// import Image from 'next/image';

// const BestCarBatteryService: React.FC = () => {
//   return (
//     <div className="service-container">
//       {/* Top Hero Section */}
//       <div className="hero-section">
//         <div className="service-content">
//           <h2>
//             Best Car Battery Replacement Service in Gandhinagar{' '}
//             <span className="text-brand">- Suman Tyres</span>
//           </h2>
//           <p>
//             Are you turning the key or pushing the start button only to be met with complete silence? If your dashboard lights are flickering, fail to illuminate entirely, or you do not hear your engine cranking, it is highly probable that your car battery is dead.
//           </p>
//           <p>
//             {"At Suman Tyres, we have trained battery technicians that can be dispatched to your location in no time. Once they reach your location, they will diagnose your car battery and replace your battery on the spot if needed. Getting stranded with a dead battery is frustrating, but you don't have to worry about towing your vehicle to a workshop. At Suman Tyres, we bring the garage to you. We provide the fastest and most reliable on-site car battery replacement service in Gandhinagar."}
//           </p>
//           <a href="tel:9426636250" className="call-now-link">
//             <button className="call-now-button">
//               <span className="phone-icon">📞</span> Call Now — +91 9426636250
//             </button>
//           </a>
//         </div>
//         <div className="service-image">
//           <Image
//             src="/batteryreplacementservice.webp"
//             alt="Car Battery Replacement Service Gandhinagar"
//             width={550}
//             height={350}
//             style={{ width: '100%', height: 'auto', borderRadius: '16px', objectFit: 'cover' }}
//             priority
//           />
//         </div>
//       </div>

//       {/* Section 1: Why Choose Us */}
//       <div className="section-divider"></div>
//       <div className="why-choose-section">
//         <h3>Why Choose Suman Tyres for Your Car Battery Needs?</h3>
//         <p className="section-intro">
//           {"Established in 1997, Suman Tyres has been Gandhinagar’s trusted partner for automotive needs for nearly three decades. Conveniently located at Suman Tower in Sector 11, we combine decades of expertise with modern, high-speed roadside assistance."}
//         </p>
//         <div className="features-grid">
//           <div className="feature-card">
//             <div className="feature-icon">⚡</div>
//             <div className="feature-text">
//               <h4>Rapid Doorstep Dispatch</h4>
//               <p>{"You don’t need to drag your vehicle to Sector 11. Once you call us, our professional battery technicians are dispatched to your exact location in no time."}</p>
//             </div>
//           </div>
//           <div className="feature-card">
//             <div className="feature-icon">🛠️</div>
//             <div className="feature-text">
//               <h4>Accurate On-Spot Diagnosis</h4>
//               <p>{"Sometimes, the issue isn't a dead battery—it could be a loose terminal or an alternator issue. Our team runs a complete diagnostic check before recommending a change."}</p>
//             </div>
//           </div>
//           <div className="feature-card">
//             <div className="feature-icon">🔋</div>
//             <div className="feature-text">
//               <h4>100% Genuine Brands with Warranty</h4>
//               <p>We are authorized dealers for India’s most dependable battery brands, including Amaron and Exide. Every battery comes with an official manufacturer warranty and clear paper trails.</p>
//             </div>
//           </div>
//           <div className="feature-card">
//             <div className="feature-icon">🔄</div>
//             <div className="feature-text">
//               <h4>Old Battery Exchange Discounts</h4>
//               <p>Trade in your old, dead battery for an instant eco-rebate discount on your new battery installation!</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Section 2: How It Works */}
//       <div className="section-divider"></div>
//       <div className="how-it-works-section">
//         <h3>How Our On-Site Battery Service Works</h3>
//         <p className="section-intro">
//           Our emergency roadside battery replacement is designed to get you back on the road in 4 simple steps:
//         </p>
//         <div className="steps-container">
//           <div className="step-card">
//             <div className="step-number">1</div>
//             <h4>Call Our Hotline</h4>
//             <p>
//               Get in touch with us at{' '}
//               <a href="tel:9426636250" className="phone-link">
//                 +91 9426636250
//               </a>{' '}
//               and share your location in Gandhinagar.
//             </p>
//           </div>
//           <div className="step-card">
//             <div className="step-number">2</div>
//             <h4>Technician Dispatch</h4>
//             <p>A certified specialist is sent out immediately with the correct battery configuration for your vehicle model.</p>
//           </div>
//           <div className="step-card">
//             <div className="step-number">3</div>
//             <h4>Testing & Swapping</h4>
//             <p>{"We test your current battery's health. If it's dead, we replace it on the spot."}</p>
//           </div>
//           <div className="step-card">
//             <div className="step-number">4</div>
//             <h4>Drive Away</h4>
//             <p>Your system is tested post-installation to ensure your alternator is charging correctly.</p>
//           </div>
//         </div>
//       </div>

//       {/* Section 3: Areas We Serve */}
//       <div className="section-divider"></div>
//       <div className="areas-serve-section">
//         <h3>Areas We Serve in Gandhinagar</h3>
//         <p className="section-intro">
//           From our main hub near Cinemax in Sector 11, our mobile battery technicians quickly cover all major sectors and neighboring zones:
//         </p>
//         <div className="areas-grid">
//           <div className="area-badge-group">
//             <span className="area-group-title">Sectors</span>
//             <div className="area-badges">
//               <span>Sector 11</span>
//               <span>Sector 21</span>
//               <span>Sector 24</span>
//               <span>All Surrounding Sectors</span>
//             </div>
//           </div>
//           <div className="area-badge-group">
//             <span className="area-group-title">Key Zones</span>
//             <div className="area-badges">
//               <span>Kudasan</span>
//               <span>Sargasan</span>
//               <span>Raysan</span>
//             </div>
//           </div>
//           <div className="area-badge-group">
//             <span className="area-group-title">Corporate & Residential</span>
//             <div className="area-badges">
//               <span>Randesan</span>
//               <span>GIFT City</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .service-container {
//           max-width: 1200px;
//           margin: 40px auto;
//           padding: 40px;
//           background-color: #ffffff;
//           border: 1px solid #e2e8f0;
//           border-radius: 24px;
//           box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 10px 15px -3px rgba(0, 0, 0, 0.05);
//           font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
//         }
//         .hero-section {
//           display: flex;
//           align-items: center;
//           gap: 40px;
//         }
//         .service-content {
//           flex: 1.2;
//         }
//         .service-image {
//           flex: 0.8;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }
//         h2 {
//           font-size: 32px;
//           font-weight: 800;
//           color: #0f172a;
//           line-height: 1.2;
//           margin-bottom: 20px;
//         }
//         .text-brand {
//           color: #b91c1c;
//         }
//         p {
//           font-size: 16px;
//           line-height: 1.6;
//           color: #475569;
//           margin-bottom: 16px;
//         }
//         .call-now-link {
//           display: inline-block;
//           margin-top: 10px;
//           text-decoration: none;
//         }
//         .call-now-button {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           padding: 14px 28px;
//           font-size: 18px;
//           font-weight: 700;
//           color: #ffffff;
//           background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
//           border: none;
//           border-radius: 12px;
//           cursor: pointer;
//           box-shadow: 0 4px 12px rgba(220, 38, 38, 0.25);
//           transition: all 0.3s ease;
//         }
//         .call-now-button:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 6px 20px rgba(220, 38, 38, 0.35);
//           background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
//         }
//         .call-now-button:active {
//           transform: translateY(0);
//         }
//         .phone-icon {
//           font-size: 20px;
//         }
//         .section-divider {
//           height: 1px;
//           background: #e2e8f0;
//           margin: 40px 0;
//         }
//         h3 {
//           font-size: 24px;
//           font-weight: 700;
//           color: #0f172a;
//           margin-bottom: 12px;
//         }
//         .section-intro {
//           font-size: 16px;
//           color: #475569;
//           margin-bottom: 24px;
//           max-width: 900px;
//         }
//         .features-grid {
//           display: grid;
//           grid-template-columns: repeat(2, 1fr);
//           gap: 24px;
//         }
//         .feature-card {
//           display: flex;
//           gap: 16px;
//           padding: 20px;
//           background-color: #f8fafc;
//           border: 1px solid #f1f5f9;
//           border-radius: 16px;
//           transition: all 0.3s ease;
//         }
//         .feature-card:hover {
//           transform: translateY(-3px);
//           box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
//           border-color: #e2e8f0;
//         }
//         .feature-icon {
//           font-size: 28px;
//           display: flex;
//           align-items: flex-start;
//           padding-top: 2px;
//         }
//         .feature-text h4 {
//           font-size: 18px;
//           font-weight: 700;
//           color: #1e293b;
//           margin: 0 0 8px 0;
//         }
//         .feature-text p {
//           font-size: 14px;
//           margin: 0;
//           color: #64748b;
//           line-height: 1.5;
//         }
//         .steps-container {
//           display: grid;
//           grid-template-columns: repeat(4, 1fr);
//           gap: 20px;
//         }
//         .step-card {
//           position: relative;
//           padding: 24px 20px;
//           background-color: #f8fafc;
//           border: 1px solid #f1f5f9;
//           border-radius: 16px;
//           text-align: center;
//           transition: all 0.3s ease;
//         }
//         .step-card:hover {
//           transform: translateY(-3px);
//           box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
//           border-color: #e2e8f0;
//         }
//         .step-number {
//           width: 40px;
//           height: 40px;
//           background-color: #0f172a;
//           color: #ffffff;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-weight: 700;
//           font-size: 18px;
//           margin: 0 auto 16px auto;
//         }
//         .step-card h4 {
//           font-size: 16px;
//           font-weight: 700;
//           color: #1e293b;
//           margin: 0 0 8px 0;
//         }
//         .step-card p {
//           font-size: 13px;
//           color: #64748b;
//           margin: 0;
//           line-height: 1.5;
//         }
//         .phone-link {
//           color: #dc2626;
//           text-decoration: none;
//           font-weight: 600;
//         }
//         .phone-link:hover {
//           text-decoration: underline;
//         }
//         .areas-grid {
//           display: flex;
//           flex-direction: column;
//           gap: 20px;
//         }
//         .area-badge-group {
//           display: flex;
//           align-items: center;
//           gap: 16px;
//         }
//         .area-group-title {
//           font-size: 14px;
//           font-weight: 700;
//           color: #475569;
//           min-width: 180px;
//           text-transform: uppercase;
//           letter-spacing: 0.05em;
//         }
//         .area-badges {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 10px;
//         }
//         .area-badges span {
//           background-color: #f1f5f9;
//           color: #334155;
//           font-size: 14px;
//           font-weight: 500;
//           padding: 6px 14px;
//           border-radius: 20px;
//           border: 1px solid #e2e8f0;
//         }

//         /* Responsive Styles */
//         @media (max-width: 1024px) {
//           .steps-container {
//             grid-template-columns: repeat(2, 1fr);
//           }
//         }
//         @media (max-width: 768px) {
//           .service-container {
//             padding: 24px;
//             margin: 20px auto;
//             border-radius: 16px;
//           }
//           .hero-section {
//             flex-direction: column-reverse;
//             gap: 24px;
//           }
//           .service-content {
//             padding-right: 0;
//           }
//           h2 {
//             font-size: 26px;
//           }
//           .features-grid {
//             grid-template-columns: 1fr;
//           }
//           .area-badge-group {
//             flex-direction: column;
//             align-items: flex-start;
//             gap: 8px;
//           }
//           .area-group-title {
//             min-width: auto;
//           }
//         }
//         @media (max-width: 480px) {
//           .steps-container {
//             grid-template-columns: 1fr;
//           }
//           .service-container {
//             padding: 16px;
//           }
//           h2 {
//             font-size: 22px;
//           }
//           h3 {
//             font-size: 20px;
//           }
//           .call-now-button {
//             width: 100%;
//             justify-content: center;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default BestCarBatteryService;


import React from 'react';
import Image from 'next/image';
import {
  Zap,
  MapPin,
  PhoneCall,
  ArrowRight,
  ShieldCheck,
  Wrench,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  Clock
} from 'lucide-react';

const BestCarBatteryService: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24 space-y-20 font-sans">

      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-2xl border border-slate-800/80 p-8 md:p-16">
        {/* Decorative ambient glowing backdrops */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Abstract design elements */}
        <div className="absolute top-0 right-0 w-64 h-64 border-r-2 border-t-2 border-slate-700/20 rounded-tr-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 border-l-2 border-b-2 border-slate-700/20 rounded-bl-3xl pointer-events-none"></div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center relative z-10">
          {/* Left: Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-500/10 border border-red-500/30 text-red-400 rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> High-Speed Roadside Assistance
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Best Car Battery Replacement Service in Gandhinagar
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">
                At Suman Tyres
              </span>
            </h2>

            <div className="space-y-4 text-slate-300 text-base md:text-lg leading-relaxed font-medium">
              <p>
                Are you turning the key or pushing the start button only to be met with complete silence? If your dashboard lights are flickering, fail to illuminate entirely, or you do not hear your engine cranking, it is highly probable that your car battery is dead.
              </p>
              <p>
                {"At Suman Tyres, we have trained battery technicians that can be dispatched to your location in no time. Once they reach your location, they will diagnose your car battery and replace your battery on the spot if needed. Getting stranded with a dead battery is frustrating, but you don't have to worry about towing your vehicle to a workshop. At Suman Tyres, we bring the garage to you. We provide the fastest and most reliable on-site car battery replacement service in Gandhinagar."}
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="tel:9426636250"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-red-600 to-rose-600 rounded-2xl shadow-lg shadow-red-900/30 hover:from-red-500 hover:to-rose-500 hover:scale-[1.03] hover:shadow-red-600/40 active:scale-[0.98] transition-all duration-300 group"
              >
                <PhoneCall className="w-5 h-5 group-hover:animate-pulse" />
                Call Now — 9426636250
              </a>
              <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Quick turnaround across Gandhinagar</span>
              </div>
            </div>
          </div>

          {/* Right: Decorative Image frame */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Glowing container */}
            <div className="absolute inset-0 bg-gradient-to-tr from-red-500 to-rose-500 rounded-3xl opacity-20 blur-2xl scale-95"></div>

            <div className="relative border-8 border-slate-700/30 bg-slate-800 shadow-2xl rounded-3xl overflow-hidden group/img w-full max-w-md lg:max-w-full">
              <Image
                src="/batteryreplacementservice.webp"
                alt="Car Battery Replacement Service Gandhinagar Suman Tyres"
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
              <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-md text-white px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 border border-slate-700/50">
                <MapPin className="w-3.5 h-3.5 text-red-500 animate-bounce" /> Sector 11, Gandhinagar
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Suman Tyres Section */}
      <div className="space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose Suman Tyres for Your Car Battery Needs?
          </h3>
          <div className="w-20 h-1 bg-red-600 mx-auto rounded-full"></div>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            {"Established in 1997, Suman Tyres has been Gandhinagar’s trusted partner for automotive needs for nearly three decades. Conveniently located at Suman Tower in Sector 11, we combine decades of expertise with modern, high-speed roadside assistance."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1 */}
          <div className="group bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-slate-200/80 transition-all duration-300 flex gap-6">
            <div className="flex-shrink-0 w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center font-bold text-xl group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
              <Zap className="w-7 h-7" />
            </div>
            <div className="space-y-2 text-left">
              <h4 className="text-xl font-bold text-slate-800 group-hover:text-red-600 transition-colors duration-300">
                Rapid Doorstep Dispatch
              </h4>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                {"You don’t need to drag your vehicle to Sector 11. Once you call us, our professional battery technicians are dispatched to your exact location in no time."}
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-slate-200/80 transition-all duration-300 flex gap-6">
            <div className="flex-shrink-0 w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center font-bold text-xl group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
              <Wrench className="w-7 h-7" />
            </div>
            <div className="space-y-2 text-left">
              <h4 className="text-xl font-bold text-slate-800 group-hover:text-amber-600 transition-colors duration-300">
                Accurate On-Spot Diagnosis
              </h4>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                {"Sometimes, the issue isn't a dead battery—it could be a loose terminal or an alternator issue. Our team runs a complete diagnostic check before recommending a change."}
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-slate-200/80 transition-all duration-300 flex gap-6">
            <div className="flex-shrink-0 w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center font-bold text-xl group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div className="space-y-2 text-left">
              <h4 className="text-xl font-bold text-slate-800 group-hover:text-emerald-600 transition-colors duration-300">
                100% Genuine Brands with Warranty
              </h4>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                We are authorized dealers for India’s most dependable battery brands, including Amaron and Exide. Every battery comes with an official manufacturer warranty and clear paper trails.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-slate-200/80 transition-all duration-300 flex gap-6">
            <div className="flex-shrink-0 w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-bold text-xl group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <RotateCcw className="w-7 h-7" />
            </div>
            <div className="space-y-2 text-left">
              <h4 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                Old Battery Exchange Discounts
              </h4>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                Trade in your old, dead battery for an instant eco-rebate discount on your new battery installation! Save money while supporting responsible recycling.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How Our On-Site Battery Service Works */}
      <div className="space-y-12 bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-16 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-slate-200/50 rounded-full blur-3xl pointer-events-none"></div>

        <div className="text-center max-w-2xl mx-auto space-y-4 relative z-10">
          <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            How Our On-Site Battery Service Works
          </h3>
          <div className="w-16 h-1 bg-red-600 mx-auto rounded-full"></div>
          <p className="text-slate-500 text-base">
            Our emergency roadside battery replacement is designed to get you back on the road in 4 simple steps:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {/* Step 1 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative flex flex-col items-center text-center group">
            <span className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-lg mb-4 shadow-lg shadow-slate-950/20 group-hover:bg-red-600 group-hover:scale-105 transition-all duration-300">
              1
            </span>
            <h4 className="text-lg font-bold text-slate-800 mb-2">Call Our Hotline</h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              Get in touch with us at{' '}
              <a href="tel:9426636250" className="text-red-600 font-extrabold hover:underline whitespace-nowrap">
                +91 9426636250
              </a>{' '}
              and share your location in Gandhinagar.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative flex flex-col items-center text-center group">
            <span className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-lg mb-4 shadow-lg shadow-slate-950/20 group-hover:bg-red-600 group-hover:scale-105 transition-all duration-300">
              2
            </span>
            <h4 className="text-lg font-bold text-slate-800 mb-2">Technician Dispatch</h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              A certified specialist is sent out immediately with the correct battery configuration for your vehicle model.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative flex flex-col items-center text-center group">
            <span className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-lg mb-4 shadow-lg shadow-slate-950/20 group-hover:bg-red-600 group-hover:scale-105 transition-all duration-300">
              3
            </span>
            <h4 className="text-lg font-bold text-slate-800 mb-2">Testing & Swapping</h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              {"We test your current battery's health. If it's dead, we replace it on the spot with a fresh genuine unit."}
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative flex flex-col items-center text-center group">
            <span className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-lg mb-4 shadow-lg shadow-slate-950/20 group-hover:bg-red-600 group-hover:scale-105 transition-all duration-300">
              4
            </span>
            <h4 className="text-lg font-bold text-slate-800 mb-2">Drive Away</h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              Your system is tested post-installation to ensure your alternator is charging correctly.
            </p>
          </div>
        </div>
      </div>

      {/* Areas We Serve in Gandhinagar */}
      <div className="space-y-8 text-left bg-gradient-to-b from-white to-slate-50/50 p-8 rounded-3xl border border-slate-100">
        <div className="space-y-3">
          <h3 className="text-3xl font-extrabold text-slate-900 flex items-center gap-3">
            <MapPin className="w-7 h-7 text-red-600" /> Areas We Serve in Gandhinagar
          </h3>
          <p className="text-slate-500 text-base md:text-lg max-w-4xl">
            From our main hub near Cinemax in Sector 11, our mobile battery technicians quickly cover all major sectors and neighboring zones:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Group 1 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 space-y-4">
            <h4 className="text-base font-extrabold text-slate-950 pb-2 border-b border-slate-100 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-red-600 rounded-full animate-ping"></span> Sectors Covered
            </h4>
            <div className="flex flex-wrap gap-2">
              {['Sector 11', 'Sector 21', 'Sector 24', 'All Surrounding Sectors'].map((area) => (
                <span key={area} className="px-3 py-1.5 bg-slate-50 hover:bg-red-50 hover:text-red-700 hover:border-red-200 border border-slate-100 text-slate-600 rounded-xl text-xs font-semibold transition-all cursor-default">
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Group 2 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 space-y-4">
            <h4 className="text-base font-extrabold text-slate-950 pb-2 border-b border-slate-100 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-amber-500 rounded-full animate-pulse"></span> Key Neighborhoods
            </h4>
            <div className="flex flex-wrap gap-2">
              {['Kudasan', 'Sargasan', 'Raysan', 'Pethapur', 'Vavol'].map((area) => (
                <span key={area} className="px-3 py-1.5 bg-slate-50 hover:bg-amber-50 hover:text-amber-700 hover:border-amber-200 border border-slate-100 text-slate-600 rounded-xl text-xs font-semibold transition-all cursor-default">
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Group 3 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 space-y-4">
            <h4 className="text-base font-extrabold text-slate-950 pb-2 border-b border-slate-100 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-full"></span> Corporate & Residential
            </h4>
            <div className="flex flex-wrap gap-2">
              {['Randesan', 'GIFT City'].map((area) => (
                <span key={area} className="px-3 py-1.5 bg-slate-50 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 border border-slate-100 text-slate-600 rounded-xl text-xs font-semibold transition-all cursor-default">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestCarBatteryService;
