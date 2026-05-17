'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What types of services do you offer?",
    answer: "We offer a comprehensive range of automotive services including premium tyre sales and replacement, car and bike battery replacement (with on-the-spot jump-start service), and high-quality engine oil changes for all types of vehicles."
  },
  {
    question: "Do you provide emergency car battery replacement?",
    answer: "Yes! We provide emergency car battery replacement and jump-start services. Our technicians can be dispatched to your location in Gandhinagar quickly to get you back on the road."
  },
  {
    question: "Where is Suman Tyres located?",
    answer: "We are conveniently located in Sector 11, Gandhinagar, Gujarat. We serve customers from Gandhinagar, Ahmedabad, Vavol, Dhodakuva, and surrounding areas."
  },
  {
    question: "Which tyre and battery brands do you sell?",
    answer: "We are an authorized dealer for top tyre brands like Ceat, Michelin, Bridgestone, Apollo, and JK. For batteries, we stock reliable brands like Amaron and Exide."
  },
  {
    question: "Do you offer wholesale prices for Tyres, Engine oils and Batteries?",
    answer: "Absolutely. We offer highly competitive, wholesale pricing on premium Tyres, Engine oils and Batteries for all types of vehicles."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-amber-500">Questions</span>
          </h2>
          <div className="w-24 h-1.5 bg-rose-600 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 text-lg">
            Find answers to common questions about our tyres, batteries, and engine oil services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index
                ? 'border-rose-300 shadow-md bg-rose-50/30'
                : 'border-gray-200 hover:border-gray-300 bg-white'
                }`}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-slate-800 text-lg pr-4">{faq.question}</span>
                <div className={`p-2 rounded-full flex-shrink-0 transition-colors ${openIndex === index ? 'bg-rose-100 text-rose-600' : 'bg-gray-100 text-gray-500'}`}>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-gray-100 pt-4 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
