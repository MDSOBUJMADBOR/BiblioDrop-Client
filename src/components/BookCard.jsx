"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { BookOpen, DollarSign } from "lucide-react";

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
console.log(book.image,'imag');
  return (
    <div className="rounded-2xl shadow-md border bg-white overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      
      
      <div className=" h-56 bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
        
       
           <Image src={image || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600'}

                    alt="Course Image" 
                    height={200}
                    width={400}
                    
                                     
                    // sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover border"
                />   
      </div>
    


      {/* 📘 CONTENT */}
      <div className="p-5 space-y-2">
        <h2 className="text-lg font-bold text-gray-800 ">
          {title}
        </h2>

        <p className="text-gray-500 text-sm">
          {author}
        </p>

        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <BookOpen size={16} className="text-blue-500" />
          {category}
        </div>

        <div className="flex items-center gap-2 text-gray-800 font-medium">
          <DollarSign size={16} className="text-green-500" />
          ৳{deliveryFee}
        </div>
      </div>

      {/* 🔘 BUTTONS */}
      <div className="border-t p-4 flex justify-between gap-3">
        <Link href={`/books/${_id}`}>
          <Button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-xl hover:scale-105 transition">
            View Details
          </Button>
        </Link>

        {/* <Button
          disabled={status !== "publish"}
          className="rounded-xl hover:scale-105 transition"
        >
          {status === "publish" ? "Borrow" : "Unavailable"}
        </Button> */}
      </div>
    </div>
  );
};

export default BookCard;