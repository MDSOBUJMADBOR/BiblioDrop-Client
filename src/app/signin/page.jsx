
"use client";

import { authClient } from "@/lib/auth-client";

import {
  Button,
  Description,
  FieldError,
  Fieldset,
  Form,
  Input,
  Label,
  Surface,
  Separator,
  TextField,
} from "@heroui/react";

import Link from "next/link";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

import {
  ArrowRight,
  BookOpen,
  Eye,
  EyeOff,
  Image as ImageIcon,
  LockKeyhole,
  UsersRound,
} from "lucide-react";

export default function SignInPage() {
  const [loading, setLoading] = useState(false);

  // Password visibility
  const [showPassword, setShowPassword] = useState(false);

  // ==========================================
  // Animation Variants
  // ==========================================

  const containerVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,

      transition: {
        duration: 0.6,
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 15,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.45,
      },
    },
  };

  // ==========================================
  // Login
  // ==========================================

  const onSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    try {
      const result = await authClient.signIn.email({
        ...user,
        callbackURL: "/",
      });

     

      // Login failed
      if (result?.error) {
        alert(
          "❌ User not found or incorrect email/password!"
        );

        return;
      }

      toast.success("✅ Login Successful!");
    } catch (error) {
      alert.error(error);

      alert(
        "❌ User not found or incorrect email/password!"
      );
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // Google Login
  // ==========================================

  const handleGoogleSignin = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (error) {
      alert.error(error);

      alert("Google login failed!");
    }
  };

  // ==========================================
  // UI
  // ==========================================

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#06131c] px-3 py-4 sm:px-5 sm:py-6 lg:px-6 lg:py-8">
      {/* ==========================================
          Animated Background
      ========================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top Left Glow */}

        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl sm:h-96 sm:w-96"
        />

        {/* Bottom Right Glow */}

        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -right-32 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl sm:h-[28rem] sm:w-[28rem]"
        />

        {/* Center Glow */}

        <motion.div
          animate={{
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400/10 blur-3xl sm:h-96 sm:w-96"
        />
      </div>

      {/* ==========================================
          Main Container
      ========================================== */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-5xl items-center justify-center sm:min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-4rem)]"
      >
        {/* Main Card */}

        <motion.div
          variants={itemVariants}
          className="w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80 shadow-2xl shadow-cyan-950/30 backdrop-blur-2xl sm:rounded-3xl"
        >
          <div className="grid w-full lg:grid-cols-[0.9fr_1.1fr]">
            {/* ==========================================
                LEFT SIDE
            ========================================== */}

            <div className="relative hidden overflow-hidden bg-gradient-to-br from-cyan-600 via-cyan-700 to-blue-800 p-8 lg:flex lg:min-h-[650px] lg:flex-col lg:justify-between xl:p-10">
              {/* Decorative Circles */}

              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/10 bg-white/5" />

              <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full border border-white/10 bg-white/5" />

              <div className="absolute right-20 top-1/2 h-32 w-32 rounded-full bg-white/5 blur-2xl" />

              {/* Logo */}

              <motion.div
                variants={itemVariants}
                className="relative z-10 flex items-center gap-3"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 shadow-lg backdrop-blur-md">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>

                <div>
                  <h1 className="text-xl font-bold tracking-tight text-white">
                    BiblioDrop
                  </h1>

                  <p className="text-xs text-cyan-100">
                    Discover. Read. Share.
                  </p>
                </div>
              </motion.div>

              {/* Main Content */}

              <div className="relative z-10">
                <motion.div variants={itemVariants}>
                  <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-100">
                    Welcome Back
                  </p>

                  <h2 className="max-w-md text-3xl font-bold leading-tight text-white xl:text-4xl">
                    Welcome back to your reading world.
                  </h2>

                  <p className="mt-5 max-w-md text-sm leading-6 text-cyan-50/80">
                    Continue discovering amazing books, manage your
                    collection, and connect with a growing community
                    of readers.
                  </p>
                </motion.div>

                {/* Stats */}

                <motion.div
                  variants={itemVariants}
                  className="mt-8 grid grid-cols-3 gap-3"
                >
                  {/* Books */}

                  <div className="rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-cyan-100" />

                      <span className="text-lg font-bold text-white">
                        10K+
                      </span>
                    </div>

                    <p className="mt-1 text-xs text-cyan-100/70">
                      Books
                    </p>
                  </div>

                  {/* Readers */}

                  <div className="rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <UsersRound className="h-4 w-4 text-cyan-100" />

                      <span className="text-lg font-bold text-white">
                        5K+
                      </span>
                    </div>

                    <p className="mt-1 text-xs text-cyan-100/70">
                      Readers
                    </p>
                  </div>

                  {/* Genres */}

                  <div className="rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <ImageIcon className="h-4 w-4 text-cyan-100" />

                      <span className="text-lg font-bold text-white">
                        50+
                      </span>
                    </div>

                    <p className="mt-1 text-xs text-cyan-100/70">
                      Genres
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Security */}

              <motion.div
                variants={itemVariants}
                className="relative z-10 flex items-center gap-2 text-xs text-cyan-100/70"
              >
                <LockKeyhole className="h-3.5 w-3.5" />

                <span>
                  Your information is securely protected.
                </span>
              </motion.div>
            </div>

            {/* ==========================================
                RIGHT SIDE
            ========================================== */}

            <div className="p-5 sm:p-7 md:p-8 lg:p-8 xl:p-10">
              <div className="mx-auto w-full max-w-xl">
                {/* Mobile Logo */}

                <motion.div
                  variants={itemVariants}
                  className="mb-6 flex items-center gap-3 lg:hidden"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10">
                    <BookOpen className="h-5 w-5 text-cyan-400" />
                  </div>

                  <div>
                    <h1 className="text-lg font-bold text-white">
                      BiblioDrop
                    </h1>

                    <p className="text-[11px] text-slate-500">
                      Discover. Read. Share.
                    </p>
                  </div>
                </motion.div>

                {/* Heading */}

                <motion.div
                  variants={itemVariants}
                  className="mb-6"
                >
                  <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    Welcome back!
                  </h2>

                  <p className="mt-2 text-sm leading-5 text-slate-400">
                    Login to your BiblioDrop account and continue
                    your reading journey.
                  </p>
                </motion.div>

                {/* ==========================================
                    LOGIN FORM
                ========================================== */}

                <Form onSubmit={onSubmit} className="w-full">
                  <Fieldset className="w-full">
                    <Fieldset.Group className="space-y-4">
                      {/* Email */}

                      <motion.div variants={itemVariants}>
                        <TextField
                          isRequired
                          name="email"
                          type="email"
                        >
                          <Label className="mb-2 block text-sm font-medium text-slate-200">
                            Email Address
                          </Label>

                          <Input
                            placeholder="you@example.com"
                            variant="secondary"
                            className="min-h-11 rounded-xl border border-white/10 bg-white/5 text-sm text-white placeholder:text-slate-500 transition-all duration-200 focus:border-cyan-500/50"
                          />

                          <FieldError />
                        </TextField>
                      </motion.div>

                      {/* Password */}

                      <motion.div variants={itemVariants}>
                        <TextField
                          isRequired
                          name="password"
                        >
                          <Label className="mb-2 block text-sm font-medium text-slate-200">
                            Password
                          </Label>

                          <div className="relative">
                            <Input
                              type={
                                showPassword
                                  ? "text"
                                  : "password"
                              }
                              placeholder="Enter your password"
                              variant="secondary"
                              className="min-h-11 w-full rounded-xl border border-white/10 bg-white/5 pr-11 text-sm text-white placeholder:text-slate-500 transition-all duration-200 focus:border-cyan-500/50"
                            />

                            {/* Eye Button */}

                            <button
                              type="button"
                              onClick={() =>
                                setShowPassword(
                                  (prev) => !prev
                                )
                              }
                              aria-label={
                                showPassword
                                  ? "Hide password"
                                  : "Show password"
                              }
                              className="absolute right-3 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center rounded-md p-1 text-slate-400 transition-all duration-200 hover:bg-white/10 hover:text-cyan-400 focus:outline-none"
                            >
                              {showPassword ? (
                                <EyeOff className="h-4 w-4" />
                              ) : (
                                <Eye className="h-4 w-4" />
                              )}
                            </button>
                          </div>

                          <FieldError />
                        </TextField>
                      </motion.div>

                      {/* Login Button */}

                      <motion.div
                        variants={itemVariants}
                        className="pt-1"
                      >
                        <Button
                          type="submit"
                          isDisabled={loading}
                          className="group min-h-11 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-sm font-semibold text-white shadow-lg shadow-cyan-950/20 transition-all duration-300 hover:from-cyan-400 hover:to-blue-500"
                        >
                          {loading ? (
                            <div className="flex items-center gap-2">
                              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />

                              <span>
                                Logging in...
                              </span>
                            </div>
                          ) : (
                            <div className="flex items-center justify-center gap-2">
                              <span>Login</span>

                              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </div>
                          )}
                        </Button>
                      </motion.div>
                    </Fieldset.Group>
                  </Fieldset>
                </Form>

                {/* ==========================================
                    Divider
                ========================================== */}

                <motion.div
                  variants={itemVariants}
                  className="my-5 flex items-center gap-3"
                >
                  <Separator className="flex-1 bg-white/10" />

                  <span className="text-xs text-slate-500">
                    OR
                  </span>

                  <Separator className="flex-1 bg-white/10" />
                </motion.div>

                {/* ==========================================
                    Google
                ========================================== */}

                <motion.div
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.01,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                >
                  <Button
                    type="button"
                    variant="secondary"
                    isDisabled={loading}
                    onPress={handleGoogleSignin}
                    className="min-h-11 w-full rounded-xl border border-white/10 bg-white/5 text-sm font-medium text-slate-200 transition-all duration-300 hover:bg-white/10"
                  >
                    <FcGoogle className="h-5 w-5" />

                    <span>
                      Continue with Google
                    </span>
                  </Button>
                </motion.div>

                {/* ==========================================
                    Register Link
                ========================================== */}

                <motion.div
                  variants={itemVariants}
                  className="mt-5 text-center"
                >
                  <p className="text-sm text-slate-500">
                    Do not have an account?{" "}
                    <Link
                      href="/signup"
                      className="font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
                    >
                      Register
                    </Link>
                  </p>
                </motion.div>

                {/* Terms */}

                <motion.div
                  variants={itemVariants}
                  className="mt-5 text-center"
                >
                  <p className="mx-auto max-w-md text-[11px] leading-5 text-slate-600">
                    By continuing, you agree to our{" "}
                    <Link
                      href="/terms"
                      className="text-slate-400 transition-colors hover:text-cyan-400"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="text-slate-400 transition-colors hover:text-cyan-400"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}

