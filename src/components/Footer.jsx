"use client";

import React, { useState } from "react";
import Link from "next/link";

import {
  LogoFacebook,
  CircleNumber2,
  LogoTelegram,
  LogoLinkedin,
  BookOpen,
} from "@gravity-ui/icons";

import {
  Check,
  Loader2,
  ArrowUpRight,
  Mail,
  MapPin,
  Heart,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Footer Links
  const footerLinks = {
    quickLinks: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "How It Works", href: "/how-it-works" },
    ],

    categories: [
      { label: "Fiction", href: "/books?category=Fiction" },
      { label: "Sci-Fi", href: "/books?category=Sci-Fi" },
      { label: "Academic", href: "/books?category=Academic" },
      { label: "Self-Help", href: "/books?category=Self-Help" },
      { label: "Romance", href: "/books?category=Romance" },
    ],

    support: [
      { label: "Help Center", href: "/help" },
      { label: "Shipping Info", href: "/shipping" },
      { label: "Returns", href: "/returns" },
      { label: "FAQ", href: "/faq" },
    ],
  };

  // Social Links
  const socialLinks = [
    {
      icon: <LogoFacebook className="h-4 w-4" />,
      href: "#",
      label: "Facebook",
    },
    {
      icon: <CircleNumber2 className="h-4 w-4" />,
      href: "#",
      label: "Twitter",
    },
    {
      icon: <LogoTelegram className="h-4 w-4" />,
      href: "#",
      label: "Telegram",
    },
    {
      icon: <LogoLinkedin className="h-4 w-4" />,
      href: "#",
      label: "LinkedIn",
    },
  ];

  // Newsletter Subscribe
  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      return;
    }

    setIsSubmitting(true);

    // Console data
    console.log("Newsletter Subscription:", {
      email: email.trim(),
      subscribedAt: new Date().toISOString(),
    });

    // Demo loading animation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);

      // Reset input
      setEmail("");

      // Hide success message after 4 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 4000);
    }, 1200);
  };

  return (
    <footer className="w-full overflow-hidden bg-[#04081f] font-sans text-slate-300">
      {/* =====================================================
          NEWSLETTER SECTION
      ===================================================== */}
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#0c1033] via-[#11164a] to-[#0c1033]">
        {/* Background Decoration */}
        <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-indigo-600/20 blur-3xl" />

        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-14 lg:px-8 lg:py-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Newsletter Text */}
            <motion.div
              initial={{
                opacity: 0,
                x: -25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
              }}
              className="max-w-xl"
            >
              {/* Badge */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1.5 text-xs font-semibold text-indigo-300">
                <Mail className="h-3.5 w-3.5" />

                Newsletter
              </div>

              {/* Heading */}
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                Stay Updated with{" "}
                <span className="text-indigo-400">New Books</span>
              </h2>

              {/* Description */}
              <p className="mt-3 max-w-md text-sm leading-6 text-slate-400 sm:text-base">
                Subscribe to discover new arrivals, exclusive offers and
                interesting books delivered straight to your inbox.
              </p>
            </motion.div>

            {/* Newsletter Form */}
            <motion.form
              onSubmit={handleSubscribe}
              initial={{
                opacity: 0,
                x: 25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
              }}
              className="w-full lg:max-w-xl"
            >
              <AnimatePresence mode="wait">
                {!isSubscribed ? (
                  <motion.div
                    key="form"
                    initial={{
                      opacity: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.96,
                    }}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-2 shadow-2xl backdrop-blur-xl"
                  >
                    <div className="flex flex-col gap-2 sm:flex-row">
                      {/* Email Input */}
                      <div className="relative flex-1">
                        <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />

                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email address"
                          className="h-12 w-full rounded-xl border border-transparent bg-[#080d2c] pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500/60 focus:ring-4 focus:ring-indigo-500/10"
                        />
                      </div>

                      {/* Subscribe Button */}
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{
                          scale: isSubmitting ? 1 : 1.02,
                        }}
                        whileTap={{
                          scale: isSubmitting ? 1 : 0.97,
                        }}
                        className="flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 px-6 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:from-indigo-500 hover:to-blue-500 disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />

                            Subscribing...
                          </>
                        ) : (
                          <>
                            Subscribe

                            <ArrowUpRight className="h-4 w-4" />
                          </>
                        )}
                      </motion.button>
                    </div>
                  </motion.div>
                ) : (
                  /* =================================================
                     SUCCESS MESSAGE
                  ================================================= */
                  <motion.div
                    key="success"
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }}
                    className="flex min-h-[68px] items-center gap-4 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-5 py-3 backdrop-blur-xl"
                  >
                    {/* Animated Check */}
                    <motion.div
                      initial={{
                        scale: 0,
                      }}
                      animate={{
                        scale: 1,
                      }}
                      transition={{
                        delay: 0.15,
                        type: "spring",
                        stiffness: 250,
                      }}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/20"
                    >
                      <Check className="h-5 w-5" />
                    </motion.div>

                    {/* Success Text */}
                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        You&apos;re subscribed! 🎉
                      </h3>

                      <p className="mt-0.5 text-xs text-emerald-300/80">
                        Thanks for joining the BiblioDrop community.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Small Text */}
              <p className="mt-3 px-1 text-[11px] text-slate-500">
                No spam. Just books, updates and useful recommendations.
              </p>
            </motion.form>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 pb-8 pt-14 sm:px-6 lg:px-8 lg:pt-16">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            {/* =================================================
                BRAND
            ================================================= */}
            <div className="lg:col-span-4">
              {/* Logo */}
              <Link
                href="/"
                className="group inline-flex items-center gap-3"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600/10 text-indigo-400 ring-1 ring-indigo-500/20 transition duration-300 group-hover:bg-indigo-600 group-hover:text-white">
                  <BookOpen className="h-6 w-6" />
                </div>

                <span className="text-xl font-bold tracking-tight text-white">
                  Biblio<span className="text-indigo-400">Drop</span>
                </span>
              </Link>

              {/* Description */}
              <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
                Your Local Library, Delivered. Connecting readers with books,
                local libraries and independent book owners.
              </p>

              {/* Location */}
              <div className="mt-5 flex items-center gap-2 text-xs text-slate-500">
                <MapPin className="h-4 w-4 text-indigo-400" />

                Dhaka, Bangladesh
              </div>

              {/* Social Icons */}
              <div className="mt-6 flex items-center gap-2.5">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{
                      y: -3,
                    }}
                    whileTap={{
                      scale: 0.94,
                    }}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition-all duration-300 hover:border-indigo-500/40 hover:bg-indigo-600 hover:text-white"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* =================================================
                QUICK LINKS
            ================================================= */}
            <div className="lg:col-span-2">
              <h3 className="mb-5 text-sm font-semibold text-white">
                Quick Links
              </h3>

              <ul className="space-y-3">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-xs font-medium text-slate-500 transition-colors duration-200 hover:text-indigo-400 sm:text-sm"
                    >
                      {link.label}

                      <ArrowUpRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* =================================================
                CATEGORIES
            ================================================= */}
            <div className="lg:col-span-3">
              <h3 className="mb-5 text-sm font-semibold text-white">
                Categories
              </h3>

              <ul className="space-y-3">
                {footerLinks.categories.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-xs font-medium text-slate-500 transition-colors duration-200 hover:text-indigo-400 sm:text-sm"
                    >
                      {link.label}

                      <ArrowUpRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* =================================================
                SUPPORT
            ================================================= */}
            <div className="lg:col-span-3">
              <h3 className="mb-5 text-sm font-semibold text-white">
                Support
              </h3>

              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-xs font-medium text-slate-500 transition-colors duration-200 hover:text-indigo-400 sm:text-sm"
                    >
                      {link.label}

                      <ArrowUpRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* =====================================================
              BOTTOM BAR
          ===================================================== */}
          <div className="mt-12 flex flex-col gap-5 border-t border-white/[0.07] pt-7 sm:flex-row sm:items-center sm:justify-between">
            {/* Copyright */}
            <p className="text-center text-xs text-slate-600 sm:text-left">
              © {currentYear} BiblioDrop. All rights reserved.
            </p>

            {/* Payment Methods */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {/* Stripe */}
              <div className="rounded-md border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-slate-300">
                stripe
              </div>

              {/* Visa */}
              <div className="rounded-md border border-white/10 bg-white px-3 py-1.5 text-[10px] font-black italic text-[#1a1f71]">
                VISA
              </div>

              {/* Mastercard */}
              <div className="flex items-center rounded-md border border-white/10 bg-white px-2.5 py-1.5">
                <span className="h-3 w-3 rounded-full bg-[#eb001b]" />

                <span className="-ml-1.5 h-3 w-3 rounded-full bg-[#ff5f00] opacity-90" />
              </div>

              {/* PayPal */}
              <div className="rounded-md border border-white/10 bg-white px-3 py-1.5 text-xs font-extrabold italic text-[#003087]">
                Pay<span className="text-[#0079c1]">Pal</span>
              </div>
            </div>
          </div>

          {/* Made With */}
          <div className="mt-5 flex items-center justify-center gap-1 text-[10px] text-slate-700">
            Made with
            <Heart className="h-3 w-3 fill-current text-indigo-500" />
            for book lovers
          </div>
        </div>
      </section>
    </footer>
  );
}