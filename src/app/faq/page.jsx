"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import {
  Search,
  ChevronDown,
  BookOpen,
  Truck,
  UserRound,
  CreditCard,
  MessageCircle,
  HelpCircle,
  Mail,
  ArrowRight,
} from "lucide-react";

const faqData = [
  {
    id: 1,
    category: "General",
    question: "What is BiblioDrop?",
    answer:
      "BiblioDrop is a book discovery and delivery platform that connects readers with local libraries and independent book owners. You can discover books, request available books, and enjoy a convenient delivery experience.",
  },
  {
    id: 2,
    category: "General",
    question: "How does BiblioDrop work?",
    answer:
      "Simply browse the available books, choose a book you are interested in, check its details and availability, and submit your request. Once your request is processed, the book can be delivered to your preferred location.",
  },
  {
    id: 3,
    category: "Books",
    question: "How can I find a book?",
    answer:
      "You can visit the Browse Books page and explore books by category. You can also use the available search and filtering options to find a specific title, author, or type of book.",
  },
  {
    id: 4,
    category: "Books",
    question: "What types of books are available?",
    answer:
      "BiblioDrop offers books across multiple categories including Fiction, Sci-Fi, Academic, Self-Help, Romance, History, Science, Technology, and more.",
  },
  {
    id: 5,
    category: "Books",
    question: "Can I request a book that is not currently available?",
    answer:
      "Yes. If you cannot find the book you are looking for, you can contact our support team and let us know the title and author. We can help you check whether it may become available.",
  },
  {
    id: 6,
    category: "Delivery",
    question: "Do you provide home delivery?",
    answer:
      "Yes. BiblioDrop is designed to make book access more convenient by connecting readers with available books and providing a convenient delivery experience.",
  },
  {
    id: 7,
    category: "Delivery",
    question: "How long does delivery take?",
    answer:
      "Delivery time may vary depending on the book's availability, location, and delivery arrangements. You can contact our support team for more information about a specific request.",
  },
  {
    id: 8,
    category: "Delivery",
    question: "Do you deliver outside Dhaka?",
    answer:
      "Our availability may depend on the location and delivery service for a particular book. Please contact us with your location and book details so we can provide the most accurate information.",
  },
  {
    id: 9,
    category: "Account",
    question: "Do I need an account to browse books?",
    answer:
      "You can browse and explore the available books without creating an account. However, creating an account may be required for certain features such as requesting books or managing your account activity.",
  },
  {
    id: 10,
    category: "Account",
    question: "How do I create an account?",
    answer:
      "Click the Register button from the navigation menu and complete the registration form with your required information. Once registration is complete, you can sign in to your account.",
  },
  {
    id: 11,
    category: "Account",
    question: "I forgot my password. What should I do?",
    answer:
      "If you have forgotten your password, use the password recovery option on the sign-in page. Follow the instructions provided to recover access to your account.",
  },
  {
    id: 12,
    category: "Payment",
    question: "What payment methods are supported?",
    answer:
      "Payment options may depend on the specific order and service. BiblioDrop supports secure payment processing and may provide options such as card-based payments and other available methods.",
  },
  {
    id: 13,
    category: "Payment",
    question: "Is online payment secure?",
    answer:
      "Yes. Payment information should be processed through secure payment infrastructure. BiblioDrop does not need to store sensitive payment information directly on the application.",
  },
  {
    id: 14,
    category: "Support",
    question: "How can I contact BiblioDrop support?",
    answer:
      "You can contact our support team through the Contact Us page. You can send us your name, email, subject, and message, and our team will get back to you as soon as possible.",
  },
  {
    id: 15,
    category: "Support",
    question: "How quickly will I receive a response?",
    answer:
      "Our support team generally aims to respond within 24 hours. Response time may vary depending on the type and complexity of your request.",
  },
];

const categories = [
  {
    name: "All",
    icon: HelpCircle,
  },
  {
    name: "General",
    icon: BookOpen,
  },
  {
    name: "Books",
    icon: BookOpen,
  },
  {
    name: "Delivery",
    icon: Truck,
  },
  {
    name: "Account",
    icon: UserRound,
  },
  {
    name: "Payment",
    icon: CreditCard,
  },
  {
    name: "Support",
    icon: MessageCircle,
  },
];

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeFaq, setActiveFaq] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = useMemo(() => {
    return faqData.filter((faq) => {
      const matchesCategory =
        activeCategory === "All" || faq.category === activeCategory;

      const searchText = searchTerm.toLowerCase().trim();

      const matchesSearch =
        !searchText ||
        faq.question.toLowerCase().includes(searchText) ||
        faq.answer.toLowerCase().includes(searchText) ||
        faq.category.toLowerCase().includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const toggleFaq = (id) => {
    setActiveFaq((prev) => (prev === id ? null : id));
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* =========================
          HERO SECTION
      ========================== */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm text-slate-400">
            <Link
              href="/"
              className="transition hover:text-white"
            >
              Home
            </Link>

            <span>/</span>

            <span className="text-white">FAQ</span>
          </div>

          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur">
              <HelpCircle size={17} />
              BiblioDrop Support
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Frequently Asked
              <span className="block text-blue-400">Questions</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Find quick answers about books, requests, delivery, accounts,
              payments, and everything you need to know about BiblioDrop.
            </p>

            {/* Search */}
            <div className="mx-auto mt-10 max-w-2xl">
              <div className="group flex items-center rounded-2xl border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur-xl transition focus-within:border-blue-400/40">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center text-slate-400">
                  <Search size={21} />
                </div>

                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search your question..."
                  className="h-12 w-full bg-transparent px-2 text-sm text-white outline-none placeholder:text-slate-500 sm:text-base"
                />

                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="mr-2 rounded-lg px-3 py-2 text-sm text-slate-400 transition hover:bg-white/10 hover:text-white"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          CATEGORY SECTION
      ========================== */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-6 sm:px-8 lg:px-10">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.name;

              return (
                <button
                  key={category.name}
                  onClick={() => {
                    setActiveCategory(category.name);
                    setActiveFaq(null);
                  }}
                  className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "border-slate-900 bg-slate-900 text-white shadow-md"
                      : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <Icon size={16} />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================
          FAQ CONTENT
      ========================== */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          {/* Section Heading */}
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Help Center
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Everything You Need to Know
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              Browse our most common questions and find the information you
              need about the BiblioDrop experience.
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => {
                const isOpen = activeFaq === faq.id;

                return (
                  <div
                    key={faq.id}
                    className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                      isOpen
                        ? "border-slate-300 shadow-lg shadow-slate-200/60"
                        : "border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(faq.id)}
                      className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-semibold transition ${
                          isOpen
                            ? "bg-slate-900 text-white"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="mb-1 text-xs font-medium uppercase tracking-wider text-blue-600">
                          {faq.category}
                        </div>

                        <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                          {faq.question}
                        </h3>
                      </div>

                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "rotate-180 border-slate-900 bg-slate-900 text-white"
                            : "border-slate-200 bg-white text-slate-500"
                        }`}
                      >
                        <ChevronDown size={18} />
                      </div>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-slate-100 px-5 pb-6 pt-5 pl-[4.75rem] sm:px-6 sm:pl-[4.75rem]">
                          <p className="max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              /* Empty State */
              <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-500">
                  <Search size={28} />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-slate-900">
                  No questions found
                </h3>

                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                  We could not find any FAQ matching your search. Try another
                  keyword or browse all categories.
                </p>

                <button
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("All");
                  }}
                  className="mt-6 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  View All Questions
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================
          CONTACT CTA
      ========================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
            {/* Decorative Elements */}
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-2xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                  <MessageCircle size={17} />
                  Still have questions?
                </div>

                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  We’re here to help.
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                  Can not find the answer you are looking for? Send us a message
                  and our support team will help you with your questions.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button
                  as={Link}
                  href="/contact"
                  size="lg"
                  className="h-12 rounded-xl bg-white px-6 font-semibold text-slate-900 shadow-lg hover:bg-slate-100"
                  endContent={<ArrowRight size={18} />}
                >
                  Contact Us
                </Button>

                <Button
                  as={Link}
                  href="/books"
                  size="lg"
                  variant="bordered"
                  className="h-12 rounded-xl border-white/20 px-6 font-semibold text-white hover:bg-white/10"
                  startContent={<BookOpen size={18} />}
                >
                  Browse Books
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          QUICK SUPPORT
      ========================== */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10">
          <div className="grid gap-5 md:grid-cols-2">
            {/* Email */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Mail size={21} />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Email Support
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Send us your questions anytime and our support team will
                    get back to you.
                  </p>

                  <a
                    href="mailto:sobujmadbor660@gmail.com"
                    className="mt-3 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700"
                  >
                    sobujmadbor660@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                  <MessageCircle size={21} />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Contact Our Team
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Need help with a book, delivery, account, or payment?
                    We are happy to help.
                  </p>

                  <Link
                    href="/contact"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-slate-900 hover:text-blue-600"
                  >
                    Get in touch
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQPage;