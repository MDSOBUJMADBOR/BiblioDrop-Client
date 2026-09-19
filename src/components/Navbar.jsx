"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  BookOpen,
  ChevronDown,
  LayoutDashboard,
  LogOut,
  Menu,
  User,
  X,
  Mail,
  ShieldCheck,
} from "lucide-react";

import { authClient, useSession } from "@/lib/auth-client";

const navItems = [
  {
    path: "/",
    text: "Home",
  },
  {
    path: "/books",
    text: "Browse Books",
  },
  {
    path: "/contact",
    text: "Contact Us",
  },
  {
    path: "/about",
    text: "About Us",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  // =====================================================
  // SESSION
  // =====================================================

  const { data: session } = useSession();

  const user = session?.user;
  const userRole = user?.role || "user";

  // =====================================================
  // STATES
  // =====================================================

  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const dropdownRef = useRef(null);

  // =====================================================
  // CLOSE DROPDOWN WHEN CLICKING OUTSIDE
  // =====================================================

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // =====================================================
  // CLOSE MENU WITH ESCAPE
  // =====================================================

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setDropdown(false);
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // =====================================================
  // HIDE NAVBAR ON DASHBOARD
  // IMPORTANT:
  // This is AFTER all hooks.
  // =====================================================

  if (pathname.includes("/dashboard")) {
    return null;
  }

  // =====================================================
  // ACTIVE ROUTE
  // =====================================================

  const isActive = (path) => {
    if (path === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(path);
  };

  // =====================================================
  // USER DATA
  // =====================================================

  const userImage = user?.image || "/default-user.png";

  const userName = user?.name || "User";

  const userEmail = user?.email || "user@example.com";

  // =====================================================
  // LOGOUT
  // =====================================================

  const handleSignOut = async () => {
    try {
      setIsLoggingOut(true);

      await authClient.signOut();

      setDropdown(false);
      setOpen(false);
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  // =====================================================
  // NAVBAR
  // =====================================================

  return (
    <motion.nav
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="
        sticky
        top-0
        z-50
        w-full
        border-b
        border-white/10
        bg-[#0b1d3a]/95
        text-white
        shadow-lg
        shadow-black/10
        backdrop-blur-xl
      "
    >
      {/* =====================================================
          NAVBAR CONTAINER
      ====================================================== */}

      <div
        className="
          mx-auto
          flex
          h-[72px]
          w-full
          max-w-7xl
          items-center
          justify-between
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* =====================================================
            LOGO
        ====================================================== */}

        <motion.div
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="shrink-0"
        >
          <Link
            href="/"
            className="group flex items-center gap-2.5"
          >
            {/* Logo Icon */}

            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-gradient-to-br
                from-blue-500
                to-indigo-600
                shadow-lg
                shadow-blue-500/20
                transition-all
                duration-300
                group-hover:shadow-blue-500/40
              "
            >
              <BookOpen
                size={21}
                strokeWidth={2.2}
                className="text-white"
              />
            </div>

            {/* Desktop Logo */}

            <div className="hidden sm:block">
              <p className="text-lg font-extrabold leading-none tracking-tight">
                Book
                <span className="text-yellow-400">
                  Nest
                </span>
              </p>

              <p
                className="
                  mt-1
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-slate-400
                "
              >
                Your Local Library
              </p>
            </div>

            {/* Mobile Logo */}

            <span className="text-lg font-extrabold sm:hidden">
              Book
              <span className="text-yellow-400">
                Nest
              </span>
            </span>
          </Link>
        </motion.div>

        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}

        <div
          className="
            absolute
            left-1/2
            hidden
            -translate-x-1/2
            items-center
            gap-1
            lg:flex
          "
        >
          {navItems.map((item) => {
            const active = isActive(item.path);

            return (
              <Link
                key={item.path}
                href={item.path}
                className={`
                  group
                  relative
                  rounded-lg
                  px-4
                  py-2.5
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  ${
                    active
                      ? "text-yellow-400"
                      : "text-slate-300 hover:text-white"
                  }
                `}
              >
                {item.text}

                <span
                  className={`
                    absolute
                    bottom-0
                    left-1/2
                    h-0.5
                    -translate-x-1/2
                    rounded-full
                    bg-yellow-400
                    transition-all
                    duration-300
                    ${
                      active
                        ? "w-5/6 opacity-100"
                        : "w-0 opacity-0 group-hover:w-5/6 group-hover:opacity-100"
                    }
                  `}
                />
              </Link>
            );
          })}
        </div>

        {/* =====================================================
            DESKTOP RIGHT SIDE
        ====================================================== */}

        <div className="hidden items-center gap-3 lg:flex">
          {!user ? (
            <>
              {/* Login */}

              <Link
                href="/signin"
                className="
                  flex
                  h-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  px-5
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:border-blue-400/30
                  hover:bg-white/10
                "
              >
                Login
              </Link>

              {/* Register */}

              <Link
                href="/signup"
                className="
                  flex
                  h-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-yellow-400
                  px-5
                  text-sm
                  font-bold
                  text-slate-950
                  shadow-lg
                  shadow-yellow-400/10
                  transition-all
                  duration-300
                  hover:bg-yellow-300
                  hover:shadow-yellow-400/20
                "
              >
                Register
              </Link>
            </>
          ) : (
            /* =================================================
               LOGGED-IN USER
            ================================================== */

            <div
              ref={dropdownRef}
              className="relative"
            >
              {/* Profile Button */}

              <button
                type="button"
                onClick={() =>
                  setDropdown((prev) => !prev)
                }
                className="
                  group
                  flex
                  items-center
                  gap-2.5
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  px-2.5
                  py-1.5
                  transition-all
                  duration-300
                  hover:border-white/20
                  hover:bg-white/10
                "
              >
                {/* Avatar */}

                <div className="relative">
                  <Image
                    src={userImage}
                    alt={userName}
                    width={36}
                    height={36}
                    className="
                      h-9
                      w-9
                      rounded-full
                      border-2
                      border-blue-400/30
                      object-cover
                    "
                  />

                  <span
                    className="
                      absolute
                      bottom-0
                      right-0
                      h-2.5
                      w-2.5
                      rounded-full
                      border-2
                      border-[#0b1d3a]
                      bg-emerald-400
                    "
                  />
                </div>

                {/* Name */}

                <div className="hidden text-left lg:block">
                  <p
                    className="
                      max-w-[110px]
                      truncate
                      text-xs
                      font-semibold
                      text-white
                    "
                  >
                    {userName}
                  </p>

                  <p className="text-[10px] capitalize text-slate-400">
                    {userRole}
                  </p>
                </div>

                {/* Arrow */}

                <ChevronDown
                  size={16}
                  className={`
                    text-slate-400
                    transition-transform
                    duration-300
                    ${
                      dropdown
                        ? "rotate-180 text-white"
                        : ""
                    }
                  `}
                />
              </button>

              {/* =================================================
                  PROFILE DROPDOWN
              ================================================== */}

              <AnimatePresence>
                {dropdown && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                      scale: 0.96,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: 10,
                      scale: 0.96,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeOut",
                    }}
                    className="
                      absolute
                      right-0
                      top-[calc(100%+12px)]
                      z-50
                      w-[290px]
                      overflow-hidden
                      rounded-2xl
                      border
                      border-white/10
                      bg-[#0d244b]/98
                      shadow-2xl
                      shadow-black/30
                      backdrop-blur-xl
                    "
                  >
                    {/* Profile Header */}

                    <div
                      className="
                        border-b
                        border-white/10
                        bg-gradient-to-br
                        from-blue-500/10
                        to-indigo-500/5
                        p-4
                      "
                    >
                      <div className="flex items-center gap-3">
                        <div className="relative shrink-0">
                          <Image
                            src={userImage}
                            alt={userName}
                            width={48}
                            height={48}
                            className="
                              h-12
                              w-12
                              rounded-full
                              border-2
                              border-blue-400/30
                              object-cover
                            "
                          />

                          <span
                            className="
                              absolute
                              bottom-0
                              right-0
                              h-3
                              w-3
                              rounded-full
                              border-2
                              border-[#0d244b]
                              bg-emerald-400
                            "
                          />
                        </div>

                        <div className="min-w-0">
                          <p className="truncate text-sm font-bold text-white">
                            {userName}
                          </p>

                          <div className="mt-1 flex items-center gap-1.5">
                            <Mail
                              size={11}
                              className="shrink-0 text-slate-500"
                            />

                            <p className="truncate text-[11px] text-slate-400">
                              {userEmail}
                            </p>
                          </div>

                          <div className="mt-1.5 flex items-center gap-1.5">
                            <ShieldCheck
                              size={11}
                              className="text-blue-400"
                            />

                            <span className="text-[10px] font-medium capitalize text-blue-300">
                              {userRole} account
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Menu Items */}

                    <div className="p-2">
                      {/* Dashboard */}

                      <Link
                        href={`/dashboard/${userRole}/overview`}
                        onClick={() => setDropdown(false)}
                        className="
                          group
                          flex
                          items-center
                          gap-3
                          rounded-xl
                          px-3
                          py-3
                          transition-all
                          duration-200
                          hover:bg-white/10
                        "
                      >
                        <div
                          className="
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-lg
                            bg-blue-500/10
                            text-blue-400
                            group-hover:bg-blue-500/20
                          "
                        >
                          <LayoutDashboard size={17} />
                        </div>

                        <div className="flex-1">
                          <p className="text-sm font-semibold text-white">
                            Dashboard
                          </p>

                          <p className="text-[10px] text-slate-500">
                            Manage your account
                          </p>
                        </div>

                        <ChevronDown
                          size={15}
                          className="
                            -rotate-90
                            text-slate-600
                            group-hover:text-slate-300
                          "
                        />
                      </Link>

                      {/* Profile */}

                      <Link
                        href="/profile"
                        onClick={() => setDropdown(false)}
                        className="
                          group
                          flex
                          items-center
                          gap-3
                          rounded-xl
                          px-3
                          py-3
                          transition-all
                          duration-200
                          hover:bg-white/10
                        "
                      >
                        <div
                          className="
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-lg
                            bg-violet-500/10
                            text-violet-400
                            group-hover:bg-violet-500/20
                          "
                        >
                          <User size={17} />
                        </div>

                        <div className="flex-1">
                          <p className="text-sm font-semibold text-white">
                            Profile
                          </p>

                          <p className="text-[10px] text-slate-500">
                            View your profile
                          </p>
                        </div>

                        <ChevronDown
                          size={15}
                          className="
                            -rotate-90
                            text-slate-600
                            group-hover:text-slate-300
                          "
                        />
                      </Link>
                    </div>

                    {/* Logout */}

                    <div className="border-t border-white/10 p-2">
                      <button
                        type="button"
                        onClick={handleSignOut}
                        disabled={isLoggingOut}
                        className="
                          flex
                          w-full
                          items-center
                          gap-3
                          rounded-xl
                          px-3
                          py-3
                          text-left
                          transition-all
                          duration-200
                          hover:bg-red-500/10
                          disabled:cursor-not-allowed
                          disabled:opacity-60
                        "
                      >
                        <div
                          className="
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-lg
                            bg-red-500/10
                            text-red-400
                          "
                        >
                          <LogOut size={17} />
                        </div>

                        <div className="flex-1">
                          <p className="text-sm font-semibold text-red-400">
                            {isLoggingOut
                              ? "Logging out..."
                              : "Logout"}
                          </p>

                          <p className="text-[10px] text-slate-500">
                            Sign out of your account
                          </p>
                        </div>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* =====================================================
            MOBILE MENU BUTTON
        ====================================================== */}

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-white/10
            bg-white/5
            text-white
            transition
            hover:bg-white/10
            lg:hidden
          "
        >
          <AnimatePresence
            mode="wait"
            initial={false}
          >
            {open ? (
              <motion.div
                key="close"
                initial={{
                  rotate: -90,
                  opacity: 0,
                }}
                animate={{
                  rotate: 0,
                  opacity: 1,
                }}
                exit={{
                  rotate: 90,
                  opacity: 0,
                }}
              >
                <X size={21} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{
                  rotate: 90,
                  opacity: 0,
                }}
                animate={{
                  rotate: 0,
                  opacity: 1,
                }}
                exit={{
                  rotate: -90,
                  opacity: 0,
                }}
              >
                <Menu size={21} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
            className="
              overflow-hidden
              border-t
              border-white/10
              bg-[#0a1933]
              lg:hidden
            "
          >
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
              {/* Mobile User */}

              {user && (
                <div
                  className="
                    mb-4
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    p-3
                  "
                >
                  <div className="relative shrink-0">
                    <Image
                      src={userImage}
                      alt={userName}
                      width={42}
                      height={42}
                      className="
                        h-[42px]
                        w-[42px]
                        rounded-full
                        border-2
                        border-blue-400/30
                        object-cover
                      "
                    />

                    <span
                      className="
                        absolute
                        bottom-0
                        right-0
                        h-2.5
                        w-2.5
                        rounded-full
                        border-2
                        border-[#0a1933]
                        bg-emerald-400
                      "
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-white">
                      {userName}
                    </p>

                    <p className="truncate text-[11px] text-slate-400">
                      {userEmail}
                    </p>

                    <p className="mt-0.5 text-[10px] capitalize text-blue-400">
                      {userRole} account
                    </p>
                  </div>
                </div>
              )}

              {/* Mobile Navigation */}

              <div className="space-y-1.5">
                {navItems.map((item) => {
                  const active = isActive(item.path);

                  return (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => setOpen(false)}
                      className={`
                        flex
                        items-center
                        justify-between
                        rounded-xl
                        px-4
                        py-3.5
                        text-sm
                        font-medium
                        transition-all
                        duration-200
                        ${
                          active
                            ? "bg-blue-500/10 text-yellow-400"
                            : "text-slate-300 hover:bg-white/5 hover:text-white"
                        }
                      `}
                    >
                      <span>{item.text}</span>

                      <ChevronDown
                        size={16}
                        className="-rotate-90 opacity-40"
                      />
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Auth */}

              {!user ? (
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <Link
                    href="/signin"
                    onClick={() => setOpen(false)}
                    className="
                      flex
                      min-h-11
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/10
                      bg-white/5
                      text-sm
                      font-semibold
                      text-white
                      transition
                      hover:bg-white/10
                    "
                  >
                    Login
                  </Link>

                  <Link
                    href="/signup"
                    onClick={() => setOpen(false)}
                    className="
                      flex
                      min-h-11
                      items-center
                      justify-center
                      rounded-xl
                      bg-yellow-400
                      text-sm
                      font-bold
                      text-slate-950
                      transition
                      hover:bg-yellow-300
                    "
                  >
                    Register
                  </Link>
                </div>
              ) : (
                <div
                  className="
                    mt-4
                    space-y-2
                    border-t
                    border-white/10
                    pt-4
                  "
                >
                  {/* Dashboard */}

                  <Link
                    href={`/dashboard/${userRole}/overview`}
                    onClick={() => setOpen(false)}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-white/10
                      bg-white/5
                      px-4
                      py-3
                      text-sm
                      font-medium
                      text-white
                      transition
                      hover:bg-white/10
                    "
                  >
                    <LayoutDashboard
                      size={18}
                      className="text-blue-400"
                    />

                    Dashboard
                  </Link>

                  {/* Profile */}

                  <Link
                    href="/profile"
                    onClick={() => setOpen(false)}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-white/10
                      bg-white/5
                      px-4
                      py-3
                      text-sm
                      font-medium
                      text-white
                      transition
                      hover:bg-white/10
                    "
                  >
                    <User
                      size={18}
                      className="text-violet-400"
                    />

                    Profile
                  </Link>

                  {/* Logout */}

                  <button
                    type="button"
                    onClick={handleSignOut}
                    disabled={isLoggingOut}
                    className="
                      flex
                      w-full
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-red-500/10
                      bg-red-500/5
                      px-4
                      py-3
                      text-sm
                      font-medium
                      text-red-400
                      transition
                      hover:bg-red-500/10
                      disabled:cursor-not-allowed
                      disabled:opacity-60
                    "
                  >
                    <LogOut size={18} />

                    {isLoggingOut
                      ? "Logging out..."
                      : "Logout"}
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}