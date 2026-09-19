"use client";

import {
  Star,
  Users,
  LibraryBig,
  Truck,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

export default function StatsSection() {
  const stats = [
    {
      value: "10K+",
      label: "Happy Users",
      icon: Users,
    },
    {
      value: "500+",
      label: "Librarians",
      icon: LibraryBig,
    },
    {
      value: "25K+",
      label: "Books Delivered",
      icon: Truck,
    },
    {
      value: "4.8",
      label: "Average Rating",
      icon: Star,
      isRating: true,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-900 to-blue-950 px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -right-24 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400/10 blur-3xl" />

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold text-blue-200 backdrop-blur-md">
            <Sparkles size={14} />

            Trusted by readers
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Growing Together, One Book at a Time
          </h2>

          <p className="mt-3 text-sm leading-6 text-indigo-200 sm:text-base">
            Thousands of readers and librarians are already making
            book discovery easier with BiblioDrop.
          </p>
        </div>

        {/* =====================================================
            STATS GRID
        ====================================================== */}

        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -6,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.08] p-4 text-center shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.13] hover:shadow-2xl sm:rounded-3xl sm:p-6 lg:p-7"
              >
                {/* Card glow */}
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-400/10 blur-2xl transition-all duration-500 group-hover:bg-blue-400/20" />

                {/* Icon */}
                <div className="relative mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-blue-200 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/15 sm:mb-4 sm:h-12 sm:w-12 sm:rounded-2xl">
                  <Icon
                    size={20}
                    strokeWidth={1.8}
                    className={
                      item.isRating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-blue-200"
                    }
                  />
                </div>

                {/* Number */}
                <div className="relative flex items-center justify-center gap-1">
                  <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                    {item.value}
                  </h3>

                  {item.isRating && (
                    <Star
                      size={15}
                      className="fill-yellow-400 text-yellow-400 sm:h-[18px] sm:w-[18px]"
                    />
                  )}
                </div>

                {/* Label */}
                <p className="relative mt-1.5 text-[11px] font-medium text-indigo-200 sm:mt-2 sm:text-sm">
                  {item.label}
                </p>

                {/* Bottom line */}
                <div className="mx-auto mt-4 h-0.5 w-8 rounded-full bg-white/20 transition-all duration-300 group-hover:w-14 group-hover:bg-blue-300 sm:mt-5" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}