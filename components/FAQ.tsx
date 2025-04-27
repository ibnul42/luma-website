"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "What is your return policy?",
    answer:
      "You can return any item within 30 days of purchase for a full refund.",
  },
  {
    question: "Do you offer technical support?",
    answer: "Yes, we offer 24/7 technical support through email and live chat.",
  },
  {
    question: "Where are you located?",
    answer:
      "Our main office is located in New York City, but we serve customers worldwide.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-3 py-5 text-black">
      <h2 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border rounded-xl overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex gap-3 items-center p-4 bg-gray-100 hover:bg-gray-200 transition font-bold text-left"
            >
              <span className="py-2 px-8 bg-black rounded-xl overflow-hidden flex items-center justify-center text-white">
                {index + 1}
              </span>
              {item.question}
              {/* <span>{openIndex === index ? '-' : '+'}</span> */}
            </button>
            <div
              className={`px-4 bg-white text-gray-700 overflow-hidden transition-all ease-in-out ${
                openIndex === index ? "max-h-fit py-4" : "max-h-0 py-0"
              }`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
