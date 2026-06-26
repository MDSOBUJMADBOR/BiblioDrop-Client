"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Librarian() {
  const [librarians, setLibrarians] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getLibrarians = async () => {
      try {
        const res = await fetch("http://localhost:8080/librarians");
        const data = await res.json();
        setLibrarians(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getLibrarians();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-10 text-lg font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto py-2 pb-10 bg-[#e2e8f0]"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
        }}
        className="text-2xl font-bold py-3"
      >
        Librarian
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {librarians.map((librarian, index) => (
          <motion.div
            key={librarian._id}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.1,
              type: "spring",
              stiffness: 200,
              damping: 18,
            }}
            whileHover={{
              y: -10,
              scale: 1.05,
            }}
            className="group flex items-center gap-4 bg-white border border-[#e2e8f0] rounded-2xl p-5 shadow-[0_4px_20px_-4px_rgba(148,163,184,0.12)] hover:shadow-xl transition-all duration-500"
          >
            {/* Avatar */}
            <motion.div
              whileHover={{
                scale: 1.12,
                rotate: 5,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              className="relative w-20 h-20 flex-shrink-0 overflow-hidden rounded-full"
            >
              <Image
                src={
                  librarian.image ||
                  "https://i.ibb.co/4pDNDk1/avatar.png"
                }
                alt={librarian.name}
                fill
                className="rounded-full object-cover border border-slate-100 group-hover:scale-110 transition-transform duration-700"
              />
            </motion.div>

            {/* Info */}
            <div className="flex flex-col justify-center">
              <motion.h3
                whileHover={{ scale: 1.05 }}
                className="text-[#1e293b] font-bold text-base tracking-wide"
              >
                {librarian.name}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="text-[#94a3b8] text-sm mt-1"
              >
                {librarian.email}
              </motion.p>

              <motion.p
                whileHover={{ x: 4 }}
                className="text-sm font-medium text-blue-600 capitalize mt-1"
              >
                {librarian.role}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}