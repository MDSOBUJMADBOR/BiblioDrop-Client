"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function HeroBanner() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 px-10 items-center bg-gradient-to-l from-black via-black/80 to-[#0b0f2a] overflow-hidden">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-5 ml-5 py-10">
            <motion.p
              variants={itemVariants}
              className="text-white px-4 py-2 rounded-full"
            >
              🚀 Your Local Library, Delivered
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold leading-tight text-white"
            >
              Discover Books.
              <br />
              <span className="text-blue-400">
                Delivered to You.
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 max-w-lg"
            >
              Connect with local libraries & independent book owners.
              <br />
              Request your favorite books and get them
              <br />
              delivered to your doorstep.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex gap-4"
            >
              <Link href="/books">
                <motion.button
                  whileHover={{
                    scale: 1.08,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 px-5 py-3 rounded-md text-white font-medium cursor-pointer"
                >
                  Browse Books
                </motion.button>
              </Link>

              <motion.button
                whileHover={{
                  scale: 1.08,
                  borderColor: "#60A5FA",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-3 rounded-md border border-white text-white cursor-pointer"
              >
                How It Works
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{
            opacity: 0,
            x: 80,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.03,
          }}
          className="flex justify-center"
        >
          <Image
            src="/book.jpg"
            alt="Book"
            width={650}
            height={650}
            className="object-contain"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
}