"use client";

import React, { useEffect, useState } from "react";
import {
  BookOpen,
  ChartColumn,
  ShoppingCart,
} from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";

export default function LibrarianOverview() {
  const userData = authClient.useSession(); 
  const user = userData.data?.user;  
  console.log(user?.email,'user');
  const [booksCount, setBooksCount] = useState(0);
  const [deliveriesCount, setDeliveriesCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [bookRes, deliveryRes] = await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookpost/email/${user?.email}`),
          fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/delivery-request/email/${user?.email}`
          ),
        ]);

        const books = await bookRes.json();
        const deliveries = await deliveryRes.json();

        setBooksCount(Array.isArray(books) ? books.length : 0);
        setDeliveriesCount(
          Array.isArray(deliveries) ? deliveries.length : 0
        );
      } catch (error) {
        console.error("Dashboard Error:", error);
      }
    };

    fetchData();
  }, []);

  const stats = [
    {
      label: "Add Books",
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
      label: "Manage Inventory",
      value: booksCount,
      bgColor: "bg-[#eff6ff]",
      borderColor: "border-[#dbeafe]",
      iconLeft: (
        <ChartColumn className="w-6 h-6 text-[#2563eb] opacity-80" />
      ),
      iconRight: (
        <ChartColumn className="w-10 h-10 text-[#2563eb]" />
      ),
    },
    {
      labels: "Manage Deliveries",
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
  ];

  return (
    <div className="w-full bg-white border-2 border-slate-100 rounded-2xl p-6 shadow-sm">
      <h2 className="text-lg font-bold text-slate-800 mb-6">
        Overview
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-5 rounded-2xl border ${stat.bgColor} ${stat.borderColor}`}
          >
            <div>
              {/* {stat.iconLeft} */}
               <p className="text-2xl font-bold mt-1">
                {stat.label}
              </p>

              <p>{stat.labels}</p>

              <h3 className="text-3xl font-bold text-slate-800 mt-3">
                {stat.value}
              </h3>

             
            </div>

            {stat.iconRight}
          </div>
        ))}
      </div>
    </div>
  );
}