import React from 'react';
import Image from 'next/image';

const librarians = [
  {
    name: 'Sarah Johnson',
    deliveries: 200,
    rating: 4.9,
    // Replace with your local image paths or remote URLs
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150', 
  },
  {
    name: 'Michael Brown',
    deliveries: 280,
    rating: 4.8,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
  },
  {
    name: 'Emily Davis',
    deliveries: 250,
    rating: 4.9,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150',
  },
];

export default function Librarian() {
  return (
    <div className="max-w-7xl mx-auto py-2 pb-10 bg-[#e2e8f0]">
      <h1 className='text-2xl font-bold py-3'>Librarian</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6  max-w-6xl mx-auto">
        {librarians.map((librarian, index) => (
          <div 
            key={index} 
            className="flex items-center gap-4 bg-white border border-[#e2e8f0] rounded-2xl p-5 shadow-[0_4px_20px_-4px_rgba(148,163,184,0.12)] transition-all duration-200 hover:shadow-md"
          >
            {/* Avatar Container */}
            <div className="relative w-20 h-20 flex-shrink-0">
              <Image
                src={librarian.avatar}
                alt={librarian.name}
                fill
                className="rounded-full object-cover border border-slate-100"
              />
            </div>

            {/* Info Content */}
            <div className="flex flex-col justify-center">
              <h3 className="text-[#1e293b] font-bold text-base tracking-wide">
                {librarian.name}
              </h3>
              
              <p className="text-[#94a3b8] text-sm mt-0.5 font-medium">
                {librarian.deliveries} Deliveries
              </p>
              
              {/* Rating Section */}
              <div className="flex items-center gap-1.5 mt-2">
                <svg 
                  className="w-4 h-4 text-[#f59e0b] fill-current" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
                <span className="text-[#1e293b] font-bold text-sm">
                  {librarian.rating.toFixed(1)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}