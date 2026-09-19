
"use client";

import React from "react";
import {
  ShieldCheck,
  Lock,
  UserRound,
  Database,
  Cookie,
  CreditCard,
  RefreshCw,
  FileText,
  ChevronRight,
  Mail,
} from "lucide-react";
import Link from "next/link";

const PrivacyPage = () => {
  const sections = [
    {
      id: "information",
      icon: UserRound,
      title: "Information We Collect",
      content: (
        <>
          <p>
            When you use BiblioDrop, we may collect information that helps us
            provide a smooth, reliable, and personalized book delivery
            experience.
          </p>

          <ul className="mt-5 space-y-3">
            <li>
              <strong>Account Information:</strong> Your name, email address,
              profile information, and authentication details.
            </li>

            <li>
              <strong>Order Information:</strong> Books you request, delivery
              information, order history, and related details.
            </li>

            <li>
              <strong>Communication Information:</strong> Reviews, feedback,
              support requests, and messages you send to us.
            </li>

            <li>
              <strong>Usage Information:</strong> Information about how you
              interact with our website and services.
            </li>
          </ul>
        </>
      ),
    },

    {
      id: "usage",
      icon: Database,
      title: "How We Use Your Information",
      content: (
        <>
          <p>
            We use the information we collect to operate, maintain, improve,
            and secure BiblioDrop and its services.
          </p>

          <ul className="mt-5 space-y-3">
            <li>• Create and manage your account.</li>
            <li>• Process book requests and deliveries.</li>
            <li>• Communicate with you about your orders.</li>
            <li>• Provide customer support.</li>
            <li>• Improve our website and user experience.</li>
            <li>• Detect and prevent unauthorized activity.</li>
            <li>• Send important service-related notifications.</li>
          </ul>
        </>
      ),
    },

    {
      id: "sharing",
      icon: ShieldCheck,
      title: "Information Sharing",
      content: (
        <>
          <p>
            BiblioDrop does not sell your personal information. We may share
            limited information when it is necessary to provide our services,
            process an order, or comply with applicable legal requirements.
          </p>

          <ul className="mt-5 space-y-3">
            <li>
              <strong>Service Providers:</strong> Trusted providers that help
              us operate our platform and services.
            </li>

            <li>
              <strong>Librarians and Book Owners:</strong> Relevant
              information may be shared when necessary to fulfill your book
              request or delivery.
            </li>

            <li>
              <strong>Legal Requirements:</strong> Information may be
              disclosed when required by law or a valid legal process.
            </li>
          </ul>
        </>
      ),
    },

    {
      id: "payments",
      icon: CreditCard,
      title: "Payments & Financial Information",
      content: (
        <>
          <p>
            Payments may be processed through trusted third-party payment
            providers such as Stripe or other supported payment services.
          </p>

          <p className="mt-4">
            BiblioDrop does not intentionally store complete payment card
            information on its own servers. Payment providers handle payment
            information according to their own privacy and security policies.
          </p>
        </>
      ),
    },

    {
      id: "cookies",
      icon: Cookie,
      title: "Cookies & Similar Technologies",
      content: (
        <>
          <p>
            BiblioDrop may use cookies and similar technologies to maintain
            login sessions, remember preferences, improve functionality, and
            understand how users interact with our website.
          </p>

          <p className="mt-4">
            You can manage or disable cookies through your browser settings.
            Some features of the website may not work correctly if certain
            cookies are disabled.
          </p>
        </>
      ),
    },

    {
      id: "security",
      icon: Lock,
      title: "Data Security",
      content: (
        <>
          <p>
            We take reasonable technical and organizational measures to
            protect your personal information from unauthorized access,
            alteration, disclosure, or destruction.
          </p>

          <p className="mt-4">
            However, no internet-based service can guarantee complete
            security. We encourage you to keep your account credentials
            private and use a strong password.
          </p>
        </>
      ),
    },

    {
      id: "retention",
      icon: Database,
      title: "Data Retention",
      content: (
        <>
          <p>
            We retain personal information only for as long as reasonably
            necessary to provide our services, maintain business records,
            resolve disputes, enforce agreements, and comply with applicable
            legal obligations.
          </p>
        </>
      ),
    },

    {
      id: "rights",
      icon: UserRound,
      title: "Your Privacy Rights",
      content: (
        <>
          <p>
            Depending on applicable law, you may have rights regarding your
            personal information, including the ability to:
          </p>

          <ul className="mt-5 space-y-3">
            <li>• Access information associated with your account.</li>
            <li>• Request correction of inaccurate information.</li>
            <li>• Request deletion of certain personal information.</li>
            <li>• Update your account information.</li>
            <li>• Contact us about privacy-related concerns.</li>
          </ul>
        </>
      ),
    },

    {
      id: "children",
      icon: ShieldCheck,
      title: "Children's Privacy",
      content: (
        <>
          <p>
            BiblioDrop is not intentionally designed to collect personal
            information from children without appropriate authorization.
          </p>

          <p className="mt-4">
            If you believe that a child has provided personal information
            without appropriate consent, please contact us so we can review
            the situation and take appropriate action.
          </p>
        </>
      ),
    },

    {
      id: "changes",
      icon: RefreshCw,
      title: "Changes to This Privacy Policy",
      content: (
        <>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes to our services, practices, or applicable requirements.
          </p>

          <p className="mt-4">
            When changes are made, we will update the effective date displayed
            on this page. We encourage you to review this page periodically.
          </p>
        </>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>

            <ChevronRight size={16} />

            <span className="text-slate-200">Privacy Policy</span>
          </div>

          <div className="max-w-3xl">
            {/* Icon */}
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10">
              <ShieldCheck size={32} className="text-blue-400" />
            </div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              BiblioDrop Privacy
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Your Privacy Matters
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              We believe your personal information should be handled with
              care, transparency, and respect. Learn how BiblioDrop collects,
              uses, and protects your information.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                <FileText size={16} />
                Effective September 19, 2026
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                <Lock size={16} />
                Secure & Transparent
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

          {/* ================= MAIN ================= */}
          <div>
            {/* Intro Card */}
            <div className="mb-8 rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
              <div className="flex gap-4">
                <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 sm:flex">
                  <ShieldCheck className="text-blue-600" size={22} />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Our commitment to your privacy
                  </h2>

                  <p className="mt-3 leading-7 text-slate-600">
                    BiblioDrop is designed to make discovering and requesting
                    books simple. We also want you to understand what
                    information we collect and why we need it.
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
                    className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md sm:p-8"
                  >
                    <div className="flex items-start gap-4">
                      {/* Number + Icon */}
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-white">
                        <Icon size={20} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-semibold text-slate-400">
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
                    <Mail size={20} className="text-blue-400" />
                  </div>

                  <h2 className="text-2xl font-bold">
                    Have a privacy question?
                  </h2>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                    If you have any questions, concerns, or requests regarding
                    your privacy, please contact the BiblioDrop support team.
                  </p>
                </div>

                <a
                  href="mailto:support@bibliodrop.com"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                >
                  <Mail size={17} />
                  Contact Support
                </a>
              </div>
            </div>

            {/* Last Updated */}
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

export default PrivacyPage;


