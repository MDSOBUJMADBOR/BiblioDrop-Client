"use client";

import React, { useEffect, useState } from "react";
import {
  Persons,
  BookOpen,
  ShoppingCart,
  ArrowRotateRightNumber5,
} from "@gravity-ui/icons";

export default function AdminOverview() {
  const [usersCount, setUsersCount] = useState(0);
  const [booksCount, setBooksCount] = useState(0);
  const [deliveriesCount, setDeliveriesCount] = useState(0);

  // Fetch Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userRes, bookRes, deliveryRes] = await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`),
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookpost`),
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/delivery-request/delivered`),
        ]);

        const users = await userRes.json();
        const books = await bookRes.json();
        const deliveries = await deliveryRes.json();

        setUsersCount(users?.length || 0);
        setBooksCount(books?.length || 0);
        setDeliveriesCount(deliveries?.length || 0);
      } catch (error) {
        console.log("Error fetching dashboard data:", error);
      }
    };

    fetchData();
  }, []);

  const stats = [
    {
      label: "Total Users",
      value: usersCount,
      bgColor: "bg-[#f5f3ff]",
      borderColor: "border-[#ede9fe]",
      iconLeft: (
        <Persons className="w-6 h-6 text-[#8b5cf6] opacity-80" />
      ),
      iconRight: (
        <Persons className="w-10 h-10 text-[#8b5cf6] opacity-30" />
      ),
    },
    {
      label: "Total Books",
      value: booksCount,
      bgColor: "bg-[#eff6ff]",
      borderColor: "border-[#dbeafe]",
      iconLeft: (
        <BookOpen className="w-6 h-6 text-[#2563eb] opacity-80" />
      ),
      iconRight: (
        <BookOpen className="w-10 h-10 text-[#2563eb] opacity-30" />
      ),
    },
    {
      label: "Total Deliveries",
      value: deliveriesCount,
      bgColor: "bg-[#f0fdf4]",
      borderColor: "border-[#dcfce7]",
      iconLeft: (
        <ShoppingCart className="w-6 h-6 text-[#16a34a] opacity-80" />
      ),
      iconRight: (
        <ShoppingCart className="w-10 h-10 text-[#16a34a] opacity-30" />
      ),
    },
    {
      label: "Total Revenue",
      value: `$${deliveriesCount * 112}`,
      bgColor: "bg-[#fff7ed]",
      borderColor: "border-[#ffedd5]",
      iconLeft: (
        <ArrowRotateRightNumber5 className="w-6 h-6 text-[#ea580c] opacity-80" />
      ),
      iconRight: (
        <ArrowRotateRightNumber5 className="w-10 h-10 text-[#ea580c] opacity-30" />
      ),
    },
  ];

  return (
    <div className="w-full bg-white border-2 border-[#f1f5f9] rounded-2xl p-6 shadow-[0_4px_25px_-4px_rgba(148,163,184,0.05)]">
      <h2 className="text-[#1e293b] text-base font-bold mb-5">
        Overview
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-5 ${stat.bgColor} border ${stat.borderColor} rounded-2xl h-24`}
          >
            <div className="flex flex-col justify-between h-full">
              <div>{stat.iconLeft}</div>

              <span className="text-[#1e293b] text-2xl font-bold mt-1">
                {stat.value}
              </span>

              <p className="text-xs text-gray-500 mt-1">
                {stat.label}
              </p>
            </div>

            <div>{stat.iconRight}</div>
          </div>
        ))}
      </div>
    </div>
  );
}