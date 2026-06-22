"use client";

import { BookOpen, Clock, FileDollar } from "@gravity-ui/icons";

export default function Overview() {
  const cards = [
    {
      title: "Total Books Read",
      value: 24,
      icon: BookOpen,
      bg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      title: "Pending Deliveries",
      value: 2,
      icon: Clock,
      bg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "Total Spent on Fees",
      value: "$120.50",
      icon: FileDollar,
      bg: "bg-red-100",
      iconColor: "text-red-600",
    },
  ];

  return (
    <div className="p-6 bg-white rounded-2xl shadow-sm border">
      <h2 className="text-lg font-semibold mb-4">Overview</h2>

      <div className="grid md:grid-cols-3 gap-4">
        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <div
              key={index}
              className={`p-5 rounded-xl flex items-center justify-between ${card.bg}`}
            >
              <div>
                <p className="text-sm text-gray-600">{card.title}</p>
                <h3 className="text-2xl font-bold mt-1">{card.value}</h3>
              </div>

              <div
                className={`p-3 rounded-lg bg-white shadow ${card.iconColor}`}
              >
                <Icon size={20} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

//ReadersOverviewPage