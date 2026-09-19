"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Rocket,
  GraduationCap,
  Brain,
  Heart,
  Landmark,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const categories = [
  {
    name: "Fiction",
    count: "1200+ Books",
    icon: BookOpen,
  },
  {
    name: "Sci-Fi",
    count: "850+ Books",
    icon: Rocket,
  },
  {
    name: "Academic",
    count: "900+ Books",
    icon: GraduationCap,
  },
  {
    name: "Self-Help",
    count: "600+ Books",
    icon: Brain,
  },
  {
    name: "Romance",
    count: "700+ Books",
    icon: Heart,
  },
  {
    name: "History",
    count: "500+ Books",
    icon: Landmark,
  },
];

export default function PopularCategories() {
  return (
    <section className="relative overflow-hidden bg-slate-50 px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />

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

            Explore Collections
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Explore{" "}
            <span className="text-indigo-600">
              Popular Categories
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
            Discover books across different genres and find something
            that matches your interests.
          </p>
        </motion.div>

        {/* =================================================
            Categories Grid
        ================================================= */}

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6 lg:gap-5">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.name}
                initial={{
                  opacity: 0,
                  y: 25,
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
                  delay: index * 0.07,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -7,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_6px_25px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-indigo-200 hover:shadow-[0_15px_35px_rgba(79,70,229,0.10)] sm:p-5 lg:p-6"
              >
                {/* Hover Background */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-indigo-500/5 blur-2xl transition-all duration-500 group-hover:bg-indigo-500/15" />

                {/* Top Arrow */}
                <div className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-slate-50 text-slate-300 transition-all duration-300 group-hover:bg-indigo-50 group-hover:text-indigo-600 sm:right-4 sm:top-4">
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: 4,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                  className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-indigo-100 bg-indigo-50 text-indigo-600 transition-all duration-300 group-hover:border-indigo-200 group-hover:bg-indigo-600 group-hover:text-white sm:h-14 sm:w-14 sm:rounded-2xl"
                >
                  <Icon
                    className="h-6 w-6 sm:h-7 sm:w-7"
                    strokeWidth={1.8}
                  />
                </motion.div>

                {/* Category Name */}
                <h3 className="relative text-sm font-bold text-slate-900 transition-colors duration-300 group-hover:text-indigo-600 sm:text-base">
                  {category.name}
                </h3>

                {/* Book Count */}
                <p className="relative mt-1 text-[11px] font-medium text-slate-400 sm:text-xs">
                  {category.count}
                </p>

                {/* Bottom Indicator */}
                <div className="relative mt-4 h-1 w-8 overflow-hidden rounded-full bg-slate-100 transition-all duration-300 group-hover:w-14">
                  <div className="h-full w-full rounded-full bg-indigo-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =================================================
            Bottom CTA
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.3,
            duration: 0.5,
          }}
          className="mt-8 text-center sm:mt-10"
        >
          <p className="text-xs text-slate-400 sm:text-sm">
            Can not find what you are looking for?{" "}
            <span className="font-semibold text-indigo-600">
              Explore all books
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}