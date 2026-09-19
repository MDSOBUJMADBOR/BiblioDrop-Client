"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  BadgeCheck,
  Calendar,
  ShieldCheck,
  CircleCheck,
  ArrowLeft,
  Clock3,
  Sparkles,
} from "lucide-react";

import { authClient } from "@/lib/auth-client";

const ProfilePage = () => {
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  // Redirect to Home if user is not logged in
  useEffect(() => {
    if (!isPending && !user) {
      router.replace("/");
    }
  }, [isPending, user, router]);

  // Loading State
  if (isPending) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            {/* Cover Skeleton */}
            <div className="h-40 animate-pulse bg-slate-200 sm:h-48" />

            <div className="px-5 pb-8 sm:px-8">
              <div className="-mt-14 flex flex-col items-center">
                <div className="h-28 w-28 animate-pulse rounded-full border-4 border-white bg-slate-200 shadow-md" />

                <div className="mt-4 h-7 w-40 animate-pulse rounded-lg bg-slate-200" />

                <div className="mt-2 h-4 w-52 animate-pulse rounded bg-slate-100" />
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="h-24 animate-pulse rounded-2xl bg-slate-100"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // While redirecting
  if (!user) {
    return null;
  }

  const joinedDate = user.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "N/A";

  const verified = Boolean(user.emailVerified);

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto max-w-5xl">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.back()}
          className="mb-5 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 shadow-sm transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </motion.button>

        {/* Main Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_15px_50px_rgba(15,23,42,0.07)]"
        >
          {/* =====================================================
              COVER
          ===================================================== */}
          <div className="relative h-40 overflow-hidden bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 sm:h-48 md:h-52">
            {/* Decorative circles */}
            <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

            <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-cyan-300/10 blur-2xl" />

            <div className="absolute right-5 top-5 hidden items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md sm:flex">
              <Sparkles className="h-3.5 w-3.5" />
              BiblioDrop Member
            </div>

            {/* Cover Text */}
            <div className="absolute bottom-6 left-5 text-white sm:left-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
                Personal Profile
              </p>

              <h1 className="mt-1 text-xl font-bold sm:text-2xl">
                Your Account
              </h1>
            </div>
          </div>

          {/* =====================================================
              PROFILE HEADER
          ===================================================== */}
          <div className="px-5 pb-8 sm:px-8 lg:px-10">
            <div className="-mt-14 flex flex-col items-center sm:-mt-16">
              {/* Avatar */}
              <div className="relative">
                <div className="rounded-full bg-white p-1.5 shadow-xl">
                  <Image
                    src={user.image || "/default-user.png"}
                    alt={user.name || "User"}
                    width={128}
                    height={128}
                    priority
                    className="h-28 w-28 rounded-full object-cover sm:h-32 sm:w-32"
                  />
                </div>

                {/* Online Indicator */}
                <span className="absolute bottom-2 right-2 flex h-6 w-6 items-center justify-center rounded-full border-4 border-white bg-emerald-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </span>
              </div>

              {/* Name */}
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                {user.name || "No Name"}
              </h2>

              {/* Email */}
              <div className="mt-1 flex max-w-full items-center gap-1.5 text-sm text-slate-500">
                <Mail className="h-3.5 w-3.5 shrink-0" />

                <span className="truncate">{user.email}</span>
              </div>

              {/* Status */}
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-600">
                <CircleCheck className="h-3.5 w-3.5" />
                Active Account
              </div>
            </div>

            {/* =====================================================
                USER INFORMATION
            ===================================================== */}
            <div className="mt-10">
              <div className="mb-5 flex items-center gap-3">
                <div className="h-8 w-1 rounded-full bg-indigo-600" />

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Personal Information
                  </h3>

                  <p className="text-xs text-slate-400">
                    Your basic account details
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {/* Full Name */}
                <InfoCard
                  icon={User}
                  title="Full Name"
                  value={user.name || "N/A"}
                />

                {/* Email */}
                <InfoCard
                  icon={Mail}
                  title="Email Address"
                  value={user.email || "N/A"}
                  breakValue
                />

                {/* Verification */}
                <InfoCard
                  icon={BadgeCheck}
                  title="Email Verification"
                  value={verified ? "Verified" : "Not Verified"}
                  valueClass={
                    verified ? "text-emerald-600" : "text-rose-500"
                  }
                  iconClass={
                    verified
                      ? "bg-emerald-50 text-emerald-600"
                      : "bg-rose-50 text-rose-500"
                  }
                />

                {/* Joined */}
                <InfoCard
                  icon={Calendar}
                  title="Member Since"
                  value={joinedDate}
                />
              </div>
            </div>

            {/* =====================================================
                ACCOUNT INFORMATION
            ===================================================== */}
            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <ShieldCheck className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Account Information
                  </h3>

                  <p className="mt-0.5 text-xs text-slate-500">
                    Basic information associated with your BiblioDrop account.
                  </p>
                </div>
              </div>

              <div className="mt-6 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
                {/* User ID */}
                <AccountRow
                  label="User ID"
                  value={user.id || "N/A"}
                  breakValue
                />

                {/* Name */}
                <AccountRow
                  label="Name"
                  value={user.name || "N/A"}
                />

                {/* Email */}
                <AccountRow
                  label="Email"
                  value={user.email || "N/A"}
                  breakValue
                />

                {/* Status */}
                <div className="flex flex-col gap-2 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-sm text-slate-500">
                    Account Status
                  </span>

                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                    <CircleCheck className="h-3.5 w-3.5" />
                    Active
                  </span>
                </div>
              </div>
            </div>

            {/* =====================================================
                ACCOUNT FOOTER INFO
            ===================================================== */}
            <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-indigo-100 bg-gradient-to-r from-indigo-50 to-blue-50 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm">
                  <Clock3 className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    Welcome back, {user.name?.split(" ")[0] || "Reader"}!
                  </p>

                  <p className="text-xs text-slate-500">
                    Keep exploring and discover your next favorite book.
                  </p>
                </div>
              </div>

              <button
                onClick={() => router.push("/books")}
                className="rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-indigo-700"
              >
                Browse Books
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

/* =============================================================
   INFO CARD COMPONENT
============================================================= */

const InfoCard = ({
  icon: Icon,
  title,
  value,
  valueClass = "text-slate-900",
  iconClass = "bg-indigo-50 text-indigo-600",
  breakValue = false,
}) => {
  return (
    <motion.div
      whileHover={{
        y: -3,
      }}
      transition={{
        duration: 0.2,
      }}
      className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-indigo-100 hover:shadow-md sm:p-5"
    >
      <div className="flex items-center gap-4">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 ${iconClass}`}
        >
          <Icon className="h-5 w-5" />
        </div>

        <div className="min-w-0">
          <p className="text-xs font-medium text-slate-400">
            {title}
          </p>

          <p
            className={`mt-1 text-sm font-semibold sm:text-base ${valueClass} ${
              breakValue ? "break-all" : ""
            }`}
          >
            {value}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

/* =============================================================
   ACCOUNT ROW COMPONENT
============================================================= */

const AccountRow = ({
  label,
  value,
  breakValue = false,
}) => {
  return (
    <div className="flex flex-col gap-1.5 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
      <span className="shrink-0 text-sm text-slate-500">
        {label}
      </span>

      <span
        className={`text-sm font-medium text-slate-800 sm:text-right ${
          breakValue ? "break-all" : ""
        }`}
      >
        {value}
      </span>
    </div>
  );
};

export default ProfilePage;