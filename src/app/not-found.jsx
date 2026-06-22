"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#0b0f2a] via-[#111a4b] to-[#1b2c6b] text-white px-4">
      
      <div className="text-center max-w-xl">
        
        {/* 404 Number */}
        <h1 className="text-[120px] md:text-[160px] font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent leading-none">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-4">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-300 mt-3 text-sm md:text-base">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link href="/">
          <button className="mt-6 px-6 py-3 cursor-pointer bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 rounded-lg text-white font-medium transition duration-300 shadow-lg">
            Go Back Home
          </button>
        </Link>

      </div>
    </div>
  );
}