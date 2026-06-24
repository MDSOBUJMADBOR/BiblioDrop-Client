"use client";

import { Star } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      value: "10K+",
      label: "Happy users",
    },
    {
      value: "500+",
      label: "Librarians",
    },
    {
      value: "25K+",
      label: "Books Delivered",
    },
    {
      value: "4.8",
      label: "Average Rating",
      isRating: true,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto  bg-indigo-900  py-6 px-4 ">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md rounded-lg py-5 px-4 shadow-md"
          >
            <h2 className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-1">
              {item.value}
              {item.isRating && (
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              )}
            </h2>
            <p className="text-sm mt-1 text-gray-200">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}