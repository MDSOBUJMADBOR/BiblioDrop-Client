"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { BookOpen, ArrowUpRight, Truck } from "lucide-react";
import { motion } from "framer-motion";

const BookCard = ({ book }) => {
  const {
    _id,
    title,
    author,
    category,
    deliveryFee,
    image,
    status,
  } = book;

  const isAvailable =
    status?.toLowerCase() === "available" ||
    status?.toLowerCase() === "approved";

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
      whileHover={{
        y: -8,
      }}
      className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-xl"
    >
      {/* ================= IMAGE ================= */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <Image
          src={
            image ||
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600"
          }
          alt={title || "Book cover"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

        {/* Status Badge */}
        <div className="absolute left-4 top-4">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold shadow-sm backdrop-blur-md ${
              isAvailable
                ? "bg-emerald-500/90 text-white"
                : "bg-gray-800/80 text-white"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isAvailable ? "bg-white" : "bg-gray-300"
              }`}
            />

            {status || "Available"}
          </span>
        </div>

        {/* Category Badge */}
        <div className="absolute bottom-4 left-4">
          <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm backdrop-blur-md">
            {category}
          </span>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="p-5">
        {/* Title */}
        <h2 className="line-clamp-1 text-lg font-bold tracking-tight text-gray-900 transition-colors duration-200 group-hover:text-blue-600">
          {title}
        </h2>

        {/* Author */}
        <p className="mt-1 line-clamp-1 text-sm text-gray-500">
          by {author}
        </p>

        {/* Book information */}
        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50">
              <BookOpen size={16} className="text-blue-600" />
            </span>

            <div>
              <p className="text-xs text-gray-400">Category</p>
              <p className="font-medium text-gray-700">{category}</p>
            </div>
          </div>

          {/* Delivery Fee */}
          <div className="text-right">
            <p className="text-xs text-gray-400">Delivery</p>

            <div className="mt-0.5 flex items-center gap-1.5">
              <Truck size={15} className="text-emerald-600" />

              <span className="text-lg font-bold text-gray-900">
                ৳{deliveryFee}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <div className="border-t border-gray-100 bg-gray-50/70 p-4">
        <Link href={`/books/${_id}`} className="block">
          <Button
            fullWidth
            className="group/button h-11 rounded-xl bg-gray-900 font-semibold text-white transition-all duration-300 hover:bg-blue-600"
          >
            <span>View Details</span>

            <ArrowUpRight
              size={17}
              className="ml-1 transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
            />
          </Button>
        </Link>
      </div>
    </motion.article>
  );
};

export default BookCard;