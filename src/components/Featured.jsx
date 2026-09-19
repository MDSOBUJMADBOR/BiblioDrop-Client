import { FeaturedData } from "@/lib/bookdata/data";
import React from "react";
import BookCard from "./BookCard";
import { Button } from "@heroui/react";
import Link from "next/link";

const FeaturedBooks = async () => {
  const Featured = await FeaturedData();

  return (
    <section className="relative overflow-hidden bg-slate-50 py-14 sm:py-16 lg:py-20">
      
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =========================
            Section Header
        ========================== */}
        <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">

          {/* Left Content */}
          <div className="max-w-2xl">

            {/* Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-xs font-semibold text-indigo-600">
              
              <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-500" />

              Featured Collection
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Featured
              <span className="ml-2 text-indigo-600">
                Books
              </span>
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
              Discover our handpicked collection of popular and
              must-read books. Find your next favorite book from
              our carefully selected collection.
            </p>
          </div>

          {/* Right Info Card */}
          <div className="flex w-fit items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">

            {/* Icon */}
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-6 w-6 text-indigo-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 19.5A2.5 2.5 0 016.5 17H20"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"
                />
              </svg>
            </div>

            {/* Count */}
            <div>
              <p className="text-xs font-medium text-slate-400">
                Our Collection
              </p>

              <p className="text-lg font-bold text-slate-900">
                {Featured?.length || 0}+

                <span className="ml-1 text-sm font-medium text-slate-400">
                  Books
                </span>
              </p>
            </div>
          </div>
        </div>


        {/* =========================================
            ORIGINAL GRID — NO CHANGE
        ========================================== */}

        <div className="grid grid-cols-1 sm:grid-cols-3  md:grid-cols-2 lg:grid-cols-4 gap-3">
          {Featured?.map((Features) => (
            <BookCard
              key={Features?._id}
              book={Features}
            />
          ))}
        </div>


        {/* =========================
            Bottom CTA
        ========================== */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:mt-12">

          <p className="text-center text-sm text-slate-400">
            Looking for more books?
          </p>

          <Link href="/books">
            <Button
              variant="bordered"
              className="
                group
                rounded-xl
                border-slate-300
                bg-white
                px-6
                py-2.5
                font-semibold
                text-slate-700
                shadow-sm
                transition-all
                duration-300
                hover:border-indigo-300
                hover:bg-indigo-50
                hover:text-indigo-600
                hover:shadow-md
              "
            >
              View All Books

              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Button>
          </Link>

        </div>

      </div>
    </section>
  );
};

export default FeaturedBooks;