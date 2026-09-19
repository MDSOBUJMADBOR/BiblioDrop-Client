"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  LibraryBig,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const fallbackImage = "https://i.ibb.co/4pDNDk1/avatar.png";

/* =====================================================
   Librarian Card
===================================================== */

const LibrarianCard = ({ librarian }) => {
  return (
    <div className="group relative w-[280px] shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_15px_40px_rgba(79,70,229,0.14)] sm:w-[310px]">
      {/* Decorative Glow */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-indigo-500/10 blur-3xl transition-all duration-500 group-hover:bg-indigo-500/20" />

      {/* Card Content */}
      <div className="relative flex items-center gap-4">
        {/* Avatar */}
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
          <Image
            src={librarian.image || fallbackImage}
            alt={librarian.name || "Librarian"}
            fill
            sizes="64px"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Online Indicator */}
          <span className="absolute bottom-1 right-1 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
        </div>

        {/* Information */}
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-bold text-slate-900">
            {librarian.name || "Unknown Librarian"}
          </h3>

          <div className="mt-1 flex items-center gap-1.5">
            <Mail className="h-3.5 w-3.5 shrink-0 text-slate-400" />

            <p className="truncate text-xs text-slate-500">
              {librarian.email || "No email available"}
            </p>
          </div>

          {/* Role */}
          <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-2.5 py-1">
            <ShieldCheck className="h-3.5 w-3.5 text-indigo-600" />

            <span className="text-[11px] font-semibold capitalize text-indigo-600">
              {librarian.role || "Librarian"}
            </span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-5 h-px w-full bg-slate-100" />

      {/* Bottom Info */}
      <div className="mt-3 flex items-center justify-between">
        <span className="text-xs font-medium text-slate-400">
          BiblioDrop Librarian
        </span>

        <span className="flex items-center gap-1 text-xs font-medium text-emerald-600">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Available
        </span>
      </div>
    </div>
  );
};

/* =====================================================
   Marquee Row
===================================================== */

const MarqueeRow = ({ librarians, reverse = false }) => {
  /*
    Duplicate the librarians.

    Example:
    [A, B, C]
    becomes
    [A, B, C, A, B, C]

    This allows the second copy to enter
    while the first copy leaves the screen.
  */

  const items = [...librarians, ...librarians];

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex w-max gap-5"
        initial={{
          x: reverse ? "-50%" : "0%",
        }}
        animate={{
          x: reverse ? "0%" : "-50%",
        }}
        transition={{
          duration: reverse ? 32 : 28,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
        whileHover={{
          animationPlayState: "paused",
        }}
      >
        {items.map((librarian, index) => (
          <LibrarianCard
            key={`${librarian._id || librarian.email}-${index}`}
            librarian={librarian}
          />
        ))}
      </motion.div>
    </div>
  );
};

/* =====================================================
   Main Librarian Component
===================================================== */

export default function Librarian() {
  const [librarians, setLibrarians] = useState([]);
  const [loading, setLoading] = useState(true);

  /* =====================================================
     Fetch Librarians
  ===================================================== */

  useEffect(() => {
    const getLibrarians = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/librarians`,
        );

        if (!res.ok) {
          throw new Error("Failed to fetch librarians");
        }

        const data = await res.json();

        setLibrarians(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Librarian fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    getLibrarians();
  }, []);

  /* =====================================================
     Loading State
  ===================================================== */

  if (loading) {
    return (
      <section className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Heading Skeleton */}
          <div className="mb-10 text-center">
            <div className="mx-auto h-7 w-48 animate-pulse rounded-lg bg-slate-200 sm:h-8" />

            <div className="mx-auto mt-3 h-4 w-72 max-w-full animate-pulse rounded bg-slate-200" />
          </div>

          {/* Card Skeleton */}
          <div className="flex gap-5 overflow-hidden">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="h-[150px] w-[280px] shrink-0 animate-pulse rounded-2xl bg-white shadow-sm sm:w-[310px]"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* =====================================================
     Empty State
  ===================================================== */

  if (!librarians.length) {
    return (
      <section className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-slate-200 bg-white px-6 py-12 text-center shadow-sm">
            <LibraryBig className="mx-auto h-10 w-10 text-slate-400" />

            <h2 className="mt-4 text-xl font-bold text-slate-900">
              No librarians found
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
              Librarian information will appear here when available.
            </p>
          </div>
        </div>
      </section>
    );
  }

  /* =====================================================
     Main UI
  ===================================================== */

  return (
    <section className="relative overflow-hidden bg-slate-50 px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* =================================================
            Section Header
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mx-auto mb-9 max-w-2xl text-center sm:mb-11"
        >
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3.5 py-1.5 text-xs font-semibold text-indigo-600">
            <Sparkles className="h-3.5 w-3.5" />

            Meet Our Librarians
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            The People Behind{" "}
            <span className="text-indigo-600">
              Your Books
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
            Meet our trusted librarians who help readers discover,
            request, and receive their favorite books.
          </p>
        </motion.div>

        {/* =================================================
            Marquee
        ================================================= */}

        <div className="relative">
          {/* Left Fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 bg-gradient-to-r from-slate-50 to-transparent sm:w-20 lg:w-32" />

          {/* Right Fade */}
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 bg-gradient-to-l from-slate-50 to-transparent sm:w-20 lg:w-32" />

          {/* Row 1 */}
          <MarqueeRow librarians={librarians} />

          {/* Row 2 */}
          <div className="mt-5">
            <MarqueeRow
              librarians={librarians}
              reverse={true}
            />
          </div>
        </div>

        {/* =================================================
            Bottom Text
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.3,
            duration: 0.5,
          }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-slate-400 sm:text-sm">
            Trusted librarians helping readers find their next
            favorite book.
          </p>
        </motion.div>
      </div>
    </section>
  );
}