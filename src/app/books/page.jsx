"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import BookCard from "@/components/BookCard";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  // ✅ Fetch books
  useEffect(() => {
    fetch("http://localhost:8080/bookpost/published")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setFilteredBooks(data);
        setLoading(false);
      });
  }, []);

  // ✅ Filter + Search
  useEffect(() => {
    let temp = [...books];

    // search
    if (search) {
      temp = temp.filter(
        (b) =>
          b.title.toLowerCase().includes(search.toLowerCase()) ||
          b.author.toLowerCase().includes(search.toLowerCase())
      );
    }

    // category filter
    if (category !== "all") {
      temp = temp.filter((b) => b.category === category);
    }

    setFilteredBooks(temp);
  }, [search, category, books]);

  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto">
      {/* 🔥 Title */}
      <h2 className="text-2xl font-bold mb-4">
        Browse Books
      </h2>

      {/* 🔍 Search + Filter */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
        <input
          type="text"
          placeholder="Search by title, author..."
          className="border p-2 rounded"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="story">Story</option>
          <option value="novel">Novel</option>
          <option value="science">Science</option>
          <option value="academic">Academic</option>
          <option value="technology">Technology</option>
        </select>
      </div>

    

      {/* ❌ No Data */}
      {loading && filteredBooks.length === 0 && (
        <p className="text-center text-4xl  text-gray-500 mt-10">
          No books found 😔
        </p>
      )}

      {/* ✅ Books Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {!loading &&
          filteredBooks.map((book) => (
           <BookCard key={book._id} book={book}></BookCard>
          ))}
      </div>
    </div>
  );
};

export default Books;