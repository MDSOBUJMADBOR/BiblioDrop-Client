import React from 'react';
import { Persons, BookOpen,  ShoppingCart,  ArrowRotateRightNumber5 } from '@gravity-ui/icons';

export default function AdminOverview() {
  const stats = [
    {
      label: 'Total Users', // Left label fallback text / hidden state matching icon
      value: '1,245',
      bgColor: 'bg-[#f5f3ff]', // Light purple tint
      borderColor: 'border-[#ede9fe]',
      iconColor: 'text-[#8b5cf6]',
      // Subtle layered secondary background icon structure
      iconLeft: <Persons className="w-6 h-6 text-[#8b5cf6] opacity-80" />,
      iconRight: <Persons className="w-10 h-10 text-[#8b5cf6] opacity-30" />,
    },
    {
      label: 'Total Books',
      value: '2,368',
      bgColor: 'bg-[#f0f9ff]', // Light blue tint
      borderColor: 'border-[#e0f2fe]',
      iconColor: 'text-[#0ea5e9]',
      iconLeft: <BookOpen className="w-6 h-6 text-[#0ea5e9] opacity-80" />,
      iconRight: <BookOpen className="w-10 h-10 text-[#0ea5e9] opacity-30" />,
    },
    {
      label: 'Total Deliveries',
      value: '3,456',
      bgColor: 'bg-[#f0fdf4]', // Light green tint
      borderColor: 'border-[#dcfce7]',
      iconColor: 'text-[#16a34a]',
      iconLeft: <span className="text-[#16a34a] text-xs font-bold opacity-90">Total Deliveries</span>,
      iconRight: <ShoppingCart className="w-10 h-10 text-[#16a34a] opacity-80" />,
    },
    {
      label: 'Total Revenue',
      value: '$15,680.50',
      bgColor: 'bg-[#fff7ed]', // Light orange tint
      borderColor: 'border-[#ffedd5]',
      iconColor: 'text-[#ea580c]',
      iconLeft: <span className="text-[#ea580c] text-xs font-bold opacity-90">Total Revenue</span>,
      iconRight: <ArrowRotateRightNumber5 className="w-10 h-10 text-[#ea580c] opacity-80" />, 
    },
  ];

  return (
    <div className="w-full   bg-white border-2 border-[#f1f5f9] rounded-2xl p-6 shadow-[0_4px_25px_-4px_rgba(148,163,184,0.05)]">
      {/* Container Title */}
      <h2 className="text-[#1e293b] text-base font-bold tracking-tight mb-5">
        Overview
      </h2>

      {/* Grid wrapper supporting seamless mobile layout shifting */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-5 ${stat.bgColor} border ${stat.borderColor} rounded-2xl relative overflow-hidden h-24`}
          >
            {/* Left Section containing Icon/Label context alongside Value metrics */}
            <div className="flex flex-col justify-between h-full z-10">
              <div className="flex items-center min-h-[24px]">
                {stat.iconLeft}
              </div>
              <span className="text-[#1e293b] text-2xl font-bold tracking-tight mt-1">
                {stat.value}
              </span>
            </div>

            {/* Right Side Visual Focal Icon */}
            <div className="flex items-center justify-center z-10 transform transition-transform duration-200 hover:scale-105">
              {stat.iconRight}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}