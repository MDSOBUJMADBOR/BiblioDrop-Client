"use client";

import { useMemo, useState } from "react";
import BookCard from "./BookCard";

const SearchFilter = ({ books = [] }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filteredBooks = useMemo(() => {
    let temp = [...books];

    if (search.trim()) {
      const searchText = search.toLowerCase();

      temp = temp.filter(
        (book) =>
          book.title?.toLowerCase().includes(searchText) ||
          book.author?.toLowerCase().includes(searchText)
      );
    }

    if (category !== "all") {
      temp = temp.filter(
        (book) => book.category?.toLowerCase() === category.toLowerCase()
      );
    }

    return temp;
  }, [books, search, category]);

  return (
    <>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <input
          type="text"
          placeholder="Search title or author..."
          className="border rounded-lg p-3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border rounded-lg p-3"
          value={category}
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

      {filteredBooks.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          No books found.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      )}
    </>
  );
};

export default SearchFilter;