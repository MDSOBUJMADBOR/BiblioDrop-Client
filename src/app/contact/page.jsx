"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  Send,
  MessageCircle,
  Headphones,
  BookOpen,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { toast } from "react-toastify";

const ContactUsPage = () => {
  const [submitted, setSubmitted] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();

  // Get all form data
  const formData = new FormData(e.currentTarget);

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  // Show submitted data in console
  toast.success("Message sent successfully!", data);

  // Show success message
  setSubmitted(true);

  // Reset all form fields
  e.currentTarget.reset();

  // Hide success message after 4 seconds
  setTimeout(() => {
    setSubmitted(false);
  }, 4000);
};




  
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-slate-950">
        {/* Background Effects */}
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="absolute right-1/3 top-20 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm text-slate-400">
            <Link
              href="/"
              className="transition hover:text-white"
            >
              Home
            </Link>

            <ChevronRight size={16} />

            <span className="text-slate-200">
              Contact Us
            </span>
          </div>

          <div className="max-w-3xl">
            {/* Icon */}
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10">
              <MessageCircle
                size={32}
                className="text-blue-400"
              />
            </div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              BiblioDrop Support
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              We’d Love to Hear From You
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Have a question about a book, delivery, account, or our
              services? Our support team is here to help you.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTACT INFO ================= */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* Email */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
              <Mail
                size={22}
                className="text-blue-600"
              />
            </div>

            <h3 className="mt-5 text-lg font-bold">
              Email Us
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Send us your questions anytime.
            </p>

            <a
              href="mailto:sobujmadbor660@gmail.com"
              className="mt-4 block break-all text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              sobujmadbor660@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50">
              <Phone
                size={22}
                className="text-emerald-600"
              />
            </div>

            <h3 className="mt-5 text-lg font-bold">
              Call Us
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Talk with our support team.
            </p>

            <a
              href="tel:+8801700000000"
              className="mt-4 block text-sm font-semibold text-emerald-600 hover:text-emerald-700"
            >
              +880 1700-000000
            </a>
          </div>

          {/* Location */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50">
              <MapPin
                size={22}
                className="text-violet-600"
              />
            </div>

            <h3 className="mt-5 text-lg font-bold">
              Our Location
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Serving readers and book lovers.
            </p>

            <p className="mt-4 text-sm font-semibold text-violet-600">
              Dhaka, Bangladesh
            </p>
          </div>

          {/* Support Hours */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50">
              <Clock3
                size={22}
                className="text-orange-600"
              />
            </div>

            <h3 className="mt-5 text-lg font-bold">
              Support Hours
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              We are available to help.
            </p>

            <p className="mt-4 text-sm font-semibold text-orange-600">
              Sat – Thu · 9 AM – 6 PM
            </p>
          </div>
        </div>
      </section>

      {/* ================= FORM + SIDE INFO ================= */}
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:px-10 lg:pb-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          {/* ================= CONTACT FORM ================= */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Get In Touch
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                Send Us a Message
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
                Fill out the form below and our team will get back to you as
                soon as possible.
              </p>
            </div>

            {/* Success Message */}
            {submitted && (
              <div className="mb-6 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-emerald-600"
                />

                <div>
                  <p className="font-semibold text-emerald-800">
                    Message sent successfully!
                  </p>

                  <p className="mt-1 text-sm text-emerald-700">
                    Thank you for contacting BiblioDrop. We’ll get back to you
                    soon.
                  </p>
                </div>
              </div>
            )}

<form
  onSubmit={handleSubmit}
  className="space-y-6"
>
  {/* Name + Email */}
  <div className="grid gap-6 sm:grid-cols-2">
    <div>
      <label
        htmlFor="name"
        className="mb-2 block text-sm font-semibold text-slate-700"
      >
        Full Name
      </label>

      <input
        id="name"
        name="name"
        type="text"
        placeholder="Enter your name"
        required
        className="
          w-full
          rounded-xl
          border
          border-slate-200
          bg-slate-50
          px-4
          py-3.5
          text-sm
          outline-none
          transition
          placeholder:text-slate-400
          focus:border-blue-500
          focus:bg-white
          focus:ring-4
          focus:ring-blue-500/10
        "
      />
    </div>

    <div>
      <label
        htmlFor="email"
        className="mb-2 block text-sm font-semibold text-slate-700"
      >
        Email Address
      </label>

      <input
        id="email"
        name="email"
        type="email"
        placeholder="you@example.com"
        required
        className="
          w-full
          rounded-xl
          border
          border-slate-200
          bg-slate-50
          px-4
          py-3.5
          text-sm
          outline-none
          transition
          placeholder:text-slate-400
          focus:border-blue-500
          focus:bg-white
          focus:ring-4
          focus:ring-blue-500/10
        "
      />
    </div>
  </div>

  {/* Subject */}
  <div>
    <label
      htmlFor="subject"
      className="mb-2 block text-sm font-semibold text-slate-700"
    >
      Subject
    </label>

    <select
      id="subject"
      name="subject"
      required
      defaultValue=""
      className="
        w-full
        appearance-none
        rounded-xl
        border
        border-slate-200
        bg-slate-50
        px-4
        py-3.5
        text-sm
        outline-none
        transition
        focus:border-blue-500
        focus:bg-white
        focus:ring-4
        focus:ring-blue-500/10
      "
    >
      <option value="" disabled>
        Select a subject
      </option>

      <option value="book">
        Book Inquiry
      </option>

      <option value="delivery">
        Delivery Support
      </option>

      <option value="account">
        Account Help
      </option>

      <option value="payment">
        Payment Issue
      </option>

      <option value="feedback">
        Feedback
      </option>

      <option value="other">
        Other
      </option>
    </select>
  </div>

  {/* Message */}
  <div>
    <label
      htmlFor="message"
      className="mb-2 block text-sm font-semibold text-slate-700"
    >
      Your Message
    </label>

    <textarea
      id="message"
      name="message"
      rows={6}
      placeholder="Tell us how we can help you..."
      required
      className="
        w-full
        resize-none
        rounded-xl
        border
        border-slate-200
        bg-slate-50
        px-4
        py-3.5
        text-sm
        outline-none
        transition
        placeholder:text-slate-400
        focus:border-blue-500
        focus:bg-white
        focus:ring-4
        focus:ring-blue-500/10
      "
    />
  </div>

  {/* Submit */}
  <button
    type="submit"
    className="
      inline-flex
      w-full
      items-center
      justify-center
      gap-2
      rounded-xl
      bg-slate-950
      px-6
      py-3.5
      text-sm
      font-semibold
      text-white
      transition
      hover:bg-blue-600
      focus:outline-none
      focus:ring-4
      focus:ring-blue-500/20
      sm:w-auto
    "
  >
    <Send size={17} />

    Send Message
  </button>
</form>
          </div>

          {/* ================= SIDE CARD ================= */}
          <div className="space-y-6">
            {/* Support Card */}
            <div className="rounded-3xl bg-slate-950 p-7 text-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <Headphones
                  size={23}
                  className="text-blue-400"
                />
              </div>

              <h2 className="mt-6 text-2xl font-bold">
                Need Quick Help?
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                For common questions about books, deliveries, accounts, and
                payments, check our FAQ section first.
              </p>

              <Link
                href="/faq"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Visit FAQ
                <ChevronRight size={17} />
              </Link>
            </div>

            {/* Book Help Card */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                <BookOpen
                  size={23}
                  className="text-blue-600"
                />
              </div>

              <h2 className="mt-5 text-xl font-bold">
                Looking for a Book?
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Explore our growing collection of books and find something
                you will love to read.
              </p>

              <Link
                href="/books"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
              >
                Browse Books
                <ChevronRight size={16} />
              </Link>
            </div>

            {/* Response Time */}
            <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                  <CheckCircle2
                    size={20}
                    className="text-emerald-600"
                  />
                </div>

                <div>
                  <p className="font-bold text-slate-900">
                    Fast Response
                  </p>

                  <p className="text-sm text-slate-500">
                    Usually within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:px-10 lg:pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-blue-600 px-6 py-12 text-center sm:px-10">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-2xl" />

          <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-blue-900/20 blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Your Next Great Read Is Waiting
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
              Explore books, discover local libraries, and connect with
              book owners through BiblioDrop.
            </p>

            <Link
              href="/books"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-600 transition hover:bg-slate-100"
            >
              Explore Books
              <ChevronRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FOOTER NOTE ================= */}
      <div className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-8 text-center sm:px-8 lg:px-10">
          <p className="text-sm text-slate-500">
            © 2026 BiblioDrop. All rights reserved.
          </p>

          <p className="mt-2 text-xs text-slate-400">
            We are here to make your book discovery experience better.
          </p>
        </div>
      </div>
    </main>
  );
};

export default ContactUsPage;