import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  ArrowLeft,
  Truck,
  CalendarDays,
  Tag,
  BookOpen,
  ShieldCheck,
  Share2,
} from "lucide-react";

import {
  LogoFacebook,
  LogoTelegram,
  LogoLinkedin,
} from "@gravity-ui/icons";

import { Button } from "@heroui/react";

import { BookCardSingle } from "@/lib/bookdata/data";
import RequestDeliveryButton from "@/components/RequestDeliveryButton";

const BooksDetailsPage = async ({ params }) => {
  const { id } = await params;

  const book = await BookCardSingle(id);

  const {
    title,
    author,
    category,
    deliveryFee,
    image,
    description,
    createdAt,
    status,
    userName,
    userImage,
    role,
  } = book;

  const isAvailable =
    status?.toLowerCase() === "available" ||
    status?.toLowerCase() === "approved";

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        {/* =====================================================
            BACK BUTTON
        ====================================================== */}
        <div className="mb-5 sm:mb-6">
          <Link href="/books">
            <Button
              variant="light"
              className="group h-10 rounded-xl px-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-white hover:text-blue-600 sm:px-3"
            >
              <ArrowLeft
                size={17}
                className="transition-transform duration-200 group-hover:-translate-x-1"
              />

              <span>Back to All Books</span>
            </Button>
          </Link>
        </div>

        {/* =====================================================
            MAIN BOOK SECTION
        ====================================================== */}
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:rounded-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* =================================================
                BOOK IMAGE
            ================================================== */}
            <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-5 sm:p-7 md:p-8 lg:p-10">
              {/* Decorative blur */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-300/20 blur-3xl sm:h-56 sm:w-56" />

              <div className="relative mx-auto max-w-sm overflow-hidden rounded-2xl bg-white p-2 shadow-lg sm:rounded-3xl sm:p-2.5 lg:max-w-none">
                <Image
                  src={image}
                  alt={title || "Book cover"}
                  width={500}
                  height={650}
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 55vw, 380px"
                  className="h-[360px] w-full rounded-xl object-cover sm:h-[450px] md:h-[500px] lg:h-[540px]"
                />
              </div>

              {/* Availability Badge */}
              <div className="absolute left-8 top-8 sm:left-10 sm:top-10 md:left-11 md:top-11 lg:left-12 lg:top-12">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold shadow-lg backdrop-blur-md sm:gap-2 sm:px-4 sm:py-2 sm:text-xs ${
                    isAvailable
                      ? "bg-emerald-500 text-white"
                      : "bg-slate-800 text-white"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full sm:h-2 sm:w-2 ${
                      isAvailable ? "bg-white" : "bg-slate-300"
                    }`}
                  />

                  {status || "Available"}
                </span>
              </div>
            </div>

            {/* =================================================
                BOOK DETAILS
            ================================================== */}
            <div className="p-5 sm:p-7 md:p-8 lg:p-10 xl:p-12">
              {/* Category */}
              <div className="mb-4 sm:mb-5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-600 sm:gap-2 sm:px-3.5">
                  <Tag size={14} />

                  <span>{category}</span>
                </span>
              </div>

              {/* Title */}
              <h1 className="max-w-4xl text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-[42px]">
                {title}
              </h1>

              {/* Author */}
              <p className="mt-2.5 text-sm text-slate-500 sm:mt-3 sm:text-base">
                Written by{" "}
                <span className="font-semibold text-blue-600">
                  {author}
                </span>
              </p>

              {/* Divider */}
              <div className="my-5 h-px bg-slate-100 sm:my-7" />

              {/* =================================================
                  DELIVERY FEE
              ================================================== */}
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4 sm:p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  {/* Left */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm sm:h-12 sm:w-12">
                      <Truck
                        size={20}
                        className="text-emerald-600 sm:h-[22px] sm:w-[22px]"
                      />
                    </div>

                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 sm:text-xs">
                        Delivery Fee
                      </p>

                      <p className="mt-0.5 text-xl font-bold text-slate-900 sm:text-2xl">
                        ৳{deliveryFee}
                      </p>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="border-t border-emerald-100 pt-3 sm:border-0 sm:pt-0 sm:text-right">
                    <div className="flex items-center gap-2 sm:justify-end">
                      <ShieldCheck
                        size={16}
                        className="text-emerald-600"
                      />

                      <p className="text-sm font-semibold text-emerald-600">
                        Fast & Reliable
                      </p>
                    </div>

                    <p className="mt-0.5 text-xs text-slate-400">
                      Delivery available
                    </p>
                  </div>
                </div>
              </div>

              {/* =================================================
                  DESCRIPTION
              ================================================== */}
              <div className="mt-6 sm:mt-7">
                <h2 className="text-base font-bold text-slate-900 sm:text-lg">
                  About this book
                </h2>

                <p className="mt-2.5 text-sm leading-6 text-slate-600 sm:mt-3 sm:text-[15px] sm:leading-7">
                  {description}
                </p>
              </div>

              {/* =================================================
                  BOOK META
              ================================================== */}
              <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-7 sm:grid-cols-2">
                {/* Category */}
                <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3.5 sm:p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white">
                    <BookOpen
                      size={18}
                      className="text-blue-600"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-slate-400">
                      Category
                    </p>

                    <p className="truncate text-sm font-semibold text-slate-800">
                      {category}
                    </p>
                  </div>
                </div>

                {/* Date */}
                <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3.5 sm:p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white">
                    <CalendarDays
                      size={18}
                      className="text-indigo-600"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-slate-400">
                      Date Added
                    </p>

                    <p className="truncate text-sm font-semibold text-slate-800">
                      {createdAt
                        ? new Date(createdAt).toLocaleDateString()
                        : "N/A"}
                    </p>
                  </div>
                </div>
              </div>

              {/* =================================================
                  CTA BUTTONS
              ================================================== */}
              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                {/* Request Delivery */}
                <div className="w-full sm:flex-1">
                  <RequestDeliveryButton book={book} />
                </div>

                {/* Wishlist */}
                <button
                  type="button"
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition-all duration-200 hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600 active:scale-[0.98] sm:flex-1"
                >
                  <Heart size={18} />

                  <span>Add to Wishlist</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            LOWER INFORMATION SECTION
        ====================================================== */}
        <section className="mt-6 grid grid-cols-1 gap-5 sm:mt-8 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* =================================================
              LIBRARIAN CARD
          ================================================== */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-6">
            <div className="mb-5 flex items-start justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-blue-500 sm:text-xs">
                  Book Provider
                </p>

                <h3 className="mt-1 text-lg font-bold text-slate-900">
                  Librarian
                </h3>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                <BookOpen size={18} className="text-blue-600" />
              </div>
            </div>

            {/* User */}
            <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3.5 sm:gap-4 sm:p-4">
              <Image
                src={userImage}
                alt={userName || "Librarian"}
                width={56}
                height={56}
                className="h-12 w-12 shrink-0 rounded-full border-2 border-white object-cover shadow-sm sm:h-14 sm:w-14"
              />

              <div className="min-w-0">
                <h4 className="truncate text-sm font-bold text-slate-900 sm:text-base">
                  {userName || "Librarian"}
                </h4>

                <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">
                  {role || "Librarian"}
                </p>

                <p className="mt-1 text-[11px] font-medium text-emerald-600 sm:text-xs">
                  300+ Deliveries
                </p>
              </div>
            </div>

            <button
              type="button"
              className="mt-4 w-full rounded-xl border border-blue-100 py-2.5 text-sm font-semibold text-blue-600 transition-all hover:bg-blue-50 active:scale-[0.98]"
            >
              View Profile
            </button>
          </div>

          {/* =================================================
              BOOK STATUS CARD
          ================================================== */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-6">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-emerald-500 sm:text-xs">
                Availability
              </p>

              <h3 className="mt-1 text-lg font-bold text-slate-900">
                Book Status
              </h3>
            </div>

            {/* Status */}
            <div
              className={`mt-5 rounded-xl border p-4 ${
                isAvailable
                  ? "border-emerald-100 bg-emerald-50"
                  : "border-slate-200 bg-slate-50"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                    isAvailable
                      ? "bg-emerald-100"
                      : "bg-slate-200"
                  }`}
                >
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      isAvailable
                        ? "bg-emerald-500"
                        : "bg-slate-500"
                    }`}
                  />
                </div>

                <div>
                  <p
                    className={`text-sm font-semibold ${
                      isAvailable
                        ? "text-emerald-700"
                        : "text-slate-700"
                    }`}
                  >
                    {status || "Available"}
                  </p>

                  <p className="mt-0.5 text-xs text-slate-500">
                    {isAvailable
                      ? "Ready for delivery request"
                      : "Currently unavailable"}
                  </p>
                </div>
              </div>
            </div>

            {/* Fee */}
            <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
              <span className="text-sm text-slate-500">
                Delivery Fee
              </span>

              <span className="font-bold text-slate-900">
                ৳{deliveryFee}
              </span>
            </div>
          </div>

          {/* =================================================
              SHARE CARD
          ================================================== */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-6 md:col-span-2 lg:col-span-1">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-purple-500 sm:text-xs">
                Spread the Word
              </p>

              <h3 className="mt-1 flex items-center gap-2 text-lg font-bold text-slate-900">
                Share this book

                <Share2 size={17} className="text-slate-400" />
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Found something interesting? Share this book with
                your friends and readers.
              </p>
            </div>

            {/* Social buttons */}
            <div className="mt-5 flex items-center gap-3">
              {/* Facebook */}
              <button
                type="button"
                aria-label="Share on Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-200 hover:-translate-y-1 hover:bg-blue-600 hover:text-white active:scale-95"
              >
                <LogoFacebook />
              </button>

              {/* X */}
              <button
                type="button"
                aria-label="Share on X"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 font-bold text-slate-700 transition-all duration-200 hover:-translate-y-1 hover:bg-slate-900 hover:text-white active:scale-95"
              >
                X
              </button>

              {/* Telegram */}
              <button
                type="button"
                aria-label="Share on Telegram"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition-all duration-200 hover:-translate-y-1 hover:bg-sky-500 hover:text-white active:scale-95"
              >
                <LogoTelegram />
              </button>

              {/* LinkedIn */}
              <button
                type="button"
                aria-label="Share on LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-all duration-200 hover:-translate-y-1 hover:bg-indigo-600 hover:text-white active:scale-95"
              >
                <LogoLinkedin />
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default BooksDetailsPage;