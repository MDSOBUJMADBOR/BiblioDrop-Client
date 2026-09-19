"use client";

import React from "react";
import Link from "next/link";
import {
  BookOpen,
  Heart,
  Users,
  Truck,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Eye,
  CheckCircle2,
  ArrowRight,
  Library,
  MapPin,
} from "lucide-react";

const AboutUsPage = () => {
  const features = [
    {
      icon: Search,
      title: "Discover Books",
      description:
        "Explore books across different categories and find your next favorite read with ease.",
    },
    {
      icon: Library,
      title: "Connect Locally",
      description:
        "Connect with local libraries and independent book owners in your community.",
    },
    {
      icon: Truck,
      title: "Get Books Delivered",
      description:
        "Request available books and enjoy a convenient delivery experience.",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Readers First",
      description:
        "We design every part of BiblioDrop around creating a simple and enjoyable experience for readers.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description:
        "We believe local libraries, independent book owners, and readers can build a stronger reading community together.",
    },
    {
      icon: ShieldCheck,
      title: "Trust & Transparency",
      description:
        "We aim to provide clear information about books, availability, requests, and services.",
    },
    {
      icon: Sparkles,
      title: "Always Improving",
      description:
        "We continuously improve our platform to make discovering and accessing books easier.",
    },
  ];

  const stats = [
    {
      number: "10K+",
      label: "Happy Readers",
    },
    {
      number: "500+",
      label: "Librarians",
    },
    {
      number: "25K+",
      label: "Books Delivered",
    },
    {
      number: "4.8",
      label: "Average Rating",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative overflow-hidden bg-slate-950">
        {/* Background Effects */}
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="absolute -bottom-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          {/* Breadcrumb */}
          <div className="mb-10 flex items-center gap-2 text-sm text-slate-400">
            <Link
              href="/"
              className="transition hover:text-white"
            >
              Home
            </Link>

            <ArrowRight size={15} />

            <span className="text-slate-200">
              About Us
            </span>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            {/* Hero Content */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-blue-300">
                <BookOpen size={16} />
                About BiblioDrop
              </div>

              <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Making Books More
                <span className="block text-blue-400">
                  Accessible to Everyone.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                BiblioDrop is a book discovery and delivery platform designed
                to connect readers with local libraries and independent book
                owners, making it easier to discover and access the books they
                love.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/books"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                  Explore Books
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Hero Visual Card */}
            <div className="relative mx-auto w-full max-w-md lg:ml-auto">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-sm sm:p-8">
                {/* Top */}
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15">
                    <BookOpen
                      size={24}
                      className="text-blue-400"
                    />
                  </div>

                  <span className="rounded-full bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-400">
                    Reader First
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  Your Local Library,
                  <span className="block text-blue-400">
                    Delivered.
                  </span>
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  Discover books, connect with local book communities, and
                  request your favorite reads from wherever you are.
                </p>

                {/* Mini Stats */}
                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-2xl font-bold text-white">
                      25K+
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Books Delivered
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-2xl font-bold text-white">
                      500+
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Librarians
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="mt-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <MapPin
                    size={18}
                    className="text-blue-400"
                  />

                  <div>
                    <p className="text-xs text-slate-500">
                      Building local connections
                    </p>

                    <p className="text-sm font-semibold text-slate-200">
                      Readers • Libraries • Communities
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50">
                    <CheckCircle2
                      size={20}
                      className="text-emerald-600"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Trusted Experience
                    </p>

                    <p className="text-xs text-slate-500">
                      Built for book lovers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS
      ====================================================== */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-200 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="px-5 py-8 text-center sm:px-8 sm:py-10"
            >
              <p className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                {stat.number}
              </p>

              <p className="mt-2 text-xs font-medium text-slate-500 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          OUR STORY
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Visual */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-8 sm:p-10">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />

              <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">
                  <Target
                    size={27}
                    className="text-blue-400"
                  />
                </div>

                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                  Our Story
                </p>

                <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Connecting people
                  <span className="block text-slate-400">
                    through books.
                  </span>
                </h2>

                <div className="mt-8 space-y-5">
                  <div className="flex gap-4">
                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-400" />

                    <p className="text-sm leading-7 text-slate-400">
                      Books have the power to educate, inspire, and bring
                      people together.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-400" />

                    <p className="text-sm leading-7 text-slate-400">
                      We wanted to make it easier for readers to discover books
                      that are available within their communities.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-400" />

                    <p className="text-sm leading-7 text-slate-400">
                      BiblioDrop brings readers, libraries, and independent
                      book owners closer together through one simple platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Small floating card */}
            <div className="absolute -bottom-6 right-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:right-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                  <Heart
                    size={19}
                    className="text-blue-600"
                  />
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Built with Purpose
                  </p>

                  <p className="text-xs text-slate-500">
                    For every reader
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Who We Are
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              A simpler way to discover and access books.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              BiblioDrop was created with a simple idea: finding and accessing
              great books should feel easy and convenient.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Instead of making readers search in different places, BiblioDrop
              brings books, local libraries, and independent book owners
              together in one experience.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Whether you are looking for fiction, academic resources,
              technology books, science, or something new to explore, our goal
              is to help you find it more easily.
            </p>

            <div className="mt-8 flex items-start gap-4 rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100">
                <BookOpen
                  size={20}
                  className="text-blue-600"
                />
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  Our simple philosophy
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Make books easier to discover, easier to request, and easier
                  to access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              What We Do
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Everything you need to get closer to books
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-500">
              BiblioDrop creates a simple connection between readers and the
              books they want.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group relative rounded-3xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl"
                >
                  {/* Number */}
                  <span className="absolute right-6 top-6 text-5xl font-black text-slate-100 transition group-hover:text-blue-50">
                    0{index + 1}
                  </span>

                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 transition group-hover:bg-blue-600">
                      <Icon
                        size={25}
                        className="text-blue-600 transition group-hover:text-white"
                      />
                    </div>

                    <h3 className="mt-7 text-xl font-bold text-slate-900">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION & VISION
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Mission */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
              <Target
                size={26}
                className="text-blue-600"
              />
            </div>

            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Our Mission
            </p>

            <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">
              Make book access simpler.
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              Our mission is to make discovering and accessing books more
              convenient by connecting readers with libraries and independent
              book owners through a user-friendly digital platform.
            </p>
          </div>

          {/* Vision */}
          <div className="rounded-3xl bg-slate-950 p-7 text-white shadow-sm sm:p-9">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <Eye
                size={26}
                className="text-blue-400"
              />
            </div>

            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Our Vision
            </p>

            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              A stronger community of readers.
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
              We envision a world where readers can easily discover books
              around them and local libraries and book owners can reach more
              people through technology.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          OUR VALUES
      ====================================================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Our Values
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              What guides everything we build
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-500">
              These principles help us create a better experience for readers,
              libraries, and our wider community.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                    <Icon
                      size={21}
                      className="text-blue-600"
                    />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-slate-900">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          COMMUNITY SECTION
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-14 sm:px-10 lg:px-16 lg:py-16">
          {/* Background */}
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <Users
                  size={23}
                  className="text-blue-400"
                />
              </div>

              <h2 className="max-w-2xl text-3xl font-bold text-white sm:text-4xl">
                Books are better when shared with a community.
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                Join BiblioDrop and become part of a growing community of
                readers, libraries, and independent book owners who believe in
                making books more accessible.
              </p>
            </div>

            <div>
              <Link
                href="/books"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Start Exploring
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-8 lg:py-20">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
            <BookOpen
              size={27}
              className="text-blue-600"
            />
          </div>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Ready to discover your next book?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Explore our collection, find books you love, and experience a
            simpler way to connect with local libraries and book owners.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/books"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-600"
            >
              Browse Books
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER NOTE
      ====================================================== */}
      <div className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-8 text-center sm:px-8 lg:px-10">
          <p className="text-sm text-slate-500">
            © 2026 BiblioDrop. All rights reserved.
          </p>

          <p className="mt-2 text-xs text-slate-400">
            Your Local Library, Delivered.
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutUsPage;