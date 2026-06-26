"use client";

import React from "react";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Fiction",
    count: "1200+ Books",
    icon: (
      <svg
        className="w-8 h-8 text-[#6366f1]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
  },
  {
    name: "Sci-Fi",
    count: "850+ Books",
    icon: (
      <svg
        className="w-8 h-8 text-[#6366f1]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699-2.7c-.103.308-.283.585-.523.805a2.242 2.242 0 01-3.17 0 2.242 2.242 0 010-3.17c.22-.24.497-.42.805-.523m4.388 4.388a2.244 2.244 0 01-3.177-3.177"
        />
      </svg>
    ),
  },
  {
    name: "Academic",
    count: "900+ Books",
    icon: (
      <svg
        className="w-8 h-8 text-[#6366f1]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 019.918 5.841 50.548 50.548 0 00-2.658.813m-15.482 0A50.53 50.53 0 0112 11.25c2.11 0 4.133-.13 6.116-.383m-15.482 0v4.288c0 2.427 1.166 4.7 3.128 6.156 1.772 1.314 3.908 2.062 6.216 2.062s4.444-.748 6.216-2.062c1.962-1.456 3.128-3.729 3.128-6.156v-4.288"
        />
      </svg>
    ),
  },
  {
    name: "Self-Help",
    count: "600+ Books",
    icon: (
      <svg
        className="w-8 h-8 text-[#6366f1]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18v3m0 0h.01m-.01 0H12m0-3a3 3 0 003-3V9a3 3 0 10-6 0v6a3 3 0 003 3zm6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    name: "Romance",
    count: "700+ Books",
    icon: (
      <svg
        className="w-8 h-8 text-[#6366f1]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
  },
  {
    name: "History",
    count: "500+ Books",
    icon: (
      <svg
        className="w-8 h-8 text-[#6366f1]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.5M4.5 21V10.5M2.25 21h19.5M3 9h18M12 9v1.5"
        />
      </svg>
    ),
  },
];

export default function PopularCategories() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 md:p-8 w-full max-w-7xl mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-[#1e293b] text-xl font-bold tracking-tight mb-6"
      >
        Popular Categories
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.1,
              type: "spring",
              stiffness: 220,
              damping: 18,
            }}
            whileHover={{
              y: -10,
              scale: 1.06,
            }}
            whileTap={{ scale: 0.96 }}
            className="group flex flex-col items-center justify-center text-center p-6 bg-white border border-[#f1f5f9] rounded-2xl shadow-[0_4px_25px_-4px_rgba(148,163,184,0.08)] hover:shadow-xl hover:border-[#6366f1]/30 transition-all duration-500 cursor-pointer"
          >
            <motion.div
              whileHover={{
                rotate: 10,
                scale: 1.25,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              className="mb-4"
            >
              {category.icon}
            </motion.div>

            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-[#1e293b] text-base font-bold mb-1"
            >
              {category.name}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="text-[#94a3b8] text-xs font-medium"
            >
              {category.count}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}