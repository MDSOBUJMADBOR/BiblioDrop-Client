"use client";

import React from "react";
import Link from "next/link";
import {
  FileText,
  ShieldCheck,
  UserCheck,
  BookOpen,
  ShoppingBag,
  CreditCard,
  Truck,
  AlertTriangle,
  Ban,
  RefreshCw,
  Scale,
  Mail,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

const TermsPage = () => {
  const sections = [
    {
      id: "acceptance",
      icon: UserCheck,
      title: "Acceptance of Terms",
      content: (
        <>
          <p>
            By accessing or using BiblioDrop, you agree to comply with and be
            bound by these Terms & Conditions. If you do not agree with any
            part of these terms, please do not use our website or services.
          </p>

          <p className="mt-4">
            These terms apply to all visitors, registered users, customers,
            librarians, book owners, and other users who access BiblioDrop.
          </p>
        </>
      ),
    },

    {
      id: "services",
      icon: BookOpen,
      title: "Our Services",
      content: (
        <>
          <p>
            BiblioDrop provides a platform that helps users discover books,
            connect with local libraries or independent book owners, request
            books, and arrange delivery services.
          </p>

          <ul className="mt-5 space-y-3">
            <li>
              <CheckCircle2 size={17} className="mr-2 inline text-emerald-500" />
              Browse and discover available books.
            </li>

            <li>
              <CheckCircle2 size={17} className="mr-2 inline text-emerald-500" />
              Search books by category and other available information.
            </li>

            <li>
              <CheckCircle2 size={17} className="mr-2 inline text-emerald-500" />
              Request books from available librarians or book owners.
            </li>

            <li>
              <CheckCircle2 size={17} className="mr-2 inline text-emerald-500" />
              Manage your requests and delivery information.
            </li>
          </ul>
        </>
      ),
    },

    {
      id: "account",
      icon: ShieldCheck,
      title: "User Accounts",
      content: (
        <>
          <p>
            Some BiblioDrop features may require you to create an account. You
            are responsible for providing accurate information and keeping
            your account credentials secure.
          </p>

          <ul className="mt-5 space-y-3">
            <li>
              • You must provide accurate and up-to-date account information.
            </li>
            <li>• You are responsible for activities performed through your account.</li>
            <li>• Do not share your password or authentication credentials.</li>
            <li>
              • Notify us promptly if you believe your account has been
              accessed without authorization.
            </li>
          </ul>
        </>
      ),
    },

    {
      id: "books",
      icon: BookOpen,
      title: "Book Listings & Availability",
      content: (
        <>
          <p>
            Book information displayed on BiblioDrop may include titles,
            authors, categories, prices, availability, and librarian or owner
            information.
          </p>

          <p className="mt-4">
            Availability, pricing, and other listing information may change
            without prior notice. BiblioDrop does not guarantee that every
            listed book will remain available at all times.
          </p>

          <p className="mt-4">
            We may update, remove, or correct book listings when necessary.
          </p>
        </>
      ),
    },

    {
      id: "orders",
      icon: ShoppingBag,
      title: "Book Requests & Orders",
      content: (
        <>
          <p>
            When you request a book through BiblioDrop, you agree to provide
            accurate information required to process the request and delivery.
          </p>

          <ul className="mt-5 space-y-3">
            <li>• Review your request information before submitting it.</li>
            <li>• Provide an accurate delivery address and contact information.</li>
            <li>• Requests may be subject to book availability.</li>
            <li>• We may contact you regarding your request when necessary.</li>
            <li>• A request may be cancelled when fulfillment is not possible.</li>
          </ul>
        </>
      ),
    },

    {
      id: "payments",
      icon: CreditCard,
      title: "Payments & Pricing",
      content: (
        <>
          <p>
            Where payment is required, you agree to provide accurate billing
            information and complete the applicable payment process.
          </p>

          <p className="mt-4">
            Prices displayed on BiblioDrop may change from time to time.
            Applicable delivery charges, taxes, or other fees may also apply
            depending on the service.
          </p>

          <p className="mt-4">
            Payments may be processed through third-party payment providers.
            Their terms and privacy policies may also apply to payment
            transactions.
          </p>
        </>
      ),
    },

    {
      id: "delivery",
      icon: Truck,
      title: "Delivery",
      content: (
        <>
          <p>
            BiblioDrop may facilitate delivery between users and available
            librarians, book owners, or delivery providers.
          </p>

          <p className="mt-4">
            Delivery times may vary depending on book availability, location,
            weather, transportation, service availability, and other factors
            outside our direct control.
          </p>

          <p className="mt-4">
            While we aim to provide a reliable delivery experience, we cannot
            guarantee that every delivery will arrive within a specific
            timeframe.
          </p>
        </>
      ),
    },

    {
      id: "prohibited",
      icon: Ban,
      title: "Prohibited Activities",
      content: (
        <>
          <p>
            You agree not to misuse BiblioDrop or use the platform for
            unlawful, fraudulent, abusive, or unauthorized purposes.
          </p>

          <ul className="mt-5 space-y-3">
            <li>• Attempting to gain unauthorized access to the platform.</li>
            <li>• Using another person account without permission.</li>
            <li>• Providing false or misleading information.</li>
            <li>• Uploading malicious code or harmful content.</li>
            <li>• Interfering with the operation or security of the website.</li>
            <li>• Using the platform for fraudulent transactions.</li>
            <li>• Violating applicable laws or regulations.</li>
          </ul>
        </>
      ),
    },

    {
      id: "content",
      icon: FileText,
      title: "User Content",
      content: (
        <>
          <p>
            Users may be able to submit reviews, feedback, comments, or other
            content through BiblioDrop.
          </p>

          <p className="mt-4">
            You are responsible for ensuring that content you submit is
            accurate, lawful, respectful, and does not violate the rights of
            another person or organization.
          </p>

          <p className="mt-4">
            We reserve the right to remove content that violates these terms,
            applicable laws, or our platform rules.
          </p>
        </>
      ),
    },

    {
      id: "intellectual",
      icon: ShieldCheck,
      title: "Intellectual Property",
      content: (
        <>
          <p>
            BiblioDrop website, branding, design, graphics, logos, text,
            software, and other original materials may be protected by
            applicable intellectual property laws.
          </p>

          <p className="mt-4">
            You may not copy, reproduce, modify, distribute, sell, or create
            derivative works from our protected materials without appropriate
            authorization.
          </p>
        </>
      ),
    },

    {
      id: "availability",
      icon: AlertTriangle,
      title: "Service Availability",
      content: (
        <>
          <p>
            We aim to keep BiblioDrop available and reliable, but we do not
            guarantee that the website or every feature will always be
            available without interruption.
          </p>

          <p className="mt-4">
            The service may occasionally be unavailable due to maintenance,
            updates, technical problems, security incidents, third-party
            services, or circumstances beyond our reasonable control.
          </p>
        </>
      ),
    },

    {
      id: "termination",
      icon: Ban,
      title: "Account Suspension & Termination",
      content: (
        <>
          <p>
            We may suspend, restrict, or terminate access to an account when
            necessary to protect BiblioDrop, its users, or our services.
          </p>

          <p className="mt-4">
            This may occur when an account violates these Terms & Conditions,
            engages in fraudulent activity, or creates a security or legal
            risk.
          </p>

          <p className="mt-4">
            Users may also stop using the service or request account-related
            assistance by contacting our support team.
          </p>
        </>
      ),
    },

    {
      id: "liability",
      icon: Scale,
      title: "Limitation of Liability",
      content: (
        <>
          <p>
            BiblioDrop aims to provide accurate and reliable services.
            However, we cannot guarantee that all information, listings,
            availability, or services will always be complete, accurate, or
            uninterrupted.
          </p>

          <p className="mt-4">
            To the extent permitted by applicable law, BiblioDrop will not be
            responsible for losses resulting from circumstances outside our
            reasonable control, including third-party services, delivery
            delays, technical failures, or inaccurate information provided by
            users.
          </p>
        </>
      ),
    },

    {
      id: "changes",
      icon: RefreshCw,
      title: "Changes to These Terms",
      content: (
        <>
          <p>
            We may update these Terms & Conditions from time to time to reflect
            changes in our services, features, business practices, or
            applicable requirements.
          </p>

          <p className="mt-4">
            When we make changes, the updated version will be published on this
            page along with a revised effective date.
          </p>

          <p className="mt-4">
            Continued use of BiblioDrop after changes are published may
            constitute acceptance of the updated terms, where permitted by
            applicable law.
          </p>
        </>
      ),
    },

    {
      id: "contact",
      icon: Mail,
      title: "Contact Us",
      content: (
        <>
          <p>
            If you have questions about these Terms & Conditions, your account,
            book requests, or our services, please contact the BiblioDrop
            support team.
          </p>

          <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm text-slate-500">Support Email</p>

            <a
              href="mailto:sobujmadbor660@gmail.com"
              className="mt-1 inline-block font-semibold text-blue-600 transition hover:text-blue-700"
            >
              sobujmadbor660@gmail.com
            </a>
          </div>
        </>
      ),
    },
  ];

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
              Terms & Conditions
            </span>
          </div>

          {/* Hero Content */}
          <div className="max-w-3xl">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10">
              <FileText
                size={32}
                className="text-blue-400"
              />
            </div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              BiblioDrop Terms
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Terms & Conditions
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              These terms explain the rules, responsibilities, and conditions
              that apply when using BiblioDrop and its book discovery and
              delivery services.
            </p>

            {/* Badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                <FileText size={16} />
                Effective September 19, 2026
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                <ShieldCheck size={16} />
                Clear & Transparent
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
          {/* ================= SIDEBAR ================= */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-slate-500">
                On this page
              </h3>

              <nav className="space-y-1">
                {sections.map((section) => {
                  const Icon = section.icon;

                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
                    >
                      <Icon size={16} />

                      <span>{section.title}</span>
                    </a>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* ================= MAIN CONTENT ================= */}
          <div>
            {/* Intro Card */}
            <div className="mb-8 rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
              <div className="flex gap-4">
                <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 sm:flex">
                  <ShieldCheck
                    className="text-blue-600"
                    size={22}
                  />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Please read these terms carefully
                  </h2>

                  <p className="mt-3 leading-7 text-slate-600">
                    These Terms & Conditions help establish a clear and
                    transparent relationship between BiblioDrop and its users.
                    By using our platform, you agree to follow the terms
                    described below.
                  </p>
                </div>
              </div>
            </div>

            {/* Policy Sections */}
            <div className="space-y-6">
              {sections.map((section, index) => {
                const Icon = section.icon;

                return (
                  <article
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-8"
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-white">
                        <Icon size={20} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start gap-3">
                          <span className="pt-1 text-xs font-semibold text-slate-400">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                            {section.title}
                          </h2>
                        </div>

                        <div className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                          {section.content}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* ================= CONTACT CARD ================= */}
            <div className="mt-8 overflow-hidden rounded-2xl bg-slate-950 p-7 text-white sm:p-9">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                    <Mail
                      size={20}
                      className="text-blue-400"
                    />
                  </div>

                  <h2 className="text-2xl font-bold">
                    Have questions about our terms?
                  </h2>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                    If you have any questions about these Terms & Conditions,
                    please contact the BiblioDrop support team.
                  </p>
                </div>

                <a
                  href="mailto:sobujmadbor660@gmail.com"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                >
                  <Mail size={17} />
                  Contact Support
                </a>
              </div>
            </div>

            {/* ================= LAST UPDATED ================= */}
            <div className="mt-8 text-center">
              <p className="text-sm text-slate-500">
                Last updated:{" "}
                <span className="font-semibold text-slate-700">
                  September 19, 2026
                </span>
              </p>

              <p className="mt-2 text-xs text-slate-400">
                © 2026 BiblioDrop. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsPage;