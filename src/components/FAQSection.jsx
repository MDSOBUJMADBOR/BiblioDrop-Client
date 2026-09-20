"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    id: "01",
    category: "GENERAL",
    question: "What is BiblioDrop?",
    answer:
      "BiblioDrop is a book discovery and delivery platform that connects readers with local libraries and independent book owners. It makes discovering, requesting, and accessing books simple and convenient.",
  },
  {
    id: "02",
    category: "GENERAL",
    question: "How does BiblioDrop work?",
    answer:
      "You can browse available books, explore different categories, select a book, and send a request. Once your request is processed, you can receive the book through the available delivery service.",
  },
  {
    id: "03",
    category: "BOOKS",
    question: "How can I find a book?",
    answer:
      "Visit the Browse Books page to explore our collection. You can search for books and use categories to find books based on your interests, such as Fiction, Academic, Sci-Fi, Romance, and Self-Help.",
  },
  {
    id: "04",
    category: "BOOKS",
    question: "What types of books are available?",
    answer:
      "BiblioDrop offers a growing collection of books across different categories including Fiction, Sci-Fi, Academic, Self-Help, Romance, History, Science, Technology, and more.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-[#f8fafc] px-5 py-20 sm:px-6 md:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-[950px]">

        {/* =========================
            SECTION HEADER
        ========================== */}
        <div className="mb-11 text-center sm:mb-12">

          {/* Small Heading */}
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-blue-600 sm:text-[13px]">
            Help Center
          </p>

          {/* Main Heading */}
          <h2 className="text-3xl font-bold tracking-[-0.03em] text-slate-950 sm:text-4xl md:text-[40px]">
            Everything You Need to Know
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-[700px] text-sm leading-6 text-slate-600 sm:text-base">
            Browse our most common questions and find the information you need
            about the BiblioDrop experience.
          </p>
        </div>

        {/* =========================
            FAQ LIST
        ========================== */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.id}
                className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-blue-200 shadow-md"
                    : "border-slate-200 shadow-[0_2px_5px_rgba(15,23,42,0.08)]"
                }`}
              >
                {/* FAQ HEADER */}
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6 sm:py-6"
                >
                  {/* Number */}
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-medium transition-all duration-300 sm:h-10 sm:w-10 ${
                      isOpen
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {faq.id}
                  </div>

                  {/* Question Content */}
                  <div className="min-w-0 flex-1">

                    {/* Category */}
                    <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-blue-600 sm:text-xs">
                      {faq.category}
                    </p>

                    {/* Question */}
                    <h3 className="text-base font-medium text-slate-950 sm:text-lg">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Chevron */}
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:h-10 sm:w-10 ${
                      isOpen
                        ? "rotate-180 border-blue-200 bg-blue-50 text-blue-600"
                        : "border-slate-200 bg-white text-slate-500"
                    }`}
                  >
                    <ChevronDown size={18} strokeWidth={1.8} />
                  </div>
                </button>

                {/* =========================
                    ANSWER
                ========================== */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-slate-100 px-5 pb-6 pt-5 sm:px-6 sm:pb-7 sm:pl-[76px]">
                      <p className="max-w-[750px] text-sm leading-7 text-slate-600 sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;